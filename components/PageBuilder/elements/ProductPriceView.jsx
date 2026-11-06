"use client"
import React from "react";
import { useState } from "react";
import { usePost } from "../context/PostContext";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { useCounterStore } from '../../../store/useCounterStore';
import { useProductStore } from "../../../store/productStore";
import { elementCssClasses } from "../ElementsDefinition";

const toNumber = (value) => {
	var n = parseFloat(value);
	return Number.isFinite(n) ? n : 0;
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
	var hasVariations = Array.isArray(product?.addons) && product.addons.includes('variations');

	if (hasVariations && !activeVariation) {
		var prices = (Array.isArray(product?.variations) ? product.variations : [])
			.filter(v => v?.enable === 'yes')
			.map(v => toNumber(v?.sale_price) > 0 ? toNumber(v?.sale_price) : toNumber(v?.regular_price))
			.filter(p => p > 0);
		return { mode: 'range', min: prices.length ? Math.min(...prices) : 0, max: prices.length ? Math.max(...prices) : 0 };
	}

	var priceType = product?.price_type ?? product?.priceType ?? 'simple';
	if (!hasVariations && priceType === 'pwyw') {
		return { mode: 'pwyw', price: toNumber(product?.pwyw_default_price), min: toNumber(product?.pwyw_min_price) };
	}

	var source = hasVariations ? activeVariation : product;
	var sale = toNumber(source?.sale_price);
	var regular = toNumber(source?.regular_price);
	var price = sale > 0 ? sale : (regular > 0 ? regular : toNumber(product?.price));
	return { mode: 'simple', price, regular: sale > 0 && regular > 0 ? regular : null };
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
		</div>
	);
}

const ProductPriceView = (props) => {

	const { wrapCurrency } = useUtilsStore();
	const addNotification = useCounterStore((state) => state.addNotification);
	const purchaseGate = useCounterStore((state) => state.purchaseGate);
	const storeActiveVariation = useProductStore((state) => state.activeVariation);

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
	var activeVariation =
		storeActiveVariation &&
			String(storeActiveVariation?.product_id) === String(productData?.product_id ?? productData?.id)
			? storeActiveVariation
			: null;

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
