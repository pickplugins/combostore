'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { MenuProvider } from "../context/MenuContext";

const Grid = (props) => {
	const {

		index,
		id,
		type,

	} = props;

	const cssSelectors = props?.cssSelectors;
	const children = props?.children || [];







	return (
		<div

			id={id}
			className={` ${cssSelectors['*']?.classes}    hidden xl:block 			`}
			type={type}
		>


			{children.length > 0 ? (


				<ul className={`${cssSelectors['menu']?.classes} menu `}>
					<MenuProvider value={{ cssSelectors: cssSelectors }}>


						{
							children.map((child, idx) => (
								<BlockRender
									key={child.id}
									index={`${index}-${idx}`}
									block={child}

								/>
							))
						}

					</MenuProvider>

				</ul>


			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty Section - Drop elements here</span>
				</div>
			)}









		</div>
	);
};



export default Grid;
