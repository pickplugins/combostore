'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconPackage, IconShoppingBag } from "@tabler/icons-react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useCounterStore } from '../../../store/useCounterStore';
import { useSavedToken } from './useSavedToken';
import { StatusBadge, AccountEmptyState, AccountListSkeleton, AccountPager, AccountNotice, formatAccountDate } from './accountUi';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* How many item names a card lists before "+N more". */
const visibleItemCount = 3;

/*
	The customer's own orders, as cards.

	This used the dashboard's admin table, with bulk-select checkboxes, a
	sort dropdown and order numbers linking to /orders/{id}, which the
	storefront does not have. It also fetched before the saved token was
	read, so the request went out as "Bearer undefined" and the list stayed
	empty.
*/
const CustomerOrdersView = (props) => {
	const { id, type } = props;

	var cssSelectors = props?.cssSelectors ?? {};

	const { orderStatusArgs, paymentGatewaysArgs } = useCounterStore();
	const { wrapCurrency } = useUtilsStore();
	const token = useSavedToken();

	var [ordersData, setordersData] = useState(null);
	var [page, setpage] = useState(1);
	var [loading, setloading] = useState(false);
	var [error, seterror] = useState(null);

	useEffect(() => {

		/* Not known yet, or logged out: nothing to ask for. */
		if (!token) return;

		var cancelled = false;

		setloading(true);
		seterror(null);

		fetch(serverUrl + "wp-json/combo-store/v2/get_orders", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ keyword: "", page: page, order: "DESC", per_page: 10, first_date: "", last_date: "" }),
		})
			.then((response) => {
				if (!response.ok) throw new Error('request failed');
				return response.json();
			})
			.then((res) => {
				if (cancelled) return;
				setordersData({ posts: res?.posts ?? [], total: res?.total ?? 0, maxPages: res?.max_pages ?? 0 });
			})
			.catch(() => {
				if (cancelled) return;
				seterror("We couldn't load your orders. Please refresh the page to try again.");
			})
			.finally(() => {
				if (!cancelled) setloading(false);
			});

		return () => { cancelled = true; };

	}, [token, page]);

	var orders = ordersData?.posts ?? [];

	function paymentLabel(method) {
		return paymentGatewaysArgs?.[method]?.label ?? method ?? "";
	}

	return (
		<div id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}`}>

			<div className="flex flex-col gap-4">

				<div className="flex items-baseline justify-between gap-3">
					<h3 className="text-lg font-semibold text-gray-900">Your orders</h3>
					{ordersData?.total > 0 && (
						<span className="text-sm text-gray-500">{ordersData.total} {ordersData.total == 1 ? 'order' : 'orders'}</span>
					)}
				</div>

				{error && <AccountNotice>{error}</AccountNotice>}

				{!error && (token === undefined || (loading && !ordersData)) && <AccountListSkeleton />}

				{!error && ordersData && orders.length == 0 && (
					<AccountEmptyState icon={IconShoppingBag} title="No orders yet" actionHref="/shop" actionLabel="Start shopping">
						When you place an order, it will show up here so you can follow it.
					</AccountEmptyState>
				)}

				{orders.length > 0 && (
					<ul className={`flex flex-col gap-3 transition-opacity ${loading ? 'opacity-60' : ''}`}>
						{orders.map(order => {
							var items = Array.isArray(order?.order_items) ? order.order_items : [];
							var shown = items.slice(0, visibleItemCount);
							var hiddenCount = items.length - shown.length;

							return (
								<li key={order.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">

									<div className="flex flex-wrap items-start justify-between gap-3">
										<div className="flex items-center gap-3">
											<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]">
												<IconPackage size={20} />
											</span>
											<div>
												<div className="text-sm font-semibold text-gray-900">Order #{order.id}</div>
												<div className="text-xs text-gray-500">{formatAccountDate(order.created_at || order.updated_at)}</div>
											</div>
										</div>
										<StatusBadge value={order.status} label={orderStatusArgs?.[order.status]?.label} />
									</div>

									{shown.length > 0 && (
										<ul className="mt-3 flex flex-col gap-1 border-t border-gray-100 pt-3 text-sm text-gray-700">
											{shown.map(item => (
												<li key={item.id} className="flex justify-between gap-3">
													<span className="min-w-0 truncate" dangerouslySetInnerHTML={{ __html: item.product_name || 'Item' }} />
													<span className="shrink-0 text-gray-500">× {item.quantity}</span>
												</li>
											))}
											{hiddenCount > 0 && (
												<li className="text-xs text-gray-500">+{hiddenCount} more {hiddenCount == 1 ? 'item' : 'items'}</li>
											)}
										</ul>
									)}

									<div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
										<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
											{order.payment_method && <span>{paymentLabel(order.payment_method)}</span>}
											{order.payment_status && (
												<>
													<span aria-hidden="true">·</span>
													<span>Payment {String(order.payment_status).toLowerCase()}</span>
												</>
											)}
										</div>
										<div className="text-base font-semibold text-gray-900">{wrapCurrency(order.total_amount)}</div>
									</div>

								</li>
							);
						})}
					</ul>
				)}

				<AccountPager page={page} maxPages={ordersData?.maxPages} loading={loading} onChange={setpage} />

			</div>
		</div>
	);
};

CustomerOrdersView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};

export default CustomerOrdersView;
