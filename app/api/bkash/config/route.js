import { NextResponse } from "next/server";

import { resolveBkashConfig } from "@/lib/bkash-server";

/**
 * What the browser may know about bKash.
 *
 * The credentials come from the dashboard's settings and stay on the server:
 * this route answers with facts *about* them, never the values. That is what
 * the checkout needs in order to decide whether to offer bKash at all, and what
 * the settings screen needs in order to tell an admin which field is missing.
 */
export async function GET(request) {
  /* The dashboard asks with ?fresh=1 right after a save, when the cached
     settings would still describe the state before it. */
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveBkashConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "bKash",
        sandbox: config.sandbox,
        /* Which credentials exist, and nothing of what they are. */
        app_configured: config.has.appKey && config.has.appSecret,
        credentials_configured: config.has.username && config.has.password,
      },
    },
    /* Settings are already cached for a minute inside resolveBkashConfig;
       caching on top of that would outlive a credential just saved. */
    { headers: { "Cache-Control": "no-store" } }
  );
}
