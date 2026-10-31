"use client"
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";


import { useState, useEffect, useContext, useRef } from "react";
import { IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconTrash, IconBasketCheck, IconChevronUp, IconChevronDown, IconCircleCheck, IconShoppingCartCancel, IconSquare, IconSquareCheck, IconCircleDashed } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import Image from "next/image";
import { getSettings } from "@/lib/getSettings";

import ToggleContent from "../../../components/ToggleContent";
import DropDown from "../../../components/DropDown";
import LocationPicker from "../../../components/LocationPicker";
import { useAuthStore } from '../../../store/authStore';
import { useCounterStore } from '../../../store/useCounterStore'
import { useUtilsStore } from '../../../store/useUtilsStore'
import countries from '../../../lib/Countries'
import states from '../../../lib/States'
import { useRouter } from "next/navigation";
import UploadMedia from "../../../components/shop-elements/UploadMedia";
import BkashCheckoutButton from "../../../components/shop-elements/BkashCheckoutButton";
import NagadCheckoutButton from "../../../components/shop-elements/NagadCheckoutButton";
import AamarPayCheckoutButton from "../../../components/shop-elements/AamarPayCheckoutButton";
import PayPalCheckoutButton from "../../../components/shop-elements/PayPalCheckoutButton";
import StripeCheckoutButton from "../../../components/shop-elements/StripeCheckoutButton";
import { getPayPalConfig } from "../../../lib/paypal";
import { getStripeConfig } from "../../../lib/stripe";




