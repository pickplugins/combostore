"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { TAILWIND_BROWSER_SRC, GENERATED_STYLE_ID } from "./canvasRuntime";


/*
	The canvas, in a document of its own.

	A media query asks the viewport how wide it is, never the element the rule
	lands on, so narrowing a <div> to 390px - which is all the device switcher
	used to do - left every `md:` and `lg:` utility matching against the
	editor's own window. The page then kept its desktop layout at phone width,
	which is the one thing a device preview exists to show.

	An iframe is a viewport. Inside one the width the switcher picks is the
	width the breakpoints are compared against, and that holds for everything
	Tailwind can emit - `sm:`, `max-md:`, `min-[900px]:`, container queries,
	`print:` - without rewriting a stylesheet anywhere.

	It also settles a second problem the canvas had. The dashboard's own
	build-time stylesheet carries utilities for the classes the block templates
	use, because those templates are source files and Tailwind scans them:
	`lg:grid-cols-4` and friends are in the editor's CSS whether the canvas
	wants them or not. Those rules are viewport-bound and unscoped, so no
	amount of work on the stylesheet the editor injects could have stopped them
	styling a 390px preview. In here they are measured against the preview's
	viewport like everything else.

	Three things have to be carried in for blocks to look like themselves:

	  - the editor document's stylesheets, cloned. Blocks are built against the
	    dashboard's base rules - globals.css styles `button`, `input`, `select`
	    and `table` unlayered - and they inherit them today.
	  - the Tailwind browser build, loaded again in here. It compiles the
	    classes it finds in the document it was loaded into, so the editor's
	    copy stops seeing block classes once the blocks live in the frame.
	  - the compiled stylesheet, which EditorActions injects. It reaches this
	    document through `onDocument`.
*/


/* Marks the clones, so a re-sync can replace exactly its own work. */
const CLONE_ATTRIBUTE = "data-canvas-clone";

/* Set on <html> once the frame has been built, so a late `load` event can tell
	 "the browser replaced our document" from "the document is fine". */
const READY_FLAG = "canvasReady";

const FRAME_HTML = [
	"<!doctype html><html><head><meta charset=\"utf-8\">",
	"<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
	"</head><body></body></html>",
].join("");

/*
	The frame's own base rules, appended after the clones so they win.

	`scrollbar-gutter` is the one that matters: globals.css reserves the gutter
	on :root to stop the dashboard shifting sideways, and cloned into a 390px
	frame that quietly takes 15px off the viewport - which moves every
	breakpoint comparison with it.

	`--canvas-min-h` is set from the editor side: the height the canvas area
	leaves, so a short page still looks like a page and an empty canvas is a
	drop target the full height of the screen. The old `100dvh` arithmetic
	cannot do this job in here - inside the frame it would mean the frame's own
	height, which is itself measured from the content.
*/
const FRAME_BASE_CSS = `
html {
	scrollbar-gutter: auto;
	-webkit-text-size-adjust: 100%;
}

body {
	margin: 0;
	background: #ffffff;
	-webkit-font-smoothing: antialiased;
	min-height: var(--canvas-min-h, 32rem);
}
`;

/* Floor for that height, for a window too short to measure anything sensible
	 from. */
const MIN_CANVAS_HEIGHT = 320;

/* The padding the canvas area keeps around the frame (`p-4 sm:p-6`), counted
	 for both edges. */
const CANVAS_AREA_GUTTER = 48;

/* The width transition on the frame element (`duration-200`), after which it
	 is worth telling the frame that its size changed. */
const WIDTH_TRANSITION = 250;


/**
 * The scrollable ancestor the frame sits in, which is what decides how much
 * height the canvas actually has.
 */
function scrollParent(element) {

	var node = element?.parentElement;

	while (node) {
		const overflowY = window.getComputedStyle(node).overflowY;

		if (overflowY === "auto" || overflowY === "scroll") {
			return node;
		}

		node = node.parentElement;
	}

	return null;
}


