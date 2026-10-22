"use client";

import { usePathname } from "next/navigation";

import DashboardShell from "./DashboardShell";
import { useCounterStore } from "../store/useCounterStore";

/*
  The dashboard chrome, mounted once for every /dashboard route.

  It used to be wrapped around the content inside app/dashboard/page.jsx, so
  /dashboard was the only screen that had it - products, orders and every other
  section rendered with no sidebar at all, which reads as a sidebar that has
  lost its entries.

  The one exception is /dashboard itself while signed out, because that route
  doubles as the sign-in screen. GlobalHeader treats a missing JWT as a
  sign-out and pushes to /login, so framing the sign-in card would bounce
  straight off the page. Every other route wants exactly that redirect: signed
  out, a dashboard screen has nothing to show.

  The check is deliberately not "is there a token" alone. `token` is null for
  the first render after a reload, until AuthProvider has read the stored JWT
  back, and keying the whole frame off that would unmount and remount the
  sidebar on every page load.
*/
export default function DashboardFrame({ children }) {

	const pathname = usePathname();
	const token = useCounterStore((state) => state.token);

	if (pathname === "/dashboard" && !token) return children;

	return <DashboardShell>{children}</DashboardShell>;
}
