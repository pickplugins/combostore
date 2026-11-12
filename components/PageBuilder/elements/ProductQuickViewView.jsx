"use client"
import React, { useState, useEffect, useRef, useId } from "react";
import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";
import BlockRender from "../BlockRender";
import "animate.css";

import { tablerIcon } from "@/components/icons/TablerIcon";
import { usePost } from "../context/PostContext";
import { VariationScope } from "../context/VariationScope";
import { useCounterStore } from "../../../store/useCounterStore";

import { elementCssClasses } from "../ElementsDefinition";
import {
	quickViewPosition,
	isFixedQuickView,
	quickViewPositionClass,
	quickViewModalLayer,
	quickViewCloseHolder,
} from "./productQuickViewLayout";

/*
	Product Quick View: a button that opens the product's details (its child
	blocks, which read the product from PostContext) in a modal, a side
	drawer or a dropdown, without leaving the listing.

	- The modal and drawers dim the page with a backdrop, lock page scroll,
		and close on the backdrop, the close button or Escape.
	- Dropdowns close on Escape or a click outside.
	- Focus moves to the close button on open and back to the trigger on close.
	- Clicks are kept from reaching a product card around the button, so
		"Quick view" inside a linked card does not also open the product page.
*/
const ProductQuickViewView = (props) => {
	const cssSelectors = props?.cssSelectors || {};
	/* A key the block lacks falls back to the productQuickView defaults in ElementsDefinition.js. */
	const cls = elementCssClasses('productQuickView', cssSelectors);
	const children = props.children ?? [];
	const prams = props.prams;
	const onTriggerOpen = props?.onTriggerOpen;

	const index = props?.index;
	const id = props?.id;
	const type = props?.type;

	var productData = usePost();

	var [attributes, setattributes] = useState(productData?.attributes);

	const options = props?.options || {};



	var buttonLabel = options?.buttonLabel ?? "Quick View";


	buttonLabel = attributes?.length > 0 ? buttonLabel.replace('{attr}', attributes[0]?.title) : buttonLabel;

	const iconSize = options?.iconSize || 18;
	const buttonIcon = options?.buttonIcon;
	const position = quickViewPosition(options?.position);
	const isFixed = isFixedQuickView(position);
	const isModal = position === 'fixedMiddle';

	const animateIn = `animate__${options?.slideIn || (isModal ? "zoomIn" : "fadeIn")}`;
	const animateOut = `animate__${options?.slideOut || (isModal ? "zoomOut" : "fadeOut")}`;

	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const IconCustom = tablerIcon(buttonIcon);
	const dialogId = useId();


	const rootRef = useRef(null);
	const triggerRef = useRef(null);
	const panelRef = useRef(null);
	const closeRef = useRef(null);

	const handleOpen = () => {
		if (onTriggerOpen) {
			onTriggerOpen(false, prams);
		}

		setIsClosing(false);
		setIsOpen(true);
	};

	const handleClose = () => {
		if (!isOpen || isClosing) {
			return;
		}

		if (onTriggerOpen) {
			onTriggerOpen(true, prams);
		}

		setIsClosing(true);
	};

	const finishClose = () => {
		setIsOpen(false);
		setIsClosing(false);
		triggerRef.current?.focus?.({ preventScroll: true });
	};

	/* Only the panel's own animation ends the close: child blocks can run
		 animations of their own, and those bubble up here too. */
	const handleAnimationEnd = (ev) => {
		if (ev.target === ev.currentTarget && isClosing) {
			finishClose();
		}
	};

	/* A close animation that never runs (reduced motion, an unknown
		 animation name) must not leave the panel stuck open. */
	useEffect(() => {
		if (!isClosing) {
			return;
		}

		const timer = setTimeout(finishClose, 1200);
		return () => clearTimeout(timer);
	}, [isClosing]);

	/*
		The fixed positions (side drawers, centred modal) render into <body>.
		`position: fixed` is relative to the viewport only while no ancestor has
		a transform, filter or backdrop-filter; a sticky header with
		`backdrop-blur` - WonderJoy's, and most glassy headers - becomes the
		frame instead, so `top-0 h-full` meant the header's height. The
		dropdown positions stay where they are, since they are meant to hang
		off the button. Same fix as the cart drawer (CartView.jsx).
	*/
	const [portalTarget, setPortalTarget] = useState(null);
	useEffect(() => {
		setPortalTarget(rootRef.current?.ownerDocument?.body ?? null);
	}, []);
	const place = (node) => (isFixed && portalTarget ? createPortal(node, portalTarget) : node);

	/* Adding to cart from in here opens the cart drawer, which sits under
	   this panel (z-50 vs z-[999]): close the quick view so the cart shows. */
	const cartToggle = useCounterStore((state) => state.cartToggle);
	useEffect(() => {
		if (cartToggle && isOpen && !isClosing) {
			handleClose();
		}
	}, [cartToggle]);

	/* Escape, outside clicks for dropdowns, and focus on open. */
	useEffect(() => {
		if (!isOpen || isClosing) {
			return;
		}

		const doc = rootRef.current?.ownerDocument ?? document;

		const onKeyDown = (ev) => {
			if (ev.key === 'Escape') {
				ev.stopPropagation();
				handleClose();
			}
		};

		const onPointerDown = (ev) => {
			if (isFixed) {
				return;
			}
			if (!rootRef.current?.contains(ev.target)) {
				handleClose();
			}
		};

		doc.addEventListener('keydown', onKeyDown);
		doc.addEventListener('pointerdown', onPointerDown);

		closeRef.current?.focus?.({ preventScroll: true });

		return () => {
			doc.removeEventListener('keydown', onKeyDown);
			doc.removeEventListener('pointerdown', onPointerDown);
		};
	}, [isOpen, isClosing, isFixed]);

	/* The modal and drawers lock page scroll while open, without the page
		 jumping sideways as its scrollbar goes away. */
	useEffect(() => {
		if (!isOpen || !isFixed) {
			return;
		}

		const doc = rootRef.current?.ownerDocument ?? document;
		const body = doc.body;
		const win = doc.defaultView ?? window;
		const scrollbar = win.innerWidth - doc.documentElement.clientWidth;
		const previous = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };

		body.style.overflow = 'hidden';
		if (scrollbar > 0) {
			body.style.paddingRight = `${scrollbar}px`;
		}

		return () => {
			body.style.overflow = previous.overflow;
			body.style.paddingRight = previous.paddingRight;
		};
	}, [isOpen, isFixed]);

	/* Keep Tab inside the modal and drawers while they are open. */
	const trapFocus = (ev) => {
		if (ev.key !== 'Tab' || !isFixed || !panelRef.current) {
			return;
		}

		const focusable = panelRef.current.querySelectorAll(
			'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
		);
		if (focusable.length === 0) {
			return;
		}

		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		const active = panelRef.current.ownerDocument.activeElement;

		if (ev.shiftKey && active === first) {
			ev.preventDefault();
			last.focus();
		} else if (!ev.shiftKey && active === last) {
			ev.preventDefault();
			first.focus();
		}
	};

	/* Portalled or not, React events bubble up the component tree: stop them
		 here so a product card's own click handler does not fire too. */
	const stop = (ev) => ev.stopPropagation();

	const panel = (
		<div
			ref={panelRef}
			id={dialogId}
			role="dialog"
			aria-modal={isFixed ? "true" : undefined}
			aria-label={buttonLabel || "Quick view"}
			tabIndex={-1}
			className={`
				${cls('popover') || ""}
				${quickViewPositionClass(position)}
				animate__animated animate__faster
				${isClosing ? animateOut : animateIn}
			`}
			onAnimationEnd={handleAnimationEnd}
			onKeyDown={trapFocus}
			onClick={stop}
		>




			{/* Close Button: stays at the top-right while the content scrolls. */}
			<div className={quickViewCloseHolder}>
				<button
					ref={closeRef}
					type="button"
					aria-label="Close quick view"
					className={`${cls('popover-close') || ""}`}
					onClick={handleClose}
				>
					<IconX size={18} />
				</button>
			</div>

			{/* Content. Its own variation selection (see VariationScope.jsx): a
			    pick in here must not change other cards, nor swap the card's
			    Add To Cart - which holds this quick view - for its buttons. */}
			<div className={`${cls('popover-content') || ""}`}>
				<VariationScope>
					{children.map((child, idx) => (
						<BlockRender
							key={child.id}
							index={`${index}-${idx}`}
							block={child}
						/>
					))}
				</VariationScope>
			</div>
		</div>
	);

	return (
		<div
			ref={rootRef}
			id={id}
			type={type}
			className={`${cls('*') || ""} relative`}
		>
			{/* Trigger Button */}
			<button
				ref={triggerRef}
				type="button"
				aria-haspopup="dialog"
				aria-expanded={isOpen && !isClosing}
				aria-controls={isOpen ? dialogId : undefined}
				className={`${cls('button') || ""}`}
				onClick={(ev) => {
					/* Inside a linked product card, open the quick view instead of the product page. */
					ev.preventDefault();
					ev.stopPropagation();
					isOpen && !isClosing ? handleClose() : handleOpen();
				}}
			>
				{IconCustom ? (
					<span className={`${cls('button-icon') || ""}`} aria-hidden="true">
						<IconCustom size={iconSize} />
					</span>
				) : null}

				{buttonLabel ? (
					<span className={`${cls('button-label') || ""}`}>
						{buttonLabel}
					</span>
				) : null}
			</button>

			{isOpen && place(
				isFixed ? (
					<>
						{/* Backdrop: dims the page and closes the quick view on click. */}
						<div
							aria-hidden="true"
							className={`${cls('backdrop') || ""} animate__animated animate__faster ${isClosing ? "animate__fadeOut" : "animate__fadeIn"}`}
							onClick={(ev) => { ev.stopPropagation(); handleClose(); }}
						/>

						{isModal ? (
							<div className={quickViewModalLayer}>{panel}</div>
						) : panel}
					</>
				) : panel
			)}
		</div>
	);
};

export default ProductQuickViewView;
