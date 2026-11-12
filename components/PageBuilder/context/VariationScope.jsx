"use client"
import React, { createContext, useContext, useMemo, useState } from "react";
import { useProductStore } from "../../../store/productStore";

/*
	Which variation is picked, for the product a block is showing.

	The picked variation lives in a global store (store/productStore.js),
	which is right on a single product page - one picker, one product - but
	wrong on an archive, where every card is a different product:

	  - a pick in one card's quick view changed the price, stock, gallery and
	    add to cart of every other card;
	  - the card's own Add To Cart, which shows its children (the quick view)
	    only until a variation is picked, swapped itself for its buttons as
	    soon as one was picked inside that quick view - unmounting the open
	    quick view under the shopper.

	<VariationScope> gives the blocks inside it (the quick view's panel) a
	selection of their own: the picker writes to it, and price, stock,
	gallery, SKU, excerpt and add to cart read from it. Outside a scope the
	global store is used as before, so the single product page is unchanged.

	Either way a variation is only honoured for the product it belongs to.
	Variations key on the WP post id, which is `product_id` on the product
	(get_product overwrites `id` with the cstore row id).
*/

const VariationScopeContext = createContext(null);

export function VariationScope({ children }) {
	const [activeVariation, setActiveVariation] = useState(null);
	const value = useMemo(() => ({ activeVariation, setActiveVariation }), [activeVariation]);

	return (
		<VariationScopeContext.Provider value={value}>
			{children}
		</VariationScopeContext.Provider>
	);
}

/* Does this variation belong to this product? (The check the price block has always made.) */
export function variationBelongsTo(variation, product) {
	if (!variation) return false;
	if (!product) return true;
	return String(variation?.product_id) === String(product?.product_id ?? product?.id);
}

/* The picked variation for `product`, or null. */
export function useActiveVariation(product) {
	const scope = useContext(VariationScopeContext);
	const storeVariation = useProductStore((state) => state.activeVariation);
	const variation = scope ? scope.activeVariation : storeVariation;

	return variationBelongsTo(variation, product) ? variation : null;
}

/* Where a picker records its pick: the nearest scope, else the global store. */
export function useSetActiveVariation() {
	const scope = useContext(VariationScopeContext);
	const storeSetter = useProductStore((state) => state.setActiveVariation);

	return scope ? scope.setActiveVariation : storeSetter;
}
