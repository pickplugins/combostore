import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";


const TermTitle = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo ?? 'postUrl';


	const post = usePost();


	const Tag = tag;




	return (
		<>
			{linkTo == 'postUrl' && (
				<Link href={`#`} dangerouslySetInnerHTML={{ __html: post?.title }} draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
					onClick={e => {
						e.preventDefault();

						e.stopPropagation();


						setSelectedId(selectedId != id ? id : null);
					}}
					onDragStart={e => {
						e.stopPropagation();
						e.dataTransfer.setData("canvasBlock", id);
						setDraggingBlock(id);
					}}
					onDragEnd={() => {
						setDraggingBlock(null);
						setDragOverIndex(null);
					}}

					onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
					onDragLeave={() => setDragOverIndex(null)} />
			)}

			{linkTo != 'postUrl' && (
				<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
					onClick={e => {
						e.preventDefault();

						e.stopPropagation();


						setSelectedId(selectedId != id ? id : null);
					}}
					onDragStart={e => {
						e.stopPropagation();
						e.dataTransfer.setData("canvasBlock", id);
						setDraggingBlock(id);
					}}
					onDragEnd={() => {
						setDraggingBlock(null);
						setDragOverIndex(null);
					}}

					onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
					onDragLeave={() => setDragOverIndex(null)}
					dangerouslySetInnerHTML={{ __html: post?.title }}
				>
				</div>
			)}


		</>
	);
};



export default TermTitle;
