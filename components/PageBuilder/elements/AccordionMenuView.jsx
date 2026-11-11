"use client"

import React from "react";
import { useState, useEffect } from "react";
import { tablerIcon } from "@/components/icons/TablerIcon";
import Link from "next/link";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";

const appUrl = process.env.NEXT_PUBLIC_STORE_URL;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The terms an accordion menu shows, for the shop and the builder alike.

	options.source 'manual' (the panel's default) shows options.items as they
	are; 'terms' fetches them with options.queryPrams, the query the panel's
	TermsQueryPrams builds. Both renderers used to fetch whatever the source,
	so manual items were always replaced - and the shop queried
	options.taxonomy, which the panel cannot set. A block that only has that
	old `taxonomy` key still fetches by it.
*/
export function useAccordionMenuTerms(options) {

	var source = options?.source ?? 'manual';
	var queryPrams = options?.queryPrams;
	var hasQuery = queryPrams && typeof queryPrams === 'object' && !Array.isArray(queryPrams) && Object.keys(queryPrams).length > 0;
	var query = source === 'terms'
		? (hasQuery ? queryPrams : (options?.taxonomy ? { taxonomy: options.taxonomy } : null))
		: null;
	var queryKey = query ? JSON.stringify(query) : '';

	var [terms, setterms] = useState(null);

	useEffect(() => {

		if (!query) {
			setterms(null);
			return;
		}

		var cancelled = false;

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			/* Nested terms are what the accordion opens into; a query may still say otherwise. */
			body: JSON.stringify({ hierarchical: true, per_page: 20, ...query }),
		})
			.then((response) => {
				if (!response.ok) throw new Error('request failed');
				return response.json();
			})
			.then((res) => {
				if (!cancelled) setterms(res?.terms ?? []);
			})
			.catch(() => {
				if (!cancelled) setterms([]);
			});

		return () => { cancelled = true; };

	}, [queryKey]);

	return query ? (terms ?? []) : (options?.items ?? []);
}

/*
	A term's link. With `hierarchical` it is root/ancestor/.../slug/, otherwise
	just slug/, under the store's URL. Built from trimmed segments: the old
	string-joining dropped the slash between the root and a parent's slug and
	doubled the one before a child's.
*/
export function accordionMenuHref(root, ancestors, slug, hierarchical) {
	var segments = (hierarchical ? [root, ...ancestors, slug] : [slug])
		.map(part => String(part ?? '').replace(/^\/+|\/+$/g, ''))
		.filter(Boolean);
	return `${String(appUrl ?? '').replace(/\/+$/, '')}/${segments.join('/')}/`;
}

function MenuItem({ cls, item, root, ancestors, hierarchical, icon, iconSize, onLinkClick }) {
	const [open, setOpen] = useState(false);
	const hasChildren = Array.isArray(item?.children) && item.children.length > 0;

	var IconX = tablerIcon(item?.icon || icon);
	var size = Number(item?.iconSize) || Number(iconSize) || 20;

	return (
		<div className={cls('item')}>
			<div
				className={`${cls('item-row')} ${open ? cls('item-row-open') : ''}`}
				onClick={() => hasChildren && setOpen(!open)}
			>
				<Link className={cls('item-link')} href={accordionMenuHref(root, ancestors, item?.slug, hierarchical)} onClick={onLinkClick}>
					{IconX && (
						<span className={cls('item-icon')}><IconX size={size} /></span>
					)}
					<span dangerouslySetInnerHTML={{ __html: item?.name ?? '' }} />
					{item?.count > 0 && (
						<span className={cls('item-count')} dangerouslySetInnerHTML={{ __html: ` (${item.count})` }} />
					)}
				</Link>
				{hasChildren && (
					<button
						type="button"
						aria-expanded={open}
						aria-label={open ? 'Collapse' : 'Expand'}
						className={cls('item-toggle')}
						onClick={ev => { ev.stopPropagation(); setOpen(!open); }}
					>
						{open ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
					</button>
				)}
			</div>

			{open && hasChildren && (
				<div className={cls('children')}>
					{item.children.map((child, idx) => (
						<MenuItem
							key={child?.slug ?? idx}
							cls={cls}
							item={child}
							root={root}
							ancestors={[...ancestors, item?.slug]}
							hierarchical={hierarchical}
							icon={icon}
							iconSize={iconSize}
							onLinkClick={onLinkClick}
						/>
					))}
				</div>
			)}
		</div>
	);
}

/*
	The menu's markup, shared with the builder preview (AccordionMenu.jsx) so
	the two cannot drift apart. Every class comes from `cls`. `onLinkClick`
	runs on every term link: the shop only stops the click from also opening
	the row (the old handler referred to an undefined `ev`, so every click
	threw), the builder also stops navigation away from the editor.
*/
export function AccordionMenuMarkup({ cls, id, terms, options, onLinkClick, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{(terms ?? []).map((term, idx) => (
				<MenuItem
					key={term?.slug ?? idx}
					cls={cls}
					item={term}
					root={options?.root}
					ancestors={[]}
					hierarchical={options?.hierarchical}
					icon={options?.icon}
					iconSize={options?.iconSize}
					onLinkClick={onLinkClick}
				/>
			))}
		</div>
	);
}

const AccordionMenuView = (props) => {

	var id = props?.id;
	var options = props?.options;

	/* Each part's classes; a key the block lacks falls back to the accordionMenu defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('accordionMenu', props?.cssSelectors);

	var terms = useAccordionMenuTerms(options);

	return (
		<AccordionMenuMarkup
			cls={cls}
			id={id}
			terms={terms}
			options={options}
			onLinkClick={ev => ev.stopPropagation()}
		/>
	);
};

export default AccordionMenuView;
