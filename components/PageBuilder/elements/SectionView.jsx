'use client'

import PropTypes from "prop-types";
import React from "react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

/*
	The section's anchor as an HTML id, from whatever was typed: "#About Us"
	gives "about-us". Empty when none is set.
*/
export function sectionAnchor(value) {
	return String(value ?? '')
		.trim()
		.replace(/^#+/, '')
		.toLowerCase()
		.replace(/[^a-z0-9_-]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

/*
	The section's markup, shared with the builder preview (Section.jsx) so the
	two cannot drift apart: a <section> with the `*` classes (background,
	padding, layout) around its children, which the caller renders.
	`rootProps` are spread onto the root, which is how the builder adds its
	click and drag handlers. The builder used to draw a <div>.
*/
export function SectionMarkup({ cls, id, type, children, rootClassName = '', rootProps = {} }) {
	return (
		<section id={id} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{children}
		</section>
	);
}

/*
	A page section around its child blocks. With options.anchor set, that is
	the section's id, so a link to "#anchor" (a button's or a menu item's)
	scrolls to it; otherwise the id is the block's id, as before.
*/
const SectionView = (props) => {

	var index = props?.index
	const children = props?.children || [];

	/* A key the block lacks falls back to the section defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('section', props?.cssSelectors);

	return (
		<SectionMarkup cls={cls} id={sectionAnchor(props?.options?.anchor) || props?.id} type={props?.type}>
			{children.map((child, idx) => (
				<BlockRender
					key={child.id}
					index={`${index}-${idx}`}
					block={child}
				/>
			))}
		</SectionMarkup>
	);
};

SectionView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default SectionView;
