'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import EntriesTable from "../../../components/EntriesTable";
import { useCounterStore } from '../../../store/useCounterStore';
import { useUtilsStore } from '../../../store/useUtilsStore';
import Spinner from "../../../components/Spinner";
import Link from "next/link";



const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const CustomerOrders = (props) => {

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors;
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var handleMoveBlock = props?.handleMoveBlock

	var type = props?.type
	var options = props?.options;
	var id = props?.id;

	var index = props?.index





	const children = props?.children || [];



	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");







		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};




	return (
		<div
			draggable
			id={id}
			className={` ${cssSelectors['*']?.classes ?? ''}  hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={onDragOver}
			onDrop={onDrop}
		>



		</div>
	);
};

CustomerOrders.propTypes = {
	block: PropTypes.object,
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	handleDropInto: PropTypes.func,
};

export default CustomerOrders;
