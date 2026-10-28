"use client";

import React from "react";
import {
	IconSearch, IconRefresh, IconAlertTriangle, IconInbox, IconChevronRight,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useUtilsStore } from "../../../store/useUtilsStore";
import Spinner from "../../../components/Spinner";

import { QUOTE_MARKER, QUOTE_STATUSES, QUOTE_STATUS_OPTIONS } from "../lib/defaults";
import { parseNote } from "../lib/store";
import { PRIMARY_BUTTON, GHOST_BUTTON, FIELD, CARD, TONES } from "./ui";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The inbox.

	Quote requests are ordinary order records marked with `quote_request` on
	`payment_method`, so they are listed with `get_orders` - no new endpoint,
	and every other screen that reads orders can read them too.

	The marker is sent as a query parameter so the store does the filtering.
	Fetching orders and sifting them in the browser would get the paging
	wrong the moment a store has more than one page of orders: page 1 of
	orders is not page 1 of quotes. If the store turns out to ignore the
	parameter, the sift below still shows the right rows and the banner says
	the count and the paging cannot be trusted - which is the truth, rather
	than a quietly short list.
*/

export function isQuote(order) {
	return String(order?.payment_method ?? "") === QUOTE_MARKER;
}

const QuoteInbox = ({ onOpen }) => {

	const { token } = useCounterStore();
	const { wrapCurrency } = useUtilsStore();

	const [rows, setRows] = React.useState([]);
	const [total, setTotal] = React.useState(0);
	const [maxPages, setMaxPages] = React.useState(1);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [serverFiltered, setServerFiltered] = React.useState(true);

	const [query, setQuery] = React.useState({
		keyword: "",
		status: "",
		paged: 1,
		per_page: 20,
		orderby: "date",
		order: "DESC",
	});

	const fetchQuotes = React.useCallback(async () => {
		if (!token) return;

		setLoading(true);
		setError(null);

		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/get_orders`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				body: JSON.stringify({ ...query, payment_method: QUOTE_MARKER }),
			});

			if (!response.ok) throw new Error(`Could not load quotes (${response.status})`);

			const res = await response.json();
			const posts = Array.isArray(res?.posts) ? res.posts : [];
			const quotes = posts.filter(isQuote);

			/* Anything non-quote coming back means the parameter was ignored. */
			setServerFiltered(posts.length === 0 || posts.length === quotes.length);

			setRows(quotes);
			setTotal(parseInt(res?.total, 10) || quotes.length);
			setMaxPages(parseInt(res?.max_pages, 10) || 1);

		} catch (e) {
			setError(e?.message ?? String(e));
			setRows([]);
		} finally {
			setLoading(false);
		}
	}, [token, query]);

	React.useEffect(() => { fetchQuotes(); }, [fetchQuotes]);

	return (
		<div className="flex flex-col gap-4">

			<div className="flex flex-wrap items-center gap-2">

				<div className="relative">
					<IconSearch size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
					<input
						type="text"
						placeholder="Name, phone or reference"
						className={`${FIELD} !pl-8 w-64`}
						defaultValue={query.keyword}
						onKeyDown={(ev) => {
							if (ev.key === "Enter") setQuery((q) => ({ ...q, keyword: ev.target.value, paged: 1 }));
						}}
					/>
				</div>

				<select
					className={FIELD}
					value={query.status}
					onChange={(ev) => setQuery((q) => ({ ...q, status: ev.target.value, paged: 1 }))}>
					<option value="">Every stage</option>
					{QUOTE_STATUS_OPTIONS.map((s) => (
						<option key={s.value} value={s.value}>{s.label}</option>
					))}
				</select>

				<button type="button" className={GHOST_BUTTON} onClick={fetchQuotes} disabled={loading}>
					<IconRefresh size={15} />
					Refresh
				</button>

				<span className="ml-auto text-sm text-gray-500">
					{loading ? "Loading..." : `${total} request${total === 1 ? "" : "s"}`}
				</span>

			</div>

			{!serverFiltered && (
				<div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
					<IconAlertTriangle size={17} className="mt-0.5 shrink-0" />
					<div>
						<div className="font-semibold">This store is not filtering by quote marker.</div>
						<div className="mt-0.5 text-amber-700">
							Quotes mixed in with orders have been sifted out here, so the rows below
							are right but the count and the page numbers cover all orders. Making
							<code className="mx-1 rounded bg-amber-100 px-1">get_orders</code>
							honour <code className="rounded bg-amber-100 px-1">payment_method</code> fixes it.
						</div>
					</div>
				</div>
			)}

			{error && (
				<div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
					{error}
				</div>
			)}

			{loading && rows.length === 0 && (
				<div className="flex justify-center py-12"><Spinner /></div>
			)}

			{!loading && rows.length === 0 && !error && (
				<div className={`${CARD} flex flex-col items-center gap-2 py-12 text-center`}>
					<IconInbox size={28} className="text-gray-300" />
					<div className="text-sm font-medium text-gray-700">No quote requests yet</div>
					<div className="max-w-sm text-xs text-gray-500">
						Requests land here as soon as a shopper sends one. Set up which products
						are quoted on the Rules tab, and put the Quote List block on a page.
					</div>
				</div>
			)}

			{rows.length > 0 && (
				<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
					<table className="w-full text-sm">
						<thead>
							<tr className="border-b border-gray-200 bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
								<th className="px-4 py-3 font-medium">Reference</th>
								<th className="px-4 py-3 font-medium">Customer</th>
								<th className="px-4 py-3 font-medium">Company</th>
								<th className="px-4 py-3 font-medium">Stage</th>
								<th className="px-4 py-3 text-right font-medium">Value</th>
								<th className="px-4 py-3" />
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							{rows.map((row) => {
								const stage = QUOTE_STATUSES[row?.status] ?? { label: row?.status ?? "-", tone: "gray" };
								const note = parseNote(row?.order_note);
								return (
									<tr
										key={row.id}
										onClick={() => onOpen(row.id)}
										className="cursor-pointer transition-colors hover:bg-brand/5">
										<td className="px-4 py-3 font-mono text-xs text-gray-600">#{row.id}</td>
										<td className="px-4 py-3">
											<div className="font-medium text-gray-900">{row?.billing_name || "-"}</div>
											<div className="text-xs text-gray-500">{row?.billing_email || row?.billing_phone || ""}</div>
										</td>
										<td className="px-4 py-3 text-gray-600">{note.company || "-"}</td>
										<td className="px-4 py-3">
											<span className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${TONES[stage.tone] ?? TONES.gray}`}>
												{stage.label}
											</span>
										</td>
										{/* Indicative until it has been quoted: it is the catalogue
										    worth of what was asked about, not a price anyone agreed. */}
										<td className="px-4 py-3 text-right tabular-nums text-gray-700">
											{wrapCurrency(row?.total_amount ?? 0)}
										</td>
										<td className="px-4 py-3 text-right text-gray-300">
											<IconChevronRight size={16} />
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}

			{maxPages > 1 && (
				<div className="flex items-center justify-center gap-2">
					<button
						type="button"
						className={GHOST_BUTTON}
						disabled={query.paged <= 1}
						onClick={() => setQuery((q) => ({ ...q, paged: q.paged - 1 }))}>
						Previous
					</button>
					<span className="text-sm text-gray-500">Page {query.paged} of {maxPages}</span>
					<button
						type="button"
						className={PRIMARY_BUTTON}
						disabled={query.paged >= maxPages}
						onClick={() => setQuery((q) => ({ ...q, paged: q.paged + 1 }))}>
						Next
					</button>
				</div>
			)}

		</div>
	);
};

export default QuoteInbox;
