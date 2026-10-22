import { getSettings } from "@/lib/getSettings";


export async function POST(request) {


  const settings = await getSettings();
  const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;
  const META_TEST_EVENT_CODE = settings?.apiKeys?.facebookPixel?.test_event_code;

  console.log("FacebookPixel_ID:", FACEBOOK_PIXEL_ID);
  console.log(typeof FACEBOOK_PIXEL_ID);

  try {
    const body = await request.json();

    const {
      eventName,
      eventId,
      data = {},
      userData = {},
    } = body;

    if (!eventName || !eventId) {
      return Response.json(
        {
          error: 'eventName and eventId are required',
        },
        {
          status: 400,
        }
      );
    }

    const pixelId = FACEBOOK_PIXEL_ID;
    const accessToken = META_ACCESS_TOKEN;

    const url =
      `https://graph.facebook.com/v23.0/${pixelId}/events`;

    const event = {
      event_name: eventName,
      event_time: Math.floor(
        Date.now() / 1000
      ),
      event_id: eventId,
      action_source: 'website',
      user_data: userData,
      custom_data: data,
      test_event_code: META_TEST_EVENT_CODE,
    };

    const response = await fetch(url, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        data: [event],
        access_token: accessToken,
      }),
    });

    const result = await response.json();

    console.log(result);


    return Response.json(result);

  } catch (error) {

    console.error(
      'Facebook CAPI Error:',
      error
    );

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}