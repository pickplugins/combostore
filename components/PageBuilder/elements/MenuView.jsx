'use client'
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import BlockRender from '../BlockRender';
import { MenuProvider } from "../context/MenuContext";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/* The screen widths a menu can be shown from, as the classes that do it (written out, so Tailwind generates them). */
const showFromClasses = { all: '', md: 'hidden md:block', lg: 'hidden lg:block', xl: 'hidden xl:block' };

/*
	When the menu shows: options.showFrom 'all', 'md', 'lg' or 'xl' (screens
	that wide and up). A menu saved without it keeps 'xl' - it was hard-coded
	`hidden xl:block`, with no way to change it - unless its `*` classes
	already say when it shows (two templates set `hidden md:block` /
	`hidden lg:block`, which the hard-coded xl:block overrode, hiding those
	menus on tablets and laptops); then nothing is added.
*/
export function menuVisibilityClasses(options, starClasses) {
	if (showFromClasses[options?.showFrom] !== undefined) return showFromClasses[options.showFrom];
	var ownsDisplay = /(^|\s)([a-z0-9]+:)*(hidden|block|flex|inline-flex|grid|contents)(\s|$)/.test(String(starClasses ?? ''));
	return ownsDisplay ? '' : showFromClasses.xl;
}

/*
	The menu's markup, shared with the builder preview (Menu.jsx): a <nav>
	(it was a div) labelled options.label for screen readers, carrying the
	`*` classes and the visibility classes, holding the `menu` list. The menu
	items reach the menu's selectors through MenuContext - filled from the
	menu defaults, so an item no longer prints "undefined" into its classes
	for a key the menu lacks.
*/
export function MenuMarkup({ cls, id, index, type, options, cssSelectors, visibility = '', children, rootClassName = '', rootProps = {} }) {
	var selectors = useMemo(() => withElementCssDefaults('menu', cssSelectors), [cssSelectors]);
	var contextValue = useMemo(() => ({ cssSelectors: selectors }), [selectors]);
	return (
		<nav id={id} index={index} type={type} aria-label={options?.label || 'Menu'} className={`${cls('*')} ${visibility} ${rootClassName}`} {...rootProps}>
			<ul className={`${cls('menu')} menu`}>
				<MenuProvider value={contextValue}>{children}</MenuProvider>
			</ul>
		</nav>
	);
}

/* A navigation menu of menu items (which may hold sub-menus). Nothing on the shop when it has no items. */
const MenuView = (props) => {

	/* A key the block lacks falls back to the menu defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('menu', props?.cssSelectors);

	var children = Array.isArray(props?.children) ? props.children : [];
	if (children.length === 0) return null;
	var index = props?.index;

	return (
		<MenuMarkup cls={cls} id={props?.id} index={index} type={props?.type} options={props?.options} cssSelectors={props?.cssSelectors}
			visibility={menuVisibilityClasses(props?.options, props?.cssSelectors?.['*']?.classes)}>
			{children.map((child, idx) => (
				<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
			))}
		</MenuMarkup>
	);
};

MenuView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default MenuView;
