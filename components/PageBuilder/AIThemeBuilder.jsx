"use client";
import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import {
	IconX, IconUpload, IconSparkles, IconCheck, IconAlertTriangle,
	IconPlayerStop, IconRefresh, IconDeviceFloppy, IconEye, IconLoader2,
	IconWorldSearch, IconLink,
} from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import Spinner from '../../components/Spinner';
import Anthropic from '@anthropic-ai/sdk';

/*
	The block vocabulary - the element catalog, the node shape, where classes
	live, how content binds - is aiLayoutPrompt's, and it is reused here
	unchanged so this panel and AIPrompts share one prompt cache entry. What a
	THEME adds on top of a page lives in aiThemePrompt: the page list, the
	design brief, and the two things sanitizeBlocks cannot know on its own.
*/
import {
	MODEL,
	MAX_TOKENS,
	buildSystemPrompt,
	extractJson,
	repairJson,
	describeReport,
	countBlocks,
} from './aiLayoutPrompt';

import {
	THEME_PAGES,
	buildBriefPrompt,
	parseBrief,
	buildPagePrompt,
	sanitizeThemeBlocks,
	describeThemeReport,
	assembleTemplate,
} from './aiThemePrompt';

const fileToBase64 = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result.split(",")[1]);
		reader.onerror = () => reject(new Error("Failed to read file"));
		reader.readAsDataURL(file);
	});

/*
	The home page is generated first and alone. It is the page the screenshot is
	actually of, so it is the one worth seeing early - and its call is what puts
	the 15k-token element catalog in the prompt cache, so every page after it is
	charged the cached rate. Fanning out before that happens would pay for the
	catalog once per page instead of once per run.
*/
const CONCURRENCY = 3;

