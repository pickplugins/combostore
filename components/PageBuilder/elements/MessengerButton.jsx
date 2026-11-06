import React from "react";
import { usePost } from "../context/PostContext";
import { ChatButtonMarkup, chatButtonCanvasProps, sampleProduct } from "./chatButton";
import { defaultMessengerLabel, messengerHref } from "./MessengerButtonView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the Messenger button: the shop's own
	ChatButtonMarkup - the same link, icon, label and classes - with the
	sample product when no PostContext is around. A click selects the block
	and never follows the link.
*/
const MessengerButton = (props) => {

	var cls = elementCssClasses('messengerButton', props?.cssSelectors);

	var product = usePost() ?? props?.productData ?? sampleProduct;

	return (
		<ChatButtonMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options}
			href={messengerHref(props?.options, product)}
			defaultLabel={defaultMessengerLabel}
			{...chatButtonCanvasProps(props)}
		/>
	);
};

export default MessengerButton;
