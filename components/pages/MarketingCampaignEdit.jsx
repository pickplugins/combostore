"use client";

import Link from "next/link";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCounterStore } from "../../store/useCounterStore";
import HtmlEditor from "../HtmlEditor";
import EntriesTable from "../EntriesTable";
import {
	IconArrowLeft, IconSend, IconClock, IconPlayerPause, IconPlayerPlay, IconX, IconDeviceFloppy, IconFlask, IconUsers, IconCopy, IconExternalLink, IconBolt, IconPower, IconRefresh, IconBrandWhatsapp, IconPhoneCall,
} from "@tabler/icons-react";
import {
	postApi, CARD, FIELD, LABEL, HINT, PRIMARY_BUTTON, TOOLBAR_BUTTON, DANGER_BUTTON, FILTER_SELECT,
	Badge, ChannelTag, CAMPAIGN_STATUS_BADGES, MESSAGE_STATUS_BADGES, MERGE_TAGS, Modal, StatTile, Toggle,
	useMarketingLists, smsSegments, pct, formatDateTime, contactName, AUTOMATION_INFO, CHANNELS, channelLabel, campaignStatus, CALL_OUTCOMES,
} from "./marketingUi";

const EDITABLE = ["draft", "scheduled", "paused"];
const FIELDS = ["name", "subject", "preheader", "from_name", "from_email", "reply_to", "body", "audience", "track_opens", "track_clicks"];

/*
	One campaign: compose (email or SMS), pick the audience, test, then send
	now or schedule. Once it has recipients the report shows delivery, opens,
	clicks and every message. While it is sending, this page drives the queue
	(process_mkt_queue every few seconds) so progress does not wait on WP-cron.
*/
/*
	/dashboard/marketing-campaigns/welcome (or any automation key) opens that
	automated email: look up its campaign id, then show it under its own URL.
*/
const MarketingCampaignEdit = ({ id }) => {
	const { token, addNotification } = useCounterStore();
	const router = useRouter();
	const isKey = Object.prototype.hasOwnProperty.call(AUTOMATION_INFO, String(id));

	useEffect(() => {
		if (!isKey || !token) return;
		postApi("get_mkt_automation", token, { key: id })
			.then((res) => router.replace(`/dashboard/marketing-campaigns/${res.id}`))
			.catch((e) => addNotification({ type: "error", title: "Automation not loaded", content: e.message }));
	}, [isKey, token, id]);

	if (isKey) return <div className="page-shell"><div className="text-sm text-gray-500">Loading…</div></div>;
	return <CampaignEditor id={id} />;
};

