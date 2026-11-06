"use client"
import React, { useState, useEffect, createContext, useContext } from "react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The template parts being rendered around this point, outermost first. A
	part that (directly or through another) contains a header or footer
	pointing back at itself would render forever; with this, the repeat
	renders nothing.
*/
const TemplatePartTrail = createContext([]);

/* Wraps a template part's blocks, so the parts inside it know they are inside it. */
export function TemplatePartScope({ partId, children }) {
	var trail = useContext(TemplatePartTrail);
	return <TemplatePartTrail.Provider value={partId ? [...trail, String(partId)] : trail}>{children}</TemplatePartTrail.Provider>;
}

/* Template parts already loaded, and those on their way, by id - for the whole visit. */
const loadedParts = new Map();
const pendingParts = new Map();

/* A template part's saved content (a JSON string of blocks) as a list; anything unreadable is an empty list. */
export function templatePartBlocks(content) {
	if (Array.isArray(content)) return content;
	try {
		var parsed = JSON.parse(content || '[]');
		return Array.isArray(parsed) ? parsed : [];
	} catch (e) {
		return [];
	}
}

function fetchTemplatePart(partId) {
	if (!pendingParts.has(partId)) {
		pendingParts.set(partId, fetch(serverUrl + "wp-json/combo-store/v2/get_template_part", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id: partId }),
		})
			.then(response => response.ok ? response.json() : Promise.reject(response.status))
			.then(res => { var blocks = templatePartBlocks(res?.content); loadedParts.set(partId, blocks); return blocks; })
			.catch(error => { pendingParts.delete(partId); throw error; }));
	}
	return pendingParts.get(partId);
}

/*
	The blocks of a saved template part (a header or footer), from
	combo-store/v2/get_template_part. { blocks, loading, error }; blocks is
	null until loaded. Each part is fetched once per visit and kept, so the
	header no longer goes blank while it refetches on every page; a JSON
	error in the saved content used to throw outside the catch.
*/
export function useTemplatePart(requestedId) {
	var trail = useContext(TemplatePartTrail);
	var repeats = !!requestedId && trail.includes(String(requestedId));
	var partId = repeats ? null : requestedId;
	var [state, setState] = useState(() => ({ blocks: partId ? (loadedParts.get(partId) ?? null) : null, loading: !!partId && !loadedParts.has(partId), error: false }));

	useEffect(() => {
		if (!partId) { setState({ blocks: null, loading: false, error: false }); return; }
		if (loadedParts.has(partId)) { setState({ blocks: loadedParts.get(partId), loading: false, error: false }); return; }
		var current = true;
		setState(s => ({ ...s, loading: true }));
		fetchTemplatePart(partId)
			.then(blocks => { if (current) setState({ blocks, loading: false, error: false }); })
			.catch(() => { if (current) setState({ blocks: null, loading: false, error: true }); });
		return () => { current = false; };
	}, [partId]);

	return { ...state, repeats };
}

/*
	The header's markup, shared with the builder preview (SiteHeader.jsx): a
	<header> (it was a div, so the page had no banner landmark for screen
	readers) carrying the `*` classes, holding the blocks the caller renders.
*/
export function SiteHeaderMarkup({ cls, id, index, type, as: Tag = 'header', children, rootClassName = '', rootProps = {} }) {
	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{children}
		</Tag>
	);
}

/*
	The site header: the saved template part options.id when one is chosen,
	else the blocks placed inside this block. While the part loads, the
	block's own blocks show (usually none).
*/
const SiteHeaderView = (props) => {

	/* A key the block lacks falls back to the siteHeader defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('siteHeader', props?.cssSelectors);

	var partId = props?.options?.id || null;
	var { blocks, repeats } = useTemplatePart(partId);
	if (repeats) return null;
	var children = blocks ?? (Array.isArray(props?.children) ? props.children : []);
	var index = props?.index;

	return (
		<SiteHeaderMarkup cls={cls} id={props?.id} index={index} type={props?.type}>
			<TemplatePartScope partId={blocks ? partId : null}>
				{children.map((child, idx) => (
					<BlockRender key={child.id ?? idx} index={`${index}-${idx}`} block={child} />
				))}
			</TemplatePartScope>
		</SiteHeaderMarkup>
	);
};

export default SiteHeaderView;
