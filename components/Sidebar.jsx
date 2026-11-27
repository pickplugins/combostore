"use client";
import Image from "next/image";

import Link from 'next/link';
import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import ToggleNavs from "./ToggleNavs";
import Accounts from "./Accounts";
import {
	IconBasketCheck,
	IconStarHalfFilled,
	IconAdjustmentsAlt,
	IconTrolley,
	IconDashboard,
	IconPropeller,
	IconRotateRectangle,
	IconX,
	IconSubtask,
	IconShoppingBagHeart, IconMessageUser,
	IconBuildingStore,
	IconTags,
	IconUserSquare,
	IconWand,
	IconBike,
	IconLayoutBoardSplit,
	IconLayoutNavbar,
	IconLayoutBottombar,
	IconTruckDelivery,
	IconRosetteDiscount,
	IconClipboardX,
	IconReceiptRefund,
	IconUserDollar,
	IconBox,
	IconPackages,
	IconNews,
	IconMessage,
	IconList,
	IconDeviceDesktopAnalytics,
	IconActivityHeartbeat,
	IconUsersGroup,
	IconStackPush,
	IconLibraryPhoto,
	IconCubeSend,
	IconPuzzle,
	IconSpeakerphone,
	IconMail,
	IconAddressBook,
	IconSettings,
	IconPhoneCall,
	IconMessages,
} from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { postApi } from './pages/marketingUi'
import { useExtensionsStore } from '../store/useExtensionsStore'
import registry from '../extensions'

import VersionUpdateBanner from "./VersionUpdateBanner";
import { can } from '../lib/rolePermissions';


