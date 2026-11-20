"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { IconBrandMeta, IconRefresh, IconExternalLink, IconHistory } from "@tabler/icons-react";
import { postApi, CARD, HINT, FILTER_SELECT, TOOLBAR_BUTTON, PRIMARY_BUTTON, Modal, formatDateTime } from "./marketingUi";

/*
	Facebook / Instagram ad campaigns (ComboStoreFacebookAds, Meta Marketing API)
	on the Campaigns page: each campaign with its spend and results for a period,
	and a switch to turn it on (ACTIVE) or off (PAUSED). Turning one on asks
	first, since it starts spending. Data is cached on the server for 5 minutes;
	Refresh fetches it again.
*/
const PRESET_LABELS = {
	today: "Today", yesterday: "Yesterday", last_7d: "Last 7 days", last_14d: "Last 14 days", last_30d: "Last 30 days",
	last_90d: "Last 90 days", this_month: "This month", last_month: "Last month", maximum: "All time",
};

const STATUS_STYLES = {
	ACTIVE: ["Active", "bg-emerald-50 text-emerald-700 ring-emerald-200"],
	PAUSED: ["Off", "bg-gray-100 text-gray-600 ring-gray-200"],
	CAMPAIGN_PAUSED: ["Off", "bg-gray-100 text-gray-600 ring-gray-200"],
	ARCHIVED: ["Archived", "bg-gray-50 text-gray-400 ring-gray-200"],
	DELETED: ["Deleted", "bg-gray-50 text-gray-400 ring-gray-200"],
	IN_PROCESS: ["Processing", "bg-blue-50 text-blue-700 ring-blue-200"],
	WITH_ISSUES: ["Has issues", "bg-rose-50 text-rose-700 ring-rose-200"],
	PENDING_REVIEW: ["In review", "bg-amber-50 text-amber-700 ring-amber-200"],
	DISAPPROVED: ["Disapproved", "bg-rose-50 text-rose-700 ring-rose-200"],
};

/* "OUTCOME_SALES" -> "Sales" */
const objectiveLabel = (o) => String(o || "").replace(/^OUTCOME_/, "").toLowerCase().replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());

