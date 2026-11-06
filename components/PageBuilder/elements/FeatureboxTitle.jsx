import React from "react";
import { useLoop } from "../context/LoopContext";
import { FeatureboxTextMarkup } from "./FeatureboxTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of a featurebox item's text - the title here,
	and (with other props) the description: FeatureboxTextMarkup with the
	same classes as the shop, the item's text or a sample outside a
	featurebox (it was an empty tag).
*/
export function FeatureboxTextPreview({ props, type, parentKey, field, fallbackTag, sample }) {

	var { setDraggingBlock, dragOverIndex, setDragOverIndex, setSelectedId, selectedId, index, id } = props;

	var cls = elementCssClasses(type, props?.cssSelectors);
	const item = useLoop();
	var text = String(item?.[field] ?? '').trim() || sample;

	return (
		<FeatureboxTextMarkup
			cls={cls}
			parentKey={parentKey}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			fallbackTag={fallbackTag}
			text={text}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
}

const FeatureboxTitle = (props) => (
	<FeatureboxTextPreview props={props} type="featureboxTitle" parentKey="title" field="title" fallbackTag="h3" sample="Feature title" />
);

export default FeatureboxTitle;
