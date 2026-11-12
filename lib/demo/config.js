/*
	Demo mode: NEXT_PUBLIC_DEMO_MODE=true in .env.

	The dashboard then runs without the WordPress server. Every request it
	would send to `wp-json/...` (and the app's own /api/settings) is answered
	in the browser from the dummy store in lib/demo/data.js, through the fetch
	wrapper in lib/demo/install.js. Any username and password signs in, as an
	administrator.

	With a server configured, only the dashboard, the builder and the sign-in
	pages are answered this way (DEMO_PATHS). The storefront keeps talking to
	NEXT_PUBLIC_SERVER_URL, so a shop with demo mode switched on by mistake
	still shows its real products to customers.

	With no server at all (NEXT_PUBLIC_SERVER_URL unset - how the Vercel
	onboarding deploys a demo store) there is nothing real to protect, so
	every page gets demo data, the storefront's browser requests included.

	NEXT_PUBLIC_DEMO_TEMPLATE picks the template the demo store runs (a folder
	in components/PageBuilder/templates; WonderJoy when unset). The storefront
	and the builder show that template's own products, categories and posts
	(its demo.js); the dashboard keeps lib/demo/data.js. See lib/demo/templates.js.
*/

export const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

/* Demo mode with no WordPress server behind it. */
export const DEMO_WITHOUT_SERVER = DEMO_MODE && !String(process.env.NEXT_PUBLIC_SERVER_URL ?? '').trim();

export const DEMO_PATHS = ['/dashboard', '/login', '/register', '/builder'];

/* True when a request made from this page should get demo data. */
export function isDemoPage(pathname) {
	if (DEMO_WITHOUT_SERVER) return true;
	var path = String(pathname ?? '');
	return DEMO_PATHS.some(p => path === p || path.startsWith(p + '/'));
}

export const DEMO_TOKEN = 'demo-mode-token';
