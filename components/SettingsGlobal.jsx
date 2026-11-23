"use client";
import { storeUrl } from "@/lib/storeUrl";
import RecaptchaPanel from "./RecaptchaPanel";
import SmtpServersPanel from "./SmtpServersPanel";
import { useState, useEffect, Component } from "react";
import { IconChevronDown, IconChevronUp, IconPlug, IconTriangleSquareCircle, IconCreditCardPay, IconUserPentagon, IconMailSpark, IconBuildingStore, IconShip, IconStar, IconCashRegister, IconTrash, IconKey, IconTruckDelivery, IconSquareRoundedCheck, IconSquareRounded, IconDeviceFloppy, IconRestore, IconAlertTriangle, IconUserDollar } from "@tabler/icons-react";
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
import { getEpsConfig } from "../lib/eps";
import { getAamarPayConfig } from "../lib/aamarpay";
import { getShurjoPayConfig } from "../lib/shurjopay";
import { getSslcommerzConfig } from "../lib/sslcommerz";
import { getPaystationConfig } from "../lib/paystation";
import { getUddoktaPayConfig } from "../lib/uddoktapay";
import { getPortWalletConfig } from "../lib/portwallet";
import { getBkashConfig } from "../lib/bkash";
import { getNagadConfig } from "../lib/nagad";
import { getPaddleConfig } from "../lib/paddle";
import { sortProviderEntries, moveProvider } from "../lib/sortProviders";

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



/*
  Currencies offered in Store Details. Picking one fills in its usual symbol;
  the symbol stays editable, so a store can print "Tk" or "৳" as it likes.
  A code not listed here can still be typed through "Other".
*/
const STORE_CURRENCIES = [
  { code: "BDT", label: "Bangladeshi Taka", symbol: "Tk" },
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "GBP", label: "British Pound", symbol: "£" },
  { code: "INR", label: "Indian Rupee", symbol: "₹" },
  { code: "PKR", label: "Pakistani Rupee", symbol: "Rs" },
  { code: "NPR", label: "Nepalese Rupee", symbol: "Rs" },
  { code: "LKR", label: "Sri Lankan Rupee", symbol: "Rs" },
  { code: "AED", label: "UAE Dirham", symbol: "AED" },
  { code: "SAR", label: "Saudi Riyal", symbol: "SAR" },
  { code: "QAR", label: "Qatari Riyal", symbol: "QAR" },
  { code: "KWD", label: "Kuwaiti Dinar", symbol: "KD" },
  { code: "MYR", label: "Malaysian Ringgit", symbol: "RM" },
  { code: "SGD", label: "Singapore Dollar", symbol: "S$" },
  { code: "IDR", label: "Indonesian Rupiah", symbol: "Rp" },
  { code: "THB", label: "Thai Baht", symbol: "฿" },
  { code: "PHP", label: "Philippine Peso", symbol: "₱" },
  { code: "JPY", label: "Japanese Yen", symbol: "¥" },
  { code: "CNY", label: "Chinese Yuan", symbol: "¥" },
  { code: "AUD", label: "Australian Dollar", symbol: "A$" },
  { code: "CAD", label: "Canadian Dollar", symbol: "C$" },
  { code: "NGN", label: "Nigerian Naira", symbol: "₦" },
  { code: "KES", label: "Kenyan Shilling", symbol: "KSh" },
  { code: "ZAR", label: "South African Rand", symbol: "R" },
  { code: "TRY", label: "Turkish Lira", symbol: "₺" },
  { code: "EGP", label: "Egyptian Pound", symbol: "E£" },
];

