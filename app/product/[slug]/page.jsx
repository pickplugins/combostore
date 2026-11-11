import { storeUrl } from "@/lib/storeUrl";
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import { sendMetaEvent } from "@/lib/sendMetaEvent";
import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";
import PageBuilderContent from "../../../components/PageBuilder/PageBuilderContent";
import { PostProvider } from "@/components/PageBuilder/context/PostContext";
import { trackFacebookEvent } from '@/lib/facebook/pixel';
import { notFound } from 'next/navigation'

import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';
import { after } from 'next/server';
import { headers, cookies } from 'next/headers';


const appUrl = process.env.NEXT_PUBLIC_STORE_URL;
import { getSettings } from "@/lib/getSettings";


// ⬅️ Force server-side rendering on every request
export const dynamic = "force-dynamic";

import { getProduct } from "@/lib/getProduct";

/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const productResponse = await getProduct(slug);
  if (!productResponse) return { title: "Product Not Found" };
  const productData = productResponse?.product;
  return templateMetadata('product', {
    single: true,
    item: { title: productData?.title, description: productData?.post_excerpt, image: productData?.post_thumbnail?.src },
    path: `product/${slug}`,
  });
}








export default async function page({ params }) {


  const settings = await getSettings();
  const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;
  const META_test_event_code = settings?.apiKeys?.facebookPixel?.test_event_code;


  const { slug } = await params; // ✅ await params

  const productResponse = await getProduct(slug);

  if (!productResponse) return { title: "Product Not Found" };


  var productData = productResponse?.product;


  const excludeInSearch = productData?.visibility?.some(item => item.slug === "exclude-from-search");
  const excludeInShop = productData?.visibility?.some(item => item.slug === "exclude-from-catalog");


  if (excludeInShop) {
    notFound()
  }

  var productTemplate = productData?.product_template ?? JSON.parse(productData?.product_template);

  var productTemplateId = productTemplate?.id ?? null

  var pageTemplate = [];

  if (productTemplateId) {
    var pageTemplateData = await getPageTemplate({ id: productTemplateId })
    var pageTemplate = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];


  } else {
    var pageTemplateData = await getPageTemplate({ type: 'product' })
    var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];



    var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
    var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

    pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]


  }




  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData?.title,
    "image": [productData?.post_thumbnail?.src],
    "sku": productData?.sku || slug,
    "description": productData?.post_excerpt ? productData?.post_excerpt : productData?.title,
    "brand": {
      "@type": "Brand",
      "name": productData?.brands[0]?.name || "ComboStore"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Customer"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "25"
    },
    "offers": {
      "@type": "Offer",
      "url": storeUrl(`product/${slug}`),
      "priceCurrency": "BDT",
      "price": productData?.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "priceValidUntil": "2025-12-31",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7,
        "applicableCountry": "BD",
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "BD"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "d"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 5,
            "unitCode": "d"
          }
        },
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "BDT"
        }
      }
    }
  };



  // read request data BEFORE after(); headers()/cookies() can't be used inside it
  const h = await headers();
  const c = await cookies();
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim();
  const userAgent = h.get('user-agent');
  const fbp = c.get('_fbp')?.value;
  const fbc = c.get('_fbc')?.value;




  // sendMetaEvent({ event_name: 'ViewContent', url: `${appUrl}/product/${slug}`, value: productData?.price, currency: "BDT", content_name: productData?.title }); // Call the function here




  const eventId = generateFacebookEventId();


  const eventData = {
    content_ids: [String(productData?.id)],
    content_type: 'product',
    value: Number(productData?.price),   // you hardcoded 500 for the browser event
    currency: 'BDT',
  };



  after(() =>
    sendFacebookServerEvent({
      pixelId: FACEBOOK_PIXEL_ID,                          // from getSettings()
      accessToken: META_ACCESS_TOKEN, // or process.env.FB_ACCESS_TOKEN
      eventName: 'ViewContent',
      eventId,
      data: eventData,
      sourceUrl: storeUrl(`product/${slug}`),
      ip, userAgent, fbp, fbc,
      test_event_code: META_test_event_code
    })
  );


  // trackFacebookEvent(
  //   'ViewContent',
  //   {
  //     content_ids: [productData?.id],
  //     content_type: 'product',
  //     value: 500,
  //     currency: 'BDT',
  //   },
  //   eventId
  // );

  // sendFacebookServerEvent({
  //   eventName: 'ViewContent',
  //   eventId,
  //   data: {
  //     content_ids: [productData?.id],
  //     content_type: 'product',
  //     value: productData?.price,
  //     currency: 'BDT',
  //   },
  // });


  return (
    <>



      <>
        <PostProvider value={productData}>
          {pageTemplate?.length > 0 && <PageBuilderContent blocks={pageTemplate} />}

        </PostProvider>

        <FacebookViewContent eventId={eventId} data={eventData} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <style>
          {[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
        </style>
      </>




    </>
  );
}
