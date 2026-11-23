"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconShieldCheck } from "@tabler/icons-react";
import { useCounterStore } from "../store/useCounterStore";
import { postApi, FIELD, LABEL, HINT, PRIMARY_BUTTON, TOOLBAR_BUTTON, Toggle } from "./pages/marketingUi";

/**
 * Settings > API Keys > reCAPTCHA (ComboStoreRecaptcha.php).
 *
 * Saved on its own (update_recaptcha_settings), not with the rest of the
 * settings page: the secret key lives in its own option and never comes back
 * to the browser - a blank secret field keeps the saved one.
 *
 * "Test keys" gets a real token from Google with the site key in the form and
 * has the server check it with the secret, so a mismatched pair (or a domain
 * missing from the key's list) is found before customers are locked out.
 */

const FORMS = [
	["login", "Sign in", "The storefront and dashboard sign-in."],
	["register", "Create account", "Both sign-up forms."],
	["otp", "Phone sign-in code", "Asking for a code by SMS - each one costs a text."],
	["comment", "Reviews and comments", ""],
	["newsletter", "Newsletter sign-up", ""],
	["track_order", "Order tracking", "Guests only; signed-in customers are not asked."],
	["checkout", "Placing an order", "Cash on delivery and orders made before a gateway payment. Staff orders from the dashboard are not asked."],
];

const scripts = {};

/** Load Google's script once per URL. */
function loadScript(src) {
	if (!scripts[src]) {
		scripts[src] = new Promise((resolve, reject) => {
			const callback = "__cstoreRecaptchaPanel" + Object.keys(scripts).length;
			window[callback] = () => resolve(window.grecaptcha);
			const el = document.createElement("script");
			el.src = src + (src.includes("?") ? "&" : "?") + "onload=" + callback;
			el.async = true;
			el.onerror = () => { delete scripts[src]; reject(new Error("Google's reCAPTCHA script could not load.")); };
			document.head.appendChild(el);
		});
	}
	return scripts[src];
}

