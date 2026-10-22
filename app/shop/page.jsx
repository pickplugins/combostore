
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";
import { getPageTemplate } from "@/lib/getPageTemplate";

import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';
import { after } from 'next/server';


//hello

// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






export async function generateMetadata({ searchParams }) {





  var pageMetaData = {

    title: ``,
    description: "",
    post_thumbnail: { src: "", alt: "" },
    keywords: "",
    ogTitle: ``,
    ogDes: ""

  }



  return {
    title: pageMetaData.title,
    description: pageMetaData.description?.slice(0, 160),
    openGraph: {
      title: pageMetaData.title,
      description: pageMetaData.post_excerpt?.slice(0, 160),
      url: `${appUrl}product/`,
      images: [{ url: pageMetaData.post_thumbnail?.src, alt: pageMetaData.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageMetaData.title,
      description: pageMetaData.post_excerpt?.slice(0, 160),
      images: [pageMetaData.post_thumbnail?.src],
    },
  };
}






export default async function page({ params, searchParams }) {

  const { slug } = await params; // ✅ await params


  const pageTemplateData = await getPageTemplate({ type: 'shop' })
  const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];



  const eventId = generateFacebookEventId();

  console.log(eventId);

  const eventData = {
    content_type: 'product_group',
    content_name: 'Shop',
    currency: 'BDT',
  };

  after(() => sendFacebookServerEvent({ eventName: 'ViewContent', eventId, data: eventData }));








  return (

    <>
      <PageBuilderContent blocks={pageTemplatecontent} />
      <FacebookViewContent eventId={eventId} data={eventData} />
      <style>
        {pageTemplateData?.style}
      </style>
    </>




  );
};

