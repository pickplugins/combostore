'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { SectionMarkup } from "./SectionView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a section: SectionView's own SectionMarkup -
	the same <section> and classes - with its children rendered by
	BlockPreview, a hint while it is empty, and the builder's select, drag and
	drop handling. Its id stays the block's id here (the anchor only matters on
	the shop).
*/
const Section = (props) => {

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var handleMoveBlock = props?.handleMoveBlock
	var id = props?.id;
	var index = props?.index

	/* Same lookup as SectionView: a missing key falls back to the section defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('section', props?.cssSelectors);

	const children = props?.children || [];

	return (
		<SectionMarkup
			cls={cls}
			id={id}
			type={props?.type}
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
				onDragOver: (e) => {
					e.preventDefault();
					e.stopPropagation();
				},
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		>
			{children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview
						key={child.id}
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
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty Section - Drop elements here</span>
				</div>
			)}
		</SectionMarkup>
	);
};

Section.propTypes = {
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	handleMoveBlock: PropTypes.func,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default Section;
