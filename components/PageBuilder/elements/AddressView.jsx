import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import { elementCssClasses } from "../ElementsDefinition";

/* A phone number as a tel: link - "+1 (555) 123-4567" becomes tel:+15551234567 (the old link kept the spaces and brackets). */
export const telHref = (value) => {
	var digits = String(value ?? '').replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '');
	return digits.replace(/\+/g, '').length >= 3 ? `tel:${digits}` : null;
};

/* A location as a Google Maps search link. */
export const mapHref = (value) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(String(value ?? '').trim())}`;

/*
	The rows to show, in order - phone, email, location - each as { kind,
	value, icon, label, href }. A row is left out when its value is empty (it
	used to draw an empty row with a bare "tel:" link). Phone links to tel:,
	email to mailto:, location to Google Maps when options.location.mapLink
	is set.

	A block saved as { text, icon } (one template's footer) is read as a
	location: it used to render an empty list, so the store's address
	never showed.
*/
export function addressItems(options) {
	var o = options ?? {};
	var legacy = !o.phone && !o.email && !o.location && String(o.text ?? '').trim();
	var location = legacy ? { value: o.text, icon: o.icon } : o.location;
	var rows = [];
	var add = (kind, entry, href) => {
		var value = String(entry?.value ?? '').trim();
		if (value) rows.push({ kind, value, icon: entry?.icon, label: String(entry?.label ?? '').trim(), href: href(value) });
	};
	add('phone', o.phone, telHref);
	add('email', o.email, (v) => /^[^\s@]+@[^\s@]+$/.test(v) ? `mailto:${v}` : null);
	add('location', location, (v) => location?.mapLink ? mapHref(v) : null);
	return rows;
}

/*
	The address's markup, shared with the builder preview (Address.jsx): a
	`*` list of `item` rows. Phone and email rows are links (`link` plus
	`phone-link` / `email-link`); a location row is a `location-link` when it
	links to the map. Inside: the `icon` (only when one is set - it used to
	draw an empty box that took up the gap), an optional `label` (with
	options.showLabels) and the `text`.
*/
export function AddressMarkup({ cls, id, index, type, options, items, onLinkClick, rootClassName = '', rootProps = {} }) {

	var iconSize = Number(options?.iconSize) || 20;

	return (
		<ul id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{items.map(item => {
				var Icon = TablerIcons[item.icon];
				var inner = (
					<>
						{Icon && <span className={cls('icon')}><Icon size={iconSize} /></span>}
						{options?.showLabels && item.label && <span className={cls('label')}>{item.label}</span>}
						<span className={cls('text')}>{item.value}</span>
					</>
				);
				var external = item.kind === 'location' ? { target: '_blank', rel: 'noopener noreferrer' } : {};
				return (
					<li key={item.kind} className={cls('item')}>
						{item.href
							? <a href={item.href} onClick={onLinkClick} className={`${cls('link')} ${cls(`${item.kind}-link`)}`} {...external}>{inner}</a>
							: inner}
					</li>
				);
			})}
		</ul>
	);
}

/* The store's phone, email and location. Nothing when all three are empty. */
const AddressView = (props) => {

	/* A key the block lacks falls back to the address defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('address', props?.cssSelectors);

	var items = addressItems(props?.options);
	if (items.length === 0) return null;

	return <AddressMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} items={items} />;
};

AddressView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default AddressView;
