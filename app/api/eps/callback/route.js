import { NextResponse } from "next/server";

import { settleEpsPayment } from "@/lib/eps-server";

/**
 * Where EPS sends the buyer back to.
 *
 * It may arrive as a form POST from the gateway's own page, which is why this
 * is a route handler and not a page - and why the body it carries is read only
 * for the transaction id. Whether the money was taken is settled by asking EPS
 * directly, since anyone can post to this URL.
 *
 * EPS does not document what it puts on the return URL, so nothing is assumed:
 * the transaction id this route wrote into its own query string is the first
 * source, and the names the gateway's own SDKs look for stand in behind it.
 * The order hash has a third way home - EPS echoes `valueA` back in the status
 * response - so a redirect that arrives stripped of everything still settles.
 *
 * The order and the transaction are tied together in settleEpsPayment - the
 * transaction id names its order and EPS echoes valueA/valueB - because both
 * arrive in a URL anyone can edit. EPS's IPN (../ipn) settles the same way for
 * a buyer who closed the tab on the gateway's page.
 *
 * Success ends on the usual thank-you page; anything else on a short page
 * saying what happened, with the order left unpaid and still payable.
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
function redirect(url, request) {
  return NextResponse.redirect(storefrontUrl(url, request), 303);
}

/** The first of several spellings that actually carries a value. */
function pick(sources, keys) {
  for (const source of sources) {
    for (const key of keys) {
      const value = source?.[key];

      if (value) {
        return String(value);
      }
    }
  }

  return "";
}

async function handle(request, fields) {
  const query = request.nextUrl.searchParams;
  const fromQuery = Object.fromEntries(query.entries());

  const result = RESULTS.includes(query.get("result"))
    ? query.get("result")
    : "failed";

  const sources = [fromQuery, fields || {}];

  /* `tran` is this route's own; the rest are what EPS's SDKs read. */
  const transactionId = pick(sources, [
    "tran",
    "merchantTransactionId",
    "MerchantTransactionId",
    "transactionId",
    "TransactionId",
  ]);

  let orderHash = pick(sources, ["hash", "valueA", "ValueA"]);

  const fail = (reason) =>
    redirect(
      `payment/eps/failed?hash=${encodeURIComponent(orderHash)}`
        + (reason ? `&reason=${reason}` : ""),
      request
    );

  if (result !== "success") {
    return redirect(
      `payment/eps/${result}?hash=${encodeURIComponent(orderHash)}`,
      request
    );
  }

  if (!transactionId) {
    console.error("EPS returned success with no transaction id to verify", {
      query: fromQuery,
    });

    return fail("unverified");
  }

  const { outcome, orderHash: settledHash } = await settleEpsPayment(transactionId, { hintHash: orderHash });
  const hashQuery = `hash=${encodeURIComponent(settledHash)}`;

  switch (outcome) {
    /* record_failed: the money is taken, so telling the buyer it failed would
       invite a second payment. The mismatch is in the log for the store. */
    case "paid":
    case "already_paid":
    case "record_failed":
      return redirect(`thank-you/${settledHash}`, request);
    case "pending":
      return redirect(`payment/eps/pending?${hashQuery}`, request);
    case "no_order":
      return redirect("payment/eps/failed?reason=order", request);
    case "unverified":
      return redirect(`payment/eps/failed?${hashQuery}&reason=unverified`, request);
    default:
      return redirect(`payment/eps/failed?${hashQuery}`, request);
  }
}

export async function POST(request) {
  let fields = {};

  try {
    const form = await request.formData();

    fields = Object.fromEntries(form.entries());
  } catch (error) {
    /* Some flows come back without a body; the query string still has enough. */
  }

  return handle(request, fields);
}

export async function GET(request) {
  return handle(request, {});
}
