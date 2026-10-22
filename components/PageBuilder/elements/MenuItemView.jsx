'use client'
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import BlockRender from '../BlockRender';
import { useMenu } from "../context/MenuContext";
import { IconChevronDown, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconCopy, IconStar, IconX } from "@tabler/icons-react";
import * as TablerIcons from '@tabler/icons-react';


const List = (props) => {

	const menuAttr = useMenu();
	var MenuCssSelectors = menuAttr?.cssSelectors

	const children = props?.children || [];

	var index = props?.index
	var type = props?.type


	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors;
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';
	var label = options?.label ?? '';
	var url = options?.url ?? '#';
	var icon = options?.icon;
	var iconSize = options?.iconSize;


	const IconX = TablerIcons[icon];


	const Tag = tag;

	const [isActive, setisActive] = useState(false);



	return (
		<li type={type} id={id} className={`${MenuCssSelectors['menu-item']?.classes} ${cssSelectors['*']?.classes} relative `}


		>

			<Link href={url} className={`${MenuCssSelectors['menu-link']?.classes} ${cssSelectors['link']?.classes} flex  gap-2 items-center justify-between`} >

				{IconX && (
					<div className={`${cssSelectors['icon']?.classes} ${MenuCssSelectors['icon']?.classes} ${cssSelectors['icon']?.classes}`}>
						{IconX ? <IconX size={iconSize} /> : null}
					</div>
				)}

				<span className={`${MenuCssSelectors['link-label']?.classes} ${cssSelectors['label']?.classes} `}>{label}</span>

				{children.length > 0 && (
					<span >
						<IconChevronDown size={16} />
					</span>

				)}

			</Link>




			{children.length > 0 && (



				<>


					<ul className={`${MenuCssSelectors['sub-menu']?.classes} ${isActive ? 'block ' : 'hidden'} absolute top-full left-0 w-max bg-white shadow-lg z-50 ${cssSelectors['sub-menu']?.classes}`}>



						{
							children.map((child, idx) => (
								<BlockRender
									key={child.id}
									index={`${index}-${idx}`}
									block={child}

								/>
							))
						}
					</ul>
				</>




			)}





			{options?.text}

		</li>
	);
};



export default List;
