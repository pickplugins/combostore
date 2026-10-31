import { redactStripeSettings } from "@/lib/stripe-server";

/**
 * The store's settings, for the storefront.
 *
 * This is the one place the settings blob crosses into a browser, and it is
 * open - no token, no session - because the storefront needs it on a cold page
 * load. So anything secret has to come out on the way through: Stripe's keys
 * are editable in the dashboard, which means they live in this blob, and
 * without `redactStripeSettings` they would be handed to anyone who asked for
 * `/api/settings`. The dashboard reads its own copy through the authenticated
 * `get_settings` route instead, which is how it can still show them to an
 * admin.
 */
export async function GET() {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const API_TOKEN = process.env.API_TOKEN;



  const res = await fetch(
    `${serverUrl}wp-json/combo-store/v2/get_settings_public`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_TOKEN, // ✅ works here
      },
      body: JSON.stringify({}),
    }
  );



  const data = await res.json();
  // console.log("API data:", data); // 👈 add this

  /* Some installs answer with the blob wrapped in `settings`, some bare. */
  const redacted = data?.settings
    ? { ...data, settings: redactStripeSettings(data.settings) }
    : redactStripeSettings(data);

  return Response.json(redacted);
}
