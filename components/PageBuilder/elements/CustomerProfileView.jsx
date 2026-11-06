'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { useCounterStore } from '../../../store/useCounterStore';
import { useSavedToken } from './useSavedToken';
import { AccountListSkeleton, AccountNotice } from './accountUi';
import { elementCssClasses } from "../ElementsDefinition";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The signed-in customer's profile, read-only: name, email, phone, address
	and delivery location, from the same get_customer endpoint the profile
	edit block uses.

	This block used to render an empty <div>, so a Profile tab showed nothing.
*/
const CustomerProfileView = (props) => {
	const { id, type } = props;

	var cssSelectors = props?.cssSelectors ?? {};
	/* Each part's classes; a key the block lacks falls back to the customerProfile defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('customerProfile', cssSelectors);

	const { userDataX } = useCounterStore();
	const token = useSavedToken();

	var [customer, setcustomer] = useState(null);
	var [error, seterror] = useState(null);

	useEffect(() => {

		/* The endpoint looks the customer up by the id in the request, so it
		   waits for the signed-in customer's id as well as their token. */
		if (!token || !userDataX?.id) return;

		var cancelled = false;
		seterror(null);

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
				if (!res?.customer) throw new Error('no customer');
				setcustomer(res.customer);
			})
			.catch(() => {
				if (!cancelled) seterror("We couldn't load your profile. Please refresh the page to try again.");
			});

		return () => { cancelled = true; };

	}, [token, userDataX?.id]);

	/* Signed out: nothing to show. */
	if (token === null) return null;

	var location = customer?.delivery_location;
	var hasLocation = Boolean(location && location.lat && location.lng);
	var address = [customer?.billing_address1, customer?.billing_address2].filter(part => part && String(part).trim()).join(', ');

	var rows = [
		{ label: 'Name', value: customer?.name },
		{ label: 'Email', value: customer?.email },
		{ label: 'Phone', value: customer?.phone },
		{ label: 'Address', value: address },
	];

	return (
		<div id={id} type={type} className={cls('*')}>

			<div className={cls('panel')}>

				{/* Pages or tabs that already label this panel set hideTitle. */}
				{!props?.options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Your profile</h3>
					</div>
				)}

				{error && <AccountNotice>{error}</AccountNotice>}

				{!error && !customer && <AccountListSkeleton rows={1} />}

				{!error && customer && (
					<div className={cls('card')}>
						<dl className={cls('details')}>

							{rows.map(row => (
								<div key={row.label} className={cls('row')}>
									<dt className={cls('label')}>{row.label}</dt>
									<dd className={row.value ? cls('value') : cls('empty-value')}>{row.value || 'Not added yet'}</dd>
								</div>
							))}

							<div className={cls('row')}>
								<dt className={cls('label')}>Delivery location</dt>
								<dd className={hasLocation ? cls('value') : cls('empty-value')}>
									{hasLocation ? (
										<a
											className={cls('map-link')}
											href={`https://www.google.com/maps?q=${encodeURIComponent(`${location.lat},${location.lng}`)}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											View on map
										</a>
									) : 'Not added yet'}
								</dd>
							</div>

						</dl>
					</div>
				)}

			</div>
		</div>
	);
};

CustomerProfileView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CustomerProfileView;
