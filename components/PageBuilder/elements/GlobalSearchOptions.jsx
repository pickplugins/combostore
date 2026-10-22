import React from "react";
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";

const ColumnsOptions = (props) => {
	const { updateBlock } = props;

	var cssSelectors = props?.cssSelectors;
	var options = props?.options;
	var editMode = options?.editMode ?? false;



	return (
		<div className="px-3" >
			<div className="flex flex-col gap-3">


				<div className="flex  gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Edit Mode?</label>
					<div>


						<div className="cursor-pointer " onClick={ev => {


							var optionsX = { ...options }

							optionsX.editMode = !editMode

							updateBlock('options', optionsX)

						}}>
							{editMode ? <IconCheckbox /> : <IconSquare />}
						</div>
					</div>
				</div>

				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>

		</div>

	);
};

export default ColumnsOptions;
