import { NextResponse } from "next/server";

import { PORTWALLET_CURRENCIES, resolvePortWalletConfig } from "@/lib/portwallet-server";

/**
 * What the browser may know about PortWallet: whether it is usable and which
 * keys exist - never their values.
 */
export async function GET(request) {
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolvePortWalletConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "PortWallet",
        sandbox: config.sandbox,
        currencies: PORTWALLET_CURRENCIES,
        app_key_configured: config.has.appKey,
        secret_key_configured: config.has.secretKey,
        /* Sent with every invoice as ipn_url; shown for reference. */
        ipn_url: `${String(process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin).replace(/\/+$/, "")}/api/portwallet/ipn`,
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
