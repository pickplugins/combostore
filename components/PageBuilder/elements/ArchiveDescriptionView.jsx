"use client"
import React from "react";
import { useArchiveTermState, archiveTagFor } from "./ArchiveTitleView";
import { commentText } from "./CommentAuthorView";
import { commentParagraphs } from "./CommentContentView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The description cut to maxWord words (0 or empty for no limit), as plain
	text: tags stripped before counting words, entities decoded (only &nbsp;
	was, so "&amp;" showed as typed).
*/
export function archiveDescriptionText(description, maxWord) {
	var words = commentText(String(description ?? '').replace(/<[^>]*>/g, ' ')).split(/\s+/).filter(Boolean);
	var limit = parseInt(maxWord) || 0;
	if (limit > 0 && words.length > limit) return words.slice(0, limit).join(' ') + '…';
	return words.join(' ');
}

/*
	The description as paragraphs of lines: with a word limit, one paragraph
	of the cut text; without one, the description's own paragraphs and line
	breaks (Comment Content's commentParagraphs) - they were all run
	together into one line.
*/
export function archiveDescriptionParagraphs(description, maxWord) {
	if ((parseInt(maxWord) || 0) > 0) {
		var text = archiveDescriptionText(description, maxWord);
		return text ? [[text]] : [];
	}
	return commentParagraphs(description);
}

/*
	The description's markup, shared with the builder preview
	(ArchiveDescription.jsx): options.tag (a div when unset) carrying the `*`
	classes; one paragraph is its lines with <br>s, several are a `paragraph`
	<p> each (a p tag becomes a div then, as <p> cannot hold <p>).
*/
export function ArchiveDescriptionMarkup({ cls, id, index, type, options, paragraphs, rootClassName = '', rootProps = {} }) {
	var several = paragraphs.length > 1;
	var tag = archiveTagFor(options, 'div');
	const Tag = several && ['p', 'span'].includes(tag) ? 'div' : tag;
	var lines = (ls) => ls.map((line, i) => <React.Fragment key={i}>{i > 0 && <br />}{line}</React.Fragment>);
	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{several ? paragraphs.map((ls, i) => <p key={i} className={cls('paragraph')}>{lines(ls)}</p>) : lines(paragraphs[0] ?? [])}
		</Tag>
	);
}

/*
	The description of the category, tag or brand archive being viewed.
	Nothing while the term loads (shared with the archive title and count,
	and fetched once) or when the term has no description.
*/
const ArchiveDescriptionView = (props) => {

	/* A key the block lacks falls back to the archiveDescription defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('archiveDescription', props?.cssSelectors);

	var { term, loading } = useArchiveTermState();
	var paragraphs = loading ? [] : archiveDescriptionParagraphs(term?.description, props?.options?.maxWord);
	if (paragraphs.length === 0) return null;

	return <ArchiveDescriptionMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} paragraphs={paragraphs} />;
};

export default ArchiveDescriptionView;
