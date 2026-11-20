'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Link from "next/link";
import { IconStar, IconStarFilled, IconCheck, IconClockPause, IconTrash, IconRosetteDiscountCheck, IconRefresh } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The product's "Reviews" addon card.

	Settings, saved in cstore_products.review_settings
	(ComboStoreProduct::sanitize_review_settings) and enforced by the server's
	submit_comment while the addon is on:
	{ enabled, verified_only, require_approval }. Staff replies are never
	blocked or held.

	Below them: the product's rating from approved reviews, how many gave each
	star, and its latest reviews of any status, which can be approved, held
	or trashed here (get_review_summary / moderate_comments, which also
	recalculates the rating).
*/

export function normalizeReviewSettings(value) {
	var v = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
	return {
		enabled: v.enabled !== false,
		verified_only: !!v.verified_only,
		require_approval: !!v.require_approval,
	};
}

function Stars({ value, size = 14 }) {
	var full = Math.round(Number(value) || 0);
	return (
		<span className="inline-flex items-center text-amber-400" aria-label={`${Number(value) || 0} out of 5`}>
			{[1, 2, 3, 4, 5].map(i => i <= full
				? <IconStarFilled key={i} size={size} />
				: <IconStar key={i} size={size} className="text-gray-300" />)}
		</span>
	);
}

