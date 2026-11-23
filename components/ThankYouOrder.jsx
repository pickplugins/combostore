'use client'

import { useEffect, useMemo } from "react";

import { useCounterStore } from '@/store/useCounterStore'
import InvoiceWithPDF from "@/components/InvoiceWithPDF";
import { sendMetaEvent } from "@/lib/sendMetaEvent";
import { clearCheckoutDraft } from "@/lib/checkoutDraft";

/* The buyer, for Meta's matching (hashed on our server before it is sent). */
const metaUser = (order) => ({
	email: order?.billing_email ?? order?.email,
	phone: order?.billing_phone,
	name: order?.billing_name,
	city: order?.billing_city ?? order?.city,
	country: order?.billing_country ?? order?.country,
	external_id: order?.customer_id ?? order?.user_id ?? order?.userid,
});

/*
	One marker per gateway the buyer is redirected away to. Each is set by that
	gateway's checkout button and read back here; see the effect below for why
	the cart is emptied on this page rather than at checkout.
*/
const REDIRECT_PAYMENT_MARKERS = ['aamarpay:pending_order', 'stripe:pending_order', 'eps:pending_order', 'bkash:pending_order', 'nagad:pending_order', 'paddle:pending_order', 'shurjopay:pending_order', 'sslcommerz:pending_order', 'paystation:pending_order', 'uddoktapay:pending_order', 'portwallet:pending_order'];

/*
	The order on the thank-you page: its invoice, plus what the page does in
	the browser - the Meta events and emptying the cart after a redirect
	payment. The page (app/thank-you/[slug]/page.jsx) loads the order on the
	server and renders this inside the Thank You template, after the
	template's own content.
*/
const ThankYouOrder = ({ slug, order, lineItems }) => {

	const { resetCartItems, cartToggle, setcartToggle } = useCounterStore()

	var invoiceData = useMemo(() => {
		if (!order) return null;
		return {
			from: { name: "", address: "", city: "" },
			to: {
				name: order?.billing_name,
				address: order?.billing_address,
				city: order?.city,
				phone: order?.billing_phone,
			},
			items: (lineItems ?? []).map(item => ({ id: item.id, product_name: item.product_name || item.title, qty: item.quantity, price: item.price })),
			payment_method: order?.payment_method,
			payment_status: order?.payment_status,
			total: order?.total_amount,
			discount: order?.discount_amount,
			shipping: order?.shipping_amount,
			subtotal: order?.subtotal_amount,
			taxPercent: 10,
			invoiceNumber: order?.id,
			date: order?.created_at,
		};
	}, [order, lineItems]);

	useEffect(() => {
		if (!order) return;
		sendMetaEvent({ event_name: 'VisitThankYou', value: order?.total_amount, currency: order?.currency || "BDT", user: metaUser(order) });
	}, [order]);


	/*
		A gateway the buyer is redirected away to - aamarPay, Stripe, EPS, bKash, Nagad -
		cannot empty the cart itself: the checkout page is gone by the time the payment
		lands, and the order is marked paid on the server. So the cart is emptied
		here instead, on the way back.

		The marker the checkout left behind is what makes that safe. Without it,
		anyone reopening an old paid order would lose the cart they had just
		filled; with it, only the order this browser was sent off to pay for
		clears anything, and only once.

		Every redirect gateway's marker is checked, because the buyer may have
		started at one and paid at another - and only the markers naming this order
		are cleared, so a stale one cannot empty a cart filled since.
	*/
	useEffect(() => {

		if (order?.payment_status !== 'paid') {
			return;
		}

		/* A buyer sent back from a failed payment still needs what they typed. */
		clearCheckoutDraft();

		const matched = REDIRECT_PAYMENT_MARKERS.filter(key => {
			try {
				return window.sessionStorage.getItem(key) === slug;
			} catch (error) {
				/* Private mode, or storage switched off. Nothing to clear. */
				return false;
			}
		});

		if (!matched.length) {
			return;
		}

		matched.forEach(key => {
			try {
				window.sessionStorage.removeItem(key);
			} catch (error) {
			}
		});

		resetCartItems();
		setcartToggle(!cartToggle);

		/* Same event id as the checkout's (purchase-<order id>), so Meta counts this order once. */
		sendMetaEvent({
			event_name: 'Purchase',
			eventId: order?.id ? `purchase-${order.id}` : undefined,
			once: true,
			value: order?.total_amount,
			currency: order?.currency || "BDT",
			customData: {
				content_type: 'product',
				content_ids: (lineItems ?? []).map(item => String(item?.product_id ?? item?.id)).filter(Boolean),
				num_items: (lineItems ?? []).reduce((sum, item) => sum + (parseInt(item?.quantity) || 1), 0),
				...(order?.id ? { order_id: String(order.id) } : {}),
			},
			user: metaUser(order),
		});

	}, [order, slug]);


	if (!order) {
		return (
			<div className="mx-auto w-full max-w-[900px] px-5 py-10 text-center text-sm text-gray-600">
				We couldn&apos;t find this order. Please check the link, or log in to your account to see your orders.
			</div>
		);
	}

	return (
		<div className="mx-auto grid w-full max-w-[900px] grid-cols-1 gap-5 px-5 pb-20">
			<InvoiceWithPDF invoice={invoiceData} />
		</div>
	);
};

export default ThankYouOrder;
