"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockRender from '../BlockRender';
import { PostProvider } from "../context/PostContext";
import { PostSliderProvider } from "../context/PostSliderContext";

const PostSliderView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	var cssSelectors = props?.cssSelectors;






	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var id = props?.id;

	var index = props?.index




	var sliderOptions = options?.sliderOptions
	var queryPrams = options?.queryPrams ?? [];

	sliderOptions.classes = {
		arrows: 'splide__arrows arrows-wrap',
		arrow: `splide__arrow arrow-item`,
		prev: 'splide__arrow--prev arrow-prev',
		next: 'splide__arrow--next arrow-next',
		pagination: 'splide__pagination pagination',
		page: 'splide__pagination__page page-item',
	}


	var [queryTerms, setqueryTerms] = useState({ taxonomy: 'product_cat', order: "DESC", per_page: 10, });
	var [terms, setterms] = useState([]);



	function fetchPosts() {



		var postData = {
			taxonomy: queryTerms.taxonomy,
			per_page: queryTerms.per_page,
			paged: queryTerms.paged,
			order: queryTerms.order,
			hierarchical: true,
		};
		postData = JSON.stringify(postData);

		fetch(serverUrl + "wp-json/combo-store/v2/get_products", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;








						setterms(posts)


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}



	useEffect(() => {
		fetchPosts();
	}, []);










	return (
		<div
			id={id}
			type={type}
			className={`   `}

		>



			<Splide aria-label="" options={sliderOptions}>

				<PostSliderProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors }}>

					{children != undefined && children.map((child, indexZ) => {


						return (

							<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

						)

					})}

				</PostSliderProvider>



			</Splide>






		</div>
	);
};

export default PostSliderView;