const STATUS = {
	approved: { label: 'Published', className: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
	pending: { label: 'Waiting for approval', className: 'bg-amber-50 text-amber-700 ring-amber-200' },
	spam: { label: 'Spam', className: 'bg-red-50 text-red-700 ring-red-200' },
	trash: { label: 'Trash', className: 'bg-gray-100 text-gray-600 ring-gray-200' },
};

const ACTION_BUTTON = "inline-flex h-7 items-center gap-1 rounded-lg px-2 text-xs font-medium text-gray-600 ring-1 ring-gray-200 transition-colors hover:bg-gray-50 cursor-pointer disabled:cursor-default disabled:opacity-50";

function Setting({ id, checked, onChange, title, help }) {
	return (
		<label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
			<input id={id} type="checkbox" className="mt-0.5" checked={checked} onChange={ev => onChange(ev.target.checked)} />
			<span className="flex flex-col gap-0.5">
				<span className="text-sm font-medium text-gray-800">{title}</span>
				<span className="text-xs text-gray-500">{help}</span>
			</span>
		</label>
	);
}

const ProductReviewsEditor = ({ value, onChange, productId }) => {

	const { token, addNotification } = useCounterStore();
	var settings = normalizeReviewSettings(value);
	var update = (patch) => onChange({ ...settings, ...patch });

	var [summary, setSummary] = useState(null);
	var [loading, setLoading] = useState(false);
	var [busy, setBusy] = useState(null);

	var load = useCallback(() => {
		if (!productId || !token) return;
		setLoading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/get_review_summary", {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: JSON.stringify({ product_id: productId, per_page: 5 }),
		})
			.then(r => r.ok ? r.json() : Promise.reject(r.status))
			.then(res => setSummary(res))
			.catch(() => setSummary(null))
			.finally(() => setLoading(false));
	}, [productId, token]);

	useEffect(() => { load(); }, [load]);

	function moderate(review, action) {
		setBusy(review.id);
		fetch(serverUrl + "wp-json/combo-store/v2/moderate_comments", {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: JSON.stringify({ ids: [review.id], action }),
		})
			.then(r => r.ok ? r.json() : Promise.reject(r.status))
			.then(res => {
				var ok = res?.done > 0;
				addNotification?.({ type: ok ? 'success' : 'error', title: ok ? 'Review updated' : 'Nothing changed', content: ok ? { approve: 'The review is published.', hold: 'The review is waiting for approval.', trash: 'The review was moved to the trash.' }[action] : 'The review could not be updated.' });
				load();
			})
			.catch(() => addNotification?.({ type: 'error', title: 'Review not updated', content: 'The server could not be reached.' }))
			.finally(() => setBusy(null));
	}

	var total = Number(summary?.total_rate) || 0;
	var avg = Number(summary?.avg_rating) || 0;
	var stars = summary?.stars ?? {};

	return (
		<div className="flex flex-col gap-5 p-4">

			<div className="flex flex-col gap-2">
				<Setting id="reviews-enabled" checked={settings.enabled} onChange={v => update({ enabled: v })}
					title="Accept new reviews"
					help="Off: shoppers see that reviews are closed. Existing reviews stay on the page." />
				<Setting id="reviews-verified" checked={settings.verified_only} onChange={v => update({ verified_only: v })}
					title="Only verified buyers"
					help="Only signed-in customers with a completed order for this product can leave a review." />
				<Setting id="reviews-approval" checked={settings.require_approval} onChange={v => update({ require_approval: v })}
					title="Approve reviews before they're published"
					help="New reviews wait for you to approve them, here or under Store → Reviews. They don't count toward the rating until then." />
				<p className="text-xs text-gray-500">Saved with the product. Your own replies are never blocked or held.</p>
			</div>

			<div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
				<div className="flex items-center justify-between gap-3">
					<div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Rating</div>
					{productId && (
						<button type="button" title="Refresh" className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 hover:bg-white hover:text-gray-700 cursor-pointer" onClick={load}>
							<IconRefresh size={16} className={loading ? 'animate-spin' : ''} />
						</button>
					)}
				</div>

				{!productId ? (
					<p className="text-sm text-gray-500">Reviews appear here once the product is saved.</p>
				) : !summary ? (
					<p className="text-sm text-gray-500">{loading ? 'Loading reviews…' : 'The reviews could not be loaded.'}</p>
				) : (
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
						<div className="flex flex-col items-start gap-1">
							<div className="text-3xl font-semibold tabular-nums text-gray-900">{total ? avg.toFixed(1) : '–'}</div>
							<Stars value={avg} size={16} />
							<div className="text-xs text-gray-500">{total} {total === 1 ? 'rating' : 'ratings'}{summary.pending ? ` · ${summary.pending} waiting for approval` : ''}</div>
						</div>
						<div className="flex flex-1 flex-col gap-1">
							{[5, 4, 3, 2, 1].map(star => {
								var n = Number(stars[star]) || 0;
								var pct = total ? Math.round(n / total * 100) : 0;
								return (
									<div key={star} className="flex items-center gap-2 text-xs text-gray-600">
										<span className="w-3 tabular-nums">{star}</span>
										<IconStarFilled size={12} className="text-amber-400" />
										<div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
											<div className="h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
										</div>
										<span className="w-6 text-right tabular-nums">{n}</span>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>

			{summary?.reviews?.length > 0 && (
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between gap-3">
						<div className="text-sm font-medium text-gray-700">Latest reviews</div>
						<Link href="/dashboard/reviews" className="text-xs font-medium text-[#634FE5] hover:underline">All reviews →</Link>
					</div>
					<ul className="flex flex-col divide-y divide-gray-100 rounded-lg border border-gray-200">
						{summary.reviews.map(r => {
							var status = STATUS[r.status] ?? STATUS.pending;
							return (
								<li key={r.id} className="flex flex-col gap-2 p-3">
									<div className="flex flex-wrap items-center gap-2">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										{r.avatar && <img src={r.avatar} alt="" className="h-6 w-6 rounded-full" />}
										<span className="text-sm font-medium text-gray-800">{r.author || 'Anonymous'}</span>
										{r.verified && <span className="inline-flex items-center gap-0.5 text-xs text-emerald-700"><IconRosetteDiscountCheck size={14} />Verified buyer</span>}
										{r.parent > 0 && <span className="text-xs text-gray-400">reply</span>}
										<span className={`ml-auto rounded-full px-2 py-0.5 text-xs ring-1 ${status.className}`}>{status.label}</span>
									</div>
									{r.rate > 0 && <Stars value={r.rate} />}
									<p className="line-clamp-3 whitespace-pre-line text-sm text-gray-600">{r.content}</p>
									<div className="flex flex-wrap items-center gap-2">
										<span className="text-xs text-gray-400">{r.date}</span>
										<span className="ml-auto flex gap-1.5">
											{r.status !== 'approved' && (
												<button type="button" className={ACTION_BUTTON} disabled={busy === r.id} onClick={() => moderate(r, 'approve')}><IconCheck size={14} />Approve</button>
											)}
											{r.status === 'approved' && (
												<button type="button" className={ACTION_BUTTON} disabled={busy === r.id} onClick={() => moderate(r, 'hold')}><IconClockPause size={14} />Unpublish</button>
											)}
											{r.status !== 'trash' && (
												<button type="button" className={`${ACTION_BUTTON} hover:!bg-red-50 hover:!text-red-600`} disabled={busy === r.id} onClick={() => moderate(r, 'trash')}><IconTrash size={14} />Trash</button>
											)}
										</span>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			)}

			{summary && summary.reviews?.length === 0 && (
				<p className="text-sm text-gray-500">No reviews yet.</p>
			)}
		</div>
	);
};

export default ProductReviewsEditor;
