import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { ChatButtonMarkup, defaultProductMessage, formatProductMessage } from "./chatButton";
import { elementCssClasses } from "../ElementsDefinition";

export const defaultMessengerLabel = 'Order On Messenger';

/*
	The Messenger page username, from whatever was pasted: "mypage", "@mypage",
	"m.me/mypage" or "https://www.facebook.com/mypage" all give "mypage".
*/
export function messengerUsername(value) {
	return String(value ?? '')
		.trim()
		.replace(/^https?:\/\//i, '')
		.replace(/^(www\.)?(m\.me|facebook\.com|fb\.com|messenger\.com\/t)\//i, '')
		.replace(/^@/, '')
		.replace(/[/?#].*$/, '');
}

/* The m.me link with the message filled in, or null without a username. */
export function messengerHref(options, product) {
	var username = messengerUsername(options?.username);
	if (!username) return null;
	var text = formatProductMessage(options?.message ?? defaultProductMessage, product);
	return `https://m.me/${encodeURIComponent(username)}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

/*
	The shop's Messenger button (the builder preview is MessengerButton.jsx,
	with the same ChatButtonMarkup). The product comes from PostContext, the
	same source every other product block uses, so the placeholders only fill
	in on a page that provides one - a product single, or a card inside a
	PostLoop.

	An m.me link without a page username is a dead link, so the shop shows
	nothing until it is set; the builder still renders it.
*/
const MessengerButtonView = (props) => {

	/* A key the block lacks falls back to the messengerButton defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('messengerButton', props?.cssSelectors);

	const product = usePost();
	var href = messengerHref(props?.options, product);

	if (!href) {
		return null;
	}

	return <ChatButtonMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} href={href} defaultLabel={defaultMessengerLabel} />;
};


MessengerButtonView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};


export default MessengerButtonView;
