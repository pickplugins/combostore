import React from "react";
import { usePost } from "../context/PostContext";
import { ChatButtonMarkup, chatButtonCanvasProps, sampleProduct } from "./chatButton";
import { defaultWhatsappLabel, whatsappHref } from "./WhatsappButtonView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the WhatsApp button: the shop's own
	ChatButtonMarkup - the same link, icon, label and classes - with the
	sample product when no PostContext is around. A click selects the block
	and never follows the link. It used to build the message from a dummy
	product with other field names than the shop's, so the two differed.
*/
const WhatsappButton = (props) => {

	var cls = elementCssClasses('whatsappButton', props?.cssSelectors);

	var product = usePost() ?? props?.productData ?? sampleProduct;

	return (
		<ChatButtonMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			href={whatsappHref(props?.options, product)}
			defaultLabel={defaultWhatsappLabel}
			{...chatButtonCanvasProps(props)}
		/>
	);
};

export default WhatsappButton;
