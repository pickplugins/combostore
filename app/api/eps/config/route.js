import { NextResponse } from "next/server";

import { resolveEpsConfig } from "@/lib/eps-server";

/**
 * What the browser may know about EPS.
 *
 * The credentials come from the dashboard's settings and stay on the server:
 * this route answers with facts *about* them, never the values. That is what
 * the checkout needs in order to decide whether to offer EPS at all - a store can have the method
 * switched on with nothing behind it, and buyers would otherwise meet an error
 * at the last step - and what the settings screen needs in order to tell an
 * admin which field is still missing.
 */
export async function GET(request) {
  /* The dashboard asks with ?fresh=1 right after a save, when the cached
     settings would still describe the state before it. */
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveEpsConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "EPS",
        sandbox: config.sandbox,
        /*
          Which secrets exist, and nothing of what they are - the only way the
          settings screen can say why EPS is not working.
        */
        merchant_configured: config.has.merchantId && config.has.storeId,
        credentials_configured: config.has.username && config.has.password,
        hash_key_configured: config.has.hashKey,
        /* EPS takes no currency field; everything settles in taka. */
        currency: "BDT",
      },
    },
    /* Settings are already cached for a minute inside resolveEpsConfig;
       caching on top of that would outlive a credential just saved. */
    { headers: { "Cache-Control": "no-store" } }
  );
}
