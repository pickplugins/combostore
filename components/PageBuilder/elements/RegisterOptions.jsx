import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import GalleryPicker from '../../shop-elements/GalleryPicker';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";


const ImageOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var logoType = options?.logoType ?? 'text';
	var logoText = options?.logoText ?? '';
	var cssSelectors = props?.cssSelectors ?? {};


	const [loading, setloading] = useState(false);






	// useEffect(() => {

	// 	fetchPosts();
	// }, []);







	function onPickFeaturedImage(item) {




		//var post_thumbnail = { id: item.id, title: item.title, src: item.src }

		//setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });

		var optionsX = { ...options }
		optionsX.src = item.src
		updateBlock('options', optionsX)

	}


	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">




				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Email Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.emailLabel} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.emailLabel = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Phone Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.phoneLabel} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.phoneLabel = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Password1 Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.password1Label} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.password1Label = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Password2 Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.password2Label} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.password2Label = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Register Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.registerLabel} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.registerLabel = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>







				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />


			</div>


		</div>
	);
};



export default ImageOptions;
