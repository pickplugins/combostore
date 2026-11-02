"use client";
import { useState, useEffect } from "react";

import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";
import { useCounterStore } from '../../store/useCounterStore'


const Comments = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, addNotification, userDataX, setUserDataX } = useCounterStore()

	var postData = props?.postData
	var id = props?.id
	var dummyComments = props?.dummyComments

	const [loading, setloading] = useState(false);
	const [comments, setcomments] = useState([]);

	function fetchComments() {

		var queryPrams = { post_id: id, paged: 1, order: "ASC", per_page: 20, }

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_comments", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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

						setcomments(comments)
						setloading(false);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	useEffect(() => {

		/* Ticket comments need a login, and after a reload the token arrives late. */
		if (!token) {
			return;
		}

		fetchComments();
	}, [token]);


	function onCommentSubmitted(comment) {

		var commentsX = [...comments];
		commentsX.push(comment)
		setcomments(commentsX)

	}


	return (

		<div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm">

			<div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">
				{("Comments")}
				<span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold tabular-nums text-gray-600">{comments.length}</span>
			</div>

			<div className="flex flex-col gap-5 p-5">

				<CommentsList comments={comments} id={id} commentSubmitted={onCommentSubmitted} addNotification={addNotification} userDataX={userDataX} setUserDataX={setUserDataX} />

				{comments.length == 0 && (
					<div className="text-sm text-gray-500">No Comments Yet. Write First Comment.</div>
				)}

				<div className="border-t border-gray-100 pt-5">
					<CommentsForm postData={postData} dummyComments={dummyComments} id={id} commentSubmitted={onCommentSubmitted} addNotification={addNotification} userDataX={userDataX} setUserDataX={setUserDataX} />
				</div>

			</div>
		</div>

	);
};

export default Comments;
