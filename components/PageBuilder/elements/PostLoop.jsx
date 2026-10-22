"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockPreview from '../BlockPreview';
import { PostProvider } from "../context/PostContext";
import { usePostGrid } from "../context/PostGridContext";
import { usePostSlider } from "../context/PostSliderContext";

const PostLoop = (props) => {

	const postGridAttr = usePostGrid();
	const postSliderAttr = usePostSlider();

	// var queryPrams = postGridAttr?.queryPrams
	var queryPramsX = postGridAttr?.queryPrams ? postGridAttr?.queryPrams : postSliderAttr?.queryPrams
	var cssSelectors = postGridAttr?.cssSelectors ? postGridAttr?.cssSelectors : postSliderAttr?.cssSelectors
	var [queryPrams, setqueryPrams] = useState(queryPramsX);



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var handleMoveBlock = props?.handleMoveBlock
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



	var [posts, setposts] = useState([]);



	function fetchPosts() {




		var postData = JSON.stringify(queryPrams);

		fetch(serverUrl + "wp-json/combo-store/v2/get_posts", {
			cache: "no-store", // disables caching
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${token}`
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




						// var termsX = [];

						// Object.entries(terms).map(args => {
						// 	var index = args[0]
						// 	var item = args[1]
						// 	termsX.push(item)
						// })


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
	}, []);


	useEffect(() => {


		fetchPosts();

	}, [queryPrams]);


	useEffect(() => {



		if (postGridAttr?.queryPrams) {
			setqueryPrams(postGridAttr?.queryPrams)
		}

		if (postSliderAttr?.queryPrams) {
			setqueryPrams(postSliderAttr?.queryPrams)
		}


	}, [postGridAttr?.queryPrams, postSliderAttr?.queryPrams]);



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
		<>


			{postSliderAttr && (
				<>
					{posts?.map((item, index) => {


						return (
							<SplideSlide key={index}>
								<div className={`${cssSelectors['loop-item']?.classes} `} key={index}


								>



									<PostProvider value={item}>



										{children != undefined && children.map((child, indexZ) => {


											return (

												<BlockPreview index={`${index}${indexZ}`} {...item} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId}
													handleMoveBlock={handleMoveBlock}
												/>

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
					className={` ${cssSelectors['loop-items']?.classes}  ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''} `}

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


					{posts?.map((item, index) => {


						return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

							<PostProvider value={item}>


								{children != undefined && children.map((child, indexZ) => {


									return (

										<BlockPreview index={`${index}${indexZ}`} {...item} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock}
										/>

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

export default PostLoop;
