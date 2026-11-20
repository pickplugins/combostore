"use client";

import React, { useEffect, useState, useCallback } from "react";
import EntriesTable from "../../components/EntriesTable";
import { useCounterStore } from "../../store/useCounterStore";
import { IconUserPlus, IconUpload, IconRefresh, IconMail, IconPhone, IconTrash, IconPencil, IconTag, IconBrandWhatsapp, IconPhoneOff } from "@tabler/icons-react";
import {
	postApi, FILTER_SELECT, TOOLBAR_BUTTON, PRIMARY_BUTTON, DANGER_BUTTON, FIELD, LABEL, HINT, ICON_BUTTON,
	Badge, SUB_STATUS_BADGES, MESSAGE_STATUS_BADGES, Modal, Toggle, useMarketingLists, contactName, parseCsv, formatDateTime,
} from "./marketingUi";

const EMPTY = <span className="text-sm text-gray-300">—</span>;
const EMPTY_CONTACT = { id: 0, email: "", phone: "", first_name: "", last_name: "", email_status: "subscribed", sms_status: "subscribed", whatsapp_status: "none", call_status: "allowed", tags: [], notes: "", list_ids: [] };

/* CSV header names accepted for each field (lowercased, spaces/underscores dropped). */
const CSV_FIELDS = {
	email: ["email", "emailaddress", "e-mail", "mail"],
	phone: ["phone", "mobile", "phonenumber", "cell", "number", "whatsapp"],
	first_name: ["firstname", "first", "givenname", "name", "fullname"],
	last_name: ["lastname", "last", "surname", "familyname"],
	tags: ["tags", "tag", "labels"],
	email_status: ["emailstatus", "emailsubscribed", "subscribed"],
	sms_status: ["smsstatus", "smssubscribed"],
	whatsapp_status: ["whatsappstatus", "whatsappsubscribed", "whatsapp", "whatsappoptin"],
};

function guessColumn(header) {
	var h = String(header || "").toLowerCase().replace(/[\s_]+/g, "");
	for (const [field, names] of Object.entries(CSV_FIELDS)) if (names.includes(h)) return field;
	return "";
}

