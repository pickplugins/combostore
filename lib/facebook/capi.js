// lib/facebook/capi.js

export async function sendFacebookServerEvent({
  pixelId, accessToken, eventName, eventId, data,
  sourceUrl, ip, userAgent, fbp, fbc, test_event_code
}) {

  if (!pixelId) {

    return null;

  }


  console.log(pixelId);



  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: 'website',
      event_source_url: sourceUrl,
      user_data: {
        client_ip_address: ip,
        client_user_agent: userAgent,
        fbp,
        fbc,
      },
      custom_data: data,
    }],
    ...(test_event_code && { test_event_code: test_event_code }),
  };



  const res = await fetch(
    `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
  );

  const json = await res.json();

  console.log('Facebook CAPI response:', json);

  if (!res.ok) console.error('CAPI error:', json);
  return json;
}