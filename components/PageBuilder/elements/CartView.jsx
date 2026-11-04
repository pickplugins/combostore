"use client"
import { useState, useEffect, useContext } from "react";
import { IconTrash, IconBasketCheck, IconX, IconShoppingCart, IconMinus, IconPlus, IconArrowLeft, IconArrowRight, IconTicket, IconShoppingBag, IconTruckDelivery } from "@tabler/icons-react";
import Image from "next/image";
import crypto from "crypto";
import CheckoutView from "./CheckoutView";
import { useCounterStore } from '../../../store/useCounterStore'
import { useUtilsStore } from '../../../store/useUtilsStore'
import { useAuthStore } from '../../../store/authStore';
import Spinner from "../../../components/Spinner";
import 'animate.css';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const CartView = (props) => {



	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


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



	const primaryButtonClass = "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
	const iconButtonClass = "flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/30";

	const couponAmount = coupons?.applied ? (parseFloat(coupons?.discountAmount) || 0) : 0;
	const discountLines = (cartDiscount?.lines ?? []).filter(line => (parseFloat(line?.amount) || 0) > 0);
	const autoDiscount = parseFloat(cartDiscount?.amount) || 0;
	const payableShipping = cartDiscount?.freeShipping ? 0 : (parseFloat(shippingCost) || 0);

	return (
		<div className="relative">

			{iconTrigger && (
				<button type="button" aria-label="Cart" className={cssSelectors['button']?.classes} onClick={() => setcartToggle(!cartToggle)}>
					<span className={cssSelectors['button-icon']?.classes}><IconShoppingCart size={20} /></span>
					<span className={cssSelectors['button-quantity']?.classes}>{cartItems.length}</span>
				</button>
			)}

			{!iconTrigger && cartItems.length > 0 && (
				<button type="button" className="flex items-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#150b7d]" onClick={() => setcartToggle(!cartToggle)}>
					<IconBasketCheck size={18} />
					{wrapCurrency(cartTotalPay)}
				</button>
			)}

			{cartToggle && (
				<>
					{/* Backdrop: dims the page and closes the drawer on click. */}
					<div className="fixed inset-0 z-40 bg-black/40 animate__animated animate__fadeIn animate__faster" onClick={closeCart} aria-hidden="true" />

					<div role="dialog" aria-modal="true" aria-label={cartStep == 1 ? 'Checkout' : 'Shopping cart'} className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-[460px] flex-col bg-white shadow-2xl animate__animated animate__faster animate__fadeInRight`}>

						{/* ---------- Header ---------- */}
						<div className="flex shrink-0 items-center justify-between gap-2 border-b border-gray-200 px-4 py-3">
							{cartStep == 1 ? (
								<button type="button" className="-ml-2 flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900" onClick={() => setcartStep(0)}>
									<IconArrowLeft size={18} />
									Back to cart
								</button>
							) : (
								<h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
									<IconShoppingBag size={22} className="text-[#1b0e9f]" />
									Your cart
									{cartTotalQuantity > 0 && (
										<span className="rounded-full bg-[#1b0e9f]/10 px-2 py-0.5 text-xs font-semibold text-[#1b0e9f]">{cartTotalQuantity}</span>
									)}
								</h2>
							)}

							{cartStep == 1 && (
								<h2 className="text-lg font-semibold text-gray-900">Checkout</h2>
							)}

							<button type="button" aria-label="Close cart" className={iconButtonClass} onClick={closeCart}>
								<IconX size={20} />
							</button>
						</div>


						{/* ---------- Cart step ---------- */}
						{cartStep == 0 && cartItems.length == 0 && (
							<div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
									<IconShoppingCart size={32} />
								</div>
								<div className="text-base font-semibold text-gray-900">Your cart is empty</div>
								<p className="text-sm text-gray-500">Looks like you haven't added anything yet.</p>
								<button type="button" className="mt-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50" onClick={closeCart}>
									Continue shopping
								</button>
							</div>
						)}

						{cartStep == 0 && cartItems.length > 0 && (
							<>
								<div className="flex-1 overflow-y-auto">

									<ul className="divide-y divide-gray-100 px-4">
										{cartItems.map((item, index) => {

											var lineTotal = (parseFloat(item.price) || 0) * (parseInt(item.quantity) || 0);

											return (
												<li key={`${item?.id ?? 'item'}-${index}`} className="flex gap-3 py-4">

													<div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
														<Image className="h-full w-full object-cover" src={item.thumbnail || `/thumb.png`} width={160} height={160} alt={item?.title ?? ''} />
													</div>

													<div className="flex min-w-0 flex-1 flex-col gap-1">

														<div className="flex items-start justify-between gap-2">
															<div className="line-clamp-2 text-sm font-medium leading-snug text-gray-900">{item.title}</div>
															<button type="button" aria-label={`Remove ${item.title}`} className="-mr-1 -mt-1 shrink-0 rounded-md p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500" onClick={() => {
																removeCartItems(index)
																addNotification({ type: 'success', title: 'Item removed', content: `<span class="font-bold">${item.title}</span> removed from cart.` })
															}}>
																<IconTrash size={16} />
															</button>
														</div>

														{(item?.attributes || item?.metaData) && (
															<div className="flex flex-wrap gap-1">
																{item?.attributes && Object.entries(item.attributes).map(([attrId, attr]) => (
																	<span key={`attr-${attrId}`} className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600">
																		<span className="capitalize">{attrId}</span>: {attr?.name}
																	</span>
																))}
																{item?.metaData && Object.entries(item.metaData).map(([key, value]) => (
																	<span key={`meta-${key}`} className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600">
																		{key}: {String(value)}
																	</span>
																))}
															</div>
														)}

														<div className="flex items-baseline gap-2 text-xs">
															<span className="font-medium text-gray-700">{wrapCurrency(item.price)}</span>
															{item?.sale_price && item?.regular_price && (
																<span className="text-gray-400 line-through">{wrapCurrency(item.regular_price)}</span>
															)}
														</div>

														<div className="mt-auto flex items-center justify-between gap-2 pt-1">
															<div className="flex items-center rounded-lg border border-gray-300">
																<button type="button" aria-label="Decrease quantity" disabled={item.quantity <= 1} className="flex h-8 w-8 items-center justify-center rounded-l-lg text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => changeQuantity(item, item.quantity - 1)}>
																	<IconMinus size={14} />
																</button>
																<span className="min-w-8 text-center text-sm font-medium tabular-nums text-gray-900" aria-live="polite">{item.quantity}</span>
																<button type="button" aria-label="Increase quantity" className="flex h-8 w-8 items-center justify-center rounded-r-lg text-gray-600 transition-colors hover:bg-gray-100" onClick={() => changeQuantity(item, item.quantity + 1)}>
																	<IconPlus size={14} />
																</button>
															</div>
															<div className="text-sm font-semibold text-gray-900">{wrapCurrency(lineTotal)}</div>
														</div>

													</div>
												</li>
											)
										})}
									</ul>


									{/* ---------- Coupon ---------- */}
									<div className="border-t border-gray-100 px-4 py-4">
										{!coupons?.applied ? (
											<form className="flex gap-2" onSubmit={ev => {
												ev.preventDefault();
												applyCoupon();
											}}>
												<div className="relative flex-1">
													<IconTicket size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
													<input type="text" aria-label="Coupon code" placeholder="Coupon code" className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15" value={coupons.couponCode ?? ''} onChange={ev => {
														setCoupons({ ...coupons, couponCode: ev.target.value })
													}} />
												</div>
												<button type="submit" disabled={coupons.loading} className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#1b0e9f] px-4 py-2 text-sm font-medium text-[#1b0e9f] transition-colors hover:bg-[#1b0e9f] hover:text-white disabled:opacity-60">
													{coupons.loading && <Spinner />}
													Apply
												</button>
											</form>
										) : (
											<div className="flex items-center justify-between gap-3 rounded-lg border border-dashed border-green-600 bg-green-50 px-3 py-2">
												<div className="flex min-w-0 items-center gap-2">
													<IconTicket size={18} className="shrink-0 text-green-700" />
													<div className="min-w-0">
														<div className="truncate font-mono text-sm font-semibold uppercase text-green-800">{coupons.couponCode}</div>
														<div className="text-xs text-green-700">
															{coupons.couponType == 'percent' ? `${coupons.amount}% off applied` : `${wrapCurrency(coupons.amount)} off applied`}
														</div>
													</div>
												</div>
												<button type="button" className="shrink-0 rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-white hover:text-red-600" onClick={removeCoupon}>
													Remove
												</button>
											</div>
										)}
									</div>

								</div>


								{/* ---------- Totals + checkout ---------- */}
								<div className="shrink-0 border-t border-gray-200 bg-gray-50 px-4 pb-4 pt-3">
									<dl className="flex flex-col gap-1.5 text-sm">
										<div className="flex justify-between gap-3">
											<dt className="text-gray-600">Subtotal</dt>
											<dd className="font-medium text-gray-900">{wrapCurrency(cartTotal)}</dd>
										</div>

										{couponAmount > 0 && (
											<div className="flex justify-between gap-3">
												<dt className="text-gray-600">Coupon</dt>
												<dd className="font-medium text-green-600">−{wrapCurrency(couponAmount)}</dd>
											</div>
										)}

										{discountLines.length > 0 ? (
											discountLines.map((line, i) => (
												<div key={line?.ruleId ?? i} className="flex justify-between gap-3">
													<dt className="text-gray-600">{line?.label || 'Discount'}</dt>
													<dd className="font-medium text-green-600">−{wrapCurrency(line.amount)}</dd>
												</div>
											))
										) : autoDiscount > 0 && (
											<div className="flex justify-between gap-3">
												<dt className="text-gray-600">Discount</dt>
												<dd className="font-medium text-green-600">−{wrapCurrency(autoDiscount)}</dd>
											</div>
										)}

										{payableShipping > 0 && (
											<div className="flex justify-between gap-3">
												<dt className="text-gray-600">Shipping</dt>
												<dd className="font-medium text-gray-900">{wrapCurrency(payableShipping)}</dd>
											</div>
										)}

										<div className="mt-1 flex items-baseline justify-between gap-3 border-t border-gray-200 pt-2">
											<dt className="text-base font-semibold text-gray-900">Total</dt>
											<dd className="text-lg font-bold text-gray-900">{wrapCurrency(cartTotalPay)}</dd>
										</div>
									</dl>

									{payableShipping == 0 && (
										<p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
											<IconTruckDelivery size={14} />
											{cartDiscount?.freeShipping ? 'Free shipping on this order.' : 'Shipping is calculated at checkout.'}
										</p>
									)}

									<button type="button" className={`${primaryButtonClass} mt-3`} onClick={goToCheckout}>
										Checkout
										<IconArrowRight size={18} />
									</button>

									<button type="button" className="mt-2 w-full rounded-lg py-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-red-600" onClick={() => {
										resetCartItems()
										addNotification({ type: 'success', title: 'Cart reset', content: "Cart items reset success" })
									}}>
										Clear cart
									</button>
								</div>
							</>
						)}


						{/* ---------- Checkout step ---------- */}
						{cartStep == 1 && (
							<div className="min-h-0 flex-1 overflow-y-auto">
								{/* The cart block's checkout toggles (shipping methods,
									  shipping address, delivery location, subscription) live
									  in its options. Blocks saved before a toggle existed have
									  no key for it, so missing keys fall back to the element's
									  defaults; a toggle switched off in the builder stays off. */}
								<CheckoutView cartOptions={{ ...checkoutOptionDefaults, ...options }} />
							</div>
						)}

					</div>
				</>
			)}

		</div>
	);
};



export default CartView;
