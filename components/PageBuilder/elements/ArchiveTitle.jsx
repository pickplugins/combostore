import React from "react";
import { ArchiveTitleMarkup, archiveTitleText } from "./ArchiveTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/* The builder has no archive URL, so the placeholders are filled from this sample term. */
export const sampleArchiveTerm = { name: 'Category Name', slug: 'category-name', count: 24, description: 'A short description of this category, as written in the term editor.' };

/*
	Builder (canvas) preview of the archive title: ArchiveTitleView's own
	markup and classes, with the placeholders filled from a sample term. It
	used to fetch the term with no slug (the builder has none), log and drop
	the answer, and show the raw "%term_name%" text.
*/
const ArchiveTitle = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('archiveTitle', props?.cssSelectors);
	var html = archiveTitleText(props?.options, sampleArchiveTerm) || '<span class="opacity-50">Archive title</span>';

	return (
		<ArchiveTitleMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			html={html}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: 'Shows the archive term; a sample term is used here',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ArchiveTitle;
