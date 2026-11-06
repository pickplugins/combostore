"use client"
import React from "react";
import { LinkedProductsView } from "./linkedProducts";

/*
	A product's upsells - the products picked under Upsells on the product
	being viewed - through the post loop inside it. Renders nothing for a
	product without upsells, or with no product. The shared logic is in
	linkedProducts.jsx (productCrosssells uses it too).
*/
const ProductUpsellsView = (props) => <LinkedProductsView {...props} blockType="productUpsells" field="upsells" />;

export default ProductUpsellsView;
