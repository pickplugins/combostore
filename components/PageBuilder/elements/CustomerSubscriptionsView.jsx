'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconRepeat, IconCalendarEvent } from "@tabler/icons-react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useSavedToken } from './useSavedToken';
import { StatusBadge, AccountEmptyState, AccountListSkeleton, AccountPager, AccountNotice, formatAccountDate } from './accountUi';
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* "month" + 1 -> "Every month", "week" + 2 -> "Every 2 weeks". */
export function describeInterval(interval, count) {
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
	/* Each part's classes; a key the block lacks falls back to the customerSubscriptions defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerSubscriptions', cssSelectors);

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
		<div id={id} type={type} className={cls('*')}>

			<div className={cls('panel')}>

				{/* Pages or tabs that already label this panel set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Subscriptions</h3>
						{subscriptionsData?.total > 0 && (
							<span className={cls('count')}>{subscriptionsData.total} {subscriptionsData.total == 1 ? "subscription" : "subscriptions"}</span>
						)}
					</div>
				)}

				{error && <AccountNotice>{error}</AccountNotice>}

				{!error && (token === undefined || (loading && !subscriptionsData)) && <AccountListSkeleton rows={2} />}

				{!error && subscriptionsData && subscriptions.length == 0 && (
					<AccountEmptyState icon={IconRepeat} title="No subscriptions">
						Tick “Subscribe &amp; repeat this order” at checkout to get the same order delivered on a schedule.
					</AccountEmptyState>
				)}

				{subscriptions.length > 0 && (
					<ul className={`${cls('list')} ${loading ? cls('list-loading') : ''}`}>
						{subscriptions.map(subscription => (
							<li key={subscription.id} className={cls('subscription')}>

								<div className={cls('subscription-header')}>
									<div className={cls('subscription-heading')}>
										<span className={cls('subscription-icon')}>
											<IconRepeat size={20} />
										</span>
										<div>
											<div className={cls('subscription-number')}>Subscription #{subscription.id}</div>
											<div className={cls('subscription-schedule')}>
												{describeInterval(subscription.renewal_interval, subscription.interval_count)}
												{subscription.order_id ? ` · from order #${subscription.order_id}` : ''}
											</div>
										</div>
									</div>
									<StatusBadge value={subscription.status} />
								</div>

								<dl className={cls('details')}>
									<div className={cls('detail')}>
										<dt className={cls('detail-label')}>Started</dt>
										<dd className={cls('detail-value')}>{formatAccountDate(subscription.start_date) || '—'}</dd>
									</div>
									<div className={cls('detail')}>
										<dt className={cls('detail-label')}><IconCalendarEvent size={12} /> Next delivery</dt>
										<dd className={cls('detail-value')}>{formatAccountDate(subscription.next_billing_date) || '—'}</dd>
									</div>
									<div className={cls('detail-total')}>
										<dt className={cls('detail-label')}>Each delivery</dt>
										<dd className={cls('total-value')}>{wrapCurrency(subscription.total_amount)}</dd>
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
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CustomerSubscriptionsView;
