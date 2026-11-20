"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useCounterStore } from "../../store/useCounterStore";
import { IconPhoneCall, IconPhone, IconArrowLeft, IconCopy, IconPlayerSkipForward, IconHistory, IconShoppingBag, IconMail, IconBrandWhatsapp, IconClock, IconCheck, IconHeadset, IconPlayerPlay } from "@tabler/icons-react";
import { postApi, CARD, FIELD, LABEL, HINT, PRIMARY_BUTTON, TOOLBAR_BUTTON, CALL_OUTCOMES, formatDateTime } from "./marketingUi";

/*
	The Calls screen, for admins, store managers and support agents: the call
	lists they may work (ComboStoreMarketing get_mkt_call_lists), then one
	contact at a time (mkt_call_next hands each agent a different person),
	logging how each call went (mkt_call_log) or putting it back (mkt_call_release).
*/
const MarketingCalls = () => {
	const { token, addNotification } = useCounterStore();
	const [data, setdata] = useState(null);
	const [active, setactive] = useState(null);

	const load = useCallback(() => {
		if (!token) return;
		postApi("get_mkt_call_lists", token, {})
			.then(setdata)
			.catch((e) => { setdata({ lists: [], callbacks: [] }); addNotification({ type: "error", title: "Call lists not loaded", content: e.message }); });
	}, [token]);

	useEffect(() => { load(); }, [load]);

	if (active) {
		return <CallSession list={active.list} startTask={active.taskId} token={token} addNotification={addNotification} onExit={() => { setactive(null); load(); }} />;
	}

	return (
		<div className="page-shell">
			<div>
				<h1 className="text-xl font-semibold text-gray-900">Calls</h1>
				<p className="mt-0.5 text-xs text-gray-500">Call lists you can work. Each contact goes to one agent at a time.</p>
			</div>

			{data && !data.lists.length && (
				<div className={`${CARD} text-center text-sm text-gray-500`}>No call lists are running for you right now.</div>
			)}

			<div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
				{(data?.lists ?? []).map((l) => {
					var left = l.total - l.done;
					return (
						<div key={l.id} className={`${CARD} flex flex-col gap-3`}>
							<div className="flex items-start justify-between gap-2">
								<div className="text-sm font-semibold text-gray-900">{l.name}</div>
								{l.my_open > 0 && <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700">You have a call open</span>}
							</div>
							<div className="h-1.5 overflow-hidden rounded-full bg-gray-100"><div className="h-full rounded-full bg-[#634FE5]" style={{ width: `${l.total ? Math.round(l.done / l.total * 100) : 0}%` }} /></div>
							<div className="grid grid-cols-3 gap-2 text-center text-xs">
								<div className="rounded-lg bg-gray-50 py-2"><div className="text-base font-semibold tabular-nums text-gray-900">{l.available}</div><div className="text-gray-500">to call now</div></div>
								<div className="rounded-lg bg-violet-50 py-2"><div className="text-base font-semibold tabular-nums text-violet-700">{l.my_callbacks_due}</div><div className="text-violet-700">my callbacks due</div></div>
								<div className="rounded-lg bg-emerald-50 py-2"><div className="text-base font-semibold tabular-nums text-emerald-700">{l.my_done_today}</div><div className="text-emerald-700">done by me today</div></div>
							</div>
							<p className="text-[11px] text-gray-400">{l.done} of {l.total} done · {left} left{l.later ? ` (${l.later} waiting for a retry or callback)` : ""}</p>
							<button type="button" className={PRIMARY_BUTTON + " justify-center"} disabled={!l.available && !l.my_open} onClick={() => setactive({ list: l })}>
								<IconPhoneCall size={16} /> {l.my_open ? "Resume calling" : l.available ? "Start calling" : "Nobody to call right now"}
							</button>
						</div>
					);
				})}
			</div>

			{data?.callbacks?.length > 0 && (
				<div className={`${CARD} !p-0`}>
					<div className="border-b border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900">My callbacks</div>
					<ul className="divide-y divide-gray-100">
						{data.callbacks.map((cb) => {
							var due = new Date(String(cb.due).replace(" ", "T")) <= new Date();
							var list = data.lists.find((l) => l.id === Number(cb.campaign_id));
							return (
								<li key={cb.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
									<div className="min-w-0">
										<div className="text-sm font-medium text-gray-900">{[cb.first_name, cb.last_name].filter(Boolean).join(" ") || cb.phone}</div>
										<div className="text-xs text-gray-500">{cb.campaign_name} · {cb.phone}</div>
										{cb.notes && <div className="mt-0.5 max-w-xl truncate text-xs text-gray-400">{String(cb.notes).split("\n")[0]}</div>}
									</div>
									<div className="flex items-center gap-3">
										<span className={`inline-flex items-center gap-1 text-xs ${due ? "font-semibold text-rose-600" : "text-gray-500"}`}><IconClock size={13} /> {due ? "Due " : ""}{formatDateTime(cb.due)}</span>
										<button type="button" className={TOOLBAR_BUTTON} disabled={!due || !list} onClick={() => setactive({ list, taskId: cb.id })}><IconPhone size={14} /> Call now</button>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};


/* One contact at a time on one list, until the agent stops or nobody is left. */
const CallSession = ({ list, startTask, token, addNotification, onExit }) => {
	const [task, settask] = useState(null);
	const [empty, setempty] = useState("");
	const [busy, setbusy] = useState(false);
	const [outcome, setoutcome] = useState("");
	const [notes, setnotes] = useState("");
	const [callbackAt, setcallbackAt] = useState("");
	const [contactNotes, setcontactNotes] = useState("");
	const [count, setcount] = useState(0);
	/* Click-to-call through the PBX (ComboStoreVoice): offered when it is set up and this agent has an extension. */
	const [pbx, setpbx] = useState(null);
	const [pbxCall, setpbxCall] = useState(null);
	const [dialing, setdialing] = useState(false);

	useEffect(() => {
		postApi("get_voice_me", token, {}).then(setpbx).catch(() => setpbx(null));
	}, [token]);

	/* While a PBX call is live, follow it every 3 seconds. */
	useEffect(() => {
		if (!pbxCall || pbxCall.final) return;
		var stop = false;
		var h = setInterval(() => {
			postApi("get_voice_call", token, { id: pbxCall.id })
				.then((r) => {
					if (stop || !r?.call) return;
					setpbxCall(r.call);
					/* Nobody picked up: suggest "No answer" (the agent can still change it). */
					if (r.call.final && !r.call.answered && r.call.hangup.toLowerCase().indexOf("agent") === -1) setoutcome((o) => o || "no_answer");
				})
				.catch(() => { });
		}, 3000);
		return () => { stop = true; clearInterval(h); };
	}, [pbxCall?.id, pbxCall?.final]);

	function dialPbx() {
		setdialing(true);
		postApi("voice_click_to_call", token, { task_id: task.id })
			.then((r) => setpbxCall(r.call))
			.catch((e) => addNotification({ type: "error", title: "Call not placed", content: e.message }))
			.finally(() => setdialing(false));
	}

	function next(taskId) {
		setbusy(true);
		postApi("mkt_call_next", token, { campaign_id: list.id, task_id: taskId || 0 })
			.then((res) => {
				if (res?.status === "empty") { settask(null); setempty(res.message); return; }
				settask(res.task);
				setoutcome("");
				setnotes("");
				setcallbackAt("");
				setcontactNotes(res.task?.contact?.notes ?? "");
				setpbxCall(null);
			})
			.catch((e) => { addNotification({ type: "error", title: "Could not get the next contact", content: e.message }); })
			.finally(() => setbusy(false));
	}

	useEffect(() => { next(startTask); }, []);

	function save() {
		if (!outcome) { addNotification({ type: "error", title: "Choose how the call went", content: "" }); return; }
		setbusy(true);
		var body = { task_id: task.id, outcome, notes, callback_at: outcome === "callback" ? callbackAt.replace("T", " ") : "" };
		if (contactNotes !== (task.contact?.notes ?? "")) body.contact_notes = contactNotes;
		postApi("mkt_call_log", token, body)
			.then(() => { setcount((n) => n + 1); next(); })
			.catch((e) => { setbusy(false); addNotification({ type: "error", title: "Not saved", content: e.message }); });
	}

	function release(thenExit) {
		if (!task) { if (thenExit) onExit(); return; }
		setbusy(true);
		postApi("mkt_call_release", token, { task_id: task.id })
			.catch(() => { })
			.finally(() => { if (thenExit) onExit(); else next(); });
	}

	var c = task?.contact;
	var digits = String(c?.phone ?? "").replace(/[^\d+]/g, "");

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div>
					<button type="button" onClick={() => release(true)} className="mb-1 inline-flex items-center gap-1 text-xs !border-0 !bg-transparent !p-0 text-gray-500 !shadow-none hover:text-gray-900 cursor-pointer"><IconArrowLeft size={14} /> Stop calling</button>
					<h1 className="text-xl font-semibold text-gray-900">{list.name}</h1>
					<p className="mt-0.5 text-xs text-gray-500">{count} logged this session</p>
				</div>
				{task && <button type="button" className={TOOLBAR_BUTTON} disabled={busy} onClick={() => release(false)} title="Put this contact back for later, without counting a call"><IconPlayerSkipForward size={16} /> Skip for now</button>}
			</div>

			{!task && !empty && <div className={`${CARD} text-sm text-gray-500`}>Getting the next contact…</div>}
			{!task && empty && (
				<div className={`${CARD} flex flex-col items-center gap-3 py-10 text-center`}>
					<IconCheck size={28} className="text-emerald-600" />
					<p className="text-sm text-gray-700">{empty}</p>
					<button type="button" className={TOOLBAR_BUTTON} onClick={onExit}>Back to call lists</button>
				</div>
			)}

			{task && c && (
				<div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
					<div className="flex flex-col gap-4 xl:col-span-2">
						<div className={CARD}>
							<div className="flex flex-wrap items-start justify-between gap-4">
								<div className="min-w-0">
									<div className="text-lg font-semibold text-gray-900">{c.name || "No name"}</div>
									<div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-600">
										{c.email && <span className="inline-flex items-center gap-1"><IconMail size={14} className="text-gray-400" />{c.email}</span>}
										{c.whatsapp && <span className="inline-flex items-center gap-1 text-emerald-700"><IconBrandWhatsapp size={14} />on WhatsApp</span>}
									</div>
									<div className="mt-2 flex flex-wrap gap-1">
										{(c.lists ?? []).map((l) => <span key={l} className="rounded-md bg-violet-50 px-1.5 py-0.5 text-[11px] text-violet-700">{l}</span>)}
										{(c.tags ?? []).map((t) => <span key={t} className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600">#{t}</span>)}
									</div>
								</div>
								<div className="flex flex-col items-end gap-2">
									<a href={`tel:${digits}`} className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-lg font-semibold tabular-nums text-white shadow-sm hover:bg-emerald-700"><IconPhone size={20} /> {c.phone}</a>
									{pbx?.enabled && (
										<button type="button" className={TOOLBAR_BUTTON} disabled={dialing || busy || (pbxCall && !pbxCall.final)} onClick={dialPbx} title={`Rings your extension ${pbx.extension} first, then ${c.phone}`}>
											<IconHeadset size={16} /> {dialing ? "Calling…" : pbxCall && !pbxCall.final ? "On a PBX call" : pbxCall ? "Call via PBX again" : "Call via PBX"}
										</button>
									)}
									<button type="button" onClick={() => navigator.clipboard?.writeText(c.phone).then(() => addNotification({ type: "success", title: "Number copied", content: "" }))} className="inline-flex items-center gap-1 text-xs !border-0 !bg-transparent !p-0 text-gray-500 !shadow-none hover:text-gray-900 cursor-pointer"><IconCopy size={12} /> Copy number</button>
								</div>
							</div>
							{pbxCall && <PbxStatus call={pbxCall} extension={pbx?.extension} />}
							{task.attempts > 0 && (
								<p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
									Call {task.attempts + 1} of {task.max_attempts}{task.outcome === "callback" ? " · they asked to be called back now" : ""}.
								</p>
							)}
						</div>

						{task.script && (
							<div className={CARD}>
								<div className="mb-2 text-sm font-semibold text-gray-900">Script</div>
								<div className="prose prose-sm max-w-none text-gray-800 [&_p]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5" dangerouslySetInnerHTML={{ __html: task.script }} />
							</div>
						)}

						<div className={CARD}>
							<div className="mb-3 text-sm font-semibold text-gray-900">How did it go?</div>
							<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
								{Object.entries(CALL_OUTCOMES).map(([k, o]) => (
									<button key={k} type="button" onClick={() => setoutcome(k)}
										className={`rounded-lg !border px-3 py-2 text-left text-sm !shadow-none cursor-pointer transition-colors ${outcome === k ? "!border-[#634FE5] !bg-indigo-50 font-semibold text-indigo-900" : "!border-gray-200 !bg-white text-gray-700 hover:!border-gray-300"}`}>
										{o.label}
									</button>
								))}
							</div>
							{outcome === "callback" && (
								<div className="mt-3">
									<label className={LABEL}>Call back at</label>
									<input type="datetime-local" className={FIELD + " sm:!w-72"} value={callbackAt} onChange={(ev) => setcallbackAt(ev.target.value)} />
									<p className={HINT}>It comes back to you at this time (store time), under “My callbacks”.</p>
								</div>
							)}
							{(outcome === "no_answer" || outcome === "busy") && <p className={HINT}>{task.attempts + 1 >= task.max_attempts ? "This was the last try: they will count as unreachable." : "They go back on the list for another try later."}</p>}
							{outcome === "do_not_call" && <p className="mt-2 text-xs text-rose-700">They won't be put on any call list again.</p>}
							{outcome === "wrong_number" && <p className="mt-2 text-xs text-rose-700">This number won't be put on any call list again, until someone changes it on the contact.</p>}
							<div className="mt-3">
								<label className={LABEL}>Notes on this call</label>
								<textarea rows={3} className={FIELD} value={notes} onChange={(ev) => setnotes(ev.target.value)} placeholder="What they said, what they want, anything for the next caller" />
							</div>
							<div className="mt-3 flex flex-wrap items-center justify-end gap-2">
								<button type="button" className={PRIMARY_BUTTON} disabled={busy || !outcome || (outcome === "callback" && !callbackAt)} onClick={save}>{busy ? "Saving…" : "Save & next contact"}</button>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className={CARD}>
							<div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"><IconShoppingBag size={16} /> Orders</div>
							{!task.orders.count ? <p className="text-xs text-gray-500">No orders yet.</p> : (
								<>
									<p className="text-sm text-gray-700">{task.orders.count} {task.orders.count === 1 ? "order" : "orders"} · {task.orders.total}</p>
									<p className="text-xs text-gray-500">Last {formatDateTime(task.orders.last)}</p>
									<ul className="mt-2 divide-y divide-gray-100 text-xs">
										{task.orders.recent.map((o) => (
											<li key={o.id} className="flex justify-between py-1.5"><span className="text-gray-700">#{o.id} · {o.status}</span><span className="tabular-nums text-gray-500">{o.currency} {o.total_amount}</span></li>
										))}
									</ul>
								</>
							)}
						</div>

						<div className={CARD}>
							<div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"><IconHistory size={16} /> Earlier calls</div>
							{!task.history.length && !task.notes ? <p className="text-xs text-gray-500">First call to this person.</p> : (
								<ul className="flex flex-col gap-2 text-xs">
									{task.notes && <li className="whitespace-pre-line rounded-lg bg-gray-50 p-2 text-gray-700">{task.notes}</li>}
									{task.history.filter((h) => !(task.notes && h.campaign_name === task.campaign_name && h.notes === task.notes)).map((h, i) => (
										<li key={i} className="rounded-lg border border-gray-100 p-2">
											<div className="text-gray-500">{h.campaign_name} · {h.agent_name || "—"} · {formatDateTime(h.sent_at)}</div>
											<div className="font-medium text-gray-800">{CALL_OUTCOMES[h.outcome]?.label ?? h.outcome}</div>
											{h.notes && <div className="mt-0.5 line-clamp-3 whitespace-pre-line text-gray-600">{h.notes}</div>}
										</li>
									))}
								</ul>
							)}
						</div>

						<div className={CARD}>
							<label className={LABEL}>Notes about {c.name ? c.name.split(" ")[0] : "this contact"}</label>
							<textarea rows={4} className={FIELD} value={contactNotes} onChange={(ev) => setcontactNotes(ev.target.value)} placeholder="Kept on their contact: preferences, best time to call…" />
							<p className={HINT}>Saved with the call.</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

/* A click-to-call's progress, from the PBX's own words (phase) and its final state. */
const PBX_PHASES = {
	queued: "Starting the call…",
	placed: "Starting the call…",
	ringing_agent: "Ringing your phone: pick up",
	ringing: "Ringing…",
	calling_customer: "You're on: calling the customer…",
	connected: "Connected",
	in_progress: "Connected",
	answered: "Connected",
	/* HelloPBX: no live status, the call's record appears when it ends. */
	awaiting_record: "Call in progress: the result shows when it ends",
};

const PbxStatus = ({ call, extension }) => {
	const { token, addNotification } = useCounterStore();
	const [audio, setaudio] = useState("");
	const [loadingAudio, setloadingAudio] = useState(false);

	/* Recordings come through our server (get_voice_recording), which holds the provider's credentials. */
	async function playRecording() {
		setloadingAudio(true);
		try {
			var res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "wp-json/combo-store/v2/get_voice_recording", {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				body: JSON.stringify({ id: call.id }),
			});
			if (!res.ok) {
				var err = null;
				try { err = await res.json(); } catch (_e) { err = null; }
				throw new Error(err?.message ?? `Server answered ${res.status}.`);
			}
			setaudio(URL.createObjectURL(await res.blob()));
		} catch (e) {
			addNotification({ type: "error", title: "Recording not loaded", content: e.message });
		} finally {
			setloadingAudio(false);
		}
	}
	useEffect(() => () => { if (audio) URL.revokeObjectURL(audio); }, [audio]);

	var mmss = (sec) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;
	var agentMissed = /agent/i.test(call.hangup || "") || /agent/i.test(call.phase || "");
	var text = !call.final
		? (PBX_PHASES[call.phase] ?? (call.status === "connected" ? "Connected" : "Ringing…"))
		: call.answered
			? `Call ended · ${mmss(call.duration)}`
			: call.status === "busy" ? "The customer's line was busy"
				: call.status === "failed" ? `The call did not go through${call.error ? `: ${call.error}` : ""}`
					: agentMissed ? `Your extension ${extension ?? ""} did not answer` : "The customer did not answer";
	var tone = !call.final ? "bg-blue-50 text-blue-800" : call.answered ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800";
	return (
		<div className={`mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs ${tone}`}>
			<span className="inline-flex items-center gap-1.5">
				{!call.final && <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-current" />}
				<IconHeadset size={14} /> PBX: {text}
			</span>
			{call.recording_url && !audio && (
				<button type="button" disabled={loadingAudio} onClick={playRecording} className="inline-flex items-center gap-1 font-medium underline !border-0 !bg-transparent !p-0 !shadow-none cursor-pointer">
					<IconPlayerPlay size={12} /> {loadingAudio ? "Loading…" : "Recording"}
				</button>
			)}
			{audio && <audio className="h-8 w-full sm:w-72" controls autoPlay src={audio} />}
		</div>
	);
};

export default MarketingCalls;
