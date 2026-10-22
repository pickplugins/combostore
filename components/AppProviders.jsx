"use client";

import { useEffect } from "react";

import { AuthProvider } from "./auth-context";
import { useCounterStore } from "../store/useCounterStore";

/*
  The client half of the root layout.

  Every route group used to ship its own `<html>`/`<body>` and its own copy of
  the font setup and `AuthProvider`, which meant the root layout had to be a
  client component just to kick off `fetchSettings`. With the providers split
  out here, `app/layout.jsx` stays a server component and can export real
  `metadata` and `viewport` - including `viewport-fit=cover`, which the iOS
  safe-area insets in `globals.css` need in order to report anything.
*/
export default function AppProviders({ children }) {

	/*
	  Settings need the JWT, and the JWT only reaches the store after
	  AuthProvider's mount effect has read it out of localStorage. Keying this
	  off `token` instead of firing once on mount is the difference between a
	  request sent with `Bearer null` and one the server answers. Re-running is
	  cheap: `fetchSettings` no-ops while the token is null, keeps what it
	  fetched, and shares one in-flight request, so this stays a single POST
	  per signed-in session - and the loader for the whole app.
	*/
	const token = useCounterStore((state) => state.token);
	const fetchSettings = useCounterStore((state) => state.fetchSettings);

	useEffect(() => {
		fetchSettings();
	}, [fetchSettings, token]);

	return <AuthProvider>{children}</AuthProvider>;
}
