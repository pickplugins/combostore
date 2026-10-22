import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";


/*
	Storefront twin of CommentContent.jsx, minus the editor's drag and select
	chrome. Like CommentAuthorView, the editor's "Post Title" placeholder is
	dropped: on a live page an absent comment body renders nothing.
*/
const CommentContentView = (props) => {

	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'div';


	const comment = useComment();

	var comment_content = comment?.comment_content;


	if (!comment_content) {
		return null;
	}


	const Tag = tag;


	return (

		<Tag id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
			dangerouslySetInnerHTML={{ __html: comment_content }}
		>
		</Tag>

	);
};


CommentContentView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};


export default CommentContentView;
