import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";


const ListOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var cssSelectors = props?.cssSelectors ?? {};
	var id = props?.id;
	var options = props?.options;
	var items = options?.items ?? [];
	var iconSize = options?.iconSize;
	var icon = options?.icon;


	const [loading, setloading] = useState(false);






	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	const Title = ({ item, index }) => {

		return (

			<div className="flex flex-1 justify-between items-center">
				<div className="text-xs">{item.text}</div>
				<div title="Remove" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
					var optionsX = { ...options }

					var itemsX = optionsX.items;

					itemsX.splice(index, 1)
					optionsX.items = itemsX
					updateBlock('options', optionsX)

				}}><IconX size={14} /></div>
			</div>

		)

	}
	const SelectorTitle = ({ item, selector }) => {

		return (

			<div className="flex flex-1 justify-between items-center">
				<div className="text-xs">{selector}</div>
				<div title="Remove" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {

					ev.preventDefault();
					ev.stopPropagation();


					var cssSelectorsX = { ...cssSelectors }
					delete cssSelectorsX[selector]

					updateBlock('cssSelectors', cssSelectorsX)

				}}><IconX size={14} /></div>
			</div>

		)

	}













	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">

				<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

					var optionsX = { ...options }
					var itemsX = [...items];
					itemsX.push({ text: 'Custom Item', icon: '' })
					optionsX.items = itemsX
					updateBlock('options', optionsX)

				}}>Add</div>

				<div className="flex flex-col gap-1">
					{items?.map((item, index) => {
						return (
							<ToggleContent key={index} iconPosition='left' title={<Title item={item} index={index} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>



								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-xs font-medium text-gray-600">Text</label>
									<div>
										<textarea className="w-full !min-h-28 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.text} onChange={ev => {

											var value = ev.target.value;

											var optionsX = { ...options }
											optionsX.items[index].text = value
											updateBlock('options', optionsX)

										}} />
									</div>
								</div>



								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
									<div>



										<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


											var optionsX = { ...options }
											optionsX.items[index].icon = args
											updateBlock('options', optionsX)

										}} />
									</div>
								</div>

								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
									<div>
										<input type="number" className="w-full !min-h-28 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.iconSize} onChange={ev => {

											var value = ev.target.value;

											var optionsX = { ...options }
											optionsX.items[index].iconSize = value
											updateBlock('options', optionsX)

										}} />
									</div>
								</div>



							</ToggleContent>
						)
					})}
				</div>





				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Tag</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.tag} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.tag = value
							updateBlock('options', optionsX)

						}} >
							<option value="ul">ul</option>
							<option value="ol">ol</option>

						</select>
					</div>
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
