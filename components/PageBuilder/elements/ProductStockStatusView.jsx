import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import * as TablerIcons from '@tabler/icons-react';
import { useProductStore } from "../../../store/productStore";
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
	return product?.stock_status === 'outofstock' ? 'outofstock' : 'instock';
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
	var LabelIconX = TablerIcons[options?.labelIcon];
	var outOfStock = status === 'outofstock';
	var StatusIconX = TablerIcons[outOfStock ? options?.outOfStockIcon : options?.inStockIcon];
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

	var storeActiveVariation = useProductStore((state) => state.activeVariation);

	/* A key the block lacks falls back to the productStockStatus defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productStockStatus', props?.cssSelectors);

	const product = usePost();

	/* The picked variation lives in a global store; only honour it for this product (same check as the price block). */
	var activeVariation = storeActiveVariation && String(storeActiveVariation?.product_id) === String(product?.product_id ?? product?.id)
		? storeActiveVariation
		: null;

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
