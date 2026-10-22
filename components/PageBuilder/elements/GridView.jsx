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

	var children = props?.children;
	const cssSelectors = props?.cssSelectors;



	return (
		<div

			id={id}
			className={` ${cssSelectors['*']?.classes}   
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



export default GridView;
