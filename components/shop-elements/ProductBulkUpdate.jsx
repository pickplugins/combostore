"use client";
import { useState } from "react";
import Image from "next/image";
import {
	IconCheck,
	IconTrash,
	IconStarFilled,
	IconStar,
	IconPlus,
	IconX,
	IconPhotoOff,
	IconRefresh,
} from "@tabler/icons-react";
import ProductsPicker from "../../components/shop-elements/ProductsPicker";
import GalleryPicker from "../../components/shop-elements/GalleryPicker";
import TermsPicker from "../../components/shop-elements/TermsPicker";
import TagsPicker from "../../components/shop-elements/TagsPicker";
import ToggleContent from "../../components/ToggleContent";
import Spinner from "../../components/Spinner";
import { useCounterStore } from '../../store/useCounterStore'

const PRIMARY_BUTTON =
	"inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const SECONDARY_BUTTON =
	"inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

const ICON_BUTTON =
	"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer";

const TEXT_BUTTON =
	"text-xs font-medium text-gray-500 hover:text-red-600 cursor-pointer";

// Global input styles use !important, so these need it too.
const FIELD =
	"!w-full !rounded-lg !border !border-solid !border-gray-300 !bg-white !px-3 !py-2 !text-sm !text-gray-900 !shadow-none !outline-none focus:!border-gray-900";

const LABEL = "text-xs font-medium text-gray-600";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const addonsList = [
	{ label: "Stock", value: 'manageStock' },
	{ label: "Variations", value: 'variations' },
	{ label: "Dimensions", value: 'dimensions' },
	{ label: "Reviews", value: 'reviews' },
	{ label: "Categories", value: 'categories' },
	{ label: "Tags", value: 'tags' },
	{ label: "Visibility", value: 'visibility' },
	{ label: "Brands", value: 'brands' },
	{ label: "Shipping", value: 'shipping' },
	{ label: "Downloads", value: 'downloads' },
	{ label: "Gallery", value: 'gallery' },
	{ label: "FAQ", value: 'faq' },
	{ label: "Upsells & Cross-sells", value: 'upsellsCrosssells' },
	{ label: "Related Products", value: 'related_products' },
];

