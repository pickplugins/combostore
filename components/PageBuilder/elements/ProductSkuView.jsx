import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import * as TablerIcons from '@tabler/icons-react';
import { useProductStore } from "../../../store/productStore";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The SKU to show: the picked variation's own SKU when it has one (and the
	variation belongs to this product), otherwise the product's. Empty when
	neither has one - the block then renders nothing.
*/
export function skuFor(product, activeVariation) {
	var variationSku = String(activeVariation?.sku ?? '').trim();
	if (variationSku) return variationSku;
	return String(product?.sku ?? '').trim();
}

/*
	The block's markup, shared with the builder preview (ProductSku.jsx): an
	optional icon, an optional label ("SKU:") and the SKU. The label div is
	only drawn when there is a label - an empty one added an extra gap.
*/
export function ProductSkuMarkup({ cls, id, index, type, options, sku, rootClassName = '', rootProps = {} }) {

	var IconX = TablerIcons[options?.icon];
	/* Unset, tabler draws 24px; kept as the fallback so existing blocks do not change size. */
	var iconSize = Number(options?.iconSize) || 24;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{IconX && (
				<div className={cls('icon')}><IconX size={iconSize} /></div>
			)}
			{options?.label && <div className={cls('label')}>{options.label}</div>}
			<div className={cls('sku')}>{sku}</div>
		</div>
	);
}

const ProductSkuView = (props) => {

	var storeActiveVariation = useProductStore((state) => state.activeVariation);

	/* A key the block lacks falls back to the productSku defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productSku', props?.cssSelectors);

	const product = usePost();

	/* The picked variation lives in a global store; only honour it for this product (same check as the price block). */
	var activeVariation = storeActiveVariation && String(storeActiveVariation?.product_id) === String(product?.product_id ?? product?.id)
		? storeActiveVariation
		: null;

	var sku = skuFor(product, activeVariation);
	/* Shoppers used to see a bare "SKU:" for products without one. */
	if (!sku) return null;

	return <ProductSkuMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} sku={sku} />;
};

ProductSkuView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductSkuView;
