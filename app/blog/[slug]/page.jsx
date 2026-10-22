
import React, { use } from 'react'
import Link from "next/link";
import Image from "next/image";

import { PostProvider } from "@/components/PageBuilder/context/PostContext";

import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";


import { generateFacebookEventId } from '@/lib/facebook/event-id';
import { sendFacebookServerEvent } from '@/lib/facebook/capi';
import FacebookViewContent from '@/components/analytics/FacebookViewContent';
import { after } from 'next/server';


import { getBlogPost } from "@/lib/getBlogPost";

const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params
  const productResponse = await getBlogPost(slug);

  if (!productResponse) return { title: "Blog Not Found" };


  var postData = productResponse?.post;



  return {
    title: postData.title,
    description: postData.post_excerpt || postData.description?.slice(0, 160),
    openGraph: {
      title: postData.title,
      description: postData.post_excerpt || postData.post_excerpt?.slice(0, 160),
      url: `${appUrl}blog/${slug}`,
      images: [{ url: postData.post_thumbnail?.src, alt: postData.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.post_excerpt || postData.post_excerpt?.slice(0, 160),
      images: [postData.post_thumbnail?.src],
    },
  };
}





export default async function page({ params }) {


  const pageTemplateData = await getPageTemplate({ type: 'blog_single' })
  const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];



  const { slug } = await params; // ✅ await params


  const productResponse = await getBlogPost(slug);

  if (!productResponse) return { title: "Blog Not Found" };

  var postData = productResponse?.post;




  const eventId = generateFacebookEventId();


  const eventData = {
    content_type: 'article',
    content_name: postData?.title,
    currency: 'BDT',
  };

  after(() => sendFacebookServerEvent({ eventName: 'ViewContent', eventId, data: eventData }));













  return (
    <>

      <PostProvider value={postData}>
        {pageTemplatecontent?.length > 0 && <PageBuilderContent blocks={pageTemplatecontent} />}

      </PostProvider>
      <FacebookViewContent eventId={eventId} data={eventData} />

      <style>
        {pageTemplateData?.style}
      </style>

    </>
  )
}

