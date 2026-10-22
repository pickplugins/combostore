'use server';

import { headers, cookies } from 'next/headers';
import crypto from 'crypto';
import { getSettings } from "@/lib/api";

export async function sendMetaCAPI(eventName, eventId, customData = {}) {


  const settings = await getSettings();


  const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;



  const headerList = await headers();
  const cookieStore = await cookies();

  // Meta requires PII to be SHA256 hashed
  const hash = (val) => val ? crypto.createHash('sha256').update(val.toLowerCase().trim()).digest('hex') : null;

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_id: eventId, // Critical for deduplication
      event_source_url: headerList.get('referer'),
      user_data: {
        client_ip_address: headerList.get('x-forwarded-for')?.split(',')[0],
        client_user_agent: headerList.get('user-agent'),
        fbp: cookieStore.get('_fbp')?.value,
        fbc: cookieStore.get('_fbc')?.value,
      },
      custom_data: customData,
    }],
  };

  await fetch(`https://graph.facebook.com/v19.0/${FACEBOOK_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}