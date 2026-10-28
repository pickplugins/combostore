
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



// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params

  var slugname = slug.replace("-", " ")
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');


  var pageMetaData = {

    title: ``,
    description: "",
    post_thumbnail: { src: "", alt: "" },
    keywords: "",
    ogTitle: ` `,
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



  const pageTemplateData = await getPageTemplate({ type: 'tags_single' })
  var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
  var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

  var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]







  const eventId = generateFacebookEventId();


  const eventData = {
    content_type: 'product_tag',
    content_name: slug,
    currency: 'BDT',
  };

  after(() => sendFacebookServerEvent({ eventName: 'ViewContent', eventId, data: eventData }));









  return (

    <>

      <PageProvider value={{ page: 'tags', taxonomy: 'product_tag', slug: [slug] }}>
        {pageTemplate?.length > 0 && <PageBuilderContent blocks={pageTemplate} />}
      </PageProvider>
      <FacebookViewContent eventId={eventId} data={eventData} />
      <style>
        {pageTemplateData?.style}
        {pageTemplateData?.header?.style}
        {pageTemplateData?.footer?.style}
      </style>
    </>



  );
};

