"use client";
import React, { useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { BADGE_BASE, FALLBACK_BADGE_CLASSES, titleCase } from "./affiliateUi";

/*
	Shared by the Marketing screens (overview, contacts, lists, campaigns,
	settings). Server routes live in combostore-server's ComboStoreMarketing.php.
*/

export { postApi, ICON_BUTTON, FILTER_SELECT, MENU_ITEM, TOOLBAR_BUTTON, PRIMARY_BUTTON, DANGER_BUTTON, FIELD, LABEL, CARD, titleCase } from "./affiliateUi";

export const HINT = "mt-1 text-xs text-gray-500";

export const CAMPAIGN_STATUS_BADGES = {
	draft: { label: "Draft", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
	scheduled: { label: "Scheduled", classes: "bg-violet-50 text-violet-700 ring-violet-200" },
	sending: { label: "Sending", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	paused: { label: "Paused", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	sent: { label: "Sent", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	cancelled: { label: "Cancelled", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	/* Automated emails (campaigns.automation): on or off rather than sent. */
	active: { label: "On", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	calling: { label: "Calling", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	done: { label: "Done", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	inactive: { label: "Off", classes: "bg-gray-100 text-gray-500 ring-gray-200" },
};

/* What each automated email is for, keyed by campaigns.automation. */
export const AUTOMATION_INFO = {
	welcome: {
		label: "Welcome email",
		when: "Sent once to each new email subscriber: right after they confirm (with double opt-in), or right after they sign up on the storefront (without it).",
		note: "Each person gets it once, even if they unsubscribe and come back. Changes you save apply to the next ones sent. People who sign up while it is off are not sent it later.",
	},
	abandoned_cart: {
		label: "Abandoned cart email",
		when: "Sent when a shopper fills in their details at checkout but leaves without ordering, after the wait you choose. Skipped if they order in the meantime.",
		note: "The button rebuilds their cart at today's prices and fills in the details they typed. Checkouts left while it is off are not emailed later.",
		/* Merge tags only this automation has. */
		tags: [
			{ tag: "{cart_items}", label: "Items, with pictures and prices" },
			{ tag: "{cart_total}", label: "Cart total" },
			{ tag: "{cart_url}", label: "Link that restores the cart" },
		],
	},
	abandoned_cart_whatsapp: {
		label: "Abandoned cart WhatsApp",
		when: "Sent on WhatsApp when a shopper who opted in to WhatsApp leaves the checkout without ordering, after the wait you choose. Skipped if they order in the meantime.",
		note: "Uses one of your approved WhatsApp templates; fill its variables with the cart tags. Only shoppers with WhatsApp consent get it: turn on the checkout's WhatsApp box (Cart element settings) to ask for it.",
		tags: [
			{ tag: "{cart_items_text}", label: "Items, as text" },
			{ tag: "{cart_count}", label: "Number of items" },
			{ tag: "{cart_total}", label: "Cart total" },
			{ tag: "{cart_url}", label: "Link that restores the cart" },
			{ tag: "{cart_path}", label: "Same link without the domain, for a URL button" },
			{ tag: "{cart_image|https://…}", label: "First item's picture, for an image header" },
		],
	},
};

export const SUB_STATUS_BADGES = {
	subscribed: { label: "Subscribed", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	unsubscribed: { label: "Unsubscribed", classes: "bg-gray-100 text-gray-500 ring-gray-200" },
	bounced: { label: "Bounced", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	/* Signed up on the storefront, has not clicked the double opt-in link yet. Campaigns skip them. */
	pending: { label: "Unconfirmed", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	/* Typed their email at checkout, never subscribed: only the abandoned-cart email may reach them. */
	none: { label: "Not subscribed", classes: "bg-gray-50 text-gray-500 ring-gray-200" },
	do_not_call: { label: "Do not call", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	/* A call reached someone else. Cleared when their phone number is changed. */
	wrong_number: { label: "Wrong number", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};

export const MESSAGE_STATUS_BADGES = {
	queued: { label: "Queued", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
	sending: { label: "Sending", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	/* A voice call in progress. */
	calling: { label: "Calling", classes: "bg-blue-50 text-blue-700 ring-blue-200" },
	sent: { label: "Sent", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	failed: { label: "Failed", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	skipped: { label: "Skipped", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
};

export const Badge = ({ badges, status, small = false }) => {
	var badge = badges[status] ?? { label: titleCase(status || "—"), classes: FALLBACK_BADGE_CLASSES };
	return <span className={`${BADGE_BASE} ${badge.classes} ${small ? "!px-2 !py-0.5 !text-[10px]" : ""}`}>{badge.label}</span>;
};

/* Per channel: label, tag colours, and the contact status / list count that say who it reaches. */
export const CHANNELS = {
	email: { label: "Email", tag: "bg-indigo-50 text-indigo-700", status: "email_status", listCount: "email_subscribed", audience: "email, with an email address," },
	sms: { label: "SMS", tag: "bg-sky-50 text-sky-700", status: "sms_status", listCount: "sms_subscribed", audience: "SMS, with a phone number," },
	whatsapp: { label: "WhatsApp", tag: "bg-emerald-50 text-emerald-700", status: "whatsapp_status", listCount: "whatsapp_subscribed", audience: "WhatsApp (their own opt-in), with a phone number," },
	/* Not a subscription: anyone with a number who has not asked not to be called. */
	call: { label: "Call", tag: "bg-amber-50 text-amber-800", status: "call_status", listCount: "callable", audience: "calls: anyone with a phone number not marked “do not call” or “wrong number”," },
	/* Automated calls through the voice provider (ComboStoreVoice): same audience as call lists. */
	voice: { label: "Voice", tag: "bg-rose-50 text-rose-700", status: "call_status", listCount: "callable", audience: "voice calls: anyone with a phone number not marked “do not call” or “wrong number”," },
};

/* A call list is "calling" while agents work it and "done" after; other campaigns keep their status. */
export const campaignStatus = (c) => (c?.channel === "call" ? ({ sending: "calling", sent: "done" }[c.status] ?? c.status) : c?.status);

/* Call outcomes (ComboStoreMarketing::CALL_OUTCOMES), with a colour each. */
export const CALL_OUTCOMES = {
	interested: { label: "Interested", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200", positive: true },
	ordered: { label: "Placed an order", classes: "bg-emerald-100 text-emerald-800 ring-emerald-300", positive: true },
	not_interested: { label: "Not interested", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
	callback: { label: "Call back later", classes: "bg-violet-50 text-violet-700 ring-violet-200" },
	no_answer: { label: "No answer", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	busy: { label: "Busy / switched off", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	wrong_number: { label: "Wrong number", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
	do_not_call: { label: "Asked not to be called", classes: "bg-rose-50 text-rose-700 ring-rose-200" },
};
export const channelLabel = (channel) => CHANNELS[channel]?.label ?? "Email";

export const ChannelTag = ({ channel }) => (
	<span className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${CHANNELS[channel]?.tag ?? CHANNELS.email.tag}`}>
		{channelLabel(channel)}
	</span>
);

/* Tags the server fills per recipient (ComboStoreMarketing::merge_values). `{first_name|friend}` falls back when blank. */
export const MERGE_TAGS = [
	{ tag: "{first_name}", label: "First name" },
	{ tag: "{last_name}", label: "Last name" },
	{ tag: "{full_name}", label: "Full name" },
	{ tag: "{name}", label: "First name, or \"there\"" },
	{ tag: "{email}", label: "Email" },
	{ tag: "{phone}", label: "Phone" },
	{ tag: "{site_name}", label: "Store name" },
	{ tag: "{site_url}", label: "Store URL" },
	{ tag: "{date}", label: "Today's date" },
	{ tag: "{unsubscribe_url}", label: "Unsubscribe link (email)" },
];

/*
	SMS length. GSM-7 text fits 160 characters in one part and 153 per part
	when split; anything outside GSM-7 (Bangla, emoji...) sends as UCS-2: 70 / 67.
	Extension characters (^{}[]~\|€) take two GSM slots.
*/
const GSM = "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà";
const GSM_EXT = "^{}\\[~]|€";

export function smsSegments(text) {
	var value = String(text || "");
	var gsm = true;
	var units = 0;
	for (const ch of value) {
		if (GSM.includes(ch)) units += 1;
		else if (GSM_EXT.includes(ch)) units += 2;
		else { gsm = false; break; }
	}
	if (!gsm) units = Array.from(value).length;
	var single = gsm ? 160 : 70;
	var multi = gsm ? 153 : 67;
	var segments = units === 0 ? 0 : units <= single ? 1 : Math.ceil(units / multi);
	return { encoding: gsm ? "GSM-7" : "Unicode", chars: units, segments, perSegment: segments > 1 ? multi : single };
}

export function pct(part, whole) {
	if (!whole) return "0%";
	var v = (part / whole) * 100;
	return (v >= 10 || v === 0 ? Math.round(v) : v.toFixed(1)) + "%";
}

export function contactName(c) {
	return [c?.first_name, c?.last_name].filter(Boolean).join(" ");
}

/* A centred dialog (or right-hand drawer) whose open state the page owns. */
export const Modal = ({ open, onClose, title, children, wide = false, drawer = false, footer = null }) => {
	useEffect(() => {
		if (!open) return;
		var onKey = (ev) => { if (ev.key === "Escape") onClose?.(); };
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-[1000] flex items-stretch justify-center sm:items-start" role="dialog" aria-modal="true">
			<div className="absolute inset-0 bg-gray-900/40" onClick={onClose} />
			<div className={drawer
				? "relative ml-auto flex h-full w-full max-w-xl flex-col bg-white shadow-xl"
				: `relative mx-3 my-4 flex max-h-[calc(100vh-2rem)] w-full flex-col overflow-hidden rounded-xl bg-white shadow-xl sm:my-12 ${wide ? "max-w-3xl" : "max-w-lg"}`}>
				<div className="flex items-center justify-between gap-3 border-b border-gray-200 px-5 py-3">
					<h2 className="text-base font-semibold text-gray-900">{title}</h2>
					<button type="button" onClick={onClose} aria-label="Close" className="inline-flex h-8 w-8 items-center justify-center rounded-lg !border-0 !bg-transparent !p-0 text-gray-400 !shadow-none hover:!bg-gray-100 hover:text-gray-900 cursor-pointer">
						<IconX size={18} />
					</button>
				</div>
				<div className="flex-1 overflow-y-auto px-5 py-4">{children}</div>
				{footer && <div className="flex flex-wrap items-center justify-end gap-2 border-t border-gray-200 bg-gray-50 px-5 py-3">{footer}</div>}
			</div>
		</div>
	);
};

export const StatTile = ({ label, value, sub, tone = "gray" }) => {
	var tones = { gray: "text-gray-900", green: "text-emerald-700", blue: "text-blue-700", rose: "text-rose-700", violet: "text-violet-700" };
	return (
		<div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
			<div className="text-xs font-medium text-gray-500">{label}</div>
			<div className={`mt-1 text-2xl font-semibold tabular-nums ${tones[tone] ?? tones.gray}`}>{value}</div>
			{sub && <div className="mt-0.5 text-xs text-gray-400">{sub}</div>}
		</div>
	);
};

export const Toggle = ({ checked, onChange, label, hint }) => (
	<label className="flex cursor-pointer items-start gap-3">
		<input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#634FE5]" checked={!!checked} onChange={(ev) => onChange(ev.target.checked)} />
		<span>
			<span className="block text-sm text-gray-800">{label}</span>
			{hint && <span className="block text-xs text-gray-500">{hint}</span>}
		</span>
	</label>
);

/* Lists fetched once per screen. */
export function useMarketingLists(token, postApi) {
	const [lists, setlists] = React.useState([]);
	const reload = React.useCallback(() => {
		if (!token) return Promise.resolve();
		return postApi("get_mkt_lists", token, {}).then((res) => setlists(res?.lists ?? [])).catch(() => { });
	}, [token, postApi]);
	useEffect(() => { reload(); }, [reload]);
	return [lists, reload];
}

/* Server times are site-local "Y-m-d H:i:s". */
export function formatDateTime(value) {
	if (!value) return "";
	var d = new Date(String(value).replace(" ", "T"));
	if (isNaN(d)) return value;
	return d.toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

/* Minimal RFC 4180 CSV parser: quoted fields, "" escapes, CRLF. */
export function parseCsv(text) {
	var rows = [];
	var row = [];
	var field = "";
	var quoted = false;
	var s = String(text || "").replace(/^﻿/, "");
	for (var i = 0; i < s.length; i++) {
		var ch = s[i];
		if (quoted) {
			if (ch === '"') {
				if (s[i + 1] === '"') { field += '"'; i++; }
				else quoted = false;
			} else field += ch;
			continue;
		}
		if (ch === '"') quoted = true;
		else if (ch === ",") { row.push(field); field = ""; }
		else if (ch === "\n" || ch === "\r") {
			if (ch === "\r" && s[i + 1] === "\n") i++;
			row.push(field); field = "";
			if (row.some((v) => v.trim() !== "")) rows.push(row);
			row = [];
		} else field += ch;
	}
	row.push(field);
	if (row.some((v) => v.trim() !== "")) rows.push(row);
	return rows;
}
