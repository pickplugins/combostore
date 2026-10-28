"use client";

import React from "react";
import {
	IconClock, IconPlus, IconTrash, IconDeviceFloppy, IconCloudCheck,
	IconAlertTriangle, IconRefresh,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";

import { useCountdownStore } from "../lib/store";
import { resolveCampaign } from "../lib/campaign";
import { subscribeToTicker } from "../lib/ticker";
import { isValidTimeZone, wallClockIn, pad, formatCompact } from "../lib/time";
import {
	CAMPAIGN_KINDS, KIND_OPTIONS, WEEKDAYS, EXPIRED_ACTIONS, blankCampaign,
} from "../lib/defaults";

/*
	The extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which already sits inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there
	and this draws only the page body, exactly like a core screen.

	Each campaign carries a live preview run through the same resolver the
	storefront uses. A countdown is the kind of thing that looks right in a
	form and turns out to be a day out, or in the wrong timezone, or already
	over - and the only way to know is to watch one tick.
*/

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:!opacity-50";

const GHOST_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand disabled:!opacity-50";

const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-sm !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const CARD = "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm";

const COMMON_ZONES = [
	"Asia/Dhaka", "Asia/Kolkata", "Asia/Karachi", "Asia/Dubai", "Asia/Singapore",
	"Asia/Tokyo", "Europe/London", "Europe/Berlin", "America/New_York",
	"America/Los_Angeles", "Australia/Sydney", "UTC",
];

/** One shared clock for the whole screen, from the same ticker the blocks use. */
function useNow() {
	const [now, setNow] = React.useState(null);
	React.useEffect(() => {
		setNow(Date.now());
		return subscribeToTicker(setNow);
	}, []);
	return now;
}

const Countdowns = () => {

	const { token, settings: storeSettings, addNotification } = useCounterStore();

	const settings = useCountdownStore((s) => s.settings);
	const seen = useCountdownStore((s) => s.seen);
	const saving = useCountdownStore((s) => s.saving);
	const source = useCountdownStore((s) => s.source);
	const {
		hydrateFromSettings, hydrateSeen, setSettings, addCampaign,
		updateCampaign, removeCampaign, saveSettings, forgetSeen,
	} = useCountdownStore();

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	React.useEffect(() => { hydrateSeen(); }, [hydrateSeen]);

	const now = useNow();
	const zoneOk = isValidTimeZone(settings.timeZone);

	/* The merchant's own clock in the store's zone. Checking a date against
	   it catches a wrong zone in a second, which reading the name would
	   not. */
	const zoneClock = (now !== null && zoneOk) ? wallClockIn(new Date(now), settings.timeZone) : null;

	async function onSave() {
		const result = await saveSettings(token);
		addNotification?.({
			type: result.ok ? "success" : "error",
			title: result.ok ? "Campaigns saved" : "Not saved",
			content: result.message,
		});
	}

	return (
		<div className="flex flex-col gap-5 p-5">

			<div className="flex items-center gap-2">
				<IconClock size={22} className="text-[#634FE5]" />
				<h1 className="text-xl font-semibold text-gray-900">Countdowns</h1>
			</div>

			{source !== "settings" ? (
				<div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
					<IconAlertTriangle size={17} className="mt-0.5 shrink-0" />
					<div>
						<div className="font-semibold">These settings have not come from the store.</div>
						<div className="mt-0.5 text-amber-700">
							Either nothing has been saved yet, or the store is not keeping the
							<code className="mx-1 rounded bg-amber-100 px-1">countdownCampaigns</code>
							key. Until it does, no shopper sees a timer.
						</div>
					</div>
				</div>
			) : (
				<div className="flex items-center gap-2 text-xs text-green-700">
					<IconCloudCheck size={15} /> Live on the storefront.
				</div>
			)}

			{/* ---- the zone ---- */}

			<div className={`${CARD} flex flex-wrap items-end gap-4`}>
				<div className="flex flex-col gap-1.5">
					<label className="text-xs font-medium text-gray-600">Your store&apos;s timezone</label>
					<input
						type="text"
						list="countdown-zones"
						className={`${FIELD} w-56`}
						value={settings.timeZone ?? ""}
						onChange={(ev) => setSettings({ timeZone: ev.target.value })}
					/>
					<datalist id="countdown-zones">
						{COMMON_ZONES.map((z) => <option key={z} value={z} />)}
					</datalist>
				</div>

				{zoneOk ? (
					<div className="pb-1.5 text-sm text-gray-600">
						It is{" "}
						<strong className="tabular-nums text-gray-900">
							{zoneClock ? `${pad(zoneClock.hour)}:${pad(zoneClock.minute)}` : "--:--"}
						</strong>{" "}
						there now
						{zoneClock && <span className="text-gray-400"> ({pad(zoneClock.day)}/{pad(zoneClock.month)})</span>}
					</div>
				) : (
					<div className="inline-flex items-center gap-1.5 pb-1.5 text-sm text-red-600">
						<IconAlertTriangle size={15} />
						Not a timezone this browser knows.
					</div>
				)}

				<p className="w-full text-xs leading-relaxed text-gray-500">
					Every date and cutoff below is read in this zone, not the shopper&apos;s. That
					is what makes a sale end at one moment for everybody — otherwise it closes
					at a different time in every country, and each shopper&apos;s own countdown
					looks perfectly consistent while they disagree with each other.
				</p>
			</div>

			{/* ---- campaigns ---- */}

			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-900">Campaigns</h3>
					<p className="text-xs text-gray-500">
						A blocks points at one of these, so a sale shown in four places has one end date.
					</p>
				</div>
				<button type="button" className={PRIMARY_BUTTON} onClick={() => addCampaign(blankCampaign())}>
					<IconPlus size={15} /> Add campaign
				</button>
			</div>

			{settings.campaigns.length === 0 && (
				<div className={`${CARD} py-8 text-center text-sm text-gray-500`}>
					No campaigns yet, so every countdown block shows nothing.
				</div>
			)}

			{settings.campaigns.map((campaign) => {
				const kind = CAMPAIGN_KINDS[campaign.kind] ?? CAMPAIGN_KINDS.fixed;
				const fields = kind.fields;

				const preview = now === null
					? { status: "pending" }
					: resolveCampaign(campaign, settings, seen, now);

				return (
					<div key={campaign.id} className={`${CARD} flex flex-col gap-4`}>

						<div className="flex flex-wrap items-center gap-3">
							<input
								type="text"
								placeholder="Name this campaign"
								className={`${FIELD} min-w-48 flex-1`}
								value={campaign.label ?? ""}
								onChange={(ev) => updateCampaign(campaign.id, { label: ev.target.value })}
							/>

							<label className="flex items-center gap-1.5 text-xs text-gray-600">
								<input
									type="checkbox"
									checked={campaign.enabled !== false}
									onChange={(ev) => updateCampaign(campaign.id, { enabled: ev.target.checked })}
								/>
								On
							</label>

							<PreviewBadge preview={preview} />

							<button
								type="button"
								className={`${GHOST_BUTTON} !text-red-600 hover:!bg-red-50`}
								onClick={() => removeCampaign(campaign.id)}
								aria-label="Delete campaign">
								<IconTrash size={15} />
							</button>
						</div>

						<div className="flex flex-wrap items-end gap-3">

							<Labelled label="Kind">
								<select
									className={FIELD}
									value={campaign.kind}
									onChange={(ev) => updateCampaign(campaign.id, { kind: ev.target.value })}>
									{KIND_OPTIONS.map((k) => <option key={k.value} value={k.value}>{k.label}</option>)}
								</select>
							</Labelled>

							{fields.includes("endDate") && (
								<Labelled label="Ends">
									<input
										type="date"
										className={FIELD}
										value={campaign.endDate ?? ""}
										onChange={(ev) => updateCampaign(campaign.id, { endDate: ev.target.value })}
									/>
								</Labelled>
							)}

							{fields.includes("endTime") && (
								<Labelled label="At">
									<input
										type="time"
										className={FIELD}
										value={campaign.endTime ?? "23:59"}
										onChange={(ev) => updateCampaign(campaign.id, { endTime: ev.target.value })}
									/>
								</Labelled>
							)}

							{fields.includes("cutoff") && (
								<Labelled label="Cutoff each day">
									<input
										type="time"
										className={FIELD}
										value={campaign.cutoff ?? "14:00"}
										onChange={(ev) => updateCampaign(campaign.id, { cutoff: ev.target.value })}
									/>
								</Labelled>
							)}

							{fields.includes("durationMinutes") && (
								<Labelled label="Lasts" hint="minutes">
									<input
										type="number"
										min="1"
										className={`${FIELD} w-24`}
										value={campaign.durationMinutes ?? 30}
										onChange={(ev) => updateCampaign(campaign.id, { durationMinutes: ev.target.value })}
									/>
								</Labelled>
							)}

						</div>

						{fields.includes("days") && (
							<div className="flex flex-col gap-1.5">
								<label className="text-xs font-medium text-gray-600">On these days</label>
								<div className="flex flex-wrap gap-1.5">
									{WEEKDAYS.map((day) => {
										const on = (campaign.days ?? []).includes(day.value);
										return (
											<button
												key={day.value}
												type="button"
												onClick={() => updateCampaign(campaign.id, {
													days: on
														? (campaign.days ?? []).filter((d) => d !== day.value)
														: [...(campaign.days ?? []), day.value],
												})}
												className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
													on
														? "border-[#634FE5] bg-[#634FE5] text-white"
														: "border-gray-300 bg-white text-gray-500 hover:border-gray-400"
												}`}>
												{day.short}
											</button>
										);
									})}
								</div>
								<p className="text-[11px] text-gray-400">
									Once the cutoff passes, it counts to the next day that is on — so a
									weekday-only cutoff says Sunday&apos;s all weekend.
								</p>
							</div>
						)}

						{campaign.kind === "evergreen" && (
							<div className="flex flex-wrap items-center gap-3 rounded-xl bg-gray-50 px-3 py-2">
								<p className="flex-1 text-[11px] leading-relaxed text-gray-500">
									Counted from this browser&apos;s first sight of it and kept there, so it
									is a nudge rather than a deadline you can enforce — and once it is
									over it stays over. Clearing lets you watch it from the start again.
								</p>
								<button
									type="button"
									className={GHOST_BUTTON}
									onClick={() => forgetSeen(campaign.id)}
									disabled={seen[campaign.id] === undefined}>
									<IconRefresh size={14} /> Clear my own
								</button>
							</div>
						)}

						<div className="flex flex-wrap items-end gap-3 border-t border-gray-100 pt-3">

							<Labelled label="Do not show before" hint="optional">
								<input
									type="date"
									className={FIELD}
									value={campaign.startDate ?? ""}
									onChange={(ev) => updateCampaign(campaign.id, { startDate: ev.target.value })}
								/>
							</Labelled>

							{campaign.startDate && (
								<Labelled label="From">
									<input
										type="time"
										className={FIELD}
										value={campaign.startTime ?? "00:00"}
										onChange={(ev) => updateCampaign(campaign.id, { startTime: ev.target.value })}
									/>
								</Labelled>
							)}

							<Labelled label="When it runs out">
								<select
									className={FIELD}
									value={campaign.expiredAction ?? "hide"}
									onChange={(ev) => updateCampaign(campaign.id, { expiredAction: ev.target.value })}>
									{EXPIRED_ACTIONS.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
								</select>
							</Labelled>

							{campaign.expiredAction === "message" && (
								<Labelled label="Saying">
									<input
										type="text"
										className={`${FIELD} w-64`}
										value={campaign.expiredMessage ?? ""}
										onChange={(ev) => updateCampaign(campaign.id, { expiredMessage: ev.target.value })}
									/>
								</Labelled>
							)}

						</div>

						<p className="text-xs text-gray-400">{kind.hint}</p>

					</div>
				);
			})}

			<div className="sticky bottom-4 flex justify-end">
				<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={onSave}>
					<IconDeviceFloppy size={16} />
					{saving ? "Saving..." : "Save campaigns"}
				</button>
			</div>

		</div>
	);
};

/* The live readout. Every state a block can be in is named here, so a
   campaign that renders nothing on the storefront says why it does. */
const PreviewBadge = ({ preview }) => {

	const base = "ml-auto rounded-lg px-3 py-1.5 text-sm tabular-nums";

	if (preview.status === "pending") {
		return <span className={`${base} bg-gray-50 text-gray-400`}>--</span>;
	}
	if (preview.status === "running") {
		return (
			<span className={`${base} bg-green-50 font-semibold text-green-700`}>
				{formatCompact(preview.parts)}
			</span>
		);
	}
	if (preview.status === "expired") {
		return <span className={`${base} bg-gray-100 text-gray-500`}>Over</span>;
	}
	if (preview.status === "before") {
		return <span className={`${base} bg-blue-50 text-blue-700`}>Not started</span>;
	}
	return <span className={`${base} bg-amber-50 text-amber-700`}>Nothing to count to</span>;
};

const Labelled = ({ label, hint, children }) => (
	<div className="flex flex-col gap-1.5">
		<label className="text-xs font-medium text-gray-600">
			{label}
			{hint && <span className="ml-1 font-normal text-gray-400">({hint})</span>}
		</label>
		{children}
	</div>
);

export default Countdowns;
