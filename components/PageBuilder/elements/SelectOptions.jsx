import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconCopy, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";
import IconPicker from "../../../components/IconPicker";
import ToggleContent from "../../../components/ToggleContent";
import DropDown from '../../../components/DropDown';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const ButtonOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	// var prams = options?.prams ?? [];
	var pramsSource = options?.pramsSource;
	var pramsQuery = options?.pramsQuery ?? {};

	var cssSelectors = props?.cssSelectors ?? {};

	var [prams, setprams] = useState(options?.prams ?? []);
	var [loading, setloading] = useState(false);









	const Title = ({ item, index }) => {

		return (

			<div className="flex flex-1 justify-between items-center">




				<div className="text-xs">{item?.label}</div>
				<div className="flex gap-2">
					<div className="inline-flex h-7 w-7 items-center justify-center rounded-md text-gray-500 cursor-pointer transition-colors hover:bg-gray-200 hover:text-gray-900" onClick={ev => {

						ev.preventDefault()
						ev.stopPropagation()

						var optionsX = { ...options }

						var pramsX = optionsX.prams;

						//pramsX.push({ label: item?.label, value: item?.value })

						pramsX.splice(index, 0, { label: item?.label, value: item?.value, prams: item?.prams });


						optionsX.prams = pramsX
						updateBlock('options', optionsX)

					}}><IconCopy size={18} /></div>
					<div title="Remove" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {

						ev.preventDefault()
						ev.stopPropagation()


						var optionsX = { ...options }

						var pramsX = optionsX.prams;

						pramsX.splice(index, 1)
						optionsX.prams = pramsX
						updateBlock('options', optionsX)

					}}><IconX size={14} /></div>
				</div>
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


					var optionsX = { ...options }
					var pramsQueryX = optionsX.pramsQuery ?? {}
					delete pramsQueryX[selector]


					optionsX.pramsQuery = pramsQueryX

					updateBlock('options', optionsX)

				}}><IconX size={14} /></div>
			</div>

		)

	}



	var pramsQueryArgs = {
		taxonomy: { id: "taxonomy", label: "Taxonomy", value: '' },
		order: { id: "order", label: "order", value: "" },
		// pauseOnHover: { id: "pauseOnHover", label: "Pause On Hover", value: 1 },
		// pauseOnFocus: { id: "pauseOnFocus", label: "Pause On Focus", value: 1 },
		// lazyLoad: { id: "lazyLoad", label: "Lazy Load", value: 1 },
		// preloadPages: { id: "preloadPages", label: "Preload Pages", value: 1 },
		// keyboard: { id: "keyboard", label: "Keyboard", value: 1 },
		// wheel: { id: "wheel", label: "Wheel", value: 1 },
		// releaseWheel: { id: "releaseWheel", label: "Release Wheel", value: 1 },
		// direction: { id: "direction", label: "Direction", value: "ltr" },
		// cover: { id: "cover", label: "Cover", value: 0 },
		// rewind: { id: "rewind", label: "Rewind", value: 0 },
		// speed: { id: "speed", label: "Speed", value: 400 },
		// rewindSpeed: { id: "rewindSpeed", label: "Rewind Speed", value: 400 },
		// rewindByDrag: { id: "rewindByDrag", label: "Rewind By Drag", value: 0 },
		// width: { id: "width", label: "Width", value: "" },
		// height: { id: "height", label: "Height", value: "" },
		// fixedWidth: { id: "fixedWidth", label: "Fixed Width", value: "" },
		// fixedHeight: { id: "fixedHeight", label: "Fixed Height", value: "" },
		// heightRatio: { id: "heightRatio", label: "Height Ratio", value: "" },
		// autoWidth: { id: "autoWidth", label: "Auto Width", value: 0 },
		// autoHeight: { id: "autoHeight", label: "Auto Height", value: 0 },
		// start: { id: "start", label: "Start", value: 0 },
		// perPage: { id: "perPage", label: "Per Page", value: 3 },
		// perMove: { id: "perMove", label: "Per Move", value: 3 },

		// focus: { id: "focus", label: "Focus", value: "center" },
		// gap: { id: "gap", label: "Gap", value: "1em", unit: "em", number: "1" },
		// padding: { id: "padding", label: "Padding", value: "" },
		// arrows: { id: "arrows", label: "Arrows", value: 1 },
		// pagination: { id: "pagination", label: "Pagination", value: 1 },
		// //easing: { label: 'Easing', value: 'cubic-bezier(0.25, 1, 0.5, 1)' },
		// paginationKeyboard: { id: "paginationKeyboard", label: "Pagination Keyboard", value: 1 },
		// paginationDirection: {
		// 	id: "paginationDirection",
		// 	label: "Pagination Direction",
		// 	value: "paginationDirectltrion",
		// },
		// drag: { id: "drag", label: "Drag", value: 1 },
		// noDrag: { id: "noDrag", label: "No Drag", value: "input, textarea, .rich-text" },
		// snap: { id: "snap", label: "Snap", value: 1 },
		// mediaQuery: { id: "mediaQuery", label: "Media Query", value: "max" },
		// type: { id: "type", label: "Slider type", value: "slide" },

	};



	return (
		<div className="px-3" >



			<div className="flex flex-col gap-3">


				<div className="flex flex-col gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
					<div>
						<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={options?.text} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.label = value
							updateBlock('options', optionsX)

						}} />
					</div>
				</div>

				<div className="flex justify-between gap-2">
					<label htmlFor="" className="text-xs font-medium text-gray-600">Prams Source</label>
					<div>
						<select className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={pramsSource} onChange={ev => {

							var value = ev.target.value;

							var optionsX = { ...options }
							optionsX.pramsSource = value
							updateBlock('options', optionsX)

						}} >

							<option value="manual">Manual</option>
							<option value="terms">Terms</option>

						</select>
					</div>
				</div>

				{pramsSource == 'terms' && (
					<>


						<div className="flex justify-between gap-2">
							<label htmlFor="" className="text-xs font-medium text-gray-600">Slider Options</label>
							<div>
								<DropDown allowReset={true} multiple={false} value={''} options={pramsQueryArgs} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => {
									//setorderData({ ...orderData, payment_status: args?.value })
									var optionsX = { ...options }
									var pramsQueryX = optionsX.pramsQuery ?? {}

									pramsQueryX[args.id] = args?.value

									optionsX.pramsQuery = pramsQueryX

									updateBlock('options', optionsX)





								}} />
							</div>
						</div>


						<div className="flex flex-col gap-4 text-xs">

							{options?.pramsQuery != null && Object.entries(options?.pramsQuery)?.map((args, index) => {



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
												<div>{pramsQueryArgs[key]?.label}</div>
												<input type="number" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={value} onChange={ev => {
													const { name, value } = ev.target;

													var optionsX = { ...options }
													var pramsQueryX = optionsX.pramsQuery ?? {}

													pramsQueryX[key] = value

													optionsX.pramsQuery = pramsQueryX

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
												<div>{pramsQueryArgs[key]?.label}</div>
												{/* <input type="checkbox" className="w-16 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" checked={value} /> */}

												<div className="cursor-pointer " onClick={ev => {


													var optionsX = { ...options }
													var pramsQueryX = optionsX.pramsQuery ?? {}

													pramsQueryX[key] = !value

													optionsX.pramsQuery = pramsQueryX

													updateBlock('options', optionsX)

												}}>
													{value ? <IconCheckbox /> : <IconSquare />}
												</div>

											</div>
										)}

									{
										(key == 'order')


										&& (

											<div className="flex justify-between items-center">
												<div>{pramsQueryArgs[key]?.label}</div>

												<select name="" id=""


													className="!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"


													onChange={ev => {
														const { name, value } = ev.target;

														var optionsX = { ...options }
														var pramsQueryX = optionsX.pramsQuery ?? {}

														pramsQueryX[key] = value

														optionsX.pramsQuery = pramsQueryX

														updateBlock('options', optionsX)


													}}>
													<option value="Asc">Asc</option>
													<option value="DESC">DESC</option>
												</select>



											</div>
										)}


									{
										(key == 'taxonomy')


										&& (

											<div className="flex justify-between items-center">
												<div>{pramsQueryArgs[key]?.label}</div>

												<select name="" id="" className="!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" onChange={ev => {
													const { name, value } = ev.target;

													var optionsX = { ...options }
													var pramsQueryX = optionsX.pramsQuery ?? {}

													pramsQueryX[key] = value

													optionsX.pramsQuery = pramsQueryX

													updateBlock('options', optionsX)


												}}>
													<option value="category">Category</option>
													<option value="product_cat">Product Category</option>
													<option value="product_brand">Product Brand</option>
												</select>



											</div>
										)}




								</div>

							})}

						</div>


					</>
				)}

				{pramsSource == 'manual' && (

					<>
						<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

							var optionsX = { ...options }
							var pramsX = [...prams];
							pramsX.push({ value: '', label: '', prams: [] })
							optionsX.prams = pramsX
							updateBlock('options', optionsX)

						}}>Add</div>

						<div className="flex flex-col gap-1">
							{prams?.map((item, index) => {
								return (
									<ToggleContent key={index} iconPosition='left' title={<Title item={item} index={index} />} contentClass={`bg-gray-300 p-3`}>



										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Label</label>
											<div>
												<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.label} onChange={ev => {

													var value = ev.target.value;

													var optionsX = { ...options }
													optionsX.prams[index].label = value
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>

										<div className="flex flex-col gap-2">
											<label htmlFor="" className="text-xs font-medium text-gray-600">Value</label>
											<div>
												<input type="text" className="w-full !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" value={item.value} onChange={ev => {

													var value = ev.target.value;

													var optionsX = { ...options }
													optionsX.prams[index].value = value
													updateBlock('options', optionsX)

												}} />
											</div>
										</div>







									</ToggleContent>
								)
							})}
						</div>
					</>
				)}







				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />


			</div>


		</div>
	);
};



export default ButtonOptions;
