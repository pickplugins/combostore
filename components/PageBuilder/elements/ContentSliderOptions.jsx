import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import GalleryPicker from '../../shop-elements/GalleryPicker';
import NextImage from "next/image";
import DropDown from '../../../components/DropDown';


const ContentSliderOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var items = options?.items ?? [];


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










	var sliderOptionsArgs = {
		autoplay: { id: "autoplay", label: "Auto play", value: 1 },
		interval: { id: "interval", label: "Interval", value: "500" },
		pauseOnHover: { id: "pauseOnHover", label: "Pause On Hover", value: 1 },
		pauseOnFocus: { id: "pauseOnFocus", label: "Pause On Focus", value: 1 },
		lazyLoad: { id: "lazyLoad", label: "Lazy Load", value: 1 },
		preloadPages: { id: "preloadPages", label: "Preload Pages", value: 1 },
		keyboard: { id: "keyboard", label: "Keyboard", value: 1 },
		wheel: { id: "wheel", label: "Wheel", value: 1 },
		releaseWheel: { id: "releaseWheel", label: "Release Wheel", value: 1 },
		direction: { id: "direction", label: "Direction", value: "ltr" },
		cover: { id: "cover", label: "Cover", value: 0 },
		rewind: { id: "rewind", label: "Rewind", value: 0 },
		speed: { id: "speed", label: "Speed", value: 400 },
		rewindSpeed: { id: "rewindSpeed", label: "Rewind Speed", value: 400 },
		rewindByDrag: { id: "rewindByDrag", label: "Rewind By Drag", value: 0 },
		width: { id: "width", label: "Width", value: "" },
		height: { id: "height", label: "Height", value: "" },
		fixedWidth: { id: "fixedWidth", label: "Fixed Width", value: "" },
		fixedHeight: { id: "fixedHeight", label: "Fixed Height", value: "" },
		heightRatio: { id: "heightRatio", label: "Height Ratio", value: "" },
		autoWidth: { id: "autoWidth", label: "Auto Width", value: 0 },
		autoHeight: { id: "autoHeight", label: "Auto Height", value: 0 },
		start: { id: "start", label: "Start", value: 0 },
		perPage: { id: "perPage", label: "Per Page", value: 3 },
		perMove: { id: "perMove", label: "Per Move", value: 3 },

		focus: { id: "focus", label: "Focus", value: "center" },
		gap: { id: "gap", label: "Gap", value: "1em", unit: "em", number: "1" },
		padding: { id: "padding", label: "Padding", value: "" },
		arrows: { id: "arrows", label: "Arrows", value: 1 },
		pagination: { id: "pagination", label: "Pagination", value: 1 },
		//easing: { label: 'Easing', value: 'cubic-bezier(0.25, 1, 0.5, 1)' },
		paginationKeyboard: { id: "paginationKeyboard", label: "Pagination Keyboard", value: 1 },
		paginationDirection: {
			id: "paginationDirection",
			label: "Pagination Direction",
			value: "paginationDirectltrion",
		},
		drag: { id: "drag", label: "Drag", value: 1 },
		noDrag: { id: "noDrag", label: "No Drag", value: "input, textarea, .rich-text" },
		snap: { id: "snap", label: "Snap", value: 1 },
		mediaQuery: { id: "mediaQuery", label: "Media Query", value: "max" },
		type: { id: "type", label: "Slider type", value: "slide" },

	};



	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">





				<div className="flex justify-between gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Slider Options</label>
					<div>
						<DropDown allowReset={true} multiple={false} value={''} position={`right`} options={sliderOptionsArgs} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {
							//setorderData({ ...orderData, payment_status: args?.value })
							var optionsX = { ...options }
							var sliderOptionsX = optionsX.sliderOptions ?? {}

							sliderOptionsX[args.id] = args?.value

							optionsX.sliderOptions = sliderOptionsX

							updateBlock('options', optionsX)





						}} />
					</div>
				</div>


				<div className="flex flex-col gap-4 text-xs">

					{options?.sliderOptions != null && Object.entries(options?.sliderOptions)?.map((args, index) => {



						const [key, value] = args;


						return <div key={key} className="flex flex-col gap-2">



							{
								(key == 'interval' ||
									key == 'speed' ||
									key == 'rewindSpeed' ||
									key == 'rewindSpeed' ||
									key == 'perPage' ||
									key == 'gap' ||
									key == 'width' ||
									key == 'height' ||
									key == 'fixedWidth' ||
									key == 'fixedHeight' ||
									key == 'heightRatio' ||
									key == 'start' ||
									key == 'height' ||
									key == 'padding' ||
									key == 'height' ||
									key == 'perMove')

								&& (
									<div className="flex justify-between items-center">
										<div>{sliderOptionsArgs[key]?.label}</div>
										<input type="number" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={value} onChange={ev => {
											const { name, value } = ev.target;

											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)


										}} />
									</div>
								)}
							{
								(key == 'pauseOnHover' ||
									key == 'autoplay' ||
									key == 'pauseOnHover' ||
									key == 'pauseOnFocus' ||
									key == 'lazyLoad' ||
									key == 'preloadPages' ||
									key == 'keyboard' ||
									key == 'wheel' ||
									key == 'releaseWheel' ||
									key == 'arrows' ||
									key == 'pagination' ||
									key == 'paginationKeyboard' ||
									key == 'drag' ||
									key == 'cover' ||
									key == 'rewind' ||
									key == 'rewindByDrag' ||
									key == 'autoWidth' ||
									key == 'autoHeight' ||
									key == 'snap')


								&& (

									<div className="flex justify-between items-center">
										<div>{sliderOptionsArgs[key]?.label}</div>
										{/* <input type="checkbox" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" checked={value} /> */}

										<div className="cursor-pointer " onClick={ev => {


											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = !value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)

										}}>
											{value ? <IconCheckbox /> : <IconSquare />}
										</div>

									</div>
								)}

							{
								(key == 'direction')


								&& (

									<div className="flex justify-between items-center">
										<div>{sliderOptionsArgs[key]?.label}</div>

										<select name="" id="" onChange={ev => {
											const { name, value } = ev.target;

											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)


										}}>
											<option value="rtl">RTL</option>
											<option value="ltr">LTR</option>
										</select>

										<div className="cursor-pointer " onClick={ev => {


											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = !value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)

										}}>
											{value ? <IconCheckbox /> : <IconSquare />}
										</div>

									</div>
								)}
							{
								(key == 'focus')


								&& (

									<div className="flex justify-between items-center">
										<div>{sliderOptionsArgs[key]?.label}</div>

										<select name="" id="" onChange={ev => {
											const { name, value } = ev.target;

											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)


										}}>
											<option value="center">Center</option>
										</select>

										<div className="cursor-pointer " onClick={ev => {


											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = !value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)

										}}>
											{value ? <IconCheckbox /> : <IconSquare />}
										</div>

									</div>
								)}
							{
								(key == 'type')


								&& (

									<div className="flex justify-between items-center">
										<div>{sliderOptionsArgs[key]?.label}</div>

										<select name="" id="" onChange={ev => {
											const { name, value } = ev.target;

											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)


										}}>
											<option value="slide">Slide</option>
											<option value="loop">Loop</option>
											<option value="fade">Fade</option>
										</select>

										<div className="cursor-pointer " onClick={ev => {


											var optionsX = { ...options }
											var sliderOptionsX = optionsX.sliderOptions ?? {}

											sliderOptionsX[key] = !value

											optionsX.sliderOptions = sliderOptionsX

											updateBlock('options', optionsX)

										}}>
											{value ? <IconCheckbox /> : <IconSquare />}
										</div>

									</div>
								)}




						</div>

					})}

				</div>








			</div>


		</div>
	);
};



export default ContentSliderOptions;
