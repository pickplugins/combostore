"use client"
import React from "react";
import { tablerIcon } from "@/components/icons/TablerIcon";
import Link from "next/link";


import { useState, useEffect, useContext, useRef } from "react";
import { IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconTrash, IconBasketCheck, IconChevronUp, IconChevronDown, IconCircleCheck, IconShoppingCartCancel, IconSquare, IconSquareCheck, IconCircleDashed, IconInfoCircle, IconAlertTriangle, IconLock, IconMapPin, IconTruckDelivery, IconRepeat, IconBuildingBank } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import Image from "next/image";
import { getSettings } from "@/lib/getSettings";

import ToggleContent from "../../../components/ToggleContent";
import DropDown from "../../../components/DropDown";
import dynamic from "next/dynamic";
/* The map (Google Maps) loads only when the "Delivery location" panel shows it: it was in every shop page's JavaScript. */
const LocationPicker = dynamic(() => import("../../../components/LocationPicker"), { ssr: false });
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
import EpsCheckoutButton from "../../../components/shop-elements/EpsCheckoutButton";
import { getPayPalConfig } from "../../../lib/paypal";
import { getStripeConfig } from "../../../lib/stripe";
import { getEpsConfig } from "../../../lib/eps";
import { getAamarPayConfig } from "../../../lib/aamarpay";
import { getBkashConfig } from "../../../lib/bkash";
import { getNagadConfig } from "../../../lib/nagad";
import { loadCheckoutDraft, saveCheckoutDraft, clearCheckoutDraft } from "../../../lib/checkoutDraft";
import { trackMetaEvent } from "../../../lib/sendMetaEvent";




/*
	Presentational pieces for the checkout form. They live outside the
	component on purpose: defined inside it they would be new components on
	every render, and every keystroke would remount the inputs and drop focus.
*/
const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15";

const dropDownClass = "w-full flex items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-xs cursor-pointer transition-colors hover:border-gray-400";

const primaryButtonClass = "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const toggleHeaderClass = "w-full flex items-center justify-between gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer select-none";

function CheckoutSection({ step, title, aside, children }) {
	return (
		<section className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
			<div className="mb-4 flex items-center justify-between gap-3">
				<h3 className="flex items-center gap-2.5 text-base font-semibold text-gray-900">
					{step && (
						<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1b0e9f] text-xs font-bold text-white">{step}</span>
					)}
					{title}
				</h3>
				{aside}
			</div>
			<div className="flex flex-col gap-4">
				{children}
			</div>
		</section>
	);
}

function Field({ label, htmlFor, required, hint, children }) {
	return (
		<div className="flex flex-col gap-1.5">
			{label && (
				<label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
					{label}
					{required && <span className="ml-0.5 text-red-500">*</span>}
				</label>
			)}
			{children}
			{hint && <p className="text-xs text-gray-500">{hint}</p>}
		</div>
	);
}

/* A selectable card that behaves like a radio button for keyboard and
	 screen-reader users as well as for the mouse. */
