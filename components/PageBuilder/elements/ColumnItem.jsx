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


			{children.length > 0 ? (
				children.map((child, idx) => (
					<BlockRender
						key={child.id}
						index={`${index}-${idx}`}
						block={child}

					/>
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty ColumnItem - Drop elements here</span>
				</div>
			)}
		</div>
	);
};



export default ColumnItem;
