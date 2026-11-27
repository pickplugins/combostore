import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";


const PopoverButton = (props) => {




	var onTriggerOpen = props?.onTriggerOpen;

	var title = props.title;
	var prams = props.prams;
	var buttonIcon = props.buttonIcon;
	var wrapperClass = props.wrapperClass;
	var children = props.children;
	var buttonLabel = props.buttonLabel ? props.buttonLabel : "";
	var buttonClass = props.buttonClass ? props.buttonClass : "items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer";
	var position = props.position;
	var enableCloseBtn = props.enableCloseBtn ?? true;
	var popoverClass = props.popoverClass ? props.popoverClass : `max-h-[600px] bg-white overflow-y-auto z-[999] border-2 border-solid border-indigo-600 rounded-sm ${position ? "absolute" : "mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-10"} `;
	/* A panel pinned to the window rather than to its button. */
	var isFixedPanel = /(^|\s)fixed(\s|$)/.test(popoverClass);

	/*
		`drawer` ("left" or "right") slides the panel in from that edge of the
		window over a backdrop, instead of the centered or anchored popover.
		It is opt-in, so every other caller keeps the panel it had.
	*/
	var drawer = props.drawer;
	var drawerClass = props.drawerClass ? props.drawerClass : "w-full sm:w-[90vw] lg:w-[1100px] xl:w-[1400px]";

	const [isOpen, setIsOpen] = useState(false);

	/*
		The drawer animates both ways, so it mounts before it slides in and
		unmounts only once it has slid back out. Mounting it on open rather
		than leaving it mounted matters here: the children fetch on mount,
		and a list renders one of these per row.
	*/
	const [mounted, setMounted] = useState(false);
	const [slid, setSlid] = useState(false);

	useEffect(() => {
		if (!drawer) return;

		if (isOpen) {
			setMounted(true);
			const frame = requestAnimationFrame(() => setSlid(true));
			return () => cancelAnimationFrame(frame);
		}

		setSlid(false);
		const timer = setTimeout(() => setMounted(false), 300);
		return () => clearTimeout(timer);
	}, [isOpen, drawer]);

	/*
		Opt-in, because many callers hold forms a stray click should not close.
		It listens for the press rather than the click: by the time a click
		reaches the document, picking an option may have removed its target
		from the panel, and that would read as a click outside.
	*/
	const wrapperRef = useRef(null);
	const panelRef = useRef(null);

	/*
		Fixed panels (the centered popover and the drawers) render into <body>.
		The dashboard's <main> is `isolate` (DashboardShell), which keeps
		page-level stacking below the sticky header - so a fixed panel inside
		it, whatever its z-index, was painted under the header (z-20), and the
		header covered the panel's title bar and close button. Outside <main>
		the panel's own z-index applies. Anchored popovers (topLeft,
		bottomRight...) stay in place: they must move with their button.
	*/
	const [portalTarget, setPortalTarget] = useState(null);
	useEffect(() => {
		setPortalTarget(document.body);
	}, []);
	const portal = (node) => (portalTarget ? createPortal(node, portalTarget) : node);

	useEffect(() => {
		if (!props.closeOnOutsideClick || !isOpen) return;

		const onPress = ev => {
			/* The panel may be portalled out of the wrapper, so check both. */
			if (!wrapperRef.current?.contains(ev.target) && !panelRef.current?.contains(ev.target)) {
				toggle();
			}
		};

		document.addEventListener("pointerdown", onPress);
		return () => document.removeEventListener("pointerdown", onPress);
	}, [props.closeOnOutsideClick, isOpen]);

	var positionClass = "";

	if (position == 'topLeft') {
		var positionClass = "left-0 bottom-full";

	}
	if (position == 'topRight') {
		var positionClass = " bottom-full right-0";

	}
	if (position == 'bottomLeft') {
		var positionClass = " left-0 top-full";

	}
	if (position == 'bottomRight') {
		var positionClass = "right-0 top-full";

	}


	const toggle = ev => {
		if (onTriggerOpen) {
			onTriggerOpen(isOpen, prams)
		}

		setIsOpen(!isOpen)
	};

	const panelHead = (
		<div className="flex justify-between bg-gray-700 p-2">
			<div className="text-white">{title}</div>
			{enableCloseBtn && (
				<div className=" bg-red-400 text-white px-1 py-1 rounded-sm cursor-pointer" onClick={toggle}>
					<IconX />
				</div>
			)}

		</div>
	);

	return <div ref={wrapperRef} className={`relative ${wrapperClass}`}>

		<div className={`${buttonClass} flex gap-2 w-max`} onClick={toggle}>
			{buttonIcon}
			{buttonLabel}</div>

		{/* Above the header (z-20) and the mobile nav (z-40/50); see portalTarget. */}
		{drawer ? mounted && portal(
			<div ref={panelRef}>
				<div
					onClick={toggle}
					aria-hidden="true"
					className={`fixed inset-0 z-[60] bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ${slid ? "opacity-100" : "pointer-events-none opacity-0"}`}
				/>

				<div className={`fixed inset-y-0 ${drawer == 'right' ? "right-0" : "left-0"} z-[70] flex max-w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${drawerClass} ${slid ? "translate-x-0" : (drawer == 'right' ? "translate-x-full" : "-translate-x-full")}`}>

					{panelHead}
					<div className="flex-1 overflow-y-auto">
						{children}
					</div>
				</div>
			</div>

		) : isOpen && (isFixedPanel ? portal : (node) => node)(
			<div ref={panelRef} className={` ${popoverClass} ${positionClass} `}>

				{panelHead}
				<div>
					{children}
				</div>
			</div>

		)}

	</div>;
};



export default PopoverButton;