import React from "react";
import { IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { FeatureboxMarkup } from "./FeatureboxView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the featurebox: FeatureboxView's own markup,
	classes and contexts, with each item's blocks rendered by BlockPreview.
	The blocks are laid out once and repeated for every item, so editing them
	in any item edits all of them. Without items it shows one sample item, so
	there is always somewhere to drop the item's blocks.
*/
const Featurebox = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('featurebox', props?.cssSelectors);
	var savedItems = Array.isArray(props?.options?.items) ? props.options.items : [];
	var items = savedItems.length > 0 ? savedItems : [{ title: 'Feature title', description: 'A short description of this feature.', icon: 'IconStar' }];
	var children = Array.isArray(props?.children) ? props.children : [];

	return (
		<FeatureboxMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			cssSelectors={props?.cssSelectors}
			items={items}
			renderItem={(item, i) => children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview key={child.id ?? idx} index={`${i}-${idx}`} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))
			) : (
				<div className="flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Drop an Icon, Featurebox Title and Featurebox Details here</span>
				</div>
			)}
			rootClassName={`${savedItems.length ? '' : 'opacity-70'} cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				title: savedItems.length ? undefined : 'No items yet: add them in the panel (one sample is shown)',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
				onDrop: e => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		/>
	);
};

export default Featurebox;