/*
	Hoisted out of the component body: the array was rebuilt - and every icon
	element in it re-created - on each render of a component that re-renders on
	any store change.
*/
export const NAVS = [
	{ label: ("Dashboard"), value: "dashboard", icon: <IconDashboard />, roles: ['administrator'] },
	{ label: ("Store"), value: "store", icon: <IconBuildingStore />, roles: ['administrator', 'store_manager'] },
	{ label: ("Products"), value: "products", icon: <IconBox />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Reviews"), value: "reviews", icon: <IconStarHalfFilled />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Coupons"), value: "coupons", icon: <IconRosetteDiscount />, parent: "store", roles: ['administrator', 'store_manager'] },
	// { label: ("Wishlists"), value: "wishlists", icon: <IconShoppingBagHeart />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Categories"), value: "categories", icon: <IconSubtask />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Tags"), value: "tags", icon: <IconTags />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Brands"), value: "brands", icon: <IconPropeller />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Badges"), value: "badges", icon: <IconPropeller />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Attributes"), value: "attributes", icon: <IconPropeller />, parent: "store", roles: ['administrator', 'store_manager'] },
	{ label: ("Bulk Submit Product"), value: "bulk-submit-product", icon: <IconCubeSend />, parent: "store", roles: ['administrator', 'store_manager'] },


	{ label: ("Sell"), value: "sell", icon: <IconBasketCheck />, roles: ['administrator', 'store_manager', 'support_agent',] },
	{ label: ("Orders"), value: "orders", icon: <IconBasketCheck />, parent: "sell", roles: ['administrator', 'store_manager', 'support_agent', 'customer'] },
	{ label: ("Incomplete"), value: "incomplete", icon: <IconClipboardX />, parent: "sell", roles: ['administrator', 'store_manager'] },
	{ label: ("Refunds"), value: "refunds", icon: <IconReceiptRefund />, parent: "sell", roles: ['administrator', 'store_manager', 'customer'] },
	{ label: ("Subscriptions"), value: "subscriptions", icon: <IconRotateRectangle />, parent: "sell", roles: ['administrator', 'store_manager', 'customer'] },
	{ label: ("Licenses"), value: "licenses", icon: <IconRotateRectangle />, parent: "sell", roles: ['administrator', 'store_manager', 'customer'] },

	// { label: ("Deliveries"), value: "deliveries", icon: <IconTruckDelivery />, roles: ['administrator', 'rider'] },



	{ label: ("Accounting"), value: "accounts", icon: <IconBasketCheck />, roles: ['administrator', 'store_manager'] },
	{ label: ("Expenses"), value: "expenses", icon: <IconBasketCheck />, roles: ['administrator', 'store_manager'], parent: "accounts", },
	{ label: ("Purchases"), value: "purchases", icon: <IconBasketCheck />, roles: ['administrator', 'store_manager'], parent: "accounts", },

	{ label: ("Delivery"), value: "delivery", icon: <IconTruckDelivery />, roles: ['administrator', 'store_manager'] },
	{ label: ("Deliveries"), value: "deliveries", icon: <IconTruckDelivery />, roles: ['administrator', 'store_manager'], parent: "delivery", },
	{ label: ("Shipping Zones"), value: "shipping-zones", icon: <IconTruckDelivery />, roles: ['administrator', 'store_manager'], parent: "delivery", },
	{ label: ("Shipping Classes"), value: "shipping-classes", icon: <IconPackages />, roles: ['administrator', 'store_manager'], parent: "delivery", },



	// { label: ("Appearance"), value: "appearance", icon: <IconWand />, roles: ['administrator'] },
	// { label: ("Themes"), value: "themes", icon: <IconLayoutBoardSplit />, parent: "appearance", roles: ['administrator'] },
	// { label: ("Header"), value: "header", icon: <IconLayoutNavbar />, parent: "appearance", roles: ['administrator'] },
	// { label: ("Footer"), value: "footer", icon: <IconLayoutBottombar />, parent: "appearance", roles: ['administrator'] },
	// { label: ("Builder"), value: "builder", icon: <IconDeviceIpadCog />, parent: "appearance", roles: ['administrator'] },

	/* The group key must differ from the "All Users" child's key, or the
		 tree map collapses the two and the group nests inside itself. */
	{ label: ("Users"), value: "users-group", icon: <IconUserDollar />, roles: ['administrator'] },
	{ label: ("All Users"), value: "users", icon: <IconUserDollar />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Customers"), value: "customers", icon: <IconUserDollar />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Store Managers"), value: "store-managers", icon: <IconTrolley />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Support Agents"), value: "support-agents", icon: <IconUserSquare />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Affiliates"), value: "affiliates", icon: <IconUserDollar />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Suppliers"), value: "suppliers", icon: <IconTrolley />, parent: "users-group", roles: ['administrator'] },
	// { label: ("Sellers"), value: "sellers", icon: <IconUserPin />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Riders"), value: "riders", icon: <IconBike />, parent: "users-group", roles: ['administrator'] },
	{ label: ("Bulk Add Users"), value: "bulk-add-users", icon: <IconUsersGroup />, parent: "users-group", roles: ['administrator'] },


	{ label: ("Stats"), value: "stats", icon: <IconDeviceDesktopAnalytics />, roles: ['administrator', 'store_manager'] },
	{ label: ("Activity"), value: "activity", icon: <IconActivityHeartbeat />, parent: "stats", roles: ['administrator', 'store_manager'] },
	{ label: ("Stocks"), value: "stocks", icon: <IconStackPush />, parent: "stats", roles: ['administrator', 'store_manager'] },
	{ label: ("Stocks History"), value: "stocks-history", icon: <IconStackPush />, parent: "stats", roles: ['administrator', 'store_manager'] },
	{ label: ("Top Customers"), value: "top-customers", icon: <IconUserDollar />, parent: "stats", roles: ['administrator', 'store_manager'] },
	{ label: ("Top Selling Products"), value: "top-selling-products", icon: <IconUserDollar />, parent: "stats", roles: ['administrator', 'store_manager'] },

	{ label: ("Support"), value: "support", icon: <IconUserDollar />, roles: ['administrator', 'support_agent'] },

	/* A group with children is only a toggle, so the dashboard itself is the
		 first child. The group key differs from it for the same reason as
		 "users-group". Affiliates see the whole group, read-only and limited to
		 their own rows (the server scopes it). */
	{ label: ("Affiliates Dashboard"), value: "affiliates-group", icon: <IconDeviceDesktopAnalytics />, roles: ['administrator', 'store_manager', 'affiliate'] },
	{ label: ("Overview"), value: "affiliates-dashboard", icon: <IconDeviceDesktopAnalytics />, parent: "affiliates-group", roles: ['administrator', 'store_manager', 'affiliate'] },
	{ label: ("Affiliate sales"), value: "affiliate-sales", icon: <IconUserDollar />, parent: "affiliates-group", roles: ['administrator', 'store_manager', 'affiliate'] },
	{ label: ("Affiliate clicks"), value: "affiliate-clicks", icon: <IconUserDollar />, parent: "affiliates-group", roles: ['administrator', 'store_manager', 'affiliate'] },
	{ label: ("Affiliate payouts"), value: "affiliate-payouts", icon: <IconUserDollar />, parent: "affiliates-group", roles: ['administrator', 'store_manager', 'affiliate'] },


	{ label: ("Tickets"), value: "tickets", icon: <IconMessageUser />, parent: "support", roles: ['administrator', 'support_agent'] },
	{ label: ("Create Tickets"), value: "create-tickets", icon: <IconMessageUser />, parent: "support", roles: ['administrator', 'support_agent'] },
	// { label: ("Pending"), value: "pending-tickets", icon: <IconInfoHexagon />, parent: "support", roles: ['administrator'] },
	{ label: ("Settings"), value: "settings", icon: <IconAdjustmentsAlt />, roles: ['administrator'] },
	/* Top-level, so its link is `/${slug}` rather than `/dashboard/${slug}` -
		 hence the explicit slug pointing at app/dashboard/extensions. */
	{ label: ("Extensions"), value: "extensions", slug: "dashboard/extensions", icon: <IconPuzzle />, roles: ['administrator'] },
	// { label: ("Media"), value: "media", icon: <IconLibraryPhoto />, roles: ['administrator'] },
	// { label: ("Onboard"), value: "onboard", icon: <IconAdjustmentsAlt />, roles: ['administrator'] },

	{ label: ("Media"), value: "media", icon: <IconLibraryPhoto />, roles: ['administrator'] },
	{ label: ("Media Library"), value: "media-library", icon: <IconList />, parent: "media", roles: ['administrator'] },

	{ label: ("Blogs"), value: "blogs", icon: <IconNews />, roles: ['administrator'] },
	{ label: ("Posts"), value: "posts", icon: <IconList />, parent: "blogs", roles: ['administrator'] },
	{ label: ("Comments"), value: "comments", icon: <IconMessage />, parent: "blogs", roles: ['administrator'] },
	/* Distinct keys from the Store entries above, with `slug` keeping the
		 route they already pointed at. Both routes are hardcoded to the
		 product taxonomies, so these still open the product screens. */
	{ label: ("Categories"), value: "post-categories", slug: "post-categories", icon: <IconSubtask />, parent: "blogs", roles: ['administrator'] },
	{ label: ("Tags"), value: "posts-tags", slug: "posts-tags", icon: <IconTags />, parent: "blogs", roles: ['administrator'] },
	{ label: ("Bulk Submit Blog"), value: "bulk-submit-blog", icon: <IconPropeller />, parent: "blogs", roles: ['administrator'] },

	/* Email and SMS marketing (ComboStoreMarketing.php). The group key is only a
		 toggle, so the overview is its first child, as with "affiliates-group". */
	{ label: ("Marketing"), value: "marketing", icon: <IconSpeakerphone />, roles: ['administrator'] },
	{ label: ("Overview"), value: "marketing-overview", icon: <IconDeviceDesktopAnalytics />, parent: "marketing", roles: ['administrator'] },
	{ label: ("Campaigns"), value: "marketing-campaigns", icon: <IconMail />, parent: "marketing", roles: ['administrator'] },
	{ label: ("Contacts"), value: "marketing-contacts", icon: <IconAddressBook />, parent: "marketing", roles: ['administrator'] },
	{ label: ("Lists"), value: "marketing-lists", icon: <IconList />, parent: "marketing", roles: ['administrator'] },
	{ label: ("Settings"), value: "marketing-settings", icon: <IconSettings />, parent: "marketing", roles: ['administrator'] },
	/* Agents work call lists here (ComboStoreMarketing's mkt_call_* routes). Top-level, so the slug carries dashboard/. */
	{ label: ("Calls"), value: "calls", slug: "dashboard/calls", icon: <IconPhoneCall />, roles: ['administrator', 'store_manager', 'support_agent'] },
	/* WhatsApp and Messenger conversations (ComboStoreInbox). Its unread badge is filled in by Sidebar below. */
	{ label: ("Messages"), value: "messages", slug: "dashboard/messages", icon: <IconMessages />, roles: ['administrator', 'support_agent'] },


	// { label: ("Credits"), value: "credits", icon: <IconCards />, roles: ['administrator'] },
	// { label: "CreditsLogs", value: "creditslogs", icon: <IconDatabaseEdit />, roles: ['administrator'] },
	// { label: "Licenses", value: "licenses", icon: <IconBasketCheck />, roles: ['administrator'] },

];


