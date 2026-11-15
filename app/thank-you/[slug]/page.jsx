import { templateMetadata } from "@/lib/templateSeo";
import { getStyledPageTemplate as getPageTemplate } from "@/lib/pageStyles";
import PageBuilderContent from "@/components/PageBuilder/PageBuilderContent";
import ThankYouOrder from "@/components/ThankYouOrder";


// ⬅️ Force server-side rendering on every request: the order's payment status changes.
export const dynamic = "force-dynamic";


/* The order behind the link (its hash), or null when there is none. */
async function getOrderByHash(slug) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  try {
    const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_order_by_hash`, {
      cache: "no-store",
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: slug }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    /* An unknown hash comes back as an order without an id. */
    return data?.order?.id ? data : null;
  } catch (error) {
    return null;
  }
}


/* Template Part Settings > SEO for the Thank You template. An order's page is never indexed. */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const metadata = await templateMetadata('thank_you', { item: { title: 'Thank you for your order' }, path: `thank-you/${slug}`, single: true });
  return { ...metadata, robots: { index: false, follow: false } };
}


/*
  The thank-you page, built like the product page: the Thank You template
  (Templates > Thank You) with the site header and footer, and its styles.
  The order's invoice follows the template's own content, inside the page's
  <main>. With no Thank You template, a plain heading stands in for it.

  The order is loaded here on the server; ThankYouOrder does the browser
  parts (Meta events, emptying the cart after a redirect payment). It used
  to be one client page that printed a stray "Hello" and no template.
*/
export default async function page({ params }) {

  const { slug } = await params;

  const [orderResponse, pageTemplateData] = await Promise.all([
    getOrderByHash(slug),
    getPageTemplate({ type: 'thank_you' }),
  ]);

  const pageTemplatecontent = pageTemplateData?.content ? JSON.parse(pageTemplateData?.content) : [];
  const pageTemplateHeader = pageTemplateData?.header ? JSON.parse(pageTemplateData?.header?.content || '[]') : [];
  const pageTemplateFooter = pageTemplateData?.footer ? JSON.parse(pageTemplateData?.footer?.content || '[]') : [];
  const pageTemplate = [...pageTemplateHeader, ...pageTemplatecontent, ...pageTemplateFooter];

  return (
    <>
      <PageBuilderContent blocks={pageTemplate}>

        {pageTemplatecontent.length === 0 && (
          <div className="mx-auto w-full max-w-[900px] px-5 pt-10 pb-5 text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Thank you for your order</h1>
            <p className="mt-2 text-sm text-gray-600">Here are your order details. Log in to your account to see tracking, payments and more.</p>
          </div>
        )}

        <div className="mx-auto w-full  px-5 pt-10 pb-5">
          <ThankYouOrder slug={slug} order={orderResponse?.order ?? null} lineItems={orderResponse?.line_items ?? []} />
        </div>

      </PageBuilderContent>

      <style>
        {[pageTemplateData?.style, pageTemplateData?.header?.style, pageTemplateData?.footer?.style].filter(Boolean).join("\n")}
      </style>
    </>
  );
}