const SettingsGlobal = (props) => {
  const { formatDate, wrapCurrency } = useUtilsStore()


  const { token, cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang, paymentGateways, couriersPrams, setSettings, currency } = useCounterStore()

  // var orderId = props?.order_id
  var [loading, setloading] = useState(false);

  // Reset clears every field, so it asks first instead of firing on one click.
  var [confirmReset, setconfirmReset] = useState(false);

  var [settingsData, setsettingsData] = useState({ couriers: {}, apiKeys: {}, socialLinks: {}, emailTemplates: {}, smsTemplates: {}, productAttributes: [], paymentGateways: { enable: false, accounts: [] } });




  useEffect(() => {
    get_settings();
  }, []);


  /*
    Stripe's key is typed on this page, but what the server sees is what counts:
    `enable` here and a working key are two different things, and a store that
    has only the first would switch cards on and hear about it from its buyers.
    So the panel asks the server what is in force.
  */
  var [stripeStatus, setstripeStatus] = useState(null);

  /*
    EPS is the same story as Stripe, and more so: it needs all five of its
    credentials. Without this an admin switching EPS on with one missing would
    see nothing wrong and hear about it from buyers.
  */
  var [epsStatus, setepsStatus] = useState(null);

  /*
    And aamarPay, whose Store ID and token fields on this page are the only
    place its credentials come from. This is whether the server sees both.
  */
  var [aamarpayStatus, setaamarpayStatus] = useState(null);

  /* bKash too: what its panel shows is what the server sees. */
  var [bkashStatus, setbkashStatus] = useState(null);

  /* And Nagad, whose keys only count here once the server can parse them. */
  var [nagadStatus, setnagadStatus] = useState(null);

  /* Paddle (Classic): what the server has in force - vendor id, auth code, a usable public key. */
  var [paddleStatus, setpaddleStatus] = useState(null);

  /* shurjoPay: whether the server has a username and password in force (lib/shurjopay-server.js). */
  var [shurjopayStatus, setshurjopayStatus] = useState(null);

  /* SSLCOMMERZ: whether the server has a store id and password in force (lib/sslcommerz-server.js). */
  var [sslcommerzStatus, setsslcommerzStatus] = useState(null);

  /* PayStation: whether the server has a merchant id and password in force (lib/paystation-server.js). */
  var [paystationStatus, setpaystationStatus] = useState(null);

  /* UddoktaPay: whether the server has a panel and API key in force (lib/uddoktapay-server.js). */
  var [uddoktapayStatus, setuddoktapayStatus] = useState(null);

  /* PortWallet: whether the server has an app key and secret in force (lib/portwallet-server.js). */
  var [portwalletStatus, setportwalletStatus] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getPortWalletConfig()
      .then(config => { if (!cancelled) setportwalletStatus(config); })
      .catch(() => { if (!cancelled) setportwalletStatus(null); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getUddoktaPayConfig()
      .then(config => { if (!cancelled) setuddoktapayStatus(config); })
      .catch(() => { if (!cancelled) setuddoktapayStatus(null); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getPaystationConfig()
      .then(config => { if (!cancelled) setpaystationStatus(config); })
      .catch(() => { if (!cancelled) setpaystationStatus(null); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getSslcommerzConfig()
      .then(config => { if (!cancelled) setsslcommerzStatus(config); })
      .catch(() => { if (!cancelled) setsslcommerzStatus(null); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getShurjoPayConfig()
      .then(config => { if (!cancelled) setshurjopayStatus(config); })
      .catch(() => { if (!cancelled) setshurjopayStatus(null); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getPaddleConfig()
      .then(config => { if (!cancelled) setpaddleStatus(config); })
      .catch(() => { if (!cancelled) setpaddleStatus(null); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {

    let cancelled = false;

    getNagadConfig()
      .then(config => {
        if (!cancelled) {
          setnagadStatus(config);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setnagadStatus(null);
        }
      });

    return () => {
      cancelled = true;
    };

  }, []);

  useEffect(() => {

    let cancelled = false;

    getBkashConfig()
      .then(config => {
        if (!cancelled) {
          setbkashStatus(config);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setbkashStatus(null);
        }
      });

    return () => {
      cancelled = true;
    };

  }, []);

  useEffect(() => {

    let cancelled = false;

    getAamarPayConfig()
      .then(config => {
        if (!cancelled) {
          setaamarpayStatus(config);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setaamarpayStatus(null);
        }
      });

    return () => {
      cancelled = true;
    };

  }, []);

  useEffect(() => {

    let cancelled = false;

    getEpsConfig()
      .then(config => {
        if (!cancelled) {
          setepsStatus(config);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setepsStatus(null);
        }
      });

    return () => {
      cancelled = true;
    };

  }, []);

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
    "googleTagManager": {
      "id": 'googleTagManager',
      "enable": false,
      "label": "Google Tag Manager",
      args: {
        "id": "",
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
    /* Its servers are saved by SmtpServersPanel to their own option, not here. */
    "smtp": {
      "id": 'smtp',
      "enable": false,
      "label": "SMTP",
      args: {}
    },



    /* Saved by RecaptchaPanel to its own option, not here. */
    "reCAPTCHA": {
      "id": 'reCAPTCHA',
      "enable": false,
      "label": "reCAPTCHA",
      args: {}
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
    /* discountRules / discountRuleOptions belong to the Discount Rules extension. */
    var { fraudCheck, discountRules, discountRuleOptions, ...settingsOwnedHere } = settingsData;

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
                the settings it reads. A key WordPress did not store then shows
                as missing rather than in use.
              */
              getStripeConfig({ fresh: true }).then(setstripeStatus).catch(() => { })

              /*
                And EPS's panel, for the same reason and in the same way: the
                credentials just typed are in the blob that was saved, so what
                is in force has to be asked for again rather than assumed.
              */
              getEpsConfig({ fresh: true }).then(setepsStatus).catch(() => { })
              getAamarPayConfig({ fresh: true }).then(setaamarpayStatus).catch(() => { })
              getBkashConfig({ fresh: true }).then(setbkashStatus).catch(() => { })
              getNagadConfig({ fresh: true }).then(setnagadStatus).catch(() => { })
              getPaddleConfig({ fresh: true }).then(setpaddleStatus).catch(() => { })
              getShurjoPayConfig({ fresh: true }).then(setshurjopayStatus).catch(() => { })
              getSslcommerzConfig({ fresh: true }).then(setsslcommerzStatus).catch(() => { })
              getPaystationConfig({ fresh: true }).then(setpaystationStatus).catch(() => { })
              getUddoktaPayConfig({ fresh: true }).then(setuddoktapayStatus).catch(() => { })
              getPortWalletConfig({ fresh: true }).then(setportwalletStatus).catch(() => { })
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



  /*
    The logo row of a gateway's panel. A plain function rather than a component:
    it is called inline in every gateway's block, right after its Enable row,
    and a component declared in here would remount the picker on each keystroke.
  */
  function gatewayLogoRow(providerKey) {

    var logo = settingsData?.paymentGateways?.[providerKey]?.logo;

    return (
      <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
        <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Logo")}</div>
        <div className="">
          <div className="flex flex-col gap-3">
            {logo?.src && (
              <div className="w-fit border border-solid border-gray-400 rounded-sm overflow-hidden">
                <Image unoptimized src={logo.src} width={100} height={100} alt={``} />
              </div>
            )}
            <GalleryPicker popupClass="fixed h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50" onPick={(media) => {
              setsettingsData(prev => ({
                ...prev,
                paymentGateways: {
                  ...prev.paymentGateways,
                  [providerKey]: {
                    ...prev.paymentGateways[providerKey],
                    logo: { id: media.id, title: media.title, src: media.src }
                  }
                }
              }));
            }} />
          </div>
        </div>
      </div>
    );
  }

  /*
    Up/down arrows on a gateway or courier row. `group` is the settingsData key
    (paymentGateways or couriers) and `defs` the provider definitions the list
    is built from; the new order is saved as a `sort` on each entry.
  */
  function SortButtons({ group, defs, index }) {
    var count = Object.keys(defs || {}).length;

    function move(ev, to) {
      ev.preventDefault()
      ev.stopPropagation()
      setsettingsData(prev => ({
        ...prev,
        [group]: moveProvider(Object.entries(defs || {}), prev?.[group], index, to)
      }));
    }

    var btn = "flex h-6 w-6 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-30";

    return (
      <div className="flex items-center gap-0.5">
        <button type="button" title="Move up" className={btn} disabled={index <= 0} onClick={ev => move(ev, index - 1)}>
          <IconChevronUp size={16} />
        </button>
        <button type="button" title="Move down" className={btn} disabled={index >= count - 1} onClick={ev => move(ev, index + 1)}>
          <IconChevronDown size={16} />
        </button>
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

        <div className="flex items-center gap-2">
          <SortButtons group="paymentGateways" defs={paymentGateways} index={index} />
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

        <div className="flex items-center gap-2">
          <SortButtons group="couriers" defs={couriersPrams} index={index} />
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
                  setsettingsData({ apiKeys: {}, socialLinks: {}, emailTemplates: {}, productAttributes: [], paymentGateways: {} })
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
            disabled={loading}
            className={PRIMARY_BUTTON}

            onClick={ev => {
              update_settings()
            }}
          ><IconDeviceFloppy size={16} />{("Save")}</button>







        </div>
      </div>




      <Tabs
        disable={loading}
        activeTab={'store'}
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
          { label: "Affiliates", id: 'affiliates', icon: <IconUserDollar size={18} /> },
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
              {(() => {
                /* Saved as settings.currency { code, symbol, position }; the store
                   applies it on load and on save (currencyFromSettings), so prices,
                   charts, invoices and new orders all follow it. Unsaved, the
                   BDT / Tk / after defaults are what is in use. */
                const cur = settingsData?.currency ?? {};
                const code = String(cur.code ?? "").toUpperCase();
                const known = STORE_CURRENCIES.some((c) => c.code === code);
                /* "Other" stays chosen while its code is still being typed. */
                const other = cur.other === true || (code !== "" && !known);
                const setCurrency = (patch) =>
                  setsettingsData({ ...settingsData, currency: { ...cur, ...patch } });
                const fieldClass = "lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20";
                const rowClass = "flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1";
                const labelClass = "w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60";
                return (
                  <>
                    <div className={rowClass}>
                      <div className={labelClass}>{("Store Currency")}</div>
                      <div className="flex flex-col gap-2">
                        <select className={fieldClass} value={other ? "__other" : code} onChange={(ev) => {
                          const value = ev.target.value;
                          if (value === "__other") {
                            setCurrency({ code: known ? "" : code, other: true });
                            return;
                          }
                          const picked = STORE_CURRENCIES.find((c) => c.code === value);
                          setCurrency({ code: value, symbol: picked ? picked.symbol : "", other: false });
                        }}>
                          <option value="">{("Default (BDT)")}</option>
                          {STORE_CURRENCIES.map((c) => (
                            <option key={c.code} value={c.code}>{`${c.code} - ${c.label} (${c.symbol})`}</option>
                          ))}
                          <option value="__other">{("Other...")}</option>
                        </select>
                        {other && (
                          <input type="text" maxLength={3} placeholder={("ISO code, e.g. CHF")} className={fieldClass} value={code} onChange={(ev) => {
                            setCurrency({ code: ev.target.value.replace(/[^a-z]/gi, "").toUpperCase() });
                          }} />
                        )}
                        <p className="text-xs text-gray-500">{("Used for prices, orders and payments. Changing it does not convert existing prices or past orders.")}</p>
                      </div>
                    </div>
                    <div className={rowClass}>
                      <div className={labelClass}>{("Currency Symbol")}</div>
                      <div className="">
                        <input type="text" maxLength={8} placeholder="Tk" className={fieldClass} value={cur.symbol ?? ""} onChange={(ev) => setCurrency({ symbol: ev.target.value })} />
                      </div>
                    </div>
                    <div className={rowClass}>
                      <div className={labelClass}>{("Symbol Position")}</div>
                      <div className="flex flex-col gap-1">
                        <select className={fieldClass} value={cur.position ?? "after"} onChange={(ev) => setCurrency({ position: ev.target.value })}>
                          <option value="before">{("Before amount")}</option>
                          <option value="after">{("After amount")}</option>
                        </select>
                        <p className="text-xs text-gray-500">{("Preview: ")}{(cur.position ?? "after") === "before" ? `${cur.symbol || "Tk"}1,250` : `1,250${cur.symbol || "Tk"}`}</p>
                      </div>
                    </div>
                  </>
                );
              })()}
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


            </WidgetWrapper>



          </div>

        </Tab >

        <Tab index={1} id="affiliates">

          <div className="flex flex-col gap-5">

            <WidgetWrapper className={CARD_CLASSES} title="Affiliate referrals">

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Cookie duration (days)")}</div>
                <div className="flex flex-col gap-1.5">
                  {/* Read by the server's track_affiliate_click, which tells the storefront how long to keep the referral. */}
                  <input type="number" min="1" max="365" step="1" placeholder="30" className="lg:w-40 w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.affiliates?.cookieDays ?? ""} onChange={ev => {
                    var value = ev.target.value === "" ? "" : Math.min(365, Math.max(1, parseInt(ev.target.value) || 1));
                    setsettingsData({ ...settingsData, affiliates: { ...settingsData?.affiliates, cookieDays: value } })
                  }} />
                  <p className="text-xs text-gray-500">{("How long after clicking an affiliate link an order still earns the affiliate commission. 1 to 365 days; empty uses 30. A newer affiliate link replaces an older one. Applies to clicks from now on.")}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Minimum payout amount")}</div>
                <div className="flex flex-col gap-1.5">
                  {/* Enforced by create/update_affiliate_payout; shown to affiliates on their dashboard. */}
                  <input type="number" min="0" step="0.01" placeholder="0" className="lg:w-40 w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.affiliates?.minPayout ?? ""} onChange={ev => {
                    var value = ev.target.value === "" ? "" : Math.max(0, parseFloat(ev.target.value) || 0);
                    setsettingsData({ ...settingsData, affiliates: { ...settingsData?.affiliates, minPayout: value } })
                  }} />
                  <p className="text-xs text-gray-500">{("Payouts below this amount can't be recorded, and affiliates see how far their balance is from it. Empty or 0 means no minimum.")}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Payout request emails go to")}</div>
                <div className="flex flex-col gap-1.5">
                  {/* Read by the server when an affiliate requests a payout (payout_notify_recipients). */}
                  <input type="text" placeholder={("WordPress admin email")} className="w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={settingsData?.affiliates?.notifyEmails ?? ""} onChange={ev => {
                    setsettingsData({ ...settingsData, affiliates: { ...settingsData?.affiliates, notifyEmails: ev.target.value } })
                  }} />
                  {(() => {
                    var bad = String(settingsData?.affiliates?.notifyEmails ?? "").split(/[\s,;]+/).filter(e => e && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
                    return bad.length > 0
                      ? <p className="text-xs text-rose-600">{("Not an email address, will be skipped")}: {bad.join(", ")}</p>
                      : <p className="text-xs text-gray-500">{("Separate several addresses with commas. Empty sends to the WordPress admin email.")}</p>;
                  })()}
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Email affiliates when paid")}</div>
                <div className="flex flex-col gap-1.5">
                  {/* On unless saved as false - the server reads it the same way (email_on_paid_enabled). */}
                  <div className="flex gap-3">
                    <input type="checkbox" id="affiliates-email-on-paid" checked={settingsData?.affiliates?.emailOnPaid !== false} className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" onChange={ev => {
                      setsettingsData({ ...settingsData, affiliates: { ...settingsData?.affiliates, emailOnPaid: ev.target.checked } })
                    }} />
                    <label htmlFor="affiliates-email-on-paid" className="cursor-pointer">{settingsData?.affiliates?.emailOnPaid !== false ? "Enabled" : "Disabled"}</label>
                  </div>
                  <p className="text-xs text-gray-500">{("When a payout is marked paid, the affiliate gets an email with the amount, payment method and transaction ID. Replies go to the payout request address above.")}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Email affiliates when a request is cancelled")}</div>
                <div className="flex flex-col gap-1.5">
                  {/* On unless saved as false - the server reads it the same way (email_on_cancel_enabled). */}
                  <div className="flex gap-3">
                    <input type="checkbox" id="affiliates-email-on-cancel" checked={settingsData?.affiliates?.emailOnCancel !== false} className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" onChange={ev => {
                      setsettingsData({ ...settingsData, affiliates: { ...settingsData?.affiliates, emailOnCancel: ev.target.checked } })
                    }} />
                    <label htmlFor="affiliates-email-on-cancel" className="cursor-pointer">{settingsData?.affiliates?.emailOnCancel !== false ? "Enabled" : "Disabled"}</label>
                  </div>
                  <p className="text-xs text-gray-500">{("When you cancel an affiliate's payout request, they get an email with your optional message. Not sent when affiliates cancel their own request.")}</p>
                </div>
              </div>

            </WidgetWrapper>

          </div>

        </Tab>

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



        <Tab index={3} id="payment-gateways">



          <WidgetWrapper className={CARD_CLASSES} title="Payment Gateways">







            <div className="flex flex-col gap-2">


              <div className="flex gap-2 flex-col">
                {sortProviderEntries(Object.entries(paymentGateways || {}), settingsData?.paymentGateways).map((args, index) => {

                  var providerKey = args[0];
                  var item = args[1];




                  return (
                    <div className="" key={providerKey}>

                      <ToggleContent title={<PaymentGatewaysItemTitle item={item} enable={settingsData?.paymentGateways?.[providerKey]?.['enable']} index={index} />}
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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}




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
                                </div>
                              )}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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

                                  {/* What the server is actually using, which is
                                      not always what is typed below: nothing takes
                                      effect until Save. */}
                                  <div className="py-1 text-xs">
                                    {bkashStatus?.enabled && (
                                      <div className="text-green-700">
                                        Credentials in use
                                        {bkashStatus?.sandbox
                                          ? " - sandbox mode, no real money will move"
                                          : " - live mode, real payments will be taken"}
                                      </div>
                                    )}
                                    {bkashStatus && !bkashStatus?.enabled && (
                                      <div className="text-red-600">
                                        Not configured - bKash will not appear at checkout,
                                        whatever the switch above says. Still missing:
                                        {!bkashStatus?.app_configured && " app key or app secret;"}
                                        {!bkashStatus?.credentials_configured && " username or password;"}
                                        {" "}Save the page after filling them in.
                                      </div>
                                    )}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("App Key")}</div>
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("App Secret")}</div>
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
                                </div>
                              )}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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
                                </div>
                              )}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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

                                  {/* What the server is actually using, which is
                                      not always what is typed below: nothing takes
                                      effect until Save. */}
                                  <div className="py-1 text-xs">
                                    {nagadStatus?.enabled && (
                                      <div className="text-green-700">
                                        Credentials in use
                                        {nagadStatus?.sandbox
                                          ? " - sandbox mode, no real money will move"
                                          : " - live mode, real payments will be taken"}
                                      </div>
                                    )}
                                    {nagadStatus && !nagadStatus?.enabled && (
                                      <div className="text-red-600">
                                        Not configured - Nagad will not appear at checkout,
                                        whatever the switch above says. Still missing:
                                        {!nagadStatus?.merchant_configured && " merchant id or number;"}
                                        {!nagadStatus?.private_key_configured && " a readable merchant private key;"}
                                        {!nagadStatus?.public_key_configured && " a readable Nagad public key;"}
                                        {" "}Save the page after filling them in.
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Merchant ID")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={'merchant_id'}
                                        placeholder={'merchant_id'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['merchant_id'] ?? ''}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Merchant Number")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={'merchant_number'}
                                        placeholder={'merchant_number'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['merchant_number'] ?? ''}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Merchant Private Key")}</div>
                                    <div className="flex gap-3">
                                      <textarea
                                        rows={5}
                                        name={'merchant_private_key'}
                                        placeholder={'merchant_private_key'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['merchant_private_key'] ?? ''}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Nagad Public Key")}</div>
                                    <div className="flex gap-3">
                                      <textarea
                                        rows={5}
                                        name={'gateway_public_key'}
                                        placeholder={'gateway_public_key'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['gateway_public_key'] ?? ''}
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
                                </div>
                              )}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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
                                </div>
                              )}

                            </>
                          )}



                          {providerKey == 'portwallet' && (() => {
                            /* PortWallet (PortPos): app key + secret key (lib/portwallet-server.js). */
                            var pw = settingsData?.paymentGateways?.portwallet ?? {};
                            var setPw = (name, value) => setsettingsData(prev => ({
                              ...prev,
                              paymentGateways: {
                                ...prev.paymentGateways,
                                portwallet: { ...prev.paymentGateways?.portwallet, [name]: value }
                              }
                            }));
                            return (
                              <>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" id="enable-portwallet" checked={!!pw.enable} onChange={() => setPw('enable', !pw.enable)} />
                                    <label htmlFor="enable-portwallet" className="cursor-pointer">{pw.enable ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                {pw.enable && (
                                  <div className="flex flex-col gap-5">
                                    {gatewayLogoRow(providerKey)}

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="portwallet-sandbox" checked={pw.sandbox === true} onChange={() => setPw('sandbox', pw.sandbox !== true)} />
                                          <label htmlFor="portwallet-sandbox" className="cursor-pointer">{pw.sandbox === true ? "Sandbox (api-sandbox.portpos.com)" : "Live"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">Sandbox keys come from merchant-sandbox.portpos.com (Applications → Add Application); live keys will not work there.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("App key")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" name="portwallet_app_key" autoComplete="off" data-1p-ignore="true" data-lpignore="true" placeholder="App key" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={pw.app_key ?? ''} onChange={ev => setPw('app_key', ev.target.value)} />
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Secret key")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="password" name="portwallet_secret_key" autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" placeholder="Secret key" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={pw.secret_key ?? ''} onChange={ev => setPw('secret_key', ev.target.value)} />
                                        {portwalletStatus?.enabled && (
                                          <div className="text-xs text-green-700">In use{portwalletStatus?.sandbox ? " - sandbox, no real money" : " - live, real payments"}</div>
                                        )}
                                        {!portwalletStatus?.enabled && (
                                          <div className="text-xs text-red-600">
                                            Not in use - PortWallet will not appear at checkout until an app key and secret key are saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="Pay by card, bKash, Nagad and more" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={pw.description ?? ''} onChange={ev => setPw('description', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Shown under the PortWallet button at checkout.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="font-mono text-xs select-all break-all">{portwalletStatus?.ipn_url || "/api/portwallet/ipn"}</div>
                                        <div className="text-xs text-gray-600">
                                          Sent with every payment, so there is nothing to set in the PortWallet panel. It settles orders whose buyer closed the tab before coming back, and has to be reachable from the internet.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 py-3.5">
                                      <div className="text-xs text-gray-600">
                                        PortWallet takes BDT, USD, GBP and EUR; it is hidden at checkout for orders in another currency. Every payment is checked with PortWallet's invoice API before the order is marked paid. The secret key is stored with the store settings and stripped from the copy the storefront receives.
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}

                          {providerKey == 'uddoktapay' && (() => {
                            /* UddoktaPay: panel URL + API key (lib/uddoktapay-server.js). */
                            var up = settingsData?.paymentGateways?.uddoktapay ?? {};
                            var setUp = (name, value) => setsettingsData(prev => ({
                              ...prev,
                              paymentGateways: {
                                ...prev.paymentGateways,
                                uddoktapay: { ...prev.paymentGateways?.uddoktapay, [name]: value }
                              }
                            }));
                            return (
                              <>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" id="enable-uddoktapay" checked={!!up.enable} onChange={() => setUp('enable', !up.enable)} />
                                    <label htmlFor="enable-uddoktapay" className="cursor-pointer">{up.enable ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                {up.enable && (
                                  <div className="flex flex-col gap-5">
                                    {gatewayLogoRow(providerKey)}

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="uddoktapay-sandbox" checked={up.sandbox === true} onChange={() => setUp('sandbox', up.sandbox !== true)} />
                                          <label htmlFor="uddoktapay-sandbox" className="cursor-pointer">{up.sandbox === true ? "Sandbox (sandbox.uddoktapay.com)" : "Live"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">Sandbox uses UddoktaPay's public test panel and, if no API key is saved, its public test key. On its payment page pick any method, enter any unused transaction ID and choose "Completed".</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Panel URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="url" name="uddoktapay_base_url" autoComplete="off" placeholder="https://pay.yourdomain.com" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={up.base_url ?? ''} onChange={ev => setUp('base_url', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Your UddoktaPay panel's address (the API base URL ending in /api also works). Not used in sandbox.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("API key")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="password" name="uddoktapay_api_key" autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" placeholder="From Brand Settings → API key in your panel" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={up.api_key ?? ''} onChange={ev => setUp('api_key', ev.target.value)} />
                                        {uddoktapayStatus?.enabled && (
                                          <div className="text-xs text-green-700">In use{uddoktapayStatus?.sandbox ? (uddoktapayStatus?.using_sandbox_key ? " - sandbox with the public test key, no real money" : " - sandbox, no real money") : " - live, real payments"}</div>
                                        )}
                                        {!uddoktapayStatus?.enabled && (
                                          <div className="text-xs text-red-600">
                                            Not in use - UddoktaPay will not appear at checkout until a panel URL and API key are saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="Pay with bKash, Nagad, Rocket or Upay" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={up.description ?? ''} onChange={ev => setUp('description', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Shown under the UddoktaPay button at checkout.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Webhook URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="font-mono text-xs select-all break-all">{uddoktapayStatus?.ipn_url || "/api/uddoktapay/ipn"}</div>
                                        <div className="text-xs text-gray-600">
                                          Sent with every payment, so there is nothing to set in the panel. It settles orders whose buyer closed the tab, and pending payments you approve later; it has to be reachable from the internet.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 py-3.5">
                                      <div className="text-xs text-gray-600">
                                        UddoktaPay charges in BDT only, so it is hidden at checkout for orders in another currency. Every payment is checked with your panel's verify-payment API before the order is marked paid; a payment left pending waits for you to approve it in the panel. The API key is stored with the store settings and stripped from the copy the storefront receives.
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}

                          {providerKey == 'paystation' && (() => {
                            /* PayStation: merchant id + password (lib/paystation-server.js). */
                            var ps = settingsData?.paymentGateways?.paystation ?? {};
                            var setPs = (name, value) => setsettingsData(prev => ({
                              ...prev,
                              paymentGateways: {
                                ...prev.paymentGateways,
                                paystation: { ...prev.paymentGateways?.paystation, [name]: value }
                              }
                            }));
                            return (
                              <>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" id="enable-paystation" checked={!!ps.enable} onChange={() => setPs('enable', !ps.enable)} />
                                    <label htmlFor="enable-paystation" className="cursor-pointer">{ps.enable ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                {ps.enable && (
                                  <div className="flex flex-col gap-5">
                                    {gatewayLogoRow(providerKey)}

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="paystation-sandbox" checked={ps.sandbox === true} onChange={() => setPs('sandbox', ps.sandbox !== true)} />
                                          <label htmlFor="paystation-sandbox" className="cursor-pointer">{ps.sandbox === true ? "Sandbox (sandbox.paystation.com.bd)" : "Live"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">Sandbox needs the sandbox merchant ID and password PayStation gives you; live credentials will not work there.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Merchant ID")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" name="paystation_merchant_id" autoComplete="off" data-1p-ignore="true" data-lpignore="true" placeholder="e.g. 204-16537301811" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={ps.merchant_id ?? ''} onChange={ev => setPs('merchant_id', ev.target.value)} />
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Password")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="password" name="paystation_password" autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" placeholder="Merchant password" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={ps.password ?? ''} onChange={ev => setPs('password', ev.target.value)} />
                                        {paystationStatus?.enabled && (
                                          <div className="text-xs text-green-700">In use{paystationStatus?.sandbox ? " - sandbox, no real money" : " - live, real payments"}</div>
                                        )}
                                        {!paystationStatus?.enabled && (
                                          <div className="text-xs text-red-600">
                                            Not in use - PayStation will not appear at checkout until a merchant ID and password are saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Buyer pays the charge")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="paystation-charge" checked={ps.pay_with_charge === true} onChange={() => setPs('pay_with_charge', ps.pay_with_charge !== true)} />
                                          <label htmlFor="paystation-charge" className="cursor-pointer">{ps.pay_with_charge === true ? "Buyer pays PayStation's charge" : "Store pays PayStation's charge"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">When on, PayStation adds its processing charge on top of the order total at its payment page.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="Pay by card, bKash, Nagad, Rocket or Upay" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={ps.description ?? ''} onChange={ev => setPs('description', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Shown under the PayStation button at checkout.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="font-mono text-xs select-all break-all">{paystationStatus?.ipn_url || "/api/paystation/ipn"}</div>
                                        <div className="text-xs text-gray-600">
                                          Ask PayStation to send IPNs for your merchant account here. It settles orders whose buyer closed the tab before coming back, and has to be reachable from the internet.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 py-3.5">
                                      <div className="text-xs text-gray-600">
                                        PayStation charges in BDT only, so it is hidden at checkout for orders in another currency. Every payment is checked with PayStation's transaction-status API before the order is marked paid. The password is stored with the store settings and stripped from the copy the storefront receives.
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}

                          {providerKey == 'sslcommerz' && (() => {
                            /* SSLCOMMERZ API v4: store id + store password (lib/sslcommerz-server.js). `token` is where the old panel kept the password; still read. */
                            var ssl = settingsData?.paymentGateways?.sslcommerz ?? {};
                            var setSsl = (name, value) => setsettingsData(prev => ({
                              ...prev,
                              paymentGateways: {
                                ...prev.paymentGateways,
                                sslcommerz: { ...prev.paymentGateways?.sslcommerz, [name]: value }
                              }
                            }));
                            return (
                              <>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" id="enable-sslcommerz" checked={!!ssl.enable} onChange={() => setSsl('enable', !ssl.enable)} />
                                    <label htmlFor="enable-sslcommerz" className="cursor-pointer">{ssl.enable ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                {ssl.enable && (
                                  <div className="flex flex-col gap-5">
                                    {gatewayLogoRow(providerKey)}

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="sslcommerz-sandbox" checked={ssl.sandbox === true} onChange={() => setSsl('sandbox', ssl.sandbox !== true)} />
                                          <label htmlFor="sslcommerz-sandbox" className="cursor-pointer">{ssl.sandbox === true ? "Sandbox (sandbox.sslcommerz.com)" : "Live"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">Sandbox needs a sandbox store from developer.sslcommerz.com (the public demo store is <span className="font-mono select-all">testbox</span> / <span className="font-mono select-all">qwerty</span>).</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" name="sslcommerz_store_id" autoComplete="off" data-1p-ignore="true" data-lpignore="true" placeholder="Store ID" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={ssl.store_id ?? ''} onChange={ev => setSsl('store_id', ev.target.value)} />
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store password")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="password" name="sslcommerz_store_passwd" autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" placeholder="Store password (API/secret key)" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={ssl.store_passwd ?? ssl.token ?? ''} onChange={ev => setSsl('store_passwd', ev.target.value)} />
                                        {sslcommerzStatus?.enabled && (
                                          <div className="text-xs text-green-700">In use{sslcommerzStatus?.sandbox ? " - sandbox, no real money" : " - live, real payments"}</div>
                                        )}
                                        {!sslcommerzStatus?.enabled && (
                                          <div className="text-xs text-red-600">
                                            Not in use - SSLCOMMERZ will not appear at checkout until a store ID and password are saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="Pay by card, mobile banking or internet banking" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={ssl.description ?? ''} onChange={ev => setSsl('description', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Shown under the SSLCOMMERZ button at checkout.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="font-mono text-xs select-all break-all">{sslcommerzStatus?.ipn_url || "/api/sslcommerz/ipn"}</div>
                                        <div className="text-xs text-gray-600">
                                          Sent with every payment, so nothing has to be set in the merchant panel (you can also save it there). It settles orders whose buyer closed the tab, and has to be reachable from the internet.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 py-3.5">
                                      <div className="text-xs text-gray-600">
                                        Offered at checkout for orders in {(sslcommerzStatus?.currencies || ['BDT']).join(', ')}. Every payment is checked with SSLCOMMERZ's validation API before the order is marked paid; payments SSLCOMMERZ flags as risky are left unpaid for you to review. The store password is stored with the store settings and stripped from the copy the storefront receives.
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}
                                </div>
                              )}

                            </>
                          )}
                          {providerKey == 'paddle' && (() => {
                            /* Paddle Classic: vendor id + auth code create the pay links; the public key verifies its webhooks (lib/paddle-server.js). */
                            var paddle = settingsData?.paymentGateways?.paddle ?? {};
                            var setPaddle = (name, value) => setsettingsData(prev => ({
                              ...prev,
                              paymentGateways: {
                                ...prev.paymentGateways,
                                paddle: { ...prev.paymentGateways?.paddle, [name]: value }
                              }
                            }));
                            return (
                              <>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" id="enable-paddle" checked={!!paddle.enable} onChange={() => setPaddle('enable', !paddle.enable)} />
                                    <label htmlFor="enable-paddle" className="cursor-pointer">{paddle.enable ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                {paddle.enable && (
                                  <div className="flex flex-col gap-5">
                                    {gatewayLogoRow(providerKey)}

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Account")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="text-xs text-gray-600">
                                          For a <span className="font-semibold">Paddle Classic</span> vendor account (vendors.paddle.com: Vendor ID and auth codes). Paddle Billing accounts use different credentials and will not work here.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="paddle-sandbox" checked={paddle.sandbox === true} onChange={() => setPaddle('sandbox', paddle.sandbox !== true)} />
                                          <label htmlFor="paddle-sandbox" className="cursor-pointer">{paddle.sandbox === true ? "Sandbox (sandbox-vendors.paddle.com)" : "Live"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">Sandbox needs the credentials of your sandbox vendor account, not the live one.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Vendor ID")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" inputMode="numeric" name="paddle_vendor_id" autoComplete="off" data-1p-ignore="true" data-lpignore="true" placeholder="e.g. 123456" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={paddle.vendor_id ?? ''} onChange={ev => setPaddle('vendor_id', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Paddle &gt; Developer Tools &gt; Authentication.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Auth code")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="password" name="paddle_vendor_auth_code" autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" placeholder="API auth code" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={paddle.vendor_auth_code ?? ''} onChange={ev => setPaddle('vendor_auth_code', ev.target.value)} />
                                        {paddleStatus?.enabled && (
                                          <div className="text-xs text-green-700">In use{paddleStatus?.sandbox ? " - sandbox, no real money" : " - live, real payments"}</div>
                                        )}
                                        {!paddleStatus?.enabled && (
                                          <div className="text-xs text-red-600">
                                            Not in use - Paddle will not appear at checkout until a vendor ID and auth code are saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Public key")}</div>
                                      <div className="flex flex-col gap-1">
                                        <textarea rows={4} autoComplete="off" spellCheck={false} placeholder={"-----BEGIN PUBLIC KEY-----"} className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 font-mono text-xs" value={paddle.public_key ?? ''} onChange={ev => setPaddle('public_key', ev.target.value)} />
                                        {paddleStatus?.public_key_configured && (
                                          <div className="text-xs text-green-700">Public key in use - webhooks are verified.</div>
                                        )}
                                        {!paddleStatus?.public_key_configured && (
                                          <div className="text-xs text-yellow-700">
                                            No usable public key. Payments still work when buyers come back from Paddle, but an order stays unpaid if the buyer closes the tab first.
                                          </div>
                                        )}
                                        {paddleStatus?.webhook_url && (
                                          <div className="text-xs text-gray-600">
                                            Paddle &gt; Developer Tools &gt; Public Key. Each payment tells Paddle to notify
                                            <span className="font-mono select-all break-all"> {paddleStatus.webhook_url}</span>; it has to be reachable from the internet.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Charge currency")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="USD" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={paddle.currency ?? ''} onChange={ev => setPaddle('currency', ev.target.value.toUpperCase())} />
                                        <div className="text-xs text-gray-600">
                                          In use: {paddleStatus?.currency || "USD"}. Paddle does not charge in BDT; use a currency enabled on your Paddle account.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Exchange rate")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="e.g. 120" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={paddle.exchange_rate ?? ''} onChange={ev => setPaddle('exchange_rate', ev.target.value)} />
                                        <div className="text-xs text-gray-600">
                                          How many {currency || 'store currency'} make 1 {paddleStatus?.currency || 'USD'}. The order total is divided by it and rounded up.
                                        </div>
                                        {paddleStatus?.enabled && currency && paddleStatus?.currency !== currency && !(paddleStatus?.exchange_rate > 0) && (
                                          <div className="text-xs text-red-600">
                                            This store prices in {currency} and no rate is in use, so Paddle payments will be refused until one is saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="Pay by card or PayPal through Paddle" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={paddle.description ?? ''} onChange={ev => setPaddle('description', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Shown under the Paddle button at checkout.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 py-3.5">
                                      <div className="text-xs text-gray-600">
                                        Paddle is the merchant of record and only accepts what its policy allows (mainly software and digital products); check that your products qualify before turning it on. The auth code and public key are stored with the store settings and stripped from the copy the storefront receives.
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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
                                          is not always what is typed above:
                                          nothing takes effect until Save. */}
                                      {stripeStatus?.enabled && (
                                        <div className="text-xs text-green-700">
                                          In use
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
                                      settings can read them. Use a restricted key where you
                                      can, and rotate it in Stripe if you suspect it has leaked.
                                    </div>
                                  </div>
                                </div>
                              )}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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

                                  {providerKey == 'aamarpay' && (
                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="font-mono text-xs select-all break-all">{aamarpayStatus?.ipn_url || "/api/aamarpay/ipn"}</div>
                                        <div className="text-xs text-gray-600">
                                          Sent with every payment as the IPN address. aamarPay's API documentation does not describe IPNs and its sandbox did not send one in testing, so do not count on it: orders are settled when the buyer returns to the store. If aamarPay support turns on IPN for your account, give them this URL - it has to be reachable from the internet.
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                            </>
                          )}
                          {providerKey == 'shurjopay' && (() => {
                            /* shurjoPay API v2: merchant username + password get a token; prefix tags its order ids (lib/shurjopay-server.js). */
                            var shurjopay = settingsData?.paymentGateways?.shurjopay ?? {};
                            var setShurjoPay = (name, value) => setsettingsData(prev => ({
                              ...prev,
                              paymentGateways: {
                                ...prev.paymentGateways,
                                shurjopay: { ...prev.paymentGateways?.shurjopay, [name]: value }
                              }
                            }));
                            return (
                              <>
                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" id="enable-shurjopay" checked={!!shurjopay.enable} onChange={() => setShurjoPay('enable', !shurjopay.enable)} />
                                    <label htmlFor="enable-shurjopay" className="cursor-pointer">{shurjopay.enable ? "Enabled" : "Disabled"}</label>
                                  </div>
                                </div>

                                {shurjopay.enable && (
                                  <div className="flex flex-col gap-5">
                                    {gatewayLogoRow(providerKey)}

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="flex gap-3">
                                          <input type="checkbox" id="shurjopay-sandbox" checked={shurjopay.sandbox === true} onChange={() => setShurjoPay('sandbox', shurjopay.sandbox !== true)} />
                                          <label htmlFor="shurjopay-sandbox" className="cursor-pointer">{shurjopay.sandbox === true ? "Sandbox (sandbox.shurjopayment.com)" : "Live"}</label>
                                        </div>
                                        <div className="text-xs text-gray-600">shurjoPay's public sandbox account is username <span className="font-mono select-all">sp_sandbox</span>, password <span className="font-mono select-all">pyyk97hu&amp;6u6</span>, prefix <span className="font-mono select-all">NOK</span>.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Username")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" name="shurjopay_username" autoComplete="off" data-1p-ignore="true" data-lpignore="true" placeholder="Merchant username" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={shurjopay.username ?? ''} onChange={ev => setShurjoPay('username', ev.target.value)} />
                                        <div className="text-xs text-gray-600">The API username shurjoPay sent with your merchant account.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Password")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="password" name="shurjopay_password" autoComplete="new-password" data-1p-ignore="true" data-lpignore="true" placeholder="Merchant password" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={shurjopay.password ?? ''} onChange={ev => setShurjoPay('password', ev.target.value)} />
                                        {shurjopayStatus?.enabled && (
                                          <div className="text-xs text-green-700">In use{shurjopayStatus?.sandbox ? " - sandbox, no real money" : " - live, real payments"}</div>
                                        )}
                                        {!shurjopayStatus?.enabled && (
                                          <div className="text-xs text-red-600">
                                            Not in use - shurjoPay will not appear at checkout until a username and password are saved.
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Transaction prefix")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" maxLength={5} placeholder="e.g. NOK" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={shurjopay.prefix ?? ''} onChange={ev => setShurjoPay('prefix', ev.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase())} />
                                        <div className="text-xs text-gray-600">
                                          The prefix shurjoPay assigned to your store (up to 5 letters/digits). In use: {shurjopayStatus?.prefix || "NOK"}.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                      <div className="flex flex-col gap-1">
                                        <input type="text" placeholder="Pay by card, bKash, Nagad, Rocket or internet banking" className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20" value={shurjopay.description ?? ''} onChange={ev => setShurjoPay('description', ev.target.value)} />
                                        <div className="text-xs text-gray-600">Shown under the shurjoPay button at checkout.</div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                      <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN URL")}</div>
                                      <div className="flex flex-col gap-1">
                                        <div className="font-mono text-xs select-all break-all">{shurjopayStatus?.ipn_url || "/api/shurjopay/ipn"}</div>
                                        <div className="text-xs text-gray-600">
                                          Ask shurjoPay (or set it in the merchant panel) to send IPNs here. It settles orders whose buyer closed the tab before coming back. It has to be reachable from the internet; each notification is checked with shurjoPay's verification API before an order is marked paid.
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex flex-col gap-2 py-3.5">
                                      <div className="text-xs text-gray-600">
                                        shurjoPay charges in BDT only, so it is hidden at checkout for orders in another currency. Buyers are sent back to <span className="font-mono">/api/shurjopay/callback</span>, where the payment is checked with shurjoPay before the order is marked paid. The username and password are stored with the store settings and stripped from the copy the storefront receives.
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            );
                          })()}

                          {providerKey == 'eps' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Enable?")}</div>
                                <div className="flex gap-3">
                                  <input type="checkbox" name="enable" id={`enable-${providerKey}`}
                                    checked={settingsData?.paymentGateways?.[providerKey]?.['enable'] ?? false}
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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}

                                  <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                    <div className="flex gap-3">
                                      <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                        checked={settingsData?.paymentGateways?.[providerKey]?.['sandbox'] ?? false}
                                        className=" !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"

                                        value={settingsData?.paymentGateways?.[providerKey]?.['sandbox']}
                                        onChange={(ev) => {

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

                                  {/* What the server is actually using, which is
                                      not always what is typed below: nothing takes
                                      effect until Save. */}
                                  <div className="py-1 text-xs">
                                    {epsStatus?.enabled && (
                                      <div className="text-green-700">
                                        Credentials in use
                                        {epsStatus?.sandbox
                                          ? " - sandbox mode, no real money will move"
                                          : " - live mode, real payments will be taken"}
                                      </div>
                                    )}
                                    {epsStatus && !epsStatus?.enabled && (
                                      <div className="text-red-600">
                                        Not configured - EPS will not appear at checkout,
                                        whatever the switch above says. Still missing:
                                        {!epsStatus?.merchant_configured && " merchant id or store id;"}
                                        {!epsStatus?.credentials_configured && " username or password;"}
                                        {!epsStatus?.hash_key_configured && " hash key;"}
                                        {" "}Save the page after filling them in.
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Merchant ID")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={'merchant_id'}
                                        placeholder={'from the EPS merchant portal'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['merchant_id'] ?? ''}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Store ID")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={'store_id'}
                                        placeholder={'from the EPS merchant portal'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['store_id'] ?? ''}
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
                                        placeholder={'merchant login email'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['username'] ?? ''}
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
                                        type="password"
                                        autoComplete="off"
                                        name={'password'}
                                        placeholder={'••••••••'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['password'] ?? ''}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Hash key")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="password"
                                        autoComplete="off"
                                        name={'hash_key'}
                                        placeholder={'••••••••'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['hash_key'] ?? ''}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN secret key")}</div>
                                    <div className="flex flex-col gap-1">
                                      <input
                                        type="password"
                                        autoComplete="new-password"
                                        data-1p-ignore="true"
                                        data-lpignore="true"
                                        name={'ipn_secret'}
                                        placeholder={'Optional - the hash key is used when empty'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['ipn_secret'] ?? ''}
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
                                      <div className="text-xs text-gray-600">The Secret Key EPS encrypts IPNs with, if EPS gave you one separate from the hash key.</div>
                                    </div>
                                  </div>

                                  <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("IPN URL")}</div>
                                    <div className="flex flex-col gap-1">
                                      <div className="font-mono text-xs select-all break-all">{epsStatus?.ipn_url || "/api/eps/ipn"}</div>
                                      <div className="text-xs text-gray-600">
                                        Give this URL to EPS (merchant panel or support) as your IPN endpoint. It settles orders whose buyer closed the tab before coming back, and has to be reachable from the internet. Every IPN is checked with EPS's status API before the order is marked paid.
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Description")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={'description'}
                                        placeholder={'Pay by card, bKash, Nagad, Rocket or internet banking'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.paymentGateways?.[providerKey]?.['description'] ?? ''}
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

                                  <div className="py-3.5 text-xs text-gray-600">
                                    <div>
                                      The password and hash key are stored with these
                                      settings, so they are stripped out of the copy the
                                      storefront is served - a browser only ever learns
                                      whether EPS is usable, never what these say.
                                    </div>
                                    <div className="pt-2">
                                      EPS settles in BDT and its API takes no currency field,
                                      so it is only offered for orders priced in taka.
                                    </div>
                                    <div className="pt-2">
                                      EPS publishes no server-to-server notification, so an
                                      order whose buyer closes the tab on the EPS page stays
                                      pending until they come back. Nothing is charged twice -
                                      a paid order is never sent to the gateway again - but
                                      those are worth checking against the EPS portal.
                                    </div>
                                  </div>
                                </div>
                              )}

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

                              {settingsData?.paymentGateways?.[providerKey]?.['enable'] && (
                                <div className="flex flex-col gap-5">
                                  {gatewayLogoRow(providerKey)}


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
                                </div>
                              )}

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
                    <div className="" key={providerKey}>

                      <ToggleContent key={index} title={<APIKeyItemTitle item={item} enable={providerKey == 'smtp' || providerKey == 'reCAPTCHA' ? undefined : settingsData?.apiKeys?.[providerKey]?.['enabled']} index={index} />}
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
                                    value={storeUrl("facebook-product-feed")}



                                  />

                                  <div className="inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-400 cursor-pointer "

                                    onClick={ev => {


                                      navigator.clipboard.writeText(storeUrl("facebook-product-feed"));
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
                          {providerKey == 'googleTagManager' && (

                            <>

                              <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Container ID")}</div>
                                <div className="flex flex-col gap-1">
                                  <input
                                    type="text"
                                    name={'id'}
                                    placeholder={'GTM-XXXXXXX'}
                                    className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                    value={settingsData?.apiKeys?.[providerKey]?.['id'] || ''}
                                    onChange={(ev) => {
                                      const { name, value } = ev.target;
                                      setsettingsData(prev => ({
                                        ...prev,
                                        apiKeys: {
                                          ...prev.apiKeys,
                                          [providerKey]: {
                                            ...prev?.apiKeys?.[providerKey],
                                            [name]: value.trim().toUpperCase()
                                          }
                                        }
                                      }));

                                    }}
                                  />
                                  {settingsData?.apiKeys?.[providerKey]?.['id'] &&
                                    !/^GTM-[A-Z0-9]+$/.test(settingsData.apiKeys[providerKey]['id']) && (
                                      <p className="text-xs text-red-500">{("Container ID should look like GTM-XXXXXXX.")}</p>
                                    )}
                                  <p className="text-xs text-gray-500">{("Loaded on the storefront only while this item is enabled.")}</p>
                                </div>
                              </div>


                            </>
                          )}
                          {providerKey == 'smtp' && <SmtpServersPanel />}

                          {providerKey == 'reCAPTCHA' && <RecaptchaPanel />}

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
        <Tab index={7} id="couriers">

          {/* {JSON.stringify(settingsData)} */}

          <div className="flex flex-col gap-5">




            <WidgetWrapper className={CARD_CLASSES} title="Couriers">








              <div className="flex flex-col gap-2">


                <div className="flex gap-2 flex-col">
                  {sortProviderEntries(Object.entries(couriersPrams || {}), settingsData?.couriers).map((args, index) => {

                    var providerKey = args[0];
                    var item = args[1];




                    return (
                      <div className="" key={providerKey}>

                        <ToggleContent title={<CouriersItemTitle item={item} enable={settingsData?.couriers?.[providerKey]?.['enabled']} index={index} />}
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

                            {providerKey == 'carrybee' && (

                              <>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                      checked={!!settingsData?.couriers?.[providerKey]?.['sandbox']}
                                      className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      onChange={() => {
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

                                {[
                                  { name: 'client_id', label: 'Client ID' },
                                  { name: 'client_secret', label: 'Client Secret' },
                                  { name: 'client_context', label: 'Client Context' },
                                  { name: 'store_id', label: 'Store ID' },
                                ].map(field => (
                                  <div key={field.name} className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{field.label}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={field.name}
                                        placeholder={field.name}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.couriers?.[providerKey]?.[field.name] || ''}
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
                                ))}
                              </>
                            )}

                            {providerKey == 'paperfly' && (

                              <>

                                <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                  <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Sandbox")}</div>
                                  <div className="flex gap-3">
                                    <input type="checkbox" name="sandbox" id={`sandbox-${providerKey}`}
                                      checked={!!settingsData?.couriers?.[providerKey]?.['sandbox']}
                                      className="lg:w-auto w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                      onChange={() => {
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

                                {[
                                  { name: 'username', label: 'Username' },
                                  { name: 'password', label: 'Password' },
                                  { name: 'paperfly_key', label: 'Paperfly Key' },
                                  { name: 'merchant_code', label: 'Merchant Code' },
                                  { name: 'store_name', label: 'Store Name' },
                                  { name: 'pickup_name', label: 'Pickup Merchant Name' },
                                  { name: 'pickup_address', label: 'Pickup Address' },
                                  { name: 'pickup_thana', label: 'Pickup Thana' },
                                  { name: 'pickup_district', label: 'Pickup District' },
                                  { name: 'pickup_phone', label: 'Pickup Phone' },
                                ].map(field => (
                                  <div key={field.name} className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{field.label}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={field.name}
                                        placeholder={field.name}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={settingsData?.couriers?.[providerKey]?.[field.name] || ''}
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
                                ))}
                              </>
                            )}

                            {['pathao', 'redx', 'courrierfast', 'carrybee', 'paperfly'].includes(providerKey) && (() => {
                              const token = settingsData?.couriers?.[providerKey]?.['webhook_auth_token'] || '';
                              const base = (typeof window !== 'undefined' ? window.location.origin : '') + '/api/couriers-webhook';
                              // Pathao and Carry Bee send the secret in a signature header;
                              // the others need courier + token in the URL.
                              const usesHeader = providerKey === 'pathao' || providerKey === 'carrybee';
                              const webhookUrl = usesHeader
                                ? base
                                : `${base}?courier=${providerKey}&token=${encodeURIComponent(token || '<token>')}`;

                              return (
                                <>
                                  <div className="flex flex-col gap-2 border-b border-gray-100 py-3.5 last:border-b-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4 [&>div+div]:min-w-0 lg:[&>div+div]:max-w-md lg:[&>div+div]:flex-1">
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Webhook Auth token")}</div>
                                    <div className="flex gap-3">
                                      <input
                                        type="text"
                                        name={'webhook_auth_token'}
                                        placeholder={'Webhook auth token'}
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20"
                                        value={token}
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
                                    <div className="w-full shrink-0 text-sm font-medium text-gray-700 lg:w-60">{("Webhook URL")}</div>
                                    <div className="flex flex-col gap-1">
                                      <input
                                        type="text"
                                        readOnly
                                        className=" px-2 py-1 rounded-sm w-full !border !border-gray-300 !shadow-none !outline-none bg-gray-50 text-gray-600"
                                        value={webhookUrl}
                                        onFocus={(ev) => ev.target.select()}
                                      />
                                      <p className="text-xs text-gray-500">
                                        {usesHeader
                                          ? 'Paste this URL in the courier panel and use the token above as its webhook secret.'
                                          : 'Paste this URL in the courier panel. It carries the token, so keep it private.'}
                                      </p>
                                    </div>
                                  </div>
                                </>
                              );
                            })()}

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