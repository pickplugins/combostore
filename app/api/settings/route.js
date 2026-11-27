import { redactStripeSettings } from "@/lib/stripe-server";
import { redactEpsSettings } from "@/lib/eps-server";
import { redactAamarPaySettings } from "@/lib/aamarpay-server";
import { redactBkashSettings } from "@/lib/bkash-server";
import { redactNagadSettings } from "@/lib/nagad-server";
import { redactPaddleSettings } from "@/lib/paddle-server";
import { redactShurjoPaySettings } from "@/lib/shurjopay-server";
import { redactSslcommerzSettings } from "@/lib/sslcommerz-server";
import { redactPaystationSettings } from "@/lib/paystation-server";
import { redactUddoktaPaySettings } from "@/lib/uddoktapay-server";
import { redactPortWalletSettings } from "@/lib/portwallet-server";
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
/**
 * API Keys with the server-only secrets taken out.
 *
 * - apiToken is the key WordPress's API-key routes accept (get_settings_public,
 *   record_gateway_payment, get_order_by_hash...). Anyone holding it could read
 *   every saved secret and mark any order paid, and this response is open.
 * - The Meta and TikTok access tokens are only used by the server-side event
 *   routes, which read their own copy through lib/getSettings.
 *
 * What the browser does need stays: pixel ids, Google Maps key and map id,
 * analytics/tag ids.
 */
const SERVER_ONLY_API_KEYS = {
  apiToken: null,
  facebookPixel: ["access_token"],
  tikTokPixel: ["access_token"],
  tiktokPixel: ["access_token"],
  /* Paid phone fraud-check keys, read only by check_mobile_fraud and the
     checkout score check on WordPress. */
  bdcourier: null,
  fraudchecker: null,
};

/**
 * Courier entries cut down to what the browser uses: `enabled` (which
 * couriers OrderCourier / OrderDelivery offer) and `sort` (their order).
 * Everything else - Steadfast api_key / secret_key / panel_password /
 * webhook_auth_token, Pathao client secret and password, RedX and Carrybee
 * tokens, Paperfly login - is server-only and used to be sent whole.
 */
const BROWSER_COURIER_FIELDS = ["enabled", "sort"];

function redactCouriers(settings) {
  const couriers = settings?.couriers;

  if (!couriers || typeof couriers !== "object") {
    return settings;
  }

  const safe = {};

  for (const [id, entry] of Object.entries(couriers)) {
    if (!entry || typeof entry !== "object") continue;
    safe[id] = {};
    for (const field of BROWSER_COURIER_FIELDS) {
      if (field in entry) safe[id][field] = entry[field];
    }
  }

  return { ...settings, couriers: safe };
}

function redactApiKeys(settings) {
  const apiKeys = settings?.apiKeys;

  if (!apiKeys || typeof apiKeys !== "object") {
    return settings;
  }

  const safe = { ...apiKeys };

  for (const [section, fields] of Object.entries(SERVER_ONLY_API_KEYS)) {
    if (!(section in safe)) continue;

    if (fields === null) {
      delete safe[section];
      continue;
    }

    if (safe[section] && typeof safe[section] === "object") {
      safe[section] = { ...safe[section] };
      for (const field of fields) delete safe[section][field];
    }
  }

  return { ...settings, apiKeys: safe };
}

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
    redactCouriers(redactApiKeys(redactPortWalletSettings(redactUddoktaPaySettings(redactPaystationSettings(redactSslcommerzSettings(redactShurjoPaySettings(redactPaddleSettings(redactNagadSettings(redactBkashSettings(redactAamarPaySettings(redactEpsSettings(redactStripeSettings(settings)))))))))))));

  const redacted = data?.settings
    ? { ...data, settings: strip(data.settings) }
    : strip(data);

  return Response.json(redacted);
}
