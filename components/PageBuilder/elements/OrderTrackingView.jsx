'use client'

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { IconAlertCircle, IconAlertTriangle, IconCheck, IconExternalLink, IconPackage, IconSearch, IconTruckDelivery } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import { useCounterStore } from "../../../store/useCounterStore";
import { useUtilsStore } from "../../../store/useUtilsStore";
import { elementCssClasses } from "../ElementsDefinition";
import {
	ORDER_STATUS_LABELS, PAYMENT_STATUS_LABELS, TRACKING_STATUS_LABELS, COURIER_LABELS,
	STOPPED_STATUSES, ATTENTION_STATUSES, statusLabel, titleCase, progressRank, formatOrderDate,
} from "./orderTrackingStatus";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const ORDER_TRACKING_DEFAULTS = {
	title: "Track your order",
	subtitle: "Enter your order number and the phone number or email you ordered with.",
	orderLabel: "Order number",
	orderPlaceholder: "e.g. 1024",
	contactLabel: "Phone or email",
	contactPlaceholder: "01XXXXXXXXX or you@example.com",
	buttonText: "Track order",
	showProgress: true,
	showItems: true,
	showTimeline: true,
	stepLabels: ["Placed", "Confirmed", "Shipped", "Delivered"],
};

/* An option, or its default when the block does not set it (empty text counts as set for title / subtitle, which hides them). */
const opt = (options, key) => (options?.[key] !== undefined ? options[key] : ORDER_TRACKING_DEFAULTS[key]);

