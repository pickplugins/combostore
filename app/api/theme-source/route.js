import dns from "node:dns/promises";
import net from "node:net";

/**
 * Read an external page and return the design signal in it.
 *
 * The AI Theme panel can build a theme from a reference site. The browser
 * cannot fetch that site itself - cross-origin reads are blocked - so the
 * fetch happens here and the page comes back as a compact summary: the colours
 * it actually uses, its fonts, its heading outline, its nav, and a slice of its
 * copy. That summary is what the model designs from.
 *
 * POST { url } -> { success: true, source: { ... } }
 *
 * SECURITY. This endpoint fetches a URL chosen by whoever calls it, which is
 * the definition of SSRF if it is not fenced:
 *
 *   - http and https only, so no file:, gopher: or data:.
 *   - The hostname is resolved and every address it resolves to is checked
 *     against the private, loopback, link-local, CGNAT and multicast ranges
 *     before the request is made. 169.254.169.254 - the cloud metadata
 *     endpoint, the usual SSRF prize - is inside the link-local block.
 *   - Redirects are followed by hand, not by fetch, because fetch's own
 *     redirect following would skip the check above on every hop after the
 *     first. Each hop is re-validated.
 *   - Response size, redirect count and total time are all capped.
 *   - Only text/html is read as a page, and only text/css as a stylesheet.
 *
 * Two things this does NOT do, both worth knowing:
 *
 *   - It does not pin the resolved address. A hostname that passes the check
 *     and then resolves to a private address on the actual connection - DNS
 *     rebinding - would get through. Closing that needs the connection made to
 *     a pinned IP with the Host header set by hand, which Node's fetch does not
 *     expose.
 *   - It does not authenticate. Like the other route handlers here it is open
 *     to anyone who can reach it, so it is usable as a fetcher for arbitrary
 *     PUBLIC urls. The range checks are what stop it reaching anything
 *     internal. Put it behind the dashboard session if that matters.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_HTML_BYTES = 2_000_000;
const MAX_CSS_BYTES = 400_000;
const MAX_REDIRECTS = 4;
const MAX_STYLESHEETS = 3;
const TIMEOUT_MS = 12_000;

/* How much of each thing is worth sending to the model. The summary is the
   cheap half of a theme run; it does not need to be the whole page. */
const MAX_TEXT_CHARS = 6_000;
const MAX_COLORS = 16;
const MAX_HEADINGS = 40;
const MAX_NAV = 24;
const MAX_IMAGES = 8;

/* ------------------------------------------------------------- ssrf fence */

function isBlockedIp(ip) {
	if (net.isIPv4(ip)) {
		const [a, b] = ip.split(".").map(Number);

		if (a === 0) return true;                      // this network
		if (a === 10) return true;                     // private
		if (a === 127) return true;                    // loopback
		if (a === 169 && b === 254) return true;       // link-local, incl. cloud metadata
		if (a === 172 && b >= 16 && b <= 31) return true; // private
		if (a === 192 && b === 168) return true;       // private
		if (a === 192 && b === 0) return true;         // IETF protocol assignments
		if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
		if (a >= 224) return true;                     // multicast and reserved

		return false;
	}

	if (net.isIPv6(ip)) {
		const value = ip.toLowerCase().split("%")[0];

		if (value === "::1" || value === "::") return true;
		if (value.startsWith("::ffff:")) return isBlockedIp(value.slice(7)); // v4-mapped
		if (/^f[cd]/.test(value)) return true;         // unique local
		if (value.startsWith("fe80")) return true;     // link-local
		if (value.startsWith("ff")) return true;       // multicast

		return false;
	}

	return true; // not an address we understand - refuse
}

/** Parse, check the scheme, and refuse anything that resolves somewhere private. */
async function assertFetchable(rawUrl) {
	let url;

	try {
		url = new URL(rawUrl);
	} catch {
		throw new Error("That is not a valid URL.");
	}

	if (url.protocol !== "http:" && url.protocol !== "https:") {
		throw new Error("Only http and https URLs can be read.");
	}

	/* A bare address needs no DNS, and skipping the lookup for it would skip
	   the check with it. */
	const host = url.hostname.replace(/^\[|\]$/g, "");

	if (net.isIP(host)) {
		if (isBlockedIp(host)) throw new Error("That address is not reachable from here.");

		return url;
	}

	let addresses;

	try {
		addresses = await dns.lookup(host, { all: true });
	} catch {
		throw new Error(`Could not resolve ${host}.`);
	}

	if (!addresses.length) throw new Error(`Could not resolve ${host}.`);

	/* Every address, not just the first: a host that resolves to one public and
	   one private address would otherwise be a way through. */
	if (addresses.some(entry => isBlockedIp(entry.address))) {
		throw new Error("That host resolves to a private address and will not be read.");
	}

	return url;
}

