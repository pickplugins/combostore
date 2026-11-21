"use client";

import { useEffect, useRef } from "react";
import { useCounterStore, currencyFromSettings } from "../store/useCounterStore";

/*
	Puts the store currency saved in Settings > Store Details into the counter
	store on the storefront. The dashboard gets it from `fetchSettings`; the
	storefront never calls that, so without this every price printed through
	`wrapCurrency` kept the BDT / Tk / after defaults.

	The root layout passes the saved `settings.currency` in. The first time it
	is applied during render, not in an effect, so it is already in place when
	the price blocks below render - on the server and at hydration - and the
	first paint shows the right symbol instead of flashing "Tk". Nothing is
	subscribed yet at that point, so the write re-renders nobody. A later
	change (a new value after navigating) goes through an effect, since by
	then price blocks are mounted and subscribed.

	Renders nothing.
*/
const apply = (currency) => {
	const patch = currencyFromSettings({ currency });
	const state = useCounterStore.getState();
	if (Object.keys(patch).some((k) => state[k] !== patch[k])) {
		useCounterStore.setState(patch);
	}
};

export default function StoreCurrencySync({ currency }) {
	const key = JSON.stringify(currency ?? null);
	const first = useRef(true);

	if (first.current) {
		first.current = false;
		apply(currency);
	}

	useEffect(() => {
		apply(currency);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key]);

	return null;
}