function toSlug(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

const asArray = (value) => (Array.isArray(value) ? value : []);

/* ---------- Small layout pieces ---------- */

const Card = ({ title, action, children }) => (
	<section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
		<header className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-3">
			<h3 className="text-sm font-semibold text-gray-900">{title}</h3>
			{action}
		</header>
		<div className="p-4">{children}</div>
	</section>
);

const Field = ({ label, hint, children, className = "" }) => (
	<label className={`flex flex-col gap-1.5 ${className}`}>
		<span className={LABEL}>{label}</span>
		{children}
		{hint && <span className="text-xs text-gray-400">{hint}</span>}
	</label>
);

const EmptyState = ({ children }) => (
	<div className="rounded-lg border border-dashed border-gray-300 px-4 py-6 text-center text-xs text-gray-500">{children}</div>
);

const Chip = ({ label, onRemove }) => (
	<span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 py-1 pl-3 pr-1 text-xs font-medium text-gray-700">
		{label}
		<button type="button" aria-label={`Remove ${label}`} onClick={onRemove}
			className="flex h-5 w-5 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-600 cursor-pointer">
			<IconX size={12} />
		</button>
	</span>
);

/* A picked-products list (downloads, upsells, ...) with an editable title per row. */
const PickedList = ({ items, onTitleChange, onRemove, emptyText }) => {
	if (!items.length) return <EmptyState>{emptyText}</EmptyState>;
	return (
		<div className="divide-y divide-gray-100 rounded-lg border border-gray-200">
			{items.map((item, index) => (
				<div key={`${item.id}-${index}`} className="flex items-center gap-2 px-3 py-2">
					<span className="w-5 shrink-0 text-xs tabular-nums text-gray-400">{index + 1}.</span>
					<input type="text" className={FIELD} value={item.title ?? ""} onChange={ev => onTitleChange(index, ev.target.value)} />
					<button type="button" aria-label="Remove" title="Remove" className={ICON_BUTTON} onClick={() => onRemove(index)}>
						<IconTrash size={16} />
					</button>
				</div>
			))}
		</div>
	);
};

/* A plain number, as the dimension columns (decimal) hold; units are set on the Product Dimensions element. */
const DimensionInput = ({ label, value, onValue }) => (
	<Field label={label}>
		<input type="number" min="0" step="any" className={FIELD} value={value && typeof value === "object" ? (value.value ?? "") : (value ?? "")} onChange={ev => onValue(ev.target.value)} />
	</Field>
);

/* ---------- Main component ---------- */

const ProductBulkUpdate = (props) => {

	const { token, addNotification } = useCounterStore()

	var ids = props.ids;
	const selectedCount = Array.isArray(ids) ? ids.length : 0;

	var [currentObject, setcurrentObject] = useState(
		{
			title: '',
			post_content: '',
			sku: '',
			price_type: '',
			sale_price: '',
			regular_price: '',
			stock_status: '',
			stock_count: '',
			weight: '',
			length: '',
			width: '',
			height: '',

			addons: [],
			tags: [],
			categories: [],
			visibility: [],
			brands: [],
			downloads: [],
			upsells: [],
			crosssells: [],
			faq: [],
			related_products: [],
			variations: [],
		}
	);

	var [loading, setloading] = useState(false);

	const hasAddon = (key) => asArray(currentObject?.addons).includes(key);

	function setField(key, value) {
		setcurrentObject(prev => ({ ...prev, [key]: value }));
	}

	// Removes the key so "No change" sends nothing for that field.
	function setOptionalField(key, value) {
		setcurrentObject(prev => {
			const next = { ...prev };
			if (value === "") delete next[key];
			else next[key] = value;
			return next;
		});
	}

	function updateList(key, updater) {
		setcurrentObject(prev => ({ ...prev, [key]: updater(asArray(prev[key])) }));
	}

	const pushItem = (key, entry) => updateList(key, list => [...list, entry]);
	const removeAt = (key, index) => updateList(key, list => list.filter((_, i) => i !== index));
	const patchAt = (key, index, patch) => updateList(key, list => list.map((it, i) => (i === index ? { ...it, ...patch } : it)));

	/* Dimensions are plain numbers: { value, unit } objects were saved by the server's floatval() as 1. */
	function setDimension(key, value) {
		setcurrentObject(prev => ({ ...prev, [key]: value }));
	}

	function toggleAddon(value) {
		updateList('addons', list => (list.includes(value) ? list.filter(v => v !== value) : [...list, value]));
	}

	function update_product_bulk() {

		var postData = JSON.stringify({ ...currentObject, ids: ids });

		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/update_product_bulk",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
				body: postData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				return response.json().then((res) => {
					setloading(false);

					if (res?.errors) {
						addNotification({ type: 'error', title: 'Update failed', content: res?.message || "The products could not be updated." });
					} else {
						addNotification({ type: 'success', title: 'Products updated', content: res?.message || `${selectedCount} ${selectedCount === 1 ? "product" : "products"} updated.` });
					}
				});
			})
			.catch((_error) => {
				setloading(false);
				addNotification({ type: 'error', title: 'Update failed', content: "Could not reach the server. Please try again." });
			});
	}

	function onPickProductInto(key) {
		return (item) => pushItem(key, { id: item.id, title: item.title });
	}

	function onPickGallery(item) {
		pushItem('gallery', { id: item.id, title: item.title, src: item.src });
	}

	// Categories and visibility toggle a term on or off.
	function toggleTerm(key) {
		return (item) => {
			updateList(key, list => {
				const exists = list.some(loopItem => loopItem.term_id === item?.term_id);
				if (exists) return list.filter(loopItem => loopItem.term_id !== item?.term_id);
				return [...list, { "term_id": item?.term_id, "name": item?.name, "slug": item?.slug }];
			});
		};
	}

	// Tags and brands add any names not already present.
	function addTerms(key) {
		return (items) => {
			updateList(key, list => {
				const next = [...list];
				asArray(items).forEach(item => {
					if (!next.some(term => term.name === item.name)) {
						next.push({ "term_id": item.term_id, "name": item.name });
					}
				});
				return next;
			});
		};
	}

	const clearButton = (key) => (
		<button type="button" className={TEXT_BUTTON} onClick={() => setField(key, [])}>Clear</button>
	);

	const gallery = asArray(currentObject?.gallery);

	return (
		<div className="@container flex flex-col gap-4">

			{/* Header */}
			<div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
				<div>
					<div className="text-sm font-semibold text-gray-900">
						Bulk update {selectedCount} {selectedCount === 1 ? "product" : "products"}
					</div>
					<div className="text-xs text-gray-500">Changes below are sent to every selected product.</div>
				</div>
				<button type="button" className={PRIMARY_BUTTON} disabled={loading || selectedCount === 0} onClick={update_product_bulk}>
					{loading ? <Spinner /> : <IconCheck size={16} />}
					{loading ? "Updating…" : "Update products"}
				</button>
			</div>

			<div className="grid grid-cols-1 gap-4 @4xl:grid-cols-[minmax(0,1fr)_340px]">

				{/* Main column */}
				<div className="flex min-w-0 flex-col gap-4">

					<Card title="General">
						<div className="flex flex-col gap-4">
							<Field label="Title">
								<input type="text" className={FIELD} value={currentObject?.title}
									onChange={(ev) => {
										var value = ev.target.value;
										setcurrentObject(prev => ({ ...prev, title: value, slug: toSlug(value) }));
									}} />
							</Field>
							<Field label="Content">
								<textarea rows={4} className={FIELD} value={currentObject?.post_content}
									onChange={(ev) => setField('post_content', ev.target.value)} />
							</Field>
							<Field label="SKU">
								<input type="text" className={FIELD} value={currentObject?.sku}
									onChange={(ev) => setField('sku', ev.target.value)} />
							</Field>
						</div>
					</Card>

					<Card title="Pricing">
						<div className="grid grid-cols-1 gap-4 @xl:grid-cols-3">
							<Field label="Pricing type">
								<select className={FIELD} value={currentObject?.price_type ?? ""} onChange={ev => setOptionalField('price_type', ev.target.value)}>
									<option value="">No change</option>
									<option value="onetime">One time</option>
								</select>
							</Field>
							<Field label="Regular price">
								<input type="text" inputMode="decimal" className={FIELD} value={currentObject?.regular_price}
									onChange={(ev) => setField('regular_price', ev.target.value)} />
							</Field>
							<Field label="Discount price">
								<input type="text" inputMode="decimal" className={FIELD} value={currentObject?.sale_price}
									onChange={(ev) => setField('sale_price', ev.target.value)} />
							</Field>
						</div>
					</Card>

					{hasAddon('manageStock') && (
						<Card title="Stock">
							<div className="flex flex-col gap-4">
								<div className="flex flex-col gap-1.5">
									<span className={LABEL}>Stock status</span>
									<div className="inline-flex w-max rounded-lg border border-gray-200 bg-gray-50 p-1">
										{[{ value: 'instock', label: 'In stock' }, { value: 'outofstock', label: 'Out of stock' }].map(opt => {
											const active = currentObject?.stock_status == opt.value;
											return (
												<button key={opt.value} type="button" aria-pressed={active}
													className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${active ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
													onClick={() => setField('stock_status', opt.value)}>
													{opt.label}
												</button>
											);
										})}
									</div>
								</div>
								{currentObject?.stock_status == 'instock' && (
									<Field label="Stock count" className="max-w-xs">
										<input type="number" className={FIELD} value={currentObject?.stock_count}
											onChange={(ev) => setField('stock_count', ev.target.value)} />
									</Field>
								)}
							</div>
						</Card>
					)}

					{hasAddon('gallery') && (
						<Card title="Gallery" action={<GalleryPicker popupClass="right-0 top-full" onPick={onPickGallery} />}>
							{gallery.length === 0 && (
								<EmptyState>No images yet. Use the picker above to add some.</EmptyState>
							)}
							{gallery.length > 0 && (
								<div className="grid grid-cols-2 gap-3 @lg:grid-cols-4">
									{gallery.map((item, index) => (
										<div key={`${item.id}-${index}`} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
											{item.src ? (
												<Image className="aspect-square w-full object-cover" src={item.src} width={200} height={200} alt={item.title || ""} />
											) : (
												<div className="flex aspect-square items-center justify-center text-gray-300"><IconPhotoOff /></div>
											)}
											<button type="button" aria-label="Remove image"
												className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-md bg-white/90 text-gray-600 shadow-sm hover:text-red-600 cursor-pointer"
												onClick={() => removeAt('gallery', index)}>
												<IconTrash size={14} />
											</button>
											{item.title && (
												<div className="truncate border-t border-gray-200 bg-white px-2 py-1.5 text-xs text-gray-600">{item.title}</div>
											)}
										</div>
									))}
								</div>
							)}
						</Card>
					)}

					{hasAddon('downloads') && (
						<Card title="Downloads" action={<ProductsPicker onPick={onPickProductInto('downloads')} />}>
							<PickedList items={asArray(currentObject?.downloads)} emptyText="No downloads added."
								onTitleChange={(i, v) => patchAt('downloads', i, { title: v })}
								onRemove={(i) => removeAt('downloads', i)} />
						</Card>
					)}

					{hasAddon('dimensions') && (
						<Card title="Dimensions">
							<div className="grid grid-cols-1 gap-4 @xl:grid-cols-2">
								<DimensionInput label="Weight" value={currentObject?.weight} onValue={v => setDimension('weight', v)} />
								<DimensionInput label="Length" value={currentObject?.length} onValue={v => setDimension('length', v)} />
								<DimensionInput label="Width" value={currentObject?.width} onValue={v => setDimension('width', v)} />
								<DimensionInput label="Height" value={currentObject?.height} onValue={v => setDimension('height', v)} />
							</div>
						</Card>
					)}

					{hasAddon('upsellsCrosssells') && (
						<Card title="Upsells & Cross-sells">
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-between gap-3">
										<span className="text-sm font-medium text-gray-700">Upsells</span>
										<ProductsPicker onPick={onPickProductInto('upsells')} />
									</div>
									<PickedList items={asArray(currentObject?.upsells)} emptyText="No upsells added."
										onTitleChange={(i, v) => patchAt('upsells', i, { title: v })}
										onRemove={(i) => removeAt('upsells', i)} />
								</div>
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-between gap-3">
										<span className="text-sm font-medium text-gray-700">Cross-sells</span>
										<ProductsPicker onPick={onPickProductInto('crosssells')} />
									</div>
									<PickedList items={asArray(currentObject?.crosssells)} emptyText="No cross-sells added."
										onTitleChange={(i, v) => patchAt('crosssells', i, { title: v })}
										onRemove={(i) => removeAt('crosssells', i)} />
								</div>
							</div>
						</Card>
					)}

					{hasAddon('faq') && (
						<Card title="FAQ" action={
							<button type="button" className={SECONDARY_BUTTON}
								onClick={() => pushItem('faq', { title: "New question", content: "" })}>
								<IconPlus size={16} /> Add question
							</button>
						}>
							{asArray(currentObject?.faq).length === 0 && <EmptyState>No questions added.</EmptyState>}
							<div className="flex flex-col gap-1">
								{asArray(currentObject?.faq).map((item, index) => (
									<ToggleContent key={index} title={
										<div className="flex min-w-0 items-center gap-2">
											<span className="truncate">{item.title || "Untitled question"}</span>
										</div>
									}>
										<div className="flex flex-col gap-3">
											<Field label="Question">
												<input type="text" className={FIELD} value={item.title ?? ""}
													onChange={(ev) => patchAt('faq', index, { title: ev.target.value })} />
											</Field>
											<Field label="Answer">
												<textarea rows={3} className={FIELD} value={item?.content ?? ""}
													onChange={(ev) => patchAt('faq', index, { content: ev.target.value })} />
											</Field>
											<div>
												<button type="button" className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 hover:text-red-700 cursor-pointer"
													onClick={() => removeAt('faq', index)}>
													<IconTrash size={14} /> Remove question
												</button>
											</div>
										</div>
									</ToggleContent>
								))}
							</div>
						</Card>
					)}

					{hasAddon('related_products') && (
						<Card title="Related Products" action={<ProductsPicker onPick={onPickProductInto('related_products')} />}>
							<PickedList items={asArray(currentObject?.related_products)} emptyText="No related products added."
								onTitleChange={(i, v) => patchAt('related_products', i, { title: v })}
								onRemove={(i) => removeAt('related_products', i)} />
						</Card>
					)}

					{hasAddon('variations') && (
						<Card title="Variations" action={<ProductsPicker onPick={onPickProductInto('variations')} />}>
							<PickedList items={asArray(currentObject?.variations)} emptyText="No variations added."
								onTitleChange={(i, v) => patchAt('variations', i, { title: v })}
								onRemove={(i) => removeAt('variations', i)} />
						</Card>
					)}
				</div>

				{/* Sidebar */}
				<div className="flex min-w-0 flex-col gap-4">

					<Card title="Publish">
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between gap-3">
								<span className={LABEL}>Featured</span>
								<button type="button" aria-pressed={!!currentObject?.featured}
									onClick={() => setField('featured', !currentObject?.featured)}
									className={`inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-colors cursor-pointer ${currentObject?.featured ? "border-amber-200 bg-amber-50 text-amber-600 hover:bg-amber-100" : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"}`}>
									{currentObject?.featured ? <IconStarFilled size={15} /> : <IconStar size={15} />}
									{currentObject?.featured ? "Featured" : "Not featured"}
								</button>
							</div>

							<Field label="Status">
								<select className={FIELD} value={currentObject?.postStatus ?? ""} onChange={ev => setOptionalField('postStatus', ev.target.value)}>
									<option value="">No change</option>
									<option value="publish">Publish</option>
									<option value="draft">Draft</option>
								</select>
							</Field>

							<div className="grid grid-cols-2 gap-3">
								<Field label="Menu order">
									<input type="number" className={FIELD} value={currentObject?.menu_order ?? ""}
										onChange={(ev) => setField('menu_order', ev.target.value)} />
								</Field>
								<Field label="Trade price">
									<input type="number" className={FIELD} value={currentObject?.trade_price ?? ""}
										onChange={(ev) => setField('trade_price', ev.target.value)} />
								</Field>
							</div>

							<Field label="Short description">
								<textarea rows={3} className={FIELD} value={currentObject?.post_excerpt ?? ""}
									onChange={(ev) => setField('post_excerpt', ev.target.value)} />
							</Field>
						</div>
					</Card>

					{hasAddon('categories') && (
						<Card title="Categories" action={clearButton('categories')}>
							<TermsPicker taxonomy="product_cat" selected={asArray(currentObject?.categories)} onPick={toggleTerm('categories')} />
						</Card>
					)}

					{hasAddon('visibility') && (
						<Card title="Visibility" action={clearButton('visibility')}>
							<TermsPicker taxonomy="product_visibility" selected={asArray(currentObject?.visibility)} onPick={toggleTerm('visibility')} />
						</Card>
					)}

					{hasAddon('tags') && (
						<Card title="Tags" action={asArray(currentObject?.tags).length > 0 && clearButton('tags')}>
							<div className="flex flex-col gap-3">
								{asArray(currentObject?.tags).length > 0 && (
									<div className="flex flex-wrap gap-1.5">
										{asArray(currentObject?.tags).map((item, index) => (
											<Chip key={`${item.name}-${index}`} label={item.name} onRemove={() => removeAt('tags', index)} />
										))}
									</div>
								)}
								<TagsPicker taxonomy="product_tag" selected={asArray(currentObject?.tags)} onPick={addTerms('tags')} />
							</div>
						</Card>
					)}

					{hasAddon('brands') && (
						<Card title="Brands" action={asArray(currentObject?.brands).length > 0 && clearButton('brands')}>
							<div className="flex flex-col gap-3">
								{asArray(currentObject?.brands).length > 0 && (
									<div className="flex flex-wrap gap-1.5">
										{asArray(currentObject?.brands).map((item, index) => (
											<Chip key={`${item.name}-${index}`} label={item.name} onRemove={() => removeAt('brands', index)} />
										))}
									</div>
								)}
								<TagsPicker taxonomy="product_brand" selected={asArray(currentObject?.brands)} onPick={addTerms('brands')} />
							</div>
						</Card>
					)}

					<Card title="Sections" action={
						asArray(currentObject?.addons).length > 0 ? (
							<button type="button" className={TEXT_BUTTON} onClick={() => setField('addons', [])}>
								<span className="inline-flex items-center gap-1"><IconRefresh size={12} /> Reset</span>
							</button>
						) : null
					}>
						<p className="mb-3 text-xs text-gray-500">Turn on the sections you want to edit for the selected products.</p>
						<div className="flex flex-wrap gap-1.5">
							{addonsList.map(item => {
								const active = hasAddon(item.value);
								return (
									<button key={item.value} type="button" aria-pressed={active} onClick={() => toggleAddon(item.value)}
										className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${active ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"}`}>
										{active ? <IconCheck size={13} /> : <IconPlus size={13} />}
										{item.label}
									</button>
								);
							})}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default ProductBulkUpdate;
