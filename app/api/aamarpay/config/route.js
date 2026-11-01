import { NextResponse } from "next/server";

import { resolveAamarPayConfig } from "@/lib/aamarpay-server";

/**
 * What the browser may know about aamarPay.
 *
 * The credentials come from the dashboard's settings and stay on the server:
 * this route answers with facts *about* them, never the values. That is what
 * the checkout needs in
 * order to decide whether to offer aamarPay at all - a store can have the
 * method switched on with nothing behind it, and buyers would otherwise meet
 * an error at the last step - and what the settings screen needs in order to
 * tell an admin which field is still missing.
 */
export async function GET(request) {
  /* The dashboard asks with ?fresh=1 right after a save, when the cached
     settings would still describe the state before it. */
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveAamarPayConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "aamarPay",
        sandbox: config.sandbox,
        /* Which credentials exist, and nothing of what they are. */
        store_configured: config.has.storeId,
        signature_key_configured: config.has.signatureKey,
      },
    },
    /* Settings are already cached for a minute inside resolveAamarPayConfig;
       caching on top of that would outlive a credential just saved. */
    { headers: { "Cache-Control": "no-store" } }
  );
}
