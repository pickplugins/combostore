'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { MenuProvider } from "../context/MenuContext";
import * as TablerIcons from '@tabler/icons-react';

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
	var tabsItems = options?.tabsItems;

	const [activeTab, setActiveTab] = useState(props?.activeTab ?? 0);


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


			<div className={`${cssSelectors['navs-items']?.classes} flex overflow-x-auto scrollbar-hide ${orientation == 'vertical' ? " lg:flex-col mb-4 lg:flex-nowrap flex-wrap" : ""} `}>
				{tabsItems.map((tab, index) => {

					var isActive = activeTab === index;
					const IconX = TablerIcons[tab.icon];

					return (


						<div
							key={index}
							className={`${cssSelectors['nav-item']?.classes}  ${isActive
								? cssSelectors['nav-item-active']?.classes
								: ""
								}`}
							onClick={() => setActiveTab(index)}
						>
							{/* <div>{tab.icon}</div> */}

							<div className={`${cssSelectors['nav-item-icon']?.classes}`}>
								{IconX ? <IconX /> : null}
							</div>
							<div className={`${cssSelectors['nav-item-label']?.classes}`}>{tab.label}</div>
						</div>
					)
				})}
			</div>

			{
				children.map((child, idx) => (
					<>
						{idx == activeTab && (

							<div className={`${cssSelectors['nav-item-content']?.classes}`}>
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

						)}

					</>
				))
			}
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
