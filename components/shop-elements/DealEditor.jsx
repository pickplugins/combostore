'use client'
import React, { useEffect, useState } from 'react'
import { IconDownload, IconRefresh, IconTrash, IconUsers } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	Deal settings for a product (the "Deals" addon), saved in
	cstore_products.deal (ComboStoreDeals::sanitize_deal on the server):

	{ label, message, startsAt, endsAt, waitlist, collect, showCount, showJoiners }

	Below them, the product's waitlist (who joined, with their contact details)
	from the staff-only get_deal_waitlist route. Shoppers see it through the
	page builder's "Product Deal Waitlist" block.
*/

export const DEAL_DEFAULTS = {
	label: 'Upcoming deal',
	message: '',
	startsAt: '',
	endsAt: '',
	waitlist: true,
	collect: 'phone',
	showCount: true,
	showJoiners: true,
};

const COLLECT_OPTIONS = [
	{ value: 'phone', label: 'Phone number' },
	{ value: 'email', label: 'Email address' },
	{ value: 'both', label: 'Phone and email' },
];

const inputClass = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";

/* Where the deal stands by the dashboard's clock - the shop asks the server, this is only a hint. */
function dealStatus(deal) {
	var now = Date.now();
	var start = deal?.startsAt ? new Date(deal.startsAt).getTime() : null;
	var end = deal?.endsAt ? new Date(deal.endsAt).getTime() : null;
	if (end && now >= end) return { key: 'ended', label: 'Ended', cls: 'bg-gray-100 text-gray-600' };
	if (start && now < start) return { key: 'upcoming', label: 'Upcoming', cls: 'bg-amber-100 text-amber-800' };
	if (start) return { key: 'live', label: 'Live', cls: 'bg-green-100 text-green-700' };
	return { key: 'open', label: 'Waitlist open', cls: 'bg-amber-100 text-amber-800' };
}

function toCsv(entries) {
	var cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
	var lines = [['Name', 'Phone', 'Email', 'Account', 'Joined'].map(cell).join(',')];
	entries.forEach(e => lines.push([e.name, e.phone, e.email, e.account || '', e.created_at].map(cell).join(',')));
	return lines.join('\n');
}

const Toggle = ({ checked, onChange, label, hint }) => (
	<label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
		<input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#634FE5] !shadow-none" checked={checked} onChange={ev => onChange(ev.target.checked)} />
		<span>
			<span className="block text-sm font-medium text-gray-800">{label}</span>
			{hint && <span className="block text-xs text-gray-500">{hint}</span>}
		</span>
	</label>
);

