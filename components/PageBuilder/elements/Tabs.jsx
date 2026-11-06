'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import BlockPreview from '../BlockPreview';
import { TabsMarkup, tabsItemsFor } from './TabsView';
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a tabs block.

	It renders TabsView's own TabsMarkup, reading the same cssSelectors keys
	with the same defaults from ElementsDefinition.js, so the canvas shows the
	tabs exactly as the shop does. Clicking a tab opens it here too, so each
	tab's content can be edited; the open panel is drawn with BlockPreview so
	it stays droppable.
*/
const Tabs = (props) => {
	const {
		draggingBlock,
		setDraggingBlock,
		dragOverIndex,
		setDragOverIndex,
		setSelectedId,
		selectedId,
		index,
		id,
		handleMoveBlock
	} = props;

	const children = props?.children || [];
	var options = props?.options;
	var vertical = options?.orientation == 'vertical';
	var tabsItems = tabsItemsFor(options, children);

	var cls = elementCssClasses('tabs', props?.cssSelectors);

	const [activeTab, setActiveTab] = useState(props?.activeTab ?? 0);

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");

		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<TabsMarkup
			cls={cls}
			id={id}
			tabsItems={tabsItems}
			children={children}
			vertical={vertical}
			activeTab={activeTab}
			onSelect={setActiveTab}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 relative ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId === id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				onClick: (e) => {
					e.preventDefault();
					e.stopPropagation();
					setSelectedId(selectedId !== id ? id : null);
				},
				onDragStart: (e) => {
					e.stopPropagation();
					e.dataTransfer.setData("canvasBlock", id);
					setDraggingBlock(id);
				},
				onDragEnd: () => {
					setDraggingBlock(null);
					setDragOverIndex(null);
				},
				onDragOver: onDragOver,
				onDrop: onDrop,
			}}
			renderPanel={(child, tabIndex) => (
				<BlockPreview
					index={`${index}-${tabIndex}`}
					block={child}
					draggingBlock={draggingBlock}
					dragOverIndex={dragOverIndex}
					setDragOverIndex={setDragOverIndex}
					setDraggingBlock={setDraggingBlock}
					setSelectedId={setSelectedId}
					selectedId={selectedId}
					handleMoveBlock={handleMoveBlock}
				/>
			)}
		/>
	);
};

Tabs.propTypes = {
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default Tabs;
