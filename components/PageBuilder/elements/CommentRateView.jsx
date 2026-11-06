import PropTypes from "prop-types";
import React from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { useComment } from "../context/CommentContext";
import { commentStars } from "./CommentsFormView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	A comment's rating as a whole number of stars, 0-5: rounded (a 4.5 lit
	all five stars, as anything above 4 counted) and clamped. get_comments
	sends '' for a comment without one.
*/
export function commentRating(value) {
	var n = Number(value);
	return Number.isFinite(n) ? Math.max(0, Math.min(5, Math.round(n))) : 0;
}

/*
	The rating's markup, shared with the builder preview (CommentRate.jsx):
	a `*` wrapper with the five stars in `star-loop` (one `star` each, filled
	up to the rating, at options.iconSize) - labelled as a whole, "Rated 4
	out of 5", for screen readers - then the `avg-rating` "4/5" text unless
	options.showValue is false. (The builder printed a stray "Hello", had no
	star-loop and no "4/5", and named the fifth star "Supper".)
*/
export function CommentRateMarkup({ cls, id, index, type, options, rate, rootClassName = '', rootProps = {} }) {

	var size = Number(options?.iconSize) || 24;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<div role="img" aria-label={`Rated ${rate} out of 5`} className={cls('star-loop')}>
				{commentStars.map((item, i) => (
					<span className={cls('star')} key={item.value} title={item.label}>
						{rate > i ? <IconStarFilled size={size} /> : <IconStar size={size} />}
					</span>
				))}
			</div>
			{options?.showValue !== false && <div aria-hidden="true" className={cls('avg-rating')}>{rate}/5</div>}
		</div>
	);
}

/* The star rating of the comment it sits in. A comment with no rating - a plain blog comment rather than a review - shows nothing. */
const CommentRateView = (props) => {

	/* A key the block lacks falls back to the commentRate defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('commentRate', props?.cssSelectors);

	const comment = useComment();
	var rate = commentRating(comment?.rate);
	if (rate < 1) return null;

	return <CommentRateMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} rate={rate} />;
};

CommentRateView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CommentRateView;
