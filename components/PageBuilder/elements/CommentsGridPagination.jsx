import React from "react";
import { useCommentsGrid } from "../context/CommentsGridContext";
import { PaginationMarkup, paginationSettings } from "./PostGridPaginationView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the comments pagination: the shared
	PaginationMarkup with this block's classes. It pages the comments grid's
	preview (it read the post grid's context, so it was always
	disconnected). Always shown here so it can be styled; until the last page
	is known it assumes 5 pages.
*/
const CommentsGridPagination = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	const grid = useCommentsGrid();
	var cls = elementCssClasses('commentsGridPagination', props?.cssSelectors);

	var paged = parseInt(grid?.queryPrams?.paged) || 1;
	var maxPages = Math.max(Number(grid?.results?.maxPages) || 5, paged);

	return (
		<PaginationMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			settings={paginationSettings(props?.options, props?.cssSelectors)}
			paged={paged}
			maxPages={maxPages}
			onPage={(p) => grid?.onChangeQuery?.({ ...grid.queryPrams, paged: p })}
			rootClassName={`${grid ? '' : 'opacity-60'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: grid ? undefined : 'Place this inside a Comments Grid',
				onClick: e => { if (e.target.closest('button, input')) return; e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default CommentsGridPagination;
