"use client"
import React, { useState } from "react";
import { IconExclamationCircle, IconStar, IconStarFilled, IconCircleCheck } from "@tabler/icons-react";
import { usePost } from "../context/PostContext";
import { useComment } from "../context/CommentContext";
import { useCommentsGrid } from "../context/CommentsGridContext";
import { useCounterStore } from '../../../store/useCounterStore';
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* The five ratings, low to high. */
export const commentStars = [
	{ label: "Very Poor", value: 1 },
	{ label: "Poor", value: 2 },
	{ label: "Normal", value: 3 },
	{ label: "Good", value: 4 },
	{ label: "Excellent", value: 5 },
];

/* The form's texts, from the options with their defaults. */
export function commentsFormTexts(options) {
	return {
		showRate: options?.showRate ?? true,
		rateLabel: options?.rateLabel ?? 'Your rating',
		commentLabel: options?.commentLabel ?? 'Write a comment',
		placeholder: options?.placeholder ?? '',
		submitLabel: options?.submitLabel ?? 'Submit',
		loadingLabel: options?.loadingLabel ?? 'Please wait.',
		loginRequiredText: options?.loginRequiredText ?? 'Please log in to leave a comment.',
		successText: options?.successText ?? 'Thank you, your comment has been received.',
	};
}

/*
	The post a comment is about: post_id, else product_id, else id. It read
	product_id only, so on a blog post the comment was sent with no post
	(submit_comment turns that into post 0).
*/
export const commentPostId = (post) => post?.post_id ?? post?.product_id ?? post?.id ?? null;

/*
	The form's markup, shared with the builder preview (CommentsForm.jsx): a
	`*` wrapper holding a <form> (`form`, which now submits on Enter in a
	field and with its button) with, in `field` rows with a `label` each,
	the star rating (`rate-wrap`, `stars`, `star`; with options.showRate)
	and the `textarea`, then the `submit` button, the success `notice` and
	the `errors` list (one `error` each).

	`state` is { content, rate, hoverRate, loading, success, errors } and
	`actions` { setContent, setRate, setHoverRate, submit }.
*/
export function CommentsFormMarkup({ cls, id, index, type, options, state, actions, rootClassName = '', rootProps = {} }) {

	var t = commentsFormTexts(options);
	var shown = state.hoverRate ?? state.rate;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<form className={cls('form')} noValidate onSubmit={ev => { ev.preventDefault(); actions.submit(); }}>
				{t.showRate && (
					<div className={`${cls('field')} ${cls('rate-wrap')}`}>
						{/* A <label> (not tied to an input) so templates' [&_label]: styles still reach it. */}
						<label className={cls('label')} id={`${id}-rate-label`}>{t.rateLabel}</label>
						<div className="flex flex-wrap items-center gap-3">
							<div role="radiogroup" aria-labelledby={`${id}-rate-label`} className={cls('stars')} onMouseLeave={() => actions.setHoverRate(null)}>
								{commentStars.map((item, i) => (
									<button type="button" role="radio" key={item.value} aria-checked={state.rate === item.value} aria-label={`${item.value} - ${item.label}`} title={item.label} className={cls('star')}
										onMouseEnter={() => actions.setHoverRate(item.value)} onClick={() => actions.setRate(item.value)}>
										{!shown || shown <= i ? <IconStar /> : <IconStarFilled />}
									</button>
								))}
							</div>
							{shown && <span className="text-sm text-gray-500">{commentStars[shown - 1]?.label}</span>}
						</div>
					</div>
				)}

				<div className={cls('field')}>
					<label htmlFor={`${id}-content`} className={cls('label')}>{t.commentLabel}</label>
					<textarea id={`${id}-content`} className={cls('textarea')} placeholder={t.placeholder} value={state.content} onChange={ev => actions.setContent(ev.target.value)} />
				</div>

				<button type="submit" disabled={state.loading} className={cls('submit')}>
					{state.loading ? t.loadingLabel : t.submitLabel}
				</button>

				{state.success && (
					<div role="status" className={cls('notice')}><IconCircleCheck size={16} className="shrink-0" /> {t.successText}</div>
				)}
				{state.errors?.length > 0 && (
					<div role="alert" className={cls('errors')}>
						{state.errors.map((item, i) => (
							<div key={i} className={cls('error')}><IconExclamationCircle size={16} className="shrink-0" /> {item}</div>
						))}
					</div>
				)}
			</form>
		</div>
	);
}

