'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconMenu2, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import BlockRender from '../BlockRender';


const ColumnItemView = (props) => {


	const cssSelectors = props?.cssSelectors;
	const parentCssSelectors = props?.parentCssSelectors || {};

	var index = props?.index
	var type = props?.type


	var id = props?.id;

	var children = props?.children;
	var options = props?.options;



	return (
		<div id={id} type={type} className={` ${cssSelectors['*']?.classes}  ${parentCssSelectors['column']?.classes}  
				
			`}
			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


			}}

		>



			{children != undefined && children.map((child, indexZ) => {
				return (
					<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
				)
			})}



		</div>
	);
};



export default ColumnItemView;
