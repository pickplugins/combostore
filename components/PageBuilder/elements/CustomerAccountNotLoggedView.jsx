'use client'

import PropTypes from "prop-types";
import React from "react";
import BlockRender from '../BlockRender';
import { useSavedToken } from './useSavedToken';
import { elementCssClasses } from "../ElementsDefinition";

/*
	The signed-out half of the account area: its child blocks (usually the
	register and login forms) render only once the browser has been checked
	and holds no login token, so a signed-in customer never sees the forms
	flash up first.

	The whole block renders nothing otherwise - including its wrapper, so the
	classes on '*' (padding, a card, a background) never show as an empty box
	to a signed-in customer.
*/
const CustomerAccountNotLoggedView = (props) => {
	const { index, id, type } = props;

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the customerAccountNotLogged defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerAccountNotLogged', cssSelectors);

	/* undefined until the browser has been checked, then the token or null - see useSavedToken. */
	const token = useSavedToken();

	if (token !== null) return null;

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

CustomerAccountNotLoggedView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default CustomerAccountNotLoggedView;
