'use client'
import React from "react";
import BlockRender from '../BlockRender';
import { LayoutCellMarkup } from "./GridItemView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	One accordion item's panel content: the shared layout-cell markup with
	its own `*` classes, holding the blocks placed in it. The accordion block
	draws the headers and opens and closes the panels.
*/
const AccordionItemView = (props) => {

	/* A key the block lacks falls back to the accordionItem defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('accordionItem', props?.cssSelectors);
	var children = Array.isArray(props?.children) ? props.children : [];
	var index = props?.index;

	return (
		<LayoutCellMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			{children.map((child, idx) => (
				<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
			))}
		</LayoutCellMarkup>
	);
};

export default AccordionItemView;
