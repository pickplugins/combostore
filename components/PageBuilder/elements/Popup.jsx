'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconPlus, IconWindowMaximize } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { elementCssClasses } from "../ElementsDefinition";
import { PopupMarkup } from "./PopupView";
import { OPEN_TRIGGERS } from "./popupTriggers";

/*
	Builder (canvas) view of the popup. In edit mode (options.editMode, on
	by default - the combo-blocks block's "Edit Mode?") the dialog is drawn
	in the page flow with its own classes, so its blocks can be dropped in
	and edited; the overlay and the fixed position are left out, as they
	would cover the canvas. With edit mode off it collapses to one bar
	naming its triggers, out of the way of the page around it. Nothing here
	opens or closes - that is the shop's job (PopupView.jsx).
*/
const Popup = (props) => {
	const {
		draggingBlock,
		setDraggingBlock,
		dragOverIndex,
		setDragOverIndex,
		setSelectedId,
		selectedId,
		index,
		id,
		type,
		handleMoveBlock
	} = props;

	const children = props?.children || [];
	var options = props?.options ?? {};
	var cls = elementCssClasses('popup', props?.cssSelectors);
	var editMode = options?.editMode !== false;

	var triggers = (Array.isArray(options?.triggers) ? options.triggers : []).map(t => OPEN_TRIGGERS[t?.id]?.label).filter(Boolean);
	var summary = triggers.length ? `Opens: ${triggers.join(', ')}` : 'No open trigger yet - it will never show';

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");
		if (handleMoveBlock) handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
	};

	var rootProps = {
		draggable: true,
		onClick: (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); },
		onDragStart: (e) => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id); },
		onDragEnd: () => { setDraggingBlock(null); setDragOverIndex(null); },
		onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
		onDrop,
	};
	var selection = `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId === id ? 'outline-1 outline-solid outline-orange-400' : ''}`;

	if (!editMode) {
		return (
			<div id={id} type={type} className={`relative my-2 flex items-center gap-2 rounded-lg border border-dashed border-violet-300 bg-violet-50 px-3 py-2 text-xs text-violet-800 ${selection}`} {...rootProps}>
				<IconWindowMaximize size={16} />
				<span className="font-semibold">Popup</span>
				<span className="truncate text-violet-600">{summary} · {children.length} block{children.length === 1 ? '' : 's'} · turn on edit mode to change its content</span>
			</div>
		);
	}

	return (
		<div className={`relative my-2 rounded-xl border border-dashed border-violet-300 bg-violet-50/60 p-3 ${selection}`} {...rootProps} id={id} type={type}>
			<div className="mb-2 flex items-center gap-2 text-xs text-violet-800">
				<IconWindowMaximize size={16} />
				<span className="font-semibold">Popup</span>
				<span className="truncate text-violet-600">{summary}</span>
			</div>
			<PopupMarkup cls={cls} options={options} phase="open" inline>
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
					<div className="flex flex-col items-center justify-center py-6 text-gray-400 pointer-events-none">
						<IconPlus size={24} stroke={1.5} />
						<span className="mt-1 text-xs">Empty popup - drop elements here</span>
					</div>
				)}
			</PopupMarkup>
		</div>
	);
};

Popup.propTypes = {
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	handleMoveBlock: PropTypes.func,
};

export default Popup;