/**
 * Copy the editor document's stylesheets into the frame.
 *
 * The compiled stylesheet is skipped: EditorActions injects that into the
 * frame itself, at the end of <body>, which is where it has to be to win the
 * ties against the browser build's output.
 *
 * Clones go in front of whatever is already in the frame's <head> so that the
 * browser build's own <style>, which it appends when it boots, keeps coming
 * after them.
 */
function cloneEditorStyles(doc) {

	doc.head.querySelectorAll(`[${CLONE_ATTRIBUTE}]`).forEach(node => node.remove());

	const fragment = doc.createDocumentFragment();

	document.querySelectorAll('link[rel="stylesheet"], style').forEach(node => {

		if (node.id === GENERATED_STYLE_ID) {
			return;
		}

		const clone = node.cloneNode(true);

		clone.setAttribute(CLONE_ATTRIBUTE, "");
		fragment.appendChild(clone);
	});

	doc.head.insertBefore(fragment, doc.head.firstChild);
}


/**
 * Keep the clones in step with the editor document.
 *
 * This is for development above all: an HMR update swaps the stylesheet
 * <link> out from under the page, and without this the frame would keep
 * rendering against the CSS the editor had when it opened.
 */
function watchEditorStyles(doc) {

	const observer = new MutationObserver(records => {

		const touched = records.some(record =>
			[...record.addedNodes, ...record.removedNodes].some(node =>
				node.nodeName === "LINK" || node.nodeName === "STYLE"));

		if (touched) {
			cloneEditorStyles(doc);
		}
	});

	observer.observe(document.head, { childList: true, subtree: true });

	return () => observer.disconnect();
}


/**
 * Carry the webfont variables across.
 *
 * next/font defines `--font-geist-sans` on a class it puts on the editor's
 * <body>, and globals.css - cloned in above - sets the body font from that
 * variable. Without the variable the clone falls through to the generic sans
 * stack, so the canvas would render in a different typeface to the one the
 * blocks were laid out in.
 *
 * Reading them back out of the computed style is the only way to get them
 * without knowing their names, and an engine that leaves custom properties
 * out of that list hands back nothing - in which case the canvas renders in
 * the fallback stack, which is a difference in typeface and not a broken
 * preview.
 */
function copyFontVariables(doc) {

	const computed = window.getComputedStyle(document.body);

	Array.from(computed).forEach(property => {

		if (!property.startsWith("--font-")) {
			return;
		}

		const value = computed.getPropertyValue(property);

		if (value) {
			doc.documentElement.style.setProperty(property, value);
		}
	});
}


