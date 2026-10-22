"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconSquare, IconMapPin, IconTrash, IconTrolley, IconBasketPlus, IconFilter2Edit, IconRosetteDiscountCheck, IconX, IconFilter2Check, IconPhoneCall, IconStarFilled, IconStar, IconCopy, IconMailForward, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconMail, IconPhone, IconAddressBook, IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import DropDown from '../components/DropDown';


import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';
import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import countries from '../lib/Countries';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;





const ShippingCreate = (props) => {

  var onOrderCreated = props?.onOrderCreated
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, paymentGateways, orderStatusArgs, paymentStatusArgs } = useCounterStore()

  // var orderId = props?.order_id
  var [loading, setloading] = useState(false);

  var [orderData, setorderData] = useState({ countries: [], settings: {}, status: '' });
  var [countriesList, setcountriesList] = useState({});



  function create_shipping_zone() {

    setloading(true)




    var postData = JSON.stringify({ ...orderData });

    fetch(serverUrl + "wp-json/combo-store/v2/create_shipping_zone", {
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
              onOrderCreated(res);
              addNotification({ type: 'success', title: 'Zone created', content: message })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Zone creation failed', content: message })
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
      });

  }







  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));

  var statusArgs = { "1": { "label": "Active", "value": "1" }, "0": { "label": "Inactive", "value": "0" } }
  var regionArgs = { "all": { "label": "Whole World", "value": "all" }, "include": { "label": "Include", "value": "include" }, "exclude": { "label": "Exclude", "value": "exclude" } }



  useEffect(() => {

    var items = {};

    countries.map(country => {
      items[country.code2] = { label: country.name, value: country.code2, states: country.states }
    })

    setcountriesList(items)

  }, [countries]);

  return (
    <div className="flex flex-col gap-5">



      <div className='flex flex-wrap gap-3 justify-between items-center'>



        <div className='flex gap-2 items-center'>
          {loading && (

            <Spinner />

          )}


          <div className='p-2  rounded-sm cursor-pointer px-4 bg-[#1b0e9f] text-white'

            onClick={ev => {
              create_shipping_zone()
            }}
          >Create Zone</div>






        </div>
      </div>


      {JSON.stringify(orderData)}




      <WidgetWrapper title="Zone Details">


        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Zone Name")}</div>


          <div className="">
            <input type="text" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.name} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, name: value })
            }} />

          </div>

        </div>
        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Description")}</div>


          <div className="">
            <textarea type="text" className="lg:w-auto w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0" value={orderData?.description} onChange={ev => {
              var value = ev.target.value;
              setorderData({ ...orderData, description: value })
            }} />

          </div>

        </div>
        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Region")}</div>


          <div className="">
            <DropDown multiple={false} value={orderData?.region} options={regionArgs} label={`Region`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, region: args?.value })
            }} />

          </div>

        </div>
        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Status")}</div>


          <div className="">
            <DropDown multiple={false} value={orderData?.status} options={statusArgs} label={`Status`} onOptionsChoose={(args) => {
              setorderData({ ...orderData, status: args?.value })
            }} />

          </div>

        </div>
        <div className="border-0 border-b border-solid  border-gray-200 lg:flex flex-wrap gap-3 py-3 items-center">
          <div className="  py-2 lg:w-60 font-bold">{("Countries")}</div>


          <div className="">
            <DropDown multiple={false} value={null} options={countriesList} label={`Choose countries`} onOptionsChoose={(args) => {

              console.log(args?.value);

              var countriesX = orderData?.countries;
              countriesX.push(args.value)


              setorderData({ ...orderData, countries: countriesX })
            }} />



          </div>

          <div className="flex items-center gap-1 my-5 text-sm italic">


            {orderData?.countries?.map((item, index) => {
              return (
                <div key={index} className="border-2 border-gray-400 pl-2 rounded-sm flex gap-2 items-center">
                  <div>{countriesList[item].label}</div>
                  <div className="bg-red-400  hover:bg-red-500 p-2 cursor-pointer text-white" onClick={ev => {

                    var countriesX = orderData?.countries;

                    countriesX.splice(index, 1);

                    setorderData({ ...orderData, countries: countriesX })


                  }}><IconTrash size={16} /></div>
                </div>
              )
            })}

          </div>

        </div>








      </WidgetWrapper>





    </div>

  );
};

export default ShippingCreate;