const CLOSE_BUTTON =
	"inline-flex h-9 w-9 shrink-0 items-center justify-center !rounded-lg !border !border-transparent !bg-white/5 !px-0 !py-0 !text-gray-400 !shadow-none transition-colors hover:!bg-red-500/20 hover:!text-red-400";


const CORE_NAV_VALUES = new Set(NAVS.map(n => n.value));

/*
	Core nav plus whatever the active extensions contribute.

	Two kinds of entry are refused rather than passed on, because ToggleNavs fails
	quietly on both:

		- one whose `value` a core entry already uses. The tree is keyed on `value`,
			so the second writer wins and an extension would replace a core screen's
			link with its own.
		- one naming a `parent` that does not exist. A child is only attached when
			its parent is in the map, so the entry would simply never render.

	Parents are resolved against core and every extension entry at once, so a
	manifest can list a child before the group it belongs to.
*/
function mergeExtensionNavs(extensionNavs) {
	if (!extensionNavs?.length) return NAVS;

	const available = new Set([...CORE_NAV_VALUES, ...extensionNavs.map(i => i.value)]);
	const extras = [];

	for (const item of extensionNavs) {

		if (CORE_NAV_VALUES.has(item.value)) {
			console.warn(`[extensions] ${item.extensionId}: nav value "${item.value}" is already a core entry - skipped`);
			continue;
		}

		if (item.parent && !available.has(item.parent)) {
			console.warn(`[extensions] ${item.extensionId}: nav parent "${item.parent}" does not exist - "${item.value}" skipped`);
			continue;
		}

		/*
			A child is linked as `/dashboard/<slug>`, which is where the extension
			route lives. A top-level entry is linked as `/<slug>` instead, so its
			slug carries the `dashboard/` prefix to land in the same place.
		*/
		extras.push(
			item.parent
				? item
				: { ...item, slug: item.slug ?? `dashboard/${item.value}` }
		);
	}

	return extras.length ? [...NAVS, ...extras] : NAVS;
}

