import React from "react";
import { IconPhoto } from "@tabler/icons-react";
import { ImageMarkup } from "./ImageView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the image: ImageView's own markup, classes,
	alt text and size attributes (it used 500x500 where the shop used
	200x200). The whole block is now selectable and draggable from its
	wrapper - only the <img> had the handlers, so an image without a src was
	an empty, zero-height box that could not be clicked. It now shows a
	placeholder instead. Links never navigate away from the builder.
*/
const Image = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('image', props?.cssSelectors);

	return (
		<ImageMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`cursor-pointer hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		>
			<div className={`${cls('img')} flex aspect-[4/3] min-h-24 w-full flex-col items-center justify-center gap-1 bg-gray-100 text-gray-400`} title="No image chosen">
				<IconPhoto size={32} />
				<span className="text-xs">Choose an image in the panel</span>
			</div>
		</ImageMarkup>
	);
};

export default Image;
