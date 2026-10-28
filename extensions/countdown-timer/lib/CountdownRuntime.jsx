"use client";

import React from "react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useCountdownStore } from "./store";

/*
	Headless. Mounted once per page by components/ExtensionsRuntime.jsx from
	the root layout, and renders nothing.

	Both jobs have to happen before any block can draw, and on every page
	where one might be placed: a timer needs the merchant's campaigns, and
	an evergreen timer needs to know whether this browser has met it before.
	Leaving either to the blocks would mean every block doing it, and two
	blocks racing to stamp the same campaign.
*/
const CountdownRuntime = () => {

	const storeSettings = useCounterStore((s) => s.settings);

	const hydrateFromSettings = useCountdownStore((s) => s.hydrateFromSettings);
	const hydrateSeen = useCountdownStore((s) => s.hydrateSeen);

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	/* After mount, never during render - the stamps come from localStorage,
	   and seeding state from it during render would make the server markup
	   and the first client render disagree. */
	React.useEffect(() => {
		hydrateSeen();
	}, [hydrateSeen]);

	return null;
};

export default CountdownRuntime;
