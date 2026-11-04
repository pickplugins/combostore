"use client"
import React from "react";
import { useState } from "react";
import { IconExclamationCircle, IconStar, IconStarFilled, IconCircleCheck } from "@tabler/icons-react";
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


	/*
		Templates written before this block had a renderer style only `*` --
		everything else comes back undefined, which would both strip the layout
		and print the string "undefined" into the class list. So a missing key
		falls back to the default in ElementsDefinition rather than to nothing.
		A key the template HAS set wins, even when set to an empty string.
	*/
	var defaults = {
		'form': 'flex flex-col gap-4',
		'field': 'flex flex-col gap-2',
		'label': 'text-sm font-medium text-gray-700',
		'rate-wrap': '',
		'stars': 'flex gap-1 items-center text-amber-400',
		'star': 'cursor-pointer rounded-md p-0.5 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50',
		'textarea': 'w-full h-32 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15',
		'submit': 'inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[#1b0e9f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60',
		'notice': 'flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700',
		'errors': 'flex flex-col gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700',
		'error': 'flex items-center gap-2',
	};

	function cls(key) {
		if (cssSelectors[key] && cssSelectors[key].classes != null) {
			return cssSelectors[key].classes;
		}
		return defaults[key] ?? '';
	}

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


	var postId = post?.product_id ?? null;
	var post_type = post?.post_type ?? null;
	var parentId = parentComment?.comment_ID ?? null;


	const [comment, setcomment] = useState({ content: "", postId: postId, postType: post_type, parentId: parentId, rate: null });
	var [errors, seterrors] = useState([]);
	var [loading, setloading] = useState(false);
	var [success, setsuccess] = useState(false);
	/* The star under the pointer, so the row previews the rating before the click. */
	var [hoverRate, sethoverRate] = useState(null);


	var stars = [
		{ label: "Very Poor", value: 1 },
		{ label: "Poor", value: 2 },
		{ label: "Normal", value: 3 },
		{ label: "Good", value: 4 },
		{ label: "Excellent", value: 5 },
	]


	function submit_comment() {

		/* A second click while the first is still sending posted the comment twice. */
		if (loading) return;


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
				/* This used to stop the spinner and say nothing. */
				seterrors(["Your comment couldn't be sent. Please try again."]);
				setloading(false);
			});
	}


	return (

		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''}  `}
		>

			<div className={`${cls('form')}`}>


				{showRate && (
					<div className={`${cls('field')} ${cls('rate-wrap')}`}>

						<label className={`${cls('label')}`}>{rateLabel}</label>

						<div className="flex flex-wrap items-center gap-3">
							<div role="radiogroup" aria-label={rateLabel} className={`${cls('stars')}`} onMouseLeave={() => sethoverRate(null)}>

								{stars.map((item, indexZ) => {

									var shown = hoverRate ?? comment.rate;

									return (
										<button
											type="button"
											role="radio"
											aria-checked={comment.rate === item.value}
											aria-label={`${item.value} - ${item?.label}`}
											key={indexZ}
											title={item?.label}
											className={`${cls('star')}`}
											onMouseEnter={() => sethoverRate(item.value)}
											onClick={ev => {
												setcomment({ ...comment, rate: item.value });
											}}
										>

											{!shown || shown <= indexZ ? (
												<><IconStar /></>
											) : (
												<><IconStarFilled /></>
											)}

										</button>
									)

								})}

							</div>
							{(hoverRate ?? comment.rate) && (
								<span className="text-sm text-gray-500">{stars[(hoverRate ?? comment.rate) - 1]?.label}</span>
							)}
						</div>

					</div>
				)}


				<div className={`${cls('field')}`}>

					<label htmlFor={`${id}-content`} className={`${cls('label')}`}>{commentLabel}</label>

					<textarea
						id={`${id}-content`}
						className={`${cls('textarea')}`}
						placeholder={placeholder}
						value={comment?.content}
						onChange={(ev) => {
							var value = ev.target.value;
							setcomment({ ...comment, content: value });
						}}
					/>

				</div>


				<button
					type="button"
					disabled={loading}
					className={`${cls('submit')}`}
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

				</button>


				{success && (
					<div role="status" className={`${cls('notice')}`}><IconCircleCheck size={16} className="shrink-0" /> {successText}</div>
				)}


				{errors?.length > 0 && (
					<div role="alert" className={`${cls('errors')}`}>

						{errors?.map((item, indexZ) => {

							return (
								<div key={indexZ} className={`${cls('error')}`}>
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
