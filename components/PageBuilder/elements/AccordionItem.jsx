'use client'
import React from "react";
import { LayoutCellPreview } from "./GridItem";

/*
	Builder preview of one accordion item's panel: the shared layout-cell
	preview (the same markup and classes as AccordionItemView), with a prompt
	when empty. It now takes drops: it had no drop handler, so a block
	dropped into an open panel went to the accordion instead. It was a copy
	of the menu item builder, with unused label/url/menu code, and its blocks
	lacked drag props.
*/
const AccordionItem = (props) => (
	<LayoutCellPreview props={props} type="accordionItem" emptyLabel="Empty panel - drop elements here" />
);

export default AccordionItem;
