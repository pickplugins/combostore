"use client";

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { IconHome, IconDeviceFloppy, IconPaintFilled, IconCopy, IconClipboard, IconSettings, IconAi, IconListDetails, IconDeviceDesktop, IconDeviceTablet, IconDeviceMobile, IconFileText, IconArrowBackUp, IconArrowForwardUp, IconHistory, IconCheck, IconLayoutBottombarInactive, IconLayoutNavbarInactive, IconLayoutNavbar, IconLayoutBottombar } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import { useCounterStore } from '../../store/useCounterStore';
import Spinner from '../../components/Spinner';
import Link from "next/link";
import AIPrompts from './AIPrompts';
import { GENERATED_STYLE_ID } from './canvasRuntime';
import PopoverButton from '../../components/PopoverButton';

// lib/generateTailwindCSS is deliberately not imported here. It pulls in
// @tailwindcss/node, which needs `module`, `url` and lightningcss's native
// binary, so it cannot run in the browser. The compile happens server side,
// in app/api/tailwind-css/route.js, which this component calls on save and
// whenever the blocks' classes change.


// import DropDown from "../../../components/DropDown";
// import CssClassPicker from "../CssClassPicker";
// import CssSelectors from "../CssSelectors";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


/* Global CSS styles `button` with unlayered rules, so it beats Tailwind
	 utilities and these have to be marked important to land. */
const TOOL_BUTTON =
	"inline-flex h-9 w-9 items-center justify-center !rounded-lg !border-0 !bg-white/5 !px-0 !py-0 !text-gray-300 !shadow-none transition-colors hover:!bg-white/15 hover:!text-white";

const DANGER_BUTTON =
	"inline-flex h-9 w-9 items-center justify-center !rounded-lg !border-0 !bg-white/5 !px-0 !py-0 !text-gray-300 !shadow-none transition-colors hover:!bg-red-500/25 hover:!text-red-300";

/* Undo and redo read as unavailable rather than just doing nothing at the ends
	 of the history, which is the only feedback that there is nothing behind the
	 current state. */
const TOOL_BUTTON_OFF =
	"inline-flex h-9 w-9 items-center justify-center !rounded-lg !border-0 !bg-white/5 !px-0 !py-0 !text-gray-600 !shadow-none !cursor-not-allowed";

/* `at` is Date.now() from the reducer, and 0 for the entry a document was
	 loaded in - which has no meaningful time. */
