import { NextResponse } from "next/server";

import { resolveNagadConfig } from "@/lib/nagad-server";

/**
 * What the browser may know about Nagad.
 *
 * The credentials come from the dashboard's settings and stay on the server:
 * this route answers with facts *about* them, never the values. That is what
 * the checkout needs in order to decide whether to offer Nagad at all, and what
 * the settings screen needs in order to tell an admin which field is missing.
 */
export async function GET(request) {
  /* The dashboard asks with ?fresh=1 right after a save, when the cached
     settings would still describe the state before it. */
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveNagadConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "Nagad",
        sandbox: config.sandbox,
        /* Which credentials exist, and nothing of what they are. */
        merchant_configured: config.has.merchantId && config.has.merchantNumber,
        private_key_configured: config.has.privateKey,
        public_key_configured: config.has.publicKey,
      },
    },
    /* Settings are already cached for a minute inside resolveNagadConfig;
       caching on top of that would outlive a credential just saved. */
    { headers: { "Cache-Control": "no-store" } }
  );
}
