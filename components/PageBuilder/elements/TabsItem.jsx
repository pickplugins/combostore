"use client"
import React from "react";
import { LayoutCellPreview } from "./GridItem";

/*
	Builder preview of one tab's panel: the shared layout-cell preview (the
	same markup and classes as TabsItemView), taking drops, with a prompt
	when empty. It was a copy of the menu item builder, with unused
	label/url/menu code, and its blocks lacked drag props.
*/
const TabsItem = (props) => (
	<LayoutCellPreview props={props} type="tabsItem" emptyLabel="Empty tab - drop elements here" />
);

export default TabsItem;
