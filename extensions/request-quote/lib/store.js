/**
 * Two different things live here, for two different owners.
 *
 * `settings` belongs to the merchant: which products are quoted, what the
 * button says, which fields the form asks for. It rides the store settings
 * blob under `quoteSettings`, written with the dashboard's JWT through
 * `update_settings` and read back on the storefront from
 * `get_settings_public` via `/api/settings` - the same path every other
 * setting takes, so there is no new endpoint.
 *
 * `items` belongs to the shopper: the products they are collecting a quote
 * for. That one is genuinely local. It is a draft nobody else needs to see
 * and it stays in localStorage until they submit, at which point it becomes
 * an order record on the server and the local copy is cleared.
 *
 * The distinction matters: a shopper's browser must never be the source of
 * truth for which products are quote-only, and the server has no business
 * holding a basket nobody has sent yet.
 */

"use client";

import { create } from "zustand";
import { DEFAULT_SETTINGS, QUOTE_MARKER, FORM_FIELDS } from "./defaults";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const SETTINGS_KEY = "quoteSettings";
const STORAGE_KEY = "combostore_quote_list";

/* ------------------------------------------------------------------ */
/* parsing                                                             */
/* ------------------------------------------------------------------ */

/**
 * Settings arrive as an object, as a JSON string, or not at all.
 *
 * The string case is not hypothetical: WordPress options round-trip nested
 * arrays as JSON strings often enough that assuming the object shape means
 * the dashboard shows defaults against a store that has rules.
 */
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
		/* Merged rather than replaced: a settings blob written by an older
		   version is missing any field added since, and spreading it whole
		   would leave those undefined. */
		fields: { ...DEFAULT_SETTINGS.fields, ...(value.fields ?? {}) },
		rules: Array.isArray(value.rules) ? value.rules.filter((r) => r && typeof r === "object") : [],
	};
}

export function parseItems(raw) {
	if (!Array.isArray(raw)) return [];
	return raw
		.filter((i) => i && typeof i === "object" && i.id != null)
		.map((i) => ({ ...i, quantity: Math.max(1, parseInt(i.quantity, 10) || 1) }));
}

function readLocal() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		return raw ? parseItems(JSON.parse(raw)) : [];
	} catch (e) {
		/* Private windows, blocked site data and the server all land here. */
		return [];
	}
}

function writeLocal(items) {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	} catch (e) {
		/* The list still works for this page view; losing it on reload is
		   better than failing the click. */
	}
}

/* ------------------------------------------------------------------ */
/* the note                                                            */
/* ------------------------------------------------------------------ */

/**
 * Fold the quote-only answers into the order note.
 *
 * The order record has no free-form metadata this app can write, so company,
 * the date wanted and the message go into `order_note` as labelled lines.
 * Readable by a human looking at the raw order, and parsed back out by the
 * quote screen - which is why the labels are fixed strings rather than the
 * merchant's wording.
 */
export function composeNote(form, items) {
	const lines = ["[Quote request]"];

	if (form?.company) lines.push(`Company: ${form.company}`);
	if (form?.neededBy) lines.push(`Needed by: ${form.neededBy}`);

	const notes = (items ?? []).filter((i) => i?.note);
	if (notes.length > 0) {
		lines.push("Item notes:");
		for (const item of notes) lines.push(`  - ${item.title}: ${item.note}`);
	}

	if (form?.message) {
		lines.push("Message:");
		lines.push(form.message);
	}

	return lines.join("\n");
}

/** The inverse, for the dashboard. Unlabelled text is treated as the message. */
export function parseNote(note) {
	const text = typeof note === "string" ? note : "";
	const out = { company: "", neededBy: "", message: "", itemNotes: [] };
	if (!text) return out;

	const lines = text.split("\n");
	let section = null;

	for (const raw of lines) {
		const line = raw.trim();
		if (line === "[Quote request]") continue;
		if (line.startsWith("Company:")) { out.company = line.slice(8).trim(); section = null; continue; }
		if (line.startsWith("Needed by:")) { out.neededBy = line.slice(10).trim(); section = null; continue; }
		if (line === "Item notes:") { section = "items"; continue; }
		if (line === "Message:") { section = "message"; continue; }

		if (section === "items" && line.startsWith("- ")) { out.itemNotes.push(line.slice(2)); continue; }
		if (line) out.message = out.message ? `${out.message}\n${line}` : line;
	}

	return out;
}

/* ------------------------------------------------------------------ */
/* validation                                                          */
/* ------------------------------------------------------------------ */

