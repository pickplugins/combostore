"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCounterStore } from '../store/useCounterStore'
import Notify from "./Notify";

import { usePathname } from 'next/navigation';
import Image from "next/image";
import { useAuth } from "./auth-context";
import {
	IconShieldLockFilled,
	IconShieldLock,
	IconChevronRight,
	IconHome,
	IconHomeShare,
	IconWand,
	IconUser,
	IconMenu2,
	IconLayoutSidebarLeftCollapse,
	IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";


/* Global CSS styles `button` with unlayered rules, so it beats Tailwind
	 utilities and the overrides below need `!` to land.

	 `h-10 w-10` below `sm` keeps the header controls at a thumb-sized target;
	 they drop back to 36px once there is a pointer. */
const ICON_BUTTON =
	"inline-flex h-10 w-10 shrink-0 items-center justify-center !rounded-lg !border !border-transparent !bg-transparent !px-0 !py-0 !text-gray-500 !shadow-none transition-colors hover:!bg-gray-100 hover:!text-gray-900 sm:h-9 sm:w-9";

const CRUMB_CLASSES =
	"max-w-[28vw] truncate text-sm capitalize text-gray-500 transition-colors hover:text-gray-900 sm:max-w-none";

const CRUMB_CURRENT_CLASSES =
	"max-w-[52vw] truncate text-sm font-semibold capitalize text-gray-900 sm:max-w-none";


const GlobalFooter = () => {

	const { token, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, mobileNav, setmobileNav, lang, setlang, privacyMode, setprivacyMode, settings } = useCounterStore()
	const pathname = usePathname();


	const { user, handleLogout } = useAuth();


	var currentLocation = pathname;

	var currentRoutes = currentLocation.split("/");

	currentRoutes = currentRoutes.filter(function (e) {
		return e.replace(/(\r\n|\n|\r)/gm, "");
	});



	// useEffect(() => {



	// }, [token]);




	return (
		<div
			className="py-10"
		>

			<Notify notifications={notifications} />

		</div>
	);
};

export default GlobalFooter;
