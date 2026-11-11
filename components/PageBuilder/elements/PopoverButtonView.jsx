"use client"
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IconPlus, IconX } from "@tabler/icons-react";
import BlockRender from "../BlockRender";
import "animate.css";

import { tablerIcon } from "@/components/icons/TablerIcon";

import { elementCssClasses } from "../ElementsDefinition";
const PopoverButton = (props) => {
	const cssSelectors = props?.cssSelectors || {};
	/* A key the block lacks falls back to the popoverButton defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('popoverButton', cssSelectors);
	const children = props.children ?? [];
	const prams = props.prams;
	const onTriggerOpen = props?.onTriggerOpen;

	const index = props?.index;
	const id = props?.id;
	const type = props?.type;

	const options = props?.options || {};

	const buttonLabel = options?.buttonLabel ?? "Click Me";
	const iconSize = options?.iconSize;
	const buttonIcon = options?.buttonIcon;
	const position = options?.position;

	const animateIn = `animate__${options?.slideIn || "fadeIn"}`;
	const animateOut = `animate__${options?.slideOut || "fadeOut"}`;

	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	const IconCustom = tablerIcon(buttonIcon);

	let positionClass = "";

	if (position === "topLeft") {
		positionClass = "absolute left-0 bottom-full";
	}

	if (position === "topRight") {
		positionClass = "absolute bottom-full right-0";
	}

	if (position === "bottomLeft") {
		positionClass = "absolute left-0 top-full";
	}

	if (position === "bottomRight") {
		positionClass = "absolute right-0 top-full";
	}

	if (position === "fixedMiddle") {
		positionClass = "mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-10";
	}

	if (position === "fixedLeft") {
		positionClass = "fixed top-0 left-0";
	}

	if (position === "fixedRight") {
		positionClass = "fixed top-0 right-0";
	}

	const handleOpen = () => {
		if (onTriggerOpen) {
			onTriggerOpen(false, prams);
		}

		setIsClosing(false);
		setIsOpen(true);
	};

	const handleClose = () => {
		if (onTriggerOpen) {
			onTriggerOpen(true, prams);
		}

		setIsClosing(true);
	};

	const handleAnimationEnd = () => {
		if (isClosing) {
			setIsOpen(false);
			setIsClosing(false);
		}
	};

	/*
		The fixed positions (side drawers, centred modal) render into <body>.
		`position: fixed` is relative to the viewport only while no ancestor has
		a transform, filter or backdrop-filter; a sticky header with
		`backdrop-blur` - WonderJoy's, and most glassy headers - becomes the
		frame instead, so `top-0 h-full` meant the header's height and the
		mobile menu opened as a 138px strip with its search cut off. The
		dropdown positions stay where they are, since they are meant to hang
		off the button. Same fix as the cart drawer (CartView.jsx).
	*/
	const isFixed = position === "fixedLeft" || position === "fixedRight" || position === "fixedMiddle";
	const rootRef = useRef(null);
	const [portalTarget, setPortalTarget] = useState(null);
	useEffect(() => {
		setPortalTarget(rootRef.current?.ownerDocument?.body ?? null);
	}, []);
	const place = (node) => (isFixed && portalTarget ? createPortal(node, portalTarget) : node);

	return (
		<div
			ref={rootRef}
			id={id}
			type={type}
			className={`${cls('*') || ""} relative`}
		>

			{/* Trigger Button */}
			<div
				className={`${cls('button') || ""}`}
				onClick={handleOpen}
			>
				<div
					className={`${cls('button-icon') || ""}`}
				>
					{IconCustom ? <IconCustom size={iconSize} /> : null}
				</div>

				<div
					className={`${cls('button-label') || ""}`}
				>
					{buttonLabel}
				</div>
			</div>

			{/* Popover */}
			{isOpen && place(
				<div
					className={`
                        ${cls('popover') || ""}
                        ${positionClass}
                        animate__animated
                        ${isClosing ? animateOut : animateIn}
                    `}
					onAnimationEnd={handleAnimationEnd}
				>
					{/* Close Button */}
					<div
						className={`${cls('popover-close') || ""}`}
						onClick={handleClose}
					>
						<IconX />
					</div>

					{/* Content */}
					<div
						className={`${cls('popover-content') || ""}`}
					>
						{children.length > 0 ? (
							children.map((child, idx) => (
								<BlockRender
									key={child.id}
									index={`${index}-${idx}`}
									block={child}
								/>
							))
						) : (
							/* Empty: nothing on the shop. The "Drop elements here" prompt is the builder's and used to show to shoppers. */
							null
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default PopoverButton;

