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

	const cssSelectors = props?.cssSelectors ?? {};
	const children = props?.children || [];

	var options = props?.options;
	var orientation = options?.orientation;
	/* A tabs block saved without its tab list used to crash the whole page on
	   `.map` of undefined. Each tab's content block carries its own label, so
	   the list falls back to those. */
	var tabsItems = Array.isArray(options?.tabsItems) && options.tabsItems.length > 0
		? options.tabsItems
		: children.map((child, idx) => ({ label: child?.options?.label || `Tab ${idx + 1}`, icon: child?.options?.icon }));

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



	/* Built-in look for tabs whose block has no classes of its own; any class
	   set in the page builder replaces the matching default. */
	const classesFor = (key, fallback) => {
		const value = cssSelectors?.[key]?.classes;
		return typeof value === 'string' && value.trim() !== '' ? value : fallback;
	};

	const vertical = orientation == 'vertical';

	return (
		<div
			id={id}
			className={`p-4 ${classesFor('*', 'w-full')}`}
		>

			<div
				role="tablist"
				aria-orientation={vertical ? 'vertical' : 'horizontal'}
				className={`${classesFor('navs-items', 'mb-5 flex gap-1 border-b border-gray-200')} overflow-x-auto overflow-y-hidden scrollbar-hide ${vertical ? " lg:flex-col mb-4 lg:flex-nowrap flex-wrap" : ""}`}
			>
				{tabsItems.map((tab, tabIndex) => {

					var isActive = activeTab === tabIndex;
					const IconX = TablerIcons[tab.icon];

					return (
						<button
							type="button"
							role="tab"
							aria-selected={isActive}
							key={tabIndex}
							className={`${classesFor('nav-item', '-mb-px flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900')} ${isActive ? classesFor('nav-item-active', '!border-[#1b0e9f] !text-[#1b0e9f]') : ""}`}
							onClick={() => setActiveTab(tabIndex)}
						>
							{IconX && (
								<span className={`${classesFor('nav-item-icon', 'flex')}`}>
									<IconX size={18} />
								</span>
							)}
							<span className={`${classesFor('nav-item-label', '')}`}>{tab.label}</span>
						</button>
					)
				})}
			</div>

			{/* Only the open tab's content is rendered, as before; keyed on the
			   wrapper so React stops warning about the unkeyed fragments. */}
			{children[activeTab] && (
				<div role="tabpanel" key={children[activeTab].id} className={`${classesFor('nav-item-content', '')}`}>
					<BlockRender
						index={`${index}-${activeTab}`}
						block={children[activeTab]}
					/>
				</div>
			)}
		</div>
	);
};



export default Grid;
