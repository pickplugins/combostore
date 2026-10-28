"use client";

import React from "react";

import { useCounterStore } from "../../../store/useCounterStore";
import { useQuickViewStore } from "./store";
import QuickViewModal from "./QuickViewModal";

/*
	Mounted once per page by components/ExtensionsRuntime.jsx from the root
	layout.

	Unlike the other runtimes this one does render something - but into
	`document.body` through a portal, so nothing appears where this sits.
	It has to be here rather than in a block: there is one modal for the
	whole site, and a shopper can open it from any grid, slider or loop on
	any page. A block would mean one modal per placement, several of them
	open at once, and nothing at all on the pages the merchant forgot.
*/
const QuickViewRuntime = () => {

	const storeSettings = useCounterStore((s) => s.settings);
	const hydrateFromSettings = useQuickViewStore((s) => s.hydrateFromSettings);

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	return <QuickViewModal />;
};

export default QuickViewRuntime;
