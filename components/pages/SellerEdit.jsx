'use client'
import React from 'react'

import UserEdit from './UserEdit';

/*
	The seller screen (Sellers): the shared user editor, headed and linked for
	its role.

	This used to be a copy of the coupon editor around UserProfileEdit. On load
	it read the person's user ID through get_coupon, i.e. the post with that
	number. UserProfileEdit sent the address as billing_address / country /
	city, which update_user_profile does not accept, so those never saved, and
	its Change Password box changed the logged-in admin's own password.
*/
const SellerEdit = ({ id, variant = "page", role = "seller" }) => {
	return <UserEdit id={id} variant={variant} role={role} />;
};

export default SellerEdit;
