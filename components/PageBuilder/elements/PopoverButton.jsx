import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconPlus, IconX } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import 'animate.css';

import * as TablerIcons from '@tabler/icons-react';


const PopoverButton = (props) => {

	var cssSelectors = props?.cssSelectors;

	var children = props.children ?? [];
	var prams = props.prams;
	var onTriggerOpen = props?.onTriggerOpen;



	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var handleMoveBlock = props?.handleMoveBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var buttonLabel = options?.buttonLabel ?? 'Click Me';
	var iconSize = options?.iconSize;
	var buttonIcon = options.buttonIcon;
	var position = options.position;
	var slideOut = options.slideOut;
	var slideIn = options.slideIn;






	const IconCustom = TablerIcons[buttonIcon];

	const [animate, setAnimate] = useState(false);




	var popoverClass = `  `;

	const [isOpen, setIsOpen] = useState(false);

	var positionClass = "";

	if (position == 'topLeft') {
		var positionClass = "absolute left-0 bottom-full";

	}
	if (position == 'topRight') {
		var positionClass = "absolute bottom-full right-0";

	}
	if (position == 'bottomLeft') {
		var positionClass = "absolute left-0 top-full";

	}
	if (position == 'bottomRight') {
		var positionClass = "absolute right-0 top-full";

	}
	if (position == 'fixedMiddle') {
		var positionClass = "mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-10";
	}
	if (position == 'fixedLeft') {
		var positionClass = " fixed w-64 top-0 left-0";
	}
	if (position == 'fixedRight') {
		var positionClass = " fixed w-64 top-0 right-0";
	}





	useEffect(() => {
		setAnimate(!animate)

	}, [isOpen]);

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");

		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};


	return <div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}  relative hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
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
		onDrop={onDrop}

	>


		<div className={`${cssSelectors['button']?.classes} `} onClick={ev => {
			if (onTriggerOpen) {
				onTriggerOpen(isOpen, prams)
			}

			setIsOpen(!isOpen)
		}}>
			<div className={`${cssSelectors['button-icon']?.classes} `}>
				{IconCustom ? <IconCustom size={iconSize} /> : null}


			</div>
			<div className={`${cssSelectors['button-label']?.classes} `}>{buttonLabel}</div>


		</div>

		{isOpen && (
			<div className={`${cssSelectors['popover']?.classes}  ${positionClass} animate__animated ${animate ? " animate__fadeOutLeft" : "animate__fadeInLeft"}`}>

				<div className={`${cssSelectors['popover-close']?.classes} `} onClick={ev => {

					if (onTriggerOpen) {
						onTriggerOpen(isOpen, prams)
					}
					setIsOpen(!isOpen)

				}}>
					<IconX />
				</div>



				<div className={`${cssSelectors['popover-content']?.classes} `}>




					{children.length > 0 ? (
						children.map((child, idx) => (
							<BlockPreview
								key={child.id}
								index={`${index}-${idx}`}
								block={child}
								draggingBlock={draggingBlock}
								dragOverIndex={dragOverIndex}
								setDragOverIndex={setDragOverIndex}
								setDraggingBlock={setDraggingBlock}
								setSelectedId={setSelectedId}
								selectedId={selectedId}
								handleMoveBlock={handleMoveBlock}
								parentCssSelectors={cssSelectors}
							/>
						))
					) : (
						<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
							<IconPlus size={24} stroke={1.5} />
							<span className="text-xs mt-1">Empty Columns - Drop elements here</span>
						</div>
					)}




				</div>
			</div>

		)}

	</div>;
};



export default PopoverButton;
