"use client";
import { useState, useEffect } from "react";
import { IconX, IconPlus } from "@tabler/icons-react";

import DropDown from '../components/DropDown';

import { useCounterStore } from '../store/useCounterStore'
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import states from '../lib/States';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
  Field styling. The base control rules in globals.css are commented out, so
  an input with no classes renders as a browser default - which is why these
  fields carried one-off `!border-2 !shadow-none focus:border-0` strings, the
  last of which also removed the keyboard focus ring.
*/
const FIELD =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition-colors hover:border-gray-400";

const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max";

const CHIP =
  "inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 py-1 pl-2.5 pr-1 text-xs text-gray-700";

const CHIP_CLEAR =
  "inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-100 hover:text-red-600";

/* One label + control row, in place of six copies of the same wrapper. */
const Row = ({ label, hint, children }) => (
  <div className="flex flex-col gap-2 border-b border-gray-200 py-3 last:border-0 lg:flex-row lg:items-center lg:gap-4">

    <div className="text-sm font-semibold text-gray-700 lg:w-56 lg:shrink-0">{label}</div>

    <div className="min-w-0 lg:flex-1">
      {children}
      {hint && (
        <p className="mt-1 text-xs text-gray-400">{hint}</p>
      )}
    </div>

  </div>
);

const ShippingMethodCreate = (props) => {

  var zoneId = props?.zoneId
  var zoneCountries = props?.zoneCountries
  var onOrderCreated = props?.onOrderCreated

  const { token, addNotification } = useCounterStore()

  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState({ zone_id: zoneId, states: [], settings: {}, status: '' });
  var [statesList, setstatesList] = useState({});



  function create_shipping_method() {

    setloading(true)




    var postData = JSON.stringify({ ...orderData });

    fetch(serverUrl + "wp-json/combo-store/v2/create_shipping_method", {
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
              if (onOrderCreated) {
                onOrderCreated(res);
              }
              addNotification({ type: 'success', title: 'Shipping method added', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Could not add shipping method', content: message })
            }



            setTimeout(() => {
              setloading(false)

            }, 500);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
        setloading(false)
      });

  }


  var statusArgs = { "1": { "label": "Active", "value": "1" }, "0": { "label": "Inactive", "value": "0" } }
  var typeArgs = { "free_shipping": { "label": "Free Shipping", "value": "free_shipping" }, "flat_rate": { "label": "Flat rate", "value": "flat_rate" }, "local_pickup": { "label": "Local Pickup", "value": "local_pickup" } }





  useEffect(() => {

    /* `zoneCountries.length` threw whenever the zone had not loaded yet. */
    if (zoneCountries?.length == 1) {


      var country = zoneCountries[0];

      var selectedStates = states[country] ? states[country] : {};


      var statesListX = {};

      Object.entries(selectedStates)?.map(args => {

        var index = args[0]
        var name = args[1]

        statesListX[index] = { label: name, value: index, }

      })




      setstatesList(statesListX)

    }

  }, [zoneCountries]);


  const chosenStates = orderData?.states || [];
  const isFreeShipping = orderData?.type == 'free_shipping';


  return (
    <div className="flex w-full flex-col gap-4 lg:w-[760px]">

      <WidgetWrapper title="Method Details">

        <div className="flex flex-col">

          <Row label={("Method Name")}>
            <input type="text" className={FIELD} value={orderData?.name || ""} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, name: value })
            }} />
          </Row>

          <Row label={("Description")}>
            <textarea className={`${FIELD} min-h-24`} value={orderData?.description || ""} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, description: value })
            }} />
          </Row>

          <Row label={("Method Type")}>
            <DropDown multiple={false} value={orderData?.type} options={typeArgs} label={`Method Type`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, type: args?.value })
            }} />
          </Row>

          <Row label={("Amount")} hint={isFreeShipping ? ("Free shipping ignores this amount.") : null}>
            <input type="text" className={`${FIELD} tabular-nums`} value={orderData?.amount || ""} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, amount: value })
            }} />
          </Row>

          <Row label={("Status")}>
            <DropDown multiple={false} value={orderData?.status} options={statusArgs} label={`Status`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, status: args?.value })
            }} />
          </Row>

          <Row
            label={("States")}
            hint={zoneCountries?.length == 1 ? null : ("States are listed once the zone covers exactly one country.")}>

            <DropDown multiple={false} value={null} options={statesList} label={`Choose States`} onOptionsChoose={(args) => {

              /* Copied rather than pushed into, so the state array is not
                 mutated in place, and the same state cannot be added twice. */
              var statesX = [...(orderData?.states || [])];

              if (args?.value && !statesX.includes(args.value)) {
                statesX.push(args.value)
              }

              setorderData({ ...orderData, states: statesX })
            }} />

            {chosenStates.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">

                {chosenStates.map((item, index) => {
                  return (
                    <span key={`${item}-${index}`} className={CHIP}>

                      {/* Read as `statesList[item].label` before, which threw on
                          any render before the lookup had been built. */}
                      <span className="whitespace-nowrap">{statesList?.[item]?.label || item}</span>

                      <span className={CHIP_CLEAR} onClick={ev => {

                        var statesX = [...chosenStates];

                        statesX.splice(index, 1);

                        setorderData({ ...orderData, states: statesX })


                      }}><IconX size={13} /></span>

                    </span>
                  )
                })}

              </div>
            )}

            {chosenStates.length === 0 && (
              <p className="mt-3 text-xs text-gray-400">{("Applies to the whole zone unless you pick states.")}</p>
            )}

          </Row>

        </div>

      </WidgetWrapper>


      {/* The action sits under the form it submits, and the raw
          `JSON.stringify(orderData)` dump that used to print above it is gone. */}
      <div className="flex flex-wrap items-center gap-3">

        <div className={PRIMARY_BUTTON}

          onClick={ev => {
            create_shipping_method()
          }}
        ><IconPlus size={16} /> {("Add Shipping Method")}</div>

        {loading && (
          <span className="inline-flex items-center gap-2 text-xs text-amber-600">
            <Spinner size={14} /> {("Please wait...")}
          </span>
        )}

      </div>


    </div>

  );
};

export default ShippingMethodCreate;
