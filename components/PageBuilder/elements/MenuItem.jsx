import React from "react";
import BlockPreview from '../BlockPreview';
import { MenuItemMarkup } from "./MenuItemView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a menu item: MenuItemView's own markup and
	classes. Clicking the item selects it; the chevron opens and closes its
	sub-menu so the items inside can be edited (hovering does not, so the
	canvas does not jump about). Links never navigate away from the builder.
	The sub-menu's items now get every drag prop.
*/
const MenuItem = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('menuItem', props?.cssSelectors);
	var children = Array.isArray(props?.children) ? props.children : [];

	return (
		<MenuItemMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			hasChildren={children.length > 0}
			hoverOpens={false}
			onLinkClick={ev => ev.preventDefault()}
			renderChildren={() => children.map((child, idx) => (
				<BlockPreview key={child.id ?? idx} index={`${index}-${idx}`} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			))}
			rootClassName={`cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { if (e.target.closest('button[aria-controls]')) return; e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				/* No onDrop, as before: a drop bubbles up to the menu. */
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
			}}
		/>
	);
};

export default MenuItem;
