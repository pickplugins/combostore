/*
	First-party Meta identifiers, set on the very first request.

	The pixel creates _fbp (and _fbc when the URL has ?fbclid=) in the browser,
	after the page has loaded. A server-rendered page's Conversions API event
	is built before that, so on the first page of a visit - the ad's landing
	page - the server ViewContent went out with no _fbp, no _fbc and nothing
	else that identifies the person, which is what pulled Event Match Quality
	down. Setting them here means the server sees them on that first request,
	and the pixel then reuses them (it keeps an existing, well-formed _fbp).

	cs_vid is a random visitor id used as external_id by both the pixel and
	the server, so the two halves of each event carry the same value. It is a
	64-character hex string: the pixel treats that as already hashed and sends
	it unchanged, and the server sends it unchanged too.

	Not for crawlers: they never run the pixel and their events are skipped
	server side anyway (lib/facebook/serverEvent.js).
*/

import { NextResponse } from 'next/server';

const BOT_USER_AGENT = /bot|crawl|spider|slurp|facebookexternalhit|facebookcatalog|meta-externalagent|whatsapp|telegram|preview|headless|lighthouse|pingdom|uptime|curl|wget|python-requests|axios|node-fetch/i;

const FBP_FORMAT = /^fb\.\d\.\d+\.\d+$/;
const VID_FORMAT = /^[a-f0-9]{64}$/;

const NINETY_DAYS = 60 * 60 * 24 * 90;
const TWO_YEARS = 60 * 60 * 24 * 730;

function randomHex(bytes) {
	const values = new Uint8Array(bytes);
	crypto.getRandomValues(values);
	return Array.from(values, (b) => b.toString(16).padStart(2, '0')).join('');
}

function randomDigits(length) {
	const values = new Uint32Array(length);
	crypto.getRandomValues(values);
	return Array.from(values, (v, i) => (i === 0 ? (v % 9) + 1 : v % 10)).join('');
}

export function proxy(request) {

	// Only page navigations; prefetches and data requests don't need it.
	if (request.method !== 'GET') return NextResponse.next();

	const userAgent = request.headers.get('user-agent') || '';
	if (!userAgent || BOT_USER_AGENT.test(userAgent)) return NextResponse.next();

	const now = Date.now();
	const toSet = [];

	const fbp = request.cookies.get('_fbp')?.value;
	if (!fbp || !FBP_FORMAT.test(fbp)) {
		toSet.push({ name: '_fbp', value: `fb.1.${now}.${randomDigits(10)}`, maxAge: NINETY_DAYS });
	}

	// A new ad click replaces the old click id.
	const fbclid = request.nextUrl.searchParams.get('fbclid');
	const fbc = request.cookies.get('_fbc')?.value;
	if (fbclid && !(fbc && fbc.endsWith(`.${fbclid}`))) {
		toSet.push({ name: '_fbc', value: `fb.1.${now}.${fbclid}`, maxAge: NINETY_DAYS });
	}

	const vid = request.cookies.get('cs_vid')?.value;
	if (!vid || !VID_FORMAT.test(vid)) {
		toSet.push({ name: 'cs_vid', value: randomHex(32), maxAge: TWO_YEARS });
	}

	if (!toSet.length) return NextResponse.next();

	// Visible to this same request's server components (headers()/cookies()).
	toSet.forEach(({ name, value }) => request.cookies.set(name, value));
	const response = NextResponse.next({ request: { headers: request.headers } });

	// And stored in the browser, readable by the pixel (so not httpOnly).
	toSet.forEach(({ name, value, maxAge }) => {
		response.cookies.set(name, value, {
			path: '/',
			maxAge,
			sameSite: 'lax',
			httpOnly: false,
			secure: request.nextUrl.protocol === 'https:',
		});
	});

	return response;
}

export const config = {
	matcher: [
		/* Everything except API routes, Next internals and static files. */
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpe?g|gif|webp|avif|svg|ico|css|js|map|txt|xml|json|woff2?|ttf|mp4|webm|pdf)$).*)',
	],
};