const DealEditor = ({ productId, token, value, onChange }) => {

	var deal = { ...DEAL_DEFAULTS, ...(value && typeof value === 'object' && !Array.isArray(value) ? value : {}) };
	var set = (key, v) => onChange({ ...deal, [key]: v });
	var status = dealStatus(deal);
	var datesBackwards = deal.startsAt && deal.endsAt && new Date(deal.endsAt) <= new Date(deal.startsAt);

	var [list, setList] = useState({ entries: [], total: 0, maxPages: 0, page: 1, loading: false, error: '' });

	function loadWaitlist(page = 1) {
		if (!productId || !token) return;
		setList(prev => ({ ...prev, loading: true, error: '' }));
		fetch(serverUrl + "wp-json/combo-store/v2/get_deal_waitlist", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ product_id: productId, page, per_page: 50 }),
		})
			.then(r => r.json())
			.then(res => {
				if (res?.code || res?.errors) {
					setList(prev => ({ ...prev, loading: false, error: res?.message || 'Could not load the waitlist.' }));
					return;
				}
				setList({ entries: res?.entries ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 0, page, loading: false, error: '' });
			})
			.catch(() => setList(prev => ({ ...prev, loading: false, error: 'Could not load the waitlist.' })));
	}

	useEffect(() => { loadWaitlist(1); }, [productId, token]);

	function removeEntry(entry) {
		fetch(serverUrl + "wp-json/combo-store/v2/remove_deal_waitlist", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ id: entry.id }),
		})
			.then(r => r.json())
			.then(res => { if (res?.success) loadWaitlist(list.page); })
			.catch(() => { });
	}

	/* Every entry, not only the page on screen. */
	function downloadCsv() {
		fetch(serverUrl + "wp-json/combo-store/v2/get_deal_waitlist", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
			body: JSON.stringify({ product_id: productId, page: 1, per_page: 500 }),
		})
			.then(r => r.json())
			.then(res => {
				var blob = new Blob([toCsv(res?.entries ?? [])], { type: 'text/csv;charset=utf-8' });
				var url = URL.createObjectURL(blob);
				var a = document.createElement('a');
				a.href = url;
				a.download = `deal-waitlist-${productId}.csv`;
				a.click();
				URL.revokeObjectURL(url);
			})
			.catch(() => { });
	}

	return (
		<div className="flex flex-col gap-4">

			<div className="flex items-center justify-between gap-3">
				<span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${status.cls}`}>{status.label}</span>
				<span className="text-xs text-gray-500">Add the "Product Deal Waitlist" block to the product template to show it.</span>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-1.5">
					<label className="block text-sm font-medium text-gray-700">Deal label</label>
					<input type="text" className={inputClass} maxLength={80} placeholder="Upcoming deal" value={deal.label} onChange={ev => set('label', ev.target.value)} />
				</div>
				<div className="flex flex-col gap-1.5">
					<label className="block text-sm font-medium text-gray-700">Guests are asked for</label>
					<select className={inputClass} value={deal.collect} onChange={ev => set('collect', ev.target.value)}>
						{COLLECT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
					</select>
					<span className="text-xs text-gray-500">Signed-in shoppers join with their account.</span>
				</div>
			</div>

			<div className="flex flex-col gap-1.5">
				<label className="block text-sm font-medium text-gray-700">Message to shoppers</label>
				<textarea rows={2} className={inputClass} maxLength={500} placeholder="Join the waitlist and we'll tell you the moment the price drops." value={deal.message} onChange={ev => set('message', ev.target.value)} />
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="flex flex-col gap-1.5">
					<label className="block text-sm font-medium text-gray-700">Deal starts</label>
					<input type="datetime-local" className={inputClass} value={deal.startsAt} onChange={ev => set('startsAt', ev.target.value)} />
					<span className="text-xs text-gray-500">Empty: the waitlist is open now.</span>
				</div>
				<div className="flex flex-col gap-1.5">
					<label className="block text-sm font-medium text-gray-700">Deal ends</label>
					<input type="datetime-local" className={inputClass} value={deal.endsAt} onChange={ev => set('endsAt', ev.target.value)} />
					<span className="text-xs text-gray-500">The waitlist closes when the deal ends.</span>
				</div>
			</div>
			{datesBackwards && <div className="text-xs text-red-600">The end is before the start, so the deal would end straight away.</div>}

			<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
				<Toggle checked={deal.waitlist !== false} onChange={v => set('waitlist', v)} label="Waitlist open" hint="Shoppers can join." />
				<Toggle checked={deal.showCount !== false} onChange={v => set('showCount', v)} label="Show the count" hint='"128 people on the waitlist"' />
				<Toggle checked={deal.showJoiners !== false} onChange={v => set('showJoiners', v)} label="Show recent joiners" hint='As "Rahim K." only.' />
			</div>

			{/* ---------- The waitlist ---------- */}
			<div className="rounded-lg border border-gray-200">
				<div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 px-4 py-3">
					<div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
						<IconUsers size={18} /> Waitlist <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">{list.total}</span>
					</div>
					<div className="flex items-center gap-2">
						<button type="button" className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50" onClick={() => loadWaitlist(list.page)}>
							<IconRefresh size={14} /> Refresh
						</button>
						{list.total > 0 && (
							<button type="button" className="inline-flex items-center gap-1 rounded-lg border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50" onClick={downloadCsv}>
								<IconDownload size={14} /> CSV
							</button>
						)}
					</div>
				</div>

				{list.error ? (
					<div className="px-4 py-6 text-center text-sm text-red-600">{list.error}</div>
				) : list.loading && list.entries.length === 0 ? (
					<div className="px-4 py-6 text-center text-sm text-gray-400">Loading...</div>
				) : list.entries.length === 0 ? (
					<div className="px-4 py-6 text-center text-sm text-gray-400">Nobody has joined yet.</div>
				) : (
					<div className="overflow-x-auto">
						<table className="w-full text-left text-sm">
							<thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
								<tr>
									<th className="px-4 py-2 font-medium">Name</th>
									<th className="px-4 py-2 font-medium">Contact</th>
									<th className="px-4 py-2 font-medium">Joined</th>
									<th className="px-4 py-2"></th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{list.entries.map(entry => (
									<tr key={entry.id}>
										<td className="px-4 py-2">
											<div className="font-medium text-gray-900">{entry.name || '—'}</div>
											{entry.userid > 0 && <div className="text-xs text-gray-500">Account: {entry.account || `#${entry.userid}`}</div>}
										</td>
										<td className="px-4 py-2 text-gray-700">
											{entry.phone && <div>{entry.phone}</div>}
											{entry.email && <div className="text-xs text-gray-500">{entry.email}</div>}
										</td>
										<td className="whitespace-nowrap px-4 py-2 text-gray-500">{entry.created_at ? new Date(entry.created_at.replace(' ', 'T')).toLocaleString() : ''}</td>
										<td className="px-4 py-2 text-right">
											<button type="button" aria-label="Remove from waitlist" className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-600" onClick={() => removeEntry(entry)}>
												<IconTrash size={16} />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}

				{list.maxPages > 1 && (
					<div className="flex items-center justify-between border-t border-gray-200 px-4 py-2 text-xs text-gray-600">
						<button type="button" disabled={list.page <= 1} className="rounded border border-gray-200 px-2 py-1 disabled:opacity-40" onClick={() => loadWaitlist(list.page - 1)}>Previous</button>
						<span>Page {list.page} of {list.maxPages}</span>
						<button type="button" disabled={list.page >= list.maxPages} className="rounded border border-gray-200 px-2 py-1 disabled:opacity-40" onClick={() => loadWaitlist(list.page + 1)}>Next</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default DealEditor;
