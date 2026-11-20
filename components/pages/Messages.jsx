"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCounterStore } from "../../store/useCounterStore";
import {
	IconBrandWhatsapp, IconBrandMessenger, IconSearch, IconSend, IconArrowLeft, IconCheck, IconChecks, IconClock, IconAlertCircle,
	IconMapPin, IconFileText, IconPhone, IconShoppingBag, IconLock, IconUserCheck, IconUserX, IconCircleCheck, IconRefresh, IconMessages,
} from "@tabler/icons-react";
import { postApi, CARD, FIELD, HINT, TOOLBAR_BUTTON, PRIMARY_BUTTON, FILTER_SELECT, formatDateTime } from "./marketingUi";

/*
	Messages: WhatsApp and Facebook Messenger conversations in one inbox
	(ComboStoreInbox). Admins see everything; support agents see unassigned
	conversations and their own - replying to an unassigned one takes it.
	The list refreshes every 10 seconds and the open conversation every 5;
	opening one marks it read and tells the sidebar badge to update.
*/
const VIEWS = [["all", "All open"], ["mine", "Mine"], ["unassigned", "Unassigned"], ["closed", "Closed"]];
const CHANNEL_ICON = { whatsapp: <IconBrandWhatsapp size={14} className="text-emerald-600" />, messenger: <IconBrandMessenger size={14} className="text-blue-600" /> };
const CHANNEL_NAME = { whatsapp: "WhatsApp", messenger: "Messenger" };

