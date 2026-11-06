"use client"
import React, { useEffect } from "react";
import BlockPreview from '../BlockPreview';
import { useCommentsGrid } from "../context/CommentsGridContext";
import { CommentsLoopMarkup, commentsLoopClasses, useCommentsLoopComments } from "./CommentsLoopView";

const sampleAvatar = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="#e5e7eb"/><circle cx="12" cy="9.5" r="4" fill="#9ca3af"/><path d="M4 22c1-4.5 4.5-7 8-7s7 2.5 8 7z" fill="#9ca3af"/></svg>');

/* Shown while the comments load, or when the post has none, so the cards' blocks can be styled. */
const sampleComments = [
	{ comment_ID: 'sample-1', comment_author: 'Jane Doe', comment_content: 'Great quality and fast delivery. I would buy this again.', rate: 5, avatar: sampleAvatar },
	{ comment_ID: 'sample-2', comment_author: 'Sam Lee', comment_content: 'Good value for the price; the size runs slightly small.', rate: 4, avatar: sampleAvatar },
];

/*
	Builder (canvas) preview of the comments loop: CommentsLoopView's own
	markup, classes and fetch, with the cards' blocks rendered by BlockPreview.

	It shows the comments of the post the builder page has, if any (the
	grid's query); it used to write post_id 10018 - one fixed post - into the
	grid's query object. While loading, or with no comments, it shows two
	dimmed sample comments, so there is something to select and drop onto.
	Outside a comments grid it shows a note.
*/
const CommentsLoop = (props) => {

	const grid = useCommentsGrid();

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

	var cls = commentsLoopClasses(props?.cssSelectors, grid?.cssSelectors);

	var { comments, loading, total, maxPages } = useCommentsLoopComments(grid?.queryPrams ?? null, grid?.refresh);
	var onResults = grid?.onResults;
	useEffect(() => { if (onResults && maxPages != null) onResults({ total, maxPages }); }, [onResults, total, maxPages]);

	var selectedClass = selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : '';
	var select = (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); };

	if (!grid) {
		return (
			<div id={id} className={`rounded border border-dashed border-gray-300 p-3 text-xs text-gray-500 ${selectedClass}`} onClick={select}>
				Comments Loop: place it inside a Comments Grid, which gives it the comments to show.
			</div>
		);
	}

	var sample = comments.length === 0;

	return (
		<CommentsLoopMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			items={sample ? sampleComments : comments}
			itemKey={(item, i) => item?.comment_ID ?? item?.comment_id ?? item?.id ?? i}
			renderItem={(item, i) => Array.isArray(children) && children.map((child, indexZ) => (
				<BlockPreview index={`${i}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			))}
			rootClassName={`${sample ? 'opacity-70' : ''} ${sample && loading ? 'animate-pulse' : ''} ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedClass}`}
			rootProps={{
				title: sample ? (loading ? 'Loading comments…' : 'No comments yet: sample comments shown') : undefined,
				onClick: select,
				onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		/>
	);
};

export default CommentsLoop;
