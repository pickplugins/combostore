import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { useActiveVariation } from "../context/VariationScope";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Whether the product - or the variation picked for it - is in stock:
	'instock' or 'outofstock'.

	The block used to take this from its own options.stock_status, which
	defaults to 'instock', so every product showed "In stock" on the shop,
	sold out or not. A product's status is the stock_status the product
	editor saves. A picked variation uses the rule the variation picker uses
	to grey out a tile (out-of-stock status, or a stock count at or below 0),
	so the badge and the picker never disagree.
*/
export function stockStatusFor(product, activeVariation) {
	if (activeVariation) {
		var status = activeVariation?.stock_status ?? activeVariation?.availability;
		var count = activeVariation?.stock_count ?? activeVariation?.stock_quantity ?? activeVariation?.quantity;
		if (status === 'outofstock' || status === 'out_of_stock' || status === 'unavailable') return 'outofstock';
		if (count !== undefined && count !== null && count !== '' && Number(count) <= 0) return 'outofstock';
		return 'instock';
	}
	if (product?.stock_status === 'outofstock') return 'outofstock';
	/* A product that tracks stock (the editor's "Stock" addon) with none left is sold out, whatever its saved status says. */
	if (Number.isFinite(availableStock(product, null)) && availableStock(product, null) <= 0) return 'outofstock';
	return 'instock';
}

/*
	How many can still be sold: the picked variation's stock count when it has
	one, else the product's when it tracks stock (addons include
	'manageStock'). Infinity when stock is not counted, so there is no cap.
*/
export function availableStock(product, activeVariation) {
	var count = activeVariation
		? (activeVariation?.stock_count ?? activeVariation?.stock_quantity ?? activeVariation?.quantity)
		: (product?.addons?.includes?.('manageStock') ? product?.stock_count : null);
	if (count === undefined || count === null || count === '' || !Number.isFinite(Number(count))) return Infinity;
	return Math.max(0, Math.floor(Number(count)));
}

/*
	The block's markup, shared with the builder preview (ProductStockStatus.jsx):
	an optional label (with its icon), then the status with its icon and text.
	The status's icon and text get the general `icon` / `label-text` classes
	plus the state's own: in-stock-icon / in-stock-label, or out-of-stock-icon /
	out-of-stock-label. Those four were declared but never applied.
*/
export function ProductStockStatusMarkup({ cls, id, index, type, options, status, rootClassName = '', rootProps = {} }) {

	/* Unset, tabler draws 24px; kept as the fallback so existing blocks do not change size. */
	var iconSize = Number(options?.iconSize) || 24;
	var LabelIconX = tablerIcon(options?.labelIcon);
	var outOfStock = status === 'outofstock';
	var StatusIconX = tablerIcon(outOfStock ? options?.outOfStockIcon : options?.inStockIcon);
	var state = outOfStock ? 'out-of-stock' : 'in-stock';
	var text = outOfStock ? (options?.outOfStockText ?? 'Out of stock') : (options?.inStockText ?? 'In stock');

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{options?.label && (
				<div className={cls('label')}>
					{LabelIconX && (
						<div className={cls('label-icon')}><LabelIconX size={iconSize} /></div>
					)}
					<div className={cls('label-text')}>{options.label}</div>
				</div>
			)}
			<div className={`${cls('stock-status')} ${cls(state)}`}>
				{StatusIconX && (
					<div className={`${cls('icon')} ${cls(`${state}-icon`)}`}><StatusIconX size={iconSize} /></div>
				)}
				<div className={`${cls('label-text')} ${cls(`${state}-label`)}`}>{text}</div>
			</div>
		</div>
	);
}

const ProductStockStatusView = (props) => {


	/* A key the block lacks falls back to the productStockStatus defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productStockStatus', props?.cssSelectors);

	const product = usePost();

	/* The picked variation lives in a global store; only honour it for this product (same check as the price block). */
	var activeVariation = useActiveVariation(product);

	return (
		<ProductStockStatusMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			status={stockStatusFor(product, activeVariation)}
		/>
	);
};

ProductStockStatusView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductStockStatusView;
