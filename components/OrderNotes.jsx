"use client";
import { useState, useEffect } from "react";
import { IconTrash, IconMessagePlus, IconMessage2, IconMessages, IconClipboardText, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell as OrderUpdate / OrderTrackings and the other editor screens.
   `form-card` also opts the fields inside into the shared input styling. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const FIELD_CLASSES = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";
const SECONDARY_BUTTON = "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const orderStatusMessages = [
  "Your order has been placed successfully.",
  "We’re waiting for your payment confirmation.",
  "Payment received! We’re preparing your order.",
  "Your order is now being processed.",
  "Great news! Your order has been packed.",
  "Your order has been shipped.",
  "Your package is on the way to you.",
  "Out for delivery today!",
  "Your order has been delivered successfully.",
  "Thank you for shopping with us!",
  "We’ve emailed you the order details.",
  "Your invoice is ready and available.",
  "Your order is on hold. Please contact support.",
  "Unfortunately, your payment was not successful.",
  "Your order has been cancelled as requested.",
  "We’re experiencing a slight delay with your order.",
  "Your order has been partially shipped.",
  "Your refund has been initiated.",
  "Refund completed successfully.",
  "Need help? Our support team is here for you."
];

const initials = (name) => String(name || "?").trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toUpperCase() || "?";


