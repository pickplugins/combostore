"use client"
import React from "react";
import BlockRender from '../BlockRender';
import { SiteHeaderMarkup, useTemplatePart, TemplatePartScope } from "./SiteHeaderView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The footer's markup, shared with the builder preview (SiteFooter.jsx): the
	header's markup as a <footer> (it was a div, so the page had no
	contentinfo landmark for screen readers), carrying the `*` classes.
*/
export function SiteFooterMarkup(props) {
	return <SiteHeaderMarkup {...props} as="footer" />;
}

/*
	The site footer: the saved template part options.id when one is chosen,
	else the blocks placed inside this block - loaded like the header's
	(useTemplatePart): once per visit, so it no longer goes blank between
	pages; a broken saved part renders empty instead of throwing; and a part
	that includes itself is not drawn again. A footer with neither crashed
	the page (children.map on undefined).
*/
const SiteFooterView = (props) => {

	/* A key the block lacks falls back to the siteFooter defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('siteFooter', props?.cssSelectors);

	var partId = props?.options?.id || null;
	var { blocks, repeats } = useTemplatePart(partId);
	if (repeats) return null;
	var children = blocks ?? (Array.isArray(props?.children) ? props.children : []);
	var index = props?.index;

	return (
		<SiteFooterMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			<TemplatePartScope partId={blocks ? partId : null}>
				{children.map((child, idx) => (
					<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
				))}
			</TemplatePartScope>
		</SiteFooterMarkup>
	);
};

export default SiteFooterView;
