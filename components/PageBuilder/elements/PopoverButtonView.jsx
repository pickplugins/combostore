"use client"
import React, { useState } from "react";
import { IconPlus, IconX } from "@tabler/icons-react";
import BlockRender from "../BlockRender";
import "animate.css";

import * as TablerIcons from "@tabler/icons-react";

const PopoverButton = (props) => {
	const cssSelectors = props?.cssSelectors || {};
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

	const IconCustom = TablerIcons[buttonIcon];

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

	return (
		<div

			id={id}
			type={type}
			className={`${cssSelectors["*"]?.classes || ""} relative`}
		>

			{/* Trigger Button */}
			<div
				className={`${cssSelectors["button"]?.classes || ""}`}
				onClick={handleOpen}
			>
				<div
					className={`${cssSelectors["button-icon"]?.classes || ""}`}
				>
					{IconCustom ? <IconCustom size={iconSize} /> : null}
				</div>

				<div
					className={`${cssSelectors["button-label"]?.classes || ""}`}
				>
					{buttonLabel}
				</div>
			</div>

			{/* Popover */}
			{isOpen && (
				<div
					className={`
                        ${cssSelectors["popover"]?.classes || ""}
                        ${positionClass}
                        animate__animated
                        ${isClosing ? animateOut : animateIn}
                    `}
					onAnimationEnd={handleAnimationEnd}
				>
					{/* Close Button */}
					<div
						className={`${cssSelectors["popover-close"]?.classes || ""}`}
						onClick={handleClose}
					>
						<IconX />
					</div>

					{/* Content */}
					<div
						className={`${cssSelectors["popover-content"]?.classes || ""}`}
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
							<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
								<IconPlus size={24} stroke={1.5} />

								<span className="text-xs mt-1">
									Empty Columns - Drop elements here
								</span>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default PopoverButton;

