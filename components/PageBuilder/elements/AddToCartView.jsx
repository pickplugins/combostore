
"use client"
import { useState, useEffect } from "react";
import { IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconIdBadge2 } from "@tabler/icons-react";
import * as TablerIcons from '@tabler/icons-react';


import { useCounterStore } from '../../../store/useCounterStore';
import { useUtilsStore } from '../../../store/useUtilsStore';
import { usePost } from "../context/PostContext";
import { useProductStore } from "../../../store/productStore";
import { trackTikTokEvent } from '@/lib/tiktok';

import { trackFacebookEvent } from '@/lib/facebook/pixel';
import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';


const AddToCart = (props) => {


	var activeVariation = useProductStore(
		(state) => state.activeVariation
	);









	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var iconSize = options?.iconSize ?? 20;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;

	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var buttonText = options?.buttonText;
	var hideQuanity = options?.hideQuanity ?? false;
	var hideButton = options?.hideButton ?? false;



	var productData = usePost();







	var [attributes, setattributes] = useState(productData?.attributes);
	var [variations, setvariations] = useState(productData?.variations);
	var [quantity, setquantity] = useState(0);

	// var productData = props?.productData
	var hideButtonText = props?.hideButtonText




	var productId = productData?.id


	const IconX = TablerIcons[icon];

	const trackPageVisit = useUtilsStore((state) => state.trackPageVisit);

	const { cartToggle, setcartToggle, notifications, addNotification, setcartStep, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, coupons, setCoupons, cartTotalPay, setcartTotalPay, cartTotal, setcartTotal, shippingCost, setshippingCost } = useCounterStore()
	var [quantity, setquantity] = useState(0);
	var [cartItem, setcartItem] = useState(null);
	var [canAddToCart, setcanAddToCart] = useState(!addons?.includes('variations') ? true : false);
	var [addons, setaddons] = useState(productData?.addons);

	var hideButtonText = props?.hideButtonText
	var quantitySyncwithCart = props?.quantitySyncwithCart
	var onChangeCartBtn = props?.onChangeCartBtn







	async function addToCart() {




		var cartProduct = {}




		if (addons?.includes('variations')) {


			if (activeVariation?.sale_price) {
				cartProduct.price = activeVariation?.sale_price
			} else {
				cartProduct.price = activeVariation?.regular_price

			}


			cartProduct.product_id = activeVariation?.product_id
			cartProduct.variation_id = activeVariation?.id
			cartProduct.title = `${productData?.title} - ${activeVariation?.title}`
			// cartProduct.price = activeVariation?.price
			cartProduct.sale_price = activeVariation?.sale_price
			cartProduct.regular_price = activeVariation?.regular_price
			cartProduct.trade_price = activeVariation?.trade_price
			cartProduct.thumbnail = activeVariation?.thumbnail
			cartProduct.attributes = activeVariation?.attributes

		}

		if (!addons?.includes('variations')) {


			var price_type = productData?.price_type

			console.log(price_type);



			if (price_type == 'simple') {
				cartProduct.product_id = productData?.id

				cartProduct.price = productData?.sale_price ? productData?.sale_price : productData?.regular_price
				cartProduct.sale_price = productData?.sale_price
				cartProduct.regular_price = productData?.regular_price

				cartProduct.title = `${productData?.title}`

				cartProduct.trade_price = productData?.trade_price
				cartProduct.thumbnail = productData?.thumbnail
				cartProduct.bulk_prices = productData?.bulk_prices
				//return;
			}


			if (price_type == 'bargain') {
				cartProduct.product_id = productData?.id
				cartProduct.price = productData?.bargainPrice
				cartProduct.sale_price = productData?.bargainPrice
				cartProduct.regular_price = productData?.bargain_default_price

				cartProduct.product_id = productData?.id
				cartProduct.title = `${productData?.title}`

				cartProduct.trade_price = productData?.trade_price
				cartProduct.thumbnail = productData?.thumbnail
				//return;
			}



		}






		if (!productData?.price) {
			addNotification({ type: 'error', title: 'Cant add to cart', content: "Sorry this product doesn't have price." })
			return;
		}

		quantity = (quantity == 0) ? 1 : quantity;



		addCartItems({
			id: cartProduct?.product_id,
			variation_id: cartProduct?.variation_id,
			title: cartProduct?.title,
			quantity: quantity,
			price: cartProduct?.price,
			regular_price: cartProduct?.regular_price,
			sale_price: cartProduct?.sale_price,
			trade_price: cartProduct?.trade_price,

			bulk_prices: cartProduct?.bulk_prices,
			thumbnail: cartProduct?.post_thumbnail?.src,
			metaData: cartProduct?.metaData,
			attributes: cartProduct?.attributes
		})

		setcartToggle(true)

		var trackPrams = { productId: productId, userid: userDataX?.id, event: "addToCart", source: "cartButton" }

		trackPageVisit(trackPrams);
		// sendMetaEvent()
		sendTikTokEvent()




		const eventId = generateFacebookEventId();

		console.log(eventId);


		trackFacebookEvent(
			'AddToCart',
			{
				content_ids: [productData?.id],
				content_type: 'product',
				value: 500,
				currency: 'BDT',
			},
			eventId
		);

		sendFacebookServerEvent({
			eventName: 'AddToCart',
			eventId,
			data: {
				content_ids: [productData?.id],
				content_type: 'product',
				value: productData?.price,
				currency: 'BDT',
			},
		});





	}


	const areAllAttributesSelected = (attributes, activeVariation) => {
		if (!attributes?.length || !activeVariation?.attributes) {
			return false;
		}

		const selectedAttributes = activeVariation.attributes;

		return attributes.every(({ attr }) => {
			const value = selectedAttributes[attr];

			return value !== undefined && value !== null && value !== '';
		});
	};




	const sendTikTokEvent = async (prams) => {



		await trackTikTokEvent(
			'AddToCart',
			{
				contents: [
					{
						content_id: String(productData.id),
						content_name: productData.title,
						quantity: 1,
						price: Number(productData.price),
					}
				],

				content_type: 'product',

				value: Number(productData.price),

				currency: 'BDT',
			}
		);



	};









	function getQuantityById(id) {


		const item = cartItems?.find(obj => obj.id === id);
		return item ? item.quantity : 0; // returns null if not found
	}

	useEffect(() => {

		setcartStep(0)

	}, [cartToggle]);


	useEffect(() => {


		if (addons?.includes('variations')) {
			var canAddToCartX = areAllAttributesSelected(
				attributes,
				activeVariation
			);

			setcanAddToCart(canAddToCartX)

		}


	}, [activeVariation]);



	useEffect(() => {

		var quantity = getQuantityById(productId)

		quantity = quantity != null ? quantity : 0;

		setquantity(quantity)


	}, [cartItems]);






	return (
		<>


			{canAddToCart && (

				<div id={id} type={type} className={`${cssSelectors['*']?.classes}  `}
				>




					{!hideQuanity && (
						<div className={`${cssSelectors['quantity-wrapper']?.classes}`} >
							<div className={`${cssSelectors['quantity-plus']?.classes}`}
								onClick={(ev) => {


									ev.stopPropagation()
									ev.preventDefault()



									if (!productData?.price) {
										addNotification({ type: 'error', title: 'Cant add to cart', content: "Sorry this product doesn't have price." })
										return;
									}
									var quantityX = quantity == 1 ? 1 : quantity - 1;


									setquantity(quantityX)

									if (onChangeCartBtn) {
										onChangeCartBtn({ quantity: quantityX })

									}






									if (addons?.includes('variations')) {

										updateCartItems(productId, {
											id: productId,
											variation_id: activeVariation?.id,
											title: `${productData?.title} - ${activeVariation?.title}`,
											quantity: quantityX,
											price: activeVariation?.sale_price ? activeVariation?.sale_price : activeVariation?.regular_price,
											regular_price: activeVariation?.regular_price,
											sale_price: activeVariation?.sale_price,
											trade_price: activeVariation?.trade_price,
											bulk_prices: activeVariation?.bulk_prices,
											thumbnail: activeVariation?.post_thumbnail?.src,
											attributes: activeVariation?.attributes,
											metaData: activeVariation?.metaData
										})


									}
									if (!addons?.includes('variations')) {



										updateCartItems(productId, {
											id: productId,
											title: productData?.title,
											quantity: quantityX,
											price: productData?.price,
											regular_price: productData?.regular_price,
											sale_price: productData?.sale_price,
											trade_price: productData?.trade_price,
											bulk_prices: productData?.bulk_prices,
											thumbnail: productData?.post_thumbnail?.src,
											metaData: productData?.metaData
										})




									}







									setcartToggle(true)




								}}

							>
								<IconSquareRoundedMinusFilled />
							</div>
							<input type="text" name="addToCart" className={`${cssSelectors['quantity-input']?.classes}`} value={quantity} onChange={ev => {
								var quantity = parseInt(ev.target.value);
								setquantity(quantity)

								if (onChangeCartBtn) {
									onChangeCartBtn({ quantity: quantity })

								}

							}} />
							<div className={`${cssSelectors['quantity-minus']?.classes}`}

								onClick={() => {



									if (!productData?.price) {
										addNotification({ type: 'error', title: 'Cant add to cart', content: "Sorry this product doesn't have price." })
										return;
									}

									var quantityX = quantity + 1;

									setquantity(quantityX)

									if (onChangeCartBtn) {
										onChangeCartBtn({ quantity: quantityX })

									}

									sendMetaEvent()


									if (addons?.includes('variations')) {

										updateCartItems(productId, {
											id: productId,
											variation_id: activeVariation?.id,
											title: `${productData?.title} - ${activeVariation?.title}`,
											quantity: quantityX,
											price: activeVariation?.sale_price ? activeVariation?.sale_price : activeVariation?.regular_price,
											regular_price: activeVariation?.regular_price,
											sale_price: activeVariation?.sale_price,
											trade_price: activeVariation?.trade_price,
											bulk_prices: activeVariation?.bulk_prices,
											thumbnail: activeVariation?.post_thumbnail?.src,
											attributes: activeVariation?.attributes,
											metaData: activeVariation?.metaData
										})


									}
									if (!addons?.includes('variations')) {



										updateCartItems(productId, {
											id: productId,
											title: productData?.title,
											quantity: quantityX,
											price: productData?.price,
											regular_price: productData?.regular_price,
											sale_price: productData?.sale_price,
											trade_price: productData?.trade_price,
											bulk_prices: productData?.bulk_prices,
											thumbnail: productData?.post_thumbnail?.src,
											metaData: productData?.metaData
										})




									}



									setcartToggle(true)




								}}
							>
								<IconSquareRoundedPlusFilled />
							</div>
						</div>
					)}


					{!hideButton && (
						<div className={`${cssSelectors['button-wrapper']?.classes}`}
							onClick={() => addToCart()}
						>

							{IconX && (
								<div className={`${cssSelectors['button-icon']?.classes}`}>
									{IconX ? <IconX size={iconSize} /> : null}
								</div>
							)}

							<div className={`${cssSelectors['button-label']?.classes}`}>{buttonText}</div>


						</div>

					)}




				</div>

			)}
		</>



	);
};

export default AddToCart;
