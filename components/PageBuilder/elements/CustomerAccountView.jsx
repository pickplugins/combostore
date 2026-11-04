'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus, IconLogout } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { useAuth } from "../../../components/auth-context";
import { useCounterStore } from '../../../store/useCounterStore'
import Image from "next/image";

const CustomerAccountView = (props) => {
	const {
		block,

		index,
		id,
		type,
		prams,
		handleMoveBlock // New prop for recursive drops
	} = props;
	const { handleLogout } = useAuth();

	const children = props?.children || [];

	var cssSelectors = props?.cssSelectors ?? {};

	const { appData, token, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle } = useCounterStore()



	return (
		<div

			id={id}
			type={type}
			className={`${cssSelectors['*']?.classes}   
			`}

		>



			{userDataX && (
				<div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-xs">

					<div className="flex min-w-0 items-center gap-4">
						<div className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#1b0e9f]/10 ring-2 ring-white">
							{userDataX?.avatar ? (
								<Image className="h-full w-full object-cover" src={userDataX.avatar} width={112} height={112} alt={userDataX?.name ?? ''} />
							) : (
								/* No photo: the first letter of their name instead of a broken image. */
								<span className="flex h-full w-full items-center justify-center text-xl font-semibold text-[#1b0e9f]">
									{String(userDataX?.name || '?').trim().charAt(0).toUpperCase()}
								</span>
							)}
						</div>

						<div className="min-w-0">
							<div className="text-sm text-gray-500">Welcome back,</div>
							<div className="truncate text-lg font-semibold text-gray-900">{userDataX?.name}</div>
							{userDataX?.email && <div className="truncate text-sm text-gray-500">{userDataX.email}</div>}
						</div>
					</div>

					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/30"
						onClick={() => handleLogout()}
					>
						<IconLogout size={16} />
						Log out
					</button>

				</div>
			)}




			{/* {JSON.stringify(userDataX)} */}




			{
				children.map((child, idx) => (
					<BlockRender
						key={child.id}
						index={`${index}-${idx}`}
						block={child}

					/>
				))
			}
		</div>
	);
};

CustomerAccountView.propTypes = {
	block: PropTypes.object,

	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default CustomerAccountView;
