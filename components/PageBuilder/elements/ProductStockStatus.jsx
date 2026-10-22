import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


const TermTitle = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var label = options?.label;
	var labelIcon = options?.labelIcon;
	var outOfStockIcon = options?.outOfStockIcon;
	var inStockIcon = options?.inStockIcon;
	var iconSize = options?.iconSize;
	var outOfStockText = options?.outOfStockText ?? 'Out of stock';
	var inStockText = options?.inStockText ?? 'In stock';
	var stock_status = options?.stock_status ?? 'instock';
	const product = usePost();

	// var stock_status = product?.stock_status ?? 'outofstock';


	const LabelIconX = TablerIcons[labelIcon];
	const OutOfStockIconX = TablerIcons[outOfStockIcon];
	const InStockIconX = TablerIcons[inStockIcon];



	return (


		<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)} >


			{label && (
				<div className={`${cssSelectors['label']?.classes} `}>
					{LabelIconX && (
						<div className={`${cssSelectors['label-icon']?.classes}`}>
							{LabelIconX ? <LabelIconX size={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['label-text']?.classes} `}>
						{label}
					</div>

				</div>
			)}



			{stock_status == 'outofstock' && (
				<div className={`${cssSelectors['stock-status']?.classes} ${cssSelectors['out-of-stock']?.classes} `}>

					{OutOfStockIconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{OutOfStockIconX ? <OutOfStockIconX size={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['label-text']?.classes} `}>
						{outOfStockText}
					</div>


				</div>
			)}
			{stock_status == 'instock' && (
				<div className={`${cssSelectors['stock-status']?.classes} ${cssSelectors['in-stock']?.classes} `}>
					{InStockIconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{InStockIconX ? <InStockIconX Iize={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['label-text']?.classes} `}>
						{inStockText}
					</div>


				</div>
			)}


		</div>















	);
};



export default TermTitle;
