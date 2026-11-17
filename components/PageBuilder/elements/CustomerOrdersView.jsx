'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { IconFileInvoice, IconPackage, IconShoppingBag } from "@tabler/icons-react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useCounterStore } from '../../../store/useCounterStore';
import { useSavedToken } from './useSavedToken';
import { StatusBadge, AccountEmptyState, AccountListSkeleton, AccountPager, AccountNotice, formatAccountDate } from './accountUi';
import { elementCssClasses } from "../ElementsDefinition";
import OrderLicenseList from './OrderLicenseList';
import OrderDownloadList from './OrderDownloadList';
import OrderInvoiceModal from './OrderInvoiceModal';

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

	const { orderStatusArgs, paymentGateways } = useCounterStore();
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
	var showLicenses = !props?.options?.hideLicenses;

	/* License keys for the orders on this page, by order id. One request per
		 page; get_licenses only returns the signed-in customer's own. A failure
		 just leaves the cards without keys. */
	var [licensesByOrder, setlicensesByOrder] = useState({});
	var orderIdsKey = orders.map(order => order.id).join(",");

	useEffect(() => {
		if (!token || !showLicenses || !orderIdsKey) return;

		var cancelled = false;
		var order_ids = orderIdsKey.split(",").map(Number);

		fetch(serverUrl + "wp-json/combo-store/v2/get_licenses", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ order_ids, per_page: 100, order: "ASC" }),
		})
			.then((response) => response.ok ? response.json() : null)
			.then((res) => {
				if (cancelled || !res) return;
				var grouped = {};
				for (var license of res?.posts ?? []) {
					(grouped[license.order_id] = grouped[license.order_id] ?? []).push(license);
				}
				setlicensesByOrder(grouped);
			})
			.catch(() => { });

		return () => { cancelled = true; };

	}, [token, orderIdsKey, showLicenses]);


	/* Files the orders on this page can download (only paid / completed
		 orders have any), with signed links that last an hour. */
	var showDownloads = !props?.options?.hideDownloads;
	var [downloadsByOrder, setdownloadsByOrder] = useState({});

	function fetchDownloads(order_ids) {
		return fetch(serverUrl + "wp-json/combo-store/v2/get_order_downloads", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ order_ids }),
		})
			.then((response) => response.ok ? response.json() : null)
			.then((res) => res?.downloads ?? null)
			.catch(() => null);
	}

	useEffect(() => {
		if (!token || !showDownloads || !orderIdsKey) return;

		var cancelled = false;
		fetchDownloads(orderIdsKey.split(",").map(Number)).then((downloads) => {
			if (!cancelled && downloads) setdownloadsByOrder(downloads);
		});

		return () => { cancelled = true; };

	}, [token, orderIdsKey, showDownloads]);

	/* A link left open past its hour: fetch that order's links again and hand
		 back the new one for this file. */
	function renewDownload(file) {
		return fetchDownloads([file.order_id]).then((downloads) => {
			var fresh = downloads?.[file.order_id];
			if (!fresh) return null;
			setdownloadsByOrder(prev => ({ ...prev, [file.order_id]: fresh }));
			return fresh.find(item => item.file_id === file.file_id)?.url ?? null;
		});
	}

	/* The order whose invoice is open, if any. Built from the loaded row. */
	var showInvoice = !props?.options?.hideInvoice;
	var [invoiceOrder, setinvoiceOrder] = useState(null);
	var closeInvoice = useCallback(() => setinvoiceOrder(null), []);

	function paymentLabel(method) {
		return paymentGateways?.[method]?.label ?? method ?? "";
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

									{showLicenses && <OrderLicenseList licenses={licensesByOrder[order.id]} cls={cls} />}

									{showDownloads && <OrderDownloadList downloads={downloadsByOrder[order.id]} cls={cls} onRenew={renewDownload} />}

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
										<div className={cls('order-actions')}>
											{showInvoice && (
												<button type="button" className={cls('invoice-button')} onClick={() => setinvoiceOrder(order)}
													aria-label={`View invoice for order #${order.id}`}>
													<IconFileInvoice size={14} /> Invoice
												</button>
											)}
											<div className={cls('order-total')}>{wrapCurrency(order.total_amount)}</div>
										</div>
									</div>

								</li>
							);
						})}
					</ul>
				)}

				<AccountPager page={page} maxPages={ordersData?.maxPages} loading={loading} onChange={setpage} />

				{invoiceOrder && <OrderInvoiceModal order={invoiceOrder} onClose={closeInvoice} />}

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
