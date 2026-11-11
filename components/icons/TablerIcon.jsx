"use client";

import { createContext, createElement, forwardRef, useContext, useEffect, useState } from "react";

/*
	Tabler icons by name, for blocks that save their icon as a string
	("IconUser").

	The storefront views used to resolve those names with
	`import * as TablerIcons from '@tabler/icons-react'`, which bundles every
	icon - ~6,000 of them - into every page (PageSpeed: ~630 KB of script and
	most of a second of main-thread work). Instead:

	  - PageBuilderContent (on the server) finds the icon names in the page's
	    blocks and passes their drawing data to <IconRegistryProvider>, so
	    those icons render in the server HTML like before;
	  - an icon the page did not include (a template part loaded in the
	    browser, the builder) is fetched from /api/icons - names asked for in
	    the same tick share one request - and drawn when it arrives, in a
	    same-size empty <svg> until then, so nothing shifts.

	tablerIcon(name) returns a component used exactly like the Tabler one it
	replaces (size, stroke, color, title, className and other <svg> props),
	or null when there is no name, so `tablerIcon(a) ?? Fallback` and
	`IconX && <IconX />` keep working. The component is the same object
	every time for a name, so re-renders do not remount it.

	Icon data: [type (0 outline, 1 filled), kebab name, [[tag, attrs], ...]]
	- see scripts/build-tabler-icons.mjs. Drawn the way Tabler's
	createReactComponent draws it, classes included.
*/

const ICON_NAME = /^Icon[A-Za-z0-9]+$/;

const IconRegistry = createContext(null);

/* name -> data | null (unknown), once known in this browser tab. Not used on the server, where requests must not share state. */
const loaded = new Map();
const isBrowser = typeof window !== "undefined";

export function IconRegistryProvider({ icons, children }) {
	if (isBrowser && icons) for (const name in icons) if (!loaded.has(name)) loaded.set(name, icons[name]);
	return <IconRegistry.Provider value={icons ?? null}>{children}</IconRegistry.Provider>;
}

/* Names waiting for the next /api/icons request, and that request's promise. */
var queue = new Set();
var batch = null;

function loadIcon(name) {
	queue.add(name);
	if (!batch) {
		batch = Promise.resolve().then(async () => {
			var names = [...queue].sort();
			queue = new Set();
			batch = null;
			try {
				var res = await fetch(`/api/icons?n=${names.join(",")}`);
				var data = res.ok ? await res.json() : {};
				for (const n of names) loaded.set(n, data?.[n] ?? null);
			} catch (e) {
				/* Offline or failed: leave them unknown so a later render can retry. */
			}
		});
	}
	return batch;
}

const ATTRS = {
	outline: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" },
	filled: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", stroke: "none" },
};

const TablerIcon = forwardRef(function TablerIcon({ name, color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) {

	var registry = useContext(IconRegistry);
	var data = registry?.[name];
	if (data === undefined && isBrowser) data = loaded.get(name);

	var [, rerender] = useState(0);
	var missing = data === undefined;

	useEffect(() => {
		if (!missing) return;
		var live = true;
		loadIcon(name).then(() => { if (live && loaded.has(name)) rerender(n => n + 1); });
		return () => { live = false; };
	}, [name, missing]);

	/* A name Tabler does not have: nothing, as an unknown name drew nothing before. */
	if (data === null) return null;

	var filled = data?.[0] === 1;
	var iconName = data?.[1] ?? String(name).replace(/^Icon/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

	return createElement(
		"svg",
		{
			ref,
			...ATTRS[filled ? "filled" : "outline"],
			width: size,
			height: size,
			className: ["tabler-icon", `tabler-icon-${iconName}`, className].join(" "),
			...(filled ? { fill: color } : { strokeWidth: stroke, stroke: color }),
			...rest,
		},
		title && createElement("title", { key: "svg-title" }, title),
		...(data?.[2] ?? []).map(([tag, attrs], i) => createElement(tag, { key: `svg-${i}`, ...attrs })),
		...(Array.isArray(children) ? children : [children]),
	);
});

/* One component per name, so it keeps its identity across renders. */
const components = new Map();

export function tablerIcon(name) {
	if (typeof name !== "string" || !ICON_NAME.test(name)) return null;
	var Component = components.get(name);
	if (!Component) {
		Component = forwardRef((props, ref) => <TablerIcon ref={ref} name={name} {...props} />);
		Component.displayName = name;
		components.set(name, Component);
	}
	return Component;
}

export default TablerIcon;
