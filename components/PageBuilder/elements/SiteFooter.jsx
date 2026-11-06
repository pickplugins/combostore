"use client"
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import BlockRender from '../BlockRender';
import { useTemplatePart, TemplatePartScope } from "./SiteHeaderView";
import { SiteFooterMarkup } from "./SiteFooterView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the site footer: SiteFooterView's own markup
	and classes. With a template part chosen it shows that part as it will
	look - it said "Template will loaded dynamically." - but read-only, with
	a note: its blocks are edited in the template part itself. Without one,
	its own blocks are editable here (with the drag props they were missing),
	and an empty footer is a drop zone.
*/
const SiteFooter = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var id = props?.id;
	var index = props?.index

	var cls = elementCssClasses('siteFooter', props?.cssSelectors);

	var partId = props?.options?.id || null;
	var { blocks, loading, error, repeats } = useTemplatePart(partId);
	var children = Array.isArray(props?.children) ? props.children : [];

	return (
		<SiteFooterMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			rootClassName={`relative ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''}`}
			rootProps={{
				draggable: true,
				onClick: (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); },
				onDragStart: (e) => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					if (partId) return;
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		>
			{partId ? (
				<>
					<div className="pointer-events-none select-none">
						<TemplatePartScope partId={partId}>
							{(blocks ?? []).map((child, idx) => (
								<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
							))}
						</TemplatePartScope>
					</div>
					<div className="absolute right-2 top-2 z-10 rounded-md bg-yellow-100/95 px-2 py-1 text-[11px] text-yellow-900 shadow-sm">
						{repeats ? 'This footer template includes itself, so it is not shown here.' : loading ? 'Loading the footer template…' : error ? 'The footer template could not be loaded.' : 'Footer template - edit it in Template Parts.'}
					</div>
				</>
			) : children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview key={child.id ?? idx} index={`${index}-${idx}`} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))
			) : (
				<div className="flex flex-col items-center justify-center py-4 text-gray-400 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="mt-1 text-xs">Empty footer - drop elements here, or choose a footer template in the panel</span>
				</div>
			)}
		</SiteFooterMarkup>
	);
};

export default SiteFooter;
