'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconUser, IconMapPin, IconHome, IconDeviceFloppy } from "@tabler/icons-react";
import { ProfileCard, ProfileField } from './CustomerProfileEditView';
import { elementCssClasses } from "../ElementsDefinition";
import { editorRelative } from '../editorPosition';

/*
	Builder (canvas) preview of the customer's profile editor.

	It mirrors CustomerProfileEditView's markup - using the same ProfileCard
	and ProfileField - with sample details, and reads the same cssSelectors
	keys with the same defaults from ElementsDefinition.js, so styles edited in
	the builder show here exactly as on the storefront.

	It never loads or saves a profile: the old builder version called
	get_customer, update_user_profile and update_user_password from the canvas.
	The fields are read-only, the buttons do nothing but select the block, and
	a placeholder stands in for the map.
*/
const CustomerProfileEdit = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('customerProfileEdit', cssSelectors);
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId

	var id = props?.id;
	var index = props?.index

	const SaveButton = ({ label = "Save changes" }) => (
		<button type="button" className={cls('save-button')}>
			<IconDeviceFloppy size={16} />
			{label}
		</button>
	);

	return (
		<div
			draggable
			id={id}
			className={` ${cls('*')}  hover:outline-orange-200 hover:outline-solid hover:outline-1 ${editorRelative(cls('*'))}   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
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

				<ProfileCard cls={cls} icon={IconUser} title="Personal details" description="Used to fill in your details at checkout." footer={<SaveButton />}>
					<div className={cls('fields')}>
						<ProfileField cls={cls} label="Full name">
							<input type="text" readOnly className={cls('field-input')} value="Customer name" />
						</ProfileField>
						<ProfileField cls={cls} label="Phone">
							<input type="tel" readOnly className={cls('field-input')} value="01712345678" />
						</ProfileField>
						<ProfileField cls={cls} label="Email" hint="Your email is your login and can't be changed here.">
							<input type="email" disabled readOnly className={cls('field-input')} value="customer@example.com" />
						</ProfileField>
					</div>
				</ProfileCard>

				<ProfileCard cls={cls} icon={IconHome} title="Address" description="Where we deliver your orders." footer={<SaveButton />}>
					<div className={cls('fields')}>
						<ProfileField cls={cls} label="Address line 1">
							<input type="text" readOnly className={cls('field-input')} value="House 12, Road 4, Dhanmondi" />
						</ProfileField>
						<ProfileField cls={cls} label="Address line 2">
							<input type="text" readOnly className={cls('field-input')} placeholder="Apartment, landmark (optional)" value="" />
						</ProfileField>
					</div>
				</ProfileCard>

				<ProfileCard
					cls={cls}
					icon={IconMapPin}
					title="Delivery location"
					description="Pin your exact spot on the map so the rider can find you."
					footer={
						<>
							<button type="button" className={cls('secondary-button')}>Clear location</button>
							<SaveButton label="Save location" />
						</>
					}
				>
					<div className={cls('location-body')}>
						<p className={cls('location-note')}>Your saved location is marked on the map. Drag the pin to change it.</p>
						<div className={cls('map')}>
							{/* Builder-only stand-in for the map; the shop shows the real one inside `map`. */}
							<div className="flex h-48 items-center justify-center bg-gray-100 text-sm text-gray-400">
								<IconMapPin size={20} className="mr-1.5" /> Map
							</div>
						</div>
					</div>
				</ProfileCard>

			</div>
		</div>
	);
};

CustomerProfileEdit.propTypes = {
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};

export default CustomerProfileEdit;
