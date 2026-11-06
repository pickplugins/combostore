'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import BlockRender from '../BlockRender';
import * as TablerIcons from '@tabler/icons-react';
import { elementCssClasses } from "../ElementsDefinition";

/*
	The tab labels for a tabs block. A block saved without its tab list used
	to crash the whole page on `.map` of undefined. Each tab's content block
	carries its own label, so the list falls back to those.
*/
export function tabsItemsFor(options, children) {
	return Array.isArray(options?.tabsItems) && options.tabsItems.length > 0
		? options.tabsItems
		: (children ?? []).map((child, idx) => ({ label: child?.options?.label || `Tab ${idx + 1}`, icon: child?.options?.icon }));
}

/*
	The tabs' markup, shared with the builder preview (Tabs.jsx) so the two
	cannot drift apart. Every class comes from `cls`, the block's cssSelectors
	lookup; `renderPanel(child, index)` draws the open tab's content, with
	BlockRender on the shop and BlockPreview in the builder. `rootProps` are
	spread onto the root, which is how the builder adds its drag handlers.

	`spacing` (the root padding), `navs-scroll` (the strip's overflow) and
	`navs-vertical` (added in vertical orientation) were hardcoded classes;
	as keys with those same defaults, older blocks - which lack them - look
	exactly as before, and the classes can now be changed.
*/
export function TabsMarkup({ cls, id, tabsItems, children, vertical, activeTab, onSelect, renderPanel, rootClassName = '', rootProps = {} }) {

	var panel = children?.[activeTab];

	return (
		<div id={id} className={`${cls('spacing')} ${cls('*')} ${rootClassName}`} {...rootProps}>

			<div
				role="tablist"
				aria-orientation={vertical ? 'vertical' : 'horizontal'}
				className={`${cls('navs-items')} ${cls('navs-scroll')} ${vertical ? cls('navs-vertical') : ''}`}
			>
				{tabsItems.map((tab, tabIndex) => {

					var isActive = activeTab === tabIndex;
					const IconX = TablerIcons[tab?.icon];

					return (
						<button
							type="button"
							role="tab"
							aria-selected={isActive}
							key={tabIndex}
							className={`${cls('nav-item')} ${isActive ? cls('nav-item-active') : ''}`}
							onClick={ev => { ev.stopPropagation(); onSelect(tabIndex); }}
						>
							{IconX && (
								<span className={cls('nav-item-icon')}>
									<IconX size={Number(tab?.iconSize) || 18} />
								</span>
							)}
							<span className={cls('nav-item-label')}>{tab?.label}</span>
						</button>
					)
				})}
			</div>

			{/* Only the open tab's content is rendered; keyed on the wrapper. */}
			{panel && (
				<div role="tabpanel" key={panel.id} className={cls('nav-item-content')}>
					{renderPanel(panel, activeTab)}
				</div>
			)}
		</div>
	);
}

const TabsView = (props) => {
	const { index, id } = props;

	const children = props?.children || [];
	var options = props?.options;
	var vertical = options?.orientation == 'vertical';
	var tabsItems = tabsItemsFor(options, children);

	/* Each part's classes; a key the block lacks falls back to the tabs defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('tabs', props?.cssSelectors);

	const [activeTab, setActiveTab] = useState(props?.activeTab ?? 0);

	return (
		<TabsMarkup
			cls={cls}
			id={id}
			tabsItems={tabsItems}
			children={children}
			vertical={vertical}
			activeTab={activeTab}
			onSelect={setActiveTab}
			renderPanel={(child, tabIndex) => (
				<BlockRender index={`${index}-${tabIndex}`} block={child} />
			)}
		/>
	);
};

TabsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default TabsView;
