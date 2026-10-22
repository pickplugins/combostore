import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";


/*
	Storefront twin of ProductDiscount.jsx: same markup and the same two
	selectors, minus the editor's drag and select chrome.

	It prints the percentage with its own "%" sign and then `label`, so a label
	is a suffix -- "OFF", "off today", "discount". Writing "% off" into the
	label gives "20%% off".
*/
const ProductDiscountView = (props) => {

	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var label = options?.label;


	const product = usePost();

	var regular_price = Number(product?.regular_price);
	var sale_price = Number(product?.sale_price);


	function calculateDiscountPercentage(regular_price, sale_price) {
		const discount = regular_price - sale_price;
		return Math.round((discount / regular_price) * 100);
	}


	/*
		Nothing to show unless the product is actually marked down. The guard is
		wider than the editor's, which only checks that a sale price exists: a
		regular price of 0 or a missing one divides to Infinity or NaN, and a
		sale price at or above the regular price is not a discount.
	*/
	if (!sale_price || !regular_price || sale_price >= regular_price) {
		return null;
	}


	return (


		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>

			<div className={`${cssSelectors['discount']?.classes}`}>{calculateDiscountPercentage(regular_price, sale_price)}%</div>

			{label && (
				<span className={`${cssSelectors['label']?.classes}`}>{label}</span>
			)}


		</div>



	);
};


ProductDiscountView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};


export default ProductDiscountView;
