"use client";

import React, { useEffect, useState } from "react";
import { useCounterStore } from "../../store/useCounterStore";
import { IconMail, IconMessage2, IconUsers, IconDeviceFloppy, IconFlask, IconMailCheck, IconBrandWhatsapp, IconCopy, IconPhoneCall, IconBrandMeta } from "@tabler/icons-react";
import HtmlEditor from "../HtmlEditor";
import Link from "next/link";
import { postApi, CARD, FIELD, LABEL, HINT, PRIMARY_BUTTON, TOOLBAR_BUTTON, Toggle, useMarketingLists } from "./marketingUi";

/*
	Sections that load their own settings (Voice, Facebook Ads) appear after the
	browser has already tried to jump to #their-id, so links like
	/dashboard/marketing-settings#facebook-ads would stay at the top. Once the
	section has loaded, scroll to it if the address names it - again a moment
	later, in case sections above it were still filling in.
*/
function useScrollToHash(id, ready) {
	useEffect(() => {
		if (!ready || typeof window === "undefined" || window.location.hash !== `#${id}`) return;
		var go = () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
		var first = setTimeout(go, 50);
		var again = setTimeout(go, 800);
		return () => { clearTimeout(first); clearTimeout(again); };
	}, [id, ready]);
}

/*
	Marketing settings live in their own option (combo_store_marketing), not in
	the global settings the whole dashboard loads, so SMTP passwords and SMS API
	keys never reach the browser: secrets come back blank with a has_* flag,
	and a blank secret on save keeps the stored one.
*/
const SMTP_PRESETS = {
	"": { label: "Custom" },
	gmail: { label: "Gmail / Google Workspace", host: "smtp.gmail.com", port: 587, encryption: "tls", note: "Use an app password (Google account › Security › App passwords)." },
	outlook: { label: "Outlook / Microsoft 365", host: "smtp.office365.com", port: 587, encryption: "tls" },
	sendgrid: { label: "SendGrid", host: "smtp.sendgrid.net", port: 587, encryption: "tls", note: "Username is literally \"apikey\"; the password is your API key." },
	mailgun: { label: "Mailgun", host: "smtp.mailgun.org", port: 587, encryption: "tls" },
	ses: { label: "Amazon SES", host: "email-smtp.us-east-1.amazonaws.com", port: 587, encryption: "tls", note: "Change the region in the host to match your SES region." },
	brevo: { label: "Brevo (Sendinblue)", host: "smtp-relay.brevo.com", port: 587, encryption: "tls" },
	zoho: { label: "Zoho Mail", host: "smtp.zoho.com", port: 465, encryption: "ssl" },
};

