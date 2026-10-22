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

	return {
		title: page.title,
		description: page.excerpt || '',
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



	return (
		<>


			<PageBuilderContent blocks={blocks} />

			<style>
				{page?.style}
			</style>
		</>
	)
}