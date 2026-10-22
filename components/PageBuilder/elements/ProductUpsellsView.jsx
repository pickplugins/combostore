import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";


const TermTitle = (props) => {










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
				<Link href={`#`} dangerouslySetInnerHTML={{ __html: post?.title }} id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
				/>
			)}

			{linkTo != 'postUrl' && (
				<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes} `}

					dangerouslySetInnerHTML={{ __html: post?.title }}
				>
				</div>
			)}


		</>
	);
};



export default TermTitle;