const appVersion = process.env.NEXT_PUBLIC_APP_VERSION;
const appBeta = process.env.NEXT_PUBLIC_APP_BETA;

/*
	The nav column's contents, rendered twice: once in the mobile drawer and once
	in the desktop column. Keeping it in one place is what lets the two presentations
	stay in step - the alternative is a single element that has to be both a
	floating overlay and an in-flow column, which is where the old sidebar went
	wrong.

	`onNavigate` is only passed by the drawer: tapping a link there has to close
	it. Route changes close it too, but a tap on the link for the page you are
	already on does not change the route.
*/
const SidebarContent = ({ token, onNavigate, navs }) => (
	<>
		<div className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-800 px-4 py-4">

			<div className="flex flex-col gap-2">
				<Link href={`/dashboard`} className="min-w-0" onClick={onNavigate}>
					<Image
						src="/logo-h.png"
						className="h-8 w-auto object-contain" width={250} height={`80`} alt="ComboStore"
						priority
					/>
				</Link>

				<div className="text-white text-xs flex gap-2">

					<div>Version: {appVersion}</div>

					{appBeta && (
						<div className="text-white text-xs">Beta</div>

					)}

				</div>
			</div>

			{onNavigate && (
				<button
					type="button"
					title="Close navigation"
					aria-label="Close navigation"
					onClick={onNavigate}
					className={CLOSE_BUTTON}>
					<IconX size={18} />
				</button>
			)}

		</div>

		{token && (
			<>
				<nav
					aria-label="Main"
					className="scroll-thin flex-1 overflow-y-auto overscroll-contain px-3 py-4">
					<ToggleNavs navs={navs ?? NAVS} rootSlug={''} onNavigate={onNavigate} />
				</nav>

				<div
					className="shrink-0 border-t border-gray-800 p-3"
					style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
					<Accounts />
				</div>
			</>
		)}

		{/* <VersionUpdateBanner /> */}
	</>
);


