import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../ToggleContent';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../IconPicker";


const CollectionsFieldOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;

	var cssSelectors = props?.cssSelectors;
	var id = props?.id;
	var options = props?.options;
	var fieldId = options?.fieldId;

	const [loading, setloading] = useState(false);






	// useEffect(() => {

	// 	fetchPosts();
	// }, []);







	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">







				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Field ID</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={fieldId} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.fieldId = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />







			</div>


		</div>
	);
};



export default CollectionsFieldOptions;
