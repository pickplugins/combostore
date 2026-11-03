import { NextResponse } from "next/server";

/*
  Product catalog feed shared by /facebook-product-feed and
  /google-product-feed. Both platforms read the same RSS 2.0 + `g:` namespace
  format, so one builder serves both; `platform` only changes the few
  attributes one side understands and the other does not.

  Query parameters (all optional, combinable):

    keyword        search text                       ?keyword=diaper
    category       slug or comma list                ?category=baby-diapers,wipes
    brand          slug or comma list                ?brand=pampers
    tag            slug or comma list                ?tag=new
    include        product (post) IDs, comma list    ?include=10018,9741
    exclude        product (post) IDs, comma list    ?exclude=9741
    stock_status   instock | outofstock              ?stock_status=instock
    min_price      effective price >=                ?min_price=100
    max_price      effective price <=                ?max_price=500
    on_sale        only discounted products          ?on_sale=1
    orderby        date | modified | title | menu_order | rand | ID
    order          ASC | DESC (default DESC)
    paged          page number (default 1)
    per_page       1-1000 (default 1000)
    currency       ISO code for prices (default BDT)
    description_length  50-5000 characters (default 1000)
    include_invalid  1 = keep items Facebook/Google would reject
                   (no price or no image); off by default

  `g:id` is the product's `id` from the API (the cstore_products row), which is
  what the Pixel sends as `content_ids` - keep them the same or catalog
  matching for ads breaks.
*/

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;

const LIST_PARAMS = ["category", "brand", "tag", "include", "exclude"];
const ORDERBY = ["date", "modified", "title", "menu_order", "rand", "ID"];

function escapeXml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    /* Characters XML 1.0 forbids outright - one stray control char from a
       pasted description makes the whole feed unparseable. */
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

function toInt(value, fallback, min, max) {
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

function toNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function parseJson(value, fallback) {
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

/* Decode the entities WordPress leaves behind after strip_tags, then squash whitespace. */
function cleanText(value) {
  return String(value ?? "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

const truncate = (text, max) => (text.length > max ? `${text.slice(0, max - 1)}…` : text);

function buildQuery(search) {
  const query = {
    keyword: (search.get("keyword") || "").trim(),
    paged: toInt(search.get("paged"), 1, 1, 10000),
    per_page: toInt(search.get("per_page"), 1000, 1, 1000),
    order: (search.get("order") || "").toUpperCase() === "ASC" ? "ASC" : "DESC",
  };

  for (const key of LIST_PARAMS) {
    const value = (search.get(key) || "").trim();
    if (value) query[key] = value;
  }

  const orderby = search.get("orderby");
  if (ORDERBY.includes(orderby)) query.orderby = orderby;

  const stock = search.get("stock_status");
  if (stock === "instock" || stock === "outofstock") query.stock_status = stock;

  const min = toNumber(search.get("min_price"));
  const max = toNumber(search.get("max_price"));
  if (min !== null) query.min_price = min;
  if (max !== null) query.max_price = max;

  if (["1", "true", "yes"].includes(search.get("on_sale"))) query.on_sale = 1;

  /* WordPress trims descriptions (default 1000 chars) to keep a full feed
     small enough for Next's 2 MB fetch cache and Vercel's response limit. */
  if (search.get("description_length")) {
    query.description_length = toInt(search.get("description_length"), 1000, 50, 5000);
  }

  return query;
}

function buildItem(product, { currency, platform }) {
  const regular = toNumber(product.regular_price) || 0;
  const sale = toNumber(product.sale_price) || 0;
  const price = regular > 0 ? regular : sale;
  const onSale = sale > 0 && regular > 0 && sale < regular;

  /* No featured image falls back to the first gallery image, so a product with
     photos is not dropped just because none was marked as featured. */
  const galleryAll = parseJson(product.gallery, []).map((g) => g?.src).filter(Boolean);
  const image = product.post_thumbnail_url || galleryAll[0] || "";
  const title = truncate(cleanText(product.title), 150);
  const description =
    truncate(cleanText(product.description || product.post_excerpt), 5000) || title;

  const gallery = galleryAll.filter((src) => src !== image).slice(0, 10);

  const brand = product.brands?.[0]?.name;
  const category = product.categories?.[0]?.name;
  const sku = (product.sku || "").trim();
  const inStock = product.stock_status === "instock";
  const money = (n) => `${n.toFixed(2)} ${currency}`;

  const lines = [
    ["g:id", product.id],
    ["g:title", title],
    ["g:description", description],
    ["g:link", `${appUrl}product/${product.slug}`],
    ["g:image_link", image],
    ...gallery.map((src) => ["g:additional_image_link", src]),
    ["g:availability", inStock ? "in stock" : "out of stock"],
    ["g:condition", "new"],
    ["g:price", money(price)],
    onSale && ["g:sale_price", money(sale)],
    brand && ["g:brand", cleanText(brand)],
    sku && ["g:mpn", sku],
    /* Without a GTIN or MPN Google flags the item unless this says so. */
    !sku && ["g:identifier_exists", "no"],
    category && ["g:product_type", cleanText(category)],
    platform === "facebook" &&
    inStock &&
    toNumber(product.stock_count) > 0 && ["g:quantity_to_sell_on_facebook", toInt(product.stock_count, 0, 0, 1e9)],
  ].filter(Boolean);

  return {
    valid: price > 0 && Boolean(image) && Boolean(product.slug),
    xml: `    <item>\n${lines
      .map(([tag, value]) => `      <${tag}>${escapeXml(value)}</${tag}>`)
      .join("\n")}\n    </item>`,
  };
}

export async function productFeedResponse(request, platform) {
  const search = request.nextUrl.searchParams;
  const currency = /^[A-Za-z]{3}$/.test(search.get("currency") || "")
    ? search.get("currency").toUpperCase()
    : "BDT";
  const includeInvalid = ["1", "true", "yes"].includes(search.get("include_invalid"));

  console.log(search);



  try {
    const response = await fetch(`${serverUrl}wp-json/combo-store/v2/get_product_feed`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildQuery(search)),
      next: { revalidate: 3600 },
    });

    if (!response.ok) throw new Error(`Product API error: ${response.status}`);

    const data = await response.json();
    const products = Array.isArray(data?.posts) ? data.posts : [];

    const items = products
      .map((product) => buildItem(product, { currency, platform }))
      .filter((item) => includeInvalid || item.valid)
      .map((item) => item.xml)
      .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${escapeXml(appUrl)} Product Feed</title>
    <link>${escapeXml(appUrl)}</link>
    <description>Product catalog feed</description>
${items}
  </channel>
</rss>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error(`${platform} product feed error:`, error);
    return new NextResponse(`Feed generation failed: ${error.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
