import PropTypes from "prop-types";
import React from "react";
import { tablerIcon } from "@/components/icons/TablerIcon";
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
/*
	A name for a button with no visible text (an icon-only account link, a
	social icon), which screen readers - and Lighthouse's "Links do not have a
	discernible name" - otherwise get nothing for. options.ariaLabel wins;
	else a known site in the URL ("Facebook"), else the path ("/account" ->
	"Account"), else the icon's name ("IconShoppingCart" -> "Shopping cart").
*/
const SOCIAL_SITES = { 'facebook.com': 'Facebook', 'fb.com': 'Facebook', 'instagram.com': 'Instagram', 'youtube.com': 'YouTube', 'youtu.be': 'YouTube', 'tiktok.com': 'TikTok', 'twitter.com': 'X (Twitter)', 'x.com': 'X (Twitter)', 'linkedin.com': 'LinkedIn', 'pinterest.com': 'Pinterest', 'wa.me': 'WhatsApp', 'whatsapp.com': 'WhatsApp', 'm.me': 'Messenger', 't.me': 'Telegram' };

export function buttonAriaLabel(options, href) {
	var own = String(options?.ariaLabel ?? '').trim();
	if (own) return own;
	var url = String(href ?? '').trim();
	var scheme = url.match(/^(tel|mailto|sms):/i);
	if (scheme) return { tel: 'Call us', mailto: 'Email us', sms: 'Text us' }[scheme[1].toLowerCase()];
	var host = url.match(/^(?:https?:)?\/\/(?:www\.)?([^/?#]+)/i)?.[1]?.toLowerCase();
	if (host) {
		var site = Object.keys(SOCIAL_SITES).find(d => host === d || host.endsWith(`.${d}`));
		if (site) return SOCIAL_SITES[site];
	}
	var segment = !host && url.split(/[?#]/)[0].split('/').filter(Boolean).pop();
	if (segment) return decodeURIComponent(segment).replace(/[-_]+/g, ' ').replace(/^./, c => c.toUpperCase());
	var icon = String(options?.icon ?? '').replace(/^Icon/, '').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^Brand /, '').trim();
	return icon ? icon.charAt(0).toUpperCase() + icon.slice(1).toLowerCase() : undefined;
}

export function ButtonMarkup({ cls, id, type, options, rootClassName = '', rootProps = {} }) {

	var text = options?.text ?? 'Dummy Link';
	var IconX = tablerIcon(options?.icon);
	/* Unset, tabler draws 24px; kept as the fallback so existing buttons do not change size. */
	var iconSize = Number(options?.iconSize) || 24;
	var href = buttonHref(options);
	var newTab = options?.target === '_blank';
	var ariaLabel = String(text).trim() ? (String(options?.ariaLabel ?? '').trim() || undefined) : buttonAriaLabel(options, href);

	var content = (
		<>
			{IconX && (
				<div className={cls('icon')} aria-hidden="true">
					<IconX size={iconSize} />
				</div>
			)}
			<div className={cls('label')}>{text}</div>
		</>
	);

	var className = `${cls('*')} ${rootClassName}`;

	if (href) {
		return (
			<Link id={id} type={type} className={className} href={href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} aria-label={ariaLabel} {...rootProps}>
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
