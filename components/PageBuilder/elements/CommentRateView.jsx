import PropTypes from "prop-types";
import React from "react";
import { useComment } from "../context/CommentContext";
import { IconStar, IconStarFilled } from "@tabler/icons-react";


/*
	The comment's star rating, 0 to 5.

	This one is NOT a copy of its editor twin. CommentRate.jsx was pasted from
	a featurebox title block: it reads useLoop()?.title and the featurebox's
	`title` selector, neither of which exists inside a comments loop, so it
	renders an empty tag. What the block is for is the `rate` field on a
	comment -- the same field shop-elements/CommentsList.jsx draws as stars, and
	the same thing the templates style it for ("text-amber-500 [&_svg]:size-4").
	So this renders the stars, and CommentRate.jsx has been corrected to match.

	Five stars, filled while `rate` is above the index, matching the convention
	in ProductRatingsView and CommentsList. A comment with no rating -- a plain
	blog comment rather than a review -- renders nothing.
*/
const CommentRateView = (props) => {

	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;


	const comment = useComment();

	var rate = Number(comment?.rate ?? 0);


	var stars = [
		{ label: "Very Poor", value: 1 },
		{ label: "Poor", value: 2 },
		{ label: "Normal", value: 3 },
		{ label: "Good", value: 4 },
		{ label: "Supper", value: 5 },
	]


	if (!rate || rate < 1) {
		return null;
	}


	return (

		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>

			{stars.map((item, indexZ) => {

				return (

					<div className={`${cssSelectors['star']?.classes}`} key={indexZ} title={item?.label}>

						{rate <= indexZ && (
							<><IconStar /></>
						)}
						{rate > indexZ && (
							<><IconStarFilled /></>
						)}

					</div>
				)

			})}

		</div>

	);
};


CommentRateView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};


export default CommentRateView;
