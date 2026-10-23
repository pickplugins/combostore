import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";


/*
	Storefront twin of CommentAuthor.jsx, minus the editor's drag and select
	chrome. The editor falls back to the placeholder string "Post Title" when
	there is no comment in context, which is right on a canvas and wrong on a
	live page, so this renders nothing instead.
*/
const CommentAuthorView = (props) => {

	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'div';


	const comment = useComment();

	var comment_author = comment?.comment_author;


	if (!comment_author) {
		return null;
	}


	const Tag = tag;


	return (

		<Tag id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''}  `}
			dangerouslySetInnerHTML={{ __html: comment_author }}
		>
		</Tag>

	);
};


CommentAuthorView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};


export default CommentAuthorView;
