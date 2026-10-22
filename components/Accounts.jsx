"use client";
import { useContext, useEffect, useState } from "react";
import Link from 'next/link';
import { useAuth } from "./auth-context";

import {
	IconLogout,
	IconUser,
	IconDatabaseSmile,
	IconShoppingCart,
} from "@tabler/icons-react";
import { useCounterStore } from '../store/useCounterStore'

//hello
const Accounts = () => {


	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle } = useCounterStore()


	const { user, handleLogout } = useAuth();



	var [buyCreditsPrams, setbuyCreditsPrams] = useState({ showPopup: false });
	var [hasCredit, sethasCredit] = useState(true);
	const [creditShow, setCreditShow] = useState(false);

	// useEffect(() => {
	// 	var remining = userDataX?.total_credit - userDataX?.total_credit_used;

	// 	if (remining <= 0) sethasCredit(false);
	// }, [hasCredit]);








	return (
		/* Rendered in the sidebar footer, which already draws the top border. */
		<div className="">

			<div className="flex gap-3 flex-col">


				{userDataX?.id && (
					<div className="flex items-center gap-2 rounded-lg bg-white/5 p-2">

						<span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gray-700 text-gray-400">
							{userDataX?.avatar && (
								<img
									className="h-9 w-9 object-cover"
									src={userDataX?.avatar}
									alt={userDataX?.name}
								/>
							)}
							{!userDataX?.avatar && (
								<IconUser size={18} />
							)}
						</span>

						<div className="min-w-0 flex-1 leading-tight">
							<div className="truncate text-xs font-semibold text-white">
								{userDataX?.name}
							</div>
							<div className="truncate text-[10px] capitalize text-gray-400">
								{userDataX?.roles?.[0]?.replace(/_/g, " ")}
							</div>
						</div>

						<button
							type="button"
							title={("Logout")}
							aria-label={("Logout")}
							className="inline-flex h-8 w-8 shrink-0 items-center justify-center !rounded-lg !border !border-transparent !bg-transparent !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-red-500/20 hover:!text-red-400"
							onClick={(ev) => {
								handleLogout();
							}}>
							<IconLogout size={16} />
						</button>

					</div>
				)}

				{!userDataX?.id && (
					<button
						type="button"
						className="flex w-full items-center justify-center gap-2 !rounded-lg !border !border-white/10 !bg-white/5 !px-4 !py-2 text-sm !text-gray-300 !shadow-none transition-colors hover:!bg-white/10 hover:!text-white"
						onClick={(ev) => {
							handleLogout();
						}}>
						<IconLogout size={16} />{("Logout")}
					</button>
				)}


			</div>
		</div>
	);
};

export default Accounts;
