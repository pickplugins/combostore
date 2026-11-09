"use client";

import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { usePost } from "../context/PostContext";
import { useUtilsStore } from "../../../store/useUtilsStore";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useProductStore } from "../../../store/productStore";
import { elementCssClasses } from "../ElementsDefinition";
import { isDefaultVariation, isVariationEnabled } from "../../../lib/variationDefaults";


const NO_ITEMS = [];

/*
	The attribute tiles, shared with the builder preview
	(ProductVariations.jsx): for each attribute its title and a radio group
	of options. `cls` is the block's class lookup; `tileCls` is the lookup for
	the option tiles, which keep "blank means the default look". Nothing
	renders for a product without attributes - it used to draw an empty box
	with the block's `*` classes on every simple product.
*/
export function VariationsMarkup({ cls, tileCls, id, index, type, attributes, isSelected, isAvailable, onPick, rootClassName = '', rootProps = {} }) {
	if (!Array.isArray(attributes) || attributes.length === 0) return null;

	return (
		<div id={id} index={index} type={type} className={`${cls("*")} ${rootClassName}`} {...rootProps}>
			<div className={cls("attr-wrap")}>
				{attributes.map((attribute, attributeIndex) => {
					const attrTitle = attribute?.title;
					const attrSlug = attribute?.attr;
					const attrItems = Array.isArray(attribute?.items) ? attribute.items : [];

					return (
						<div key={`${attrSlug}-${attributeIndex}`} className={cls("attr-item")}>
							<div className={cls("attr-title")}>{attrTitle}</div>

							<div role="radiogroup" aria-label={typeof attrTitle === 'string' ? attrTitle : undefined} className={tileCls("attr-items-wrap")}>
								{attrItems.map((item, itemIndex) => {
									const itemSlug = item?.slug;
									const selected = isSelected(attrSlug, itemSlug);
									const available = isAvailable(attrSlug, itemSlug);

									return (
										<div
											key={`${attrSlug}-${itemSlug}-${itemIndex}`}
											className={`${tileCls("variation-item")} ${selected ? tileCls("variation-selected") : ""} ${!available ? tileCls("variation-disabled") : "cursor-pointer"}`}
											/* A radio in a radio group: reachable with Tab, picked
											   with Enter or Space, and read out as selected or not. */
											role="radio"
											aria-checked={selected}
											aria-disabled={!available}
											tabIndex={available ? 0 : -1}
											onKeyDown={(ev) => {
												if (ev.key !== 'Enter' && ev.key !== ' ') return;
												ev.preventDefault();
												if (available) onPick(attrSlug, itemSlug);
											}}
											onClick={(ev) => {
												ev.stopPropagation();
												if (available) onPick(attrSlug, itemSlug);
											}}
										>
											{item?.name}
										</div>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const ProductVariationsView = (props) => {
	const {
		id,
		type,
		index,
		cssSelectors = {},
		options = {},
		onChangePrice,
		onChangeVariation,
		viewType = "list",
	} = props;

	const productData = usePost();



	var setActiveVariation = useProductStore(
		(state) => state.setActiveVariation
	);


	var activeVariation = useProductStore(
		(state) => state.activeVariation
	);







	const { wrapCurrency } = useUtilsStore();

	/* One shared empty list, so the effects below do not see a new [] - and re-run - on every render. */
	const attributes = Array.isArray(productData?.attributes) ? productData.attributes : NO_ITEMS;
	const variations = Array.isArray(productData?.variations) ? productData.variations : NO_ITEMS;

	const [selectedAttributes, setSelectedAttributes] = useState({});
	const [selectedVariation, setSelectedVariation] = useState(null);
	const [price, setPrice] = useState(null);

	/**
	 * Normalize attribute name.
	 *
	 * Allows:
	 *
	 * "Color"
	 * "color"
	 * "color_pa"
	 *
	 * to be compared consistently.
	 */
	const normalizeAttributeName = (value) => {
		return String(value ?? "")
			.trim()
			.toLowerCase()
			.replace(/^attribute_/, "")
			.replace(/^pa_/, "")
			.replace(/[-_\s]+/g, "");
	};

	/**
	 * Normalize attribute value.
	 */
	const normalizeAttributeValue = (value) => {
		return String(value ?? "")
			.trim()
			.toLowerCase();
	};

	/**
	 * Get variation attributes.
	 *
	 * Supports:
	 *
	 * {
	 *   Color: "Red",
	 *   Size: "Small"
	 * }
	 *
	 * and:
	 *
	 * [
	 *   { name: "Color", value: "Red" },
	 *   { name: "Size", value: "Small" }
	 * ]
	 */
	const getVariationAttributes = (variation) => {
		const variationAttributes = variation?.attributes ?? {};

		return Object.entries(variationAttributes).reduce(
			(result, [name, value]) => {
				let normalizedValue = value;

				// New structure:
				// color: { slug: "white", name: "White", id: 965 }
				if (value && typeof value === "object") {
					normalizedValue =
						value?.slug ??
						value?.name ??
						value?.value ??
						"";
				}

				result[normalizeAttributeName(name)] =
					normalizeAttributeValue(normalizedValue);

				return result;
			},
			{}
		);
	};

	const findMatchingVariation = (selection) => {
		if (!attributes?.length) {
			return null;
		}

		const allAttributesSelected = attributes.every((attribute) => {
			const attrKey = attribute?.attr;

			const selectedValue = selection?.[attrKey];

			return (
				selectedValue !== undefined &&
				selectedValue !== null &&
				selectedValue !== ""
			);
		});

		if (!allAttributesSelected) {
			return null;
		}

		const variation = variations.find((variation) => {
			const variationAttributes =
				getVariationAttributes(variation);

			return attributes.every((attribute) => {
				const attrKey = attribute?.attr;

				const selectedValue =
					selection?.[attrKey];

				const variationValue =
					variationAttributes[
					normalizeAttributeName(attrKey)
					];

				return (
					variationValue ===
					normalizeAttributeValue(selectedValue)
				);
			});
		});

		return variation ?? null;
	};


	/**
	 * Is a variation available?
	 */
	const isVariationAvailable = (variation) => {
		if (!variation) {
			return false;
		}

		const stock_status =
			variation?.stock_status ??
			variation?.stock_status ??
			variation?.availability;

		const stock_count =
			variation?.stock_count ??
			variation?.stock_quantity ??
			variation?.quantity;

		if (
			stock_status === "outofstock" ||
			stock_status === "out_of_stock" ||
			stock_status === "unavailable"
		) {
			return false;
		}

		if (
			stock_count !== undefined &&
			stock_count !== null &&
			Number(stock_count) <= 0
		) {
			return false;
		}

		return true;
	};

	/**
	 * Check whether a particular attribute item can currently be selected.
	 *
	 * Example:
	 *
	 * Color = Red
	 * Size = Medium
	 *
	 * If Red + Medium exists but is out of stock,
	 * Medium will be considered unavailable.
	 */
	const isOptionAvailable = (attributeSlug, itemSlug) => {
		if (!attributeSlug || !itemSlug) {
			return false;
		}

		const nextSelection = {
			...selectedAttributes,
			[attributeSlug]: itemSlug,
		};

		const matchingVariations = variations.filter((variation) => {
			const variationAttributes =
				getVariationAttributes(variation);

			return Object.entries(nextSelection).every(
				([attribute, value]) => {
					const variationValue =
						variationAttributes[
						normalizeAttributeName(attribute)
						];

					return (
						variationValue ===
						normalizeAttributeValue(value)
					);
				}
			);
		});

		return matchingVariations.some(isVariationAvailable);
	};

	/**
	 * Handle attribute click.
	 */



	const handleAttributeClick = (attributeSlug, itemSlug) => {
		const currentValue =
			selectedAttributes?.[attributeSlug];

		// Click selected option again = deselect
		if (currentValue === itemSlug) {
			setSelectedAttributes((prev) => {
				const next = { ...prev };
				delete next[attributeSlug];
				return next;
			});

			return;
		}

		setSelectedAttributes((prev) => ({
			...prev,
			[attributeSlug]: itemSlug,
		}));
	};









	useEffect(() => {
		const variation = findMatchingVariation(selectedAttributes);

		// No complete matching variation
		if (!variation) {
			setSelectedVariation(null);
			setPrice(null);
			setActiveVariation(null);

			if (typeof onChangeVariation === "function") {
				onChangeVariation(null);
			}

			if (typeof onChangePrice === "function") {
				onChangePrice(null);
			}

			return;
		}

		setSelectedVariation(variation);
		setActiveVariation(variation);

		const variationPrice =
			variation?.sale_price > 0
				? variation.sale_price
				: variation?.regular_price ?? variation?.price ?? null;

		setPrice(variationPrice);

		if (typeof onChangePrice === "function") {
			onChangePrice(variationPrice, variation);
		}

		if (typeof onChangeVariation === "function") {
			onChangeVariation(variation);
		}
	}, [
		selectedAttributes,
		variations,
		attributes,
		onChangePrice,
		onChangeVariation,
		setActiveVariation,
	]);
	/**
	 * Select a variation when the page opens: the product's default
	 * variation (set in the product editor, meta.isDefault) when it is
	 * enabled and in stock, otherwise the only available one if there is
	 * just one. The price, the add-to-cart button and the gallery follow,
	 * through the active variation this sets.
	 */
	useEffect(() => {
		if (!attributes.length || !variations.length) {
			return;
		}

		// Don't overwrite user's current selection.
		if (Object.keys(selectedAttributes).length > 0) {
			return;
		}

		const availableVariations = variations.filter(
			(variation) => isVariationEnabled(variation) && isVariationAvailable(variation)
		);

		const variation =
			availableVariations.find(isDefaultVariation) ??
			(availableVariations.length === 1 ? availableVariations[0] : null);

		if (!variation) {
			return;
		}
		const variationAttributes =
			getVariationAttributes(variation);

		const initialSelection = {};

		/*
			Keyed by each attribute's `attr`, as clicks, matching and the
			highlighted tile all are. It was keyed by `title`, so whenever the
			two differed the selection matched nothing and no tile lit up.
		*/
		attributes.forEach((attribute) => {
			const attrKey = attribute?.attr;
			const value = variationAttributes[normalizeAttributeName(attrKey)];
			if (attrKey && value) {
				initialSelection[attrKey] = value;
			}
		});

		if (Object.keys(initialSelection).length) {
			setSelectedAttributes(initialSelection);
		}
	}, [attributes, variations]);

	/**
	 * Expose selected data if needed by parent component.
	 */
	const selectedStockCount =
		selectedVariation?.stock_count ??
		selectedVariation?.stock_quantity ??
		selectedVariation?.quantity;

	const selectedStockStatus =
		selectedVariation?.stock_status ??
		selectedVariation?.stock_status;

	const isSelectedVariationAvailable =
		selectedVariation
			? isVariationAvailable(selectedVariation)
			: false;

	/* Each part's classes; a key the block lacks falls back to the productVariations defaults in ElementsDefinition.js. */
	const cls = elementCssClasses('productVariations', cssSelectors);
	/* The option tiles keep "blank means the default look": blocks made from the old definition saved
	   them as " ", and an empty selected or disabled style would hide which option is chosen. */
	const defaultCls = elementCssClasses('productVariations', {});
	const cssSelectorClass = (key) => {
		const value = cssSelectors?.[key]?.classes;
		return typeof value === 'string' && value.trim() !== '' ? value : defaultCls(key);
	};

	return (
		<VariationsMarkup
			cls={cls}
			tileCls={cssSelectorClass}
			id={id}
			index={index}
			type={type}
			attributes={attributes}
			isSelected={(attrSlug, itemSlug) => selectedAttributes?.[attrSlug] === itemSlug}
			isAvailable={isOptionAvailable}
			onPick={handleAttributeClick}
		/>
	);
};

ProductVariationsView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	index: PropTypes.number,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	onChangePrice: PropTypes.func,
	onChangeVariation: PropTypes.func,
	viewType: PropTypes.string,
};

export default ProductVariationsView;