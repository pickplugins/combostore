"use client"
import React from "react";
import { LinkedProductsCanvas } from "./linkedProductsEditor";

/* Builder (canvas) preview of the product upsells; see linkedProductsEditor.jsx. */
const ProductUpsells = (props) => (
	<LinkedProductsCanvas {...props} blockType="productUpsells" field="upsells"
		note="Upsells - previewing the latest products. On a product page this shows that product's upsells, and nothing when it has none." />
);

export default ProductUpsells;
