import React from "react";
import GalleryPicker from '../../shop-elements/GalleryPicker';
import CssSelectors from "../CssSelectors";
import { logoMode } from "./LogoView";
import { withElementCssDefaults } from "../ElementsDefinition";

const inputClass = "w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

/*
	Settings panel for the `logo` block: text, image or both; the logo text;
	the image (gallery or URL) and its alt text; where it links (home by
	default - the field was saved but never used); then its cssSelectors
	keys. The type select shows the mode actually drawn: its old "Choose"
	option saved '' and drew nothing.
*/
const LogoOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options ?? {};

	/* Every current key, filled from defaults where the block lacks it. */
	var cssSelectors = withElementCssDefaults('logo', props?.cssSelectors);

	const setOption = (key, value) => updateBlock('options', { ...options, [key]: value });

	var mode = ['text', 'image', 'both'].includes(options?.logoType) ? options.logoType : logoMode(options);
	var src = String(options?.src ?? '').trim();

	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Logo type</label>
					<select className={inputClass} value={mode} onChange={ev => setOption('logoType', ev.target.value)}>
						<option value="text">Text</option>
						<option value="image">Image</option>
						<option value="both">Image and text</option>
					</select>
				</div>

				{mode !== 'image' && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Logo text</label>
						<input type="text" placeholder="My Store" className={inputClass} value={options?.logoText ?? ''} onChange={ev => setOption('logoText', ev.target.value)} />
					</div>
				)}

				{mode !== 'text' && (
					<>
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Image</label>
							{src && (
								/* eslint-disable-next-line @next/next/no-img-element */
								<img src={src} alt="" className="max-h-20 w-full rounded-md border border-gray-200 bg-gray-50 object-contain" />
							)}
							<div>
								<GalleryPicker popupClass="fixed inset-0 z-50 flex items-center justify-center bg-black/50 " onPick={item => setOption('src', item?.src ?? '')} />
							</div>
							<input type="text" placeholder="https://…" className={inputClass} value={options?.src ?? ''} onChange={ev => setOption('src', ev.target.value)} />
							{!src && <p className="text-xs text-amber-600">No image yet: the logo text shows instead.</p>}
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Alt text</label>
							<input type="text" placeholder={options?.logoText || 'Store name'} className={inputClass} value={options?.altText ?? ''} onChange={ev => setOption('altText', ev.target.value)} />
							<p className="text-xs text-gray-500">Usually the store's name. Empty uses the logo text.</p>
						</div>
					</>
				)}

				{mode === 'image' && (
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Logo text (alt text fallback)</label>
						<input type="text" placeholder="My Store" className={inputClass} value={options?.logoText ?? ''} onChange={ev => setOption('logoText', ev.target.value)} />
					</div>
				)}

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link</label>
					<input type="text" placeholder="/" className={inputClass} value={options?.link ?? ''} onChange={ev => setOption('link', ev.target.value)} />
					<p className="text-xs text-gray-500">Empty links to the home page.</p>
				</div>

				<p className="text-xs text-gray-500">Size the image on <code>img</code>, e.g. <code>h-10 w-auto object-contain</code>. With image and text, give <code>link</code> <code>flex items-center gap-2</code> to put them side by side.</p>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />
			</div>
		</div>
	);
};

export default LogoOptions;
