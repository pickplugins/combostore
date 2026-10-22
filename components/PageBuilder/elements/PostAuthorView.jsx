import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";


const PostTitleView = (props) => {




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


	var postauthor = post?.author;
	var postAuthorName = postauthor?.name ?? 'Author Name';


	return (
		<>

			{linkTo == 'postUrl' && (
				<Link href={`#`} dangerouslySetInnerHTML={{ __html: postAuthorName }} id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
				/>
			)}

			{linkTo != 'postUrl' && (
				<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

					dangerouslySetInnerHTML={{ __html: postAuthorName }}
				>
				</div>
			)}


		</>
	);
};



export default PostTitleView;
