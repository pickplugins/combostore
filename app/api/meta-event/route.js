import { getSettings } from "@/lib/getSettings";




export async function POST(req) {

  const settings = await getSettings();
  const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;
  const META_TEST_EVENT_CODE = settings?.apiKeys?.facebookPixel?.test_event_code;



  const client_ip_address = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip");
  const client_user_agent = req.headers.get("user-agent");

  try {
    const body = await req.json();




    const { event_name, event_id, email, value, currency, event_source_url, fbp, fbc, } = body;


    const response = await fetch(
      `https://graph.facebook.com/v23.0/${FACEBOOK_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              event_name: event_name,
              event_time: Math.floor(Date.now() / 1000),
              event_id: event_id, // required for deduplication
              event_source_url: event_source_url, // required for deduplication
              action_source: "website",
              user_data: {
                client_ip_address: client_ip_address,
                client_user_agent: client_user_agent,
                fbp,
                fbc,
              },
              custom_data: {

                value: value,
                currency: currency,
              },
            },
          ],
          test_event_code: META_TEST_EVENT_CODE,
        }),
      }
    );

    const data = await response.json();



    return new Response(JSON.stringify({ success: true, meta: data }), {
      status: 200,
    });
  } catch (error) {

    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}