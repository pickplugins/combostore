"use client"
import React from "react";
import { LinkedProductsCanvas } from "./linkedProductsEditor";

/* Builder (canvas) preview of the product cross-sells; see linkedProductsEditor.jsx. */
const ProductCrosssells = (props) => (
	<LinkedProductsCanvas {...props} blockType="productCrosssells" field="crosssells"
		note="Cross-sells - previewing the latest products. On a product page this shows that product's cross-sells, and nothing when it has none." />
);

export default ProductCrosssells;
