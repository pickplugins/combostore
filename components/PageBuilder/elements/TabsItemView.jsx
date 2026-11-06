"use client"
import React from "react";
import BlockRender from '../BlockRender';
import { LayoutCellMarkup } from "./GridItemView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	One tab's panel content: the shared layout-cell markup with its own `*`
	classes, holding the blocks placed in it. The tabs block draws the tab
	buttons and shows only the open tab's panel.
*/
const TabsItemView = (props) => {

	/* A key the block lacks falls back to the tabsItem defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('tabsItem', props?.cssSelectors);
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

export default TabsItemView;
