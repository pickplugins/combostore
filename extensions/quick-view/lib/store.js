/**
 * What is open, what has been fetched, and the merchant's settings.
 *
 * The settings ride the store settings blob under `quickViewSettings`,
 * written with the dashboard's JWT through `update_settings` and read back
 * on the storefront from `get_settings_public` via `/api/settings` - the
 * same path every other setting takes, so there is no new endpoint.
 *
 * Nothing here is persisted locally. A quick view is a glance, not a draft:
 * there is nothing a shopper would be upset to lose on reload, and the
 * fetched products are a cache that would only go stale.
 */

"use client";

import { create } from "zustand";
import { DEFAULT_SETTINGS } from "./defaults";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const SETTINGS_KEY = "quickViewSettings";

export function parseSettings(raw) {
	let value = raw;
	if (typeof value === "string") {
		try {
			value = JSON.parse(value);
		} catch (e) {
			value = null;
		}
	}
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		return { ...DEFAULT_SETTINGS };
	}
	return {
		...DEFAULT_SETTINGS,
		...value,
		/* Merged rather than replaced: a blob written before a section
		   existed is missing its switch, and spreading it whole would leave
		   that section undefined and therefore off. */
		show: { ...DEFAULT_SETTINGS.show, ...(value.show ?? {}) },
	};
}

export const useQuickViewStore = create((set, get) => ({

	settings: { ...DEFAULT_SETTINGS },
	source: "none",
	saving: false,
	error: null,

	/* Which product the modal is showing, by slug. Null means closed. */
	slug: null,
	product: null,
	loading: false,
	loadError: null,

	/*
		Products already fetched, by slug.

		A grid is browsed back and forth - open a product, close it, open the
		one next to it, come back. Without this every reopen is another round
		trip, and the modal flashes its skeleton for something it already had
		a second ago. It is per page view, so nothing here outlives a reload.
	*/
	cache: {},

	/* --- settings --- */

	hydrateFromSettings: (storeSettings) => {
		/* Once. `settings` gets a new identity whenever anything else in the
		   dashboard is saved, and re-reading it then would throw away an
		   edit in progress on the quick view screen. */
		if (get().source === "settings") return;

		const hasKey = storeSettings
			&& Object.prototype.hasOwnProperty.call(storeSettings, SETTINGS_KEY);
		if (!hasKey) return;

		set({
			settings: parseSettings(storeSettings[SETTINGS_KEY]),
			source: "settings",
		});
	},

	setSettings: (patch) => set((state) => ({ settings: { ...state.settings, ...patch } })),

	toggleSection: (key, value) =>
		set((state) => ({
			settings: { ...state.settings, show: { ...state.settings.show, [key]: value } },
		})),

	saveSettings: async (token) => {
		if (!token) {
			set({ error: "Not signed in." });
			return { ok: false, message: "Not signed in." };
		}

		set({ saving: true, error: null });

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/update_settings`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				/* Only the key this extension owns. `update_settings` merges
				   what it is given, so posting a whole blob from here would
				   mean racing the settings screen for everything else. */
				body: JSON.stringify({ [SETTINGS_KEY]: get().settings }),
			});

			if (!response.ok) throw new Error(`Save failed (${response.status})`);

			const res = await response.json();
			if (res?.status === "failed") throw new Error(res?.message || "Save failed");

			set({ saving: false, source: "settings", error: null });
			return { ok: true, message: res?.message || "Quick view settings saved." };

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ saving: false, error: message });
			return { ok: false, message };
		}
	},

	/* --- the modal --- */

	/**
	 * Open the modal on a product, and fetch it if it is not already held.
	 *
	 * `get_product` takes a slug and no auth header - the same anonymous
	 * call lib/getProduct.js makes for the product page - so the modal gets
	 * exactly the data that page would render, rather than the thinner
	 * record a grid card carries.
	 *
	 * `seed` is whatever the card already knew. It is shown straight away so
	 * the modal opens with a title and a picture instead of an empty box,
	 * and is replaced the moment the real thing lands.
	 */
	open: async (slug, seed) => {
		if (!slug) return;

		const cached = get().cache[slug];

		set({
			slug,
			product: cached ?? seed ?? null,
			loading: !cached,
			loadError: null,
		});

		if (cached) return;

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/get_product`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ slug }),
			});

			if (!response.ok) throw new Error(`Could not load this product (${response.status})`);

			const res = await response.json();
			const product = res?.product ?? null;
			if (!product) throw new Error("That product could not be found.");

			/*
				Two different stale-response problems, both real when someone
				clicks along a row of cards.

				The cache is written whatever happens, because a slow response
				is still a correct one. What must not happen is writing it
				into the open modal when the shopper has already moved on, so
				that only happens while this slug is still the open one.
			*/
			set((state) => ({
				cache: { ...state.cache, [slug]: product },
				...(state.slug === slug ? { product, loading: false, loadError: null } : {}),
			}));

		} catch (e) {
			set((state) => (
				state.slug === slug
					? { loading: false, loadError: e?.message ?? String(e) }
					: {}
			));
		}
	},

	close: () => set({ slug: null, product: null, loading: false, loadError: null }),
}));