function formatEditTime(at) {
	if (!at) return "";
	try {
		return new Date(at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
	} catch (e) {
		return "";
	}
}

const DEVICES = [
	{ id: 'Desktop', label: 'Desktop', icon: IconDeviceDesktop },
	{ id: 'Tablet', label: 'Tablet (820px)', icon: IconDeviceTablet },
	{ id: 'Mobile', label: 'Mobile (390px)', icon: IconDeviceMobile },
];


/* GENERATED_STYLE_ID - the <style> the compiled stylesheet lives in - is
	 shared with CanvasFrame through ./canvasRuntime: the frame clones the
	 editor's stylesheets and has to leave this one alone, because this is what
	 writes it. */

/**
 * Put the compiled stylesheet into the canvas document.
 *
 * `doc` is the canvas frame's document, not the editor's: the blocks render
 * in a frame of their own so that breakpoints are measured against the
 * previewed width, and a stylesheet in the editor document would not reach
 * them. Nothing happens until the frame reports its document, and the callers
 * all re-run when it does.
 *
 * It goes last in <body> rather than in <head> on purpose: the Tailwind
 * browser build writes its own <style> into <head>, so this is the only place
 * the stored sheet is guaranteed to come after it in document order and win
 * the ties between rules of equal specificity. What the canvas shows is then
 * what the storefront will get from the saved CSS, not what the CDN happens to
 * generate.
 *
 * An empty stylesheet removes the tag: a page with no classes, or a compile
 * that failed, should not leave the previous page's CSS behind.
 */
function injectGeneratedCss(css, doc) {


	if (!doc?.body) {
		return;
	}

	var style = doc.getElementById(GENERATED_STYLE_ID);

	/* WP hands the stored stylesheet back the way post meta holds it: a single
		 element array, and an empty array when nothing was ever saved. An array
		 is truthy in JS, so without this a page with no CSS would still get an
		 empty <style> tag. The compiler returns a plain string, hence both. */
	var sheet = Array.isArray(css)
		? css.filter(part => typeof part === "string").join("\n")
		: (typeof css === "string" ? css : "");

	sheet = sheet.trim();

	if (!sheet) {
		style?.remove();
		return;
	}

	if (!style) {
		style = doc.createElement("style");
		style.id = GENERATED_STYLE_ID;
		style.setAttribute("data-generated-by", "page-builder");
	}

	style.textContent = sheet;

	/* Appending a node already in the document moves it, which is what keeps
		 the sheet last even after something else writes to <body>. */
	doc.body.appendChild(style);
}


/* How long class edits are left to settle before compiling. Picking a class
	 from the dropdown is one edit, but typing in the class textarea is one per
	 keystroke, and every compile is a round trip to the Node-only compiler. */
const LIVE_COMPILE_DELAY = 500;


/* Compiled stylesheets, by class signature. Turning a class off and back on,
	 undoing, and moving between two pages are all ordinary in an editor, and
	 each would otherwise ask the server again for a sheet it just built. Bounded
	 because the editor stays open for hours and every edit mints a signature. */
const CSS_CACHE = new Map();
const CSS_CACHE_MAX = 60;

function rememberCss(signature, css) {

	/* Deleting first moves a re-set entry to the end: a Map iterates in
		 insertion order, which is what makes the oldest one the evictable one. */
	CSS_CACHE.delete(signature);
	CSS_CACHE.set(signature, css);

	while (CSS_CACHE.size > CSS_CACHE_MAX) {
		CSS_CACHE.delete(CSS_CACHE.keys().next().value);
	}
}


/**
 * Every Tailwind class anywhere in the page data.
 *
 * Classes sit under `cssSelectors[selector].classes` on a block, but this
 * walks for the key rather than that path: blocks nest through `children`,
 * elements carry their own option objects, and some keep classes a level
 * deeper again. Anything named `classes` holding a string is a class list.
 */
function collectTailwindClasses(data) {
	const classes = new Set();

	function walk(value) {
		if (Array.isArray(value)) {
			value.forEach(walk);
			return;
		}

		if (!value || typeof value !== "object") {
			return;
		}

		Object.entries(value).forEach(([key, child]) => {
			if (key === "classes" && typeof child === "string") {
				child
					.split(/\s+/)
					.filter(Boolean)
					.forEach((className) => classes.add(className));

				return;
			}

			walk(child);
		});
	}

	walk(data);

	return [...classes];
}


/**
 * The class list in a form that changes only when the set of classes does.
 *
 * This is what a stylesheet actually depends on, and it is sorted for a
 * reason: it doubles as the cache key and as the compile effect's dependency,
 * so moving a block or renaming a selector - which reorders the walk without
 * changing what it finds - must not read as a different page. The order costs
 * nothing either way, since Tailwind emits utilities in its own order rather
 * than the order the candidates arrive in.
 */
function tailwindClassSignature(data) {
	return collectTailwindClasses(data).sort().join(" ");
}


/**
 * Ask the route handler for the stylesheet a class list compiles to.
 *
 * Throws on anything that is not a compiled sheet, an aborted request
 * included; the caller decides whether that is worth telling the user about.
 */
async function requestCss(classes, signal) {

	const response = await fetch("/api/tailwind-css", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ classes }),
		signal,
	});

	const res = await response.json();

	if (!response.ok || !res?.success) {
		throw new Error(res?.message ?? `Server answered ${response.status}.`);
	}

	return res?.css ?? "";
}


