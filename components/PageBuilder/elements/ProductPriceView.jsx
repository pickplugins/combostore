"use client"
import React from "react";
import { useState } from "react";
import { usePost } from "../context/PostContext";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useCounterStore } from '../../../store/useCounterStore';
import { useActiveVariation } from "../context/VariationScope";
import { elementCssClasses } from "../ElementsDefinition";
import { productSubscription, subscriptionCycle, subscriptionPrice } from '@/lib/subscriptionCart';

const toNumber = (value) => {
	var n = parseFloat(value);
	return Number.isFinite(n) ? n : 0;
};

/*
	A variation's `enable` comes back as "1"/"0" from the database, as a
	boolean from the product editor, and as 'yes'/'no' in older data. Only an
	explicit off value disables it; a missing flag counts as enabled, as the
	editor defaults it to true.
*/
export const isVariationEnabled = (v) => {
	var e = v?.enable;
	if (e == null) return true;
	return !(e === false || e === 0 || ['0', 'no', 'false', ''].includes(String(e).toLowerCase()));
};

/*
	What a product's price block shows, worked out once for the shop and the
	builder:

	  { mode: 'range', min, max }          a product with variations, none picked yet
	  { mode: 'pwyw', price, min }         pay what you want
	  { mode: 'simple', price, regular }   everything else; regular is set only on sale

	It is computed from the data on every render. The old view copied the
	prices into state once, so data that arrived later never showed, and
	picking a variation without a sale price kept the previous sale price on
	screen. The price type is read from `price_type`, the field the product
	editor saves - the view read `priceType`, which never exists, so pay what
	you want products always showed as simple prices.
*/
export function productPriceDisplay(product, activeVariation) {
	var display = basePriceDisplay(product, activeVariation);

	/*
		A subscription product is always bought as a subscription (AddToCartView
		has no one-time choice), so the price shown is the price charged: after
		the subscribe discount, with the cycle as a suffix ("every year"). On a
		discount the price before it is struck through, as a sale is.
	*/
	var subscription = productSubscription(product);
	if (!subscription || display.mode === 'pwyw') return display;
	var suffix = subscriptionCycle(subscription);
	/* The one-time setup fee, charged on the first order only (withSetupFeeLines adds it at checkout). */
	var setupFee = subscription.setup_fee > 0 ? subscription.setup_fee : 0;
	if (display.mode === 'range') {
		return { ...display, min: subscriptionPrice(display.min, subscription), max: subscriptionPrice(display.max, subscription), suffix, setupFee };
	}
	var price = subscriptionPrice(display.price, subscription);
	var regular = display.regular ?? (price < display.price ? display.price : null);
	return { ...display, price, regular, suffix, setupFee };
}

function basePriceDisplay(product, activeVariation) {
	var hasVariations = Array.isArray(product?.addons) && product.addons.includes('variations');

	if (hasVariations && !activeVariation) {
		var prices = (Array.isArray(product?.variations) ? product.variations : [])
			.filter(isVariationEnabled)
			.map(v => toNumber(v?.sale_price) > 0 ? toNumber(v?.sale_price) : toNumber(v?.regular_price))
			.filter(p => p > 0);
		var min = prices.length ? Math.min(...prices) : 0, max = prices.length ? Math.max(...prices) : 0;
		/* Every variation at one price: that price, not "৳500 - ৳500". */
		if (min > 0 && min === max) return { mode: 'simple', price: min, regular: null };
		return { mode: 'range', min, max };
	}

	var priceType = product?.price_type ?? product?.priceType ?? 'simple';
	if (!hasVariations && priceType === 'pwyw') {
		return { mode: 'pwyw', price: toNumber(product?.pwyw_default_price), min: toNumber(product?.pwyw_min_price) };
	}

	var source = hasVariations ? activeVariation : product;
	var sale = toNumber(source?.sale_price);
	var regular = toNumber(source?.regular_price);
	var price = sale > 0 ? sale : (regular > 0 ? regular : toNumber(product?.price));
	/* The regular price is struck through only when the sale price is below it - a sale price equal to it is no sale. */
	return { mode: 'simple', price, regular: sale > 0 && regular > sale ? regular : null };
}

