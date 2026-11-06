import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The button's href, or null for a button that does not link anywhere.

	With linkTo 'custom' it is the URL, prefixed with the scheme when one is
	set. Schemes are saved both as "tel" (the panel) and "tel:" (templates),
	so the colon is normalised. The shop used to ignore the scheme - phone
	buttons linked to the relative path "01XXXXXXXXX" - while the builder
	glued "tel" straight onto the number. An empty URL is no link, rather than
	the literal href "undefined".
*/
export function buttonHref(options) {
	if (options?.linkTo !== 'custom') return null;
	var url = String(options?.url ?? '').trim();
	if (!url) return null;
	var scheme = String(options?.scheme ?? '').trim().replace(/:+$/, '');
	if (!scheme || url.toLowerCase().startsWith(`${scheme.toLowerCase()}:`)) return url;
	return `${scheme}:${url}`;
}

/*
	The button's markup, shared with the builder preview (Button.jsx) so the
	two cannot drift apart: a Next <Link> when it links somewhere, a <div>
	otherwise, holding the optional icon and the label. Every class comes from
	`cls`. `rootProps` are spread onto the root, which is how the builder adds
	its click and drag handlers. options.target '_blank' opens the link in a
	new tab; it was saved by templates but never applied.
*/
export function ButtonMarkup({ cls, id, type, options, rootClassName = '', rootProps = {} }) {

	var text = options?.text ?? 'Dummy Link';
	var IconX = TablerIcons[options?.icon];
	/* Unset, tabler draws 24px; kept as the fallback so existing buttons do not change size. */
	var iconSize = Number(options?.iconSize) || 24;
	var href = buttonHref(options);
	var newTab = options?.target === '_blank';

	var content = (
		<>
			{IconX && (
				<div className={cls('icon')}>
					<IconX size={iconSize} />
				</div>
			)}
			<div className={cls('label')}>{text}</div>
		</>
	);

	var className = `${cls('*')} ${rootClassName}`;

	if (href) {
		return (
			<Link id={id} type={type} className={className} href={href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} {...rootProps}>
				{content}
			</Link>
		);
	}

	return (
		<div id={id} type={type} className={className} {...rootProps}>
			{content}
		</div>
	);
}

const ButtonView = (props) => {

	/* Each part's classes; a key the block lacks falls back to the button defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('button', props?.cssSelectors);

	return <ButtonMarkup cls={cls} id={props?.id} type={props?.type} options={props?.options} />;
};

ButtonView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ButtonView;
