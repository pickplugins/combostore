"use client"
import React from "react";
import { useLoop } from "../context/LoopContext";
import { useCollections } from "../context/CollectionsContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	One field of the current Collections item: the entry in its `fields`
	whose id is options.fieldId, as a label and a value. It adds the parent
	collection's `title` classes, as the builder's CollectionsField does. This
	block had no storefront renderer, so the shop printed "[collectionsField]".
*/
const CollectionsFieldView = (props) => {

	const loop = useLoop();
	const collections = useCollections();

	/* A key the block lacks falls back to the collectionsField / collections defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('collectionsField', props?.cssSelectors);
	var parentCls = elementCssClasses('collections', collections?.cssSelectors);

	var options = props?.options;
	var Tag = ['div', 'p', 'span', 'h2', 'h3', 'h4'].includes(options?.tag) ? options.tag : 'div';
	var fields = Array.isArray(loop?.fields) ? loop.fields : [];
	var element = fields.find(item => item.id === options?.fieldId);

	if (!element?.label && !element?.value) return null;

	return (
		<Tag id={props?.id} type={props?.type} className={`${cls('*')} ${parentCls('title')}`}>
			{element?.label && <div className={cls('label')}>{element.label}</div>}
			{element?.value && <div className={cls('value')}>{element.value}</div>}
		</Tag>
	);
};

export default CollectionsFieldView;