/** Read a response body up to `limit`, then stop. */
async function readCapped(response, limit) {
	const reader = response.body?.getReader();

	if (!reader) return "";

	const chunks = [];
	let size = 0;

	while (true) {
		const { done, value } = await reader.read();

		if (done) break;

		size += value.length;
		chunks.push(value);

		if (size >= limit) {
			await reader.cancel();
			break;
		}
	}

	const buffer = Buffer.concat(chunks.map(c => Buffer.from(c)));

	return buffer.subarray(0, limit).toString("utf8");
}

/**
 * Fetch with the fence applied to every hop.
 *
 * `redirect: "manual"` is the point: letting fetch follow redirects itself
 * would validate only the URL that was typed, and a public URL that 302s to
 * 169.254.169.254 would sail through.
 */
async function guardedFetch(rawUrl, { accept, limit, signal }) {
	let current = rawUrl;

	for (let hop = 0; hop <= MAX_REDIRECTS; hop += 1) {
		const url = await assertFetchable(current);

		const response = await fetch(url, {
			redirect: "manual",
			signal,
			headers: {
				accept,
				/* Identify honestly. Some sites serve a different page to an
				   unknown agent, but pretending to be a browser to get around
				   that is not this endpoint's business. */
				"user-agent": "ComboStore-ThemeImport/1.0 (+page builder design import)",
				"accept-language": "en",
			},
		});

		if ([301, 302, 303, 307, 308].includes(response.status)) {
			const location = response.headers.get("location");

			if (!location) throw new Error(`Redirect with no location (${response.status}).`);

			current = new URL(location, url).toString();
			continue;
		}

		if (!response.ok) throw new Error(`The site answered ${response.status}.`);

		return {
			finalUrl: url.toString(),
			contentType: (response.headers.get("content-type") ?? "").toLowerCase(),
			body: await readCapped(response, limit),
		};
	}

	throw new Error("Too many redirects.");
}

/* -------------------------------------------------------------- extraction */

/*
   Regex, not a parser: there is no HTML parser in this project's dependencies
   and adding one to read colours and headings is not worth a new package. The
   trade is real - malformed or heavily scripted markup extracts worse - and
   the model is told the summary may be partial rather than being handed it as
   fact.
*/

const decodeEntities = (value) => String(value ?? "")
	.replace(/&nbsp;/gi, " ")
	.replace(/&amp;/gi, "&")
	.replace(/&lt;/gi, "<")
	.replace(/&gt;/gi, ">")
	.replace(/&quot;/gi, '"')
	.replace(/&#0?39;|&apos;/gi, "'")
	.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));

const textOf = (html) => decodeEntities(String(html ?? "").replace(/<[^>]*>/g, " "))
	.replace(/\s+/g, " ")
	.trim();

/** Drop everything that is not page copy before reading text out. */
const stripNonContent = (html) => String(html ?? "")
	.replace(/<script[\s\S]*?<\/script>/gi, " ")
	.replace(/<style[\s\S]*?<\/style>/gi, " ")
	.replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
	.replace(/<svg[\s\S]*?<\/svg>/gi, " ")
	.replace(/<!--[\s\S]*?-->/g, " ");

const clamp = (channel) => Math.max(0, Math.min(255, Math.round(channel)));
const toHex = (r, g, b) => "#" + [r, g, b].map(c => clamp(c).toString(16).padStart(2, "0")).join("");

/** Normalise a colour literal to #rrggbb, or null if it is not one. */
function normalizeColor(raw) {
	const value = String(raw ?? "").trim().toLowerCase();

	const hex = value.match(/^#([0-9a-f]{3,8})$/);

	if (hex) {
		const digits = hex[1];

		if (digits.length === 3) return "#" + digits.split("").map(d => d + d).join("");
		if (digits.length === 4) return "#" + digits.slice(0, 3).split("").map(d => d + d).join("");
		if (digits.length === 6) return "#" + digits;
		if (digits.length === 8) return "#" + digits.slice(0, 6);

		return null;
	}

	const rgb = value.match(/^rgba?\(([^)]+)\)$/);

	if (rgb) {
		const parts = rgb[1].split(/[,/\s]+/).filter(Boolean);

		if (parts.length < 3) return null;

		/* A fully transparent colour is not part of the palette. */
		if (parts.length >= 4 && Number.parseFloat(parts[3]) === 0) return null;

		const channels = parts.slice(0, 3).map(part => part.endsWith("%")
			? (Number.parseFloat(part) / 100) * 255
			: Number.parseFloat(part));

		if (channels.some(Number.isNaN)) return null;

		return toHex(channels[0], channels[1], channels[2]);
	}

	return null;
}

