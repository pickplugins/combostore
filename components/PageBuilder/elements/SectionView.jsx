'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';

const SectionView = (props) => {



	var cssSelectors = props?.cssSelectors ?? {};

	var type = props?.type
	var options = props?.options;
	var id = props?.id;

	var index = props?.index





	const children = props?.children || [];


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



export default SectionView;
