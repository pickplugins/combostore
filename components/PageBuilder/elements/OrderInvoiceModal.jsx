'use client'

import PropTypes from "prop-types";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { IconFileInvoice, IconX } from "@tabler/icons-react";
import InvoiceWithPDF from '../../InvoiceWithPDF';
import { orderToInvoice } from '../../orderInvoiceData';

/*
	A customer's invoice for one order, over the page. The order is the row the
	order list already loaded (it carries the billing details and line items),
	so opening it needs no request. InvoiceWithPDF supplies the template choice,
	the preview, printing and the PDF.
*/
const OrderInvoiceModal = ({ order, onClose }) => {

	var [mounted, setmounted] = useState(false);
	useEffect(() => { setmounted(true); }, []);

	var invoice = useMemo(() => orderToInvoice(order), [order]);

	/* Escape closes; the page behind does not scroll while it is open. */
	useEffect(() => {
		const onKey = (ev) => { if (ev.key === "Escape") onClose?.(); };
		document.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [onClose]);

	if (!mounted || !order) return null;

	return createPortal(
		<div className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:p-8"
			onMouseDown={(ev) => { if (ev.target === ev.currentTarget) onClose?.(); }}>

			<div role="dialog" aria-modal="true" aria-label={`Invoice for order #${order.id}`}
				className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">

				<div className="flex items-center justify-between gap-3 border-b border-gray-200 px-5 py-3">
					<div className="flex items-center gap-2">
						<IconFileInvoice size={18} className="text-gray-400" />
						<h2 className="text-sm font-semibold text-gray-900">Invoice · Order #{order.id}</h2>
					</div>
					<button type="button" aria-label="Close"
						className="inline-flex h-8 w-8 items-center justify-center !rounded-lg !border-0 !bg-transparent !p-0 text-gray-400 !shadow-none hover:!bg-gray-100 hover:text-gray-900 cursor-pointer"
						onClick={onClose}>
						<IconX size={18} />
					</button>
				</div>

				<div className="overflow-x-auto p-4 sm:p-5">
					<InvoiceWithPDF invoice={invoice} />
				</div>
			</div>
		</div>,
		document.body
	);
};

OrderInvoiceModal.propTypes = {
	order: PropTypes.object,
	onClose: PropTypes.func,
};

export default OrderInvoiceModal;
