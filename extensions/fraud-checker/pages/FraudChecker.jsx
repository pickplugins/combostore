"use client";

import React from "react";
import {
	IconShieldHalf, IconDeviceFloppy, IconAlertTriangle,
	IconCloudCheck, IconDeviceDesktop, IconSquareRounded,
	IconSquareRoundedCheck, IconInfoCircle, IconX,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import countries from "../../../lib/Countries";
import Spinner from "../../../components/Spinner";
import ToggleContent from "../../../components/ToggleContent";

import { useFraudCheckerStore } from "../lib/store";
import { PROVIDERS, providerConfig, enabledCount } from "../lib/providers";

/*
	The extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which already sits inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there and
	this draws only the page body, exactly like a core screen.

	Every check is drawn from the table in lib/providers.js. In core this was
	one hand-written `providerKey == '...'` branch per check, which is how two
	of them ended up with another check's help text and how the service select
	ended up writing to the score field.
*/

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:!opacity-50";

const GHOST_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand disabled:!opacity-50";

const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-sm !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const HEADER_CLASSES =
	"flex w-full cursor-pointer select-none items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm transition-colors hover:bg-gray-100";

const CONTENT_CLASSES = "mt-1.5 rounded-lg border border-gray-200 bg-white p-4";

/* Two-letter code -> name, from the dashboard's country list. */
const COUNTRY_OPTIONS = countries
	.map((c) => ({ code: String(c.code2 || "").toUpperCase(), name: c.name }))
	.filter((c) => /^[A-Z]{2}$/.test(c.code))
	.sort((a, b) => a.name.localeCompare(b.name));
const COUNTRY_NAME = Object.fromEntries(COUNTRY_OPTIONS.map((c) => [c.code, c.name]));

/** A list of countries as removable chips, plus a picker to add one. */
function CountryList({ id, value, onChange }) {
	const selected = Array.isArray(value) ? value : [];

	return (
		<div className="flex w-full flex-col gap-2">
			{selected.length > 0 && (
				<div className="flex flex-wrap gap-1.5">
					{selected.map((code) => (
						<span key={code} className="inline-flex items-center gap-1 rounded-full bg-brand/10 py-0.5 pl-2.5 pr-1 text-xs text-gray-800">
							{COUNTRY_NAME[code] ?? code} <span className="text-gray-400">{code}</span>
							<button
								type="button"
								aria-label={`Remove ${COUNTRY_NAME[code] ?? code}`}
								className="inline-flex !h-5 !w-5 items-center justify-center !rounded-full !border-0 !bg-transparent !p-0 !shadow-none text-gray-500 hover:!bg-white hover:text-red-600"
								onClick={() => onChange(selected.filter((c) => c !== code))}
							>
								<IconX size={12} />
							</button>
						</span>
					))}
				</div>
			)}

			<select
				id={id}
				className={`${FIELD} w-full lg:w-72`}
				value=""
				onChange={(ev) => { if (ev.target.value) onChange([...selected, ev.target.value]); }}
			>
				<option value="">{selected.length ? "Add another country…" : "Add a country…"}</option>
				{COUNTRY_OPTIONS.filter((c) => !selected.includes(c.code)).map((c) => (
					<option key={c.code} value={c.code}>{c.name}</option>
				))}
			</select>
		</div>
	);
}

/*
	The country filter's IP lookup (ComboStoreGeoIp on the server): an IPinfo
	Lite token, saved through its own routes - never into fraudCheck, because
	the store settings blob is public (get_settings_public).
*/
async function geoipPost(route, token, body) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}wp-json/combo-store/v2/${route}`, {
		method: "POST",
		headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
		body: JSON.stringify(body ?? {}),
	});
	let data = null;
	try { data = await response.json(); } catch { /* not JSON */ }
	if (!response.ok || data?.status === "failed") throw new Error(data?.message ?? `Server answered ${response.status}.`);
	return data;
}

function GeoIpSettings({ token, addNotification }) {
	const [settings, setSettings] = React.useState(null);
	const [value, setValue] = React.useState("");
	const [busy, setBusy] = React.useState("");

	React.useEffect(() => {
		if (!token) return;
		geoipPost("get_geoip_settings", token).then(setSettings).catch((e) => setSettings({ error: e.message }));
	}, [token]);

	const run = async (what, fn) => {
		setBusy(what);
		try { await fn(); } catch (e) { addNotification({ type: "error", title: what === "test" ? "Lookup failed" : "Not saved", content: e.message }); }
		setBusy("");
	};

	const saveToken = (clear) => run("save", async () => {
		const result = await geoipPost("update_geoip_settings", token, clear ? { clear_token: true } : { ipinfo_token: value });
		setSettings(result);
		setValue("");
		addNotification({ type: "success", title: clear ? "Token removed" : "Token saved", content: "" });
	});

	const test = () => run("test", async () => {
		const result = await geoipPost("geoip_test", token, {});
		addNotification({ type: "success", title: "Lookup works", content: result.message });
	});

	if (!settings) return <p className="py-3 text-xs text-gray-500">Loading IP lookup…</p>;
	if (settings.error) return <p className="py-3 text-xs text-red-700">{settings.error}</p>;

	return (
		<div className="mt-2 rounded-lg bg-gray-50 p-3">
			<div className="mb-1 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-800">
				Country lookup: IPinfo Lite
				{settings.has_token
					? <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">Token saved</span>
					: <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 ring-1 ring-inset ring-amber-200">No token: every country is unknown</span>}
			</div>
			<p className="mb-2 text-xs text-gray-500">
				Free at <a href="https://ipinfo.io/signup" target="_blank" rel="noreferrer" className="text-brand underline">ipinfo.io</a> (Lite plan, unlimited country lookups); copy the token from your IPinfo dashboard.
				If your site is behind Cloudflare with IP geolocation on, its country header is used first and no lookup is made.
			</p>
			<div className="flex flex-wrap items-center gap-2">
				<input
					type="password"
					autoComplete="new-password"
					className={`${FIELD} w-full lg:w-72`}
					placeholder={settings.has_token ? "•••••••• saved; type to replace" : "IPinfo token"}
					value={value}
					onChange={(ev) => setValue(ev.target.value)}
				/>
				<button type="button" className={GHOST_BUTTON} disabled={!!busy || !value.trim()} onClick={() => saveToken(false)}>
					{busy === "save" ? "Saving…" : "Save token"}
				</button>
				<button type="button" className={GHOST_BUTTON} disabled={!!busy || !settings.has_token} onClick={test}>
					{busy === "test" ? "Checking…" : "Test lookup"}
				</button>
				{settings.has_token && (
					<button type="button" className={`${GHOST_BUTTON} !text-red-700`} disabled={!!busy} onClick={() => saveToken(true)}>
						Remove
					</button>
				)}
			</div>
		</div>
	);
}

/** One row: label and help on the left, the control on the right. */
function Field({ provider, field, value, onChange }) {
	const id = `fraud-${provider.id}-${field.key}`;

	return (
		<div className="flex flex-wrap gap-3 border-b border-gray-100 py-3 last:border-b-0">
			<label htmlFor={id} className="flex min-w-0 flex-col gap-0.5 py-1 lg:w-72">
				<span className="text-sm text-gray-800">{field.label}</span>
				<span className="text-xs text-gray-500">{field.help}</span>
			</label>

			<div className="flex min-w-0 flex-1 items-center">
				{field.type === "toggle" && (
					<label htmlFor={id} className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
						<input
							id={id}
							type="checkbox"
							checked={Boolean(value)}
							onChange={(ev) => onChange(ev.target.checked)}
						/>
						{value ? "Enabled" : "Disabled"}
					</label>
				)}

				{field.type === "number" && (
					<input
						id={id}
						type="number"
						className={`${FIELD} w-32`}
						min={field.min}
						max={field.max}
						placeholder={field.placeholder}
						value={value ?? ""}
						onChange={(ev) => onChange(ev.target.value)}
					/>
				)}

				{field.type === "select" && (
					<select
						id={id}
						className={`${FIELD} w-full lg:w-72`}
						value={value ?? ""}
						onChange={(ev) => onChange(ev.target.value)}
					>
						{field.options?.map((option) => (
							<option key={option.value} value={option.value}>{option.label}</option>
						))}
					</select>
				)}

				{field.type === "countries" && (
					<CountryList id={id} value={value} onChange={onChange} />
				)}
			</div>
		</div>
	);
}

/** The collapsed row: name, "Coming Soon", and the switch. */
function ProviderTitle({ provider, enabled, onToggle }) {
	return (
		<div className="flex w-full items-center justify-between gap-3">
			<div className="flex min-w-0 items-center gap-2">
				<span className="truncate text-gray-800">{provider.label}</span>
				{provider.comingSoon && (
					<span className="shrink-0 rounded-sm bg-yellow-400 px-2 py-0.5 text-xs text-gray-700">
						Coming Soon
					</span>
				)}
			</div>

			{/*
				The switch sits inside the accordion header, so its click must
				not also open the panel - the same stopPropagation core needed.
			*/}
			<span
				role="checkbox"
				aria-checked={enabled}
				aria-label={`${enabled ? "Disable" : "Enable"} ${provider.label}`}
				tabIndex={0}
				className="shrink-0 text-gray-600 hover:text-brand"
				onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); onToggle(); }}
				onKeyDown={(ev) => {
					if (ev.key === "Enter" || ev.key === " ") {
						ev.preventDefault(); ev.stopPropagation(); onToggle();
					}
				}}
			>
				{enabled ? <IconSquareRoundedCheck size={20} /> : <IconSquareRounded size={20} />}
			</span>
		</div>
	);
}

const FraudChecker = () => {

	const { token, settings, addNotification } = useCounterStore();

	const config = useFraudCheckerStore((s) => s.config);
	const hydrated = useFraudCheckerStore((s) => s.hydrated);
	const saving = useFraudCheckerStore((s) => s.saving);
	const dirty = useFraudCheckerStore((s) => s.dirty);
	const source = useFraudCheckerStore((s) => s.source);
	const storeError = useFraudCheckerStore((s) => s.error);

	const { hydrateFromSettings, hydrateLocal, setField, toggleProvider, disableAll, save } =
		useFraudCheckerStore();

	/*
		Settings arrive asynchronously, and on a hard load of this URL they may
		never arrive at all - fetchSettings runs from the shell. The local
		mirror is adopted after a beat so the merchant is not left staring at an
		empty screen, and is replaced the moment real settings land.
	*/
	React.useEffect(() => {
		if (settings) { hydrateFromSettings(settings); return; }

		const timer = setTimeout(() => hydrateLocal(), 1200);

		return () => clearTimeout(timer);
	}, [settings, hydrateFromSettings, hydrateLocal]);

	const onSave = async () => {
		const result = await save(token);

		addNotification({
			type: result.ok ? "success" : "error",
			title: result.ok ? "Saved" : "Save failed",
			content: result.message,
		});
	};

	const active = enabledCount(config);

	return (
		<div className="flex flex-col gap-5 p-10">

			{/* Header */}
			<div className="flex flex-wrap items-start justify-between gap-3">
				<div className="flex min-w-0 flex-col gap-1">
					<h1 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
						<IconShieldHalf size={20} className="text-brand" />
						Fraud Checker
					</h1>
					<p className="text-sm text-gray-500">
						Which checks an order should be screened against before it is accepted.
					</p>
				</div>

				<div className="flex items-center gap-2">
					<button
						type="button"
						className={GHOST_BUTTON}
						disabled={saving || active === 0}
						onClick={disableAll}
					>
						Turn all off
					</button>

					<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={onSave}>
						{saving ? <Spinner size={16} fill="#ffffff" /> : <IconDeviceFloppy size={16} />}
						{saving ? "Saving..." : "Save"}
					</button>
				</div>
			</div>

			{/*
				Only the checks without a Coming Soon badge are enforced (by the
				server's create_order). Saying so is the honest thing: a merchant
				who switches the others on and believes orders are being screened
				is worse off than one who knows they are not.
			*/}
			<div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs text-amber-900">
				<IconInfoCircle size={16} className="mt-px shrink-0" />
				<p className="leading-relaxed">
					Login Required, Limit Phone Number and Country filter are enforced by the server
					when an order is placed. Checks marked Coming Soon are saved but not enforced yet. Staff placing
					orders from the dashboard are never blocked.
				</p>
			</div>

			{/* Where what is on screen came from */}
			<div className="flex flex-wrap items-center gap-3 text-xs">
				<span className="text-gray-500">
					{active} of {PROVIDERS.length} check{PROVIDERS.length === 1 ? "" : "s"} switched on
				</span>

				{source === "settings" && (
					<span className="inline-flex items-center gap-1 text-emerald-700">
						<IconCloudCheck size={14} /> Loaded from store settings
					</span>
				)}

				{source === "local" && (
					<span className="inline-flex items-center gap-1 text-amber-700">
						<IconDeviceDesktop size={14} /> This browser only - not saved to the store yet
					</span>
				)}

				{dirty && <span className="text-amber-700">Unsaved changes</span>}

				{storeError && (
					<span className="inline-flex items-center gap-1 text-red-700">
						<IconAlertTriangle size={14} /> {storeError}
					</span>
				)}
			</div>

			{/* The checks */}
			{!hydrated ? (
				<div className="flex items-center gap-2 py-8 text-sm text-gray-500">
					<Spinner size={16} fill="#9ca3af" /> Loading settings...
				</div>
			) : (
				<div className="flex flex-col gap-2">
					{PROVIDERS.map((provider) => {
						const values = providerConfig(config, provider);

						return (
							<ToggleContent
								key={provider.id}
								iconPosition="left"
								headerClass={HEADER_CLASSES}
								headerTitleClass="flex w-full items-center gap-2"
								contentClass={CONTENT_CLASSES}
								title={
									<ProviderTitle
										provider={provider}
										enabled={Boolean(values.enabled)}
										onToggle={() => toggleProvider(provider.id)}
									/>
								}
							>
								<div className="flex flex-col">
									{provider.summary && (
										<p className="pb-1 text-xs text-gray-500">{provider.summary}</p>
									)}

									{provider.fields.map((field) => (
										<Field
											key={field.key}
											provider={provider}
											field={field}
											value={values[field.key]}
											onChange={(value) => setField(provider.id, field.key, value)}
										/>
									))}

									{provider.id === "countryFilter" && (
										<GeoIpSettings token={token} addNotification={addNotification} />
									)}
								</div>
							</ToggleContent>
						);
					})}
				</div>
			)}

			<p className="text-xs text-gray-500">
				API keys for the scoring services live on <strong>Settings &rarr; API Keys</strong>,
				with every other integration&rsquo;s credentials.
			</p>
		</div>
	);
};

export default FraudChecker;
