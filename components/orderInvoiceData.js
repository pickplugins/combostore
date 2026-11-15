/*
	An order (a cstore_orders row) and its line items -> the object
	InvoiceWithPDF draws. Used by the dashboard's order invoice (OrderInvoice)
	and the customer's order list (CustomerOrdersView), so both print the same
	invoice for the same order.

	No `from`: InvoiceWithPDF fills the sender from the shop's Settings (site
	title, address, email, WhatsApp, logo).
*/
export function orderToInvoice(order, lineItems) {
	if (!order) return null;

	var items = lineItems ?? order?.order_items ?? [];

	return {
		to: {
			name: order?.billing_name,
			address: order?.billing_address,
			city: [order?.billing_city, order?.billing_country].filter(Boolean).join(", "),
			phone: order?.billing_phone,
		},
		items: (Array.isArray(items) ? items : []).map(item => ({ id: item.id, product_name: item.product_name, qty: item.quantity, price: item.price })),
		payment_method: order?.payment_method,
		payment_status: order?.payment_status,
		total: order?.total_amount,
		discount: order?.discount_amount,
		shipping: order?.shipping_amount,
		advance: order?.advance_payment,
		subtotal: order?.subtotal_amount,
		invoiceNumber: order?.id,
		date: order?.created_at,
	};
}
