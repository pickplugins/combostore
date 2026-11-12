/*
	Puts the demo server in front of window.fetch.

	When NEXT_PUBLIC_DEMO_MODE is true, a request from a dashboard, builder or
	sign-in page (lib/demo/config.js: DEMO_PATHS) to any `.../wp-json/...` URL,
	or to the app's own /api/settings, never leaves the browser: it is answered
	from lib/demo/api.js after a short pause, as a real JSON Response, so the
	components' `response.ok` / `response.json()` handling runs unchanged.
	Everything else - other origins, Next's own requests, the storefront -
	goes to the network as before.

	Installed once, from components/auth-context.js, which every route
	(storefront included) loads before any of its effects can fetch.
*/

import { DEMO_MODE, isDemoPage } from './config';

const LATENCY_MS = 180;

function endpointOf(url) {
	var i = url.indexOf('wp-json/');
	if (i === -1) return null;
	return url.slice(i + 'wp-json/'.length).split('?')[0].replace(/^combo-store\/v2\//, '').replace(/\/+$/, '');
}

async function readBody(input, init) {
	var raw = init?.body ?? (typeof Request !== 'undefined' && input instanceof Request ? await input.clone().text() : null);
	if (raw == null || typeof raw !== 'string') return {};
	try { return JSON.parse(raw); } catch { return {}; }
}

export function installDemoFetch() {
	if (!DEMO_MODE || typeof window === 'undefined' || window.__comboDemoFetch) return;
	var realFetch = window.fetch.bind(window);
	window.__comboDemoFetch = true;

	window.fetch = async function demoFetch(input, init) {
		var url = typeof input === 'string' ? input : input?.url ?? String(input);
		var onDemoPage = isDemoPage(window.location.pathname);
		var isSettings = /^\/api\/settings(\?|$)/.test(url) || url.endsWith('/api/settings');
		var endpoint = endpointOf(url);

		if (!onDemoPage || (!endpoint && !isSettings)) return realFetch(input, init);

		var { demoResponse } = await import('./api');
		var body = await readBody(input, init);
		/* A handler may answer with a promise (the template endpoints load it on first use). */
		/* The storefront and the builder get the demo template's catalog; the dashboard keeps its own store (lib/demo/templates.js). */
		var storefront = !/^\/dashboard(\/|$)/.test(window.location.pathname);
		var data = await (isSettings ? demoResponse('get_settings_public', {}) : demoResponse(endpoint, body, { storefront }));
		await new Promise(r => setTimeout(r, LATENCY_MS));
		return new Response(JSON.stringify(data ?? null), { status: 200, headers: { 'Content-Type': 'application/json', 'X-Demo-Mode': '1' } });
	};
}
