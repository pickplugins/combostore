import { NextResponse } from "next/server";

import { resolveStripeConfig } from "@/lib/stripe-server";

/** The endpoint a store has to register with Stripe, built the same way the
    callback URLs are - so the dashboard shows the URL that will actually be
    called rather than one an admin has to assemble by hand. */
function webhookUrl() {
  const base = String(process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/+$/, "");

  return base ? `${base}/api/stripe/webhook` : "";
}

/**
 * What the browser may know about Stripe.
 *
 * The credentials can come from the dashboard's own settings or from the server
 * env, and either way they stay on the server: this route answers with facts
 * *about* them, never the values. That is what the checkout needs in order to
 * decide whether to offer cards at all - a store can have the method switched
 * on with no key behind it, and buyers would otherwise meet an error at the
 * last step - plus the one thing needed for a label, which is the currency a
 * card will actually be charged in.
 */
export async function GET(request) {
  /* The dashboard asks with ?fresh=1 right after a save, when the cached
     settings would still describe the state before it. */
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveStripeConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "Card",
        currency: config.currency,
        /* 0 when store and Stripe share a currency, where none is needed. */
        exchange_rate: config.exchangeRate,
        livemode: config.livemode,
        /*
          For the dashboard, which has no other way to tell a store why cards
          are not working: whether each secret exists, and which side it came
          from - never the secret itself.
        */
        webhook_configured: Boolean(config.webhookSecret),
        webhook_url: webhookUrl(),
        source: config.source,
      },
    },
    /* Settings are already cached for a minute inside resolveStripeConfig;
       caching on top of that would outlive a key the store just saved. */
    { headers: { "Cache-Control": "no-store" } }
  );
}
