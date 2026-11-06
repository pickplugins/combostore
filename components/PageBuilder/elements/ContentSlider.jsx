"use client"
import BlockPreview from '../BlockPreview';
import { ContentSliderMarkup } from "./ContentSliderView";
import { postSliderSplideOptions } from "./PostSliderView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the content slider: ContentSliderView's own
	markup and classes, with each child block (one per slide) rendered by
	BlockPreview with the drag and select props. The slider is draggable,
	shows when it is selected, and takes drops (a dropped block becomes a new
	slide).

	Splide's own drag is off here so it does not take over the pointer when a
	block inside a slide is dragged; the shop uses the saved setting.
*/
const ContentSlider = (props) => {

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var id = props?.id;
	var index = props?.index

	var cls = elementCssClasses('contentSlider', props?.cssSelectors);

	return (
		<ContentSliderMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			splideOptions={{ ...postSliderSplideOptions(props?.options, cls), drag: false }}
			slides={props?.children}
			renderChild={(child, indexZ) => (
				<BlockPreview index={`${index}${indexZ}`} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			)}
			empty={
				<div className="rounded border border-dashed border-gray-300 p-6 text-center text-xs text-gray-400">
					Content Slider: drop blocks here. Each block is one slide.
				</div>
			}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : ''}`}
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
		/>
	);
};

export default ContentSlider;
