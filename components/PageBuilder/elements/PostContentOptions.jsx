import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';

import DropDown from "../../../components/DropDown";
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";


const HeadingOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options;
	var cssSelectors = props?.cssSelectors;


	const [loading, setloading] = useState(false);



	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">









				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />





			</div>


		</div>
	);
};



export default HeadingOptions;
