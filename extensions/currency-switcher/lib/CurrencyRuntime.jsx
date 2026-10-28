"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { useCounterStore } from "../../../store/useCounterStore";
import { useUtilsStore } from "../../../store/useUtilsStore";
import { useCurrencyStore, activeCurrency } from "./store";
import { formatPrice as convertAndFormat, guessCurrency } from "./convert";

/*
	Headless. Mounted once per page by components/ExtensionsRuntime.jsx from
	the root layout, and renders nothing.

	It installs the formatter that turns every price on the storefront into
	the shopper's currency, which has to be in effect wherever a price is
	printed - a block the merchant may or may not have placed could not do
	it, and a page they forgot would quietly show the base currency instead.
*/

/*
	Where the formatter must keep its hands off.

	Every one of these screens shows real money: what an order was worth,
	what an expense cost, what a product is priced at in the store's own
	currency. `wrapCurrency` is shared with the storefront, so without this
	a merchant browsing in euros would see their own takings converted, and
	would have no way to tell that from the real figures.
*/
const ADMIN_PREFIXES = ["/dashboard", "/settings", "/builder"];

export function isAdminPath(pathname) {
	const path = String(pathname ?? "");
	return ADMIN_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

const CurrencyRuntime = () => {

	const pathname = usePathname();

	const storeSettings = useCounterStore((s) => s.settings);
	const setFormatPrice = useUtilsStore((s) => s.setFormatPrice);

	const hydrateFromSettings = useCurrencyStore((s) => s.hydrateFromSettings);
	const hydrateChoice = useCurrencyStore((s) => s.hydrateChoice);
	const code = useCurrencyStore((s) => s.code);
	const currencies = useCurrencyStore((s) => s.settings.currencies);
	const autoDetect = useCurrencyStore((s) => s.settings.autoDetect);

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	/*
		Read the choice out of localStorage after mount, never during render.

		The guess is worked out here rather than in the store because this is
		where the browser is, and it only ever runs when there is nothing
		stored - a shopper who has chosen is never second-guessed.
	*/
	React.useEffect(() => {
		if (!currencies || currencies.length === 0) return;

		const enabled = currencies.filter((c) => c.enabled !== false).map((c) => c.code);
		const guess = autoDetect
			? guessCurrency(navigator?.languages ?? [navigator?.language], enabled)
			: null;

		hydrateChoice(guess);
	}, [currencies, autoDetect, hydrateChoice]);

	/*
		Install, and reinstall whenever the answer would change.

		Reinstalling is the point, not a side effect: putting a new function
		in the store is a `set` on the store every price-printing component
		subscribes to, so they re-render and the page actually changes
		currency. A formatter that read the choice at call time without this
		would be correct and invisible until something else forced a render.
	*/
	const admin = isAdminPath(pathname);

	React.useEffect(() => {
		if (admin) {
			setFormatPrice(null);
			return;
		}

		setFormatPrice((value) => {
			/* Read at call time, so a formatter that outlives a change by a
			   render still prints the right thing. */
			const currency = activeCurrency(useCurrencyStore.getState());
			/* Null, not the base-currency text: core's own formatting is
			   what the base currency should look like, and duplicating it
			   here would be a second place for it to drift. */
			if (!currency) return null;
			return convertAndFormat(value, currency);
		});

		/* Hand formatting back when the extension stops running, rather than
		   leaving core calling into code that is no longer installed. */
		return () => setFormatPrice(null);
	}, [admin, code, currencies, setFormatPrice]);

	return null;
};

export default CurrencyRuntime;
