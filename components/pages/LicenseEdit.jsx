'use client'
import React from 'react'
import Link from "next/link";
import { useState, useEffect } from "react";
import { IconCopy, IconExternalLink, IconFidgetSpinner, IconKey, IconPlus, IconX } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';
import { useCan } from '../../lib/useCan';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	License details (drawer from the Licenses list, and /dashboard/licenses/[id]),
	built on the cstore_licenses row and its linked order (both from get_license).

	Saving sends only the fields changed here; update_license applies a partial
	update and keeps activation_count equal to the number of domains.

	Also exports LicenseCreate (the "Add License" drawer) and the small helpers
	the list shares with this screen.
*/

export const LICENSE_STATUSES = {
	active: { label: "Active", classes: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
	inactive: { label: "Inactive", classes: "bg-amber-50 text-amber-700 ring-amber-200" },
	disabled: { label: "Disabled", classes: "bg-red-50 text-red-700 ring-red-200" },
	expired: { label: "Expired", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

/* expires_at is NOT NULL on the server, so "never expires" is stored as this date. */
const LIFETIME = "9999-12-31 23:59:59";

const CARD = "form-card rounded-xl border border-gray-200 bg-white shadow-sm";
const CARD_TITLE = "border-b border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900";
const ROW = "flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-2.5 text-sm last:border-b-0";
const LABEL = "shrink-0 text-gray-500";
const INPUT = "w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !px-3 !text-sm !text-gray-700 !shadow-none transition-colors focus:!border-[#634FE5] focus:!outline-none focus:!ring-2 focus:!ring-[#634FE5]/20 disabled:!bg-gray-50 disabled:!text-gray-400";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:opacity-50 cursor-pointer";
const SECONDARY_BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50";

const day = (value) => (value ? String(value).slice(0, 10) : "");

export function formatDay(value) {
	if (!value || String(value).startsWith("9999")) return null;
	const date = new Date(`${day(value)}T00:00:00`);
	if (isNaN(date)) return null;
	return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

/* Whole days from today to `value`; negative when it is in the past. */
export function daysFromToday(value) {
	if (!value || String(value).startsWith("9999")) return null;
	const date = new Date(`${day(value)}T00:00:00`);
	if (isNaN(date)) return null;
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return Math.round((date - today) / 86400000);
}

/* Resolves true/false; the Clipboard API is missing on plain-http dashboards. */
export function copyText(text) {
	if (navigator?.clipboard?.writeText) {
		return navigator.clipboard.writeText(text).then(() => true, () => false);
	}
	try {
		const area = document.createElement("textarea");
		area.value = text;
		document.body.appendChild(area);
		area.select();
		const ok = document.execCommand("copy");
		document.body.removeChild(area);
		return Promise.resolve(ok);
	} catch (e) {
		return Promise.resolve(false);
	}
}

/* Same normalisation the server applies: host only, lowercase, no www. */
function normalizeDomain(value) {
	let domain = String(value || "").trim().toLowerCase();
	if (!domain) return "";
	try {
		domain = new URL(domain.includes("://") ? domain : `http://${domain}`).hostname;
	} catch (e) {
		return "";
	}
	return domain.replace(/^www\./, "");
}

function postJSON(route, token, body) {
	return fetch(serverUrl + "wp-json/combo-store/v2/" + route, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(body),
	}).then((response) => {
		if (!response.ok) {
			return response.json().catch(() => ({})).then((res) => {
				throw new Error(res?.message || `Request failed (HTTP ${response.status}).`);
			});
		}
		return response.json();
	});
}


const EDITABLE = ["status", "activation_limit", "lifetime", "expires_at", "user_email", "domains"];

function toForm(license) {
	const lifetime = !license || license.is_lifetime || String(license.expires_at ?? "").startsWith("9999");
	return {
		status: license?.status ?? "active",
		activation_limit: String(parseInt(license?.activation_limit) || 0),
		lifetime,
		expires_at: lifetime ? "" : day(license?.expires_at),
		user_email: license?.user_email ?? "",
		domains: (license?.domains ?? []).join("\n"),
	};
}

function expiresValue(form) {
	return form.lifetime || !form.expires_at ? LIFETIME : `${form.expires_at} 23:59:59`;
}


const LicenseEdit = ({ id, onSaved }) => {

	const { token, addNotification, paymentGateways } = useCounterStore()
	const permit = useCan("licenses"); /* Roles & Permissions */
	const { wrapCurrency } = useUtilsStore()

	var [license, setlicense] = useState(null);
	var [order, setorder] = useState(null);
	var [form, setform] = useState(toForm(null));
	var [newDomain, setnewDomain] = useState("");
	var [loading, setloading] = useState(false);
	var [saving, setsaving] = useState(false);
	var [error, seterror] = useState("");


	function fetchPost() {
		if (!token || !id) return;

		setloading(true);
		seterror("");
		postJSON("get_license", token, { id })
			.then((res) => {
				const row = res?.license && Object.keys(res.license).length ? res.license : null;
				setlicense(row);
				setorder(res?.order && Object.keys(res.order).length ? res.order : null);
				setform(toForm(row));
				if (!row) seterror(`License #${id} was not found.`);
				setloading(false);
			})
			.catch((err) => {
				seterror(err.message);
				setloading(false);
			});
	}

	useEffect(() => {
		fetchPost();
	}, [id, token]);


	const original = toForm(license);
	const changed = EDITABLE.filter((key) => form[key] !== original[key]);
	const formDomains = form.domains.split("\n").filter(Boolean);
	const limit = parseInt(form.activation_limit) || 0;

	function addDomain() {
		const domain = normalizeDomain(newDomain);
		if (!domain) {
			addNotification({ type: 'error', title: 'Invalid domain', content: `"${newDomain}" is not a domain.` });
			return;
		}
		if (!formDomains.includes(domain)) {
			setform({ ...form, domains: [...formDomains, domain].join("\n") });
		}
		setnewDomain("");
	}

	function removeDomain(domain) {
		setform({ ...form, domains: formDomains.filter((d) => d !== domain).join("\n") });
	}

	function save() {
		if (!permit.allowed("edit")) return permit.denied();
		if (!changed.length) return;

		/* Only what changed, so nothing else on the row is touched. */
		const payload = { id };
		if (changed.includes("status")) payload.status = form.status;
		if (changed.includes("activation_limit")) payload.activation_limit = Math.max(0, parseInt(form.activation_limit) || 0);
		if (changed.includes("lifetime") || changed.includes("expires_at")) payload.expires_at = expiresValue(form);
		if (changed.includes("user_email")) payload.user_email = form.user_email.trim();
		if (changed.includes("domains")) payload.domains = formDomains;

		setsaving(true);
		postJSON("update_license", token, payload)
			.then((res) => {
				setsaving(false);
				if (res?.status !== "success") throw new Error(res?.message || "Save failed.");
				addNotification({ type: 'success', title: 'License updated', content: `#${id} saved.` });
				fetchPost();
				onSaved?.();
			})
			.catch((err) => {
				setsaving(false);
				addNotification({ type: 'error', title: 'Update failed', content: err.message });
			});
	}

	function copyKey() {
		copyText(license.license_key).then(ok => addNotification(ok
			? { type: 'success', title: 'Copied', content: 'License key copied to clipboard.' }
			: { type: 'error', title: 'Copy failed', content: 'Select the key and copy it manually.' }));
	}


	if (loading && !license) {
		return (
			<div className="flex items-center gap-2 px-4 py-10 text-sm text-gray-500">
				<span className="animate-spin"><IconFidgetSpinner size={18} /></span> Loading license…
			</div>
		);
	}

	if (error && !license) {
		return (
			<div className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6">
				<div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">{error}</div>
			</div>
		);
	}

	if (!license) return null;


	const status = LICENSE_STATUSES[license.status] ?? { label: license.status, classes: "bg-gray-100 text-gray-600 ring-gray-200" };
	const expiresDays = daysFromToday(license.expires_at);
	const used = license.domains?.length ?? 0;
	const savedLimit = parseInt(license.activation_limit) || 0;
	const customerName = license.user?.name || order?.billing_name || null;
	const gateway = order?.payment_method ? (paymentGateways?.[order.payment_method]?.label || order.payment_method) : null;


	return (
		<div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-4 py-6 sm:px-6">

			{/* Heading */}
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400">
						<IconKey size={20} stroke={1.5} />
					</div>
					<div>
						<h1 className="text-xl font-semibold text-gray-900">
							{("License")} <span className="font-normal text-gray-400">#{license.id}</span>
						</h1>
						<div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${status.classes}`}>{status.label}</span>
							{license.status === "active" && license.is_expired && <span className="text-red-600">Past expiry date</span>}
							{customerName && <span>· {customerName}</span>}
						</div>
					</div>
				</div>
				{order?.id && (
					<Link href={`/dashboard/orders/${order.id}`} className={SECONDARY_BUTTON}>
						<IconExternalLink size={16} /> Order #{order.id}
					</Link>
				)}
			</div>

			{/* Key */}
			<div className={`${CARD} flex flex-wrap items-center justify-between gap-3 px-5 py-4`}>
				<div className="min-w-0">
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">License key</div>
					<div className="mt-1 break-all font-mono text-sm text-gray-900 select-all">{license.license_key}</div>
				</div>
				<button type="button" className={SECONDARY_BUTTON} onClick={copyKey}>
					<IconCopy size={16} /> Copy
				</button>
			</div>

			{/* Summary */}
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
				<div className={`${CARD} px-5 py-4`}>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Product</div>
					<div className="mt-1 truncate text-lg font-semibold text-gray-900">{license.product_title || (license.product_id ? `#${license.product_id}` : "—")}</div>
					<div className="truncate text-xs text-gray-500">{license.variation_title || (license.variation_id ? `Variation #${license.variation_id}` : "No variation")}</div>
				</div>
				<div className={`${CARD} px-5 py-4`}>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Activations</div>
					<div className="mt-1 text-lg font-semibold tabular-nums text-gray-900">{used} / {savedLimit > 0 ? savedLimit : "∞"}</div>
					<div className="text-xs text-gray-500">{savedLimit > 0 ? (used >= savedLimit ? "Limit reached" : `${savedLimit - used} left`) : "Unlimited sites"}</div>
				</div>
				<div className={`${CARD} px-5 py-4`}>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Expires</div>
					<div className="mt-1 text-lg font-semibold text-gray-900">{license.is_lifetime ? "Lifetime" : (formatDay(license.expires_at) ?? "—")}</div>
					{expiresDays !== null && (
						<div className={`text-xs ${expiresDays < 0 ? "font-medium text-red-600" : expiresDays <= 14 ? "text-amber-600" : "text-gray-500"}`}>
							{expiresDays < 0 ? `Expired ${-expiresDays} day${expiresDays === -1 ? "" : "s"} ago` : expiresDays === 0 ? "Today" : `In ${expiresDays} day${expiresDays === 1 ? "" : "s"}`}
						</div>
					)}
					{license.is_lifetime && <div className="text-xs text-gray-500">Never expires</div>}
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

				{/* Manage */}
				<div className={CARD}>
					<div className={CARD_TITLE}>Manage</div>
					<div className="flex flex-col gap-4 p-5">
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Status</span>
							<select className={INPUT} value={form.status} onChange={ev => setform({ ...form, status: ev.target.value })}>
								{Object.entries(LICENSE_STATUSES).map(([value, { label }]) => <option key={value} value={value}>{label}</option>)}
							</select>
						</label>

						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Activation limit</span>
							<input className={INPUT} type="number" min="0" value={form.activation_limit} onChange={ev => setform({ ...form, activation_limit: ev.target.value })} />
							<span className="text-xs text-gray-500">0 means unlimited sites.</span>
						</label>

						<div className="flex flex-col gap-2">
							<label className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-3 py-2.5">
								<span className="flex flex-col">
									<span className="text-sm font-medium text-gray-700">Lifetime license</span>
									<span className="text-xs text-gray-500">Never expires.</span>
								</span>
								<input type="checkbox" className="h-4 w-4 accent-[#634FE5]" checked={form.lifetime} onChange={ev => setform({ ...form, lifetime: ev.target.checked })} />
							</label>
							<label className="flex flex-col gap-1">
								<span className="text-xs font-medium text-gray-600">Expiry date</span>
								<input className={INPUT} type="date" disabled={form.lifetime} value={form.expires_at} onChange={ev => setform({ ...form, expires_at: ev.target.value })} />
							</label>
						</div>

						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Customer email</span>
							<input className={INPUT} type="email" value={form.user_email} onChange={ev => setform({ ...form, user_email: ev.target.value })} />
						</label>

						<div className="flex items-center gap-3">
							<button type="button" className={PRIMARY_BUTTON} disabled={!changed.length || saving} {...permit.hide("edit")} onClick={save}>
								{saving ? "Saving…" : "Save changes"}
							</button>
							{changed.length > 0 && !saving && (
								<button type="button" className="text-sm text-gray-500 hover:text-gray-800" onClick={() => setform(original)}>Discard</button>
							)}
						</div>
					</div>
				</div>

				{/* Activated domains */}
				<div className={CARD}>
					<div className={`${CARD_TITLE} flex items-center justify-between`}>
						<span>Activated sites</span>
						<span className="text-xs font-normal tabular-nums text-gray-500">{formDomains.length} / {limit > 0 ? limit : "∞"}</span>
					</div>
					<div className="flex flex-col">
						{formDomains.length === 0 && (
							<div className="px-5 py-4 text-sm text-gray-500">No site has activated this key yet.</div>
						)}
						{formDomains.map((domain) => (
							<div key={domain} className={ROW}>
								<a className="truncate text-gray-900 hover:text-blue-600 hover:underline" href={`https://${domain}`} target="_blank" rel="noreferrer">{domain}</a>
								<button type="button" className="text-gray-400 transition-colors hover:text-red-600" title="Deactivate" onClick={() => removeDomain(domain)}>
									<IconX size={16} />
								</button>
							</div>
						))}
						<div className="flex gap-2 border-t border-gray-100 p-5">
							<input className={INPUT} placeholder="example.com" value={newDomain}
								onChange={ev => setnewDomain(ev.target.value)}
								onKeyDown={ev => { if (ev.key === "Enter") { ev.preventDefault(); addDomain(); } }} />
							<button type="button" className={SECONDARY_BUTTON} disabled={!newDomain.trim() || (limit > 0 && formDomains.length >= limit)} onClick={addDomain}>
								<IconPlus size={16} /> Add
							</button>
						</div>
						{changed.includes("domains") && (
							<div className="px-5 pb-4 text-xs text-amber-600">Site changes are saved with "Save changes".</div>
						)}
					</div>
				</div>

				{/* Timeline */}
				<div className={CARD}>
					<div className={CARD_TITLE}>Timeline</div>
					<div className={ROW}><span className={LABEL}>Issued</span><span className="text-gray-900">{license.created_at ?? "—"}</span></div>
					<div className={ROW}><span className={LABEL}>Last renewed</span><span className="text-gray-900">{license.renewed_at ?? "—"}</span></div>
					<div className={ROW}><span className={LABEL}>Expires</span><span className="text-gray-900">{license.is_lifetime ? "Never" : (license.expires_at ?? "—")}</span></div>
					<div className={ROW}><span className={LABEL}>Last updated</span><span className="text-gray-500">{license.updated_at ?? "—"}</span></div>
				</div>

				{/* Customer & order */}
				<div className={CARD}>
					<div className={CARD_TITLE}>Customer &amp; order</div>
					<div className={ROW}><span className={LABEL}>Account</span><span className="text-right text-gray-900">{license.user?.name ? `${license.user.name} (#${license.user.id})` : (license.userid ? `User #${license.userid}` : "No account")}</span></div>
					<div className={ROW}><span className={LABEL}>License email</span><span className="truncate text-right text-gray-900">{license.user_email || "—"}</span></div>
					{order ? (
						<>
							<div className={ROW}>
								<span className={LABEL}>Order</span>
								<Link className="text-right font-medium text-blue-600 hover:underline" href={`/dashboard/orders/${order.id}`}>#{order.id}</Link>
							</div>
							<div className={ROW}><span className={LABEL}>Billing name</span><span className="text-right text-gray-900">{order.billing_name || "—"}</span></div>
							<div className={ROW}><span className={LABEL}>Payment</span><span className="text-right capitalize text-gray-900">{order.payment_status || "—"}{gateway ? ` · ${gateway}` : ""}</span></div>
							<div className={ROW}><span className={LABEL}>Order total</span><span className="text-right font-medium text-gray-900">{parseFloat(order.total_amount) > 0 ? wrapCurrency(order.total_amount) : "—"}</span></div>
						</>
					) : (
						<div className={ROW}><span className={LABEL}>Order</span><span className="text-right text-gray-500">{license.order_id ? `#${license.order_id} (not found)` : "Issued manually"}</span></div>
					)}
				</div>
			</div>
		</div>
	)
}

export default LicenseEdit


/*
	"Add License" drawer. Leave the key empty and the server generates one.
	A customer is matched by email when no user ID is given.
*/
export const LicenseCreate = ({ onCreated }) => {

	const { token, addNotification } = useCounterStore()
	const permit = useCan("licenses"); /* Roles & Permissions */

	const blank = { user_email: "", userid: "", product_id: "", variation_id: "", order_id: "", license_key: "", status: "active", activation_limit: "1", lifetime: true, expires_at: "" };
	var [form, setform] = useState(blank);
	var [saving, setsaving] = useState(false);
	var [created, setcreated] = useState(null);

	const set = (key) => (ev) => setform({ ...form, [key]: ev.target.type === "checkbox" ? ev.target.checked : ev.target.value });

	function create() {
		if (!permit.allowed("create")) return permit.denied();
		const payload = {
			status: form.status,
			activation_limit: Math.max(0, parseInt(form.activation_limit) || 0),
			expires_at: expiresValue(form),
		};
		for (const key of ["user_email", "license_key"]) if (form[key].trim()) payload[key] = form[key].trim();
		for (const key of ["userid", "product_id", "variation_id", "order_id"]) if (parseInt(form[key]) > 0) payload[key] = parseInt(form[key]);

		setsaving(true);
		postJSON("create_license", token, payload)
			.then((res) => {
				setsaving(false);
				if (res?.status !== "success") throw new Error(res?.message || "Could not create the license.");
				addNotification({ type: 'success', title: 'License created', content: `#${res.id} issued.` });
				setcreated({ id: res.id, license_key: res.license_key });
				setform(blank);
				onCreated?.();
			})
			.catch((err) => {
				setsaving(false);
				addNotification({ type: 'error', title: 'Create failed', content: err.message });
			});
	}

	return (
		<div className="flex w-full flex-col gap-4">

			{created && (
				<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
					<div className="min-w-0">
						<div className="text-xs font-medium text-emerald-700">License #{created.id} created</div>
						<div className="mt-1 break-all font-mono text-sm text-gray-900 select-all">{created.license_key}</div>
					</div>
					<button type="button" className={SECONDARY_BUTTON} onClick={() => copyText(created.license_key)}>
						<IconCopy size={16} /> Copy
					</button>
				</div>
			)}

			<div className={CARD}>
				<div className={CARD_TITLE}>New license</div>
				<div className="flex flex-col gap-4 p-5">
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Customer email</span>
							<input className={INPUT} type="email" value={form.user_email} onChange={set("user_email")} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">User ID</span>
							<input className={INPUT} type="number" min="0" placeholder="Matched by email" value={form.userid} onChange={set("userid")} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Product ID</span>
							<input className={INPUT} type="number" min="0" value={form.product_id} onChange={set("product_id")} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Variation ID</span>
							<input className={INPUT} type="number" min="0" placeholder="Optional" value={form.variation_id} onChange={set("variation_id")} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Order ID</span>
							<input className={INPUT} type="number" min="0" placeholder="Optional" value={form.order_id} onChange={set("order_id")} />
						</label>
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Status</span>
							<select className={INPUT} value={form.status} onChange={set("status")}>
								{Object.entries(LICENSE_STATUSES).map(([value, { label }]) => <option key={value} value={value}>{label}</option>)}
							</select>
						</label>
					</div>

					<label className="flex flex-col gap-1">
						<span className="text-xs font-medium text-gray-600">License key</span>
						<input className={`${INPUT} font-mono`} placeholder="Leave empty to generate one" value={form.license_key} onChange={set("license_key")} />
					</label>

					<label className="flex flex-col gap-1">
						<span className="text-xs font-medium text-gray-600">Activation limit</span>
						<input className={INPUT} type="number" min="0" value={form.activation_limit} onChange={set("activation_limit")} />
						<span className="text-xs text-gray-500">0 means unlimited sites.</span>
					</label>

					<label className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 px-3 py-2.5">
						<span className="flex flex-col">
							<span className="text-sm font-medium text-gray-700">Lifetime license</span>
							<span className="text-xs text-gray-500">Never expires.</span>
						</span>
						<input type="checkbox" className="h-4 w-4 accent-[#634FE5]" checked={form.lifetime} onChange={set("lifetime")} />
					</label>
					{!form.lifetime && (
						<label className="flex flex-col gap-1">
							<span className="text-xs font-medium text-gray-600">Expiry date</span>
							<input className={INPUT} type="date" value={form.expires_at} onChange={set("expires_at")} />
						</label>
					)}

					<div>
						<button type="button" className={PRIMARY_BUTTON} disabled={saving || (!form.lifetime && !form.expires_at)} {...permit.hide("create")} onClick={create}>
							<IconKey size={16} /> {saving ? "Creating…" : "Create license"}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
