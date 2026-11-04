'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconUser, IconMapPin, IconHome, IconDeviceFloppy } from "@tabler/icons-react";
import Spinner from "../../../components/Spinner";
import LocationPicker from "../../../components/LocationPicker";
import { useCounterStore } from '../../../store/useCounterStore';
import { useSavedToken } from './useSavedToken';
import { accountInputClass, accountPrimaryButtonClass, accountSecondaryButtonClass, AccountNotice } from './accountUi';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

function ProfileCard({ icon: Icon, title, description, children, footer }) {
	return (
		<section className="rounded-xl border border-gray-200 bg-white shadow-xs">
			<div className="flex items-start gap-3 border-b border-gray-100 p-4">
				<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]">
					<Icon size={18} />
				</span>
				<div>
					<h3 className="text-base font-semibold text-gray-900">{title}</h3>
					{description && <p className="text-sm text-gray-500">{description}</p>}
				</div>
			</div>
			<div className="p-4">{children}</div>
			{footer && (
				<div className="flex flex-wrap items-center justify-end gap-2 rounded-b-xl border-t border-gray-100 bg-gray-50 px-4 py-3">{footer}</div>
			)}
		</section>
	);
}

function ProfileField({ label, htmlFor, hint, children }) {
	return (
		<div className="flex flex-col gap-1.5">
			<label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">{label}</label>
			{children}
			{hint && <p className="text-xs text-gray-500">{hint}</p>}
		</div>
	);
}

