"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockRender from '../BlockRender';
import { PostProvider } from "../context/PostContext";
import { usePostGrid } from "../context/PostGridContext";
import { usePostSlider } from "../context/PostSliderContext";
import { usePage } from "../context/PageContext";

const PostLoopView = (props) => {

	const postGridAttr = usePostGrid();
	const postSliderAttr = usePostSlider();
	const pageAttr = usePage();

	var queryPramsX = postGridAttr?.queryPrams ? postGridAttr?.queryPrams : postSliderAttr?.queryPrams

	// var queryPrams = postGridAttr?.queryPrams
	var cssSelectors = postGridAttr?.cssSelectors ? postGridAttr?.cssSelectors : postSliderAttr?.cssSelectors
	var [queryPrams, setqueryPrams] = useState(queryPramsX);



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var items = options?.items ?? [];
	var id = props?.id;

	var index = props?.index






	var [posts, setposts] = useState([]);



	function fetchPosts() {



		if (pageAttr?.taxonomy == 'product_cat') {
			queryPrams.categories = Array.isArray(pageAttr.slug) ? pageAttr.slug : [pageAttr.slug]
		}
		if (pageAttr?.taxonomy == 'product_brand') {
			queryPrams.brands = Array.isArray(pageAttr.slug) ? pageAttr.slug : [pageAttr.slug]
		}
		if (pageAttr?.taxonomy == 'product_tag') {
			queryPrams.tags = Array.isArray(pageAttr.slug) ? pageAttr.slug : [pageAttr.slug]
		}




		var postData = JSON.stringify(queryPrams);


		fetch(serverUrl + "wp-json/combo-store/v2/get_posts", {
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






						setposts(posts)


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

	}, [queryPrams]);
	useEffect(() => {


		setqueryPrams(postGridAttr?.queryPrams)

	}, [postGridAttr?.queryPrams]);


	return (
		<>



			{postSliderAttr && (
				<>
					{posts?.map((item, index) => {


						return (
							<SplideSlide key={index}>
								<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

									<PostProvider value={item}>


										{children != undefined && children.map((child, indexZ) => {


											return (

												<BlockRender index={`${index}${indexZ}`} {...item} key={child.id} block={child} />

											)

										})}
									</PostProvider>



								</div>
							</SplideSlide>
						)
					})}

				</>
			)}

			{postGridAttr != null && (

				<div
					id={id}
					type={type}
					className={` ${cssSelectors['loop-items']?.classes}   `}

				>





					{posts?.map((item, index) => {


						return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

							<PostProvider value={item}>


								{children != undefined && children.map((child, indexZ) => {


									return (

										<BlockRender index={`${index}${indexZ}`} {...item} key={child.id} block={child} />

									)

								})}
							</PostProvider>



						</div>)
					})}







				</div>
			)}



		</>
	);
};

export default PostLoopView;
