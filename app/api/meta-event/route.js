import { cookies } from "next/headers";
import { getSettings } from "@/lib/getSettings";
import { buildUserData } from "@/lib/facebook/userData";

/*
	Conversions API relay for the storefront's browser events.

	The browser sends the same event_id it gave fbq(), so Meta merges the two
	into one event. Customer information arrives in plain text under `user`
	and is normalised and SHA-256 hashed here (lib/facebook/userData.js)
	before it leaves the server; _fbp / _fbc come from the request cookies.

	Body: {
	  event_name, event_id, event_source_url,
	  custom_data: { value, currency, content_ids, contents, num_items, order_id, content_type },
	  user: { email, phone, name, city, country, external_id },
	  // older callers (cart, search) send these flat; still accepted:
	  value, currency, email, fbp, fbc
	}
*/
export async function POST(req) {

	const settings = await getSettings();
	const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
	const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;
	const META_TEST_EVENT_CODE = settings?.apiKeys?.facebookPixel?.test_event_code;

	if (!FACEBOOK_PIXEL_ID || !META_ACCESS_TOKEN) {
		return Response.json({ success: false, error: 'Meta pixel is not configured' });
	}

	try {
		const body = await req.json();
		const { event_name, event_id, event_source_url, fbp, fbc } = body;

		if (!event_name) {
			return Response.json({ success: false, error: 'event_name is required' }, { status: 400 });
		}

		const custom_data = { ...(body.custom_data ?? {}) };
		if (custom_data.value === undefined && body.value !== undefined) custom_data.value = Number(body.value) || 0;
		if (!custom_data.currency) custom_data.currency = body.currency || 'BDT';

		const user = { ...(body.user ?? {}) };
		if (!user.email && body.email) user.email = body.email;

		const sourceUrl = event_source_url || req.headers.get('referer') || undefined;

		const user_data = buildUserData(user, {
			headers: req.headers,
			cookies: await cookies(),
			fbp,
			fbc,
			sourceUrl,
		});

		const response = await fetch(
			`https://graph.facebook.com/v23.0/${FACEBOOK_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					data: [
						{
							event_name,
							event_time: Math.floor(Date.now() / 1000),
							event_id, // the browser's eventID: Meta deduplicates on it
							event_source_url: sourceUrl,
							action_source: "website",
							user_data,
							custom_data,
						},
					],
					/* Only while testing: events sent with a test code show in Test Events, not in ads reporting. */
					...(META_TEST_EVENT_CODE ? { test_event_code: META_TEST_EVENT_CODE } : {}),
				}),
			}
		);

		const meta = await response.json();

		if (!response.ok) {
			console.error('Meta CAPI error:', meta);
		}

		return Response.json({ success: response.ok, meta });

	} catch (error) {
		return Response.json({ success: false, error: error.message }, { status: 500 });
	}
}