const toDate = (s) => (s ? new Date(String(s).replace(" ", "T")) : null);
const shortTime = (s) => {
	var d = toDate(s);
	if (!d || isNaN(d)) return "";
	var now = new Date();
	if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
	return d.toLocaleDateString([], { month: "short", day: "numeric" });
};
const initials = (name) => String(name || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("") || "?";
const notifyBadge = () => { if (typeof window !== "undefined") window.dispatchEvent(new Event("cstore-inbox-changed")); };

const Messages = () => {
	const { token, addNotification } = useCounterStore();
	const [view, setview] = useState("all");
	const [channel, setchannel] = useState("");
	const [search, setsearch] = useState("");
	const [list, setlist] = useState(null);
	const [selected, setselected] = useState(0);

	const loadList = useCallback(() => {
		if (!token) return;
		postApi("get_inbox_conversations", token, { view, channel, search })
			.then(setlist)
			.catch((e) => setlist({ conversations: [], counts: {}, error: e.message }));
	}, [token, view, channel, search]);

	useEffect(() => {
		var h = setTimeout(loadList, search ? 350 : 0);
		var t = setInterval(loadList, 10000);
		return () => { clearTimeout(h); clearInterval(t); };
	}, [loadList]);

	var channels = list?.channels ?? {};
	var noChannel = list && !list.error && !channels.whatsapp && !channels.messenger;

	return (
		<div className="page-shell !gap-3">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">Messages</h1>
					<p className="mt-0.5 text-xs text-gray-500">WhatsApp and Facebook Messenger conversations. Replying to an unassigned conversation makes it yours.</p>
				</div>
			</div>

			{noChannel && (
				<div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
					No channel is connected yet. An admin can connect WhatsApp and Facebook Messenger in <Link href="/dashboard/marketing-settings#messenger" className="font-medium underline">Marketing settings</Link>. Messages received before that are not shown.
				</div>
			)}

			<div className="grid min-h-0 grid-cols-1 gap-3 lg:h-[calc(100dvh-11rem)] lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)_300px]">
				{/* Conversation list (hidden on phones while a conversation is open). */}
				<div className={`${CARD} !p-0 flex min-h-0 flex-col ${selected ? "hidden lg:flex" : "flex"}`}>
					<div className="flex flex-col gap-2 border-b border-gray-200 p-3">
						<div className="flex flex-wrap gap-1">
							{VIEWS.map(([k, label]) => (
								<button key={k} type="button" onClick={() => setview(k)}
									className={`whitespace-nowrap rounded-lg !border-0 px-2.5 py-1 text-xs !shadow-none cursor-pointer ${view === k ? "!bg-[#634FE5] font-semibold text-white" : "!bg-gray-100 text-gray-600 hover:!bg-gray-200"}`}>
									{label}{list?.counts?.[k] ? <span className={`ml-1 tabular-nums ${view === k ? "text-white/80" : "text-gray-400"}`}>{list.counts[k]}</span> : null}
								</button>
							))}
						</div>
						<div className="flex gap-2">
							<label className="relative min-w-0 flex-1">
								<IconSearch size={14} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
								<input className={`${FIELD} !pl-8`} placeholder="Search name, number, text" value={search} onChange={(ev) => setsearch(ev.target.value)} />
							</label>
							<select className={`${FILTER_SELECT} !w-auto shrink-0`} value={channel} onChange={(ev) => setchannel(ev.target.value)} aria-label="Channel">
								<option value="">All</option>
								<option value="whatsapp">WhatsApp</option>
								<option value="messenger">Messenger</option>
							</select>
						</div>
					</div>
					<div className="min-h-0 flex-1 overflow-y-auto">
						{!list && <p className="p-4 text-sm text-gray-500">Loading…</p>}
						{list?.error && <p className="p-4 text-sm text-rose-700">{list.error}</p>}
						{list && !list.error && !list.conversations.length && (
							<p className="p-6 text-center text-sm text-gray-500">{view === "mine" ? "Nothing assigned to you." : view === "closed" ? "No closed conversations." : "No conversations here."}</p>
						)}
						<ul>
							{(list?.conversations ?? []).map((c) => (
								<li key={c.id}>
									<button type="button" onClick={() => setselected(c.id)}
										className={`flex w-full items-start gap-3 !rounded-none !border-0 !border-b !border-gray-100 px-3 py-2.5 text-left !shadow-none cursor-pointer ${selected === c.id ? "!bg-indigo-50" : "!bg-white hover:!bg-gray-50"}`}>
										<Avatar name={c.name} url={c.avatar_url} channel={c.channel} />
										<span className="min-w-0 flex-1">
											<span className="flex items-center justify-between gap-2">
												<span className={`truncate text-sm ${c.unread ? "font-semibold text-gray-900" : "text-gray-800"}`}>{c.name}</span>
												<span className="shrink-0 text-[11px] text-gray-400">{shortTime(c.last_message_at)}</span>
											</span>
											<span className="mt-0.5 flex items-center justify-between gap-2">
												<span className={`truncate text-xs ${c.unread ? "text-gray-800" : "text-gray-500"}`}>{c.preview}</span>
												{c.unread > 0 && <span className="inline-flex min-w-5 shrink-0 items-center justify-center rounded-full bg-[#634FE5] px-1.5 text-[10px] font-semibold leading-5 text-white">{c.unread}</span>}
											</span>
											<span className="mt-0.5 block truncate text-[11px] text-gray-400">{c.assigned_name ? `→ ${c.assigned_name}` : "Unassigned"}</span>
										</span>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>

				{selected ? (
					<Conversation key={selected} id={selected} token={token} addNotification={addNotification} onBack={() => setselected(0)} onChanged={loadList} />
				) : (
					<div className={`${CARD} hidden items-center justify-center text-center text-sm text-gray-500 lg:flex xl:col-span-2`}>
						<div className="flex flex-col items-center gap-2"><IconMessages size={28} className="text-gray-300" /> Choose a conversation.</div>
					</div>
				)}
			</div>
		</div>
	);
};

const Avatar = ({ name, url, channel, size = "h-9 w-9" }) => {
	var [broken, setbroken] = useState(false);
	return (
		<span className={`relative shrink-0 ${size}`}>
			{url && !broken
				? <img src={url} alt="" className={`${size} rounded-full object-cover`} onError={() => setbroken(true)} />
				: <span className={`${size} flex items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600`}>{initials(name)}</span>}
			<span className="absolute -bottom-0.5 -right-0.5 rounded-full bg-white p-0.5">{CHANNEL_ICON[channel]}</span>
		</span>
	);
};

/* One conversation: thread, composer, and the customer panel. */
const Conversation = ({ id, token, addNotification, onBack, onChanged }) => {
	const [data, setdata] = useState(null);
	const [messages, setmessages] = useState([]);
	const [hasOlder, sethasOlder] = useState(false);
	const [text, settext] = useState("");
	const [sending, setsending] = useState(false);
	const [busy, setbusy] = useState("");
	const [showPanel, setshowPanel] = useState(false);
	const scroller = useRef(null);
	const atBottom = useRef(true);

	/* Merge by id: polling brings the latest page and fresh ticks; older pages stay. */
	const merge = (prev, rows) => {
		var map = new Map(prev.map((m) => [m.id, m]));
		rows.forEach((m) => map.set(m.id, m));
		return [...map.values()].sort((a, b) => a.id - b.id);
	};

	const load = useCallback((first = false) => {
		return postApi("get_inbox_conversation", token, { id })
			.then((r) => {
				setdata((prev) => ({ ...r, customer: r.customer ?? prev?.customer }));
				setmessages((prev) => (first ? r.messages : merge(prev, r.messages)));
				if (first) { sethasOlder(r.has_older); notifyBadge(); onChanged(); }
			})
			.catch((e) => setdata({ error: e.message }));
	}, [token, id]);

	useEffect(() => {
		load(true);
		var t = setInterval(() => load(false), 5000);
		return () => clearInterval(t);
	}, [load]);

	/* Stay at the bottom when new messages arrive, unless the agent scrolled up to read. */
	useEffect(() => {
		var el = scroller.current;
		if (el && atBottom.current) el.scrollTop = el.scrollHeight;
	}, [messages.length]);

	function older() {
		if (!messages.length) return;
		var el = scroller.current;
		var before = el ? el.scrollHeight : 0;
		postApi("get_inbox_conversation", token, { id, before: messages[0].id })
			.then((r) => {
				atBottom.current = false;
				setmessages((prev) => merge(prev, r.messages));
				sethasOlder(r.has_older);
				requestAnimationFrame(() => { if (el) el.scrollTop = el.scrollHeight - before; });
			})
			.catch((e) => addNotification({ type: "error", title: "Older messages not loaded", content: e.message }));
	}

	function send() {
		var body = text.trim();
		if (!body || sending) return;
		setsending(true);
		atBottom.current = true;
		postApi("inbox_send", token, { id, text: body })
			.then((r) => { settext(""); setmessages((prev) => merge(prev, [r.message])); load(false); onChanged(); })
			.catch((e) => { addNotification({ type: "error", title: "Not sent", content: e.message }); load(false); })
			.finally(() => setsending(false));
	}

	function act(route, body, okTitle) {
		setbusy(route);
		return postApi(route, token, { id, ...body })
			.then((r) => { if (okTitle) addNotification({ type: "success", title: okTitle, content: "" }); load(false); onChanged(); notifyBadge(); return r; })
			.catch((e) => addNotification({ type: "error", title: "That didn't work", content: e.message }))
			.finally(() => setbusy(""));
	}

	if (!data) return <div className={`${CARD} text-sm text-gray-500 xl:col-span-2`}>Loading conversation…</div>;
	if (data.error) {
		return (
			<div className={`${CARD} flex flex-col items-start gap-3 text-sm xl:col-span-2`}>
				<p className="text-rose-700">{data.error}</p>
				<button type="button" className={TOOLBAR_BUTTON} onClick={onBack}><IconArrowLeft size={16} /> Back to conversations</button>
			</div>
		);
	}

	var c = data.conversation;
	var w = data.window ?? {};
	var me = data.me ?? {};
	var mine = c.assigned_to === me.id;

	return (
		<>
			<div className={`${CARD} !p-0 flex min-h-[70dvh] flex-col lg:min-h-0`}>
				{/* Header */}
				<div className="flex items-center gap-3 border-b border-gray-200 px-3 py-2.5">
					<button type="button" onClick={onBack} className={`${TOOLBAR_BUTTON} !px-2 lg:hidden`} aria-label="Back to conversations"><IconArrowLeft size={16} /></button>
					<Avatar name={c.name} url={c.avatar_url} channel={c.channel} />
					<div className="min-w-0 flex-1">
						<div className="truncate text-sm font-semibold text-gray-900">{c.name}</div>
						<div className="truncate text-xs text-gray-500">{CHANNEL_NAME[c.channel]}{c.phone ? ` · ${c.phone}` : ""} · {c.status === "closed" ? "Closed" : c.assigned_name ? `Assigned to ${c.assigned_name}` : "Unassigned"}</div>
					</div>
					<button type="button" className={`${TOOLBAR_BUTTON} xl:hidden`} onClick={() => setshowPanel(!showPanel)}>{showPanel ? "Hide customer" : "Customer"}</button>
					{c.status === "open"
						? <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => act("inbox_set_status", { status: "closed" }, "Conversation closed")}><IconCircleCheck size={16} /> <span className="hidden sm:inline">Close</span></button>
						: <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => act("inbox_set_status", { status: "open" }, "Conversation reopened")}><IconRefresh size={16} /> <span className="hidden sm:inline">Reopen</span></button>}
				</div>

				{showPanel && <div className="border-b border-gray-200 p-3 xl:hidden"><CustomerPanel data={data} me={me} mine={mine} busy={busy} act={act} token={token} id={id} setdata={setdata} addNotification={addNotification} /></div>}

				{/* Thread */}
				<div ref={scroller} onScroll={(ev) => { var el = ev.currentTarget; atBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 60; }}
					className="min-h-0 flex-1 overflow-y-auto bg-gray-50 px-3 py-3">
					{hasOlder && <div className="mb-3 text-center"><button type="button" className={TOOLBAR_BUTTON} onClick={older}>Load older messages</button></div>}
					{!messages.length && <p className="py-8 text-center text-sm text-gray-500">No messages yet.</p>}
					<div className="flex flex-col gap-1.5">
						{messages.map((m, i) => {
							var prev = messages[i - 1];
							var newDay = !prev || toDate(prev.created_at)?.toDateString() !== toDate(m.created_at)?.toDateString();
							return (
								<React.Fragment key={m.id}>
									{newDay && <div className="my-2 text-center text-[11px] text-gray-400">{toDate(m.created_at)?.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</div>}
									<Bubble m={m} token={token} />
								</React.Fragment>
							);
						})}
					</div>
				</div>

				{/* Composer */}
				<div className="border-t border-gray-200 p-3">
					{w.can_reply ? (
						<>
							<div className="flex items-end gap-2">
								<textarea rows={2} className={`${FIELD} resize-none`} placeholder={`Reply on ${CHANNEL_NAME[c.channel]}…`} value={text} maxLength={c.channel === "messenger" ? 2000 : 4096}
									onChange={(ev) => settext(ev.target.value)}
									onKeyDown={(ev) => { if (ev.key === "Enter" && !ev.shiftKey && !ev.nativeEvent.isComposing) { ev.preventDefault(); send(); } }} />
								<button type="button" className={`${PRIMARY_BUTTON} !px-3`} disabled={sending || !text.trim()} onClick={send} aria-label="Send"><IconSend size={18} /></button>
							</div>
							<p className={`${HINT} !mt-1`}>
								Enter sends, Shift+Enter starts a new line.
								{w.ends_at && ` Replies allowed until ${formatDateTime(w.ends_at)}${w.mode === "HUMAN_AGENT" ? " (human agent tag)" : ""}.`}
								{!c.assigned_to && " Replying makes this conversation yours."}
							</p>
						</>
					) : (
						<p className="flex items-start gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-600"><IconLock size={14} className="mt-0.5 shrink-0" /> {w.reason}</p>
					)}
				</div>
			</div>

			<div className={`${CARD} hidden min-h-0 overflow-y-auto xl:block`}>
				<CustomerPanel data={data} me={me} mine={mine} busy={busy} act={act} token={token} id={id} setdata={setdata} addNotification={addNotification} />
			</div>
		</>
	);
};

const TICKS = {
	sending: <IconClock size={13} className="text-gray-400" aria-label="Sending" />,
	sent: <IconCheck size={13} className="text-gray-400" aria-label="Sent" />,
	delivered: <IconChecks size={13} className="text-gray-400" aria-label="Delivered" />,
	read: <IconChecks size={13} className="text-sky-500" aria-label="Read" />,
	failed: <IconAlertCircle size={13} className="text-rose-500" aria-label="Not sent" />,
};

const Bubble = ({ m, token }) => {
	var out = m.direction === "out";
	return (
		<div className={`flex ${out ? "justify-end" : "justify-start"}`}>
			<div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm sm:max-w-[70%] ${out ? "rounded-br-md bg-[#634FE5] text-white" : "rounded-bl-md bg-white text-gray-900"}`}>
				{m.media?.has_file && <Media m={m} token={token} out={out} />}
				{m.type === "location" && m.media?.lat !== null && m.media?.lat !== undefined && (
					<a href={`https://www.google.com/maps?q=${m.media.lat},${m.media.lng}`} target="_blank" rel="noreferrer" className={`mb-1 inline-flex items-center gap-1 underline ${out ? "text-white" : "text-blue-700"}`}><IconMapPin size={14} /> Open location</a>
				)}
				{m.text && <div className="whitespace-pre-wrap break-words">{m.text}</div>}
				<div className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${out ? "text-white/70" : "text-gray-400"}`}>
					{out && m.author && <span className="truncate">{m.author} ·</span>}
					<span>{shortTime(m.created_at) && toDate(m.created_at)?.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</span>
					{out && <span className={m.status === "read" ? "" : "[&_svg]:!text-white/70"}>{TICKS[m.status]}</span>}
				</div>
				{m.status === "failed" && m.error && <div className="mt-1 rounded bg-rose-50 px-2 py-1 text-[11px] text-rose-700">{m.error}</div>}
			</div>
		</div>
	);
};

/* A photo or file. Messenger gives a public link; WhatsApp files come through our server (they need the token). */
const Media = ({ m, token, out }) => {
	const [src, setsrc] = useState(m.media.url || "");
	const [err, seterr] = useState("");
	/* Messenger's photo links expire after a while: then offer the link instead of a broken image. */
	const [broken, setbroken] = useState(false);
	var isImage = m.type === "image" || m.type === "sticker";
	var isAv = m.type === "audio" || m.type === "video";

	const fetchBlob = useCallback(() => {
		return fetch(process.env.NEXT_PUBLIC_SERVER_URL + "wp-json/combo-store/v2/get_inbox_media", {
			method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ message_id: m.id }),
		}).then(async (r) => {
			if (!r.ok) { var e = null; try { e = await r.json(); } catch (_e) { } throw new Error(e?.message ?? `Server answered ${r.status}.`); }
			return URL.createObjectURL(await r.blob());
		});
	}, [token, m.id]);

	useEffect(() => {
		if (src || !(isImage || isAv)) return;
		var cancelled = false;
		fetchBlob().then((u) => { if (!cancelled) setsrc(u); }).catch((e) => { if (!cancelled) seterr(e.message); });
		return () => { cancelled = true; };
	}, [fetchBlob]);
	useEffect(() => () => { if (src.startsWith("blob:")) URL.revokeObjectURL(src); }, [src]);

	if (err) return <div className={`mb-1 text-xs ${out ? "text-white/80" : "text-rose-600"}`}>{err}</div>;
	if (isImage && broken) return <a href={src} target="_blank" rel="noreferrer" className={`mb-1 inline-flex items-center gap-1.5 text-xs underline ${out ? "text-white" : "text-blue-700"}`}><IconFileText size={14} /> Photo (link expired): open</a>;
	if (isImage) return src ? <a href={src} target="_blank" rel="noreferrer"><img src={src} alt={m.text || "Photo"} onError={() => setbroken(true)} className="mb-1 max-h-64 rounded-lg object-contain" /></a> : <div className="mb-1 h-24 w-40 animate-pulse rounded-lg bg-gray-200" />;
	if (m.type === "audio") return src ? <audio controls src={src} className="mb-1 h-9 max-w-full" /> : <div className="mb-1 text-xs opacity-70">Loading voice message…</div>;
	if (m.type === "video") return src ? <video controls src={src} className="mb-1 max-h-64 rounded-lg" /> : <div className="mb-1 text-xs opacity-70">Loading video…</div>;
	return (
		<button type="button" onClick={() => (src ? window.open(src, "_blank") : fetchBlob().then((u) => { setsrc(u); window.open(u, "_blank"); }).catch((e) => seterr(e.message)))}
			className={`mb-1 inline-flex items-center gap-1.5 !border-0 !p-0 !shadow-none underline cursor-pointer !bg-transparent ${out ? "text-white" : "text-blue-700"}`}>
			<IconFileText size={14} /> {m.media.filename || "Open file"}
		</button>
	);
};

const CustomerPanel = ({ data, me, mine, busy, act, token, id, setdata, addNotification }) => {
	var c = data.conversation;
	var cu = data.customer ?? {};
	const [phone, setphone] = useState(c.channel === "messenger" ? (cu.phone || "") : "");
	const [linking, setlinking] = useState(false);
	var money = (n, cur) => `${cur === "BDT" ? "৳" : cur ? cur + " " : ""}${Number(n || 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;

	function linkPhone() {
		setlinking(true);
		postApi("inbox_link_phone", token, { id, phone })
			.then((r) => { setdata((p) => ({ ...p, customer: r.customer, conversation: r.conversation })); addNotification({ type: "success", title: phone ? "Phone linked" : "Phone removed", content: "" }); })
			.catch((e) => addNotification({ type: "error", title: "Not linked", content: e.message }))
			.finally(() => setlinking(false));
	}

	return (
		<div className="flex flex-col gap-4 text-sm">
			<div>
				<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">Customer</div>
				<div className="font-medium text-gray-900">{cu.contact?.name || c.name}</div>
				{cu.phone && <a href={`tel:${cu.phone}`} className="mt-0.5 inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900"><IconPhone size={12} /> {cu.phone}</a>}
				{cu.contact?.email && <div className="text-xs text-gray-500">{cu.contact.email}</div>}
				{cu.contact && <Link href="/dashboard/marketing-contacts" className="mt-1 block text-xs text-[#634FE5] hover:underline">In your contacts</Link>}
				{cu.contact?.tags?.length > 0 && <div className="mt-1 flex flex-wrap gap-1">{cu.contact.tags.map((t) => <span key={t} className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600">#{t}</span>)}</div>}
				{cu.contact?.notes && <p className="mt-2 rounded-lg bg-amber-50 px-2 py-1.5 text-xs text-amber-900">{cu.contact.notes}</p>}
				{c.channel === "messenger" && (
					<div className="mt-3">
						<label className="mb-1 block text-xs text-gray-500">Customer's phone (Messenger does not share it)</label>
						<div className="flex gap-2">
							<input className={FIELD} value={phone} placeholder="01XXXXXXXXX" onChange={(ev) => setphone(ev.target.value)} />
							<button type="button" className={TOOLBAR_BUTTON} disabled={linking} onClick={linkPhone}>{linking ? "…" : "Link"}</button>
						</div>
					</div>
				)}
			</div>

			<div>
				<div className="mb-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gray-500"><IconShoppingBag size={13} /> Orders</div>
				{!cu.phone && <p className="text-xs text-gray-500">Link a phone to see their orders.</p>}
				{cu.phone && !cu.order_count && <p className="text-xs text-gray-500">No orders with this number.</p>}
				{cu.order_count > 0 && (
					<>
						<p className="text-xs text-gray-600">{cu.order_count} order{cu.order_count === 1 ? "" : "s"} · {money(cu.order_total, cu.currency)}</p>
						<ul className="mt-1 divide-y divide-gray-100">
							{cu.orders.map((o) => (
								<li key={o.id} className="flex items-center justify-between gap-2 py-1.5 text-xs">
									<Link href={`/dashboard/orders/${o.id}`} className="font-medium text-blue-700 hover:underline">#{o.id}</Link>
									<span className="text-gray-500">{o.status}</span>
									<span className="tabular-nums text-gray-700">{money(o.total, o.currency)}</span>
								</li>
							))}
						</ul>
					</>
				)}
			</div>

			<div>
				<div className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">Assigned to</div>
				{me.is_admin ? (
					<select className={FILTER_SELECT + " w-full"} value={c.assigned_to ?? 0} disabled={!!busy} onChange={(ev) => act("inbox_assign", { user_id: Number(ev.target.value) }, "Assignment changed")}>
						<option value={0}>Nobody (unassigned)</option>
						{(data.agents ?? []).map((a) => <option key={a.id} value={a.id}>{a.name}{a.id === me.id ? " (me)" : ""}</option>)}
					</select>
				) : (
					<div className="flex items-center justify-between gap-2">
						<span className="text-gray-700">{c.assigned_name || "Nobody"}</span>
						{!c.assigned_to && <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => act("inbox_assign", { user_id: me.id }, "It's yours now")}><IconUserCheck size={16} /> Take it</button>}
						{mine && <button type="button" className={TOOLBAR_BUTTON} disabled={!!busy} onClick={() => act("inbox_assign", { user_id: 0 }, "Handed back")}><IconUserX size={16} /> Hand back</button>}
					</div>
				)}
				{c.status === "closed" && <p className={HINT}>Closed. It reopens by itself when the customer writes again.</p>}
			</div>
		</div>
	);
};

export default Messages;
