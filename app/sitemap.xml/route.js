import { storeUrl } from "@/lib/storeUrl";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* <loc> is XML: & and the like must be escaped. */
const xmlEscape = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");


export async function GET() {

  /*
    URLs come from storeUrl(), which puts exactly one slash between the store
    URL and the path: with NEXT_PUBLIC_STORE_URL ending in "/", every entry
    used to read https://kidobazar.com//blog. "" is the home page, which
    was missing. Login-only pages (account, create-ticket) are left out:
    search engines cannot index them.
  */
  const staticRoutes = [
    "",
    "blog",
    "contact",
    "support",
    "terms",
    "privacy",
    "refund",
  ];
  // const blogPosts = [
  //   { slug: "blog" },
  //   { slug: "nextjs-sitemap-guide" },
  // ];




  var postData = {
    per_page: 999,
    order: "DESC",
    orderby: "rand",
    keyword: "",
  };
  postData = JSON.stringify(postData);

  const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_products`, {
    method: "POST",
    cache: "no-store", // disables caching

    headers: {
      'Content-Type': 'application/json',
    },
    body: postData,
  });


  const products = await res.json();










  // Merge routes
  const allRoutes = [
    ...staticRoutes,
    ...products?.posts.map((product) => `product/${product.slug}`),
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
