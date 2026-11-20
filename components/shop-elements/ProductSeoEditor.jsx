'use client'
import React from 'react'
import { IconTrash, IconPhoto, IconWorld } from "@tabler/icons-react";
import GalleryPicker from "./GalleryPicker";
import { storeUrl } from "@/lib/storeUrl";

/*
	The product's "SEO Meta Data" addon, saved in cstore_products.seo:
	{ title, description, image: { id, title, src } | null, canonical, noindex }
	(ComboStoreProduct::sanitize_seo).

	The product page's metadata (app/product/[slug], lib/templateSeo.js) uses
	these first. A field left blank falls back to the product template's SEO
	pattern (Template Part Settings > SEO), then to the product's own title,
	short description and featured image.
*/

const TITLE_LIMIT = 60;
const DESCRIPTION_LIMIT = 160;

const INPUT_CLASS = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";
const ICON_BUTTON = "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer";

/* Whatever was saved (or nothing) as well-formed settings. */
export function normalizeSeo(value) {
	var seo = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
	return {
		title: seo.title ?? '',
		description: seo.description ?? '',
		image: seo.image?.src ? seo.image : null,
		canonical: seo.canonical ?? '',
		noindex: !!seo.noindex,
	};
}

/* "42 / 60", amber past the limit. */
function Counter({ length, limit }) {
	return (
		<span className={`text-xs tabular-nums ${length > limit ? 'font-medium text-amber-600' : 'text-gray-400'}`}>
			{length} / {limit}
		</span>
	);
}

const ProductSeoEditor = ({ value, onChange, product }) => {
	var seo = normalizeSeo(value);

	function update(patch) {
		onChange({ ...seo, ...patch });
	}

	/* What a search result shows: these settings, else the product's own. */
	var plainExcerpt = String(product?.post_excerpt ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
	var previewTitle = seo.title || product?.title || 'Product title';
	var previewDescription = seo.description || plainExcerpt || 'Add a meta description, or a short description on the product, to control this text.';
	var previewUrl = seo.canonical || storeUrl(`product/${product?.slug ?? ''}`) || `/product/${product?.slug ?? ''}`;
	var fallbackImage = product?.post_thumbnail?.src ?? '';

	return (
		<div className="flex flex-col gap-5 p-4">

			{/* Search result preview */}
			<div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
				<div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Search preview</div>
				<div className="rounded-lg bg-white p-3 ring-1 ring-gray-200">
					<div className="flex items-center gap-1.5 truncate text-xs text-gray-600">
						<IconWorld size={14} className="shrink-0 text-gray-400" />
						<span className="truncate">{previewUrl}</span>
					</div>
					<div className="mt-1 truncate text-lg leading-snug text-[#1a0dab]">
						{previewTitle.length > TITLE_LIMIT ? previewTitle.slice(0, TITLE_LIMIT - 1) + '…' : previewTitle}
					</div>
					<div className={`mt-1 line-clamp-2 text-sm ${seo.description || plainExcerpt ? 'text-gray-600' : 'italic text-gray-400'}`}>
						{previewDescription.length > DESCRIPTION_LIMIT ? previewDescription.slice(0, DESCRIPTION_LIMIT - 1) + '…' : previewDescription}
					</div>
				</div>
				{seo.noindex && (
					<p className="mt-2 text-xs font-medium text-amber-700">Hidden from search engines: this product page asks not to be indexed.</p>
				)}
			</div>

			<div className="flex flex-col gap-1.5">
				<div className="flex items-center justify-between gap-3">
					<label htmlFor="seo-title" className="block text-sm font-medium text-gray-700">SEO title</label>
					<Counter length={seo.title.length} limit={TITLE_LIMIT} />
				</div>
				<input
					id="seo-title"
					type="text"
					className={INPUT_CLASS}
					placeholder={product?.title || 'Product title'}
					value={seo.title}
					onChange={ev => update({ title: ev.target.value })}
				/>
				<p className="text-xs text-gray-500">Leave blank to use the product template's title pattern, or the product's name.</p>
			</div>

			<div className="flex flex-col gap-1.5">
				<div className="flex items-center justify-between gap-3">
					<label htmlFor="seo-description" className="block text-sm font-medium text-gray-700">Meta description</label>
					<Counter length={seo.description.length} limit={DESCRIPTION_LIMIT} />
				</div>
				<textarea
					id="seo-description"
					rows={3}
					className={INPUT_CLASS}
					placeholder={plainExcerpt || 'A sentence or two on what the product is and why to buy it.'}
					value={seo.description}
					onChange={ev => update({ description: ev.target.value })}
				/>
				<p className="text-xs text-gray-500">Leave blank to use the product's short description.</p>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium text-gray-700">Social share image <span className="font-normal text-gray-500">(optional)</span></div>
				{seo.image ? (
					<div className="flex items-center gap-3 rounded-lg border border-gray-200 p-2">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={seo.image.src} alt={seo.image.title || 'Social share image'} className="h-16 w-16 rounded-md object-cover" />
						<div className="min-w-0 flex-1 truncate text-sm text-gray-700">{seo.image.title || 'Image'}</div>
						<button type="button" title="Remove image" className={ICON_BUTTON} onClick={() => update({ image: null })}>
							<IconTrash size={16} />
						</button>
					</div>
				) : (
					<div className="flex items-center gap-3">
						{fallbackImage ? (
							/* eslint-disable-next-line @next/next/no-img-element */
							<img src={fallbackImage} alt="" className="h-9 w-9 rounded-lg object-cover ring-1 ring-gray-200" />
						) : (
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-400 ring-1 ring-gray-200"><IconPhoto size={18} /></span>
						)}
						<GalleryPicker
							title="Choose a social share image"
							buttonLabel="Choose image"
							onPick={item => update({ image: { id: item.id, title: item.title, src: item.src } })}
						/>
						<span className="text-xs text-gray-500">{fallbackImage ? 'Uses the featured image until you choose one.' : 'Shown when the link is shared, e.g. on Facebook. 1200 × 630 works best.'}</span>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-1.5">
				<label htmlFor="seo-canonical" className="block text-sm font-medium text-gray-700">Canonical URL <span className="font-normal text-gray-500">(optional)</span></label>
				<input
					id="seo-canonical"
					type="url"
					className={INPUT_CLASS}
					placeholder={storeUrl(`product/${product?.slug ?? ''}`) || 'https://…'}
					value={seo.canonical}
					onChange={ev => update({ canonical: ev.target.value.trim() })}
				/>
				<p className="text-xs text-gray-500">Only when this product is a copy of another page that search engines should list instead.</p>
			</div>

			<label className="flex w-fit cursor-pointer items-center gap-2 text-sm text-gray-700">
				<input type="checkbox" checked={seo.noindex} onChange={ev => update({ noindex: ev.target.checked })} />
				Hide this product from search engines (noindex)
			</label>

		</div>
	);
};

export default ProductSeoEditor;
