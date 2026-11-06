"use client"
import { useState, useEffect, useContext } from "react";
import { IconTrash, IconBasketCheck, IconX, IconShoppingCart, IconMinus, IconPlus, IconArrowLeft, IconArrowRight, IconTicket, IconShoppingBag, IconTruckDelivery } from "@tabler/icons-react";
import Image from "next/image";
import crypto from "crypto";
import CheckoutView from "./CheckoutView";
import CartCrossSells, { defaultCartCrossSellsTitle, defaultCartCrossSellsLimit } from "./CartCrossSellsView";
import { useCounterStore } from '../../../store/useCounterStore'
import { useUtilsStore } from '../../../store/useUtilsStore'
import { useAuthStore } from '../../../store/authStore';
import Spinner from "../../../components/Spinner";
import 'animate.css';
import { elementCssClasses } from "../ElementsDefinition";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const CartView = (props) => {



	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	/* Each part's classes; a key the block lacks falls back to the cart defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('cart', cssSelectors);


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	/* Same defaults as the cart element in ElementsDefinition.js. */
	var checkoutOptionDefaults = {
		countryCity: true,
		orderNotes: true,
		deliveryLocation: true,
		shippingAddress: true,
		orderSubscription: true,
		shippingMethods: true,
	};
	var tag = options?.tag ?? 'h1';
	var iconTrigger = options?.triggerStyle === 'icon';


	// const trackPageVisit = useUtilsStore((state) => state.trackPageVisit);

	const { cartToggle, setcartToggle, notifications, addNotification, cartStep, setcartStep, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, coupons, setCoupons, cartTotalPay, setcartTotalPay, cartTotal, setcartTotal, shippingMethod, setshippingMethod, shippingCost, setshippingCost, cartDiscount } = useCounterStore()


	const { wrapCurrency } = useUtilsStore()
	const [cartTotalQuantity, setcartTotalQuantity] = useState(0);

	const [couponData, setCouponData] = useState(null);
	var [profits, setprofits] = useState({ grossProfit: 0, netProfit: 0, productCost: 0 });


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

		/*
			Automatic discounts an extension worked out for this cart. Core does
			not know which extension, or how - it reads the slot in the store
			and prices it in. Nothing installed leaves it at zero, which is the
			same arithmetic as before.
		*/
		var autoDiscount = cartDiscount?.amount ?? 0;
		var payableShipping = cartDiscount?.freeShipping ? 0 : shippingCost;

		var totalPay = total + payableShipping;
		if (coupons.applied) {
			totalPay = totalPay - coupons.discountAmount
		}
		totalPay = totalPay - autoDiscount;

		/* A discount bigger than the cart must not turn into money owed to the
			 shopper, which a stack of generous rules plus a coupon can reach. */
		setcartTotalPay(Math.max(0, totalPay))



	}, [cartItems, shippingCost, coupons, cartDiscount]);

	/* The drawer only ever fades in: closing unmounts it, so a fade-out never
		 played, and tracking open/close parity in state let a remount leave an
		 open drawer stuck faded out. */


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



	/*
		A new quantity for a line. With bulk prices the unit price follows the
		highest tier the quantity reaches, and drops back to the regular price
		below the lowest one.
	*/
	function changeQuantity(item, quantity) {

		if (quantity < 1) {
			return;
		}

		if (item?.bulk_prices && item?.bulk_prices?.length > 0) {
			const sortedBulkPrices = [...item.bulk_prices].sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity));
			const applicableTier = sortedBulkPrices.find(tier => quantity >= parseInt(tier?.quantity));

			if (applicableTier) {
				updateCartItems(item.id, { price: applicableTier?.unitPrice, quantity: quantity })
			} else {
				updateCartItems(item.id, { price: item?.regular_price, quantity: quantity })
			}
			return;
		}

		updateCartItems(item.id, { quantity: quantity })
	}


	function applyCoupon() {

		var couponsX = { ...coupons }

		if (!couponsX.couponCode || couponsX.couponCode?.length == 0) {
			addNotification({ type: 'error', title: 'Coupon is empty', content: "Please write coupon code." });
			return;
		}

		couponsX.loading = true;
		setCoupons(couponsX)

		fetch(serverUrl + "wp-json/combo-store/v2/get_coupon_details", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ couponCode: couponsX.couponCode }),
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				response.json().then((res) => {

					if (res.errors) {
						addNotification({ type: 'error', title: 'Coupon is not valid', content: res.message });

						couponsX.loading = false;
						couponsX.couponCode = "";
						setCoupons(couponsX)
						return;
					}

					var couponRes = res.coupon;

					couponsX.applied = true;
					couponsX.discountAmount = calculateCoupon(couponRes.amount, couponRes.couponType);
					couponsX.couponType = couponRes?.couponType;
					couponsX.amount = couponRes?.amount;
					couponsX.loading = false;

					setCoupons(couponsX)

					setTimeout(() => {
						addNotification({ type: 'success', title: 'Coupon Applied', content: "Win! Win!" })
					}, 500);
				});
			})
			.catch((_error) => {
				/* Before, a failed request left the spinner running for good. */
				setCoupons({ ...couponsX, loading: false })
				addNotification({ type: 'error', title: 'Coupon', content: "Could not check the coupon. Please try again." });
			});
	}


	function removeCoupon() {
		setCoupons({ ...coupons, applied: false, couponCode: "", discountAmount: 0 })
	}


	function goToCheckout() {

		if (cartItems?.length == 0) {
			addNotification({ type: 'error', title: 'Cart Empty', content: `Please add some items to cart.` })
			return;
		}

		setcartStep(1)

		var trackPrams = { userid: userDataX?.id, event: "goToCheckout", source: "cart", value: cartTotalPay, currency: "BDT" }

		sendMetaEvent(trackPrams)
	}


	function closeCart() {
		setcartToggle(!cartToggle)
	}


	/* Escape closes the drawer, as it does any dialog. */
	useEffect(() => {
		if (!cartToggle) {
			return;
		}

		const onKeyDown = (ev) => {
			if (ev.key === 'Escape') {
				setcartToggle(false)
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [cartToggle]);


	const sendMetaEvent = async (prams) => {
		const eventId = window.crypto.randomUUID();




		// 1️⃣ Browser Pixel Event
		if (window.fbq) {
			window.fbq("track", "InitiateCheckout", {
				value: cartTotalPay,
				currency: "BDT",
				eventID: eventId, // important!
			});
		}

		// 2️⃣ Server-Side Event
		await fetch("/api/meta-event", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				event_name: "InitiateCheckout",
				event_id: eventId,
				value: cartTotalPay,
			}),
		});
	};



	const couponAmount = coupons?.applied ? (parseFloat(coupons?.discountAmount) || 0) : 0;
	const discountLines = (cartDiscount?.lines ?? []).filter(line => (parseFloat(line?.amount) || 0) > 0);
	const autoDiscount = parseFloat(cartDiscount?.amount) || 0;
	const payableShipping = cartDiscount?.freeShipping ? 0 : (parseFloat(shippingCost) || 0);

	return (
		<CartMarkup
			cls={cls}
			id={id}
			type={type}
			iconTrigger={iconTrigger}
			cartOpen={cartToggle}
			cartStep={cartStep}
			cartItems={cartItems}
			cartTotalQuantity={cartTotalQuantity}
			cartTotal={cartTotal}
			cartTotalPay={cartTotalPay}
			wrapCurrency={wrapCurrency}
			coupons={coupons}
			couponAmount={couponAmount}
			discountLines={discountLines}
			autoDiscount={autoDiscount}
			payableShipping={payableShipping}
			freeShipping={Boolean(cartDiscount?.freeShipping)}
			onToggle={() => setcartToggle(!cartToggle)}
			onClose={closeCart}
			onBack={() => setcartStep(0)}
			onRemoveItem={(item, index) => {
				removeCartItems(index)
				addNotification({ type: 'success', title: 'Item removed', content: `<span class="font-bold">${item.title}</span> removed from cart.` })
			}}
			onChangeQuantity={changeQuantity}
			onCouponCode={value => setCoupons({ ...coupons, couponCode: value })}
			onApplyCoupon={applyCoupon}
			onRemoveCoupon={removeCoupon}
			onCheckout={goToCheckout}
			onClear={() => {
				resetCartItems()
				addNotification({ type: 'success', title: 'Cart reset', content: "Cart items reset success" })
			}}
			crossSells={
				/* "Frequently bought together": the cart products' cross-sells (CartCrossSellsView). On unless the block switches it off. */
				(options?.crossSells ?? true) ? (
					<CartCrossSells cls={cls} cartItems={cartItems}
						title={options?.crossSellsTitle ?? defaultCartCrossSellsTitle}
						limit={options?.crossSellsLimit ?? defaultCartCrossSellsLimit} />
				) : null
			}
			checkout={
				/* The cart block's checkout toggles (shipping methods,
					 shipping address, delivery location, subscription) live
					 in its options. Blocks saved before a toggle existed have
					 no key for it, so missing keys fall back to the element's
					 defaults; a toggle switched off in the builder stays off. */
				<CheckoutView cartOptions={{ ...checkoutOptionDefaults, ...options }} />
			}
		/>
	);
};


