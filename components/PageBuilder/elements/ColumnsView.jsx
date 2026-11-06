'use client'

import PropTypes from "prop-types";
import React from "react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

/*
	A row of columns: a <div> with the `*` classes (usually a flex row) around
	its columnItems.

	Its `column` classes are handed down as ParentCssSelectors, and every
	ColumnItemView adds them to its own, so one place styles all the columns.
	That key used to do nothing: the column read a differently spelled prop
	that nothing passed.
*/
const ColumnsView = (props) => {
	const { index, id, type } = props;

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the columns defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('columns', cssSelectors);

	return (
		<div id={id} type={type} className={cls('*')}>
			{children.map((child, idx) => (
				<BlockRender
					key={child.id}
					index={`${index}-${idx}`}
					block={child}
					ParentCssSelectors={cssSelectors}
				/>
			))}
		</div>
	);
};

ColumnsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default ColumnsView;