const MarketingSettings = () => {
	const { token, addNotification } = useCounterStore();
	const [lists] = useMarketingLists(token, postApi);
	const [s, sets] = useState(null);
	const [saving, setsaving] = useState(false);
	const [dirty, setdirty] = useState(false);
	const [testTo, settestTo] = useState({ email: "", sms: "" });
	const [testing, settesting] = useState("");

	/* "SMTP server" with no host of its own already sends through the store's selected server; show it as such. */
	const shown = (data) => (data?.mailer_in_use === "store" && data?.email?.mailer !== "store" ? { ...data, email: { ...data.email, mailer: "store" } } : data);

	useEffect(() => {
		if (!token) return;
		postApi("get_marketing_settings", token, {})
			.then((data) => sets(shown(data)))
			.catch((e) => addNotification({ type: "error", title: "Settings not loaded", content: e.message }));
	}, [token]);

	function set(group, key, value) {
		sets((prev) => ({ ...prev, [group]: { ...prev[group], [key]: value } }));
		setdirty(true);
	}

	async function save(quiet = false) {
		setsaving(true);
		try {
			/* The dashboard runs on the storefront's address, so an empty store address defaults to it. */
			await postApi("update_marketing_settings", token, { ...s, email: { ...s.email, store_url: s.email.store_url || window.location.origin } });
			var fresh = await postApi("get_marketing_settings", token, {});
			sets(shown(fresh));
			setdirty(false);
			if (!quiet) addNotification({ type: "success", title: "Marketing settings saved", content: "" });
			return true;
		} catch (e) {
			addNotification({ type: "error", title: "Settings not saved", content: e.message });
			return false;
		} finally {
			setsaving(false);
		}
	}

	async function test(channel) {
		if (dirty && !(await save(true))) return;
		settesting(channel);
		var body = channel === "email"
			? { channel, to: testTo.email, subject: "Test email from your store", body: "<p>Hello {name},</p><p>If you can read this, your marketing email settings work.</p>" }
			: { channel, to: testTo.sms, body: "Test SMS from {site_name}: your SMS settings work." };
		postApi("send_mkt_test", token, body)
			.then(() => addNotification({ type: "success", title: "Test sent", content: `Check ${channel === "email" ? testTo.email : testTo.sms}.` }))
			.catch((e) => addNotification({ type: "error", title: "Test failed", content: e.message }))
			.finally(() => settesting(""));
	}

	if (!s) return <div className="page-shell"><div className="text-sm text-gray-500">Loading settings…</div></div>;

	var preset = Object.entries(SMTP_PRESETS).find(([k, p]) => k && p.host === s.smtp.host)?.[0] ?? "";

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">Marketing settings</h1>
					<p className="mt-0.5 text-xs text-gray-500">How campaign email and SMS are delivered. Order and account emails are not affected.</p>
				</div>
				<button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={() => save()}><IconDeviceFloppy size={16} /> {saving ? "Saving…" : "Save settings"}</button>
			</div>

			{/* Email */}
			<section className={CARD}>
				<h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconMail size={16} className="text-indigo-500" /> Email</h2>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div>
						<label className={LABEL}>From name</label>
						<input className={FIELD} value={s.email.from_name} onChange={(ev) => set("email", "from_name", ev.target.value)} />
					</div>
					<div>
						<label className={LABEL}>From email</label>
						<input type="email" className={FIELD} value={s.email.from_email} onChange={(ev) => set("email", "from_email", ev.target.value)} />
					</div>
					<div>
						<label className={LABEL}>Reply-to (optional)</label>
						<input type="email" className={FIELD} value={s.email.reply_to} onChange={(ev) => set("email", "reply_to", ev.target.value)} />
					</div>
					<div className="md:col-span-3">
						<label className={LABEL}>Store web address</label>
						<input className={FIELD} value={s.email.store_url ?? ""} placeholder={typeof window !== "undefined" ? window.location.origin : "https://yourstore.com"} onChange={(ev) => set("email", "store_url", ev.target.value)} />
						<p className={HINT}>Where links in emails ({"{site_url}"}, “Finish my order”) and the confirm / unsubscribe pages send people. {!s.email.store_url && "Empty: filled in with this site's address when you save."}</p>
					</div>
					<div className="md:col-span-3">
						<label className={LABEL}>Footer</label>
						<textarea rows={2} className={FIELD} value={s.email.footer} placeholder="Your Store Ltd · 12 Road, Dhaka 1207" onChange={(ev) => set("email", "footer", ev.target.value)} />
						<p className={HINT}>Shown under every campaign email, above the unsubscribe link. Anti-spam laws usually require your postal address. HTML allowed.</p>
					</div>
				</div>

				<div className="mt-5 border-t border-gray-100 pt-5">
					<label className={LABEL}>Send with</label>
					<div className="flex flex-wrap gap-4 text-sm">
						<label className="inline-flex items-center gap-2"><input type="radio" className="accent-[#634FE5]" checked={s.email.mailer === "store"} onChange={() => set("email", "mailer", "store")} /> Store SMTP (Settings › API Keys)</label>
						<label className="inline-flex items-center gap-2"><input type="radio" className="accent-[#634FE5]" checked={s.email.mailer === "smtp"} onChange={() => set("email", "mailer", "smtp")} /> A separate SMTP server for marketing</label>
						<label className="inline-flex items-center gap-2"><input type="radio" className="accent-[#634FE5]" checked={s.email.mailer === "wordpress"} onChange={() => set("email", "mailer", "wordpress")} /> WordPress mail (wp_mail)</label>
					</div>
					{s.email.mailer === "store" && (s.store_smtp
						? <p className={HINT}>Sends through <strong>{s.store_smtp.label || s.store_smtp.host}</strong> ({s.store_smtp.host}:{s.store_smtp.port}), the server selected in <Link href="/settings" className="text-[#634FE5] underline">Settings › API Keys › SMTP</Link>.{s.store_smtp.from_email ? ` Emails go out from ${s.store_smtp.from_email}; the from address above becomes the reply-to.` : ""}</p>
						: <p className="mt-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">No SMTP server is selected yet. Add one in <Link href="/settings" className="underline">Settings › API Keys › SMTP</Link> - marketing email cannot be sent until then.</p>)}
					{s.email.mailer === "wordpress" && <p className={HINT}>Uses the site's own mail setup - the store SMTP server when it is switched on in API Keys, otherwise PHP mail. A dedicated SMTP service delivers bulk mail far better.</p>}
				</div>

				{s.email.mailer === "smtp" && (
					<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
						<div className="md:col-span-4">
							<label className={LABEL}>Provider</label>
							<select className={`${FIELD} md:!w-80`} value={preset} onChange={(ev) => {
								var p = SMTP_PRESETS[ev.target.value];
								if (p?.host) sets((prev) => ({ ...prev, smtp: { ...prev.smtp, host: p.host, port: p.port, encryption: p.encryption, auth: true } }));
								setdirty(true);
							}}>
								{Object.entries(SMTP_PRESETS).map(([k, p]) => <option key={k} value={k}>{p.label}</option>)}
							</select>
							{SMTP_PRESETS[preset]?.note && <p className={HINT}>{SMTP_PRESETS[preset].note}</p>}
						</div>
						<div className="md:col-span-2">
							<label className={LABEL}>SMTP host</label>
							<input className={FIELD} value={s.smtp.host} placeholder="smtp.example.com" onChange={(ev) => set("smtp", "host", ev.target.value)} />
						</div>
						<div>
							<label className={LABEL}>Port</label>
							<input type="number" className={FIELD} value={s.smtp.port} onChange={(ev) => set("smtp", "port", ev.target.value)} />
						</div>
						<div>
							<label className={LABEL}>Encryption</label>
							<select className={FIELD} value={s.smtp.encryption} onChange={(ev) => {
								var enc = ev.target.value;
								sets((prev) => ({ ...prev, smtp: { ...prev.smtp, encryption: enc, port: enc === "ssl" ? 465 : enc === "tls" ? 587 : prev.smtp.port } }));
								setdirty(true);
							}}>
								<option value="tls">STARTTLS (587)</option>
								<option value="ssl">SSL/TLS (465)</option>
								<option value="none">None</option>
							</select>
						</div>
						<div className="md:col-span-4">
							<Toggle checked={s.smtp.auth} onChange={(v) => set("smtp", "auth", v)} label="Server requires a username and password" />
						</div>
						{s.smtp.auth && (
							<>
								<div className="md:col-span-2">
									<label className={LABEL}>Username</label>
									<input className={FIELD} autoComplete="off" value={s.smtp.username} onChange={(ev) => set("smtp", "username", ev.target.value)} />
								</div>
								<div className="md:col-span-2">
									<label className={LABEL}>Password</label>
									<input type="password" className={FIELD} autoComplete="new-password" value={s.smtp.password} placeholder={s.has_smtp_password ? "•••••••• saved; type to replace" : ""} onChange={(ev) => set("smtp", "password", ev.target.value)} />
								</div>
							</>
						)}
					</div>
				)}

				<div className="mt-5 grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 md:grid-cols-3">
					<div>
						<label className={LABEL}>Emails per batch</label>
						<input type="number" min={1} max={500} className={FIELD} value={s.email.batch_size} onChange={(ev) => set("email", "batch_size", ev.target.value)} />
						<p className={HINT}>Sent each minute or so. Lower it if your SMTP provider limits sending rate.</p>
					</div>
					<div className="md:col-span-2">
						<label className={LABEL}>Send a test email</label>
						<div className="flex gap-2">
							<input type="email" className={FIELD} placeholder="you@example.com" value={testTo.email} onChange={(ev) => settestTo({ ...testTo, email: ev.target.value })} />
							<button type="button" className={TOOLBAR_BUTTON} disabled={!testTo.email.trim() || !!testing} onClick={() => test("email")}><IconFlask size={16} /> {testing === "email" ? "Sending…" : "Test"}</button>
						</div>
						<p className={HINT}>Saves first, then sends through the settings above.</p>
					</div>
				</div>
			</section>

			{/* WhatsApp */}
			<WhatsAppSettings s={s} set={set} token={token} addNotification={addNotification} />

			{/* Messages inbox: Facebook Messenger, and WhatsApp in the inbox */}
			<MessengerSettings token={token} addNotification={addNotification} />

			<VoiceSettings token={token} addNotification={addNotification} />

			<FacebookAdsSettings token={token} addNotification={addNotification} />

			{/* SMS */}
			<section className={CARD}>
				<h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconMessage2 size={16} className="text-sky-500" /> SMS</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div>
						<label className={LABEL}>Provider</label>
						<select className={FIELD} value={s.sms.provider} onChange={(ev) => set("sms", "provider", ev.target.value)}>
							<option value="">Not set up</option>
							<option value="bulksmsbd">BulkSMSBD</option>
							<option value="twilio">Twilio</option>
							<option value="http">Other (HTTP API)</option>
						</select>
					</div>
					<div>
						<label className={LABEL}>Sender ID</label>
						<input className={FIELD} value={s.sms.sender_id} placeholder="Approved sender ID or number" onChange={(ev) => set("sms", "sender_id", ev.target.value)} />
					</div>
					<div>
						<label className={LABEL}>Default country code</label>
						<input className={FIELD} value={s.sms.country_code} placeholder="880" onChange={(ev) => set("sms", "country_code", ev.target.value)} />
						<p className={HINT}>Turns local numbers (01711…) into international (+8801711…) so duplicates are caught.</p>
					</div>

					{s.sms.provider === "bulksmsbd" && (
						<div className="md:col-span-3">
							<label className={LABEL}>API key</label>
							<input type="password" className={`${FIELD} md:!w-96`} autoComplete="new-password" value={s.bulksmsbd.api_key} placeholder={s.has_bulksmsbd_api_key ? "•••••••• saved; type to replace" : ""} onChange={(ev) => set("bulksmsbd", "api_key", ev.target.value)} />
							<p className={HINT}>From bulksmsbd.net › API. The sender ID above must be approved on your account.</p>
						</div>
					)}

					{s.sms.provider === "twilio" && (
						<>
							<div>
								<label className={LABEL}>Account SID</label>
								<input className={FIELD} value={s.twilio.account_sid} onChange={(ev) => set("twilio", "account_sid", ev.target.value)} />
							</div>
							<div>
								<label className={LABEL}>Auth token</label>
								<input type="password" className={FIELD} autoComplete="new-password" value={s.twilio.auth_token} placeholder={s.has_twilio_auth_token ? "•••••••• saved" : ""} onChange={(ev) => set("twilio", "auth_token", ev.target.value)} />
							</div>
							<div>
								<label className={LABEL}>From number</label>
								<input className={FIELD} value={s.twilio.from} placeholder="+15551234567" onChange={(ev) => set("twilio", "from", ev.target.value)} />
							</div>
							<div className="md:col-span-3">
								<label className={LABEL}>Messaging service SID (optional)</label>
								<input className={`${FIELD} md:!w-96`} value={s.twilio.messaging_service_sid} onChange={(ev) => set("twilio", "messaging_service_sid", ev.target.value)} />
								<p className={HINT}>When set, it is used instead of the from number.</p>
							</div>
						</>
					)}

					{s.sms.provider === "http" && (
						<>
							<div className="md:col-span-2">
								<label className={LABEL}>API URL</label>
								<input className={FIELD} value={s.http.url} placeholder="https://api.provider.com/send" onChange={(ev) => set("http", "url", ev.target.value)} />
							</div>
							<div>
								<label className={LABEL}>Method</label>
								<select className={FIELD} value={s.http.method} onChange={(ev) => set("http", "method", ev.target.value)}>
									<option value="POST">POST</option>
									<option value="GET">GET (query string)</option>
								</select>
							</div>
							<div className="md:col-span-2">
								<label className={LABEL}>Parameters</label>
								<textarea rows={4} className={`${FIELD} font-mono !text-xs`} value={s.http.params} onChange={(ev) => set("http", "params", ev.target.value)} />
								<p className={HINT}>One <code>name=value</code> per line. Placeholders: {"{to}"} (+8801…), {"{to_digits}"} (8801…), {"{message}"}, {"{sender_id}"}. Put your API key here too.</p>
							</div>
							<div>
								<label className={LABEL}>Body format</label>
								<select className={FIELD} value={s.http.body_format} disabled={s.http.method === "GET"} onChange={(ev) => set("http", "body_format", ev.target.value)}>
									<option value="form">Form fields</option>
									<option value="json">JSON</option>
								</select>
								<label className={`${LABEL} mt-3`}>Success if response contains</label>
								<input className={FIELD} value={s.http.success_contains} placeholder="(any 2xx response)" onChange={(ev) => set("http", "success_contains", ev.target.value)} />
							</div>
							<div className="md:col-span-3">
								<label className={LABEL}>Headers</label>
								<textarea rows={2} className={`${FIELD} font-mono !text-xs`} value={s.http.headers} placeholder="Authorization: Bearer xxxxx" onChange={(ev) => set("http", "headers", ev.target.value)} />
							</div>
						</>
					)}

					<div className="md:col-span-2">
						<label className={LABEL}>Footer</label>
						<input className={FIELD} value={s.sms.footer} placeholder="Reply STOP to opt out" maxLength={160} onChange={(ev) => set("sms", "footer", ev.target.value)} />
						<p className={HINT}>Added to the end of every campaign SMS.</p>
					</div>
					<div>
						<label className={LABEL}>SMS per batch</label>
						<input type="number" min={1} max={500} className={FIELD} value={s.sms.batch_size} onChange={(ev) => set("sms", "batch_size", ev.target.value)} />
					</div>
					<div className="md:col-span-3">
						<label className={LABEL}>Send a test SMS</label>
						<div className="flex gap-2 md:w-[28rem]">
							<input type="tel" className={FIELD} placeholder="01711000000" value={testTo.sms} onChange={(ev) => settestTo({ ...testTo, sms: ev.target.value })} />
							<button type="button" className={TOOLBAR_BUTTON} disabled={!testTo.sms.trim() || !s.sms.provider || !!testing} onClick={() => test("sms")}><IconFlask size={16} /> {testing === "sms" ? "Sending…" : "Test"}</button>
						</div>
						<p className={HINT}>Sends a real message; your provider will charge for it.</p>
					</div>
				</div>
			</section>

			{/* Double opt-in */}
			<section className={CARD}>
				<h2 className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconMailCheck size={16} className="text-emerald-500" /> Sign-up confirmation (double opt-in)</h2>
				<p className="mb-4 text-xs text-gray-500">Applies to email addresses entered in the storefront Newsletter Signup form. Imports, syncs and contacts you add yourself are not affected.</p>
				<div className="flex flex-col gap-4">
					<Toggle checked={s.optin?.enabled} onChange={(v) => set("optin", "enabled", v)}
						label="Ask new subscribers to confirm their email address"
						hint="They are saved as “Unconfirmed” and get an email with a link; campaigns reach them only after they click it. This keeps mistyped and fake addresses off your list, and lets someone who unsubscribed come back. Phone numbers are subscribed straight away." />

					{s.optin?.enabled && ((s.email.mailer === "smtp" && !s.smtp.host) || (s.email.mailer === "store" && !s.store_smtp)) && (
						<p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">Set up SMTP above first. Until the confirmation email can be sent, the sign-up form will tell people to try again later.</p>
					)}

					{s.optin?.enabled && (
						<>
							<div>
								<label className={LABEL}>Email subject</label>
								<input className={FIELD} value={s.optin.subject} onChange={(ev) => set("optin", "subject", ev.target.value)} />
							</div>
							<div>
								<label className={LABEL}>Email message</label>
								<HtmlEditor value={s.optin.body} onChange={(html) => set("optin", "body", html)} minHeight={200} placeholder="Ask them to confirm…" />
								<p className={HINT}>
									Must contain <code className="font-mono">{"{confirm_url}"}</code> (use it as a link's address); without it the default message is used.
									Also available: {"{name}"}, {"{first_name}"}, {"{email}"}, {"{site_name}"}. The link works for 7 days.
								</p>
								{!String(s.optin.body || "").includes("{confirm_url}") && <p className="mt-1 text-xs text-red-600">This message has no {"{confirm_url}"} link.</p>}
							</div>
							<div>
								<label className={LABEL}>After confirming, go to (optional)</label>
								<input className={FIELD} value={s.optin.redirect_url} placeholder="https://yourstore.com/welcome" onChange={(ev) => set("optin", "redirect_url", ev.target.value)} />
								<p className={HINT}>A page on your store, such as one with a welcome discount. Empty shows a simple “You are subscribed” page.</p>
							</div>
							<p className="text-xs text-gray-600">
								After confirming, new subscribers also get the <Link href="/dashboard/marketing-campaigns/welcome" className="font-medium text-[#634FE5] hover:underline">welcome email</Link> (if it is turned on).
							</p>
						</>
					)}
				</div>
			</section>

			{/* Contacts */}
			<section className={CARD}>
				<h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconUsers size={16} className="text-violet-500" /> Contacts</h2>
				<div className="flex flex-col gap-4">
					<Toggle checked={s.contacts.auto_add} onChange={(v) => set("contacts", "auto_add", v)} label="Add new customers and buyers to contacts automatically" hint="When someone registers as a customer or places an order. Existing contacts only get blanks filled." />
					{s.contacts.auto_add && (
						<div className="grid grid-cols-1 gap-4 pl-7 md:grid-cols-3">
							<Toggle checked={s.contacts.auto_subscribe_email} onChange={(v) => set("contacts", "auto_subscribe_email", v)} label="Subscribe them to email" />
							<Toggle checked={s.contacts.auto_subscribe_sms} onChange={(v) => set("contacts", "auto_subscribe_sms", v)} label="Subscribe them to SMS" />
							<div>
								<label className={LABEL}>Add to list</label>
								<select className={FIELD} value={s.contacts.auto_list} onChange={(ev) => set("contacts", "auto_list", Number(ev.target.value))}>
									<option value={0}>No list</option>
									{lists.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
								</select>
							</div>
							<p className="text-xs text-amber-700 md:col-span-3">Only subscribe people automatically if your checkout or sign-up asks for marketing consent.</p>
						</div>
					)}
					<div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
						<div className="font-medium text-gray-800">Public endpoints</div>
						<div className="mt-1 break-all">Sign-up (POST email/phone/name/list_id): <code>{s.public_endpoints?.subscribe}</code></div>
						<div className="mt-0.5 break-all">Unsubscribe links point at: <code>{s.public_endpoints?.unsubscribe}</code></div>
					</div>
				</div>
			</section>
		</div>
	);
};

/*
	WhatsApp Business Platform (Meta Cloud API). The ids and token come from
	the app in developers.facebook.com (WhatsApp > API Setup); a permanent
	token is a System User token from Business Settings. The webhook gives
	delivery receipts and STOP replies; it is set up in the app's WhatsApp >
	Configuration with the URL and verify token below, subscribed to "messages".
*/
const WhatsAppSettings = ({ s, set, token, addNotification }) => {
	var w = s.whatsapp ?? {};
	var [checking, setchecking] = useState(false);

	function copy(text) {
		navigator.clipboard?.writeText(text).then(() => addNotification({ type: "success", title: "Copied", content: "" }));
	}

	function check() {
		setchecking(true);
		postApi("get_mkt_wa_templates", token, {})
			.then((res) => {
				var approved = (res?.templates ?? []).filter((t) => t.status === "APPROVED").length;
				addNotification({ type: "success", title: "WhatsApp connected", content: `${res?.templates?.length ?? 0} templates, ${approved} approved.` });
			})
			.catch((e) => addNotification({ type: "error", title: "WhatsApp not connected", content: e.message }))
			.finally(() => setchecking(false));
	}

	return (
		<section className={CARD}>
			<h2 className="mb-1 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconBrandWhatsapp size={16} className="text-emerald-500" /> WhatsApp</h2>
			<p className="mb-4 text-xs text-gray-500">Uses the official WhatsApp Business Platform (Meta Cloud API). Campaigns send your approved message templates; Meta bills each marketing message.</p>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div>
					<label className={LABEL}>Phone number ID</label>
					<input className={FIELD} value={w.phone_number_id ?? ""} placeholder="1234567890" onChange={(ev) => set("whatsapp", "phone_number_id", ev.target.value)} />
				</div>
				<div>
					<label className={LABEL}>WhatsApp Business Account ID</label>
					<input className={FIELD} value={w.waba_id ?? ""} placeholder="1029384756" onChange={(ev) => set("whatsapp", "waba_id", ev.target.value)} />
				</div>
				<div>
					<label className={LABEL}>API version</label>
					<input className={FIELD} value={w.api_version ?? "v25.0"} onChange={(ev) => set("whatsapp", "api_version", ev.target.value)} />
					<p className={HINT}>Meta's Graph API version. Meta retires each one about two years after release.</p>
				</div>
				<div className="md:col-span-2">
					<label className={LABEL}>Access token</label>
					<input type="password" className={FIELD} autoComplete="new-password" value={w.access_token ?? ""} placeholder={s.has_whatsapp_access_token ? "•••••••• saved; type to replace" : "A permanent System User token"} onChange={(ev) => set("whatsapp", "access_token", ev.target.value)} />
					<p className={HINT}>From Business Settings › System users, with whatsapp_business_messaging and whatsapp_business_management. Temporary 24-hour tokens stop working the next day.</p>
				</div>
				<div>
					<label className={LABEL}>Messages per batch</label>
					<input type="number" min={1} max={500} className={FIELD} value={w.batch_size ?? 50} onChange={(ev) => set("whatsapp", "batch_size", ev.target.value)} />
				</div>
				<div className="md:col-span-3 rounded-lg border border-gray-200 p-3">
					<div className="mb-2 text-xs font-semibold text-gray-800">Webhook (delivery receipts and STOP replies)</div>
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
						<div>
							<label className={LABEL}>Callback URL</label>
							<div className="flex gap-2">
								<input className={`${FIELD} font-mono !text-xs`} readOnly value={s.public_endpoints?.whatsapp_webhook ?? ""} />
								<button type="button" className={TOOLBAR_BUTTON} onClick={() => copy(s.public_endpoints?.whatsapp_webhook ?? "")}><IconCopy size={14} /></button>
							</div>
						</div>
						<div>
							<label className={LABEL}>Verify token</label>
							<div className="flex gap-2">
								<input className={`${FIELD} font-mono !text-xs`} readOnly value={w.verify_token ?? ""} />
								<button type="button" className={TOOLBAR_BUTTON} onClick={() => copy(w.verify_token ?? "")}><IconCopy size={14} /></button>
							</div>
						</div>
						<div className="md:col-span-2">
							<label className={LABEL}>App secret</label>
							<input type="password" className={FIELD} autoComplete="new-password" value={w.app_secret ?? ""} placeholder={s.has_whatsapp_app_secret ? "•••••••• saved; type to replace" : "App settings › Basic › App secret"} onChange={(ev) => set("whatsapp", "app_secret", ev.target.value)} />
							<p className={HINT}>Proves webhook calls come from Meta; without it they are refused. In your app: WhatsApp › Configuration › Edit, paste the URL and token, then subscribe to <strong>messages</strong>. The webhook needs your live site's https address.</p>
						</div>
					</div>
				</div>
				<div className="md:col-span-3">
					<button type="button" className={TOOLBAR_BUTTON} disabled={checking || !w.waba_id} onClick={check}><IconFlask size={16} /> {checking ? "Checking…" : "Check connection"}</button>
					<p className={HINT}>Save first. Lists your templates; send a real one from a WhatsApp campaign's “Send test”.</p>
				</div>
			</div>
		</section>
	);
};

/*
	Voice (ComboStoreVoice): a cloud PBX / IVR, Talkify first. Its settings are
	their own option (get/update_voice_settings), saved with this section's own
	button. The API key and webhook secret come back blank with has_* flags.
*/
const ORDER_STATUS_LABELS = { processing: "Processing", hold: "Hold", cancelled: "Cancelled" };
const CALL_STATE_LABELS = { queued: "Waiting", placing: "Placing", placed: "Placed", ringing: "Ringing", connected: "Connected", completed: "Answered", no_answer: "No answer", busy: "Busy", failed: "Failed", cancelled: "Not called" };

const VoiceSettings = ({ token, addNotification }) => {
	var [v, setv] = useState(null);
	var [ext, setext] = useState({});
	var [dirty, setdirty] = useState(false);
	var [saving, setsaving] = useState(false);
	var [testing, settesting] = useState(false);
	var [calls, setcalls] = useState(null);
	useScrollToHash("voice", !!v);

	function load() {
		return postApi("get_voice_settings", token, {})
			.then((r) => { setv(r); setext(Object.fromEntries((r.agents ?? []).map((a) => [a.id, a.extension]))); setdirty(false); })
			.catch((e) => addNotification({ type: "error", title: "Voice settings not loaded", content: e.message }));
	}
	function loadCalls() {
		postApi("get_voice_calls", token, { kind: "order_ivr", per_page: 10 }).then((r) => setcalls(r?.posts ?? [])).catch(() => setcalls([]));
	}
	useEffect(() => { if (token) { load(); loadCalls(); } }, [token]);

	function set(group, key, value) {
		setv((prev) => group ? { ...prev, [group]: { ...prev[group], [key]: value } } : { ...prev, [key]: value });
		setdirty(true);
	}

	async function save(quiet = false) {
		setsaving(true);
		try {
			await postApi("update_voice_settings", token, { provider: v.provider, talkify: v.talkify, hellopbx: v.hellopbx, epbx: v.epbx, hours: v.hours, concurrency: v.concurrency, order_ivr: v.order_ivr, extensions: ext });
			await load();
			if (!quiet) addNotification({ type: "success", title: "Voice settings saved", content: "" });
			return true;
		} catch (e) {
			addNotification({ type: "error", title: "Voice settings not saved", content: e.message });
			return false;
		} finally {
			setsaving(false);
		}
	}

	async function test() {
		if (dirty && !(await save(true))) return;
		settesting(true);
		postApi("voice_test", token, {})
			.then((r) => addNotification({ type: "success", title: "Talkify connected", content: r?.message ?? "" }))
			.catch((e) => addNotification({ type: "error", title: "Talkify not connected", content: e.message }))
			.finally(() => settesting(false));
	}

	if (!v) return <section id="voice" className={`${CARD} scroll-mt-20`}><div className="text-sm text-gray-500">Loading voice settings…</div></section>;
	var t = v.talkify ?? {};
	var h = v.hellopbx ?? {};
	var e = v.epbx ?? {};
	var isHello = v.provider === "hellopbx";
	var isEpbx = v.provider === "epbx";
	/* Talkify and ePBX speak our text; HelloPBX plays IVRs built in its own panel. ePBX fixes the order call's keys (1 / 2). */
	var caps = (v.providers ?? []).find((p) => p.key === v.provider)?.capabilities ?? {};
	var tts = caps.tts ?? true;
	var fixedKeys = caps.fixed_keys ?? null;
	var keyPicks = tts && !fixedKeys;
	var hasKey = isHello ? (v.has_hellopbx_api_token || !!h.api_token) : isEpbx ? (v.has_epbx_api_token || !!e.api_token) : (v.has_talkify_api_key || !!t.api_key);
	var brand = isHello ? "HelloPBX" : isEpbx ? "ePBX" : "Talkify";
	var o = v.order_ivr ?? {};
	var roleLabel = (roles) => roles.includes("administrator") ? "Admin" : roles.includes("store_manager") ? "Store manager" : "Support agent";
	var hours = Array.from({ length: 25 }, (_, h) => h);

	return (
		<section id="voice" className={`${CARD} scroll-mt-20`}>
			<div className="mb-1 flex flex-wrap items-center justify-between gap-2">
				<h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900"><IconPhoneCall size={16} className="text-rose-500" /> Voice (PBX / IVR) {v.ready ? <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Connected</span> : <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500 ring-1 ring-inset ring-gray-200">Not set up</span>}</h2>
				<button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={() => save()}><IconDeviceFloppy size={16} /> {saving ? "Saving…" : "Save voice settings"}</button>
			</div>
			<p className="mb-4 text-xs text-gray-500">A cloud phone system for click-to-call on the Calls screen, voice campaigns (a spoken message with keys to press) and order confirmation calls. Saved with its own button.</p>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div>
					<label className={LABEL}>Provider</label>
					<select className={FIELD} value={v.provider} onChange={(ev) => set(null, "provider", ev.target.value)}>
						{(v.providers ?? []).map((p) => <option key={p.key} value={p.key}>{p.label}</option>)}
					</select>
				</div>
				{isHello ? (
					<>
						<div className="md:col-span-2">
							<label className={LABEL}>API token</label>
							<input type="password" className={FIELD} autoComplete="new-password" value={h.api_token ?? ""} placeholder={v.has_hellopbx_api_token ? "•••••••• saved; type to replace" : "Personal API token"} onChange={(ev) => set("hellopbx", "api_token", ev.target.value)} />
							<p className={HINT}>HelloPBX panel › API Keys, with the abilities <code>calls</code>, <code>calls:write</code> and <code>calls:read</code>. Tokens expire after 90 days. Needs Standard PBX or higher (Developer API and Auto Call API).</p>
						</div>
						<div className="md:col-span-2">
							<label className={LABEL}>Webhook signing secret <span className="font-normal text-gray-400">(optional)</span></label>
							<input type="password" className={FIELD} autoComplete="new-password" value={h.webhook_secret ?? ""} placeholder={v.has_hellopbx_webhook_secret ? "•••••••• saved; type to replace" : "The secret of a HelloPBX webhook endpoint"} onChange={(ev) => set("hellopbx", "webhook_secret", ev.target.value)} />
							<p className={HINT}>Call results come back to a private link made for each call, so no webhook has to be set up in HelloPBX. With a secret, its X-CallCRM-Signature is checked too.</p>
						</div>
						<div>
							<label className={LABEL}>Caller ID <span className="font-normal text-gray-400">(optional)</span></label>
							<input className={FIELD} value={h.caller_id ?? ""} placeholder="09639000000" onChange={(ev) => set("hellopbx", "caller_id", ev.target.value)} />
							<p className={HINT}>One of your HelloPBX numbers. Blank: its default.</p>
						</div>
					</>
				) : isEpbx ? (
					<>
						<div className="md:col-span-2">
							<label className={LABEL}>API token</label>
							<input type="password" className={FIELD} autoComplete="new-password" value={e.api_token ?? ""} placeholder={v.has_epbx_api_token ? "•••••••• saved; type to replace" : "From Developer API Settings"} onChange={(ev) => set("epbx", "api_token", ev.target.value)} />
							<p className={HINT}>ePBX dashboard › Developer API Settings. Needs a plan with API Access (Business AI PBX or higher). ePBX has no API for voice campaigns: it is used for order confirmation calls and click-to-call.</p>
						</div>
						<div>
							<label className={LABEL}>Caller ID <span className="font-normal text-gray-400">(optional)</span></label>
							<input className={FIELD} value={e.caller_id ?? ""} placeholder="09639000000" onChange={(ev) => set("epbx", "caller_id", ev.target.value)} />
							<p className={HINT}>For click-to-call: one of your ePBX numbers. Blank: its default.</p>
						</div>
						<p className={`${HINT} md:col-span-3 !mt-0`}>Call results come back to a private link made for each call. ePBX does not sign its webhooks, so that link is the check.</p>
					</>
				) : (
					<>
						<div className="md:col-span-2">
							<label className={LABEL}>API key</label>
							<input type="password" className={FIELD} autoComplete="new-password" value={t.api_key ?? ""} placeholder={v.has_talkify_api_key ? "•••••••• saved; type to replace" : "tk_live_…"} onChange={(ev) => set("talkify", "api_key", ev.target.value)} />
							<p className={HINT}>Talkify dashboard › Developers › API Keys. Give it the scopes <code>outbound:call</code>, <code>outbound:status</code>, <code>click_to_call:call</code> and <code>click_to_call:status</code>.</p>
						</div>
						<div className="md:col-span-2">
							<label className={LABEL}>Webhook signing secret <span className="font-normal text-gray-400">(optional)</span></label>
							<input type="password" className={FIELD} autoComplete="new-password" value={t.webhook_secret ?? ""} placeholder={v.has_talkify_webhook_secret ? "•••••••• saved; type to replace" : "If Talkify gives you one"} onChange={(ev) => set("talkify", "webhook_secret", ev.target.value)} />
							<p className={HINT}>Call results come back to a private link made for each call, so nothing has to be set up in Talkify. With a secret, Talkify's signature is checked too.</p>
						</div>
					</>
				)}
				<div>
					<label className={LABEL}>Calls at once</label>
					<input type="number" min={1} max={50} className={FIELD} value={v.concurrency} onChange={(ev) => set(null, "concurrency", ev.target.value)} />
					<p className={HINT}>Automatic calls in progress at the same time, within your plan's limit ({isHello ? "HelloPBX Standard: 7" : isEpbx ? "ePBX Business: 5" : "Talkify Free: 2"}).</p>
				</div>
				<div>
					<label className={LABEL}>Calling hours from</label>
					<select className={FIELD} value={v.hours.from} onChange={(ev) => set("hours", "from", Number(ev.target.value))}>
						{hours.slice(0, 24).map((h) => <option key={h} value={h}>{String(h).padStart(2, "0")}:00</option>)}
					</select>
				</div>
				<div>
					<label className={LABEL}>to</label>
					<select className={FIELD} value={v.hours.to} onChange={(ev) => set("hours", "to", Number(ev.target.value))}>
						{hours.slice(1).map((h) => <option key={h} value={h}>{String(h).padStart(2, "0")}:00</option>)}
					</select>
				</div>
				<div className="flex items-end">
					<button type="button" className={TOOLBAR_BUTTON} disabled={testing || !hasKey} onClick={test}><IconFlask size={16} /> {testing ? "Checking…" : "Test connection"}</button>
				</div>
				<p className={`${HINT} md:col-span-3 !mt-0`}>Voice campaigns and order confirmation calls only go out in these hours (store time).{isHello || isEpbx ? "" : " Talkify itself calls between 09:00 and 21:00."}</p>

				<div className="md:col-span-3 rounded-lg border border-gray-200 p-3">
					<div className="mb-1 text-xs font-semibold text-gray-800">Agents' extensions (click-to-call)</div>
					<p className="mb-3 text-xs text-gray-500">Click-to-call rings the agent's extension first, then the customer. Agents without one dial from their own phone as before. {isHello || isEpbx ? `Use the ${brand} extension number (e.g. 101). The result shows when the call ends.` : "An email address works too, if that is how Talkify knows the agent. Needs Talkify Starter or higher."}</p>
					<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
						{(v.agents ?? []).map((a) => (
							<label key={a.id} className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 px-3 py-2 text-sm">
								<span className="min-w-0"><span className="block truncate text-gray-800">{a.name}</span><span className="text-[11px] text-gray-400">{roleLabel(a.roles)}</span></span>
								<input className={FIELD + " !w-36"} value={ext[a.id] ?? ""} placeholder="Ext., e.g. 101" onChange={(ev) => { setext({ ...ext, [a.id]: ev.target.value }); setdirty(true); }} />
							</label>
						))}
					</div>
				</div>

				<div className="md:col-span-3 rounded-lg border border-gray-200 p-3">
					<div className="mb-1 text-xs font-semibold text-gray-800">Order confirmation call</div>
					<p className="mb-3 text-xs text-gray-500">Calls each new order's customer: one key confirms the order, another cancels it. Only a still-pending order is changed, and every call adds an order note. {isHello ? "Uses HelloPBX's order confirmation call, which plays its own IVR and reports confirmed or rejected." : isEpbx ? "Uses ePBX's order verification call, which speaks your text (Bangla voices) and reports confirmed or rejected." : "Needs Talkify Growth or higher."}</p>
					<div className="flex flex-col gap-4">
						<Toggle checked={!!o.enabled} onChange={(on) => set("order_ivr", "enabled", on)} label="Call new orders to confirm them" />
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							{tts ? (
								<div className="md:col-span-3">
									<label className={LABEL}>What the call says</label>
									<textarea rows={3} className={FIELD} value={o.text ?? ""} onChange={(ev) => set("order_ivr", "text", ev.target.value)} />
									<p className={HINT}>Tags: {"{name}"} (first name), {"{full_name}"}, {"{order_id}"}, {"{total}"} (said as “35 taka”), {"{site_name}"}. {fixedKeys ? `${brand} fixes the keys: ${fixedKeys.confirm} confirms, ${fixedKeys.cancel} cancels. Say so in the message.` : "Say which key does what."}</p>
								</div>
							) : (
								<div className="md:col-span-3">
									<label className={LABEL}>Order confirmation IVR <span className="font-normal text-gray-400">(optional)</span></label>
									<input type="number" min={0} className={FIELD + " sm:!w-48"} value={h.order_ivr_id || ""} placeholder="Default" onChange={(ev) => set("hellopbx", "order_ivr_id", Number(ev.target.value) || 0)} />
									<p className={HINT}>The IVR's ID from HelloPBX's IVR Builder. Blank: the default order-confirmation IVR in HelloPBX Voice Settings. The customer's name, order number, amount and store name are sent with each call.</p>
								</div>
							)}
							{keyPicks && (
								<div>
									<label className={LABEL}>Key to confirm</label>
									<select className={FIELD} value={o.confirm_key} onChange={(ev) => set("order_ivr", "confirm_key", ev.target.value)}>{"1234567890".split("").map((k) => <option key={k} value={k}>{k}</option>)}</select>
								</div>
							)}
							<div>
								<label className={LABEL}>Confirmed orders become</label>
								<select className={FIELD} value={o.on_confirm} onChange={(ev) => set("order_ivr", "on_confirm", ev.target.value)}>{(v.order_statuses?.confirm ?? []).map((st) => <option key={st} value={st}>{ORDER_STATUS_LABELS[st] ?? st}</option>)}</select>
							</div>
							<div>
								<label className={LABEL}>Wait after the order</label>
								<select className={FIELD} value={o.delay_minutes} onChange={(ev) => set("order_ivr", "delay_minutes", Number(ev.target.value))}>{[0, 2, 5, 10, 15, 30, 60].map((m) => <option key={m} value={m}>{m ? `${m} minutes` : "Right away"}</option>)}</select>
							</div>
							{keyPicks && (
								<div>
									<label className={LABEL}>Key to cancel</label>
									<select className={FIELD} value={o.cancel_key} onChange={(ev) => set("order_ivr", "cancel_key", ev.target.value)}>{"1234567890".split("").map((k) => <option key={k} value={k}>{k}</option>)}</select>
								</div>
							)}
							<div>
								<label className={LABEL}>Cancelled orders become</label>
								<select className={FIELD} value={o.on_cancel} onChange={(ev) => set("order_ivr", "on_cancel", ev.target.value)}>{(v.order_statuses?.cancel ?? []).map((st) => <option key={st} value={st}>{ORDER_STATUS_LABELS[st] ?? st}</option>)}</select>
							</div>
							<div>
								<label className={LABEL}>Tries, if nobody answers</label>
								<div className="flex gap-2">
									<select className={FIELD} value={o.attempts} onChange={(ev) => set("order_ivr", "attempts", Number(ev.target.value))}>{[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} {n === 1 ? "try" : "tries"}</option>)}</select>
									<select className={FIELD} value={o.retry_minutes} onChange={(ev) => set("order_ivr", "retry_minutes", Number(ev.target.value))}>{[10, 15, 30, 60, 120, 240].map((m) => <option key={m} value={m}>{m < 60 ? `${m} min apart` : `${m / 60} h apart`}</option>)}</select>
								</div>
							</div>
						</div>
						<Toggle checked={!!o.cod_only} onChange={(on) => set("order_ivr", "cod_only", on)} label="Only cash on delivery orders" hint="Prepaid orders are not called." />
					</div>

					<div className="mt-4">
						<div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-800">Latest confirmation calls <button type="button" className="!border-0 !bg-transparent !p-0 text-xs font-normal text-gray-500 !shadow-none hover:text-gray-900 cursor-pointer" onClick={loadCalls}>Refresh</button></div>
						{calls === null && <p className="text-xs text-gray-500">Loading…</p>}
						{calls?.length === 0 && <p className="text-xs text-gray-500">None yet.</p>}
						{calls?.length > 0 && (
							<table className="w-full text-xs">
								<thead><tr className="text-left text-gray-500"><th className="pb-1 font-medium">Order</th><th className="pb-1 font-medium">Call</th><th className="pb-1 font-medium">Result</th><th className="pb-1 font-medium">Order now</th><th className="pb-1 font-medium">When</th></tr></thead>
								<tbody className="divide-y divide-gray-100">
									{calls.map((c) => (
										<tr key={c.id}>
											<td className="py-1.5"><a className="text-blue-700 hover:underline" href={`/dashboard/orders/${c.ref_id}`}>#{c.ref_id}</a> <span className="text-gray-500">{c.name}</span></td>
											<td className="py-1.5 text-gray-600">{c.attempt > 1 ? `Try ${c.attempt}` : "First"}</td>
											<td className="py-1.5 text-gray-700">{CALL_STATE_LABELS[c.status] ?? c.status}{c.dtmf ? `, pressed ${c.dtmf}` : ""}{c.error ? <span className="text-rose-600" title={c.error}> · {c.error.length > 40 ? c.error.slice(0, 40) + "…" : c.error}</span> : ""}</td>
											<td className="py-1.5 text-gray-600">{c.order_status ?? "—"}</td>
											<td className="py-1.5 tabular-nums text-gray-500">{(c.ended_at || c.send_after || c.created_at || "").slice(5, 16)}</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

/*
	The Messages inbox (ComboStoreInbox): Facebook Messenger's Page connection and
	webhook, and whether WhatsApp conversations show in Messages (WhatsApp itself
	is connected in its own section above). Its own option and save button; the
	Page token and app secret come back blank with has_* flags.
*/
const MessengerSettings = ({ token, addNotification }) => {
	var [m, setm] = useState(null);
	var [wa, setwa] = useState(null);
	var [dirty, setdirty] = useState(false);
	var [saving, setsaving] = useState(false);
	var [testing, settesting] = useState(false);
	useScrollToHash("messenger", !!m);

	function load() {
		return postApi("get_inbox_settings", token, {})
			.then((r) => { setm(r.messenger); setwa(r.whatsapp); setdirty(false); })
			.catch((e) => addNotification({ type: "error", title: "Messages settings not loaded", content: e.message }));
	}
	useEffect(() => { if (token) load(); }, [token]);

	function set(key, value) { setm((p) => ({ ...p, [key]: value })); setdirty(true); }
	function copy(text) { navigator.clipboard?.writeText(text).then(() => addNotification({ type: "success", title: "Copied", content: "" })); }

	async function save(quiet = false) {
		setsaving(true);
		try {
			await postApi("update_inbox_settings", token, { whatsapp: { enabled: !!wa?.enabled }, messenger: { enabled: !!m.enabled, page_id: m.page_id, page_token: m.page_token, app_secret: m.app_secret, human_agent_tag: !!m.human_agent_tag } });
			await load();
			if (!quiet) addNotification({ type: "success", title: "Messages settings saved", content: "" });
			return true;
		} catch (e) {
			addNotification({ type: "error", title: "Messages settings not saved", content: e.message });
			return false;
		} finally {
			setsaving(false);
		}
	}

	async function test() {
		if (dirty && !(await save(true))) return;
		settesting(true);
		postApi("inbox_test", token, {})
			.then((r) => addNotification({ type: "success", title: "Messenger connected", content: r?.message ?? "" }))
			.catch((e) => addNotification({ type: "error", title: "Messenger not connected", content: e.message }))
			.finally(() => settesting(false));
	}

	if (!m) return <section id="messenger" className={`${CARD} scroll-mt-20`}><div className="text-sm text-gray-500">Loading Messages settings…</div></section>;

	return (
		<section id="messenger" className={`${CARD} scroll-mt-20`}>
			<div className="mb-1 flex flex-wrap items-center justify-between gap-2">
				<h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900"><IconMessage2 size={16} className="text-blue-600" /> Messages inbox {m.ready ? <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Messenger connected</span> : null}</h2>
				<button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={() => save()}><IconDeviceFloppy size={16} /> {saving ? "Saving…" : "Save inbox settings"}</button>
			</div>
			<p className="mb-4 text-xs text-gray-500">Customers' WhatsApp and Facebook Messenger messages appear in <Link href="/dashboard/messages" className="text-[#634FE5] hover:underline">Messages</Link>, where admins and support agents answer them. Saved with its own button.</p>

			<div className="flex flex-col gap-4">
				<div className="rounded-lg border border-gray-200 p-3">
					<Toggle checked={!!wa?.enabled} onChange={(on) => { setwa((p) => ({ ...p, enabled: on })); setdirty(true); }} label="Show WhatsApp conversations in Messages"
						hint={wa?.connected ? "Uses the WhatsApp connection above and its webhook (subscribe it to messages)." : "Connect WhatsApp in the section above first."} />
				</div>

				<div className="rounded-lg border border-gray-200 p-3">
					<Toggle checked={!!m.enabled} onChange={(on) => set("enabled", on)} label="Facebook Messenger" hint="Messages to your Facebook Page." />
					<div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
						<div>
							<label className={LABEL}>Page ID</label>
							<input className={FIELD} value={m.page_id ?? ""} placeholder="1234567890" onChange={(ev) => set("page_id", ev.target.value)} />
							<p className={HINT}>Page › About › Page transparency, or in Meta Business Settings.</p>
						</div>
						<div className="md:col-span-2">
							<label className={LABEL}>Page access token</label>
							<input type="password" className={FIELD} autoComplete="new-password" value={m.page_token ?? ""} placeholder={m.has_page_token ? "•••••••• saved; type to replace" : "A Page token (EAA…)"} onChange={(ev) => set("page_token", ev.target.value)} />
							<p className={HINT}>From your Meta app (Messenger › Settings, or a System User token for the Page) with <code>pages_messaging</code> and <code>pages_manage_metadata</code>.</p>
						</div>
						<div className="md:col-span-3">
							<label className={LABEL}>App secret <span className="font-normal text-gray-400">(optional)</span></label>
							<input type="password" className={FIELD} autoComplete="new-password" value={m.app_secret ?? ""} placeholder={m.has_app_secret ? "•••••••• saved; type to replace" : wa?.has_app_secret ? "Blank: uses the WhatsApp app secret (same Meta app)" : "App settings › Basic › App secret"} onChange={(ev) => set("app_secret", ev.target.value)} />
							<p className={HINT}>Proves webhook calls come from Meta; without one they are refused. Leave blank when Messenger and WhatsApp use the same Meta app.</p>
						</div>
						<div className="md:col-span-3 rounded-lg bg-gray-50 p-3">
							<div className="mb-2 text-xs font-semibold text-gray-800">Webhook (in your Meta app: Messenger › Webhooks)</div>
							<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
								<div>
									<label className={LABEL}>Callback URL</label>
									<div className="flex gap-2">
										<input className={`${FIELD} font-mono !text-xs`} readOnly value={m.webhook_url ?? ""} />
										<button type="button" className={TOOLBAR_BUTTON} onClick={() => copy(m.webhook_url ?? "")} aria-label="Copy callback URL"><IconCopy size={14} /></button>
									</div>
								</div>
								<div>
									<label className={LABEL}>Verify token</label>
									<div className="flex gap-2">
										<input className={`${FIELD} font-mono !text-xs`} readOnly value={m.verify_token ?? ""} />
										<button type="button" className={TOOLBAR_BUTTON} onClick={() => copy(m.verify_token ?? "")} aria-label="Copy verify token"><IconCopy size={14} /></button>
									</div>
								</div>
							</div>
							<p className={HINT}>Paste both, subscribe to <strong>messages</strong>, <strong>message_echoes</strong>, <strong>message_deliveries</strong> and <strong>message_reads</strong>. “Test connection” also subscribes your Page. The webhook needs your live site's https address.</p>
						</div>
						<div className="md:col-span-3">
							<Toggle checked={!!m.human_agent_tag} onChange={(on) => set("human_agent_tag", on)} label="Allow replies up to 7 days (human agent tag)"
								hint="Messenger allows replies for 24 hours after the customer's last message. With Meta's Human Agent permission approved for your app, this extends it to 7 days." />
						</div>
						<div>
							<button type="button" className={TOOLBAR_BUTTON} disabled={testing || !m.page_id || (!m.has_page_token && !m.page_token)} onClick={test}><IconFlask size={16} /> {testing ? "Checking…" : "Test connection"}</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

/*
	Facebook Ads (ComboStoreFacebookAds): the ad account whose campaigns show on
	the Campaigns page with an on/off switch. Its own option and save button; the
	access token comes back blank with has_access_token.
*/
const FB_PRESET_LABELS = { today: "Today", yesterday: "Yesterday", last_7d: "Last 7 days", last_14d: "Last 14 days", last_30d: "Last 30 days", last_90d: "Last 90 days", this_month: "This month", last_month: "Last month", maximum: "All time" };

const FacebookAdsSettings = ({ token, addNotification }) => {
	var [f, setf] = useState(null);
	var [dirty, setdirty] = useState(false);
	var [saving, setsaving] = useState(false);
	var [testing, settesting] = useState(false);
	useScrollToHash("facebook-ads", !!f);

	function load() {
		return postApi("get_fb_ads_settings", token, {}).then((r) => { setf(r); setdirty(false); })
			.catch((e) => addNotification({ type: "error", title: "Facebook Ads settings not loaded", content: e.message }));
	}
	useEffect(() => { if (token) load(); }, [token]);

	function set(key, value) { setf((p) => ({ ...p, [key]: value })); setdirty(true); }

	async function save(quiet = false) {
		setsaving(true);
		try {
			await postApi("update_fb_ads_settings", token, { access_token: f.access_token, ad_account_id: f.ad_account_id, api_version: f.api_version, date_preset: f.date_preset });
			await load();
			if (!quiet) addNotification({ type: "success", title: "Facebook Ads settings saved", content: "" });
			return true;
		} catch (e) {
			addNotification({ type: "error", title: "Facebook Ads settings not saved", content: e.message });
			return false;
		} finally {
			setsaving(false);
		}
	}

	async function test() {
		if (dirty && !(await save(true))) return;
		settesting(true);
		postApi("fb_ads_test", token, {})
			.then((r) => addNotification({ type: "success", title: "Facebook Ads connected", content: r?.message ?? "" }))
			.catch((e) => addNotification({ type: "error", title: "Facebook Ads not connected", content: e.message }))
			.finally(() => settesting(false));
	}

	if (!f) return <section id="facebook-ads" className={`${CARD} scroll-mt-20`}><div className="text-sm text-gray-500">Loading Facebook Ads settings…</div></section>;

	return (
		<section id="facebook-ads" className={`${CARD} scroll-mt-20`}>
			<div className="mb-1 flex flex-wrap items-center justify-between gap-2">
				<h2 className="flex items-center gap-2 text-sm font-semibold text-gray-900"><IconBrandMeta size={16} className="text-blue-600" /> Facebook Ads {f.ready ? <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Connected</span> : <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-500 ring-1 ring-inset ring-gray-200">Not set up</span>}</h2>
				<button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={() => save()}><IconDeviceFloppy size={16} /> {saving ? "Saving…" : "Save Facebook Ads settings"}</button>
			</div>
			<p className="mb-4 text-xs text-gray-500">Shows the ad account's Facebook and Instagram campaigns on the Campaigns page, with spend and results, and lets admins turn each one on or off. Budgets and ads are still edited in Ads Manager.</p>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div>
					<label className={LABEL}>Ad account ID</label>
					<input className={FIELD} value={f.ad_account_id ?? ""} placeholder="act_123456789" onChange={(ev) => set("ad_account_id", ev.target.value)} />
					<p className={HINT}>In Ads Manager, the number next to the account name.</p>
				</div>
				<div className="md:col-span-2">
					<label className={LABEL}>Access token</label>
					<input type="password" className={FIELD} autoComplete="new-password" value={f.access_token ?? ""} placeholder={f.has_access_token ? "•••••••• saved; type to replace" : "A System User token (EAA…)"} onChange={(ev) => set("access_token", ev.target.value)} />
					<p className={HINT}>Business Settings › Users › System users: add the ad account to the system user with <strong>Manage campaigns</strong>, then generate a token with <code>ads_read</code> and <code>ads_management</code> (needed to turn campaigns on and off). A 60-day token has to be renewed; a non-expiring one does not.</p>
				</div>
				<div>
					<label className={LABEL}>Graph API version</label>
					<input className={FIELD} value={f.api_version ?? "v25.0"} onChange={(ev) => set("api_version", ev.target.value)} />
					<p className={HINT}>Meta retires each version about two years after release; v25.0 works until at least February 2027.</p>
				</div>
				<div>
					<label className={LABEL}>Results for</label>
					<select className={FIELD} value={f.date_preset} onChange={(ev) => set("date_preset", ev.target.value)}>
						{(f.presets ?? Object.keys(FB_PRESET_LABELS)).map((p) => <option key={p} value={p}>{FB_PRESET_LABELS[p] ?? p}</option>)}
					</select>
					<p className={HINT}>The period the Campaigns page opens with.</p>
				</div>
				<div className="flex items-end">
					<button type="button" className={TOOLBAR_BUTTON} disabled={testing || (!f.has_access_token && !f.access_token) || !f.ad_account_id} onClick={test}><IconFlask size={16} /> {testing ? "Checking…" : "Test connection"}</button>
				</div>
			</div>
		</section>
	);
};

export default MarketingSettings;
