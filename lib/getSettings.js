// lib/api.js
import { DEMO_MODE } from "./demo/config";

/*
	The store's public settings, for the root layout (analytics IDs).

	Returns null instead of throwing when the server cannot be reached or
	answers with something that is not JSON: this runs at the top of
	app/layout.jsx, so a throw here took down every route, the dashboard's
	sign-in included. In demo mode (NEXT_PUBLIC_DEMO_MODE) there may be no
	server at all, so it gives up after a few seconds rather than waiting on
	a connection that never opens.
*/
export const getSettings = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const API_TOKEN = process.env.API_TOKEN;

  if (!API_TOKEN) return null;

  try {
    const res = await fetch(
      `${serverUrl}wp-json/combo-store/v2/get_settings_public`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.API_TOKEN, // ✅ server only
        },
        body: JSON.stringify({}),
        cache: "no-store", // or 'force-cache'
        ...(DEMO_MODE ? { signal: AbortSignal.timeout(4000) } : {}),
      }
    );

    if (!res.ok) return null;

    return await res.json();
  } catch (e) {
    return null;
  }
};
