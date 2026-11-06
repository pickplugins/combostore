'use client'
import React from "react";
import BlockRender from '../BlockRender';
import { LayoutCellMarkup } from "./GridItemView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	One column: the shared layout-cell markup with its own `*` classes
	(width, padding, surface) plus the parent columns block's `column`
	classes, which style every column at once. (It used to call
	preventDefault on every click, which stopped plain links inside a column
	from opening on the shop.)
*/
const ColumnItemView = (props) => {

	/* A key the block lacks falls back to the columnItem / columns defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('columnItem', props?.cssSelectors);
	var parentCls = elementCssClasses('columns', props?.ParentCssSelectors);
	var children = Array.isArray(props?.children) ? props.children : [];
	var index = props?.index;

	return (
		<LayoutCellMarkup cls={cls} parentCls={parentCls} parentKey="column" id={props?.id} index={index} type={props?.type}>
			{children.map((child, idx) => (
				<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
			))}
		</LayoutCellMarkup>
	);
};

export default ColumnItemView;
