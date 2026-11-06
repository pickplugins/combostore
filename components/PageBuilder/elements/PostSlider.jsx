"use client"
import { useMemo } from "react";
import BlockPreview from '../BlockPreview';
import { PostSliderProvider } from "../context/PostSliderContext";
import { PostSliderMarkup, postSliderQuery, postSliderSplideOptions, usePostSliderContextValue } from "./PostSliderView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the post slider: PostSliderView's own markup,
	Splide settings, query and context, with its children rendered by
	BlockPreview (which now get the drag and select props - they got none,
	so the loop and its blocks could not be selected or moved). The slider
	itself is now draggable, shows when it is selected, and takes drops.
*/
const PostSlider = (props) => {

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

	var cls = elementCssClasses('postSlider', props?.cssSelectors);

	var queryKey = JSON.stringify(postSliderQuery(props?.options));
	var query = useMemo(() => JSON.parse(queryKey), [queryKey]);
	var contextValue = usePostSliderContextValue(props?.cssSelectors, query);

	return (
		<PostSliderMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			splideOptions={postSliderSplideOptions(props?.options, cls)}
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
			<PostSliderProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockPreview index={`${index}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
				))}
			</PostSliderProvider>
		</PostSliderMarkup>
	);
};

export default PostSlider;
