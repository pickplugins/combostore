'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconRepeat, IconCalendarEvent } from "@tabler/icons-react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useSavedToken } from './useSavedToken';
import { StatusBadge, AccountEmptyState, AccountListSkeleton, AccountPager, AccountNotice, formatAccountDate } from './accountUi';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* "month" + 1 -> "Every month", "week" + 2 -> "Every 2 weeks". */
function describeInterval(interval, count) {
	var unit = String(interval || "month").toLowerCase();
	var n = parseInt(count) || 1;
	return n === 1 ? `Every ${unit}` : `Every ${n} ${unit}s`;
}

/*
	The customer's repeat orders, as cards.

	This used the dashboard's admin table and linked to /subscriptions/{id}
	and /orders/{id}, which the storefront does not have. `Link` was never
	imported either, so the block crashed as soon as there was a
	subscription to show.
*/
const CustomerSubscriptionsView = (props) => {
	const { id, type } = props;

	var cssSelectors = props?.cssSelectors ?? {};

	const { wrapCurrency } = useUtilsStore();
	const token = useSavedToken();

	var [subscriptionsData, setsubscriptionsData] = useState(null);
	var [page, setpage] = useState(1);
	var [loading, setloading] = useState(false);
	var [error, seterror] = useState(null);

	useEffect(() => {

		if (!token) return;

		var cancelled = false;

		setloading(true);
		seterror(null);

		/* The endpoint requires the customer's token and returns only their
		   own subscriptions. */
		fetch(serverUrl + "wp-json/combo-store/v2/get_subscriptions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ keyword: "", page: page, order: "DESC", per_page: 10, first_date: "", last_date: "" }),
		})
			.then((response) => {
				if (!response.ok) throw new Error("request failed");
				return response.json();
			})
			.then((res) => {
				if (cancelled) return;
				setsubscriptionsData({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 0 });
			})
			.catch(() => {
				if (!cancelled) seterror("We couldn't load your subscriptions. Please refresh the page to try again.");
			})
			.finally(() => {
				if (!cancelled) setloading(false);
			});

		return () => { cancelled = true; };

	}, [token, page]);

	var subscriptions = subscriptionsData?.posts ?? [];

	return (
		<div id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}`}>

			<div className="flex flex-col gap-4">

				<div className="flex items-baseline justify-between gap-3">
					<h3 className="text-lg font-semibold text-gray-900">Subscriptions</h3>
					{subscriptionsData?.total > 0 && (
						<span className="text-sm text-gray-500">{subscriptionsData.total} {subscriptionsData.total == 1 ? "subscription" : "subscriptions"}</span>
					)}
				</div>

				{error && <AccountNotice>{error}</AccountNotice>}

				{!error && (token === undefined || (loading && !subscriptionsData)) && <AccountListSkeleton rows={2} />}

				{!error && subscriptionsData && subscriptions.length == 0 && (
					<AccountEmptyState icon={IconRepeat} title="No subscriptions">
						Tick “Subscribe &amp; repeat this order” at checkout to get the same order delivered on a schedule.
					</AccountEmptyState>
				)}

				{subscriptions.length > 0 && (
					<ul className={`flex flex-col gap-3 transition-opacity ${loading ? 'opacity-60' : ''}`}>
						{subscriptions.map(subscription => (
							<li key={subscription.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">

								<div className="flex flex-wrap items-start justify-between gap-3">
									<div className="flex items-center gap-3">
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]">
											<IconRepeat size={20} />
										</span>
										<div>
											<div className="text-sm font-semibold text-gray-900">Subscription #{subscription.id}</div>
											<div className="text-xs text-gray-500">
												{describeInterval(subscription.renewal_interval, subscription.interval_count)}
												{subscription.order_id ? ` · from order #${subscription.order_id}` : ''}
											</div>
										</div>
									</div>
									<StatusBadge value={subscription.status} />
								</div>

								<dl className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3 text-sm sm:grid-cols-3">
									<div>
										<dt className="text-xs text-gray-500">Started</dt>
										<dd className="font-medium text-gray-800">{formatAccountDate(subscription.start_date) || '—'}</dd>
									</div>
									<div>
										<dt className="flex items-center gap-1 text-xs text-gray-500"><IconCalendarEvent size={12} /> Next delivery</dt>
										<dd className="font-medium text-gray-800">{formatAccountDate(subscription.next_billing_date) || '—'}</dd>
									</div>
									<div className="col-span-2 sm:col-span-1 sm:text-right">
										<dt className="text-xs text-gray-500">Each delivery</dt>
										<dd className="text-base font-semibold text-gray-900">{wrapCurrency(subscription.total_amount)}</dd>
									</div>
								</dl>

							</li>
						))}
					</ul>
				)}

				<AccountPager page={page} maxPages={subscriptionsData?.maxPages} loading={loading} onChange={setpage} />

			</div>
		</div>
	);
};

CustomerSubscriptionsView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};

export default CustomerSubscriptionsView;
