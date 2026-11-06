"use client"
import React from "react";
import { useArchiveTermState, archiveTagFor } from "./ArchiveTitleView";
import { termCountText } from "./TermCountView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The count as text: options.prefix, the count, options.suffix - or
	options.singularSuffix in its place for a count of 1, so " results" can
	read "1 result" (Term Count's termCountText). It read "1 results".
*/
export function archiveCountText(count, options) {
	return termCountText(count, { label: options?.prefix, suffix: options?.suffix, singularSuffix: options?.singularSuffix });
}

/* The count's markup, shared with the builder preview (ArchiveCount.jsx): the text in options.tag (a div when unset) carrying the `*` classes. */
export function ArchiveCountMarkup({ cls, id, index, type, options, text, rootClassName = '', rootProps = {} }) {
	const Tag = archiveTagFor(options, 'div');
	return <Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>{text}</Tag>;
}

/*
	How many items the category, tag or brand archive being viewed holds
	("24 results"). Nothing while the term loads (it is shared with the
	archive title and description, and fetched once), and nothing on a page
	that is not an archive.
*/
const ArchiveCountView = (props) => {

	/* A key the block lacks falls back to the archiveCount defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('archiveCount', props?.cssSelectors);

	var { term, loading } = useArchiveTermState();
	var text = loading ? null : archiveCountText(term?.count, props?.options);
	if (text === null) return null;

	return <ArchiveCountMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} text={text} />;
};

export default ArchiveCountView;
