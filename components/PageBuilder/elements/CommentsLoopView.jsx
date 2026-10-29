"use client"
import React from "react";
import { useState, useEffect } from "react";
import BlockRender from '../BlockRender';
import { CommentProvider } from "../context/CommentContext";
import { useCommentsGrid } from "../context/CommentsGridContext";
import { usePost } from "../context/PostContext";


/*
	Storefront twin of CommentsLoop.jsx, built the way PostLoopView is built:
	the query params and the `loop-items` / `loop-item` selectors come from the
	grid above it, and each comment is wrapped in a CommentProvider so
	commentAvatar, commentAuthor, commentRate and commentContent can read it.

	Unlike the editor version it does not hard-code a post id -- the grid puts
	the current post's id into queryPrams -- and it refetches when the grid's
	`refresh` counter moves, which is how a comment posted through commentsForm
	appears without a reload.
*/
const CommentsLoopView = (props) => {

	const CommentsGridAttr = useCommentsGrid();

	var queryPrams = CommentsGridAttr?.queryPrams;
	var cssSelectors = CommentsGridAttr?.cssSelectors ?? {};
	var refresh = CommentsGridAttr?.refresh;


	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var type = props?.type
	var children = props?.children;
	var id = props?.id;

	var index = props?.index

	const post = usePost();
	var postId = post?.product_id ?? null;

	var [comments, setcomments] = useState([]);


	function fetchComments() {



		if (!postId) {
			return;
		}


		var postData = JSON.stringify(queryPrams);

		fetch(serverUrl + "wp-json/combo-store/v2/get_comments", {
			cache: "no-store",
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var comments = res?.comments;
						var total = res?.total;
						var max_pages = res?.max_pages;

						console.log(comments);


						setcomments(comments ?? [])


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	/*
		queryPrams is rebuilt on every render of the grid above, so it is
		compared by value here -- depending on the object itself would refetch
		in a loop.
	*/
	useEffect(() => {

		fetchComments();

	}, [queryPrams, refresh]);


	if (CommentsGridAttr == null) {
		return null;
	}


	return (

		<div
			id={id}
			type={type}
			className={` ${cssSelectors['loop-items']?.classes ?? ''}  `}
		>


			{comments?.map((item, indexZ) => {


				return (<div className={`${cssSelectors['loop-item']?.classes ?? ''} `} key={indexZ}>

					<CommentProvider value={item}>


						{children != undefined && children.map((child, indexY) => {


							return (

								<BlockRender index={`${indexZ}${indexY}`} key={child.id} block={child} />

							)

						})}

					</CommentProvider>


				</div>)
			})}


		</div>

	);
};

export default CommentsLoopView;
