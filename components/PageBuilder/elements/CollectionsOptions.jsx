import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";


const CollectionsOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var cssSelectors = props?.cssSelectors;
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

			<div className="flex flex-1 justify-between items-center w-full">
				<div className="text-xs">#{index}</div>
				<div title="Remove" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {

					ev.stopPropagation();
					ev.preventDefault();

					var optionsX = { ...options }

					var itemsX = optionsX.items;

					itemsX.splice(index, 1)
					optionsX.items = itemsX
					updateBlock('options', optionsX)

				}}><IconX size={14} /></div>
			</div>

		)

	}













	return (
		<div className="px-3" >
			{/* {JSON.stringify(items)} */}

			<div className="flex flex-col gap-3">

				<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

					var optionsX = { ...options }
					var itemsX = [...items];
					itemsX.push({ fields: [{ id: '', type: 'text', label: '', value: '' }] })
					optionsX.items = itemsX
					updateBlock('options', optionsX)

				}}>Add</div>

				<div className="flex flex-col gap-1">
					{items?.map((item, index) => {

						var fields = item?.fields


						return (
							<ToggleContent key={index} iconPosition='left' title={<Title item={item} index={index} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`} headerTitleClass={`flex w-full items-center`}>


								<div className="flex flex-col gap-3">
									<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

										var optionsX = { ...options }
										optionsX.items[index].fields.push({ id: '', type: 'text', label: '', value: '' })
										updateBlock('options', optionsX)

									}}>Add</div>




									{fields?.map((field, fieldIndex) => {

										var fieldType = field.type

										return (

											<div className="bg-gray-300 p-2 rounded-sm flex flex-col gap-3">

												<div className="flex flex-col gap-2">
													<label htmlFor="" className="text-xs font-medium text-gray-600">Type</label>
													<div>
														<select type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.type} onChange={ev => {

															var value = ev.target.value;

															var optionsX = { ...options }
															optionsX.items[index].fields[fieldIndex].type = value
															updateBlock('options', optionsX)

														}} >
															<option value={`text`}>Text</option>
															<option value={`icon`}>Icon</option>

														</select>
													</div>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="text-xs font-medium text-gray-600">ID</label>
													<div>
														<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={field.id} onChange={ev => {

															var value = ev.target.value;

															var optionsX = { ...options }
															optionsX.items[index].fields[fieldIndex].id = value
															updateBlock('options', optionsX)

														}} />
													</div>
												</div>
												<div className="flex flex-col gap-2">
													<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
													<div>
														<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={field.label} onChange={ev => {

															var value = ev.target.value;

															var optionsX = { ...options }
															optionsX.items[index].fields[fieldIndex].label = value
															updateBlock('options', optionsX)

														}} />
													</div>
												</div>


												{fieldType == 'text' && (
													<>

														<div className="flex flex-col gap-2">
															<label htmlFor="" className="text-xs font-medium text-gray-600">Value</label>
															<div>
																<textarea className="w-full !min-h-28 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={field.value} onChange={ev => {

																	var value = ev.target.value;

																	var optionsX = { ...options }
																	optionsX.items[index].fields[fieldIndex].value = value
																	updateBlock('options', optionsX)

																}} />
															</div>
														</div>

													</>
												)}
												{fieldType == 'icon' && (
													<>

														<div className="flex flex-col gap-2">
															<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
															<div>



																<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


																	var optionsX = { ...options }
																	optionsX.items[index].fields[fieldIndex].value = value
																	updateBlock('options', optionsX)

																}} />
															</div>
														</div>
													</>
												)}



											</div>

										)


									})}
								</div>









							</ToggleContent>
						)
					})}
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



export default CollectionsOptions;
