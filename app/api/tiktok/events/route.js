import { NextResponse } from 'next/server';
import { getSettings } from "@/lib/getSettings";

export async function POST(request) {



  const settings = await getSettings();
  const TIKTOK_PIXEL_ID = settings?.apiKeys?.tiktokPixel?.pixel_id;
  const ACCESS_TOKEN = settings?.apiKeys?.tiktokPixel?.access_token;
  const META_TEST_EVENT_CODE = settings?.apiKeys?.tiktokPixel?.test_event_code;


  try {
    const body = await request.json();

    const response = await fetch(
      'https://business-api.tiktok.com/open_api/v1.2/pixel/track/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify({
          pixel_code: TIKTOK_PIXEL_ID,
          event: body.event,
          event_id: body.event_id,
          timestamp: new Date().toISOString(),
          context: body.context,
          properties: body.properties,
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });

  } catch (error) {

    return NextResponse.json(
      {
        success: false,
        error: 'TikTok event failed',
      },
      {
        status: 500,
      }
    );
  }
}