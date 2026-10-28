"use client"
import { useState, useEffect } from "react";
import BlockRender from '../BlockRender';
import { PostGridProvider } from "../context/PostGridContext";
import { usePost } from "../context/PostContext";

const RelatedProductsView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var queryPrams = options?.queryPrams ?? [];
	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};




	var sliderOptions = options?.sliderOptions


	const product = usePost();

	var postId = product?.id;
	var postType = product?.post_type;
	var categories = product?.categories;
	var tags = product?.tags;
	const categoriesSlugs = categories.map(item => item.slug);

	queryPrams.post_type = [postType];
	if (categoriesSlugs) {
		queryPrams.taxQuery = [
			{
				"title": "",
				"collections": [
					{
						"taxonomy": "product_cat",
						"field": "slug",
						"terms": categoriesSlugs,
						"operator": "IN"
					}
				],
				"relation": "OR"
			}
		]
	}






	return (
		<div
			id={id}
			type={type}
			className={`${cssSelectors['*']?.classes}  `}

		>



			<PostGridProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors }}>

				{children != undefined && children.map((child, indexZ) => {


					return (

						<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

					)

				})}

			</PostGridProvider>





		</div>
	);
};

export default RelatedProductsView;
