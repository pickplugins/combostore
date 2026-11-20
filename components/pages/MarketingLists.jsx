"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useCounterStore } from "../../store/useCounterStore";
import { IconPlus, IconPencil, IconTrash, IconWorld, IconCopy } from "@tabler/icons-react";
import { postApi, PRIMARY_BUTTON, TOOLBAR_BUTTON, ICON_BUTTON, FIELD, LABEL, HINT, CARD, Modal, Toggle, useMarketingLists } from "./marketingUi";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Lists group contacts for targeting. A contact can be on any number of
	lists; deleting a list never deletes its contacts. A public list accepts
	storefront sign-ups through the mkt_subscribe route.
*/
const MarketingLists = () => {
	const { token, addNotification } = useCounterStore();
	const [lists, reload] = useMarketingLists(token, postApi);
	const [editing, setediting] = useState(null);
	const [saving, setsaving] = useState(false);

	function save() {
		setsaving(true);
		postApi("save_mkt_list", token, editing)
			.then(() => { setediting(null); reload(); addNotification({ type: "success", title: "List saved", content: "" }); })
			.catch((e) => addNotification({ type: "error", title: "List not saved", content: e.message }))
			.finally(() => setsaving(false));
	}

	function remove(list) {
		if (!confirm(`Delete the list "${list.name}"? Its ${list.contacts} contacts stay in your contact list.`)) return;
		postApi("delete_mkt_list", token, { id: list.id })
			.then(() => { reload(); addNotification({ type: "success", title: "List deleted", content: "" }); })
			.catch((e) => addNotification({ type: "error", title: "List not deleted", content: e.message }));
	}

	function copySnippet(list) {
		var snippet = `fetch("${serverUrl}wp-json/combo-store/v2/mkt_subscribe", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ list_id: ${list.id}, email, phone, name }),\n})`;
		navigator.clipboard?.writeText(snippet).then(() => addNotification({ type: "success", title: "Copied", content: "Sign-up request copied to the clipboard." }));
	}

	return (
		<div className="page-shell">
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">Lists</h1>
					<p className="mt-0.5 text-xs text-gray-500">Group contacts to target campaigns. A contact can be on several lists.</p>
				</div>
				<button type="button" className={PRIMARY_BUTTON} onClick={() => setediting({ id: 0, name: "", description: "", public: false })}><IconPlus size={16} /> New list</button>
			</div>

			{!lists.length && (
				<div className={`${CARD} text-center text-sm text-gray-500`}>No lists yet. Create one, then add contacts from the Contacts screen or an import.</div>
			)}

			<div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
				{lists.map((l) => (
					<div key={l.id} className={`${CARD} flex flex-col gap-3`}>
						<div className="flex items-start justify-between gap-2">
							<div className="min-w-0">
								<div className="flex items-center gap-2">
									<span className="truncate text-sm font-semibold text-gray-900">{l.name}</span>
									{l.public && <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700"><IconWorld size={11} /> Sign-up form</span>}
								</div>
								{l.description && <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">{l.description}</p>}
							</div>
							<div className="flex shrink-0 gap-1">
								{l.public && <button type="button" title="Copy sign-up request" className={ICON_BUTTON} onClick={() => copySnippet(l)}><IconCopy size={16} /></button>}
								<button type="button" title="Edit" className={ICON_BUTTON} onClick={() => setediting({ ...l })}><IconPencil size={16} /></button>
								<button type="button" title="Delete" className={`${ICON_BUTTON} hover:!text-red-600`} onClick={() => remove(l)}><IconTrash size={16} /></button>
							</div>
						</div>
						<div className="grid grid-cols-4 gap-2 text-center">
							<Count label="Contacts" value={l.contacts} />
							<Count label="Email subs" value={l.email_subscribed} />
							<Count label="SMS subs" value={l.sms_subscribed} />
							<Count label="WhatsApp" value={l.whatsapp_subscribed ?? 0} />
						</div>
						<Link href={`/dashboard/marketing-contacts?list_id=${l.id}`} className="text-xs font-medium text-[#634FE5] hover:underline">View contacts →</Link>
					</div>
				))}
			</div>

			<Modal open={!!editing} onClose={() => setediting(null)} title={editing?.id ? "Edit list" : "New list"}
				footer={<>
					<button type="button" className={TOOLBAR_BUTTON} onClick={() => setediting(null)}>Cancel</button>
					<button type="button" className={PRIMARY_BUTTON} disabled={saving || !editing?.name?.trim()} onClick={save}>{saving ? "Saving…" : "Save list"}</button>
				</>}>
				{editing && (
					<div className="flex flex-col gap-4">
						<div>
							<label className={LABEL}>Name</label>
							<input className={FIELD} autoFocus value={editing.name} onChange={(ev) => setediting({ ...editing, name: ev.target.value })} placeholder="VIP customers" />
						</div>
						<div>
							<label className={LABEL}>Description</label>
							<textarea rows={2} className={FIELD} value={editing.description} onChange={(ev) => setediting({ ...editing, description: ev.target.value })} />
							<p className={HINT}>For your team only; subscribers never see it.</p>
						</div>
						<Toggle checked={editing.public} onChange={(v) => setediting({ ...editing, public: v })} label="Accept storefront sign-ups" hint="Lets a newsletter form add people to this list (mkt_subscribe with this list's id)." />
					</div>
				)}
			</Modal>
		</div>
	);
};

const Count = ({ label, value }) => (
	<div className="rounded-lg bg-gray-50 py-2">
		<div className="text-lg font-semibold tabular-nums text-gray-900">{value}</div>
		<div className="text-[11px] text-gray-500">{label}</div>
	</div>
);

export default MarketingLists;
