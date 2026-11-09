import { useState, useEffect } from "react";
import { IconRefresh, IconEraser, IconArrowNarrowLeft, IconArrowNarrowRight, IconPlus, IconPhoto, IconAdjustmentsHorizontal, IconStack2 } from "@tabler/icons-react";
import { IconToggleLeftFilled, IconCheckbox, IconSquare, IconFilter2Edit, IconTrash, IconStarFilled, IconStar, IconX, IconExternalLink } from "@tabler/icons-react";
import PopoverButton from '../../components/PopoverButton';

import Image from "next/image";
import { useUtilsStore } from '../../store/useUtilsStore';
import Spinner from '../Spinner';
import HtmlEditor from '../HtmlEditor';
import { useCounterStore } from '../../store/useCounterStore'
import ToggleContent from "../../components/ToggleContent";
import DropDown from '../../components/DropDown';
import GalleryPicker from "../../components/shop-elements/GalleryPicker";
import TaxTermsQuery from '../../components/TaxTermsQuery';
import { variationMeta, isDefaultVariation, isVariationEnabled, withParsedVariationMeta, withDefaultVariation } from '../../lib/variationDefaults';

/* Icon buttons, in place of gray boxes around a bare icon. */
const ICON_BUTTON =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 cursor-pointer";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Buttons on this screen were dark gray slabs that lightened on hover. */
const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer";

const SECONDARY_BUTTON =
  "inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

/* Fields, labels, badges and rows of this editor (matching the product editor: brand #634FE5). */
const FIELD =
  "w-full !rounded-lg !border !border-gray-300 !bg-white !px-3 !py-2 !text-sm !text-gray-800 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20";
const LABEL = "text-xs font-medium text-gray-600";
const SECTION_TITLE = "text-[11px] font-semibold uppercase tracking-wide text-gray-400";
const BADGE_GRAY = "inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600";
const BADGE_AMBER = "inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700";
const BADGE_DEFAULT = "inline-flex items-center gap-1 rounded-full bg-amber-400 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-900";
const EMPTY_STATE = "flex flex-col items-center gap-1 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-8 text-center";
/* A collapsible row (ToggleContent): its header and its open body. */
const ROW_HEADER = "w-full flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-left transition-colors hover:border-gray-300 hover:bg-gray-50 cursor-pointer select-none";
const ROW_BODY = "mt-1 rounded-xl border border-gray-200 bg-gray-50/60 p-4";

