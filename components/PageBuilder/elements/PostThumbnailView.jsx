import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Image from "next/image";
import Link from 'next/link';


const PostThumbnailView = (props) => {

	const appUrl = process.env.NEXT_PUBLIC_STORE_URL;




	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var linkTo = options?.linkTo ?? 'postUrl';


	const post = usePost();

	var post_type = post?.post_type
	var postSlug = post?.slug
	var postTitle = post?.title

	var postUrl = '';

	if (post_type == 'post') {
		postUrl = `${appUrl}blog/${postSlug}`;
	}
	if (post_type == 'product') {
		postUrl = `${appUrl}product/${postSlug}`;
	}


	return (
		<div className={`${cssSelectors['*']?.classes}  `}
		>


			{linkTo == 'postUrl' && (
				<Link href={postUrl}
					id={id} index={index} type={type} className={`${cssSelectors['link']?.classes}  `}

				>
					{post?.post_thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={post?.post_thumbnail?.src} width={400} height={400} alt={``} />
					)}
					{!post?.post_thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={'/thumb.png'} width={400} height={400} alt={``} />
					)}

				</Link>

			)}
			{linkTo != 'postUrl' && (
				<>

					{post?.post_thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={post?.post_thumbnail?.src ?? '/thumb.png'} width={400} height={400} alt={``} />
					)}
					{!post?.post_thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={'/thumb.png'} width={400} height={400} alt={``} />
					)}


				</>

			)}






		</div>
	);
};



export default PostThumbnailView;
