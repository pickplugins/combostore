'use client'
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { LayoutCellMarkup } from "./GridItemView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a layout cell - a grid's (GridItem) or, with
	other props, a columns block's or a tab / accordion panel (no parent key): the shared LayoutCellMarkup with the same
	classes as the shop, its blocks rendered by BlockPreview, taking drops,
	and a drop prompt when empty.
*/
export function LayoutCellPreview({ props, type, parentType, parentKey, emptyLabel }) {

	var { draggingBlock, setDraggingBlock, dragOverIndex, setDragOverIndex, setSelectedId, selectedId, index, id, handleMoveBlock } = props;

	var cls = elementCssClasses(type, props?.cssSelectors);
	var parentCls = parentType ? elementCssClasses(parentType, props?.ParentCssSelectors) : () => '';
	var children = Array.isArray(props?.children) ? props.children : [];

	return (
		<LayoutCellMarkup
			cls={cls}
			parentCls={parentCls}
			parentKey={parentKey}
			id={id}
			index={index}
			type={props?.type}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 relative ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); },
				onDragStart: (e) => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		>
			{children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview key={child.id ?? idx} index={`${index}-${idx}`} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">{emptyLabel}</span>
				</div>
			)}
		</LayoutCellMarkup>
	);
}

/* Builder preview of one grid cell. */
const GridItem = (props) => (
	<LayoutCellPreview props={props} type="gridItem" parentType="grid" parentKey="grid-item" emptyLabel="Empty grid cell - drop elements here" />
);

export default GridItem;
