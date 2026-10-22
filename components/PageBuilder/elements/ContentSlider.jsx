"use client"
import { useState } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockPreview from '../BlockPreview';


const ContentSlider = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex






	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var items = options?.items ?? [];
	var id = props?.id;
	var index = props?.index

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId

	var sliderOptions = options?.sliderOptions


	return (
		<div
			id={id}
			type={type}
			className={`  ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''} `}

			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}>



			<Splide aria-label="" options={sliderOptions}>



				{items?.map((item, index) => {


					return (<SplideSlide key={index}>

						{children != undefined && children.map((child, indexZ) => {


							return (

								<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} />

							)

						})}

					</SplideSlide>)
				})}

			</Splide>






		</div>
	);
};

export default ContentSlider;
