import { useCallback, useMemo, useReducer } from "react";

/**
 * Undo/redo for the page builder's block tree.
 *
 * `blocks` in PageBuilder.jsx is the whole page document, and `setBlocks` is
 * handed to around forty call sites across ten files - PanelsLeft, PanelsRight,
 * PageBuilderCanvas, EditorActions, AIPrompts, PageList, Templates,
 * TemplateParts, TemplatePartsEdit, TemplatesLibrary. Wrapping each of those in
 * a "record this edit" call would mean touching every one and would still miss
 * whichever got added next.
 *
 * So this replaces the `useState` behind `blocks` instead. The `setBlocks` it
 * returns takes exactly what React's setter takes - a value or an updater
 * function - and every existing call site keeps working untouched while being
 * recorded. Call sites that want a named entry pass a second argument, which
 * plain React setters ignore anyway.
 *
 *     const { blocks, setBlocks, undo, redo } = useBlockHistory(seed, { limit: 20 });
 *
 *     setBlocks(next);                                        // recorded as "Edit"
 *     setBlocks(next, { label: 'Delete block', discrete: true });
 *
 * Two things that are easy to get wrong and are handled here:
 *
 * 1. Typing must not spend the history. Every keystroke in an options field
 *    runs through `updateBlock`, so "Shop now" is eight separate calls. Without
 *    coalescing, a 20 step history is gone in one label edit and the structural
 *    change before it is unreachable. Consecutive edits that carry the same
 *    label and land within COALESCE_MS of each other therefore fold into a
 *    single entry. Structural edits pass `discrete: true` and never fold.
 *
 * 2. Snapshots must not be aliased. Entries hold references, so a mutator that
 *    writes into a nested array in place would edit the snapshots behind it as
 *    well, and undo would return the state it had already corrupted. The
 *    mutators in PageBuilder.jsx are written to copy the path they change
 *    instead; `replaceSelectedBlock` and `handleMoveBlock` deep clone, and
 *    `deleteBlock` rebuilds with map. Anything added later has to do the same -
 *    this hook cannot defend against it without deep cloning the whole tree on
 *    every keystroke, which is the cost it exists to avoid.
 *
 * Memory: up to `limit + 1` snapshots are held. Edits that copy only the path
 * they touch share structure with the entries around them, so the usual case is
 * far cheaper than `limit` full copies of the page.
 */

/* Long enough to swallow a burst of typing, short enough that two deliberate
   actions in a row stay separate. */
const COALESCE_MS = 500;

const DEFAULT_LABEL = "Edit";

function reducer(state, action) {
	switch (action.type) {

		case "set": {
			const current = state.entries[state.index].blocks;
			const value =
				typeof action.next === "function" ? action.next(current) : action.next;

			/* A setter that returns the state it was given is how the existing
			   mutators say "nothing to do" - handleMoveBlock returns prevBlocks
			   when there is no block to move, replaceSelectedBlock when the
			   target is gone. Those are not edits and must not take a slot. */
			if (value === current) return state;

			const label = action.label || DEFAULT_LABEL;
			/* Anything ahead of the cursor is a redo tail the user has now
			   diverged from. */
			const kept = state.entries.slice(0, state.index + 1);

			const foldable =
				!action.discrete &&
				/* Never fold into entry 0: that is the state the document was
				   loaded in, and it has to stay reachable. */
				state.index > 0 &&
				label === state.lastLabel &&
				action.at - state.lastAt < COALESCE_MS;

			if (foldable) {
				kept[kept.length - 1] = { blocks: value, label, at: action.at };
				return { ...state, entries: kept, index: kept.length - 1, lastLabel: label, lastAt: action.at };
			}

			kept.push({ blocks: value, label, at: action.at });

			/* `limit` counts undoable steps, so hold one more snapshot than
			   that: where the document is now, plus `limit` states to go back
			   through. Oldest goes first. */
			const max = state.limit + 1;
			const capped = kept.length > max ? kept.slice(kept.length - max) : kept;

			return { ...state, entries: capped, index: capped.length - 1, lastLabel: label, lastAt: action.at };
		}

		/* `step` exists rather than having undo work out `index - 1` and dispatch
		   that as a `jump`: two undos batched into one render would both read the
		   same index and land on the same entry. A delta resolved in here
		   composes correctly however many arrive together. */
		case "step":
		case "jump": {
			const target = action.type === "step" ? state.index + action.delta : action.to;
			const to = Math.max(0, Math.min(state.entries.length - 1, target));
			if (to === state.index) return state;
			/* Clearing the fold window stops the next edit merging into the
			   entry just restored, which would rewrite history rather than
			   adding to it. */
			return { ...state, index: to, lastLabel: null, lastAt: 0 };
		}

		case "reset": {
			const blocks = "blocks" in action ? action.blocks : state.entries[state.index].blocks;
			return {
				...state,
				entries: [{ blocks, label: action.label || "Loaded", at: action.at }],
				index: 0,
				lastLabel: null,
				lastAt: 0,
			};
		}

		default:
			return state;
	}
}

function init({ blocks, limit }) {
	return {
		entries: [{ blocks, label: "Loaded", at: 0 }],
		index: 0,
		limit,
		lastLabel: null,
		lastAt: 0,
	};
}

export default function useBlockHistory(initialBlocks, options = {}) {
	const limit = options.limit ?? 20;

	const [state, dispatch] = useReducer(reducer, { blocks: initialBlocks, limit }, init);

	/* `setBlocks` goes into child props and into a useCallback dependency list
	   in PageBuilderCanvas, so it has to keep the same identity across renders.
	   Reading nothing but `dispatch` is what makes that safe: the current blocks
	   are read inside the reducer, never captured here, so an updater function
	   passed from an async callback still sees the latest state. */
	const setBlocks = useCallback((next, meta) => {
		dispatch({
			type: "set",
			next,
			label: meta?.label,
			discrete: meta?.discrete,
			at: Date.now(),
		});
	}, []);

	const jumpTo = useCallback((to) => dispatch({ type: "jump", to }), []);
	const undo = useCallback(() => dispatch({ type: "step", delta: -1 }), []);
	const redo = useCallback(() => dispatch({ type: "step", delta: 1 }), []);

	/* Called with no arguments this keeps the blocks on screen and drops the
	   history around them, which is what a document switch needs. Rest
	   parameters rather than `arguments`, which an arrow function does not
	   have - it would resolve to the hook's own arguments. */
	const resetHistory = useCallback((...args) => {
		dispatch(
			args.length === 0
				? { type: "reset", at: Date.now() }
				: { type: "reset", blocks: args[0], label: args[1], at: Date.now() }
		);
	}, []);

	/* Labels and timestamps only. The UI lists them; handing out the snapshots
	   would invite a consumer to hold a reference and mutate it. */
	const entries = useMemo(
		() => state.entries.map((e, i) => ({ index: i, label: e.label, at: e.at })),
		[state.entries]
	);

	return {
		blocks: state.entries[state.index].blocks,
		setBlocks,
		undo,
		redo,
		jumpTo,
		resetHistory,
		canUndo: state.index > 0,
		canRedo: state.index < state.entries.length - 1,
		entries,
		index: state.index,
		limit,
	};
}
