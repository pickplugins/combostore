/*
	A stand-in for @tailwindcss/node in the Cloudflare build (next.config.mjs
	aliases the package to this file when COMBOSTORE_TARGET=cloudflare).

	@tailwindcss/node cannot run in a Worker: it reads Tailwind's stylesheets
	from node_modules and optimizes through lightningcss, a native `.node`
	binary, and Workers have neither a file system nor native addons. This
	exports the two functions lib/generateTailwindCSS.js uses, built on the
	`tailwindcss` package itself - the same compiler, in plain JavaScript - with
	the stylesheets bundled from lib/tailwindSources.json
	(scripts/build-tailwind-sources.mjs).

	What differs from the Vercel build: there is no lightningcss pass, so the
	CSS is not minified and keeps modern syntax as Tailwind writes it - range
	media queries (`width >= 48rem`), nested @media, `@property`. Every browser
	Tailwind 4 itself supports reads that; the site's main stylesheet
	(globals.css) is built at build time and is not affected.

	Vercel never loads this file.
*/

import { compile as compileTailwind } from "tailwindcss";
import sources from "./tailwindSources.json";

/* "tailwindcss", "tailwindcss/theme.css", "./theme.css" (from index.css) ... */
function stylesheetName(id) {
	const name = String(id).replace(/^tailwindcss\/?/, "").replace(/^\.\//, "");
	return name === "" ? "index.css" : name;
}

async function loadStylesheet(id) {
	const name = stylesheetName(id);
	const content = sources.files[name];
	if (typeof content !== "string") {
		throw new Error(`Tailwind stylesheet "${id}" is not bundled (lib/tailwindPortable.js only has ${Object.keys(sources.files).join(", ")}).`);
	}
	return { path: `tailwindcss/${name}`, base: "/", content };
}

async function loadModule(id) {
	throw new Error(`Tailwind plugins and configs (@plugin / @config "${id}") cannot load in a Worker.`);
}

/* Same call shape as @tailwindcss/node's compile(css, { base, onDependency }). */
export async function compile(css, _options = {}) {
	return compileTailwind(css, { base: "/", loadStylesheet, loadModule });
}

/* @tailwindcss/node's optimize() returns { code, map }; here the CSS passes through. */
export function optimize(css, _options = {}) {
	return { code: css, map: undefined };
}
