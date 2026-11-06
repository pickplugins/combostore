import React from "react";
import { ArchiveCountMarkup, archiveCountText } from "./ArchiveCountView";
import { sampleArchiveTerm } from "./ArchiveTitle";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the archive count: ArchiveCountView's own
	markup and classes, with the sample term's count (the builder is not on
	an archive page). It could be marked draggable but had no drag handlers,
	so it could not be moved.
*/
const ArchiveCount = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('archiveCount', props?.cssSelectors);

	return (
		<ArchiveCountMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			text={archiveCountText(sampleArchiveTerm.count, props?.options)}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				title: 'Shows the archive item count; a sample count is used here',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ArchiveCount;
