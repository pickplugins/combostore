'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';

const ColumnItem = (props) => {
	const {
		block,

		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const children = props?.children || [];

	const parentCssSelectors = props?.parentCssSelectors || {};
	const cssSelectors = props?.cssSelectors;





	return (
		<div

			id={id}
			className={` ${cssSelectors['*']?.classes} 
			`}

		>


			{children.length > 0 && (
				children.map((child, idx) => (
					<BlockRender
						key={child.id}
						index={`${index}-${idx}`}
						block={child}

					/>
				))
			)}
		</div>
	);
};



export default ColumnItem;
