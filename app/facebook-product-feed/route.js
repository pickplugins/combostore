import { NextResponse } from "next/server";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  try {
    const queryParams = {
      category: "",
      brand: "",
      tag: "",
      keyword: "",
      paged: 1,
      order: "DESC",
      per_page: 999,
      price: "",
    };

    const response = await fetch(
      `${serverUrl}wp-json/combo-store/v2/get_product_table`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(queryParams),

        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Product API error: ${response.status}`
      );
    }

    const data = await response.json();

    const products = Array.isArray(data?.posts)
      ? data.posts
      : [];

    const items = products
      .map((product) => {

        const id = escapeXml(product.id);

        const title = escapeXml(
          product.title
        );

        const description = escapeXml(
          product.description || product.title
        );

        const price = escapeXml(
          product.price
        );

        const link = escapeXml(
          `${appUrl}/product/${product.slug}`
        );

        const image = escapeXml(
          product.post_thumbnail_url
        );

        const availability =
          Number(product.stock_status) == 'instock'
            ? "in stock"
            : "out of stock";

        return `
                    <item>
                        <g:id>${id}</g:id>
                        <g:title>${title}</g:title>
                        <g:description>${description}</g:description>
                        <g:availability>${availability}</g:availability>
                        <g:condition>new</g:condition>
                        <g:price>${price} BDT</g:price>
                        <g:link>${link}</g:link>
                        <g:image_link>${image}</g:image_link>
                    </item>
                `;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
    xmlns:g="http://base.google.com/ns/1.0">

    <channel>

        <title>ComboStore Product Feed</title>

        <link>${escapeXml(appUrl)}</link>

        <description>ComboStore Product Feed</description>

        ${items}

    </channel>

</rss>`;

    return new NextResponse(xml, {
      status: 200,

      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",

        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });

    // return new NextResponse(xml, {
    //   status: 200,

    //   headers: {
    //     "Content-Type": "application/xml",
    //     "Cache-Control":
    //       "public, s-maxage=3600, stale-while-revalidate=86400",
    //   },
    // });

  } catch (error) {

    console.error(
      "Facebook Product Feed Error:",
      error
    );

    return new NextResponse(
      `Feed generation failed: ${error.message}`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
  }
}