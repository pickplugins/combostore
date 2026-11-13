
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import React, { use } from 'react'
import Link from "next/link";
import Image from "next/image";

import { PostProvider } from "@/components/PageBuilder/context/PostContext";

import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";


import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { queueFacebookServerEvent } from '@/lib/facebook/serverEvent';
import { notFound } from 'next/navigation';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';


import { getBlogPost } from "@/lib/getBlogPost";

const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata({ params }) {
	const { slug } = await params;
	const postResponse = await getBlogPost(slug);
	if (!postResponse) return { title: "Blog Not Found" };
	const postData = postResponse?.post;
	return templateMetadata('blog_single', {
		single: true,
		item: { title: postData?.title, description: postData?.post_excerpt || postData?.description, image: postData?.post_thumbnail?.src },
		path: `blog/${slug}`,
	});
}





export default async function page({ params }) {


  const pageTemplateData = await getPageTemplate({ type: 'blog_single' })
  var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
  var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

  var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]




  const { slug } = await params; // ✅ await params


  const productResponse = await getBlogPost(slug);

  /* A page must return markup; notFound() renders the 404 page with a real 404 status. */
  if (!productResponse) notFound();

  var postData = productResponse?.post;




  const eventId = generateFacebookEventId();


  const eventData = {
    content_type: 'article',
    content_name: postData?.title,
    currency: 'BDT',
  };

  /* Server copy of the browser's ViewContent (same eventId), with the pixel settings and request details. */
  await queueFacebookServerEvent({ eventName: 'ViewContent', eventId, data: eventData, path: `blog/${slug}` });













  return (
    <>

      <PostProvider value={postData}>
        {pageTemplatecontent?.length > 0 && <PageBuilderContent blocks={pageTemplatecontent} />}

      </PostProvider>
      <FacebookViewContent eventId={eventId} data={eventData} />

      <style>
        {[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
      </style>

    </>
  )
}

