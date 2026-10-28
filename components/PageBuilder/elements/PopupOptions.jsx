import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import CssClassPicker from "../CssClassPicker";
import CssSelectors from "../CssSelectors";


const GridOptions = (props) => {

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};


	const [loading, setloading] = useState(false);


	// useEffect(() => {

	// 	fetchPosts();
	// }, []);



	var visibleTriggersPrams = {
		initial: {
			label: ("Initial"),
			description: "Visble as soon as possible",
			args: { id: "initial", value: 5 },
		},
		delay: {
			label: ("Delay"),
			description: "Delay certain amount of time after page load.",
			args: { id: "delay", value: 1000 },
		},
		scrollPercent: {
			label: ("Scroll Percent"),
			description: "After certain amount(parcent) of scroll",
			args: { id: "scrollPercent", min: "30", max: 50 },
		},
		scrollFixed: {
			label: ("Scroll Fixed"),
			description: "After fixed amount of scroll",
			args: { id: "scrollFixed", min: "30", max: 50 },
			isPro: true,
		},
		scrollEnd: {
			label: ("Scroll End"),
			description: "Scroll to end of page",
			args: { id: "scrollEnd", min: "30", max: 50 },
			isPro: true,
		},
		scrollElement: {
			label: ("Scroll Element"),
			description: "Scroll to certain element by class or id",
			args: { id: "scrollElement", value: "" },
			isPro: true,
		},
		clickFirst: {
			label: ("Click First"),
			description: "After first click on page",
			args: { id: "clickFirst", value: 1 },
			isPro: true,
		},
		clickCount: {
			label: ("Click Count"),
			description: "After certain amount of click on page",
			args: { id: "clickCount", value: 5 },
			isPro: true,
		},
		clickRight: {
			label: ("Click Right"),
			description: "on right click",
			args: { id: "clickRight", value: 0 },
			isPro: true,
		},
		onExit: {
			label: ("On Exit"),
			description: "before close browser tab.",
			args: { id: "onExit", value: 1 },
			isPro: true,
		},
		clickElement: {
			label: ("Click Element"),
			description: "After click an element by id or class",
			args: { id: "clickElement", value: "" },
			isPro: true,
		},
		dateCountdownExpired: {
			label: ("Date Countdown Expired"),
			description: "After expired from date countdown block",
			args: { id: "dateCountdownExpired", value: "", once: false },
			isPro: true,
		},
		keyPress: {
			label: ("Key Press"),
			description: "Key Press to close.",
			args: { id: "keyPress", value: "esc" },
			isPro: true,
		},

		mouseOutElement: {
			label: ("Mouse Out Element"),
			description: "if visitor come from external website.",
			args: { id: "mouseOutElement", value: "" },
			isPro: true,
		},
		mouseOverElement: {
			label: ("Mouse Over Element"),
			description: "if visitor come from external website.",
			args: { id: "mouseOverElement", value: "" },
			isPro: true,
		},
		// inactiveXSec: {
		// 	label: "Inactive X Second",
		// 	description: "if visitor come from external website.",
		// 	args: { id: "inactiveXSec", value: "" },
		// 	isPro: true,
		// },
		// ADBlocker: {
		// 	label: "Ad blocker Popup",
		// 	description: "if visitor come from external website.",
		// 	args: { id: "ADBlocker", value: "" },
		// 	isPro: true,
		// },
	};

	var closeTriggerPrams = {
		delay: {
			label: "Delay",
			description:
				"Delay certain amount of time after page load.",
			args: { id: "delay", value: 1000 },
		},
		scrollPercent: {
			label: "Scroll Percent",
			description: "After certain amount(%) of scroll",
			args: { id: "scrollPercent", min: "30", max: 50 },
		},
		scrollFixed: {
			label: "Scroll Fixed",
			description: "After fixed amount of scroll",
			args: { id: "scrollFixed", min: "30", max: 50 },
			isPro: true,
		},
		scrollEnd: {
			label: "Scroll End",
			description: "Scroll to end of page",
			args: { id: "scrollEnd", min: "30", max: 50 },
			isPro: true,
		},
		scrollElement: {
			label: "Scroll Element",
			description:
				"Scroll to certain element by class or id",


			args: { id: "scrollElement", value: "" },
			isPro: true,
		},
		clickFirst: {
			label: "Click First",
			description: "After first click on page",
			args: { id: "clickFirst", value: 1 },
			isPro: true,
		},
		clickCount: {
			label: "Click Count",
			description: "After certain amount of clicks on page",
			args: { id: "clickCount", value: 5 },
			isPro: true,
		},
		clickRight: {
			label: "Click Right",
			description: "On right click",
			args: { id: "clickRight", value: 0 },
			isPro: true,
		},
		onExit: {
			label: "On Exit",
			description: "Before closing browser tab.",
			args: { id: "onExit", value: 1 },
			isPro: true,
		},
		clickElement: {
			label: "Click Element",
			description:
				"After clicking an element by id or class",


			args: { id: "clickElement", value: "" },
			isPro: true,
		},
		dateCountdownExpired: {
			label: "Date Countdown Expired",
			description:
				"After expiration from date countdown block",


			args: { id: "dateCountdownExpired", value: "", once: false },
			isPro: true,
		},
		keyPress: {
			label: "Key Press",
			description: "Key press to close.",
			args: { id: "keyPress", values: [] },
			isPro: true,
		},
		mouseOutElement: {
			label: "Mouse Out Element",
			description:
				"If visitor comes from an external website.",


			args: { id: "mouseOutElement", value: "" },
			isPro: true,
		},
		mouseOverElement: {
			label: "Mouse Over Element",
			description:
				"If visitor comes from an external website.",


			args: { id: "mouseOverElement", value: "" },
			isPro: true,
		},
		fluentformSubmission: {
			label: "Fluentform Submission",
			description:
				"If visitor comes from an external website.",


			args: { id: "fluentformSubmission", value: "" },
		},
		formidableformsSubmission: {
			label: "Formidable Forms Submission",
			description:
				"If visitor comes from an external website.",


			args: { id: "formidableformsSubmission", value: "" },
		},
	};












	return (
		<div className="p-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">


				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />

			</div>


		</div>
	);
};



export default GridOptions;
