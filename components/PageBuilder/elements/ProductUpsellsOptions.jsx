import React from "react";
import { LinkedProductsOptions } from "./linkedProductsEditor";

/* Settings panel for the `productUpsells` block; see linkedProductsEditor.jsx. */
const ProductUpsellsOptions = (props) => (
	<LinkedProductsOptions {...props} blockType="productUpsells"
		intro={<>Shows the upsells picked on the product being viewed (product editor, <em>Upsells &amp; Cross-sells</em> &rarr; Upsells), in that order. A product without upsells shows nothing. The post loop inside sets how each product looks.</>} />
);

export default ProductUpsellsOptions;