const STATUS = {
	pending: { label: 'Waiting', tone: 'text-gray-400 bg-gray-50 border-gray-200' },
	running: { label: 'Building', tone: 'text-brand-700 bg-brand/5 border-brand/30' },
	done: { label: 'Done', tone: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
	failed: { label: 'Failed', tone: 'text-red-700 bg-red-50 border-red-200' },
	skipped: { label: 'Skipped', tone: 'text-gray-400 bg-gray-50 border-gray-200' },
};

const AIThemeBuilder = (props) => {

	const { token, settings, addNotification } = useCounterStore();
	const fetchSettings = useCounterStore((state) => state.fetchSettings);
	const settingsLoading = useCounterStore((state) => state.settingsLoading);

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	/* Same self-load as AIPrompts: the builder lives outside the dashboard
		 layout that mounts AppProviders, so nothing else fetches settings here
		 and the key read below would stay undefined. */
	useEffect(() => {
		if (!settings) fetchSettings();
	}, [settings, fetchSettings]);

	/*
		Carried over from AIPrompts, and carried over knowingly: this key is read
		into the browser and `dangerouslyAllowBrowser` is what lets the SDK use it
		there, so any key used here is public to anyone with devtools. A theme run
		is 17 calls rather than one, which makes a leaked key more expensive, not
		less. The fix for both panels is the same - a route handler that holds the
		key server side and proxies these calls.
	*/
	const apiKey = settings?.apiKeys?.anthropic?.key;

	console.log(settings);


	const client = useMemo(
		() => (apiKey ? new Anthropic({ apiKey, dangerouslyAllowBrowser: true }) : null),
		[apiKey]
	);

	/*
		The palette is what the model is taught from and what every generated
		block is checked against. buildSystemPrompt tolerates an empty list, but
		sanitizeBlocks calls `elements.find` and would throw, so an unreachable
		palette is caught here rather than mid-run on page nine.
	*/
	const elements = Array.isArray(props?.elements) ? props.elements : [];
	const hasPalette = elements.length > 0;
	const setBlocks = props?.setBlocks;

	/* Stable for a given palette, and the expensive part of every call, so it is
		 built once and carries the cache breakpoint on each request. */
	const systemPrompt = useMemo(() => buildSystemPrompt(elements), [elements]);

	const [prompt, setPrompt] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [imageMime, setImageMime] = useState(null);
	const fileInputRef = useRef(null);
	const logRef = useRef(null);

	/*
		A reference site. The browser cannot read a cross-origin page itself, so
		/api/theme-source fetches it and returns a summary - the colours it uses,
		its fonts, its heading outline, its nav and a slice of its copy.

		That summary is untrusted text from somebody else's page, so it enters
		the prompt exactly once, on the design-brief call, fenced and labelled as
		data. The 16 page calls work from the brief the model wrote, not from the
		fetched page, which keeps the injection surface to one request instead of
		seventeen.
	*/
	const [sourceUrl, setSourceUrl] = useState('');
	const [source, setSource] = useState(null);
	const [readingSource, setReadingSource] = useState(false);

	const [running, setRunning] = useState(false);
	const [installing, setInstalling] = useState(false);
	const [brief, setBrief] = useState(null);
	const [pages, setPages] = useState({});        // type -> blocks[]
	const [status, setStatus] = useState({});      // type -> 'pending' | 'running' | 'done' | 'failed' | 'skipped'
	const [errors, setErrors] = useState({});      // type -> message
	const [messages, setMessages] = useState([
		{ role: 'assistant', text: 'Paste a site to take the design from, attach a screenshot, or both - then describe the shop. I read the design into a palette and type scale first, then build all 16 pages against it.' },
	]);

	/* Which pages to generate. Header, footer and home are the design; the rest
		 are built to match. All on by default - a theme missing its archive pages
		 is not installable as a theme. */
	const [selected, setSelected] = useState(() =>
		Object.fromEntries(THEME_PAGES.map(page => [page.type, true])));

	/* A run is 17 API calls. Nothing here is free, so stopping has to actually
		 stop - every loop checks this between calls. */
	const abortRef = useRef(false);

	useEffect(() => {
		if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
	}, [messages]);

	const say = (text) => setMessages(p => [...p, { role: 'assistant', text }]);

	const handleImageSelect = (file) => {
		if (!file) return;

		const allowed = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

		if (!allowed.includes(file.type)) {
			say('That file type is not supported - use PNG, JPEG, GIF or WebP.');
			return;
		}

		setImageFile(file);
		setImageMime(file.type);

		const reader = new FileReader();
		reader.onload = () => setImagePreview(reader.result);
		reader.readAsDataURL(file);
	};

	const clearImage = () => {
		setImageFile(null);
		setImagePreview(null);
		setImageMime(null);
		if (fileInputRef.current) fileInputRef.current.value = '';
	};

	/* Read the reference site. Separate from Generate on purpose: it is cheap
	   and it can fail, so it is worth seeing what came back before spending a
	   17-call run on it. */
	const readSource = async () => {
		const url = sourceUrl.trim();

		if (!url || readingSource) return;

		setReadingSource(true);
		setSource(null);

		try {
			const response = await fetch('/api/theme-source', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ url }),
			});

			const result = await response.json();

			if (!result?.success) throw new Error(result?.message ?? `Request failed (${response.status})`);

			setSource(result.source);

			const parts = [
				`${result.source.colors?.length ?? 0} colours`,
				`${result.source.fonts?.length ?? 0} fonts`,
				`${result.source.headings?.length ?? 0} headings`,
				result.source.stylesheets ? `${result.source.stylesheets} stylesheets` : '',
			].filter(Boolean).join(', ');

			say(`Read ${result.source.title || result.source.finalUrl} - ${parts}. The design will be taken from it; the name and copy will be written fresh.`);
		} catch (err) {
			say(`Could not read that site: ${err?.message ?? err}`);
		} finally {
			setReadingSource(false);
		}
	};

	const clearSource = () => {
		setSource(null);
		setSourceUrl('');
	};

	/* One request. `withImage` decides whether the screenshot rides along - it
		 is evidence for the header, footer and home page, and a distraction for
		 the 404. */
	const ask = async ({ userPrompt, withImage, expectArray }) => {
		let content = userPrompt;

		if (withImage && imageFile) {
			const data = await fileToBase64(imageFile);

			content = [
				{ type: 'image', source: { type: 'base64', media_type: imageMime, data } },
				{ type: 'text', text: userPrompt },
			];
		}

		/* Streamed for the same reason AIPrompts streams: a page runs to tens of
			 thousands of tokens and a non-streamed request that long risks an HTTP
			 timeout. The cache breakpoint is what makes a 17-call run affordable. */
		const stream = client.messages.stream({
			model: MODEL,
			max_tokens: MAX_TOKENS,
			output_config: { effort: 'high' },
			system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral', ttl: '1h' } }],
			messages: [{ role: 'user', content }],
		});

		const message = await stream.finalMessage();

		if (message.stop_reason === 'refusal') throw new Error('The model declined this request.');

		const rawText = (message.content ?? [])
			.filter(block => block.type === 'text')
			.map(block => block.text)
			.join('')
			.trim();

		if (!rawText) throw new Error('No text in the response');

		return {
			value: repairJson(extractJson(rawText, { expectArray })),
			truncated: message.stop_reason === 'max_tokens',
		};
	};

	/* One page, start to finish. Returns true on success so the caller can keep
		 a count without reading state it has not re-rendered with yet. */
	const buildPage = async (page, briefValue) => {
		setStatus(prev => ({ ...prev, [page.type]: 'running' }));

		try {
			const { value, truncated } = await ask({
				userPrompt: buildPagePrompt({ brief: briefValue, page, prompt }),
				withImage: page.image,
				expectArray: true,
			});

			if (!Array.isArray(value)) throw new Error('Expected a JSON array of blocks');

			const { blocks, report } = sanitizeThemeBlocks(value, elements);

			if (!blocks.length) throw new Error('No usable blocks in the response');

			/* A template part is one siteHeader / siteFooter by contract. If the
				 model wrapped it in a section, unwrap rather than fail. */
			let content = blocks;

			if (page.part) {
				const wanted = page.type === 'header' ? 'siteHeader' : 'siteFooter';
				const find = (list) => {
					for (const block of list ?? []) {
						if (block.type === wanted) return block;

						const inner = find(block.children);

						if (inner) return inner;
					}

					return null;
				};

				const root = find(blocks);

				if (!root) throw new Error(`No ${wanted} block in the response`);

				content = [root];
			}

			setPages(prev => ({ ...prev, [page.type]: content }));
			setStatus(prev => ({ ...prev, [page.type]: 'done' }));

			const notes = [
				truncated ? 'hit the token limit, so the tail may be missing' : '',
				describeReport(report),
				describeThemeReport(report),
			].filter(Boolean).join(' - ');

			say(`${page.title}: ${countBlocks(content)} blocks${notes ? ` - ${notes}` : ''}.`);

			return true;
		} catch (err) {
			setStatus(prev => ({ ...prev, [page.type]: 'failed' }));
			setErrors(prev => ({ ...prev, [page.type]: err?.message ?? String(err) }));
			say(`${page.title} failed: ${err?.message ?? err}`);

			return false;
		}
	};

	/* Run a list of pages `CONCURRENCY` at a time, stopping on abort. */
	const runPages = async (list, briefValue) => {
		let built = 0;
		const queue = [...list];

		const worker = async () => {
			while (queue.length && !abortRef.current) {
				const page = queue.shift();

				if (!page) return;
				if (await buildPage(page, briefValue)) built += 1;
			}
		};

		await Promise.all(Array.from({ length: Math.min(CONCURRENCY, queue.length) }, worker));

		return built;
	};

	const generate = async () => {
		if (running) return;

		if (!hasPalette) {
			say('The element palette has not reached this panel, so nothing could be validated against it. Reopen the builder and try again.');
			return;
		}

		if (!client) {
			say(settingsLoading || !settings
				? 'Still loading settings - try again in a moment.'
				: 'No Anthropic API key is configured - add one in settings to generate a theme.');
			return;
		}

		const chosen = THEME_PAGES.filter(page => selected[page.type]);

		if (!chosen.length) {
			say('Pick at least one page to build.');
			return;
		}

		abortRef.current = false;
		setRunning(true);
		setBrief(null);
		setPages({});
		setErrors({});
		setStatus(Object.fromEntries(THEME_PAGES.map(page => [
			page.type, selected[page.type] ? 'pending' : 'skipped',
		])));

		setMessages(p => [...p, {
			role: 'user',
			text: `${imageFile ? '[image] ' : ''}${source ? `[${source.finalUrl}] ` : ''}${prompt || 'Build a theme'} - ${chosen.length} pages`,
		}]);

		try {
			/* Pass one: the design system, before any page exists. This is the
			   only call the fetched site's text reaches. */
			say(source
				? 'Reading the reference site into a palette and type scale...'
				: 'Reading the design into a palette and type scale...');

			const { value } = await ask({
				userPrompt: buildBriefPrompt({ prompt, hasImage: Boolean(imageFile), source }),
				withImage: true,
				expectArray: false,
			});

			const briefValue = parseBrief(value);

			setBrief(briefValue);
			say(`Design brief: "${briefValue.name}" - ${briefValue.palette.length} palette tokens, ${briefValue.homeSections.length} bands on the home page.`);

			if (abortRef.current) { say('Stopped.'); return; }

			/* Home first and alone: it is the page the screenshot is of, and its
				 call is what warms the prompt cache for everything after it. */
			let built = 0;
			const home = chosen.find(page => page.type === 'home');
			const rest = chosen.filter(page => page.type !== 'home');

			if (home) {
				if (await buildPage(home, briefValue)) built += 1;
			}

			if (!abortRef.current) built += await runPages(rest, briefValue);

			if (abortRef.current) {
				say(`Stopped after ${built} page${built === 1 ? '' : 's'}.`);
				return;
			}

			const failed = chosen.length - built;

			say(failed
				? `Built ${built} of ${chosen.length} pages. ${failed} failed - retry just those below, then install.`
				: `Built all ${built} pages. Review them and install.`);
		} catch (err) {
			say(`Error: ${err?.message ?? err}`);
		} finally {
			setRunning(false);
		}
	};

	/* Rebuild only what failed, against the brief that is already there. */
	const retryFailed = async () => {
		if (running || !brief) return;

		const failed = THEME_PAGES.filter(page => status[page.type] === 'failed');

		if (!failed.length) return;

		abortRef.current = false;
		setRunning(true);
		say(`Retrying ${failed.length} page${failed.length === 1 ? '' : 's'}...`);

		try {
			const built = await runPages(failed, brief);

			say(`Retry built ${built} of ${failed.length}.`);
		} finally {
			setRunning(false);
		}
	};

	const stop = () => {
		abortRef.current = true;
		say('Stopping after the calls in flight finish...');
	};

	const doneCount = THEME_PAGES.filter(page => status[page.type] === 'done').length;
	const failedCount = THEME_PAGES.filter(page => status[page.type] === 'failed').length;
	const canInstall = Boolean(brief) && doneCount > 0 && !running;

	const install = async () => {
		if (!canInstall) return;

		const template = assembleTemplate({ brief, pages });

		/* The nine shipped templates all carry these two, and a theme without
			 them installs a site with no chrome. Worth saying out loud rather than
			 letting someone find out on the storefront. */
		const missingParts = ['header', 'footer'].filter(
			type => !template.pages.some(page => page.type === type));

		if (missingParts.length) {
			addNotification({
				type: 'error',
				title: 'Incomplete theme',
				content: `No ${missingParts.join(' or ')} was built. Build ${missingParts.length === 1 ? 'it' : 'them'} before installing.`,
			});
			return;
		}

		setInstalling(true);

		try {
			const response = await fetch(serverUrl + 'wp-json/combo-store/v2/create_template', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
				body: JSON.stringify(template),
			});

			if (!response.ok) throw new Error(`Request failed (${response.status})`);

			const result = await response.json();

			if (result?.status === 'failed') {
				throw new Error(typeof result?.messages === 'string' ? result.messages : JSON.stringify(result?.messages));
			}

			addNotification({ type: 'success', title: 'Theme installed', content: `"${template.name}" was added with ${template.pages.length} pages.` });
			say(`Installed "${template.name}" with ${template.pages.length} pages.`);
		} catch (err) {
			addNotification({ type: 'error', title: 'Install failed', content: String(err?.message ?? err) });
			say(`Install failed: ${err?.message ?? err}`);
		} finally {
			setInstalling(false);
		}
	};

	/*
		Drop a generated page onto the canvas without installing, so it can be
		looked at properly before 16 of them are written to the database.

		This replaces whatever is on the canvas. `setBlocks` is backed by
		useBlockHistory, so it is one undo away - but only if it is recorded as a
		discrete entry rather than coalescing into whatever edit came before it.
	*/
	const preview = (type) => {
		const content = pages[type];

		if (!content?.length || !setBlocks) return;

		setBlocks(content, { label: 'Load AI theme page', discrete: true });
		addNotification({
			type: 'success',
			title: 'Loaded onto the canvas',
			content: `${type} replaced what was on the canvas - undo to put it back. Nothing is installed yet.`,
		});
	};

	const ACTION = "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer";

	return (
		<div className="flex flex-col gap-4 py-5">

			<div className="flex items-start justify-between gap-3">
				<div className="flex min-w-0 flex-col gap-0.5">
					<div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
						<IconSparkles size={16} className="text-brand" />
						Build a theme from a design
					</div>
					<p className="text-xs text-gray-500">
						A reference site, a screenshot, or both - read into one palette, then built as all 16 pages.
					</p>
				</div>
				{running && <Spinner size={16} fill="#9ca3af" />}
			</div>

			{/* Reference site */}
			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-2">
					<div className="relative flex min-w-0 flex-1 items-center">
						<IconLink size={14} className="absolute left-2.5 text-gray-400" />
						<input
							type="url"
							value={sourceUrl}
							disabled={running}
							placeholder="Paste a site to take the design from (e.g. example.com)"
							onChange={(e) => setSourceUrl(e.target.value)}
							onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); readSource(); } }}
							className="w-full !rounded-lg !border !border-gray-300 !bg-white !py-1.5 !pl-8 !pr-2.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
						/>
					</div>
					<button
						type="button"
						disabled={!sourceUrl.trim() || readingSource || running}
						onClick={readSource}
						className={`${ACTION} shrink-0 border-gray-200 bg-white text-gray-600 hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 ${(!sourceUrl.trim() || readingSource || running) ? 'cursor-not-allowed opacity-50' : ''}`}
					>
						{readingSource ? <IconLoader2 size={14} className="animate-spin" /> : <IconWorldSearch size={14} />}
						{readingSource ? 'Reading...' : 'Read site'}
					</button>
				</div>

				{/* What came back. Worth showing before a run is spent on it - a
					  site that rendered its colour in JavaScript comes back thin, and
					  that is better seen here than guessed at afterwards. */}
				{source && (
					<div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-2.5">
						<div className="flex items-start justify-between gap-2">
							<div className="flex min-w-0 flex-col gap-0.5">
								<div className="truncate text-xs font-medium text-gray-900">{source.title || source.finalUrl}</div>
								<div className="truncate text-[10px] text-gray-400">{source.finalUrl}</div>
							</div>
							<button
								type="button"
								title="Forget this site"
								className="shrink-0 text-gray-400 hover:text-red-600"
								onClick={clearSource}
							>
								<IconX size={14} />
							</button>
						</div>

						{source.colors?.length > 0 && (
							<div className="flex flex-wrap gap-1">
								{source.colors.slice(0, 12).map((entry) => (
									<span
										key={entry.value}
										title={`${entry.value} - used ${entry.count}x`}
										className="size-4 rounded-sm border border-gray-200"
										style={{ background: entry.value }}
									/>
								))}
							</div>
						)}

						<div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-gray-500">
							{source.fonts?.length > 0 && <span>Fonts: {source.fonts.slice(0, 3).join(', ')}</span>}
							<span>{source.headings?.length ?? 0} headings</span>
							<span>{source.nav?.length ?? 0} nav links</span>
							<span>{source.stylesheets ?? 0} stylesheets</span>
						</div>

						<p className="text-[10px] leading-relaxed text-gray-400">
							The palette, type and section order are taken from this site. The theme gets its own
							name and freshly written copy - the site&rsquo;s wordmark, photography and sentences are not copied.
						</p>
					</div>
				)}
			</div>

			{/* Image */}
			<div
				className="relative rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-600"
				onDrop={(e) => { e.preventDefault(); handleImageSelect(e.dataTransfer.files?.[0]); }}
				onDragOver={(e) => e.preventDefault()}
			>
				{imagePreview ? (
					<div className="relative">
						<img src={imagePreview} alt="Theme design" className="max-h-56 w-full rounded-md object-contain" />
						<button
							type="button"
							className="absolute right-1 top-1 rounded-full bg-red-500 p-0.5 text-white hover:bg-red-600"
							onClick={clearImage}
							title="Remove image"
						>
							<IconX size={14} />
						</button>
						<div className="py-1 text-center text-xs text-gray-500">{imageFile?.name}</div>
					</div>
				) : (
					<div
						className="flex cursor-pointer flex-col items-center justify-center gap-2 py-7"
						onClick={() => fileInputRef.current?.click()}
					>
						<IconUpload size={24} className="text-gray-500" />
						<span>Drop a screenshot here or <span className="font-medium underline">browse</span></span>
						{/* The fetched summary carries colour and structure but never
							  what the page looks like, so a screenshot alongside a URL is
							  worth more than either on its own. */}
						<span className="text-xs text-gray-400">
							{source
								? 'Optional - a screenshot shows the layout the summary cannot'
								: 'PNG, JPEG, GIF, WebP - a full-page screenshot works best'}
						</span>
					</div>
				)}
				<input
					ref={fileInputRef}
					type="file"
					accept="image/png,image/jpeg,image/gif,image/webp"
					className="hidden"
					onChange={(e) => handleImageSelect(e.target.files?.[0])}
				/>
			</div>

			{/* Prompt */}
			<textarea
				rows={3}
				value={prompt}
				placeholder="Describe the shop: what it sells, who it is for, where it delivers (e.g. 'organic fruit and vegetable shop delivering around Rangpur City, cash on delivery')"
				onChange={(e) => setPrompt(e.target.value)}
				className="w-full resize-none !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-2 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
			/>

			{/* Pages to build */}
			<div className="flex flex-col gap-2">
				<div className="flex items-center justify-between">
					<span className="text-xs font-medium text-gray-700">
						Pages ({THEME_PAGES.filter(p => selected[p.type]).length} of {THEME_PAGES.length})
					</span>
					<div className="flex gap-1.5">
						<button
							type="button"
							className="text-xs text-gray-500 underline hover:text-brand-700"
							onClick={() => setSelected(Object.fromEntries(THEME_PAGES.map(p => [p.type, true])))}
						>All</button>
						<button
							type="button"
							className="text-xs text-gray-500 underline hover:text-brand-700"
							onClick={() => setSelected(Object.fromEntries(THEME_PAGES.map(p => [p.type, ['header', 'footer', 'home'].includes(p.type)])))}
						>Design only</button>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-1.5">
					{THEME_PAGES.map((page) => {
						const state = status[page.type];
						const tone = STATUS[state]?.tone ?? 'text-gray-600 bg-white border-gray-200';

						return (
							<div
								key={page.type}
								className={`flex items-center justify-between gap-2 rounded-md border px-2 py-1.5 text-[11px] ${tone}`}
								title={errors[page.type] ?? page.title}
							>
								<label className="flex min-w-0 cursor-pointer items-center gap-1.5">
									<input
										type="checkbox"
										checked={Boolean(selected[page.type])}
										disabled={running}
										onChange={(e) => setSelected(prev => ({ ...prev, [page.type]: e.target.checked }))}
									/>
									<span className="truncate">{page.title}</span>
								</label>

								<div className="flex shrink-0 items-center gap-1">
									{state === 'running' && <IconLoader2 size={12} className="animate-spin" />}
									{state === 'done' && <IconCheck size={12} />}
									{state === 'failed' && <IconAlertTriangle size={12} />}
									{state === 'done' && (
										<button
											type="button"
											title="Load onto the canvas (does not install)"
											className="text-emerald-700 hover:text-emerald-900"
											onClick={() => preview(page.type)}
										>
											<IconEye size={12} />
										</button>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* A run is one call per page plus the brief, all on Opus at high
				  effort. That is worth knowing before clicking, not after. */}
			<p className="-mt-1 text-[11px] text-gray-500">
				{THEME_PAGES.filter(p => selected[p.type]).length + 1} API calls on {MODEL} - the design brief, then one per page.
				The element catalog is cached after the first call, so the rest are charged the cached rate.
			</p>

			{/* Actions */}
			<div className="flex flex-wrap items-center gap-2">
				<button
					type="button"
					disabled={running || !hasPalette}
					onClick={generate}
					className={`${ACTION} border-brand bg-brand text-white hover:bg-brand-600 ${running || !hasPalette ? 'cursor-not-allowed opacity-50' : ''}`}
				>
					<IconSparkles size={14} />
					{running ? 'Building...' : 'Generate theme'}
				</button>

				{running && (
					<button type="button" onClick={stop} className={`${ACTION} border-red-200 bg-red-50 text-red-700 hover:bg-red-100`}>
						<IconPlayerStop size={14} /> Stop
					</button>
				)}

				{!running && failedCount > 0 && (
					<button type="button" onClick={retryFailed} className={`${ACTION} border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100`}>
						<IconRefresh size={14} /> Retry {failedCount} failed
					</button>
				)}

				{canInstall && (
					<button
						type="button"
						disabled={installing}
						onClick={install}
						className={`${ACTION} border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 ${installing ? 'cursor-not-allowed opacity-50' : ''}`}
					>
						<IconDeviceFloppy size={14} />
						{installing ? 'Installing...' : `Install ${doneCount} page${doneCount === 1 ? '' : 's'}`}
					</button>
				)}
			</div>

			{/* The brief, once there is one - it is the thing every page was built
			    against, so it is worth being able to see. */}
			{brief && (
				<div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-3">
					<div className="text-xs font-semibold text-gray-900">{brief.name}</div>
					{brief.description && <p className="text-[11px] text-gray-500">{brief.description}</p>}
					<div className="flex flex-wrap gap-1.5">
						{brief.palette.map((entry, index) => (
							<div key={index} className="flex items-center gap-1 rounded border border-gray-200 px-1.5 py-0.5" title={`${entry.token}: ${entry.use ?? ''}`}>
								<span className="size-3 rounded-sm border border-gray-200" style={{ background: entry.value }} />
								<span className="text-[10px] text-gray-600">{entry.value}</span>
							</div>
						))}
					</div>
				</div>
			)}

			{/* Transcript. A 17-call run that fails quietly is a run nobody can
			    debug, so every page reports what it built or why it did not. */}
			<div ref={logRef} className="max-h-48 overflow-y-auto rounded-lg bg-gray-50 p-2.5 text-xs leading-relaxed">
				<div className="flex flex-col gap-1.5">
					{messages.map((entry, index) => (
						<div key={index} className={entry.role === 'user' ? 'text-gray-500' : 'text-gray-700'}>
							{entry.role === 'user' && <span className="font-medium">You: </span>}
							{entry.text}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AIThemeBuilder;
