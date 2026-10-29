import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

/*
	This block was pasted from a featurebox title block: it read useLoop()?.title
	and the featurebox's `title` selector, neither of which exists inside a
	comments loop, so it rendered an empty tag on the canvas. It now draws the
	comment's `rate` field as stars, matching CommentRateView.

	On the canvas a comment with no rating still shows five outlines, so the
	block stays visible and selectable while a page is being built. The
	storefront twin renders nothing in that case.
*/
const CommentRate = (props) => {

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;


	const comment = useComment();

	var rate = Number(comment?.rate ?? 4);


	var stars = [
		{ label: "Very Poor", value: 1 },
		{ label: "Poor", value: 2 },
		{ label: "Normal", value: 3 },
		{ label: "Good", value: 4 },
		{ label: "Supper", value: 5 },
	]


	return (
		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>

			Hello

			{stars.map((item, indexZ) => {

				return (

					<div className={`${cssSelectors['star']?.classes}`} key={indexZ} title={item?.label}>

						{rate <= indexZ && (
							<><IconStar /></>
						)}
						{rate > indexZ && (
							<><IconStarFilled /></>
						)}

					</div>
				)

			})}

		</div>
	);
};



export default CommentRate;