/*
	Pay what you want: the suggested price, and "Set your price" opening a
	field. A price below the minimum is refused with a notice; the minimum
	itself is accepted (it used to be refused, and the refusal crashed on an
	undefined addNotification). A valid price is passed to onChangePrice when
	a parent supplies one - nothing does yet, so the chosen price does not
	reach the cart.
*/
function PayWhatYouWant({ cls, display, wrapCurrency, onChangePrice, notify }) {
	var [editing, setediting] = useState(false);
	var [value, setvalue] = useState(display.price);

	return (
		<div className={cls('pwyw')}>
			<div className={cls('pwyw-price')}>{wrapCurrency(display.price)}</div>
			{!editing && (
				<div className={cls('pwyw-edit')} onClick={() => setediting(true)}>Set your price</div>
			)}
			{editing && (
				<div className={cls('pwyw-form')}>
					<input className={cls('pwyw-input')} type="number" min={display.min || undefined} value={value} onChange={ev => setvalue(parseFloat(ev.target.value))} />
					<div className={cls('pwyw-set')} onClick={() => {
						if (!(value >= display.min)) {
							notify?.({ type: 'error', title: "Price can't be set", content: `The price can't be less than ${wrapCurrency(display.min)}.` });
							return;
						}
						onChangePrice?.({ pwyw_default_price: value });
						setediting(false);
					}}>Set</div>
					<div className={cls('pwyw-cancel')} onClick={() => setediting(false)}>Cancel</div>
				</div>
			)}
		</div>
	);
}

/*
	The price markup, shared with the builder preview (ProductPrice.jsx).
	The " - " between a sale price and the struck-through regular price, and
	between the two ends of a range, is a span of its own (`price-separator`),
	in the same place as before so presets that target it keep working.
*/
export function ProductPriceMarkup({ cls, id, index, type, display, wrapCurrency, gateText, onChangePrice, notify, rootClassName = '', rootProps = {} }) {

	var root = (children) => (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>{children}</div>
	);

	/* An extension (e.g. request-quote) may hide the price; it supplies the wording. */
	if (gateText != null) {
		return root(<span className={cls('simple-price-sale')}>{gateText || "Price on request"}</span>);
	}

	if (display.mode === 'range') {
		return root(
			<div className={cls('variable-price-wrap')}>
				<div className={cls('variable-price-min')}>{wrapCurrency(display.min)}</div>
				<div className={cls('price-separator')}> - </div>
				<div className={cls('variable-price-max')}>{wrapCurrency(display.max)}</div>
				{display.suffix && <span className={cls('price-suffix')}>{display.suffix}</span>}
				{display.setupFee > 0 && <span className={cls('price-setup-fee')}>+ {wrapCurrency(display.setupFee)} setup fee</span>}
			</div>
		);
	}

	if (display.mode === 'pwyw') {
		return root(<PayWhatYouWant cls={cls} display={display} wrapCurrency={wrapCurrency} onChangePrice={onChangePrice} notify={notify} />);
	}

	return root(
		<div className={cls('simple-price-wrap')}>
			{display.price > 0 && <span className={cls('simple-price-sale')}>{wrapCurrency(display.price)}</span>}
			{display.regular != null && (
				<>
					<span className={cls('price-separator')}> - </span>
					<span className={cls('simple-price-regular')}>{wrapCurrency(display.regular)}</span>
				</>
			)}
			{display.price > 0 && display.suffix && <span className={cls('price-suffix')}>{display.suffix}</span>}
			{display.price > 0 && display.setupFee > 0 && <span className={cls('price-setup-fee')}>+ {wrapCurrency(display.setupFee)} setup fee</span>}
		</div>
	);
}

const ProductPriceView = (props) => {

	const { wrapCurrency } = useUtilsStore();
	const addNotification = useCounterStore((state) => state.addNotification);
	const purchaseGate = useCounterStore((state) => state.purchaseGate);
	/* wrapCurrency reads these with getState(), which does not re-render; subscribing
	   here does, so a currency saved in Store Details shows without a reload. */
	useCounterStore((state) => state.currencySymbole);
	useCounterStore((state) => state.currencyPosition);

	/* A key the block lacks falls back to the productPrice defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productPrice', props?.cssSelectors);

	const productData = usePost();

	/*
		activeVariation lives in a global store, so on an archive it would be
		whatever was last picked on some product page. Only honour it when it
		belongs to the product this price is for. Variations key on the WP post
		id, which is `product_id` here (get_product overwrites `id` with the
		cstore row id).
	*/
	var activeVariation = useActiveVariation(productData);

	/* An extension may say this product's price is not to be shown - see `purchaseGate` in store/useCounterStore.js. */
	const priceGate = purchaseGate ? purchaseGate(productData) : null;

	return (
		<ProductPriceMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			display={productPriceDisplay(productData, activeVariation)}
			wrapCurrency={wrapCurrency}
			gateText={priceGate?.hidePrice ? (priceGate.priceText ?? '') : null}
			onChangePrice={props?.onChangePrice}
			notify={addNotification}
		/>
	);
};

export default ProductPriceView;
