import PropTypes from "prop-types";
import React from "react";

const PostGridPagination = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';




	const Tag = tag;




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
			<a className={`${cssSelectors['prev']?.classes} ${cssSelectors['page-numbers']?.classes} prev page-numbers`} href="https://demo.pickplugins.com/post-grid/page/2/">
				Prev
			</a>
			<span aria-current="page" className={`${cssSelectors['page-numbers']?.classes} ${cssSelectors['current']?.classes} page-numbers current`} >1</span>
			<a className={`${cssSelectors['page-numbers']?.classes} page-numbers`} href="https://demo.pickplugins.com/post-grid/page/2/">2</a>
			<a className={`${cssSelectors['page-numbers']?.classes} page-numbers`} href="https://demo.pickplugins.com/post-grid/page/3/">3</a>
			<a className={`${cssSelectors['next']?.classes} ${cssSelectors['page-numbers']?.classes} next page-numbers`} href="https://demo.pickplugins.com/post-grid/page/2/">
				Next</a>

		</div>
	);
};



export default PostGridPagination;