const CanvasFrame = (props) => {

	var width = props?.width;
	var className = props?.className;
	var onDocument = props?.onDocument;
	var children = props?.children;

	const frameRef = useRef(null);

	/* The callback goes through a ref so a parent that re-renders with a new
		 function identity does not tear the document down and build it again. */
	const reportRef = useRef(onDocument);

	reportRef.current = onDocument;

	/* The body, not the document: a document that gets rebuilt is the same
		 object, so holding the document alone would leave the portal pointing at
		 a <body> that is no longer in the frame. */
	const [target, setTarget] = useState(null);
	const [contentHeight, setContentHeight] = useState(0);
	const [areaHeight, setAreaHeight] = useState(MIN_CANVAS_HEIGHT);


	useEffect(() => {

		const frame = frameRef.current;

		if (!frame) {
			return;
		}

		var stopWatching = null;

		function setup() {

			const doc = frame.contentDocument;

			if (!doc) {
				return;
			}

			/* A frame with no src is already holding an about:blank document,
				 which is same origin and ours to write to - no request, no load to
				 wait for, and React can portal straight into it. */
			doc.open();
			doc.write(FRAME_HTML);
			doc.close();

			cloneEditorStyles(doc);
			copyFontVariables(doc);

			const base = doc.createElement("style");

			base.textContent = FRAME_BASE_CSS;
			doc.head.appendChild(base);

			const compiler = doc.createElement("script");

			compiler.src = TAILWIND_BROWSER_SRC;
			doc.head.appendChild(compiler);

			stopWatching?.();
			stopWatching = watchEditorStyles(doc);

			doc.documentElement.dataset[READY_FLAG] = "true";

			setTarget(doc.body);
			reportRef.current?.(doc);
		}

		setup();

		/*
			Some browsers fire the initial about:blank load after mount and hand
			the frame a fresh document, which would leave the canvas rendering
			into a body that is no longer attached. The flag is how that case is
			told apart from the ordinary one, where there is nothing to do.
		*/
		function onLoad() {

			if (frame.contentDocument?.documentElement?.dataset?.[READY_FLAG]) {
				return;
			}

			setup();
		}

		frame.addEventListener("load", onLoad);

		return () => {
			frame.removeEventListener("load", onLoad);
			stopWatching?.();
			setTarget(null);
			reportRef.current?.(null);
		};

	}, []);


	/* The frame is as tall as the page inside it, so the canvas area scrolls
		 the editor rather than nesting a second scrollbar inside the preview -
		 and a drag can scroll the page it is dropping onto. */
	useEffect(() => {

		const doc = target?.ownerDocument;

		if (!doc) {
			return;
		}

		const root = doc.documentElement;

		function measure() {
			setContentHeight(Math.ceil(Math.max(target.scrollHeight, root.scrollHeight)));
		}

		measure();

		const resize = new ResizeObserver(measure);

		resize.observe(target);
		resize.observe(root);

		/* Images, webfonts and blocks that fetch their own content all land
			 after the first layout. */
		const mutations = new MutationObserver(measure);

		mutations.observe(target, { subtree: true, childList: true, attributes: true, characterData: true });

		doc.defaultView?.addEventListener("load", measure);

		return () => {
			resize.disconnect();
			mutations.disconnect();
			doc.defaultView?.removeEventListener("load", measure);
		};

	}, [target]);


	/* How much room the canvas area leaves. Watched rather than read once:
		 folding a panel away or resizing the window changes it. */
	useEffect(() => {

		const frame = frameRef.current;

		if (!frame) {
			return;
		}

		const scroller = scrollParent(frame);

		function measure() {
			const available = (scroller?.clientHeight ?? window.innerHeight) - CANVAS_AREA_GUTTER;

			setAreaHeight(Math.max(MIN_CANVAS_HEIGHT, Math.round(available)));
		}

		measure();

		const resize = new ResizeObserver(measure);

		if (scroller) {
			resize.observe(scroller);
		}

		window.addEventListener("resize", measure);

		return () => {
			resize.disconnect();
			window.removeEventListener("resize", measure);
		};

	}, []);


	useEffect(() => {

		target?.ownerDocument?.documentElement?.style?.setProperty("--canvas-min-h", `${areaHeight}px`);

	}, [target, areaHeight]);


	/*
		Tell the frame that its size changed.

		Blocks run in the editor's JavaScript realm even though they render in
		here, so a slider working out how many slides fit is listening to the
		editor's window, which does not fire a resize when the frame element is
		the thing that changed width.
	*/
	useEffect(() => {

		const view = target?.ownerDocument?.defaultView;

		if (!view) {
			return;
		}

		const timer = view.setTimeout(() => view.dispatchEvent(new view.Event("resize")), WIDTH_TRANSITION);

		return () => view.clearTimeout(timer);

	}, [target, width]);


	return (
		<>
			<iframe
				ref={frameRef}
				title="Page canvas"
				className={className}
				style={{
					/* A device width is a viewport width, so it has to be the box
					   the page gets: against the border-box default the editor's
					   preflight sets, the sheet's own 1px border comes out of it
					   and a preview labelled 390px lays the page out in 388.
					   Desktop has no width to protect - it fills the area - and
					   stays border-box so it cannot overhang it. */
					boxSizing: width ? "content-box" : "border-box",
					width: width ?? "100%",
					maxWidth: "100%",
					height: Math.max(contentHeight, areaHeight),
				}} />

			{target && createPortal(children, target)}
		</>
	);
};



export default CanvasFrame;
