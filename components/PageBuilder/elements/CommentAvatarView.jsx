import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";
import Image from "next/image";


/*
	Storefront twin of CommentAvatar.jsx, minus the editor's drag and select
	chrome, with two differences:

	  - next/image throws on an undefined src, and a commenter without a
	    gravatar has none, so the block renders nothing rather than taking the
	    page down with it.
	  - It honours the `image` selector that ElementsDefinition declares. The
	    editor version hard-codes "w-full h-full object-cover" and ignores it.
*/
const CommentAvatarView = (props) => {

	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;


	const comment = useComment();

	var avatar = comment?.avatar;
	var author = comment?.comment_author ?? '';


	if (!avatar) {
		return null;
	}


	return (

		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''}  `}
		>

			<Image
				className={`${cssSelectors['image']?.classes ?? ''}  `}
				src={avatar}
				alt={author}
				width={80}
				height={80}
				unoptimized
			/>

		</div>

	);
};


CommentAvatarView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};


export default CommentAvatarView;
