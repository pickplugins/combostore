import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The product's discount as a whole percentage, or null when it is not
	marked down: no sale price, a missing or zero regular price (which divided
	to Infinity or NaN), or a sale price at or above the regular price.
*/
export function discountPercent(product) {
	var regular = Number(product?.regular_price);
	var sale = Number(product?.sale_price);
	if (!sale || !regular || sale >= regular) return null;
	return Math.round(((regular - sale) / regular) * 100);
}

/*
	The badge's markup, shared with the builder preview (ProductDiscount.jsx):
	the percentage with its own "%" sign, then `label` as a suffix ("OFF",
	"off today"), so a label of "% off" would read "20%% off".
*/
export function ProductDiscountMarkup({ cls, id, index, type, percent, label, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<div className={cls('discount')}>{percent}%</div>
			{label && <span className={cls('label')}>{label}</span>}
		</div>
	);
}

const ProductDiscountView = (props) => {

	/* A key the block lacks falls back to the productDiscount defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productDiscount', props?.cssSelectors);

	const product = usePost();
	var percent = discountPercent(product);
	if (percent == null) return null;

	return <ProductDiscountMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} percent={percent} label={props?.options?.label} />;
};

ProductDiscountView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductDiscountView;
