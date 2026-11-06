'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import BlockPreview from '../BlockPreview';
import { AccordionMarkup, accordionItemsFor, toggleOpenItem } from './AccordionView';
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of an accordion.

	It renders AccordionView's own AccordionMarkup, reading the same
	cssSelectors keys with the same defaults from ElementsDefinition.js, so the
	canvas shows the accordion exactly as the shop does. Clicking a header
	opens it here too, so each item's content can be edited; open panels are
	drawn with BlockPreview so they stay droppable.
*/
const Accordion = (props) => {
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
	var items = accordionItemsFor(options, children);

	var cls = elementCssClasses('accordion', props?.cssSelectors);

	const [openItems, setOpenItems] = useState([]);

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
		<AccordionMarkup
			cls={cls}
			id={id}
			items={items}
			children={children}
			openItems={openItems}
			onToggle={idx => setOpenItems(current => toggleOpenItem(current, idx, options?.multiple))}
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
			renderPanel={(child, idx) => (
				<BlockPreview
					index={`${index}-${idx}`}
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

Accordion.propTypes = {
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

export default Accordion;
