'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';

const ContainerView = (props) => {
	const {
		block,

		index,
		id,
		type,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const children = props?.children || [];
	var cssSelectors = props?.cssSelectors ?? {};




	return (
		<div

			id={id}
			type={type}
			className={`    ${cssSelectors['*']?.classes} 
			`}


		>


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

ContainerView.propTypes = {
	block: PropTypes.object,

	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default ContainerView;
