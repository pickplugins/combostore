"use client";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconPlug, IconTriangleSquareCircle, IconCreditCardPay, IconUserPentagon, IconMailSpark, IconBuildingStore, IconShip, IconStar, IconCashRegister, IconTrash, IconKey, IconTruckDelivery, IconSquareRoundedCheck, IconSquareRounded, IconDeviceFloppy, IconRestore, IconAlertTriangle } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { APIProvider, Map, useMapsLibrary, useMap } from '@vis.gl/react-google-maps';


import { useCounterStore } from '../store/useCounterStore'
import { useUtilsStore } from '../store/useUtilsStore';
import LocationPicker from '../components/LocationPicker';
import GoogleMapDirections from '../components/GoogleMapDirections';
import PopoverButton from '../components/PopoverButton';
import Spinner from '../components/Spinner';
import WidgetWrapper from '../components/WidgetWrapper';
import UsersPicker from '../components/shop-elements/UsersPicker';
import ProductsPicker from '../components/shop-elements/ProductsPicker';
import Tabs from '../components/Tabs';
import Tab from '../components/Tab';
import ToggleContent from '../components/ToggleContent';
import GalleryPicker from "../components/shop-elements/GalleryPicker";
import { getStripeConfig } from "../lib/stripe";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


/* Card shell for every settings section. `settings-card` carries the scoped
   form-control rules from globals.css; the rest reshapes WidgetWrapper's own
   padding and heading from the outside, since that component is shared with
   the dashboard and the page builder. */
const CARD_CLASSES =
  "settings-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:last-child]:!p-5 [&>div:last-child]:!pt-2 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const PRIMARY_BUTTON =
  "inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4]";

const GHOST_BUTTON =
  "inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-red-300 hover:!bg-red-50 hover:!text-red-600";

const DANGER_BUTTON =
  "inline-flex items-center !rounded-md !border-0 !bg-red-600 !px-2.5 !py-1 !text-xs !font-semibold !text-white !shadow-none transition-colors hover:!bg-red-700";

const CANCEL_BUTTON =
  "inline-flex items-center !rounded-md !border !border-gray-300 !bg-white !px-2.5 !py-1 !text-xs !font-medium !text-gray-600 !shadow-none transition-colors hover:!bg-gray-100 hover:!text-gray-900";



