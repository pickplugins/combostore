"use client";
import { useState, useEffect, Component } from "react";
import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import countries from '../lib/Countries';

import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';
import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import DropDown from '../components/DropDown';
import ShippingMethods from '../components/ShippingMethods';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





const ShippingZoneEdit = (props) => {
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, orderStatusArgs, paymentStatusArgs, privacyMode } = useCounterStore()

  var zoneId = props?.id
  var [loading, setloading] = useState(false);


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


            console.log(res);


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


  return (
    <div>

      <div className="flex-1 my-10">

        <div className="flex gap-5 justify-center">

          <div className="flex flex-col gap-4 w-[800px]">


            <div className="bg-white  rounded-sm px-5 py-3 flex justify-between items-center">

              {loading && (
                <div className="flex gap-2 text-amber-600">
                  <div className="animate-spin"><IconFidgetSpinner /> </div>
                  <div>Please wait...</div>

                </div>
              )}
              {!loading && (
                <div className="flex gap-2 justify-between items-center">

                  <div className="text-bold">Edit:</div> <div>{currentObject?.name}</div>

                </div>
              )}





              <div className="p-2 hover:bg-gray-400 rounded-sm cursor-pointer px-4 bg-gray-600 text-white"
                onClick={ev => {
                  update_shipping_zone()
                }}
              >Update</div>

            </div>


            {/* {JSON.stringify(currentObject?.addons)} */}

            <div className="bg-white  rounded-sm ">

              <div className="px-5 py-3 text-xl border-b border-solid border-gray-300">General Info</div>

              <div className="p-4 flex flex-col  gap-4">









                <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
                  <div className="  py-2 lg:w-60 font-bold">{("Name")}</div>


                  <div className="">
                    <input
                      type="text"
                      className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
                      value={currentObject?.name}
                      onChange={(ev) => {
                        var value = ev.target.value;

                        setcurrentObject({ ...currentObject, name: value, });
                      }}
                    />

                  </div>

                </div>
                <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
                  <div className="  py-2 lg:w-60 font-bold">{("Description")}</div>


                  <div className="">
                    <textarea
                      type="text"
                      className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
                      value={currentObject?.description}
                      onChange={(ev) => {
                        var value = ev.target.value;
                        setcurrentObject({ ...currentObject, description: value });
                      }}
                    />

                  </div>

                </div>
                <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
                  <div className="  py-2 lg:w-60 font-bold">{("Region")}</div>


                  <div className="">
                    <DropDown multiple={false} value={currentObject?.region} options={regionArgs} label={`Region`} onOptionsChoose={(args) => {
                      setcurrentObject({ ...currentObject, region: args?.value })
                    }} />

                  </div>

                </div>
                <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
                  <div className="  py-2 lg:w-60 font-bold">{("Status")}</div>


                  <div className="">
                    <DropDown multiple={false} value={currentObject?.status} options={statusArgs} label={`Status`} onOptionsChoose={(args) => {
                      setcurrentObject({ ...currentObject, status: args?.value })
                    }} />

                  </div>

                </div>
                <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
                  <div className="  py-2 lg:w-60 font-bold">{("Countries")}</div>


                  <div className="flex flex-col gap-3">
                    <DropDown multiple={false} value={null} options={countriesList} label={`Choose countries`} onOptionsChoose={(args) => {

                      console.log(args?.value);

                      var settingsX = currentObject?.settings;
                      var countriesX = settingsX?.countries;
                      countriesX.push(args.value)

                      setcurrentObject({ ...currentObject, countries: countriesX })
                    }} />



                  </div>



                </div>

                <div className="flex items-center gap-2 my-5 text-sm italic">


                  {currentObject?.countries?.map((item, index) => {
                    return (
                      <div key={index} className="border-2 border-gray-400 pl-2 rounded-sm flex gap-2 items-center" >
                        <div>{countriesList[item].label}</div>
                        <div className="bg-red-400  hover:bg-red-500 p-2 cursor-pointer text-white" onClick={ev => {

                          var countriesX = currentObject?.countries;

                          countriesX.splice(index, 1);

                          setcurrentObject({ ...currentObject, countries: countriesX })


                        }}><IconTrash size={16} /></div>



                      </div>
                    )
                  })}

                </div>





              </div>
            </div>


            <WidgetWrapper title="Shipping Methods
">


              <ShippingMethods zoneId={zoneId} zoneCountries={currentObject?.countries} />
            </WidgetWrapper>






          </div>



        </div>


      </div>



    </div>

  );
};

export default ShippingZoneEdit;