const EditorActions = (props) => {

	var pageData = props?.pageData;
	var setpageData = props?.setpageData;
	var blocks = props?.blocks;
	var setBlocks = props?.setBlocks;
	var elements = props?.elements;
	var selectedBlock = props?.selectedBlock;
	/* Canvas chrome owned by PageBuilder; this component is just where the
		 controls for it live. */
	var device = props?.device;
	var setDevice = props?.setDevice;
	/* The canvas frame's document, which is where the compiled stylesheet has
		 to go: the blocks render in there, not in the editor's document. Null
		 until the frame has built it. */
	var canvasDoc = props?.canvasDoc;
	var leftSlot = props?.leftSlot;
	var rightSlot = props?.rightSlot;
	/* Edit history, owned by PageBuilder through useBlockHistory. `historyEntries`
		 is labels and timestamps only - the snapshots stay inside the hook. */
	var onUndo = props?.onUndo;
	var onRedo = props?.onRedo;
	var canUndo = props?.canUndo;
	var canRedo = props?.canRedo;
	var historyEntries = props?.historyEntries ?? [];
	var historyIndex = props?.historyIndex ?? 0;
	var historyLimit = props?.historyLimit ?? 20;
	var onJumpHistory = props?.onJumpHistory;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

	const [loading, setloading] = useState(false);
	const [aiOpen, setaiOpen] = useState(false);
	const [historyOpen, sethistoryOpen] = useState(false);
	/* True only for the length of a compile the user did not ask for - the one
		 that follows a class change. Save has its own spinner. */
	const [cssCompiling, setcssCompiling] = useState(false);



	/* What the stylesheet depends on: the set of classes anywhere in the tree.
		 Editing text, dragging a block and renaming a selector each mint a new
		 `blocks` without changing it, and none of them should compile. */
	const classSignature = useMemo(() => tailwindClassSignature(blocks), [blocks]);



	/* A page that was saved before carries its stylesheet, so loading one puts
		 that CSS straight into the canvas - immediately, rather than after the
		 compile below - and saving replaces it. A page loaded before the frame
		 has a document is styled as soon as it reports one, which is what
		 `canvasDoc` is doing in the dependencies.

		 There used to be an unmount effect pulling the tag back out, because
		 these utilities are unscoped and were being injected into the dashboard's
		 own document. They go into the frame now, which the editor takes with it
		 when it leaves, so there is nothing left to clean up. */
	useEffect(() => {


		injectGeneratedCss(pageData?.style ?? "", canvasDoc);



	}, [pageData?.style, canvasDoc]);


	/**
	 * Keep the injected stylesheet in step with the classes on the canvas.
	 *
	 * The stored CSS is only ever as new as the last save, so a class added in
	 * the panel used to be styled on the canvas by the Tailwind browser build
	 * and by nothing else: the sheet the storefront will actually get knew
	 * nothing about it until Save. Compiling on every class change means the
	 * canvas is showing the stored stylesheet throughout the edit rather than
	 * only after it, so a utility the browser build resolves but the stored
	 * sheet does not shows up while there is still something to do about it.
	 *
	 * The browser build still paints the canvas first; this replaces its output
	 * from the end of <body> the moment the real sheet is ready.
	 */
	useEffect(() => {


		/* No classes at all - a cleared canvas, or a page of bare blocks - means
			 no sheet, not the previous one left behind. */
		if (!classSignature) {
			setcssCompiling(false);
			injectGeneratedCss("", canvasDoc);

			return;
		}

		const cached = CSS_CACHE.get(classSignature);

		/* This exact set has been compiled already, so there is nothing to wait
			 for: an undo, or flipping a class back off, lands with no round trip.
			 Note "" is a real answer here, hence the undefined check. */
		if (cached !== undefined) {
			setcssCompiling(false);
			injectGeneratedCss(cached, canvasDoc);

			return;
		}

		const controller = new AbortController();

		setcssCompiling(true);

		const timer = setTimeout(async () => {

			try {
				const css = await requestCss(classSignature, controller.signal);

				rememberCss(classSignature, css);
				injectGeneratedCss(css, canvasDoc);
			} catch (error) {
				/* Not worth a notification: this runs while the user is typing,
					 the canvas is still styled by the browser build, and the sheet
					 already up stays up. Save compiles again, and does report. */
				if (error?.name !== "AbortError") {
					console.error("page-builder: could not compile the canvas CSS", error);
				}
			} finally {
				/* An aborted run has been superseded, and the run that replaced it
					 owns the indicator now. */
				if (!controller.signal.aborted) {
					setcssCompiling(false);
				}
			}

		}, LIVE_COMPILE_DELAY);

		/* Aborting is what stops a slow compile for classes that are already
			 gone from overwriting the sheet for the ones on screen now. */
		return () => {
			clearTimeout(timer);
			controller.abort();
		};

	}, [classSignature, canvasDoc]);



	function reset_page() {

		setBlocks([
		])
		addNotification({ type: 'error', title: 'Reset done', content: `Canvas reset successful.` })
	}


	function copy_all() {


		const data = JSON.stringify(blocks);

		//localStorage.setItem('combo_copied_blocks', data);
		navigator.clipboard.writeText(data);
		addNotification({ type: 'success', title: 'Copy done', content: `All blocks copied.` })
	}
	async function paste_blocks() {


		const text = await navigator.clipboard.readText();



		var parsed = null;
		try {
			parsed = JSON.parse(text);


			if (!Array.isArray(parsed)) {

				addNotification({ type: 'error', title: 'Invalid content', content: `Clipboard content is not valid JSON.` })
				return;
			}

			setBlocks(parsed)


			if (!isJsonString(text)) {
				addNotification({ type: 'error', title: 'Invalid content', content: `Clipboard content is not valid JSON.` })
				return;
			}

			addNotification({ type: 'success', title: 'Paste done', content: `Content Ready.` })
		} catch (e) {
			addNotification({ type: 'error', title: 'Invalid content', content: `Clipboard content is not valid JSON.` })
		}
	}



	async function update_template_part(extra = {}) {


		var postData = {
			...pageData, blocks: blocks, ...extra,
		};
		postData = JSON.stringify(postData);

		console.log(postData);


		try {
			const response = await fetch(serverUrl + "wp-json/combo-store/v2/update_template_part", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					Authorization: `Bearer ${token}`,
				},
				body: postData,
			});

			if (!response.ok) {
				throw new Error(`Server answered ${response.status}.`);
			}

			const res = await response.json();

			console.log(res);



			if (res?.status == 'success') {
				addNotification({ type: 'success', title: 'Page update', content: `` })
			} else {
				addNotification({ type: 'error', title: 'Page updated failed', content: `` })
			}
		} catch (error) {
			addNotification({ type: 'error', title: 'Page updated failed', content: error?.message ?? '' })
		}
	}


	function isJsonString(str) {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			return false;
		}
	}


	async function update_page(extra = {}) {


		var postData = {
			...pageData, blocks: blocks, ...extra,
		};
		postData = JSON.stringify(postData);


		try {
			const response = await fetch(serverUrl + "wp-json/combo-store/v2/update_page", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					Authorization: `Bearer ${token}`,
				},
				body: postData,
			});

			if (!response.ok) {
				throw new Error(`Server answered ${response.status}.`);
			}

			const res = await response.json();

			if (res?.success) {
				addNotification({ type: 'success', title: 'Page update', content: `` })
			} else {
				addNotification({ type: 'error', title: 'Page updated failed', content: `` })
			}
		} catch (error) {
			addNotification({ type: 'error', title: 'Page updated failed', content: error?.message ?? '' })
		}
	}



	/**
	 * Compile a class signature into CSS, and say so when it cannot.
	 *
	 * The compiler is Node only, so this goes through the route handler rather
	 * than importing lib/generateTailwindCSS directly. A failure here is not
	 * worth losing the edit over: it reports and returns "", and the page is
	 * saved without a stylesheet.
	 *
	 * This is the reporting path, for the compile behind Save. The one behind a
	 * class change stays quiet - it runs while the user is typing, where a
	 * notification per keystroke would be the bigger problem.
	 *
	 * `signature` has to be a value from tailwindClassSignature(): the result
	 * is cached under it, and the cache is keyed on that stable form.
	 */
	async function generate_css(signature) {

		try {
			const css = await requestCss(signature);

			rememberCss(signature, css);

			return css;
		} catch (error) {
			addNotification({
				type: 'error',
				title: 'Stylesheet not generated',
				content: error?.message ?? 'Saving the page without its CSS.',
			})

			return "";
		}
	}


	/**
	 * Save the page, with the stylesheet its classes compile to.
	 *
	 * The CSS is built before the save call so it travels in the same request:
	 * block classes never reach a source file, so Tailwind cannot scan them at
	 * build time, and the storefront loads this stored copy instead.
	 */
	async function save_page() {

		if (loading) {
			return;
		}

		setloading(true);

		try {
			const classes = classSignature;

			/* The compile that follows a class change has usually been here
				 first, and its result is for exactly these classes, so saving
				 after an edit does not build the same sheet a second time. A miss
				 - a compile still in flight, or one that failed - falls through to
				 the reporting path. A page with no classes needs no compile. */
			const cached = classes ? CSS_CACHE.get(classes) : "";
			const css = cached ?? await generate_css(classes);


			/* Show the canvas the same stylesheet that is about to be stored,
				 so what is on screen after a save is what the storefront renders
				 rather than the CDN's own output. */
			injectGeneratedCss(css, canvasDoc);



			var isPage = pageData?.isPage ?? false;

			if (isPage) {
				await update_page({ classes, css });
			} else {
				await update_template_part({ classes, css });
			}
		} finally {
			setloading(false);
		}
	}






	/*
		The editor's top bar.

		This used to be a column of 20px icon squares stacked inside the 300px
		settings panel, which put Save - the only irreversible action here -
		below the fold of a side panel and gave no indication of which page was
		open. It is a full-width toolbar now: navigation and document actions on
		the left, the canvas device switcher in the middle, Save on the right as
		a labelled primary button.

		`<div onClick>` became `<button>` throughout; these are controls, and as
		divs they took no keyboard focus and announced nothing.
	*/
	return (
		<>
			<header className="relative flex h-14 shrink-0 items-center gap-2 border-b border-black/20 bg-gray-900 px-2 text-white sm:px-3">

				<div className="flex min-w-0 items-center gap-1">

					{leftSlot}

					<Link
						title="Back to dashboard"
						aria-label="Back to dashboard"
						className={TOOL_BUTTON}
						href={`/dashboard`}>
						<IconHome size={18} />
					</Link>


					<span className="mx-1 h-6 w-px shrink-0 bg-white/10" />

					{/* Edit history. Undo and redo cover the common case; the
					    clock opens the list, for going back several edits at
					    once without watching the canvas flicker through each
					    one. */}
					<button
						type="button"
						title={canUndo ? "Undo (Ctrl+Z)" : "Nothing to undo"}
						aria-label="Undo"
						disabled={!canUndo}
						onClick={() => onUndo?.()}
						className={canUndo ? TOOL_BUTTON : TOOL_BUTTON_OFF}>
						<IconArrowBackUp size={18} />
					</button>

					<button
						type="button"
						title={canRedo ? "Redo (Ctrl+Shift+Z)" : "Nothing to redo"}
						aria-label="Redo"
						disabled={!canRedo}
						onClick={() => onRedo?.()}
						className={canRedo ? TOOL_BUTTON : TOOL_BUTTON_OFF}>
						<IconArrowForwardUp size={18} />
					</button>

					<div className="relative">
						<button
							type="button"
							title={("Edit history")}
							aria-label={("Edit history")}
							aria-expanded={historyOpen}
							onClick={() => sethistoryOpen(!historyOpen)}
							className={TOOL_BUTTON}>
							<IconHistory size={18} />
						</button>

						{historyOpen && (
							<>
								{/* Click-away sits behind the panel and over
								    everything else, so the next click anywhere
								    closes the list rather than editing the page
								    underneath it. */}
								<div
									className="fixed inset-0 z-40"
									onClick={() => sethistoryOpen(false)}
								/>

								<div className="absolute left-0 top-full z-50 mt-1 w-64 overflow-hidden rounded-lg border border-black/20 bg-gray-900 shadow-xl">

									<div className="flex items-baseline justify-between border-b border-white/10 px-3 py-2">
										<span className="text-xs font-semibold text-gray-200">{("Edit history")}</span>
										<span className="text-[10px] text-gray-500">
											{historyEntries.length > 0 ? historyEntries.length - 1 : 0}/{historyLimit}
										</span>
									</div>

									{/* Newest first, which is the order they are
									    looked for in. The oldest row is the state
									    the page was loaded in. */}
									<div className="scroll-thin max-h-72 overflow-y-auto py-1">
										{[...historyEntries].reverse().map((entry) => {
											const isCurrent = entry.index === historyIndex;
											const stepsBack = historyIndex - entry.index;

											return (
												<button
													key={entry.index}
													type="button"
													onClick={() => { onJumpHistory?.(entry.index); sethistoryOpen(false); }}
													className={`flex w-full items-center gap-2 !rounded-none !border-0 !px-3 !py-1.5 text-left !shadow-none transition-colors ${isCurrent
														? "!bg-white/10 !text-white"
														: "!bg-transparent !text-gray-400 hover:!bg-white/5 hover:!text-gray-200"}`}>

													<span className="flex h-4 w-4 shrink-0 items-center justify-center">
														{isCurrent && <IconCheck size={13} />}
													</span>

													<span className="min-w-0 flex-1 truncate text-xs">{entry.label}</span>

													<span className="shrink-0 text-[10px] text-gray-500">
														{stepsBack > 0 ? `-${stepsBack}` : formatEditTime(entry.at)}
													</span>
												</button>
											);
										})}
									</div>
								</div>
							</>
						)}
					</div>

					<span className="mx-1 h-6 w-px shrink-0 bg-white/10" />


					{(pageData?.type != 'header' && pageData?.type != 'footer') && (

						<PopoverButton wrapperClass={` flex justify-end`} buttonLabel={null} buttonIcon={<IconSettings size={16} />} title={`Template Part Settings - #${pageData?.title} `} position={null} buttonClass={`${TOOL_BUTTON} !px-2.5 cursor-pointer `}>

							{/* <TemplateSettings templateData={template} /> */}



							<div className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2 transition-colors hover:bg-gray-100">
								<div className="flex gap-3" onClick={ev => {

									var { checked, name } = ev.target;

									console.log(pageData?.includeHeader);


									var metaX = (pageData?.meta);
									var meta = { ...metaX, includeHeader: !pageData?.meta?.includeHeader }
									setpageData({ ...pageData, meta: meta })

								}} >
									{pageData?.meta?.includeHeader && (<IconLayoutNavbar size={18} />)}
									{!pageData?.meta?.includeHeader && (<IconLayoutNavbarInactive size={18} />)}


									<span>Include Header</span>
								</div>

							</div>
							<div className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2 transition-colors hover:bg-gray-100">
								<div className="flex gap-3" onClick={ev => {




									var metaX = (pageData?.meta);
									var meta = { ...metaX, includeFooter: !pageData?.meta?.includeFooter }
									setpageData({ ...pageData, meta: meta })





								}} >


									{pageData?.meta?.includeFooter && (<IconLayoutBottombar size={18} />)}
									{!pageData?.meta?.includeFooter && (<IconLayoutBottombarInactive size={18} />)}
									<span>Include Footer</span>
								</div>

							</div>

							{JSON.stringify(pageData?.meta)}







						</PopoverButton>

					)}





					{/* The page being edited was previously a line of grey text
					    under the buttons, and absent entirely until one was
					    loaded. */}
					<div className="flex min-w-0 items-center gap-2">
						<IconFileText size={16} className="shrink-0 text-gray-500" />
						<span className="truncate text-sm font-medium text-gray-100">
							{pageData?.title || ("Untitled draft")}


						</span>
						{!pageData && (
							<span className="hidden shrink-0 rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300 sm:inline">
								{("Not saved")}
							</span>
						)}
					</div>

				</div>

				{/* {JSON.stringify(DEVICES)} */}


				{/* Canvas width. Absolutely centred so it does not drift as the
				    page title changes length. */}
				<div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 lg:block">
					<div className="pointer-events-auto flex items-center gap-0.5 rounded-lg bg-white/5 p-1">
						{DEVICES.map(({ id, label, icon: Icon }) => (
							<button
								key={id}
								type="button"
								title={label}
								aria-label={label}
								aria-pressed={device === id}
								onClick={() => setDevice?.(id)}
								className={`inline-flex h-7 w-8 items-center justify-center !rounded-md !border-0 !px-0 !py-0 !shadow-none transition-colors ${device === id
									? "!bg-white/15 !text-white"
									: "!bg-transparent !text-gray-400 hover:!bg-white/10 hover:!text-gray-200"}`}>
								<Icon size={16} />
							</button>
						))}
					</div>
				</div>

				<div className="ml-auto flex shrink-0 items-center gap-1">

					{/* The stored stylesheet trails a class edit by one compile, and
					    the canvas looks finished either way because the browser
					    build has already styled it - so this is the only thing that
					    says the real sheet is still being built. */}
					{cssCompiling && (
						<span
							title={("Compiling the page stylesheet")}
							className="mr-1 hidden items-center gap-1.5 text-[11px] text-gray-400 sm:inline-flex">
							<Spinner size={12} fill="#9ca3af" />
							<span>{("Styles")}</span>
						</span>
					)}










					<button
						type="button"
						title={("Copy all blocks")}
						aria-label={("Copy all blocks")}
						className={TOOL_BUTTON}
						onClick={ev => {
							copy_all()
						}}>
						<IconCopy size={18} />
					</button>

					<button
						type="button"
						title={("Paste blocks")}
						aria-label={("Paste blocks")}
						className={TOOL_BUTTON}
						onClick={ev => {
							paste_blocks()
						}}>
						<IconClipboard size={18} />
					</button>

					<button
						type="button"
						title={("Clear canvas")}
						aria-label={("Clear canvas")}
						className={DANGER_BUTTON}
						onClick={ev => {
							reset_page()
						}}>
						<IconPaintFilled size={18} />
					</button>

					<button
						type="button"
						title={("Generate with AI")}
						aria-label={("Generate with AI")}
						aria-pressed={aiOpen}
						className={`${TOOL_BUTTON} ${aiOpen ? "!bg-brand !text-white hover:!bg-brand-600" : ""}`}
						onClick={ev => {
							setaiOpen(!aiOpen)
						}}>
						<IconAi size={18} />
					</button>

					{rightSlot}

					{pageData && (
						<button
							type="button"
							title={("Save page")}
							disabled={loading}
							className="ml-1 inline-flex h-9 items-center gap-2 !rounded-lg !border-0 !bg-brand !px-3 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-brand-600 disabled:!cursor-not-allowed disabled:!opacity-70"
							onClick={ev => {

								save_page()

							}}>
							{loading && (
								<Spinner size={16} fill="#ffffff" />
							)}
							{!loading && (
								<IconDeviceFloppy size={16} />
							)}
							<span className="hidden sm:inline">
								{loading ? ("Saving...") : ("Save")}
							</span>
						</button>
					)}

				</div>

			</header>


			{/* `blocks` is what lets the panel append a section in the page's own
				  style and edit a block in context, instead of generating blind. */}
			<AIPrompts aiOpen={aiOpen} setAiOpen={setaiOpen} selectedBlock={selectedBlock} elements={elements} blocks={blocks} setBlocks={setBlocks} />

		</>
	);
};



export default EditorActions;
