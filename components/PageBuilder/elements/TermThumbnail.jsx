import PropTypes from "prop-types";
import React from "react";
import { useCategory } from "../context/CategoryContext";
import Image from "next/image";
import Link from "next/link";


const TermTitle = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';

	var linkTo = options?.linkTo;

	const category = useCategory();


	const Tag = tag;




	return (
		<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200   hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
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



			{linkTo == 'termUrl' && (
				<Link href={`#`}
					draggable id={id} index={index} type={type} className={`${cssSelectors['link']?.classes}  `}

				>
					{category?.thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={category?.thumbnail?.src} width={400} height={400} alt={``} />

					)}

				</Link>

			)}
			{linkTo != 'termUrl' && (
				<>

					{category?.thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={category?.thumbnail?.src ?? '/thumb.png'} width={400} height={400} alt={``} />
					)}
					{!category?.thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={category?.thumbnail?.src ?? '/thumb.png'} width={400} height={400} alt={``} />
					)}


				</>

			)}












		</div>
	);
};



export default TermTitle;