const FacebookAdsPanel = ({ token, addNotification }) => {
	const [data, setdata] = useState(null);
	const [preset, setpreset] = useState("");
	const [loading, setloading] = useState(false);
	const [busy, setbusy] = useState("");
	const [confirmOn, setconfirmOn] = useState(null);
	const [showLog, setshowLog] = useState(false);

	const load = useCallback((refresh = false) => {
		if (!token) return;
		setloading(true);
		postApi("get_fb_ads_campaigns", token, { date_preset: preset || undefined, refresh })
			.then((r) => { setdata(r); if (!preset && r?.date_preset) setpreset(r.date_preset); })
			/* Keep the period on screen even when Meta refuses: the selector and footer still need it. */
			.catch((e) => setdata({ ready: true, error: e.message, campaigns: [], date_preset: preset || "last_30d" }))
			.finally(() => setloading(false));
	}, [token, preset]);

	useEffect(() => { load(false); }, [token, preset]);

	var cur = data?.account?.currency || "";
	var money = (n) => n === null || n === undefined ? "—" : `${cur === "BDT" ? "৳" : cur ? cur + " " : ""}${Number(n).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
	var count = (n) => n === null || n === undefined ? "—" : Number(n).toLocaleString();

	function setStatus(c, status) {
		setbusy(c.id);
		postApi("set_fb_campaign_status", token, { id: c.id, status })
			.then(() => { addNotification({ type: "success", title: status === "ACTIVE" ? "Campaign turned on" : "Campaign turned off", content: c.name }); load(true); })
			.catch((e) => addNotification({ type: "error", title: "Not changed", content: e.message }))
			.finally(() => { setbusy(""); setconfirmOn(null); });
	}

	if (!data) return <div className={`${CARD} text-sm text-gray-500`}>Loading Facebook ad campaigns…</div>;

	if (!data.ready) {
		return (
			<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-gray-300 bg-white px-4 py-3">
				<span className="flex items-center gap-3 text-sm text-gray-600"><span className="rounded-lg bg-blue-50 p-2 text-blue-600"><IconBrandMeta size={18} /></span> See your Facebook and Instagram ad campaigns here, and turn them on or off.</span>
				<Link href="/dashboard/marketing-settings#facebook-ads" className="text-sm font-medium text-[#634FE5]">Connect Facebook Ads</Link>
			</div>
		);
	}

	var adsManager = data.account?.id ? `https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=${String(data.account.id).replace(/^act_/, "")}` : "https://adsmanager.facebook.com/";

	return (
		<div className={`${CARD} !p-0`}>
			<div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-5 py-3">
				<div className="flex items-center gap-3">
					<span className="rounded-lg bg-blue-50 p-2 text-blue-600"><IconBrandMeta size={18} /></span>
					<div>
						<div className="text-sm font-semibold text-gray-900">Facebook ad campaigns</div>
						<div className="text-xs text-gray-500">{data.account?.name ? `${data.account.name} · ` : ""}{data.fetched_at ? `updated ${formatDateTime(data.fetched_at)}` : ""}</div>
					</div>
				</div>
				<div className="flex flex-wrap items-center gap-2">
					<select className={FILTER_SELECT} value={preset || data.date_preset || "last_30d"} onChange={(ev) => setpreset(ev.target.value)}>
						{Object.entries(PRESET_LABELS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
					</select>
					<button type="button" className={TOOLBAR_BUTTON} disabled={loading} onClick={() => load(true)} title="Fetch from Meta again"><IconRefresh size={16} className={loading ? "animate-spin" : ""} /> Refresh</button>
					<a href={adsManager} target="_blank" rel="noreferrer" className={TOOLBAR_BUTTON}><IconExternalLink size={16} /> Ads Manager</a>
				</div>
			</div>

			{data.error && <p className="px-5 py-4 text-sm text-rose-700">{data.error}</p>}
			{data.insights_error && <p className="px-5 pt-3 text-xs text-amber-700">Results not loaded: {data.insights_error}</p>}
			{!data.error && !data.campaigns.length && <p className="px-5 py-4 text-sm text-gray-500">No campaigns in this ad account.</p>}

			{data.campaigns.length > 0 && (
				<div className="overflow-x-auto">
					{/* Below md the dashboard turns tables into one card per row (app/globals.css), labelled by each cell's data-label. */}
					<table className="w-full text-sm md:min-w-[760px]">
						<thead>
							<tr className="text-left text-xs text-gray-500">
								<th className="px-5 py-2 font-medium">Campaign</th>
								<th className="px-3 py-2 font-medium">Budget</th>
								<th className="px-3 py-2 text-right font-medium">Spent</th>
								<th className="px-3 py-2 text-right font-medium">Results</th>
								<th className="px-3 py-2 text-right font-medium">Cost / result</th>
								<th className="px-3 py-2 text-right font-medium">Reach · Clicks</th>
								<th className="px-5 py-2 text-right font-medium">On / off</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							{data.campaigns.map((c) => {
								var [label, classes] = STATUS_STYLES[c.effective_status] ?? [objectiveLabel(c.effective_status), "bg-gray-100 text-gray-600 ring-gray-200"];
								var on = c.status === "ACTIVE";
								return (
									<tr key={c.id} className={c.can_toggle ? "" : "opacity-60"}>
										<td className="px-5 py-2.5 text-left">
											<div className="min-w-0">
												<div className="font-medium text-gray-900">{c.name}</div>
												<div className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
													<span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ring-inset ${classes}`}>{label}</span>
													{objectiveLabel(c.objective)}
												</div>
											</div>
										</td>
										<td data-label="Budget" className="px-3 py-2.5 text-xs text-gray-600">
											<div>
												{c.daily_budget !== null ? `${money(c.daily_budget)} / day` : c.lifetime_budget !== null ? `${money(c.lifetime_budget)} total` : "Set on ad sets"}
												{c.budget_remaining !== null && <div className="text-gray-400">{money(c.budget_remaining)} left</div>}
											</div>
										</td>
										<td data-label="Spent" className="px-3 py-2.5 text-right tabular-nums">{money(c.spend)}</td>
										<td data-label="Results" className="px-3 py-2.5 text-right tabular-nums"><div>{count(c.results)}<div className="text-[11px] text-gray-400">{c.result_label}</div></div></td>
										<td data-label="Cost / result" className="px-3 py-2.5 text-right tabular-nums">{c.cost_per_result !== null ? money(c.cost_per_result) : "—"}</td>
										<td data-label="Reach · Clicks" className="px-3 py-2.5 text-right text-xs tabular-nums text-gray-600">{count(c.reach)} · {count(c.clicks)}</td>
										<td data-label="On / off" className="px-5 py-2.5 text-right">
											<button type="button" role="switch" aria-checked={on} aria-label={`${on ? "Turn off" : "Turn on"} ${c.name}`}
												disabled={!c.can_toggle || busy === c.id}
												title={c.can_toggle ? (on ? "Turn off (pause)" : "Turn on") : "Only campaigns that are on or off can be switched here"}
												onClick={() => (on ? setStatus(c, "PAUSED") : setconfirmOn(c))}
												className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full !border-0 !p-0 !shadow-none transition-colors cursor-pointer disabled:cursor-not-allowed ${on ? "!bg-emerald-500" : "!bg-gray-300"}`}>
												<span className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} />
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}

			<div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 px-5 py-2">
				<p className={`${HINT} !mt-0`}>{data.error ? "Fix the connection in Marketing settings › Facebook Ads, then Refresh." : `Figures are Meta's, for ${(PRESET_LABELS[data.date_preset] ?? data.date_preset ?? "").toLowerCase()}. Turning a campaign off pauses its ad sets and ads; edit budgets and ads in Ads Manager.`}</p>
				{data.log?.length > 0 && (
					<button type="button" onClick={() => setshowLog(!showLog)} className="inline-flex items-center gap-1 text-xs !border-0 !bg-transparent !p-0 text-gray-500 !shadow-none hover:text-gray-900 cursor-pointer"><IconHistory size={13} /> Recent changes</button>
				)}
			</div>
			{showLog && (
				<ul className="border-t border-gray-100 px-5 py-2 text-xs text-gray-600">
					{data.log.map((l, i) => (
						<li key={i} className="py-0.5">{formatDateTime(l.at)} · {l.user} turned <strong>{l.campaign}</strong> {l.to === "ACTIVE" ? "on" : "off"}</li>
					))}
				</ul>
			)}

			<Modal open={!!confirmOn} onClose={() => setconfirmOn(null)} title="Turn this campaign on?"
				footer={<>
					<button type="button" className={TOOLBAR_BUTTON} onClick={() => setconfirmOn(null)}>Cancel</button>
					<button type="button" className={PRIMARY_BUTTON} disabled={!!busy} onClick={() => setStatus(confirmOn, "ACTIVE")}>{busy ? "Turning on…" : "Turn on"}</button>
				</>}>
				{confirmOn && (
					<p className="text-sm text-gray-700">
						<strong>{confirmOn.name}</strong> starts delivering again and spending its budget
						{confirmOn.daily_budget !== null ? <> of <strong>{money(confirmOn.daily_budget)} a day</strong></> : confirmOn.lifetime_budget !== null ? <> (<strong>{money(confirmOn.budget_remaining ?? confirmOn.lifetime_budget)}</strong> left of {money(confirmOn.lifetime_budget)})</> : " (set on its ad sets)"}.
						Ad sets and ads that were paused one by one stay paused.
					</p>
				)}
			</Modal>
		</div>
	);
};

export default FacebookAdsPanel;
