/*
	The demo store's template and its catalog.

	NEXT_PUBLIC_DEMO_TEMPLATE names the template a demo store runs (a folder
	in components/PageBuilder/templates, e.g. "Muthofon"); unset or unknown,
	it is WonderJoy, as before. Its pages are the storefront's layouts and
	its demo.js the storefront's products, categories, tags, brands and blog
	posts (lib/demo/catalog.js), so a phone template shows phones in its
	"Smartphones" slider rather than the dashboard's baby products.

	Which pages see the template catalog: the storefront and the builder -
	the pages a template is designed for. The dashboard keeps the store in
	lib/demo/data.js, whose products the orders, stock and reports refer to.

	Each template is listed by hand rather than imported by a computed path,
	so the bundler makes one lazy chunk per template and nothing else.
*/

import { buildCatalog } from './catalog';

const TEMPLATES = {
	Aanchal: { pages: () => import('@/components/PageBuilder/templates/Aanchal'), demo: () => import('@/components/PageBuilder/templates/Aanchal/demo') },
	Adda: { pages: () => import('@/components/PageBuilder/templates/Adda'), demo: () => import('@/components/PageBuilder/templates/Adda/demo') },
	Ashbab: { pages: () => import('@/components/PageBuilder/templates/Ashbab'), demo: () => import('@/components/PageBuilder/templates/Ashbab/demo') },
	Aurelle: { pages: () => import('@/components/PageBuilder/templates/Aurelle'), demo: () => import('@/components/PageBuilder/templates/Aurelle/demo') },
	BikeParts: { pages: () => import('@/components/PageBuilder/templates/BikeParts'), demo: () => import('@/components/PageBuilder/templates/BikeParts/demo') },
	Dolna: { pages: () => import('@/components/PageBuilder/templates/Dolna'), demo: () => import('@/components/PageBuilder/templates/Dolna/demo') },
	Dutipata: { pages: () => import('@/components/PageBuilder/templates/Dutipata'), demo: () => import('@/components/PageBuilder/templates/Dutipata/demo') },
	Fashora: { pages: () => import('@/components/PageBuilder/templates/Fashora'), demo: () => import('@/components/PageBuilder/templates/Fashora/demo') },
	Ghori: { pages: () => import('@/components/PageBuilder/templates/Ghori'), demo: () => import('@/components/PageBuilder/templates/Ghori/demo') },
	Glowbie: { pages: () => import('@/components/PageBuilder/templates/Glowbie'), demo: () => import('@/components/PageBuilder/templates/Glowbie/demo') },
	Haatbox: { pages: () => import('@/components/PageBuilder/templates/Haatbox'), demo: () => import('@/components/PageBuilder/templates/Haatbox/demo') },
	Jhola: { pages: () => import('@/components/PageBuilder/templates/Jhola'), demo: () => import('@/components/PageBuilder/templates/Jhola/demo') },
	Kaath: { pages: () => import('@/components/PageBuilder/templates/Kaath'), demo: () => import('@/components/PageBuilder/templates/Kaath/demo') },
	Khelaghor: { pages: () => import('@/components/PageBuilder/templates/Khelaghor'), demo: () => import('@/components/PageBuilder/templates/Khelaghor/demo') },
	Kodom: { pages: () => import('@/components/PageBuilder/templates/Kodom'), demo: () => import('@/components/PageBuilder/templates/Kodom/demo') },
	Muthofon: { pages: () => import('@/components/PageBuilder/templates/Muthofon'), demo: () => import('@/components/PageBuilder/templates/Muthofon/demo') },
	Nexora: { pages: () => import('@/components/PageBuilder/templates/Nexora'), demo: () => import('@/components/PageBuilder/templates/Nexora/demo') },
	Nolen: { pages: () => import('@/components/PageBuilder/templates/Nolen'), demo: () => import('@/components/PageBuilder/templates/Nolen/demo') },
	Noorani: { pages: () => import('@/components/PageBuilder/templates/Noorani'), demo: () => import('@/components/PageBuilder/templates/Noorani/demo') },
	Oushodh: { pages: () => import('@/components/PageBuilder/templates/Oushodh'), demo: () => import('@/components/PageBuilder/templates/Oushodh/demo') },
	Pathok: { pages: () => import('@/components/PageBuilder/templates/Pathok'), demo: () => import('@/components/PageBuilder/templates/Pathok/demo') },
	Pauruti: { pages: () => import('@/components/PageBuilder/templates/Pauruti'), demo: () => import('@/components/PageBuilder/templates/Pauruti/demo') },
	Posha: { pages: () => import('@/components/PageBuilder/templates/Posha'), demo: () => import('@/components/PageBuilder/templates/Posha/demo') },
	Sugondhi: { pages: () => import('@/components/PageBuilder/templates/Sugondhi'), demo: () => import('@/components/PageBuilder/templates/Sugondhi/demo') },
	Tuntuni: { pages: () => import('@/components/PageBuilder/templates/Tuntuni'), demo: () => import('@/components/PageBuilder/templates/Tuntuni/demo') },
	Upohar: { pages: () => import('@/components/PageBuilder/templates/Upohar'), demo: () => import('@/components/PageBuilder/templates/Upohar/demo') },
	Voltix: { pages: () => import('@/components/PageBuilder/templates/Voltix'), demo: () => import('@/components/PageBuilder/templates/Voltix/demo') },
	WonderJoy: { pages: () => import('@/components/PageBuilder/templates/WonderJoy'), demo: () => import('@/components/PageBuilder/templates/WonderJoy/demo') },
};

export const DEMO_TEMPLATE_NAMES = Object.keys(TEMPLATES);

export const DEMO_TEMPLATE = TEMPLATES[process.env.NEXT_PUBLIC_DEMO_TEMPLATE] ? process.env.NEXT_PUBLIC_DEMO_TEMPLATE : 'WonderJoy';

/* The template's source object (name, description, meta, pages). */
export function loadDemoTemplateSource(name = DEMO_TEMPLATE) {
	return (TEMPLATES[name] ?? TEMPLATES.WonderJoy).pages().then(m => m.default?.[0] ?? null);
}

/* The template's catalog, built once per template and kept (edits are not made to it). */
const catalogs = new Map();
export function loadDemoCatalog(name = DEMO_TEMPLATE) {
	var key = TEMPLATES[name] ? name : 'WonderJoy';
	if (!catalogs.has(key)) {
		catalogs.set(key, TEMPLATES[key].demo().then(m => buildCatalog(m.default ?? {}, key)));
	}
	return catalogs.get(key);
}
