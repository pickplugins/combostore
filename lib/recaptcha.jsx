"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Google reCAPTCHA for the storefront's forms (ComboStoreRecaptcha.php).
 *
 * The server decides which forms need it; this asks once per page load
 * (recaptcha_config) and then, per form:
 *
 *   const captcha = useRecaptcha("login");
 *   ...
 *   {captcha.widget}                         // the v2 checkbox, or nothing for v3
 *   const fields = await captcha.fields();   // { recaptcha_token: ... } or {}
 *   fetch(url, { body: JSON.stringify({ ...payload, ...fields }) })
 *   captcha.reset();                         // after a failed submit (v2 tokens are single use)
 *
 * The token travels in the JSON body rather than a header: a custom header
 * needs the WordPress host's CORS rules to allow it (many only allow
 * Authorization and Content-Type), a body field needs nothing.
 *
 * fields() throws a RecaptchaError with a message fit to show when a v2
 * checkbox has not been ticked.
 */

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

let configPromise = null;
let scriptPromise = null;

export class RecaptchaError extends Error {}

/** The public reCAPTCHA config, fetched once. Never rejects: no config means no reCAPTCHA. */
export function getRecaptchaConfig() {
	if (!configPromise) {
		configPromise = fetch(serverUrl + "wp-json/combo-store/v2/recaptcha_config", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: "{}",
		})
			.then((r) => (r.ok ? r.json() : null))
			.catch(() => null)
			.then((c) => (c?.enabled && c?.site_key ? c : { enabled: false, forms: [] }));
	}

	return configPromise;
}

function loadScript(config) {
	if (typeof window === "undefined") return Promise.resolve(null);

	if (!scriptPromise) {
		scriptPromise = new Promise((resolve, reject) => {
			const callback = "__cstoreRecaptchaReady";
			window[callback] = () => resolve(window.grecaptcha);

			const src = config.version === "v2"
				? `https://www.google.com/recaptcha/api.js?onload=${callback}&render=explicit`
				: `https://www.google.com/recaptcha/api.js?onload=${callback}&render=${encodeURIComponent(config.site_key)}`;

			const script = document.createElement("script");
			script.src = src;
			script.async = true;
			script.defer = true;
			script.onerror = () => {
				scriptPromise = null;
				reject(new RecaptchaError("reCAPTCHA could not load. Check your connection and try again."));
			};
			document.head.appendChild(script);
		});
	}

	return scriptPromise;
}

/** A v3 token for one action (the form key), minted at submit time. */
async function v3Token(config, action) {
	const grecaptcha = await loadScript(config);

	return new Promise((resolve, reject) => {
		grecaptcha.ready(() => {
			grecaptcha.execute(config.site_key, { action }).then(resolve, () => reject(new RecaptchaError("reCAPTCHA could not run. Please try again.")));
		});
	});
}

/**
 * reCAPTCHA for one form.
 *
 * @param {string} form One of login, register, otp, comment, newsletter, track_order, checkout.
 * @returns {{required:boolean, widget:React.ReactNode, fields:() => Promise<object>, token:() => Promise<string>, reset:() => void}}
 */
export function useRecaptcha(form) {
	const [config, setconfig] = useState(null);
	const holder = useRef(null);
	const widgetId = useRef(null);

	useEffect(() => {
		let live = true;
		getRecaptchaConfig().then((c) => live && setconfig(c));
		return () => { live = false; };
	}, []);

	const required = Boolean(config?.enabled && config.forms?.includes(form));
	const isV2 = required && config.version === "v2";

	/* v3 loads its script up front so the badge and scoring start before submit; v2 renders the checkbox. */
	useEffect(() => {
		if (!required) return;

		let live = true;

		loadScript(config)
			.then((grecaptcha) => {
				if (!live || !isV2 || !holder.current || widgetId.current !== null) return;
				widgetId.current = grecaptcha.render(holder.current, { sitekey: config.site_key });
			})
			.catch(() => { });

		return () => { live = false; };
	}, [required, isV2, config]);

	const token = useCallback(async () => {
		const c = config ?? (await getRecaptchaConfig());

		if (!(c?.enabled && c.forms?.includes(form))) return "";

		if (c.version === "v2") {
			const value = widgetId.current !== null ? window.grecaptcha?.getResponse(widgetId.current) : "";
			if (!value) throw new RecaptchaError("Please tick \"I'm not a robot\" first.");
			return value;
		}

		return v3Token(c, form);
	}, [config, form]);

	const fields = useCallback(async () => {
		const value = await token();
		return value ? { recaptcha_token: value } : {};
	}, [token]);

	const reset = useCallback(() => {
		if (widgetId.current !== null && window.grecaptcha?.reset) {
			try { window.grecaptcha.reset(widgetId.current); } catch (_e) { }
		}
	}, []);

	const widget = isV2 ? <div ref={holder} className="recaptcha-widget my-2 min-h-[78px]" /> : null;

	return { required, widget, fields, token, reset };
}
