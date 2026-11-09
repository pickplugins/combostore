"use client";
import { useState, useEffect } from "react";
import { IconTrash, IconTrolley, IconMessage2, IconMessages, IconChevronLeft, IconChevronRight, IconRouteSquare, IconX, IconMapPin } from "@tabler/icons-react";

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from "../components/LocationPicker";
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import GoogleMapDirections from '../components/GoogleMapDirections';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell as OrderUpdate / OrderDelivery and the other editor screens.
   `form-card` also opts the fields inside into the shared input styling. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const FIELD_CLASSES = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const LABEL_CLASSES = "mb-1.5 block text-sm font-medium text-gray-700";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";
const SECONDARY_BUTTON = "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

const TRACKING_STATUSES = [
  { group: "General", items: [
    ["order_placed", "Order Placed"],
    ["packed", "Packed"],
    ["shipped", "Shipped / Dispatched"],
    ["in_transit", "In Transit"],
    ["out_for_delivery", "Out for Delivery"],
    ["delivered", "Delivered"],
    ["delivery_attempted", "Delivery Attempted"],
    ["returned_to_seller", "Returned to Seller"],
    ["wait_for_customer", "Waiting for Customer"],
    ["call_to_customer", "Call to Customer"],
    ["call_to_seller", "Call to Seller"],
  ] },
  { group: "Food delivery", items: [
    ["confirming_with_kitchen", "Confirming with Kitchen"],
    ["preparing_food", "Preparing Food"],
    ["ready_for_pickup", "Ready for Pickup"],
    ["picked_up_by_rider", "Picked up by Rider"],
    ["on_the_way", "On the Way"],
  ] },
  { group: "Logistics", items: [
    ["label_generated", "Label Generated"],
    ["picked_up_from_sender", "Picked up from Sender"],
    ["at_sorting_facility", "At Sorting Facility"],
    ["departed_facility", "Departed Facility"],
    ["in_transit_logistics", "In Transit (Logistics)"],
    ["arrived_at_destination_hub", "Arrived at Destination Hub"],
    ["out_for_delivery_logistics", "Out for Delivery (Logistics)"],
    ["delivered_logistics", "Delivered (Logistics)"],
    ["held_at_customs", "Held at Customs"],
  ] },
];

const STATUS_LABELS = Object.fromEntries(TRACKING_STATUSES.flatMap(g => g.items));

function statusTone(status) {
  if (!status) return "bg-gray-100 text-gray-600 ring-gray-200";
  if (status.startsWith("delivered")) return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  if (["delivery_attempted", "returned_to_seller", "held_at_customs"].includes(status)) return "bg-rose-50 text-rose-700 ring-rose-200";
  if (["wait_for_customer", "call_to_customer", "call_to_seller"].includes(status)) return "bg-amber-50 text-amber-700 ring-amber-200";
  return "bg-blue-50 text-blue-700 ring-blue-200";
}

/* latlng is stored as a JSON string, but may already be an object. */
function parseLatLng(value) {
  if (!value) return null;
  if (typeof value === "object") return value;
  try { return JSON.parse(value); } catch { return null; }
}

const orderStatusMessages = [
  "Your order has been placed successfully.",
  "We’re waiting for your payment confirmation.",
  "Payment received. Your order is being processed.",
  "We’re preparing your order.",
  "Your items are packed and ready to go.",
  "Your order has been shipped.",
  "Your package is on the way.",
  "Your order is out for delivery.",
  "Your order has been delivered.",
  "We attempted delivery but missed you.",
  "Your order is being returned to the seller.",
  "Refund process has started.",
  "Your refund has been completed.",
  "Your order has been received by the restaurant.",
  "The kitchen is confirming your items.",
  "Your food is being prepared.",
  "Your food is ready for pickup.",
  "The rider has picked up your order.",
  "The rider is on the way to you.",
  "Your meal has been delivered.",
  "Your order has been created in the system.",
  "A shipping label has been generated.",
  "Courier has picked up your parcel.",
  "Your package is at the sorting facility.",
  "Your parcel has left the facility.",
  "Your shipment is moving through the network.",
  "Your package has arrived at the destination hub.",
  "Your package is out for delivery.",
  "Your shipment has been delivered.",
  "Your package is held at customs.",
  "Delivery failed due to an exception."
];


