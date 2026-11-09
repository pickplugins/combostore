"use client";
import { useState, useEffect, Component } from "react";
import { IconPhoneCall, IconBrandWhatsapp, IconMail, IconMailForward, IconCopy, IconPhone, IconExclamationCircle, IconTruckDelivery, IconPlayerPlay, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";




import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';

import WidgetWrapper from '../components/WidgetWrapper';

import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import UsersPicker from '../components/shop-elements/UsersPicker';
import Spinner from "../components/Spinner";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell as OrderUpdate and the other editor screens. `form-card`
   also opts the fields inside into the shared input styling in globals.css. */
const CARD_CLASSES =
  "form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const FIELD_CLASSES = "!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm w-full bg-white";
const LABEL_CLASSES = "mb-1.5 block text-sm font-medium text-gray-700";
const PRIMARY_BUTTON = "inline-flex items-center gap-2 rounded-lg bg-[#634FE5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#5540d4] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";
const CHIP_BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 cursor-pointer";

const STATUS_TONES = {
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  started: "bg-blue-50 text-blue-700 ring-blue-200",
  paused: "bg-gray-100 text-gray-700 ring-gray-200",
  resumed: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  canceled: "bg-rose-50 text-rose-700 ring-rose-200",
};



const OrderDelivery = (props) => {
  const { formatDate } = useUtilsStore()


  const { token, settings, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, couriersPrams } = useCounterStore()

  var order_id = props?.order_id
  var [orderData, setorderData] = useState(null);

  var userid = orderData?.userid
  var couriers = settings?.couriers


  var [loading, setloading] = useState(false);
  var [deliveryData, setdeliveryData] = useState();
  var [riderData, setriderData] = useState(null);
  var [directions, setDirections] = useState(null);

  useEffect(() => {
    get_order();
  }, [order_id]);

  useEffect(() => {
    get_delivery();
  }, []);

  useEffect(() => {

    get_rider(deliveryData?.rider_id).then((rider) => {
      setriderData(rider)
    });



  }, [deliveryData?.rider_id]);


  function get_delivery() {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    if (!order_id) {
      addNotification({ type: 'error', title: 'Order ID not found', content: 'Please provide an order ID' })
      return;
    }


    var postData = {
      order_id: order_id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_delivery",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {





            var errors = res?.errors;
            var success = res?.success;
            var delivery = res?.delivery;



            setloading(false);

            if (delivery?.id != null) {

              setdeliveryData(delivery)

              setDirections({

                origin: delivery?.startLatLng,
                destination: delivery?.endLatLng,
                waypoints: []
              })
            }








            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        setloading(false);
      });
  }


  function get_order() {


    // if (!token) {
    //   throw new Error("No token found");
    // }

    setloading(true);

    var postData = {
      id: order_id,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: postData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            // setorderData()

            // var errors = res?.errors;
            // var success = res?.success;
            var order = res?.order;


            setloading(false);
            setorderData(order)



            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        setloading(false);
      });
  }

  async function get_rider(rider_id) {
    const postData = JSON.stringify({ id: rider_id });

    setloading(true);

    return fetch(serverUrl + "wp-json/combo-store/v2/get_rider", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }
        return response.json();
      })
      .then((res) => {
        setloading(false);
        return res?.rider; // <-- THIS is now returned to the caller
      })
      .catch((error) => {
        setloading(false);
        return null; // or throw error
      });
  }






  function start_delivery() {


    // if (!token) {
    // 	throw new Error("No token found");
    // }




    var newDeliveryData = {
      customer_id: userid,
      order_id: order_id,
      rider_id: "",
      type: "",
      status: "started",
      notes: "",
      startLatLng: { "lat": 25.750, "lng": 89.253 },
      endLatLng: orderData?.delivery_location,
    };

    setDirections({
      origin: newDeliveryData?.startLatLng,
      destination: newDeliveryData?.endLatLng,
      waypoints: []
    })


    var postData = JSON.stringify(newDeliveryData);
    setloading(true);
    fetch(serverUrl + "wp-json/combo-store/v2/start_delivery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: postData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            var errors = res?.errors;
            var success = res?.success;
            var delivery_id = res?.delivery_id;

            setloading(false);


            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {
              setdeliveryData({ ...deliveryData, id: delivery_id })

              get_delivery()
              addNotification({ type: 'success', title: 'Delivery started', content: message })
            } else {
              addNotification({ type: 'error', title: 'Delivery started failed', content: message })

            }





          });
        }
      })
      .catch((_error) => {
        setloading(false);
      });
  }



  function update_delivery() {

    setloading(true)

    var postData = JSON.stringify(deliveryData);

    fetch(serverUrl + "wp-json/combo-store/v2/update_delivery", {
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

        if (response.ok && response.status < 400) {
          response.json().then((res) => {




            var status = res?.status;
            var message = res?.message;

            if (status == 'success') {
              addNotification({ type: 'success', title: 'Delivery update', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Delivery update failed', content: message })
            }



            setTimeout(() => {
              setloading(false)

            }, 500);
          });
        }
      })
      .catch((_error) => {
        setloading(false);
      });

  }

  function onPickRider(args) {

    setdeliveryData({ ...deliveryData, rider_id: args?.id })
    // get_rider(args?.id).then((rider) => {
    //   setriderData(rider)


    // });
  }
  function onLocationSelect(coords) {



    setdeliveryData({ ...deliveryData, startLatLng: coords });
  }





  const statusTone = STATUS_TONES[deliveryData?.status] ?? "bg-gray-100 text-gray-600 ring-gray-200";
  const courierLabel = couriersPrams?.[deliveryData?.courier]?.label
    ?? Object.values(couriersPrams ?? {}).find(c => c?.id == deliveryData?.courier)?.label
    ?? deliveryData?.courier;

  const requiredRoles = ["administrator", "rider"];
  const customerRoles = ["customer"];

  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));
  const isCustomer = customerRoles.some(role => userDataX?.roles?.includes(role));



  const copyText = (value, title) => {
    navigator.clipboard.writeText(value ?? "")
    addNotification({ type: 'success', title: title, content: title })
  }

  return (

    <div className="flex flex-col gap-4">

      {!deliveryData?.id && (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#634FE5]/10 text-[#634FE5]">
            <IconTruckDelivery size={24} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">{("Delivery hasn't started")}</div>
            <div className="mt-1 text-xs text-gray-500">{("Start a delivery to choose a courier, assign a rider and track this order.")}</div>
          </div>
          <button type="button" disabled={loading} onClick={() => start_delivery()} className={PRIMARY_BUTTON}>
            {loading ? <Spinner /> : <IconPlayerPlay size={16} />}
            {("Start Delivery")}
          </button>
        </div>
      )}

      {deliveryData?.id && (
        <>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-semibold text-gray-900">{("Delivery")} #{deliveryData?.id}</span>
              {deliveryData?.status && (
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ring-1 ring-inset ${statusTone}`}>{deliveryData.status}</span>
              )}
              {deliveryData?.courier && (
                <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[11px] font-semibold text-gray-600 ring-1 ring-inset ring-gray-200">{courierLabel}</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {loading && <Spinner />}
              <button type="button" disabled={loading} onClick={() => update_delivery()} className={PRIMARY_BUTTON}>
                {("Update")}
              </button>
            </div>
          </div>

          <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Delivery">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <div>
                <label htmlFor="delivery-courier" className={LABEL_CLASSES}>{("Courier")}</label>
                <select id="delivery-courier" name="shipping_method" className={FIELD_CLASSES}
                  value={deliveryData?.courier ?? ""}
                  onChange={(ev) => {
                    setdeliveryData({ ...deliveryData, courier: ev.target.value });
                  }}>
                  <option value="">{("Choose")}</option>
                  {Object.entries(couriersPrams ?? {}).map(([key, item]) => (
                    couriers?.[key]?.enabled ? <option key={key} value={item.id}>{item.label}</option> : null
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="delivery-status" className={LABEL_CLASSES}>{("Status")}</label>
                <select id="delivery-status" name="status" className={FIELD_CLASSES}
                  value={deliveryData?.status ?? ""}
                  onChange={(ev) => {
                    var status = ev.target.value;

                    if (status == "started" && deliveryData?.rider_id == null) {
                      addNotification({ type: 'error', title: 'Rider not selected', content: 'Please select a rider' })
                      return;
                    }

                    setdeliveryData({ ...deliveryData, status: status });
                  }}>
                  <option value="">{("Choose")}</option>
                  <option value="pending">Pending</option>
                  <option value="started">Started</option>
                  <option value="paused">Paused</option>
                  <option value="resumed">Resumed</option>
                  <option value="delivered">Delivered</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>

              {(deliveryData?.courier == 'combostore' || deliveryData?.courier == 'steadfast') && (
                <div>
                  <label htmlFor="delivery-type" className={LABEL_CLASSES}>{("Type")}</label>
                  <select id="delivery-type" name="type" className={FIELD_CLASSES}
                    value={deliveryData?.type ?? ""}
                    onChange={(ev) => {
                      setdeliveryData({ ...deliveryData, type: ev.target.value });
                    }}>
                    <option value="">{("Choose")}</option>
                    {deliveryData?.courier == 'combostore' ? (
                      <>
                        <option value="express">Express</option>
                        <option value="normal">Normal</option>
                      </>
                    ) : (
                      <>
                        <option value="0">Home Delivery</option>
                        <option value="1">Hub Pickup</option>
                      </>
                    )}
                  </select>
                </div>
              )}

              {deliveryData?.courier == 'steadfast' && (
                <>
                  <div>
                    <label htmlFor="delivery-consignment" className={LABEL_CLASSES}>{("Consignment ID")}</label>
                    <input id="delivery-consignment" type="text" className={FIELD_CLASSES}
                      value={deliveryData?.consignment_id ?? ""}
                      onChange={(ev) => {
                        setdeliveryData({ ...deliveryData, consignment_id: ev.target.value });
                      }} />
                  </div>
                  <div>
                    <label htmlFor="delivery-tracking" className={LABEL_CLASSES}>{("Tracking code")}</label>
                    <input id="delivery-tracking" type="text" className={FIELD_CLASSES}
                      value={deliveryData?.tracking_code ?? ""}
                      onChange={(ev) => {
                        setdeliveryData({ ...deliveryData, tracking_code: ev.target.value });
                      }} />
                  </div>
                </>
              )}

            </div>

          </WidgetWrapper>


          {deliveryData?.courier == 'steadfast' && (
            <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Steadfast">

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{("Consignment ID")}</div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold tabular-nums text-gray-900">
                      {deliveryData?.consignment_id || <span className="font-normal text-gray-400">—</span>}
                      {deliveryData?.consignment_id && (
                        <span className={CHIP_BUTTON} onClick={() => copyText(deliveryData.consignment_id, "Consignment ID Copied")}><IconCopy size={14} /></span>
                      )}
                    </div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="text-xs font-medium uppercase tracking-wide text-gray-500">{("Tracking Code")}</div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold tabular-nums text-gray-900">
                      {deliveryData?.tracking_code || <span className="font-normal text-gray-400">—</span>}
                      {deliveryData?.tracking_code && (
                        <span className={CHIP_BUTTON} onClick={() => copyText(deliveryData.tracking_code, "Tracking Code Copied")}><IconCopy size={14} /></span>
                      )}
                    </div>
                  </div>
                </div>

                {deliveryData?.tracking_code && (
                  <a className="inline-flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                    href={`https://steadfast.com.bd/t/${deliveryData?.tracking_code}`} target="_blank" rel="noopener noreferrer">
                    {("Track on Steadfast")} <IconExternalLink size={16} />
                  </a>
                )}
              </div>

            </WidgetWrapper>
          )}


          {deliveryData?.courier == 'combostore' && (
            <>
              <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Rider">

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <UsersPicker placeholder={"Search Rider"} role={`rider`} onPick={onPickRider} />
                  </div>

                  {!riderData?.id && (
                    <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700"><IconExclamationCircle size={16} /> {("No rider assigned")}</div>
                  )}

                  {riderData?.id && (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
                          {riderData?.avatar && <img className="h-full w-full object-cover" src={riderData.avatar} alt="" width={40} height={40} />}
                        </div>
                        <div>
                          <Link className="text-sm font-semibold text-gray-900 hover:text-[#634FE5]" href={`/dashboard/riders/${riderData.id}`}>{riderData?.name}</Link>
                          <div className="text-xs text-gray-500">ID: {riderData?.id}</div>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2.5">
                        {riderData?.email && (
                          <div className="flex flex-wrap items-center gap-2">
                            <IconMail className="text-gray-400" size={16} />
                            <div className="text-sm text-gray-700">{riderData.email}</div>
                            <a href={`mailto:${riderData.email}`} className={CHIP_BUTTON}><IconMailForward size={16} /> Send Mail</a>
                            <span className={CHIP_BUTTON} onClick={() => copyText(riderData.email, "Email Copied")}><IconCopy size={16} /> Copy</span>
                          </div>
                        )}
                        {riderData?.phone && (
                          <div className="flex flex-wrap items-center gap-2">
                            <IconPhone className="text-gray-400" size={16} />
                            <div className="text-sm text-gray-700">{riderData.phone}</div>
                            <a href={`tel:${riderData.phone}`} className={CHIP_BUTTON}><IconPhoneCall size={16} /> Call</a>
                            <a href={`https://wa.me/${riderData.phone}`} target="_blank" rel="noopener noreferrer" className={CHIP_BUTTON}><IconBrandWhatsapp size={16} /> WhatsApp</a>
                            <span className={CHIP_BUTTON} onClick={() => copyText(riderData.phone, "Phone Copied")}><IconCopy size={16} /> Copy</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

              </WidgetWrapper>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Pickup Location">
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <LocationPicker markerDraggable={true} latlng={deliveryData?.startLatLng} onLocationSelect={(coords) => {
                      setdeliveryData(prev => ({ ...prev, startLatLng: coords }));
                    }} />
                  </div>
                </WidgetWrapper>
                <WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Delivery Location">
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <LocationPicker markerDraggable={true} latlng={deliveryData?.endLatLng} onLocationSelect={(coords) => {
                      setdeliveryData(prev => ({ ...prev, endLatLng: coords }));
                    }} />
                  </div>
                </WidgetWrapper>
              </div>
            </>
          )}

        </>
      )}

    </div>
  );
};

export default OrderDelivery;