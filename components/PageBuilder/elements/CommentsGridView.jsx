"use client"
import React from "react";
import { useState } from "react";
import BlockRender from '../BlockRender';
import { CommentsGridProvider } from "../context/CommentsGridContext";
import { usePost } from "../context/PostContext";


/*
	Storefront twin of CommentsGrid.jsx: the same wrapper and the same provider,
	minus the editor's drag and drop handling.

	Two things it does that the editor version does not, both because the
	editor only has to look right on a canvas:

		- The post id comes from PostContext, which app/product/[slug] and
			app/blog/[slug] both provide. CommentsLoop.jsx hard-codes
			`queryPrams.post_id = 10018` so the canvas has something to draw; on a
			live page that would show one fixed post's comments everywhere.
		- It hands the loop a `refresh` counter and the form an
			`onCommentSubmitted` callback, so a comment posted through
			commentsForm reloads the list beside it. The two blocks are siblings
			under this one and have no other way to reach each other.

	The query params carry the shape the rest of the app uses for this endpoint
	(see components/PageBuilder/elements/Comments.jsx), and anything set on the
	block's own options wins.
*/
const CommentsGridView = (props) => {

	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	const post = usePost();

	var [refresh, setrefresh] = useState(0);


	function onCommentSubmitted() {
		setrefresh(refresh + 1);
	}


	var queryPrams = {
		post_id: post?.id ?? null,
		paged: 1,
		order: "ASC",
		per_page: 20,
		...(options?.queryPrams ?? {}),
	};


	return (
		<div
			id={id}
			type={type}
			className={`  ${cssSelectors['*']?.classes ?? ''}  `}

		>


			<CommentsGridProvider value={{ queryPrams: queryPrams, cssSelectors: cssSelectors, refresh: refresh, onCommentSubmitted: onCommentSubmitted }}>

				{children != undefined && children.map((child, indexZ) => {


					return (

						<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />

					)

				})}

			</CommentsGridProvider>


		</div>
	);
};

export default CommentsGridView;
