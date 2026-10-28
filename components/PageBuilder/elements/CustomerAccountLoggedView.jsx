'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { useCounterStore } from '../../../store/useCounterStore';

const CustomerAccountLoggedView = (props) => {
	const {
		block,

		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};

	// const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, settings } = useCounterStore()

	const token = localStorage.getItem("token");




	return (
		<div

			id={id}
			type={type}
			className={`${cssSelectors['*']?.classes}   
			`}

		>


			{token && (
				<>
					{
						children.map((child, idx) => (
							<BlockRender
								key={child.id}
								index={`${index}-${idx}`}
								block={child}

							/>
						))
					}
				</>
			)}


		</div>
	);
};

CustomerAccountLoggedView.propTypes = {
	block: PropTypes.object,

	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default CustomerAccountLoggedView;
