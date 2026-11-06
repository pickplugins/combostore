'use client'

import PropTypes from "prop-types";
import React from "react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

/*
	A container: a <div> with the `*` classes (width, padding, layout) around
	its child blocks.
*/
const ContainerView = (props) => {
	const { index, id, type } = props;

	const children = props?.children || [];

	/* A key the block lacks falls back to the container defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('container', props?.cssSelectors);

	return (
		<div id={id} type={type} className={cls('*')}>
			{children.map((child, idx) => (
				<BlockRender
					key={child.id}
					index={`${index}-${idx}`}
					block={child}
				/>
			))}
		</div>
	);
};

ContainerView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default ContainerView;
