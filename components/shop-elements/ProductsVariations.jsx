import { useState, useEffect } from "react";
import { IconRefresh, IconEraser, IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { IconToggleLeftFilled, IconCheckbox, IconSquare, IconFilter2Edit, IconTrash, IconStarFilled, IconStar, IconX, IconExternalLink } from "@tabler/icons-react";
import PopoverButton from '../../components/PopoverButton';

import Image from "next/image";
import { useUtilsStore } from '../../store/useUtilsStore';
import Spinner from '../Spinner';
import { useCounterStore } from '../../store/useCounterStore'
import ToggleContent from "../../components/ToggleContent";
import DropDown from '../../components/DropDown';
import GalleryPicker from "../../components/shop-elements/GalleryPicker";
import TaxTermsQuery from '../../components/TaxTermsQuery';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ProductsVariations = (props) => {


	const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, settings } = useCounterStore()


	var product = props.product;
	// var onUpdateProduct = props.onUpdateProduct;
	var onChangeVariations = props.onChangeVariations;
	var onChangeAttributes = props.onChangeAttributes;
	const { formatDate, wrapCurrency } = useUtilsStore()

	var [attributesList, setattributesList] = useState([]);


	var [variations, setvariations] = useState(product.variations ?? []);
	var [attributes, setattributes] = useState(product.attributes ?? [{ title: 'Color', attr: 'color', items: ['Red', 'Blue'] }]);
	var [loading, setloading] = useState(false);

	var [selectedRows, setselectedRows] = useState([]);
	var [anchorId, setAnchorId] = useState(null);
	var [lastCheckedId, setLastCheckedId] = useState(null);
	var [bulkUpdatePrams, setbulkUpdatePrams] = useState({});






	const handleRowSelection = (entryId, shiftKey) => {
		var selectedRowsX = [...selectedRows];

		if (shiftKey && lastCheckedId !== null) {
			const currentIndex = entries.posts.findIndex(
				(entry) => entry.id === entryId
			);
			const lastIndex = entries.posts.findIndex(
				(entry) => entry.id === lastCheckedId
			);
			const [start, end] = [
				Math.min(currentIndex, lastIndex),
				Math.max(currentIndex, lastIndex),
			];

			// Clear previous selections
			selectedRowsX = [];

			// Select all items in range
			entries.posts.slice(start, end + 1).forEach((entry) => {
				selectedRowsX.push(entry.id);
			});
		} else {
			const index = selectedRowsX.indexOf(entryId);
			if (index !== -1) {
				selectedRowsX.splice(index, 1);
				setAnchorId(null);
			} else {
				selectedRowsX.push(entryId);
				setAnchorId(entryId);
			}
		}

		setLastCheckedId(entryId);
		setselectedRows(selectedRowsX);
	};





	useEffect(() => {

		const result = settings?.productAttributes?.map(item => ({
			label: item.label,
			value: item.slug
		}));

		setattributesList(result);

	}, [settings?.productAttributes]);


	function setThumbnailFromUrl() {





		var postData = JSON.stringify(thumbUrl);
		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/set_thumbnail_from_url",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`

				},
				body: postData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {




						var success = res?.success;
						var src = res?.src;
						var attachment_id = res?.attachment_id;




						setloading(false);
						var post_thumbnail = { id: attachment_id, title: "", src: src }

						setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });



						// setTimeout(() => {
						// 	setaddTask({ ...addTask, title: "", success: null, errors: null })

						// }, 3000);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}



	const AttributesTitle = ({ text, index }) => {

		return (
			<div className="flex gap-3 items-center">

				<div className="hover:bg-red-500 bg-red-400 text-white px-1 py-1 rounded-sm" onClick={ev => {

					var attributesX = [...attributes]

					attributesX.splice(index, 1);
					setattributes(attributesX);

				}}><IconTrash /></div>
				<div>{text}</div>
			</div>
		)

	}
	const VariationsTitle = ({ item, text, index }) => {

		var enable = item?.enable ?? true
		var regular_price = item?.regular_price ?? 0
		var sale_price = item?.sale_price ?? 0
		var stock_status = item?.stock_status ?? 'instock'
		var sku = item?.sku ?? ''


		return (
			<div className="flex gap-3 justify-between items-center">



				<div className="flex items-center gap-2">

					{item.thumbnail?.src && (
						<div className="w-10 h-10 overflow-hidden ">
							<Image className="w-full h-full object-cover" unoptimized src={item.thumbnail?.src} width={150} height={150} alt={``} />
						</div>
					)}



					<div>
						<div>{text} <span className="text-xs">{`(#${item.id})`}</span> </div>
						<div className="text-xs flex gap-2">
							<div className=" flex gap-2">
								Price:
								{sale_price > 0 && (
									<>
										<div>{wrapCurrency(sale_price)}</div>
										<div className="line-through">{wrapCurrency(regular_price)}</div>

									</>
								)}
								{!sale_price && (
									<div>{wrapCurrency(regular_price)}</div>
								)}

							</div>
							<div className="">
								{stock_status == 'instock' && ('In Stock')}
								{stock_status == 'outofstock' && ('Out of Stock')}
							</div>
							<div className="">
								{sku}
							</div>

						</div>






					</div>


				</div>
				<div onClick={ev => {

					ev.preventDefault()
					ev.stopPropagation()

					// var variationsX = [...variations]
					// variationsX[index].enable = !enable


					handleRowSelection(item.id, ev.shiftKey)


				}}>
					{selectedRows?.includes(item.id) && (
						<span className="cursor-pointer">
							<IconCheckbox />
						</span>
					)}
					{!selectedRows?.includes(item.id) && (
						<span className="cursor-pointer ">
							<IconSquare />
						</span>
					)}


				</div>
			</div>
		)

	}


	const getVariationKey = (variation, attrs) => {



		return attrs
			.map(attr => `${attr.attr}:${variation[attr.attr]?.slug ?? ''}`)
			.join('|');
	};


	const generateVariations = (attrs, previousVariations = []) => {




		const rawVariations = attrs.reduce(
			(acc, current) =>
				acc.flatMap((combo) =>
					current.items.map((item) => ({
						...combo,
						[current.attr]: { slug: item.slug, name: item.name, id: item.id },
					}))
				),
			[{}]
		);






		return rawVariations.map((combo, index) => {
			// Only attributes are used as the variation identifier
			const key = getVariationKey(combo, attrs);




			// Find exact existing variation
			const existing = previousVariations.find(
				(variation) =>
					getVariationKey(variation.attributes || {}, attrs) === key
			);

			// Find a previous variation that can preserve its data
			const parent = previousVariations.find((variation) => {
				const variationAttributes = variation.attributes || {};

				return attrs.every((attr) => {
					if (!(attr.attr in variationAttributes)) {
						return true;
					}

					return variationAttributes[attr.attr] === combo[attr.attr];
				});
			});


			const source = existing || parent;

			const attributes = {
				...(source?.attributes || {}),
				...combo,
			};

			const variationTitle = Object.values(attributes).map(attr => attr.name).join(' / ');



			return {
				id: source?.id || index + 1,

				// Display only — NOT used as identifier
				title: variationTitle,

				attributes,

				price: source?.price ?? 0,
				sale_price: source?.sale_price ?? 0,
				regular_price: source?.regular_price ?? 0,

				thumbnail: source?.thumbnail ?? null,
				stock_status: source?.stock_status ?? "instock",
				stock_count: source?.stock_count ?? 0,
			};
		});
	};









	useEffect(() => {

		// No attributes = no variations
		if (attributes.length === 0) {
			setvariations([]);
			onChangeAttributes([]);
			return;
		}

		// An attribute without values cannot generate
		// valid combinations.
		const hasEmptyAttribute = attributes.some(
			attr => !attr.items || attr.items.length === 0
		);

		// If an attribute exists but has no values yet,
		// clear variations instead of keeping stale ones.
		if (hasEmptyAttribute) {
			setvariations([]);
			onChangeAttributes(attributes);
			return;
		}

		setvariations(previousVariations => {
			return generateVariations(
				attributes,
				previousVariations
			);
		});

		onChangeAttributes(attributes);

	}, [attributes]);











	useEffect(() => {


		onChangeVariations(variations)
	}, [variations]);





	function generateSKU(prefix = 'SKU', length = 6) {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let random = '';

		for (let i = 0; i < length; i++) {
			random += chars.charAt(Math.floor(Math.random() * chars.length));
		}

		return `${prefix}-${random}`;
	}

	// SKU-7KX4P9



	function updateSelectedVariations(variations, selectedRows, updateParams) {

		var skuSuffix = updateParams.skuSuffix ?? false;
		var sku = updateParams.sku;

		console.log(skuSuffix);

		return variations.map((variation, index) => {
			if (selectedRows.includes(variation.id)) {


				var updateParamsX = { ...updateParams }
				if (skuSuffix) {
					updateParamsX.sku = `${sku}${index}`
				}

				return {
					...variation,
					...updateParamsX,
				};
			}

			return variation;
		});
	}






	return (
		<div className={`flex flex-col gap-5 `}>


			<div className="flex justify-between items-center gap-3">
				<label htmlFor="" className="block text-gray-500">
					{("Attributes")}
				</label>
				<DropDown allowReset={true} multiple={false} value={null} options={attributesList} label={`Choose`} onOptionsChoose={(args) => {


					var attributesX = [...attributes]

					attributesX.push({ title: args?.label, attr: args?.value, type: 'button', items: [] });
					setattributes(attributesX);

				}} />
			</div>









			<div className="flex flex-col gap-1">
				{attributes.map((item, index) => {

					var items = item?.items ?? []
					var attr = item?.attr ?? 'Color'

					return (
						<ToggleContent key={index} title={<AttributesTitle text={item.title} index={index} />}
							contentClass="bg-gray-100 p-5"
							headerClass=""
							headerTitleClass=""
							wrapperClass=""
						>

							<div className="flex flex-col gap-3">

								<div className="flex flex-col gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Title")}
									</label>
									<input
										type="text"
										className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
										value={item.title}
										onChange={(ev) => {
											var value = ev.target.value;

											var attributesX = [...attributes]

											attributesX[index].title = value
											setattributes(attributesX);











										}}
									/>
								</div>
								<div className="flex justify-between items-center gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Items")}
									</label>




									{/* <DropDown allowReset={true} multiple={false} value={null} options={collectionArgs[attr]} label={`Choose`} onOptionsChoose={(args) => {


										//setorderData({ ...orderData, payment_status: args?.value })


										var attributesX = [...attributes]

										attributesX[index].items.push(args?.value)

										setattributes(attributesX);

									}} /> */}



									<TaxTermsQuery taxonomy={attr} allowReset={false} value={[]} label="Choose" allowSearch={true} position="right" labelClass={'!border-2 px-2 py-1 rounded-sm w-fit focus:outline-none  border-solid !border-gray-600 !shadow-none bg-gray-300 cursor-pointer'} onPick={(args) => {


										var attributesX = [...attributes]

										attributesX[index].items.push({ id: args.id, name: args.name, slug: args.slug })

										setattributes(attributesX);


									}} />










								</div>




								<div className="flex gap-2">

									{
										items.map((collection, colIndex) => {

											return (

												<div className="flex gap-2 items-center bg-gray-300 rounded-sm">

													<div className="px-2 text-sm">
														{collection?.name}
													</div>
													<div className="hover:bg-red-500 bg-red-400 text-white px-1 py-1 rounded-sm cursor-pointer" onClick={ev => {

														var attributesX = [...attributes]



														attributesX[index].items.splice(colIndex, 1);
														setattributes(attributesX);

													}}><IconTrash size={16} /></div>

												</div>

											)

										})
									}


								</div>


							</div>

						</ToggleContent>
					)

				})}
			</div>





			<div className="py-5 flex justify-between items-center gap-3 ">

				<div>Variations</div>
				{selectedRows.length > 0 && (
					<div className="text-sm text-gray-500 flex gap-2">



						<PopoverButton wrapperClass={`bg-white flex justify-end`} buttonLabel={" "} buttonIcon={<IconFilter2Edit />} title={"Bulk Edit"} position={""} buttonClass={`bg-gray-400 p-0 text-gray-600 hover:bg-gray-200 rounded-sm p-1 hover:text-gray-600 cursor-pointer justify-end`} popoverClass={`max-h-[600px] xl:w-[600px] w-[400px] bg-white overflow-y-auto z-50 border-2 border-solid border-indigo-600 rounded-sm top-full right-0 absolute`}>

							<div className="p-3 flex flex-col gap-5 bg-gray-300">

								<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-4 py-2 bg-gray-600 text-white w-fit" onClick={ev => {




									const updatedVariations = updateSelectedVariations(
										variations,
										selectedRows,
										bulkUpdatePrams
									);




									setvariations(updatedVariations);


								}}>Update</div>

								<div className="grid grid-cols-3 gap-5">

									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Regular Price")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={bulkUpdatePrams.regular_price}
											onChange={(ev) => {
												var value = ev.target.value;

												var bulkUpdatePramsX = { ...bulkUpdatePrams }


												bulkUpdatePramsX.regular_price = value
												setbulkUpdatePrams(bulkUpdatePramsX);
											}}
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Sale Price")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={bulkUpdatePrams.sale_price}
											onChange={(ev) => {
												var value = ev.target.value;

												var bulkUpdatePramsX = { ...bulkUpdatePrams }


												bulkUpdatePramsX.sale_price = value
												setbulkUpdatePrams(bulkUpdatePramsX);
											}}
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Trade Price")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={bulkUpdatePrams.trade_price}
											onChange={(ev) => {
												var value = ev.target.value;

												var bulkUpdatePramsX = { ...bulkUpdatePrams }


												bulkUpdatePramsX.trade_price = value
												setbulkUpdatePrams(bulkUpdatePramsX);
											}}
										/>
									</div>

								</div>
								<div className="flex flex-col gap-3">
									<div className="flex justify-between items-center gap-3">

										<label htmlFor="" className="block text-gray-500">
											{("SKU")}
										</label>

										<label className="cursor-pointer flex gap-2 items-center text-gray-500 text-sm">
											<input type="checkbox"

												onChange={(ev) => {
													var { checked } = ev.target;



													var bulkUpdatePramsX = { ...bulkUpdatePrams }


													bulkUpdatePramsX.skuSuffix = checked
													setbulkUpdatePrams(bulkUpdatePramsX);
												}}

											/> Add Increment
										</label>
									</div>



									<div className="flex items-center gap-4">
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={bulkUpdatePrams.sku}
											onChange={(ev) => {
												var value = ev.target.value;

												var bulkUpdatePramsX = { ...bulkUpdatePrams }


												bulkUpdatePramsX.sku = value
												setbulkUpdatePrams(bulkUpdatePramsX);
											}}
										/>
										<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-4 py-2 bg-gray-600 text-white" onClick={ev => {

											var skuX = generateSKU()

											var bulkUpdatePramsX = { ...bulkUpdatePrams }


											bulkUpdatePramsX.sku = skuX
											setbulkUpdatePrams(bulkUpdatePramsX);
										}}>Generate</div>

									</div>


								</div>



								<div className="grid grid-cols-2 gap-5">

									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Stock Status")}
										</label>
										<select
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={bulkUpdatePrams.stock_status}
											onChange={(ev) => {
												var value = ev.target.value;

												var bulkUpdatePramsX = { ...bulkUpdatePrams }


												bulkUpdatePramsX.stock_status = value
												setbulkUpdatePrams(bulkUpdatePramsX);
											}}
										>
											<option value="instock">In Stock</option>
											<option value="outofstock">Out of Stock</option>
										</select>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Stock Count")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={bulkUpdatePrams.stock_count}
											onChange={(ev) => {
												var value = ev.target.value;

												var bulkUpdatePramsX = { ...bulkUpdatePrams }


												bulkUpdatePramsX.stock_count = value
												setbulkUpdatePrams(bulkUpdatePramsX);
											}}
										/>
									</div>
								</div>

								<div className="flex flex-col gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Description")}
									</label>
									<textarea
										type="text"
										className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
										value={bulkUpdatePrams.description}

										onChange={(ev) => {
											var value = ev.target.value;

											var bulkUpdatePramsX = { ...bulkUpdatePrams }


											bulkUpdatePramsX.description = value
											setbulkUpdatePrams(bulkUpdatePramsX);
										}}
									/>
								</div>


								<div className="flex flex-col gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Thumbnail")}
									</label>
									<GalleryPicker popupClass="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px]" onPick={(prams) => {

										var bulkUpdatePramsX = { ...bulkUpdatePrams }

										bulkUpdatePramsX.thumbnail = { id: prams.id, title: prams.title, src: prams.src }

										setbulkUpdatePrams(bulkUpdatePramsX)

									}} />

									<div className="border w-40 h-40 overflow-hidden border-solid border-gray-400 rounded-sm overflow-hidden">
										<Image unoptimized src={bulkUpdatePrams.thumbnail?.src} width={400} height={400} alt={``} />
									</div>

								</div>
								<div className="flex flex-col gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Set Thumbnail from URL")}
									</label>

									<div className='flex flex-col gap-3 '>


										<input type="text" className='!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm' value={bulkUpdatePrams.thumbnail?.src} onChange={ev => {

											var value = ev.target.value;

											//setthumbUrl({ ...thumbUrl, url: value })

										}} />

										<div className='inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer' onClick={ev => {
											//setThumbnailFromUrl()

										}}>

											Upload
											{loading && (
												<Spinner />
											)}
										</div>

									</div>


								</div>









							</div>


						</PopoverButton>

						<div className="bg-gray-200 text-gray-600 hover:bg-gray-400 rounded-sm p-1 hover:text-gray-600 cursor-pointer justify-end" onClick={ev => {




							setselectedRows([]);


						}}>

							<IconSquare />

						</div>


					</div>
				)}

				{selectedRows.length == 0 && (

					<div className="bg-gray-200 text-gray-600 hover:bg-gray-400 rounded-sm p-1 hover:text-gray-600 cursor-pointer justify-end" onClick={ev => {


						var rows = [];

						variations?.map(variation => {

							console.log(variation);

							rows.push(variation?.id)

						})

						setselectedRows(rows);


					}}>

						<IconCheckbox />

					</div>

				)}

			</div>



			<div className="flex flex-col gap-1">
				{variations.map((item, index) => {

					var items = item?.items ?? []
					var enable = item?.enable ?? true

					return (
						<ToggleContent key={index} title={<VariationsTitle item={item} text={item.title} index={index} />}
							contentClass="bg-gray-100 p-5"
							headerClass={`w-full p-2  justify-between items-center ${enable ? 'bg-gray-500' : 'bg-gray-300'}  rounded-sm  hover:bg-gray-600 cursor-pointer text-white`}
							headerTitleClass="w-full  items-center"
							headerLabelClass=""
							wrapperClass=""
						>

							<div className="flex flex-col gap-3">
								<div className="flex flex-col gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Variation title")}
									</label>
									<input
										type="text"
										className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
										value={item.title}
										onChange={(ev) => {
											var value = ev.target.value;

											var variationsX = [...variations]

											variationsX[index].title = value
											setvariations(variationsX);
										}}
									/>
								</div>






								<div className="flex flex-col gap-3">
									<label htmlFor="" className="block text-gray-500">
										{("Variation title")}
									</label>
									<input
										type="text"
										className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
										value={item.title}
										onChange={(ev) => {
											var value = ev.target.value;

											var variationsX = [...variations]

											variationsX[index].title = value
											setvariations(variationsX);
										}}
									/>
								</div>
								<div className="grid grid-cols-3 gap-5">

									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Regular Price")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={item.regular_price}
											onChange={(ev) => {
												var value = ev.target.value;

												var variationsX = [...variations]

												variationsX[index].regular_price = value
												setvariations(variationsX);
											}}
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Sale Price")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={item.sale_price}
											onChange={(ev) => {
												var value = ev.target.value;

												var variationsX = [...variations]

												variationsX[index].sale_price = value
												setvariations(variationsX);
											}}
										/>
									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Trade Price")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={item.trade_price}
											onChange={(ev) => {
												var value = ev.target.value;

												var variationsX = [...variations]

												variationsX[index].trade_price = value
												setvariations(variationsX);
											}}
										/>
									</div>

								</div>
								<div className="grid grid-cols-3 gap-5">
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Stock Status")}
										</label>


										<select
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={item.stock_status}
											onChange={(ev) => {
												var value = ev.target.value;

												var variationsX = [...variations]

												variationsX[index].stock_status = value
												setvariations(variationsX);
											}}
										>
											<option value="instock">In Stock</option>
											<option value="outofstock">Out of Stock</option>
										</select>









									</div>
									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Stock Count")}
										</label>
										<input
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={item.stock_count}
											onChange={(ev) => {
												var value = ev.target.value;

												var variationsX = [...variations]

												variationsX[index].stock_count = value
												setvariations(variationsX);
											}}
										/>
									</div>

									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("SKU")}
										</label>



										<div className="flex items-center gap-4">
											<input
												type="text"
												className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
												value={item.sku}
												onChange={(ev) => {
													var value = ev.target.value;

													var variationsX = [...variations]

													variationsX[index].sku = value
													setvariations(variationsX);
												}}
											/>
											<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-4 py-2 bg-gray-600 text-white" onClick={ev => {

												var skuX = generateSKU()

												var variationsX = [...variations]

												variationsX[index].sku = skuX
												setvariations(variationsX);
											}}>Generate</div>

										</div>


									</div>

								</div>



								<div className="grid grid-cols-1 gap-5">


									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Description")}
										</label>
										<textarea
											type="text"
											className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
											value={item?.description}
											onChange={(ev) => {
												var value = ev.target.value;

												var variationsX = [...variations]

												variationsX[index].description = value
												setvariations(variationsX);
											}}
										/>
									</div>







								</div>
								<div className="grid grid-cols-2 gap-5">


									<div className="flex flex-col gap-3">
										<label htmlFor="" className="block text-gray-500">
											{("Thumbnail")}
										</label>
										<div className="flex gap-4">
											<div className="border w-20 h-20 overflow-hidden border-solid border-gray-400 rounded-sm overflow-hidden">
												<Image unoptimized src={variations[index].thumbnail?.src} width={400} height={400} alt={``} />
											</div>
											<GalleryPicker popupClass="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px]" onPick={(item) => {

												var variationsX = [...variations]
												variationsX[index].thumbnail = { id: item.id, title: item.title, src: item.src }

												setvariations(variationsX)

											}} />


										</div>

									</div>







								</div>
















							</div>

						</ToggleContent>
					)

				})}
			</div>










		</div>
	);
};

export default ProductsVariations;