const OrderTrackings = (props) => {
  const { formatDate } = useUtilsStore()

  const { token, addNotification, userDataX } = useCounterStore()

  var order_id = props?.order_id

  var [directions, setDirections] = useState(null);

  var [trackings, settrackings] = useState(props?.trackings);
  var [loading, setloading] = useState(false);
  var [isOpen, setisOpen] = useState(false);
  var [showSamples, setshowSamples] = useState(false);
  var [queryPrams, setqueryPrams] = useState({ paged: 1, order: "DESC", per_page: 5, });
  var [deliveryData, setdeliveryData] = useState(props.deliveryData);

  const emptyTracking = { delivery_id: deliveryData?.id, order_id: order_id, status: "", latlng: "", notes: "" };
  var [newTrackingData, setNewTrackingData] = useState(emptyTracking);

  var posts = trackings?.posts ?? [];
  var maxPages = trackings?.maxPages ?? 1;


  useEffect(() => {
    setNewTrackingData(prev => ({ ...prev, delivery_id: deliveryData?.id }))
    if (deliveryData?.id) get_trackings();
  }, [deliveryData?.id]);

  /* Paging used to change the page number without fetching that page. */
  useEffect(() => {
    if (deliveryData?.id) get_trackings();
  }, [queryPrams.paged]);

  useEffect(() => {
    get_delivery();
  }, [order_id]);

  useEffect(() => {
    var waypointsX = posts.map(item => parseLatLng(item.latlng)).filter(Boolean)

    setDirections({
      origin: deliveryData?.startLatLng,
      destination: deliveryData?.endLatLng,
      waypoints: waypointsX
    })
  }, [trackings]);


  function get_trackings() {

    var postData = JSON.stringify({
      order_id: order_id,
      delivery_id: deliveryData?.id,
      per_page: queryPrams.per_page,
      paged: queryPrams.paged,
      order: queryPrams.order,
    });
    setloading(true);

    fetch(serverUrl + "wp-json/combo-store/v2/get_trackings", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Token validation failed');
        }
        return response.json();
      })
      .then((res) => {
        settrackings({ posts: res?.posts ?? [], total: res?.total, maxPages: res?.max_pages })
        setloading(false);
      })
      .catch((_error) => {
        setloading(false);
      });
  }

  function get_delivery() {

    if (!order_id) {
      addNotification({ type: 'error', title: 'Order ID not found', content: 'Please provide an order ID' })
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/get_delivery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ order_id: order_id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then((res) => {
        var delivery = res?.delivery;
        setloading(false);

        /* The deliveryData?.id effect fetches the trackings. */
        if (delivery?.id != null) {
          setdeliveryData(delivery)
        }
      })
      .catch((_error) => {
        setloading(false);
      });
  }

  function add_tracking() {

    if (!newTrackingData.latlng) {
      addNotification({ type: 'error', title: 'Location missing', content: 'Please set location' })
      return;
    }

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/add_tracking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newTrackingData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then((res) => {
        var status = res?.status;
        var message = res?.message;

        setloading(false);

        if (status == 'success') {
          addNotification({ type: 'success', title: 'Tracking added', content: message })
          setNewTrackingData({ ...emptyTracking, delivery_id: deliveryData?.id })
          setshowSamples(false);
          setisOpen(false);
          get_trackings();
        } else {
          addNotification({ type: 'error', title: 'Tracking added failed', content: message })
        }
      })
      .catch((_error) => {
        setloading(false);
        addNotification({ type: 'error', title: 'Tracking added failed', content: 'Could not reach the server' })
      });
  }

  function delete_trackings(ids) {

    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/delete_trackings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ids: ids }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then(() => {
        setloading(false);
        addNotification({ type: 'success', title: 'Tracking deleted', content: 'Tracking deleted' })
        get_trackings();
      })
      .catch((_error) => {
        setloading(false);
      });
  }

  const requiredRoles = ["administrator", "rider"];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));

  const trackingTime = (tracking) => {
    var value = tracking?.datetime || tracking?.created_at;
    if (typeof value !== "string" || !value) return null;
    var formatted = formatDate(value);
    return formatted == "Invalid Date" ? null : formatted;
  }


  return (
    <div className="flex flex-col gap-4">

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-gray-900">{("Trackings")}</span>
          {trackings?.total > 0 && (
            <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[11px] font-semibold text-gray-600 ring-1 ring-inset ring-gray-200">{trackings.total}</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {loading && <Spinner />}
          {deliveryData?.id && (
            <button type="button" className={isOpen ? SECONDARY_BUTTON : PRIMARY_BUTTON} onClick={() => setisOpen(!isOpen)}>
              {isOpen ? <IconX size={16} /> : <IconTrolley size={16} />}
              {isOpen ? ("Cancel") : ("Add Tracking")}
            </button>
          )}
        </div>
      </div>


      {!deliveryData?.id && !loading && (
        <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-xs text-gray-500">
          {("Start the delivery first, then trackings can be added here.")}
        </div>
      )}


      {isOpen && (
        <WidgetWrapper className={CARD_CLASSES} title="Add Tracking">

          <div className="flex flex-col gap-4">

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

              <div>
                <label htmlFor="tracking-status" className={LABEL_CLASSES}>{("Status")}</label>
                <select id="tracking-status" name="status" className={FIELD_CLASSES}
                  value={newTrackingData?.status}
                  onChange={(ev) => {
                    setNewTrackingData({ ...newTrackingData, status: ev.target.value });
                  }}>
                  <option value="">{("Choose")}</option>
                  {TRACKING_STATUSES.map(group => (
                    <optgroup key={group.group} label={group.group}>
                      {group.items.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="lg:row-span-2">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <label htmlFor="tracking-notes" className="text-sm font-medium text-gray-700">{("Notes")}</label>
                  <button type="button" onClick={() => setshowSamples(!showSamples)}
                    className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-[#634FE5] transition-colors hover:bg-[#634FE5]/10 cursor-pointer">
                    <IconMessages size={14} /> {showSamples ? ("Hide sample notes") : ("Sample notes")}
                  </button>
                </div>
                <textarea id="tracking-notes" className={FIELD_CLASSES} rows={4}
                  placeholder={("What happened at this step?")}
                  value={newTrackingData?.notes}
                  onChange={(ev) => {
                    setNewTrackingData({ ...newTrackingData, notes: ev.target.value });
                  }}></textarea>
              </div>

            </div>

            {showSamples && (
              <div className="flex max-h-52 flex-wrap gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 p-3">
                {orderStatusMessages.map((item, index) => (
                  <button type="button" key={index}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors cursor-pointer ${newTrackingData?.notes == item ? 'border-[#634FE5] bg-[#634FE5]/10 text-[#634FE5]' : 'border-gray-200 bg-white text-gray-700 hover:border-[#634FE5]/40 hover:text-[#634FE5]'}`}
                    onClick={() => {
                      setNewTrackingData({ ...newTrackingData, notes: item });
                    }}>
                    <IconMessage2 size={14} />
                    {item}
                  </button>
                ))}
              </div>
            )}

            <div>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-gray-700">{("Current Location")}</span>
                {newTrackingData?.latlng
                  ? <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600"><IconMapPin size={14} /> {("Location set")}</span>
                  : <span className="text-xs text-gray-400">{("Pick a point on the map")}</span>}
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <LocationPicker markerDraggable={true} onLocationSelect={(coords) => {
                  setNewTrackingData(prev => ({ ...prev, latlng: coords }));
                }} />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-gray-100 pt-4">
              <button type="button" className={SECONDARY_BUTTON} onClick={() => setisOpen(false)}>{("Cancel")}</button>
              <button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={() => add_tracking()}>
                {loading && <Spinner />}
                {("Add Tracking")}
              </button>
            </div>

          </div>

        </WidgetWrapper>
      )}


      {directions?.waypoints?.length > 0 && (
        <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Route">
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <GoogleMapDirections origin={directions?.origin} destination={directions?.destination} waypoints={directions?.waypoints} />
          </div>
        </WidgetWrapper>
      )}


      {deliveryData?.id && trackings && (
        <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Tracking History">

          {posts.length == 0 && (
            <div className="flex flex-col items-center gap-2 py-6 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconRouteSquare size={20} /></div>
              <div className="text-sm text-gray-500">{("No trackings yet. Please wait for the rider's update.")}</div>
            </div>
          )}

          {posts.length > 0 && (
            <ol className="relative flex flex-col">
              {posts.map((tracking, index) => {
                var time = trackingTime(tracking);
                var isLast = index == posts.length - 1;

                return (
                  <li key={tracking.id} className="relative flex gap-3 pb-4 last:pb-0">
                    {!isLast && <span aria-hidden="true" className="absolute left-[7px] top-5 bottom-0 w-px bg-gray-200" />}
                    <span aria-hidden="true" className={`relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-[3px] border-white ring-2 ${index == 0 && queryPrams.paged == 1 ? 'bg-[#634FE5] ring-[#634FE5]/30' : 'bg-gray-300 ring-gray-200'}`} />

                    <div className="flex min-w-0 flex-1 flex-col gap-1.5 rounded-lg border border-gray-200 bg-white p-3 transition-colors hover:border-gray-300">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${statusTone(tracking.status)}`}>
                            {STATUS_LABELS[tracking.status] ?? tracking.status ?? ("No status")}
                          </span>
                          {time && <span className="text-xs text-gray-500">{time}</span>}
                        </div>

                        {hasAccess && (
                          <button type="button" title={("Delete tracking")} aria-label={("Delete tracking")}
                            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer"
                            onClick={() => delete_trackings([tracking.id])}>
                            <IconTrash size={16} />
                          </button>
                        )}
                      </div>

                      {tracking.notes && <div className="text-sm text-gray-700">{tracking.notes}</div>}
                    </div>
                  </li>
                )
              })}
            </ol>
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

export default OrderTrackings;
