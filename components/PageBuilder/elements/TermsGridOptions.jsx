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
import TermsQueryPrams from "../TermsQueryPrams";


const PostGridOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var queryPrams = options?.queryPrams ?? [];
	var cssSelectors = props?.cssSelectors;


	const [loading, setloading] = useState(false);





	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	function onChangeQuery(queryPramsX) {


		var optionsX = { ...options }
		optionsX.queryPrams = queryPramsX
		updateBlock('options', optionsX)
	}












	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">



				<TermsQueryPrams queryPrams={queryPrams} onChangeQuery={onChangeQuery} />


				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />






			</div>


		</div>
	);
};



export default PostGridOptions;
