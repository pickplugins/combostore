"use client"
import { useState, useEffect } from "react";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import { useUtilsStore } from '../../../store/useUtilsStore';
import {
	IconCheckbox,
	IconSquare,

} from "@tabler/icons-react";

const ProductPrice = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo ?? 'postUrl';


	var productData = usePost();


	const Tag = tag;


	const { wrapCurrency } = useUtilsStore()


	productData = productData ?? { price: 100, sale_price: 80, regular_price: 150, bargainPrice: 120, pwyw_default_price: 150, pwyw_min_price: 120, bargain_default_price: 100, variablePrices: [{ label: '1kg Pack', price: 100, sale_price: 80, regular_price: 150, }, { label: '5kg Pack', price: 100, sale_price: 80, regular_price: 150, }] }
	var onChangePrice = props?.onChangePrice
	var viewType = props?.viewType ? props?.viewType : "list"



	var productId = productData?.id
	var price_type = productData?.price_type ?? 'simple'
	var discountRequest = productData?.discountRequest
	var variablePrices = productData?.variablePrices
	var pwyw_min_price = productData?.pwyw_min_price
	var pwyw_default_price = productData?.pwyw_default_price

	var [variablePricesIndex, setvariablePricesIndex] = useState(0);
	var [pwywSetPrice, setpwywSetPrice] = useState(false);
	var [pwywPrice, setpwywPrice] = useState(productData?.pwyw_default_price);

	var [bargainSetPrice, setbargainSetPrice] = useState(false);

	var [bargainPrice, setbargainPrice] = useState(productData?.bargain_default_price);
	var [seeBargainPrice, setseeBargainPrice] = useState(false);

	var [quantity, setquantity] = useState(props?.quantity);













	return (
		<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>

			{/* {JSON.stringify(productData)} */}



			{(price_type == 'simple') && (
				<div className={`${cssSelectors['simple-price-wrap']?.classes}`}>



					{!productData?.sale_price && (
						<>
							{productData?.price && (
								<span className={`${cssSelectors['simple-price-sale']?.classes}`}>{wrapCurrency(productData?.price)}</span>
							)}
						</>
					)}
					{productData?.sale_price && (
						<>
							<span className={`${cssSelectors['simple-price-sale']?.classes}`}>{wrapCurrency(productData?.price)}</span>
							<span> - </span>
							<span className={`${cssSelectors['simple-price-regular']?.classes}`}>{wrapCurrency(productData?.regular_price)}</span>
						</>
					)}

				</div>
			)}









			{/* {JSON.stringify(viewType)} */}


			{price_type == 'variable' && (

				<>
					{viewType == 'inline' && (
						<div className='gap-2  flex flex-wrap  text-[#1b0e9f]'>

							{productData?.variablePrices?.map((item, index) => {

								var regular_price = parseFloat(item?.regular_price)
								var sale_price = parseFloat(item?.sale_price)


								var metaData = { priceLabel: item.label }



								return (
									<div className='flex gap-3  cursor-pointer' key={index} onClick={ev => {
										setvariablePricesIndex(index)

										onChangePrice({ quantity: item?.quantity, price: sale_price ? sale_price : regular_price, regular_price: regular_price, sale_price: sale_price, metaData: metaData })
									}}>

										{variablePricesIndex == index && (
											<IconCheckbox />
										)}
										{variablePricesIndex != index && (
											<IconSquare />
										)}



										<div className="flex items-center gap-1">
											{item?.label} -


											{item?.regular_price && (
												<span className="font-bold text-lg text-[#e63946]">{wrapCurrency(item?.sale_price)}</span>

											)}
											{item?.sale_price && (
												<>
													<span> - </span>
													<span className="line-through text-base text-gray-600">{wrapCurrency(item?.regular_price)}</span>
												</>
											)}





										</div>
										<div className="flex flex-col gap-1">

										</div>

									</div>
								)

							})}
						</div>
					)}
					{viewType == 'list' && (
						<div className='gap-2  flex flex-col  text-[#1b0e9f]'>

							{productData?.variablePrices?.map((item, index) => {

								var regular_price = parseFloat(item?.regular_price)
								var sale_price = parseFloat(item?.sale_price)


								var metaData = { priceLabel: item.label }

								return (
									<div className='flex gap-3  cursor-pointer' key={index} onClick={ev => {
										setvariablePricesIndex(index)

										onChangePrice({ quantity: item?.quantity, price: sale_price ? sale_price : regular_price, regular_price: regular_price, sale_price: sale_price, metaData: metaData })

									}}>

										{variablePricesIndex == index && (
											<IconCheckbox />
										)}
										{variablePricesIndex != index && (
											<IconSquare />
										)}



										<div className="flex items-center gap-1">
											{item?.label} -


											{item?.regular_price && (
												<span className="font-bold text-lg text-[#e63946]">{wrapCurrency(item?.sale_price)}</span>

											)}
											{item?.sale_price && (
												<>
													<span> - </span>
													<span className="line-through text-base text-gray-600">{wrapCurrency(item?.regular_price)}</span>
												</>
											)}

										</div>
										<div className="flex flex-col gap-1">

										</div>

									</div>
								)

							})}
						</div>
					)}
					{/* {viewType == 'dropdown' && (


						<div className="flex gap-3 flex-wrap items-center">

							<PopoverButton buttonLabel={("Choose Price")} buttonIcon={<IconTrolley />} title={""} wrapperClass="" position={"bottomRight"}>

								<div className='bg-white p-4 flex flex-col gap-3'>



									{productData?.variablePrices?.map((item, index) => {

										var regular_price = parseFloat(item?.regular_price)
										var sale_price = parseFloat(item?.sale_price)


										var metaData = { priceLabel: item.label }

										return (
											<div className='flex gap-3 cursor-pointer ' key={index} onClick={ev => {
												setvariablePricesIndex(index)

												onChangePrice({ quantity: item?.quantity, price: sale_price ? sale_price : regular_price, regular_price: regular_price, sale_price: sale_price, metaData: metaData })
											}}>

												{variablePricesIndex == index && (
													<IconCheckbox />
												)}
												{variablePricesIndex != index && (
													<IconSquare />
												)}


												<div className="flex  gap-1">
													<span>{item?.label}: </span>


													{item?.regular_price && (
														<span className="font-bold text-lg text-[#e63946]">{wrapCurrency(item?.sale_price)}</span>

													)}
													{item?.sale_price && (
														<>
															<span> - </span>
															<span className="line-through text-base text-gray-600">{wrapCurrency(item?.regular_price)}</span>
														</>
													)}
												</div>


											</div>
										)

									})}
								</div>

							</PopoverButton>




						</div>








					)} */}


				</>


			)}


			{price_type == 'pwyw' && (
				<div className="mb-4 flex gap-5 items-center">
					<div className="text-2xl text-[#1b0e9f]">{wrapCurrency(productData?.pwyw_default_price)}</div>

					{!pwywSetPrice && (
						<div className="text-xl text-[#1b0e9f] cursor-pointer" onClick={ev => {

							setpwywSetPrice(!pwywSetPrice);

						}}>Set your price</div>

					)}
					{pwywSetPrice && (
						<div className="flex gap-2 items-center">

							<input className="w-[80px]" type="number" value={pwywPrice} onChange={ev => {

								var value = parseFloat(ev.target.value);
								setpwywPrice(value);

								// const handler = setTimeout(() => {


								// }, 800); // 500ms debounce delay

								// // Cleanup function: cancels the timeout if query changes before 500ms
								// return () => clearTimeout(handler);








							}} />

							<div className=" cursor-pointer" onClick={ev => {

								if (parseFloat(productData?.pwyw_min_price) >= parseFloat(pwywPrice)) {
									addNotification({ type: 'error', title: "Price can't set", content: `Price should not less than ${productData?.pwyw_min_price}` })

									return;
								}

								onChangePrice({ pwyw_default_price: pwywPrice })

							}}>Set</div>
							<div className="text-red-400 cursor-pointer" onClick={ev => {

								setpwywSetPrice(!pwywSetPrice);

							}}>Cancel</div>

						</div>
					)}

				</div>
			)}

			{price_type == 'bargain' && (
				<div className="mb-4 flex gap-5 items-center">
					<div className="text-2xl text-[#1b0e9f]">{wrapCurrency(bargainPrice)}</div>
					{/* <PopoverButton buttonLabel={("দামাদামি করুন")} buttonIcon={<IconPencilDollar />} title={""} wrapperClass="" position={"bottomRight"}>
						<ProductPriceBargain productData={productData} onChangePrice={onChangeBargainPrice} />
					</PopoverButton> */}
				</div>
			)}








		</div>
	);
};



export default ProductPrice;
