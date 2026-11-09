
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
import { elementCssClasses } from "../ElementsDefinition";
import { stockStatusFor, availableStock } from "./ProductStockStatusView";


/*
	The stepper keys used to be quantity-plus (which styled the MINUS button)
	and quantity-minus (which styled the PLUS button). A block saved before the
	rename keeps its classes: each old key is read as the new key for the
	button it actually styled, unless the block already has the new key.
*/
export function withLegacyStepperKeys(cssSelectors) {
	var source = cssSelectors ?? {};
	var result = { ...source };
	if (!('quantity-decrease' in source) && source['quantity-plus']) result['quantity-decrease'] = source['quantity-plus'];
	if (!('quantity-increase' in source) && source['quantity-minus']) result['quantity-increase'] = source['quantity-minus'];
	return result;
}

const AddToCart = (props) => {


	var activeVariation = useProductStore(
		(state) => state.activeVariation
	);









	var index = props?.index
	var cssSelectors = withLegacyStepperKeys(props?.cssSelectors);
	/* Each part's classes; a key the block lacks falls back to the addToCart defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('addToCart', cssSelectors);


	var id = props?.id;
	var type = props?.type;
	const cartOptions = props?.cartOptions;

	var options = props?.options;
	var iconSize = options?.iconSize ?? 20;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;

	var icon = options?.icon;
	var buttonText = options?.buttonText;
	/* The definition, panel and AI prompt write hideQuantity; older pages saved the misspelled
		 hideQuanity, sometimes beside a hideQuantity: false from the definition, so either one
		 being true hides it. The panel drops the misspelled key when it saves. */
	var hideQuantity = options?.hideQuantity === true || options?.hideQuanity === true;
	var hideButton = options?.hideButton ?? false;



	var productData = usePost();


	console.log(productData);





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
	var [canAddToCart, setcanAddToCart] = useState(!productData?.addons?.includes('variations'));

	/*
		An extension may say this product is not sold here and now - see
		`purchaseGate` in store/useCounterStore.js. extensions/request-quote
		uses it to replace buying with a quote request on the products a rule
		marks quote-only.

		Read through a selector of its own rather than added to the
		destructure above, so it is obvious this is a slot core only reads.
		With nothing installed it is null and the controls render exactly as
		they did.
	*/
	const purchaseGate = useCounterStore((state) => state.purchaseGate);
	const purchaseBlocked = purchaseGate ? purchaseGate(productData)?.hideAddToCart === true : false;
	var [addons, setaddons] = useState(productData?.addons);

	/*
		Stock. A sold-out product - or picked variation - used to go into the
		cart like any other, and the stepper counted past what was left. The
		rule is the stock badge's (stockStatusFor), so the button and the
		"Out of stock" label never disagree; maxQuantity is the units left when
		stock is counted, Infinity when it is not.
	*/
	var stockVariation = addons?.includes('variations') ? activeVariation : null;
	var outOfStock = stockStatusFor(productData, stockVariation) === 'outofstock';
	var maxQuantity = availableStock(productData, stockVariation);
	var outOfStockText = options?.outOfStockText || "Out of stock";

	function notifyStock(left) {
		addNotification({
			type: 'error',
			title: left > 0 ? 'Not enough stock' : 'Out of stock',
			content: left > 0 ? `Only ${left} left in stock.` : "Sorry, this product is out of stock.",
		});
	}

	var hideButtonText = props?.hideButtonText
	var quantitySyncwithCart = props?.quantitySyncwithCart
	var onChangeCartBtn = props?.onChangeCartBtn







	async function addToCart() {

		if (outOfStock) {
			notifyStock(0);
			return;
		}




		var cartProduct = {}




		if (addons?.includes('variations')) {


			if (activeVariation?.sale_price) {
				cartProduct.price = activeVariation?.sale_price
			} else {
				cartProduct.price = activeVariation?.regular_price

			}


			cartProduct.product_id = activeVariation?.product_id
			cartProduct.variation_id = activeVariation?.id
			cartProduct.crosssells = activeVariation?.crosssells
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

			console.log(productData);



			if (price_type == 'simple') {
				cartProduct.product_id = productData?.id
				cartProduct.crosssells = productData?.crosssells

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
				cartProduct.crosssells = productData?.crosssells
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

		if (quantity > maxQuantity) {
			notifyStock(maxQuantity);
			return;
		}



		addCartItems({
			id: cartProduct?.product_id,
			product_id: cartProduct?.product_id,
			variation_id: cartProduct?.variation_id,
			crosssells: cartProduct?.crosssells,
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


		console.log(cartProduct);
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


			{/* Sold out: the button stays (so the layout holds) but cannot add, and the stepper goes. */}
			{canAddToCart && !purchaseBlocked && outOfStock && !hideButton && (
				<div id={id} type={type} className={cls('*')}>
					<div className={`${cls('button-wrapper')} !cursor-not-allowed opacity-50`}
						role="button"
						aria-disabled="true"
						tabIndex={0}
						onClick={() => notifyStock(0)}
						onKeyDown={ev => {
							if (ev.key !== 'Enter' && ev.key !== ' ') return;
							ev.preventDefault();
							notifyStock(0);
						}}
					>
						<div className={cls('button-label')}>{outOfStockText}</div>
					</div>
				</div>
			)}

			{canAddToCart && !purchaseBlocked && !outOfStock && (

				<div id={id} type={type} className={cls('*')}
				>




					{!hideQuantity && (
						<div className={cls('quantity-wrapper')} >
							{/* Buttons, not divs, so the stepper works from the keyboard and
							   is announced by screen readers. */}
							<button type="button" aria-label="Decrease quantity" className={cls('quantity-decrease')}
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
							</button>
							<input type="text" inputMode="numeric" aria-label="Quantity" name="addToCart" className={cls('quantity-input')} value={quantity} onChange={ev => {
								/* An emptied box used to store NaN as the quantity. */
								var quantity = Math.max(0, parseInt(String(ev.target.value).replace(/\D/g, '')) || 0);
								/* Typed past the stock: hold it at what is left. */
								if (quantity > maxQuantity) {
									notifyStock(maxQuantity);
									quantity = maxQuantity;
								}
								setquantity(quantity)

								if (onChangeCartBtn) {
									onChangeCartBtn({ quantity: quantity })

								}

							}} />
							<button type="button" aria-label="Increase quantity" className={cls('quantity-increase')}

								onClick={() => {



									if (!productData?.price) {
										addNotification({ type: 'error', title: 'Cant add to cart', content: "Sorry this product doesn't have price." })
										return;
									}

									var quantityX = quantity + 1;

									if (outOfStock || quantityX > maxQuantity) {
										notifyStock(outOfStock ? 0 : maxQuantity);
										return;
									}

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
								<IconSquareRoundedPlusFilled />
							</button>
						</div>
					)}


					{!hideButton && (
						<div className={cls('button-wrapper')}
							role="button"
							tabIndex={0}
							onClick={() => addToCart()}
							onKeyDown={ev => {
								if (ev.key !== 'Enter' && ev.key !== ' ') return;
								ev.preventDefault();
								addToCart();
							}}
						>

							{IconX && (
								<div className={cls('button-icon')}>
									{IconX ? <IconX size={iconSize} /> : null}
								</div>
							)}

							<div className={cls('button-label')}>{buttonText}</div>


						</div>

					)}




				</div>

			)}
		</>



	);
};

export default AddToCart;
