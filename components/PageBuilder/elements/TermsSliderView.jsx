"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BlockRender from '../BlockRender';
import { CategoryProvider } from "../context/CategoryContext";
import { TermsSliderProvider } from "../context/TermsSliderContext";

const TermsSliderView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var items = options?.items ?? [];
	var id = props?.id;

	var index = props?.index



	var cssSelectors = props?.cssSelectors;

	var sliderOptions = options?.sliderOptions
	var queryPrams = options?.queryPrams ?? [];


	var [terms, setterms] = useState([]);




	return (
		<div
			id={id}
			type={type}
			className={`   `}


		>



			<Splide aria-label="" options={sliderOptions}>


				<TermsSliderProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors }}>

					{children != undefined && children.map((child, indexZ) => {


						return (

							<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

						)

					})}

				</TermsSliderProvider>


			</Splide>






		</div>
	);
};

export default TermsSliderView;
