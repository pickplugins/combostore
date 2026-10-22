import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";


const Button = (props) => {


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
	var tag = options?.tag ?? 'h1';
	var text = options?.text ?? 'Dummy Link';
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var linkTo = options?.linkTo;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;


	const Tag = tag;

	const IconX = TablerIcons[icon];



	return (
		<>

			{linkTo == 'custom' && (

				<Link draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}

					href={`${scheme}${url}`}

					onClick={e => {
						e.stopPropagation();
						e.preventDefault();


						setSelectedId(selectedId != id ? id : null);
					}}
					onDragStart={e => {
						e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
					}}
					onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

					onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
					onDragLeave={() => setDragOverIndex(null)}
				>

					{IconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{IconX ? <IconX size={iconSize} /> : null}
						</div>
					)}



					<div className={`${cssSelectors['label']?.classes}`}>{text}</div>

				</Link>
			)}
			{linkTo != 'custom' && (
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
					onDragLeave={() => setDragOverIndex(null)}
				>

					{IconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{IconX ? <IconX size={iconSize} /> : null}
						</div>
					)}



					<div className={`${cssSelectors['label']?.classes}`}>{text}</div>

				</div>

			)}


		</>
	);
};



export default Button;
