import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import BlockPreview from '../BlockPreview';
import { useMenu } from "../context/MenuContext";
import { IconChevronDown, IconPlus, IconSquare, IconFidgetSpinner, IconTrash, IconCopy, IconStar, IconX } from "@tabler/icons-react";


const List = (props) => {

	const menuAttr = useMenu();



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
	var cssSelectors = props?.cssSelectors ?? {};
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';
	var label = options?.label ?? '';
	var url = options?.url ?? '#';





	const Tag = tag;

	const [isActive, setisActive] = useState(false);



	return (
		<div draggable id={id} className={` ${cssSelectors['*']?.classes ?? ''} relative cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
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
					/>
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty Section - Drop elements here</span>
				</div>
			)}







		</div>
	);
};



export default List;
