import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';

import CssStyles from './styles/CssStyles';


const ElementStyles = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX, onChangeStyleElement, onAddStyleElement, onRemoveStyleElement, onBulkAddStyleElement, onResetElement } = useCounterStore()


	var onTriggerOpen = props?.onTriggerOpen;

	var selectedBlock = props.selectedBlock;
	var updateBlock = props?.updateBlock;

	var prams = props.prams;

	const [loading, setloading] = useState(false);




	return (
		<div className="">


			{/* 
			<CssStyles
				obj={selectedBlock}
				updateBlock={updateBlock}
				onChange={(sudoScource, newVal, attr) => {
					onChangeStyleElement(
						sudoScource,
						newVal,
						attr,
						selectedBlock

					);
				}}
				onAdd={(sudoScource, key) => {
					onAddStyleElement(
						sudoScource,
						key,
						selectedBlock,

					);
				}}
				onRemove={(sudoScource, key) => {
					onRemoveStyleElement(
						sudoScource,
						key,
						selectedBlock,


					);
				}}
				onBulkAdd={(sudoScource, cssObj) => {
					onBulkAddStyleElement(
						sudoScource,
						cssObj,
						selectedBlock,



					);
				}}
				onReset={(sudoSources) => {
					onResetElement(
						sudoSources,
						selectedBlock,



					);
				}}
			/> */}
		</div>
	);
};



export default ElementStyles;
