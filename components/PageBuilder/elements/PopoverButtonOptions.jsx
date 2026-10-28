import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import DropDown from "../../../components/DropDown";


const ButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var cssSelectors = props?.cssSelectors ?? {};






	var animateListArgs = {
		backInDown: { label: "backInDown", value: "backInDown" },
		backInLeft: { label: "backInLeft", value: "backInLeft" },
		backInRight: {
			label: "backInRight",
			value: "backInRight",

		},
		backInUp: {
			label: "backInUp",
			value: "backInUp",

		},
		bounceIn: { label: "bounceIn", value: "bounceIn" },
		bounceInDown: {
			label: "bounceInDown",
			value: "bounceInDown",

		},
		bounceInLeft: {
			label: "bounceInLeft",
			value: "bounceInLeft",

		},
		bounceInRight: {
			label: "bounceInRight",
			value: "bounceInRight",

		},
		bounceInUp: {
			label: "bounceInUp",
			value: "bounceInUp",

		},
		fadeIn: { label: "fadeIn", value: "fadeIn" },
		fadeInDown: {
			label: "fadeInDown",
			value: "fadeInDown",

		},
		fadeInDownBig: {
			label: "fadeInDownBig",
			value: "fadeInDownBig",

		},
		fadeInLeft: {
			label: "fadeInLeft",
			value: "fadeInLeft",

		},
		fadeInLeftBig: {
			label: "fadeInLeftBig",
			value: "fadeInLeftBig",

		},
		fadeInRight: {
			label: "fadeInRight",
			value: "fadeInRight",

		},
		fadeInRightBig: {
			label: "fadeInRightBig",
			value: "fadeInRightBig",

		},
		fadeInUp: {
			label: "fadeInUp",
			value: "fadeInUp",

		},
		fadeInUpBig: {
			label: "fadeInUpBig",
			value: "fadeInUpBig",

		},
		fadeInTopLeft: {
			label: "fadeInTopLeft",
			value: "fadeInTopLeft",

		},
		fadeInTopRight: {
			label: "fadeInTopRight",
			value: "fadeInTopRight",

		},
		fadeInBottomRight: {
			label: "fadeInBottomRight",
			value: "fadeInBottomRight",

		},
		fadeInBottomLeft: {
			label: "fadeInBottomLeft",
			value: "fadeInBottomLeft",

		},
		rotateIn: { label: "rotateIn", value: "rotateIn" },
		rotateInDownLeft: {
			label: "rotateInDownLeft",
			value: "rotateInDownLeft",

		},
		rotateInDownRight: {
			label: "rotateInDownRight",
			value: "rotateInDownRight",

		},
		rotateInUpLeft: {
			label: "rotateInUpLeft",
			value: "rotateInUpLeft",

		},
		rotateInUpRight: {
			label: "rotateInUpRight",
			value: "rotateInUpRight",

		},
		zoomIn: { label: "zoomIn", value: "zoomIn", isPro: true },
		zoomInDown: {
			label: "zoomInDown",
			value: "zoomInDown",

		},
		zoomInLeft: {
			label: "zoomInLeft",
			value: "zoomInLeft",

		},
		zoomInRight: {
			label: "zoomInRight",
			value: "zoomInRight",

		},
		zoomInUp: {
			label: "zoomInUp",
			value: "zoomInUp",

		},
		slideInDown: {
			label: "slideInDown",
			value: "slideInDown",

		},
		slideInLeft: {
			label: "slideInLeft",
			value: "slideInLeft",

		},
		slideInRight: {
			label: "slideInRight",
			value: "slideInRight",

		},
		slideInUp: {
			label: "slideInUp",
			value: "slideInUp",

		},
		backOutDown: {
			label: "backOutDown",
			value: "backOutDown",
		},
		backOutLeft: {
			label: "backOutLeft",
			value: "backOutLeft",
		},
		backOutRight: {
			label: "backOutRight",
			value: "backOutRight",

		},
		backOutUp: {
			label: "backOutUp",
			value: "backOutUp",

		},
		bounceOut: { label: "bounceOut", value: "bounceOut" },
		bounceOutDown: {
			label: "bounceOutDown",
			value: "bounceOutDown",

		},
		bounceOutLeft: {
			label: "bounceOutLeft",
			value: "bounceOutLeft",

		},
		bounceOutRight: {
			label: "bounceOutRight",
			value: "bounceOutRight",

		},
		bounceOutUp: {
			label: "bounceOutUp",
			value: "bounceOutUp",

		},
		fadeOut: { label: "fadeOut", value: "fadeOut" },
		fadeOutDown: {
			label: "fadeOutDown",
			value: "fadeOutDown",

		},
		fadeOutDownBig: {
			label: "fadeOutDownBig",
			value: "fadeOutDownBig",

		},
		fadeOutLeft: {
			label: "fadeOutLeft",
			value: "fadeOutLeft",

		},
		fadeOutLeftBig: {
			label: "fadeOutLeftBig",
			value: "fadeOutLeftBig",

		},
		fadeOutRight: {
			label: "fadeOutRight",
			value: "fadeOutRight",

		},
		fadeOutRightBig: {
			label: "fadeOutRightBig",
			value: "fadeOutRightBig",

		},
		fadeOutUp: {
			label: "fadeOutUp",
			value: "fadeOutUp",

		},
		fadeOutUpBig: {
			label: "fadeOutUpBig",
			value: "fadeOutUpBig",

		},
		fadeOutTopLeft: {
			label: "fadeOutTopLeft",
			value: "fadeOutTopLeft",

		},
		fadeOutTopRight: {
			label: "fadeOutTopRight",
			value: "fadeOutTopRight",

		},
		fadeOutBottomRight: {
			label: "fadeOutBottomRight",
			value: "fadeOutBottomRight",

		},
		fadeOutBottomLeft: {
			label: "fadeOutBottomLeft",
			value: "fadeOutBottomLeft",

		},
		rotateOut: { label: "rotateOut", value: "rotateOut" },
		rotateOutDownLeft: {
			label: "rotateOutDownLeft",
			value: "rotateOutDownLeft",

		},
		rotateOutDownRight: {
			label: "rotateOutDownRight",
			value: "rotateOutDownRight",

		},
		rotateOutUpLeft: {
			label: "rotateOutUpLeft",
			value: "rotateOutUpLeft",

		},
		rotateOutUpRight: {
			label: "rotateOutUpRight",
			value: "rotateOutUpRight",

		},
		zoomOut: {
			label: "zoomOut",
			value: "zoomOut",

		},
		zoomOutDown: {
			label: "zoomOutDown",
			value: "zoomOutDown",

		},
		zoomOutLeft: {
			label: "zoomOutLeft",
			value: "zoomOutLeft",

		},
		zoomOutRight: {
			label: "zoomOutRight",
			value: "zoomOutRight",

		},
		zoomOutUp: {
			label: "zoomOutUp",
			value: "zoomOutUp",

		},
		slideOutDown: {
			label: "slideOutDown",
			value: "slideOutDown",

		},
		slideOutLeft: {
			label: "slideOutLeft",
			value: "slideOutLeft",

		},
		slideOutRight: {
			label: "slideOutRight",
			value: "slideOutRight",

		},
		slideOutUp: {
			label: "slideOutUp",
			value: "slideOutUp",

		},
	};











	return (
		<div className="px-3" >

			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Button Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.buttonLabel} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.buttonLabel = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>





				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Button Icon</label>
					<div>



						<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {





							var optionsX = { ...options }
							optionsX.buttonIcon = args
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


				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">position</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.position} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.position = value
							updateBlock('options', optionsX)

						}} >
							<option value="topLeft">Top Left</option>
							<option value="topRight">Top Right</option>
							<option value="bottomLeft">Bottom Left</option>
							<option value="bottomRight">Bottom Right</option>
							<option value="fixedLeft">Fixed Left</option>
							<option value="fixedRight">Fixed Right</option>
							<option value="fixedMiddle">Fixed Middle</option>


						</select>
					</div>
				</div>
				<div className="flex justify-between gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Slide In</label>
					<div>


						<DropDown allowReset={false} multiple={false} value={options.slideIn} position="right" options={animateListArgs} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


							var optionsX = { ...options }
							optionsX.slideIn = args?.value
							updateBlock('options', optionsX)

						}} />


					</div>
				</div>
				<div className="flex justify-between gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Slide Out</label>
					<div>


						<DropDown allowReset={false} multiple={false} value={options.slideOut} position="right" options={animateListArgs} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {


							var optionsX = { ...options }
							optionsX.slideOut = args?.value
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
