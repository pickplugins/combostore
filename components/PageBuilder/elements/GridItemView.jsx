'use client'
import React from "react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

/*
	A layout cell's markup, shared by the grid and columns cells and their
	builder previews (GridItem.jsx, ColumnItem*.jsx): a div with its own `*`
	classes plus the parent's per-cell key (`grid-item` on a grid, given as
	parentCls(parentKey)), which styles every cell at once - none for a tab
	or accordion panel. The caller renders the blocks inside.
*/
export function LayoutCellMarkup({ cls, parentCls = () => '', parentKey, id, index, type, children, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${parentCls(parentKey)} ${rootClassName}`} {...rootProps}>
			{children}
		</div>
	);
}

/* One cell of a grid: its own `*` classes (spans, padding, surface) plus the parent grid's `grid-item` classes. */
const GridItemView = (props) => {

	/* A key the block lacks falls back to the gridItem / grid defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('gridItem', props?.cssSelectors);
	var parentCls = elementCssClasses('grid', props?.ParentCssSelectors);
	var children = Array.isArray(props?.children) ? props.children : [];
	var index = props?.index;

	return (
		<LayoutCellMarkup cls={cls} parentCls={parentCls} parentKey="grid-item" id={props?.id} index={index} type={props?.type}>
			{children.map((child, idx) => (
				<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
			))}
		</LayoutCellMarkup>
	);
};

export default GridItemView;
