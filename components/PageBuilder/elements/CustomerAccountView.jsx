'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
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
				<div className="flex justify-between">


					<div className="flex items-center gap-5">

						<div className="w-20 h-20 overflow-hidden rounded-sm ">
							<Image className="object-cover h-full w-full " src={userDataX?.avatar} width={200} height={200} alt={userDataX?.name} />
						</div>

						<div className="flex gap-2">
							<div>Welcome!</div>
							<div>{userDataX?.name}</div>
						</div>
					</div>

					<div>

						<div
							className="p-2 inline hover:bg-red-500 rounded-sm cursor-pointer px-4 bg-red-400 text-white"
							onClick={(ev) => {
								handleLogout();
							}}>
							{("Logout")}
						</div>

					</div>

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
