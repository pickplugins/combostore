"use client";
import Notify from "../components/Notify";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCounterStore } from '../store/useCounterStore'

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


const GlobalHeader = () => {

	const { token, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, mobileNav, setmobileNav, lang, setlang, privacyMode, setprivacyMode, settings } = useCounterStore()
	const pathname = usePathname();


	const { user, handleLogout } = useAuth();


	var currentLocation = pathname;

	var currentRoutes = currentLocation.split("/");

	currentRoutes = currentRoutes.filter(function (e) {
		return e.replace(/(\r\n|\n|\r)/gm, "");
	});


	var routesArgs = {
		'top-customers': { label: ("Top Customers"), value: "top-customers" },
		'bulk-submit-product': { label: ("Bulk Submit Product"), value: "bulk-submit-product" },
		'bulk-add-users': { label: ("Bulk Add Users"), value: "bulk-add-users" },
		'stats-orders': { label: ("Stats Orders"), value: "stats-orders" },
		'top-customers': { label: ("Top Customers"), value: "top-customers" },
		'top-selling-products': { label: ("Top Selling Products"), value: "top-selling-products" },
		'create-tickets': { label: ("Create Tickets"), value: "create-tickets" },
		'media-library': { label: ("Media Library"), value: "media-library" },
		'stocks-history': { label: ("Stocks History"), value: "stocks-history" },

		'bulk-submit-blog': { label: ("Bulk Submit Blog"), value: "bulk-submit-blog" },
		'top': { label: ("Top"), value: "top" },
		settings: { label: ("Settings"), value: "settings" },
		products: { label: ("Products"), value: "products" },
		refunds: { label: ("Refunds"), value: "refunds" },
		dashboard: { label: "Dashboard", value: "dashboard" },
		orders: { label: ("Orders"), value: "orders" },
		tasks: { label: ("Tasks"), value: "tasks" },
		subscriptions: { label: ("Subscriptions"), value: "subscriptions" },
		licenses: { label: ("Licenses"), value: "licenses" },
		reviews: { label: ("Reviews"), value: "reviews" },
		coupons: { label: ("Coupons"), value: "coupons" },
		wishlists: { label: ("Wishlists"), value: "wishlists" },
		attributes: { label: ("Attributes"), value: "attributes" },
		categories: { label: ("Categories"), value: "categories" },
		tags: { label: ("Tags"), value: "tags" },
		brands: { label: ("Brands"), value: "brands" },
		expenses: { label: ("Expenses"), value: "expenses" },
		purchases: { label: ("Purchases"), value: "purchases" },
		deliveries: { label: ("Deliveries"), value: "deliveries" },
		users: { label: ("Users"), value: "users" },
		customers: { label: ("Customers"), value: "customers" },
		suppliers: { label: ("Suppliers"), value: "suppliers" },
		sellers: { label: ("Sellers"), value: "sellers" },
		riders: { label: ("Riders"), value: "riders" },
		activity: { label: ("Activity"), value: "activity" },
		stocks: { label: ("Stocks"), value: "stocks" },
		tickets: { label: ("Tickets"), value: "tickets" },
		posts: { label: ("Posts"), value: "posts" },
		'posts-comments': { label: ("Comments"), value: "posts-comments" },
		'post-categories': { label: ("Categories"), value: "post-categories" },
		'posts-tags': { label: ("Tags"), value: "posts-tags" },
		comments: { label: ("Comments"), value: "comments" },
		wishlists: { label: ("Wishlists"), value: "wishlists" },
		apiKeys: { label: ("API Keys"), value: "apiKeys" },
		ValidationRequests: {
			label: ("Validation Requests"),
			value: "ValidationRequests",
		},
	};

	// addNotifications({
	// 	title: "Data Saved!",
	// 	content: "You change successfully saved!.",
	// 	type: "success",
	// });

	// function addNotifications(notification) {
	// 	var notificationsX = [...notifications];
	// 	notificationsX.push(notification);
	// 	setnotifications(notificationsX);
	// }

	// useEffect(() => {



	// }, [token]);


	useEffect(() => {

		/*
			A null `token` means "signed out" only once the session has had its
			chance to come back.

			Effects run child-first, so this one fired before AuthProvider's
			rehydration effect further up the tree. On every reload it saw the
			store's initial null, called handleLogout - which deletes the stored
			JWT - and redirected, so the rehydration that ran a moment later found
			nothing left to restore. Deferring to localStorage closes that window:
			if a JWT is still on disk, AuthProvider is about to validate it.
		*/
		if (token == null && !localStorage.getItem("token")) {

			handleLogout()
		}


	}, [token]);

	return (
		<header
			className="sticky top-0 z-30 flex h-16 items-center justify-between gap-2 border-b border-gray-200 bg-white/90 px-2 backdrop-blur supports-[backdrop-filter]:bg-white/75 sm:gap-3 sm:px-5 lg:h-[70px]"
			style={{
				paddingLeft: 'max(0.5rem, env(safe-area-inset-left))',
				paddingRight: 'max(0.5rem, env(safe-area-inset-right))',
			}}>

			{/* {JSON.stringify(settings)} */}

			<div className="flex min-w-0 items-center gap-1 sm:gap-2">
				{/*
					Two triggers for two different things. Below `lg` the sidebar is
					a drawer floating over the page, so the button opens `mobileNav`;
					from `lg` up it is a column in the layout, so the button collapses
					it via `navToggle`. One button driving one flag could only ever be
					right at one of the two widths - which is how a phone ended up
					loading with the nav already covering the screen.
				*/}
				<button
					type="button"
					title="Open navigation"
					aria-label="Open navigation"
					aria-expanded={mobileNav}
					onClick={() => setmobileNav(true)}
					className={`${ICON_BUTTON} lg:hidden`}>
					<IconMenu2 size={20} />
				</button>

				<button
					type="button"
					title={navToggle ? ("Collapse navigation") : ("Expand navigation")}
					aria-label={navToggle ? ("Collapse navigation") : ("Expand navigation")}
					aria-expanded={navToggle}
					onClick={() => setnavToggle(!navToggle)}
					/* `max-lg:hidden`, not `hidden lg:inline-flex`: ICON_BUTTON already
						 carries `inline-flex`, and between two unprefixed display
						 utilities the winner is whichever Tailwind emits last, not
						 whichever is written last in the attribute - so plain `hidden`
						 lost and both triggers showed up side by side on a phone. A
						 media-query variant is ordered after the base utilities, so it
						 wins cleanly. */
					className={`${ICON_BUTTON} max-lg:hidden`}>
					{navToggle
						? <IconLayoutSidebarLeftCollapse size={20} />
						: <IconLayoutSidebarLeftExpand size={20} />}
				</button>

				{/* {JSON.stringify(currentRoutes)} */}



				<nav
					aria-label="Breadcrumb"
					className="no-scrollbar flex min-w-0 items-center gap-1 overflow-x-auto whitespace-nowrap">
					{/* <Link href="/dashboard">{("Dashboard")}</Link> */}

					<Link
						href="/dashboard"
						title={("Dashboard")}
						className="shrink-0 rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700">
						<IconHome size={16} />
					</Link>

					{currentRoutes.map((route, index) => {

						var isCurrent = index == currentRoutes.length - 1;

						return (
							/*
								The trail scrolls from the left, so on a narrow screen it
								showed the ancestors and cut off the page you are actually
								on. Below `sm` only the last crumb is rendered; the full
								trail comes back as soon as there is room for it.
							*/
							<span
								key={`index-${index}`}
								className={`${isCurrent ? "flex" : "hidden sm:flex"} min-w-0 items-center gap-1`}>
								<IconChevronRight size={14} className="shrink-0 text-gray-300" />

								<Link href={`/${route == 'dashboard' ? 'dashboard' : 'dashboard/' + route}`} className={isCurrent ? CRUMB_CURRENT_CLASSES : CRUMB_CLASSES}>

									{routesArgs[route] == undefined ? route : routesArgs[route].label}
								</Link>
							</span>
						);
					})}
				</nav>



			</div>

			<div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2" >

				{userDataX?.roles?.includes("administrator") && (
					/* Was `hidden sm:inline-flex`, which put the builder out of reach
						 from a phone entirely. It collapses to its icon instead. */
					<Link
						href="/builder"
						title={("Builder")}
						className="inline-flex h-10 w-10 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-gray-400 hover:bg-gray-50 sm:h-9 sm:w-auto sm:px-3 sm:py-1.5">
						<IconWand size={16} />
						<span className="hidden sm:inline">{("Builder")}</span>
					</Link>
				)}

				<Link
					href="/" target="_blank"
					title={("Store")}
					className="inline-flex h-10 w-10 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-gray-400 hover:bg-gray-50 sm:h-9 sm:w-auto sm:px-3 sm:py-1.5">
					<IconHomeShare size={16} />
					<span className="hidden sm:inline">{("Store")}</span>
				</Link>

				<button
					type="button"
					aria-pressed={privacyMode}
					title={privacyMode ? ("Amounts hidden - click to show") : ("Hide amounts")}
					className={`${ICON_BUTTON} ${privacyMode ? "!border-amber-300 !bg-amber-50 !text-amber-600 hover:!bg-amber-100" : ""}`}
					onClick={ev => {
						setprivacyMode(!privacyMode);
					}}>
					{privacyMode ? <IconShieldLockFilled size={20} /> : <IconShieldLock size={20} />}

				</button>

				{userDataX?.id && (
					/* Hidden below `sm`: the header has a hamburger, the builder, the
						 privacy toggle and notifications to fit on a 360px screen, and
						 the drawer footer already identifies who is signed in. */
					<div className="hidden items-center gap-2 border-l border-gray-200 pl-2 sm:flex sm:pl-3">
						<span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-gray-400">
							{userDataX?.avatar && (
								<img
									className="h-8 w-8 object-cover"
									src={userDataX?.avatar}
									alt={userDataX?.name}
								/>
							)}
							{!userDataX?.avatar && (
								<IconUser size={16} />
							)}
						</span>

						<div className="hidden min-w-0 leading-tight md:block">
							<div className="truncate text-xs font-semibold text-gray-900">
								{userDataX?.name}
							</div>
							<div className="truncate text-[10px] capitalize text-gray-500">
								{userDataX?.roles?.[0]?.replace(/_/g, " ")}
							</div>
						</div>
					</div>
				)}


				<div>
					{/* <select
						onChange={(e) => {
							setlang(e.target.value);
						}}
						value={lang}
						className="!text-white  bg-gray-600 hover:bg-gray-700 !py-[10px] ">
						<option value="en">English</option>
						<option value="bn">Bangla</option>
						<option value="hi">Hindi</option>
						<option value="zh">Chinese</option>
						<option value="ja">Japanese</option>
						<option value="es">Spanish</option>
					</select> */}
					<Notify notifications={notifications} />
				</div>


			</div>
		</header>
	);
};

export default GlobalHeader;
