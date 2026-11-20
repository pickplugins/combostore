import { NextResponse } from "next/server";

import { settlePaddleCheckout } from "@/lib/paddle-server";

/**
 * Where Paddle sends the buyer after a completed checkout:
 * ?hash=<order hash>&checkout=<checkout id>. Anyone can open this URL, so the
 * payment is checked with Paddle's Order Information API before the order is
 * marked paid. A buyer who closes the tab instead is settled by the webhook.
 *
 * Paddle has no cancel URL: a buyer who gives up simply comes back to the
 * store, with the order saved and unpaid.
 */

function storefrontUrl(path, request) {
  const base = String(
    process.env.NEXT_PUBLIC_STORE_URL || process.env.NEXT_PUBLIC_APP_URL || ""
  ).replace(/\/+$/, "");

  return new URL(String(path).replace(/^\/+/, ""), base ? `${base}/` : request.nextUrl.origin);
}

export async function GET(request) {
  const query = request.nextUrl.searchParams;
  const orderHash = query.get("hash") || "";
  const checkoutId = query.get("checkout") || "";

  const redirect = (path) => NextResponse.redirect(storefrontUrl(path, request), 303);

  if (!orderHash || !checkoutId || checkoutId === "{checkout_hash}") {
    return redirect(`payment/paddle/failed?hash=${encodeURIComponent(orderHash)}`);
  }

  try {
    const settled = await settlePaddleCheckout(orderHash, checkoutId);

    if (settled.status === "no-order") {
      return redirect("payment/paddle/failed?reason=order");
    }

    if (settled.status === "unverified") {
      return redirect(`payment/paddle/failed?hash=${encodeURIComponent(orderHash)}&reason=unverified`);
    }

    /* "processing": Paddle has the payment but has not finished it; the
       webhook records it, and the thank-you page shows the order meanwhile. */
    return redirect(`thank-you/${orderHash}`);
  } catch (error) {
    /* Paid at Paddle but not recorded here: not the buyer's failure, and
       saying it was would invite a second payment. The webhook retries. */
    console.error("Paddle payment taken but the order was not updated", {
      checkoutId,
      orderHash,
      error: error?.message,
    });

    return redirect(`thank-you/${orderHash}`);
  }
}
