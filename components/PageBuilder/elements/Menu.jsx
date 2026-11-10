'use client'
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { MenuMarkup, menuVisibilityClasses } from "./MenuView";
import { elementCssClasses } from "../ElementsDefinition";

/* True when `targetId` is one of these blocks or anywhere below them. */
const containsId = (blocks, targetId) =>
	(blocks || []).some((b) => b?.id === targetId || containsId(b?.children, targetId));

/*
	Builder (canvas) preview of the menu: MenuView's own markup, classes and
	context; an empty menu is a drop zone for menu items (outside the list,
	which may only hold <li>s).

	It hides below its "Show from" width as on the storefront. It used to be
	always shown so it could be edited on any canvas size, but then the mobile
	canvas showed a header that never exists: the desktop nav overflowing the
	row and pushing the mobile menu button off the edge. While the menu or
	one of its items is selected (canvas or Layers) it shows regardless, so
	it can still be edited on a narrow canvas.
*/
const Menu = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var id = props?.id;
	var index = props?.index

	var cls = elementCssClasses('menu', props?.cssSelectors);
	var children = Array.isArray(props?.children) ? props.children : [];

	var rootClassName = `hover:outline-orange-200 hover:outline-solid hover:outline-1 relative ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`;
	var rootProps = {
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
	};

	if (children.length === 0) {
		return (
			<nav id={id} index={index} type={props?.type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
				<div className="flex flex-col items-center justify-center py-4 text-gray-400 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="mt-1 text-xs">Empty menu - drop menu items here, or use Add Item in the panel</span>
				</div>
			</nav>
		);
	}

	return (
		<MenuMarkup cls={cls} id={id} index={index} type={props?.type} options={props?.options} cssSelectors={props?.cssSelectors} rootClassName={rootClassName} rootProps={rootProps}
			visibility={selectedId != null && (selectedId === id || containsId(children, selectedId)) ? '' : menuVisibilityClasses(props?.options, props?.cssSelectors?.['*']?.classes)}>
			{children.map((child, idx) => (
				<BlockPreview key={child.id ?? idx} index={`${index}-${idx}`} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			))}
		</MenuMarkup>
	);
};

export default Menu;
