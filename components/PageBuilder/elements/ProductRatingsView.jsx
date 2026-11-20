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
	to fill (the average rounded to the nearest whole star), the number of
	reviews, and how many approved reviews gave each star (get_product's
	rating_stars, { "1": n, ..., "5": n }; null where the product data has
	none, e.g. a card in a product loop). Worked out from the product on every
	render - the old view copied the average into state once, so a rating that
	loaded later never showed. It also filled a star for any fraction: 3.2
	showed four stars.
*/
export function productRating(post) {
	var average = Math.min(5, Math.max(0, parseFloat(post?.avg_rating) || 0));
	var total = Math.max(0, parseInt(post?.total_rate) || 0);
	var raw = post?.rating_stars && typeof post.rating_stars === 'object' ? post.rating_stars : null;
	var counts = raw ? Object.fromEntries([1, 2, 3, 4, 5].map(s => [s, Math.max(0, parseInt(raw[s]) || 0)])) : null;
	return { average: Math.round(average * 10) / 10, filled: Math.round(average), total, counts };
}

/* The block's display settings. layout: 'inline' (stars, average, count), 'summary' (that plus the bars) or 'bars' (the bars only). */
export function ratingsSettings(options) {
	var o = options ?? {};
	return {
		layout: ['inline', 'summary', 'bars'].includes(o.layout) ? o.layout : 'inline',
		barValue: o.barValue === 'percent' ? 'percent' : 'count',
		hideIfEmpty: o.hideIfEmpty === true,
	};
}

function StarIcons({ cls, filled, average }) {
	return (
		<div role="img" aria-label={`Rated ${average} out of 5`} className={cls('star-rate')}>
			{stars.map((item, starIndex) => (
				<div className={cls('rate-count')} key={item.value} title={item.label}>
					{filled > starIndex ? <IconStarFilled className={cls('icon')} /> : <IconStar className={cls('icon')} />}
				</div>
			))}
		</div>
	);
}

/*
	One bar per star, 5 down to 1: `bars` holding a `bar-row` each, with the
	`bar-label` ("5 ★"), the `bar-track` and its `bar-fill` (as wide as that
	star's share of the reviews) and the `bar-count` (the number, or the
	percentage with barValue 'percent').
*/
function RatingBars({ cls, counts, barValue }) {
	var sum = [1, 2, 3, 4, 5].reduce((a, s) => a + (counts[s] || 0), 0);
	return (
		<div className={cls('bars')}>
			{[5, 4, 3, 2, 1].map(star => {
				var n = counts[star] || 0;
				var pct = sum ? Math.round(n / sum * 100) : 0;
				var label = `${star} star${star === 1 ? '' : 's'}: ${n} ${n === 1 ? 'review' : 'reviews'} (${pct}%)`;
				return (
					<div key={star} className={cls('bar-row')} title={label}>
						<span className={cls('bar-label')}>{star}<IconStarFilled size={12} aria-hidden="true" className={cls('bar-star')} /></span>
						<div className={cls('bar-track')} role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
							<div className={cls('bar-fill')} style={{ width: `${pct}%` }} />
						</div>
						<span className={cls('bar-count')}>{barValue === 'percent' ? `${pct}%` : n}</span>
					</div>
				);
			})}
		</div>
	);
}

/*
	The rating's markup, shared with the builder preview (ProductRatings.jsx).

	inline: five stars (each a `rate-count` holding an `icon`, in
	`star-rate`), the `avg-rating` and the `total-reviews` count - shown only
	when there are reviews (`{0 && ...}` used to print a stray "0").
	summary: a `summary` row of `summary-score` (the `summary-average`, the
	stars and the count) beside the bars. bars: the bars alone.

	With no per-star counts (a card in a product loop) summary and bars fall
	back to inline. hideIfEmpty hides the whole block for a product nobody has
	reviewed yet.
*/
export function ProductRatingsMarkup({ cls, id, index, type, rating, hideIfEmpty, settings, rootClassName = '', rootProps = {} }) {

	if ((hideIfEmpty ?? settings?.hideIfEmpty) && rating.total === 0) return null;

	var layout = settings?.layout ?? 'inline';
	if (!rating.counts) layout = 'inline';

	var count = rating.total > 0 && (
		<div className={cls('total-reviews')}>{`(${rating.total} ${rating.total === 1 ? 'review' : 'reviews'})`}</div>
	);

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{layout === 'inline' && (
				<>
					<StarIcons cls={cls} filled={rating.filled} average={rating.average} />
					<div aria-hidden="true" className={cls('avg-rating')}>{rating.average}/5</div>
					{count}
				</>
			)}
			{layout === 'summary' && (
				<div className={cls('summary')}>
					<div className={cls('summary-score')}>
						<div className={cls('summary-average')}>{rating.total > 0 ? rating.average.toFixed(1) : '0.0'}</div>
						<StarIcons cls={cls} filled={rating.filled} average={rating.average} />
						<div className={cls('total-reviews')}>{rating.total > 0 ? `${rating.total} ${rating.total === 1 ? 'review' : 'reviews'}` : 'No reviews yet'}</div>
					</div>
					<RatingBars cls={cls} counts={rating.counts} barValue={settings?.barValue} />
				</div>
			)}
			{layout === 'bars' && <RatingBars cls={cls} counts={rating.counts} barValue={settings?.barValue} />}
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
			settings={ratingsSettings(props?.options)}
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
