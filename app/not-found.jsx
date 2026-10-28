

import React from "react";
import PageBuilderContent from "../components/PageBuilder/PageBuilderContent";

import { getPageTemplate } from "../lib/getPageTemplate";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;








export default async function NotFound() {



  const pageTemplateData = await getPageTemplate({ type: '404' })

  var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

  var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
  var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

  var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]



  return (
    <>

      {pageTemplate?.length > 0 && <PageBuilderContent blocks={pageTemplate} />}


      <style>
        {pageTemplateData?.style}
        {pageTemplateData?.header?.style}
        {pageTemplateData?.footer?.style}
      </style>

    </>
  );
}
