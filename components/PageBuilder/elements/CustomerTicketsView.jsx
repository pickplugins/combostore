'use client'

import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";
import { IconLifebuoy, IconMail, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import { useCounterStore } from '../../../store/useCounterStore';
import { AccountEmptyState } from './accountUi';
import { elementCssClasses } from "../ElementsDefinition";

/*
	The account page's Support tab.

	This block rendered an empty div, so the tab opened onto a blank page.
	Until there is a ticket list behind it, it offers the shop's own contact
	details from Settings, and only the ones that are filled in.
*/
const CustomerTicketsView = (props) => {
	const { id, type } = props;

	var cssSelectors = props?.cssSelectors ?? {};
	/* Each part's classes; a key the block lacks falls back to the customerTickets defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerTickets', cssSelectors);

	const { settings, fetchSettings } = useCounterStore();

	useEffect(() => {
		if (!settings && typeof fetchSettings === 'function') fetchSettings();
	}, []);

	/* wa.me needs the number with its country code. A Bangladeshi number
	   saved in local form (01XXXXXXXXX) gets its 88 added; anything else is
	   used as entered. */
	var whatsappDigits = String(settings?.whatsapp ?? '').replace(/[^\d]/g, '');
	if (/^01\d{9}$/.test(whatsappDigits)) whatsappDigits = '88' + whatsappDigits;

	var contacts = [
		settings?.whatsapp && {
			key: 'whatsapp',
			icon: IconBrandWhatsapp,
			label: 'WhatsApp',
			value: settings.whatsapp,
			href: `https://wa.me/${whatsappDigits}`,
			external: true,
		},
		settings?.phone && {
			key: 'phone',
			icon: IconPhone,
			label: 'Call us',
			value: settings.phone,
			href: `tel:${String(settings.phone).replace(/\s/g, '')}`,
		},
		settings?.email && {
			key: 'email',
			icon: IconMail,
			label: 'Email',
			value: settings.email,
			href: `mailto:${settings.email}`,
		},
	].filter(Boolean);

	return (
		<div id={id} type={type} className={cls('*')}>

			<div className={cls('panel')}>

				{/* Pages or tabs that already label this panel set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Need help?</h3>
						<p className={cls('subtitle')}>Questions about an order, a delivery or a payment? Get in touch and mention your order number.</p>
					</div>
				)}

				{contacts.length > 0 ? (
					<ul className={cls('contacts')}>
						{contacts.map(contact => {
							var Icon = contact.icon;
							return (
								<li key={contact.key} className={cls('contact')}>
									<a
										href={contact.href}
										target={contact.external ? '_blank' : undefined}
										rel={contact.external ? 'noopener noreferrer' : undefined}
										className={cls('contact-link')}
									>
										<span className={cls('contact-icon')}>
											<Icon size={20} />
										</span>
										<span className={cls('contact-text')}>
											<span className={cls('contact-label')}>{contact.label}</span>
											<span className={cls('contact-value')}>{contact.value}</span>
										</span>
									</a>
								</li>
							);
						})}
					</ul>
				) : (
					<AccountEmptyState icon={IconLifebuoy} title={settings ? "Contact details coming soon" : "Loading contact details…"}>
						{settings ? "The shop hasn't added its contact details yet." : null}
					</AccountEmptyState>
				)}

			</div>
		</div>
	);
};

CustomerTicketsView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CustomerTicketsView;
