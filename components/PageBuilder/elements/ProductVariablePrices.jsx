"use client"
import { useState, useEffect } from "react";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import { useUtilsStore } from '../../../store/useUtilsStore';
import {
	IconCheckbox,
	IconSquare,

} from "@tabler/icons-react";

const ProductVariablePrices = (props) => {


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
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo ?? 'postUrl';


	var productData = usePost();


	const Tag = tag;


	const { wrapCurrency } = useUtilsStore()


	productData = productData ?? { price: 100, sale_price: 80, regular_price: 150, bargainPrice: 120, pwyw_default_price: 150, pwyw_min_price: 120, bargain_default_price: 100, variablePrices: [{ label: '1kg Pack', price: 100, sale_price: 80, regular_price: 150, }, { label: '5kg Pack', price: 100, sale_price: 80, regular_price: 150, }] }
	var onChangePrice = props?.onChangePrice
	var viewType = props?.viewType ? props?.viewType : "list"



	var productId = productData?.id
	var price_type = productData?.price_type ?? 'simple'
	var discountRequest = productData?.discountRequest
	var variablePrices = productData?.variablePrices
	var pwyw_min_price = productData?.pwyw_min_price
	var pwyw_default_price = productData?.pwyw_default_price

	var [variablePricesIndex, setvariablePricesIndex] = useState(0);
	var [pwywSetPrice, setpwywSetPrice] = useState(false);
	var [pwywPrice, setpwywPrice] = useState(productData?.pwyw_default_price);

	var [bargainSetPrice, setbargainSetPrice] = useState(false);

	var [bargainPrice, setbargainPrice] = useState(productData?.bargain_default_price);
	var [seeBargainPrice, setseeBargainPrice] = useState(false);

	var [quantity, setquantity] = useState(props?.quantity);


	var [variations, setvariations] = useState(productData.variations ?? []);
	var [attributes, setattributes] = useState(productData.attributes ?? [{ title: 'Color', type: 'color', items: ['Red', 'Blue'] }, { title: 'Size', type: 'color', items: ['Small', 'Medium'] }]);










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
			onDragLeave={() => setDragOverIndex(null)}
		>



			<div className={`${cssSelectors['attr-wrap']?.classes}`}>

				{attributes.map(attribute => {

					var attrTitle = attribute?.title
					var attrItems = attribute?.items

					return (

						<div className={`${cssSelectors['attr-item']?.classes}`}>

							<div className={`${cssSelectors['attr-title']?.classes}`}>{attrTitle}</div>
							<div className={`${cssSelectors['attr-items-wrap']?.classes}`}>

								{attrItems.map(item => {

									return (

										<div className={`${cssSelectors['variation-item']?.classes}`}>{item}</div>

									)

								})}

							</div>

						</div>

					)

				})}

				<div className={`${cssSelectors['variation-price']?.classes}`}>$123</div>


			</div>


		</div>
	);
};



export default ProductVariablePrices;
