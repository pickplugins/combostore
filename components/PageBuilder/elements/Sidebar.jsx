"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockPreview from '../BlockPreview';
import { PostProvider } from "../context/PostContext";
import { PostSliderProvider } from "../context/PostSliderContext";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import { useCounterStore } from '../../../store/useCounterStore';

const SiteHeader = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors;
	var handleMoveBlock = props?.handleMoveBlock;






	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var templteId = options?.id;
	var id = props?.id;

	var index = props?.index

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId




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
			className={` ${cssSelectors['*']?.classes ?? ''} ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''} `}

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



			{templteId && (

				<div className="text-center bg-yellow-100 border-gray-400 border border-dashed p-5 m-3 rounded-sm">
					Template will loaded dynamically.
				</div>

			)}
			{!templteId && (

				<>

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
				</>

			)}













		</div>
	);
};

export default SiteHeader;