/*
	How many applications wait for approval, from `route` (get_rider_applications
	or get_affiliate_applications; managers only). Checked every 60 seconds, and
	set at once when the page that reviews them reports a new count with the
	window event `eventName` (detail = the count; Riders.jsx, Affiliates.jsx).
	0 while `allowed` is false.
*/
function usePendingApplications(token, allowed, route, eventName) {
	const [count, setcount] = useState(0);
	useEffect(() => {
		if (!token || !allowed) { setcount(0); return; }
		let stop = false;
		const check = () => postApi(route, token, { status: "pending", per_page: 1 })
			.then((r) => { if (!stop && r?.status === "success") setcount(Number(r?.pending) || 0); })
			.catch(() => { });
		const onChanged = (ev) => {
			var next = Number(ev?.detail);
			if (Number.isFinite(next)) setcount(next); else check();
		};
		check();
		const timer = setInterval(check, 60000);
		window.addEventListener(eventName, onChanged);
		return () => { stop = true; clearInterval(timer); window.removeEventListener(eventName, onChanged); };
	}, [token, allowed, route, eventName]);
	return count;
}

/* An amber "waiting" badge for a nav entry (ToggleNavs NavBadge). */
function applicationsBadge(nav, count, noun) {
	return { ...nav, badge: count, badgeTone: 'waiting', badgeLabel: `${count} ${noun} ${count === 1 ? 'application' : 'applications'} waiting` };
}

