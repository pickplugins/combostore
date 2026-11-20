import { NextResponse } from "next/server";

import { resolvePaddleConfig } from "@/lib/paddle-server";

/** The endpoint Paddle calls, built the way the pay links name it. */
function webhookUrl() {
  const base = String(process.env.NEXT_PUBLIC_APP_URL || "").replace(/\/+$/, "");

  return base ? `${base}/api/paddle/webhook` : "";
}

/**
 * What the browser may know about Paddle (Classic): whether it can take
 * payments, in what currency and at what rate - facts about the credentials,
 * never the credentials. The checkout uses it to decide whether to offer
 * Paddle at all; the dashboard to say what is in force.
 */
export async function GET(request) {
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolvePaddleConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "Paddle",
        currency: config.currency,
        exchange_rate: config.exchangeRate,
        sandbox: config.sandbox,
        vendor_configured: Boolean(config.vendorId),
        auth_configured: Boolean(config.authCode),
        public_key_configured: config.publicKeyUsable,
        webhook_url: webhookUrl(),
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