const CampaignEditor = ({ id }) => {
	const { token, addNotification } = useCounterStore();
	const [lists] = useMarketingLists(token, postApi);

	const [campaign, setcampaign] = useState(null);
	const [draft, setdraft] = useState(null);
	const [dirty, setdirty] = useState(false);
	const [busy, setbusy] = useState("");
	const [defaults, setdefaults] = useState({});
	const [tags, settags] = useState([]);
	const [estimate, setestimate] = useState(null);
	const [testOpen, settestOpen] = useState(false);
	const [sendOpen, setsendOpen] = useState(false);
	const [tab, settab] = useState("compose");
	const [loadError, setloadError] = useState("");

	const load = useCallback(() => {
		if (!token) return Promise.resolve();
		return postApi("get_mkt_campaign", token, { id })
			.then((res) => {
				setloadError("");
				setcampaign(res);
				setdraft((prev) => (prev && dirty ? prev : pick(res)));
				/* A finished broadcast opens on its report; automations stay editable. */
				if (!res.automation && !EDITABLE.includes(res.status)) settab((t) => t === "compose" ? "report" : t);
			})
			.catch((e) => { if (!campaign) setloadError(e.message || "Campaign not loaded."); addNotification({ type: "error", title: "Campaign not loaded", content: e.message }); });
	}, [token, id, dirty]);

	useEffect(() => { load(); }, [token, id]);

	useEffect(() => {
		if (!token) return;
		postApi("get_marketing_settings", token, {}).then((s) => setdefaults(s ?? {})).catch(() => { });
		postApi("get_mkt_tags", token, {}).then((r) => settags(r?.tags ?? [])).catch(() => { });
	}, [token]);

	/* Audience size, debounced. Automations have no audience to count. */
	useEffect(() => {
		if (!token || !campaign || !draft || campaign.automation) return;
		var h = setTimeout(() => {
			postApi("estimate_mkt_audience", token, { channel: campaign.channel, audience: draft.audience })
				.then((r) => setestimate(r?.count ?? 0)).catch(() => setestimate(null));
		}, 400);
		return () => clearTimeout(h);
	}, [token, campaign?.channel, JSON.stringify(draft?.audience)]);

	/* A running call list: agents work it, so just refresh the report now and then. */
	useEffect(() => {
		if (!token || campaign?.status !== "sending" || campaign?.channel !== "call") return;
		var t = setInterval(() => { if (!dirty) load(); }, 15000);
		return () => clearInterval(t);
	}, [token, campaign?.status, campaign?.channel, dirty]);

	/* Drive the queue while sending. */
	useEffect(() => {
		if (!token || campaign?.status !== "sending" || campaign?.channel === "call") return;
		var stop = false;
		var tick = () => postApi("process_mkt_queue", token, { id })
			.then((r) => {
				if (stop) return;
				setcampaign((c) => c ? { ...c, status: r.status ?? c.status, stats: r.stats ?? c.stats } : c);
				if (r.status !== "sending") load();
			})
			.catch(() => { });
		tick();
		var t = setInterval(tick, 4000);
		return () => { stop = true; clearInterval(t); };
	}, [token, campaign?.status, id]);

	function pick(c) {
		var o = {};
		FIELDS.forEach((k) => o[k] = c[k]);
		return o;
	}

	/* The editor echoes an empty document back as "<p></p>" on mount; that is not an edit. */
	var blankHtml = (h) => String(h ?? "").replace(/<p>(\s|<br\s*\/?>)*<\/p>/gi, "").trim();

	/*
		The rich-text editor re-formats stored HTML when it mounts (spacing,
		empty paragraphs, link attributes), so its first output is the saved
		message in its own words, not an edit. Body changes in the first second
		after the editor appears are taken as that.
	*/
	const editorShownAt = useRef(0);
	useEffect(() => { if (campaign && !editorShownAt.current) editorShownAt.current = Date.now(); }, [campaign]);

	function set(k, v) {
		setdraft((d) => ({ ...d, [k]: v }));
		if (k === "body" && (blankHtml(draft?.body) === blankHtml(v) || Date.now() - editorShownAt.current < 1000)) return;
		setdirty(true);
	}
	function setAudience(k, v) { set("audience", { ...draft.audience, [k]: v }); }

	async function save(quiet = false) {
		setbusy("save");
		try {
			await postApi("save_mkt_campaign", token, { id, ...draft, scheduled_at: campaign.status === "scheduled" ? campaign.scheduled_at : "" });
			setdirty(false);
			if (!quiet) addNotification({ type: "success", title: "Campaign saved", content: "" });
			await load();
			return true;
		} catch (e) {
			addNotification({ type: "error", title: "Campaign not saved", content: e.message });
			return false;
		} finally {
			setbusy("");
		}
	}

	async function action(route, body = {}, okTitle = "") {
		setbusy(route);
		try {
			var res = await postApi(route, token, { id, ...body });
			if (okTitle) addNotification({ type: "success", title: okTitle, content: res?.recipients ? (campaign?.channel === "call" ? `${res.recipients} contacts to call.` : `${res.recipients} recipients.`) : "" });
			await load();
			return res;
		} catch (e) {
			addNotification({ type: "error", title: "That didn't work", content: e.message });
		} finally {
			setbusy("");
		}
	}

	async function send(scheduledAt) {
		if (dirty && !(await save(true))) return;
		var res = await action("send_mkt_campaign", { scheduled_at: scheduledAt || "" }, scheduledAt ? "Campaign scheduled" : campaign.channel === "call" ? "Call list started" : "Sending started");
		if (res) { setsendOpen(false); if (!scheduledAt) settab("report"); }
	}

	if (!campaign && loadError) {
		return <div className="page-shell"><div className="text-sm text-gray-500">{loadError}</div></div>;
	}
	if (!campaign || !draft) {
		return <div className="page-shell"><div className="text-sm text-gray-500">Loading campaign…</div></div>;
	}

	var automation = campaign.automation ? (AUTOMATION_INFO[campaign.automation] ?? { label: "Automated email", when: "" }) : null;
	var isCall = campaign.channel === "call";
	/* A running call list can still get a better script or more agents. */
	var editable = !!automation || EDITABLE.includes(campaign.status) || (isCall && campaign.status === "sending");
	var isEmail = campaign.channel === "email";
	var s = campaign.stats ?? {};
	var hasReport = (s.total ?? 0) > 0;

	async function toggleAutomation() {
		var on = campaign.status !== "active";
		if (on && dirty && !(await save(true))) return;
		/* The abandoned-cart link opens the storefront, which is this app: its address is ours. */
		await action("set_mkt_automation", { active: on, store_url: window.location.origin }, on ? `${automation.label} turned on` : `${automation.label} turned off`);
	}

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-start justify-between gap-3">
				<div className="min-w-0">
					<Link href="/dashboard/marketing-campaigns" className="mb-1 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-900"><IconArrowLeft size={14} /> Campaigns</Link>
					<div className="flex flex-wrap items-center gap-2">
						<ChannelTag channel={campaign.channel} />
						{editable ? (
							<input className="min-w-0 rounded-md border border-transparent bg-transparent px-1 py-0.5 text-xl font-semibold text-gray-900 hover:border-gray-300 focus:border-[#634FE5] focus:outline-none !shadow-none"
								value={draft.name} onChange={(ev) => set("name", ev.target.value)} aria-label="Campaign name" />
						) : (
							<h1 className="text-xl font-semibold text-gray-900">{campaign.name}</h1>
						)}
						<Badge badges={CAMPAIGN_STATUS_BADGES} status={campaignStatus(campaign)} />
						{dirty && <span className="text-xs text-amber-600">Unsaved changes</span>}
					</div>
					<p className="mt-0.5 text-xs text-gray-500">
						{automation && <span className="inline-flex items-center gap-1"><IconBolt size={12} className="text-amber-500" />{automation.when} </span>}
						{campaign.status === "scheduled" && `Sends ${formatDateTime(campaign.scheduled_at)} (store time). `}
						{!automation && campaign.started_at && `Started ${formatDateTime(campaign.started_at)}. `}
						{campaign.finished_at && `Finished ${formatDateTime(campaign.finished_at)}.`}
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					{editable && !isCall && <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => settestOpen(true)}><IconFlask size={16} /> Send test</button>}
					{isCall && campaign.status === "sending" && <Link href="/dashboard/calls" className={TOOLBAR_BUTTON}><IconPhoneCall size={16} /> Open Calls screen</Link>}
					{editable && <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy || !dirty} onClick={() => save()}><IconDeviceFloppy size={16} /> {busy === "save" ? "Saving…" : "Save"}</button>}
					{automation && (
						<button type="button" className={campaign.status === "active" ? TOOLBAR_BUTTON : PRIMARY_BUTTON} disabled={!!busy} onClick={toggleAutomation}>
							<IconPower size={16} /> {campaign.status === "active" ? "Turn off" : "Turn on"}
						</button>
					)}
					{campaign.status === "scheduled" && <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => action("cancel_mkt_campaign", {}, "Back to draft")}><IconX size={16} /> Unschedule</button>}
					{(campaign.status === "draft" || campaign.status === "scheduled") && <button type="button" className={PRIMARY_BUTTON} disabled={!!busy} onClick={() => setsendOpen(true)}><IconSend size={16} /> {isCall ? "Start calling…" : "Send…"}</button>}
					{campaign.status === "sending" && <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => action("pause_mkt_campaign", {}, "Paused")}><IconPlayerPause size={16} /> Pause</button>}
					{campaign.status === "paused" && <button type="button" className={PRIMARY_BUTTON} disabled={!!busy} onClick={async () => { if (dirty && !(await save(true))) return; action("resume_mkt_campaign", {}, "Resumed"); }}><IconPlayerPlay size={16} /> Resume</button>}
					{(campaign.status === "sending" || campaign.status === "paused") && <button type="button" className={DANGER_BUTTON} disabled={!!busy} onClick={() => confirm("Cancel the rest of this campaign? Messages not yet sent will be skipped.") && action("cancel_mkt_campaign", {}, "Campaign cancelled")}><IconX size={16} /> Cancel</button>}
				</div>
			</div>

			{(hasReport || !editable) && (
				<div className="flex gap-1 border-b border-gray-200">
					{[["compose", editable ? "Compose" : "Content"], ["report", "Report"]].map(([k, label]) => (
						<button key={k} type="button" onClick={() => settab(k)}
							className={`-mb-px !rounded-none !border-0 !border-b-2 !bg-transparent px-3 py-2 text-sm !shadow-none cursor-pointer ${tab === k ? "!border-[#634FE5] font-semibold text-gray-900" : "!border-transparent text-gray-500 hover:text-gray-800"}`}>
							{label}
						</button>
					))}
				</div>
			)}

			{tab === "report" && hasReport && (isCall ? <CallReport campaign={campaign} token={token} /> : <Report campaign={campaign} token={token} />)}
			{tab === "report" && !hasReport && <div className={`${CARD} text-sm text-gray-500`}>Nothing has been sent yet.</div>}

			{tab === "compose" && (
				<div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
					<div className="flex flex-col gap-4 xl:col-span-2">
						{isEmail
							? <EmailCompose draft={draft} set={set} editable={editable} defaults={defaults} />
							: campaign.channel === "whatsapp"
								? <WhatsAppCompose draft={draft} set={set} editable={editable} token={token} />
								: isCall
									? <CallCompose draft={draft} set={set} editable={editable} token={token} />
									: campaign.channel === "voice"
										? <VoiceCompose draft={draft} set={set} editable={editable} token={token} />
										: <SmsCompose draft={draft} set={set} editable={editable} defaults={defaults} />}
					</div>
					<div className="flex flex-col gap-4">
						{automation ? (
							<div className={CARD}>
								<div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"><IconBolt size={16} className="text-amber-500" /> Automated</div>
								<p className="text-sm text-gray-600">{automation.when}</p>
								{automation.note && <p className="mt-2 text-xs text-gray-500">{automation.note}</p>}
								<p className="mt-3 text-xs tabular-nums text-gray-500">{s.sent ?? 0} sent so far{s.failed ? ` · ${s.failed} failed` : ""}{s.skipped ? ` · ${s.skipped} skipped` : ""}{s.queued ? ` · ${s.queued} waiting` : ""}</p>
								{campaign.automation === "abandoned_cart" && <AbandonedSettings token={token} addNotification={addNotification} recovered={campaign.recovered} />}
								{campaign.automation === "abandoned_cart_whatsapp" && <AbandonedSettings group="abandoned_whatsapp" token={token} addNotification={addNotification} recovered={campaign.recovered} />}
							</div>
						) : (
							<Audience draft={draft} setAudience={setAudience} editable={editable && campaign.status !== "paused" && !(campaign.recipients > 0)} lists={lists} tags={tags} estimate={estimate} channel={campaign.channel} recipients={campaign.recipients} />
						)}
						{isEmail && (
							<div className={CARD}>
								<div className="mb-3 text-sm font-semibold text-gray-900">Tracking</div>
								<div className="flex flex-col gap-3">
									<Toggle checked={draft.track_opens} onChange={(v) => editable && set("track_opens", v)} label="Track opens" hint="Adds an invisible image. Apple Mail and image blocking make this approximate." />
									<Toggle checked={draft.track_clicks} onChange={(v) => editable && set("track_clicks", v)} label="Track link clicks" hint="Links go through your store's server before the destination." />
								</div>
							</div>
						)}
						<MergeTags channel={campaign.channel} extra={automation?.tags} />
					</div>
				</div>
			)}

			<TestModal open={testOpen} onClose={() => settestOpen(false)} campaign={campaign} draft={draft} token={token} addNotification={addNotification} />
			<SendModal open={sendOpen} onClose={() => setsendOpen(false)} campaign={campaign} estimate={estimate} busy={!!busy} onSend={send} />
		</div>
	);
};


const EmailCompose = ({ draft, set, editable, defaults }) => {
	var [preview, setpreview] = useState(false);
	var fallback = defaults?.email ?? {};
	return (
		<>
			<div className={CARD}>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
					<div>
						<label className={LABEL}>From name</label>
						<input className={FIELD} disabled={!editable} value={draft.from_name} placeholder={fallback.from_name || "Store name"} onChange={(ev) => set("from_name", ev.target.value)} />
					</div>
					<div>
						<label className={LABEL}>From email</label>
						<input type="email" className={FIELD} disabled={!editable} value={draft.from_email} placeholder={fallback.from_email || "shop@example.com"} onChange={(ev) => set("from_email", ev.target.value)} />
					</div>
					<div>
						<label className={LABEL}>Reply-to</label>
						<input type="email" className={FIELD} disabled={!editable} value={draft.reply_to} placeholder={fallback.reply_to || "Same as from"} onChange={(ev) => set("reply_to", ev.target.value)} />
					</div>
				</div>
				<p className={HINT}>Blank fields use Marketing settings. Your SMTP server must be allowed to send as the from address.</p>
				<div className="mt-4 grid grid-cols-1 gap-4">
					<div>
						<label className={LABEL}>Subject</label>
						<input className={FIELD} disabled={!editable} value={draft.subject} placeholder="Hi {first_name|there}, something new for you" onChange={(ev) => set("subject", ev.target.value)} />
						<p className={HINT}>{draft.subject.length} characters{draft.subject.length > 60 ? " · long subjects get cut off on phones" : ""}</p>
					</div>
					<div>
						<label className={LABEL}>Preview text</label>
						<input className={FIELD} disabled={!editable} value={draft.preheader} placeholder="Shown after the subject in most inboxes" onChange={(ev) => set("preheader", ev.target.value)} />
					</div>
				</div>
			</div>

			<div className={CARD}>
				<div className="mb-2 flex items-center justify-between">
					<span className="text-sm font-semibold text-gray-900">Message</span>
					<button type="button" className="text-xs font-medium !border-0 !bg-transparent !p-0 text-[#634FE5] !shadow-none hover:underline cursor-pointer" onClick={() => setpreview(!preview)}>{preview ? "Back to editor" : "Preview"}</button>
				</div>
				{preview ? (
					<iframe title="Email preview" className="h-[520px] w-full rounded-lg border border-gray-200 bg-[#f4f4f7]"
						srcDoc={`<!doctype html><html><body style="margin:0;background:#f4f4f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1f2937"><div style="max-width:600px;margin:24px auto;background:#fff;border-radius:8px;padding:28px;font-size:15px;line-height:1.6">${draft.body || "<p style='color:#9ca3af'>Nothing written yet.</p>"}</div><div style="max-width:600px;margin:0 auto;padding:0 28px 24px;font-size:12px;color:#6b7280;text-align:center">${fallback.footer || ""}<br/><u>Unsubscribe</u></div></body></html>`} />
				) : (
					<HtmlEditor value={draft.body} onChange={(html) => set("body", html)} disabled={!editable} minHeight={360} placeholder="Write your email…" />
				)}
				<p className={HINT}>An unsubscribe link is added to the footer unless the message has its own {"{unsubscribe_url}"}.</p>
			</div>
		</>
	);
};


