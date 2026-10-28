import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";


const GridOptions = (props) => {

	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};
	var selectedId = props?.selectedId
	var id = props?.id;
	var children = props?.children;


	const [loading, setloading] = useState(false);


	// useEffect(() => {

	// 	fetchPosts();
	// }, []);


	return (
		<div className="p-3" >

			<div className="flex flex-col gap-3">


				<div className="flex justify-between items-center text-sm">
					<div>Edit Mode?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.editMode = !optionsX.editMode
						updateBlock('options', optionsX)
					}}>
						{options.editMode ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>
				<div className="flex justify-between items-center text-sm">
					<div>Enable Location Picker?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.deliveryLocation = !optionsX.deliveryLocation
						updateBlock('options', optionsX)
					}}>
						{options.deliveryLocation ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>
				<div className="flex justify-between items-center text-sm">
					<div>Enable Shipping?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.shippingAddress = !optionsX.shippingAddress
						updateBlock('options', optionsX)
					}}>
						{options.shippingAddress ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>
				<div className="flex justify-between items-center text-sm">
					<div>Enable Shipping Methods?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.shippingMethods = !optionsX.shippingMethods
						updateBlock('options', optionsX)
					}}>
						{options.shippingMethods ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>
				<div className="flex justify-between items-center text-sm">
					<div>Enable Order Notes?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.orderNotes = !optionsX.orderNotes
						updateBlock('options', optionsX)
					}}>
						{options.orderNotes ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>
				<div className="flex justify-between items-center text-sm">
					<div>Enable Order Notes?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.orderSubscription = !optionsX.orderSubscription
						updateBlock('options', optionsX)
					}}>
						{options.orderSubscription ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>
				<div className="flex justify-between items-center text-sm">
					<div>Enable Country & City?</div>
					<div className="cursor-pointer " onClick={ev => {
						var optionsX = { ...options }
						optionsX.countryCity = !optionsX.countryCity
						updateBlock('options', optionsX)
					}}>
						{options.countryCity ? <IconCheckbox /> : <IconSquare />}
					</div>

				</div>


				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>


		</div>
	);
};



export default GridOptions;
