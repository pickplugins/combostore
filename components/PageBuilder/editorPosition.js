/*
	The canvas wrappers add `relative` so editor chrome inside a block (drop
	hints, toolbars) has something to anchor to. Added unconditionally, it
	fought the block's own position: `relative absolute` resolves by
	stylesheet order, not class order, and `relative` won - so a template's
	floating cards, background blobs and hover overlays dropped into normal
	flow on the canvas, taking grid cells and pushing content around, while
	the storefront (which never adds the class) rendered them correctly.

	Returns `relative` only when the block's classes set no position of their
	own, at any breakpoint or state (`lg:absolute`, `!fixed`, ...).
*/
const POSITION_CLASS = /(^|\s)!?(?:[\w-]+(?:\[[^\]]*\])?:)*!?(?:static|fixed|absolute|relative|sticky)!?(?=\s|$)/;

export function editorRelative(classes) {
	return POSITION_CLASS.test(String(classes ?? '')) ? '' : 'relative';
}

export default editorRelative;