const CheckoutView = (props) => {


	const settings = useCounterStore((state) => state.settings);
	const fetchSettings = useCounterStore((state) => state.fetchSettings);


	// const page = await getPageData()

	useEffect(() => {
		if (!settings) {
			fetchSettings();

		}
	}, [settings, fetchSettings]);



	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var text = options?.text ?? 'Dummy Link';
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var linkTo = options?.linkTo;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;


	const Tag = tag;

	const IconX = TablerIcons[icon];


	const router = useRouter();
	var token = useAuthStore((state) => state.token);

	// var cartItems = props?.cartItems
	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { appData, cartToggle, setcartToggle, currencySymbole, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, currency, coupons, setCoupons, cartTotalPay, setcartTotalPay, cartTotal, setcartTotal, shippingCost, setshippingCost, paymentGatewaysArgs, cartDiscount } = useCounterStore()




	const paymentGateways = settings?.paymentGateways;
	const bankAccounts = paymentGateways?.bank_transfer?.accounts;
	const [loading, setloading] = useState(false);
	/*
		PayPal answers for itself. Its credentials are not in the settings blob -
		they live in their own option on the server - so whether it is usable is
		asked of paypal_config rather than read from settings.paymentGateways,
		and that one answer decides both the tile below and the buttons.
	*/
	const [paypalConfig, setpaypalConfig] = useState(null);
	/*
		Stripe answers for itself too, and for the same reason: its secret key is
		in the server env, not in the settings blob, so the dashboard's switch
		alone cannot tell whether a card payment would actually work. The tile is
		shown when both agree - the store enabled it and the server has a key.
	*/
	const [stripeConfig, setstripeConfig] = useState(null);
	const [readyToSubmitOrder, setreadyToSubmitOrder] = useState({ error: null, message: "" });
	const [contactAdded, setcontactAdded] = useState({ error: null, message: "" });
	const [orderData, setorderData] = useState({ order_id: null, status: null, });

	const { wrapCurrency } = useUtilsStore()

	var [profits, setprofits] = useState({ grossProfit: 0, netProfit: 0, productCost: 0 });
	var [payments, setpayments] = useState({ transactionId: '', paymentStatus: '', paymentMethod: '', });
	var [shippingMethods, setshippingMethods] = useState([]);
	var [currentshippingMethod, setcurrentshippingMethod] = useState(null);

	var [countriesList, setcountriesList] = useState({});
	var [statesList, setstatesList] = useState([]);
	var defaultCountry = 'BD';





	const [checkoutData, setcheckoutData] = useState({
		cartItems: cartItems,
		"userid": userDataX?.id,
		"status": "pending",
		"currency": currency,
		"total_amount": cartTotal,
		"subtotal_amount": cartTotalPay,
		"discount_amount": coupons?.discountAmount,
		"tax_amount": "",
		"gross_profit": "",
		"net_profit": "",
		"shipping_amount": shippingCost,
		"payment_method": "",
		"payment_status": "pending",
		"transaction_id": "",
		"order_note": "",
		"shipping_method": "",
		"subscription": { enable: false, interval: "month", interval_count: 1 },


		"billing_name": userDataX?.name,
		"billing_address1": userDataX?.billing_address1,
		"billing_address2": userDataX?.billing_address2,
		"billing_address": userDataX?.billing_address1 + " " + userDataX?.billing_address2,
		"billing_phone": userDataX?.phone,
		"billing_email": userDataX?.email,
		"billing_country": userDataX?.billing_country ?? defaultCountry,
		"billing_city": userDataX?.billing_city,



		"shipping_name": '',
		"shipping_phone": '',
		"shipping_address1": '',
		"shipping_address2": '',
		"shipping_address": '',
		"shipping_country": '',
		"shipping_city": '',

		"assign_to": [],
		"delivery_location": userDataX?.delivery_location,

	});

	const contactAddedRef = useRef(contactAdded);
	const orderDataRef = useRef(orderData);
	const checkoutDataRef = useRef(checkoutData);


	useEffect(() => {
		contactAddedRef.current = contactAdded;
	}, [contactAdded]);

	useEffect(() => {
		orderDataRef.current = orderData;
	}, [orderData]);

	useEffect(() => {
		checkoutDataRef.current = checkoutData;
	}, [checkoutData]);




	const didFetch = useRef(false);


















	useEffect(() => {

		var items = {};

		countries.map(country => {
			items[country.code2] = { label: country.name, value: country.code2, states: country.states }
		})

		setcountriesList(items)

	}, [countries]);

	useEffect(() => {



		// var shippingMethod = shippingMethodsPrams[checkoutData?.shipping_method]
		var shippingPrice = parseFloat(currentshippingMethod?.amount)



		setcartTotal(cartTotalPay)

		setshippingCost(shippingPrice)
		setcheckoutData({ ...checkoutData, shipping_amount: shippingPrice, total_amount: parseFloat(cartTotalPay + shippingPrice) })


	}, [checkoutData?.shipping_method]);


	/*
		The order's discount line.

		`discount_amount` was seeded once from the coupon when this component
		mounted, so a coupon applied afterwards - and any automatic discount an
		extension prices in - was taken off what the shopper paid but never
		recorded against the order. It is kept in step here instead.
	*/
	useEffect(() => {

		var discountTotal = (coupons?.applied ? parseFloat(coupons?.discountAmount) || 0 : 0)
			+ (parseFloat(cartDiscount?.amount) || 0);

		setcheckoutData((previous) => (
			previous?.discount_amount === discountTotal
				? previous
				: { ...previous, discount_amount: discountTotal }
		));

	}, [coupons?.applied, coupons?.discountAmount, cartDiscount?.amount]);




	useEffect(() => {
		var country = checkoutData?.billing_country ?? defaultCountry;

		var selectedStates = states[country] ? states[country] : {};


		var statesListX = {};

		Object.entries(selectedStates)?.map(args => {

			var index = args[0]
			var name = args[1]

			statesListX[index] = { label: name, value: index, }

		})
		setstatesList(statesListX)
	}, [checkoutData?.billing_country, defaultCountry]);






	useEffect(() => {

		const handleVisibilityChange = () => {

			if (document.visibilityState !== "hidden") {
				return;
			}

			const latestContactAdded = contactAddedRef.current;
			const latestOrderData = orderDataRef.current;
			const latestCheckoutData = checkoutDataRef.current;



			// Order already exists
			if (latestOrderData?.order_id != null) {
				return;
			}

			// Customer information is not complete
			if (latestContactAdded?.error !== false) {
				return;
			}

			// Create incomplete order
			const data = {
				...latestCheckoutData,
				status: "incomplete",
			};

			create_order(data);
		};

		document.addEventListener(
			"visibilitychange",
			handleVisibilityChange
		);

		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};

	}, []);



	useEffect(() => {

		var prams = {}


		var country = checkoutData?.shipping_country.length > 0 ? checkoutData?.shipping_country : checkoutData?.billing_country
		var city = checkoutData?.shipping_city.length > 0 ? checkoutData?.shipping_city : checkoutData?.billing_city


		prams.country = country
		prams.city = city

		console.log(prams);



		find_shipping_methods(prams);

	}, [checkoutData?.billing_country, checkoutData?.billing_city]);
















	useEffect(() => {
		const name = checkoutData?.billing_name?.trim() || "";
		const address = checkoutData?.billing_address?.trim() || "";
		const phone = checkoutData?.billing_phone?.trim() || "";
		const email = checkoutData?.billing_email?.trim() || "";
		const shippingMethod = checkoutData?.shipping_method || "";

		// Contact information required to create incomplete order
		const hasContactInfo =
			!!name &&
			!!phone &&
			!!address;

		setcontactAdded({
			error: !hasContactInfo,
			message: hasContactInfo
				? ""
				: "Customer information is incomplete."
		});

		// Required information to show/enable submit button
		if (!name) {
			setreadyToSubmitOrder({
				error: true,
				message: "Name is empty"
			});
			return;
		}

		if (!address) {
			setreadyToSubmitOrder({
				error: true,
				message: "Please write address to submit order."
			});
			return;
		}

		if (!phone) {
			setreadyToSubmitOrder({
				error: true,
				message: "Phone number is empty"
			});
			return;
		}

		if (!email) {
			setreadyToSubmitOrder({
				error: true,
				message: "Email is empty"
			});
			return;
		}

		if (!shippingMethod) {

			if (shippingMethods.length == 0) {

				setreadyToSubmitOrder({
					error: false,
					message: ""
				});

				return;
			}

			setreadyToSubmitOrder({
				error: true,
				message: "Shipping method is empty"
			});
			return;
		}

		// Everything required for checkout is available
		setreadyToSubmitOrder({
			error: false,
			message: ""
		});

	}, [
		checkoutData?.billing_name,
		checkoutData?.billing_address,
		checkoutData?.billing_phone,
		checkoutData?.billing_email,
		checkoutData?.shipping_method
	]);


	useEffect(() => {
		var subtotal = 0;
		var totalQuantity = 0;
		var productCost = 0;
		var grossProfit = 0;
		var netProfit = 0;

		cartItems?.map(item => {



			var quantity = parseInt(item.quantity)
			var price = parseInt(item.price)
			var trade_price = item.trade_price ? parseFloat(item.trade_price) : parseFloat(item.price)


			subtotal += (price * quantity);

			totalQuantity += quantity;
			productCost += (trade_price * quantity);



		})

		grossProfit = (subtotal - productCost);



		if (coupons?.discountAmount > 0) {
			netProfit = grossProfit - coupons?.discountAmount
		} else {
			netProfit = grossProfit
		}

		setcheckoutData({ ...checkoutData, productCost: productCost, gross_profit: grossProfit, net_profit: netProfit })




	}, []);














	/* Asked once. The client id and currency are fixed for the store, so there
		 is nothing to re-fetch as the cart changes. */
	useEffect(() => {

		let cancelled = false;

		getPayPalConfig(serverUrl)
			.then(config => {
				if (!cancelled) {
					setpaypalConfig(config);
				}
			})
			.catch(() => {
				/* PayPal simply does not appear; the other methods still work. */
				if (!cancelled) {
					setpaypalConfig(null);
				}
			});

		return () => {
			cancelled = true;
		};

	}, [serverUrl]);


	/* Asked once, for the same reason as PayPal's: the key and the charge
		 currency are fixed for the store. */
	useEffect(() => {

		let cancelled = false;

		getStripeConfig()
			.then(config => {
				if (!cancelled) {
					setstripeConfig(config);
				}
			})
			.catch(() => {
				/* Stripe simply does not appear; the other methods still work. */
				if (!cancelled) {
					setstripeConfig(null);
				}
			});

		return () => {
			cancelled = true;
		};

	}, []);


	/*
		The methods to offer: whatever the dashboard enabled, plus PayPal when
		the gateway itself reports ready. Keeping PayPal out of the settings blob
		means it is not in `settings.paymentGateways`, and a second enable
		switch there would only be something else to forget.

		Stripe is the other way round - it is in the settings blob, so the store
		chooses whether to offer cards - but the tile is dropped when the server
		has no key, because a buyer picking it would then get as far as the pay
		button and no further.
	*/
	const gatewayList = (() => {
		const list = { ...(paymentGateways || {}) };

		if (paypalConfig?.enabled) {
			list.paypal = { ...(list.paypal || {}), enable: true, label: paypalConfig?.label || 'PayPal' };
		} else {
			delete list.paypal;
		}

		if (list.stripe && !stripeConfig?.enabled) {
			delete list.stripe;
		}

		return list;
	})();


	/**
	 * The order a payment will be made against.
	 *
	 * PayPal is told an order hash and nothing else - the server reads the
	 * amount off that order - so the row has to exist and has to be current
	 * before the buyer approves anything.
	 *
	 * An order may already exist: leaving the tab mid-checkout saves an
	 * `incomplete` one. That is worth reusing, but only after checking it still
	 * matches the cart, because paying against a total from twenty minutes ago
	 * would charge the wrong amount. `update_order` is not an option for
	 * refreshing it - that route requires the dashboard's JWT, which the
	 * storefront does not have - so a stale order is replaced instead.
	 */
	async function ensureOrderForPayment(method) {

		const latestCheckout = checkoutDataRef.current ?? checkoutData;
		const latestOrder = orderDataRef.current ?? orderData;

		if (readyToSubmitOrder?.error) {
			throw new Error(readyToSubmitOrder?.message || 'Please complete your details first.');
		}

		const total = parseFloat(latestCheckout?.total_amount);

		if (!(total > 0)) {
			throw new Error('This cart has nothing to pay for.');
		}

		if (latestOrder?.order_hash) {
			const existing = await fetch(serverUrl + "wp-json/combo-store/v2/get_order_by_hash", {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ slug: latestOrder.order_hash }),
			})
				.then(response => (response.ok ? response.json() : null))
				.catch(() => null);

			const order = existing?.order;
			const sameTotal = order && Math.abs(parseFloat(order.total_amount) - total) < 0.01;
			const unpaid = order && order.payment_status !== 'paid';

			if (order?.id && sameTotal && unpaid) {
				return { order_id: order.id, order_hash: latestOrder.order_hash };
			}
		}

		const payload = {
			...latestCheckout,
			status: 'pending',
			payment_method: method,
			payment_status: 'pending',
		};

		const response = await fetch(serverUrl + "wp-json/combo-store/v2/create_order", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const created = await response.json();

		if (created?.status !== 'success' || !created?.order_hash) {
			throw new Error(created?.message || 'The order could not be created.');
		}

		setorderData(created);
		orderDataRef.current = created;

		return created;
	}


	/**
	 * A payment the server has recorded. The order is already paid by the time
	 * this runs, so the only work left is the same tidying up `submitOrder`
	 * does for the manual methods.
	 */
	function onPaymentComplete(result) {

		addNotification({
			type: result?.needs_review ? 'warning' : 'success',
			title: result?.needs_review ? 'Payment received - under review' : 'Payment received',
			content: result?.message || '',
		});

		resetCartItems();
		setcartToggle(!cartToggle);

		sendMetaEvent({ event: 'Purchase' });

		if (checkoutDataRef.current?.subscription?.enable) {
			sendMetaEvent({ event: 'Subscribe' });
		}

		const hash = result?.order_hash || orderDataRef.current?.order_hash;

		if (hash) {
			router.push(`/thank-you/${hash}`);
		}
	}


	function submitOrder() {


		if (readyToSubmitOrder?.error) {
			addNotification({ type: 'error', title: readyToSubmitOrder?.message, content: "" })

			return;

		}



		setloading(true);

		checkoutData.status = 'pending';

		var postData = JSON.stringify(checkoutData);





		var url = serverUrl + "wp-json/combo-store/v2/create_order";


		var headers = {
			'Content-Type': 'application/json',

		}


		fetch(url, {
			method: "POST",
			headers: headers,
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var order_id = res?.order_id;
						var order_hash = res?.order_hash;
						var status = res?.status;
						var message = res?.message;

						if (status == 'success') {
							addNotification({ type: 'success', title: 'Order Created', content: message })
							resetCartItems();
							setcartToggle(!cartToggle)

							router.push(`/thank-you/${order_hash}`);


						} else {
							addNotification({ type: 'error', title: 'Creating order failed', content: message })
						}

						setloading(false);

						sendMetaEvent({ event: 'Purchase' })

						if (checkoutData?.subscription?.enable) {
							sendMetaEvent({ event: 'Subscribe' })

						}

						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}
	function find_shipping_methods(prams) {


		setloading(true);


		var postData = JSON.stringify(prams);





		var url = serverUrl + "wp-json/combo-store/v2/find_shipping_methods";


		var headers = {
			'Content-Type': 'application/json',

		}


		fetch(url, {
			method: "POST",
			headers: headers,
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var methods = res?.methods;

						console.log(res);



						setshippingMethods(methods)

						setloading(false);


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}



	function create_order(checkoutData) {



		if (readyToSubmitOrder?.error) {
			return;
		}



		if (orderData?.order_id) {
			return;
		}



		//setloading(true);




		var postData = JSON.stringify(checkoutData);




		var url = serverUrl + "wp-json/combo-store/v2/create_order";


		var headers = {
			'Content-Type': 'application/json',

		}


		fetch(url, {
			method: "POST",
			headers: headers,
			body: postData,
			keepalive: true,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var order_id = res?.order_id;
						var order_hash = res?.order_hash;
						var status = res?.status;
						var message = res?.message;



						setorderData(res)

						if (status == 'success') {
							//addNotification({ type: 'success', title: 'Order Created #1', content: message })
							//resetCartItems();
							//setcartToggle(!cartToggle)

							//router.push(`/thank-you/${order_hash}`);


						} else {
							//addNotification({ type: 'error', title: 'Creating order failed', content: message })
						}

						//setloading(false);

						//sendMetaEvent({ event: 'Purchase' })

						if (checkoutData?.subscription?.enable) {
							//sendMetaEvent({ event: 'Subscribe' })

						}

						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}
	function update_order() {


		setloading(true);

		checkoutData.id = orderData?.order_id;
		checkoutData.status = 'pending';

		var postData = JSON.stringify(checkoutData);




		var url = serverUrl + "wp-json/combo-store/v2/update_order";


		var headers = {
			'Content-Type': 'application/json',

		}


		fetch(url, {
			method: "POST",
			headers: headers,
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var order_id = res?.order_id;
						var order_hash = res?.order_hash;
						var status = res?.status;
						var message = res?.message;

						if (status == 'success') {
							addNotification({ type: 'success', title: 'Order Created', content: message })
							resetCartItems();
							setcartToggle(!cartToggle)

							router.push(`/thank-you/${order_hash}`);


						} else {
							addNotification({ type: 'error', title: 'Creating order failed', content: message })
						}

						setloading(false);

						sendMetaEvent({ event: 'Purchase' })

						if (checkoutData?.subscription?.enable) {
							sendMetaEvent({ event: 'Subscribe' })

						}

						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}

	const sendMetaEvent = async (prams) => {

		var eventName = prams?.event

		const eventId = window.crypto.randomUUID();




		// 1️⃣ Browser Pixel Event
		if (window.fbq) {
			window.fbq("track", eventName, {
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
				event_name: eventName,
				event_id: eventId,
				value: cartTotalPay,
			}),
		});
	};


	return (
		<div className="overflow-y-auto">


			<div className="p-4 flex flex-col gap-3">


				<div className="flex justify-between items-center">

					<div className="text-lg">Billing details</div>

					{loading && (

						<div className="bg-[#1b0e9f] px-2 py-2 rounded-sm"><Spinner /></div>

					)}

				</div>



				<div className="grid grid-cols-1 gap-5">



					<div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Your Name *</label>
							<input type="text" className="cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600" value={checkoutData?.billing_name} placeholder="" onChange={ev => {
								var value = ev.target.value;

								setcheckoutData({ ...checkoutData, billing_name: value })

							}} />
						</div>
					</div>


				</div>


				<div className="grid grid-cols-2 gap-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="">Phone</label>
						<input type="text" className="cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600" value={checkoutData?.billing_phone} placeholder="" onChange={ev => {
							var value = ev.target.value;



							setcheckoutData({ ...checkoutData, billing_phone: value })

						}} />
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="">Email</label>
						<input type="text" className="cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600" value={checkoutData?.billing_email} placeholder="" onChange={ev => {
							var value = ev.target.value;

							setcheckoutData({ ...checkoutData, billing_email: value })

						}} />
					</div>


				</div>


				<div className="flex flex-col gap-2">
					<label htmlFor="">Address</label>
					<textarea type="text" className="cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600" value={checkoutData?.billing_address} placeholder="House number and street name" onChange={ev => {
						var value = ev.target.value;

						setcheckoutData({ ...checkoutData, billing_address: value })




					}} />
				</div>



				<div className="grid grid-cols-2 gap-5">
					<div className="flex flex-col gap-2">
						<label htmlFor="">Country</label>

						{Object.entries(countriesList).length > 0 && (
							<DropDown allowReset={false} multiple={false} labelClass="!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid !border-gray-600 !shadow-none !outline-none focus:border-0" value={checkoutData?.billing_country ?? defaultCountry} options={countriesList} label={countriesList[checkoutData?.billing_country]?.label ? countriesList[checkoutData?.billing_country]?.label : `Choose Country`} onOptionsChoose={(args) => {

								setcheckoutData({ ...checkoutData, billing_country: args?.value, billing_city: null })
							}} />
						)}

					</div>




					<div className="flex flex-col gap-2">
						<label htmlFor="">City</label>

						{Object.entries(statesList).length > 0 && (
							<DropDown allowReset={false} multiple={false} labelClass="!shadow-none cursor-pointer px-2 py-1 rounded-sm w-full !border-2 border-solid !border-gray-600 !shadow-none !outline-none focus:border-0" value={checkoutData?.billing_city} options={statesList} label={statesList[checkoutData?.billing_city]?.label ? statesList[checkoutData?.billing_city]?.label : `Choose City`} onOptionsChoose={(args) => {

								setcheckoutData({ ...checkoutData, billing_city: args?.value })
							}} />
						)}

						{Object.entries(statesList).length == 0 && (

							<DropDown allowReset={false} multiple={false} value={null} options={statesList} label={`Choose City`} onOptionsChoose={(args) => {

								//setcheckoutData({ ...checkoutData, billing_city: args?.value })
							}} />
						)}

					</div>




				</div>




				<div className="flex flex-col gap-2">
					<label htmlFor="">Order Notes</label>
					<textarea name="" id="" className="cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600" value={checkoutData?.order_note} placeholder="Notes about your order, e.g. special notes for delivery." onChange={ev => {
						var value = ev.target.value;
						setcheckoutData({ ...checkoutData, order_note: value })
					}}></textarea>
				</div>

			</div>




			<div className="px-4">
				<ToggleContent isOpen={false} labelIcon={``} iconPosition={`right`} title={"Delivery Location"} headerClass={`  mb-2 rounded-sm   border-2 border-gray-400 bg-gray-300  cursor-pointer px-4 py-2 flex items-center gap-2`} headerTitleClass={``} contentClass={`bg-white`}>


					{userDataX?.delivery_location && (
						<div className="p-4 flex flex-col gap-4">
							<div className="text-lg">Delivery Location</div>
							{/* <LocationPicker markerDraggable={true} latlng={userDataX?.delivery_location}
						onLocationSelect={(coords) => {
							setcheckoutData({ ...checkoutData, delivery_location: coords })
						}}
					/> */}
						</div>
					)}

					{!userDataX?.delivery_location && (
						<div className="p-4 flex flex-col gap-4">
							<div className="text-lg">Delivery Location</div>

							<LocationPicker markerDraggable={true}
								onLocationSelect={(coords) => {
									setcheckoutData({ ...checkoutData, delivery_location: coords })
								}}
							/>
						</div>
					)}


				</ToggleContent>
				<ToggleContent isOpen={false} labelIcon={``} iconPosition={`right`} title={"Ship to a different address?"} headerClass={`  mb-2 rounded-sm   border-2 border-gray-400 bg-gray-300  cursor-pointer px-4 py-2 flex items-center gap-2`} headerTitleClass={``} contentClass={`bg-white`}>
					<div className="p-4 flex flex-col gap-3">

						<div className="text-lg">Shipping details</div>

						<div className="grid grid-cols-1 gap-5">



							<div>
								<div className="flex flex-col gap-2">
									<label htmlFor="">Name *</label>
									<input type="text" value={checkoutData?.shipping_name} placeholder="" onChange={ev => {
										var value = ev.target.value;

										setcheckoutData({ ...checkoutData, shipping_name: value })



									}} />
								</div>
							</div>


						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="">Address</label>
							<textarea type="text" value={checkoutData?.shipping_address} placeholder="House number and street name" onChange={ev => {
								var value = ev.target.value;

								setcheckoutData({ ...checkoutData, shipping_address: value })




							}} />
						</div>

						{/* 
						<div className="flex flex-col gap-2">
							<label htmlFor="">Address 1</label>
							<input type="text" value={checkoutData?.shipping_address1} placeholder="House number and street name" onChange={ev => {
								var value = ev.target.value;

								setcheckoutData({ ...checkoutData, shipping_address1: value })





							}} />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="">Address 2</label>
							<input type="text" value={checkoutData?.shipping_address2} placeholder="Apartment, suite, unit, etc. (optional)" onChange={ev => {
								var value = ev.target.value;
								setcheckoutData({ ...checkoutData, shipping_address2: value })
							}} />
						</div> */}


						<div className="grid grid-cols-2 gap-5">
							<div className="flex flex-col gap-2">
								<label htmlFor="">Country</label>

								{Object.entries(countriesList).length > 0 && (
									<DropDown allowReset={false} multiple={false} value={checkoutData?.shipping_country ?? defaultCountry} options={countriesList} label={countriesList[checkoutData?.shipping_country]?.label ? countriesList[checkoutData?.shipping_country]?.label : `Choose Country`} onOptionsChoose={(args) => {

										setcheckoutData({ ...checkoutData, shipping_country: args?.value })
									}} />
								)}

							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="">City</label>

								{Object.entries(statesList).length > 0 && (
									<DropDown allowReset={false} multiple={false} value={checkoutData?.shipping_city} options={statesList} label={statesList[checkoutData?.shipping_city]?.label ? statesList[checkoutData?.shipping_city]?.label : `Choose City`} onOptionsChoose={(args) => {

										setcheckoutData({ ...checkoutData, shipping_city: args?.value })
									}} />
								)}

							</div>




						</div>


						<div className="grid grid-cols-1 gap-5">
							<div className="flex flex-col gap-2">
								<label htmlFor="">Phone</label>
								<input type="text" value={checkoutData?.shipping_phone} placeholder="" onChange={ev => {
									var value = ev.target.value;

									setcheckoutData({ ...checkoutData, shipping_phone: value })


								}} />
							</div>


						</div>



					</div>
				</ToggleContent>
				<ToggleContent isOpen={false} labelIcon={``} iconPosition={`right`} title={"Enable Subscription?"} headerClass={`  mb-2 rounded-sm   border-2 border-gray-400 bg-gray-300  cursor-pointer px-4 py-2 flex items-center gap-2`} headerTitleClass={``} contentClass={`bg-white`}>
					<div className="p-4 flex flex-col gap-4">

						<div className="flex cursor-pointer text-lg gap-3" >
							<div>
								{checkoutData.subscription.enable && (
									<IconSquareCheck />
								)}
								{!checkoutData.subscription.enable && (
									<IconSquare />
								)}
							</div>
							<div onClick={ev => {

								var subscription = { ...checkoutData.subscription }
								subscription.enable = !subscription.enable
								setcheckoutData({ ...checkoutData, subscription: subscription })
							}}>Enable Subscription?</div>

						</div>

						{checkoutData.subscription.enable && (

							<div className="flex flex-col gap-3">

								<div className="flex flex-col gap-2">
									<label htmlFor="">Interval</label>
									<select value={checkoutData?.subscription.interval} placeholder="" onChange={ev => {
										var value = ev.target.value;

										var subscription = { ...checkoutData.subscription }
										subscription.interval = value
										setcheckoutData({ ...checkoutData, subscription: subscription })

									}} >
										<option value={'day'}>Day</option>
										<option value={'week'}>Week</option>
										<option value={'month'}>Month</option>
										<option value={'year'}>Year</option>
									</select>

								</div>

								<div className="flex flex-col gap-2">
									<label htmlFor="">Count</label>
									<input type="number" value={checkoutData?.subscription.interval_count} placeholder="" onChange={ev => {
										var value = ev.target.value;

										var subscription = { ...checkoutData.subscription }
										subscription.interval_count = value
										setcheckoutData({ ...checkoutData, subscription: subscription })



									}} />
								</div>


								<div className="bg-[#9a90ff] p-2 rounded-sm">
									Your items will be shipped every <strong>{checkoutData?.subscription.interval_count} {checkoutData?.subscription.interval}</strong> from the date of your order. Enjoy the flexibility to cancel your subscription anytime—no questions asked!
								</div>

							</div>
						)}

					</div>
				</ToggleContent>




			</div>




			<div className="p-4 flex flex-col gap-4">
				<div className="text-lg flex gap-2">
					<div>Shipping Methods		</div>

					{loading && (
						<Spinner />
					)}

				</div>

				<div className="flex flex-col  flex-wrap gap-2">

					{shippingMethods.length == 0 && (

						<div className="italic text-sm">
							No shipping methods
						</div>

					)}

					{shippingMethods.length > 0 && (

						<>
							{shippingMethods.map(method => {

								var id = method?.id;
								var amount = parseFloat(method?.amount);

								//

								return (
									<div key={method?.id} className={`cursor-pointer p-2 rounded-sm border border-2 text-sm  ${checkoutData.shipping_method == id ? 'border-gray-600' : 'border-gray-200'}`} onClick={ev => {


										setcurrentshippingMethod(method)
										setcheckoutData({ ...checkoutData, shipping_method: id, shipping_amount: amount })
									}}>


										<div className="flex gap-2 items-center">







											<div className="flex flex-col gap-2">
												<div className="flex gap-2 items-center">
													<div>
														{checkoutData.shipping_method == id && (
															<IconCircleCheck size={16} />
														)}

														{checkoutData.shipping_method != id && (
															<IconCircleDashed size={16} />
														)}
													</div>
													<span>{method.name}</span>
													<span>-</span>
													<span>{wrapCurrency(method?.amount)}</span>
												</div>
												<div className="text-xs pl-6 italic">{method.description}</div>
											</div>

										</div>





									</div>
								)

							})}
						</>

					)}



				</div>










			</div>



			<div className="p-4 flex flex-col gap-4">
				<div className="text-lg">Payment Methods				</div>

				<div className="flex items-center flex-wrap gap-2">

					{gatewayList && (

						<>
							{Object.entries(gatewayList).map(([key, method]) => {

								var enable = method?.enable ?? false;

								if (enable) {
									return (
										<div key={key} className={`flex items-center cursor-pointer gap-2 p-2 rounded-sm border border-2 text-sm  ${checkoutData.payment_method == key ? 'border-gray-600' : 'border-gray-200'}`} onClick={ev => {
											setcheckoutData({ ...checkoutData, payment_method: key })
										}}>





											{checkoutData.payment_method == key && (
												<IconCircleCheck size={16} />
											)}

											{checkoutData.payment_method != key && (
												<IconCircleDashed size={16} />
											)}

											{/* A gateway the store knows about but this list has no
												  label for would otherwise render as a blank tile. */}
											<div>{paymentGatewaysArgs[key]?.label ?? method?.label ?? key}</div>

										</div>
									)

								}



							})}
						</>

					)}



				</div>





				{readyToSubmitOrder?.error === true && (
					<div className="text-red-500">{contactAdded?.message}</div>
				)}
				{readyToSubmitOrder?.error === false && (
					<div className="">


						{checkoutData.payment_method == "paypal" && (
							<div className="flex flex-col gap-3">

								{/* No Submit Order button here on purpose: approving in
									  PayPal is the submit. The order is created when the
									  buyer clicks a PayPal button, and the server marks it
									  paid on capture. */}
								<PayPalCheckoutButton
									serverUrl={serverUrl}
									config={paypalConfig}
									total={checkoutData?.total_amount}
									currency={checkoutData?.currency ?? currency}
									ensureOrder={() => ensureOrderForPayment('paypal')}
									onPaid={onPaymentComplete}
									onError={(message) => addNotification({ type: 'error', title: 'PayPal', content: message })}
								/>

							</div>
						)}

						{checkoutData.payment_method == "stripe" && (
							<div className="flex flex-col gap-3">

								{/* No Submit Order button here on purpose, as with PayPal:
									  paying at Stripe is the submit. The order is created
									  when the buyer clicks, and the callback route - or the
									  webhook, if they close the tab - marks it paid once
									  Stripe confirms the payment. */}
								<StripeCheckoutButton
									total={checkoutData?.total_amount}
									currency={currencySymbole}
									config={stripeConfig}
									orderCurrency={checkoutData?.currency ?? currency}
									ensureOrder={() => ensureOrderForPayment('stripe')}
									onError={(message) => addNotification({ type: 'error', title: 'Stripe', content: message })}
								/>

							</div>
						)}

						{checkoutData.payment_method == "aamarpay" && (
							<div className="flex flex-col gap-3">

								{/* No Submit Order button here on purpose, as with PayPal:
									  paying at aamarPay is the submit. The order is created
									  when the buyer clicks, and the callback route marks it
									  paid once aamarPay confirms the payment. */}
								<AamarPayCheckoutButton
									total={checkoutData?.total_amount}
									currency={currencySymbole}
									ensureOrder={() => ensureOrderForPayment('aamarpay')}
									onError={(message) => addNotification({ type: 'error', title: 'aamarPay', content: message })}
								/>

							</div>
						)}

						{checkoutData.payment_method == "bank_transfer" && (
							<div className="flex flex-col gap-3">

								<div className="font-bold">Total Amount to pay: {wrapCurrency(cartTotalPay)}</div>

								{paymentGateways?.bank_transfer?.accounts && (

									<>
										{paymentGateways?.bank_transfer?.accounts?.map((method, key) => {

											return (
												<div key={method?.value} className={`flex flex-col gap-2  gap-3 p-2 rounded-sm border border-2 text-sm  ${checkoutData.payment_method == key ? 'border-gray-600' : 'border-gray-200'}`} onClick={ev => {
													//setcheckoutData({ ...checkoutData, payment_method: key })
												}}>




													<div>Bank name: {method?.bankName}</div>
													<div>Account number: {method?.accountNumber}</div>
													<div>Branch: {method?.branch}</div>
													<div>Account type: {method?.accountType}</div>
													<div>SWIFT code: {method?.swiftCode}</div>
													<div>Routing number: {method?.routingNumber}</div>

												</div>
											)

										})}
									</>
								)}


								<div className="flex flex-col gap-2">
									<label htmlFor="">Upload Receipt</label>
									<UploadMedia onUploadComplete={(medias) => {


										var media = medias[0];
										setcheckoutData({ ...checkoutData, bank_recipt: media })
										//fetchPosts();

										//fetchPosts();
									}} />
								</div>

								{checkoutData?.bank_recipt && (
									<div className="flex flex-col gap-2 ">

										<Image className="border p-2 rounded-sm" unoptimized width={200} height={200} src={checkoutData?.bank_recipt?.url} alt="Receipt" />

										<div className="bg-blue-800 justify-center flex gap-3 cursor-pointer py-3 px-4 text-center rounded-sm text-white" onClick={ev => {
											submitOrder()
										}}>

											<div>Submit Order ({wrapCurrency(cartTotalPay)})</div>

											{loading && (
												<Spinner />
											)}
										</div>
									</div>
								)}


								<div className="text-sm">
									{paymentGateways[checkoutData.payment_method]?.description}
								</div>



							</div>
						)}


						{checkoutData.payment_method == "bkash" && (
							<div>

								{JSON.stringify(orderData)}


								{/* <BkashButton amount={checkoutData?.total_amount} orderId={checkoutData?.order_id} /> */}
								<BkashCheckoutButton
									orderId={orderData?.order_id}
									total={checkoutData?.total_amount}
									onPaymentSuccess={(payment) => {


										// clearCart();
										// closeCart();
									}}
								/>

							</div>
						)}
						{(checkoutData.payment_method == "bkashPersonal" || checkoutData.payment_method == "nagadPersonal" || checkoutData.payment_method == "roketPersonal") && (
							<div className="flex flex-col gap-5">

								<div className="flex flex-col gap-2">
									<label htmlFor="">Transaction ID</label>
									<input type="text" placeholder="BAF8K69P0Z" value={checkoutData?.transaction_id} onChange={ev => {
										var value = ev.target.value;

										setcheckoutData({ ...checkoutData, transaction_id: value })



									}} />
								</div>
								<div className="">
									{paymentGateways[checkoutData.payment_method]?.description}
								</div>
								<div className="font-bold">
									Send Money: {paymentGateways[checkoutData.payment_method]?.phone_number}
								</div>
								<div className="text-xs">

									{checkoutData.payment_method == "bkashPersonal" && (
										<ul className="list-disc list-inside">
											<li>
												Open and log in to your bKash App.
											</li>
											<li>
												Tap on the Send Money option from the home screen.Enter the recipient’s mobile number {paymentGateways[checkoutData.payment_method]?.phone_number}.
											</li>
											<li>
												Type the amount {wrapCurrency(cartTotalPay)} and a reference (optional).
											</li>
											<li>
												Tap the arrow icon, enter your bKash PIN, and tap and hold to confirm the transaction.
											</li>
										</ul>
									)}
									{checkoutData.payment_method == "nagadPersonal" && (
										<ul className="list-disc list-inside">
											<li>
												Open and log in to your Nagad App.
											</li>
											<li>
												Tap on the Send Money option from the home screen.Enter the recipient’s mobile number {paymentGateways[checkoutData.payment_method]?.phone_number}.
											</li>
											<li>
												Type the amount {wrapCurrency(cartTotalPay)} and a reference (optional).
											</li>
											<li>
												Tap the arrow icon, enter your Nagad PIN, and tap and hold to confirm the transaction.
											</li>
										</ul>
									)}
									{checkoutData.payment_method == "roketPersonal" && (
										<ul className="list-disc list-inside">
											<li>
												Open and log in to your Roket App.
											</li>
											<li>
												Tap on the Send Money option from the home screen.Enter the recipient’s mobile number {paymentGateways[checkoutData.payment_method]?.phone_number}.
											</li>
											<li>
												Type the amount {wrapCurrency(cartTotalPay)} and a reference (optional).
											</li>
											<li>
												Tap the arrow icon, enter your Roket PIN, and tap and hold to confirm the transaction.
											</li>
										</ul>
									)}








								</div>


								<div className="bg-blue-800 justify-center flex gap-3 cursor-pointer py-3 px-4 text-center rounded-sm text-white" onClick={ev => {
									submitOrder()
								}}>

									<div>Submit Order ({wrapCurrency(cartTotalPay)})</div>

									{loading && (
										<Spinner />
									)}
								</div>

							</div>
						)}



						{checkoutData.payment_method == "nagad" && (
							<div>
								<NagadCheckoutButton
									cartItems={[]}
									totalAmount={checkoutData?.total_amount}
								/>

							</div>
						)}

						{checkoutData.payment_method == "roket" && (
							<div>						roket</div>
						)}

						{checkoutData.payment_method == "sslcommerz" && (
							<div>


								sslcommerz</div>
						)}








						{checkoutData.payment_method == "cod" && (
							<div className="flex flex-col gap-3">




								<div className="font-bold italaic">
									Thank you choosing cash on delivery, our team will call you to confirm order.
								</div>
								<div className="bg-blue-800 justify-center flex gap-3 cursor-pointer py-3 px-4 text-center rounded-sm text-white" onClick={ev => {
									submitOrder()
								}}>

									<div>Submit Order ({wrapCurrency(cartTotalPay)})</div>

									{loading && (
										<Spinner />
									)}
								</div>
							</div>
						)}


					</div>
				)}










			</div>







		</div>
	);
};



export default CheckoutView;
