/*
	Demo mode on the server, for a deployment with no WordPress at all
	(DEMO_WITHOUT_SERVER: NEXT_PUBLIC_DEMO_MODE=true and no
	NEXT_PUBLIC_SERVER_URL - how the Vercel onboarding deploys a demo store).

	The storefront renders on the server from lib/getPageTemplate,
	lib/getProduct and lib/getProducts. With no server those would fetch
	"undefinedwp-json/..." and throw, taking every shop page down, so they ask
	here instead: page layouts come from the demo template (lib/demo/templates.js:
	NEXT_PUBLIC_DEMO_TEMPLATE, else WonderJoy), products from its catalog.
	The browser side is lib/demo/install.js.
*/

import { demoResponse } from './api';
import { loadDemoTemplateSource } from './templates';

let templatePromise = null;
function demoTemplate() {
	/* Imported on first use: half a megabyte of blocks only a demo store needs. */
	templatePromise ??= loadDemoTemplateSource();
	return templatePromise;
}

const asJson = (blocks) => JSON.stringify(Array.isArray(blocks) ? blocks : []);

/*
	What get_page_template answers: the page's blocks as a JSON string, with
	the site header and footer parts beside it. A lookup by slug (a custom
	page) finds nothing, so the catch-all route shows its 404 as it would for
	an unknown page; a lookup by id (a product's own template) gets the
	product page.
*/
export async function demoPageTemplate(prams) {
	var template = await demoTemplate();
	if (!template) return null;
	var pages = template.pages ?? [];
	var type = prams?.type ?? (prams?.id ? 'product' : null);
	if (!type) return null;
	var page = pages.find(p => p.type === type);
	if (!page) return null;
	var header = pages.find(p => p.type === 'header');
	var footer = pages.find(p => p.type === 'footer');
	return {
		id: `demo-${type}`,
		type,
		title: page.title,
		content: asJson(page.content),
		header: header ? { content: asJson(header.content) } : null,
		footer: footer ? { content: asJson(footer.content) } : null,
		meta: {},
	};
}

export async function demoProduct(slug) {
	var res = await demoResponse('get_product', { slug }, { storefront: true });
	return res?.product ? res : null;
}

/*
	What get_template_settings answers: the demo template's meta (fonts,
	typography, colours), for the server-side readers of it - the <head>
	theme (components/TemplateThemeStyle), the page stylesheet's font tokens
	(lib/pageStyles) and the save-time compiler (app/api/tailwind-css).
	The browser's readers go through the demo fetch (lib/demo/install.js).
*/
export async function demoTemplateSettings() {
	return demoResponse('get_template_settings', {});
}

export async function demoProducts(args) {
	return demoResponse('get_products', args ?? {}, { storefront: true });
}
