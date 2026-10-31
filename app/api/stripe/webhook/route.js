import { NextResponse } from "next/server";

import {
  resolveStripeConfig,
  settleStripeOrder,
  verifyWebhookSignature,
} from "@/lib/stripe-server";

/**
 * Stripe calling in, rather than the buyer's browser.
 *
 * This is what settles an order whose buyer paid and then closed the tab
 * before the redirect landed - the callback never runs for them, and without
 * this the money would be taken against an order still marked unpaid.
 *
 * It needs a publicly reachable host and the endpoint's signing secret. On
 * localhost it simply never arrives, which costs nothing while developing
 * because the callback covers the ordinary path; use `stripe listen` to
 * exercise it.
 *
 * Stripe retries a non-2xx for up to three days, so a failure here is worth
 * reporting honestly rather than swallowing - but anything that will never
 * succeed on a retry (an event for an order that does not exist) is answered
 * 200 so Stripe stops asking.
 *
 * Set up at https://dashboard.stripe.com/webhooks against
 * `<NEXT_PUBLIC_APP_URL>/api/stripe/webhook`, subscribed to
 * `checkout.session.completed` and `checkout.session.async_payment_succeeded`.
 * The signing secret goes in the dashboard's Stripe panel, or the env.
 */

/* The session is paid by the time either of these fires. */
const PAID_EVENTS = [
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
];

export async function POST(request) {
  const config = await resolveStripeConfig();

  if (!config.webhookSecret) {
    /*
      No secret means nothing here can be trusted, so nothing is acted on.
      503 rather than 200: the store has something to fix, and Stripe showing
      the endpoint as failing is how they find out.
    */
    console.error(
      "A Stripe webhook arrived but no signing secret is set, in the dashboard or the env."
    );

    return NextResponse.json(
      { message: "Webhooks are not configured." },
      { status: 503 }
    );
  }

  /* The raw bytes: the signature covers them, not a re-serialized object. */
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature") || "";

  if (!verifyWebhookSignature(rawBody, signature, config.webhookSecret)) {
    return NextResponse.json({ message: "Invalid signature." }, { status: 400 });
  }

  let event = null;

  try {
    event = JSON.parse(rawBody);
  } catch (error) {
    return NextResponse.json({ message: "Malformed body." }, { status: 400 });
  }

  if (!PAID_EVENTS.includes(event?.type)) {
    /* Everything else is acknowledged and ignored. */
    return NextResponse.json({ received: true });
  }

  const session = event?.data?.object ?? {};
  const orderHash = String(session?.metadata?.order_hash || "");

  /*
    A session this storefront did not create - another integration on the same
    Stripe account. There is no order to settle and a retry would not change
    that, so it is acknowledged.
  */
  if (!orderHash) {
    return NextResponse.json({ received: true, ignored: "no order hash" });
  }

  try {
    /*
      The event's own copy of the session is not trusted on its own: the
      amount is re-read from Stripe and checked against the order inside
      settleStripeOrder, exactly as the callback does.
    */
    const settled = await settleStripeOrder(orderHash, session?.id);

    if (settled.status === "no-order") {
      console.error("A paid Stripe session named an order that does not exist", {
        sessionId: session?.id,
        orderHash,
      });

      /* A retry will not conjure the order up. */
      return NextResponse.json({ received: true, ignored: "unknown order" });
    }

    if (settled.status === "unverified") {
      /* Already logged in detail by settleStripeOrder. */
      return NextResponse.json({ received: true, ignored: "unverified" });
    }

    return NextResponse.json({ received: true, status: settled.status });
  } catch (error) {
    /* The store rejected the update. Stripe retrying is exactly what we want. */
    console.error("A Stripe webhook could not record the payment", {
      sessionId: session?.id,
      orderHash,
      error: error?.message,
    });

    return NextResponse.json(
      { message: "The payment could not be recorded." },
      { status: 500 }
    );
  }
}
