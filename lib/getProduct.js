// lib/getProduct.js

import { DEMO_WITHOUT_SERVER } from "./demo/config";

export async function getProduct(slug) {
  /* Demo store with no WordPress: the demo store's product (lib/demo/server.js). */
  if (DEMO_WITHOUT_SERVER) {
    const { demoProduct } = await import("./demo/server");
    return demoProduct(slug);
  }

  var postData = {
    slug: slug,
  };
  postData = JSON.stringify(postData);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



  const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_product`, {
    // cache: "no-store", // disable caching -> always fresh data
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`
    },
    body: postData,
  });



  if (!res.ok) return null;
  return res.json();
}
