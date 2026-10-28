"use client";

import React from "react";
import {
	IconShieldHalf, IconDeviceFloppy, IconAlertTriangle,
	IconCloudCheck, IconDeviceDesktop, IconSquareRounded,
	IconSquareRoundedCheck, IconInfoCircle,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
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
		<div className="flex flex-col gap-5 py-5">

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
				Every check ships as Coming Soon and nothing in the app reads
				`settings.fraudCheck`. Saying so is the honest thing: a merchant
				who switches these on and believes orders are being screened is
				worse off than one who knows they are not.
			*/}
			<div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs text-amber-900">
				<IconInfoCircle size={16} className="mt-px shrink-0" />
				<p className="leading-relaxed">
					These settings are recorded but not yet enforced - nothing in the storefront or
					checkout reads them today. They are saved so the configuration is ready when
					screening ships. Real screening has to run server-side: anything decided in the
					browser is bypassed by posting an order straight to the API.
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
