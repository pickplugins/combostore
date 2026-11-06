import React from "react";
import { ButtonMarkup } from './ButtonView';
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a button.

	It renders ButtonView's own ButtonMarkup - the same link (or none), icon,
	label and classes from the same cssSelectors defaults in
	ElementsDefinition.js - so the canvas shows the button as the shop does. A
	click selects the block and never follows the link.
*/
const Button = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('button', props?.cssSelectors);

	return (
		<ButtonMarkup
			cls={cls}
			id={id}
			type={props?.type}
			options={props?.options}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => {
					e.stopPropagation();
					e.preventDefault();
					setSelectedId(selectedId != id ? id : null);
				},
				onDragStart: e => {
					e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
				},
				onDragEnd: () => { setDraggingBlock(null); setDragOverIndex(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex(index); },
				onDragLeave: () => setDragOverIndex(null),
			}}
		/>
	);
};

export default Button;
