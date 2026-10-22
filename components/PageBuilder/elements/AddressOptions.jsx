import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import ToggleContent from '../../../components/ToggleContent';


const ButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var phone = options?.phone;
	var email = options?.email;
	var location = options?.location;
	var iconSize = options?.iconSize;
	var cssSelectors = props?.cssSelectors;


	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">



				<ToggleContent iconPosition='left' title={'Phone'} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
						<div>
							<textarea className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={phone.value} onChange={ev => {

								var value = ev.target.value;

								var optionsX = { ...options }
								optionsX.phone.value = value
								updateBlock('options', optionsX)

							}} />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
						<div>
							<IconPicker allowReset={true} allowSearch={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


								var optionsX = { ...options }
								optionsX.phone.icon = args
								updateBlock('options', optionsX)

							}} />
						</div>
					</div>





				</ToggleContent>
				<ToggleContent iconPosition='left' title={'Email'} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
						<div>
							<textarea className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={email.value} onChange={ev => {

								var value = ev.target.value;

								var optionsX = { ...options }
								optionsX.email.value = value
								updateBlock('options', optionsX)

							}} />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
						<div>
							<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


								var optionsX = { ...options }
								optionsX.email.icon = args
								updateBlock('options', optionsX)

							}} />
						</div>
					</div>





				</ToggleContent>
				<ToggleContent iconPosition='left' title={'location'} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
						<div>
							<textarea className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={location.value} onChange={ev => {

								var value = ev.target.value;

								var optionsX = { ...options }
								optionsX.location.value = value
								updateBlock('options', optionsX)

							}} />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
						<div>
							<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


								var optionsX = { ...options }
								optionsX.location.icon = args
								updateBlock('options', optionsX)

							}} />
						</div>
					</div>





				</ToggleContent>






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
