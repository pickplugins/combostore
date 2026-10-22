'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { MenuProvider } from "../context/MenuContext";
import * as TablerIcons from '@tabler/icons-react';

const Grid = (props) => {
	const {
		block,

		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;

	const cssSelectors = props?.cssSelectors;
	const children = props?.children || [];

	var options = props?.options;
	var orientation = options?.orientation;
	var tabsItems = options?.tabsItems;

	const [activeTab, setActiveTab] = useState(props?.activeTab ?? 0);


	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");





		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};



	// const childrenArray = React?.Children?.toArray(children);



	return (
		<div

			id={id}
			className={`p-4 ${cssSelectors['*']?.classes}    
			`}

		>


			<div className={`${cssSelectors['navs-items']?.classes} flex overflow-x-auto scrollbar-hide ${orientation == 'vertical' ? " lg:flex-col mb-4 lg:flex-nowrap flex-wrap" : ""} `}>
				{tabsItems.map((tab, index) => {

					var isActive = activeTab === index;
					const IconX = TablerIcons[tab.icon];

					return (


						<div
							key={index}
							className={`${cssSelectors['nav-item']?.classes}  ${isActive
								? cssSelectors['nav-item-active']?.classes
								: ""
								}`}
							onClick={() => setActiveTab(index)}
						>
							{/* <div>{tab.icon}</div> */}

							<div className={`${cssSelectors['nav-item-icon']?.classes}`}>
								{IconX ? <IconX /> : null}
							</div>
							<div className={`${cssSelectors['nav-item-label']?.classes}`}>{tab.label}</div>
						</div>
					)
				})}
			</div>

			{
				children.map((child, idx) => (
					<>
						{idx == activeTab && (

							<div className={`${cssSelectors['nav-item-content']?.classes}`}>
								<BlockRender
									key={child.id}
									index={`${index}-${idx}`}
									block={child}

								/>
							</div>

						)}

					</>
				))
			}
		</div>
	);
};



export default Grid;
