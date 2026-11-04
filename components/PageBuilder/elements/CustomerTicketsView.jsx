'use client'

import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";
import { IconLifebuoy, IconMail, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import { useCounterStore } from '../../../store/useCounterStore';
import { AccountEmptyState } from './accountUi';

/*
	The account page's Support tab.

	This block rendered an empty div, so the tab opened onto a blank page.
	Until there is a ticket list behind it, it offers the shop's own contact
	details from Settings, and only the ones that are filled in.
*/
const CustomerTicketsView = (props) => {
	const { id, type } = props;

	var cssSelectors = props?.cssSelectors ?? {};

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
		<div id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}`}>

			<div className="flex flex-col gap-4">

				<div>
					<h3 className="text-lg font-semibold text-gray-900">Need help?</h3>
					<p className="text-sm text-gray-500">Questions about an order, a delivery or a payment? Get in touch and mention your order number.</p>
				</div>

				{contacts.length > 0 ? (
					<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{contacts.map(contact => {
							var Icon = contact.icon;
							return (
								<li key={contact.key}>
									<a
										href={contact.href}
										target={contact.external ? '_blank' : undefined}
										rel={contact.external ? 'noopener noreferrer' : undefined}
										className="flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#1b0e9f]/40 hover:bg-[#1b0e9f]/5"
									>
										<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]">
											<Icon size={20} />
										</span>
										<span className="min-w-0">
											<span className="block text-sm font-semibold text-gray-900">{contact.label}</span>
											<span className="block truncate text-sm text-gray-500">{contact.value}</span>
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
	cssSelectors: PropTypes.object,
};

export default CustomerTicketsView;