const ProductsVariations = (props) => {


	const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, settings } = useCounterStore()


	var product = props.product;
	// var onUpdateProduct = props.onUpdateProduct;
	var onChangeVariations = props.onChangeVariations;
	var onChangeAttributes = props.onChangeAttributes;
	const { formatDate, wrapCurrency } = useUtilsStore()

	var [attributesList, setattributesList] = useState([]);


	/* meta as objects (the plugin hands it over as a JSON string; sent back as one it would be stored double-encoded). */
	var [variations, setvariations] = useState(() => withParsedVariationMeta(product.variations ?? []));
	var defaultIndex = variations.findIndex(isDefaultVariation);
	var [attributes, setattributes] = useState(product.attributes ?? [{ title: 'Color', attr: 'color', items: ['Red', 'Blue'] }]);
	var [loading, setloading] = useState(false);

	var [selectedRows, setselectedRows] = useState([]);
	var [anchorId, setAnchorId] = useState(null);
	var [lastCheckedId, setLastCheckedId] = useState(null);
	var [bulkUpdatePrams, setbulkUpdatePrams] = useState({});






	const handleRowSelection = (entryId, shiftKey) => {
		var selectedRowsX = [...selectedRows];

		if (shiftKey && lastCheckedId !== null) {
			const currentIndex = variations.findIndex(
				(entry) => entry.id === entryId
			);
			const lastIndex = variations.findIndex(
				(entry) => entry.id === lastCheckedId
			);
			const [start, end] = [
				Math.min(currentIndex, lastIndex),
				Math.max(currentIndex, lastIndex),
			];

			// Clear previous selections
			selectedRowsX = [];

			// Select all items in range
			variations.slice(start, end + 1).forEach((entry) => {
				selectedRowsX.push(entry.id);
			});
		} else {
			const index = selectedRowsX.indexOf(entryId);
			if (index !== -1) {
				selectedRowsX.splice(index, 1);
				setAnchorId(null);
			} else {
				selectedRowsX.push(entryId);
				setAnchorId(entryId);
			}
		}

		setLastCheckedId(entryId);
		setselectedRows(selectedRowsX);
	};





	useEffect(() => {

		const result = settings?.productAttributes?.map(item => ({
			label: item.label,
			value: item.slug
		}));

		setattributesList(result);

	}, [settings?.productAttributes]);


	function setThumbnailFromUrl() {





		var postData = JSON.stringify(thumbUrl);
		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/set_thumbnail_from_url",
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

				if (response.ok && response.status < 400) {
					response.json().then((res) => {




						var success = res?.success;
						var src = res?.src;
						var attachment_id = res?.attachment_id;




						setloading(false);
						var post_thumbnail = { id: attachment_id, title: "", src: src }

						setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });



						// setTimeout(() => {
						// 	setaddTask({ ...addTask, title: "", success: null, errors: null })

						// }, 3000);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}



	/* ---- edits: copies, never in place (the fields used to change the objects in state directly) ---- */

	function setVariationField(index, key, value) {
		setvariations(list => list.map((variation, i) => i === index ? { ...variation, [key]: value } : variation));
	}

	function setAttributeField(index, patch) {
		setattributes(list => list.map((attribute, i) => i === index ? { ...attribute, ...patch } : attribute));
	}

	function removeAttribute(index) {
		setattributes(list => list.filter((_, i) => i !== index));
	}

	function addAttributeValue(index, value) {
		setattributes(list => list.map((attribute, i) => {
			if (i !== index) return attribute;
			var items = attribute?.items ?? [];
			/* The same value twice would make duplicate combinations. */
			if (items.some(item => item?.slug && item.slug === value?.slug)) return attribute;
			return { ...attribute, items: [...items, { id: value.id, name: value.name, slug: value.slug }] };
		}));
	}

	function removeAttributeValue(index, valueIndex) {
		setattributes(list => list.map((attribute, i) => i === index ? { ...attribute, items: (attribute?.items ?? []).filter((_, j) => j !== valueIndex) } : attribute));
	}

	/* Keeps the header row (a toggle button, also on Enter/Space) from reacting to a control inside it. */
	const stopToggle = {
		onClick: ev => ev.stopPropagation(),
		onKeyDown: ev => ev.stopPropagation(),
	};

	/* ---- header rows (render functions, not nested components, so they are not remounted on every change) ---- */

	function attributeHeader(attribute, index) {
		var count = attribute?.items?.length ?? 0;
		return (
			<div className="flex w-full items-center justify-between gap-3">
				<div className="flex min-w-0 items-center gap-2">
					<span className="truncate text-sm font-semibold text-gray-900">{attribute?.title || 'Untitled attribute'}</span>
					<span className={count ? BADGE_GRAY : BADGE_AMBER}>{count ? `${count} value${count === 1 ? '' : 's'}` : 'No values yet'}</span>
				</div>
				<button type="button" title="Remove attribute" aria-label={`Remove ${attribute?.title || 'attribute'}`} className={`${ICON_BUTTON} !h-7 !w-7 hover:!border-red-200 hover:!bg-red-50 hover:!text-red-600`}
					onClick={ev => { ev.stopPropagation(); removeAttribute(index); }}
					onKeyDown={ev => ev.stopPropagation()}>
					<IconTrash size={15} />
				</button>
			</div>
		);
	}

	function variationHeader(item, index) {
		var regular_price = parseFloat(item?.regular_price) || 0;
		var sale_price = parseFloat(item?.sale_price) || 0;
		var outOfStock = item?.stock_status === 'outofstock';
		var enabled = isVariationEnabled(item);
		var selected = selectedRows?.includes(item.id);

		return (
			<div className="flex w-full items-center gap-3">
				<input type="checkbox" aria-label={`Select ${item?.title || 'variation'}`} className="h-4 w-4 shrink-0 cursor-pointer accent-[#634FE5]"
					checked={!!selected}
					onClick={ev => { ev.stopPropagation(); handleRowSelection(item.id, ev.shiftKey); }}
					onKeyDown={ev => ev.stopPropagation()}
					onChange={() => { }} />

				<div className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
					{item?.thumbnail?.src
						? <Image className="h-full w-full object-cover" unoptimized src={item.thumbnail.src} width={80} height={80} alt="" />
						: <div className="flex h-full w-full items-center justify-center text-gray-300"><IconPhoto size={18} /></div>}
				</div>

				<div className="min-w-0 flex-1">
					<div className="flex flex-wrap items-center gap-1.5">
						<span className={`truncate text-sm font-semibold ${enabled ? 'text-gray-900' : 'text-gray-400 line-through'}`}>{item?.title || 'Untitled variation'}</span>
						<span className="text-[11px] text-gray-400">#{item.id}</span>
						{isDefaultVariation(item) && (
							<span title="Selected when the product page opens" className={BADGE_DEFAULT}><IconStarFilled size={10} /> Default</span>
						)}
						{!enabled && <span className={BADGE_GRAY}>Disabled</span>}
					</div>
					<div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-gray-500">
						<span className="flex items-center gap-1.5">
							{sale_price > 0
								? <><span className="font-medium text-gray-900">{wrapCurrency(sale_price)}</span><span className="line-through">{wrapCurrency(regular_price)}</span></>
								: regular_price > 0
									? <span className="font-medium text-gray-900">{wrapCurrency(regular_price)}</span>
									: <span className="text-amber-600">No price</span>}
						</span>
						<span className={outOfStock ? 'text-red-600' : 'text-emerald-600'}>
							{outOfStock ? 'Out of stock' : `In stock${item?.stock_count !== undefined && item?.stock_count !== null && item?.stock_count !== '' ? ` (${item.stock_count})` : ''}`}
						</span>
						{item?.sku && <span className="font-mono text-[11px]">{item.sku}</span>}
					</div>
				</div>
			</div>
		);
	}

	const getVariationKey = (variation, attrs) => {



		return attrs
			.map(attr => `${attr.attr}:${variation[attr.attr]?.slug ?? ''}`)
			.join('|');
	};


	const generateVariations = (attrs, previousVariations = []) => {




		const rawVariations = attrs.reduce(
			(acc, current) =>
				acc.flatMap((combo) =>
					current.items.map((item) => ({
						...combo,
						[current.attr]: { slug: item.slug, name: item.name, id: item.id },
					}))
				),
			[{}]
		);






		return rawVariations.map((combo, index) => {
			// Only attributes are used as the variation identifier
			const key = getVariationKey(combo, attrs);




			// Find exact existing variation
			const existing = previousVariations.find(
				(variation) =>
					getVariationKey(variation.attributes || {}, attrs) === key
			);

			// Find a previous variation that can preserve its data
			const parent = previousVariations.find((variation) => {
				const variationAttributes = variation.attributes || {};

				return attrs.every((attr) => {
					if (!(attr.attr in variationAttributes)) {
						return true;
					}

					return variationAttributes[attr.attr] === combo[attr.attr];
				});
			});


			const source = existing || parent;

			const attributes = {
				...(source?.attributes || {}),
				...combo,
			};

			const variationTitle = Object.values(attributes).map(attr => attr.name).join(' / ');



			return {
				id: source?.id || index + 1,

				// Display only — NOT used as identifier
				title: variationTitle,
				description: source?.description ?? '',

				attributes: attributes,
				downloadable: source?.downloadable ?? true,
				enable: source?.enable ?? true,

				price: source?.price ?? 0,
				sale_price: source?.sale_price ?? 0,
				regular_price: source?.regular_price ?? 0,
				trade_price: source?.trade_price ?? 0,

				thumbnail: source?.thumbnail ?? null,


				stock_status: source?.stock_status ?? "instock",
				stock_count: source?.stock_count ?? 0,
				backorders: source?.backorders ?? 0,

				sku: source?.sku ?? '',
				shipping_class: source?.shipping_class ?? null,
				weight: source?.weight ?? null,
				width: source?.width ?? null,
				height: source?.height ?? null,
				length: source?.length ?? null,

				/*
					meta (e.g. isDefault, the default variation) as an object. It was
					left out here, and this runs on mount, so every save dropped it.
					Only the exact match keeps isDefault: a `parent` can stand in for
					several new combinations, which would all become the default.
				*/
				meta: existing ? variationMeta(existing) : (({ isDefault, ...rest }) => rest)(variationMeta(parent)),

			};
		});
	};









	useEffect(() => {

		// No attributes = no variations
		if (attributes.length === 0) {
			setvariations([]);
			onChangeAttributes([]);
			return;
		}

		// An attribute without values cannot generate
		// valid combinations.
		const hasEmptyAttribute = attributes.some(
			attr => !attr.items || attr.items.length === 0
		);

		// If an attribute exists but has no values yet,
		// clear variations instead of keeping stale ones.
		if (hasEmptyAttribute) {
			setvariations([]);
			onChangeAttributes(attributes);
			return;
		}

		setvariations(previousVariations => {
			const next = generateVariations(
				attributes,
				previousVariations
			);
			/* At most one default: the first that kept the flag. */
			const firstDefault = next.findIndex(isDefaultVariation);
			return firstDefault >= 0 ? withDefaultVariation(next, firstDefault) : next;
		});

		onChangeAttributes(attributes);

	}, [attributes]);











	useEffect(() => {


		onChangeVariations(variations)
	}, [variations]);





	function generateSKU(prefix = 'SKU', length = 6) {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let random = '';

		for (let i = 0; i < length; i++) {
			random += chars.charAt(Math.floor(Math.random() * chars.length));
		}

		return `${prefix}-${random}`;
	}

	// SKU-7KX4P9



	function updateSelectedVariations(variations, selectedRows, updateParams) {

		var skuSuffix = updateParams.skuSuffix ?? false;
		var sku = updateParams.sku;

		console.log(skuSuffix);

		return variations.map((variation, index) => {
			if (selectedRows.includes(variation.id)) {


				var updateParamsX = { ...updateParams }
				delete updateParamsX.skuSuffix
				if (skuSuffix) {
					updateParamsX.sku = `${sku}${index}`
				}

				return {
					...variation,
					...updateParamsX,
				};
			}

			return variation;
		});
	}






	/* Attributes not added yet, for the "Add attribute" picker. */
	var addedAttrs = attributes.map(attribute => attribute?.attr);
	var attributeChoices = (attributesList ?? []).filter(option => !addedAttrs.includes(option?.value));

	var selectedCount = selectedRows.length;
	var allSelected = variations.length > 0 && selectedCount === variations.length;
	var enabledCount = variations.filter(isVariationEnabled).length;

	/* Bulk edit applies only the fields that were filled in (an empty one used to overwrite every selected variation). */
	function applyBulkEdit() {
		var params = Object.fromEntries(Object.entries(bulkUpdatePrams).filter(([key, value]) => key !== 'skuSuffix' && value !== '' && value !== undefined && value !== null));
		if (!Object.keys(params).length) {
			addNotification?.({ type: 'error', title: 'Nothing to apply', content: 'Fill in at least one field.' });
			return;
		}
		if (bulkUpdatePrams.skuSuffix) params.skuSuffix = true;
		setvariations(updateSelectedVariations(variations, selectedRows, params));
		addNotification?.({ type: 'success', title: 'Variations updated', content: `${selectedCount} variation${selectedCount === 1 ? '' : 's'} updated.` });
	}

	function setBulk(key, value) {
		setbulkUpdatePrams(current => ({ ...current, [key]: value }));
	}

	return (
		<div className="flex flex-col gap-8">

			{/* ================= Attributes ================= */}
			<section className="flex flex-col gap-3">
				<div className="flex flex-wrap items-end justify-between gap-3">
					<div>
						<h3 className="text-sm font-semibold text-gray-900">Attributes</h3>
						<p className="text-xs text-gray-500">The options customers choose from, such as Size or Color. Every combination of their values becomes a variation.</p>
					</div>
					{attributeChoices.length > 0 && (
						<DropDown allowReset={false} multiple={false} value={null} options={attributeChoices} label={<span className="inline-flex items-center gap-1.5"><IconPlus size={15} /> Add attribute</span>} labelClass={SECONDARY_BUTTON} position="right" onOptionsChoose={(args) => {
							if (!args?.value) return;
							setattributes(list => [...list, { title: args?.label, attr: args?.value, type: 'button', items: [] }]);
						}} />
					)}
				</div>

				{attributes.length === 0 ? (
					<div className={EMPTY_STATE}>
						<IconAdjustmentsHorizontal size={22} className="text-gray-300" />
						<div className="text-sm font-medium text-gray-600">No attributes yet</div>
						<div className="text-xs text-gray-500">Add one, such as Size, then pick its values.</div>
					</div>
				) : (
					<div className="flex flex-col gap-2">
						{attributes.map((item, index) => {
							var items = item?.items ?? [];
							var attr = item?.attr ?? 'color';
							return (
								<ToggleContent key={`${item?.attr}-${index}`} isOpen={items.length === 0} title={attributeHeader(item, index)}
									wrapperClass="w-full"
									headerClass={ROW_HEADER}
									headerTitleClass="flex w-full items-center gap-3"
									headerLabelClass="min-w-0 flex-1"
									contentClass={ROW_BODY}
								>
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-1.5">
											<label htmlFor={`attr-title-${index}`} className={LABEL}>Name shown to customers</label>
											<input id={`attr-title-${index}`} type="text" className={FIELD} value={item?.title ?? ''} onChange={ev => setAttributeField(index, { title: ev.target.value })} />
										</div>

										<div className="flex flex-col gap-2">
											<div className="flex items-center justify-between gap-3">
												<span className={LABEL}>Values</span>
												<TaxTermsQuery taxonomy={attr} allowReset={false} value={[]} label={<span className="inline-flex items-center gap-1"><IconPlus size={14} /> Add value</span>} allowSearch={true} position="right" labelClass={`${SECONDARY_BUTTON} !h-8 !text-xs`} onPick={(args) => addAttributeValue(index, args)} />
											</div>
											{items.length === 0 ? (
												<p className="text-xs text-amber-700">Add at least one value; until then this attribute makes no variations.</p>
											) : (
												<div className="flex flex-wrap gap-1.5">
													{items.map((value, valueIndex) => (
														<span key={value?.slug ?? valueIndex} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white py-0.5 pl-2.5 pr-1 text-xs font-medium text-gray-700">
															{value?.name}
															<button type="button" title={`Remove ${value?.name}`} aria-label={`Remove ${value?.name}`} className="inline-flex h-5 w-5 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600" onClick={() => removeAttributeValue(index, valueIndex)}>
																<IconX size={12} />
															</button>
														</span>
													))}
												</div>
											)}
										</div>
									</div>
								</ToggleContent>
							);
						})}
					</div>
				)}
			</section>

			{/* ================= Variations ================= */}
			<section className="flex flex-col gap-3">
				<div className="flex flex-wrap items-end justify-between gap-3">
					<div>
						<h3 className="flex items-center gap-2 text-sm font-semibold text-gray-900">
							Variations
							{variations.length > 0 && <span className={BADGE_GRAY}>{enabledCount === variations.length ? variations.length : `${enabledCount} of ${variations.length} enabled`}</span>}
						</h3>
						<p className="text-xs text-gray-500">One per combination. Select several to edit them together; shift-click selects a range.</p>
					</div>

					{variations.length > 0 && (
						<div className="flex items-center gap-2">
							<label className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-700 transition-colors hover:bg-gray-50">
								<input type="checkbox" className="h-4 w-4 accent-[#634FE5]"
									checked={allSelected}
									ref={el => { if (el) el.indeterminate = selectedCount > 0 && !allSelected; }}
									onChange={() => setselectedRows(allSelected ? [] : variations.map(variation => variation?.id))} />
								{selectedCount > 0 ? `${selectedCount} selected` : 'Select all'}
							</label>

							{selectedCount > 0 && (
								<PopoverButton wrapperClass="relative flex justify-end" buttonLabel={`Bulk edit`} buttonIcon={<IconFilter2Edit size={16} />} title={`Bulk edit ${selectedCount} variation${selectedCount === 1 ? '' : 's'}`} position="" buttonClass={PRIMARY_BUTTON} popoverClass="absolute right-0 top-full z-50 mt-2 max-h-[640px] w-[420px] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl xl:w-[560px]">
									<div className="flex flex-col gap-5 p-4">
										<p className="text-xs text-gray-500">Only the fields you fill in are changed, on all {selectedCount} selected variation{selectedCount === 1 ? '' : 's'}.</p>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Pricing</span>
											<div className="grid grid-cols-3 gap-3">
												{[['regular_price', 'Regular price'], ['sale_price', 'Sale price'], ['trade_price', 'Trade price']].map(([key, label]) => (
													<div key={key} className="flex flex-col gap-1.5">
														<label htmlFor={`bulk-${key}`} className={LABEL}>{label}</label>
														<input id={`bulk-${key}`} type="number" min="0" step="any" className={FIELD} placeholder="Keep" value={bulkUpdatePrams[key] ?? ''} onChange={ev => setBulk(key, ev.target.value)} />
													</div>
												))}
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Inventory</span>
											<div className="grid grid-cols-2 gap-3">
												<div className="flex flex-col gap-1.5">
													<label htmlFor="bulk-stock-status" className={LABEL}>Stock status</label>
													<select id="bulk-stock-status" className={FIELD} value={bulkUpdatePrams.stock_status ?? ''} onChange={ev => setBulk('stock_status', ev.target.value)}>
														<option value="">Keep</option>
														<option value="instock">In stock</option>
														<option value="outofstock">Out of stock</option>
													</select>
												</div>
												<div className="flex flex-col gap-1.5">
													<label htmlFor="bulk-stock-count" className={LABEL}>Stock count</label>
													<input id="bulk-stock-count" type="number" min="0" className={FIELD} placeholder="Keep" value={bulkUpdatePrams.stock_count ?? ''} onChange={ev => setBulk('stock_count', ev.target.value)} />
												</div>
											</div>
											<div className="flex flex-col gap-1.5">
												<div className="flex items-center justify-between gap-3">
													<label htmlFor="bulk-sku" className={LABEL}>SKU</label>
													<label className="flex cursor-pointer items-center gap-1.5 text-xs text-gray-600">
														<input type="checkbox" className="accent-[#634FE5]" checked={!!bulkUpdatePrams.skuSuffix} onChange={ev => setBulk('skuSuffix', ev.target.checked)} />
														Number each one (SKU0, SKU1, ...)
													</label>
												</div>
												<div className="flex items-center gap-2">
													<input id="bulk-sku" type="text" className={FIELD} placeholder="Keep" value={bulkUpdatePrams.sku ?? ''} onChange={ev => setBulk('sku', ev.target.value)} />
													<button type="button" className={SECONDARY_BUTTON} onClick={() => setBulk('sku', generateSKU())}>Generate</button>
												</div>
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Image</span>
											<div className="flex items-center gap-3">
												<div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
													{bulkUpdatePrams.thumbnail?.src
														? <Image className="h-full w-full object-cover" unoptimized src={bulkUpdatePrams.thumbnail.src} width={160} height={160} alt="" />
														: <div className="flex h-full w-full items-center justify-center text-gray-300"><IconPhoto size={20} /></div>}
												</div>
												<GalleryPicker popupClass="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px]" onPick={(prams) => setBulk('thumbnail', { id: prams.id, title: prams.title, src: prams.src })} />
												{bulkUpdatePrams.thumbnail?.src && <button type="button" className="text-xs text-gray-500 underline hover:text-red-600" onClick={() => setBulk('thumbnail', undefined)}>Keep each one&apos;s</button>}
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Description</span>
											<HtmlEditor value={bulkUpdatePrams.description || ""} minHeight={140} placeholder="Leave empty to keep each one's description" onChange={(html) => setBulk('description', html)} />
										</div>

										<div className="sticky bottom-0 -mx-4 -mb-4 flex items-center justify-end gap-2 border-t border-gray-100 bg-white px-4 py-3">
											<button type="button" className={SECONDARY_BUTTON} onClick={() => setbulkUpdatePrams({})}>Reset fields</button>
											<button type="button" className={PRIMARY_BUTTON} onClick={applyBulkEdit}>Apply to {selectedCount}</button>
										</div>
									</div>
								</PopoverButton>
							)}
						</div>
					)}
				</div>

				{variations.length === 0 ? (
					<div className={EMPTY_STATE}>
						<IconStack2 size={22} className="text-gray-300" />
						<div className="text-sm font-medium text-gray-600">No variations yet</div>
						<div className="text-xs text-gray-500">They appear here once every attribute has at least one value.</div>
					</div>
				) : (
					<div className="flex flex-col gap-2">
						{variations.map((item, index) => {
							var enabled = isVariationEnabled(item);
							var isDefault = isDefaultVariation(item);
							return (
								<ToggleContent key={index} isOpen={false} title={variationHeader(item, index)}
									wrapperClass="w-full"
									headerClass={`${ROW_HEADER} ${selectedRows?.includes(item.id) ? '!border-[#634FE5]/40 !bg-[#634FE5]/5' : ''} ${enabled ? '' : 'opacity-80'}`}
									headerTitleClass="flex w-full items-center gap-3"
									headerLabelClass="min-w-0 flex-1"
									contentClass={ROW_BODY}
								>
									<div className="flex flex-col gap-5">

										{/* Status: enabled, and the default variation (selected when the product page opens; lib/variationDefaults.js). */}
										<div className="grid gap-2 sm:grid-cols-2">
											<label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5">
												<input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#634FE5]" checked={enabled} onChange={ev => setVariationField(index, 'enable', ev.target.checked ? 'yes' : 'no')} />
												<span className="flex flex-col">
													<span className="text-sm font-medium text-gray-800">Enabled</span>
													<span className="text-xs text-gray-500">{enabled ? 'Customers can choose it.' : 'Hidden from the choices on the shop.'}</span>
												</span>
											</label>
											<label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5">
												<input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#634FE5]" checked={isDefault} onChange={ev => setvariations(withDefaultVariation(variations, ev.target.checked ? index : null))} />
												<span className="flex flex-col">
													<span className="text-sm font-medium text-gray-800">Default variation</span>
													<span className="text-xs text-gray-500">
														{isDefault
															? (enabled && item?.stock_status !== 'outofstock'
																? 'Selected when the product page opens.'
																: 'Not selected on the shop while it is disabled or out of stock.')
															: defaultIndex >= 0
																? `Replaces ${variations[defaultIndex]?.title || 'the current default'}.`
																: 'Pre-select it on the product page.'}
													</span>
												</span>
											</label>
										</div>

										<div className="flex flex-col gap-1.5">
											<label htmlFor={`var-title-${index}`} className={LABEL}>Title</label>
											<input id={`var-title-${index}`} type="text" className={FIELD} value={item?.title ?? ''} onChange={ev => setVariationField(index, 'title', ev.target.value)} />
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Pricing</span>
											<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
												{[['regular_price', 'Regular price'], ['sale_price', 'Sale price'], ['trade_price', 'Trade price']].map(([key, label]) => (
													<div key={key} className="flex flex-col gap-1.5">
														<label htmlFor={`var-${key}-${index}`} className={LABEL}>{label}</label>
														<input id={`var-${key}-${index}`} type="number" min="0" step="any" className={FIELD} value={item?.[key] ?? ''} onChange={ev => setVariationField(index, key, ev.target.value)} />
													</div>
												))}
											</div>
											{parseFloat(item?.sale_price) > 0 && parseFloat(item?.regular_price) > 0 && parseFloat(item.sale_price) >= parseFloat(item.regular_price) && (
												<p className="text-xs text-amber-700">The sale price is not below the regular price.</p>
											)}
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Inventory</span>
											<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
												<div className="flex flex-col gap-1.5">
													<label htmlFor={`var-stock-status-${index}`} className={LABEL}>Stock status</label>
													<select id={`var-stock-status-${index}`} className={FIELD} value={item?.stock_status ?? 'instock'} onChange={ev => setVariationField(index, 'stock_status', ev.target.value)}>
														<option value="instock">In stock</option>
														<option value="outofstock">Out of stock</option>
													</select>
												</div>
												<div className="flex flex-col gap-1.5">
													<label htmlFor={`var-stock-count-${index}`} className={LABEL}>Stock count</label>
													<input id={`var-stock-count-${index}`} type="number" min="0" className={FIELD} value={item?.stock_count ?? ''} onChange={ev => setVariationField(index, 'stock_count', ev.target.value)} />
												</div>
												<div className="flex flex-col gap-1.5">
													<label htmlFor={`var-sku-${index}`} className={LABEL}>SKU</label>
													<div className="flex items-center gap-2">
														<input id={`var-sku-${index}`} type="text" className={`${FIELD} font-mono`} value={item?.sku ?? ''} onChange={ev => setVariationField(index, 'sku', ev.target.value)} />
														<button type="button" title="Generate a SKU" aria-label="Generate a SKU" className={ICON_BUTTON} onClick={() => setVariationField(index, 'sku', generateSKU())}><IconRefresh size={15} /></button>
													</div>
												</div>
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Image</span>
											<div className="flex items-center gap-3">
												<div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
													{item?.thumbnail?.src
														? <Image className="h-full w-full object-cover" unoptimized src={item.thumbnail.src} width={200} height={200} alt="" />
														: <div className="flex h-full w-full items-center justify-center text-gray-300"><IconPhoto size={22} /></div>}
												</div>
												<div className="flex flex-col items-start gap-1.5">
													<GalleryPicker popupClass="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px]" onPick={(picked) => setVariationField(index, 'thumbnail', { id: picked.id, title: picked.title, src: picked.src })} />
													{item?.thumbnail?.src && <button type="button" className="text-xs text-gray-500 underline hover:text-red-600" onClick={() => setVariationField(index, 'thumbnail', null)}>Remove image</button>}
													<span className="text-[11px] text-gray-400">Shown when this variation is chosen.</span>
												</div>
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<span className={SECTION_TITLE}>Description</span>
											<HtmlEditor value={item?.description || ""} minHeight={140} onChange={(html) => setVariationField(index, 'description', html)} />
										</div>
									</div>
								</ToggleContent>
							);
						})}
					</div>
				)}
			</section>
		</div>
	);
};

export default ProductsVariations;
