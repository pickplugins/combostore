'use client'

import { useState } from "react";
import { useUtilsStore } from '../../../store/useUtilsStore';
import { CartMarkup } from './CartView';
import { defaultCartCrossSellsTitle, defaultCartCrossSellsLimit } from './CartCrossSellsView';
import { elementCssClasses } from "../ElementsDefinition";

/* Sample lines for the canvas: the builder never reads or changes the real cart. */
const sampleItems = [
	{ id: 101, title: 'Organic honey 500g', price: 450, regular_price: 520, sale_price: 450, quantity: 2, thumbnail: '', attributes: { size: { name: '500g' } } },
	{ id: 102, title: 'Mustard oil 1L', price: 320, quantity: 1, thumbnail: '' },
];

/*
	Builder (canvas) preview of the cart.

	It renders CartView's own CartMarkup - the trigger, and with Edit Mode on
	the open drawer - with sample lines, reading the same cssSelectors keys
	with the same defaults from ElementsDefinition.js, so styles edited in the
	builder show here exactly as on the storefront.

	The drawer and backdrop are position: fixed on the storefront. Here they
	sit inside a frame whose transform makes it the containing block for fixed
	elements, so they keep their real classes but stay inside the canvas
	instead of covering the builder. Nothing touches the real cart, coupons or
	checkout: the stepper, remove and clear buttons only change the sample,
	and the checkout step shows a placeholder.
*/
const Cart = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('cart', cssSelectors);

	var id = props?.id;
	var type = props?.type;
	var options = props?.options;
	var iconTrigger = options?.triggerStyle === 'icon';
	var editMode = options?.editMode ?? true;

	const { wrapCurrency } = useUtilsStore();

	const [items, setitems] = useState(sampleItems);
	const [step, setstep] = useState(0);
	const [couponCode, setcouponCode] = useState('');

	var total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
	var totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

	const markup = (
		<CartMarkup
			cls={cls}
			iconTrigger={iconTrigger}
			cartOpen={editMode}
			cartStep={step}
			cartItems={items}
			cartTotalQuantity={totalQuantity}
			cartTotal={total}
			cartTotalPay={total}
			wrapCurrency={wrapCurrency}
			coupons={{ applied: false, couponCode: couponCode, loading: false }}
			couponAmount={0}
			discountLines={[]}
			autoDiscount={0}
			payableShipping={0}
			freeShipping={false}
			onToggle={() => { }}
			onClose={() => { }}
			onBack={() => setstep(0)}
			onRemoveItem={(item, itemIndex) => setitems(items.filter((_, i) => i !== itemIndex))}
			onChangeQuantity={(item, quantity) => {
				if (quantity < 1) return;
				setitems(items.map(line => line.id === item.id ? { ...line, quantity } : line));
			}}
			onCouponCode={setcouponCode}
			onApplyCoupon={() => { }}
			onRemoveCoupon={() => { }}
			onCheckout={() => setstep(1)}
			onClear={() => setitems(sampleItems)}
			crossSells={(options?.crossSells ?? true) ? (
				/* The builder has no real cart, so the section is a placeholder here, in its place and with its title and section classes. */
				<section className={cls('cross-sells')}>
					{(options?.crossSellsTitle ?? defaultCartCrossSellsTitle) && <h3 className={cls('cross-sells-title')}>{options?.crossSellsTitle ?? defaultCartCrossSellsTitle}</h3>}
					<div className="rounded-md border border-dashed border-gray-300 p-3 text-center text-[11px] text-gray-400">
						On the shop: up to {options?.crossSellsLimit ?? defaultCartCrossSellsLimit} cross-sells of the products in the cart, each with an Add button.
					</div>
				</section>
			) : null}
			checkout={
				<div className="p-6 text-center text-sm text-gray-400">
					The checkout form shows here on the shop. Its parts are switched on and off in this block's options.
				</div>
			}
		/>
	);

	return (
		<div draggable id={id} type={type} index={index}
			className={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
			onClick={e => {
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>
			{editMode ? (
				/* Builder-only frame: the transform makes it the containing block for the drawer's position: fixed. */
				<div className="relative h-[640px] w-full overflow-hidden rounded-lg border border-dashed border-gray-300 [transform:translateZ(0)]">
					{markup}
				</div>
			) : markup}
		</div>
	);
};

export default Cart;
