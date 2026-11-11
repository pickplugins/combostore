"use client"
import React from "react";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { elementCssClasses } from "../ElementsDefinition";

/*
	A single input field with an optional icon. This block had no storefront
	renderer, so the shop printed "[input]". It is a plain field: typing does
	not send anything anywhere unless a parent passes onChangeInput.
*/
const InputView = (props) => {

	/* A key the block lacks falls back to the input defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('input', props?.cssSelectors);

	var options = props?.options;
	var IconX = tablerIcon(options?.icon);
	var iconSize = Number(options?.iconSize) || 20;

	return (
		<div id={props?.id} type={props?.type} className={cls('*')}>
			<input
				type={options?.type ?? 'text'}
				placeholder={options?.placeholder}
				defaultValue={options?.value}
				className={cls('input')}
				onChange={ev => props?.onChangeInput?.(ev.target.value)}
			/>
			{IconX && (
				<div className={cls('icon')}>
					<IconX size={iconSize} />
				</div>
			)}
		</div>
	);
};

export default InputView;