/*
	The global contact list: everyone marketing can reach, with email and SMS
	subscription tracked separately. Contacts come from the add form, CSV
	import, a sync of customers / order billing details, and the storefront
	sign-up route (mkt_subscribe).
*/
const MarketingContacts = () => {
	const { token, addNotification } = useCounterStore();
	const [lists, reloadLists] = useMarketingLists(token, postApi);

	var [data, setdata] = useState({ posts: [], total: 0, maxPages: 1 });
	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, per_page: 20, order: "DESC", list_id: "", email_status: "", sms_status: "", whatsapp_status: "", call_status: "", tag: "" });
	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);
	var [tags, settags] = useState([]);

	var [editing, setediting] = useState(null);
	var [saving, setsaving] = useState(false);
	var [importOpen, setimportOpen] = useState(false);
	var [syncOpen, setsyncOpen] = useState(false);
	var [bulk, setbulk] = useState({ action: "", list_id: "", tag: "", status: "subscribed" });

	const fetchContacts = useCallback(() => {
		if (!token) return;
		setloading(true);
		postApi("get_mkt_contacts", token, queryPrams)
			.then((res) => setdata({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 1 }))
			.catch((e) => addNotification({ type: "error", title: "Contacts not loaded", content: e.message }))
			.finally(() => setloading(false));
	}, [token, queryPrams]);

	const fetchTags = useCallback(() => {
		if (!token) return;
		postApi("get_mkt_tags", token, {}).then((res) => settags(res?.tags ?? [])).catch(() => { });
	}, [token]);

	const [debounced, setdebounced] = useState(queryPrams);
	useEffect(() => { var h = setTimeout(() => setdebounced(queryPrams), 400); return () => clearTimeout(h); }, [queryPrams]);
	useEffect(() => { fetchContacts(); }, [debounced, token]);
	useEffect(() => { fetchTags(); }, [fetchTags]);

	/* The Lists screen links here with ?list_id=. */
	useEffect(() => {
		var listId = new URLSearchParams(window.location.search).get("list_id");
		if (listId) setqueryPrams((q) => ({ ...q, list_id: listId, paged: 1 }));
	}, []);

	function refreshAll() { fetchContacts(); fetchTags(); reloadLists(); }

	function onChangeQueryPrams(next) {
		if (!next) return;
		setqueryPrams(next.keyword !== queryPrams.keyword ? { ...next, paged: 1 } : next);
	}

	function setFilter(key, value) { setqueryPrams({ ...queryPrams, [key]: value, paged: 1 }); }

	function openContact(id) {
		if (!id) { setediting({ ...EMPTY_CONTACT }); return; }
		postApi("get_mkt_contact", token, { id })
			.then((res) => setediting({ ...EMPTY_CONTACT, ...res, email: res.email ?? "", phone: res.phone ?? "" }))
			.catch((e) => addNotification({ type: "error", title: "Contact not loaded", content: e.message }));
	}

	function saveContact() {
		setsaving(true);
		postApi("save_mkt_contact", token, editing)
			.then(() => {
				addNotification({ type: "success", title: editing.id ? "Contact saved" : "Contact added", content: "" });
				setediting(null);
				refreshAll();
			})
			.catch((e) => addNotification({ type: "error", title: "Contact not saved", content: e.message }))
			.finally(() => setsaving(false));
	}

	function deleteContacts(ids) {
		if (!ids?.length || !confirm(`Delete ${ids.length} contact(s)? Their send history stays in campaign reports.`)) return;
		postApi("delete_mkt_contacts", token, { ids })
			.then((res) => {
				addNotification({ type: "success", title: "Contacts deleted", content: `${res.deleted} deleted.` });
				setselectedRows([]);
				refreshAll();
			})
			.catch((e) => addNotification({ type: "error", title: "Delete failed", content: e.message }));
	}

	function runBulk() {
		if (!bulk.action) return;
		if (bulk.action === "delete") { deleteContacts(selectedRows); return; }
		var [verb, ...rest] = bulk.action.split(":");
		var body = { ids: selectedRows, action: verb };
		if (verb === "add_to_list" || verb === "remove_from_list") body.list_id = bulk.list_id;
		if (verb === "add_tag" || verb === "remove_tag") body.tag = bulk.tag;
		if (verb === "set_email_status" || verb === "set_sms_status" || verb === "set_whatsapp_status" || verb === "set_call_status") body.status = rest[0];
		postApi("bulk_mkt_contacts", token, body)
			.then((res) => {
				addNotification({ type: "success", title: "Done", content: `${res.affected} contact(s) changed.` });
				setselectedRows([]);
				setbulk({ action: "", list_id: "", tag: "", status: "subscribed" });
				refreshAll();
			})
			.catch((e) => addNotification({ type: "error", title: "Bulk action failed", content: e.message }));
	}

	var columns = {
		check: { id: "check", label: "Check" },
		id: { id: "id", label: "Contact", callback: cellContact, classes: "text-left text-gray-600 w-72" },
		channels: { id: "channels", label: "Email / SMS / WhatsApp", callback: cellChannels, classes: "text-left text-gray-600" },
		lists: { id: "lists", label: "Lists & tags", callback: cellLists, classes: "text-left text-gray-600" },
		source: { id: "source", label: "Added", callback: cellSource, classes: "text-left text-gray-600 w-40" },
		actions: { label: "Actions", callback: cellActions, classes: "text-right pr-2 text-gray-600" },
	};

	function cellContact(entry) {
		var name = contactName(entry);
		return (
			<td data-label="Contact" className="!px-5 py-3 text-left" key={`c-${entry.id}`}>
				<button type="button" onClick={() => openContact(entry.id)} className="flex min-w-0 flex-col items-start gap-0.5 !border-0 !bg-transparent !p-0 text-left !shadow-none cursor-pointer">
					<span className="truncate text-sm font-medium text-gray-900 hover:text-blue-600 hover:underline">{name || entry.email || entry.phone}</span>
					<span className="flex flex-col gap-0.5 text-xs text-gray-500">
						{entry.email && <span className="inline-flex items-center gap-1"><IconMail size={12} className="text-gray-400" />{entry.email}</span>}
						{entry.phone && <span className="inline-flex items-center gap-1 tabular-nums"><IconPhone size={12} className="text-gray-400" />{entry.phone}</span>}
					</span>
				</button>
			</td>
		);
	}

	function cellChannels(entry, key) {
		return (
			<td data-label="Email / SMS" className="!px-5 py-3 text-left" key={key}>
				<div className="flex flex-col items-start gap-1">
					{entry.email ? <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconMail size={12} /> <Badge badges={SUB_STATUS_BADGES} status={entry.email_status} small /></span> : null}
					{entry.phone ? <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><IconPhone size={12} /> <Badge badges={SUB_STATUS_BADGES} status={entry.sms_status} small /></span> : null}
					{entry.phone ? <span className="inline-flex items-center gap-1.5 text-xs text-gray-500" title="WhatsApp"><IconBrandWhatsapp size={12} /> <Badge badges={SUB_STATUS_BADGES} status={entry.whatsapp_status || "none"} small /></span> : null}
					{entry.phone && (entry.call_status === "do_not_call" || entry.call_status === "wrong_number") ? <span className="inline-flex items-center gap-1.5 text-xs text-gray-500" title="Phone calls"><IconPhoneOff size={12} /> <Badge badges={SUB_STATUS_BADGES} status={entry.call_status} small /></span> : null}
				</div>
			</td>
		);
	}

	function cellLists(entry, key) {
		return (
			<td data-label="Lists & tags" className="!px-5 py-3 text-left" key={key}>
				{!entry.lists?.length && !entry.tags?.length ? EMPTY : (
					<div className="flex max-w-sm flex-wrap gap-1">
						{(entry.lists ?? []).map((l) => <span key={l.id} className="rounded-md bg-violet-50 px-1.5 py-0.5 text-[11px] text-violet-700">{l.name}</span>)}
						{(entry.tags ?? []).map((t) => <span key={t} className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600">#{t}</span>)}
					</div>
				)}
			</td>
		);
	}

	function cellSource(entry, key) {
		return (
			<td data-label="Added" className="!px-5 py-3 text-left" key={key}>
				<div className="flex flex-col text-xs text-gray-500">
					<span className="capitalize">{entry.source}</span>
					<span className="text-gray-400">{formatDateTime(entry.created_at)}</span>
				</div>
			</td>
		);
	}

	function cellActions(entry, key) {
		return (
			<td data-label="Actions" className="!px-5 py-3" key={key}>
				<div className="flex justify-end gap-1">
					<button type="button" title="Edit" className={ICON_BUTTON} onClick={() => openContact(entry.id)}><IconPencil size={16} /></button>
					<button type="button" title="Delete" className={`${ICON_BUTTON} hover:!text-red-600`} onClick={() => deleteContacts([entry.id])}><IconTrash size={16} /></button>
				</div>
			</td>
		);
	}

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">Contacts</h1>
					<p className="mt-0.5 text-xs text-gray-500">{data.total} contacts · one list shared by email, SMS and WhatsApp campaigns.</p>
				</div>
				<div className="flex flex-wrap gap-2">
					<button type="button" className={TOOLBAR_BUTTON} onClick={() => setsyncOpen(true)}><IconRefresh size={16} /> Sync customers</button>
					<button type="button" className={TOOLBAR_BUTTON} onClick={() => setimportOpen(true)}><IconUpload size={16} /> Import CSV</button>
					<button type="button" className={PRIMARY_BUTTON} onClick={() => openContact(0)}><IconUserPlus size={16} /> Add contact</button>
				</div>
			</div>

			<div className="flex flex-wrap gap-2">
				<select className={FILTER_SELECT} value={queryPrams.list_id} onChange={(ev) => setFilter("list_id", ev.target.value)}>
					<option value="">All lists</option>
					{lists.map((l) => <option key={l.id} value={l.id}>{l.name} ({l.contacts})</option>)}
				</select>
				<select className={FILTER_SELECT} value={queryPrams.email_status} onChange={(ev) => setFilter("email_status", ev.target.value)}>
					<option value="">Any email status</option>
					<option value="subscribed">Email subscribed</option>
					<option value="unsubscribed">Email unsubscribed</option>
					<option value="bounced">Email bounced</option>
					<option value="pending">Email unconfirmed (opt-in)</option>
					<option value="none">Not subscribed (from checkout)</option>
				</select>
				<select className={FILTER_SELECT} value={queryPrams.sms_status} onChange={(ev) => setFilter("sms_status", ev.target.value)}>
					<option value="">Any SMS status</option>
					<option value="subscribed">SMS subscribed</option>
					<option value="unsubscribed">SMS unsubscribed</option>
				</select>
				<select className={FILTER_SELECT} value={queryPrams.whatsapp_status} onChange={(ev) => setFilter("whatsapp_status", ev.target.value)}>
					<option value="">Any WhatsApp status</option>
					<option value="subscribed">WhatsApp subscribed</option>
					<option value="unsubscribed">WhatsApp opted out</option>
					<option value="none">WhatsApp not asked</option>
				</select>
				<select className={FILTER_SELECT} value={queryPrams.call_status} onChange={(ev) => setFilter("call_status", ev.target.value)}>
					<option value="">Any call status</option>
					<option value="allowed">OK to call</option>
					<option value="do_not_call">Do not call</option>
					<option value="wrong_number">Wrong number</option>
				</select>
				<select className={FILTER_SELECT} value={queryPrams.tag} onChange={(ev) => setFilter("tag", ev.target.value)}>
					<option value="">Any tag</option>
					{tags.map((t) => <option key={t.tag} value={t.tag}>#{t.tag} ({t.count})</option>)}
				</select>
			</div>

			{selectedRows.length > 0 && (
				<div className="flex flex-wrap items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm text-indigo-900">
					<span className="font-medium">{selectedRows.length} selected</span>
					<select className={FILTER_SELECT} value={bulk.action} onChange={(ev) => setbulk({ ...bulk, action: ev.target.value })}>
						<option value="">Choose an action…</option>
						<option value="add_to_list">Add to list</option>
						<option value="remove_from_list">Remove from list</option>
						<option value="add_tag">Add tag</option>
						<option value="remove_tag">Remove tag</option>
						<option value="set_email_status:subscribed">Email: subscribe</option>
						<option value="set_email_status:unsubscribed">Email: unsubscribe</option>
						<option value="set_sms_status:subscribed">SMS: subscribe</option>
						<option value="set_sms_status:unsubscribed">SMS: unsubscribe</option>
						<option value="set_whatsapp_status:subscribed">WhatsApp: subscribe (they opted in)</option>
						<option value="set_whatsapp_status:unsubscribed">WhatsApp: unsubscribe</option>
						<option value="set_call_status:do_not_call">Calls: do not call</option>
						<option value="set_call_status:allowed">Calls: OK to call</option>
						<option value="delete">Delete</option>
					</select>
					{(bulk.action === "add_to_list" || bulk.action === "remove_from_list") && (
						<select className={FILTER_SELECT} value={bulk.list_id} onChange={(ev) => setbulk({ ...bulk, list_id: ev.target.value })}>
							<option value="">Pick a list</option>
							{lists.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
						</select>
					)}
					{(bulk.action === "add_tag" || bulk.action === "remove_tag") && (
						<input className={`${FIELD} !h-9 !w-44 !py-0`} placeholder="tag" value={bulk.tag} onChange={(ev) => setbulk({ ...bulk, tag: ev.target.value })} list="mkt-tag-options" />
					)}
					<button type="button" className={bulk.action === "delete" ? DANGER_BUTTON : PRIMARY_BUTTON} disabled={!bulk.action || ((bulk.action.includes("list")) && !bulk.list_id) || (bulk.action.includes("tag") && !bulk.tag.trim())} onClick={runBulk}>Apply</button>
					<button type="button" className="ml-auto text-xs !border-0 !bg-transparent !shadow-none text-indigo-700 hover:underline cursor-pointer" onClick={() => setselectedRows([])}>Clear selection</button>
				</div>
			)}
			<datalist id="mkt-tag-options">{tags.map((t) => <option key={t.tag} value={t.tag} />)}</datalist>

			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={data}
				itemPath={""}
				onChange={onChangeQueryPrams}
				loading={loading}
				selectedRows={selectedRows}
				onSelectRows={setselectedRows}
				onRefreshRequest={fetchContacts}
			/>

			<ContactModal contact={editing} setContact={setediting} lists={lists} saving={saving} onSave={saveContact} onClose={() => setediting(null)} token={token} addNotification={addNotification} />
			<ImportModal open={importOpen} onClose={() => setimportOpen(false)} lists={lists} token={token} addNotification={addNotification} onDone={refreshAll} />
			<SyncModal open={syncOpen} onClose={() => setsyncOpen(false)} lists={lists} token={token} addNotification={addNotification} onDone={refreshAll} />
		</div>
	);
};


const ContactModal = ({ contact, setContact, lists, saving, onSave, onClose, token, addNotification }) => {
	var [tagText, settagText] = useState("");
	var [resending, setresending] = useState(false);

	function resend() {
		setresending(true);
		postApi("resend_mkt_confirmation", token, { id: contact.id })
			.then(() => addNotification({ type: "success", title: "Confirmation sent", content: `A new confirmation link went to ${contact.email}.` }))
			.catch((e) => addNotification({ type: "error", title: "Not sent", content: e.message }))
			.finally(() => setresending(false));
	}
	useEffect(() => { settagText((contact?.tags ?? []).join(", ")); }, [contact?.id, contact === null]);
	if (!contact) return null;

	var set = (k, v) => setContact({ ...contact, [k]: v });
	var toggleList = (id) => set("list_ids", contact.list_ids.includes(id) ? contact.list_ids.filter((x) => x !== id) : [...contact.list_ids, id]);

	return (
		<Modal open drawer title={contact.id ? `Contact #${contact.id}` : "New contact"} onClose={onClose}
			footer={<>
				<button type="button" className={TOOLBAR_BUTTON} onClick={onClose}>Cancel</button>
				<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={() => onSave()}>{saving ? "Saving…" : "Save contact"}</button>
			</>}>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label className={LABEL}>First name</label>
					<input className={FIELD} value={contact.first_name} onChange={(ev) => set("first_name", ev.target.value)} />
				</div>
				<div>
					<label className={LABEL}>Last name</label>
					<input className={FIELD} value={contact.last_name} onChange={(ev) => set("last_name", ev.target.value)} />
				</div>
				<div>
					<label className={LABEL}>Email</label>
					<input type="email" className={FIELD} value={contact.email} onChange={(ev) => set("email", ev.target.value)} />
				</div>
				<div>
					<label className={LABEL}>Email status</label>
					<select className={FIELD} value={contact.email_status} onChange={(ev) => set("email_status", ev.target.value)}>
						<option value="subscribed">Subscribed</option>
						<option value="unsubscribed">Unsubscribed</option>
						<option value="bounced">Bounced</option>
						{contact.email_status === "pending" && <option value="pending">Unconfirmed (awaiting opt-in)</option>}
						{contact.email_status === "none" && <option value="none">Not subscribed (left an email at checkout)</option>}
					</select>
				</div>
				{contact.id > 0 && contact.email_status === "pending" && (
					<div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
						<span>
							Signed up on the storefront{contact.email_confirm_sent_at ? `; confirmation sent ${formatDateTime(contact.email_confirm_sent_at)}` : ""}. Campaigns skip them until they click the link.
						</span>
						<button type="button" className={TOOLBAR_BUTTON} disabled={resending} onClick={resend}>{resending ? "Sending…" : "Resend confirmation"}</button>
					</div>
				)}
				{contact.email_confirmed_at && (
					<p className="sm:col-span-2 -mt-2 text-xs text-gray-500">Confirmed their email {formatDateTime(contact.email_confirmed_at)}{contact.consent_ip ? ` from ${contact.consent_ip}` : ""}.</p>
				)}
				<div>
					<label className={LABEL}>Phone</label>
					<input type="tel" className={FIELD} value={contact.phone} onChange={(ev) => set("phone", ev.target.value)} />
				</div>
				<div>
					<label className={LABEL}>SMS status</label>
					<select className={FIELD} value={contact.sms_status} onChange={(ev) => set("sms_status", ev.target.value)}>
						<option value="subscribed">Subscribed</option>
						<option value="unsubscribed">Unsubscribed</option>
					</select>
				</div>
				<div className="sm:col-span-2">
					<label className={LABEL}>WhatsApp status</label>
					<select className={FIELD} value={contact.whatsapp_status || "none"} onChange={(ev) => set("whatsapp_status", ev.target.value)}>
						{(contact.whatsapp_status || "none") === "none" && <option value="none">Not asked</option>}
						<option value="subscribed">Subscribed (they agreed to WhatsApp messages)</option>
						<option value="unsubscribed">Unsubscribed</option>
					</select>
					<p className={HINT}>WhatsApp needs its own consent: SMS or email agreement does not count. Replying STOP unsubscribes them automatically.</p>
				</div>
				<div className="sm:col-span-2">
					<label className={LABEL}>Phone calls</label>
					<select className={FIELD} value={contact.call_status || "allowed"} onChange={(ev) => set("call_status", ev.target.value)}>
						<option value="allowed">OK to call</option>
						<option value="do_not_call">Do not call</option>
						<option value="wrong_number">Wrong number</option>
					</select>
					<p className={HINT}>“Do not call” and “Wrong number” keep them off every call list. Agents set them from a call; changing the phone number clears “Wrong number”.</p>
				</div>
				<div className="sm:col-span-2">
					<label className={LABEL}>Tags</label>
					<input className={FIELD} placeholder="vip, wholesale" value={tagText}
						onChange={(ev) => { settagText(ev.target.value); set("tags", ev.target.value.split(",").map((t) => t.trim()).filter(Boolean)); }} />
					<p className={HINT}>Comma separated. Campaigns can target tags as well as lists.</p>
				</div>
				<div className="sm:col-span-2">
					<label className={LABEL}>Lists</label>
					{!lists.length && <p className="text-xs text-gray-500">No lists yet. Create one under Marketing › Lists.</p>}
					<div className="flex flex-wrap gap-2">
						{lists.map((l) => (
							<label key={l.id} className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-1 text-sm ${contact.list_ids.includes(l.id) ? "border-[#634FE5] bg-indigo-50 text-indigo-800" : "border-gray-300 text-gray-700"}`}>
								<input type="checkbox" className="accent-[#634FE5]" checked={contact.list_ids.includes(l.id)} onChange={() => toggleList(l.id)} /> {l.name}
							</label>
						))}
					</div>
				</div>
				<div className="sm:col-span-2">
					<label className={LABEL}>Notes</label>
					<textarea rows={3} className={FIELD} value={contact.notes ?? ""} onChange={(ev) => set("notes", ev.target.value)} />
				</div>

				{contact.id > 0 && (
					<div className="sm:col-span-2">
						<div className={LABEL}>Recent messages</div>
						{!contact.messages?.length && <p className="text-xs text-gray-500">Nothing sent to this contact yet.</p>}
						<ul className="divide-y divide-gray-100 rounded-lg border border-gray-200">
							{(contact.messages ?? []).map((m) => (
								<li key={m.id} className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-xs">
									<span className="font-medium text-gray-800">{m.campaign_name ?? `Campaign #${m.campaign_id}`}</span>
									<span className="flex items-center gap-2 text-gray-500">
										<Badge badges={MESSAGE_STATUS_BADGES} status={m.status} small />
										{m.opened_at && <span>opened</span>}
										{m.clicked_at && <span>clicked</span>}
										{m.unsubscribed_at && <span className="text-rose-600">unsubscribed</span>}
										<span>{formatDateTime(m.sent_at)}</span>
									</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</Modal>
	);
};


const ImportModal = ({ open, onClose, lists, token, addNotification, onDone }) => {
	var [rows, setrows] = useState([]);
	var [header, setheader] = useState([]);
	var [mapping, setmapping] = useState([]);
	var [opts, setopts] = useState({ list_ids: [], tags: "", subscribe: true, overwrite: false });
	var [progress, setprogress] = useState(null);

	useEffect(() => { if (!open) { setrows([]); setheader([]); setmapping([]); setprogress(null); } }, [open]);

	function onFile(file) {
		if (!file) return;
		var reader = new FileReader();
		reader.onload = () => {
			var parsed = parseCsv(reader.result);
			if (parsed.length < 2) { addNotification({ type: "error", title: "Nothing to import", content: "The file needs a header row and at least one contact." }); return; }
			setheader(parsed[0]);
			setmapping(parsed[0].map(guessColumn));
			setrows(parsed.slice(1));
		};
		reader.readAsText(file);
	}

	async function runImport() {
		var mapped = rows.map((r, i) => {
			var o = { _row: i + 2 };
			mapping.forEach((field, col) => {
				if (!field) return;
				var v = (r[col] ?? "").trim();
				if (field === "first_name" && o.first_name !== undefined) return;
				o[field] = v;
			});
			/* A single "name" column fills first and last. */
			if (o.first_name && !mapping.includes("last_name") && o.first_name.includes(" ")) {
				var [f, ...l] = o.first_name.split(/\s+/);
				o.first_name = f; o.last_name = l.join(" ");
			}
			return o;
		});
		var total = { created: 0, updated: 0, unchanged: 0, skipped: 0, errors: [] };
		setprogress({ done: 0, total: mapped.length, ...total });
		for (var i = 0; i < mapped.length; i += 500) {
			try {
				var res = await postApi("import_mkt_contacts", token, { rows: mapped.slice(i, i + 500), list_ids: opts.list_ids, tags: opts.tags, subscribe: opts.subscribe, overwrite: opts.overwrite });
				["created", "updated", "unchanged", "skipped"].forEach((k) => total[k] += res[k] ?? 0);
				total.errors = total.errors.concat(res.errors ?? []).slice(0, 20);
			} catch (e) {
				addNotification({ type: "error", title: "Import stopped", content: e.message });
				break;
			}
			setprogress({ done: Math.min(mapped.length, i + 500), total: mapped.length, ...total });
		}
		onDone();
	}

	var canImport = rows.length > 0 && (mapping.includes("email") || mapping.includes("phone")) && !progress;

	return (
		<Modal open={open} onClose={onClose} title="Import contacts from CSV" wide
			footer={<>
				<button type="button" className={TOOLBAR_BUTTON} onClick={onClose}>{progress?.done === progress?.total && progress ? "Close" : "Cancel"}</button>
				<button type="button" className={PRIMARY_BUTTON} disabled={!canImport} onClick={runImport}>Import {rows.length || ""} contacts</button>
			</>}>
			<div className="flex flex-col gap-4">
				<div>
					<input type="file" accept=".csv,text/csv" onChange={(ev) => onFile(ev.target.files?.[0])} className="text-sm" />
					<p className={HINT}>First row is the header. Needs an email or a phone column; existing contacts are matched by email, then phone.</p>
				</div>

				{header.length > 0 && (
					<div className="overflow-x-auto rounded-lg border border-gray-200">
						<table className="w-full text-left text-xs">
							<thead className="bg-gray-50">
								<tr>{header.map((h, i) => (
									<th key={i} className="px-2 py-2 align-top">
										<div className="mb-1 font-medium text-gray-700">{h || `Column ${i + 1}`}</div>
										<select className="w-full rounded border border-gray-300 bg-white px-1 py-1 text-xs" value={mapping[i]} onChange={(ev) => setmapping(mapping.map((m, j) => j === i ? ev.target.value : m))}>
											<option value="">Skip</option>
											<option value="email">Email</option>
											<option value="phone">Phone</option>
											<option value="first_name">First name</option>
											<option value="last_name">Last name</option>
											<option value="tags">Tags</option>
											<option value="email_status">Email status</option>
											<option value="sms_status">SMS status</option>
											<option value="whatsapp_status">WhatsApp consent</option>
										</select>
									</th>
								))}</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{rows.slice(0, 4).map((r, i) => <tr key={i}>{header.map((_, j) => <td key={j} className="truncate px-2 py-1.5 text-gray-600">{r[j]}</td>)}</tr>)}
							</tbody>
						</table>
						{rows.length > 4 && <div className="bg-gray-50 px-2 py-1 text-[11px] text-gray-500">…and {rows.length - 4} more rows</div>}
					</div>
				)}

				{header.length > 0 && (
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label className={LABEL}>Add to lists</label>
							<div className="flex flex-wrap gap-2">
								{lists.map((l) => (
									<label key={l.id} className="inline-flex items-center gap-1.5 text-sm text-gray-700">
										<input type="checkbox" className="accent-[#634FE5]" checked={opts.list_ids.includes(l.id)}
											onChange={() => setopts({ ...opts, list_ids: opts.list_ids.includes(l.id) ? opts.list_ids.filter((x) => x !== l.id) : [...opts.list_ids, l.id] })} /> {l.name}
									</label>
								))}
								{!lists.length && <span className="text-xs text-gray-500">No lists yet.</span>}
							</div>
						</div>
						<div>
							<label className={LABEL}>Tag every imported contact</label>
							<input className={FIELD} placeholder="imported-nov" value={opts.tags} onChange={(ev) => setopts({ ...opts, tags: ev.target.value })} />
						</div>
						<Toggle checked={opts.subscribe} onChange={(v) => setopts({ ...opts, subscribe: v })} label="These people agreed to receive marketing" hint="Rows without a status column are added as subscribed; otherwise unsubscribed." />
						<Toggle checked={opts.overwrite} onChange={(v) => setopts({ ...opts, overwrite: v })} label="Overwrite existing contacts" hint="Off: only fill blanks, and never re-subscribe someone who opted out." />
					</div>
				)}

				{progress && (
					<div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm">
						<div className="mb-2 h-1.5 overflow-hidden rounded-full bg-gray-200"><div className="h-full bg-[#634FE5]" style={{ width: `${Math.round(progress.done / progress.total * 100)}%` }} /></div>
						<div className="text-gray-700">{progress.done}/{progress.total} processed · {progress.created} new · {progress.updated} updated · {progress.unchanged} unchanged · {progress.skipped} skipped</div>
						{progress.errors.length > 0 && (
							<ul className="mt-2 list-inside list-disc text-xs text-rose-700">
								{progress.errors.map((e, i) => <li key={i}>Row {e.row}: {e.message}</li>)}
							</ul>
						)}
					</div>
				)}
			</div>
		</Modal>
	);
};


const SyncModal = ({ open, onClose, lists, token, addNotification, onDone }) => {
	var [opts, setopts] = useState({ source: "customers", list_ids: [], subscribe: true });
	var [progress, setprogress] = useState(null);
	useEffect(() => { if (!open) setprogress(null); }, [open]);

	async function run() {
		var offset = 0;
		var total = { created: 0, updated: 0, unchanged: 0, skipped: 0, seen: 0, total: 0, running: true };
		setprogress({ ...total });
		while (offset !== null) {
			try {
				var res = await postApi("sync_mkt_contacts", token, { ...opts, offset });
			} catch (e) {
				addNotification({ type: "error", title: "Sync stopped", content: e.message });
				break;
			}
			["created", "updated", "unchanged", "skipped"].forEach((k) => total[k] += res[k] ?? 0);
			total.total = res.total ?? 0;
			total.seen = res.next_offset ?? total.total;
			offset = res.next_offset;
			setprogress({ ...total });
		}
		setprogress({ ...total, running: false });
		onDone();
	}

	return (
		<Modal open={open} onClose={onClose} title="Sync contacts from your store"
			footer={<>
				<button type="button" className={TOOLBAR_BUTTON} onClick={onClose}>Close</button>
				<button type="button" className={PRIMARY_BUTTON} disabled={progress?.running} onClick={run}>{progress?.running ? "Syncing…" : "Start sync"}</button>
			</>}>
			<div className="flex flex-col gap-4">
				<div>
					<label className={LABEL}>Source</label>
					<select className={FIELD} value={opts.source} onChange={(ev) => setopts({ ...opts, source: ev.target.value })}>
						<option value="customers">Customer accounts</option>
						<option value="orders">Order billing details (includes guests)</option>
					</select>
					<p className={HINT}>Contacts are matched by email, then phone. Existing contacts only get blanks filled; nobody who unsubscribed is re-subscribed.</p>
				</div>
				<div>
					<label className={LABEL}>Add to lists</label>
					<div className="flex flex-wrap gap-2">
						{lists.map((l) => (
							<label key={l.id} className="inline-flex items-center gap-1.5 text-sm text-gray-700">
								<input type="checkbox" className="accent-[#634FE5]" checked={opts.list_ids.includes(l.id)}
									onChange={() => setopts({ ...opts, list_ids: opts.list_ids.includes(l.id) ? opts.list_ids.filter((x) => x !== l.id) : [...opts.list_ids, l.id] })} /> {l.name}
							</label>
						))}
						{!lists.length && <span className="text-xs text-gray-500">No lists yet.</span>}
					</div>
				</div>
				<Toggle checked={opts.subscribe} onChange={(v) => setopts({ ...opts, subscribe: v })} label="Subscribe new contacts to email and SMS" hint="Only when customers have agreed to marketing. Off adds them as unsubscribed." />
				{progress && (
					<div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
						{progress.running ? `Working… ${progress.seen}/${progress.total || "?"}` : "Finished."} {progress.created} new · {progress.updated} updated · {progress.unchanged} unchanged · {progress.skipped} skipped
					</div>
				)}
			</div>
		</Modal>
	);
};

export default MarketingContacts;