export default function RecaptchaPanel() {
	const { token, addNotification } = useCounterStore();

	const [s, sets] = useState(null);
	const [secret, setsecret] = useState("");
	const [dirty, setdirty] = useState(false);
	const [saving, setsaving] = useState(false);
	const [testing, settesting] = useState(false);
	const [testResult, settestResult] = useState(null);
	const [v2Ready, setv2Ready] = useState(false);
	const v2Holder = useRef(null);
	const v2Widget = useRef({ id: null, key: "" });
	const v3Loaded = useRef("");

	const notify = (type, content) => addNotification({ type, title: "reCAPTCHA", content });

	useEffect(() => {
		if (!token) return;
		postApi("get_recaptcha_settings", token, {})
			.then((data) => sets(data))
			.catch((e) => notify("error", e.message));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const change = (patch) => {
		sets((prev) => ({ ...prev, ...patch }));
		setdirty(true);
		settestResult(null);
	};

	const save = async () => {
		setsaving(true);
		try {
			const body = { enabled: s.enabled, version: s.version, site_key: s.site_key.trim(), min_score: s.min_score, forms: s.forms };
			if (secret.trim()) body.secret_key = secret.trim();
			const data = await postApi("update_recaptcha_settings", token, body);
			sets(data);
			setsecret("");
			setdirty(false);
			notify("success", data?.message || "reCAPTCHA settings saved.");
		} catch (e) {
			notify("error", e.message);
		} finally {
			setsaving(false);
		}
	};

	/* v2: a checkbox to tick before testing, rendered with the key in the form. */
	const showV2Box = async () => {
		const key = s.site_key.trim();
		const grecaptcha = await loadScript("https://www.google.com/recaptcha/api.js?render=explicit");
		if (v2Widget.current.id !== null && v2Widget.current.key === key) {
			grecaptcha.reset(v2Widget.current.id);
			return;
		}
		if (v2Holder.current) v2Holder.current.innerHTML = "";
		const target = document.createElement("div");
		v2Holder.current?.appendChild(target);
		v2Widget.current = { id: grecaptcha.render(target, { sitekey: key }), key };
		setv2Ready(true);
	};

	const test = async () => {
		const key = s.site_key.trim();
		if (!key) { notify("error", "Enter the site key first."); return; }
		if (!secret.trim() && !s.has_secret) { notify("error", "Enter the secret key first."); return; }

		settesting(true);
		settestResult(null);
		try {
			let value = "";

			if (s.version === "v2") {
				if (!v2Ready || v2Widget.current.key !== key) {
					await showV2Box();
					settestResult({ ok: null, message: "Tick \"I'm not a robot\" below, then press Test keys again." });
					return;
				}
				value = window.grecaptcha.getResponse(v2Widget.current.id);
				if (!value) {
					settestResult({ ok: null, message: "Tick \"I'm not a robot\" below first." });
					return;
				}
			} else {
				if (v3Loaded.current && v3Loaded.current !== key) {
					settestResult({ ok: false, message: "Reload this page to test a different v3 site key." });
					return;
				}
				const grecaptcha = await loadScript("https://www.google.com/recaptcha/api.js?render=" + encodeURIComponent(key));
				v3Loaded.current = key;
				value = await new Promise((resolve, reject) => grecaptcha.ready(() => grecaptcha.execute(key, { action: "settings_test" }).then(resolve, reject)));
			}

			const data = await postApi("recaptcha_test", token, { token: value, version: s.version, secret_key: secret.trim() });
			settestResult({ ok: true, message: data?.message || "The keys work." });
		} catch (e) {
			settestResult({ ok: false, message: e?.message || "The test failed." });
		} finally {
			if (s.version === "v2" && v2Widget.current.id !== null) {
				try { window.grecaptcha.reset(v2Widget.current.id); } catch (_e) { }
			}
			settesting(false);
		}
	};

	if (!s) {
		return <div className="text-sm text-gray-500">Loading reCAPTCHA settings…</div>;
	}

	const anyForm = Object.values(s.forms || {}).some(Boolean);

	return (
		<div className="flex flex-col gap-4">
			<div className="rounded-lg border border-gray-200 bg-white p-4">
				<Toggle
					checked={s.enabled}
					onChange={(v) => change({ enabled: v })}
					label="Protect the selected forms with reCAPTCHA"
					hint="A form that is protected refuses a submission Google does not vouch for. Test the keys before switching this on."
				/>
				{s.enabled && !anyForm && <p className="mt-2 text-xs text-amber-700">No form is selected below, so nothing is protected yet.</p>}
			</div>

			<div className="grid grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-white p-4 md:grid-cols-2">
				<div className="md:col-span-2">
					<label className={LABEL}>Type</label>
					<div className="flex flex-wrap gap-4 text-sm">
						<label className="inline-flex items-center gap-2"><input type="radio" className="accent-[#634FE5]" checked={s.version === "v3"} onChange={() => change({ version: "v3" })} /> v3 - invisible, scored</label>
						<label className="inline-flex items-center gap-2"><input type="radio" className="accent-[#634FE5]" checked={s.version === "v2"} onChange={() => change({ version: "v2" })} /> v2 - "I'm not a robot" checkbox</label>
					</div>
					<p className={HINT}>
						Keys only work for the type they were made for. Create them at{" "}
						<a href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noreferrer" className="text-[#634FE5] underline">google.com/recaptcha/admin</a>
						{" "}and add your store's domain to the key.
					</p>
				</div>

				<div>
					<label className={LABEL}>Site key</label>
					<input className={FIELD} autoComplete="off" data-1p-ignore="true" data-lpignore="true" value={s.site_key} placeholder="6Lc…" onChange={(ev) => change({ site_key: ev.target.value.trim() })} />
				</div>
				<div>
					<label className={LABEL}>Secret key</label>
					<input type="password" className={FIELD} autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" value={secret} placeholder={s.has_secret ? "•••••••• saved - type to replace" : "6Lc…"} onChange={(ev) => { setsecret(ev.target.value); setdirty(true); settestResult(null); }} />
				</div>

				{s.version === "v3" && (
					<div className="md:col-span-2">
						<label className={LABEL}>Minimum score: {Number(s.min_score).toFixed(1)}</label>
						<input type="range" min="0.1" max="0.9" step="0.1" className="w-full accent-[#634FE5]" value={s.min_score} onChange={(ev) => change({ min_score: Number(ev.target.value) })} />
						<p className={HINT}>Google scores each request from 0.0 (a bot) to 1.0 (a person). 0.5 is Google's suggestion; raise it if bots get through, lower it if customers are refused.</p>
					</div>
				)}

				<div className="flex flex-wrap items-center gap-3 md:col-span-2">
					<button type="button" className={TOOLBAR_BUTTON} disabled={testing} onClick={test}>
						<IconShieldCheck size={16} /> {testing ? "Testing…" : "Test keys"}
					</button>
					{testResult && (
						<span className={`text-sm ${testResult.ok === true ? "text-green-700" : testResult.ok === false ? "text-red-600" : "text-gray-600"}`}>{testResult.message}</span>
					)}
				</div>
				{s.version === "v2" && <div ref={v2Holder} className="md:col-span-2" />}
			</div>

			<div className="rounded-lg border border-gray-200 bg-white p-4">
				<div className={LABEL}>Forms to protect</div>
				<div className="flex flex-col gap-3">
					{FORMS.map(([key, label, hint]) => (
						<Toggle key={key} checked={!!s.forms?.[key]} onChange={(v) => change({ forms: { ...s.forms, [key]: v } })} label={label} hint={hint} />
					))}
				</div>
			</div>

			<div className="flex flex-wrap items-center gap-3">
				<button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={save}>
					{saving ? "Saving…" : "Save reCAPTCHA settings"}
				</button>
				{dirty && <span className="text-xs text-amber-700">Unsaved reCAPTCHA changes. They are saved with this button, not with the main Save button.</span>}
			</div>
		</div>
	);
}
