
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";




const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata({ searchParams }) {
	const searchParamsX = await searchParams;
	/* ?tag= / ?category= filter the blog; their name leads the title. */
	const term = searchParamsX?.tag || searchParamsX?.category || '';
	return templateMetadata('blog', { item: { title: term ? `${slugToName(term)} - Blog` : 'Blog' }, path: `blog` });
}





export default async function page({ params }) {






	const pageTemplateData = await getPageTemplate({ type: 'blog' })

	var pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];

	var pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content) : [];
	var pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content) : [];

	var pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter]







	return (

		<>


			<PageBuilderContent blocks={pageTemplate} />
			<style>
				{pageTemplateData?.style}
				{pageTemplateData?.header?.style}
				{pageTemplateData?.footer?.style}
			</style>

		</>



	);
};

