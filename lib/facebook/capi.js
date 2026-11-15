// lib/facebook/capi.js
/*
	Send one Conversions API event. Server only.

	user_data carries everything the server knows about the visitor:
	IP, user agent, _fbp, _fbc and external_id (the cs_vid cookie set by
	proxy.js, the same value the browser pixel sends). Pass `userData` to add
	more (e.g. hashed em / ph from lib/facebook/userData.js).
*/

export async function sendFacebookServerEvent({
  pixelId, accessToken, eventName, eventId, data,
  sourceUrl, ip, userAgent, fbp, fbc, externalId, userData, test_event_code
}) {

  if (!pixelId || !accessToken) {
    return null;
  }

  const user_data = Object.fromEntries(Object.entries({
    client_ip_address: ip || undefined,
    client_user_agent: userAgent || undefined,
    fbp: fbp || undefined,
    fbc: fbc || fbcFromUrl(sourceUrl) || undefined,
    // cs_vid is random 64-char hex, sent as-is so it equals the pixel's value.
    external_id: externalId ? [externalId] : undefined,
    ...(userData || {}),
  }).filter(([, value]) => value !== undefined && value !== ''));

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: 'website',
      event_source_url: sourceUrl,
      user_data,
      custom_data: data,
    }],
    ...(test_event_code && { test_event_code: test_event_code }),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v23.0/${pixelId}/events?access_token=${accessToken}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );

    const json = await res.json();
    if (!res.ok) console.error('CAPI error:', json);
    return json;
  } catch (error) {
    console.error('CAPI request failed:', error?.message);
    return null;
  }
}

/* Rebuild _fbc from ?fbclid= when the cookie isn't there. */
function fbcFromUrl(url) {
  try {
    const fbclid = url ? new URL(url).searchParams.get('fbclid') : null;
    return fbclid ? `fb.1.${Date.now()}.${fbclid}` : '';
  } catch {
    return '';
  }
}
