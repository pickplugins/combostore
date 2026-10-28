import React from "react";
import { IconShieldHalf } from "@tabler/icons-react";

import FraudChecker from "./pages/FraudChecker";

/**
 * Fraud Checker.
 *
 * The order-screening configuration that used to be a tab on Settings. It is
 * one dashboard screen and nothing else: no blocks, because none of this is
 * something a merchant places on a page, and no runtime, because nothing is
 * enforced yet and a runtime that does nothing is a runtime mounted on every
 * page of the storefront for no reason.
 *
 * The settings key is unchanged - `fraudCheck` in the store settings blob,
 * same per-check ids, same field names - so a store configured before the
 * move reads back as it was. SettingsGlobal.jsx no longer posts that key,
 * which leaves this extension the single writer and is what stops a save on
 * the settings screen overwriting one made here.
 *
 * The file is .jsx because `nav[].icon` is a rendered element, matching how
 * core writes them in Sidebar.jsx's NAVS.
 */
const manifest = {

	id: "fraud-checker",
	name: "Fraud Checker",
	version: "1.0.0",
	description: "Order screening configuration - login and OTP requirements, rate limits by IP and phone, duplicate detection, reCAPTCHA and mobile fraud scoring.",

	enabled: false,

	/*
		`parent` names a core group from Sidebar.jsx's NAVS; an entry whose
		parent is not found is dropped, because ToggleNavs only pushes a child
		when `map[item.parent]` exists.

		`value` has to be unique across core and every other extension, since
		the nav tree is keyed on it, and `roles` is required - ToggleNavs calls
		`.includes` on it with no guard. This is store configuration, so it
		carries the same two roles the other store screens do.
	*/
	nav: [
		{
			label: "Fraud Checker",
			value: "fraud-checker",
			icon: <IconShieldHalf />,
			parent: "store",
			roles: ["administrator", "store_manager"],
		},
	],

	/*
		`/dashboard/fraud-checker`. A file under app/dashboard/ would win over
		this, because Next matches the static route before the catch-all - so
		the slug is one core is unlikely to take.
	*/
	routes: {
		"fraud-checker": FraudChecker,
	},
};

export default manifest;
