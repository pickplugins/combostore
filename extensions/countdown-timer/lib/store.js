/**
 * The merchant's campaigns, and this visitor's evergreen stamps.
 *
 * Campaigns ride the store settings blob under `countdownCampaigns`,
 * written with the dashboard's JWT through `update_settings` and read back
 * on the storefront from `get_settings_public` via `/api/settings` - the
 * same path every other setting takes, so there is no new endpoint.
 *
 * The stamps - when this browser first saw each evergreen campaign - are
 * genuinely local. There is no account to hang them on for a guest, and
 * nothing is decided by them except what a timer reads, so localStorage is
 * both the only place they can go and an honest one.
 */

"use client";

import { create } from "zustand";
import { DEFAULT_SETTINGS } from "./defaults";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const SETTINGS_KEY = "countdownCampaigns";
const STORAGE_KEY = "combostore_countdown_seen";

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
		/* Merged rather than replaced: a blob written before a label
		   existed is missing it, and spreading whole would leave the unit
		   under a timer blank. */
		labels: { ...DEFAULT_SETTINGS.labels, ...(value.labels ?? {}) },
		campaigns: Array.isArray(value.campaigns)
			? value.campaigns.filter((c) => c && typeof c === "object" && c.id)
			: [],
	};
}

function readSeen() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : null;
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch (e) {
		/* Private windows, blocked site data and the server all land here. */
		return {};
	}
}

function writeSeen(seen) {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
	} catch (e) {
		/* The timer still works for this page view; it restarts on the next
		   one, which is the right way for this to fail. */
	}
}

export const useCountdownStore = create((set, get) => ({

	settings: { ...DEFAULT_SETTINGS },
	source: "none",
	saving: false,
	error: null,

	/*
		`{ [campaignId]: epochMillis }`. Empty on every render including the
		server's, and filled from localStorage by an effect after mount -
		seeding it during render would make the server markup and the first
		client render disagree.
	*/
	seen: {},
	seenHydrated: false,

	hydrateFromSettings: (storeSettings) => {
		/* Once. `settings` gets a new identity whenever anything else in the
		   dashboard is saved, and re-reading it then would throw away a
		   campaign the merchant is part-way through writing. */
		if (get().source === "settings") return;

		const hasKey = storeSettings
			&& Object.prototype.hasOwnProperty.call(storeSettings, SETTINGS_KEY);
		if (!hasKey) return;

		set({ settings: parseSettings(storeSettings[SETTINGS_KEY]), source: "settings" });
	},

	setSettings: (patch) => set((state) => ({ settings: { ...state.settings, ...patch } })),

	addCampaign: (campaign) =>
		set((state) => ({
			settings: { ...state.settings, campaigns: [...state.settings.campaigns, campaign] },
		})),

	updateCampaign: (id, patch) =>
		set((state) => ({
			settings: {
				...state.settings,
				campaigns: state.settings.campaigns.map((c) => (c.id === id ? { ...c, ...patch } : c)),
			},
		})),

	removeCampaign: (id) =>
		set((state) => ({
			settings: {
				...state.settings,
				campaigns: state.settings.campaigns.filter((c) => c.id !== id),
			},
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
				   what it is given, so posting a whole blob would mean racing
				   the settings screen for everything else. */
				body: JSON.stringify({ [SETTINGS_KEY]: get().settings }),
			});

			if (!response.ok) throw new Error(`Save failed (${response.status})`);

			const res = await response.json();
			if (res?.status === "failed") throw new Error(res?.message || "Save failed");

			set({ saving: false, source: "settings", error: null });
			return { ok: true, message: res?.message || "Campaigns saved." };

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ saving: false, error: message });
			return { ok: false, message };
		}
	},

	/* --- evergreen stamps --- */

	hydrateSeen: () => {
		if (get().seenHydrated) return;
		set({ seen: readSeen(), seenHydrated: true });
	},

	/**
	 * Note that this browser has now met an evergreen campaign.
	 *
	 * Only ever written once per campaign. Overwriting it on a later visit
	 * is what turns an evergreen timer into a clock that resets every time
	 * the shopper comes back, so the offer never actually ends.
	 */
	markSeen: (campaignId, at) => {
		const { seen, seenHydrated } = get();
		/* Not before the stored stamps are in, or the first render of a
		   returning visitor would stamp over the real one. */
		if (!seenHydrated || !campaignId || seen[campaignId]) return;

		const next = { ...seen, [campaignId]: at ?? Date.now() };
		writeSeen(next);
		set({ seen: next });
	},

	/** For the dashboard, so a merchant can try an evergreen campaign twice. */
	forgetSeen: (campaignId) => {
		const next = { ...get().seen };
		delete next[campaignId];
		writeSeen(next);
		set({ seen: next });
	},
}));

export function findCampaign(settings, id) {
	if (!id) return null;
	return (settings?.campaigns ?? []).find((c) => c.id === id) ?? null;
}
