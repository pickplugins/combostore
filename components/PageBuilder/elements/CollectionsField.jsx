"use client"
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import { useLoop } from "../context/LoopContext";
import { useCollections } from "../context/CollectionsContext";

const Text = (props) => {

	const loop = useLoop();
	const CollectionsAttr = useCollections();
	var CollectionsCssSelectors = CollectionsAttr?.cssSelectors ?? {}

	var fields = loop?.fields ?? [];

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var fieldId = options?.fieldId;
	var tag = options?.tag ?? 'div';




	const Tag = tag;

	const element = fields.find(item => item.id === fieldId);




	return (
		<Tag draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}  ${CollectionsCssSelectors['title']?.classes}  hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
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

			{element?.label && (
				<div className={`${cssSelectors['label']?.classes}`}>{element?.label}</div>
			)}

			{element?.value && (
				<div className={`${cssSelectors['value']?.classes}`}>{element?.value}</div>
			)}


		</Tag>
	);
};



export default Text;
