"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCounterStore } from "../../store/useCounterStore";
import { IconMail, IconMessage2, IconUsers, IconList, IconSettings, IconArrowRight, IconAlertTriangle, IconBolt, IconBrandWhatsapp } from "@tabler/icons-react";
import { postApi, CARD, PRIMARY_BUTTON, TOOLBAR_BUTTON, StatTile, Badge, ChannelTag, CAMPAIGN_STATUS_BADGES, pct, formatDateTime, campaignStatus } from "./marketingUi";

/*
	Marketing landing screen: audience size per channel, the last 30 days of
	sends, and the latest campaigns (ComboStoreMarketing get_mkt_overview).
*/
const MarketingOverview = () => {
	const { token, addNotification } = useCounterStore();
	const [data, setdata] = useState(null);

	useEffect(() => {
		if (!token) return;
		postApi("get_mkt_overview", token, {})
			.then(setdata)
			.catch((e) => addNotification({ type: "error", title: "Marketing overview not loaded", content: e.message }));
	}, [token]);

	var c = data?.contacts ?? {};
	var email = data?.last_30?.email ?? {};
	var sms = data?.last_30?.sms ?? {};
	var wa = data?.last_30?.whatsapp ?? {};

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">Marketing</h1>
					<p className="mt-0.5 text-xs text-gray-500">Email, SMS and WhatsApp campaigns to one shared contact list.</p>
				</div>
				<div className="flex flex-wrap gap-2">
					<Link href="/dashboard/marketing-campaigns?new=whatsapp" className={TOOLBAR_BUTTON}><IconBrandWhatsapp size={16} /> New WhatsApp</Link>
					<Link href="/dashboard/marketing-campaigns?new=sms" className={TOOLBAR_BUTTON}><IconMessage2 size={16} /> New SMS</Link>
					<Link href="/dashboard/marketing-campaigns?new=email" className={PRIMARY_BUTTON}><IconMail size={16} /> New email</Link>
				</div>
			</div>

			{data && (!data.configured?.email || !data.configured?.sms) && (
				<div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
					<span className="inline-flex items-center gap-2">
						<IconAlertTriangle size={16} />
						{!data.configured.email && !data.configured.sms ? "Email (SMTP) and SMS are not set up yet." : !data.configured.email ? "Email (SMTP) is not set up yet." : "No SMS provider is set up yet."}
					</span>
					<Link href="/dashboard/marketing-settings" className="inline-flex items-center gap-1 text-xs font-medium hover:underline">Open settings <IconArrowRight size={14} /></Link>
				</div>
			)}

			<div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
				<StatTile label="Contacts" value={data ? c.total ?? 0 : "—"} sub={data ? `${c.new_30 ?? 0} new in 30 days` : ""} />
				<StatTile label="Email subscribers" value={data ? c.email_subscribed ?? 0 : "—"} tone="green" sub={data ? `${c.email_pending ? `${c.email_pending} unconfirmed · ` : ""}${c.email_unsubscribed ?? 0} unsubscribed · ${c.bounced ?? 0} bounced` : ""} />
				<StatTile label="SMS subscribers" value={data ? c.sms_subscribed ?? 0 : "—"} tone="blue" sub={data ? `${c.sms_unsubscribed ?? 0} unsubscribed` : ""} />
				<StatTile label="WhatsApp subscribers" value={data ? c.whatsapp_subscribed ?? 0 : "—"} tone="green" sub={data ? `${c.whatsapp_unsubscribed ?? 0} opted out` : ""} />
				<StatTile label="Lists" value={data ? data.lists ?? 0 : "—"} tone="violet" sub={data ? `${data.campaigns?.sent ?? 0} campaigns sent` : ""} />
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<div className={CARD}>
					<div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconMail size={16} className="text-indigo-500" /> Email, last 30 days</div>
					<div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
						<Figure label="Sent" value={email.sent ?? 0} />
						<Figure label="Opened" value={email.opened ?? 0} sub={pct(email.opened, email.sent)} />
						<Figure label="Clicked" value={email.clicked ?? 0} sub={pct(email.clicked, email.sent)} />
						<Figure label="Unsubscribed" value={email.unsubscribed ?? 0} sub={`${email.failed ?? 0} failed`} />
					</div>
				</div>
				<div className={CARD}>
					<div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconMessage2 size={16} className="text-sky-500" /> SMS, last 30 days</div>
					<div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
						<Figure label="Sent" value={sms.sent ?? 0} />
						<Figure label="Failed" value={sms.failed ?? 0} sub={pct(sms.failed, (sms.sent ?? 0) + (sms.failed ?? 0))} />
					</div>
				</div>
				<div className={CARD}>
					<div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900"><IconBrandWhatsapp size={16} className="text-emerald-500" /> WhatsApp, last 30 days</div>
					<div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
						<Figure label="Sent" value={wa.sent ?? 0} />
						<Figure label="Delivered" value={wa.delivered ?? 0} sub={pct(wa.delivered, wa.sent)} />
						<Figure label="Read" value={wa.opened ?? 0} sub={pct(wa.opened, wa.sent)} />
						<Figure label="Opted out" value={wa.unsubscribed ?? 0} sub={`${wa.failed ?? 0} failed`} />
					</div>
				</div>
			</div>

			{(data?.automations ?? []).map((a) => (
				<Link key={a.id} href={`/dashboard/marketing-campaigns/${a.id}`} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition-colors hover:border-gray-300">
					<span className="flex items-center gap-2 text-sm font-medium text-gray-900"><IconBolt size={16} className="text-amber-500" /> {a.name} <Badge badges={CAMPAIGN_STATUS_BADGES} status={a.status} small /></span>
					<span className="flex items-center gap-4 text-xs tabular-nums text-gray-500">
						<span>{a.stats.sent} sent</span>
						{a.stats.sent > 0 && <span>{pct(a.stats.opened, a.stats.sent)} opened · {pct(a.stats.clicked, a.stats.sent)} clicked</span>}
					</span>
				</Link>
			))}

			<div className={`${CARD} !p-0`}>
				<div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
					<div className="text-sm font-semibold text-gray-900">Recent campaigns</div>
					<Link href="/dashboard/marketing-campaigns" className="inline-flex items-center gap-1 text-xs font-medium text-[#634FE5] hover:underline">All campaigns <IconArrowRight size={14} /></Link>
				</div>
				{data && !data.recent?.length && (
					<div className="px-5 py-10 text-center text-sm text-gray-500">No campaigns yet. Start with an email or an SMS above.</div>
				)}
				<ul className="divide-y divide-gray-100">
					{(data?.recent ?? []).map((r) => (
						<li key={r.id}>
							<Link href={`/dashboard/marketing-campaigns/${r.id}`} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 hover:bg-gray-50">
								<div className="flex min-w-0 items-center gap-2">
									<ChannelTag channel={r.channel} />
									<span className="truncate text-sm font-medium text-gray-900">{r.name}</span>
									<Badge badges={CAMPAIGN_STATUS_BADGES} status={campaignStatus(r)} small />
								</div>
								<div className="flex items-center gap-4 text-xs text-gray-500 tabular-nums">
									<span>{r.stats.sent}/{r.recipients || r.stats.total} sent</span>
									{r.channel === "email" && <span>{pct(r.stats.opened, r.stats.sent)} opened</span>}
									<span>{formatDateTime(r.started_at || r.scheduled_at || r.updated_at)}</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
				<QuickLink href="/dashboard/marketing-contacts" icon={<IconUsers size={18} />} title="Contacts" text="Add, import or sync customers." />
				<QuickLink href="/dashboard/marketing-lists" icon={<IconList size={18} />} title="Lists" text="Group contacts for targeting." />
				<QuickLink href="/dashboard/marketing-settings" icon={<IconSettings size={18} />} title="Settings" text="SMTP, SMS provider, sender details." />
			</div>
		</div>
	);
};

const Figure = ({ label, value, sub }) => (
	<div>
		<div className="text-xs text-gray-500">{label}</div>
		<div className="text-lg font-semibold tabular-nums text-gray-900">{value}</div>
		{sub && <div className="text-[11px] text-gray-400">{sub}</div>}
	</div>
);

const QuickLink = ({ href, icon, title, text }) => (
	<Link href={href} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:border-gray-300">
		<span className="rounded-lg bg-gray-100 p-2 text-gray-600">{icon}</span>
		<span>
			<span className="block text-sm font-semibold text-gray-900">{title}</span>
			<span className="block text-xs text-gray-500">{text}</span>
		</span>
	</Link>
);

export default MarketingOverview;
