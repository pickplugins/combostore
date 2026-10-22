
"use client"
import { useState, useEffect } from "react";
import { IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconIdBadge2 } from "@tabler/icons-react";
import * as TablerIcons from '@tabler/icons-react';





const AddToCart = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var iconSize = options?.iconSize ?? 20;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;

	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var buttonText = options?.buttonText;
	var hideQuanity = options?.hideQuanity ?? false;
	var hideButton = options?.hideButton ?? false;











	var [quantity, setquantity] = useState(0);

	var productData = props?.productData
	var hideButtonText = props?.hideButtonText




	var productId = productData?.id


	const IconX = TablerIcons[icon];




	return (

		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}



			onClick={e => {
				e.stopPropagation();

				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}>


			{!hideQuanity && (
				<div className={`${cssSelectors['quantity-wrapper']?.classes}`} >
					<div onClick={() => {


					}} className="cursor-pointer ">
						<IconSquareRoundedMinusFilled />
					</div>
					<input type="text" name="addToCart" className={` ${hideButtonText ? "w-full" : "w-16"} !border-0 !shadow-none text-center focus:border-0`} value={quantity} onChange={ev => {


					}} />
					<div onClick={() => {

					}} className="cursor-pointer ">
						<IconSquareRoundedPlusFilled />
					</div>
				</div>
			)}


			{!hideButton && (
				<div onClick={() => { }} className={`${cssSelectors['button-wrapper']?.classes}`} >

					{IconX && (
						<div className={`${cssSelectors['button-icon']?.classes}`}>
							{IconX ? <IconX size={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['button-label']?.classes}`}>{buttonText}</div>


				</div>

			)}




		</div>


	);
};

export default AddToCart;
