"use client"
import { useState, useEffect } from "react";
import BlockPreview from '../BlockPreview';
import { PostGridProvider } from "../context/PostGridContext";

const PostGrid = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	var handleMoveBlock = props?.handleMoveBlock

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId





	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var queryPrams = options?.queryPrams ?? [];
	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors;



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
		<div
			id={id}
			type={type}
			className={`${cssSelectors['*']?.classes ?? ''} ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''} `}

			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={onDragOver}
			onDrop={onDrop}

		>

			<PostGridProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors }}>

				{children != undefined && children.map((child, indexZ) => {


					return (

						<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock}
						/>

					)

				})}

			</PostGridProvider>





		</div>
	);
};

export default PostGrid;
