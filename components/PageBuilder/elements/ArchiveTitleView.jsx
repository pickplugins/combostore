"use client"
import React, { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* The taxonomy behind each archive route: /categories/..., /tags/..., /brands/... */
const taxonomyByRoute = { categories: 'product_cat', tags: 'product_tag', brands: 'product_brand' };

/* Archive terms already loaded, and those on their way, by "taxonomy|slug" - shared by the title, count and description blocks for the whole visit. */
const loadedTerms = new Map();
const pendingTerms = new Map();

function fetchArchiveTerm(taxonomy, slug) {
	var key = `${taxonomy}|${slug}`;
	if (!pendingTerms.has(key)) {
		pendingTerms.set(key, fetch(serverUrl + "wp-json/combo-store/v2/get_term", {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ slug, taxonomy, parent: true }),
		})
			.then(response => response.ok ? response.json() : Promise.reject(response.status))
			.then(res => { var term = res?.term ?? {}; loadedTerms.set(key, term); return term; })
			.catch(error => { pendingTerms.delete(key); throw error; }));
	}
	return pendingTerms.get(key);
}

/*
	The term of the archive page being viewed: the last slug segment of the
	URL, looked up in the taxonomy its first segment names. { term, loading };
	term is {} until it loads, and on a page that is not a term archive.
	Each term is fetched once per visit and shared - the title, count and
	description blocks fetched it three times on every archive page.
*/
export function useArchiveTermState() {
	const params = useParams();
	const pathname = usePathname();
	const slug = (Array.isArray(params?.slug) && params.slug.length > 0) ? params.slug[params.slug.length - 1] : params?.slug;
	const taxonomy = taxonomyByRoute[String(pathname ?? '').split("/")[1]] ?? '';
	var key = slug ? `${taxonomy}|${slug}` : null;

	const [state, setState] = useState(() => ({ term: (key && loadedTerms.get(key)) || {}, loading: !!key && !loadedTerms.has(key) }));

	useEffect(() => {
		if (!key) { setState({ term: {}, loading: false }); return; }
		if (loadedTerms.has(key)) { setState({ term: loadedTerms.get(key), loading: false }); return; }
		var cancelled = false;
		setState(s => ({ ...s, loading: true }));
		fetchArchiveTerm(taxonomy, slug)
			.then(term => { if (!cancelled) setState({ term, loading: false }); })
			.catch(() => { if (!cancelled) setState({ term: {}, loading: false }); });
		return () => { cancelled = true; };
	}, [key]);

	return state;
}

/* The archive term alone (an empty object until loaded), for blocks that only need the term. */
export function useArchiveTerm() {
	return useArchiveTermState().term;
}

/* Replaces %term_name%, %term_slug%, %term_count% and %term_description% in a text; unknown ones are left as typed. */
export function fillArchiveText(text, term) {
	const replacements = {
		term_slug: term?.slug ?? '',
		term_name: term?.name ?? '',
		term_count: term?.count ?? 0,
		term_description: term?.description ?? '',
	};
	return String(text ?? '').replace(/%(\w+)%/g, (_, key) => replacements[key] ?? `%${key}%`);
}

/* The tags an archive block may render as; anything else falls back to the block's default. */
export const archiveTagFor = (options, fallback) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span'].includes(options?.tag) ? options.tag : fallback;

/*
	The title's text: options.prefix (a text with %term_name% and the other
	placeholders) filled from the term. A block saved without a prefix - all
	three templates' - shows the term's name: it printed an empty h1, so
	those archive pages had no title.
*/
export function archiveTitleText(options, term) {
	var template = options?.prefix ?? '%term_name%';
	return fillArchiveText(template, term);
}

/*
	The title's markup, shared with the builder preview (ArchiveTitle.jsx):
	the text in options.tag (h1 when unset) carrying the `*` classes. The
	text is the store owner's, from the panel and the term editor, so it may
	hold simple HTML.
*/
export function ArchiveTitleMarkup({ cls, id, index, type, options, html, rootClassName = '', rootProps = {} }) {
	const Tag = archiveTagFor(options, 'h1');
	return <Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps} dangerouslySetInnerHTML={{ __html: html }} />;
}

/*
	The title of the category, tag or brand archive being viewed. Nothing
	while the term loads - it showed "Archives: " with an empty name first -
	and nothing when the filled text is empty (a page that is not an archive).
*/
const ArchiveTitleView = (props) => {

	/* A key the block lacks falls back to the archiveTitle defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('archiveTitle', props?.cssSelectors);

	var { term, loading } = useArchiveTermState();
	if (loading) return null;
	var html = archiveTitleText(props?.options, term);
	if (!html.replace(/<[^>]*>/g, '').trim()) return null;

	return <ArchiveTitleMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} html={html} />;
};

export default ArchiveTitleView;
