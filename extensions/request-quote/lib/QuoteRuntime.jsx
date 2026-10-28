"use client";

import React from "react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useQuoteStore } from "./store";
import { gateFor } from "./rules";

/*
	Headless. Mounted once per page by components/ExtensionsRuntime.jsx from
	the root layout, and renders nothing.

	Three jobs, none of which can belong to a block: the settings have to be
	adopted wherever a product is shown, the shopper's list has to survive a
	page change, and core's purchase gate has to be installed before a
	product page decides whether to draw an Add to Cart button. A block the
	merchant may not have placed on a given template could do none of them.
*/
const QuoteRuntime = () => {

	const storeSettings = useCounterStore((s) => s.settings);
	const setPurchaseGate = useCounterStore((s) => s.setPurchaseGate);

	const hydrateFromSettings = useQuoteStore((s) => s.hydrateFromSettings);
	const hydrateItems = useQuoteStore((s) => s.hydrateItems);

	/* The merchant's rules, from the settings the storefront already fetches. */
	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	/*
		The shopper's list, from localStorage - after mount, never during
		render. Seeding it during render would make the server markup and the
		first client render disagree, and React leaves a hydration mismatch
		rendered from markup the client never agreed with.
	*/
	React.useEffect(() => {
		hydrateItems();
	}, [hydrateItems]);

	/*
		Install the gate once.

		It reads the settings off the store when it is called rather than
		closing over them, so changing a rule takes effect without
		reinstalling - and so core never holds a stale copy of the rules.
	*/
	React.useEffect(() => {
		setPurchaseGate((product) => gateFor(product, useQuoteStore.getState().settings));

		/* Put back what was there. Without this, switching the extension off
		   would leave core calling a function from an extension that is no
		   longer running, and every quote-only product would stay unbuyable. */
		return () => setPurchaseGate(null);
	}, [setPurchaseGate]);

	return null;
};

export default QuoteRuntime;
