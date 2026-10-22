"use client"
import { useState, useEffect } from "react";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import BlockPreview from '../BlockPreview';
import { CategoryProvider } from "../context/CategoryContext";
import { useTermsSlider } from "../context/TermsSliderContext";
import { useTermsGrid } from "../context/TermsGridContext";

const TermsLoop = (props) => {

	const termsSliderAttr = useTermsSlider();
	const termsGridAttr = useTermsGrid();

	// var queryPrams = termsSliderAttr?.queryPrams
	var cssSelectors = termsSliderAttr?.cssSelectors ? termsSliderAttr?.cssSelectors : termsGridAttr?.cssSelectors
	var queryPramsX = termsGridAttr?.queryPrams ? termsGridAttr?.queryPrams : termsSliderAttr?.queryPrams

	var [queryPrams, setqueryPrams] = useState(queryPramsX);




	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId


	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var items = options?.items ?? [];
	var id = props?.id;

	var index = props?.index




	var [terms, setterms] = useState([]);


	function fetchPosts() {

		var postData = JSON.stringify(queryPrams);


		// return;

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
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


						var terms = res?.terms;
						var total = res?.total;
						var max_pages = res?.max_pages;




						// var termsX = [];

						// Object.entries(terms).map(args => {
						// 	var index = args[0]
						// 	var item = args[1]
						// 	termsX.push(item)
						// })
						var termsX = [];

						if (terms) {

							Object.entries(terms).map(args => {
								var index = args[0]
								var item = args[1]
								termsX.push(item)
							})
						}





						setterms(termsX)


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



		if (termsGridAttr?.queryPrams) {
			setqueryPrams(termsGridAttr?.queryPrams)
		}

		if (termsSliderAttr?.queryPrams) {
			setqueryPrams(termsSliderAttr?.queryPrams)
		}


	}, [termsGridAttr?.queryPrams, termsSliderAttr?.queryPrams]);






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
			{termsSliderAttr != null && (

				<>


					{terms?.map((item, index) => {


						return (
							<SplideSlide key={index} >
								<div className={`${cssSelectors['loop-item']?.classes} `} key={index}

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

									<CategoryProvider value={item}>


										{children != undefined && children.map((child, indexZ) => {


											return (

												<BlockPreview index={`${index}${indexZ}`} {...item} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />

											)

										})}
									</CategoryProvider>



								</div>
							</SplideSlide>
						)
					})}

				</>

			)}

			{termsGridAttr != null && (

				<>
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





						{terms?.map((item, index) => {


							return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

								<CategoryProvider value={item}>


									{children != undefined && children.map((child, indexZ) => {


										return (

											<BlockPreview index={`${index}${indexZ}`} {...item} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock}
											/>

										)

									})}
								</CategoryProvider>



							</div>)
						})}







					</div>
				</>

			)}


		</>
	);
};

export default TermsLoop;
