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



	var dateFormats = {
		"Y-M-d": { label: "2022-Feb-25", value: "YY-MM-dd" },
		"Y-m-d": { label: "2022-05-25", value: "Y-m-d" },
		"d-m-y": { label: "25-05-2022", value: "d-m-y" },
		"d/m/y": { label: "25/05/2022", value: "d/m/y" },
		"y-m-d": { label: "2022-05-25", value: "y-m-d" },
		"y/m/d": { label: "2022/05/25", value: "y/m/d" },
		"D M y": { label: "Sun Feb 2022", value: "D M y" },
		"D M d, y": { label: "Sun Feb 11, 2022", value: "D M d, y" },
		"M D d, y": { label: "Feb Sun 11, 2022", value: "M D d, y" },
		"M d, y": { label: "Feb 11, 2022", value: "M d, y" },
		"F d, y": { label: "February 11, 2022", value: "F d, y" },
		"d M y": { label: "25 Feb 2022", value: "d M y" },
	}


	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">


				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Date Format</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.dateFormat} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.dateFormat = value
							updateBlock('options', optionsX)

						}} >

							{Object.values(dateFormats).map((format, index) => (
								<option key={index} value={format.value}>{format.label}</option>
							))}

						</select>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Link To</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.linkTo} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.linkTo = value
							updateBlock('options', optionsX)

						}} >
							<option value="postUrl">Post URL</option>
							<option value="">No Link</option>

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
