"use client"
import PropTypes from "prop-types";
import React from "react";
import { useState, useRef, useEffect } from "react";

import { usePost } from "../context/PostContext";
import Link from "next/link";

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import { useProductStore } from "../../../store/productStore";


const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


const ProductGalleryView = (props) => {


	var activeVariation = useProductStore(
		(state) => state.activeVariation
	);







	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var sliderOptions = options?.sliderOptions ?? {}

	sliderOptions.isNavigation = true

	const product = usePost();

	var post_thumbnail = product?.post_thumbnail ?? [];
	var galleryX = product?.gallery ?? [post_thumbnail];

	galleryX = (galleryX.length == 0) ? [post_thumbnail] : galleryX

	var [gallery, setgallery] = useState(galleryX);



	const variations = product?.variations ?? [];






	sliderOptions.classes = {
		arrows: `splide__arrows arrows ${cssSelectors['arrows']?.classes}`,
		prev: `splide__arrow splide__arrow--prev prev ${cssSelectors['prev']?.classes}`,
		next: `splide__arrow splide__arrow--next next ${cssSelectors['next']?.classes}`,

		pagination: `splide__pagination pagination ${cssSelectors['pagination']?.classes}`,
		page: `splide__pagination__page dot ${cssSelectors['dot']?.classes} `,
	}


	const mainRef = useRef(null);
	const thumbsRef = useRef(null);


	const mainSplide = useRef(null);
	const thumbsSplide = useRef(null);

	const syncSliders = () => {
		if (mainSplide.current && thumbsSplide.current) {
			mainSplide.current.sync(thumbsSplide.current);
		}
	};

	const handleMainMounted = (splide) => {
		mainSplide.current = splide;
		syncSliders();
	};

	const handleThumbsMounted = (splide) => {
		thumbsSplide.current = splide;
		syncSliders();
	};



	const goToSlide = (index) => {
		mainSplide.current?.go(index);
	};



	useEffect(() => {

		if (activeVariation) {
			console.log(activeVariation);
			var thumbnail = activeVariation.thumbnail;

			const index = gallery.findIndex(item => item.id === thumbnail.id);

			goToSlide(index)
			console.log(thumbnail);
		}




	}, [activeVariation]);
	useEffect(() => {

		console.log('variations', variations);

		var variationgallery = []

		if (variations.length > 0) {
			variations.map(variation => {

				var thumbnail = variation.thumbnail;
				variationgallery.push(thumbnail)
			})

			setgallery(variationgallery)
		}




	}, [variations]);






	return (


		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>


			{gallery && (
				<Splide
					ref={mainRef}
					onMounted={handleMainMounted}
					options={sliderOptions}
					className={cssSelectors['items']?.classes}
				>



					{gallery.map((item, index) => {


						return (<SplideSlide key={index} className={cssSelectors['item']?.classes}>


							{!item.src && (
								<Image unoptimized className={`${cssSelectors['image']?.classes} w-full h-auto`} src={`/thumb.png`} alt="" width={500} height={500} />

							)}
							{item.src && (
								<Image unoptimized className={`${cssSelectors['image']?.classes} w-full h-auto`} src={item?.src} alt="" width={500} height={500} />

							)}

						</SplideSlide>)
					})}

				</Splide>
			)}


			{(options.thumbnails && gallery.length > 1) && (

				<Splide
					ref={thumbsRef}
					onMounted={handleThumbsMounted}

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
								<Image unoptimized className="w-full h-auto" src={`/thumb.png`} alt="" width={500} height={500} />

							)}
							{item.src && (
								<Image unoptimized className="w-full h-auto" src={item?.src} alt="" width={500} height={500} />

							)}




						</SplideSlide>
					))}
				</Splide>
			)}









		</div>















	);
};



export default ProductGalleryView;
