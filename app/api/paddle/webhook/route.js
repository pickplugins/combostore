import { NextResponse } from "next/server";

import {
  resolvePaddleConfig,
  settlePaddleWebhook,
  verifyPaddleSignature,
} from "@/lib/paddle-server";

/**
 * Paddle (Classic) calling in. Every pay link names this URL as its
 * webhook_url, so Paddle posts the sale here (form-encoded, RSA-signed in
 * `p_signature`) whether or not the buyer comes back. It can also be set as
 * the account's alert URL for `payment_succeeded`.
 *
 * The signature is checked with the vendor's public key (Paddle > Developer
 * Tools > Public Key, pasted in the dashboard's Paddle panel). Without it
 * nothing is acted on: an unsigned endpoint would let anyone mark any order
 * paid.
 *
 * Paddle retries a non-2xx, so only a failure a retry could fix (the store
 * refusing the update) answers 500; everything final answers 200.
 * On localhost it never arrives - the callback covers that case.
 */
export async function POST(request) {
  const config = await resolvePaddleConfig();

  if (!config.publicKeyUsable) {
    console.error("A Paddle webhook arrived but no usable public key is set in the dashboard.");

    return NextResponse.json({ message: "Webhooks are not configured." }, { status: 503 });
  }

  let fields = {};

  try {
    const form = new URLSearchParams(await request.text());
    fields = Object.fromEntries(form.entries());
  } catch (error) {
    return NextResponse.json({ message: "Malformed body." }, { status: 400 });
  }

  if (!verifyPaddleSignature(fields, config.publicKey)) {
    return NextResponse.json({ message: "Invalid signature." }, { status: 400 });
  }

  try {
    const settled = await settlePaddleWebhook(fields);

    return NextResponse.json({ received: true, status: settled.status });
  } catch (error) {
    console.error("A Paddle webhook could not record the payment", { error: error?.message });

    return NextResponse.json({ message: "The payment could not be recorded." }, { status: 500 });
  }
}
