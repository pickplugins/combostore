/*
	Queue a Conversions API event from a server page (a route's page.jsx),
	sent after the response so it never slows the page down.

	Pages used to call sendFacebookServerEvent() themselves and had to pass
	the pixel id and access token; /shop, /tags and /blog forgot, so their
	ViewContent never left the server. This reads the settings and the
	request (IP, user agent, _fbp / _fbc) itself.

	headers() and cookies() are read here, before after(): they cannot be
	used inside it. Pair it with the browser event (FacebookViewContent) using
	the same eventId so Meta keeps one event.

	Server only.
*/

import { after } from 'next/server';
import { headers, cookies } from 'next/headers';
import { getSettings } from '@/lib/getSettings';
import { storeUrl } from '@/lib/storeUrl';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import { clientIp } from '@/lib/facebook/userData';

const BOT_USER_AGENT = /bot|crawl|spider|slurp|facebookexternalhit|facebookcatalog|meta-externalagent|whatsapp|telegram|preview|headless|lighthouse|pingdom|uptime|curl|wget|python-requests|axios|node-fetch/i;

export async function queueFacebookServerEvent({ eventName, eventId, data, path = '' }) {

	const [settings, h, c] = await Promise.all([getSettings(), headers(), cookies()]);
	const pixel = settings?.apiKeys?.facebookPixel;

	if (!pixel?.pixel_id || !pixel?.access_token) {
		return;
	}

	const userAgent = h.get('user-agent') ?? '';

	/*
		Crawlers and link previews render these pages too, but never run the
		pixel: their server-only events cannot be matched to anyone and drag
		Event Match Quality down. Meta's own crawler is one of them.
	*/
	if (!userAgent || BOT_USER_AGENT.test(userAgent)) {
		return;
	}

	const request = {
		ip: clientIp(h),
		userAgent,
		fbp: c.get('_fbp')?.value,
		fbc: c.get('_fbc')?.value,
	};

	after(() => sendFacebookServerEvent({
		pixelId: pixel.pixel_id,
		accessToken: pixel.access_token,
		test_event_code: pixel.test_event_code || undefined,
		eventName,
		eventId,
		data,
		sourceUrl: storeUrl(path),
		...request,
	}));
}
