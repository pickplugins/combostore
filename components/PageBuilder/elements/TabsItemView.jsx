
"use client"
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import Link from "next/link";
import BlockRender from '../BlockRender';
import { useMenu } from "../context/MenuContext";
import { IconChevronDown, IconPlus, IconSquare, IconFidgetSpinner, IconTrash, IconCopy, IconStar, IconX } from "@tabler/icons-react";


const List = (props) => {

	const menuAttr = useMenu();





	var handleMoveBlock = props?.handleMoveBlock



	const children = props?.children || [];



	var index = props?.index


	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';
	var label = options?.label ?? '';
	var url = options?.url ?? '#';





	const Tag = tag;

	const [isActive, setisActive] = useState(false);



	return (
		<div id={id} className={` ${cssSelectors['*']?.classes}  `}


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



export default List;
