'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconPackage, IconShoppingBag } from "@tabler/icons-react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useCounterStore } from '../../../store/useCounterStore';
import { useSavedToken } from './useSavedToken';
import { StatusBadge, AccountEmptyState, AccountListSkeleton, AccountPager, AccountNotice, formatAccountDate } from './accountUi';
import { elementCssClasses } from "../ElementsDefinition";

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
	/* Each part's classes; a key the block lacks falls back to the customerOrders defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerOrders', cssSelectors);

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
		<div id={id} type={type} className={cls('*')}>

			<div className={cls('panel')}>

				{/* Pages or tabs that already label this panel set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Your orders</h3>
						{ordersData?.total > 0 && (
							<span className={cls('count')}>{ordersData.total} {ordersData.total == 1 ? 'order' : 'orders'}</span>
						)}
					</div>
				)}

				{error && <AccountNotice>{error}</AccountNotice>}

				{!error && (token === undefined || (loading && !ordersData)) && <AccountListSkeleton />}

				{!error && ordersData && orders.length == 0 && (
					<AccountEmptyState icon={IconShoppingBag} title="No orders yet" actionHref="/shop" actionLabel="Start shopping">
						When you place an order, it will show up here so you can follow it.
					</AccountEmptyState>
				)}

				{orders.length > 0 && (
					<ul className={`${cls('list')} ${loading ? cls('list-loading') : ''}`}>
						{orders.map(order => {
							var items = Array.isArray(order?.order_items) ? order.order_items : [];
							var shown = items.slice(0, visibleItemCount);
							var hiddenCount = items.length - shown.length;

							return (
								<li key={order.id} className={cls('order')}>

									<div className={cls('order-header')}>
										<div className={cls('order-heading')}>
											<span className={cls('order-icon')}>
												<IconPackage size={20} />
											</span>
											<div>
												<div className={cls('order-number')}>Order #{order.id}</div>
												<div className={cls('order-date')}>{formatAccountDate(order.created_at || order.updated_at)}</div>
											</div>
										</div>
										<StatusBadge value={order.status} label={orderStatusArgs?.[order.status]?.label} />
									</div>

									{shown.length > 0 && (
										<ul className={cls('items')}>
											{shown.map(item => (
												<li key={item.id} className={cls('item')}>
													<span className={cls('item-name')} dangerouslySetInnerHTML={{ __html: item.product_name || 'Item' }} />
													<span className={cls('item-quantity')}>× {item.quantity}</span>
												</li>
											))}
											{hiddenCount > 0 && (
												<li className={cls('items-more')}>+{hiddenCount} more {hiddenCount == 1 ? 'item' : 'items'}</li>
											)}
										</ul>
									)}

									<div className={cls('order-footer')}>
										<div className={cls('payment')}>
											{order.payment_method && <span>{paymentLabel(order.payment_method)}</span>}
											{order.payment_status && (
												<>
													<span aria-hidden="true">·</span>
													<span>Payment {String(order.payment_status).toLowerCase()}</span>
												</>
											)}
										</div>
										<div className={cls('order-total')}>{wrapCurrency(order.total_amount)}</div>
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
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CustomerOrdersView;
