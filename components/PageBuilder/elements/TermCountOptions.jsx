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
	var cssSelectors = props?.cssSelectors ?? {};


	const [loading, setloading] = useState(false);



	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
					<div>
						<textarea className="w-full !min-h-28 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.text} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.text = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Level</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.tag} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.tag = value
							updateBlock('options', optionsX)

						}} >
							<option value="h1">H1</option>
							<option value="h2">H2</option>
							<option value="h3">H3</option>
							<option value="h4">H4</option>
							<option value="h5">H5</option>
							<option value="h6">H6</option>
						</select>
					</div>
				</div>

				{/* 
				<div className="flex flex-col gap-2">
					<div>
						<CssClassPicker type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.classes} onChange={(value) => {


							var optionsX = { ...options }
							optionsX.classes = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div> */}




				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />





			</div>


		</div>
	);
};



export default HeadingOptions;
