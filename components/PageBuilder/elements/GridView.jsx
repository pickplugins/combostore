'use client'

import React from "react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

/*
	A grid: a <div> with the `*` classes (the tracks, gap and padding) around
	its child blocks, usually gridItems.

	Its `grid-item` classes are handed down as ParentCssSelectors, and every
	GridItemView adds them to its own, so one place styles all the cells. That
	key used to do nothing.
*/
const GridView = (props) => {

	var index = props?.index
	var id = props?.id;
	var children = props?.children ?? [];
	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the grid defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('grid', cssSelectors);

	return (
		<div id={id} className={cls('*')}>
			{children.map((child, idx) => (
				<BlockRender
					key={child.id}
					index={`${index}-${idx}`}
					block={child}
					ParentCssSelectors={cssSelectors}
				/>
			))}
		</div>
	);
};

export default GridView;