const OrderNotes = (props) => {
  const { formatDate } = useUtilsStore()

  const { token, addNotification, userDataX } = useCounterStore()

  /* Same rule as OrderTrackings: only admins and riders may delete. */
  const canDelete = ["administrator", "rider"].some(role => userDataX?.roles?.includes(role));

  var order_id = props?.order_id

  var [notes, setnotes] = useState(props?.notes);
  var [loading, setloading] = useState(false);
  var [showSamples, setshowSamples] = useState(false);
  var [queryPrams, setqueryPrams] = useState({ paged: 1, order: "DESC", per_page: 5, });

  var [newNoteData, setNewNoteData] = useState({
    post_id: order_id,
    content: "",
  });

  var posts = notes?.posts ?? [];
  var maxPages = notes?.maxPages ?? 1;


  /* Paging used to change the page number without fetching that page. */
  useEffect(() => {
    get_order_notes();
  }, [order_id, queryPrams.paged]);

  useEffect(() => {
    setNewNoteData(prev => ({ ...prev, post_id: order_id }));
  }, [order_id]);


  function get_order_notes() {

    if (!order_id) {
      return;
    }

    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_order_notes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post_id: order_id,
        per_page: queryPrams.per_page,
        paged: queryPrams.paged,
        order: queryPrams.order,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Token validation failed');
        }
        return response.json();
      })
      .then((res) => {
        setnotes({ posts: res?.comments ?? [], total: res?.total, maxPages: res?.max_pages })
        setloading(false);
      })
      .catch((_error) => {
        setloading(false);
      });
  }


  function add_order_note() {

    if (!newNoteData.content?.trim()) {
      addNotification({ type: 'error', title: 'Notes missing', content: 'Please enter notes' })
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/add_order_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newNoteData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then((res) => {
        var message = res?.message;

        setloading(false);

        if (res?.success == true) {
          addNotification({ type: 'success', title: 'Note added', content: message })
          setNewNoteData(prev => ({ ...prev, content: "" }));
          setshowSamples(false);

          /* The newest note is on page 1; going there fetches it. */
          if (queryPrams.paged != 1) setqueryPrams({ ...queryPrams, paged: 1 });
          else get_order_notes();
        } else {
          addNotification({ type: 'error', title: 'Note added failed', content: message })
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Note added failed', content: 'Could not reach the server' })
      });
  }


  function delete_order_note(id) {

    if (!canDelete) return;

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_order_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ comment_id: id }),
    })
      .then((response) => {
        if (response.status === 403) {
          throw new Error("Only administrators and riders can delete order notes.");
        }
        if (!response.ok) {
          throw new Error(`Server answered ${response.status}.`);
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);

        if (res?.success == true) {
          addNotification({ type: 'success', title: 'Note deleted', content: "" })
        } else {
          addNotification({ type: 'error', title: 'Note delete failed', content: "" })
        }

        /* Deleting the last note on a page would leave an empty page behind. */
        if (posts.length == 1 && queryPrams.paged > 1) setqueryPrams({ ...queryPrams, paged: queryPrams.paged - 1 });
        else get_order_notes();
      })
      .catch((error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Note delete failed', content: error?.message ?? 'Could not reach the server' })
      });
  }


  const noteTime = (comment) => {
    var value = comment?.comment_date || comment?.datetime || comment?.created_at;
    if (typeof value !== "string" || !value) return null;
    var formatted = formatDate(value);
    return formatted == "Invalid Date" ? null : formatted;
  }


  return (
    <div className="flex flex-col gap-4">

      <WidgetWrapper className={CARD_CLASSES} title="Add Note">

        <div className="flex flex-col gap-3">

          <textarea id="order-note-content" className={FIELD_CLASSES} rows={3}
            aria-label={("Note")}
            placeholder={("Write a note about this order…")}
            value={newNoteData?.content}
            onChange={(ev) => {
              setNewNoteData({ ...newNoteData, content: ev.target.value });
            }}
            onKeyDown={(ev) => {
              if (ev.key == 'Enter' && (ev.ctrlKey || ev.metaKey)) {
                ev.preventDefault();
                add_order_note();
              }
            }}></textarea>

          {showSamples && (
            <div className="flex max-h-52 flex-wrap gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-3">
              {orderStatusMessages.map((item, index) => (
                <button type="button" key={index}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors cursor-pointer ${newNoteData?.content == item ? 'border-[#634FE5] bg-[#634FE5]/10 text-[#634FE5]' : 'border-gray-200 bg-white text-gray-700 hover:border-[#634FE5]/40 hover:text-[#634FE5]'}`}
                  onClick={() => {
                    setNewNoteData({ ...newNoteData, content: item });
                  }}>
                  <IconMessage2 size={14} />
                  {item}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2">
            <button type="button" onClick={() => setshowSamples(!showSamples)}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#634FE5] transition-colors hover:bg-[#634FE5]/10 cursor-pointer">
              <IconMessages size={14} /> {showSamples ? ("Hide sample notes") : ("Sample notes")}
            </button>

            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-gray-400 sm:inline">{("Ctrl + Enter to add")}</span>
              <button type="button" className={PRIMARY_BUTTON} disabled={loading || !newNoteData?.content?.trim()} onClick={() => add_order_note()}>
                {loading ? <Spinner /> : <IconMessagePlus size={16} />}
                {("Add Note")}
              </button>
            </div>
          </div>

        </div>

      </WidgetWrapper>


      {notes && (
        <WidgetWrapper className={CARD_CLASSES} title={notes?.total > 0 ? `Notes (${notes.total})` : "Notes"}>

          {posts.length == 0 && (
            <div className="flex flex-col items-center gap-2 py-6 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconClipboardText size={20} /></div>
              <div className="text-sm text-gray-500">{("No notes yet. Add the first one above.")}</div>
            </div>
          )}

          {posts.length > 0 && (
            <div className="flex flex-col gap-3">
              {posts.map(comment => {
                var time = noteTime(comment);

                return (
                  <div key={comment?.comment_ID} className="flex gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#634FE5]/10 text-xs font-semibold text-[#634FE5]">
                      {comment?.avatar
                        ? <img className="h-full w-full object-cover" src={comment.avatar} alt="" width={36} height={36} />
                        : initials(comment?.comment_author)}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className="text-sm font-semibold text-gray-900">{comment?.comment_author || ("Unknown")}</span>
                          {time && <span className="text-xs text-gray-500">{time}</span>}
                        </div>

                        {canDelete && (
                          <button type="button" title={("Delete note")} aria-label={("Delete note")}
                            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer"
                            onClick={() => delete_order_note(comment?.comment_ID)}>
                            <IconTrash size={16} />
                          </button>
                        )}
                      </div>

                      <div className="whitespace-pre-line break-words text-sm text-gray-700">{comment?.comment_content}</div>
                    </div>

                  </div>
                )
              })}
            </div>
          )}

          {posts.length > 0 && maxPages > 1 && (
            <div className="mt-4 flex items-center justify-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
              <button type="button" aria-label={("Previous page")} className={`${SECONDARY_BUTTON} !px-2 !py-1.5`}
                disabled={queryPrams.paged <= 1 || loading}
                onClick={() => setqueryPrams({ ...queryPrams, paged: queryPrams.paged - 1 })}>
                <IconChevronLeft size={16} />
              </button>

              <span className="tabular-nums">{("Page")} {queryPrams.paged} / {maxPages}</span>

              <button type="button" aria-label={("Next page")} className={`${SECONDARY_BUTTON} !px-2 !py-1.5`}
                disabled={queryPrams.paged >= maxPages || loading}
                onClick={() => setqueryPrams({ ...queryPrams, paged: queryPrams.paged + 1 })}>
                <IconChevronRight size={16} />
              </button>
            </div>
          )}

        </WidgetWrapper>
      )}

    </div>
  );
};

export default OrderNotes;
