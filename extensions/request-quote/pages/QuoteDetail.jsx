"use client";

import React from "react";
import {
	IconArrowLeft, IconDeviceFloppy, IconSend, IconCheck, IconX,
	IconCopy, IconAlertTriangle,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useUtilsStore } from "../../../store/useUtilsStore";
import Spinner from "../../../components/Spinner";

import { QUOTE_STATUSES, QUOTE_MARKER } from "../lib/defaults";
import { parseNote } from "../lib/store";
import { PRIMARY_BUTTON, GHOST_BUTTON, FIELD, SMALL_FIELD, CARD, TONES } from "./ui";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	One request, and the pricing of it.

	The record is an ordinary order, so it is read with `get_order` and
	written with `update_order_items` (the lines) and `update_order` (the
	totals and the stage) - exactly what components/OrderUpdate.jsx does for
	a sale, and the reason a quote needs no table of its own.

	Accepting is the one transition that does more than change a status: it
	clears the `quote_request` marker, so the record stops being a quote and
	becomes a normal order. Without that a won quote would have to be
	chased in two places, and it would never appear in the sales figures.
*/

function toNumber(value, fallback = 0) {
	const n = parseFloat(value);
	return Number.isFinite(n) ? n : fallback;
}

const QuoteDetail = ({ orderId, onBack, onSaved }) => {

	const { token, addNotification } = useCounterStore();
	const { wrapCurrency } = useUtilsStore();

	const [order, setOrder] = React.useState(null);
	const [lines, setLines] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [saving, setSaving] = React.useState(false);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		let cancelled = false;

		async function load() {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(`${serverUrl}wp-json/combo-store/v2/get_order`, {
					method: "POST",
					headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
					body: JSON.stringify({ id: orderId }),
				});
				if (!response.ok) throw new Error(`Could not load the request (${response.status})`);

				const res = await response.json();
				if (cancelled) return;

				/* Core parses this out of a JSON string before using it and
				   posts it back as an array; matching that keeps a save from
				   double-encoding the field. */
				const raw = res?.order ?? null;
				const assignTo = (() => {
					try { return raw?.assign_to ? JSON.parse(raw.assign_to) : []; }
					catch (e) { return Array.isArray(raw?.assign_to) ? raw.assign_to : []; }
				})();

				setOrder(raw ? { ...raw, assign_to: assignTo } : null);
				setLines(Array.isArray(res?.line_items) ? res.line_items : []);

			} catch (e) {
				if (!cancelled) setError(e?.message ?? String(e));
			} finally {
				if (!cancelled) setLoading(false);
			}
		}

		if (token && orderId) load();
		return () => { cancelled = true; };
	}, [token, orderId]);

	const note = React.useMemo(() => parseNote(order?.order_note), [order?.order_note]);

	const subtotal = React.useMemo(
		() => lines.reduce((sum, l) => sum + toNumber(l?.price) * toNumber(l?.quantity, 1), 0),
		[lines]
	);
	const shipping = toNumber(order?.shipping_amount);
	const discount = toNumber(order?.discount_amount);
	const total = Math.max(0, subtotal + shipping - discount);

	const unpriced = lines.filter((l) => toNumber(l?.price) <= 0).length;

	function updateLine(index, patch) {
		setLines((previous) => previous.map((line, i) => {
			if (i !== index) return line;
			const next = { ...line, ...patch };
			/* Kept in step here rather than on save, so the figures the
			   merchant is looking at are the ones that get written. */
			const lineSubtotal = toNumber(next.price) * toNumber(next.quantity, 1);
			next.subtotal = lineSubtotal;
			next.total = Math.max(0, lineSubtotal + toNumber(next.tax) - toNumber(next.discount_amount));
			return next;
		}));
	}

	/**
	 * Write the lines, then the order.
	 *
	 * Two calls because they are two endpoints: `update_order_items` owns
	 * the lines and `update_order` owns the totals and the status. The items
	 * go first - if the second call fails, the prices are still saved and a
	 * retry only has to redo the cheap half.
	 */
	async function persist(changes) {
		if (!token) return false;

		setSaving(true);
		setError(null);

		const nextOrder = {
			...order,
			...changes,
			subtotal_amount: subtotal,
			total_amount: total,
		};

		try {
			const itemsResponse = await fetch(`${serverUrl}wp-json/combo-store/v2/update_order_items`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				body: JSON.stringify({ order_id: order?.id, cartItems: lines }),
			});
			if (!itemsResponse.ok) throw new Error(`Could not save the lines (${itemsResponse.status})`);

			const orderResponse = await fetch(`${serverUrl}wp-json/combo-store/v2/update_order`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				body: JSON.stringify({ ...nextOrder, lineItems: lines }),
			});
			if (!orderResponse.ok) throw new Error(`Could not save the request (${orderResponse.status})`);

			const res = await orderResponse.json();
			if (res?.status === "failed") throw new Error(res?.message || "Save failed");

			setOrder(nextOrder);
			addNotification?.({ type: "success", title: "Quote saved", content: res?.message || `Request #${order?.id} updated.` });
			onSaved?.();
			return true;

		} catch (e) {
			const message = e?.message ?? String(e);
			setError(message);
			addNotification?.({ type: "error", title: "Quote not saved", content: message });
			return false;

		} finally {
			setSaving(false);
		}
	}

	/** A plain-text version to paste into whatever the merchant replies with. */
	function copySummary() {
		const text = [
			`Quote #${order?.id}`,
			order?.billing_name ? `For: ${order.billing_name}` : "",
			"",
			...lines.map((l) => `${l?.product_name ?? l?.title} x ${l?.quantity} - ${wrapCurrency(toNumber(l?.price) * toNumber(l?.quantity, 1))}`),
			"",
			`Subtotal: ${wrapCurrency(subtotal)}`,
			shipping ? `Delivery: ${wrapCurrency(shipping)}` : "",
			discount ? `Discount: -${wrapCurrency(discount)}` : "",
			`Total: ${wrapCurrency(total)}`,
		].filter(Boolean).join("\n");

		navigator?.clipboard?.writeText(text).then(
			() => addNotification?.({ type: "success", title: "Copied", content: "The quote is on your clipboard." }),
			() => addNotification?.({ type: "error", title: "Could not copy", content: "Your browser blocked clipboard access." })
		);
	}

	if (loading) return <div className="flex justify-center py-16"><Spinner /></div>;

	if (!order) {
		return (
			<div className={`${CARD} flex flex-col items-start gap-3`}>
				<div className="text-sm text-gray-700">{error || "That request could not be loaded."}</div>
				<button type="button" className={GHOST_BUTTON} onClick={onBack}>
					<IconArrowLeft size={15} /> Back to the inbox
				</button>
			</div>
		);
	}

	const stage = QUOTE_STATUSES[order?.status] ?? { label: order?.status ?? "-", tone: "gray" };
	const isQuote = String(order?.payment_method ?? "") === QUOTE_MARKER;

	return (
		<div className="flex flex-col gap-4">

			<div className="flex flex-wrap items-center gap-3">
				<button type="button" className={GHOST_BUTTON} onClick={onBack}>
					<IconArrowLeft size={15} /> Inbox
				</button>
				<h2 className="text-lg font-semibold text-gray-900">Request #{order.id}</h2>
				<span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${TONES[stage.tone] ?? TONES.gray}`}>
					{stage.label}
				</span>
				{!isQuote && (
					<span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
						Now an order
					</span>
				)}
			</div>

			{error && (
				<div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
			)}

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">

				{/* ---- what they asked for ---- */}
				<div className="flex flex-col gap-4 lg:col-span-2">

					<div className={CARD}>
						<div className="mb-3 flex items-center justify-between">
							<h3 className="text-sm font-semibold text-gray-900">Pricing</h3>
							{unpriced > 0 && (
								<span className="inline-flex items-center gap-1 text-xs text-amber-700">
									<IconAlertTriangle size={14} />
									{unpriced} line{unpriced === 1 ? "" : "s"} still at zero
								</span>
							)}
						</div>

						<table className="w-full text-sm">
							<thead>
								<tr className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-500">
									<th className="py-2 font-medium">Product</th>
									<th className="w-20 py-2 font-medium">Qty</th>
									<th className="w-32 py-2 font-medium">Unit price</th>
									<th className="w-28 py-2 text-right font-medium">Line</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{lines.map((line, index) => (
									<tr key={line?.id ?? index}>
										<td className="py-2.5 pr-3 text-gray-800">
											{line?.product_name || line?.title || "-"}
											{line?.sku && <div className="text-xs text-gray-400">{line.sku}</div>}
										</td>
										<td className="py-2.5 pr-2">
											<input
												type="number"
												min="1"
												className={`${SMALL_FIELD} w-16`}
												value={line?.quantity ?? 1}
												onChange={(ev) => updateLine(index, { quantity: ev.target.value })}
											/>
										</td>
										<td className="py-2.5 pr-2">
											<input
												type="number"
												min="0"
												step="0.01"
												className={`${SMALL_FIELD} w-28`}
												value={line?.price ?? 0}
												onChange={(ev) => updateLine(index, { price: ev.target.value })}
											/>
										</td>
										<td className="py-2.5 text-right tabular-nums text-gray-700">
											{wrapCurrency(toNumber(line?.price) * toNumber(line?.quantity, 1))}
										</td>
									</tr>
								))}
								{lines.length === 0 && (
									<tr><td colSpan={4} className="py-6 text-center text-sm text-gray-400">No lines on this request.</td></tr>
								)}
							</tbody>
						</table>

						<div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 text-sm">
							<div className="flex items-center justify-between">
								<span className="text-gray-500">Subtotal</span>
								<span className="tabular-nums text-gray-800">{wrapCurrency(subtotal)}</span>
							</div>
							<div className="flex items-center justify-between">
								<label className="text-gray-500">Delivery</label>
								<input
									type="number"
									min="0"
									step="0.01"
									className={`${SMALL_FIELD} w-28 text-right`}
									value={order?.shipping_amount ?? 0}
									onChange={(ev) => setOrder({ ...order, shipping_amount: ev.target.value })}
								/>
							</div>
							<div className="flex items-center justify-between">
								<label className="text-gray-500">Discount</label>
								<input
									type="number"
									min="0"
									step="0.01"
									className={`${SMALL_FIELD} w-28 text-right`}
									value={order?.discount_amount ?? 0}
									onChange={(ev) => setOrder({ ...order, discount_amount: ev.target.value })}
								/>
							</div>
							<div className="flex items-center justify-between border-t border-gray-100 pt-2 text-base font-semibold">
								<span className="text-gray-900">Total</span>
								<span className="tabular-nums text-gray-900">{wrapCurrency(total)}</span>
							</div>
						</div>
					</div>

					{(note.message || note.itemNotes.length > 0) && (
						<div className={CARD}>
							<h3 className="mb-2 text-sm font-semibold text-gray-900">What they said</h3>
							{note.message && (
								<p className="whitespace-pre-wrap text-sm text-gray-700">{note.message}</p>
							)}
							{note.itemNotes.length > 0 && (
								<ul className="mt-3 flex flex-col gap-1 text-sm text-gray-600">
									{note.itemNotes.map((line, i) => <li key={i}>• {line}</li>)}
								</ul>
							)}
						</div>
					)}

				</div>

				{/* ---- who, and what happens next ---- */}
				<div className="flex flex-col gap-4">

					<div className={CARD}>
						<h3 className="mb-3 text-sm font-semibold text-gray-900">Customer</h3>
						<dl className="flex flex-col gap-2 text-sm">
							<Row label="Name" value={order?.billing_name} />
							<Row label="Email" value={order?.billing_email} />
							<Row label="Phone" value={order?.billing_phone} />
							<Row label="Company" value={note.company} />
							<Row label="Needed by" value={note.neededBy} />
							<Row label="Address" value={order?.billing_address} />
							<Row label="Received" value={order?.created_at} />
						</dl>
					</div>

					<div className={`${CARD} flex flex-col gap-3`}>
						<h3 className="text-sm font-semibold text-gray-900">Next step</h3>

						<button
							type="button"
							className={PRIMARY_BUTTON}
							disabled={saving || lines.length === 0}
							onClick={() => persist({ status: "pending" })}>
							<IconSend size={15} />
							Save and mark as quoted
						</button>

						<button type="button" className={GHOST_BUTTON} disabled={saving} onClick={() => persist({})}>
							<IconDeviceFloppy size={15} />
							Save without changing the stage
						</button>

						<button type="button" className={GHOST_BUTTON} disabled={saving} onClick={copySummary}>
							<IconCopy size={15} />
							Copy the quote as text
						</button>

						<div className="border-t border-gray-100 pt-3">
							<button
								type="button"
								className={`${GHOST_BUTTON} w-full !justify-center !border-green-300 !text-green-700 hover:!bg-green-50`}
								disabled={saving || !isQuote}
								onClick={() => persist({ status: "processing", payment_method: "" })}>
								<IconCheck size={15} />
								Customer accepted
							</button>
							<p className="mt-1.5 text-[11px] leading-relaxed text-gray-400">
								Clears the quote marker, so it leaves this inbox and carries on as an
								ordinary order.
							</p>
						</div>

						<button
							type="button"
							className={`${GHOST_BUTTON} !justify-center !border-red-200 !text-red-600 hover:!bg-red-50`}
							disabled={saving}
							onClick={() => persist({ status: "canceled" })}>
							<IconX size={15} />
							Decline
						</button>

						{/* No message is sent from here. Saying so beats a merchant
						    assuming the customer has been told. */}
						<p className="text-[11px] leading-relaxed text-gray-400">
							Nothing is emailed to the customer. Copy the quote above and send it
							however you normally reach them.
						</p>
					</div>

				</div>
			</div>

		</div>
	);
};

const Row = ({ label, value }) => (
	<div className="flex items-start justify-between gap-3">
		<dt className="shrink-0 text-gray-500">{label}</dt>
		<dd className="text-right text-gray-800">{value || "-"}</dd>
	</div>
);

export default QuoteDetail;
