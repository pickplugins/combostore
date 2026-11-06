import PropTypes from "prop-types";
import React from "react";
import { useCategory } from "../context/CategoryContext";
import { elementCssClasses } from "../ElementsDefinition";

/* Tags the count may be drawn as; anything else is a span. */
const countTags = ['span', 'div', 'p', 'h2', 'h3', 'h4', 'h5', 'h6'];

/*
	The count as text: options.label (or options.prefix, which three blocks
	saved instead) before the number, options.suffix after it - and
	options.singularSuffix in its place for a count of 1, so " items" can
	read "1 item". The label and suffix were declared and saved (12 blocks
	use " items") but never shown, so the shop printed a bare number.
*/
export function termCountText(count, options) {
	var n = Number(count);
	if (count === null || count === undefined || count === '' || !Number.isFinite(n)) return null;
	var label = options?.label || options?.prefix || '';
	var suffix = n === 1 && options?.singularSuffix ? options.singularSuffix : (options?.suffix ?? '');
	return `${label}${n}${suffix}`;
}

/*
	The count's markup, shared with the builder preview (TermCount.jsx): the
	text in options.tag (a span when unset - it defaulted to h1, a heading
	for a number) carrying the `*` classes.
*/
export function TermCountMarkup({ cls, id, index, type, options, text, rootClassName = '', rootProps = {} }) {
	var Tag = countTags.includes(options?.tag) ? options.tag : 'span';
	return <Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>{text}</Tag>;
}

/* How many products the term (category, brand, tag) it sits in has; nothing outside a terms loop. */
const TermCountView = (props) => {

	/* A key the block lacks falls back to the termCount defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('termCount', props?.cssSelectors);

	const term = useCategory();
	var text = termCountText(term?.count, props?.options);
	if (text === null) return null;

	return <TermCountMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} text={text} />;
};

TermCountView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default TermCountView;
