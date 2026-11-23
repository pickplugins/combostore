import { NextResponse } from "next/server";

import { resolveSslcommerzConfig, SSLCOMMERZ_CURRENCIES } from "@/lib/sslcommerz-server";

/**
 * What the browser may know about SSLCOMMERZ: whether it is usable and which
 * credentials exist - never their values.
 */
export async function GET(request) {
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveSslcommerzConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "SSLCOMMERZ",
        sandbox: config.sandbox,
        currencies: SSLCOMMERZ_CURRENCIES,
        store_configured: config.has.storeId,
        password_configured: config.has.storePasswd,
        ipn_url: `${String(process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin).replace(/\/+$/, "")}/api/sslcommerz/ipn`,
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
