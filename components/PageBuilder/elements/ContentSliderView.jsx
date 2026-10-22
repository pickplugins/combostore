"use client"
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";


const ContentSliderView = (props) => {


	var options = props?.options;
	var items = options?.items ?? [];

	var sliderOptions = options?.sliderOptions

	return (
		<div
			id={id}
			type={type}
			className={`  `}

		>



			<Splide aria-label="" options={sliderOptions}>



				{items?.map((item, index) => {


					return (<SplideSlide key={index}>

						{children != undefined && children.map((child, indexZ) => {


							return (

								<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

							)

						})}

					</SplideSlide>)
				})}

			</Splide>






		</div>
	);
};

export default ContentSliderView;