/*
	The customer's profile editor.

	The old block could not run: it called setloading, token, serverUrl,
	addNotification, Spinner and LocationPicker without defining or importing
	any of them, and it loaded and saved the profile of user 1 rather than
	the customer who is logged in. Its "City" field wrote a key the server
	never saves, and its "Change password" form posted to an endpoint the
	server does not have - both are left out rather than shown not working.
*/
const CustomerProfileEditView = (props) => {
	const { id, type } = props;

	var cssSelectors = props?.cssSelectors ?? {};

	const { userDataX, setUserDataX, addNotification } = useCounterStore();
	const token = useSavedToken();

	var [editUserData, seteditUserData] = useState(null);
	var [loadError, setloadError] = useState(null);
	/* Which card is saving: 'details', 'address' or 'location'. */
	var [saving, setsaving] = useState(null);

	useEffect(() => {

		/* The endpoint looks the customer up by the id in the request, so it
		   waits for the logged-in customer's id as well as their token. */
		if (!token || !userDataX?.id) return;

		var cancelled = false;
		setloadError(null);

		fetch(serverUrl + "wp-json/combo-store/v2/get_customer", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({ id: userDataX.id }),
		})
			.then((response) => {
				if (!response.ok) throw new Error('request failed');
				return response.json();
			})
			.then((res) => {
				if (cancelled) return;
				if (!res?.customer) throw new Error(res?.errors || 'no customer');
				seteditUserData({ ...res.customer });
			})
			.catch(() => {
				if (!cancelled) setloadError("We couldn't load your profile. Please refresh the page to try again.");
			});

		return () => { cancelled = true; };

	}, [token, userDataX?.id]);

	function setField(ev) {
		const { name, value } = ev.target;
		seteditUserData(prev => ({ ...prev, [name]: value }));
	}

	/* The whole profile is sent each time: the server blanks any field that
	   is missing from the request. */
	function saveProfile(section, overrides = {}) {

		if (!token || !editUserData) return;

		var userData = { ...editUserData, ...overrides };

		setsaving(section);

		fetch(serverUrl + "wp-json/combo-store/v2/update_user_profile", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			/* The logged-in customer's own id - this used to be a hard-coded 1. */
			body: JSON.stringify({ id: editUserData.id ?? userDataX?.id, userData: userData }),
		})
			.then((response) => {
				if (!response.ok) throw new Error('request failed');
				return response.json();
			})
			.then(() => {
				seteditUserData(userData);

				/* Checkout pre-fills from the store, so keep it in step. */
				if (userDataX) {
					setUserDataX({
						...userDataX,
						name: userData.name,
						phone: userData.phone,
						billing_address1: userData.billing_address1,
						billing_address2: userData.billing_address2,
						delivery_location: userData.delivery_location,
					});
				}

				addNotification({ type: 'success', title: 'Profile updated', content: "Your changes have been saved." });
			})
			.catch(() => {
				addNotification({ type: 'error', title: 'Could not save', content: "Your changes were not saved. Please try again." });
			})
			.finally(() => setsaving(null));
	}

	function SaveButton({ section, label = "Save changes" }) {
		return (
			<button type="submit" className={accountPrimaryButtonClass} disabled={saving !== null}>
				{saving === section ? <Spinner /> : <IconDeviceFloppy size={16} />}
				{label}
			</button>
		);
	}

	var location = editUserData?.delivery_location;
	var hasLocation = Boolean(location && location.lat && location.lng);

	return (
		<div id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''}`}>

			{loadError && <AccountNotice>{loadError}</AccountNotice>}

			{!loadError && !editUserData && (
				<div className="flex flex-col gap-4" aria-hidden="true">
					{[0, 1].map(card => (
						<div key={card} className="animate-pulse rounded-xl border border-gray-200 bg-white p-4">
							<div className="h-4 w-40 rounded bg-gray-200" />
							<div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
								<div className="h-9 rounded-lg bg-gray-100" />
								<div className="h-9 rounded-lg bg-gray-100" />
							</div>
						</div>
					))}
				</div>
			)}

			{editUserData && (
				<div className="flex flex-col gap-5">

					<form onSubmit={ev => { ev.preventDefault(); saveProfile('details'); }}>
						<ProfileCard
							icon={IconUser}
							title="Personal details"
							description="Used to fill in your details at checkout."
							footer={<SaveButton section="details" />}
						>
							<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
								<ProfileField label="Full name" htmlFor="profile-name">
									<input id="profile-name" type="text" name="name" autoComplete="name" className={accountInputClass} value={editUserData?.name ?? ''} onChange={setField} />
								</ProfileField>
								<ProfileField label="Phone" htmlFor="profile-phone">
									<input id="profile-phone" type="tel" name="phone" autoComplete="tel" className={accountInputClass} value={editUserData?.phone ?? ''} onChange={setField} />
								</ProfileField>
								<ProfileField label="Email" htmlFor="profile-email" hint="Your email is your login and can't be changed here.">
									<input id="profile-email" type="email" name="email" disabled className={accountInputClass} value={editUserData?.email ?? ''} readOnly />
								</ProfileField>
							</div>
						</ProfileCard>
					</form>

					<form onSubmit={ev => { ev.preventDefault(); saveProfile('address'); }}>
						<ProfileCard
							icon={IconHome}
							title="Address"
							description="Where we deliver your orders."
							footer={<SaveButton section="address" />}
						>
							<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
								<ProfileField label="Address line 1" htmlFor="profile-address1">
									<input id="profile-address1" type="text" name="billing_address1" autoComplete="address-line1" placeholder="House, road, area" className={accountInputClass} value={editUserData?.billing_address1 ?? ''} onChange={setField} />
								</ProfileField>
								<ProfileField label="Address line 2" htmlFor="profile-address2">
									<input id="profile-address2" type="text" name="billing_address2" autoComplete="address-line2" placeholder="Apartment, landmark (optional)" className={accountInputClass} value={editUserData?.billing_address2 ?? ''} onChange={setField} />
								</ProfileField>
							</div>
						</ProfileCard>
					</form>

					<form onSubmit={ev => { ev.preventDefault(); saveProfile('location'); }}>
						<ProfileCard
							icon={IconMapPin}
							title="Delivery location"
							description="Pin your exact spot on the map so the rider can find you."
							footer={
								<>
									{hasLocation && (
										<button
											type="button"
											className={accountSecondaryButtonClass}
											disabled={saving !== null}
											onClick={() => saveProfile('location', { delivery_location: null })}
										>
											Clear location
										</button>
									)}
									<SaveButton section="location" label="Save location" />
								</>
							}
						>
							<div className="flex flex-col gap-3">
								{/* This message used to show only when a location WAS set. */}
								<p className="text-sm text-gray-600">
									{hasLocation
										? "Your saved location is marked on the map. Drag the pin to change it."
										: "You haven't saved a delivery location yet. Click the map to drop a pin."}
								</p>
								<div className="overflow-hidden rounded-lg border border-gray-200">
									<LocationPicker
										markerDraggable={true}
										latlng={location}
										onLocationSelect={(coords) => {
											seteditUserData(prev => ({ ...prev, delivery_location: coords }));
										}}
									/>
								</div>
							</div>
						</ProfileCard>
					</form>

				</div>
			)}

		</div>
	);
};

CustomerProfileEditView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	cssSelectors: PropTypes.object,
};

export default CustomerProfileEditView;
