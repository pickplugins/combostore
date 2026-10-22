"use client"
import { useState, useEffect, useContext } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { usePost } from "../context/PostContext";

const ProductDiscount = (props) => {


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

	var regular_price = product?.regular_price;
	var sale_price = product?.sale_price;

	if (!sale_price) {
		return null;
	}


	//const [starIndex, setstarIndex] = useState(rate);


	function calculateDiscountPercentage(regular_price, sale_price) {
		const discount = regular_price - sale_price;
		return Math.round((discount / regular_price) * 100);
	}




	// useEffect(() => {
	// 	onChange(starIndex)
	// }, [starIndex]);



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



			<div className={`${cssSelectors['discount']?.classes}`}>{calculateDiscountPercentage(regular_price, sale_price)}%</div>
			{label && (
				<span className={`${cssSelectors['label']?.classes}`}>{label}</span>
			)}


		</div>







	);
};

export default ProductDiscount;
