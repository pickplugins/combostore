import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


const TermTitle = (props) => {

	var productData = props?.productData ?? {
		id: 123,
		title: 'Product Title',
		price: 52,
		description: 'Product Description',
		image: '',
		url: 'https://example.com/product/product-slug'
	};
	var productId = productData?.id;


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
	var username = options?.username;
	var label = options?.label ?? 'Order On Messenger';
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var message = options?.message ?? 'Hi i want to buy {product_title} {product_url}';


	const IconX = TablerIcons[icon];

	// var text = `Hi i want to buy ${productData?.title} ${appUrl}product/${productData?.slug}`;
	var text = format_message(message);

	const encodedText = encodeURIComponent(text);
	const url = `https://m.me/${username}?text=${encodedText}`;





	function strtr(str, replacements) {
		return Object.entries(replacements)
			.sort(([a], [b]) => b.length - a.length)
			.reduce(
				(result, [search, replace]) =>
					result.split(search).join(replace),
				str
			);
	}


	function format_message(dateString) {


		console.log(dateString);





		var prams = [];

		prams["{product_id}"] = productData?.id;
		prams["{product_title}"] = productData?.title;
		prams["{product_price}"] = productData?.price;
		prams["{product_description}"] = productData?.description;
		prams["{product_image}"] = productData?.image;
		prams["{product_url}"] = productData?.url;

		console.log(prams);

		console.log(strtr(dateString, prams));

		return strtr(dateString, prams);


	}







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

			<Link className={`${cssSelectors['link']?.classes}`} href={url}>


				{IconX && (
					<div className={`${cssSelectors['icon']?.classes}`}>
						{IconX ? <IconX size={iconSize} /> : null}
					</div>
				)}

				<div className={`${cssSelectors['label']?.classes}`}>{label}</div>



			</Link>
		</div>




	);
};



export default TermTitle;
