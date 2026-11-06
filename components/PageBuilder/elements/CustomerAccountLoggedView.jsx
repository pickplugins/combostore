'use client'

import PropTypes from "prop-types";
import React from "react";
import BlockRender from '../BlockRender';
import { useSavedToken } from './useSavedToken';
import { elementCssClasses } from "../ElementsDefinition";

/*
	The signed-in half of the account area: its child blocks (usually the
	account tabs) render only for a customer with a saved login token.

	The whole block renders nothing otherwise - including its wrapper, so the
	classes on '*' (padding, a card, a background) never show as an empty box
	to a signed-out visitor.
*/
const CustomerAccountLoggedView = (props) => {
	const { index, id, type } = props;

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the customerAccountLogged defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerAccountLogged', cssSelectors);

	/* undefined until the browser has been checked - see useSavedToken. */
	const token = useSavedToken();

	if (!token) return null;

	return (
		<div id={id} type={type} className={cls('*')}>
			{
				children.map((child, idx) => (
					<BlockRender
						key={child.id}
						index={`${index}-${idx}`}
						block={child}
					/>
				))
			}
		</div>
	);
};

CustomerAccountLoggedView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default CustomerAccountLoggedView;
