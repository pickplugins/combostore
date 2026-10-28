import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import ToggleContent from '../../../components/ToggleContent';


const GridOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};
	var selectedId = props?.selectedId
	var id = props?.id;
	var children = props?.children;
	var items = options?.items;


	const [loading, setloading] = useState(false);


	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	const Title = ({ item, index }) => {

		return (

			<div className="flex flex-1 justify-between items-center">
				<div className="text-xs">{item.label}</div>
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

	return (
		<div className="p-3" >



			<div className="flex flex-col gap-3">















				<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {


					let _n = 0;
					const uid = () => `b${++_n}${Date.now().toString(36)}`;

					var tabId = uid();

					console.log(tabId);


					var optionsX = { ...options }
					var items = optionsX?.items
					items.push({ label: "Hello", classes: "" })

					optionsX.items = items;


					console.log(optionsX);

					updateBlock('options', optionsX)

					handleMoveBlock({ paletteType: 'accordionItem' }, id, 'inside')


				}}>Add Item</div>




				<div className="flex flex-col gap-1">
					{items?.map((item, index) => {
						return (
							<ToggleContent key={index} iconPosition='left' title={<Title item={item} index={index} />} contentClass={`mt-1.5 rounded-lg border border-gray-200 bg-white p-3`}>



								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
									<div>
										<textarea className="w-full !min-h-28 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.label} onChange={ev => {

											var value = ev.target.value;

											var optionsX = { ...options }
											optionsX.items[index].label = value
											updateBlock('options', optionsX)

										}} />
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<div>
										<CssClassPicker type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={items.classes} onChange={(value) => {


											var optionsX = { ...options }
											optionsX.items[index].classes = value
											updateBlock('options', optionsX)

										}} />
									</div>
								</div>





							</ToggleContent>
						)
					})}
				</div>







				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>


		</div>
	);
};



export default GridOptions;
