"use client"
import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";

const stars = [
	{ label: "Very Poor", value: 1 },
	{ label: "Poor", value: 2 },
	{ label: "Normal", value: 3 },
	{ label: "Good", value: 4 },
	{ label: "Excellent", value: 5 },
];

/*
	A product's rating: the average (0 to 5, to one decimal), how many stars
	to fill (the average rounded to the nearest whole star), and the number of
	reviews. Worked out from the product on every render - the old view copied
	the average into state once, so a rating that loaded later never showed.
	It also filled a star for any fraction: 3.2 showed four stars.
*/
export function productRating(post) {
	var average = Math.min(5, Math.max(0, parseFloat(post?.avg_rating) || 0));
	var total = Math.max(0, parseInt(post?.total_rate) || 0);
	return { average: Math.round(average * 10) / 10, filled: Math.round(average), total };
}

/*
	The rating's markup, shared with the builder preview (ProductRatings.jsx):
	five stars (each a `rate-count` holding an `icon`), the average and the
	review count. The count is only shown when there are reviews - `{0 && ...}`
	used to print a stray "0". options.hideIfEmpty hides the whole block for a
	product nobody has reviewed yet.
*/
export function ProductRatingsMarkup({ cls, id, index, type, rating, hideIfEmpty, rootClassName = '', rootProps = {} }) {

	if (hideIfEmpty && rating.total === 0) return null;

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<div role="img" aria-label={`Rated ${rating.average} out of 5`} className={cls('star-rate')}>
				{stars.map((item, starIndex) => (
					<div className={cls('rate-count')} key={item.value} title={item.label}>
						{rating.filled > starIndex ? <IconStarFilled className={cls('icon')} /> : <IconStar className={cls('icon')} />}
					</div>
				))}
			</div>
			<div aria-hidden="true" className={cls('avg-rating')}>{rating.average}/5</div>
			{rating.total > 0 && (
				<div className={cls('total-reviews')}>{`(${rating.total} ${rating.total === 1 ? 'review' : 'reviews'})`}</div>
			)}
		</div>
	);
}

const ProductRatingsView = (props) => {

	/* A key the block lacks falls back to the productRatings defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productRatings', props?.cssSelectors);

	const post = usePost();

	return (
		<ProductRatingsMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			rating={productRating(post)}
			hideIfEmpty={props?.options?.hideIfEmpty === true}
		/>
	);
};

ProductRatingsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductRatingsView;
