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

	var badges = product?.badges ?? [{ slug: 'tag-slug', name: 'Tag Name' }, { slug: 'tag-slug2', name: 'Tag Name 2' }];





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



			{badges?.length > 0 && (

				<div className={cssSelectors['items']?.classes}>




					{badges.map((item, index) => {
						return (
							<Link key={index} href={`${appUrl}badges/${item.slug}`} onClick={ev => {
								ev.preventDefault()
							}} className={cssSelectors['item']?.classes}>
								<span className={cssSelectors['category-name']?.classes}>{item.name}</span>
								{badges?.length > (index + 1) && (
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
