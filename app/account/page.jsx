
import { templateMetadata, slugToName } from "@/lib/templateSeo";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";
import { getStyledPageTemplate as getPageTemplate } from "../../lib/pageStyles";


import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconTags, IconLink, IconEyeSearch, IconHeartPlus, IconTrash, IconStackPop } from "@tabler/icons-react";

// import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;






/* Template Part Settings > SEO for this template (lib/templateSeo.js), filled with the page's data. */
export async function generateMetadata() {
	return templateMetadata('account', { item: { title: 'My Account' }, path: `account` });
}






export default async function page({ params, searchParams }) {



	const pageTemplateData = await getPageTemplate({ type: 'account' })
	const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];
	/*
		The site header and footer, as on every other template route. The server
		sends them unless the Account template's Disable Header / Disable Footer
		is on; this page used to drop them, so it never had a site header.
	*/
	const pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content || '[]') : [];
	const pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content || '[]') : [];
	const pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter];

	return (

		<>

			<PageBuilderContent blocks={pageTemplate} />

			<style>
				{[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
			</style>
		</>



	);
};