/*
	A WhatsApp campaign sends one approved template (Meta allows nothing else
	to start a conversation). The body holds JSON (ComboStoreMarketing::wa_config):
	the template's name and language, a header media link or text, values for
	{{1}}, {{2}}... (merge tags allowed), the dynamic end of URL buttons, and a
	copy of the template's text for the preview.
*/
const WA_EMPTY = { template: "", language: "", category: "", header: { format: "", url: "", text: "" }, body_params: [], button_params: [], preview: { header: "", body: "", footer: "", buttons: [] } };

function parseWa(body) {
	try {
		var c = JSON.parse(body || "{}");
		return { ...WA_EMPTY, ...c, header: { ...WA_EMPTY.header, ...(c.header ?? {}) }, preview: { ...WA_EMPTY.preview, ...(c.preview ?? {}) } };
	} catch (e) {
		return { ...WA_EMPTY };
	}
}

/* Template text with {{n}} filled by the values (or a sample for merge tags). */
function fillWa(text, values) {
	var sample = (v) => String(v || "").replace(/\{first_name(\|[^}]*)?\}/g, "Jane").replace(/\{name\}/g, "Jane").replace(/\{site_name\}/g, "Your store").replace(/\{[a-z_]+(\|([^}]*))?\}/g, (m, _a, fb) => fb ?? "…");
	return String(text || "").replace(/\{\{(\d+)\}\}/g, (m, n) => sample(values[Number(n) - 1]) || m);
}

