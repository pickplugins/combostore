
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";
import { PageProvider } from "@/components/PageBuilder/context/PageContext";

//Hello

import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconTags, IconLink, IconEyeSearch, IconHeartPlus, IconTrash, IconStackPop } from "@tabler/icons-react";

// import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { headers } from "next/headers";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata() {
	return templateMetadata('categories', { item: { title: 'All Categories' }, path: `categories` });
}













export default async function page({ params }) {
  const { slug } = await params; // ✅ await params



  const pageTemplateData = await getPageTemplate({ type: 'categories' })

  var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
  var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

  var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]





  return (



    <>
      <PageProvider value={{ page: 'caetgories', taxonomy: 'product_cat', slug: slug }}>
        {pageTemplate?.length > 0 && <PageBuilderContent blocks={pageTemplate} />}
      </PageProvider>

      <style>
        {pageTemplateData?.style}
        {pageTemplateData?.header?.style}
        {pageTemplateData?.footer?.style}
      </style>

    </>







  );
};

