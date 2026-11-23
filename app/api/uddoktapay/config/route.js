import { NextResponse } from "next/server";

import { resolveUddoktaPayConfig } from "@/lib/uddoktapay-server";

/**
 * What the browser may know about UddoktaPay: whether it is usable and which
 * settings exist - never the API key.
 */
export async function GET(request) {
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveUddoktaPayConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "UddoktaPay",
        sandbox: config.sandbox,
        currency: "BDT",
        api_key_configured: config.has.apiKey,
        panel_configured: config.has.panel,
        using_sandbox_key: config.usingSandboxKey,
        /* Sent with every payment as webhook_url; shown for reference. */
        ipn_url: `${String(process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin).replace(/\/+$/, "")}/api/uddoktapay/ipn`,
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
