import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import BlockPreview from '../BlockPreview';
import { useMenu } from "../context/MenuContext";
import { IconChevronDown, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconCopy, IconStar, IconX } from "@tabler/icons-react";
import * as TablerIcons from '@tabler/icons-react';


const List = (props) => {

	const menuAttr = useMenu();
	var MenuCssSelectors = menuAttr?.cssSelectors



	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var handleMoveBlock = props?.handleMoveBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	const children = props?.children || [];

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index


	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors;
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';
	var label = options?.label ?? '';
	var url = options?.url ?? '#';
	var icon = options?.icon;
	var iconSize = options?.iconSize;


	const IconX = TablerIcons[icon];


	const Tag = tag;

	const [isActive, setisActive] = useState(false);



	return (
		<li draggable id={id} className={`${MenuCssSelectors['menu-item']?.classes} ${cssSelectors['*']?.classes ?? ''} relative cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
			onClick={e => {
				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}

		>



			<Link href={url} className={`${MenuCssSelectors['menu-link']?.classes} ${cssSelectors['link']?.classes} flex  gap-2 items-center justify-between`} onClick={ev => {
				// ev.stopPropagation();
				ev.preventDefault()

				setisActive(!isActive)
			}}>

				{IconX && (
					<div className={`${cssSelectors['icon']?.classes} ${MenuCssSelectors['icon']?.classes} ${cssSelectors['icon']?.classes}`}>
						{IconX ? <IconX size={iconSize} /> : null}
					</div>
				)}

				<span className={`${MenuCssSelectors['link-label']?.classes} ${cssSelectors['label']?.classes} `}>{label}</span>

				{children.length > 0 && (
					<span >
						<IconChevronDown size={16} />
					</span>

				)}

			</Link>




			{children.length > 0 && (



				<>


					<ul className={`${MenuCssSelectors['sub-menu']?.classes} ${isActive ? 'block ' : 'hidden'} absolute top-full left-0 w-max bg-white shadow-lg z-50 ${cssSelectors['sub-menu']?.classes}`}>



						{
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
								/>
							))
						}
					</ul>
				</>




			)}





			{options?.text}

		</li>
	);
};



export default List;