const SettingsGlobal = (props) => {
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, paymentGateways, couriersPrams, setSettings, currency } = useCounterStore()

  // var orderId = props?.order_id
  var [loading, setloading] = useState(false);

  // Reset clears every field, so it asks first instead of firing on one click.
  var [confirmReset, setconfirmReset] = useState(false);

  var [settingsData, setsettingsData] = useState({ couriers: {}, apiKeys: {}, socialLinks: {}, emailTemplates: {}, smsTemplates: {}, productAttributes: [], shippingClasses: [], paymentGateways: { enable: false, accounts: [] } });




  useEffect(() => {
    get_settings();
  }, []);


  /*
    Stripe's secret key lives in the server env, not in these settings - the
    storefront reads the settings blob through a public endpoint, so a secret
    put here would be served to anyone who asked for it. That leaves the
    dashboard unable to show the key, and with no way to tell whether one
    exists either, so it asks the server: `enable` here and a working key are
    two different things, and a store that has only the first would switch
    cards on and hear about it from its buyers.
  */
  var [stripeStatus, setstripeStatus] = useState(null);

  useEffect(() => {

    let cancelled = false;

    getStripeConfig()
      .then(config => {
        if (!cancelled) {
          setstripeStatus(config);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setstripeStatus(null);
        }
      });

    return () => {
      cancelled = true;
    };

  }, []);


  // An armed confirmation disarms itself, so a stray click cannot sit waiting.
  useEffect(() => {

    if (!confirmReset) return;

    const timer = setTimeout(() => {
      setconfirmReset(false);
    }, 8000);

    return () => clearTimeout(timer);

  }, [confirmReset]);



  var apiKeysPrams = {

    "apiToken": {
      "id": 'apiToken',
      "enable": false,
      "label": "API Token",
      args: {
        "key": "",
      }
    },
    "googleMap": {
      "id": 'googleMap',
      "enable": false,
      "label": "Google Map",
      args: {
        "key": "",
        "map_id": ""
      }
    },
    "facebookPixel": {
      "id": 'facebookPixel',
      "enable": false,
      "label": "Facebook Pixel",
      args: {
        "pixel_id": "",
        "events": [],
      }
    },
    "tikTokPixel": {
      "id": 'tikTokPixel',
      "enable": false,
      "label": "TikTok Pixel",
      args: {
        "pixel_id": "",
        "events": [],
      }
    },
    "googleAnalytics": {
      "id": 'googleAnalytics',
      "enable": false,
      "label": "Google Analytics",
      args: {
        "measurement_id": "",
      }
    },
    "microsoftClarity": {
      "id": 'microsoftClarity',
      "enable": false,
      "label": "Microsoft Clarity Analytics",
      args: {
        "project_id": "",
      }
    },
    "smtp ": {
      "id": 'smtp',
      "enable": false,
      "label": "SMTP",
      "comingSoon": true,
      args: {
        "username": "",
        "password": "",
        "host": "",
        "port": "",
        "ssl": "",
      }
    },



    "reCAPTCHA ": {
      "id": 'reCAPTCHA',
      "enable": false,
      "label": "reCAPTCHA ",
      "comingSoon": true,
      args: {
        "sitekey": "",
      }
    },
    // "googleLogin": {
    //         "id": 'loginRequired',
    //       "enable": false,
    // "label": "Google Login",
    //   args: {
    //     "client_id": "",
    //   }
    // },


    "anthropic": {
      "id": 'anthropic',
      "enable": false,
      "label": "Anthropic",
      args: {
        "key": "",
        "model": ""
      }
    },
    "gemini": {
      "id": 'gemini',
      "enable": false,
      "comingSoon": true,

      "label": "Gemini",
      args: {
        "key": "",
        "model": ""
      }
    },
    "pollinations": {
      "id": 'pollinations',
      "enable": false,
      "comingSoon": true,

      "label": "Pollinations",
      args: {
        "key": "",
        "model": ""
      }
    },
    "bdcourier": {
      "id": 'bdcourier',
      "enable": false,
      "comingSoon": true,

      "label": "BD Courier(bdcourier.com)",
      args: {
        "key": "",
      }
    },
    "fraudchecker": {
      "id": 'fraudchecker',
      "enable": false,
      "label": "Fraud Checker(fraudchecker.link)",
      "comingSoon": true,
      args: {
        "key": "",
      }
    },
    "bulksmsbd": {
      "id": 'bulksmsbd',
      "enable": false,
      "label": "bulksmsbd.net",
      "comingSoon": true,
      args: {
        "key": "",
        "senderid": "",
      }
    },



  }


  var geminiModelxPrams = [
    {
      "name": "Gemini 3 Flash (Preview)",
      "model_id": "gemini-3.0-flash-preview",
      "tier": "Free (rate limited)",
      "type": "Multimodal",
      "status": "Preview"
    },
    {
      "name": "Gemini 2.5 Flash",
      "model_id": "gemini-2.5-flash",
      "tier": "Free",
      "type": "Balanced reasoning + speed",
      "status": "Stable"
    },
    {
      "name": "Gemini 2.5 Flash-Lite",
      "model_id": "gemini-2.5-flash-lite",
      "tier": "Free",
      "type": "Lightweight / High quota",
      "status": "Stable"
    },
    {
      "name": "Gemini 2.0 Flash",
      "model_id": "gemini-2.0-flash",
      "tier": "Free",
      "type": "Fast production model",
      "status": "Stable"
    },
    {
      "name": "Gemini 2.5 Pro",
      "model_id": "gemini-2.5-pro",
      "tier": "Limited Free Tier",
      "type": "Advanced reasoning",
      "status": "Stable"
    },
    {
      "name": "Gemini 2.0 Pro (Experimental)",
      "model_id": "gemini-2.0-pro-exp",
      "tier": "Free (limited access)",
      "type": "Advanced reasoning",
      "status": "Experimental"
    },
    {
      "name": "Gemini 2.0 Flash Thinking (Experimental)",
      "model_id": "gemini-2.0-flash-thinking-exp",
      "tier": "Free (preview)",
      "type": "Enhanced reasoning",
      "status": "Experimental"
    }
  ]

  var pollinationsModelPrams = [
    {
      "name": "Flux",
      "model_id": "flux",
      "type": "Image Generation",
      "access": "Free",
      "description": "High-quality image generation model"
    },
    {
      "name": "GPT Image Large",
      "model_id": "gptimage-large",
      "type": "Image Generation",
      "access": "Free (basic usage)",
      "description": "Large Image model with good detail"
    },
    {
      "name": "Seedream",
      "model_id": "seedream",
      "type": "Image Generation",
      "access": "Free",
      "description": "Creative image generation model"
    },
    {
      "name": "Kontext",
      "model_id": "kontext",
      "type": "Image Generation",
      "access": "Free",
      "description": "Context-aware image generator"
    },
    {
      "name": "GPT-5",
      "model_id": "gpt-5",
      "type": "Text Generation",
      "access": "Free",
      "description": "General advanced text model"
    },
    {
      "name": "Claude",
      "model_id": "claude",
      "type": "Text Generation",
      "access": "Free",
      "description": "Conversational & analysis AI model"
    },
    {
      "name": "Gemini",
      "model_id": "gemini",
      "type": "Text Generation",
      "access": "Free",
      "description": "Google Gemini with agent tools"
    },
    {
      "name": "DeepSeek V3.2",
      "model_id": "deepseek-v3.2",
      "type": "Text Generation",
      "access": "Free",
      "description": "Smarter reasoning model"
    },
    {
      "name": "Qwen3-Coder-30B",
      "model_id": "qwen3-coder-30b",
      "type": "Text Generation",
      "access": "Free",
      "description": "Advanced code generation model"
    },
    {
      "name": "Seedance",
      "model_id": "seedance",
      "type": "Video Generation",
      "access": "Free",
      "description": "Text-to-video generation model"
    },
    {
      "name": "Veo (Alpha)",
      "model_id": "veo",
      "type": "Video Generation",
      "access": "Free (alpha)",
      "description": "Video generation model in alpha"
    },
    {
      "name": "OpenAI Audio",
      "model_id": "openai-audio",
      "type": "Audio (TTS/STT)",
      "access": "Free",
      "description": "Text-to-speech and speech-to-text"
    }
  ]















  var productAttributesPrams = {
    color: {
      "label": "Color",
      "slug": "color",
      "args": {
        "public": true,
        "publicly_queryable": true,
        "hierarchical": true,
        "show_in_rest": true,
      },
      "conditions": [
        {
          "post_type": ["product"],
          "categories": [],
        }
      ],
    },
    size: {
      "label": "Size",
      "slug": "size",
      "args": {
        "public": true,
        "publicly_queryable": true,
        "hierarchical": true,
        "show_in_rest": true,
      },
      "conditions": [
        {
          "post_type": ["product"],
          "categories": [],
        }
      ],
    },
    material: {
      "label": "Material",
      "slug": "material",
      "args": {
        "public": true,
        "publicly_queryable": true,
        "hierarchical": true,
        "show_in_rest": true,
      },
      "conditions": [
        {
          "post_type": ["product"],
          "categories": [],
        }
      ],
    },
    brand: {
      "label": "Brand",
      "slug": "brand",
      "args": {
        "public": true,
        "publicly_queryable": true,
        "hierarchical": true,
        "show_in_rest": true,
      },
      "conditions": [
        {
          "post_type": ["product"],
          "categories": [],
        }
      ],
    },
  }



  var rolesPrams = {
    "administrator": {
      "label": "Administrator",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "editor": {
      "label": "Editor",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "author": {
      "label": "Author",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "contributor": {
      "label": "Contributor",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "subscriber": {
      "label": "Subscriber",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "affiliate": {
      "label": "Affiliate",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "customer": {
      "label": "Customer",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "supplier": {
      "label": "Supplier",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "seller": {
      "label": "Seller",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },
    "rider": {
      "label": "Rider",
      args: {
        'read': true,
        'edit_posts': true,
        'publish_posts': true,
        'manage_options': true,
      }
    },








  }











  var socialLinksPrams = {
    "facebook": {
      "url": "",
    },
    "youtube": {
      "url": "",
    },
    "instagram": {
      "url": "",
    },
    "twitter": {
      "url": "",
    },
    "linkedin": {
      "url": "",
    },
    "tiktok": {
      "url": "",
    },
    "messenger": {
      "url": "",
    },
  }






  var emailTemplatesPrams = {
    "order_confirmation": {
      "id": 'order_confirmation',
      "enable": false,
      "subject": "Order Confirmation",
      "body": "Order Confirmation",
    },
    "order_shipped": {
      "id": 'order_shipped',
      "enable": false,
      "subject": "Order Shipped",
      "body": "Order Shipped",
    },
    "order_delivered": {
      "id": 'order_delivered',
      "enable": false,
      "subject": "Order Delivered",
      "body": "Order Delivered",
    },
    "order_cancelled": {
      "id": 'order_cancelled',
      "enable": false,
      "subject": "Order Cancelled",
      "body": "Order Cancelled",
    },
    "order_refunded": {
      "id": 'order_refunded',
      "enable": false,
      "subject": "Order Refunded",
      "body": "Order Refunded",
    },
    "low_stock_alert": {
      "id": 'low_stock_alert',
      "enable": false,
      "subject": "Low Stock Alert",
      "body": "Low Stock Alert",
    },

  }

  var smsTemplatesPrams = {
    "order_confirmation": {
      "id": 'order_confirmation',
      "enable": false,
      "subject": "Order Confirmation",
      "body": "Order Confirmation",
    },
    "order_shipped": {
      "id": 'order_shipped',

      "enable": false,
      "subject": "Order Shipped",
      "body": "Order Shipped",
    },
    "order_delivered": {
      "id": 'order_delivered',

      "enable": false,
      "subject": "Order Delivered",
      "body": "Order Delivered",
    },
    "order_cancelled": {
      "id": 'order_cancelled',

      "enable": false,
      "subject": "Order Cancelled",
      "body": "Order Cancelled",
    },
    "order_refunded": {
      "id": 'order_refunded',

      "enable": false,
      "subject": "Order Refunded",
      "body": "Order Refunded",
    },
    "low_stock_alert": {
      "id": 'low_stock_alert',

      "enable": false,
      "subject": "Low Stock Alert",
      "body": "Low Stock Alert",
    },
    "send_login_otp": {
      "id": 'send_login_otp',
      "enable": false,
      "subject": "Login OTP",
      "body": "Here is your login {OTP}",
    },

  }







  function get_settings() {



    // if (!token) {
    //   throw new Error("No token found");
    // }



    setloading(true);

    var postData = {
    };
    postData = JSON.stringify(postData);



    setloading(true);
    fetch(
      serverUrl + "wp-json/combo-store/v2/get_settings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify({}),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Token validation failed");
        }

        if (response.ok && response.status < 400) {
          response.json().then((res) => {



            // var errors = res?.errors;
            // var success = res?.success;


            setloading(false);
            setsettingsData({ ...settingsData, ...res })



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

  function update_settings() {

    setloading(true)


    /*
      `fraudCheck` belongs to the Fraud Checker extension now, and this screen
      must not post it.

      It would otherwise still go out on every save: get_settings merges the
      server blob in with `{ ...settingsData, ...res }`, so the key is in this
      state whether or not anything here renders it, and this posts the state
      whole. update_settings merges what it is given, so a stale copy held by a
      tab opened before the extension was edited would silently overwrite what
      the extension wrote - no error, no conflict, the settings just revert.

      Whoever owns a key is the only thing that posts it. Another extension
      that stores settings this way needs the same line.
    */
    var { fraudCheck, ...settingsOwnedHere } = settingsData;

    var postData = JSON.stringify(settingsOwnedHere);

    fetch(serverUrl + "wp-json/combo-store/v2/update_settings", {
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
              addNotification({ type: 'success', title: 'Settings update', content: message })

              /*
                This screen edits a local copy, so without this the global
                `settings` kept whatever was fetched at login: saving a new
                logo or Google Maps key left every other screen on the old
                value until a full reload.
              */
              setSettings(settingsData)

              /*
                The Stripe panel reports what the server is actually using,
                which has just changed. Asked again rather than assumed from
                what was typed - and with `fresh`, because the server caches
                the settings it reads. A key left blank so the env takes over,
                or one WordPress did not store, then shows as what is really
                in force.
              */
              getStripeConfig({ fresh: true }).then(setstripeStatus).catch(() => { })
            }
            if (status == 'failed') {
              addNotification({ type: 'error', title: 'Settings update failed', content: message })
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

  function onPickFeaturedImage(item) {


    var site_logo = { id: item.id, title: item.title, src: item.src }
    // setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });
    setsettingsData({ ...settingsData, site_logo: site_logo })
  }
  function onPickFaviconImage(item) {


    var favicon = { id: item.id, title: item.title, src: item.src }
    // setcurrentObject({ ...currentObject, post_thumbnail: post_thumbnail });
    setsettingsData({ ...settingsData, favicon: favicon })
  }




  const requiredRoles = ["administrator", "rider", ""];
  const hasAccess = requiredRoles.some(role => userDataX?.roles?.includes(role));

  function PaymentGatewaysBankItemTitle({ item, index }) {



    return (

      <div className="flex items-center justify-between w-full">



        <div>{item?.bankName}</div>
        <div onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();


          setsettingsData(prev => {
            const updatedAccounts = [...prev.paymentGateways?.bank_transfer.accounts];



            updatedAccounts.splice(index, 1);
            return {
              ...prev,
              paymentGateways: { ...prev.paymentGateways, bank_transfer: { ...prev.paymentGateways?.bank_transfer, accounts: updatedAccounts } }
            };
          });

          // setsettingsData(prev => {
          //   const remainingPaymentGateways = prev.paymentGateways.accounts.filter((_, i) => i !== index);
          //   return {
          //     ...prev,
          //     paymentGateways: { ...prev.paymentGateways, accounts: remainingPaymentGateways }
          //   }
          // })


        }}>
          <div className="bg-red-400 hover:bg-red-500 text-white rounded-sm cursor-pointer p-2">
            <IconTrash size={18} />
          </div>

        </div>
      </div>

    );
  }

  function ShippingClassesItemTitle({ item, index }) {
    return (

      <div className="flex items-center justify-between w-full">
        <div>{item?.name}</div>
        <div onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();
          setsettingsData(prev => {
            const remainingShippingClasses = prev.shippingClasses.filter((_, i) => i !== index);
            return {
              ...prev,
              shippingClasses: remainingShippingClasses
            }
          })


        }}>
          <div className="bg-red-400 hover:bg-red-500 text-white rounded-sm cursor-pointer p-2">
            <IconTrash size={18} />
          </div>

        </div>
      </div>

    );
  }


  function PaymentGatewaysItemTitle({ item, enable, index }) {


    var comingSoon = item?.comingSoon

    return (

      <div className="flex items-center gap-3 w-full justify-between">
        <div className="flex items-center gap-2">
          <div>{item?.label}</div>
          {item?.comingSoon && (
            <div className="text-sm bg-yellow-400  px-2 rounded-sm text-gray-500 text-xs py-1">
              {item?.comingSoon ? "Coming Soon" : ""}
            </div>
          )}
        </div>

        {enable && (
          <div className="" onClick={ev => {

            ev.preventDefault()
            ev.stopPropagation()


            setsettingsData(prev => ({
              ...prev,
              paymentGateways: {
                ...prev.paymentGateways,
                [item.id]: {
                  ...prev.paymentGateways[item.id],
                  ['enable']: !enable
                }
              }
            }));

          }}>
            <IconSquareRoundedCheck size={20} />
          </div>
        )}
        {!enable && (
          <div className="" onClick={ev => {


            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              paymentGateways: {
                ...prev.paymentGateways,
                [item.id]: {
                  ...prev.paymentGateways[item.id],
                  ['enable']: !enable
                }
              }
            }));

          }}>
            <IconSquareRounded size={20} />
          </div>
        )}


      </div>

    );
  }
  function SmsItemTitle({ item, enable, index }) {
    return (

      <div className="flex items-center gap-3 w-full justify-between">
        <div className="flex items-center gap-2">
          {item?.subject}
        </div>
        {enable && (
          <div className="" onClick={ev => {

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              smsTemplates: {
                ...prev.smsTemplates,
                [item.id]: {
                  ...prev.smsTemplates[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRoundedCheck size={20} />
          </div>
        )}
        {!enable && (
          <div className="" onClick={ev => {


            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              smsTemplates: {
                ...prev.smsTemplates,
                [item.id]: {
                  ...prev.smsTemplates[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRounded size={20} />
          </div>
        )}


      </div>

    );
  }

  function EmailTemplatesItemTitle({ item, enable, index }) {
    return (

      <div className="flex items-center gap-3 w-full justify-between">
        <div className="flex items-center gap-2">
          {item?.subject}
        </div>
        {enable && (
          <div className="" onClick={ev => {

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              emailTemplates: {
                ...prev.emailTemplates,
                [item.id]: {
                  ...prev.emailTemplates[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRoundedCheck size={20} />
          </div>
        )}
        {!enable && (
          <div className="" onClick={ev => {

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              emailTemplates: {
                ...prev.emailTemplates,
                [item.id]: {
                  ...prev.emailTemplates[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRounded size={20} />
          </div>
        )}


      </div>

    );
  }









  function APIKeyItemTitle({ item, enable, index }) {
    return (

      <div className="flex items-center gap-3 w-full justify-between">
        <div className="flex items-center gap-2">
          {item?.label}
          <div className="text-sm bg-yellow-400 text-black px-2 rounded-sm text-gray-500">
            {item?.comingSoon ? "Coming Soon" : ""}
          </div>

        </div>

        {enable && (
          <div className="" onClick={ev => {

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              apiKeys: {
                ...prev.apiKeys,
                [item.id]: {
                  ...prev.apiKeys[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRoundedCheck size={20} />
          </div>
        )}
        {!enable && (
          <div className="" onClick={ev => {
            console.log('Helo 2');
            console.log(enable);

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              apiKeys: {
                ...prev.apiKeys,
                [item.id]: {
                  ...prev.apiKeys[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRounded size={20} />
          </div>
        )}

      </div>

    );
  }

  function CouriersItemTitle({ item, enable, index }) {
    return (

      <div className="flex items-center gap-3 w-full justify-between">
        <div className="flex items-center gap-2">
          {item?.label}

          {item?.comingSoon && (
            <div className="text-sm bg-yellow-400 text-black px-2 rounded-sm text-gray-500">
              {"Coming Soon"}
            </div>
          )}


        </div>

        {enable && (
          <div className="" onClick={ev => {

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              couriers: {
                ...prev.couriers,
                [item.id]: {
                  ...prev.couriers[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRoundedCheck size={20} />
          </div>
        )}
        {!enable && (
          <div className="" onClick={ev => {
            console.log('Helo 2');
            console.log(enable);

            ev.preventDefault()
            ev.stopPropagation()

            setsettingsData(prev => ({
              ...prev,
              couriers: {
                ...prev.couriers,
                [item.id]: {
                  ...prev.couriers[item.id],
                  ['enabled']: !enable
                }
              }
            }));

          }}>
            <IconSquareRounded size={20} />
          </div>
        )}

      </div>

    );
  }









  function ProductAttributesItemTitle({ item, index }) {
    return (

      <div className="flex items-center justify-between w-full">
        <div>{item?.label}</div>
        <div onClick={ev => {
          ev.stopPropagation();
          ev.preventDefault();

          setsettingsData(prev => {
            const remainingProductAttributs = prev.productAttributes.filter((_, i) => i !== index);
            return {
              ...prev,
              productAttributes: remainingProductAttributs
            }
          })


        }}>
          <div className="bg-red-400 hover:bg-red-500 text-white rounded-sm cursor-pointer p-2">
            <IconTrash size={16} />
          </div>

        </div>
      </div>

    );
  }












  return (
    <div className="flex flex-col gap-5">




      {/* Title and actions ride along as you scroll, so Save is always reachable
          on a page this long. Offset clears the sticky global header. */}
      <div className='sticky top-16 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur lg:top-[70px]'>

        <div className='min-w-0'>
          <h1 className='text-lg font-semibold text-gray-900'>{("Settings")}</h1>
          <p className='mt-0.5 text-xs text-gray-500'>
            {("Store details, payments and integrations")}
          </p>
        </div>

        <div className='flex flex-wrap gap-2 items-center'>
          {loading && (

            <span className='text-gray-400'>
              <Spinner size={18} fill={"#9ca3af"} />
            </span>

          )}

          {!confirmReset && (
            <button
              type='button'
              className={GHOST_BUTTON}
              title={("Clears every field on this page. Nothing changes on the server until you save.")}

              onClick={ev => {
                setconfirmReset(true)
              }}
            ><IconRestore size={16} />{("Reset")}</button>
          )}

          {confirmReset && (
            <div className='flex flex-wrap items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5'>
              <span className='flex items-center gap-1.5 text-xs font-medium text-red-700'>
                <IconAlertTriangle size={14} />
                {("Clear every field?")}
              </span>

              <button
                type='button'
                className={DANGER_BUTTON}

                onClick={ev => {
                  setsettingsData({ apiKeys: {}, socialLinks: {}, emailTemplates: {}, productAttributes: [], shippingClasses: [], paymentGateways: {} })
                  setconfirmReset(false)
                }}
              >{("Yes, clear")}</button>

              <button
                type='button'
                className={CANCEL_BUTTON}

                onClick={ev => {
                  setconfirmReset(false)
                }}
              >{("Cancel")}</button>
            </div>
          )}
          <button
            type='button'
            className={PRIMARY_BUTTON}

            onClick={ev => {
              update_settings()
            }}
          ><IconDeviceFloppy size={16} />{("Save")}</button>







        </div>
      </div>




      <Tabs activeTab={'store'}
        orientation="vertical"
        activeClass="active-tab "
        wrapperClass=" gap-6"
        tabPanelClass="flex min-w-0 flex-col gap-5"
        navsItemClass=" flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-white hover:text-gray-900 [&_svg]:shrink-0"
        navsItemActiveClass="  !bg-[#634FE5] !text-white shadow-sm"
        navsWrapperClass="lg:w-[240px] gap-1 rounded-xl border border-gray-200 bg-gray-50 p-2 lg:sticky lg:top-[90px] lg:self-start"

        tabs={[
          { label: "Store", id: 'store', icon: <IconBuildingStore size={18} /> },
          { label: "Reviews", id: 'reviews', icon: <IconStar size={18} /> },
          // { label: "Checkout", id: 'checkout', icon: <IconCashRegister size={18} /> },
          // { label: "Emails", id: 'emails', icon: <IconMailSpark size={18} /> },
          // { label: "SMS", id: 'sms', icon: <IconMailSpark size={18} /> },
          // { label: "Roles", id: 'roles', icon: <IconUserPentagon size={18} /> },
          { label: "Payment Gateways", id: 'payment-gateways', icon: <IconCreditCardPay size={18} /> },
          { label: "Product Attributes", id: 'product-attributes', icon: <IconTriangleSquareCircle size={18} /> },
          { label: "API Keys", id: 'api-keys', icon: <IconPlug size={18} /> },
          // { label: "Trackings", icon: <IconRouteSquare size={18} /> },
          // { label: "Discount", id: 'discount', icon: <IconDiscount size={18} /> },
          { label: "Couriers", id: 'couriers', icon: <IconTruckDelivery size={18} /> },
          { label: "License", id: 'license', icon: <IconKey size={18} /> },

        ]}>


        <Tab index={0} id="store">

          <div className="flex flex-col gap-5">

            <WidgetWrapper className={CARD_CLASSES} title="Store Details">


              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Site Title")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.site_title} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, site_title: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Site Description")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.site_description} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, site_description: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Site Logo")}</div>
                <div className="">

                  <div className="flex flex-col gap-3">
                    {settingsData?.site_logo?.src && (
                      <div className="border border-solid border-gray-400 rounded-sm overflow-hidden">
                        <Image unoptimized src={settingsData?.site_logo?.src} width={100} height={100} alt={``} />
                      </div>
                    )}
                    <GalleryPicker popupClass="right-full top-0" onPick={onPickFeaturedImage} />

                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Favicon")}</div>
                <div className="">

                  <div className="flex flex-col gap-3">
                    {settingsData?.favicon?.src && (
                      <div className="border border-solid border-gray-400 rounded-sm overflow-hidden">
                        <Image unoptimized src={settingsData?.favicon?.src} width={100} height={100} alt={``} />
                      </div>
                    )}
                    <GalleryPicker popupClass="right-full top-0" onPick={onPickFaviconImage} />

                  </div>
                </div>
              </div>






              {/* 
              <div className="border-0 border-b border-solid border-gray-200 lg:flex flex-wrap py-3 gap-3 items-center ">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{('Status')}</div>



                <select name="status" className="!border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.site_title} id="" onChange={ev => {
                  var value = ev.target.value;
                  setsettingsData({ ...settingsData, site_title: value })
                }}>

                  <option value="">Choose</option>
                  <option value="hold">On hold</option>
                  <option value="processing">Processing </option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                  <option value="refunded">Refunded</option>
                  <option value="failed">Failed</option>

                </select>



              </div>

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{('Payment Method')}</div>


                <select name="payment_method" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.payment_method} id="" onChange={ev => {
                  var value = ev.target.value;
                  setsettingsData({ ...settingsData, payment_method: value })
                }}>

                  <option value="">Choose</option>
                  <option value="COD">COD</option>
                  <option value="bKash">bKash</option>
                  <option value="Nagad">Nagad</option>


                </select>




              </div>

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{('Payment status')}</div>


                <select name="payment_status" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.payment_status} id="" onChange={ev => {
                  var value = ev.target.value;
                  setsettingsData({ ...settingsData, payment_status: value })
                }}>

                  <option value="">Choose</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                  <option value="delayed">Delayed</option>

                </select>




              </div>

 */}



            </WidgetWrapper>


            <WidgetWrapper className={CARD_CLASSES} title="Store Contact">


              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Address")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.address} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, address: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Email")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.email} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, email: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Phone")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.phone} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, phone: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("WhatsApp")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.whatsapp} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, whatsapp: value })
                  }} />
                </div>
              </div>



              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Mobile Banking")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.mobilebanking} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, mobilebanking: value })
                  }} />
                </div>
              </div>




              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Social Links")}</div>
                <div className="flex flex-col gap-2">


                  <select name="apiKeys" className="rounded-sm px-2 py-1 !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                    onChange={(ev) => {
                      const { name, value } = ev.target;


                      setsettingsData(prev => {
                        return {
                          ...prev,
                          socialLinks: { ...prev?.socialLinks, [value]: socialLinksPrams[value] }
                        }
                      })







                    }}
                  >
                    <option value="">Choose</option>
                    <option value="facebook">Facebook</option>
                    <option value="youtube">Youtube</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="tiktok">Tiktok</option>

                  </select>


                  <div className="flex gap-5 flex-col">
                    {Object.entries(settingsData?.socialLinks)?.map((args, index) => {

                      var providerKey = args[0];
                      var item = args[1];




                      return (
                        <div className="flex gap-3 bg-gray-200 p-2">
                          <div key={providerKey} className="flex flex-col gap-2">
                            <div className="flex gap-2 flex-col" >


                              {Object.keys(item).map((fieldName, fieldIndex) => {
                                return (
                                  <input
                                    type="text"
                                    name={fieldName}
                                    placeholder={providerKey + " " + fieldName}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={item[fieldName]}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        socialLinks: {
                                          ...prev.socialLinks,
                                          [providerKey]: {
                                            ...prev.socialLinks[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                )
                              })}





                            </div>










                          </div>
                          <div>

                            <div className="bg-red-400 text-white px-2 py-1 rounded-sm cursor-pointer" onClick={ev => {

                              setsettingsData(prev => {
                                const { [providerKey]: removed, ...remainingApiKeys } = prev.socialLinks;
                                return {
                                  ...prev,
                                  socialLinks: remainingApiKeys
                                }
                              })

                            }} >X</div>

                          </div>

                        </div>
                      )
                    }
                    )}
                  </div>
                </div>
              </div>






            </WidgetWrapper>
          </div>

        </Tab>
        <Tab index={1} id="reviews">

          <div className="flex flex-col gap-5">

            <WidgetWrapper className={CARD_CLASSES} title="Store reviews">


              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable Reviews")}</div>
                <div className="flex gap-3">
                  <input type="checkbox" name="enable" id="enable" checked={settingsData?.reviews?.enable} className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.reviews?.enable} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, reviews: { ...settingsData?.reviews, enable: !settingsData?.reviews?.enable } })
                  }} />
                  <label htmlFor="enable" className="cursor-pointer">{settingsData?.reviews?.enable ? "Enabled" : "Disabled"}</label>
                </div>
              </div>
              {/* <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Site Description")}</div>
                <div className="">
                  <input type="text" className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.site_description} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, site_description: value })
                  }} />
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Site Logo")}</div>
                <div className="">

                  <div className="flex flex-col gap-3">
                    {settingsData?.site_logo?.src && (
                      <div className="border border-solid border-gray-400 rounded-sm overflow-hidden">
                        <Image unoptimized src={settingsData?.site_logo?.src} width={100} height={100} alt={``} />
                      </div>
                    )}
                    <GalleryPicker popupClass="right-full top-0" onPick={onPickFeaturedImage} />

                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Favicon")}</div>
                <div className="">

                  <div className="flex flex-col gap-3">
                    {settingsData?.favicon?.src && (
                      <div className="border border-solid border-gray-400 rounded-sm overflow-hidden">
                        <Image unoptimized src={settingsData?.favicon?.src} width={100} height={100} alt={``} />
                      </div>
                    )}
                    <GalleryPicker popupClass="right-full top-0" onPick={onPickFeaturedImage} />

                  </div>
                </div>
              </div> */}








            </WidgetWrapper>



          </div>

        </Tab >
        {/* <Tab index={2}>

          <WidgetWrapper className={CARD_CLASSES} title="Checkout Settings">


            <div className="flex flex-col gap-2">

              <ToggleContent key={'hello'} title={'Checkout Fields'}
                contentClass="bg-gray-200 !text-gray-800 p-4"
                headerClass=""
                headerTitleClass=""
                wrapperClass="w-full"
              >
                Hello

              </ToggleContent>


              <ToggleContent key={'hello'} title={'Checkout Guards'}
                contentClass="bg-gray-200 !text-gray-800 p-4"
                headerClass=""
                headerTitleClass=""
                wrapperClass="w-full"
              >
                Hello

              </ToggleContent>


            </div>





          </WidgetWrapper>


        </Tab> */}
        <Tab index={2} id="emails">

          <WidgetWrapper className={CARD_CLASSES} title="Email Templates">


            <div className="flex flex-col gap-2">


              <div className="flex gap-3 flex-col">
                {Object.entries(emailTemplatesPrams)?.map((args, index) => {

                  var providerKey = args[0];
                  var item = args[1];




                  return (
                    <div className="">

                      <ToggleContent key={index} title={<EmailTemplatesItemTitle item={item} enable={settingsData?.emailTemplates?.[providerKey]?.['enabled']} index={index} />}
                        contentClass="bg-gray-200 !text-gray-800 p-4"
                        headerTitleClass="flex items-center gap-3 w-full justify-between"
                        headerLabelClass="flex items-center gap-3 w-full justify-between"
                        wrapperClass="w-full"
                      >

                        <div className="flex flex-col gap-5">
                          <div className="flex gap-2 flex-col">

                            <label htmlFor="subject">Subject</label>

                            <input
                              type="text"
                              name={'subject'}
                              placeholder={'subject'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.emailTemplates?.[providerKey]?.['subject']}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => ({
                                  ...prev,
                                  emailTemplates: {
                                    ...prev.emailTemplates,
                                    [providerKey]: {
                                      ...prev.emailTemplates[providerKey],
                                      [name]: value
                                    }
                                  }
                                }));

                              }}
                            />


                          </div>
                          <div className="flex gap-2 flex-col">

                            <label htmlFor="subject">Email Content</label>

                            <textarea
                              name={'body'}
                              placeholder={'body'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.emailTemplates?.[providerKey]?.['body']}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => ({
                                  ...prev,
                                  emailTemplates: {
                                    ...prev.emailTemplates,
                                    [providerKey]: {
                                      ...prev.emailTemplates[providerKey],
                                      [name]: value
                                    }
                                  }
                                }));

                              }}
                            />


                          </div>
                        </div>

                      </ToggleContent>

                    </div>
                  )
                }
                )}
              </div>
            </div>





          </WidgetWrapper>


        </Tab>
        <Tab index={2} id="sms">

          <WidgetWrapper className={CARD_CLASSES} title="SMS">


            <div className="flex flex-col gap-2">


              <div className="flex gap-3 flex-col">
                {Object.entries(smsTemplatesPrams)?.map((args, index) => {

                  var providerKey = args[0];
                  var item = args[1];




                  return (
                    <div className="">

                      <ToggleContent key={index} title={<SmsItemTitle item={item} enable={settingsData?.smsTemplates?.[providerKey]?.['enabled']} index={index} />}
                        contentClass="bg-gray-200 !text-gray-800 p-4"
                        headerTitleClass="flex items-center gap-3 w-full justify-between"
                        headerLabelClass="flex items-center gap-3 w-full justify-between"
                        wrapperClass="w-full"
                      >

                        <div className="flex flex-col gap-5">


                          <div className=" lg:flex flex-wrap gap-3 py-3 ">
                            <div className="flex flex-col gap-2 py-2 lg:w-60">
                              <div className="   ">{("Enable")}</div>
                              <div className="  text-sm ">{("Enable login to submit orders")}</div>
                            </div>

                            <label className="cursor-pointer flex gap-3 items-center">
                              <input
                                type="checkbox"
                                name={'enabled'}
                                checked={settingsData?.smsTemplates?.[providerKey]?.['enabled']}
                                onChange={(ev) => {
                                  const { name, checked } = ev.target;
                                  setsettingsData(prev => ({
                                    ...prev,
                                    smsTemplates: {
                                      ...prev.smsTemplates,
                                      [providerKey]: {
                                        ...prev.smsTemplates[providerKey],
                                        [name]: checked
                                      }
                                    }
                                  }));
                                }}
                              />
                              {settingsData?.smsTemplates?.[providerKey]?.['enabled'] ? 'Enabled' : 'Disabled'}

                            </label>






                          </div>









                          <div className="flex gap-2 flex-col">

                            <label htmlFor="subject">Subject</label>

                            <input
                              type="text"
                              name={'subject'}
                              placeholder={'subject'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.smsTemplates?.[providerKey]?.['subject'] ?? smsTemplatesPrams[providerKey]?.subject}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => ({
                                  ...prev,
                                  smsTemplates: {
                                    ...prev.smsTemplates,
                                    [providerKey]: {
                                      ...prev.smsTemplates[providerKey],
                                      [name]: value
                                    }
                                  }
                                }));

                              }}
                            />


                          </div>
                          <div className="flex gap-2 flex-col">

                            <label htmlFor="subject">Email Content</label>

                            <textarea
                              name={'body'}
                              placeholder={'body'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.smsTemplates?.[providerKey]?.['body'] ?? smsTemplatesPrams[providerKey]?.body}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => ({
                                  ...prev,
                                  smsTemplates: {
                                    ...prev.smsTemplates,
                                    [providerKey]: {
                                      ...prev.smsTemplates[providerKey],
                                      [name]: value
                                    }
                                  }
                                }));

                              }}
                            />


                          </div>
                        </div>

                      </ToggleContent>

                    </div>
                  )
                }
                )}
              </div>
            </div>





          </WidgetWrapper>


        </Tab>


        {/* <Tab index={3} id="roles">


          <WidgetWrapper className={CARD_CLASSES} title="Roles">


            <div className="flex flex-col gap-2">


              <div className="flex gap-3 flex-col">
                {Object.entries(rolesPrams)?.map((args, index) => {

                  var providerKey = args[0];
                  var item = args[1];




                  return (
                    <div className="">

                      <ToggleContent key={index} title={item?.label}
                        contentClass="bg-gray-200 !text-gray-800 p-4"
                        headerClass=""
                        headerTitleClass=""
                        wrapperClass="w-full"
                      >

                        <div className="flex flex-col gap-5">
                          <div className="flex gap-2 flex-col">

                            <label htmlFor="subject">Subject</label>

                            <input
                              type="text"
                              name={'subject'}
                              placeholder={'subject'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.emailTemplates?.[providerKey]?.['subject']}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => ({
                                  ...prev,
                                  emailTemplates: {
                                    ...prev.emailTemplates,
                                    [providerKey]: {
                                      ...prev.emailTemplates[providerKey],
                                      [name]: value
                                    }
                                  }
                                }));

                              }}
                            />


                          </div>
                          <div className="flex gap-2 flex-col">

                            <label htmlFor="subject">Email Content</label>

                            <input
                              type="text"
                              name={'body'}
                              placeholder={'body'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.emailTemplates?.[providerKey]?.['body']}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => ({
                                  ...prev,
                                  emailTemplates: {
                                    ...prev.emailTemplates,
                                    [providerKey]: {
                                      ...prev.emailTemplates[providerKey],
                                      [name]: value
                                    }
                                  }
                                }));

                              }}
                            />


                          </div>
                        </div>

                      </ToggleContent>

                    </div>
                  )
                }
                )}
              </div>
            </div>





          </WidgetWrapper>






        </Tab> */}
        <Tab index={3} id="payment-gateways">



          <WidgetWrapper className={CARD_CLASSES} title="Payment Gateways">







            <div className="flex flex-col gap-2">


              <div className="flex gap-2 flex-col">
                {Object.entries(paymentGateways)?.map((args, index) => {

                  var providerKey = args[0];
                  var item = args[1];




                  return (
                    <div className="" key={index}>

                      <ToggleContent key={index} title={<PaymentGatewaysItemTitle item={item} enable={settingsData?.paymentGateways?.[providerKey]?.['enable']} index={index} />}
                        contentClass="bg-gray-200 !text-gray-800 p-4"
                        headerClass=""
                        headerTitleClass="flex items-center gap-3 w-full justify-between"
                        headerLabelClass="flex items-center gap-3 w-full justify-between"
                        wrapperClass="w-full"
                      >

                        <div className="flex flex-col gap-5">



                          {providerKey == 'bank_transfer' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>




                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Bank Accounts")}</div>
                                <div className="">

                                  <div className="flex flex-col gap-5">

                                    <div className={`${PRIMARY_BUTTON} w-fit`} onClick={ev => {

                                      // setsettingsData(prev => ({
                                      //   ...prev,
                                      //   paymentGateways: {
                                      //     ...prev.paymentGateways,
                                      //     [providerKey]: {
                                      //       ...prev.paymentGateways[providerKey],
                                      //       ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                      //     }
                                      //   }
                                      // }));

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['accounts']: [...(prev.paymentGateways[providerKey]?.['accounts'] || []), {
                                              "bankName": "",
                                              "accountNumber": "",
                                              "accountType": "",
                                              "branch": "",
                                              "swiftCode": "",
                                              "routingNumber": "",
                                            }]
                                          }
                                        }
                                      }));







                                    }}>Add</div>



                                    <div className="flex gap-3 flex-col">
                                      {settingsData?.paymentGateways?.[providerKey]?.['accounts'] && settingsData?.paymentGateways?.[providerKey]?.['accounts']?.map((item, index) => {




                                        return (
                                          <ToggleContent key={index} title={<PaymentGatewaysBankItemTitle item={item} title={settingsData?.paymentGateways?.accounts?.[index]?.bankName ?? 'Bank Name'} index={index} />}
                                            contentClass="bg-gray-200 !text-gray-800 lg:p-4 py-4"
                                            headerClass=""
                                            headerTitleClass=""
                                            wrapperClass="w-full"
                                          >

                                            <div className="flex flex-col gap-5">
                                              <div className="flex flex-wrap gap-2 items-center">
                                                <label htmlFor="label" className="lg:w-40">Bank Name</label>
                                                <input
                                                  type="text"
                                                  name={'bankName'}
                                                  placeholder={'Bank Name'}
                                                  className=" px-2 py-1 lg:flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                                  value={settingsData?.paymentGateways[providerKey]?.accounts?.[index]?.bankName}
                                                  onChange={(ev) => {
                                                    const { name, value } = ev.target;

                                                    var field = 'bankName';

                                                    setsettingsData(prev => {
                                                      const updatedAccounts = [
                                                        ...(prev.paymentGateways[providerKey]?.accounts || [])
                                                      ];

                                                      updatedAccounts[index] = {
                                                        ...updatedAccounts[index],
                                                        [field]: value,
                                                      };

                                                      return {
                                                        ...prev,
                                                        paymentGateways: {
                                                          ...prev.paymentGateways,
                                                          [providerKey]: {
                                                            ...prev.paymentGateways[providerKey],
                                                            accounts: updatedAccounts,
                                                          },
                                                        },
                                                      };
                                                    });


                                                  }}
                                                />
                                              </div>
                                              <div className="flex flex-wrap gap-2 items-center">
                                                <label htmlFor="label" className="lg:w-40">Account Number</label>
                                                <input
                                                  type="text"
                                                  name={'accountNumber'}
                                                  placeholder={'Account Number'}
                                                  className=" px-2 py-1 lg:flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                                  value={settingsData?.paymentGateways[providerKey]?.accounts?.[index]?.['accountNumber']}
                                                  onChange={(ev) => {
                                                    const { name, value } = ev.target;
                                                    var field = 'accountNumber';

                                                    setsettingsData(prev => {
                                                      const updatedAccounts = [
                                                        ...(prev.paymentGateways[providerKey]?.accounts || [])
                                                      ];

                                                      updatedAccounts[index] = {
                                                        ...updatedAccounts[index],
                                                        [field]: value,
                                                      };

                                                      return {
                                                        ...prev,
                                                        paymentGateways: {
                                                          ...prev.paymentGateways,
                                                          [providerKey]: {
                                                            ...prev.paymentGateways[providerKey],
                                                            accounts: updatedAccounts,
                                                          },
                                                        },
                                                      };
                                                    });
                                                  }}
                                                />
                                              </div>
                                              <div className="flex flex-wrap gap-2 items-center">
                                                <label htmlFor="label" className="lg:w-40">Account Type</label>
                                                <input
                                                  type="text"
                                                  name={'accountType'}
                                                  placeholder={'Account Type'}
                                                  className=" px-2 py-1 lg:flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                                  value={settingsData?.paymentGateways[providerKey]?.accounts?.[index]?.['accountType']}
                                                  onChange={(ev) => {
                                                    const { name, value } = ev.target;
                                                    var field = 'accountType';

                                                    setsettingsData(prev => {
                                                      const updatedAccounts = [
                                                        ...(prev.paymentGateways[providerKey]?.accounts || [])
                                                      ];

                                                      updatedAccounts[index] = {
                                                        ...updatedAccounts[index],
                                                        [field]: value,
                                                      };

                                                      return {
                                                        ...prev,
                                                        paymentGateways: {
                                                          ...prev.paymentGateways,
                                                          [providerKey]: {
                                                            ...prev.paymentGateways[providerKey],
                                                            accounts: updatedAccounts,
                                                          },
                                                        },
                                                      };
                                                    });
                                                  }}
                                                />
                                              </div>
                                              <div className="flex flex-wrap gap-2 items-center">
                                                <label htmlFor="label" className="lg:w-40">Branch</label>
                                                <input
                                                  type="text"
                                                  name={'branch'}
                                                  placeholder={'Branch'}
                                                  className=" px-2 py-1 lg:flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                                  value={settingsData?.paymentGateways[providerKey]?.accounts?.[index]?.['branch']}
                                                  onChange={(ev) => {
                                                    const { name, value } = ev.target;
                                                    var field = 'branch';

                                                    setsettingsData(prev => {
                                                      const updatedAccounts = [
                                                        ...(prev.paymentGateways[providerKey]?.accounts || [])
                                                      ];

                                                      updatedAccounts[index] = {
                                                        ...updatedAccounts[index],
                                                        [field]: value,
                                                      };

                                                      return {
                                                        ...prev,
                                                        paymentGateways: {
                                                          ...prev.paymentGateways,
                                                          [providerKey]: {
                                                            ...prev.paymentGateways[providerKey],
                                                            accounts: updatedAccounts,
                                                          },
                                                        },
                                                      };
                                                    });
                                                  }}
                                                />
                                              </div>
                                              <div className="flex flex-wrap gap-2 items-center">
                                                <label htmlFor="label" className="lg:w-40">Swift Code</label>
                                                <input
                                                  type="text"
                                                  name={'swiftCode'}
                                                  placeholder={'Swift Code'}
                                                  className=" px-2 py-1 lg:flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                                  value={settingsData?.paymentGateways[providerKey]?.accounts?.[index]?.['swiftCode']}
                                                  onChange={(ev) => {
                                                    const { name, value } = ev.target;
                                                    var field = 'swiftCode';

                                                    setsettingsData(prev => {
                                                      const updatedAccounts = [
                                                        ...(prev.paymentGateways[providerKey]?.accounts || [])
                                                      ];

                                                      updatedAccounts[index] = {
                                                        ...updatedAccounts[index],
                                                        [field]: value,
                                                      };

                                                      return {
                                                        ...prev,
                                                        paymentGateways: {
                                                          ...prev.paymentGateways,
                                                          [providerKey]: {
                                                            ...prev.paymentGateways[providerKey],
                                                            accounts: updatedAccounts,
                                                          },
                                                        },
                                                      };
                                                    });
                                                  }}
                                                />
                                              </div>
                                              <div className="flex flex-wrap gap-2 items-center">
                                                <label htmlFor="label" className="lg:w-40">Routing Number</label>
                                                <input
                                                  type="text"
                                                  name={'routingNumber'}
                                                  placeholder={'Routing Number'}
                                                  className=" px-2 py-1 lg:flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                                  value={settingsData?.paymentGateways[providerKey]?.accounts?.[index]?.['routingNumber']}
                                                  onChange={(ev) => {
                                                    const { name, value } = ev.target;
                                                    var field = 'routingNumber';

                                                    setsettingsData(prev => {
                                                      const updatedAccounts = [
                                                        ...(prev.paymentGateways[providerKey]?.accounts || [])
                                                      ];

                                                      updatedAccounts[index] = {
                                                        ...updatedAccounts[index],
                                                        [field]: value,
                                                      };

                                                      return {
                                                        ...prev,
                                                        paymentGateways: {
                                                          ...prev.paymentGateways,
                                                          [providerKey]: {
                                                            ...prev.paymentGateways[providerKey],
                                                            accounts: updatedAccounts,
                                                          },
                                                        },
                                                      };
                                                    });
                                                  }}
                                                />
                                              </div>







                                            </div>

                                          </ToggleContent>
                                        )
                                      }
                                      )}
                                    </div>

                                  </div>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'description'}
                                    placeholder={'description'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['description']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>








                            </>
                          )}
                          {providerKey == 'bkash' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['sandbox']: !prev.paymentGateways[providerKey]?.['sandbox']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'store_id'}
                                    placeholder={'store_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['store_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Client ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'client_id'}
                                    placeholder={'client_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['client_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Client Secret")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'client_secret'}
                                    placeholder={'client_secret'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['client_secret']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Username")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'username'}
                                    placeholder={'username'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['username']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Password")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'password'}
                                    placeholder={'password'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['password']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>

                            </>
                          )}

                          {(providerKey == 'bkashPersonal' || providerKey == 'nagadPersonal' || providerKey == 'roketPersonal') && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Phone Number")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'phone_number'}
                                    placeholder={'phone_number'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['phone_number']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'description'}
                                    placeholder={'description'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['description']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {providerKey == 'nagad' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['sandbox']: !prev.paymentGateways[providerKey]?.['sandbox']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'store_id'}
                                    placeholder={'store_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['store_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'token'}
                                    placeholder={'token'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {providerKey == 'roket' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['sandbox']: !prev.paymentGateways[providerKey]?.['sandbox']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'store_id'}
                                    placeholder={'store_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['store_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'token'}
                                    placeholder={'token'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}



                          {providerKey == 'sslcommerz' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['sandbox']: !prev.paymentGateways[providerKey]?.['sandbox']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'store_id'}
                                    placeholder={'store_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['store_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'token'}
                                    placeholder={'token'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {providerKey == 'cod' && (

                            <>



                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                            </>
                          )}
                          {providerKey == 'stripe' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              {/*
                                The credentials. These are written into the
                                settings blob, so they are only as private as
                                that blob is - see the note at the foot of this
                                panel for what that means and what guards it.

                                `type="password"` so a key is not left legible
                                on a shared screen, and autoComplete off so no
                                browser offers to save it as a login.
                              */}
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Secret key")}</div>
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="password"
                                    name={'secret_key'}
                                    autoComplete="off"
                                    placeholder={'sk_test_... or sk_live_...'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['secret_key'] ?? ''}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />

                                  {/* What the server is actually using, which
                                      is not always what is typed above: a
                                      blank field here falls back to the env,
                                      and nothing takes effect until Save. */}
                                  {stripeStatus?.enabled && (
                                    <div className="text-xs text-green-700">
                                      In use{stripeStatus?.source === 'env' ? " from the server env" : ""}
                                      {stripeStatus?.livemode
                                        ? " - live mode, real cards will be charged"
                                        : " - test mode"}
                                    </div>
                                  )}
                                  {!stripeStatus?.enabled && (
                                    <div className="text-xs text-red-600">
                                      No key in use - card payment will not appear at
                                      checkout, whatever this switch says. Save the page
                                      after entering one.
                                    </div>
                                  )}
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Webhook signing secret")}</div>
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="password"
                                    name={'webhook_secret'}
                                    autoComplete="off"
                                    placeholder={'whsec_...'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['webhook_secret'] ?? ''}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />

                                  {stripeStatus?.webhook_configured && (
                                    <div className="text-xs text-green-700">Signing secret in use</div>
                                  )}
                                  {!stripeStatus?.webhook_configured && (
                                    <div className="text-xs text-yellow-700">
                                      No signing secret in use. Payments still work, but an
                                      order is left unpaid when the buyer closes the tab
                                      before Stripe sends them back.
                                    </div>
                                  )}

                                  {stripeStatus?.webhook_url && (
                                    <div className="text-xs text-gray-600">
                                      Register this URL with Stripe for the event
                                      <span className="font-mono"> checkout.session.completed</span>:
                                      <span className="font-mono select-all break-all"> {stripeStatus.webhook_url}</span>
                                    </div>
                                  )}
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Charge currency")}</div>
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    name={'currency'}
                                    placeholder={'USD'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['currency'] ?? ''}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />

                                  <div className="text-xs text-gray-600">
                                    In use: {stripeStatus?.currency || "USD"}
                                    {currency && stripeStatus?.currency === currency
                                      && " - the same as this store, so nothing is converted"}
                                  </div>

                                  {/*
                                    Stripe does not take every currency a store
                                    might price in - BDT among them - and with no
                                    rate the server refuses the payment rather
                                    than charge a guessed amount. Worth saying
                                    here, where it can still be fixed, rather
                                    than leaving a buyer to find it at checkout.
                                  */}
                                  {stripeStatus?.enabled && currency && stripeStatus?.currency !== currency && (
                                    <>
                                      {stripeStatus?.exchange_rate > 0 && (
                                        <div className="text-xs text-gray-600">
                                          Converted at {stripeStatus.exchange_rate} {currency}
                                          {" "}per 1 {stripeStatus.currency}, rounded up.
                                        </div>
                                      )}
                                      {!(stripeStatus?.exchange_rate > 0) && (
                                        <div className="text-xs text-red-600">
                                          This store prices in {currency}, which is not what
                                          Stripe charges in, and no exchange rate is set - so
                                          card payments will be refused until one is.
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Exchange rate")}</div>
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    name={'exchange_rate'}
                                    placeholder={'e.g. 120'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['exchange_rate'] ?? ''}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />

                                  <div className="text-xs text-gray-600">
                                    How many {currency || 'store currency'} make 1
                                    {" "}{stripeStatus?.currency || 'USD'}. Only needed when
                                    the two differ; leave it blank when they match.
                                  </div>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 py-3.5">
                                <div className="text-xs text-gray-600">
                                  These credentials are stored with the rest of the store
                                  settings. The storefront is served those settings through
                                  an open endpoint, so the two secrets above are stripped out
                                  of it before it reaches a browser and are only ever read
                                  server-side - but they are held in the database rather than
                                  in a secrets manager, and anything else that can read the
                                  settings can read them. Leave a field blank to fall back to
                                  the server env instead
                                  (<span className="font-mono">STRIPE_SECRET_KEY</span>,
                                  <span className="font-mono"> STRIPE_WEBHOOK_SECRET</span>,
                                  <span className="font-mono"> STRIPE_CURRENCY</span>,
                                  <span className="font-mono"> STRIPE_EXCHANGE_RATE</span>),
                                  which keeps them out of the database altogether. Use a
                                  restricted key where you can, and rotate it in Stripe if
                                  you suspect it has leaked.
                                </div>
                              </div>

                            </>
                          )}

                          {providerKey == 'aamarpay' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['sandbox']: !prev.paymentGateways[providerKey]?.['sandbox']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'store_id'}
                                    placeholder={'store_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['store_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'token'}
                                    placeholder={'token'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {providerKey == 'paypal' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['enable']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;


                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['enable']: !prev.paymentGateways[providerKey]?.['enable']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`enable-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['enable'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                    onChange={(ev) => {
                                      const value = ev.target.value;

                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            ['sandbox']: !prev.paymentGateways[providerKey]?.['sandbox']
                                          }
                                        }
                                      }));

                                    }} />
                                  <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'store_id'}
                                    placeholder={'store_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['store_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'token'}
                                    placeholder={'token'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.paymentGateways?.[providerKey]?.['token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        paymentGateways: {
                                          ...prev.paymentGateways,
                                          [providerKey]: {
                                            ...prev.paymentGateways[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}



                        </div>

                      </ToggleContent>

                    </div>
                  )
                }
                )}
              </div>
            </div>













          </WidgetWrapper>



        </Tab>

        <Tab index={5} id="product-attributes">
          <WidgetWrapper className={CARD_CLASSES} title="Product Attributes">





            <div className="flex flex-col gap-5">

              <div className={`${PRIMARY_BUTTON} w-fit`} onClick={ev => {

                setsettingsData(prev => ({
                  ...prev,
                  productAttributes: [...prev.productAttributes, {
                    "label": "Custom Attribute",
                    "slug": "custom-attribute",
                    "args": {
                      "public": true,
                      "publicly_queryable": true,
                      "hierarchical": true,
                      "show_in_rest": true,
                    },
                    "conditions": {
                      "post_type": ["product"],
                      "categories": [],
                    },
                  }]
                }));

              }}>Add</div>


              <div className="flex gap-2 flex-col">
                {settingsData?.productAttributes && settingsData?.productAttributes?.map((item, index) => {




                  return (
                    <div className="">

                      <ToggleContent key={index} title={<ProductAttributesItemTitle item={item} index={index} />}
                        contentClass="bg-gray-200 !text-gray-800 p-4"
                        headerClass=""
                        headerTitleClass="flex items-center gap-3 w-full justify-between"
                        headerLabelClass="flex items-center gap-3 w-full justify-between"

                        wrapperClass="w-full"
                      >

                        <div className="flex flex-col gap-5">
                          <div className="flex gap-2 flex-col">
                            <label htmlFor="label">label</label>
                            <input
                              type="text"
                              name={'label'}
                              placeholder={'label'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.productAttributes?.[index]?.['label'] ?? productAttributesPrams?.[item?.slug]?.['label']}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => {
                                  const updatedAttributs = [...prev.productAttributes];
                                  updatedAttributs[index] = {
                                    ...updatedAttributs[index],
                                    [name]: value
                                  };
                                  return {
                                    ...prev,
                                    productAttributes: updatedAttributs
                                  };
                                });

                              }}
                            />
                          </div>
                          <div className="flex gap-2 flex-col">
                            <label htmlFor="slug">Slug</label>
                            <input
                              type="text"
                              name={'slug'}
                              placeholder={'slug'}
                              className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                              value={settingsData?.productAttributes?.[index]?.['slug'] ?? productAttributesPrams?.[item?.slug]?.['slug']}
                              onChange={(ev) => {
                                const { name, value } = ev.target;
                                setsettingsData(prev => {
                                  const updatedAttributs = [...prev.productAttributes];
                                  updatedAttributs[index] = {
                                    ...updatedAttributs[index],
                                    [name]: value
                                  };
                                  return {
                                    ...prev,
                                    productAttributes: updatedAttributs
                                  };
                                });
                              }}
                            />
                          </div>









                          <div className="flex gap-2 justify-start items-center">
                            <label htmlFor="public">Public</label>
                            <div>
                              <input
                                type="checkbox"
                                name={'public'}
                                placeholder={'public'}
                                className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                checked={settingsData?.productAttributes?.[index]?.args?.['public']}
                                onChange={(ev) => {
                                  const { name, checked } = ev.target;

                                  console.log('checked', checked, name, index, settingsData?.productAttributes?.[index]?.args?.['public']);


                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.productAttributes];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      args: {
                                        ...updatedAttributs[index].args,
                                        [name]: checked
                                      }
                                    };
                                    return {
                                      ...prev,
                                      productAttributes: updatedAttributs
                                    };
                                  });
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 justify-start items-center">
                            <label htmlFor="publicly_queryable">Publicly queryable</label>
                            <div>
                              <input
                                type="checkbox"
                                name={'publicly_queryable'}
                                placeholder={'publicly_queryable'}
                                className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                checked={settingsData?.productAttributes?.[index]?.args?.['publicly_queryable']}
                                onChange={(ev) => {
                                  const { name, checked } = ev.target;
                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.productAttributes];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      args: {
                                        ...updatedAttributs[index].args,
                                        [name]: checked
                                      }
                                    };
                                    return {
                                      ...prev,
                                      productAttributes: updatedAttributs
                                    };
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-start items-center">
                            <label htmlFor="hierarchical">Hierarchical</label>
                            <div>
                              <input
                                type="checkbox"
                                name={'hierarchical'}
                                placeholder={'hierarchical'}
                                className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                checked={settingsData?.productAttributes?.[index]?.args?.['hierarchical']}
                                onChange={(ev) => {
                                  const { name, checked } = ev.target;
                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.productAttributes];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      args: {
                                        ...updatedAttributs[index].args,
                                        [name]: checked
                                      }
                                    };
                                    return {
                                      ...prev,
                                      productAttributes: updatedAttributs
                                    };
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div className="flex gap-2 justify-start items-center">
                            <label htmlFor="show_in_rest">Show in rest</label>
                            <div>
                              <input
                                type="checkbox"
                                name={'show_in_rest'}
                                placeholder={'show_in_rest'}
                                className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                checked={settingsData?.productAttributes?.[index]?.args?.['show_in_rest']}
                                onChange={(ev) => {
                                  const { name, checked } = ev.target;
                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.productAttributes];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      args: {
                                        ...updatedAttributs[index].args,
                                        [name]: checked
                                      }
                                    };
                                    return {
                                      ...prev,
                                      productAttributes: updatedAttributs
                                    };
                                  });
                                }}
                              />
                            </div>
                          </div>











                        </div>

                      </ToggleContent>

                    </div>
                  )
                }
                )}
              </div>





            </div>





          </WidgetWrapper>

        </Tab>


        <Tab index={4} id="api-keys">




          <WidgetWrapper className={CARD_CLASSES} title="API Keys">



            <div className="flex flex-col gap-2">


              <div className="flex gap-2 flex-col">
                {Object.entries(apiKeysPrams)?.map((args, index) => {

                  var providerKey = args[0];
                  var item = args[1];




                  return (
                    <div className="">

                      <ToggleContent key={index} title={<APIKeyItemTitle item={item} enable={settingsData?.apiKeys?.[providerKey]?.['enabled']} index={index} />}
                        contentClass="bg-gray-200 !text-gray-800 p-4"
                        headerTitleClass="flex items-center gap-3 w-full justify-between"
                        headerLabelClass="flex items-center gap-3 w-full justify-between"
                        wrapperClass="w-full"
                      >

                        <div className="flex flex-col gap-5">



                          {providerKey == 'googleMap' && (

                            <>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API Key")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'key'}
                                    placeholder={'key'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['key']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Map ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'map_id'}
                                    placeholder={'map_id'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.['googleMap']?.['map_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          ['googleMap']: {
                                            ...prev?.apiKeys?.['googleMap'],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>




                            </>
                          )}
                          {providerKey == 'apiToken' && (

                            <>


                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API Token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'key'}
                                    placeholder={'key'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['key']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>






                            </>
                          )}










                          {providerKey == 'tikTokPixel' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Pixel ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'pixel_id'}
                                    placeholder={'1384955718349155'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['pixel_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Access Token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'access_token'}
                                    placeholder={'EAAGm0PX4ZCpsBAKZCZBZAUZAOZCERZA9ZBvZCZCZA9ZBZA1ZBZCZAOZCZA9ZBZAOZCZA9ZBZD'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['access_token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Test Event Code")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'test_event_code'}
                                    placeholder={'TEST1276'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['test_event_code']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>







                            </>
                          )}
                          {providerKey == 'facebookPixel' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Pixel ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'pixel_id'}
                                    placeholder={'1384955718349155'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['pixel_id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Access Token")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'access_token'}
                                    placeholder={'EAAGm0PX4ZCpsBAKZCZBZAUZAOZCERZA9ZBvZCZCZsdA9ZBZA1ZBZCZAOZCZA9ZBZAOZCZA9ZBZD'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['access_token']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Event Confirmation")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="checkbox"
                                    name={'event_confirmation'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['event_confirmation']}
                                    onChange={(ev) => {
                                      const { name, checked } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: !checked
                                          }
                                        }
                                      }));

                                    }}
                                  />

                                  {settingsData?.apiKeys?.[providerKey]?.['event_confirmation'] && (`Enabled`)}
                                  {settingsData?.apiKeys?.[providerKey]?.['event_confirmation'] && (`Disabled`)}


                                </div>
                              </div>



                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Test Event Code")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'test_event_code'}
                                    placeholder={'TEST1276'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['test_event_code']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>



                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Facebook Catalog")}</div>
                                <div className="flex gap-3 items-center">
                                  <input
                                    type="text"
                                    name={'test_event_code'}
                                    placeholder={''}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={`${appUrl}facebook-product-feed`}



                                  />

                                  <div className="inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-400 cursor-pointer "

                                    onClick={ev => {


                                      navigator.clipboard.writeText(`${appUrl}facebook-product-feed`);
                                      addNotification({ type: 'success', title: 'Copy done', content: `Link copied.` })

                                    }}>Copy</div>


                                </div>
                              </div>








                            </>
                          )}
                          {providerKey == 'googleAnalytics' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'id'}
                                    placeholder={'G-X11VE2QSYZ'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                            </>
                          )}
                          {providerKey == 'microsoftClarity' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'id'}
                                    placeholder={'tyum5f3iiu'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                            </>
                          )}
                          {providerKey == 'googleLogin' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Login ID")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'id'}
                                    placeholder={'50859545951-q060shj5lcssd1tu3i2v1optuggr.apps.googleusercontent.com'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['id']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>


                            </>
                          )}

                          {providerKey == 'anthropic' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API Key")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'key'}
                                    placeholder={'key'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['key']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              {/* <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Model")}</div>
                                <div className="flex gap-3">

                                  <select name="model" className="rounded-sm px-2 py-1 !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.apiKeys?.[providerKey]?.['model']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            ['model']: value
                                          }
                                        }
                                      }));
                                    }}
                                  >
                                    <option value="">Choose</option>

                                    {geminiModelxPrams.map(item => {

                                      return (
                                        <option value={item?.model_id}>{item?.name}</option>
                                      )

                                    })}


                                  </select>

                                </div>
                              </div> */}

                            </>
                          )}
                          {providerKey == 'gemini' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API Key")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'key'}
                                    placeholder={'key'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['key']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Model")}</div>
                                <div className="flex gap-3">

                                  <select name="model" className="rounded-sm px-2 py-1 !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.apiKeys?.[providerKey]?.['model']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            ['model']: value
                                          }
                                        }
                                      }));
                                    }}
                                  >
                                    <option value="">Choose</option>

                                    {geminiModelxPrams.map(item => {

                                      return (
                                        <option value={item?.model_id}>{item?.name}</option>
                                      )

                                    })}


                                  </select>

                                </div>
                              </div>

                            </>
                          )}

                          {providerKey == 'pollinations' && (

                            <>





                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API Key")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'key'}
                                    placeholder={'key'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['key']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Model")}</div>
                                <div className="flex gap-3">

                                  <select name="model" className="rounded-sm px-2 py-1 !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                    value={settingsData?.apiKeys?.[providerKey]?.['model']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev.apiKeys?.[providerKey],
                                            ['model']: value
                                          }
                                        }
                                      }));
                                    }}
                                  >
                                    <option value="">Choose</option>
                                    {pollinationsModelPrams.map(item => {

                                      return (
                                        <option value={item?.model_id}>{item?.name}</option>
                                      )

                                    })}                                    <option value="percent">Percent</option>

                                  </select>

                                </div>
                              </div>





                            </>
                          )}
                          {providerKey == 'bulksmsbd' && (

                            <>





                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API Key")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'key'}
                                    placeholder={'key'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['key']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Senderid")}</div>
                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    name={'senderid'}
                                    placeholder={'senderid'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['senderid']}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev.apiKeys?.[providerKey],
                                            [name]: value
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                </div>
                              </div>






                            </>
                          )}



                        </div>

                      </ToggleContent>

                    </div>
                  )
                }
                )}
              </div>
            </div>

















          </WidgetWrapper>


        </Tab>
        <Tab index={5} id="discount">

          {/* {JSON.stringify(settingsData)} */}

          <div className="flex flex-col gap-5">




            <WidgetWrapper className={CARD_CLASSES} title="Discount & Cash Back">





              <div className="flex flex-col gap-5">

                <div className={`${PRIMARY_BUTTON} w-fit`} onClick={ev => {

                  setsettingsData(prev => ({
                    ...prev,
                    shippingClasses: [...prev.shippingClasses, {
                      "name": "Custom Class",
                      "cost": "",
                      "type": "fixed",

                    }]
                  }));

                }}>Add</div>


                <div className="flex gap-3 flex-col">
                  {settingsData?.shippingClasses && settingsData?.shippingClasses?.map((item, index) => {




                    return (
                      <div className="">

                        <ToggleContent key={index} title={<ShippingClassesItemTitle item={item} index={index} />}
                          contentClass="bg-gray-200 !text-gray-800 p-4"
                          headerClass=""
                          headerTitleClass=""
                          wrapperClass="w-full"
                        >

                          <div className="flex flex-col gap-5">
                            <div className="flex gap-2 items-center">
                              <label htmlFor="label" className="lg:w-40">Name</label>
                              <input
                                type="text"
                                name={'name'}
                                placeholder={'name'}
                                className=" px-2 py-1 flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                value={settingsData?.cashbackRules?.[index]?.['name']}
                                onChange={(ev) => {
                                  const { name, value } = ev.target;
                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.cashbackRules];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      [name]: value
                                    };
                                    return {
                                      ...prev,
                                      cashbackRules: updatedAttributs
                                    };
                                  });
                                }}
                              />
                            </div>
                            <div className="flex gap-2 items-center">
                              <label htmlFor="cost" className="lg:w-40">Cost</label>
                              <input
                                type="text"
                                name={'cost'}
                                placeholder={'10'}
                                className=" px-2 py-1 flex-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                value={settingsData?.cashbackRules?.[index]?.['cost']}
                                onChange={(ev) => {
                                  const { name, value } = ev.target;
                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.cashbackRules];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      [name]: value
                                    };
                                    return {
                                      ...prev,
                                      cashbackRules: updatedAttributs
                                    };
                                  });
                                }}
                              />
                            </div>
                            <div className="flex gap-2 items-center">
                              <label htmlFor="type" className="lg:w-40">Type</label>


                              <select name="type" className="rounded-sm px-2 py-1 !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                value={settingsData?.cashbackRules?.[index]?.['type']}
                                onChange={(ev) => {
                                  const { name, value } = ev.target;
                                  setsettingsData(prev => {
                                    const updatedAttributs = [...prev.cashbackRules];
                                    updatedAttributs[index] = {
                                      ...updatedAttributs[index],
                                      [name]: value
                                    };
                                    return {
                                      ...prev,
                                      cashbackRules: updatedAttributs
                                    };
                                  });
                                }}
                              >
                                <option value="">Choose</option>
                                <option value="fixed">Fixed</option>
                                <option value="percent">Percent</option>

                              </select>


                            </div>







                          </div>

                        </ToggleContent>

                      </div>
                    )
                  }
                  )}
                </div>
              </div>





            </WidgetWrapper>

          </div>



        </Tab>
        <Tab index={7} id="couriers">

          {/* {JSON.stringify(settingsData)} */}

          <div className="flex flex-col gap-5">




            <WidgetWrapper className={CARD_CLASSES} title="Couriers">








              <div className="flex flex-col gap-2">


                <div className="flex gap-2 flex-col">
                  {Object.entries(couriersPrams)?.map((args, index) => {

                    var providerKey = args[0];
                    var item = args[1];




                    return (
                      <div className="">

                        <ToggleContent key={index} title={<CouriersItemTitle item={item} enable={settingsData?.couriers?.[providerKey]?.['enabled']} index={index} />}
                          contentClass="bg-gray-200 !text-gray-800 p-4"
                          headerTitleClass="flex items-center gap-3 w-full justify-between"
                          headerLabelClass="flex items-center gap-3 w-full justify-between"
                          wrapperClass="w-full"
                        >

                          <div className="flex flex-col gap-5">



                            {providerKey == 'pathao' && (

                              <>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                      checked={settingsData?.couriers?.[providerKey]?.['sandbox']}
                                      className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                      value={settingsData?.couriers?.[providerKey]?.['sandbox']}
                                      onChange={(ev) => {
                                        const value = ev.target.value;


                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              ['sandbox']: !prev.couriers[providerKey]?.['sandbox']
                                            }
                                          }
                                        }));

                                      }} />
                                    <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.couriers?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'store_id'}
                                      placeholder={'store_id'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['store_id']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Client ID")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'client_id'}
                                      placeholder={'client_id'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['client_id']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Client Secret")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'client_secret'}
                                      placeholder={'client_secret'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['client_secret']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Username")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'username'}
                                      placeholder={'username'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['username']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Password")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'password'}
                                      placeholder={'password'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['password']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>

                              </>
                            )}


                            {providerKey == 'steadfast' && (

                              <>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API key")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'api_key'}
                                      placeholder={'api_key'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['api_key']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Secret key")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'secret_key'}
                                      placeholder={'secret_key'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['secret_key']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Webhook Auth token")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'webhook_auth_token'}
                                      placeholder={'Webhook auth token'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['webhook_auth_token']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                              </>
                            )}
                            {providerKey == 'courrierfast' && (

                              <>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'store_id'}
                                      placeholder={'store_id'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['store_id']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API key")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'api_key'}
                                      placeholder={'api_key'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['api_key']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Secret key")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'secret_key'}
                                      placeholder={'secret_key'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['secret_key']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Webhook Secret")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'webhook_secret'}
                                      placeholder={'Webhook secret'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['webhook_secret']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                              </>
                            )}

                            {providerKey == 'redx' && (

                              <>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                      checked={settingsData?.couriers?.[providerKey]?.['sandbox']}
                                      className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                      value={settingsData?.couriers?.[providerKey]?.['sandbox']}
                                      onChange={(ev) => {
                                        const value = ev.target.value;

                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              ['sandbox']: !prev.couriers[providerKey]?.['sandbox']
                                            }
                                          }
                                        }));

                                      }} />
                                    <label htmlFor={`sandbox-${providerKey}`} className="cursor-pointer">{settingsData?.couriers?.[providerKey]?.['sandbox'] ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'store_id'}
                                      placeholder={'store_id'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['store_id']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>


                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("token")}</div>
                                  <div className="flex gap-3">
                                    <input
                                      type="text"
                                      name={'token'}
                                      placeholder={'token'}
                                      className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      value={settingsData?.couriers?.[providerKey]?.['token']}
                                      onChange={(ev) => {
                                        const { name, value } = ev.target;
                                        setsettingsData(prev => ({
                                          ...prev,
                                          couriers: {
                                            ...prev.couriers,
                                            [providerKey]: {
                                              ...prev.couriers[providerKey],
                                              [name]: value
                                            }
                                          }
                                        }));

                                      }}
                                    />
                                  </div>
                                </div>
                              </>
                            )}



                          </div>

                        </ToggleContent>

                      </div>
                    )
                  }
                  )}
                </div>
              </div>
















            </WidgetWrapper>

          </div>



        </Tab>
        <Tab index={8} id="license">

          {/* {JSON.stringify(settingsData)} */}

          <div className="flex flex-col gap-5">




            <WidgetWrapper className={CARD_CLASSES} title="License">



              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("License Key")}</div>
                <div className="flex gap-3">
                  <input type="text" name="enable" id="enable" checked={settingsData?.couriers?.enable} className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.couriers?.enable} onChange={ev => {
                    var value = ev.target.value;
                    setsettingsData({ ...settingsData, couriers: { ...settingsData?.couriers, enable: value } })
                  }} />

                </div>
              </div>










            </WidgetWrapper>

          </div>



        </Tab>

      </Tabs >













    </div >

  );
};

export default SettingsGlobal;