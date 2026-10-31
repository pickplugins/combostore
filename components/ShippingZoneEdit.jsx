"use client";
import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";

import countries from '../lib/Countries';

import { useCounterStore } from '../store/useCounterStore'
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import DropDown from '../components/DropDown';
import ShippingMethods from '../components/ShippingMethods';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
  Field styling. The base control rules in globals.css are commented out, so
  an input with no classes renders as a browser default - which is why the
  fields here carried one-off `!shadow-none !border-2` strings.
*/
const FIELD =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition-colors hover:border-gray-400";

const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer w-max";

const BADGE_BASE =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset";

const STATUS_BADGES = {
  "1": { label: "Active", classes: "bg-green-50 text-green-700 ring-green-200" },
  "0": { label: "Inactive", classes: "bg-gray-100 text-gray-600 ring-gray-200" },
};

/*
  One label + control row. The five of these used to repeat the same
  border/flex/width string by hand, and stacked badly under `lg` because the
  label kept its fixed width while the control wrapped beneath it.
*/
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

const ShippingZoneEdit = (props) => {

  const { token } = useCounterStore()

  var zoneId = props?.id

  var [currentObject, setcurrentObject] = useState({ countries: [], settings: {}, status: '' });

  var [loading, setloading] = useState(false);
  var [countriesList, setcountriesList] = useState({});



  function get_shipping_zone() {




    var postData = {
      id: zoneId,
    };
    postData = JSON.stringify(postData);
    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_shipping_zone",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`

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
            var zone = res?.zone;




            // var settingsX = zone?.settings.length > 0 ? JSON.parse(zone?.settings) : []

            // zone.settings = settingsX
            setloading(false);
            setcurrentObject(zone)



            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
        setloading(false);
      });
  }



  function update_shipping_zone() {


    //var postData = currentObject;

    currentObject.id = zoneId;



    var postData = JSON.stringify(currentObject);


    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/update_shipping_zone",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`

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


            setloading(false);
            //setcurrentObject(res)



            // setTimeout(() => {
            // 	setaddTask({ ...addTask, title: "", success: null, errors: null })

            // }, 3000);
          });
        }
      })
      .catch((_error) => {
        //this.saveAsStatus = 'error';
        // handle the error
        setloading(false);
      });
  }


  var statusArgs = { "1": { "label": "Active", "value": "1" }, "0": { "label": "Inactive", "value": "0" } }
  var regionArgs = { "all": { "label": "Whole World", "value": "all" }, "include": { "label": "Include", "value": "include" }, "exclude": { "label": "Exclude", "value": "exclude" } }



  useEffect(() => {
    get_shipping_zone();

  }, []);



  useEffect(() => {

    var items = {};

    countries.map(country => {
      items[country.code2] = { label: country.name, value: country.code2, states: country.states }
    })

    setcountriesList(items)

  }, [countries]);


  const statusBadge = STATUS_BADGES[currentObject?.status];
  const chosenCountries = currentObject?.countries || [];


  return (
    <div className="mx-auto flex w-full max-w-[860px] flex-col gap-4 px-4 py-6 sm:px-6">

      {/*
        Header. The zone's name was buried in an "Edit:" label beside the
        Update button, and the whole panel sat in a fixed 800px column that
        overflowed anything narrower - a drawer or a phone.
      */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-sm bg-white px-5 py-4 shadow-sm">

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-2">

            <h2 className="truncate text-lg font-semibold text-gray-900">
              {currentObject?.name || ("Shipping zone")}
            </h2>

            <span className="font-mono text-xs text-gray-400">#{zoneId}</span>

            {statusBadge && (
              <span className={`${BADGE_BASE} ${statusBadge.classes}`}>{statusBadge.label}</span>
            )}

          </div>

          {currentObject?.description && (
            <p className="mt-0.5 truncate text-xs text-gray-500">{currentObject.description}</p>
          )}

        </div>

        <div className="flex items-center gap-3">

          {loading && (
            <span className="inline-flex items-center gap-2 text-xs text-amber-600">
              <Spinner size={14} /> {("Please wait...")}
            </span>
          )}

          <div className={PRIMARY_BUTTON}
            onClick={ev => {
              update_shipping_zone()
            }}
          >{("Update")}</div>

        </div>

      </div>


      {/* {JSON.stringify(currentObject?.addons)} */}

      <WidgetWrapper title="General Info">

        <div className="flex flex-col">

          <Row label={("Name")}>
            <input
              type="text"
              className={FIELD}
              value={currentObject?.name || ""}
              onChange={(ev) => {
                var value = ev.target.value;

                setcurrentObject({ ...currentObject, name: value, });
              }}
            />
          </Row>

          <Row label={("Description")}>
            <textarea
              className={`${FIELD} min-h-24`}
              value={currentObject?.description || ""}
              onChange={(ev) => {
                var value = ev.target.value;
                setcurrentObject({ ...currentObject, description: value });
              }}
            />
          </Row>

          <Row label={("Region")} hint={("Whole world, or only the countries you include or exclude below.")}>
            <DropDown multiple={false} value={currentObject?.region} options={regionArgs} label={`Region`} onOptionsChoose={(args) => {
              setcurrentObject({ ...currentObject, region: args?.value })
            }} />
          </Row>

          <Row label={("Status")}>
            <DropDown multiple={false} value={currentObject?.status} options={statusArgs} label={`Status`} onOptionsChoose={(args) => {
              setcurrentObject({ ...currentObject, status: args?.value })
            }} />
          </Row>

          <Row label={("Countries")}>

            <DropDown multiple={false} value={null} options={countriesList} label={`Choose countries`} onOptionsChoose={(args) => {

              /*
                This read the list off `currentObject.settings.countries`,
                which the initial state leaves undefined, so the first pick
                threw on `push` instead of adding a country. It also pushed
                into the state array in place.
              */
              var countriesX = [...(currentObject?.countries || [])];

              if (args?.value && !countriesX.includes(args.value)) {
                countriesX.push(args.value)
              }

              setcurrentObject({ ...currentObject, countries: countriesX })
            }} />

            {chosenCountries.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">

                {chosenCountries.map((item, index) => {
                  return (
                    <span key={`${item}-${index}`} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 py-1 pl-2.5 pr-1 text-xs text-gray-700">

                      {/* The label was read as `countriesList[item].label`, which
                          threw on the render before the list had been built. */}
                      <span className="whitespace-nowrap">{countriesList?.[item]?.label || item}</span>

                      <span className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-100 hover:text-red-600" onClick={ev => {

                        var countriesX = [...chosenCountries];

                        countriesX.splice(index, 1);

                        setcurrentObject({ ...currentObject, countries: countriesX })


                      }}><IconX size={13} /></span>

                    </span>
                  )
                })}

              </div>
            )}

            {chosenCountries.length === 0 && (
              <p className="mt-3 text-xs text-gray-400">{("No countries chosen yet.")}</p>
            )}

          </Row>

        </div>

      </WidgetWrapper>


      <WidgetWrapper title="Shipping Methods">


        <ShippingMethods zoneId={zoneId} zoneCountries={currentObject?.countries} />
      </WidgetWrapper>




    </div>

  );
};

export default ShippingZoneEdit;
