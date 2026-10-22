import AppProviders from "@/components/AppProviders";
import DashboardFrame from "@/components/DashboardFrame";

/*
  A nested layout, under the document that app/layout.jsx owns.

  This file used to render an `<html>`/`<body>` of its own - plus a second copy
  of the font setup - inside the root layout's. The parser throws the inner
  tags away but keeps their children, so it rendered, two `w-screen` containers
  deep, out of a tree React then had to hydrate against the one the parser had
  already rewritten.

  It also never rendered the dashboard frame. Only app/dashboard/page.jsx did,
  around its own content, so /dashboard had a sidebar and no other dashboard
  route had one. Mounting it here is what gives every section - products,
  orders, customers, settings - the same chrome, and it stays mounted across
  navigations, so the nav keeps its scroll position and its expanded group.
*/
export const metadata = {
	title: {
		default: "ComboStore",
		template: "%s · ComboStore",
	},
	description: "Store administration for ComboStore.",
	/* Gives an installed home-screen shortcut a sensible name instead of the
	   hostname. */
	appleWebApp: {
		title: "ComboStore",
		capable: true,
		statusBarStyle: "default",
	},
};

/*
  `viewport-fit=cover` is what makes `env(safe-area-inset-*)` return anything
  other than 0, so the safe-area padding in `globals.css` depends on it.
  `maximumScale` is deliberately left alone - capping zoom locks out anyone
  who needs to magnify a dense table.
*/
export const viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
	themeColor: "#634fe5",
};

export default function DashboardLayout({ children }) {
	return (
		<AppProviders>
			<DashboardFrame>{children}</DashboardFrame>
		</AppProviders>
	);
}
