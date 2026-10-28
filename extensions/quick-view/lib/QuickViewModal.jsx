"use client";

import React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { IconX, IconArrowRight } from "@tabler/icons-react";

import { PostProvider } from "../../../components/PageBuilder/context/PostContext";
import { useCounterStore } from "../../../store/useCounterStore";
import { useProductStore } from "../../../store/productStore";
import Spinner from "../../../components/Spinner";

import ProductGalleryView from "../../../components/PageBuilder/elements/ProductGalleryView";
import ProductPriceView from "../../../components/PageBuilder/elements/ProductPriceView";
import ProductVariablePricesView from "../../../components/PageBuilder/elements/ProductVariablePricesView";
import ProductStockStatusView from "../../../components/PageBuilder/elements/ProductStockStatusView";
import ProductSkuView from "../../../components/PageBuilder/elements/ProductSkuView";
import ProductCategoriesView from "../../../components/PageBuilder/elements/ProductCategoriesView";
import AddToCartView from "../../../components/PageBuilder/elements/AddToCartView";

import { useQuickViewStore } from "./store";
import { widthClasses } from "./defaults";
import { GALLERY, PRICE, VARIATIONS, ADD_TO_CART, STOCK, SKU, CATEGORIES } from "./modalStyles";

/*
	The modal.

	Everything inside it is a core element wrapped in the same `PostProvider`
	the product page uses. That is the whole design: the quick view does not
	reimplement a price, a variation picker or an Add to Cart button, so it
	cannot drift from the product page, and anything that changes how a
	product is bought - bulk pricing, addons, the purchase gate that
	extensions/request-quote installs - is already true here.

	It is rendered once from the runtime into `document.body`, never inline.
	Inline would put it inside whatever card the shopper clicked, where a
	parent's `overflow: hidden` or `transform` would clip it or break its
	fixed positioning.
*/

