
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";
import { PageProvider } from "@/components/PageBuilder/context/PageContext";




import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';
import { after } from 'next/server';
import { headers, cookies } from 'next/headers';
import { getSettings } from "@/lib/getSettings";


const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;






export async function generateMetadata({ params }) {



  const { slug } = await params; // ✅ await params

  const lastParam = slug[slug.length - 1]; // 'large-diapers'



  var slugname = lastParam.replace("-", " ")
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');


  var pageMetaData = {

    title: ``,
    description: "",
    post_thumbnail: { src: "", alt: "" },
    keywords: "",
    ogTitle: ` ${slugname} - `,
    ogDes: ""

  }



  return {
    title: pageMetaData.title,
    description: pageMetaData.description?.slice(0, 160),
    openGraph: {
      title: pageMetaData.ogTitle,
      description: pageMetaData.post_excerpt?.slice(0, 160),
      url: `${appUrl}product/`,
      images: [{ url: pageMetaData.post_thumbnail?.src, alt: pageMetaData.ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageMetaData.ogTitle,
      description: pageMetaData.post_excerpt?.slice(0, 160),
      images: [pageMetaData.post_thumbnail?.src],
    },
  };
}













export default async function page({ params }) {
  const { slug } = await params; // ✅ await params
  const lastParam = slug[slug.length - 1]; // 'large-diapers'

  const settings = await getSettings();
  const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;


  const pageTemplateData = await getPageTemplate({ type: 'categories_single' })
  const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  console.log(settings);




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
    content_ids: [String(lastParam)],
    content_type: 'product_group',
    currency: 'BDT',
  };



  after(() =>
    sendFacebookServerEvent({
      pixelId: FACEBOOK_PIXEL_ID,                          // from getSettings()
      accessToken: META_ACCESS_TOKEN, // or process.env.FB_ACCESS_TOKEN
      eventName: 'ViewContent',
      eventId,
      data: eventData,
      sourceUrl: `${appUrl}/categories/${lastParam}`,
      ip, userAgent, fbp, fbc,
    })
  );






  return (



    <>

      {/* {JSON.stringify(pageTemplateData)} */}

      <PageProvider value={{ page: 'caetgories', taxonomy: 'product_cat', slug: slug }}>
        <PageBuilderContent blocks={pageTemplatecontent} />
      </PageProvider>
      <FacebookViewContent eventId={eventId} data={eventData} />
      <style>
        {pageTemplateData?.style}
      </style>
    </>







  );
};