const Sidebar = () => {


	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, mobileNav, setmobileNav } = useCounterStore()

	const pathname = usePathname();

	/*
		Extension nav entries.

		`activeIds` starts from the manifests, so this render matches the one the
		server produced; the stored on/off overrides are applied by hydrate()
		from the effect below, after hydration has already agreed. Reading
		localStorage during render here is what would reintroduce the mismatch.
	*/
	const activeExtensionIds = useExtensionsStore((s) => s.activeIds);
	const hydrateExtensions = useExtensionsStore((s) => s.hydrate);

	useEffect(() => { hydrateExtensions(); }, [hydrateExtensions]);

	/*
		Unread Messages conversations, for the badge. Only for the roles that see
		Messages; every 30 seconds, and at once when the Messages page says it
		changed something (the "cstore-inbox-changed" window event).
	*/
	const [inboxUnread, setinboxUnread] = useState(0);
	const canSeeInbox = can(userDataX, 'cstore_view_messages');
	useEffect(() => {
		if (!token || !canSeeInbox) return;
		let stop = false;
		const check = () => postApi("get_inbox_counts", token, {}).then((r) => { if (!stop) setinboxUnread(Number(r?.unread) || 0); }).catch(() => { });
		check();
		const timer = setInterval(check, 30000);
		window.addEventListener('cstore-inbox-changed', check);
		return () => { stop = true; clearInterval(timer); window.removeEventListener('cstore-inbox-changed', check); };
	}, [token, canSeeInbox]);

	/*
		Applications waiting for approval, for the Riders and Affiliates
		badges (see usePendingApplications above). Only administrators and
		store managers may list them.
	*/
	const canReviewApplications = !!userDataX?.roles?.some((r) => r === 'administrator' || r === 'store_manager');
	const riderApplications = usePendingApplications(token, canReviewApplications, "get_rider_applications", "cstore-rider-applications-changed");
	const affiliateApplications = usePendingApplications(token, canReviewApplications, "get_affiliate_applications", "cstore-affiliate-applications-changed");

	const navs = useMemo(
		() => mergeExtensionNavs(registry.navItems(activeExtensionIds)).map((n) => {
			if (n.value === 'messages' && inboxUnread) return { ...n, badge: inboxUnread };
			if (n.value === 'riders' && riderApplications) return applicationsBadge(n, riderApplications, 'rider');
			if (n.value === 'affiliates' && affiliateApplications) return applicationsBadge(n, affiliateApplications, 'affiliate');
			return n;
		}),
		[activeExtensionIds, inboxUnread, riderApplications, affiliateApplications]
	);

	const closeMobileNav = () => setmobileNav(false);

	/* The drawer covers the page it links to, so it has to get out of the way
		 once the route actually changes. */
	useEffect(() => {
		setmobileNav(false);
	}, [pathname, setmobileNav]);

	/* An overlay that cannot be dismissed from the keyboard is a trap. */
	useEffect(() => {
		if (!mobileNav) return;

		const onKeyDown = (ev) => {
			if (ev.key !== 'Escape') return;
			setmobileNav(false);
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [mobileNav, setmobileNav]);

	/* Without this the page scrolls under the drawer: a touch drag that starts
		 on the backdrop, or anywhere past the end of the nav list, moves the
		 dashboard behind it. The class is lifted again at `lg` in globals.css,
		 where the drawer is never on screen. */
	useEffect(() => {
		document.body.classList.toggle('nav-locked', mobileNav);
		return () => document.body.classList.remove('nav-locked');
	}, [mobileNav]);


	return (
		<>
			{/*
				Mobile: a drawer over the page.

				It is always mounted and moved with `translate-x`, rather than
				conditionally rendered, so it can animate in and out and so the
				nav list keeps its scroll position and expanded groups between
				openings. `invisible` keeps the off-screen copy out of the tab
				order while it is closed.
			*/}
			<div className="lg:hidden">

				<div
					onClick={closeMobileNav}
					aria-hidden="true"
					className={`fixed inset-0 z-40 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ${mobileNav ? "opacity-100" : "pointer-events-none opacity-0"}`}
				/>

				<aside
					aria-label="Main navigation"
					aria-hidden={!mobileNav}
					className={`fixed inset-y-0 left-0 z-50 flex w-[17rem] max-w-[85vw] flex-col border-r border-gray-800 bg-gray-900 shadow-2xl transition-transform duration-300 ease-out ${mobileNav ? "translate-x-0" : "invisible -translate-x-full"}`}>
					<SidebarContent token={token} navs={navs} onNavigate={closeMobileNav} />
				</aside>

			</div>

			{/*
				Desktop: part of the layout.

				Full-height column with the brand bar and the account footer
				pinned, so only the nav list scrolls however long it gets.
				Collapsing animates the width to zero instead of unmounting,
				which stops the main column from jumping as it goes.
			*/}
			<aside
				aria-label="Main navigation"
				className={`sticky top-0 hidden h-screen shrink-0 flex-col overflow-hidden border-r border-gray-800 bg-gray-900 transition-[width] duration-300 ease-out lg:flex ${navToggle ? "w-72" : "w-0 border-r-0"}`}>

				{/* Fixed inner width: the content would otherwise reflow - and the
				    labels wrap - as the column animates shut. */}
				<div className="flex h-full w-72 flex-col">
					<SidebarContent token={token} navs={navs} />
				</div>

			</aside>

		</>
	);
}

export default Sidebar
