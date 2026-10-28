
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getPageTemplate } from "@/lib/getPageTemplate";
import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";




const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






export async function generateMetadata({ searchParams }) {

	var searchParamsX = await searchParams;

	var term = "";

	if (searchParamsX.tag) {
		term = searchParamsX.tag; // 👈 gets ?tag=baby-care
	}
	if (searchParamsX.category) {
		term = searchParamsX.category; // 👈 gets ?category=baby-care
	}





	var pageMetaData = {

		title: ``,
		description: "",
		post_thumbnail: { src: "", alt: "" },
		keywords: "",
		ogTitle: ``,
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

