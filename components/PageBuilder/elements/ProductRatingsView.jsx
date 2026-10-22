"use client"
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import { usePost } from "../context/PostContext";
import Link from "next/link";
import { IconStar, IconStarFilled } from "@tabler/icons-react";


const TermTitle = (props) => {










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



	var avgRating = 4.5
	var totalReviews = 120


	return (




		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

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


			<div className={`${cssSelectors['avg-rating']?.classes}`}>{avgRating}/5</div>
			<div className={`${cssSelectors['total-reviews']?.classes}`}>{`(${totalReviews} reviews)`}</div>

		</div>




	);
};



export default TermTitle;
