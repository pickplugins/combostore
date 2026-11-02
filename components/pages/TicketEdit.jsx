'use client'
import React from 'react'
import Link from "next/link";

import { useState, useEffect } from "react";
import Image from "next/image";

import Comments from "../../components/shop-elements/Comments";

import { useCounterStore } from '../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

import { IconArrowLeft } from "@tabler/icons-react";
import Spinner from '../../components/Spinner';


const CARD = "form-card rounded-xl border border-gray-200 bg-white shadow-sm";

const CARD_TITLE = "border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900";

const INFO_LABEL = "text-xs font-medium text-gray-500";

const CHIP = "inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700";

const SELECT = "!w-40 shrink-0 !h-9!rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none disabled:opacity-60";

const STATUSES = {
  open: { label: "Open", classes: "bg-emerald-50 text-emerald-700" },
  processing: { label: "Processing", classes: "bg-blue-50 text-blue-700" },
  closed: { label: "Closed", classes: "bg-gray-100 text-gray-600" },
};

const PRIORITIES = {
  1: { label: "Normal", classes: "bg-gray-100 text-gray-600" },
  10: { label: "High", classes: "bg-amber-50 text-amber-700" },
  90: { label: "Urgent", classes: "bg-rose-50 text-rose-700" },
};

/* The server decides; this only stops showing controls that would be refused. */
const STAFF_ROLES = ["administrator", "support_agent", "shop_manager", "store_manager"];


/*
  Tickets come from a public form, so their HTML is read as text here rather
  than injected into an admin page. Block ends become line breaks first, which
  keeps the customer's paragraphs. DOMParser never runs what it parses.
*/
function htmlToLines(html) {

  if (!html) {
    return [];
  }

  const marked = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h[1-6]|blockquote)>/gi, "\n");

  const text = new DOMParser().parseFromString(marked, "text/html").body.textContent ?? "";

  return text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
}


