import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { useActiveVariation } from "../context/VariationScope";
import { elementCssClasses } from "../ElementsDefinition";
import { productMoq } from "../../../store/useCounterStore";

/*
	The minimum order quantity to show: the one the cart enforces
	(productMoq in store/useCounterStore.js) - the picked variation's own MOQ
	when it has one saved, otherwise the product's. 1 when neither sets one.
*/
export function moqFor(product, activeVariation) {
	var hasVariations = Array.isArray(product?.addons) && product.addons.includes('variations');
	return productMoq(product, hasVariations ? activeVariation : null);
}

/*
	The block's markup, shared with the builder preview (ProductMoq.jsx): an
	optional icon, an optional label ("Minimum order:"), the quantity and an
	optional unit ("pcs"). Label and unit divs are only drawn when set.
*/
export function ProductMoqMarkup({ cls, id, index, type, options, moq, rootClassName = '', rootProps = {} }) {

	var IconX = tablerIcon(options?.icon);
	var iconSize = Number(options?.iconSize) || 20;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{IconX && (
				<div className={cls('icon')}><IconX size={iconSize} /></div>
			)}
			{options?.label && <div className={cls('label')}>{options.label}</div>}
			<div className={cls('value')}>{moq}</div>
			{options?.unit && <div className={cls('unit')}>{options.unit}</div>}
		</div>
	);
}

const ProductMoqView = (props) => {

	/* A key the block lacks falls back to the productMoq defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productMoq', props?.cssSelectors);

	const product = usePost();

	/* The picked variation lives in a global store; only honour it for this product (same check as the price block). */
	var activeVariation = useActiveVariation(product);

	var moq = moqFor(product, activeVariation);

	/* "Minimum order: 1" says nothing, so by default the block shows only when there is a real minimum. */
	if (moq <= 1 && props?.options?.hideWhenOne !== false) return null;

	return <ProductMoqMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} moq={moq} />;
};

ProductMoqView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductMoqView;