function trimWords(text, words) {
	const clean = String(text ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	if (!clean) return "";
	const parts = clean.split(" ");
	return parts.length <= words ? clean : `${parts.slice(0, words).join(" ")}...`;
}

const QuickViewModal = () => {

	const slug = useQuickViewStore((s) => s.slug);
	const product = useQuickViewStore((s) => s.product);
	const loading = useQuickViewStore((s) => s.loading);
	const loadError = useQuickViewStore((s) => s.loadError);
	const settings = useQuickViewStore((s) => s.settings);
	const close = useQuickViewStore((s) => s.close);

	const cartItems = useCounterStore((s) => s.cartItems);
	const clearSelectedVariation = useProductStore((s) => s.clearSelectedVariation);

	const panelRef = React.useRef(null);
	const returnFocusRef = React.useRef(null);

	const isOpen = Boolean(slug);
	const show = settings?.show ?? {};

	/*
		The variation picker writes to a store shared with the product page,
		so it is cleared on the way in and on the way out. Without the clear
		on open, opening a second product inherits the first one's chosen
		variation and prices it wrongly until something is clicked.
	*/
	React.useEffect(() => {
		if (!isOpen) return;
		clearSelectedVariation();
		return () => clearSelectedVariation();
	}, [isOpen, slug, clearSelectedVariation]);

	/* Escape closes, from anywhere - the shopper may never have clicked
	   inside the panel. */
	React.useEffect(() => {
		if (!isOpen) return;
		const onKey = (event) => { if (event.key === "Escape") close(); };
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [isOpen, close]);

	/*
		Hold the page still behind the modal.

		The previous value is put back rather than cleared, because something
		else may have been holding it - a cart drawer the shopper opened
		first - and clearing it would hand the scroll back while that is
		still open.
	*/
	React.useEffect(() => {
		if (!isOpen) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => { document.body.style.overflow = previous; };
	}, [isOpen]);

	/* Focus moves into the panel, and back to whatever opened it on close -
	   otherwise a keyboard user lands at the top of the document. */
	React.useEffect(() => {
		if (!isOpen) return;
		returnFocusRef.current = document.activeElement;
		panelRef.current?.focus();
		return () => {
			const target = returnFocusRef.current;
			if (target && typeof target.focus === "function") target.focus();
		};
	}, [isOpen]);

	/*
		Close once something has been added, if the merchant asked for that.

		There is no callback to hang this on - `AddToCartView` is core's and
		reports to the cart store, not to us - so the cart is watched instead.
		It only runs while the modal is open, which is the only time the
		shopper could have added from here.
	*/
	const cartCount = Array.isArray(cartItems) ? cartItems.length : 0;
	const openedWith = React.useRef(cartCount);

	React.useEffect(() => {
		if (isOpen) openedWith.current = cartCount;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, slug]);

	React.useEffect(() => {
		if (!isOpen || settings?.closeAfterAdd !== true) return;
		if (cartCount > openedWith.current) close();
	}, [cartCount, isOpen, settings?.closeAfterAdd, close]);

	/*
		Portals need `document`, which does not exist while the server
		renders. Mounting is tracked rather than testing for `document`
		directly, so the first client render matches the server's empty one
		and React has nothing to disagree about.
	*/
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => setMounted(true), []);

	if (!mounted || !isOpen) return null;

	const hasVariations = Array.isArray(product?.variations) && product.variations.length > 0;
	const excerpt = trimWords(product?.post_excerpt, Number(settings?.excerptWords) || 45);

	return createPortal(
		<div
			className="fixed inset-0 z-[9999] flex items-end justify-center p-0 sm:items-center sm:p-6"
			role="dialog"
			aria-modal="true"
			aria-label={product?.title ? `Quick view: ${product.title}` : "Quick view"}>

			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
				onClick={() => settings?.closeOnBackdrop !== false && close()}
			/>

			<div
				ref={panelRef}
				tabIndex={-1}
				className={`relative flex max-h-[90vh] w-full ${widthClasses(settings?.width)} flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl outline-none sm:rounded-2xl`}>

				<button
					type="button"
					onClick={close}
					aria-label="Close quick view"
					className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-500 shadow-sm transition-colors hover:bg-white hover:text-gray-900">
					<IconX size={18} />
				</button>

				{loading && !product && (
					<div className="flex h-72 items-center justify-center"><Spinner /></div>
				)}

				{loadError && !product && (
					<div className="flex h-72 flex-col items-center justify-center gap-3 px-6 text-center">
						<p className="text-sm text-gray-600">{loadError}</p>
						<Link
							href={`/product/${slug}`}
							onClick={close}
							className="text-sm font-medium text-[#634FE5] underline underline-offset-4">
							Open the product page instead
						</Link>
					</div>
				)}

				{product && (
					/* The same context the product page provides, so every
					   element below behaves exactly as it does there. */
					<PostProvider value={product}>
						<div className="grid grid-cols-1 gap-0 overflow-y-auto sm:grid-cols-2">

							{show.gallery !== false && (
								<div className="p-4 sm:p-5">
									<ProductGalleryView
										id="quick-view-gallery"
										type="productGallery"
										cssSelectors={GALLERY}
										options={{}}
									/>
								</div>
							)}

							<div className={`flex flex-col gap-4 p-5 sm:p-6 ${show.gallery === false ? "sm:col-span-2" : ""}`}>

								{show.categories && (
									<ProductCategoriesView
										id="quick-view-categories"
										type="productCategories"
										cssSelectors={CATEGORIES}
										options={{ tag: "div" }}
									/>
								)}

								<h2 className="pr-10 text-xl font-semibold leading-snug text-gray-900">
									{product?.title}
								</h2>

								<div className="flex flex-wrap items-center gap-3">
									{/* `stock_status` is passed in because the core
									    block reads it from its options, not from
									    the product - it is configured by the
									    merchant on a template, where the product
									    is whatever is being viewed. Here there is
									    a real product, so it is derived. */}
									{show.stock && (
										<ProductStockStatusView
											id="quick-view-stock"
											type="productStockStatus"
											cssSelectors={STOCK}
											options={{
												stock_status: Number(product?.stock_count) > 0 ? "instock" : "outofstock",
												inStockText: "In stock",
												outOfStockText: "Out of stock",
											}}
										/>
									)}
									{show.sku && (
										<ProductSkuView
											id="quick-view-sku"
											type="productSku"
											cssSelectors={SKU}
											options={{ label: "SKU" }}
										/>
									)}
								</div>

								{show.price !== false && (
									<ProductPriceView
										id="quick-view-price"
										type="productPrice"
										cssSelectors={PRICE}
										options={{}}
									/>
								)}

								{excerpt && show.excerpt !== false && (
									<p className="text-sm leading-relaxed text-gray-600">{excerpt}</p>
								)}

								{/* Drawn only when there is something to pick. An
								    empty picker on a simple product is a gap the
								    merchant cannot explain. */}
								{show.variations !== false && hasVariations && (
									<ProductVariablePricesView
										id="quick-view-variations"
										type="productVariablePrices"
										cssSelectors={VARIATIONS}
										options={{}}
									/>
								)}

								{show.addToCart !== false && (
									<AddToCartView
										id="quick-view-add"
										type="addToCart"
										cssSelectors={ADD_TO_CART}
										options={{ buttonText: "Add to cart", icon: "IconShoppingCart", iconSize: 18 }}
									/>
								)}

								{show.fullLink !== false && (
									<Link
										href={`/product/${product?.slug ?? slug}`}
										onClick={close}
										className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-gray-500 underline-offset-4 transition-colors hover:text-[#634FE5] hover:underline">
										{settings?.fullLinkLabel || "View full details"}
										<IconArrowRight size={15} />
									</Link>
								)}

							</div>
						</div>
					</PostProvider>
				)}

				{/* The seed from the card is on screen while the real record
				    is still coming; the bar says so rather than letting a
				    half-filled modal look finished. */}
				{loading && product && (
					<div className="flex items-center justify-center gap-2 border-t border-gray-100 py-2 text-xs text-gray-400">
						<Spinner size={13} /> Loading the rest...
					</div>
				)}

			</div>
		</div>,
		document.body
	);
};

export default QuickViewModal;
