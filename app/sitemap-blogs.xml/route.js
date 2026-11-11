import { storeUrl } from "@/lib/storeUrl";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* <loc> is XML: & and the like must be escaped. */
const xmlEscape = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");


/* URLs come from storeUrl(): one slash between the store URL and the path (it was https://kidobazar.com//blog/...). */
export async function GET() {

  // Example: dynamic routes (you can fetch from DB, CMS, API, etc.)
  // const staticRoutes = ["",
  //   "account/",
  //   "blog/",
  //   "contact/",
  //   "support/",
  //   "create-ticket/",
  //   "terms/",
  //   "privacy/",
  //   "refund/",
  // ];
  // const blogPosts = [
  //   { slug: "blog" },
  //   { slug: "nextjs-sitemap-guide" },
  // ];




  // var postData = {
  //   per_page: 999,
  //   order: "DESC",
  //   keyword: "",
  // };
  // postData = JSON.stringify(postData);

  // const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_products`, {
  //   method: "POST",
  //   cache: "no-store", // disables caching

  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: postData,
  // });


  // const products = await res.json();


  const resBlogPosts = await fetch(`${serverUrl}wp-json/combo-store/v2/get_posts`, {
    method: "POST",
    cache: "no-store", // disables caching

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      per_page: 999,
      order: "DESC",
      orderby: "rand",
      keyword: "",
    }),
  });


  const blogPosts = await resBlogPosts.json();


  // Merge routes
  const allRoutes = [
    ...blogPosts?.posts.map((post) => `blog/${post.slug}`),
    // ...products?.posts.map((product) => `product/${product.slug}/`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map((route) => {
        return `
        <url>
          <loc>${xmlEscape(storeUrl(route))}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
