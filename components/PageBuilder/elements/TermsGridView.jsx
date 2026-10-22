"use client"
import '@splidejs/react-splide/css';
import BlockRender from '../BlockRender';
import { TermsGridProvider } from "../context/TermsGridContext";
import { useState, useEffect } from "react";

const TermsGridView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var [queryPrams, setqueryPrams] = useState(options?.queryPrams ?? []);
	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors;




	var sliderOptions = options?.sliderOptions


	function onChangeQuery(args) {

		setqueryPrams(args);


	}




	return (
		<div
			id={id}
			type={type}
			className={` ${cssSelectors['*']?.classes}  `}

		>


			<TermsGridProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors, onChangeQuery: onChangeQuery }}>

				{children != undefined && children.map((child, indexZ) => {


					return (

						<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

					)

				})}

			</TermsGridProvider>





		</div>
	);
};

export default TermsGridView;
