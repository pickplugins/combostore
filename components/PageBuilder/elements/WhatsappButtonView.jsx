import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { ChatButtonMarkup, defaultProductMessage, formatProductMessage } from "./chatButton";
import { elementCssClasses } from "../ElementsDefinition";

export const defaultWhatsappLabel = 'Order On Whatsapp';

/*
	The number as wa.me wants it: digits only, in full international form.
	"+880 1737-034053", "00880 1737 034053" and "8801737034053" all give
	"8801737034053"; a wa.me link with a "+", spaces or dashes silently fails.
	It cannot add a missing country code - a local "01737034053" stays as it
	is, and the panel says so.
*/
export function whatsappPhone(value) {
	return String(value ?? '').replace(/\D/g, '').replace(/^00/, '');
}

/* The wa.me link with the message filled in, or null without a number. */
export function whatsappHref(options, product) {
	var phone = whatsappPhone(options?.phone);
	if (!phone) return null;
	var text = formatProductMessage(options?.message ?? defaultProductMessage, product);
	return `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

/*
	The shop's WhatsApp button (the builder preview is WhatsappButton.jsx,
	with the same ChatButtonMarkup). The product comes from PostContext, the
	same source every other product block uses, so the placeholders only fill
	in on a page that provides one - a product single, or a card inside a
	PostLoop.

	A wa.me link without a number is a dead link, so the shop shows nothing
	until it is set; the builder still renders it.
*/
const WhatsappButtonView = (props) => {

	/* A key the block lacks falls back to the whatsappButton defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('whatsappButton', props?.cssSelectors);

	const product = usePost();
	var href = whatsappHref(props?.options, product);

	if (!href) {
		return null;
	}

	return <ChatButtonMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} href={href} defaultLabel={defaultWhatsappLabel} />;
};


WhatsappButtonView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};


export default WhatsappButtonView;
