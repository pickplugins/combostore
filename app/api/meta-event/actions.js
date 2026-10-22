// app/actions.js
'use server';

import { headers, cookies } from 'next/headers';
import crypto from 'crypto';
import { getSettings } from "@/lib/getSettings";

export async function sendMetaCAPI(eventName, eventId, customData) {

  const settings = await getSettings();


  const FACEBOOK_PIXEL_ID = settings.apiKeys.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings.apiKeys.facebookPixel?.access_token;


  const headerList = headers();
  const cookieStore = cookies();

  // Helper to hash PII (Required by Meta)
  const sha256 = (val) =>
    val ? crypto.createHash('sha256').update(val.toLowerCase().trim()).digest('hex') : null;

  // Extract Facebook cookies for better matching
  const fbp = cookieStore.get('_fbp')?.value;
  const fbc = cookieStore.get('_fbc')?.value;

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id: eventId, // MUST match the client event_id
      event_source_url: headerList.get('referer'),
      user_data: {
        // em: [sha256(userEmail)], // Add hashed email if available in session
        client_ip_address: headerList.get('x-forwarded-for')?.split(',')[0],
        client_user_agent: headerList.get('user-agent'),
        fbp: fbp,
        fbc: fbc,
      },
      custom_data: customData,
    }],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${FACEBOOK_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );
    return await response.json();
  } catch (error) {
  }
}