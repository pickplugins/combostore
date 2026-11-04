'use client'

import { useEffect, useState } from "react";
import { useCounterStore } from "../../../store/useCounterStore";

/*
	The customer's saved login token, for the account blocks.

	Reading localStorage while rendering crashed /account with a 500: the
	server has no localStorage. It is read after mount instead, and read again
	whenever the store's token changes, so logging in or out updates the page.

	Returns undefined until the browser has been checked, then the token or
	null. Callers render nothing while it is undefined, so a logged-in
	customer never sees the login form flash up first.
*/
export function useSavedToken() {

	const storeToken = useCounterStore((state) => state.token);
	const [token, setToken] = useState(undefined);

	useEffect(() => {
		setToken(localStorage.getItem("token") || null);
	}, [storeToken]);

	return token;
}
