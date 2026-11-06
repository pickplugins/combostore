// lib/templateSeo.js
import { cache } from "react";
import { getPageTemplate } from "./getPageTemplate";
import { getSettings } from "./getSettings";

/*
	SEO for the storefront's template routes (shop, blog, categories, product,
	...): the template part's own settings, from the builder's Template Part
	Settings > SEO (saved in the part's meta as `seo`), filled in with the
	page's own data.

	Listing templates (shop, blog, brands, ...) use the settings as they are,
	or the route's default title. Single-item templates (a product, a post, a
	category) keep each item's own title, description and image, unless the
	template sets a pattern: {title} is the item's name, {description} its
	description, {site} the store name (settings site_title).
*/

/* One request per render for each template type and for the settings (generateMetadata and the page can both ask). */
export const getTemplateByType = cache(async (type) => getPageTemplate({ type }));
const getSiteSettings = cache(async () => {
	try { return await getSettings(); } catch (e) { return null; }
});

/* A template part's seo settings. get_page_template returns its meta as the raw JSON string (often empty). */
export function templateSeoSettings(template) {
	var meta = template?.meta;
	if (typeof meta === "string") {
		try { meta = meta ? JSON.parse(meta) : {}; } catch (e) { meta = {}; }
	}
	var seo = meta && typeof meta === "object" && !Array.isArray(meta) ? meta.seo : null;
	return seo && typeof seo === "object" ? seo : {};
}

function fill(text, vars) {
	return String(text ?? "")
		.replace(/\{title\}/g, vars.title ?? "")
		.replace(/\{description\}/g, vars.description ?? "")
		.replace(/\{site\}/g, vars.site ?? "")
		.replace(/\s{2,}/g, " ")
		.trim();
}

/* Only web addresses and site paths; template-part settings are stored as the builder sent them. */
function safeUrl(value) {
	var url = String(value ?? "").trim();
	return /^(https?:\/\/|\/)/i.test(url) ? url : "";
}

/* "large-baby-diapers" -> "Large Baby Diapers" (it used to replace only the first dash). */
export function slugToName(slug) {
	return decodeURIComponent(String(slug ?? ""))
		.replace(/[-_]+/g, " ")
		.toLowerCase()
		.replace(/\b\w/g, (c) => c.toUpperCase())
		.trim();
}

/*
	Next.js metadata for a template route.
	type: the template part type ('shop', 'product', ...).
	item: { title, description, image } - the item a single template shows, or
	      the listing's default title.
	path: the page's path ('shop', 'product/<slug>'), for og:url, joined to
	      NEXT_PUBLIC_STORE_URL; left out when that is not set (the routes used
	      to print "undefinedshop").
	single: true for single-item templates - the canonical setting is ignored
	      (one canonical for every product would be wrong).
*/
export async function templateMetadata(type, { item = {}, path = null, single = false } = {}) {
	var base = String(process.env.NEXT_PUBLIC_STORE_URL ?? "").trim().replace(/\/+$/, "");
	var url = base && path !== null ? `${base}/${String(path).replace(/^\/+/, "")}` : "";
	var [template, settings] = await Promise.all([getTemplateByType(type), getSiteSettings()]);
	var seo = templateSeoSettings(template);
	var site = settings?.site_title ?? "";

	var vars = {
		title: (item.title ?? "").trim(),
		description: (item.description ?? "").trim(),
		site: site,
	};

	var title = fill(seo.title, vars) || vars.title || site;
	var description = (fill(seo.description, vars) || vars.description).slice(0, 300);
	var image = safeUrl(seo.image) || safeUrl(item.image);
	var canonical = single ? "" : safeUrl(seo.canonical);

	return {
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			...(url ? { url: url } : {}),
			...(image ? { images: [{ url: image, alt: title }] } : {}),
		},
		twitter: {
			card: image ? "summary_large_image" : "summary",
			title: title,
			description: description,
			...(image ? { images: [image] } : {}),
		},
		...(canonical ? { alternates: { canonical: canonical } } : {}),
		...(seo.noindex ? { robots: { index: false, follow: true } } : {}),
	};
}
