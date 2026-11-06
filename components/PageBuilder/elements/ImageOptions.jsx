import React from "react";
import GalleryPicker from '../../shop-elements/GalleryPicker';
import CssSelectors from "../CssSelectors";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `image` block: pick from the gallery or paste a
	URL, the alt text (which the image now really uses), an optional link and
	whether it opens in a new tab, then its cssSelectors keys. Picking an
	image fills an empty alt text from its title.
*/
const ImageOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('image', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	function onPick(item) {
		var next = { ...options, src: item?.src ?? '' };
		if (!String(options?.altText ?? '').trim() && item?.title) next.altText = item.title;
		updateBlock('options', next);
	}

	var src = String(options?.src ?? '').trim();

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Image</label>
					{src && (
						/* eslint-disable-next-line @next/next/no-img-element */
						<img src={src} alt="" className="max-h-32 w-full rounded-md border border-gray-200 bg-gray-50 object-contain" />
					)}
					<div>
						<GalleryPicker popupClass="fixed inset-0 z-50 flex items-center justify-center bg-black/50 " onPick={onPick} />
					</div>
					<input type="text" placeholder="https://… or choose from the gallery" className={inputClass} value={options?.src ?? ''} onChange={ev => setOption('src', ev.target.value)} />
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Alt text</label>
					<input type="text" placeholder="What the image shows" className={inputClass} value={options?.altText ?? ''} onChange={ev => setOption('altText', ev.target.value)} />
					<p className="text-xs text-gray-500">Read out by screen readers and used by search engines. Leave empty only for a purely decorative image.</p>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link (optional)</label>
					<input type="text" placeholder="/shop or https://…" className={inputClass} value={options?.link ?? ''} onChange={ev => setOption('link', ev.target.value)} />
					<label className="flex items-center gap-2 text-xs font-medium text-gray-600">
						<input type="checkbox" checked={!!options?.newTab} onChange={ev => setOption('newTab', ev.target.checked)} />
						Open in a new tab
					</label>
				</div>

				<p className="text-xs text-gray-500"><code>*</code> wraps it, <code>link</code> is the link (when set) and <code>img</code> the image. Size it on <code>img</code>, e.g. <code>w-full aspect-[4/3] object-cover</code>.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default ImageOptions;
