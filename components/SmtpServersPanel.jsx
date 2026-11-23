"use client";

import React, { useEffect, useState } from "react";
import { IconCheck, IconMailForward, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react";
import { useCounterStore } from "../store/useCounterStore";
import { postApi, FIELD, LABEL, HINT, PRIMARY_BUTTON, TOOLBAR_BUTTON, DANGER_BUTTON, Toggle } from "./pages/marketingUi";

/**
 * Settings > API Keys > SMTP: the store's SMTP servers, one of them selected.
 *
 * While "Send store emails through SMTP" is on, every email WordPress sends
 * (order emails, notifications, affiliate mails, Marketing in "WordPress"
 * mode) goes out through the selected server (ComboStoreSmtp.php).
 *
 * Saved on its own (update_smtp_settings), not with the rest of the settings
 * page: the servers hold passwords, so they live in their own option and the
 * passwords never come back to the browser - a blank password field keeps the
 * saved one.
 */

const PRESETS = {
	"": { label: "Custom server" },
	gmail: { label: "Gmail / Google Workspace", host: "smtp.gmail.com", port: 587, encryption: "tls", note: "Use an app password (Google account › Security › App passwords), not your account password." },
	outlook: { label: "Outlook / Microsoft 365", host: "smtp.office365.com", port: 587, encryption: "tls" },
	sendgrid: { label: "SendGrid", host: "smtp.sendgrid.net", port: 587, encryption: "tls", note: "The username is literally \"apikey\"; the password is your API key." },
	mailgun: { label: "Mailgun", host: "smtp.mailgun.org", port: 587, encryption: "tls" },
	ses: { label: "Amazon SES", host: "email-smtp.us-east-1.amazonaws.com", port: 587, encryption: "tls", note: "Change the region in the host to match your SES region." },
	brevo: { label: "Brevo (Sendinblue)", host: "smtp-relay.brevo.com", port: 587, encryption: "tls" },
	zoho: { label: "Zoho Mail", host: "smtp.zoho.com", port: 465, encryption: "ssl" },
	hostinger: { label: "Hostinger", host: "smtp.hostinger.com", port: 465, encryption: "ssl" },
};

const EMPTY_SERVER = { label: "", host: "", port: 587, encryption: "tls", auth: true, username: "", password: "", from_email: "", from_name: "" };

function newId() {
	return "smtp_" + Math.random().toString(36).slice(2, 12);
}

function presetFor(host) {
	return Object.entries(PRESETS).find(([key, p]) => key && p.host === host)?.[0] ?? "";
}

export default function SmtpServersPanel() {
	const { token, addNotification, userDataX } = useCounterStore();

	const [loaded, setloaded] = useState(false);
	const [enabled, setenabled] = useState(false);
	const [active, setactive] = useState("");
	const [servers, setservers] = useState([]);
	const [editing, setediting] = useState(null);
	const [dirty, setdirty] = useState(false);
	const [saving, setsaving] = useState(false);
	const [testTo, settestTo] = useState("");
	const [testing, settesting] = useState("");

	const notify = (type, content) => addNotification({ type, title: "SMTP", content });

	const apply = (data) => {
		setenabled(!!data?.enabled);
		setactive(data?.active ?? "");
		setservers(Array.isArray(data?.servers) ? data.servers : []);
		setdirty(false);
	};

	useEffect(() => {
		if (!token) return;
		postApi("get_smtp_settings", token, {})
			.then(apply)
			.catch((e) => notify("error", e.message))
			.finally(() => setloaded(true));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	useEffect(() => {
		if (!testTo && userDataX?.email) settestTo(userDataX.email);
	}, [userDataX, testTo]);

	const change = (fn) => {
		fn();
		setdirty(true);
	};

	const updateServer = (id, patch) => change(() => setservers((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s))));

	const addServer = () => {
		const id = newId();
		change(() => {
			setservers((prev) => [...prev, { ...EMPTY_SERVER, id, isNew: true }]);
			if (!active) setactive(id);
		});
		setediting(id);
	};

	const removeServer = (id) => {
		change(() => {
			const rest = servers.filter((s) => s.id !== id);
			setservers(rest);
			if (active === id) setactive(rest[0]?.id ?? "");
			if (!rest.length) setenabled(false);
		});
		if (editing === id) setediting(null);
	};

	const save = async () => {
		setsaving(true);
		try {
			const body = {
				enabled,
				active,
				servers: servers.map(({ isNew, has_password, ...s }) => s),
			};
			const data = await postApi("update_smtp_settings", token, body);
			apply(data);
			setediting(null);
			notify("success", data?.message || "SMTP settings saved.");
		} catch (e) {
			notify("error", e.message);
		} finally {
			setsaving(false);
		}
	};

	const test = async (server) => {
		settesting(server.id);
		try {
			const { isNew, has_password, ...fields } = server;
			const data = await postApi("smtp_test", token, { to: testTo, server: fields });
			notify("success", data?.message || "Test email sent.");
		} catch (e) {
			notify("error", e.message);
		} finally {
			settesting("");
		}
	};

	if (!loaded) {
		return <div className="text-sm text-gray-500">Loading SMTP settings…</div>;
	}

	const activeServer = servers.find((s) => s.id === active);

	return (
		<div className="flex flex-col gap-4">
			<div className="rounded-lg border border-gray-200 bg-white p-4">
				<Toggle
					checked={enabled}
					onChange={(v) => change(() => setenabled(v))}
					label="Send store emails through SMTP"
					hint="Order emails, notifications and all other mail the store sends go out through the selected server. Off: the site's default mail setup is used."
				/>
				{enabled && !activeServer && (
					<p className="mt-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">Add a server and select it - until then the site's default mail setup is used.</p>
				)}
				{enabled && activeServer && (
					<p className={HINT}>Sending through <strong>{activeServer.label || activeServer.host}</strong>.</p>
				)}
			</div>

			<div className="flex flex-col gap-3">
				{servers.length === 0 && (
					<div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-500">No SMTP servers yet. Add one to start - you can keep several and switch between them.</div>
				)}

				{servers.map((server) => {
					const isActive = server.id === active;
					const isEditing = editing === server.id;
					const preset = presetFor(server.host);

					return (
						<div key={server.id} className={`rounded-lg border bg-white ${isActive ? "border-[#634FE5] ring-1 ring-[#634FE5]/30" : "border-gray-200"}`}>
							<div className="flex flex-wrap items-center gap-3 p-4">
								<label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
									<input type="radio" name="smtp-active" className="h-4 w-4 accent-[#634FE5]" checked={isActive} onChange={() => change(() => setactive(server.id))} />
									<span className="min-w-0">
										<span className="flex items-center gap-2 text-sm font-medium text-gray-800">
											<span className="truncate">{server.label || server.host || "New server"}</span>
											{isActive && <span className="rounded-sm bg-[#634FE5] px-1.5 py-0.5 text-[10px] font-semibold uppercase text-white">Selected</span>}
										</span>
										<span className="block truncate text-xs text-gray-500">
											{server.host ? `${server.host}:${server.port} · ${String(server.encryption).toUpperCase()}` : "Not set up yet"}
											{server.from_email ? ` · from ${server.from_email}` : ""}
										</span>
									</span>
								</label>

								<div className="flex items-center gap-2">
									<button type="button" className={TOOLBAR_BUTTON} disabled={!server.host || !testTo || testing === server.id} onClick={() => test(server)} title="Send a test email through this server">
										<IconMailForward size={16} /> {testing === server.id ? "Sending…" : "Test"}
									</button>
									<button type="button" className={TOOLBAR_BUTTON} onClick={() => setediting(isEditing ? null : server.id)}>
										{isEditing ? <IconCheck size={16} /> : <IconPencil size={16} />} {isEditing ? "Done" : "Edit"}
									</button>
									<button type="button" className={DANGER_BUTTON} onClick={() => removeServer(server.id)} title="Remove this server">
										<IconTrash size={16} />
									</button>
								</div>
							</div>

							{isEditing && (
								<div className="grid grid-cols-1 gap-4 border-t border-gray-100 p-4 md:grid-cols-2">
									<div>
										<label className={LABEL}>Name</label>
										<input className={FIELD} value={server.label} placeholder="e.g. Main mail, Backup" onChange={(ev) => updateServer(server.id, { label: ev.target.value })} />
									</div>
									<div>
										<label className={LABEL}>Provider</label>
										<select
											className={FIELD}
											value={preset}
											onChange={(ev) => {
												const p = PRESETS[ev.target.value];
												if (p?.host) updateServer(server.id, { host: p.host, port: p.port, encryption: p.encryption, auth: true, label: server.label || p.label });
											}}
										>
											{Object.entries(PRESETS).map(([key, p]) => <option key={key} value={key}>{p.label}</option>)}
										</select>
										{PRESETS[preset]?.note && <p className={HINT}>{PRESETS[preset].note}</p>}
									</div>
									<div>
										<label className={LABEL}>SMTP host</label>
										<input className={FIELD} value={server.host} placeholder="smtp.example.com" onChange={(ev) => updateServer(server.id, { host: ev.target.value.trim() })} />
									</div>
									<div className="grid grid-cols-2 gap-3">
										<div>
											<label className={LABEL}>Encryption</label>
											<select
												className={FIELD}
												value={server.encryption}
												onChange={(ev) => {
													const enc = ev.target.value;
													updateServer(server.id, { encryption: enc, port: enc === "ssl" ? 465 : enc === "tls" ? 587 : server.port });
												}}
											>
												<option value="tls">TLS (587)</option>
												<option value="ssl">SSL (465)</option>
												<option value="none">None</option>
											</select>
										</div>
										<div>
											<label className={LABEL}>Port</label>
											<input type="number" className={FIELD} value={server.port} onChange={(ev) => updateServer(server.id, { port: ev.target.value })} />
										</div>
									</div>
									<div className="md:col-span-2">
										<Toggle checked={server.auth} onChange={(v) => updateServer(server.id, { auth: v })} label="Server requires a username and password" />
									</div>
									{server.auth && (
										<>
											<div>
												<label className={LABEL}>Username</label>
												<input className={FIELD} autoComplete="off" data-1p-ignore="true" data-lpignore="true" value={server.username} onChange={(ev) => updateServer(server.id, { username: ev.target.value })} />
											</div>
											<div>
												<label className={LABEL}>Password</label>
												<input
													type="password"
													className={FIELD}
													autoComplete="new-password"
													data-1p-ignore="true"
													data-lpignore="true"
													value={server.password}
													placeholder={server.has_password ? "•••••••• saved - type to replace" : ""}
													onChange={(ev) => updateServer(server.id, { password: ev.target.value })}
												/>
											</div>
										</>
									)}
									<div>
										<label className={LABEL}>From email</label>
										<input className={FIELD} value={server.from_email} placeholder="orders@yourstore.com" onChange={(ev) => updateServer(server.id, { from_email: ev.target.value.trim() })} />
										<p className={HINT}>Optional. Used as the sender of every email sent through this server - most providers only allow addresses the account owns.</p>
									</div>
									<div>
										<label className={LABEL}>From name</label>
										<input className={FIELD} value={server.from_name} placeholder="Your Store" onChange={(ev) => updateServer(server.id, { from_name: ev.target.value })} />
										<p className={HINT}>Optional. Blank keeps the name each email sets.</p>
									</div>
								</div>
							)}
						</div>
					);
				})}

				<div>
					<button type="button" className={TOOLBAR_BUTTON} onClick={addServer} disabled={servers.length >= 20}>
						<IconPlus size={16} /> Add SMTP server
					</button>
				</div>
			</div>

			<div className="flex flex-wrap items-end gap-3 rounded-lg border border-gray-200 bg-white p-4">
				<div className="min-w-[220px] flex-1">
					<label className={LABEL}>Send test emails to</label>
					<input className={FIELD} value={testTo} placeholder="you@example.com" onChange={(ev) => settestTo(ev.target.value.trim())} />
					<p className={HINT}>"Test" sends through that server as it is in the form, saved or not.</p>
				</div>
				<button type="button" className={PRIMARY_BUTTON} disabled={saving || !dirty} onClick={save}>
					{saving ? "Saving…" : "Save SMTP settings"}
				</button>
			</div>
			{dirty && <p className="text-xs text-amber-700">Unsaved SMTP changes. They are saved with the button above, not with the main Save button.</p>}
		</div>
	);
}
