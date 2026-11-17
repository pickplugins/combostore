"use client"
import React, { useState } from "react";
import { IconLibraryPhoto } from "@tabler/icons-react";
import { ImageLightboxMarkup, lightboxImages } from "./ImageLightboxView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the lightbox gallery: ImageLightboxView's own
	markup and classes. A click anywhere selects the block, as on every
	block; a double click on an image opens the lightbox in the canvas, so it
	can be tried out (full screen included). Without images it shows a
	placeholder.
*/
const ImageLightbox = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('imageLightbox', props?.cssSelectors);
	var images = lightboxImages(props?.options);
	const [openAt, setOpenAt] = useState(null);

	const select = (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); };

	return (
		<ImageLightboxMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options ?? {}}
			images={images}
			openAt={openAt}
			setOpenAt={setOpenAt}
			onTileClick={select}
			onTileDoubleClick={(e, at) => { e.preventDefault(); e.stopPropagation(); setOpenAt(at); }}
			rootClassName={`cursor-pointer hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				title: images.length ? 'Double-click an image to preview the lightbox' : undefined,
				onClick: select,
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		>
			<div className="col-span-full flex aspect-[4/1] min-h-24 w-full flex-col items-center justify-center gap-1 bg-gray-100 text-gray-400" title="No images chosen">
				<IconLibraryPhoto size={32} />
				<span className="text-xs">Add images in the panel</span>
			</div>
		</ImageLightboxMarkup>
	);
};

export default ImageLightbox;
