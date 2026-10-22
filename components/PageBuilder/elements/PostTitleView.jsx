import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
const appUrl = process.env.NEXT_PUBLIC_APP_URL;


const PostTitleView = (props) => {

	const appUrl = process.env.NEXT_PUBLIC_APP_URL;



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


	var postTitle = post?.title;
	var postSlug = post?.slug;

	var post_type = post?.post_type

	var postUrl = '';

	if (post_type == 'post') {
		postUrl = `${appUrl}blog/${postSlug}`;
	}
	if (post_type == 'product') {
		postUrl = `${appUrl}product/${postSlug}`;
	}

	return (
		<>


			{linkTo == 'postUrl' && (
				<Link href={`${postUrl}`} dangerouslySetInnerHTML={{ __html: postTitle }} id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
				/>
			)}

			{linkTo != 'postUrl' && (
				<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

					dangerouslySetInnerHTML={{ __html: postTitle }}
				>
				</div>
			)}


		</>
	);
};



export default PostTitleView;