const WhatsAppCompose = ({ draft, set, editable, token }) => {
	const { addNotification } = useCounterStore();
	var cfg = parseWa(draft.body);
	var [templates, settemplates] = useState(null);
	var [loading, setloading] = useState(false);

	function load() {
		setloading(true);
		postApi("get_mkt_wa_templates", token, {})
			.then((res) => settemplates(res?.templates ?? []))
			.catch((e) => { settemplates([]); addNotification({ type: "error", title: "Templates not loaded", content: e.message }); })
			.finally(() => setloading(false));
	}
	useEffect(() => { if (token) load(); }, [token]);

	function update(next) { set("body", JSON.stringify({ ...cfg, ...next })); }

	function choose(key) {
		var t = (templates ?? []).find((x) => `${x.name}|${x.language}` === key);
		if (!t) { update({ ...WA_EMPTY }); return; }
		var urlButtons = (t.parts.buttons ?? []).map((b) => (b.type === "url" && /\{\{1\}\}/.test(b.url) ? "" : null));
		update({
			template: t.name,
			language: t.language,
			category: (t.category || "").toLowerCase(),
			header: { format: t.parts.header?.format ?? "", url: "", text: "" },
			body_params: Array.from({ length: t.body_vars }, (_, i) => cfg.body_params[i] ?? (i === 0 ? "{first_name|there}" : "")),
			button_params: urlButtons.map((v) => (v === null ? "" : "")),
			preview: { header: t.parts.header?.format === "TEXT" ? t.parts.header.text : "", body: t.parts.body, footer: t.parts.footer, buttons: t.parts.buttons },
		});
	}

	var approved = (templates ?? []).filter((t) => t.status === "APPROVED");
	var others = (templates ?? []).filter((t) => t.status !== "APPROVED");
	var current = cfg.template ? `${cfg.template}|${cfg.language}` : "";
	var dynamicButtons = (cfg.preview.buttons ?? []).map((b, i) => ({ ...b, i })).filter((b) => b.type === "url" && /\{\{1\}\}/.test(b.url || ""));
	var headerMedia = ["IMAGE", "VIDEO", "DOCUMENT"].includes(cfg.header.format);
	var headerTextVar = cfg.header.format === "TEXT" && /\{\{1\}\}/.test(cfg.preview.header || "");

	return (
		<div className={CARD}>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_280px]">
				<div className="flex flex-col gap-4">
					<div>
						<div className="mb-1.5 flex items-center justify-between">
							<label className={LABEL + " !mb-0"}>Message template</label>
							<button type="button" onClick={load} disabled={loading} className="inline-flex items-center gap-1 text-xs font-medium !border-0 !bg-transparent !p-0 text-[#634FE5] !shadow-none hover:underline cursor-pointer"><IconRefresh size={13} /> {loading ? "Loading…" : "Refresh"}</button>
						</div>
						<select className={FIELD} disabled={!editable || !templates} value={current} onChange={(ev) => choose(ev.target.value)}>
							<option value="">{templates === null ? "Loading templates…" : approved.length ? "Choose an approved template" : "No approved templates yet"}</option>
							{approved.map((t) => <option key={`${t.name}|${t.language}`} value={`${t.name}|${t.language}`}>{t.name} ({t.language}) · {t.category.toLowerCase()}</option>)}
							{current && !approved.some((t) => `${t.name}|${t.language}` === current) && <option value={current}>{cfg.template} ({cfg.language}) · not approved now</option>}
						</select>
						<p className={HINT}>
							WhatsApp only lets a business start a conversation with a template Meta has approved. Create them in WhatsApp Manager (business.facebook.com); approval usually takes minutes to a day.
							{others.length > 0 && ` ${others.length} more waiting or rejected: ${others.slice(0, 3).map((t) => `${t.name} (${t.status.toLowerCase()})`).join(", ")}.`}
						</p>
					</div>

					{cfg.template && headerMedia && (
						<div>
							<label className={LABEL}>Header {cfg.header.format.toLowerCase()} link</label>
							<input className={FIELD} disabled={!editable} value={cfg.header.url} placeholder={`https://… (a public .${cfg.header.format === "IMAGE" ? "jpg or .png" : cfg.header.format === "VIDEO" ? "mp4" : "pdf"})`}
								onChange={(ev) => update({ header: { ...cfg.header, url: ev.target.value } })} />
							<p className={HINT}>Must be a public https address WhatsApp can download. A product photo from your Media library works. In an abandoned-cart message, <code className="font-mono">{"{cart_image|https://…}"}</code> uses the first item's picture, with that link when it has none.</p>
						</div>
					)}

					{cfg.template && headerTextVar && (
						<div>
							<label className={LABEL}>Header variable</label>
							<input className={FIELD} disabled={!editable} value={cfg.header.text} onChange={(ev) => update({ header: { ...cfg.header, text: ev.target.value } })} />
						</div>
					)}

					{cfg.template && cfg.body_params.length > 0 && (
						<div className="flex flex-col gap-2">
							<div className={LABEL + " !mb-0"}>Variables</div>
							{cfg.body_params.map((v, i) => (
								<div key={i} className="flex items-center gap-2">
									<span className="w-12 shrink-0 font-mono text-xs text-gray-500">{`{{${i + 1}}}`}</span>
									<input className={FIELD} disabled={!editable} value={v} placeholder={i === 0 ? "{first_name|there}" : "20%"}
										onChange={(ev) => update({ body_params: cfg.body_params.map((x, j) => (j === i ? ev.target.value : x)) })} />
								</div>
							))}
							<p className={HINT}>Text or merge tags, per recipient. WhatsApp refuses an empty variable, so give tags a fallback: <code className="font-mono">{"{first_name|there}"}</code>.</p>
						</div>
					)}

					{cfg.template && dynamicButtons.map((b) => (
						<div key={b.i}>
							<label className={LABEL}>“{b.text}” button: end of its link</label>
							<input className={FIELD} disabled={!editable} value={cfg.button_params[b.i] ?? ""} placeholder="eid-sale"
								onChange={(ev) => { var next = [...cfg.button_params]; while (next.length <= b.i) next.push(""); next[b.i] = ev.target.value; update({ button_params: next }); }} />
							<p className={HINT}>Fills the {"{{1}}"} at the end of {b.url}.</p>
						</div>
					))}

					<p className="rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-600">
						Reaches only contacts with WhatsApp consent. Add a “Stop promotions” quick-reply button or “Reply STOP to opt out” to your template: replies like that unsubscribe them automatically (Marketing settings › WhatsApp webhook).
					</p>
				</div>

				<div className="rounded-2xl bg-[#e5ddd5] p-4">
					<div className="mb-2 flex items-center justify-center gap-1 text-[11px] text-gray-600"><IconBrandWhatsapp size={13} /> Preview</div>
					{!cfg.template ? (
						<div className="rounded-xl bg-white/70 px-3 py-6 text-center text-xs text-gray-500">Choose a template to see it here.</div>
					) : (
						<div className="overflow-hidden rounded-xl rounded-tl-sm bg-white text-sm text-gray-800 shadow-sm">
							{headerMedia && (cfg.header.format === "IMAGE" && /^https?:\/\//.test(cfg.header.url)
								? <img src={cfg.header.url} alt="" className="block h-36 w-full object-cover" />
								: <div className="flex h-24 items-center justify-center bg-gray-100 text-xs text-gray-500">{cfg.header.format.toLowerCase()}</div>)}
							<div className="px-3 py-2">
								{cfg.preview.header && <div className="mb-1 font-semibold">{fillWa(cfg.preview.header, [cfg.header.text])}</div>}
								<div className="whitespace-pre-wrap break-words">{fillWa(cfg.preview.body, cfg.body_params)}</div>
								{cfg.preview.footer && <div className="mt-1 text-xs text-gray-400">{cfg.preview.footer}</div>}
							</div>
							{(cfg.preview.buttons ?? []).map((b, i) => (
								<div key={i} className="border-t border-gray-100 px-3 py-2 text-center text-sm font-medium text-sky-600">{b.text}</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

/*
	A call list's settings (its body, JSON; ComboStoreMarketing::call_config):
	the script agents see (merge tags filled per contact), who may work it,
	and how often to retry no answer / busy.
*/
function parseCall(body) {
	try {
		var c = JSON.parse(body || "{}");
		return { script: c.script ?? "", agents: Array.isArray(c.agents) ? c.agents : [], max_attempts: c.max_attempts ?? 3, retry_hours: c.retry_hours ?? 4 };
	} catch (e) {
		return { script: "", agents: [], max_attempts: 3, retry_hours: 4 };
	}
}

const CallCompose = ({ draft, set, editable, token }) => {
	var cfg = parseCall(draft.body);
	var [agents, setagents] = useState(null);

	useEffect(() => {
		if (!token) return;
		postApi("get_mkt_call_agents", token, {}).then((r) => setagents(r?.agents ?? [])).catch(() => setagents([]));
	}, [token]);

	function update(next) { set("body", JSON.stringify({ ...cfg, ...next })); }
	function toggleAgent(id) { update({ agents: cfg.agents.includes(id) ? cfg.agents.filter((x) => x !== id) : [...cfg.agents, id] }); }

	var roleLabel = (roles) => roles.includes("administrator") ? "Admin" : roles.includes("store_manager") ? "Store manager" : "Support agent";

	return (
		<>
			<div className={CARD}>
				<div className="mb-2 text-sm font-semibold text-gray-900">Call script</div>
				<HtmlEditor value={cfg.script} onChange={(html) => update({ script: html })} disabled={!editable} minHeight={260} placeholder="Hi {first_name|there}, this is … from {site_name}. I'm calling about …" />
				<p className={HINT}>What agents see while they call: an opening line, what to offer, answers to common questions. Merge tags are filled for each contact.</p>
			</div>

			<div className={CARD}>
				<div className="mb-3 text-sm font-semibold text-gray-900">Agents</div>
				{agents === null && <p className="text-xs text-gray-500">Loading…</p>}
				{agents && !agents.length && <p className="text-xs text-gray-500">No admins, store managers or support agents yet.</p>}
				<div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
					{(agents ?? []).map((a) => (
						<label key={a.id} className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm ${cfg.agents.includes(a.id) ? "border-[#634FE5] bg-indigo-50" : "border-gray-200"} ${editable ? "cursor-pointer" : "opacity-60"}`}>
							<span className="inline-flex items-center gap-2"><input type="checkbox" className="accent-[#634FE5]" disabled={!editable} checked={cfg.agents.includes(a.id)} onChange={() => toggleAgent(a.id)} /> {a.name}</span>
							<span className="text-[11px] text-gray-400">{roleLabel(a.roles)}</span>
						</label>
					))}
				</div>
				<p className={HINT}>{cfg.agents.length ? `Only these ${cfg.agents.length} can work this list (admins always can).` : "None ticked: every admin, store manager and support agent can work this list."}</p>
			</div>

			<div className={CARD}>
				<div className="mb-3 text-sm font-semibold text-gray-900">When nobody answers</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<label className={LABEL}>Tries per contact</label>
						<select className={FIELD} disabled={!editable} value={cfg.max_attempts} onChange={(ev) => update({ max_attempts: Number(ev.target.value) })}>
							{[1, 2, 3, 4, 5, 7, 10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "try" : "tries"}</option>)}
						</select>
					</div>
					<div>
						<label className={LABEL}>Try again after</label>
						<select className={FIELD} disabled={!editable} value={cfg.retry_hours} onChange={(ev) => update({ retry_hours: Number(ev.target.value) })}>
							{[1, 2, 4, 8, 24, 48].map((h) => <option key={h} value={h}>{h < 24 ? `${h} hour${h === 1 ? "" : "s"}` : `${h / 24} day${h === 24 ? "" : "s"}`}</option>)}
						</select>
					</div>
				</div>
				<p className={HINT}>“No answer” and “Busy” put the contact back after this wait; after the last try they count as unreachable. “Call back later” comes back at the time the agent picks, for that agent.</p>
			</div>
		</>
	);
};

/*
	A voice campaign's message (its body, JSON; ComboStoreVoice::broadcast_config):
	text spoken by text-to-speech, and optional keys the listener may press.
*/
function parseVoice(body) {
	try {
		var c = JSON.parse(body || "{}");
		return { text: c.text ?? "", dtmf_options: c.dtmf_options && typeof c.dtmf_options === "object" && !Array.isArray(c.dtmf_options) ? c.dtmf_options : {}, ivr_id: Number(c.ivr_id) || 0 };
	} catch (e) {
		return { text: "", dtmf_options: {}, ivr_id: 0 };
	}
}

const VOICE_KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "#"];

const VoiceCompose = ({ draft, set, editable, token }) => {
	var cfg = parseVoice(draft.body);
	var [me, setme] = useState(null);
	var ready = me === null ? null : !!me.ready;
	/* Providers without text-to-speech (HelloPBX) play an IVR built in their own panel. */
	var playsIvr = !!me && me.capabilities?.tts === false && !!me.capabilities?.ivr;
	var keys = Object.entries(cfg.dtmf_options);

	useEffect(() => {
		if (!token) return;
		postApi("get_voice_me", token, {}).then(setme).catch(() => setme({ ready: false }));
	}, [token]);

	function update(next) { set("body", JSON.stringify({ ...cfg, ...next })); }
	function setKeys(entries) { update({ dtmf_options: Object.fromEntries(entries) }); }

	return (
		<>
			{ready === false && (
				<div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
					The voice provider is not set up yet. Add it in <Link href="/dashboard/marketing-settings#voice" className="font-medium underline">Marketing settings › Voice</Link> before starting.
				</div>
			)}
			{ready && me?.capabilities?.broadcast === false && (
				<div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
					{me.provider_label || "Your phone system"} has no API for voice campaigns, so this campaign cannot be sent with it. Order confirmation calls and click-to-call still work. To send voice campaigns, choose a provider that supports them in <Link href="/dashboard/marketing-settings#voice" className="font-medium underline">Marketing settings › Voice</Link>.
				</div>
			)}
			{playsIvr ? (
				<div className={CARD}>
					<div className="mb-2 text-sm font-semibold text-gray-900">What the call plays</div>
					<label className={LABEL}>{me.provider_label || "Provider"} IVR ID</label>
					<input type="number" min={1} className={FIELD + " sm:!w-48"} disabled={!editable} value={cfg.ivr_id || ""} placeholder="e.g. 12" onChange={(ev) => update({ ivr_id: Number(ev.target.value) || 0 })} />
					<p className={HINT}>{me.provider_label || "This provider"} has no text-to-speech: record the message and set its keys in its IVR Builder, then enter that IVR's ID here. Each contact hears the same recording.</p>
				</div>
			) : (
				<div className={CARD}>
					<div className="mb-2 text-sm font-semibold text-gray-900">What the call says</div>
					<textarea rows={6} className={FIELD} disabled={!editable} maxLength={4096} value={cfg.text} onChange={(ev) => update({ text: ev.target.value })}
						placeholder="Hello {first_name|there}, this is {site_name}. Our winter sale starts today. Press 1 if you would like a call back." />
					<div className="mt-1 flex justify-between gap-3">
						<p className={HINT}>Read out by text-to-speech when they answer. Write it the way you would say it. Merge tags are filled for each contact.</p>
						<span className="shrink-0 text-xs tabular-nums text-gray-400">{cfg.text.length}/4096</span>
					</div>
				</div>
			)}

			<div className={CARD}>
				<div className="mb-1 text-sm font-semibold text-gray-900">{playsIvr ? "Names for the keys" : "Keys they can press"} <span className="font-normal text-gray-400">(optional)</span></div>
				<p className="mb-3 text-xs text-gray-500">{playsIvr ? "The keys are set in the IVR; name them here for the report (the IVR's own option names are used when it sends them)." : "Turn the call into a quick survey. Each key gets a name for the report. Say the options in the message too."}</p>
				<div className="flex flex-col gap-2">
					{keys.map(([k, label], i) => (
						<div key={i} className="flex items-center gap-2">
							<select className={FIELD + " !w-20"} disabled={!editable} value={k} onChange={(ev) => setKeys(keys.map((e, j) => j === i ? [ev.target.value, e[1]] : e))}>
								{VOICE_KEYS.filter((x) => x === k || !(x in cfg.dtmf_options)).map((x) => <option key={x} value={x}>{x}</option>)}
							</select>
							<input className={FIELD} disabled={!editable} maxLength={60} value={label} placeholder="e.g. Wants a call back" onChange={(ev) => setKeys(keys.map((e, j) => j === i ? [e[0], ev.target.value] : e))} />
							{editable && <button type="button" className={TOOLBAR_BUTTON + " !px-2"} title="Remove" onClick={() => setKeys(keys.filter((_, j) => j !== i))}><IconX size={14} /></button>}
						</div>
					))}
				</div>
				{editable && keys.length < 10 && (
					<button type="button" className={TOOLBAR_BUTTON + " mt-3"} onClick={() => { var free = VOICE_KEYS.find((x) => !(x in cfg.dtmf_options)); if (free) setKeys([...keys, [free, ""]]); }}>Add a key</button>
				)}
				<p className={HINT}>A key without a name is not saved.</p>
			</div>
		</>
	);
};

/* A call list's report: progress, outcomes, agents, and every contact with its notes. */
const CallReport = ({ campaign, token }) => {
	const { addNotification } = useCounterStore();
	var s = campaign.stats;
	var calls = campaign.calls ?? { outcomes: {}, agents: [], calls: 0, open_now: 0, callbacks: 0, retrying: 0 };
	var done = s.sent + s.skipped;
	var positive = (calls.outcomes.interested ?? 0) + (calls.outcomes.ordered ?? 0);

	var [data, setdata] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, per_page: 20, filter: "" });
	var [loading, setloading] = useState(false);

	const fetchRows = useCallback(() => {
		setloading(true);
		postApi("get_mkt_campaign_messages", token, { campaign_id: campaign.id, ...queryPrams })
			.then((res) => setdata({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 }))
			.catch((e) => addNotification({ type: "error", title: "Calls not loaded", content: e.message }))
			.finally(() => setloading(false));
	}, [token, campaign.id, queryPrams]);

	const [debounced, setdebounced] = useState(queryPrams);
	useEffect(() => { var h = setTimeout(() => setdebounced(queryPrams), 400); return () => clearTimeout(h); }, [queryPrams]);
	useEffect(() => { fetchRows(); }, [debounced, done, calls.calls]);

	var stateOf = (m) => m.status === "calling" ? { label: "On a call", classes: "bg-blue-50 text-blue-700 ring-blue-200" }
		: m.status === "queued" ? (m.outcome === "callback" ? { label: "Callback booked", classes: "bg-violet-50 text-violet-700 ring-violet-200" } : m.outcome ? { label: "Retry later", classes: "bg-amber-50 text-amber-700 ring-amber-200" } : { label: "Waiting", classes: "bg-gray-100 text-gray-600 ring-gray-200" })
			: m.status === "skipped" ? { label: "Skipped", classes: "bg-gray-100 text-gray-500 ring-gray-200" }
				: CALL_OUTCOMES[m.outcome] ?? { label: "Done", classes: "bg-gray-100 text-gray-600 ring-gray-200" };

	var columns = {
		id: { id: "id", label: "Contact", callback: (m) => (
			<td data-label="Contact" className="!px-5 py-3 text-left" key={`r-${m.id}`}>
				<div className="flex flex-col"><span className="text-sm text-gray-900">{contactName(m) || m.to_addr}</span><span className="text-xs tabular-nums text-gray-500">{m.to_addr}</span></div>
			</td>
		), classes: "text-left text-gray-600 w-56" },
		state: { id: "state", label: "Result", callback: (m, k) => {
			var st = stateOf(m);
			return (
				<td data-label="Result" className="!px-5 py-3 text-left" key={k}>
					<div className="flex flex-col items-start gap-1">
						<span className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ring-inset ${st.classes}`}>{st.label}</span>
						{(m.status === "queued" && m.send_after) && <span className="text-[11px] text-gray-400">{formatDateTime(m.send_after)}</span>}
						{m.error && <span className="text-[11px] text-gray-400">{m.error}</span>}
					</div>
				</td>
			);
		}, classes: "text-left text-gray-600 w-48" },
		agent: { id: "agent", label: "Agent", callback: (m, k) => (
			<td data-label="Agent" className="!px-5 py-3 text-left text-sm text-gray-700" key={k}>{m.agent_name || <span className="text-gray-300">—</span>}<div className="text-[11px] text-gray-400">{Number(m.attempts) > 0 ? `${m.attempts} ${Number(m.attempts) === 1 ? "call" : "calls"}` : ""}</div></td>
		), classes: "text-left text-gray-600 w-40" },
		notes: { id: "notes", label: "Notes", callback: (m, k) => (
			<td data-label="Notes" className="!px-5 py-3 text-left" key={k}>
				{m.notes ? <div className="max-w-md whitespace-pre-line text-xs text-gray-600" title={m.notes}>{String(m.notes).split("\n").slice(0, 3).join("\n")}</div> : <span className="text-sm text-gray-300">—</span>}
			</td>
		), classes: "text-left text-gray-600" },
	};

	return (
		<div className="flex flex-col gap-4">
			<div className={CARD}>
				<div className="mb-2 flex items-center justify-between text-sm">
					<span className="font-medium text-gray-900">{campaign.status === "sending" ? "Agents are calling" : campaign.status === "paused" ? "Paused" : "Finished"}</span>
					<span className="tabular-nums text-gray-500">{done}/{s.total} done</span>
				</div>
				<div className="h-2 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-[#634FE5] transition-all" style={{ width: `${s.total ? Math.round(done / s.total * 100) : 0}%` }} /></div>
				<p className={HINT}>{calls.open_now} on a call now · {calls.callbacks} callbacks booked · {calls.retrying} to retry. Updates every 15 seconds.</p>
			</div>

			<div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
				<StatTile label="Contacts" value={s.total} />
				<StatTile label="Done" value={done} tone="green" sub={pct(done, s.total)} />
				<StatTile label="Calls made" value={calls.calls} tone="blue" sub={calls.reached ? `${(calls.calls / calls.reached).toFixed(1)} per contact called` : ""} />
				<StatTile label="Interested or ordered" value={positive} tone="violet" sub={pct(positive, s.sent)} />
				<StatTile label="Do not call" value={calls.outcomes.do_not_call ?? 0} tone={calls.outcomes.do_not_call ? "rose" : "gray"} sub={`${calls.outcomes.wrong_number ?? 0} wrong numbers`} />
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className={CARD}>
					<div className="mb-3 text-sm font-semibold text-gray-900">Outcomes</div>
					{!Object.keys(calls.outcomes).length && <p className="text-xs text-gray-500">No finished calls yet.</p>}
					<ul className="flex flex-col gap-2">
						{Object.entries(CALL_OUTCOMES).filter(([k]) => calls.outcomes[k]).map(([k, o]) => (
							<li key={k} className="flex items-center gap-3 text-sm">
								<span className="w-40 shrink-0 text-gray-700">{o.label}</span>
								<span className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100"><span className={`block h-full rounded-full ${o.positive ? "bg-emerald-500" : k === "do_not_call" || k === "wrong_number" ? "bg-rose-400" : "bg-gray-400"}`} style={{ width: `${s.sent ? Math.round(calls.outcomes[k] / s.sent * 100) : 0}%` }} /></span>
								<span className="w-10 text-right tabular-nums text-gray-600">{calls.outcomes[k]}</span>
							</li>
						))}
					</ul>
				</div>
				<div className={CARD}>
					<div className="mb-3 text-sm font-semibold text-gray-900">Agents</div>
					{!calls.agents.length && <p className="text-xs text-gray-500">Nobody has called yet.</p>}
					{calls.agents.length > 0 && (
						<table className="w-full text-sm">
							<thead><tr className="text-left text-xs text-gray-500"><th className="pb-2 font-medium">Agent</th><th className="pb-2 text-right font-medium">Calls</th><th className="pb-2 text-right font-medium">Done</th><th className="pb-2 text-right font-medium">Positive</th><th className="pb-2 text-right font-medium">Callbacks</th></tr></thead>
							<tbody className="divide-y divide-gray-100">
								{calls.agents.map((a) => (
									<tr key={a.id}><td className="py-1.5 text-gray-800">{a.name}</td><td className="py-1.5 text-right tabular-nums">{a.calls}</td><td className="py-1.5 text-right tabular-nums">{a.done}</td><td className="py-1.5 text-right tabular-nums text-emerald-700">{a.positive}</td><td className="py-1.5 text-right tabular-nums text-violet-700">{a.callbacks}</td></tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>

			<div className="flex flex-wrap gap-2">
				<select className={FILTER_SELECT} value={queryPrams.filter} onChange={(ev) => setqueryPrams({ ...queryPrams, filter: ev.target.value, paged: 1 })}>
					<option value="">Everyone on the list</option>
					<option value="queued">Not finished</option>
					<option value="calling">On a call now</option>
					<option value="sent">Done</option>
					{Object.entries(CALL_OUTCOMES).map(([k, o]) => <option key={k} value={`outcome:${k}`}>{o.label}</option>)}
				</select>
			</div>

			<EntriesTable queryPrams={queryPrams} columns={columns} entries={data} itemPath={""}
				onChange={(next) => next && setqueryPrams(next.keyword !== queryPrams.keyword ? { ...next, paged: 1 } : next)}
				loading={loading} selectedRows={[]} onSelectRows={() => { }} onRefreshRequest={fetchRows} />
		</div>
	);
};

const SmsCompose = ({ draft, set, editable, defaults }) => {
	var ref = useRef(null);
	var footer = defaults?.sms?.footer ? "\n" + defaults.sms.footer : "";
	var info = smsSegments((draft.body || "") + footer);

	function insert(tag) {
		var el = ref.current;
		var v = draft.body || "";
		if (!el) { set("body", v + tag); return; }
		var a = el.selectionStart ?? v.length, b = el.selectionEnd ?? v.length;
		set("body", v.slice(0, a) + tag + v.slice(b));
		requestAnimationFrame(() => { el.focus(); el.selectionStart = el.selectionEnd = a + tag.length; });
	}

	return (
		<div className={CARD}>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_260px]">
				<div>
					<label className={LABEL}>Message</label>
					<textarea ref={ref} rows={7} className={FIELD} disabled={!editable} value={draft.body} maxLength={1600}
						placeholder="Hi {first_name|there}! 20% off everything at {site_name} today: {site_url}"
						onChange={(ev) => set("body", ev.target.value)} />
					<div className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs">
						<span className={info.segments > 3 ? "text-amber-600" : "text-gray-500"}>
							{info.chars} chars · {info.segments} {info.segments === 1 ? "part" : "parts"} · {info.encoding}{info.encoding === "Unicode" ? " (70 per part)" : ""}
						</span>
						<span className="text-gray-400">Merge tags change the length per person.</span>
					</div>
					{editable && (
						<div className="mt-3 flex flex-wrap gap-1">
							{MERGE_TAGS.filter((t) => t.tag !== "{unsubscribe_url}").map((t) => (
								<button key={t.tag} type="button" title={t.label} onClick={() => insert(t.tag)}
									className="rounded-md !border !border-gray-200 !bg-gray-50 px-1.5 py-0.5 font-mono text-[11px] text-gray-700 !shadow-none hover:!bg-gray-100 cursor-pointer">{t.tag}</button>
							))}
						</div>
					)}
					{defaults?.sms?.footer && <p className={HINT}>Every SMS ends with your footer: “{defaults.sms.footer}”.</p>}
				</div>
				<div className="rounded-2xl bg-gray-100 p-4">
					<div className="mb-2 text-center text-[11px] text-gray-500">{defaults?.sms?.sender_id || "Sender"}</div>
					<div className="whitespace-pre-wrap break-words rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
						{((draft.body || "").replace(/\{first_name(\|[^}]*)?\}/g, "Jane").replace(/\{name\}/g, "Jane").replace(/\{site_name\}/g, "Your store") + footer) || <span className="text-gray-400">Your message</span>}
					</div>
				</div>
			</div>
		</div>
	);
};


const Audience = ({ draft, setAudience, editable, lists, tags, estimate, channel, recipients }) => {
	var a = draft.audience ?? { all: false, lists: [], tags: [], exclude_lists: [] };
	var toggle = (key, value) => setAudience(key, a[key].includes(value) ? a[key].filter((x) => x !== value) : [...a[key], value]);

	return (
		<div className={CARD}>
			<div className="mb-3 flex items-center justify-between">
				<span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900"><IconUsers size={16} /> Audience</span>
				<span className="text-xs tabular-nums text-gray-600">
					{recipients > 0 ? `${recipients} recipients` : estimate === null ? "…" : (channel === "call" || channel === "voice" ? `${estimate} ${estimate === 1 ? "person" : "people"} to call` : `${estimate} ${channelLabel(channel)} subscribers`)}
				</span>
			</div>
			{!editable && recipients > 0 && <p className="mb-3 text-xs text-gray-500">Recipients were fixed when sending started.</p>}
			<div className={`flex flex-col gap-4 ${editable ? "" : "pointer-events-none opacity-60"}`}>
				<label className="flex items-center gap-2 text-sm text-gray-800">
					<input type="checkbox" className="accent-[#634FE5]" checked={a.all} onChange={(ev) => setAudience("all", ev.target.checked)} />
					All subscribed contacts
				</label>
				{!a.all && (
					<>
						<div>
							<div className={LABEL}>Lists</div>
							{!lists.length && <p className="text-xs text-gray-500">No lists yet.</p>}
							<div className="flex flex-col gap-1.5">
								{lists.map((l) => (
									<label key={l.id} className="flex items-center justify-between gap-2 text-sm text-gray-700">
										<span className="inline-flex items-center gap-2"><input type="checkbox" className="accent-[#634FE5]" checked={a.lists.includes(l.id)} onChange={() => toggle("lists", l.id)} /> {l.name}</span>
										<span className="text-xs tabular-nums text-gray-400">{l[CHANNELS[channel]?.listCount ?? "email_subscribed"] ?? 0}</span>
									</label>
								))}
							</div>
						</div>
						<div>
							<div className={LABEL}>Tags</div>
							{!tags.length && <p className="text-xs text-gray-500">No tags yet.</p>}
							<div className="flex flex-wrap gap-1">
								{tags.map((t) => (
									<button key={t.tag} type="button" onClick={() => toggle("tags", t.tag)}
										className={`rounded-md !border px-1.5 py-0.5 text-[11px] !shadow-none cursor-pointer ${a.tags.includes(t.tag) ? "!border-[#634FE5] !bg-indigo-50 text-indigo-800" : "!border-gray-200 !bg-white text-gray-600"}`}>
										#{t.tag}
									</button>
								))}
							</div>
						</div>
						<p className="text-xs text-gray-500">Anyone on a chosen list <em>or</em> with a chosen tag.</p>
					</>
				)}
				{lists.length > 0 && (
					<div>
						<div className={LABEL}>Leave out</div>
						<div className="flex flex-col gap-1.5">
							{lists.map((l) => (
								<label key={l.id} className="inline-flex items-center gap-2 text-sm text-gray-700">
									<input type="checkbox" className="accent-rose-600" checked={a.exclude_lists.includes(l.id)} onChange={() => toggle("exclude_lists", l.id)} /> {l.name}
								</label>
							))}
						</div>
					</div>
				)}
				<p className="text-xs text-gray-400">Only contacts subscribed to {CHANNELS[channel]?.audience ?? CHANNELS.email.audience} are counted.</p>
			</div>
		</div>
	);
};


/*
	An abandoned-cart automation's own settings (Marketing settings group
	"abandoned", or "abandoned_whatsapp" for the WhatsApp one): how long to
	wait, who may get it (email only: WhatsApp always needs consent), how
	often per person; and what it brought back (orders within 7 days of one).
*/
const AbandonedSettings = ({ token, addNotification, recovered, group = "abandoned" }) => {
	var isWa = group === "abandoned_whatsapp";
	const [a, seta] = useState(null);
	const [saving, setsaving] = useState(false);
	const [dirty, setdirty] = useState(false);

	useEffect(() => {
		if (!token) return;
		postApi("get_marketing_settings", token, {}).then((res) => seta(res?.[group] ?? null)).catch(() => { });
	}, [token]);

	function set(k, v) { seta((x) => ({ ...x, [k]: v })); setdirty(true); }

	function save() {
		setsaving(true);
		postApi("update_marketing_settings", token, { [group]: a })
			.then(() => { setdirty(false); addNotification({ type: "success", title: "Abandoned cart settings saved", content: "" }); })
			.catch((e) => addNotification({ type: "error", title: "Not saved", content: e.message }))
			.finally(() => setsaving(false));
	}

	if (!a) return null;
	var hours = a.delay_minutes / 60;

	return (
		<div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
			{recovered && (
				<div className="grid grid-cols-3 gap-2 text-center">
					<div className="rounded-lg bg-gray-50 py-2"><div className="text-base font-semibold tabular-nums text-gray-900">{recovered.carts}</div><div className="text-[11px] text-gray-500">{isWa ? "messages sent" : "emails sent"}</div></div>
					<div className="rounded-lg bg-emerald-50 py-2"><div className="text-base font-semibold tabular-nums text-emerald-700">{recovered.orders}</div><div className="text-[11px] text-emerald-700">orders after</div></div>
					<div className="rounded-lg bg-emerald-50 py-2"><div className="truncate px-1 text-base font-semibold tabular-nums text-emerald-700" title={recovered.revenue_label}>{recovered.revenue_label}</div><div className="text-[11px] text-emerald-700">revenue</div></div>
				</div>
			)}
			<div>
				<label className={LABEL}>Wait before sending</label>
				<select className={FIELD} value={a.delay_minutes} onChange={(ev) => set("delay_minutes", Number(ev.target.value))}>
					{[15, 30, 60, 120, 240, 720, 1440, 2880].map((m) => <option key={m} value={m}>{m < 60 ? `${m} minutes` : m < 1440 ? `${m / 60} hour${m === 60 ? "" : "s"}` : `${m / 1440} day${m === 1440 ? "" : "s"}`}</option>)}
					{![15, 30, 60, 120, 240, 720, 1440, 2880].includes(a.delay_minutes) && <option value={a.delay_minutes}>{hours} hours</option>}
				</select>
			</div>
			{isWa ? (
				<p className={HINT}>Only shoppers who opted in to WhatsApp (the checkout box, the sign-up form, or set on their contact), and never anyone who replied STOP.</p>
			) : (
			<div>
				<label className={LABEL}>Who gets it</label>
				<select className={FIELD} value={a.audience} onChange={(ev) => set("audience", ev.target.value)}>
					<option value="anyone">Anyone who typed their email at checkout</option>
					<option value="subscribers">Only email subscribers</option>
				</select>
				<p className={HINT}>Never people who unsubscribed or whose email bounced. Shoppers who did not subscribe are added to Contacts as “Not subscribed”: your campaigns don't reach them. Check what your local rules say about emailing them.</p>
			</div>
			)}
			<div>
				<label className={LABEL}>At most one every</label>
				<select className={FIELD} value={a.cooldown_days} onChange={(ev) => set("cooldown_days", Number(ev.target.value))}>
					{[0, 1, 3, 7, 14, 30].map((d) => <option key={d} value={d}>{d === 0 ? "No limit (one per checkout)" : `${d} day${d === 1 ? "" : "s"} per person`}</option>)}
				</select>
			</div>
			<button type="button" className={TOOLBAR_BUTTON} disabled={!dirty || saving} onClick={save}>{saving ? "Saving…" : "Save these settings"}</button>
		</div>
	);
};

const MergeTags = ({ channel, extra = [] }) => {
	var [copied, setcopied] = useState("");
	return (
		<div className={CARD}>
			<div className="mb-1 text-sm font-semibold text-gray-900">Personalize</div>
			<p className="mb-3 text-xs text-gray-500">Click to copy. Add a fallback with a bar: <code className="font-mono">{"{first_name|friend}"}</code>.</p>
			<ul className="flex flex-col gap-1">
				{[...extra, ...MERGE_TAGS].filter((t) => channel === "email" || t.tag !== "{unsubscribe_url}").map((t) => (
					<li key={t.tag}>
						<button type="button" onClick={() => navigator.clipboard?.writeText(t.tag).then(() => { setcopied(t.tag); setTimeout(() => setcopied(""), 1200); })}
							className="flex w-full items-center justify-between gap-2 rounded-md !border-0 !bg-transparent px-1.5 py-1 text-left text-xs !shadow-none hover:!bg-gray-50 cursor-pointer">
							<code className="font-mono text-gray-800">{t.tag}</code>
							<span className="inline-flex items-center gap-1 text-gray-400">{copied === t.tag ? "Copied" : t.label} <IconCopy size={12} /></span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};


const TestModal = ({ open, onClose, campaign, draft, token, addNotification }) => {
	var [to, setto] = useState("");
	var [sending, setsending] = useState(false);
	var isEmail = campaign.channel === "email";
	var isVoice = campaign.channel === "voice";

	function sendTest() {
		setsending(true);
		postApi("send_mkt_test", token, { campaign_id: campaign.id, channel: campaign.channel, to, ...draft })
			.then(() => { addNotification({ type: "success", title: isVoice ? "Test call placed" : "Test sent", content: isVoice ? `Calling ${to} now.` : `Sent to ${to}.` }); onClose(); })
			.catch((e) => addNotification({ type: "error", title: "Test not sent", content: e.message }))
			.finally(() => setsending(false));
	}

	return (
		<Modal open={open} onClose={onClose} title={isEmail ? "Send a test email" : isVoice ? "Place a test call" : `Send a test ${channelLabel(campaign.channel)}`}
			footer={<>
				<button type="button" className={TOOLBAR_BUTTON} onClick={onClose}>Cancel</button>
				<button type="button" className={PRIMARY_BUTTON} disabled={sending || !to.trim()} onClick={sendTest}>{sending ? (isVoice ? "Calling…" : "Sending…") : (isVoice ? "Call now" : "Send test")}</button>
			</>}>
			<label className={LABEL}>{isEmail ? "Email address" : "Phone number"}</label>
			<input className={FIELD} autoFocus type={isEmail ? "email" : "tel"} value={to} onChange={(ev) => setto(ev.target.value)} onKeyDown={(ev) => ev.key === "Enter" && to.trim() && sendTest()} />
			<p className={HINT}>Uses what is in the editor now, saved or not. Merge tags are filled from the contact with this {isEmail ? "address" : "number"}, or sample values. {isVoice ? "A real call, placed now whatever the calling hours; it is charged like any call." : "Tracking is off for tests."}</p>
		</Modal>
	);
};


const SendModal = ({ open, onClose, campaign, estimate, busy, onSend }) => {
	var [mode, setmode] = useState("now");
	var [at, setat] = useState("");
	var isCall = campaign.channel === "call";
	useEffect(() => {
		if (!open) return;
		setmode(campaign.status === "scheduled" ? "later" : "now");
		setat(campaign.scheduled_at ? campaign.scheduled_at.slice(0, 16).replace(" ", "T") : "");
	}, [open]);

	return (
		<Modal open={open} onClose={onClose} title={isCall ? "Start call list" : "Send campaign"}
			footer={<>
				<button type="button" className={TOOLBAR_BUTTON} onClick={onClose}>Cancel</button>
				<button type="button" className={PRIMARY_BUTTON} disabled={busy || (mode === "later" && !at)} onClick={() => onSend(mode === "later" ? at.replace("T", " ") : "")}>
					{mode === "later" ? <><IconClock size={16} /> Schedule</> : <><IconSend size={16} /> {isCall ? "Start now" : "Send now"}</>}
				</button>
			</>}>
			<div className="flex flex-col gap-4">
				<p className="text-sm text-gray-700">
					{campaign.channel === "call"
						? <>Puts about <strong>{estimate ?? "…"}</strong> contacts on <strong>{campaign.name}</strong> for your agents to call from the Calls screen. Nothing is sent automatically.</>
						: campaign.channel === "voice"
							? <><strong>{campaign.name}</strong> calls about <strong>{estimate ?? "…"}</strong> people and plays your message.</>
							: <><strong>{campaign.name}</strong> goes to about <strong>{estimate ?? "…"}</strong> {channelLabel(campaign.channel)} subscribers.</>}
					{campaign.channel === "sms" && " Your SMS provider charges per message part."}
					{campaign.channel === "whatsapp" && " Meta charges per marketing message delivered, by the recipient's country."}
					{campaign.channel === "voice" && " Calls go out in the calling hours set in Marketing settings › Voice, a few at a time; the provider charges per minute answered."}
				</p>
				<label className="flex items-center gap-2 text-sm"><input type="radio" className="accent-[#634FE5]" checked={mode === "now"} onChange={() => setmode("now")} /> {isCall ? "Start now" : "Send now"}</label>
				<label className="flex items-center gap-2 text-sm"><input type="radio" className="accent-[#634FE5]" checked={mode === "later"} onChange={() => setmode("later")} /> {isCall ? "Start later" : "Schedule for later"}</label>
				{mode === "later" && (
					<div>
						<input type="datetime-local" className={FIELD} value={at} onChange={(ev) => setat(ev.target.value)} />
						<p className={HINT}>In your store's time zone (WordPress settings). {isCall ? "Who is on the list is decided when it starts." : "The list of recipients is taken when it starts."}</p>
					</div>
				)}
			</div>
		</Modal>
	);
};


const Report = ({ campaign, token }) => {
	const { addNotification } = useCounterStore();
	var s = campaign.stats;
	var isEmail = campaign.channel === "email";
	/* WhatsApp reports delivered and read (Meta's webhook); read is kept as "opened". */
	var isWa = campaign.channel === "whatsapp";
	/* Voice: "sent" = answered (delivered), "failed" = not reached; keys pressed come from campaign.voice. */
	var isVoice = campaign.channel === "voice";
	var voice = campaign.voice ?? { calls: 0, answered: 0, no_answer: 0, busy: 0, failed: 0, in_progress: 0, seconds: 0, keys: {} };
	var keyLabels = isVoice ? parseVoice(campaign.body).dtmf_options : {};
	var done = s.sent + s.failed + s.skipped;

	var [data, setdata] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, per_page: 20, filter: "" });
	var [loading, setloading] = useState(false);

	const fetchMessages = useCallback(() => {
		setloading(true);
		postApi("get_mkt_campaign_messages", token, { campaign_id: campaign.id, ...queryPrams })
			.then((res) => setdata({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 }))
			.catch((e) => addNotification({ type: "error", title: "Messages not loaded", content: e.message }))
			.finally(() => setloading(false));
	}, [token, campaign.id, queryPrams]);

	const [debounced, setdebounced] = useState(queryPrams);
	useEffect(() => { var h = setTimeout(() => setdebounced(queryPrams), 400); return () => clearTimeout(h); }, [queryPrams]);
	useEffect(() => { fetchMessages(); }, [debounced, done]);

	var columns = {
		id: { id: "id", label: "Recipient", callback: (m) => (
			<td data-label="Recipient" className="!px-5 py-3 text-left" key={`r-${m.id}`}>
				<div className="flex flex-col">
					<span className="text-sm text-gray-900">{m.to_addr}</span>
					<span className="text-xs text-gray-500">{contactName(m)}</span>
				</div>
			</td>
		), classes: "text-left text-gray-600" },
		status: { id: "status", label: "Status", callback: (m, k) => (
			<td data-label="Status" className="!px-5 py-3 text-left" key={k}>
				<div className="flex flex-col items-start gap-1">
					<Badge badges={MESSAGE_STATUS_BADGES} status={m.status} small />
					{m.error && <span className="max-w-xs truncate text-[11px] text-rose-600" title={m.error}>{m.error}</span>}
				</div>
			</td>
		), classes: "text-left text-gray-600 w-64" },
		activity: { id: "activity", label: "Activity", callback: (m, k) => isVoice ? (
			<td data-label="Activity" className="!px-5 py-3 text-left text-xs text-gray-600" key={k}>{m.notes || <span className="text-gray-300">—</span>}</td>
		) : (
			<td data-label="Activity" className="!px-5 py-3 text-left" key={k}>
				<div className="flex flex-wrap gap-2 text-xs text-gray-500">
					{m.opened_at && <span>Opened{Number(m.opens) > 1 ? ` ×${m.opens}` : ""}</span>}
					{m.clicked_at && <span className="text-blue-700">Clicked{Number(m.clicks) > 1 ? ` ×${m.clicks}` : ""}</span>}
					{m.unsubscribed_at && <span className="text-rose-600">Unsubscribed</span>}
					{!m.opened_at && !m.clicked_at && !m.unsubscribed_at && <span className="text-gray-300">—</span>}
				</div>
			</td>
		), classes: "text-left text-gray-600" },
		sent_at: { id: "sent_at", label: "Sent", callback: (m, k) => (
			<td data-label="Sent" className="!px-5 py-3 text-left text-xs text-gray-500" key={k}>{formatDateTime(m.sent_at) || "—"}</td>
		), classes: "text-left text-gray-600 w-44" },
	};

	return (
		<div className="flex flex-col gap-4">
			{(campaign.status === "sending" || campaign.status === "paused") && (
				<div className={CARD}>
					<div className="mb-2 flex items-center justify-between text-sm">
						<span className="font-medium text-gray-900">{campaign.status === "sending" ? (isVoice ? "Calling…" : "Sending…") : "Paused"}</span>
						<span className="tabular-nums text-gray-500">{done}/{s.total}</span>
					</div>
					<div className="h-2 overflow-hidden rounded-full bg-gray-100">
						<div className="h-full rounded-full bg-[#634FE5] transition-all" style={{ width: `${s.total ? Math.round(done / s.total * 100) : 0}%` }} />
					</div>
					<p className={HINT}>{isVoice ? `${voice.in_progress} call${voice.in_progress === 1 ? "" : "s"} in progress. Calls go out in the calling hours, a few at a time, every minute; keeping this page open places them sooner.` : "Sending continues in the background, a batch every minute. Keeping this page open sends faster."}</p>
				</div>
			)}

			{isVoice ? (
				<div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
					<StatTile label="Contacts" value={s.total} />
					<StatTile label="Answered" value={voice.answered} tone="green" sub={pct(voice.answered, s.total)} />
					<StatTile label="Not reached" value={s.failed} tone={s.failed ? "rose" : "gray"} sub={`${voice.no_answer} no answer · ${voice.busy} busy${s.skipped ? ` · ${s.skipped} skipped` : ""}`} />
					<StatTile label="Talk time" value={`${Math.round((voice.seconds ?? 0) / 60)} min`} tone="blue" sub={voice.answered ? `${Math.round(voice.seconds / voice.answered)}s per answered call` : ""} />
					<StatTile label="Waiting" value={s.queued} />
				</div>
			) : (
			<div className={`grid grid-cols-2 gap-3 ${isEmail || isWa ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
				<StatTile label="Recipients" value={s.total} />
				<StatTile label="Sent" value={s.sent} tone="green" sub={pct(s.sent, s.total)} />
				<StatTile label="Failed" value={s.failed} tone={s.failed ? "rose" : "gray"} sub={s.skipped ? `${s.skipped} skipped` : ""} />
				{isEmail && <StatTile label="Opened" value={s.opened} tone="blue" sub={pct(s.opened, s.sent)} />}
				{isWa && <StatTile label="Delivered" value={s.delivered ?? 0} tone="blue" sub={pct(s.delivered, s.sent)} />}
				{isWa && <StatTile label="Read" value={s.opened} tone="violet" sub={`${pct(s.opened, s.sent)} · ${s.unsubscribed} opted out`} />}
				{isEmail ? <StatTile label="Clicked" value={s.clicked} tone="violet" sub={`${pct(s.clicked, s.sent)} · ${s.unsubscribed} unsubscribed`} /> : !isWa && <StatTile label="Queued" value={s.queued} />}
			</div>
			)}

			{isVoice && (Object.keys(keyLabels).length > 0 || Object.keys(voice.keys ?? {}).length > 0) && (
				<div className={CARD}>
					<div className="mb-3 text-sm font-semibold text-gray-900">Keys pressed</div>
					<ul className="flex flex-col gap-2">
						{[...new Set([...Object.keys(keyLabels), ...Object.keys(voice.keys ?? {})])].map((k) => (
							<li key={k} className="flex items-center gap-3 text-sm">
								<span className="w-48 shrink-0 text-gray-700"><kbd className="mr-2 rounded border border-gray-300 bg-gray-50 px-1.5 font-mono text-xs">{k}</kbd>{keyLabels[k] ?? "Not an option"}</span>
								<span className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100"><span className="block h-full rounded-full bg-emerald-500" style={{ width: `${voice.answered ? Math.round((voice.keys?.[k] ?? 0) / voice.answered * 100) : 0}%` }} /></span>
								<span className="w-10 text-right tabular-nums text-gray-600">{voice.keys?.[k] ?? 0}</span>
							</li>
						))}
					</ul>
					<p className={HINT}>Out of {voice.answered} answered call{voice.answered === 1 ? "" : "s"}.</p>
				</div>
			)}

			{isEmail && campaign.links?.length > 0 && (
				<div className={CARD}>
					<div className="mb-2 text-sm font-semibold text-gray-900">Links clicked</div>
					<ul className="divide-y divide-gray-100 text-sm">
						{campaign.links.map((l) => (
							<li key={l.url} className="flex items-center justify-between gap-3 py-1.5">
								<a href={l.url} target="_blank" rel="noreferrer" className="inline-flex min-w-0 items-center gap-1 truncate text-gray-700 hover:text-blue-600"><span className="truncate">{l.url}</span> <IconExternalLink size={12} className="shrink-0" /></a>
								<span className="tabular-nums text-gray-500">{l.clicks}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			<div className="flex flex-wrap gap-2">
				<select className={FILTER_SELECT} value={queryPrams.filter} onChange={(ev) => setqueryPrams({ ...queryPrams, filter: ev.target.value, paged: 1 })}>
					<option value="">All recipients</option>
					<option value="sent">{isVoice ? "Answered" : "Sent"}</option>
					<option value="failed">{isVoice ? "Not reached" : "Failed"}</option>
					<option value="queued">Queued</option>
					<option value="skipped">Skipped</option>
					{(isEmail || isWa) && <option value="opened">{isWa ? "Read" : "Opened"}</option>}
					{isEmail && <option value="clicked">Clicked</option>}
					{(isEmail || isWa) && <option value="unsubscribed">{isWa ? "Opted out" : "Unsubscribed"}</option>}
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
				onRefreshRequest={fetchMessages}
			/>
		</div>
	);
};

export default MarketingCampaignEdit;
