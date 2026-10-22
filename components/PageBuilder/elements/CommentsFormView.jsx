"use client"
import React from "react";
import { useState } from "react";
import { IconExclamationCircle, IconStar, IconStarFilled } from "@tabler/icons-react";
import { usePost } from "../context/PostContext";
import { useComment } from "../context/CommentContext";
import { useCommentsGrid } from "../context/CommentsGridContext";
import { useCounterStore } from '../../../store/useCounterStore';


/*
	The comment form, posting to combo-store/v2/submit_comment.

	This one is NOT a copy of its editor twin. CommentsForm.jsx references
	`token`, `serverUrl`, `addNotification`, `userDataX`, `setUserDataX`,
	`StarRating` and `IconExclamationCircle` without importing or destructuring
	any of them, so its submit handler throws a ReferenceError the moment it is
	clicked. It also posts `postId: id` -- the BLOCK's id, not the post's -- and
	wires none of its markup to cssSelectors.

	So this is built from the form that does work,
	components/shop-elements/CommentsForm.jsx, with three changes for the
	builder: the post id comes from PostContext, every element is driven by a
	selector so a template can theme it, and on success it calls the grid's
	onCommentSubmitted so the list beside it reloads.

	Dropped inside a commentsLoop it reads the comment in context and posts as
	a reply to it; anywhere else it posts a top-level comment.

	The stars are inline rather than shop-elements/StarRating, which sets the
	rating on mouseover with no click and takes no selectors.
*/
const CommentsFormView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, addNotification, userDataX, setUserDataX } = useCounterStore()


	var index = props?.index
	var id = props?.id;
	var type = props?.type;
	var cssSelectors = props?.cssSelectors ?? {};

	var options = props?.options;
	var showRate = options?.showRate ?? true;
	var rateLabel = options?.rateLabel ?? 'Your rating';
	var commentLabel = options?.commentLabel ?? 'Write a comment';
	var placeholder = options?.placeholder ?? '';
	var submitLabel = options?.submitLabel ?? 'Submit';
	var loadingLabel = options?.loadingLabel ?? 'Please wait.';
	var loginRequiredText = options?.loginRequiredText ?? 'Please log in to leave a comment.';
	var successText = options?.successText ?? 'Thank you, your comment has been received.';


	const post = usePost();
	const parentComment = useComment();
	const CommentsGridAttr = useCommentsGrid();


	var postId = post?.id ?? null;
	var parentId = parentComment?.comment_ID ?? null;


	const [comment, setcomment] = useState({ content: "", postId: postId, parentId: parentId, rate: null });
	var [errors, seterrors] = useState([]);
	var [loading, setloading] = useState(false);
	var [success, setsuccess] = useState(false);


	var stars = [
		{ label: "Very Poor", value: 1 },
		{ label: "Poor", value: 2 },
		{ label: "Normal", value: 3 },
		{ label: "Good", value: 4 },
		{ label: "Supper", value: 5 },
	]


	function submit_comment() {


		if (!token) {
			seterrors([loginRequiredText])

			if (addNotification) {
				addNotification({ type: 'error', title: 'Login Required', content: loginRequiredText })
			}

			return;
		}


		if (comment.content.length == 0) {
			seterrors(["Comment should not be empty."])
			return;
		}


		/*
			postId is read at submit time rather than from the initial state:
			PostContext fills in after mount on a client-rendered page, so the
			state captured on the first render can still be null.
		*/
		var bodyData = JSON.stringify({ ...comment, postId: postId, parentId: parentId });


		setloading(true);

		fetch(
			serverUrl + "wp-json/combo-store/v2/submit_comment",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: bodyData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var successX = res?.success;
						var message = res?.message;


						if (errors) {
							seterrors(Array.isArray(errors) ? errors : [message])

							if (addNotification) {
								addNotification({ type: 'error', title: 'There is an error.', content: message })
							}

							setloading(false);
							return;
						}

						if (successX) {
							seterrors([])
							setsuccess(true)
							setcomment({ ...comment, content: "", rate: null });

							if (addNotification) {
								addNotification({ type: 'success', title: 'Thank you for your comment', content: successText })
							}

							if (CommentsGridAttr?.onCommentSubmitted) {
								CommentsGridAttr.onCommentSubmitted();
							}

							if (userDataX && setUserDataX) {
								var total_credit = parseInt(userDataX.total_credit) + 5
								setUserDataX({ ...userDataX, total_credit: total_credit });
							}
						}


						setloading(false);

					});
				}
			})
			.catch((_error) => {
				setloading(false);
			});
	}


	return (

		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>

			<div className={`${cssSelectors['form']?.classes}`}>


				{showRate && (
					<div className={`${cssSelectors['field']?.classes} ${cssSelectors['rate-wrap']?.classes}`}>

						<label className={`${cssSelectors['label']?.classes}`}>{rateLabel}</label>

						<div className={`${cssSelectors['stars']?.classes}`}>

							{stars.map((item, indexZ) => {

								return (
									<div
										key={indexZ}
										title={item?.label}
										className={`${cssSelectors['star']?.classes}`}
										onClick={ev => {
											setcomment({ ...comment, rate: item.value });
										}}
									>

										{comment.rate <= indexZ || !comment.rate ? (
											<><IconStar /></>
										) : (
											<><IconStarFilled /></>
										)}

									</div>
								)

							})}

						</div>

					</div>
				)}


				<div className={`${cssSelectors['field']?.classes}`}>

					<label htmlFor={`${id}-content`} className={`${cssSelectors['label']?.classes}`}>{commentLabel}</label>

					<textarea
						id={`${id}-content`}
						className={`${cssSelectors['textarea']?.classes}`}
						placeholder={placeholder}
						value={comment?.content}
						onChange={(ev) => {
							var value = ev.target.value;
							setcomment({ ...comment, content: value });
						}}
					/>

				</div>


				<div
					className={`${cssSelectors['submit']?.classes}`}
					onClick={ev => {
						submit_comment()
					}}
				>

					{!loading && (
						<>{submitLabel}</>
					)}
					{loading && (
						<>{loadingLabel}</>
					)}

				</div>


				{success && (
					<div className={`${cssSelectors['notice']?.classes}`}>{successText}</div>
				)}


				{errors?.length > 0 && (
					<div className={`${cssSelectors['errors']?.classes}`}>

						{errors?.map((item, indexZ) => {

							return (
								<div key={indexZ} className={`${cssSelectors['error']?.classes}`}>
									<IconExclamationCircle size={16} /> {item}
								</div>
							)
						})}

					</div>
				)}


			</div>

		</div>

	);
};

export default CommentsFormView;