function OptionTile({ selected, onSelect, children, className = "" }) {
	return (
		<div
			role="radio"
			aria-checked={selected}
			tabIndex={0}
			onClick={onSelect}
			onKeyDown={ev => {
				if (ev.key !== 'Enter' && ev.key !== ' ') return;
				ev.preventDefault();
				onSelect();
			}}
			className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/30 ${selected ? 'border-[#1b0e9f] bg-[#1b0e9f]/5 ring-1 ring-[#1b0e9f]' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'} ${className}`}
		>
			<span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${selected ? 'border-[#1b0e9f]' : 'border-gray-300'}`}>
				{selected && <span className="h-2 w-2 rounded-full bg-[#1b0e9f]" />}
			</span>
			{children}
		</div>
	);
}

function Notice({ tone = "info", children }) {
	const tones = {
		info: "border-blue-200 bg-blue-50 text-blue-800",
		warning: "border-amber-200 bg-amber-50 text-amber-800",
		error: "border-red-200 bg-red-50 text-red-700",
		muted: "border-gray-200 bg-gray-50 text-gray-600",
	};
	const Icon = tone === "info" || tone === "muted" ? IconInfoCircle : IconAlertTriangle;

	return (
		<div className={`flex items-start gap-2 rounded-lg border px-3 py-2.5 text-sm ${tones[tone] ?? tones.info}`}>
			<Icon size={18} className="mt-px shrink-0" />
			<div className="min-w-0">{children}</div>
		</div>
	);
}

function SubmitOrderButton({ loading, amount, onClick }) {
	return (
		<button type="button" className={primaryButtonClass} disabled={loading} onClick={onClick}>
			{loading ? <Spinner /> : <IconLock size={16} />}
			<span>Place Order · {amount}</span>
		</button>
	);
}

/* The personal-wallet methods differ only in the app's name. */
const personalWalletNames = {
	bkashPersonal: 'bKash',
	nagadPersonal: 'Nagad',
	roketPersonal: 'Roket',
};


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

	const cartOptions = props?.cartOptions;

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

	const IconX = tablerIcon(icon);


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
		Stripe answers for itself too: its secret key is stripped from the
		settings this page is served, so the dashboard's switch alone cannot tell
		whether a card payment would actually work. The tile is shown when both
		agree - the store enabled it and the server has a key.
	*/
	const [stripeConfig, setstripeConfig] = useState(null);
	/*
		EPS is the same case as Stripe: the store turns it on in the dashboard,
		but its five credentials are stripped from what this page is served, so
		the switch alone cannot tell whether a payment would get anywhere. The
		tile is shown when both agree.
	*/
	const [epsConfig, setepsConfig] = useState(null);
	/*
		And aamarPay, which is the same case again: the switch is in the
		settings blob but the browser is not shown the signature key behind it.
	*/
	const [aamarpayConfig, setaamarpayConfig] = useState(null);
	/* bKash and Nagad are the same case again. */
	const [bkashConfig, setbkashConfig] = useState(null);
	const [nagadConfig, setnagadConfig] = useState(null);
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
		"payment_method": "cod",
		"payment_status": "pending",
		"transaction_id": "",
		"order_note": "",
		"shipping_method": "",
		"subscription": { enable: false, interval: "month", interval_count: 1 },


		"billing_name": userDataX?.name,
		"billing_address1": userDataX?.billing_address1,
		"billing_address2": userDataX?.billing_address2,
		"billing_address": [userDataX?.billing_address1, userDataX?.billing_address2].filter(Boolean).join(" "),
		"billing_phone": userDataX?.phone,
		"billing_email": userDataX?.email,
		"billing_country": userDataX?.billing_country ?? defaultCountry,
		"billing_city": userDataX?.billing_city ?? 'BD-55',



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
		/* No method chosen yet (or none on offer) is free shipping, not NaN:
			 NaN here lands in the store's shippingCost and turns cartTotalPay,
			 and every total built on it, into "NaN". */
		var shippingPrice = parseFloat(currentshippingMethod?.amount) || 0

		/* Only the store's shipping cost changes here. The cart prices it into
			 cartTotalPay, and the effect below copies the settled figures onto
			 the order. Building the total here from cartTotalPay added shipping a
			 second time whenever cartTotalPay already held a shipping cost
			 (220 + 20 = 240), and writing cartTotalPay into cartTotal replaced
			 the items subtotal with the amount to pay. */
		setshippingCost(shippingPrice)


	}, [checkoutData?.shipping_method]);


	/*
		The order's amounts follow the same figures the order summary shows:
		items subtotal, shipping actually charged, and the amount to pay.
	*/
	useEffect(() => {

		var subtotal = parseFloat(cartTotal) || 0;
		var shipping = cartDiscount?.freeShipping ? 0 : (parseFloat(shippingCost) || 0);
		var total = parseFloat(cartTotalPay) || 0;

		setcheckoutData((previous) => (
			previous?.subtotal_amount === subtotal && previous?.shipping_amount === shipping && previous?.total_amount === total
				? previous
				: { ...previous, subtotal_amount: subtotal, shipping_amount: shipping, total_amount: total }
		));

	}, [cartTotal, cartTotalPay, shippingCost, cartDiscount?.freeShipping]);


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

		if (!city || city == null || city == undefined) {

			return;

		}

		prams.country = country
		prams.city = city




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


	/*
		Put back what was typed before leaving checkout. This has to stay below
		the effects above: two of them replace checkoutData with the copy from
		this first render, which would wipe anything restored ahead of them.

		It runs in an effect, not in the useState above, because the server has
		no localStorage and the first render has to match what it sent.
	*/
	const [draftLoaded, setdraftLoaded] = useState(false);
	const orderPlaced = useRef(false);

	useEffect(() => {
		const draft = loadCheckoutDraft(userDataX?.id);

		setcheckoutData((previous) => ({ ...previous, ...draft }));
		setdraftLoaded(true);
	}, []);

	useEffect(() => {
		if (draftLoaded && !orderPlaced.current) {
			saveCheckoutDraft(userDataX?.id, checkoutData);
		}
	}, [draftLoaded, checkoutData]);


	/* Stops saving as well as clearing: emptying the cart can still update
		 checkoutData, and that must not write the details back. */
	function discardDraft() {
		orderPlaced.current = true;
		clearCheckoutDraft();
	}














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

		getEpsConfig()
			.then(config => {
				if (!cancelled) {
					setepsConfig(config);
				}
			})
			.catch(() => {
				/* EPS simply does not appear; the other methods still work. */
				if (!cancelled) {
					setepsConfig(null);
				}
			});

		getAamarPayConfig()
			.then(config => {
				if (!cancelled) {
					setaamarpayConfig(config);
				}
			})
			.catch(() => {
				/* aamarPay simply does not appear; the rest still work. */
				if (!cancelled) {
					setaamarpayConfig(null);
				}
			});

		getBkashConfig()
			.then(config => {
				if (!cancelled) {
					setbkashConfig(config);
				}
			})
			.catch(() => {
				/* bKash simply does not appear; the rest still work. */
				if (!cancelled) {
					setbkashConfig(null);
				}
			});

		getNagadConfig()
			.then(config => {
				if (!cancelled) {
					setnagadConfig(config);
				}
			})
			.catch(() => {
				/* Nagad simply does not appear; the rest still work. */
				if (!cancelled) {
					setnagadConfig(null);
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
		button and no further. EPS is dropped for the same reason, and also for
		an order in a currency it cannot settle: EPS charges in taka and takes
		no currency field, so offering it would mean charging the figure as
		though it were taka.
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

		if (list.aamarpay && !aamarpayConfig?.enabled) {
			delete list.aamarpay;
		}

		/* Taka only, for the same reason as EPS below. */
		const inTaka = String(checkoutData?.currency ?? currency ?? 'BDT').toUpperCase() === 'BDT';

		if (list.bkash && (!bkashConfig?.enabled || !inTaka)) {
			delete list.bkash;
		}

		if (list.nagad && (!nagadConfig?.enabled || !inTaka)) {
			delete list.nagad;
		}

		if (list.eps) {
			const settlesHere = String(checkoutData?.currency ?? currency ?? 'BDT').toUpperCase()
				=== String(epsConfig?.currency || 'BDT').toUpperCase();

			if (!epsConfig?.enabled || !settlesHere) {
				delete list.eps;
			}
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

		discardDraft();
		resetCartItems();
		setcartToggle(!cartToggle);

		const paidOrderId = result?.order_id ?? orderDataRef.current?.order_id ?? orderDataRef.current?.id;

		sendMetaEvent({ event: 'Purchase', orderId: paidOrderId });

		if (checkoutDataRef.current?.subscription?.enable) {
			sendMetaEvent({ event: 'Subscribe', orderId: paidOrderId });
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
							discardDraft();
							addNotification({ type: 'success', title: 'Order Created', content: message })
							resetCartItems();
							setcartToggle(!cartToggle)

							/* Only a created order is a purchase; the order id makes the event id, so a repeat report is merged. */
							sendMetaEvent({ event: 'Purchase', orderId: order_id })

							if (checkoutData?.subscription?.enable) {
								sendMetaEvent({ event: 'Subscribe', orderId: order_id })
							}

							router.push(`/thank-you/${order_hash}`);


						} else {
							addNotification({ type: 'error', title: 'Creating order failed', content: message })
						}

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
				setloading(false);
			});

		setloading(false);

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
							discardDraft();
							addNotification({ type: 'success', title: 'Order Created', content: message })
							resetCartItems();
							setcartToggle(!cartToggle)

							/* Only a created order is a purchase; the order id makes the event id, so a repeat report is merged. */
							sendMetaEvent({ event: 'Purchase', orderId: order_id })

							if (checkoutData?.subscription?.enable) {
								sendMetaEvent({ event: 'Subscribe', orderId: order_id })
							}

							router.push(`/thank-you/${order_hash}`);


						} else {
							addNotification({ type: 'error', title: 'Creating order failed', content: message })
						}

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

	/*
		Purchase / Subscribe to Meta, from the browser and the server at once
		(lib/sendMetaEvent.js). The buyer's details go with it - the server
		hashes them - because email, phone, name and city are what Meta
		matches the sale to an ad click on. The event id is built from the
		order id, so the thank-you page reporting the same order is merged.
	*/
	const sendMetaEvent = (prams) => {

		const eventName = prams?.event;
		const orderId = prams?.orderId;
		const buyer = checkoutDataRef.current ?? checkoutData;
		const items = cartItems ?? [];
		const orderCurrency = String(buyer?.currency ?? currency ?? 'BDT').toUpperCase();

		const contents = items.map(item => ({
			id: String(item?.id ?? item?.product_id ?? ''),
			quantity: parseInt(item?.quantity) || 1,
			item_price: parseFloat(item?.price) || 0,
		})).filter(item => item.id);

		trackMetaEvent({
			eventName,
			eventId: orderId ? `${String(eventName).toLowerCase()}-${orderId}` : undefined,
			once: Boolean(orderId),
			customData: {
				value: Number(cartTotalPay) || 0,
				currency: /^[A-Z]{3}$/.test(orderCurrency) ? orderCurrency : 'BDT',
				content_type: 'product',
				content_ids: contents.map(item => item.id),
				contents,
				num_items: contents.reduce((sum, item) => sum + item.quantity, 0),
				...(orderId ? { order_id: String(orderId) } : {}),
			},
			user: {
				email: buyer?.billing_email,
				phone: buyer?.billing_phone,
				name: buyer?.billing_name,
				city: statesList?.[buyer?.billing_city]?.label,
				country: buyer?.billing_country,
				external_id: buyer?.userid ?? userDataX?.id,
			},
		});
	};


	const enabledGateways = Object.entries(gatewayList || {}).filter(([, method]) => method?.enable ?? false);
	const selectedGateway = paymentGateways?.[checkoutData.payment_method];
	const walletName = personalWalletNames[checkoutData.payment_method];
	const orderTotalLabel = wrapCurrency(cartTotalPay);
	const sectionSteps = { billing: 1, shipping: 2, payment: cartOptions?.shippingMethods ? 3 : 2 };

	/*
		The summary's lines, priced the same way CartView arrives at
		cartTotalPay - items, plus shipping unless a discount made it free,
		less the coupon and any automatic discounts - so the rows add up to the
		total shown under them.
	*/
	const summarySubtotal = (cartItems ?? []).reduce((sum, item) => sum + (parseInt(item?.price) || 0) * (parseInt(item?.quantity) || 0), 0);
	const summaryShippingFree = cartDiscount?.freeShipping === true;
	const summaryShipping = parseFloat(shippingCost) || 0;
	const summaryCoupon = coupons?.applied ? (parseFloat(coupons?.discountAmount) || 0) : 0;
	const summaryDiscountLines = (cartDiscount?.lines ?? []).filter(line => (parseFloat(line?.amount) || 0) > 0);
	const summaryAutoDiscount = parseFloat(cartDiscount?.amount) || 0;

	const countryLabel = (code) => countriesList[code]?.label ?? 'Choose Country';
	const cityLabel = (code) => statesList[code]?.label ?? 'Choose City';

	return (
		<div className="overflow-y-auto bg-gray-50/60">

			<div className="flex flex-col gap-4 p-4">

				{/* ---------- Billing details ---------- */}
				<CheckoutSection
					step={sectionSteps.billing}
					title="Billing details"
					aside={loading && <span className="text-[#1b0e9f]"><Spinner /></span>}
				>

					<Field label="Full name" htmlFor="checkout-billing-name" required>
						<input id="checkout-billing-name" type="text" autoComplete="name" className={inputClass} value={checkoutData?.billing_name ?? ''} placeholder="John Doe" onChange={ev => {
							setcheckoutData({ ...checkoutData, billing_name: ev.target.value })
						}} />
					</Field>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<Field label="Phone" htmlFor="checkout-billing-phone" required>
							<input id="checkout-billing-phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} value={checkoutData?.billing_phone ?? ''} placeholder="01XXXXXXXXX" onChange={ev => {
								setcheckoutData({ ...checkoutData, billing_phone: ev.target.value })
							}} />
						</Field>
						<Field label="Email" htmlFor="checkout-billing-email" required>
							<input id="checkout-billing-email" type="email" inputMode="email" autoComplete="email" className={inputClass} value={checkoutData?.billing_email ?? ''} placeholder="you@example.com" onChange={ev => {
								setcheckoutData({ ...checkoutData, billing_email: ev.target.value })
							}} />
						</Field>
					</div>

					<Field label="Address" htmlFor="checkout-billing-address" required>
						<textarea id="checkout-billing-address" rows={2} autoComplete="street-address" className={`${inputClass} resize-y`} value={checkoutData?.billing_address ?? ''} placeholder="House number and street name" onChange={ev => {
							setcheckoutData({ ...checkoutData, billing_address: ev.target.value })
						}} />
					</Field>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<Field label="Country">
							{Object.entries(countriesList).length > 0 && (
								<DropDown allowReset={false} multiple={false} labelClass={dropDownClass} value={checkoutData?.billing_country ?? defaultCountry} options={countriesList} label={countryLabel(checkoutData?.billing_country)} onOptionsChoose={(args) => {
									setcheckoutData({ ...checkoutData, billing_country: args?.value, billing_city: null })
								}} />
							)}
						</Field>

						<Field label="City">
							{Object.entries(statesList).length > 0 ? (
								<DropDown allowReset={false} multiple={false} labelClass={dropDownClass} value={checkoutData?.billing_city} options={statesList} label={cityLabel(checkoutData?.billing_city)} onOptionsChoose={(args) => {
									setcheckoutData({ ...checkoutData, billing_city: args?.value })
								}} />
							) : (
								<DropDown allowReset={false} multiple={false} labelClass={dropDownClass} value={null} options={statesList} label="Choose City" onOptionsChoose={() => { }} />
							)}
						</Field>
					</div>

					<Field label="Order notes" htmlFor="checkout-order-note" hint="Optional">
						<textarea id="checkout-order-note" rows={2} className={`${inputClass} resize-y`} value={checkoutData?.order_note ?? ''} placeholder="Notes about your order, e.g. special notes for delivery." onChange={ev => {
							setcheckoutData({ ...checkoutData, order_note: ev.target.value })
						}} />
					</Field>

					{/* ---------- Optional extras ---------- */}
					{(cartOptions?.deliveryLocation || cartOptions?.shippingAddress || cartOptions?.orderSubscription) && (
						<div className="flex flex-col gap-2 border-t border-gray-100 pt-4">

							{cartOptions?.deliveryLocation && (
								<ToggleContent isOpen={false} labelIcon={<IconMapPin size={18} className="text-gray-500" />} iconPosition="right" title="Delivery location" headerClass={toggleHeaderClass} contentClass="mt-2 rounded-lg border border-gray-200 bg-white p-3">

									{userDataX?.delivery_location ? (
										<p className="text-sm text-gray-600">Your saved delivery location will be used for this order.</p>
									) : (
										<LocationPicker markerDraggable={true}
											onLocationSelect={(coords) => {
												setcheckoutData({ ...checkoutData, delivery_location: coords })
											}}
										/>
									)}

								</ToggleContent>
							)}

							{cartOptions?.shippingAddress && (
								<ToggleContent isOpen={false} labelIcon={<IconTruckDelivery size={18} className="text-gray-500" />} iconPosition="right" title="Ship to a different address?" headerClass={toggleHeaderClass} contentClass="mt-2 rounded-lg border border-gray-200 bg-white p-4">
									<div className="flex flex-col gap-4">

										<Field label="Full name" htmlFor="checkout-shipping-name" required>
											<input id="checkout-shipping-name" type="text" autoComplete="shipping name" className={inputClass} value={checkoutData?.shipping_name ?? ''} onChange={ev => {
												setcheckoutData({ ...checkoutData, shipping_name: ev.target.value })
											}} />
										</Field>

										<Field label="Phone" htmlFor="checkout-shipping-phone">
											<input id="checkout-shipping-phone" type="tel" inputMode="tel" autoComplete="shipping tel" className={inputClass} value={checkoutData?.shipping_phone ?? ''} onChange={ev => {
												setcheckoutData({ ...checkoutData, shipping_phone: ev.target.value })
											}} />
										</Field>

										<Field label="Address" htmlFor="checkout-shipping-address">
											<textarea id="checkout-shipping-address" rows={2} autoComplete="shipping street-address" className={`${inputClass} resize-y`} value={checkoutData?.shipping_address ?? ''} placeholder="House number and street name" onChange={ev => {
												setcheckoutData({ ...checkoutData, shipping_address: ev.target.value })
											}} />
										</Field>

										<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
											<Field label="Country">
												{Object.entries(countriesList).length > 0 && (
													<DropDown allowReset={false} multiple={false} labelClass={dropDownClass} value={checkoutData?.shipping_country ?? defaultCountry} options={countriesList} label={countryLabel(checkoutData?.shipping_country)} onOptionsChoose={(args) => {
														setcheckoutData({ ...checkoutData, shipping_country: args?.value })
													}} />
												)}
											</Field>
											<Field label="City">
												{Object.entries(statesList).length > 0 && (
													<DropDown allowReset={false} multiple={false} labelClass={dropDownClass} value={checkoutData?.shipping_city} options={statesList} label={cityLabel(checkoutData?.shipping_city)} onOptionsChoose={(args) => {
														setcheckoutData({ ...checkoutData, shipping_city: args?.value })
													}} />
												)}
											</Field>
										</div>

									</div>
								</ToggleContent>
							)}

							{cartOptions?.orderSubscription && (
								<ToggleContent isOpen={false} labelIcon={<IconRepeat size={18} className="text-gray-500" />} iconPosition="right" title="Subscribe & repeat this order?" headerClass={toggleHeaderClass} contentClass="mt-2 rounded-lg border border-gray-200 bg-white p-4">
									<div className="flex flex-col gap-4">

										<label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-800">
											<input type="checkbox" className="h-4 w-4 cursor-pointer accent-[#1b0e9f]" checked={!!checkoutData?.subscription?.enable} onChange={() => {
												var subscription = { ...checkoutData.subscription }
												subscription.enable = !subscription.enable
												setcheckoutData({ ...checkoutData, subscription: subscription })
											}} />
											Enable subscription
										</label>

										{checkoutData?.subscription?.enable && (
											<>
												<div className="grid grid-cols-2 gap-4">
													<Field label="Every" htmlFor="checkout-subscription-count">
														<input id="checkout-subscription-count" type="number" min={1} className={inputClass} value={checkoutData?.subscription.interval_count} onChange={ev => {
															var subscription = { ...checkoutData.subscription }
															subscription.interval_count = ev.target.value
															setcheckoutData({ ...checkoutData, subscription: subscription })
														}} />
													</Field>
													<Field label="Interval" htmlFor="checkout-subscription-interval">
														<select id="checkout-subscription-interval" className={`${inputClass} cursor-pointer`} value={checkoutData?.subscription.interval} onChange={ev => {
															var subscription = { ...checkoutData.subscription }
															subscription.interval = ev.target.value
															setcheckoutData({ ...checkoutData, subscription: subscription })
														}}>
															<option value={'day'}>Day</option>
															<option value={'week'}>Week</option>
															<option value={'month'}>Month</option>
															<option value={'year'}>Year</option>
														</select>
													</Field>
												</div>

												<Notice tone="info">
													Your items will be shipped every <strong>{checkoutData?.subscription.interval_count} {checkoutData?.subscription.interval}</strong> from the date of your order. Cancel anytime — no questions asked.
												</Notice>
											</>
										)}

									</div>
								</ToggleContent>
							)}

						</div>
					)}

				</CheckoutSection>


				{/* ---------- Shipping methods ---------- */}
				{cartOptions?.shippingMethods && (
					<CheckoutSection
						step={sectionSteps.shipping}
						title="Shipping method"
						aside={loading && <span className="text-[#1b0e9f]"><Spinner /></span>}
					>
						{shippingMethods.length == 0 ? (
							<Notice tone="muted">
								No shipping methods yet. Choose your country and city to see the available options.
							</Notice>
						) : (
							<div role="radiogroup" aria-label="Shipping method" className="flex flex-col gap-2">
								{shippingMethods.map(method => {
									var id = method?.id;
									var amount = parseFloat(method?.amount);

									return (
										<OptionTile key={id} selected={checkoutData.shipping_method == id} onSelect={() => {
											setcurrentshippingMethod(method)
											setcheckoutData({ ...checkoutData, shipping_method: id })
										}}>
											<div className="min-w-0 flex-1">
												<div className="font-medium text-gray-900">{method.name}</div>
												{method.description && (
													<div className="mt-0.5 text-xs text-gray-500">{method.description}</div>
												)}
											</div>
											<div className="shrink-0 font-semibold text-gray-900">{wrapCurrency(method?.amount)}</div>
										</OptionTile>
									)
								})}
							</div>
						)}
					</CheckoutSection>
				)}


				{/* ---------- Order summary ---------- */}
				{cartItems?.length > 0 && (
					<CheckoutSection title="Order summary" aside={<span className="text-xs text-gray-500">{cartItems.length} {cartItems.length == 1 ? 'item' : 'items'}</span>}>

						<ul className="flex flex-col divide-y divide-gray-100">
							{cartItems.map((item, i) => (
								<li key={`${item?.id ?? i}-${i}`} className="flex items-center gap-3 py-2.5 first:pt-0">
									<div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
										<Image className="h-full w-full object-cover" src={item?.thumbnail || '/thumb.png'} width={96} height={96} alt={item?.title ?? ''} />
										<span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-bl-lg bg-gray-800 px-1 text-[10px] font-semibold text-white">{item?.quantity}</span>
									</div>
									<div className="min-w-0 flex-1">
										<div className="truncate text-sm font-medium text-gray-900">{item?.title}</div>
										<div className="text-xs text-gray-500">{item?.quantity} × {wrapCurrency(item?.price)}</div>
									</div>
									<div className="shrink-0 text-sm font-medium text-gray-900">{wrapCurrency((parseInt(item?.price) || 0) * (parseInt(item?.quantity) || 0))}</div>
								</li>
							))}
						</ul>

						<dl className="flex flex-col gap-2 border-t border-gray-100 pt-3 text-sm">
							<div className="flex justify-between gap-3">
								<dt className="text-gray-600">Subtotal</dt>
								<dd className="font-medium text-gray-900">{wrapCurrency(summarySubtotal)}</dd>
							</div>

							<div className="flex justify-between gap-3">
								<dt className="text-gray-600">Shipping</dt>
								<dd className="font-medium text-gray-900">
									{summaryShippingFree ? (
										<span className="text-green-600">Free</span>
									) : summaryShipping > 0 ? (
										wrapCurrency(summaryShipping)
									) : (
										<span className="text-gray-400">{cartOptions?.shippingMethods && shippingMethods.length > 0 ? 'Choose a method' : '—'}</span>
									)}
								</dd>
							</div>

							{summaryCoupon > 0 && (
								<div className="flex justify-between gap-3">
									<dt className="text-gray-600">
										Coupon{coupons?.couponCode && <span className="ml-1.5 rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs uppercase text-gray-700">{coupons.couponCode}</span>}
									</dt>
									<dd className="font-medium text-green-600">−{wrapCurrency(summaryCoupon)}</dd>
								</div>
							)}

							{/* One row per rule when the extension says which ones
								  applied, otherwise the sum on its own. */}
							{summaryDiscountLines.length > 0 ? (
								summaryDiscountLines.map((line, i) => (
									<div key={line?.ruleId ?? i} className="flex justify-between gap-3">
										<dt className="text-gray-600">{line?.label || 'Discount'}</dt>
										<dd className="font-medium text-green-600">−{wrapCurrency(line.amount)}</dd>
									</div>
								))
							) : summaryAutoDiscount > 0 && (
								<div className="flex justify-between gap-3">
									<dt className="text-gray-600">Discount</dt>
									<dd className="font-medium text-green-600">−{wrapCurrency(summaryAutoDiscount)}</dd>
								</div>
							)}

							<div className="mt-1 flex items-baseline justify-between gap-3 border-t border-gray-200 pt-3">
								<dt className="text-base font-semibold text-gray-900">Total</dt>
								<dd className="text-lg font-bold text-gray-900">{orderTotalLabel}</dd>
							</div>
						</dl>

					</CheckoutSection>
				)}


				{/* ---------- Payment ---------- */}
				<CheckoutSection step={sectionSteps.payment} title="Payment">

					{/* Until the settings arrive there is nothing to list yet, which
						  is not the same as the store offering no way to pay. */}
					{!settings ? (
						<div className="flex items-center gap-2 text-sm text-gray-500"><Spinner /> Loading payment methods…</div>
					) : enabledGateways.length == 0 ? (
						<Notice tone="muted">No payment methods are available right now.</Notice>
					) : (
						<div role="radiogroup" aria-label="Payment method" className="flex flex-col gap-2">
							{/* One column: the checkout usually sits in the cart drawer,
								  where two columns cut gateway names off behind their logos. */}
							{enabledGateways.map(([key, method]) => (
								<OptionTile key={key} selected={checkoutData.payment_method == key} onSelect={() => {
									setcheckoutData({ ...checkoutData, payment_method: key })
								}}>
									{/* A gateway the store knows about but this list has no
										  label for would otherwise render as a blank tile. */}
									<span className="min-w-0 flex-1 truncate font-medium text-gray-900">{paymentGatewaysArgs[key]?.label ?? method?.label ?? key}</span>

									{method?.logo?.src && (
										<Image unoptimized src={method.logo.src} width={100} height={100} alt="" className="h-6 w-auto max-w-[72px] shrink-0 object-contain" />
									)}
								</OptionTile>
							))}
						</div>
					)}


					{readyToSubmitOrder?.error === true && (
						<Notice tone="warning">
							{readyToSubmitOrder?.message || contactAdded?.message || 'Please complete your details to continue.'}
						</Notice>
					)}

					{readyToSubmitOrder?.error === false && (
						<div className="flex flex-col gap-3 border-t border-gray-100 pt-4">

							{checkoutData.payment_method == "paypal" && (
								<>
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
								</>
							)}

							{checkoutData.payment_method == "stripe" && (
								<>
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
								</>
							)}

							{checkoutData.payment_method == "aamarpay" && (
								<>
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

									{paymentGateways?.aamarpay?.description && (
										<p className="text-sm text-gray-600">{paymentGateways.aamarpay.description}</p>
									)}

									{aamarpayConfig?.sandbox && (
										<Notice tone="warning">aamarPay is in sandbox mode — no real money will move.</Notice>
									)}
								</>
							)}

							{checkoutData.payment_method == "eps" && (
								<>
									{/* No Submit Order button here on purpose, as with
										  aamarPay: paying at EPS is the submit. The order is
										  created when the buyer clicks, and the callback route
										  marks it paid once EPS's status API confirms the
										  payment. */}
									<EpsCheckoutButton
										total={checkoutData?.total_amount}
										currency={currencySymbole}
										ensureOrder={() => ensureOrderForPayment('eps')}
										onError={(message) => addNotification({ type: 'error', title: 'EPS', content: message })}
									/>

									{paymentGateways?.eps?.description && (
										<p className="text-sm text-gray-600">{paymentGateways.eps.description}</p>
									)}

									{epsConfig?.sandbox && (
										<Notice tone="warning">EPS is in sandbox mode — no real money will move.</Notice>
									)}
								</>
							)}

							{checkoutData.payment_method == "bank_transfer" && (
								<>
									<div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2.5 text-sm">
										<span className="text-gray-600">Amount to transfer</span>
										<span className="text-base font-bold text-gray-900">{orderTotalLabel}</span>
									</div>

									{bankAccounts?.map((account, key) => {
										const rows = [
											['Bank', account?.bankName],
											['Account no.', account?.accountNumber],
											['Account type', account?.accountType],
											['Branch', account?.branch],
											['SWIFT', account?.swiftCode],
											['Routing no.', account?.routingNumber],
										].filter(([, value]) => value);

										return (
											<div key={account?.accountNumber ?? key} className="rounded-lg border border-gray-200 bg-white p-3">
												<div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
													<IconBuildingBank size={18} className="text-gray-500" />
													{account?.bankName || 'Bank account'}
												</div>
												<dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
													{rows.map(([label, value]) => (
														<React.Fragment key={label}>
															<dt className="text-gray-500">{label}</dt>
															<dd className="break-all font-medium text-gray-900 select-all">{value}</dd>
														</React.Fragment>
													))}
												</dl>
											</div>
										)
									})}

									{selectedGateway?.description && (
										<p className="text-sm text-gray-600">{selectedGateway.description}</p>
									)}

									<Field label="Upload payment receipt" required>
										{/* UploadMedia sizes its file input to fit, which is wider
											  than the drawer; let it shrink beside the Upload button. */}
										<div className="min-w-0 [&_input[type=file]]:w-full [&_input[type=file]]:min-w-0 [&_input[type=file]]:flex-1 [&_input[type=file]]:text-sm">
											<UploadMedia onUploadComplete={(medias) => {
												var media = medias[0];
												setcheckoutData({ ...checkoutData, bank_recipt: media })
											}} />
										</div>
									</Field>

									{checkoutData?.bank_recipt ? (
										<>
											<Image className="w-40 rounded-lg border border-gray-200 p-1.5" unoptimized width={200} height={200} src={checkoutData?.bank_recipt?.url} alt="Receipt" />
											<SubmitOrderButton loading={loading} amount={orderTotalLabel} onClick={() => submitOrder()} />
										</>
									) : (
										<p className="text-xs text-gray-500">Upload your receipt to place the order.</p>
									)}
								</>
							)}

							{checkoutData.payment_method == "bkash" && (
								<>
									<BkashCheckoutButton
										total={checkoutData?.total_amount}
										ensureOrder={() => ensureOrderForPayment('bkash')}
										onError={(message) => addNotification({ type: 'error', title: 'bKash', content: message })}
									/>

									{paymentGateways?.bkash?.description && (
										<p className="text-sm text-gray-600">{paymentGateways.bkash.description}</p>
									)}
								</>
							)}

							{walletName && (
								<>
									<div className="rounded-lg border border-[#1b0e9f]/20 bg-[#1b0e9f]/5 p-3">
										<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Send money to</div>
										<div className="mt-0.5 select-all text-lg font-bold tracking-wide text-gray-900">{selectedGateway?.phone_number}</div>
										<div className="mt-1 text-sm text-gray-600">Amount: <strong className="text-gray-900">{orderTotalLabel}</strong></div>
									</div>

									{selectedGateway?.description && (
										<p className="text-sm text-gray-600">{selectedGateway.description}</p>
									)}

									<ol className="flex flex-col gap-2 text-sm text-gray-700">
										{[
											<>Open and log in to your {walletName} app.</>,
											<>Tap <strong>Send Money</strong> and enter <strong>{selectedGateway?.phone_number}</strong>.</>,
											<>Enter the amount <strong>{orderTotalLabel}</strong> and a reference (optional).</>,
											<>Enter your {walletName} PIN and tap and hold to confirm.</>,
											<>Paste the Transaction ID below.</>,
										].map((step, i) => (
											<li key={i} className="flex gap-2.5">
												<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">{i + 1}</span>
												<span>{step}</span>
											</li>
										))}
									</ol>

									<Field label="Transaction ID" htmlFor="checkout-transaction-id" required>
										<input id="checkout-transaction-id" type="text" autoComplete="off" className={`${inputClass} font-mono uppercase tracking-wider`} placeholder="BAF8K69P0Z" value={checkoutData?.transaction_id ?? ''} onChange={ev => {
											setcheckoutData({ ...checkoutData, transaction_id: ev.target.value })
										}} />
									</Field>

									<SubmitOrderButton loading={loading} amount={orderTotalLabel} onClick={() => submitOrder()} />
								</>
							)}

							{checkoutData.payment_method == "nagad" && (
								<>
									<NagadCheckoutButton
										total={checkoutData?.total_amount}
										ensureOrder={() => ensureOrderForPayment('nagad')}
										onError={(message) => addNotification({ type: 'error', title: 'Nagad', content: message })}
									/>

									{paymentGateways?.nagad?.description && (
										<p className="text-sm text-gray-600">{paymentGateways.nagad.description}</p>
									)}
								</>
							)}

							{(checkoutData.payment_method == "roket" || checkoutData.payment_method == "sslcommerz") && (
								<Notice tone="muted">This payment method isn't available yet. Please choose another one.</Notice>
							)}

							{checkoutData.payment_method == "cod" && (
								<>
									<Notice tone="info">
										Pay with cash when your order arrives. Our team will call you to confirm the order.
									</Notice>
									<SubmitOrderButton loading={loading} amount={orderTotalLabel} onClick={() => submitOrder()} />
								</>
							)}

						</div>
					)}


				</CheckoutSection>

			</div>
		</div>
	);
};



export default CheckoutView;
