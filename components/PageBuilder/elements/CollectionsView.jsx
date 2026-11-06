"use client"
import React from "react";
import BlockRender from '../BlockRender';
import { LoopProvider } from "../context/LoopContext";
import { CollectionsProvider } from "../context/CollectionsContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	A repeated layout: for every entry in options.items, the block's children
	are rendered once, with that entry available to them through LoopProvider
	(a Collections Field inside reads its fields). The block's cssSelectors
	are shared through CollectionsProvider so a field can add the collection's
	`title` classes. This block had no storefront renderer, so the shop printed
	"[collections]".
*/
const CollectionsView = (props) => {

	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the collections defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('collections', cssSelectors);

	var options = props?.options;
	var items = Array.isArray(options?.items) ? options.items : [];
	var children = props?.children ?? [];
	var index = props?.index;
	var Tag = ['ul', 'ol', 'div', 'section'].includes(options?.tag) ? options.tag : 'ul';
	/* A <ul> may only hold <li>s, so each item is an <li> there and a <div> otherwise. */
	var ItemTag = Tag === 'ul' || Tag === 'ol' ? 'li' : 'div';

	return (
		<Tag id={props?.id} type={props?.type} className={cls('*')}>
			<CollectionsProvider value={{ cssSelectors: cssSelectors }}>
				{items.map((item, itemIndex) => (
					<ItemTag key={itemIndex} className={cls('loop-item')}>
						<LoopProvider value={item}>
							{children.map((child, idx) => (
								<BlockRender key={child.id} index={`${index}-${itemIndex}-${idx}`} block={child} />
							))}
						</LoopProvider>
					</ItemTag>
				))}
			</CollectionsProvider>
		</Tag>
	);
};

export default CollectionsView;
