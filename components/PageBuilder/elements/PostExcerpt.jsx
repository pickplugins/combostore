import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


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
	var readMoreText = options?.readMoreText ?? 'Read more';
	var maxWord = options?.maxWord ?? 20;
	var readMoreIcon = options?.readMoreIcon;
	var readMoreIconSize = options?.readMoreIconSize ?? 25;

	const product = usePost();

	var excerpt = product?.excerpt ?? 'Premium-quality baby essentials designed for everyday comfort and convenience. Soft, safe, and reliable materials make this product a practical choice for parents and little ones.';



	const IconX = TablerIcons[readMoreIcon];


	return (


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
			onDragLeave={() => setDragOverIndex(null)} >

			<p className={cssSelectors['excerpt']?.classes} dangerouslySetInnerHTML={{ __html: excerpt }}></p>


			{readMoreText && (
				<Link href={`#`} className={cssSelectors['read-more']?.classes}>
					{IconX && (
						<div className={`${cssSelectors['read-more-icon']?.classes}`}>
							{IconX ? <IconX size={readMoreIconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['read-more-label']?.classes}`}>
						{readMoreText}
					</div>

				</Link>
			)}




		</div>















	);
};



export default TermTitle;