/*
	The tracked order: number, date and status, the progress bar (or a
	notice for an order that stopped), the items, then each delivery with its
	courier, tracking link and updates. Shared by the shop view below and
	the builder preview (OrderTracking.jsx, with sample data).
*/
export function OrderTrackingResult({ cls, options, data, wrapCurrency }) {
	const order = data?.order ?? {};
	const items = data?.items ?? [];
	const deliveries = data?.deliveries ?? [];
	const stopped = STOPPED_STATUSES.includes(order.status);
	const rank = progressRank(order, deliveries);
	const steps = Array.isArray(options?.stepLabels) && options.stepLabels.length === 4 ? options.stepLabels : ORDER_TRACKING_DEFAULTS.stepLabels;
	const total = wrapCurrency ? wrapCurrency(order.total_amount) : `${order.total_amount ?? ''} ${order.currency ?? ''}`.trim();

	return (
		<div className={cls('result')} aria-live="polite">

			<div className={cls('summary')}>
				<div>
					<p className={cls('order-number')}>Order #{order.id}</p>
					<p className={cls('order-meta')}>
						{[
							formatOrderDate(order.created_at) && `Placed ${formatOrderDate(order.created_at)}`,
							total,
							order.payment_status && statusLabel(PAYMENT_STATUS_LABELS, order.payment_status),
							order.shipping_method,
						].filter(Boolean).join(' · ')}
					</p>
				</div>
				<span className={`${cls('status-badge')} ${stopped ? cls('status-badge-stopped') : ''}`}>
					{statusLabel(ORDER_STATUS_LABELS, order.status)}
				</span>
			</div>

			{stopped && (
				<p role="status" className={cls('notice')}>
					<IconAlertTriangle size={16} className="mt-0.5 shrink-0" />
					<span>This order is {statusLabel(ORDER_STATUS_LABELS, order.status).toLowerCase()}. Contact us if you have any questions about it.</span>
				</p>
			)}

			{!stopped && opt(options, 'showProgress') !== false && (
				<ol className={cls('progress')} aria-label="Order progress">
					{steps.map((label, index) => {
						const done = index <= rank;
						const current = index === rank;
						return (
							<li key={index} className={`${cls('step')} ${done ? cls('step-done') : ''} ${current ? cls('step-current') : ''}`} aria-current={current ? 'step' : undefined}>
								<span className={`${cls('step-dot')} ${done ? cls('step-dot-done') : ''}`}>{done ? <IconCheck size={12} /> : index + 1}</span>
								<span className={`${cls('step-label')} ${done ? cls('step-label-done') : ''}`}>{label}</span>
							</li>
						);
					})}
				</ol>
			)}

			{opt(options, 'showItems') !== false && items.length > 0 && (
				<div className={cls('section')}>
					<p className={cls('section-title')}>Items</p>
					<ul className={cls('items')}>
						{items.map((item, index) => (
							<li key={index} className={cls('item')}>
								<span className={cls('item-name')}>{item.name || 'Item'}</span>
								<span className={cls('item-quantity')}>× {item.quantity}</span>
							</li>
						))}
					</ul>
				</div>
			)}

			{opt(options, 'showTimeline') !== false && (
				<div className={cls('section')}>
					<p className={cls('section-title')}>Delivery</p>

					{deliveries.length === 0 && (
						<p className={cls('empty')}>No delivery updates yet. They will appear here once your order is on its way.</p>
					)}

					{deliveries.map((delivery, index) => (
						<div key={index} className={cls('delivery')}>
							<div className={cls('delivery-header')}>
								<span className={cls('courier')}>
									<IconTruckDelivery size={16} className="shrink-0" />
									{COURIER_LABELS[delivery.courier] || titleCase(delivery.courier) || 'Delivery'}
									{delivery.tracking_code && <span className={cls('tracking-code')}>{delivery.tracking_code}</span>}
								</span>
								{delivery.tracking_link && (
									<a href={delivery.tracking_link} target="_blank" rel="noopener noreferrer" className={cls('tracking-link')}>
										Track with courier <IconExternalLink size={14} />
									</a>
								)}
							</div>

							{(delivery.events ?? []).length > 0 ? (
								<ol className={cls('timeline')}>
									{delivery.events.map((event, eventIndex) => (
										<li key={eventIndex} className={`${cls('event')} ${eventIndex === 0 ? cls('event-latest') : ''} ${ATTENTION_STATUSES.includes(event.status) ? cls('event-attention') : ''}`}>
											<span className={cls('event-status')}>{statusLabel(TRACKING_STATUS_LABELS, event.status)}</span>
											{event.notes && <span className={cls('event-notes')}>{event.notes}</span>}
											{formatOrderDate(event.datetime, true) && <span className={cls('event-date')}>{formatOrderDate(event.datetime, true)}</span>}
										</li>
									))}
								</ol>
							) : (
								<p className={cls('empty')}>{statusLabel(TRACKING_STATUS_LABELS, delivery.status) || 'Shipped'}{formatOrderDate(delivery.datetime) ? ` · ${formatOrderDate(delivery.datetime)}` : ''}</p>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

/*
	The lookup form. Controlled from outside so the builder can draw it
	inert, with no submit.
*/
export function OrderTrackingForm({ cls, id, options, orderId, contact, setOrderId, setContact, onSubmit, loading, signedIn }) {
	return (
		<form onSubmit={onSubmit} noValidate className={cls('form')}>
			<div className={cls('fields')}>
				<div className={cls('field')}>
					<label htmlFor={`${id}-track-order`} className={cls('field-label')}>{opt(options, 'orderLabel')}</label>
					<input id={`${id}-track-order`} type="text" inputMode="numeric" autoComplete="off" placeholder={opt(options, 'orderPlaceholder')} value={orderId} onChange={ev => setOrderId?.(ev.target.value)} className={cls('field-input')} />
				</div>
				<div className={cls('field')}>
					<label htmlFor={`${id}-track-contact`} className={cls('field-label')}>
						{opt(options, 'contactLabel')}{signedIn ? ' (optional for your own orders)' : ''}
					</label>
					<input id={`${id}-track-contact`} type="text" autoComplete="tel" placeholder={opt(options, 'contactPlaceholder')} value={contact} onChange={ev => setContact?.(ev.target.value)} className={cls('field-input')} />
				</div>
			</div>
			<button type="submit" disabled={loading} className={cls('submit-button')}>
				{loading ? <Spinner /> : <IconSearch size={16} />}
				{opt(options, 'buttonText')}
			</button>
		</form>
	);
}

export function OrderTrackingHeader({ cls, options }) {
	const title = opt(options, 'title');
	const subtitle = opt(options, 'subtitle');
	if (!title && !subtitle) return null;
	return (
		<div className={cls('header')}>
			{title && <h3 className={cls('title')}><IconPackage size={20} className="shrink-0" />{title}</h3>}
			{subtitle && <p className={cls('subtitle')}>{subtitle}</p>}
		</div>
	);
}

/*
	The storefront's Order Tracking block.

	The shopper gives the order number and the phone or email they ordered
	with; a signed-in customer's own orders need only the number. The server
	(combo-store/v2/track_order) checks both and answers a miss the same way
	whatever was wrong, so the form cannot be used to find order numbers.

	`?order=1024` in the page address fills the number in (for a link from a
	confirmation email or the thank-you page), and a signed-in customer's
	order is then looked up straight away.
*/
const OrderTrackingView = (props) => {

	var cls = elementCssClasses('orderTracking', props?.cssSelectors);
	var id = props?.id;
	var options = props?.options ?? {};

	const token = useCounterStore((s) => s.token);
	const { wrapCurrency } = useUtilsStore();

	const [orderId, setOrderId] = useState('');
	const [contact, setContact] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const track = (number, contactValue) => {
		if (!String(number).trim()) {
			setError('Please enter your order number.');
			return;
		}
		if (!token && !String(contactValue).trim()) {
			setError('Please enter the phone number or email you ordered with.');
			return;
		}

		setLoading(true);
		setError(null);

		fetch(serverUrl + "wp-json/combo-store/v2/track_order", {
			method: "POST",
			headers: token
				? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
				: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ order_id: String(number).trim(), contact: String(contactValue).trim() }),
		})
			.then((response) => response.json())
			.then((res) => {
				if (res?.status === 'success') {
					setData(res);
				} else {
					setData(null);
					setError(res?.message || "We couldn't find that order.");
				}
			})
			.catch(() => {
				setData(null);
				setError("We couldn't look up your order just now. Please try again.");
			})
			.finally(() => setLoading(false));
	};

	/* ?order= from the address; read after mount so server and first client render agree. */
	useEffect(() => {
		try {
			const fromUrl = (new URLSearchParams(window.location.search).get('order') || '').replace(/\D+/g, '');
			if (fromUrl) {
				setOrderId(fromUrl);
				if (token) track(fromUrl, '');
			}
		} catch { /* no address to read */ }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const onSubmit = (ev) => {
		ev.preventDefault();
		track(orderId, contact);
	};

	return (
		<div id={id} type={props?.type} className={cls('*')}>
			<OrderTrackingHeader cls={cls} options={options} />

			<OrderTrackingForm cls={cls} id={id} options={options} orderId={orderId} contact={contact} setOrderId={setOrderId} setContact={setContact} onSubmit={onSubmit} loading={loading} signedIn={Boolean(token)} />

			{error && (
				<p role="alert" className={cls('error')}>
					<IconAlertCircle size={16} className="mt-0.5 shrink-0" />
					<span>{error}</span>
				</p>
			)}

			{data && <OrderTrackingResult cls={cls} options={options} data={data} wrapCurrency={wrapCurrency} />}
		</div>
	);
};

OrderTrackingView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default OrderTrackingView;
