"use client"
import { useState, useEffect, useCallback } from "react";
import BlockPreview from '../BlockPreview';
import { TermsGridProvider } from "../context/TermsGridContext";
import { TermsGridMarkup, termsGridQuery, useTermsGridContextValue } from "./TermsGridView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the terms grid: TermsGridView's wrapper, query
	and context, with the children rendered by BlockPreview.

	The preview keeps its own copy of the query, so pagination can page
	through it (onChangeQuery, which the builder never provided) without
	saving anything; it resets whenever the saved query changes. The grid is
	draggable now - it had drag handlers but no draggable attribute.
*/
const TermsGrid = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var children = props?.children;
	var id = props?.id;
	var index = props?.index

	var cls = elementCssClasses('termsGrid', props?.cssSelectors);

	var savedQuery = JSON.stringify(termsGridQuery(props?.options));
	var [query, setQuery] = useState(() => JSON.parse(savedQuery));
	useEffect(() => { setQuery(JSON.parse(savedQuery)); }, [savedQuery]);
	var onChangeQuery = useCallback((next) => setQuery(next ?? JSON.parse(savedQuery)), [savedQuery]);

	var contextValue = useTermsGridContextValue(props?.cssSelectors, query, onChangeQuery);

	return (
		<TermsGridMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			rootClassName={`${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''}`}
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
			<TermsGridProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))}
			</TermsGridProvider>
		</TermsGridMarkup>
	);
};

export default TermsGrid;
