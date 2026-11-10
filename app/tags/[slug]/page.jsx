
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";
import { PageProvider } from "@/components/PageBuilder/context/PageContext";

import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';
import { after } from 'next/server';



// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata({ params }) {
	const { slug } = await params;
	return templateMetadata('tags_single', { single: true, item: { title: slugToName(slug) }, path: `tags/${slug}` });
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
        {[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
      </style>
    </>



  );
};

