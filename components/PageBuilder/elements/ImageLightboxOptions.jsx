import React, { useState } from "react";
import { IconArrowDown, IconArrowUp, IconTrash } from "@tabler/icons-react";
import GalleryPicker from '../../shop-elements/GalleryPicker';
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";
const iconButton = "inline-flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-40";

const newId = () => `img-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

/*
	Settings panel for the `imageLightbox` block: its images (picked from the
	gallery - the library stays open, so several can be added in one go - or
	pasted as a URL), each with alt text and a caption, in order; how many
	tiles the grid shows; the lightbox's controls; then its cssSelectors keys.
	Picking an image fills its alt text from the media title.
*/
const ImageLightboxOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};
	var images = Array.isArray(options?.images) ? options.images : [];

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('imageLightbox', props?.cssSelectors);

	const [url, setUrl] = useState('');

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });
	const setImages = (next) => setOption('images', next);
	const patchImage = (at, patch) => setImages(images.map((item, i) => i === at ? { ...item, ...patch } : item));
	const moveImage = (at, step) => {
		var to = at + step;
		if (to < 0 || to >= images.length) return;
		var next = [...images];
		[next[at], next[to]] = [next[to], next[at]];
		setImages(next);
	};

	/* The picker calls onPick once per image while it stays open, so each pick
	   must build on the images saved by the one before - not this render's. */
	const latest = React.useRef(images);
	latest.current = images;
	function onPick(item) {
		if (!item?.src) return;
		var next = [...latest.current, { id: newId(), src: item.src, alt: item?.title ?? '', caption: '' }];
		latest.current = next;
		updateBlock('options', { ...options, images: next });
	}

	function addUrl() {
		var src = url.trim();
		if (!src) return;
		setImages([...images, { id: newId(), src, alt: '', caption: '' }]);
		setUrl('');
	}

	const toggle = (key, label, hint, defaultOn = true) => (
		<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
			<input type="checkbox" checked={defaultOn ? options?.[key] !== false : !!options?.[key]} onChange={ev => setOption(key, ev.target.checked)} />
			{label}{hint && <span className="font-normal text-gray-400">{hint}</span>}
		</label>
	);

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Images ({images.length})</label>

					{images.map((item, at) => (
						<div key={item?.id ?? at} className="flex gap-2 rounded-lg border border-gray-200 bg-white p-2">
							{item?.src
								/* eslint-disable-next-line @next/next/no-img-element */
								? <img src={item.src} alt="" className="h-14 w-14 shrink-0 rounded border border-gray-100 bg-gray-50 object-cover" />
								: <div className="h-14 w-14 shrink-0 rounded bg-gray-100" />}
							<div className="flex min-w-0 flex-1 flex-col gap-1">
								<input type="text" placeholder="Image URL" className={inputClass} value={item?.src ?? ''} onChange={ev => patchImage(at, { src: ev.target.value })} />
								<input type="text" placeholder="Alt text" className={inputClass} value={item?.alt ?? ''} onChange={ev => patchImage(at, { alt: ev.target.value })} />
								<input type="text" placeholder="Caption (optional)" className={inputClass} value={item?.caption ?? ''} onChange={ev => patchImage(at, { caption: ev.target.value })} />
							</div>
							<div className="flex shrink-0 flex-col gap-1">
								<button type="button" className={iconButton} disabled={at === 0} onClick={() => moveImage(at, -1)} aria-label="Move up"><IconArrowUp size={14} /></button>
								<button type="button" className={iconButton} disabled={at === images.length - 1} onClick={() => moveImage(at, 1)} aria-label="Move down"><IconArrowDown size={14} /></button>
								<button type="button" className={`${iconButton} hover:!text-red-600`} onClick={() => setImages(images.filter((_, i) => i !== at))} aria-label="Remove"><IconTrash size={14} /></button>
							</div>
						</div>
					))}

					<div>
						<GalleryPicker title="Add images" onPick={onPick} />
					</div>
					<div className="flex gap-2">
						<input type="text" placeholder="…or paste an image URL" className={inputClass} value={url} onChange={ev => setUrl(ev.target.value)}
							onKeyDown={ev => { if (ev.key === 'Enter') { ev.preventDefault(); addUrl(); } }} />
						<button type="button" className="shrink-0 rounded-lg border border-gray-300 bg-white px-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50" onClick={addUrl}>Add</button>
					</div>
					<p className="text-xs text-gray-500">Nothing shows on the shop until an image is added.</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tiles shown in the grid</label>
					<input type="number" min="0" placeholder="All" className={inputClass} value={options?.visibleCount || ''}
						onChange={ev => setOption('visibleCount', ev.target.value === '' ? 0 : Math.max(0, parseInt(ev.target.value) || 0))} />
					<p className="text-xs text-gray-500">Empty for all. Otherwise the last tile shows "+N" and the lightbox still has every image.</p>
					{toggle('showGridCaptions', 'Captions under the tiles', '', false)}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Lightbox</label>
					{toggle('showFullscreen', 'Full-screen button', ' (and the F key)')}
					{toggle('openFullscreen', 'Open in full screen', '', false)}
					{toggle('showThumbnails', 'Thumbnail strip')}
					{toggle('showCaptions', 'Captions')}
					{toggle('showCounter', 'Counter', ' (3 / 8)')}
					{toggle('loop', 'Loop', ' (last wraps to first)')}
					{toggle('closeOnBackdrop', 'Close on backdrop click')}
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Dialog label (for screen readers)</label>
					<input type="text" placeholder="Image gallery" className={inputClass} value={options?.label ?? ''} onChange={ev => setOption('label', ev.target.value)} />
				</div>

				<p className="text-xs text-gray-500">
					Grid: <code>*</code> is the grid, <code>figure</code> wraps a tile, <code>item</code> is its button, <code>image</code> the picture, <code>more</code> the "+N" badge, <code>caption</code> its caption.
					Lightbox: <code>overlay</code>, <code>toolbar</code>, <code>counter</code>, <code>button</code>, <code>stage</code>, <code>stage-image</code>, <code>arrow</code> / <code>prev</code> / <code>next</code>, <code>lightbox-caption</code>, <code>thumbnails</code>, <code>thumbnail</code>, <code>thumbnail-active</code>.
					In the builder, double-click an image to preview the lightbox.
				</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ImageLightboxOptions;
