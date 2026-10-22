
import React from "react";
import PageBuilderContent from "../components/PageBuilder/PageBuilderContent";

import { getPageTemplate } from "../lib/getPageTemplate";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
import { useCounterStore } from '../store/useCounterStore'


import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';
import { after } from 'next/server';
import { headers, cookies } from 'next/headers';
import { getSettings } from "@/lib/getSettings";

export async function generateMetadata() {


  var pageMetaData = {

    title: "",
    description: "",
    post_thumbnail: { src: "", alt: "" },
    keywords: "",
    ogTitle: "",
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


  const pageTemplateData = await getPageTemplate({ type: 'home' })
  const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];



  const settings = await getSettings();
  const FACEBOOK_PIXEL_ID = settings?.apiKeys?.facebookPixel?.pixel_id;
  const META_ACCESS_TOKEN = settings?.apiKeys?.facebookPixel?.access_token;


  // read request data BEFORE after(); headers()/cookies() can't be used inside it
  const h = await headers();
  const c = await cookies();
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim();
  const userAgent = h.get('user-agent');
  const fbp = c.get('_fbp')?.value;
  const fbc = c.get('_fbc')?.value;


  const eventId = generateFacebookEventId();


  const eventData = {
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
      sourceUrl: `${appUrl}`,
      ip, userAgent, fbp, fbc,
    })
  );





  return (

    <>

      {pageTemplatecontent?.length > 0 && <PageBuilderContent blocks={pageTemplatecontent} />}

      <FacebookViewContent eventId={eventId} data={eventData} />

      <style>
        {pageTemplateData?.style}
      </style>

    </>




  );
};

