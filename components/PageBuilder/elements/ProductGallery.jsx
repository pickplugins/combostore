import PropTypes from "prop-types";
import React from "react";
import { useState, useRef } from "react";

import { usePost } from "../context/PostContext";
import Link from "next/link";

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";


const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


const TermTitle = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var label = options?.label;
	var readmore = options?.readmore ?? 'Read more';
	var maxWord = options?.maxWord ?? 20;
	var sliderOptions = options?.sliderOptions ?? {}


	const product = usePost();

	var gallery = product?.gallery ?? [{ src: '', name: 'Category Name' }, { slug: 'category-slug2', name: 'Category Name 2' }];

	const Tag = tag;




	const mainRef = useRef(null);
	const thumbsRef = useRef(null);

	const syncSliders = () => {
		if (mainRef.current && thumbsRef.current) {
			mainRef.current.sync(thumbsRef.current);
		}
	};


	sliderOptions.classes = {
		arrows: `splide__arrows arrows ${cssSelectors['arrows']?.classes}`,
		prev: `splide__arrow splide__arrow--prev prev ${cssSelectors['prev']?.classes}`,
		next: `splide__arrow splide__arrow--next next ${cssSelectors['next']?.classes}`,

		pagination: `splide__pagination pagination ${cssSelectors['pagination']?.classes}`,
		page: `splide__pagination__page dot ${cssSelectors['dot']?.classes} `,
	}


	return (


		<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)} >
			{label && (
				<div className={cssSelectors['label']?.classes}>{options?.label}</div>
			)}


			<Splide ref={mainRef}
				onMounted={syncSliders}
				options={sliderOptions}
				className={cssSelectors['items']?.classes}
			>



				{gallery.map((item, index) => {


					return (<SplideSlide key={index} className={cssSelectors['item']?.classes}>


						{!item.src && (
							<Image className={`${cssSelectors['image']?.classes} w-full h-auto`} src={`/thumb.png`} alt="" width={500} height={500} />

						)}
						{item.src && (
							<Image className={`${cssSelectors['image']?.classes} w-full h-auto`} src={item?.src} alt="" width={500} height={500} />

						)}

					</SplideSlide>)
				})}

			</Splide>

			{options.thumbnails && (

				<Splide ref={thumbsRef}
					onMounted={syncSliders}

					options={{
						fixedWidth: 90,
						fixedHeight: 70,
						gap: 10,
						rewind: true,
						pagination: false,
						cover: true,
						isNavigation: true,

						focus: 'center',

						breakpoints: {
							640: {
								fixedWidth: 65,
								fixedHeight: 55,
							},
						},
					}}
					aria-label="Product thumbnails"
					className="mt-4"
				>
					{gallery.map((item, index) => (
						<SplideSlide key={index}>



							{!item.src && (
								<Image className="w-full h-auto" src={`/thumb.png`} alt="" width={500} height={500} />

							)}
							{item.src && (
								<Image className="w-full h-auto" src={item?.src} alt="" width={500} height={500} />

							)}




						</SplideSlide>
					))}
				</Splide>
			)}




		</div>















	);
};



export default TermTitle;
