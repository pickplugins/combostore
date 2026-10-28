import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import IconPicker from "../../../components/IconPicker";

import DropDown from "../../../components/DropDown";
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";


const HeadingOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};

	var icon = options?.icon;
	var iconSize = options?.iconSize;



	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">


				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.label} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.label = value
							updateBlock('options', optionsX)

						}} >

						</input>
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

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
					<div>



						<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {





							var optionsX = { ...options }
							optionsX.icon = args
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
					<div>
						<input type="number" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={iconSize} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.iconSize = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>


				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />





			</div>


		</div>
	);
};



export default HeadingOptions;
