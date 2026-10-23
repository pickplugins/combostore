import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


/*
	Storefront twin of WhatsappButton.jsx: same markup and the same three
	selectors, minus the editor's drag and select chrome.

	The editor version works off a `productData` prop with a dummy product
	behind it, because on the canvas there is no post to read. Here the product
	comes from PostContext, the same source every other product block uses, so
	the block only fills in on a page that provides one -- a product single, or
	a card inside a PostLoop.

	The product URL is built the way PostThumbnailView builds it, from
	NEXT_PUBLIC_STORE_URL and the slug, so the link in the message matches the
	link on the card.
*/
const WhatsappButtonView = (props) => {

	const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var phone = options?.phone;
	var label = options?.label ?? 'Order On Whatsapp';
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var message = options?.message ?? 'Hi i want to buy {product_title} {product_url}';


	const IconX = TablerIcons[icon];

	const product = usePost();


	function strtr(str, replacements) {
		return Object.entries(replacements)
			.sort(([a], [b]) => b.length - a.length)
			.reduce(
				(result, [search, replace]) =>
					result.split(search).join(replace),
				str
			);
	}


	function format_message(template) {

		var productUrl = product?.slug ? `${appUrl}product/${product?.slug}` : '';

		var prams = {
			"{product_id}": product?.id ?? '',
			"{product_title}": product?.title ?? '',
			"{product_price}": product?.sale_price ?? product?.price ?? '',
			"{product_description}": product?.excerpt ?? '',
			"{product_image}": product?.post_thumbnail?.src ?? '',
			"{product_url}": productUrl,
		};

		return strtr(template, prams);

	}


	/*
		A wa.me link without a number is a dead link, so the live site shows
		nothing until the shop fills the phone in. The editor version still
		renders, so the block stays visible and selectable on the canvas while
		it is being set up.
	*/
	if (!phone) {
		return null;
	}


	const encodedText = encodeURIComponent(format_message(message));
	const url = `https://wa.me/${phone}?text=${encodedText}`;


	return (


		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''}  `}
		>

			<Link className={`${cssSelectors['link']?.classes ?? ''}`} href={url} target="_blank" rel="noreferrer">

				{IconX && (
					<div className={`${cssSelectors['icon']?.classes ?? ''}`}>
						{IconX ? <IconX size={iconSize} /> : null}
					</div>
				)}

				<div className={`${cssSelectors['label']?.classes ?? ''}`}>{label}</div>

			</Link>


		</div>



	);
};


WhatsappButtonView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};


export default WhatsappButtonView;