const TicketEdit = ({ id }) => {

  const { token, addNotification, userDataX } = useCounterStore()

  var [ticket, setticket] = useState(null);
  var [loading, setloading] = useState(false);
  var [failed, setfailed] = useState(false);
  var [saving, setsaving] = useState(false);

  var isStaff = Object.values(userDataX?.roles ?? {}).some((role) => STAFF_ROLES.includes(role));

  function fetchPost() {

    setloading(true);
    setfailed(false);

    fetch(serverUrl + "wp-json/combo-store/v2/get_ticket", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Ticket request failed');
        }

        return response.json();
      })
      .then((res) => {

        /* A missing ticket still comes back as a `prompt`, with every value null. */
        if (!res?.prompt?.id) {
          throw new Error('Ticket not found');
        }

        setticket(res.prompt);
        setloading(false);
      })
      .catch((_error) => {
        setfailed(true);
        setloading(false);
      });

  }

  useEffect(() => {

    /* After a reload the token arrives from an effect above this page. */
    if (!token) {
      return;
    }

    fetchPost();
  }, [id, token]);


  /* The change shows straight away and is put back if the server refuses it. */
  function updateTicket(field, value) {

    var previous = ticket[field];

    setticket({ ...ticket, [field]: value });
    setsaving(true);

    fetch(serverUrl + "wp-json/combo-store/v2/update_ticket", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ id: id, [field]: value }),
    })
      .then((response) => {

        if (!response.ok) {
          throw new Error('Ticket update failed');
        }

        return response.json();
      })
      .then((res) => {

        if (!res?.success) {
          throw new Error('Ticket update failed');
        }

        addNotification({ type: 'success', title: 'Ticket updated', content: "Your change has been saved." })
        setsaving(false);
      })
      .catch((_error) => {
        setticket((current) => ({ ...current, [field]: previous }));
        addNotification({ type: 'error', title: 'Ticket not updated', content: "Your change could not be saved. Please try again." })
        setsaving(false);
      });

  }


  function renderChips(items) {

    if (!items?.length) {
      return <span className="text-sm text-gray-300">—</span>;
    }

    return (
      <div className="flex flex-wrap justify-end gap-1.5">
        {items.map((item, index) => {
          return (
            <span key={index} className={CHIP}>
              <span dangerouslySetInnerHTML={{ __html: item.name }}></span>
            </span>
          )
        })}
      </div>
    );
  }


  function renderField(field, options, fallback, label) {

    var value = ticket?.[field] || fallback;

    if (!isStaff) {
      var pill = options[value];

      return (
        <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${pill?.classes ?? ""}`}>{pill?.label ?? value}</span>
      );
    }

    return (
      <select aria-label={label} className={SELECT} value={value} disabled={saving} onChange={ev => {
        updateTicket(field, ev.target.value);
      }}>
        {Object.entries(options).map(([optionValue, option]) => {
          return <option key={optionValue} value={optionValue}>{option.label}</option>
        })}
      </select>
    );
  }


  var title = htmlToLines(ticket?.title).join(" ");
  var authorName = ticket?.author?.name;

  return (

    <div className="page-shell">

      <div className="flex flex-col gap-2">

        <Link className="inline-flex w-fit items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-900" href={`/dashboard/tickets/`}>
          <IconArrowLeft size={14} /> {("Tickets")}
        </Link>

        <div>
          <h1 className="text-xl font-semibold text-gray-900">{title || ("Ticket")}</h1>
          <p className="mt-0.5 flex items-center gap-2 text-xs text-gray-500">
            <span className="font-mono text-[11px] text-gray-400">#{id}</span>
          </p>
        </div>

      </div>

      {loading && !ticket && (
        <div className={`${CARD} flex items-center gap-3 px-5 py-3 text-sm text-gray-600`}>
          <Spinner /> <div>{("Loading")}</div>
        </div>
      )}

      {failed && (
        <div className={`${CARD} flex flex-wrap items-center justify-between gap-3 px-5 py-3 text-sm text-gray-600`}>
          <div>{("This ticket could not be loaded.")}</div>
          <div className="cursor-pointer font-medium text-gray-900 hover:underline" onClick={fetchPost}>{("Try again")}</div>
        </div>
      )}

      {ticket && (

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

          <div className="flex min-w-0 flex-col gap-4">

            <div className={CARD}>
              <div className={CARD_TITLE}>{("Ticket Details")}</div>

              <div className="flex flex-col gap-3 p-5 text-sm leading-relaxed text-gray-700">
                {htmlToLines(ticket?.content).map((line, index) => {
                  return <p key={index}>{line}</p>
                })}

                {!ticket?.content && (
                  <p className="text-gray-400">{("No details were given.")}</p>
                )}
              </div>
            </div>

            <Comments id={id} />

          </div>

          <div className="min-w-0 xl:sticky xl:top-[86px] xl:self-start">

            <div className={CARD}>
              <div className={CARD_TITLE}>{("Ticket Info")}</div>

              <div className="flex flex-col divide-y divide-gray-100 px-5 py-1">

                <div className="flex items-center justify-between gap-3 py-3">
                  <div className={INFO_LABEL}>{("Status")}</div>
                  {renderField("markedAs", STATUSES, "open", "Status")}
                </div>

                <div className="flex items-center justify-between gap-3 py-3">
                  <div className={INFO_LABEL}>{("Priority")}</div>
                  {renderField("priority", PRIORITIES, "1", "Priority")}
                </div>

                <div className="flex items-center justify-between gap-3 py-3">
                  <div className={INFO_LABEL}>{("Customer")}</div>
                  <div className="flex min-w-0 items-center gap-2 text-sm">
                    <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
                      {ticket?.author?.avatar && (
                        <Image unoptimized className="h-8 w-8 object-cover" src={ticket.author.avatar} width={40} height={40} alt={``} />
                      )}
                    </div>
                    <div className={`truncate ${authorName ? "text-gray-700" : "text-gray-400"}`}>{authorName || ("Guest")}</div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 py-3">
                  <div className={INFO_LABEL}>{("Categories")}</div>
                  {renderChips(ticket?.categories)}
                </div>

                <div className="flex items-start justify-between gap-3 py-3">
                  <div className={INFO_LABEL}>{("Tags")}</div>
                  {renderChips(ticket?.tags)}
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default TicketEdit
