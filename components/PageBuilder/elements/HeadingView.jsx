import PropTypes from "prop-types";
import React from "react";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The tags a heading may render as. options.tag went straight into JSX, so a
	blank or unexpected value ("", "h7") made React throw and took the page
	down; anything else now falls back to h1.
*/
export const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'];
export const headingTagFor = (options) => headingTags.includes(options?.tag) ? options.tag : 'h1';

const HeadingView = (props) => {

	var index = props?.index
	var id = props?.id;
	var type = props?.type;
	var options = props?.options;
	const Tag = headingTagFor(options);

	/* A key the block lacks falls back to the heading defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('heading', props?.cssSelectors);

	return (
		<Tag id={id} index={index} type={type} className={cls('*')}>
			{options?.text}
		</Tag>
	);
};

HeadingView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default HeadingView;
