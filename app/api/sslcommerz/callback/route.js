import { NextResponse } from "next/server";

import { settleSslcommerzPayment } from "@/lib/sslcommerz-server";

/**
 * Where SSLCOMMERZ sends the buyer back to: a form POST from its page to
 * ?result=success|failed|cancelled. Only val_id / tran_id / value_a are read
 * from the body; whether the money was taken is settled by SSLCOMMERZ's
 * validation API, since anyone can post here. The IPN (../ipn) settles the
 * same way for a buyer who never comes back.
 */

const RESULTS = ["success", "failed", "cancelled"];

function storefrontUrl(path, request) {
  const base = String(process.env.NEXT_PUBLIC_STORE_URL || "").replace(/\/+$/, "");

  return new URL(
    String(path).replace(/^\/+/, ""),
    base ? `${base}/` : request.nextUrl.origin
  );
}

/** A POST redirect has to become a GET, or the browser reposts the form. */
function redirect(path, request) {
  return NextResponse.redirect(storefrontUrl(path, request), 303);
}

async function handle(request, fields) {
  const query = request.nextUrl.searchParams;
  const result = RESULTS.includes(query.get("result")) ? query.get("result") : "failed";

  if (result !== "success") {
    /* Nothing to record. value_a is only used to offer a link to the order. */
    const hash = String(fields?.value_a || "").trim();
    const hashQuery = hash ? `?hash=${encodeURIComponent(hash)}` : "";

    return redirect(`payment/sslcommerz/${result}${hashQuery}`, request);
  }

  const { outcome, orderHash } = await settleSslcommerzPayment({
    valId: fields?.val_id || query.get("val_id") || "",
    tranId: fields?.tran_id || query.get("tran_id") || "",
  });

  const hashQuery = orderHash ? `hash=${encodeURIComponent(orderHash)}` : "";

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${orderHash}`, request);
    case "held":
      return redirect(`payment/sslcommerz/review?${hashQuery}`, request);
    case "unverified":
      return redirect(`payment/sslcommerz/failed?${hashQuery}&reason=unverified`, request);
    case "no_order":
      return redirect("payment/sslcommerz/failed?reason=order", request);
    default:
      return redirect(`payment/sslcommerz/failed?${hashQuery}`, request);
  }
}

export async function POST(request) {
  let fields = {};

  try {
    fields = Object.fromEntries((await request.formData()).entries());
  } catch (error) {
    /* No body; the query string may still have enough. */
  }

  return handle(request, fields);
}

export async function GET(request) {
  return handle(request, {});
}