/*
	The form's state and its submit to combo-store/v2/submit_comment, as
	{ state, actions } for CommentsFormMarkup. The post id is read at submit
	time (PostContext can fill in after mount). Inside a commentsLoop the
	comment in context is the parent, so it posts a reply. On success the
	text and rating reset, the comments grid reloads its list, and the
	success notice shows until the visitor types again (it stayed up).
*/
export function useCommentsForm(options) {

	const { token, addNotification, userDataX, setUserDataX } = useCounterStore();
	const post = usePost();
	const parentComment = useComment();
	const grid = useCommentsGrid();
	var t = commentsFormTexts(options);

	var [content, setContentRaw] = useState('');
	var [rate, setRate] = useState(null);
	var [hoverRate, setHoverRate] = useState(null);
	var [loading, setLoading] = useState(false);
	var [success, setSuccess] = useState(false);
	var [errors, setErrors] = useState([]);

	var setContent = (value) => { setContentRaw(value); if (success) setSuccess(false); if (errors.length) setErrors([]); };

	function submit() {
		/* A second click while the first is still sending posted the comment twice. */
		if (loading) return;
		if (!token) {
			setErrors([t.loginRequiredText]);
			addNotification?.({ type: 'error', title: 'Login Required', content: t.loginRequiredText });
			return;
		}
		if (!content.trim()) {
			setErrors(["Comment should not be empty."]);
			return;
		}
		var postId = commentPostId(post);
		if (!postId) {
			setErrors(["There is nothing on this page to comment on."]);
			return;
		}

		setLoading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/submit_comment", {
			method: "POST",
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
			body: JSON.stringify({ content, rate, postId, postType: post?.post_type ?? null, parentId: parentComment?.comment_ID ?? null }),
		})
			.then(response => response.ok ? response.json() : Promise.reject(response.status))
			.then(res => {
				if (res?.errors) {
					setErrors(Array.isArray(res.errors) ? res.errors : [res?.message || 'There is an error.']);
					addNotification?.({ type: 'error', title: 'There is an error.', content: res?.message });
					return;
				}
				if (res?.success) {
					setErrors([]);
					setSuccess(true);
					setContentRaw('');
					setRate(null);
					addNotification?.({ type: 'success', title: 'Thank you for your comment', content: t.successText });
					grid?.onCommentSubmitted?.();
					if (userDataX && setUserDataX) {
						setUserDataX({ ...userDataX, total_credit: (parseInt(userDataX.total_credit) || 0) + 5 });
					}
				}
			})
			/* This used to stop the spinner and say nothing. */
			.catch(() => setErrors(["Your comment couldn't be sent. Please try again."]))
			.finally(() => setLoading(false));
	}

	return { state: { content, rate, hoverRate, loading, success, errors }, actions: { setContent, setRate, setHoverRate, submit } };
}

/*
	The comment form: posts a comment (or, inside a commentsLoop, a reply)
	on the page's post or product, with an optional star rating. Hidden on a
	page with no post - a site-wide testimonials grid - where there is
	nothing to comment on.
*/
const CommentsFormView = (props) => {

	/* A key the block lacks falls back to the commentsForm defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentsForm', props?.cssSelectors);

	const post = usePost();
	var { state, actions } = useCommentsForm(props?.options);

	if (!commentPostId(post)) return null;

	return <CommentsFormMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} state={state} actions={actions} />;
};

export default CommentsFormView;
