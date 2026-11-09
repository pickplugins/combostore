import { redactStripeSettings } from "@/lib/stripe-server";
import { redactEpsSettings } from "@/lib/eps-server";
import { redactAamarPaySettings } from "@/lib/aamarpay-server";
import { redactBkashSettings } from "@/lib/bkash-server";
import { redactNagadSettings } from "@/lib/nagad-server";
import { DEMO_MODE } from "@/lib/demo/config";
import { settings as demoSettings } from "@/lib/demo/data";

/**
 * The store's settings, for the storefront.
 *
 * This is the one place the settings blob crosses into a browser, and it is
 * open - no token, no session - because the storefront needs it on a cold page
 * load. So anything secret has to come out on the way through: Stripe's keys
 * and aamarPay's, EPS's, bKash's and Nagad's credentials are editable in the dashboard,
 * which means they live in this blob, and without the redaction below they would
 * be handed to anyone who asked for `/api/settings`. The dashboard reads its own copy through the
 * authenticated `get_settings` route instead, which is how it can still show
 * them to an admin.
 *
 * Each gateway redacts its own fields and passes the rest of the blob through,
 * so they chain: a gateway added later adds a call here and nothing else.
 */
export async function GET() {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const API_TOKEN = process.env.API_TOKEN;



  let data;
  try {
    const res = await fetch(
      `${serverUrl}wp-json/combo-store/v2/get_settings_public`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_TOKEN, // ✅ works here
        },
        body: JSON.stringify({}),
        ...(DEMO_MODE ? { signal: AbortSignal.timeout(4000) } : {}),
      }
    );
    data = await res.json();
  } catch (e) {
    /* Demo mode can run with no server: hand back the demo store's settings
       (no secrets in them). Outside demo mode a dead server is still an error. */
    if (DEMO_MODE) return Response.json(demoSettings);
    throw e;
  }
  // console.log("API data:", data); // 👈 add this

  /* Some installs answer with the blob wrapped in `settings`, some bare. */
  const strip = (settings) =>
    redactNagadSettings(redactBkashSettings(redactAamarPaySettings(redactEpsSettings(redactStripeSettings(settings)))));

  const redacted = data?.settings
    ? { ...data, settings: strip(data.settings) }
    : strip(data);

  return Response.json(redacted);
}
