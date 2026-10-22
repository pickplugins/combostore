import PropTypes from "prop-types";
import React, { Children } from "react";
import { useState, useEffect, useMemo } from "react";
import { IconHeading, IconColumns, IconSection, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX, IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand, IconLayoutSidebarRightCollapse, IconLayoutSidebarRightExpand } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import PanelsLeft from './PanelsLeft';
import AIPrompts from './AIPrompts';
import PanelsRight from './PanelsRight';
import PageBuilderCanvas from './PageBuilderCanvas';
import EditorActions from './EditorActions';
import { ThemeProvider } from "./context/ThemeContext";
import coreElements from "./ElementsDefinition";
import useBlockHistory from "./useBlockHistory";
import registry from "../../extensions";
import { useExtensionsStore } from "../../store/useExtensionsStore";


/* Canvas preview widths live in ./breakpoints.js, next to the breakpoints
   they correspond to. */

const PANEL_TOGGLE =
	"inline-flex h-8 w-8 items-center justify-center !rounded-lg !border-0 !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-white/10 hover:!text-white";


const PageBuilder = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX, PageBuilderPrams } = useCounterStore()



	let _n = 0;
	const uid = () => `b${++_n}${Date.now().toString(36)}`;
	const cuid = () => `c${++_n}${Date.now().toString(36)}`;

	const [selectedId, setSelectedId] = useState(null);
	const [pageData, setpageData] = useState(null);

	/*
		The element palette is core's list plus the blocks the active extensions
		register.

		Merged here rather than inside ElementsDefinition.js because activation
		is runtime state in a store, and that module is a plain export with no
		way to read one. This is also the only consumer: `elements` goes to the
		palette and to handleMoveBlock, which looks up the dragged type in it.

		A definition whose `type` core already has is dropped - `elements.find`
		returns the first match, so an extension could otherwise shadow a core
		block in the palette while BlockPreview still rendered core's.
	*/
	const activeExtensionIds = useExtensionsStore((s) => s.activeIds);
	const hydrateExtensions = useExtensionsStore((s) => s.hydrate);

	useEffect(() => { hydrateExtensions(); }, [hydrateExtensions]);

	const elements = useMemo(() => {
		const extras = registry.elementDefinitions(activeExtensionIds);
		if (!extras.length) return coreElements;

		const coreTypes = new Set(coreElements.map((e) => e.type));
		const usable = extras.filter((def) => {
			if (coreTypes.has(def.type)) {
				console.warn(`[extensions] element type "${def.type}" already exists in core - skipped`);
				return false;
			}
			return true;
		});

		return usable.length ? [...coreElements, ...usable] : coreElements;
	}, [activeExtensionIds]);

	/* Editor chrome state. The two panels take 650px of a 1440px laptop
	   between them, which leaves the canvas narrower than the page being
	   designed, so either side can be folded away. */
	const [device, setDevice] = useState('Desktop');
	const [leftOpen, setLeftOpen] = useState(true);
	const [rightOpen, setRightOpen] = useState(true);

	/*
		The canvas renders in a frame of its own, so that the device switcher
		changes a viewport rather than the width of a div - see CanvasFrame.

		Its document is held here because both sides of the editor need it: the
		canvas builds it, and the toolbar injects the compiled stylesheet into
		it. Null until the frame has built one.
	*/
	const [canvasDoc, setCanvasDoc] = useState(null);

	const [loading, setloading] = useState(false);
	/*
		Fixed ids for the two seed blocks.

		They used to call `uid()`, which ends in `Date.now().toString(36)`. The
		initial state is evaluated once on the server and again on the client,
		milliseconds apart, so the two runs produced different ids and React
		reported a hydration mismatch on every load of the editor - which it
		does not patch up, leaving the canvas rendered from markup the client
		never agreed with. Ids minted in response to a user action are fine;
		only the initial render has to agree with itself.
	*/
	/*
		`blocks` is behind a history rather than a plain useState, so that every
		edit is undoable. The `setBlocks` it returns takes what React's setter
		takes, which is why none of the forty-odd call sites that receive it as a
		prop had to change - see useBlockHistory.js. Twenty undoable steps.

		Call sites here pass a label so the history list reads as actions rather
		than twenty rows of "Edit", and mark the structural ones `discrete` so
		they are never folded into the edit before them.
	*/
	const {
		blocks,
		setBlocks,
		undo,
		redo,
		jumpTo: jumpHistory,
		resetHistory,
		canUndo,
		canRedo,
		entries: historyEntries,
		index: historyIndex,
		limit: historyLimit,
	} = useBlockHistory([
		{ id: 'seed-heading', type: "heading", options: { text: "Build Pages Visually.", tag: "h1", }, cssSelectors: { '*': {} }, },
		{ id: 'seed-text', type: "text", options: { text: "Build Pages Visually.", tag: "h1", }, cssSelectors: { '*': {} }, },

	], { limit: 20 });


	const selectedBlock = (() => {
		const findRecursive = (items) => {
			for (const item of items) {
				if (item.id === selectedId) return item;
				if (item.children) {
					const found = findRecursive(item.children);
					if (found) return found;
				}
			}
			return null;
		};
		return findRecursive(blocks);
	})();

	const deleteBlock = () => {
		/*
			Rebuilds each branch it passes through rather than assigning into
			`b.children`.

			The previous version walked a shallow copy and wrote the filtered
			array back onto the node it was visiting, so the nested arrays it
			touched were the same objects the earlier state was holding. That was
			invisible while the old state was thrown away; with a history keeping
			references to it, a delete would have reached back and changed the
			snapshot it was supposed to be undoable to.
		*/
		const deleteRecursive = (items) => items
			.filter(b => b.id !== selectedId)
			.map(b => (b.children ? { ...b, children: deleteRecursive(b.children) } : b));

		setBlocks(deleteRecursive(blocks), { label: 'Delete block', discrete: true });
		setSelectedId(null);
	};

	const updateBlock = (k, v) => {

		//




		const updateRecursive = (items) => {
			return items.map(b => {

				// 

				if (b.id === selectedId) {
					return { ...b, [k]: v };
				}

				if (b.children) {
					return { ...b, children: updateRecursive(b.children) };
					// return { ...b, prams: { ...b, children: updateRecursive(b.children) } };
				}

				return b;
			});
		};


		/*
			Not `discrete`: this is the path every options panel writes through,
			including the text inputs, so it fires once per keystroke. Sharing
			one label lets a run of them fold into a single history entry
			instead of spending the whole history on one label edit.
		*/
		setBlocks(updateRecursive([...blocks]), { label: 'Edit options' });
	};

	const duplicateBlock = () => {
		const findAndClone = (items) => {
			const index = items.findIndex(b => b.id === selectedId);
			if (index !== -1) {
				const b = items[index];
				const cl = JSON.parse(JSON.stringify(b)); // Deep clone
				cl.id = uid();
				// Helper to regenerate IDs recursively
				const regenIds = (item) => {
					if (item?.children) {
						item.children.forEach(c => {
							c.id = uid();
							regenIds(c);
						});
					}
				};
				regenIds(cl);
				items.splice(index + 1, 0, cl);
				return { items, newId: cl.id };
			}
			for (const item of items) {
				if (item.children) {
					const result = findAndClone(item.children);
					if (result) {
						item.children = result.items;
						return { items, newId: result.newId };
					}
				}
			}
			return null;
		};
		/*
			Deep cloned first because findAndClone splices into the arrays it
			walks. On a shallow copy those are the arrays the previous state
			holds, so a duplicate would also appear in the snapshot behind it -
			the same aliasing deleteBlock had. replaceSelectedBlock and
			handleMoveBlock already clone for this reason.
		*/
		const result = findAndClone(JSON.parse(JSON.stringify(blocks)));
		if (result) {
			setBlocks(result.items, { label: 'Duplicate block', discrete: true });
			setSelectedId(result.newId);
		}
	};









	const pasteAfterBlock = (clipboardData) => {



		const findAndPaste = (items) => {

			console.log(selectedId);

			if (selectedId == null) {
				var index = 0;

			} else {
				var index = items.findIndex((b) => b.id === selectedId);

			}


			if (index !== -1) {
				// Deep clone clipboard data
				const pastedBlock = JSON.parse(JSON.stringify(clipboardData));

				// Regenerate the root ID
				pastedBlock.id = uid();

				// Regenerate IDs recursively
				const regenIds = (item) => {
					if (item?.children) {
						item.children.forEach((child) => {
							child.id = uid();
							regenIds(child);
						});
					}
				};

				regenIds(pastedBlock);

				// Insert after selected block
				items.splice(index + 1, 0, pastedBlock);

				return {
					items,
					newId: pastedBlock.id,
				};
			}

			// Search recursively inside children
			for (const item of items) {
				if (item.children) {
					const result = findAndPaste(item.children);

					if (result) {
						item.children = result.items;

						return {
							items,
							newId: result.newId,
						};
					}
				}
			}

			return null;
		};

		/* Deep cloned for the same reason as duplicateBlock: findAndPaste
		   splices into the arrays it walks. */
		const result = findAndPaste(JSON.parse(JSON.stringify(blocks)));

		if (result) {
			setBlocks(result.items, { label: 'Paste block', discrete: true });
			setSelectedId(result.newId);
		}
	};







	const handlePasteBlock = async (clipboardData) => {

		try {

			// if (clipboardData = null) {
			// 	const text = await navigator.clipboard.readText();
			// 	clipboardData = JSON.parse(text);
			// }

			pasteAfterBlock(clipboardData);
		} catch (error) {
			console.error("Invalid clipboard block:", error);
		}
	};



	const replaceSelectedBlock = (clipboardData) => {
		if (selectedId == null) return; // nothing selected, nothing to replace

		// Regenerate IDs recursively
		const regenIds = (item) => {
			if (item?.children) {
				item.children.forEach((child) => {
					child.id = uid();
					regenIds(child);
				});
			}
		};

		// Deep clone so the clipboard data is never mutated
		const newBlock = JSON.parse(JSON.stringify(clipboardData));
		newBlock.id = uid();
		regenIds(newBlock);

		const replaceRecursive = (items) => {
			const index = items.findIndex((b) => b.id === selectedId);

			if (index !== -1) {
				items.splice(index, 1, newBlock); // replace instead of insert after
				return true;
			}

			for (const item of items) {
				if (item.children && replaceRecursive(item.children)) {
					return true;
				}
			}
			return false;
		};

		setBlocks((prevBlocks) => {
			const cloned = JSON.parse(JSON.stringify(prevBlocks));
			const found = replaceRecursive(cloned);
			return found ? cloned : prevBlocks;
		}, { label: 'Replace block', discrete: true });

		setSelectedId(newBlock.id);
	};

	const handleReplaceBlock = async (clipboardData) => {
		try {
			if (!clipboardData) return;
			replaceSelectedBlock(clipboardData);
		} catch (error) {
			console.error("Invalid clipboard block:", error);
		}
	};












	const handleMoveBlock = (source, targetId, position) => {
		// source can be { paletteType: 'heading' } or { canvasBlockId: 'b1...' }
		const { paletteType, canvasBlockId } = source;


		setBlocks(prevBlocks => {
			let newBlocks = JSON.parse(JSON.stringify(prevBlocks)); // Deep clone
			let blockToMove = null;

			// 1. Find/Create the block to move
			if (paletteType) {
				const pal = elements.find(x => x.type === paletteType);
				if (pal) {

					var children = pal?.children || undefined;
					var options = pal?.options || undefined;
					var cssSelectors = pal?.cssSelectors || undefined;

					blockToMove = { id: uid(), type: pal.type, options, cssSelectors, children };
				}
			} else if (canvasBlockId) {
				// Prevent moving into itself
				if (canvasBlockId === targetId && position === 'inside') return prevBlocks;

				const findAndRemove = (list) => {
					const idx = list.findIndex(b => b.id === canvasBlockId);
					if (idx !== -1) {
						[blockToMove] = list.splice(idx, 1);
						return true;
					}
					for (let b of list) {
						if (b?.children) {
							if (findAndRemove(b.children)) return true;
						}
					}
					return false;
				};
				findAndRemove(newBlocks);
			}

			if (!blockToMove) return prevBlocks;

			// 2. Insert into target position
			const insertRecursive = (list) => {
				const idx = list.findIndex(b => b.id === targetId);
				if (idx !== -1) {
					if (position === 'before') {
						list.splice(idx, 0, blockToMove);
					} else if (position === 'after') {
						list.splice(idx + 1, 0, blockToMove);
					} else if (position === 'inside') {
						const target = list[idx];
						if (!target.options) target.options = {};
						// if (!target.children) target.children = [];
						if (target.children) {
							target?.children?.push(blockToMove);
						} else {
							list.splice(idx + 1, 0, blockToMove);

						}

					}
					return true;
				}
				for (let b of list) {
					if (b?.children) {
						if (insertRecursive(b.children)) return true;
					}
				}
				return false;
			};

			if (targetId === 'root') {
				newBlocks.push(blockToMove);
			} else {
				insertRecursive(newBlocks);
			}

			//setSelectedId(blockToMove.id);
			return newBlocks;
		}, { label: paletteType ? 'Add block' : 'Move block', discrete: true });
	};



	function fetchPosts() {




		var postData = JSON.stringify({});
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_expenses", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {





						setloading(false);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	useEffect(() => {

		fetchPosts();
	}, []);


	/*
		Opening a different document is not an edit.

		Every load path - PageList, Templates, TemplateParts, TemplatePartsEdit -
		calls `setpageData` and then `setBlocks` in the same tick, so by the time
		this runs the new page is already on the canvas and the history holds one
		entry for it. Dropping that history is what stops undo walking back into
		the page that was open before, which the user could then save over this
		one.

		Keyed on the loaded page's id, not on `pageData` itself: a load is the
		only thing that calls `setpageData`, but keying on the object would also
		fire for any future caller that rebuilds it.
	*/
	const loadedPageId = pageData?.id ?? null;
	useEffect(() => {
		resetHistory();
	}, [loadedPageId, resetHistory]);

	/*
		Undo and redo from the keyboard: ctrl/cmd+Z, and ctrl/cmd+shift+Z or
		ctrl+Y to come forward again.

		Bound on the editor's document and on the canvas frame's, because the
		canvas renders inside an iframe and a keydown in there never reaches this
		window - without the second binding the shortcut would be dead exactly
		when the user is working on the page.

		Left alone while focus is in a field, so the browser's own undo still
		applies to the text being typed rather than reverting the whole page.
	*/
	useEffect(() => {
		const onKeyDown = (ev) => {
			if (!(ev.metaKey || ev.ctrlKey) || ev.altKey) return;

			const key = ev.key?.toLowerCase();
			if (key !== 'z' && key !== 'y') return;

			const el = ev.target;
			const tag = el?.tagName;
			if (el?.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

			ev.preventDefault();

			if (key === 'y' || ev.shiftKey) redo();
			else undo();
		};

		const docs = [document, canvasDoc].filter(Boolean);
		docs.forEach(d => d.addEventListener('keydown', onKeyDown));
		return () => docs.forEach(d => d.removeEventListener('keydown', onKeyDown));
	}, [undo, redo, canvasDoc]);


	function onLoadPage() { }


	const themeConfig = {
		colors: {
			primary: "#2563eb",
			secondary: "#f59e0b",
		},
	};

	/*
		The editor is a fixed app shell, not a document: a full-width toolbar
		over three columns that each scroll on their own.

		It used to be `fixed w-full` wrapping a plain `flex` of three `h-screen`
		children, with the toolbar buried inside the right-hand panel. Nothing
		established a height for the row, so the columns each reached for the
		viewport independently and the toolbar - the one piece that is about the
		page rather than the selection - was only reachable by scrolling a
		300px-wide panel. `min-h-0` on the row and on each column is what lets
		them scroll inside the shell instead of growing it.
	*/
	return (
		<div className="fixed inset-0 flex flex-col overflow-hidden bg-gray-100">

			<EditorActions
				blocks={blocks}
				setBlocks={setBlocks}
				elements={elements}
				selectedBlock={selectedBlock}
				pageData={pageData}
				setpageData={setpageData}
				device={device}
				setDevice={setDevice}
				canvasDoc={canvasDoc}
				onUndo={undo}
				onRedo={redo}
				canUndo={canUndo}
				canRedo={canRedo}
				historyEntries={historyEntries}
				historyIndex={historyIndex}
				historyLimit={historyLimit}
				onJumpHistory={jumpHistory}
				leftSlot={
					<button
						type="button"
						title={leftOpen ? "Hide elements panel" : "Show elements panel"}
						aria-label={leftOpen ? "Hide elements panel" : "Show elements panel"}
						aria-expanded={leftOpen}
						onClick={() => setLeftOpen(!leftOpen)}
						className={PANEL_TOGGLE}>
						{leftOpen
							? <IconLayoutSidebarLeftCollapse size={18} />
							: <IconLayoutSidebarLeftExpand size={18} />}
					</button>
				}
				rightSlot={
					<button
						type="button"
						title={rightOpen ? "Hide settings panel" : "Show settings panel"}
						aria-label={rightOpen ? "Hide settings panel" : "Show settings panel"}
						aria-expanded={rightOpen}
						onClick={() => setRightOpen(!rightOpen)}
						className={PANEL_TOGGLE}>
						{rightOpen
							? <IconLayoutSidebarRightCollapse size={18} />
							: <IconLayoutSidebarRightExpand size={18} />}
					</button>
				}
			/>

			<div className="flex min-h-0 flex-1">

				{/* Width animates to zero rather than unmounting, so the palette
				    keeps its open groups and scroll position across a collapse. */}
				<aside
					className={`scroll-thin shrink-0 overflow-y-auto overflow-x-hidden border-r border-gray-200 bg-white transition-[width] duration-200 ease-out ${leftOpen ? "w-[320px]" : "w-0 border-r-0"}`}>
					<div className="w-[320px]">
						<PanelsLeft handleMoveBlock={handleMoveBlock} selectedBlock={selectedBlock} selectedId={selectedId} setSelectedId={setSelectedId} elements={elements} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} handlePasteBlock={handlePasteBlock} onLoadPage={onLoadPage} />
					</div>
				</aside>

				<div className="scroll-thin min-w-0 flex-1 overflow-auto bg-gray-100">

					<ThemeProvider value={{ themeConfig: themeConfig }}>
						<PageBuilderCanvas handleMoveBlock={handleMoveBlock} blocks={blocks} setBlocks={setBlocks} elements={elements} selectedId={selectedId} setSelectedId={setSelectedId} selectedBlock={selectedBlock} pageData={pageData} device={device} onDocument={setCanvasDoc} />
					</ThemeProvider>

					{/* <pre className="whitespace-pre-wrap p-4 bg-gray-100">
						<code className="break-word">
							{JSON.stringify(blocks)}
						</code>
					</pre> */}

				</div>

				<aside
					className={`scroll-thin shrink-0 overflow-y-auto overflow-x-hidden border-l border-gray-200 bg-white transition-[width] duration-200 ease-out ${rightOpen ? "w-[320px]" : "w-0 border-l-0"}`}>
					<div className="w-[320px]">
						<PanelsRight handleMoveBlock={handleMoveBlock} selectedBlock={selectedBlock} blocks={blocks} setBlocks={setBlocks} elements={elements} deleteBlock={deleteBlock} updateBlock={updateBlock} duplicateBlock={duplicateBlock} handlePasteBlock={handlePasteBlock} handleReplaceBlock={handleReplaceBlock} pageData={pageData} setpageData={setpageData} />
					</div>
				</aside>

			</div>

		</div>
	);
};



export default PageBuilder;
