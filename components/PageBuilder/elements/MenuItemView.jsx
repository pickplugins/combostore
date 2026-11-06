'use client'
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as TablerIcons from '@tabler/icons-react';
import { IconChevronDown } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { useMenu } from "../context/MenuContext";
import { isExternal } from "./ImageView";
import { elementCssClasses } from "../ElementsDefinition";

/* How deep in sub-menus an item is: 0 in the menu itself, 1 in a sub-menu... */
const MenuDepth = createContext(0);

/* A URL that goes nowhere ('' or '#'): such an item with a sub-menu opens it instead. */
const isDeadUrl = (url) => !String(url ?? '').trim() || String(url).trim() === '#';

/* Whether a URL is the page being shown (trailing slashes and the query ignored). */
export function isCurrentUrl(url, pathname) {
	if (isDeadUrl(url) || !pathname || isExternal(url)) return false;
	var clean = (u) => String(u).split(/[?#]/)[0].replace(/\/+$/, '') || '/';
	return clean(url) === clean(pathname);
}

/*
	The item's markup, shared with the builder preview (MenuItem.jsx). An
	`<li>` with the menu's `menu-item` and its own `*` classes, holding the
	`link` (the menu's `menu-link` too) with an optional `icon` and the
	`label`, and - when it has items inside it - a chevron button and the
	`sub-menu` list (the menu's `sub-menu` too).

	The sub-menu never opened on the shop: it was hidden unless isActive, and
	only the builder ever set that. Now it opens when the pointer is over the
	item (`hoverOpens`) or focus moves into it, and the chevron button toggles
	it - for touch screens and keyboards - so the parent link still goes to
	its page; an item whose URL is '' or '#' toggles from its label instead.
	Escape and a click outside close it. A sub-menu inside a sub-menu opens
	to the side (they all opened below their parent, on top of each other).
	The link to the page being shown gets aria-current="page".
*/
export function MenuItemMarkup({ cls, id, index, type, options, hasChildren, renderChildren, current, hoverOpens = true, onLinkClick, rootClassName = '', rootProps = {} }) {

	var menu = useMenu();
	var menuCls = (key) => String(menu?.cssSelectors?.[key]?.classes ?? '');
	var depth = useContext(MenuDepth);

	var [open, setOpen] = useState(false);
	var ref = useRef(null);

	useEffect(() => {
		if (!open) return;
		var close = (ev) => { if (ref.current && !ref.current.contains(ev.target)) setOpen(false); };
		document.addEventListener('mousedown', close);
		document.addEventListener('touchstart', close);
		return () => { document.removeEventListener('mousedown', close); document.removeEventListener('touchstart', close); };
	}, [open]);

	var url = String(options?.url ?? '').trim();
	var label = options?.label ?? '';
	var Icon = TablerIcons[options?.icon];
	var iconSize = Number(options?.iconSize) || 24;
	var submenuId = id ? `${id}-submenu` : undefined;
	var toggles = hasChildren && isDeadUrl(url);

	var linkClass = `${menuCls('menu-link')} ${cls('link')} flex gap-2 items-center justify-between`;
	var inner = (
		<>
			{Icon && <span className={`${menuCls('icon')} ${cls('icon')}`}><Icon size={iconSize} /></span>}
			<span className={`${menuCls('link-label')} ${cls('label')}`}>{label}</span>
			{toggles && <IconChevronDown size={16} aria-hidden="true" />}
		</>
	);

	var link = toggles
		? <button type="button" className={linkClass} aria-expanded={open} aria-controls={submenuId} onClick={ev => { onLinkClick?.(ev); setOpen(o => !o); }}>{inner}</button>
		: isDeadUrl(url)
			? <span className={linkClass}>{inner}</span>
			: isExternal(url)
				? <a href={url} className={linkClass} onClick={onLinkClick}>{inner}</a>
				: <Link href={url} className={linkClass} onClick={onLinkClick} aria-current={current ? 'page' : undefined}>{inner}</Link>;

	return (
		<li id={id} index={index} type={type} ref={ref}
			className={`${menuCls('menu-item')} ${cls('*')} relative ${rootClassName}`}
			onMouseEnter={hoverOpens && hasChildren ? () => setOpen(true) : undefined}
			onMouseLeave={hoverOpens && hasChildren ? () => setOpen(false) : undefined}
			onFocus={hasChildren ? () => setOpen(true) : undefined}
			onBlur={hasChildren ? (ev) => { if (!ev.currentTarget.contains(ev.relatedTarget)) setOpen(false); } : undefined}
			onKeyDown={hasChildren ? (ev) => { if (ev.key === 'Escape' && open) { ev.stopPropagation(); setOpen(false); } } : undefined}
			{...rootProps}>
			{hasChildren && !toggles ? (
				<div className="flex items-center justify-between gap-1">
					{link}
					<button type="button" className="shrink-0 p-0.5" aria-expanded={open} aria-controls={submenuId} aria-label={`${label} - show the sub-menu`}
						onClick={ev => { ev.preventDefault(); ev.stopPropagation(); setOpen(o => !o); }}>
						<IconChevronDown size={16} aria-hidden="true" />
					</button>
				</div>
			) : link}

			{hasChildren && (
				<ul id={submenuId} className={`${menuCls('sub-menu')} ${open ? 'block' : 'hidden'} absolute ${depth > 0 ? 'top-0 left-full' : 'top-full left-0'} w-max bg-white shadow-lg z-50 ${cls('sub-menu')}`}>
					<MenuDepth.Provider value={depth + 1}>{renderChildren()}</MenuDepth.Provider>
				</ul>
			)}
		</li>
	);
}

/* One link in a menu, optionally holding a sub-menu of further menu items. */
const MenuItemView = (props) => {

	/* A key the block lacks falls back to the menuItem defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('menuItem', props?.cssSelectors);

	const pathname = usePathname();
	var children = Array.isArray(props?.children) ? props.children : [];
	var index = props?.index;

	return (
		<MenuItemMarkup
			cls={cls}
			id={props?.id}
			index={index}
			type={props?.type}
			options={props?.options}
			hasChildren={children.length > 0}
			current={isCurrentUrl(props?.options?.url, pathname)}
			renderChildren={() => children.map((child, idx) => (
				<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
			))}
		/>
	);
};

MenuItemView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default MenuItemView;
