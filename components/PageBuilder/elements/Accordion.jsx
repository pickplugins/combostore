'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { MenuProvider } from "../context/MenuContext";
import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";

const Grid = (props) => {
	const {
		block,
		draggingBlock,
		setDraggingBlock,
		dragOverIndex,
		setDragOverIndex,
		setSelectedId,
		selectedId,
		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const cssSelectors = props?.cssSelectors;
	const children = props?.children || [];

	var options = props?.options;
	var orientation = options?.orientation;
	var items = options?.items;

	const [activeIndex, setactiveIndex] = useState([]);


	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");





		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};


	// const childrenArray = React?.Children?.toArray(children);


	// console.log(childrenArray);


	return (
		<div
			draggable
			id={id}
			className={`p-4 ${cssSelectors['*']?.classes ?? ''}    hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={onDragOver}
			onDrop={onDrop}
		>

			<div className={`${cssSelectors['accordion-items']?.classes}`}>
				{
					children.map((child, idx) => (
						<>

							<div className={`${cssSelectors['accordion-header']?.classes} ${items[idx]?.classes}`} onClick={() => {

								var activeIndexX = [...activeIndex]

								const index = activeIndex.indexOf(idx);

								if (index === -1) {
									activeIndexX.push(idx);
								} else {
									activeIndexX.splice(index, 1);
								}

								console.log(activeIndexX);


								setactiveIndex(activeIndexX)
							}}>

								<div className={`${cssSelectors['header-label']?.classes}`}>{items[idx]?.label}</div>
								<div className={`${cssSelectors['header-icon']?.classes}`}>

									{/* {items[idx]?.icon} */}
									{activeIndex.includes(idx) && (
										<IconChevronDown />
									)}
									{!activeIndex.includes(idx) && (
										<IconChevronUp />
									)}



								</div>

							</div>

							<div className={`${cssSelectors['accordion-content']?.classes} ${activeIndex.includes(idx) ? 'block' : 'hidden'}`}>
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
								/>
							</div>






						</>
					))
				}
			</div>


		</div>
	);
};

Grid.propTypes = {
	block: PropTypes.object,
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	handleDropInto: PropTypes.func,
};

export default Grid;
