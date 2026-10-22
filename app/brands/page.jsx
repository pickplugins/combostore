
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";
import { PageProvider } from "../../components/PageBuilder/context/PageContext";


import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconTags, IconLink, IconEyeSearch, IconHeartPlus, IconTrash, IconStackPop } from "@tabler/icons-react";

// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ await params


  var pageMetaData = {

    title: `All Brands`,
    description: "",
    post_thumbnail: { src: "", alt: "" },
    keywords: "",
    ogTitle: `All Brands`,
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




  const pageTemplateData = await getPageTemplate({ type: 'brands' })
  const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];



  const { slug } = await params; // ✅ await params








  return (


    <>

      <PageProvider value={{ page: 'brands', taxonomy: 'product_brand', slug: [slug] }}>
        <PageBuilderContent blocks={pageTemplatecontent} />
      </PageProvider>
      <style>
        {pageTemplateData?.style}
      </style>
    </>


  );
};

