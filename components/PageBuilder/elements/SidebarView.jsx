"use client"
import React from "react";
import BlockRender from '../BlockRender';
import { SiteHeaderMarkup, useTemplatePart, TemplatePartScope } from "./SiteHeaderView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The sidebar's markup, shared with the builder preview (Sidebar.jsx): the
	header's markup as an <aside> (it was a div, so the page had no
	complementary landmark for screen readers), carrying the `*` classes.
*/
export function SidebarMarkup(props) {
	return <SiteHeaderMarkup {...props} as="aside" />;
}

/*
	The sidebar: the saved template part options.id when one is chosen, else
	the blocks placed inside this block - loaded like the header's
	(useTemplatePart): once per visit, so it no longer refetches on every page
	or goes blank between them; a broken saved part renders empty instead of
	throwing (JSON.parse ran outside the catch); and a part that includes
	itself is not drawn again. It also only loaded the part chosen when the
	page first rendered, and a sidebar with neither crashed the page
	(children.map on undefined).
*/
const SidebarView = (props) => {

	/* A key the block lacks falls back to the sidebar defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('sidebar', props?.cssSelectors);

	var partId = props?.options?.id || null;
	var { blocks, repeats } = useTemplatePart(partId);
	if (repeats) return null;
	var children = blocks ?? (Array.isArray(props?.children) ? props.children : []);
	var index = props?.index;

	return (
		<SidebarMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			<TemplatePartScope partId={blocks ? partId : null}>
				{children.map((child, idx) => (
					<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
				))}
			</TemplatePartScope>
		</SidebarMarkup>
	);
};

export default SidebarView;