/**
 * The colours the page leans on, most used first.
 *
 * Pure white and pure black are dropped: every page has them, so they say
 * nothing about this one, and the brief has its own neutrals.
 */
function extractColors(css) {
	const counts = new Map();
	const pattern = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]{5,40}\)/g;

	for (const match of String(css).matchAll(pattern)) {
		const color = normalizeColor(match[0]);

		if (!color) continue;
		if (color === "#ffffff" || color === "#000000") continue;

		counts.set(color, (counts.get(color) ?? 0) + 1);
	}

	return [...counts.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, MAX_COLORS)
		.map(([value, count]) => ({ value, count }));
}

/* Stacks are mostly fallbacks. These say nothing about a site's design, and
   reporting them as "the fonts it uses" actively misleads the brief. */
const BORING_FONT = /^(inherit|initial|unset|revert|none|auto|-apple|apple color emoji|system-ui|ui-[a-z]+|sans-serif|serif|monospace|cursive|fantasy|blinkmacsystemfont|segoe ui(?: (?:emoji|symbol|adjusted|variable|historic))?|roboto|helvetica(?: neue)?|arial|noto (?:sans|color emoji)|liberation (?:sans|mono)|cantarell|oxygen|ubuntu|fira (?:sans|mono)|droid sans|tahoma|verdana|courier(?: new)?|times(?: new roman)?|georgia|emoji|sfmono-regular|menlo|monaco|consolas|dejavu sans mono)$/i;

