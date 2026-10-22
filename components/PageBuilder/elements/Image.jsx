import PropTypes from "prop-types";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";


const Image = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index

	var cssSelectors = props?.cssSelectors;

	var id = props?.id;

	var options = props?.options;
	var src = options?.src ?? '';

	var link = options?.link;



	return (
		<div className={`${cssSelectors['*']?.classes ?? ''}  cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}>

			{src && (
				<>
					{link && (

						<Link className={`${cssSelectors['link']?.classes}`} href={link} onClick={ev => {

							ev.stopPropagation();
							ev.preventDefault()

						}}>

							<NextImage draggable id={id} src={src} width={500} height={500} alt={``} className={`${cssSelectors['img']?.classes}  `}
								unoptimized
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
							/>
						</Link>
					)}
					{!link && (

						<NextImage draggable id={id} src={src} width={500} height={500} alt={``} className={`${cssSelectors['img']?.classes}  cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
							unoptimized
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
						/>

					)}





				</>


			)}


		</div>




	);
};



export default Image;
