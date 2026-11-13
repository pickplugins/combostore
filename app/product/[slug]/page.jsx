import { storeUrl } from "@/lib/storeUrl";
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";
import PageBuilderContent from "../../../components/PageBuilder/PageBuilderContent";
import { PostProvider } from "@/components/PageBuilder/context/PostContext";
import { notFound } from 'next/navigation'

import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { queueFacebookServerEvent } from '@/lib/facebook/serverEvent';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';


const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


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


  const { slug } = await params; // ✅ await params

  const productResponse = await getProduct(slug);

  /* A page must return markup; notFound() renders the 404 page with a real 404 status. */
  if (!productResponse) notFound();


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
      "name": productData?.brands?.[0]?.name || "ComboStore"
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



  /*
    Meta ViewContent, sent twice with one event id: from the server here
    (lib/facebook/serverEvent.js - pixel settings, IP, user agent, _fbp /
    _fbc; skipped for crawlers) and from the browser by <FacebookViewContent>
    below, so Meta keeps one. content_ids is the product id, as AddToCart
    and Purchase send it.
  */
  const eventId = generateFacebookEventId();

  const eventData = {
    content_ids: [String(productData?.id)],
    content_type: 'product',
    content_name: productData?.title,
    value: Number(productData?.sale_price || productData?.price) || 0,
    currency: 'BDT',
  };

  await queueFacebookServerEvent({ eventName: 'ViewContent', eventId, data: eventData, path: `product/${slug}` });


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
