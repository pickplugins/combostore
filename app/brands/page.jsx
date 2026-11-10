
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";
import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";
import { PageProvider } from "../../components/PageBuilder/context/PageContext";


import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconTags, IconLink, IconEyeSearch, IconHeartPlus, IconTrash, IconStackPop } from "@tabler/icons-react";

// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata() {
	return templateMetadata('brands', { item: { title: 'All Brands' }, path: `brands` });
}














export default async function page({ params }) {




  const pageTemplateData = await getPageTemplate({ type: 'brands' })
  var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
  var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

  var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]




  const { slug } = await params; // ✅ await params








  return (


    <>

      <PageProvider value={{ page: 'brands', taxonomy: 'product_brand', slug: [slug] }}>
        {pageTemplate?.length > 0 && <PageBuilderContent blocks={pageTemplate} />}
      </PageProvider>
      <style>
        {[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
      </style>
    </>


  );
};

