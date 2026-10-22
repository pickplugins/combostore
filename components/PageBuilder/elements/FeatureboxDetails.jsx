import PropTypes from "prop-types";
import React from "react";
import { useLoop } from "../context/LoopContext";
import { useFeatuerbox } from "../context/FeatuerboxContext";

const Text = (props) => {

	const loop = useLoop();
	const featuerboxAttr = useFeatuerbox();
	var FeatuerboxCssSelectors = featuerboxAttr?.cssSelectors ?? {}

	var loopText = loop?.description;

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




	const Tag = tag;




	return (
		<Tag draggable id={id} type={type} className={`${FeatuerboxCssSelectors['description']?.classes} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
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

			{loopText}

		</Tag>
	);
};



export default Text;
