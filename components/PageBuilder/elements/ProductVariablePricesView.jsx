"use client";

import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";
import { usePost } from "../context/PostContext";
import { useUtilsStore } from "../../../store/useUtilsStore";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useProductStore } from "../../../store/productStore";


const ProductVariablePricesView = (props) => {
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

	const attributes = productData?.attributes ?? [];
	const variations = productData?.variations ?? [];

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
	 * Automatically select a variation when there is only
	 * one available combination.
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
			isVariationAvailable
		);

		if (availableVariations.length !== 1) {
			return;
		}

		const variation = availableVariations[0];
		const variationAttributes =
			getVariationAttributes(variation);

		const initialSelection = {};

		attributes.forEach((attribute) => {
			const attributeTitle = attribute?.title;

			const matchedKey = Object.keys(variationAttributes).find(
				(key) =>
					normalizeAttributeName(key) ===
					normalizeAttributeName(attributeTitle)
			);

			if (matchedKey) {
				initialSelection[attributeTitle] =
					variationAttributes[matchedKey];
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

	return (
		<>




			{attributes && (

				<div
					id={id}
					index={index}
					type={type}
					className={`${cssSelectors?.["*"]?.classes ?? ""}`}
				>



					<div
						className={`${cssSelectors?.["attr-wrap"]?.classes ?? ""}`}
					>
						{attributes.map((attribute, attributeIndex) => {
							const attrTitle = attribute?.title;
							const attrSlug = attribute?.attr;
							const attrItems = attribute?.items ?? [];



							return (
								<div key={`${attrSlug}-${attributeIndex}`} className={`${cssSelectors?.["attr-item"]?.classes ?? ""}`}
								>
									<div className={`${cssSelectors?.["attr-title"]?.classes ?? ""}`}							>
										{attrTitle}
									</div>

									<div className={`${cssSelectors?.["attr-items-wrap"]?.classes ?? ""}`}							>
										{/* {attrItems.map((item, itemIndex) => {
											const selected = selectedAttributes?.[attrSlug] === item?.slug;

											const available = isOptionAvailable(attrSlug, item);




											return (
												<div key={`${attrSlug}-${item?.slug}-${itemIndex}`} className={`${cssSelectors?.["variation-item"]?.classes ?? ""} ${selected ? cssSelectors?.["variation-selected"]?.classes : ""}   ${!available ? cssSelectors?.["variation-disabled"]?.classes : "cursor-pointer"
													}
                                            `}
													aria-selected={selected}
													aria-disabled={!available}
													onClick={() => {
														if (!available) {
															return;
														}


														handleAttributeClick(attrSlug, item?.slug);
													}}
												>

													{JSON.stringify(item)}


													{item?.name}
												</div>
											);
										})} */}

										{attrItems.map((item, itemIndex) => {
											const itemSlug = item?.slug;

											const selected =
												selectedAttributes?.[attrSlug] === itemSlug;

											const available =
												isOptionAvailable(attrSlug, itemSlug);

											return (
												<div
													key={`${attrSlug}-${itemSlug}-${itemIndex}`}
													className={`
                ${cssSelectors?.["variation-item"]?.classes ?? ""}
                ${selected
															? cssSelectors?.["variation-selected"]?.classes ?? ""
															: ""
														}
                ${!available
															? cssSelectors?.["variation-disabled"]?.classes ?? ""
															: "cursor-pointer"
														}
            `}
													aria-selected={selected}
													aria-disabled={!available}
													onClick={() => {
														if (!available) {
															return;
														}

														handleAttributeClick(
															attrSlug,
															itemSlug
														);
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
			)}
		</>
	);
};

ProductVariablePricesView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	index: PropTypes.number,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	onChangePrice: PropTypes.func,
	onChangeVariation: PropTypes.func,
	viewType: PropTypes.string,
};

export default ProductVariablePricesView;