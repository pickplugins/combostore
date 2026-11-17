import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { useActiveVariation } from "../context/VariationScope";
import { elementCssClasses } from "../ElementsDefinition";

export const DIMENSION_KEYS = ['weight', 'length', 'width', 'height'];

/* A saved dimension as a number, or null when unset / 0. Older saves may hold { value, unit }. */
function dimensionNumber(raw) {
	var value = raw && typeof raw === 'object' ? raw.value : raw;
	var n = parseFloat(value);
	return Number.isFinite(n) && n > 0 ? n : null;
}

/* 20.00 -> "20", 1.50 -> "1.5". */
function formatNumber(n) {
	return String(Math.round(n * 100) / 100);
}

/*
	The dimensions to show: { weight, length, width, height }, each a number
	or null. Each comes from the picked variation when it has that value set,
	otherwise from the product - so a variation that only sets its weight still
	shows the product's size.
*/
export function dimensionsFor(product, activeVariation) {
	var hasVariations = Array.isArray(product?.addons) && product.addons.includes('variations');
	var variation = hasVariations ? activeVariation : null;
	var result = {};
	DIMENSION_KEYS.forEach(key => {
		result[key] = dimensionNumber(variation?.[key]) ?? dimensionNumber(product?.[key]);
	});
	return result;
}

export function hasDimensions(dimensions) {
	return DIMENSION_KEYS.some(key => dimensions?.[key] != null);
}

/*
	The rows the block draws, from its options:
	- format "list": one row per set value - Weight, Length, Width, Height.
	- format "inline": the size as one row ("20 × 10 × 5 cm", the set values
	  among length, width and height in that order), then the weight row.
	showWeight: false leaves the weight out of both.
*/
function dimensionRows(dimensions, options) {
	var weightUnit = options?.weightUnit ?? 'kg';
	var dimensionUnit = options?.dimensionUnit ?? 'cm';
	var rows = [];
	var weightRow = dimensions?.weight != null && options?.showWeight !== false
		? { key: 'weight', label: options?.weightLabel ?? 'Weight', value: formatNumber(dimensions.weight), unit: weightUnit }
		: null;

	if (options?.format === 'inline') {
		var sizes = ['length', 'width', 'height'].filter(key => dimensions?.[key] != null).map(key => formatNumber(dimensions[key]));
		if (sizes.length) rows.push({ key: 'size', label: options?.sizeLabel ?? 'Dimensions', value: sizes.join(' × '), unit: dimensionUnit });
		if (weightRow) rows.push(weightRow);
		return rows;
	}

	if (weightRow) rows.push(weightRow);
	[['length', 'Length'], ['width', 'Width'], ['height', 'Height']].forEach(([key, fallback]) => {
		if (dimensions?.[key] != null) {
			rows.push({ key, label: options?.[`${key}Label`] ?? fallback, value: formatNumber(dimensions[key]), unit: dimensionUnit });
		}
	});
	return rows;
}

/*
	The block's markup, shared with the builder preview (ProductDimensions.jsx):
	an optional heading (with its icon), then a row per dimension - its label,
	its value and the unit. A row also gets its own key's classes
	(`item-weight`, `item-length`, `item-width`, `item-height`, `item-size`)
	for one-off styling.
*/
export function ProductDimensionsMarkup({ cls, id, index, type, options, dimensions, rootClassName = '', rootProps = {} }) {

	var IconX = tablerIcon(options?.icon);
	var iconSize = Number(options?.iconSize) || 20;
	var rows = dimensionRows(dimensions, options);

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{(options?.label || IconX) && (
				<div className={cls('label')}>
					{IconX && <span className={cls('icon')}><IconX size={iconSize} /></span>}
					{options?.label && <span className={cls('label-text')}>{options.label}</span>}
				</div>
			)}
			<div className={cls('items')}>
				{rows.map(row => (
					<div key={row.key} className={`${cls('item')} ${cls(`item-${row.key}`)}`}>
						{row.label && <span className={cls('item-label')}>{row.label}</span>}
						<span className={cls('item-value')}>{row.value}</span>
						{row.unit && <span className={cls('unit')}>{row.unit}</span>}
					</div>
				))}
			</div>
		</div>
	);
}

const ProductDimensionsView = (props) => {

	/* A key the block lacks falls back to the productDimensions defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productDimensions', props?.cssSelectors);

	const product = usePost();

	/* The picked variation lives in a global store; only honour it for this product (same check as the price block). */
	var activeVariation = useActiveVariation(product);

	var dimensions = dimensionsFor(product, activeVariation);

	/* Nothing set (or only a weight the block hides): no empty box on the shop. */
	if (!dimensionRows(dimensions, props?.options).length) return null;

	return <ProductDimensionsMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} dimensions={dimensions} />;
};

ProductDimensionsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductDimensionsView;