/*
	The cart's markup, shared with the builder preview (Cart.jsx) so the two
	cannot drift apart. It holds no state: everything it shows and every
	action comes in as props, and every class comes from `cls`, the block's
	cssSelectors lookup.

	The trigger is either a pill with the cart total (shown once the cart has
	something in it) or, with options.triggerStyle 'icon', a cart icon with a
	count badge that is always shown. The drawer only ever fades in: closing
	unmounts it, so the animate.css classes stay in code rather than in a
	selector a preset could break.
*/
export function CartMarkup(props) {
	const {
		cls, id, type, iconTrigger, cartOpen, cartStep, cartItems, cartTotalQuantity, cartTotal, cartTotalPay, wrapCurrency,
		coupons, couponAmount, discountLines, autoDiscount, payableShipping, freeShipping,
		onToggle, onClose, onBack, onRemoveItem, onChangeQuantity, onCouponCode, onApplyCoupon, onRemoveCoupon, onCheckout, onClear,
		checkout, crossSells,
	} = props;

	var items = cartItems ?? [];

	return (
		<div id={id} type={type} className={cls('*')}>

			{iconTrigger && (
				<button type="button" aria-label="Cart" className={cls('trigger-icon')} onClick={onToggle}>
					<IconShoppingCart size={22} />
					{items.length > 0 && (
						<span className={cls('trigger-badge')}>{items.length}</span>
					)}
				</button>
			)}

			{!iconTrigger && items.length > 0 && (
				<button type="button" className={cls('trigger')} onClick={onToggle}>
					<IconBasketCheck size={18} />
					{wrapCurrency(cartTotalPay)}
				</button>
			)}

			{cartOpen && (
				<>
					{/* Backdrop: dims the page and closes the drawer on click. */}
					<div className={`${cls('backdrop')} animate__animated animate__fadeIn animate__faster`} onClick={onClose} aria-hidden="true" />

					<div role="dialog" aria-modal="true" aria-label={cartStep == 1 ? 'Checkout' : 'Shopping cart'} className={`${cls('drawer')} animate__animated animate__faster animate__fadeInRight`}>

						{/* ---------- Header ---------- */}
						<div className={cls('header')}>
							{cartStep == 1 ? (
								<button type="button" className={cls('back-button')} onClick={onBack}>
									<IconArrowLeft size={18} />
									Back to cart
								</button>
							) : (
								<h2 className={cls('title')}>
									<IconShoppingBag size={22} className={cls('title-icon')} />
									Your cart
									{cartTotalQuantity > 0 && (
										<span className={cls('count-badge')}>{cartTotalQuantity}</span>
									)}
								</h2>
							)}

							{cartStep == 1 && (
								<h2 className={cls('title')}>Checkout</h2>
							)}

							<button type="button" aria-label="Close cart" className={cls('close-button')} onClick={onClose}>
								<IconX size={20} />
							</button>
						</div>



						{/* ---------- Cart step ---------- */}
						{cartStep == 0 && items.length == 0 && (
							<div className={cls('empty')}>
								<div className={cls('empty-icon')}>
									<IconShoppingCart size={32} />
								</div>
								<div className={cls('empty-title')}>Your cart is empty</div>
								<p className={cls('empty-text')}>Looks like you haven't added anything yet.</p>
								<button type="button" className={cls('continue-button')} onClick={onClose}>
									Continue shopping
								</button>
							</div>
						)}

						{cartStep == 0 && items.length > 0 && (
							<>
								<div className={cls('body')}>

									<ul className={cls('items')}>
										{items.map((item, index) => {

											var lineTotal = (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0);

											return (
												<li key={`${item?.id ?? 'item'}-${index}`} className={cls('item')}>

													<div className={cls('item-thumb')}>
														<Image className={cls('item-image')} src={item.thumbnail || `/thumb.png`} width={160} height={160} alt={item?.title ?? ''} />
													</div>

													<div className={cls('item-details')}>

														<div className={cls('item-top')}>
															<div className={cls('item-title')}>{item.title}</div>
															<button type="button" aria-label={`Remove ${item.title}`} className={cls('item-remove')} onClick={() => onRemoveItem(item, index)}>
																<IconTrash size={16} />
															</button>
														</div>

														{(item?.attributes || item?.metaData) && (
															<div className={cls('item-tags')}>
																{item?.attributes && Object.entries(item.attributes).map(([attrId, attr]) => (
																	<span key={`attr-${attrId}`} className={cls('item-tag')}>
																		<span className="capitalize">{attrId}</span>: {attr?.name}
																	</span>
																))}
																{item?.metaData && Object.entries(item.metaData).map(([key, value]) => (
																	<span key={`meta-${key}`} className={cls('item-tag')}>
																		{key}: {String(value)}
																	</span>
																))}
															</div>
														)}

														<div className={cls('item-prices')}>
															<span className={cls('item-price')}>{wrapCurrency(item.price)}</span>
															{item?.sale_price && item?.regular_price && (
																<span className={cls('item-regular-price')}>{wrapCurrency(item.regular_price)}</span>
															)}
														</div>

														<div className={cls('item-bottom')}>
															<div className={cls('stepper')}>
																<button type="button" aria-label="Decrease quantity" disabled={item.quantity <= 1} className={cls('stepper-decrease')} onClick={() => onChangeQuantity(item, item.quantity - 1)}>
																	<IconMinus size={14} />
																</button>
																<span className={cls('stepper-value')} aria-live="polite">{item.quantity}</span>
																<button type="button" aria-label="Increase quantity" className={cls('stepper-increase')} onClick={() => onChangeQuantity(item, item.quantity + 1)}>
																	<IconPlus size={14} />
																</button>
															</div>
															<div className={cls('item-total')}>{wrapCurrency(lineTotal)}</div>
														</div>

													</div>
												</li>
											)
										})}
									</ul>



									{/* ---------- Frequently bought together (the shop's CartCrossSells, the builder's placeholder) ---------- */}
									{crossSells}


									{/* ---------- Coupon ---------- */}
									<div className={cls('coupon')}>
										{!coupons?.applied ? (
											<form className={cls('coupon-form')} onSubmit={ev => {
												ev.preventDefault();
												onApplyCoupon();
											}}>
												<div className={cls('coupon-field')}>
													<IconTicket size={18} className={cls('coupon-icon')} />
													<input type="text" aria-label="Coupon code" placeholder="Coupon code" className={cls('coupon-code-input')} value={coupons?.couponCode ?? ''} onChange={ev => onCouponCode(ev.target.value)} />
												</div>
												<button type="submit" disabled={coupons?.loading} className={cls('coupon-apply')}>
													{coupons?.loading && <Spinner />}
													Apply
												</button>
											</form>
										) : (
											<div className={cls('coupon-applied')}>
												<div className={cls('coupon-applied-info')}>
													<IconTicket size={18} className={cls('coupon-applied-icon')} />
													<div className="min-w-0">
														<div className={cls('coupon-applied-code')}>{coupons.couponCode}</div>
														<div className={cls('coupon-applied-text')}>
															{coupons.couponType == 'percent' ? `${coupons.amount}% off applied` : `${wrapCurrency(coupons.amount)} off applied`}
														</div>
													</div>
												</div>
												<button type="button" className={cls('coupon-remove')} onClick={onRemoveCoupon}>
													Remove
												</button>
											</div>
										)}
									</div>

								</div>


								{/* ---------- Totals + checkout ---------- */}
								<div className={cls('summary')}>
									<dl className={cls('totals')}>
										<div className={cls('total-row')}>
											<dt className={cls('total-label')}>Subtotal</dt>
											<dd className={cls('total-value')}>{wrapCurrency(cartTotal)}</dd>
										</div>

										{couponAmount > 0 && (
											<div className={cls('total-row')}>
												<dt className={cls('total-label')}>Coupon</dt>
												<dd className={cls('discount-value')}>−{wrapCurrency(couponAmount)}</dd>
											</div>
										)}

										{discountLines.length > 0 ? (
											discountLines.map((line, i) => (
												<div key={line?.ruleId ?? i} className={cls('total-row')}>
													<dt className={cls('total-label')}>{line?.label || 'Discount'}</dt>
													<dd className={cls('discount-value')}>−{wrapCurrency(line.amount)}</dd>
												</div>
											))
										) : autoDiscount > 0 && (
											<div className={cls('total-row')}>
												<dt className={cls('total-label')}>Discount</dt>
												<dd className={cls('discount-value')}>−{wrapCurrency(autoDiscount)}</dd>
											</div>
										)}

										{payableShipping > 0 && (
											<div className={cls('total-row')}>
												<dt className={cls('total-label')}>Shipping</dt>
												<dd className={cls('total-value')}>{wrapCurrency(payableShipping)}</dd>
											</div>
										)}

										<div className={cls('grand-total-row')}>
											<dt className={cls('grand-total-label')}>Total</dt>
											<dd className={cls('grand-total-value')}>{wrapCurrency(cartTotalPay)}</dd>
										</div>
									</dl>

									{payableShipping == 0 && (
										<p className={cls('shipping-note')}>
											<IconTruckDelivery size={14} />
											{freeShipping ? 'Free shipping on this order.' : 'Shipping is calculated at checkout.'}
										</p>
									)}

									<button type="button" className={cls('checkout-button')} onClick={onCheckout}>
										Checkout
										<IconArrowRight size={18} />
									</button>

									<button type="button" className={cls('clear-button')} onClick={onClear}>
										Clear cart
									</button>
								</div>
							</>
						)}


						{/* ---------- Checkout step ---------- */}
						{cartStep == 1 && (
							<div className={cls('checkout-body')}>
								{checkout}
							</div>
						)}

					</div>
				</>
			)}

		</div>
	);
}



export default CartView;
