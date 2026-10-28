import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import { useLoop } from "../context/LoopContext";
import { useFeatuerbox } from "../context/FeatuerboxContext";

const Icon = (props) => {

	const loop = useLoop();
	var loopIcon = loop?.icon;
	var loopIconSize = loop?.iconSize;
	const featuerboxAttr = useFeatuerbox();
	var FeatuerboxCssSelectors = featuerboxAttr?.cssSelectors ?? {}









	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var iconName = options?.iconName ?? null;
	var size = options?.size ?? 20;



	iconName = loopIcon ?? iconName;



	const IconX = TablerIcons[iconName];


	return (
		<div id={id} type={type} className={`${cssSelectors['*']?.classes} ${FeatuerboxCssSelectors['icon']?.classes}  `}

		>

			{IconX ? <IconX size={size} /> : null}



		</div>
	);
};



export default Icon;
