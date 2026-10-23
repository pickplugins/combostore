"use client";
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { IconCheck, IconX, IconPhoto, IconUpload, IconPlus, IconPencil, IconSparkles } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';

import Spinner from '../../components/Spinner';
import Anthropic from '@anthropic-ai/sdk';

/*
	Everything the model is told, and everything done to what it sends back,
	lives in aiLayoutPrompt: the element catalog built out of ElementsDefinition,
	the block contract and the design rules, the per-mode request, and the
	sanitiser that turns a reply into blocks the canvas can actually render.
	This file is the panel around it.
*/
import {
	MODEL,
	MAX_TOKENS,
	buildSystemPrompt,
	buildUserPrompt,
	extractJson,
	repairJson,
	sanitizeBlocks,
	describeReport,
	countBlocks,
	patchBlockById,
} from './aiLayoutPrompt';

// Converts a File object to a base64 string (data only, no prefix)
const fileToBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result.split(",")[1]);
		reader.onerror = () => reject(new Error("Failed to read file"));
		reader.readAsDataURL(file);
	});

const AIPrompts = (props) => {
	const { token, settings, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	/*
		This used to be a literal key in this file, which meant it shipped inside
		the dashboard bundle for anyone to read - `dangerouslyAllowBrowser` is
		what lets the SDK run with a key in the browser at all. Any key that has
		been in a client bundle is public: rotate it, then set the new one in
		settings (or NEXT_PUBLIC_ANTHROPIC_API_KEY for local work).

		The real fix is a route handler that holds the key server side with this
		panel POSTing to it, which takes both the key and
		`dangerouslyAllowBrowser` out of the browser.
	*/

	console.log(settings);

	const apiKey = settings?.apiKeys?.anthropic?.key;

	const client = useMemo(
		() => (apiKey ? new Anthropic({ apiKey, dangerouslyAllowBrowser: true }) : null),
		[apiKey]
	);

	var setpageData = props?.setpageData;
	var pageData = props?.pageData;
	var blocks = props?.blocks;
	var setBlocks = props?.setBlocks;
	var elements = props.elements;
	var selectedBlock = props.selectedBlock;

	/* Stable for a given palette and the expensive part of every request, so it
		 is built once and then charged once per cache window rather than once per
		 generation - see the cache breakpoint on the system block below. */
	const systemPrompt = useMemo(() => buildSystemPrompt(elements), [elements]);

	const [loading, setloading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [mode, setmode] = useState('generate'); // 'generate' | 'append' | 'image' | 'edit'
	/*
		Open state is mirrored from the prop into local state. The panel's own
		close button used to set only the local copy, so the toolbar's `aiOpen`
		stayed true and reopening took two clicks - one to flip the parent back
		to false, another to open it again. `closePanel` tells the parent too
		when it has been given a setter.
	*/
	const [aiOpen, setAiOpen] = useState(props?.aiOpen);

	const closePanel = () => {
		setAiOpen(false);
		props?.setAiOpen?.(false);
	};

	// Image upload state
	const [imageFile, setImageFile] = useState(null);      // File object
	const [imagePreview, setImagePreview] = useState(null); // Data URL for preview
	const [imageMime, setImageMime] = useState(null);       // e.g. "image/png"
	const fileInputRef = useRef(null);
	const logRef = useRef(null);


	useEffect(() => {

		setAiOpen(props?.aiOpen)

	}, [props?.aiOpen]);

	/* Edit mode only means something with a block selected; deselecting while in
		 it would leave the panel pointed at nothing. */
	useEffect(() => {

		if (mode === 'edit' && !selectedBlock) {
			setmode('generate');
		}

	}, [mode, selectedBlock]);


	const [messages, setMessages] = useState([
		{ role: "assistant", text: "Describe a page and I'll build it. Section adds to what's already on the canvas, Image rebuilds a screenshot, and selecting a block lets me edit just that block." }
	]);

	useEffect(() => {

		if (logRef.current) {
			logRef.current.scrollTop = logRef.current.scrollHeight;
		}

	}, [messages]);

	const say = (text) => setMessages(p => [...p, { role: "assistant", text }]);

	// Handle image file selection
	const handleImageSelect = (file) => {
		if (!file) return;
		const allowedTypes = ["image/png", "image/jpeg", "image/gif", "image/webp"];
		if (!allowedTypes.includes(file.type)) {
			say("That file type is not supported - use PNG, JPEG, GIF or WebP.");
			return;
		}
		setImageFile(file);
		setImageMime(file.type);
		const reader = new FileReader();
		reader.onload = () => setImagePreview(reader.result);
		reader.readAsDataURL(file);
		setmode('image'); // auto-switch mode
	};

	const clearImage = () => {
		setImageFile(null);
		setImagePreview(null);
		setImageMime(null);
		if (fileInputRef.current) fileInputRef.current.value = "";
		if (mode === 'image') setmode('generate');
	};

	// Drag-and-drop on the textarea/drop zone
	const handleDrop = (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files?.[0];
		if (file) handleImageSelect(file);
	};

	const submitAIPrompt = async () => {

		console.log('submitAIPrompt');
		const apiKey = settings?.apiKeys?.anthropic?.key;

		console.log(apiKey);


		if (loading) return;
		if (!client) {
			say("No Anthropic API key is configured - add one in settings to generate layouts.");
			return;
		}
		if (mode === 'image' && !imageFile) {
			say("Attach an image first.");
			return;
		}
		if (mode === 'edit' && !selectedBlock) {
			say("Select a block on the canvas to edit.");
			return;
		}
		if (mode !== 'image' && !prompt.trim()) return;

		setMessages(p => [...p, { role: "user", text: mode === 'image' ? `[image] ${prompt || "Rebuild this layout"}` : prompt }]);
		setloading(true);

		try {
			const expectArray = mode !== 'edit';
			const userPrompt = buildUserPrompt({ mode, prompt, blocks, selectedBlock });

			let content = userPrompt;

			if (mode === 'image') {
				const base64Data = await fileToBase64(imageFile);

				content = [
					{
						type: "image",
						source: { type: "base64", media_type: imageMime, data: base64Data },
					},
					{ type: "text", text: userPrompt },
				];
			}

			/*
				Streamed because a full page runs to tens of thousands of tokens and
				a non-streamed request that long risks an HTTP timeout. The system
				block carries a cache breakpoint, so the catalog inside it is paid
				for once per cache window instead of once per generation.
			*/
			const stream = client.messages.stream({
				model: MODEL,
				max_tokens: MAX_TOKENS,
				output_config: { effort: 'high' },
				system: [{ type: "text", text: systemPrompt, cache_control: { type: "ephemeral", ttl: "1h" } }],
				messages: [{ role: "user", content }],
			});

			const message = await stream.finalMessage();

			if (message.stop_reason === 'refusal') {
				throw new Error("The model declined this request.");
			}

			/* With thinking on, the first content block is not the answer - the
				 text blocks are, and there can be more than one of them. */
			const rawText = (message.content ?? [])
				.filter(block => block.type === 'text')
				.map(block => block.text)
				.join('')
				.trim();

			if (!rawText) throw new Error("No text in API response");

			const truncated = message.stop_reason === 'max_tokens';
			const parsed = repairJson(extractJson(rawText, { expectArray }));

			if (mode === 'edit') {
				if (!parsed || Array.isArray(parsed) || (!parsed.options && !parsed.cssSelectors)) {
					throw new Error("Expected a JSON object with options and/or cssSelectors");
				}

				setBlocks(prev => patchBlockById(prev, selectedBlock.id, parsed));
				say(`Updated the ${selectedBlock.type} block.`);

				return;
			}

			if (!Array.isArray(parsed)) throw new Error("Expected a JSON array of blocks");

			const { blocks: sanitized, report } = sanitizeBlocks(parsed, elements);

			if (!sanitized.length) throw new Error("No usable blocks in the response");

			const total = countBlocks(sanitized);

			/* Both of these are worth surfacing: a layout quietly missing the
				 blocks that were dropped is a layout nobody can debug. */
			const notes = [
				truncated ? "the response hit the token limit, so the tail may be missing" : "",
				describeReport(report),
			].filter(Boolean).join(' - ');

			if (mode === 'append') {
				setBlocks(prev => [...(Array.isArray(prev) ? prev : []), ...sanitized]);
			} else {
				setBlocks(sanitized);
			}

			const plural = sanitized.length === 1 ? '' : 's';

			const headline = mode === 'append'
				? `Added ${sanitized.length} section${plural} (${total} blocks).`
				: mode === 'image'
					? `Rebuilt the image as ${sanitized.length} section${plural} (${total} blocks).`
					: `Built ${sanitized.length} section${plural} (${total} blocks) - the page was replaced.`;

			say(notes ? `${headline} Note: ${notes}.` : headline);

			if (mode === "image") clearImage();
		} catch (err) {

			say(`Error: ${err?.message ?? err}`);
		} finally {
			setloading(false);
		}
	};

	/*
		Docked bottom-right rather than slid in from `left-full`.

		The old positioning animated `left` between `1/2` and `full` while
		declaring `transition-transform`, so the property being animated was not
		the property being changed: the panel jumped rather than slid, and while
		closed it sat at `left: 100%` - a 33vw box starting at the right edge of
		the viewport, which is what put a horizontal scrollbar on the editor.
		Translating a right-anchored panel keeps it inside the layout either way.
	*/
	const MODE_BUTTON =
		"inline-flex items-center gap-1.5 !rounded-md !border-0 !px-2.5 !py-1 !text-xs !font-medium !shadow-none transition-colors";

	const modeClasses = (id) => `${MODE_BUTTON} ${mode === id ? '!bg-brand !text-white' : '!bg-gray-100 !text-gray-600 hover:!bg-gray-200'}`;

	return (
		<div
			aria-hidden={!aiOpen}
			className={`fixed bottom-0 right-0 z-50 w-full max-w-lg overflow-hidden rounded-t-xl border border-b-0 border-gray-200 bg-white p-4 shadow-2xl shadow-gray-900/20 transition-transform duration-300 ease-out ${aiOpen ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}>


			<div className="flex flex-col gap-3">
				{/* Header */}
				<div className="flex items-center gap-2 text-gray-700">
					<div className="flex w-full items-center justify-between gap-3">
						<div className="flex min-w-0 items-center gap-2">
							<div className="shrink-0 text-sm font-semibold text-gray-900">{("Generate with AI")}</div>

							{/* Mode buttons */}
							<div className="flex flex-wrap gap-1.5">
								<button
									type="button"
									aria-pressed={mode === 'generate'}
									className={modeClasses('generate')}
									title="Build a whole page, replacing what is on the canvas"
									onClick={() => { setmode('generate'); clearImage(); }}
								>
									{mode === 'generate' ? <IconCheck size={14} /> : <IconSparkles size={14} />}
									Generate
								</button>

								{/* Appends to the page instead of replacing it, which is what
									  "add a section" needs. */}
								<button
									type="button"
									aria-pressed={mode === 'append'}
									className={modeClasses('append')}
									title="Add a section to the current page"
									onClick={() => { setmode('append'); clearImage(); }}
								>
									{mode === 'append' ? <IconCheck size={14} /> : <IconPlus size={14} />}
									Section
								</button>

								{/* Image mode button */}
								<button
									type="button"
									aria-pressed={mode === 'image'}
									className={modeClasses('image')}
									onClick={() => setmode('image')}
									title="Rebuild the layout in a screenshot or mockup"
								>
									{mode === 'image' ? <IconCheck size={14} /> : <IconPhoto size={14} />}
									Image
								</button>

								{/* Editing is only meaningful with a selection, so the control
									  only exists when there is one. */}
								{selectedBlock && (
									<button
										type="button"
										aria-pressed={mode === 'edit'}
										className={modeClasses('edit')}
										title={`Edit the selected ${selectedBlock.type} block`}
										onClick={() => { setmode('edit'); clearImage(); }}
									>
										{mode === 'edit' ? <IconCheck size={14} /> : <IconPencil size={14} />}
										Edit
									</button>
								)}
							</div>

							{loading && <div className="text-gray-400"><Spinner size={16} fill="#9ca3af" /></div>}
						</div>

						<button
							type="button"
							title={("Close")}
							aria-label={("Close")}
							className="inline-flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg !border-0 !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-red-50 hover:!text-red-600"
							onClick={closePanel}
						>
							<IconX size={18} />
						</button>
					</div>
				</div>

				{/* The transcript. Without it a refusal, a token limit or a block
					  dropped as invalid left the panel silent - the state was being
					  collected and never rendered. */}
				<div ref={logRef} className="max-h-40 overflow-y-auto rounded-lg bg-gray-50 p-2.5 text-xs leading-relaxed">
					<div className="flex flex-col gap-1.5">
						{messages.map((entry, index) => (
							<div key={index} className={entry.role === 'user' ? 'text-gray-500' : 'text-gray-700'}>
								{entry.role === 'user' && <span className="font-medium">You: </span>}
								{entry.text}
							</div>
						))}
					</div>
				</div>

				{/* Image upload area — shown in image mode OR when an image is attached */}
				{(mode === 'image' || imagePreview) && (
					<div
						className="relative border-2 border-dashed border-gray-500 rounded-md bg-gray-200 text-gray-600 text-sm"
						onDrop={handleDrop}
						onDragOver={(e) => e.preventDefault()}
					>
						{imagePreview ? (
							<div className="relative">
								{/* Preview */}
								<img
									src={imagePreview}
									alt="Uploaded layout"
									className="w-full max-h-40 object-contain rounded-md"
								/>
								{/* Remove button */}
								<button
									className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5"
									onClick={clearImage}
									title="Remove image"
								>
									<IconX size={14} />
								</button>
								<div className="text-xs text-center text-gray-500 py-1">{imageFile?.name}</div>
							</div>
						) : (
							<div
								className="flex flex-col items-center justify-center gap-2 py-5 cursor-pointer"
								onClick={() => fileInputRef.current?.click()}
							>
								<IconUpload size={24} className="text-gray-500" />
								<span>Drop an image here or <span className="underline font-medium">browse</span></span>
								<span className="text-xs text-gray-400">PNG, JPEG, GIF, WebP supported</span>
							</div>
						)}

						{/* Hidden file input */}
						<input
							ref={fileInputRef}
							type="file"
							accept="image/png,image/jpeg,image/gif,image/webp"
							className="hidden"
							onChange={(e) => handleImageSelect(e.target.files?.[0])}
						/>
					</div>
				)}

				{/* Prompt + Submit */}
				<div className="flex items-center gap-2">

					<textarea
						type="text"
						value={prompt}
						rows={mode === 'image' ? 2 : 4}
						placeholder={
							mode === 'image'
								? "Optional: add instructions (e.g. 'use a dark theme', 'drop the sidebar')"
								: mode === 'edit'
									? `Describe what to change on the selected ${selectedBlock?.type ?? 'block'}...`
									: mode === 'append'
										? "Describe the section to add (e.g. 'an FAQ with five questions about delivery')"
										: "Describe the page (e.g. 'landing page for an organic grocery store, green accent, 6 sections')"
						}
						onChange={(e) => setPrompt(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) submitAIPrompt();
						}}
						className="w-full resize-none !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
					/>
					<div
						className={`inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit ${loading ? 'opacity-50 pointer-events-none' : ''}`}
						onClick={submitAIPrompt}
					>
						Submit
					</div>
				</div>

				{/* Hint */}
				<p className="text-xs text-gray-500 -mt-1">
					{mode === 'image' && !imagePreview
						? "Upload a screenshot or mockup and it gets rebuilt as blocks."
						: mode === 'generate'
							? "Generate replaces the whole page. Ctrl/Cmd + Enter to submit."
							: mode === 'append'
								? "The new section is appended to the end of the page, matched to its style."
								: mode === 'edit'
									? "Only the selected block changes - its children are left alone."
									: "Ctrl/Cmd + Enter to submit."}
				</p>
			</div>
		</div>
	);
};

export default AIPrompts;
