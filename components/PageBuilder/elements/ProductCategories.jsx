import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
const appUrl = process.env.NEXT_PUBLIC_APP_URL;


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
	var tag = options?.tag ?? 'h1';
	var label = options?.label;
	var readmore = options?.readmore ?? 'Read more';
	var maxWord = options?.maxWord ?? 20;


	const product = usePost();

	var categories = product?.categories ?? [{ slug: 'category-slug', name: 'Category Name' }, { slug: 'category-slug2', name: 'Category Name 2' }];

	const Tag = tag;




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
				<div className={cssSelectors['label']?.classes}>{options?.label}</div>
			)}


			{categories?.length > 0 && (

				<div className={cssSelectors['items']?.classes}>




					{categories.map((item, index) => {
						return (
							<Link key={index} onClick={ev => {
								ev.preventDefault()
							}} href={`${appUrl}categories/${item.slug}`} className={cssSelectors['item']?.classes}>
								<span className={cssSelectors['category-name']?.classes}>{item.name}</span>
								{categories?.length > (index + 1) && (
									<span className={cssSelectors['separator']?.classes}>, </span>
								)}
							</Link>
						)
					})}
				</div>

			)}



		</div>















	);
};



export default TermTitle;
