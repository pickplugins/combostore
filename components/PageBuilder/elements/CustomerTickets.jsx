'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconMail, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";

/* Sample contacts for the canvas; the shop shows the ones filled in under Settings. */
const sampleContacts = [
	{ key: 'whatsapp', icon: IconBrandWhatsapp, label: 'WhatsApp', value: '01712345678' },
	{ key: 'phone', icon: IconPhone, label: 'Call us', value: '01712345678' },
	{ key: 'email', icon: IconMail, label: 'Email', value: 'support@example.com' },
];

/*
	Builder (canvas) preview of the account page's Support panel.

	It mirrors CustomerTicketsView's markup with sample contact details, and
	reads the same cssSelectors keys with the same defaults from
	ElementsDefinition.js, so styles edited in the builder show here exactly
	as on the storefront. The links go nowhere. It never fetches or changes
	anything: the old builder version called get_tickets, add_ticket and
	delete_tickets from the canvas.
*/
const CustomerTickets = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('customerTickets', cssSelectors);
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId

	var options = props?.options;
	var id = props?.id;
	var index = props?.index

	return (
		<div
			draggable
			id={id}
			className={` ${cls('*')}  hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>

			<div className={cls('panel')}>

				{!options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Need help?</h3>
						<p className={cls('subtitle')}>Questions about an order, a delivery or a payment? Get in touch and mention your order number.</p>
					</div>
				)}

				<ul className={cls('contacts')}>
					{sampleContacts.map(contact => {
						var Icon = contact.icon;
						return (
							<li key={contact.key} className={cls('contact')}>
								{/* The wrapper's onClick prevents the jump to "#", so a click only selects the block. */}
								<a href="#" className={cls('contact-link')}>
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

			</div>
		</div>
	);
};

CustomerTickets.propTypes = {
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CustomerTickets;
