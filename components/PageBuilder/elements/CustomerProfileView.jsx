'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';

const ColumnsView = (props) => {
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




	return (
		<div

			id={id}
			type={type}
			className={`${cssSelectors['*']?.classes}   
			`}

		>



		</div>
	);
};

ColumnsView.propTypes = {
	block: PropTypes.object,

	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default ColumnsView;
