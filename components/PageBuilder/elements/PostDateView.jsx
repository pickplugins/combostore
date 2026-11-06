import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import { usePost } from "../context/PostContext";
import { postUrlFor } from "./PostTitleView";
import { elementCssClasses } from "../ElementsDefinition";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const pad = (n) => String(n).padStart(2, '0');

/* The format a block without one uses (what the shop always fell back to). */
export const defaultDateFormat = 'DD-MM-YYYY';

/*
	Splits a post date into its parts as written - post_date is the site's
	wall-clock time ("2025-03-14 09:30:00"), so it is never shifted through
	the server's or the visitor's time zone, and the server and the browser
	print the same thing. Anything else goes through Date; an unreadable
	value gives null.
*/
export function parsePostDate(value) {
	var m = String(value ?? '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
	var d = m ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] ?? 0), +(m[5] ?? 0), +(m[6] ?? 0))) : (value ? new Date(value) : null);
	if (!d || isNaN(d.getTime())) return null;
	var utc = !!m;
	return {
		year: utc ? d.getUTCFullYear() : d.getFullYear(),
		month: utc ? d.getUTCMonth() : d.getMonth(),
		day: utc ? d.getUTCDate() : d.getDate(),
		weekday: utc ? d.getUTCDay() : d.getDay(),
		hours: utc ? d.getUTCHours() : d.getHours(),
		minutes: utc ? d.getUTCMinutes() : d.getMinutes(),
		seconds: utc ? d.getUTCSeconds() : d.getSeconds(),
	};
}

/*
	Formats a post date. Two token styles are in saved blocks, and both work:

	- Moment style, used by the templates: YYYY YY MMMM MMM MM M DD D dddd ddd
	  HH H hh h mm ss A a, with [literal text] in brackets.
	- PHP style, used by this block's panel: Y (also y) m n M F d j D l H G h g
	  i s A a, with \x for a literal letter.

	A format containing YYYY, YY, MM, DD, ddd or a [literal] is read as moment style, anything
	else as PHP style. The old formatter only knew PHP letters, so the
	templates' DD-MM-YYYY came out as "SatSat-JanJan-20252025..." - and its
	day names started on Saturday, so every weekday was a day out.
*/
export function formatPostDate(value, format) {
	var p = parsePostDate(value);
	if (!p) return '';
	var fmt = String(format || defaultDateFormat);
	if (fmt === 'YY-MM-dd') fmt = 'Y-M-d'; /* an old panel option, labelled 2022-Feb-25 */
	var h12 = p.hours % 12 || 12;
	var ampm = p.hours < 12 ? 'AM' : 'PM';

	if (/YYYY|YY|MM|DD|ddd|\[/.test(fmt)) {
		var moment = {
			YYYY: p.year, YY: pad(p.year % 100), MMMM: monthNames[p.month], MMM: monthNames[p.month].slice(0, 3), MM: pad(p.month + 1), M: p.month + 1,
			DD: pad(p.day), D: p.day, dddd: dayNames[p.weekday], ddd: dayNames[p.weekday].slice(0, 3),
			HH: pad(p.hours), H: p.hours, hh: pad(h12), h: h12, mm: pad(p.minutes), ss: pad(p.seconds), A: ampm, a: ampm.toLowerCase(),
		};
		return fmt.replace(/\[([^\]]*)\]|YYYY|YY|MMMM|MMM|MM|M|DD|D|dddd|ddd|HH|H|hh|h|mm|ss|A|a/g, (t, literal) => literal ?? String(moment[t]));
	}

	var php = {
		Y: p.year, y: p.year, m: pad(p.month + 1), n: p.month + 1, M: monthNames[p.month].slice(0, 3), F: monthNames[p.month],
		d: pad(p.day), j: p.day, D: dayNames[p.weekday].slice(0, 3), l: dayNames[p.weekday],
		H: pad(p.hours), G: p.hours, h: pad(h12), g: h12, i: pad(p.minutes), s: pad(p.seconds), A: ampm, a: ampm.toLowerCase(),
	};
	return fmt.replace(/\\(.)|[YymnMFdjDlHGhgisAa]/g, (t, literal) => literal ?? String(php[t]));
}

/* The date as an ISO string for <time datetime>, or undefined. */
export function postDateIso(value) {
	var p = parsePostDate(value);
	return p ? `${p.year}-${pad(p.month + 1)}-${pad(p.day)}` : undefined;
}

/*
	The date's markup, shared with the builder preview (PostDate.jsx): a link
	to the post's page carrying the `*` classes (options.linkTo 'postUrl', the
	default, when the post has a page) or a div, holding a <time> with the
	machine-readable date. The link used to go to "#".
*/
export function PostDateMarkup({ cls, id, index, type, text, iso, href, linkTo, onLinkClick, rootClassName = '', rootProps = {} }) {
	var className = `${cls('*')} ${rootClassName}`;
	var time = <time dateTime={iso}>{text}</time>;

	if ((linkTo ?? 'postUrl') === 'postUrl' && href) {
		return <Link href={href} onClick={onLinkClick} id={id} index={index} type={type} className={className} {...rootProps}>{time}</Link>;
	}
	return <div id={id} index={index} type={type} className={className} {...rootProps}>{time}</div>;
}

/* The publish date of the post or product it sits in; nothing when it has none. */
const PostDateView = (props) => {

	/* A key the block lacks falls back to the postDate defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postDate', props?.cssSelectors);

	const post = usePost();
	var text = formatPostDate(post?.post_date, props?.options?.dateFormat);
	if (!text) return null;

	return (
		<PostDateMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			text={text}
			iso={postDateIso(post?.post_date)}
			href={postUrlFor(post)}
			linkTo={props?.options?.linkTo}
		/>
	);
};

PostDateView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default PostDateView;