/**
 * What is missing, as `{ field: message }`.
 *
 * The contact rule is separate from the per-field settings on purpose: a
 * merchant can mark both email and phone optional, and a request with
 * neither cannot be answered. Rather than silently overriding their choice,
 * at least one is demanded at submit time.
 */
export function validateForm(form, settings) {
	const errors = {};
	const fields = settings?.fields ?? DEFAULT_SETTINGS.fields;

	for (const field of FORM_FIELDS) {
		const state = field.locked ? "required" : fields[field.key];
		if (state !== "required") continue;
		if (!String(form?.[field.key] ?? "").trim()) {
			errors[field.key] = `${field.label} is required.`;
		}
	}

	const email = String(form?.email ?? "").trim();
	const phone = String(form?.phone ?? "").trim();

	if (!email && !phone) {
		errors.contact = "Give an email address or a phone number so we can reply.";
	}
	if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = "That email address does not look right.";
	}

	return errors;
}

/* ------------------------------------------------------------------ */
/* store                                                               */
/* ------------------------------------------------------------------ */

export const useQuoteStore = create((set, get) => ({

	/*
		Seeded from the defaults, never from localStorage, because the blocks
		read this while rendering and that render happens on the server too.
		Seeding from storage during render would make the server markup and
		the first client render disagree, which React does not patch up.
	*/
	settings: { ...DEFAULT_SETTINGS },
	items: [],

	hydrated: false,
	itemsHydrated: false,
	saving: false,
	error: null,
	/* Where the settings on screen came from, so the editor can say so
	   instead of leaving a merchant guessing whether a save landed. */
	source: "none",

	/* --- settings --- */

	hydrateFromSettings: (storeSettings) => {
		/*
			Once, not on every settings change.

			`settings` gets a new identity whenever anything else in the
			dashboard is saved, and re-reading it then would throw away the
			rule the merchant is part-way through writing.
		*/
		if (get().source === "settings") return;

		const hasKey = storeSettings
			&& Object.prototype.hasOwnProperty.call(storeSettings, SETTINGS_KEY);

		if (!hasKey) return;

		set({
			settings: parseSettings(storeSettings[SETTINGS_KEY]),
			hydrated: true,
			source: "settings",
		});
	},

	setSettings: (patch) =>
		set((state) => ({ settings: { ...state.settings, ...patch } })),

	addRule: (rule) =>
		set((state) => ({ settings: { ...state.settings, rules: [...state.settings.rules, rule] } })),

	updateRule: (id, patch) =>
		set((state) => ({
			settings: {
				...state.settings,
				rules: state.settings.rules.map((r) => (r.id === id ? { ...r, ...patch } : r)),
			},
		})),

	removeRule: (id) =>
		set((state) => ({
			settings: { ...state.settings, rules: state.settings.rules.filter((r) => r.id !== id) },
		})),

	moveRule: (id, direction) =>
		set((state) => {
			const rules = state.settings.rules;
			const at = rules.findIndex((r) => r.id === id);
			const to = at + direction;
			if (at < 0 || to < 0 || to >= rules.length) return {};
			const next = rules.slice();
			[next[at], next[to]] = [next[to], next[at]];
			/* Order is the whole semantics here - first match wins - so moving
			   a row is the only way to change which rule decides. */
			return { settings: { ...state.settings, rules: next } };
		}),

	saveSettings: async (token) => {
		const { settings } = get();

		if (!token) {
			set({ error: "Not signed in." });
			return { ok: false, message: "Not signed in." };
		}

		set({ saving: true, error: null });

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/update_settings`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				/*
					Only the key this extension owns. `update_settings` merges
					what it is given, and posting a whole blob from here would
					mean reading settings first and racing the settings screen
					for everything that changed in between.
				*/
				body: JSON.stringify({ [SETTINGS_KEY]: settings }),
			});

			if (!response.ok) throw new Error(`Save failed (${response.status})`);

			const res = await response.json();
			if (res?.status === "failed") throw new Error(res?.message || "Save failed");

			set({ saving: false, source: "settings", error: null });
			return { ok: true, message: res?.message || "Quote settings saved." };

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ saving: false, error: message });
			return { ok: false, message };
		}
	},

	/* --- the shopper's list --- */

	/** Called from an effect after mount, never during render. */
	hydrateItems: () => {
		if (get().itemsHydrated) return;
		set({ items: readLocal(), itemsHydrated: true });
	},

	addItem: (item) => {
		const quantity = Math.max(1, parseInt(item?.quantity, 10) || 1);
		set((state) => {
			const at = state.items.findIndex(
				(i) => String(i.id) === String(item?.id)
					&& String(i.variation_id ?? "") === String(item?.variation_id ?? "")
			);
			/* The same product added twice is one line with more of it, not
			   two lines - a merchant pricing the second line differently from
			   the first is a bug report waiting to happen. */
			const items = at >= 0
				? state.items.map((i, idx) => (idx === at ? { ...i, quantity: i.quantity + quantity } : i))
				: [...state.items, { ...item, quantity }];
			writeLocal(items);
			return { items, itemsHydrated: true };
		});
	},

	setQuantity: (id, variationId, quantity) =>
		set((state) => {
			const items = state.items.map((i) => (
				String(i.id) === String(id) && String(i.variation_id ?? "") === String(variationId ?? "")
					? { ...i, quantity: Math.max(1, parseInt(quantity, 10) || 1) }
					: i
			));
			writeLocal(items);
			return { items };
		}),

	setItemNote: (id, variationId, note) =>
		set((state) => {
			const items = state.items.map((i) => (
				String(i.id) === String(id) && String(i.variation_id ?? "") === String(variationId ?? "")
					? { ...i, note }
					: i
			));
			writeLocal(items);
			return { items };
		}),

	removeItem: (id, variationId) =>
		set((state) => {
			const items = state.items.filter((i) => !(
				String(i.id) === String(id) && String(i.variation_id ?? "") === String(variationId ?? "")
			));
			writeLocal(items);
			return { items };
		}),

	clearItems: () => {
		writeLocal([]);
		set({ items: [] });
	},

	/* --- submitting --- */

	/**
	 * Send the request as an order.
	 *
	 * `create_order` takes no auth header on the storefront - it is the same
	 * call checkout makes for a guest - so a quote can be requested without
	 * an account. The marker on `payment_method` is what makes it a quote
	 * rather than a sale, and what the dashboard filters on.
	 */
	submitQuote: async ({ form, currency, userId }) => {
		const { items, settings } = get();

		if (items.length === 0) {
			return { ok: false, message: "There is nothing in the quote list." };
		}

		const errors = validateForm(form, settings);
		if (Object.keys(errors).length > 0) {
			return { ok: false, errors, message: "Some details are missing." };
		}

		set({ saving: true, error: null });

		/*
			An indicative value, not a price.

			Lines with no price contribute nothing, so this is the catalogue
			worth of the priced part of the basket. It is posted because a
			zero makes the request look empty everywhere orders are listed,
			and the quote screen labels it as indicative - the merchant sets
			the real figures when they answer.
		*/
		const indicative = items.reduce((sum, item) => {
			const price = parseFloat(item?.price);
			return sum + (Number.isFinite(price) ? price * item.quantity : 0);
		}, 0);

		const payload = {
			cartItems: items.map((item) => ({
				id: item.id,
				product_id: item.product_id ?? item.id,
				variation_id: item.variation_id ?? null,
				title: item.title,
				quantity: item.quantity,
				price: parseFloat(item.price) || 0,
				regular_price: parseFloat(item.regular_price) || 0,
				sale_price: parseFloat(item.sale_price) || 0,
				thumbnail: item.thumbnail ?? "",
			})),

			userid: userId ?? null,

			/* "On hold" is this inbox's "new". See QUOTE_STATUSES. */
			status: "hold",
			currency: currency ?? "",

			payment_method: QUOTE_MARKER,
			payment_status: "pending",

			subtotal_amount: indicative,
			total_amount: indicative,
			shipping_amount: 0,
			discount_amount: 0,
			tax_amount: "",
			shipping_method: "",
			transaction_id: "",

			billing_name: form?.name ?? "",
			billing_email: form?.email ?? "",
			billing_phone: form?.phone ?? "",
			billing_address: form?.address ?? "",

			order_note: composeNote(form, items),
		};

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/create_order`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!response.ok) throw new Error(`Request failed (${response.status})`);

			const res = await response.json();
			if (res?.status !== "success") throw new Error(res?.message || "Request failed");

			/* Cleared only once the server has it. Clearing optimistically
			   would lose the list on a failed submit, which is the one moment
			   the shopper has invested effort in it. */
			writeLocal([]);
			set({ items: [], saving: false, error: null });

			return { ok: true, orderId: res?.order_id, hash: res?.order_hash, message: res?.message };

		} catch (e) {
			const message = e?.message ?? String(e);
			set({ saving: false, error: message });
			return { ok: false, message };
		}
	},
}));
