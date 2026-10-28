"use client"
import { PostGridProvider } from "../context/PostGridContext";
import { useState, useEffect } from "react";

import BlockRender from '../BlockRender';

const PostGridView = (props) => {


	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	// var queryPrams = options?.queryPrams ?? [];
	var [queryPrams, setqueryPrams] = useState(options?.queryPrams ?? []);

	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};



	function onChangeQuery(args) {

		setqueryPrams(args);


	}


	return (
		<div
			id={id}
			type={type}
			className={`  ${cssSelectors['*']?.classes}  `}

		>


			<PostGridProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors, onChangeQuery: onChangeQuery }}>

				{children != undefined && children.map((child, indexZ) => {


					return (

						<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

					)

				})}

			</PostGridProvider>





		</div>
	);
};

export default PostGridView;
