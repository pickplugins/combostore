import { NextResponse } from "next/server";

import { settleStripeOrder } from "@/lib/stripe-server";

/**
 * Where Stripe sends the buyer back to.
 *
 * Stripe returns them with a GET, and the only thing in the URL worth
 * believing is which session to ask about - whether the money was taken is
 * settled by asking Stripe directly, since anyone can open this URL.
 *
 * Success ends on the usual thank-you page; anything else on a short page
 * saying what happened, with the order left unpaid and still payable.
 *
 * The webhook does this same work for a buyer who paid and then closed the
 * tab. The two race, which is fine: the second one to arrive finds the order
 * already paid and changes nothing.
 */

const RESULTS = ["success", "cancelled", "failed"];

function storefrontUrl(path, request) {
  const base = String(
    process.env.NEXT_PUBLIC_STORE_URL || process.env.NEXT_PUBLIC_APP_URL || ""
  ).replace(/\/+$/, "");

  return new URL(
    String(path).replace(/^\/+/, ""),
    base ? `${base}/` : request.nextUrl.origin
  );
}

export async function GET(request) {
  const query = request.nextUrl.searchParams;

  const result = RESULTS.includes(query.get("result"))
    ? query.get("result")
    : "failed";

  const orderHash = query.get("hash") || "";
  const sessionId = query.get("session_id") || "";

  const redirect = (path) =>
    NextResponse.redirect(storefrontUrl(path, request), 303);

  if (result !== "success") {
    return redirect(
      `payment/stripe/${result}?hash=${encodeURIComponent(orderHash)}`
    );
  }

  try {
    const settled = await settleStripeOrder(orderHash, sessionId);

    if (settled.status === "no-order") {
      return redirect("payment/stripe/failed?reason=order");
    }

    if (settled.status === "unverified") {
      return redirect(
        `payment/stripe/failed?hash=${encodeURIComponent(orderHash)}&reason=unverified`
      );
    }

    return redirect(`thank-you/${orderHash}`);
  } catch (error) {
    /*
      The money is taken but the order still says unpaid. Telling the buyer it
      failed would be wrong - and would invite a second payment - so they are
      sent to the thank-you page and the mismatch is left in the log for the
      store to settle. The webhook will retry this on its own schedule.
    */
    console.error("Stripe payment taken but the order was not updated", {
      sessionId,
      orderHash,
      error: error?.message,
    });

    return redirect(`thank-you/${orderHash}`);
  }
}
