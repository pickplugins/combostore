import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";


import { elementCssClasses } from "../ElementsDefinition";
const Input = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var onChangeInput = props?.onChangeInput
	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the input defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('input', cssSelectors);


	var id = props?.id;
	var type = props?.type;
	var options = props?.options;

	var value = props?.value;
	var placeholder = props?.placeholder;
	var inputType = options?.type ?? 'text';
	var icon = options?.icon;
	var iconSize = options?.iconSize;




	const IconX = TablerIcons[icon];



	return (




		<div draggable id={id} type={type} className={`${cls('*')} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}



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

			<input type={inputType} placeholder={placeholder} value={value} className={`${cls('input')}`} onChange={ev => {

				var value = ev.target.value;

				onChangeInput?.(value)

			}} />


			{IconX && (
				<div className={`${cls('icon')}`}>
					{IconX ? <IconX size={iconSize} /> : null}
				</div>
			)}




		</div>





	);
};



export default Input;
