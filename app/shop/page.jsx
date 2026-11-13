
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";
import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";

import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { queueFacebookServerEvent } from '@/lib/facebook/serverEvent';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';


//hello

// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata() {
	return templateMetadata('shop', { item: { title: 'Shop' }, path: `shop` });
}






export default async function page({ params, searchParams }) {

  const { slug } = await params; // ✅ await params


  const pageTemplateData = await getPageTemplate({ type: 'shop' })
  var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
  var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

  var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]




  const eventId = generateFacebookEventId();


  const eventData = {
    content_type: 'product_group',
    content_name: 'Shop',
    currency: 'BDT',
  };

  /* Server copy of the browser's ViewContent (same eventId), with the pixel settings and request details. */
  await queueFacebookServerEvent({ eventName: 'ViewContent', eventId, data: eventData, path: 'shop' });








  return (

    <>
      {pageTemplate?.length > 0 && <PageBuilderContent blocks={pageTemplate} />}
      <FacebookViewContent eventId={eventId} data={eventData} />
      <style>
        {[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
      </style>
    </>




  );
};

