"use client"
import React from "react";
import { LinkedProductsView } from "./linkedProducts";

/*
	A product's cross-sells - the products picked under Cross-sells on the
	product being viewed, usually things bought with it - through the post
	loop inside it. Renders nothing for a product without cross-sells, or with
	no product. The shared logic is in linkedProducts.jsx.
*/
const ProductCrosssellsView = (props) => <LinkedProductsView {...props} blockType="productCrosssells" field="crosssells" />;

export default ProductCrosssellsView;
