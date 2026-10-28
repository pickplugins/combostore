import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import GalleryPicker from '../../shop-elements/GalleryPicker';
import NextImage from "next/image";
import DropDown from '../../../components/DropDown';
import CssSelectors from "../CssSelectors";
import PostQueryPrams from "../PostQueryPrams";


const RelatedProductsOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var queryPrams = options?.queryPrams ?? [];
	var cssSelectors = props?.cssSelectors ?? {};


	const [loading, setloading] = useState(false);





	// useEffect(() => {

	// 	fetchPosts();
	// }, []);





	function onChangeQuery(queryPrams) {

		console.log(queryPrams);


		var optionsX = { ...options }
		optionsX.queryPrams = queryPrams
		updateBlock('options', optionsX)
	}








	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">


				<PostQueryPrams queryPrams={queryPrams} onChangeQuery={onChangeQuery} />



				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />






			</div>


		</div>
	);
};



export default RelatedProductsOptions;
