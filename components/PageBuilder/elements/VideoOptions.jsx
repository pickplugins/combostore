import React from "react";
import CssSelectors from "../CssSelectors";
import { parseVideoSource } from "./VideoView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const providerLabel = { youtube: 'YouTube', vimeo: 'Vimeo', file: 'Video file' };

/*
	Settings panel for the `video` block: the video link (YouTube, Vimeo or a
	file; a bare YouTube id still works), its title for screen readers, the
	playback options, then its cssSelectors keys. The link is saved as
	options.url; an old options.videoId is moved there on the first edit.
	Size it with `frame` classes - width/height attributes are no longer
	offered, since the default w-full overrides them.
*/
const VideoOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('video', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	const toggle = (key, label, hint) => (
		<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={key === 'controls' ? options?.controls !== false : !!options?.[key]} onChange={ev => setOption(key, ev.target.checked)} />
			{label}{hint && <span className="font-normal text-gray-400">{hint}</span>}
		</label>
	);

	var link = options?.url || options?.videoId || '';
	var source = parseVideoSource(link);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Video link</label>
					<input type="text" placeholder="https://www.youtube.com/watch?v=… or a Vimeo / .mp4 link" className={inputClass} value={link}
						onChange={ev => { var next = { ...options, url: ev.target.value }; delete next.videoId; updateBlock('options', next); }} />
					<p className={`text-xs ${link && !source ? 'text-red-600' : 'text-gray-500'}`}>
						{!link ? 'YouTube (watch, youtu.be, Shorts), Vimeo, or a direct .mp4 / .webm file. Nothing shows on the shop until it is set.'
							: source ? `${providerLabel[source.provider]}${source.id ? ` · ${source.id}` : ''}${source.start ? ` · starts at ${source.start}s` : ''}`
								: 'Not recognised as a YouTube, Vimeo or video file link.'}
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Title (for screen readers)</label>
					<input type="text" placeholder="Video" className={inputClass} value={options?.title ?? ''} onChange={ev => setOption('title', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					{toggle('autoplay', 'Autoplay', ' (plays muted)')}
					{toggle('muted', 'Muted')}
					{toggle('loop', 'Loop')}
					{toggle('controls', 'Show controls')}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Start at (seconds)</label>
					<input type="number" min="0" placeholder={source?.start ? String(source.start) : '0'} className={inputClass} value={options?.start ?? ''} onChange={ev => setOption('start', ev.target.value === '' ? undefined : Number(ev.target.value))} />
				</div>

				<p className="text-xs text-gray-500"><code>frame</code> is the player: <code>aspect-video w-full</code> by default; use <code>aspect-[9/16] max-w-sm</code> for Shorts. In the builder, clicking the video selects the block.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default VideoOptions;
