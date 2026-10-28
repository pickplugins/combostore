import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";


const ButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var cssSelectors = props?.cssSelectors ?? {};


	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Username</label>
					<div>
						<input type="text" placeholder="Username" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.username} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.username = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<div>
						<input type="text" placeholder="Order On Messenger" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.text} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.text = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">message</label>
					<div>
						<textarea type="text" placeholder="Hi i want to buy {product_title} {product_url}" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.message} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.message = value
							updateBlock('options', optionsX)

						}} />
					</div>

					<ul className="flex flex-col gap-1 text-sm text-gray-700  list-disc list-inside italic">
						<li>{`{product_id}: Product ID`}</li>
						<li>{`{product_title}: Product Title`}</li>
						<li>{`{product_price}: Product Price`}</li>
						<li>{`{product_description}: Product Description`}</li>
						<li>{`{product_image}: Product Image`}</li>
						<li>{`{product_url}: Product URL`}</li>
					</ul>






				</div>






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



export default ButtonOptions;
