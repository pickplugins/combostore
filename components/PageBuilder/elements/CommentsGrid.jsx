"use client"
import React from "react";
import BlockPreview from '../BlockPreview';
import { CommentsGridProvider } from "../context/CommentsGridContext";
import { usePost } from "../context/PostContext";
import { CommentsGridMarkup, useCommentsGridState } from "./CommentsGridView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the comments grid: CommentsGridView's own
	wrapper, query and context, with the children rendered by BlockPreview.
	Pagination pages the preview without saving anything. The grid is now
	draggable (it had drag handlers but no draggable attribute), and its
	query is the same one the shop uses - it was the saved options' value,
	or [] for a grid without one.
*/
const CommentsGrid = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var children = props?.children;
	var id = props?.id;
	var index = props?.index

	var cls = elementCssClasses('commentsGrid', props?.cssSelectors);

	const post = usePost();
	var contextValue = useCommentsGridState(props?.options, post, props?.cssSelectors);

	return (
		<CommentsGridMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			rootClassName={`${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''}`}
			rootProps={{
				draggable: true,
				onClick: (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); },
				onDragStart: (e) => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		>
			<CommentsGridProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))}
			</CommentsGridProvider>
		</CommentsGridMarkup>
	);
};

export default CommentsGrid;