function extractFonts(css, html) {
	const names = new Set();

	for (const match of String(css).matchAll(/font-family\s*:\s*([^;}{]+)/gi)) {
		match[1].split(",").forEach((part) => {
			const raw = part.replace(/["']/g, "").trim();

			/* A custom-property reference names no font. This has to be tested
			   before the parens are stripped, or `var(--font-inter` becomes
			   `var--font-inter` and sails past the check. */
			if (/^var\(/i.test(raw) || raw.startsWith("--")) return;

			/* `var(--x, a, b)` leaves its closing paren on the last entry, which
			   was shipping names like "Noto Color Emoji)". */
			const name = raw.replace(/[)(]/g, "").trim();

			if (!name || name.length > 48) return;
			if (BORING_FONT.test(name)) return;

			/* A real family name, and nothing else. Reading CSS with a regex
			   also scrapes up template placeholders ("<value>"), build-tool
			   internals (Next's font loader emits "__inter_abc" and a matching
			   "inter Fallback") and stray punctuation. None of that is a font. */
			if (!/^[A-Za-z][A-Za-z0-9 .'_-]*$/.test(name)) return;
			if (/^-apple/i.test(name)) return;
			if (/\bfallback$/i.test(name)) return;
			if (/^__/.test(name)) return;

			names.add(name);
		});
	}

	/* Google Fonts links name the family even when the CSS is remote. */
	for (const match of String(html).matchAll(/fonts\.googleapis\.com\/css2?\?([^"'>]+)/gi)) {
		for (const family of match[1].matchAll(/family=([^&:]+)/g)) {
			names.add(decodeURIComponent(family[1]).replace(/\+/g, " ").trim());
		}
	}

	return [...names].slice(0, 10);
}

function extractHeadings(html) {
	const headings = [];

	for (const match of html.matchAll(/<h([1-3])\b[^>]*>([\s\S]{0,400}?)<\/h\1>/gi)) {
		const text = textOf(match[2]);

		if (text && text.length < 200) headings.push({ level: Number(match[1]), text });
		if (headings.length >= MAX_HEADINGS) break;
	}

	return headings;
}

function extractNav(html) {
	const labels = [];
	const seen = new Set();

	/* <nav>, then <header>, then the top of the document. Plenty of real sites
	   build their header out of divs with no landmark element at all, and
	   returning nothing for those loses the one signal that says what the shop
	   actually sells. The head of the document is where a header lives even
	   when it is not marked up as one. */
	const navs = [...html.matchAll(/<nav\b[\s\S]*?<\/nav>/gi)].map(m => m[0]).join(" ")
		|| [...html.matchAll(/<header\b[\s\S]*?<\/header>/gi)].map(m => m[0]).join(" ")
		|| html.slice(0, Math.max(4000, Math.floor(html.length * 0.15)));

	for (const match of String(navs).matchAll(/<a\b[^>]*>([\s\S]{0,120}?)<\/a>/gi)) {
		const text = textOf(match[1]);
		const key = text.toLowerCase();

		if (!text || text.length > 40 || seen.has(key)) continue;

		seen.add(key);
		labels.push(text);

		if (labels.length >= MAX_NAV) break;
	}

	return labels;
}

function extractImages(html, baseUrl) {
	const urls = [];
	const seen = new Set();

	const push = (raw) => {
		if (!raw || urls.length >= MAX_IMAGES) return;

		try {
			const absolute = new URL(raw, baseUrl).toString();

			if (/\.(svg|ico)(\?|$)/i.test(absolute)) return;
			if (seen.has(absolute)) return;

			seen.add(absolute);
			urls.push(absolute);
		} catch { /* a src we cannot resolve is not worth reporting */ }
	};

	const og = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);

	if (og) push(og[1]);

	for (const match of html.matchAll(/<img\b[^>]*?\ssrc=["']([^"']+)["']/gi)) push(match[1]);

	return urls;
}

const metaContent = (html, name) => {
	const match = html.match(
		new RegExp(`<meta[^>]+(?:name|property)=["']${name}["'][^>]+content=["']([^"']*)["']`, "i")
	);

	return match ? decodeEntities(match[1]).trim() : "";
};

/* ------------------------------------------------------------------ handler */

export async function POST(request) {
	let body;

	try {
		body = await request.json();
	} catch {
		return Response.json({ success: false, message: "Request body is not valid JSON." }, { status: 400 });
	}

	const raw = typeof body?.url === "string" ? body.url.trim() : "";

	if (!raw) {
		return Response.json({ success: false, message: "No URL was given." }, { status: 400 });
	}

	/*
		A bare "example.com" is what people actually type, so it gets https://.
		Only a string with no scheme at all, though: blindly prefixing turned
		"file:///etc/passwd" into "https://file:///etc/passwd", which happened to
		fail - no host called "file" resolves - but failed for the wrong reason
		and reported a confusing error. An explicit scheme is left alone so the
		http/https check in assertFetchable is what rejects it.
	*/
	const hasScheme = /^[a-z][a-z0-9+.-]*:/i.test(raw);
	const target = hasScheme ? raw : `https://${raw}`;

	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

	try {
		const page = await guardedFetch(target, {
			accept: "text/html,application/xhtml+xml",
			limit: MAX_HTML_BYTES,
			signal: controller.signal,
		});

		if (!/text\/html|application\/xhtml/.test(page.contentType)) {
			return Response.json(
				{ success: false, message: `That URL returned ${page.contentType || "an unknown type"}, not a web page.` },
				{ status: 415 }
			);
		}

		const html = page.body;

		/* Most of a site's colour lives in its stylesheets, not inline, so a few
		   are worth following. Same fence, same caps, and a failure to read one
		   is not a failure to read the page. */
		const sheetUrls = [...html.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi)]
			.map(tag => tag[0].match(/href=["']([^"']+)["']/i)?.[1])
			.filter(Boolean)
			.map((href) => { try { return new URL(href, page.finalUrl).toString(); } catch { return null; } })
			.filter(Boolean)
			.slice(0, MAX_STYLESHEETS);

		const sheets = [];

		for (const sheetUrl of sheetUrls) {
			try {
				const sheet = await guardedFetch(sheetUrl, {
					accept: "text/css,*/*;q=0.1",
					limit: MAX_CSS_BYTES,
					signal: controller.signal,
				});

				if (/text\/css/.test(sheet.contentType)) sheets.push(sheet.body);
			} catch { /* one unreadable stylesheet does not sink the import */ }
		}

		const inlineCss = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join("\n");
		const inlineStyleAttrs = [...html.matchAll(/style=["']([^"']+)["']/gi)].map(m => m[1]).join(";");
		const css = [inlineCss, inlineStyleAttrs, ...sheets].join("\n");

		const content = stripNonContent(html);

		const source = {
			url: target,
			finalUrl: page.finalUrl,
			title: textOf(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").slice(0, 200),
			description: metaContent(html, "description").slice(0, 400)
				|| metaContent(html, "og:description").slice(0, 400),
			siteName: metaContent(html, "og:site_name").slice(0, 120),
			lang: (html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1] ?? "").slice(0, 16),
			colors: extractColors(css),
			fonts: extractFonts(css, html),
			headings: extractHeadings(content),
			nav: extractNav(content),
			images: extractImages(html, page.finalUrl),
			text: textOf(content).slice(0, MAX_TEXT_CHARS),
			stylesheets: sheets.length,
			htmlBytes: Buffer.byteLength(html, "utf8"),
		};

		return Response.json({ success: true, source });
	} catch (error) {
		const message = error?.name === "AbortError"
			? `The site did not answer within ${TIMEOUT_MS / 1000} seconds.`
			: (error?.message ?? "Could not read that URL.");

		return Response.json({ success: false, message }, { status: 400 });
	} finally {
		clearTimeout(timer);
	}
}
