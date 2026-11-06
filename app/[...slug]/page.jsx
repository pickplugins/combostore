// app/[[...slug]]/page.jsx

import { notFound } from 'next/navigation'
import BlockRender from '../../components/PageBuilder/BlockRender';
import PageBuilderContent from "../../components/PageBuilder/PageBuilderContent";

export const dynamic = 'force-dynamic'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;




async function getPageData(path) {



	try {

		var postData = {
			path: path,
		};
		postData = JSON.stringify(postData);


		const res = await fetch(
			`${serverUrl}wp-json/combo-store/v2/get_page`,

			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: postData,
				cache: 'no-store',
			}
		)

		if (!res.ok) {
			return null
		}


		return await res.json()
	} catch (error) {
		return null
	}
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params

	const slug = resolvedParams.slug || []



	const path =
		slug.length > 0
			? '/' + slug.join('/')
			: '/'

	const page = await getPageData(path)

	if (!page) {
		return {
			title: 'Page Not Found',
		}
	}

	/*
		The page's SEO settings from the builder (Template Part Settings > SEO,
		saved as meta.seo). Each falls back to what the page had before: its
		title and excerpt. The social image and canonical URL are left out when
		unset; noindex keeps the page out of search results.
	*/
	const seo = page?.meta?.seo ?? {}
	const title = (seo.title || '').trim() || page.title
	const description = (seo.description || '').trim() || page.excerpt || ''
	const image = (seo.image || '').trim()
	const canonical = (seo.canonical || '').trim()

	return {
		title: title,
		description: description,
		openGraph: {
			title: title,
			description: description,
			...(image ? { images: [{ url: image, alt: title }] } : {}),
		},
		twitter: {
			card: image ? 'summary_large_image' : 'summary',
			title: title,
			description: description,
			...(image ? { images: [image] } : {}),
		},
		...(canonical ? { alternates: { canonical: canonical } } : {}),
		...(seo.noindex ? { robots: { index: false, follow: true } } : {}),
	}
}

export default async function DynamicPage({ params }) {
	const resolvedParams = await params

	const slug = resolvedParams.slug || []


	// Convert slug array to full route path
	const path = slug.length > 0 ? '/' + slug.join('/') : '/'

	// Fetch page from API/server
	const page = await getPageData(path)



	// Show 404 if route not found
	if (!page?.title) {
		notFound()
	}

	var content = page.content || null
	var title = page.title || 'Untitled Page'

	var blocks = JSON.parse(content)

	/*
		Template Part Settings > Disable Header / Disable Footer (saved as
		page.meta). A builder page carries its own siteHeader / siteFooter
		blocks rather than getting the site template's, so these hide the
		page's top-level ones. They were saved but never read.
	*/
	var meta = page?.meta ?? {}
	if (Array.isArray(blocks) && (meta.disableHeader || meta.disableFooter)) {
		blocks = blocks.filter(block =>
			!(meta.disableHeader && block?.type === 'siteHeader') &&
			!(meta.disableFooter && block?.type === 'siteFooter')
		)
	}

	return (
		<>


			<PageBuilderContent blocks={blocks} />

			<style>
				{page?.style}
			</style>
		</>
	)
}