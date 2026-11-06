import React from "react";
import { LinkedProductsOptions } from "./linkedProductsEditor";

/* Settings panel for the `productCrosssells` block; see linkedProductsEditor.jsx. */
const ProductCrosssellsOptions = (props) => (
	<LinkedProductsOptions {...props} blockType="productCrosssells"
		intro={<>Shows the cross-sells picked on the product being viewed (product editor, <em>Upsells &amp; Cross-sells</em> &rarr; Cross-sells), in that order. A product without cross-sells shows nothing. The post loop inside sets how each product looks.</>} />
);

export default ProductCrosssellsOptions;
