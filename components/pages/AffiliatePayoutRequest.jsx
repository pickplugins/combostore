"use client";
import React, { useState } from "react";
import { IconCashBanknote, IconX } from "@tabler/icons-react";

import PopoverButton from "../../components/PopoverButton";
import { useCounterStore } from "../../store/useCounterStore";
import { useUtilsStore } from "../../store/useUtilsStore";
import { PRIMARY_BUTTON, TOOLBAR_BUTTON, FIELD, LABEL, postApi } from "./affiliateUi";


/* The drawer's form. Amount starts at everything available. */
const RequestForm = ({ available, minPayout, defaults, onDone }) => {
  const { token, addNotification, paymentGateways } = useCounterStore();
  const { wrapCurrency } = useUtilsStore();

  var [form, setform] = useState({ amount: available.toFixed(2), payment_method: defaults?.payout_method ?? "", notes: defaults?.payout_details ?? "" });
  var [saving, setsaving] = useState(false);

  var amount = parseFloat(form.amount);
  var problem =
    !(amount > 0) ? "Enter an amount." :
      amount > available + 0.005 ? `You can request at most ${wrapCurrency(available)}.` :
        minPayout > 0 && amount < minPayout ? `The minimum payout is ${wrapCurrency(minPayout)}.` :
          !form.notes.trim() ? "Say where the payment should be sent." : null;

  var set = (key) => (ev) => setform({ ...form, [key]: ev.target.value });
  var gatewayOptions = Object.entries(paymentGateways ?? {}).map(([value, g]) => ({ value, label: g?.label ?? value }));

  function send() {
    setsaving(true);
    postApi("request_affiliate_payout", token, form)
      .then((res) => {
        setsaving(false);
        if (res?.status !== "success") {
          addNotification({ type: "error", title: "Request not sent", content: res?.message ?? "The request could not be sent." });
          return;
        }
        addNotification({ type: "success", title: "Payout requested", content: `Your request for ${wrapCurrency(amount)} has been sent to the store.` });
        onDone?.();
      })
      .catch((error) => {
        setsaving(false);
        addNotification({ type: "error", title: "Request not sent", content: error.message });
      });
  }

  return (
    <div className="flex flex-col gap-4 p-5 text-left">
      <div className="rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-600">
        {("Available to request")}: <span className="font-semibold tabular-nums text-gray-900">{wrapCurrency(available)}</span>
        {minPayout > 0 && <span className="text-xs text-gray-500"> · {("minimum")} {wrapCurrency(minPayout)}</span>}
      </div>

      <div>
        <label className={LABEL}>{("Amount")}</label>
        <input type="number" step="0.01" min={minPayout || 0} max={available} className={FIELD} value={form.amount} onChange={set("amount")} />
      </div>
      <div>
        <label className={LABEL}>{("Payment method")}</label>
        <input list="affiliate-request-methods" className={FIELD} value={form.payment_method} onChange={set("payment_method")} placeholder={("bKash, bank transfer...")} />
        <datalist id="affiliate-request-methods">
          {gatewayOptions.map((g) => <option key={g.value} value={g.value}>{g.label}</option>)}
        </datalist>
      </div>
      <div>
        <label className={LABEL}>{("Where should we send it?")}</label>
        <textarea rows={3} className={FIELD} value={form.notes} onChange={set("notes")} placeholder={("Wallet number, or bank account name and number")} />
      </div>

      {problem && form.amount !== "" && <p className="text-xs text-rose-600">{problem}</p>}

      <div className="flex justify-end">
        <button type="button" className={PRIMARY_BUTTON} disabled={saving || !!problem} onClick={send}>
          <IconCashBanknote size={16} /> {saving ? ("Sending...") : ("Send request")}
        </button>
      </div>
    </div>
  );
};


/*
  "Request payout" for an affiliate. Takes the figures get_affiliate_stats
  returns (balance.available, balance.min_payout, open_request). While a
  request is waiting it shows that instead, with a way to cancel it.
*/
/* `defaults`: the affiliate's saved payout_method / payout_details, to prefill the form. */
const AffiliatePayoutRequest = ({ available = 0, minPayout = 0, openRequest = null, defaults = null, onChanged }) => {
  const { token, addNotification } = useCounterStore();
  const { wrapCurrency, formatDate } = useUtilsStore();
  var [cancelling, setcancelling] = useState(false);

  if (openRequest?.id) {
    return (
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-xs text-violet-800">
        <span>
          {("Payout request of")} <span className="font-semibold tabular-nums">{wrapCurrency(parseFloat(openRequest.amount || 0))}</span> {("waiting since")} {formatDate(openRequest.created_at)}
        </span>
        <button type="button" className="inline-flex items-center gap-1 !border-0 !bg-transparent !p-0 !text-xs !font-medium !text-violet-700 !shadow-none hover:underline disabled:opacity-50" disabled={cancelling} onClick={() => {
          if (!confirm("Cancel this payout request?")) return;
          setcancelling(true);
          postApi("cancel_affiliate_payout_request", token, { id: openRequest.id })
            .then((res) => {
              setcancelling(false);
              if (res?.status !== "success") {
                addNotification({ type: "error", title: "Not cancelled", content: res?.message ?? "The request could not be cancelled." });
                return;
              }
              addNotification({ type: "success", title: "Request cancelled", content: "Your payout request was withdrawn." });
              onChanged?.();
            })
            .catch((error) => {
              setcancelling(false);
              addNotification({ type: "error", title: "Not cancelled", content: error.message });
            });
        }}>
          <IconX size={13} /> {("Cancel request")}
        </button>
      </div>
    );
  }

  var reason =
    available <= 0 ? "Nothing is available to pay out yet." :
      minPayout > 0 && available < minPayout ? `Requests open at ${wrapCurrency(minPayout)}.` : null;

  if (reason) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className={TOOLBAR_BUTTON} disabled><IconCashBanknote size={16} /> {("Request payout")}</button>
        <span className="text-xs text-gray-500">{reason}</span>
      </div>
    );
  }

  return (
    <PopoverButton buttonLabel={("Request payout")} buttonIcon={<IconCashBanknote size={16} />} title={("Request a payout")} drawer={"right"} buttonClass={PRIMARY_BUTTON}>
      <RequestForm available={available} minPayout={minPayout} defaults={defaults} onDone={onChanged} />
    </PopoverButton>
  );
};

export default AffiliatePayoutRequest;
