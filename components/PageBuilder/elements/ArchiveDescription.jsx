import React from "react";
import { ArchiveDescriptionMarkup, archiveDescriptionParagraphs } from "./ArchiveDescriptionView";
import { elementCssClasses } from "../ElementsDefinition";

/* The builder is not on an archive page, so a sample description is shown - two paragraphs, so the paragraph styles can be seen. */
const sampleDescription = "<p>Fresh, seasonal produce sourced from local farms and delivered to your door.</p><p>Browse this collection for everyday staples and weekly specials, picked for flavour and quality, with new arrivals added every week so there is always something to try.</p>";

/*
	Builder (canvas) preview of the archive description: ArchiveDescriptionView's
	own markup and classes, with the sample cut to the block's word limit the
	same way. It could be marked draggable but had no drag handlers, so it
	could not be moved.
*/
const ArchiveDescription = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('archiveDescription', props?.cssSelectors);

	return (
		<ArchiveDescriptionMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			paragraphs={archiveDescriptionParagraphs(sampleDescription, props?.options?.maxWord)}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: 'Shows the archive description; a sample is used here',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ArchiveDescription;
