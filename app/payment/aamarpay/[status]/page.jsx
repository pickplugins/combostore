import React from "react";
import Link from "next/link";

/**
 * Where an aamarPay payment that did not go through ends up.
 *
 * The callback route decides which of these the buyer sees; nothing is
 * recorded here. The order is still there and still unpaid, so the only thing
 * worth offering is the way back to checkout.
 */

const OUTCOMES = {
  failed: {
    title: "Payment not completed",
    body: "aamarPay did not confirm this payment, so nothing has been charged. Your order is saved and you can try again.",
  },
  cancelled: {
    title: "Payment cancelled",
    body: "You cancelled the payment before it finished. Your order is saved and still unpaid.",
  },
  success: {
    title: "Payment received",
    body: "This payment has already been handled. You can find it with your orders.",
  },
};

const REASONS = {
  order: "We could not match this payment to an order.",
  unverified:
    "aamarPay reported a payment we could not verify. If money has left your account, please contact us before paying again - do not pay twice.",
};

export default async function AamarPayResultPage({ params, searchParams }) {
  const { status } = await params;
  const query = await searchParams;

  const outcome = OUTCOMES[status] ?? OUTCOMES.failed;
  const reason = REASONS[query?.reason];
  const hash = query?.hash;

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">{outcome.title}</h1>

      <p className="text-gray-600">{outcome.body}</p>

      {reason && <p className="text-red-500">{reason}</p>}

      <div className="flex justify-center gap-3 pt-4">
        <Link
          href="/checkout"
          className="rounded-sm bg-blue-800 px-4 py-3 text-white"
        >
          Back to checkout
        </Link>

        {hash && (
          <Link
            href={`/thank-you/${hash}`}
            className="rounded-sm border border-gray-300 px-4 py-3"
          >
            View order
          </Link>
        )}
      </div>
    </div>
  );
}
