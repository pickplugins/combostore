"use client";

import React from "react";
import { use, useEffect } from "react";
import { notFound } from "next/navigation";
import registry from "../../../extensions";
import { useExtensionsStore } from "../../../store/useExtensionsStore";

/*
	Dashboard screens contributed by extensions.

	This is the lowest-priority route under /dashboard: Next matches static
	segments first, so every file under app/dashboard/ still wins and an
	extension can never shadow a core screen. What reaches here is a slug core
	does not have a folder for.

	It sits inside app/dashboard/layout.jsx, so the sidebar, header and shell
	are already rendered - the extension component only draws the page body,
	exactly like a core screen.

	Only the first segment is matched. A deeper path under an extension's slug
	reaches the same component with `segments`, so an extension can do its own
	sub-routing without claiming more of the route table.
*/
const ExtensionRoute = ({ params }) => {

	/* Next 16 hands a client page its `params` as a promise. */
	const resolved = use(params);

	const segments = Array.isArray(resolved?.slug) ? resolved.slug : [];
	const slug = segments[0];

	const activeIds = useExtensionsStore((s) => s.activeIds);
	const hydrate = useExtensionsStore((s) => s.hydrate);

	/* Stored on/off overrides are applied after mount, never during render -
	   see the comment in useExtensionsStore. */
	useEffect(() => { hydrate(); }, [hydrate]);

	const match = slug ? registry.routeFor(slug, activeIds) : null;

	/*
		A slug that no active extension claims is a 404, the same as any other
		unknown dashboard URL. Returning an empty screen instead would make a
		disabled extension look like a broken page.

		This is checked against the *active* set, so navigating to the screen of
		an extension that has been switched off also lands here.
	*/
	if (!match) notFound();

	const { Component } = match;

	return <Component slug={slug} segments={segments} />;
};

export default ExtensionRoute;
