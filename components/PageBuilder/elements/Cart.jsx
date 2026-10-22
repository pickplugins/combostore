'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import Checkout from './Checkout';
import { MenuProvider } from "../context/MenuContext";
import { IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconTrash, IconBasketCheck, IconChevronUp, IconChevronDown, IconX, IconShoppingCartCancel, IconLetterX, IconCornerUpLeftDouble } from "@tabler/icons-react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import Image from "next/image";
import Spinner from "../../../components/Spinner";
/* The popover's entrance animation used to work only by accident: nothing here
   loaded animate.css, and the keyframes happened to be in the bundle because a
   sibling element (elements/PopoverButton.jsx) imports them globally. Bundling
   is not this file's to rely on, so it asks for them itself. */
import 'animate.css';

const Grid = (props) => {
	const {
		block,
		draggingBlock,
		setDraggingBlock,
		dragOverIndex,
		setDragOverIndex,
		setSelectedId,
		selectedId,
		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const cssSelectors = props?.cssSelectors;
	const children = props?.children || [];

	var options = props?.options;
	var queryPrams = options?.queryPrams ?? [];


	const [cartTotalQuantity, setcartTotalQuantity] = useState(0);
	const [couponData, setCouponData] = useState(null);
	const [shippingCost, setshippingCost] = useState(null);
	const [shippingMethod, setshippingMethod] = useState(null);
	const [cartTotal, setcartTotal] = useState(null);
	const [cartTotalPay, setcartTotalPay] = useState(null);
	const [cartToggle, setcartToggle] = useState(options?.editMode);
	const [coupons, setCoupons] = useState({ couponCode: '' });
	const [cartStep, setcartStep] = useState(0);
	const [userDataX, setUserDataX] = useState(null);
	const [loading, setloading] = useState(false);

	const [cartItems, setcartItems] = useState([
		{ id: 123, price: 20, quantity: 1, title: 'Tshirt', thumbnail: 'http://localhost/wp/wp-content/uploads/2026/06/IMG20260613195709-scaled.jpg' },
		{ id: 123, price: 20, quantity: 1, title: 'Tshirt', thumbnail: null },
	]);



	var [profits, setprofits] = useState({ grossProfit: 0, netProfit: 0, productCost: 0 });


	function removeCartItems() { }
	function resetCartItems() { }
	function updateCartItems() { }
	function addNotification() { }
	const { wrapCurrency } = useUtilsStore()



	function onLoading(prams) {

		setloading(prams)

	}



	useEffect(() => {

		var total = 0;
		var totalQuantity = 0;


		cartItems?.map(item => {

			var quantity = parseInt(item.quantity)
			var price = parseInt(item.price)

			total += (price * quantity);
			totalQuantity += quantity;

		})





		setcartTotal(total)
		setcartTotalQuantity(totalQuantity)

		var totalPay = total + shippingCost;
		if (coupons?.applied) {
			totalPay = totalPay - coupons.discountAmount
		}

		console.log(totalPay);


		setcartTotalPay(totalPay)



	}, [cartItems, shippingCost, coupons]);


	function calculateShipping() {

		var amount = 0;

		if (shippingMethod == 'express') {
			amount = 50;
		}
		if (shippingMethod == 'normal') {
			amount = 20;
		}
		if (shippingMethod == 'free') {
			amount = 0;
		}

		setshippingCost(amount)

	}



	useEffect(() => {
		calculateShipping()

	}, [shippingMethod]);




	function calculateCoupon(amount, discountType) {

		var discountAmount = 0;

		if (discountType == "percent") {
			var discountAmount = (cartTotal * amount) / 100;

		}
		if (discountType == "fixed") {
			var discountAmount = amount;

		}



		return discountAmount;
	}














	return (
		<div
			draggable
			id={id}
			className={` ${cssSelectors['*']?.classes ?? ''} relative   hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}

		>

			<div className={`${cssSelectors['button']?.classes} ${cartItems.length == 0 ? 'hidden ' : "flex"} `} onClick={ev => {
				setcartToggle(!cartToggle)
				ev.preventDefault();
				ev.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);

			}}>
				<div className={`${cssSelectors['button-icon']?.classes}  `}><IconBasketCheck /></div>
				<div className={`${cssSelectors['button-quantity']?.classes}  `}>{cartTotalQuantity}</div>
			</div>

			{cartToggle && (
				/* Only the entrance animation is reachable: the popover is
				   unmounted the moment `cartToggle` goes false, so a fade-out
				   never had a frame to play in. It used to be picked by an
				   `animate` flag that an effect flipped on mount, which meant
				   the panel rendered fadeInRight, switched to fadeOutRight a
				   tick later, and -- because animate.css sets
				   `animation-fill-mode: both` -- held that keyframe's
				   `opacity: 0; translate3d(100%,0,0)`. A second after opening,
				   the cart was invisible and parked off the right edge. */
				<div className={`${cssSelectors['popover']?.classes} animate__animated animate__fadeInRight`}>





					{cartStep == 0 && (
						<>
							<div className={`${cssSelectors['cart-header']?.classes}  `}>
								<div className={`${cssSelectors['cart-total-items']?.classes}  `}>Total Items - {cartTotalQuantity}</div>
								<div className="flex gap-2">
									<div className={`${cssSelectors['cart-reset']?.classes}  `}
										onClick={ev => {
											resetCartItems()
											addNotification({ type: 'success', title: 'Cart reset', content: "Cart items reset success" })

										}}
									><IconShoppingCartCancel width={18} />
										Reset
									</div>
									<div className={`${cssSelectors['cart-close']?.classes}  `}
										onClick={ev => {
											setcartToggle(!cartToggle)

										}}
									><IconX width={18} />
										Close
									</div>


								</div>
							</div>



							<div className="px-2">
								{cartItems.map((item, index) => {

									return (
										<div key={index} className="flex gap-2  pr-4 items-center justify-between py-3 border-b border-solid border-gray-400">
											<div className="flex gap-2 flex-1 items-center">

												<div className="flex flex-col gap-1 items-center   rounded-sm border-gray-500  ">


													<span onClick={() => {

														var quantity = item.quantity + 1;

														var bulk_prices = item?.bulk_prices;


														if (item?.bulk_prices && item?.bulk_prices?.length > 0) {
															const sortedBulkPrices = [...item.bulk_prices].sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity));

															const applicableTier = sortedBulkPrices.find(item => quantity >= parseInt(item?.quantity));

															if (applicableTier) {
																updateCartItems(item.id, { price: applicableTier?.unitPrice, quantity: quantity })
															} else {
																updateCartItems(item.id, { price: item?.regular_price, quantity: quantity })
															}
														} else {
															updateCartItems(item.id, { quantity: quantity })

														}


													}} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
														<IconChevronUp />
													</span>

													<span>{item.quantity}</span>
													<span onClick={() => {

														var quantity = item.quantity == 1 ? 1 : item.quantity - 1;


														if (item?.bulk_prices && item?.bulk_prices?.length > 0) {
															const sortedBulkPrices = [...item.bulk_prices].sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity));

															const applicableTier = sortedBulkPrices.find(item => quantity >= parseInt(item?.quantity));

															if (applicableTier) {
																updateCartItems(item.id, { price: applicableTier?.unitPrice, quantity: quantity })
															} else {
																updateCartItems(item.id, { price: item?.regular_price, quantity: quantity })
															}
														} else {
															updateCartItems(item.id, { quantity: quantity })

														}







													}} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
														<IconChevronDown />
													</span>
												</div>
												<div className="flex text-xs items-center gap-2">

													<div className="w-18 h-18 overflow-hidden bg-[#9a90ff]">
														{item?.thumbnail && (
															<Image unoptimized className="object-cover h-full w-full " src={item.thumbnail} width={200} height={200} alt={item?.title} />
														)}
														{!item?.thumbnail && (
															<Image className="object-cover h-full w-full " src={`/thumb.png`} width={200} height={200} alt={item?.title} />
														)}

													</div>

													<div className="">

														<div className="text-sm">{item.title}</div>


														<div className="flex  gap-3 items-center ">

															<div className="flex gap-3 items-center">
																<div className="text-xs">{wrapCurrency(item.price)}</div>
																{item?.sale_price && (
																	<div className="text-xs line-through">{wrapCurrency(item.regular_price)}</div>

																)}
															</div>





															<div className=" text-red-500 cursor-pointer flex gap-1 items-center rounded-sm text-xs"
																onClick={ev => {
																	var cartItemsX = [...cartItems]
																	cartItemsX.splice(index, 1)
																	//setcartItems(cartItemsX)
																	removeCartItems(item.id)
																	addNotification({ type: 'success', title: 'Item removed', content: `<span class="font-bold">${item.title}</span> removed from cart.` })

																}}
															><IconTrash width={16} /> Remove</div>
														</div>

														{/* {JSON.stringify(item?.metaData)} */}

														{item?.metaData && (
															<div className="flex gap-2">
																{Object.entries(item?.metaData).map(metaItem => {
																	return (
																		<div className="flex gap-2">

																			<div>{metaItem[0]}:</div>
																			<div>{metaItem[1]}</div>
																		</div>
																	)
																})}

															</div>
														)}



													</div>
												</div>
											</div>
											<div className="flex gap-1  justify-end text-xs items-center ">
												{(item.price)} X {item.quantity} = {wrapCurrency(item.price * item.quantity)}




											</div>

										</div>
									)

								})}
							</div>


							<div className="flex justify-between px-4 py-4">
								<div>Cart Total</div>
								<div className="font-bold">{wrapCurrency(cartTotal)}</div>
							</div>



							{!coupons?.applied && (

								<div className="flex gap-2 items-center px-4 py-4">
									<div>
										<input type="text" name="" className={`${cssSelectors['coupon-input']?.classes}  `} value={coupons.couponCode} onChange={ev => {

											var value = ev.target.value;
											var couponsX = { ...coupons }
											couponsX.couponCode = value;

											setCoupons(couponsX)
										}} />
									</div>
									<div className={`${cssSelectors['coupon-apply-button']?.classes}  `} onClick={ev => {

										var couponsX = { ...coupons }



										if (couponsX.couponCode?.length == 0) {
											addNotification({ type: 'error', title: 'Coupon is empty', content: "Please write coupon code." });

											return;
										}



										couponsX.loading = true;
										setCoupons(couponsX)

										var postData = {
											couponCode: couponsX.couponCode,
										};
										postData = JSON.stringify(postData);

										fetch(serverUrl + "wp-json/combo-store/v2/get_coupon_details", {
											method: "POST",
											headers: {
												'Content-Type': 'application/json',
												// 'Authorization': `Bearer ${token}`
											},
											body: postData,
										})
											.then((response) => {

												if (!response.ok) {
													throw new Error('Token validation failed');
												}

												if (response.ok && response.status < 400) {
													response.json().then((res) => {




														var errors = res.errors;


														if (errors) {
															var message = res.message;

															addNotification({ type: 'error', title: 'Coupon is not valid', content: message });

															couponsX.loading = false;
															couponsX.couponCode = "";

															setCoupons(couponsX)
															return;
														}

														var couponRes = res.coupon;

														var amount = couponRes.amount;
														var discountType = couponRes.couponType;

														var discountAmount = calculateCoupon(amount, discountType);


														couponsX.applied = true;
														couponsX.discountAmount = discountAmount;
														couponsX.couponType = couponRes?.couponType;
														couponsX.amount = couponRes?.amount;
														couponsX.loading = false;





														setCoupons(couponsX)




														setTimeout(() => {
															addNotification({ type: 'success', title: 'Coupon Applied', content: "Win! Win!" })

														}, 500);
													});
												}
											})
											.catch((_error) => {
												//this.saveAsStatus = 'error';
												// handle the error
											});









									}}>Apply Coupon</div>

									{coupons.loading && (

										<Spinner />

									)}


								</div>
							)}
							{coupons.applied && (

								<div className="flex justify-between items-center px-4 py-4">
									<div className="flex flex-col gap-1">
										<div>Discount</div>
										<div className="flex gap-2 items-center">
											<div className="border-2 border-dashed rounded-sm px-4 py-1 border-green-700 cursor-pointer hover:bg-amazon-300 ">{coupons.couponCode}</div>
											<div className="text-red-400 cursor-pointer hover:text-red-600" onClick={ev => {
												var couponsX = { ...coupons }
												couponsX.applied = false;
												couponsX.couponCode = "";
												couponsX.discountAmount = 0;

												setCoupons(couponsX)

											}}>Remove</div>
										</div>

										<div className="flex gap-1 text-xs mt-3">


											{coupons.couponType == 'fixed' && (
												<span>You recived {coupons.amount}TK discount.</span>
											)}
											{coupons.couponType == 'percent' && (
												<span>You recived {coupons.amount}% discount.</span>
											)}


										</div>

									</div>
									<div className="font-bold text-red-500">-{wrapCurrency(coupons.discountAmount)}</div>
								</div>

							)}




							<div className="flex justify-between px-4 py-4 border-t-2 border-dashed border-t-gray-400 ">
								<div className="text-lg font-bold ">Total Amount to Pay</div>
								<div className="font-bold text-green-500">{wrapCurrency(cartTotalPay)}</div>
							</div>


							<div className="flex justify-end px-4 py-4">



								<div className={`${cssSelectors['go-to-checkout']?.classes}  `} onClick={ev => {

									if (cartItems?.length == 0) {
										addNotification({ type: 'error', title: 'Cart Empty', content: `Please add some items to cart.` })
										return;
									}

									setcartStep(1)




								}}>Go To Checkout</div>



							</div>


						</>
					)}
					{cartStep == 1 && (
						<>


							<div className={`${cssSelectors['cart-header']?.classes}  `}>
								<div className="flex gap-3 items-center">
									<div>Checkout</div>
									{loading && (

										<div className={`${cssSelectors['header-spinner']?.classes}  `}><Spinner size={18} /></div>

									)}






								</div>


								<div className="flex gap-3 items-center">

									<div className={`${cssSelectors['back-to-cart']?.classes}`} onClick={ev => {
										setcartStep(0)
									}}>
										<IconCornerUpLeftDouble />
										Back to Cart</div>

									<div className={`${cssSelectors['cart-close']?.classes}  `}
										onClick={ev => {
											setcartToggle(!cartToggle)

										}}
									><IconX width={18} />
										Close
									</div>


								</div>
							</div>



							<Checkout onLoading={onLoading} cartOptions={options} />

						</>
					)}
				</div>
			)}

		</div>
	);
};



export default Grid;
