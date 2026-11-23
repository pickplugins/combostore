import { NextResponse } from "next/server";

import { resolveShurjoPayConfig } from "@/lib/shurjopay-server";

/**
 * What the browser may know about shurjoPay: whether it is usable and which
 * credentials exist - never their values.
 */
export async function GET(request) {
  const fresh = request.nextUrl.searchParams.get("fresh") === "1";

  const config = await resolveShurjoPayConfig({ fresh });

  return NextResponse.json(
    {
      config: {
        enabled: config.configured,
        label: "shurjoPay",
        sandbox: config.sandbox,
        prefix: config.prefix,
        currency: "BDT",
        username_configured: config.has.username,
        password_configured: config.has.password,
        /* For the shurjoPay merchant panel's IPN setting. */
        ipn_url: `${String(process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin).replace(/\/+$/, "")}/api/shurjopay/ipn`,
      },
    },
    { headers: { "Cache-Control": "no-store" } }
  );
}
