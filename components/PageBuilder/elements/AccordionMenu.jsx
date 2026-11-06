"use client"

import React from "react";
import { AccordionMenuMarkup, useAccordionMenuTerms } from './AccordionMenuView';
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of an accordion menu.

	It renders AccordionMenuView's own AccordionMenuMarkup with the same terms
	(manual items, or the same terms query) and the same cssSelectors keys and
	defaults, so the canvas shows the menu as the shop does. Rows open and
	close here too; term links do not navigate, so a click cannot take the
	editor away from the page being built.
*/
const AccordionMenu = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options;

	var cls = elementCssClasses('accordionMenu', props?.cssSelectors);

	var terms = useAccordionMenuTerms(options);

	return (
		<AccordionMenuMarkup
			cls={cls}
			id={id}
			terms={terms}
			options={options}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => {
					e.stopPropagation();
					setSelectedId(selectedId != id ? id : null);
				},
				onDragStart: e => {
					e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
				},
				onDragEnd: () => { setDraggingBlock(null); setDragOverIndex(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex(index); },
				onDragLeave: () => setDragOverIndex(null),
			}}
		/>
	);
};

export default AccordionMenu;
