"use client";

import Link from "next/link";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from "../../store/useCounterStore";
import { IconMail, IconMessage2, IconCopy, IconTrash, IconPencil, IconBolt, IconArrowRight, IconBrandWhatsapp, IconPhoneCall, IconVolume } from "@tabler/icons-react";
import { postApi, FILTER_SELECT, TOOLBAR_BUTTON, PRIMARY_BUTTON, ICON_BUTTON, Badge, ChannelTag, CAMPAIGN_STATUS_BADGES, pct, formatDateTime, AUTOMATION_INFO, campaignStatus } from "./marketingUi";
import FacebookAdsPanel from "./FacebookAdsPanel";

/*
	Email and SMS campaigns. "New email" / "New SMS" create a draft and open
	its editor; ?new=email|sms (from the overview) does the same on arrival.
*/
const MarketingCampaigns = () => {
	const { token, addNotification } = useCounterStore();
	const router = useRouter();

	var [data, setdata] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, per_page: 20, order: "DESC", channel: "", status: "" });
	var [loading, setloading] = useState(false);
	var [creating, setcreating] = useState(false);
	var autoCreated = useRef(false);
	var [automations, setautomations] = useState([]);

	useEffect(() => {
		if (!token) return;
		Promise.all(Object.keys(AUTOMATION_INFO).map((key) => postApi("get_mkt_automation", token, { key }).catch(() => null)))
			.then((rows) => setautomations(rows.filter(Boolean)));
	}, [token]);

	const fetchCampaigns = useCallback(() => {
		if (!token) return;
		setloading(true);
		postApi("get_mkt_campaigns", token, queryPrams)
			.then((res) => setdata({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 }))
			.catch((e) => addNotification({ type: "error", title: "Campaigns not loaded", content: e.message }))
			.finally(() => setloading(false));
	}, [token, queryPrams]);

	const [debounced, setdebounced] = useState(queryPrams);
	useEffect(() => { var h = setTimeout(() => setdebounced(queryPrams), 400); return () => clearTimeout(h); }, [queryPrams]);
	useEffect(() => { fetchCampaigns(); }, [debounced, token]);

	function create(channel) {
		setcreating(true);
		postApi("save_mkt_campaign", token, { channel, name: "" })
			.then((res) => router.push(`/dashboard/marketing-campaigns/${res.id}`))
			.catch((e) => { setcreating(false); addNotification({ type: "error", title: "Campaign not created", content: e.message }); });
	}

	useEffect(() => {
		if (!token || autoCreated.current) return;
		var want = new URLSearchParams(window.location.search).get("new");
		if (["email", "sms", "whatsapp", "call", "voice"].includes(want)) { autoCreated.current = true; create(want); }
	}, [token]);

	function duplicate(id) {
		postApi("duplicate_mkt_campaign", token, { id })
			.then((res) => router.push(`/dashboard/marketing-campaigns/${res.id}`))
			.catch((e) => addNotification({ type: "error", title: "Not duplicated", content: e.message }));
	}

	function remove(entry) {
		if (!confirm(`Delete "${entry.name}" and its send report?`)) return;
		postApi("delete_mkt_campaign", token, { id: entry.id })
			.then(() => { fetchCampaigns(); addNotification({ type: "success", title: "Campaign deleted", content: "" }); })
			.catch((e) => addNotification({ type: "error", title: "Not deleted", content: e.message }));
	}

	var columns = {
		id: { id: "id", label: "Campaign", callback: cellName, classes: "text-left text-gray-600" },
		status: { id: "status", label: "Status", callback: cellStatus, classes: "text-left text-gray-600 w-44" },
		sent: { id: "sent", label: "Delivered", callback: cellSent, classes: "text-left text-gray-600 w-36" },
		engagement: { id: "engagement", label: "Engagement", callback: cellEngagement, classes: "text-left text-gray-600 w-44" },
		actions: { label: "Actions", callback: cellActions, classes: "text-right pr-2 text-gray-600" },
	};

	function cellName(entry) {
		return (
			<td data-label="Campaign" className="!px-5 py-3 text-left" key={`n-${entry.id}`}>
				<Link href={`/dashboard/marketing-campaigns/${entry.id}`} className="flex min-w-0 flex-col gap-1">
					<span className="flex items-center gap-2">
						<ChannelTag channel={entry.channel} />
						<span className="truncate text-sm font-medium text-gray-900 hover:text-blue-600 hover:underline">{entry.name}</span>
					</span>
					<span className="truncate text-xs text-gray-500">{entry.channel === "email" ? (entry.subject || "No subject yet") : `#${entry.id}`}</span>
				</Link>
			</td>
		);
	}

	function cellStatus(entry, key) {
		var when = entry.status === "scheduled" ? entry.scheduled_at : entry.finished_at || entry.started_at || entry.updated_at;
		return (
			<td data-label="Status" className="!px-5 py-3 text-left" key={key}>
				<div className="flex flex-col items-start gap-1">
					<Badge badges={CAMPAIGN_STATUS_BADGES} status={campaignStatus(entry)} />
					<span className="text-[11px] text-gray-400">{entry.status === "scheduled" ? "for " : ""}{formatDateTime(when)}</span>
				</div>
			</td>
		);
	}

	function cellSent(entry, key) {
		var s = entry.stats;
		return (
			<td data-label="Delivered" className="!px-5 py-3 text-left" key={key}>
				{!s.total ? <span className="text-sm text-gray-300">—</span> : (
					<div className="flex flex-col text-sm tabular-nums">
						<span className="text-gray-900">{s.sent}<span className="text-gray-400">/{s.total}</span></span>
						{s.failed > 0 && <span className="text-[11px] text-rose-600">{s.failed} failed</span>}
						{s.queued > 0 && <span className="text-[11px] text-blue-600">{s.queued} queued</span>}
					</div>
				)}
			</td>
		);
	}

	function cellEngagement(entry, key) {
		var s = entry.stats;
		return (
			<td data-label="Engagement" className="!px-5 py-3 text-left" key={key}>
				{entry.channel === "whatsapp" && s.sent > 0 ? (
					<div className="flex flex-col text-xs tabular-nums text-gray-600">
						<span>{pct(s.delivered, s.sent)} delivered · {pct(s.opened, s.sent)} read</span>
						{s.unsubscribed > 0 && <span className="text-gray-400">{s.unsubscribed} opted out</span>}
					</div>
				) : entry.channel !== "email" || !s.sent ? <span className="text-sm text-gray-300">—</span> : (
					<div className="flex flex-col text-xs tabular-nums text-gray-600">
						<span>{pct(s.opened, s.sent)} opened · {pct(s.clicked, s.sent)} clicked</span>
						{s.unsubscribed > 0 && <span className="text-gray-400">{s.unsubscribed} unsubscribed</span>}
					</div>
				)}
			</td>
		);
	}

	function cellActions(entry, key) {
		return (
			<td data-label="Actions" className="!px-5 py-3" key={key}>
				<div className="flex justify-end gap-1">
					<Link title="Open" className={ICON_BUTTON} href={`/dashboard/marketing-campaigns/${entry.id}`}><IconPencil size={16} /></Link>
					<button type="button" title="Duplicate" className={ICON_BUTTON} onClick={() => duplicate(entry.id)}><IconCopy size={16} /></button>
					{entry.status !== "sending" && <button type="button" title="Delete" className={`${ICON_BUTTON} hover:!text-red-600`} onClick={() => remove(entry)}><IconTrash size={16} /></button>}
				</div>
			</td>
		);
	}

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">Campaigns</h1>
					<p className="mt-0.5 text-xs text-gray-500">{data.total} campaigns</p>
				</div>
				<div className="flex flex-wrap gap-2">
					<button type="button" className={TOOLBAR_BUTTON} disabled={creating} onClick={() => create("voice")} title="Automated call: a spoken message, with optional keys to press"><IconVolume size={16} /> New voice call</button>
					<button type="button" className={TOOLBAR_BUTTON} disabled={creating} onClick={() => create("call")}><IconPhoneCall size={16} /> New call list</button>
					<button type="button" className={TOOLBAR_BUTTON} disabled={creating} onClick={() => create("whatsapp")}><IconBrandWhatsapp size={16} /> New WhatsApp</button>
					<button type="button" className={TOOLBAR_BUTTON} disabled={creating} onClick={() => create("sms")}><IconMessage2 size={16} /> New SMS</button>
					<button type="button" className={PRIMARY_BUTTON} disabled={creating} onClick={() => create("email")}><IconMail size={16} /> New email</button>
				</div>
			</div>

			{automations.map((welcome) => (
				<Link key={welcome.id} href={`/dashboard/marketing-campaigns/${welcome.id}`} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-colors hover:border-gray-300">
					<span className="flex min-w-0 items-center gap-3">
						<span className="rounded-lg bg-amber-50 p-2 text-amber-600"><IconBolt size={18} /></span>
						<span className="min-w-0">
							<span className="flex items-center gap-2 text-sm font-semibold text-gray-900">{welcome.name} <Badge badges={CAMPAIGN_STATUS_BADGES} status={welcome.status} small /></span>
							<span className="block truncate text-xs text-gray-500">{AUTOMATION_INFO[welcome.automation]?.when}</span>
						</span>
					</span>
					<span className="flex items-center gap-4 text-xs tabular-nums text-gray-500">
						<span>{welcome.stats.sent} sent</span>
						{welcome.stats.sent > 0 && <span>{pct(welcome.stats.opened, welcome.stats.sent)} opened</span>}
						<span className="inline-flex items-center gap-1 font-medium text-[#634FE5]">Edit <IconArrowRight size={14} /></span>
					</span>
				</Link>
			))}

			{/* Facebook / Instagram ad campaigns live in Meta, not in this list: shown with an on/off switch each. */}
			<FacebookAdsPanel token={token} addNotification={addNotification} />

			<div className="flex flex-wrap gap-2">
				<select className={FILTER_SELECT} value={queryPrams.channel} onChange={(ev) => setqueryPrams({ ...queryPrams, channel: ev.target.value, paged: 1 })}>
					<option value="">All channels</option>
					<option value="email">Email</option>
					<option value="sms">SMS</option>
					<option value="whatsapp">WhatsApp</option>
					<option value="call">Call lists</option>
					<option value="voice">Voice calls</option>
				</select>
				<select className={FILTER_SELECT} value={queryPrams.status} onChange={(ev) => setqueryPrams({ ...queryPrams, status: ev.target.value, paged: 1 })}>
					<option value="">Any status</option>
					{Object.entries(CAMPAIGN_STATUS_BADGES).filter(([k]) => k !== "active" && k !== "inactive").map(([k, b]) => <option key={k} value={k}>{b.label}</option>)}
				</select>
			</div>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={data}
				itemPath={""}
				onChange={(next) => next && setqueryPrams(next.keyword !== queryPrams.keyword ? { ...next, paged: 1 } : next)}
				loading={loading}
				selectedRows={[]}
				onSelectRows={() => { }}
				onRefreshRequest={fetchCampaigns}
			/>
		</div>
	);
};

export default MarketingCampaigns;
