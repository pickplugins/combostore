// lib/pageStyles.js
/*
	SERVER ONLY (it reaches lib/generateTailwindCSS and @tailwindcss/oxide,
	which are Node only).

	The storefront's Tailwind CSS comes from app/globals.css, which Next builds
	from the classes Tailwind finds in the project's source files. Page builder
	classes live in page data, not in source, so any class a page uses that no
	source file happens to contain has no rule there - arbitrary colours picked
	in the builder (`hover:bg-[#1D1E2C]`), template theme tokens
	(`font-heading`), classes since removed from the template file. The
	builder canvas runs Tailwind live and draws them all; the storefront did
	not. Installed library templates (Templates > Library, e.g. WonderJoy) made
	it obvious: they store no stylesheet at all until each part is re-saved.

	pageStyles adds one stylesheet with just those missing classes.

	Just those, not every class on the page: a sheet written after globals.css
	wins every tie, so a full one re-ordered the site's own utilities. Its
	`.hidden` (used by the template) came after globals' `lg:block` (hard-coded
	in the menu component) and the desktop nav vanished. The same is why the
	stored per-part sheets are not used here: three sheets in a row break each
	other's responsive order (the footer's `text-center` beat the content's
	`lg:text-left`).
*/

import { createRequire } from "module";
import path from "path";
import { generateTailwindCSS } from "./generateTailwindCSS";
import { getPageTemplate } from "./getPageTemplate";
import { templateFontTokens, TEMPLATE_COLOR_KEYS } from "./templateTheme";
import { DEMO_WITHOUT_SERVER } from "./demo/config";

/* Every class list in the block tree: anything named `classes` holding a
   string, at any depth (same walk as the editor's collectTailwindClasses). */
export function collectBlockClasses(data) {
	const classes = new Set();

	const walk = (value) => {
		if (Array.isArray(value)) {
			value.forEach(walk);
			return;
		}
		if (!value || typeof value !== "object") return;

		for (const [key, child] of Object.entries(value)) {
			if (key === "classes" && typeof child === "string") {
				child.split(/\s+/).filter(Boolean).forEach((c) => classes.add(c));
			} else {
				walk(child);
			}
		}
	};

	walk(data);
	return [...classes].sort();
}

/*
	The classes globals.css was built with: the same scan @tailwindcss/postcss
	runs over the project (about 0.7s). Once per process in production; in dev
	at most every 15s, so a class added to a source file stops being duplicated
	soon after. null when the sources are not there to scan (a deploy that
	ships only the build) - every page class then goes in the sheet.
*/
const RESCAN_MS = process.env.NODE_ENV === "production" ? Infinity : 15_000;
let built = { set: null, at: 0 };

function builtClasses() {
	if (built.at && Date.now() - built.at < RESCAN_MS) return built.set;
	let set = null;
	try {
		/* createRequire keeps the bundler away from the native scanner. */
		const require = createRequire(path.join(process.cwd(), "package.json"));
		const { Scanner } = require("@tailwindcss/oxide");
		const scanner = new Scanner({ sources: [{ base: process.cwd(), pattern: "**/*", negated: false }] });
		const candidates = scanner.scan();
		set = candidates.length ? new Set(candidates) : null;
	} catch (error) {
		console.error("pageStyles: source scan failed", error);
	}
	built = { set, at: Date.now() };
	return set;
}

/* Classes built on the site template's tokens (lib/templateTheme.js). globals
   has no such tokens (or, for background/foreground, different ones), so the
   build has no usable rule for them even when a source file names them. */
const TOKEN_CLASS = new RegExp(
	`(^|[:\\-])(heading|body|${TEMPLATE_COLOR_KEYS.join("|")})(\\/[\\w.\\[\\]%]+)?!?$`
);

function missingFromBuild(classes) {
	const set = builtClasses();
	if (!set) return classes;
	return classes.filter((c) => TOKEN_CLASS.test(c) || !set.has(c));
}

/*
	The active template's custom font classes (font-<name>, Template Settings >
	Your fonts) as @theme tokens - what app/api/tailwind-css adds on Save.
	Re-read at most once a minute; with the server unreachable it is "" and
	only those classes go without rules.
*/
let fontTokens = { value: "", at: 0 };

async function activeFontTokens() {
	if (Date.now() - fontTokens.at < 60_000) return fontTokens.value;
	let value = "";
	/* A demo store with no server: the demo template's fonts (lib/demo/server.js). */
	if (DEMO_WITHOUT_SERVER) {
		const { demoTemplateSettings } = await import("./demo/server");
		value = templateFontTokens((await demoTemplateSettings())?.meta ?? {});
		fontTokens = { value, at: Date.now() };
		return value;
	}
	try {
		const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
		const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_template_settings`, { cache: "no-store" });
		if (res.ok) value = templateFontTokens((await res.json())?.meta ?? {});
	} catch {
		value = "";
	}
	fontTokens = { value, at: Date.now() };
	return value;
}

/* Compiled sheets by class signature. Pages change only when someone saves
   them, so the same few signatures are asked for on every request; bounded
   so a long-running server does not keep every edit it ever saw. */
const CACHE = new Map();
const CACHE_MAX = 100;

async function compileClasses(signature) {
	if (!signature) return "";
	const theme = await activeFontTokens();
	const key = `${theme}\n${signature}`;
	if (CACHE.has(key)) return CACHE.get(key);

	/* Cache the promise, not the result, so concurrent requests for a page
	   that was just installed share one compile. */
	const pending = generateTailwindCSS(signature, { theme }).catch((error) => {
		console.error("pageStyles: compile failed", error);
		CACHE.delete(key);
		return "";
	});

	CACHE.set(key, pending);
	while (CACHE.size > CACHE_MAX) CACHE.delete(CACHE.keys().next().value);

	return pending;
}

function parseBlocks(content) {
	if (Array.isArray(content)) return content;
	if (typeof content !== "string" || !content.trim()) return null;
	try {
		return JSON.parse(content);
	} catch {
		return null;
	}
}

/* The sheet for the classes in these records' blocks that the site build
   lacks. */
async function sheetFor(records) {
	const classes = new Set();
	for (const record of records) {
		if (!record || typeof record !== "object") continue;
		collectBlockClasses(parseBlocks(record.content) ?? []).forEach((c) => classes.add(c));
	}
	return compileClasses(missingFromBuild([...classes].sort()).join(" "));
}

/* One builder page record (app/[...slug]) -> its stylesheet. */
export async function styleFor(record) {
	return sheetFor([record]);
}

/* A page template record and its header / footer parts: the one sheet goes
   on `data.style`, and the parts' stored sheets are dropped (see above). */
export async function withPageStyles(data) {
	if (!data || typeof data !== "object") return data;

	const records = [data, data.header, data.footer].filter((r) => r && typeof r === "object");
	const sheet = await sheetFor(records);

	records.forEach((record) => {
		record.style = "";
	});
	data.style = sheet;

	return data;
}

/* getPageTemplate for server components: the same record, with `style`
   holding what its blocks need. Client components keep using
   lib/getPageTemplate. */
export async function getStyledPageTemplate(prams) {
	return withPageStyles(await getPageTemplate(prams));
}
