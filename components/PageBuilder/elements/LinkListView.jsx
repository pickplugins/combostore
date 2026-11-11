import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { isExternal } from "./ImageView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The list's markup, shared with the builder preview (LinkList.jsx): the
	`*` wrapper, an optional heading (`header-text`, only when
	options.headerText is set) and a `ul` (or <ol>, options.tag) of `li`
	items. Each item is a `link` to item.slug - its URL, despite the name -
	holding an optional `icon` (the item's own, else options.icon) and its
	`text`; item.newTab opens it in a new tab. An item without a URL is the
	same markup in a <span>.

	The shop's links called preventDefault, so none of them went anywhere -
	112 template links, footer menus mostly. Every item also got an empty
	icon <div> when no icon was set, the heading an empty <div>, and a stray
	options.text sat as text inside the <ul>.
*/
export function LinkListMarkup({ cls, id, index, type, options, onLinkClick, rootClassName = '', rootProps = {} }) {

	var items = Array.isArray(options?.items) ? options.items : [];
	var Tag = options?.tag === 'ol' ? 'ol' : 'ul';
	var headerText = String(options?.headerText ?? '').trim();
	var iconSize = Number(options?.iconSize) || 24;
	var DefaultIcon = tablerIcon(options?.icon);

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{headerText && <div className={cls('header-text')}>{headerText}</div>}
			<Tag className={cls('ul')}>
				{items.map((item, i) => {
					var ItemIcon = tablerIcon(item?.icon) ?? DefaultIcon;
					var href = String(item?.slug ?? '').trim();
					var inner = (
						<>
							{ItemIcon && <span className={cls('icon')}><ItemIcon size={iconSize} /></span>}
							<span className={cls('text')}>{item?.text}</span>
						</>
					);
					var linkProps = { className: cls('link'), onClick: onLinkClick, ...(item?.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}) };
					return (
						<li key={i} className={cls('li')}>
							{!href || href === '#'
								? <span className={cls('link')}>{inner}</span>
								: (isExternal(href) ? <a href={href} {...linkProps}>{inner}</a> : <Link href={href} {...linkProps}>{inner}</Link>)}
						</li>
					);
				})}
			</Tag>
		</div>
	);
}

/* A list of links (footer menus, quick links). Nothing when it has no items. */
const LinkListView = (props) => {

	/* A key the block lacks falls back to the linkList defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('linkList', props?.cssSelectors);

	if (!Array.isArray(props?.options?.items) || props.options.items.length === 0) return null;

	return <LinkListMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} />;
};

LinkListView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default LinkListView;
