import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import { usePost } from "../context/PostContext";
import Link from "next/link";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
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
	var rate = props?.rate ?? 4;


	const post = usePost();



	var postTitle = post?.content ?? 'Post content';



	var stars = [
		{ label: "Very Poor", value: 1 },
		{ label: "Poor", value: 2 },
		{ label: "Normal", value: 3 },
		{ label: "Good", value: 4 },
		{ label: "Supper", value: 5 },
	]


	const [starIndex, setstarIndex] = useState(rate);


	console.log(post);




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
			onDragLeave={() => setDragOverIndex(null)}
		>



			<div className={`${cssSelectors['star-rate']?.classes}`} >


				{stars.map((item, index) => {

					return (

						<div
							className={`${cssSelectors['rate-count']?.classes}`}
							key={index}

							title={item?.label} >


							{starIndex <= index && (
								<><IconStar /></>
							)}
							{starIndex > index && (
								<><IconStarFilled /></>
							)}



						</div>
					)

				})}

			</div>


			<div className={`${cssSelectors['avg-rating']?.classes}`}>3.5/5</div>
			<div className={`${cssSelectors['total-reviews']?.classes}`}>{`(120 reviews)`}</div>





		</div>




	);
};



export default TermTitle;
