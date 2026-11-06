import PropTypes from "prop-types";
import React from "react";
import { elementCssClasses } from "../ElementsDefinition";

/* Tags the text may be drawn as; anything else is a p. */
export const textTags = ['p', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'strong', 'blockquote'];

/*
	The text's markup, shared with the builder preview (Text.jsx):
	options.text in options.tag (a p when unset or unknown - it fell back to
	h1, a heading for body text), carrying the `*` classes. Line breaks typed
	in the panel's text box are kept; they used to collapse into spaces.
*/
export function TextMarkup({ cls, id, index, type, options, rootClassName = '', rootProps = {} }) {
	var Tag = textTags.includes(options?.tag) ? options.tag : 'p';
	var lines = String(options?.text ?? '').split(/\r?\n/);
	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{lines.map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>)}
		</Tag>
	);
}

/* A piece of text. Nothing when it is empty. */
const TextView = (props) => {

	/* A key the block lacks falls back to the text defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('text', props?.cssSelectors);

	if (!String(props?.options?.text ?? '').trim()) return null;

	return <TextMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} />;
};

TextView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default TextView;
