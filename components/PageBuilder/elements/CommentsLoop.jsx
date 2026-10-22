"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockPreview from '../BlockPreview';
import { CommentProvider } from "../context/CommentContext";
import { useCommentsGrid } from "../context/CommentsGridContext";

const CommentsLoop = (props) => {

	const CommentsGridAttr = useCommentsGrid();

	// var queryPrams = CommentsGridAttr?.queryPrams
	var queryPramsX = CommentsGridAttr?.queryPrams
	var cssSelectors = CommentsGridAttr?.cssSelectors
	var [queryPrams, setqueryPrams] = useState(queryPramsX ?? {});



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



	var [comments, setcomments] = useState([]);



	function fetchComments() {


		queryPrams.post_id = 10018;

		var postData = JSON.stringify(queryPrams);

		fetch(serverUrl + "wp-json/combo-store/v2/get_comments", {
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


						var comments = res?.comments;
						var total = res?.total;
						var max_pages = res?.max_pages;


						console.log(comments);


						// var termsX = [];

						// Object.entries(terms).map(args => {
						// 	var index = args[0]
						// 	var item = args[1]
						// 	termsX.push(item)
						// })


						setcomments(comments)


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
		fetchComments();
	}, []);


	useEffect(() => {


		fetchComments();

	}, [queryPrams]);


	useEffect(() => {



		if (CommentsGridAttr?.queryPrams) {
			setqueryPrams(CommentsGridAttr?.queryPrams)
		}




	}, [CommentsGridAttr?.queryPrams,]);



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




			{CommentsGridAttr != null && (

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


					{comments?.map((item, index) => {


						return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

							<CommentProvider value={item}>


								{children != undefined && children.map((child, indexZ) => {


									return (

										<BlockPreview index={`${index}${indexZ}`} {...item} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock}
										/>

									)

								})}
							</CommentProvider>



						</div>)
					})}







				</div>
			)}


		</>
	);
};

export default CommentsLoop;
