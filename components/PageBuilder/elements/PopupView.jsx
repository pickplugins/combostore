'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconMenu2, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";

import BlockRender from '../BlockRender';


const GridView = (props) => {



	var index = props?.index
	var type = props?.type


	var id = props?.id;
	const cssSelectors = props?.cssSelectors;

	var children = props?.children;
	var options = props?.options;




	return (
		<div

			id={id}
			className={`p-4 ${cssSelectors['*']?.classes}   
			`}

		>

			<div className={`${cssSelectors['contentWrapper']?.classes}`}>
				<div className={`${cssSelectors['closeButton']?.classes}`}>Close</div>

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


		</div>
	);
};



export default GridView;
