import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";


const ListOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;

	var cssSelectors = props?.cssSelectors ?? {};
	var id = props?.id;
	var options = props?.options;
	var items = options?.items ?? [];


	const [loading, setloading] = useState(false);






	// useEffect(() => {

	// 	fetchPosts();
	// }, []);







	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">





				{/* <CssClassPicker type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.classes} onChange={(value) => {


					var optionsX = { ...options }
					optionsX.classes = value
					updateBlock('options', optionsX)

				}} /> */}

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />







			</div>


		</div>
	);
};



export default ListOptions;
