import { NextResponse } from "next/server";

import { resolvePaystationConfig } from "@/lib/paystation-server";

/**
 * What the browser may know about PayStation: whether it is usable and which
 * credentials exist - never their values.
 */
export async function GET(request) {
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolvePaystationConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "PayStation",
        sandbox: config.sandbox,
        currency: "BDT",
        pay_with_charge: config.payWithCharge,
        merchant_configured: config.has.merchantId,
        password_configured: config.has.password,
        /* For PayStation's merchant-level IPN setting. */
        ipn_url: `${String(process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin).replace(/\/+$/, "")}/api/paystation/ipn`,
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
