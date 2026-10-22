import PropTypes from "prop-types";
import React from "react";
import { useLoop } from "../context/LoopContext";
import { useFeatuerbox } from "../context/FeatuerboxContext";

const Text = (props) => {

	const loop = useLoop();
	const featuerboxAttr = useFeatuerbox();
	var FeatuerboxCssSelectors = featuerboxAttr?.cssSelectors ?? {}

	var loopText = loop?.description;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';




	const Tag = tag;




	return (
		<Tag id={id} type={type} className={`${FeatuerboxCssSelectors['description']?.classes}  `}

		>

			{loopText}

		</Tag>
	);
};



export default Text;
