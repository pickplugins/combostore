// lib/getPageTemplate.js

import { DEMO_WITHOUT_SERVER } from "./demo/config";

export async function getPageTemplate(prams) {

  /* Demo store with no WordPress: the layouts come from the demo template (lib/demo/server.js). */
  if (DEMO_WITHOUT_SERVER) {
    const { demoPageTemplate } = await import("./demo/server");
    return demoPageTemplate(prams);
  }


  var postData = {
    type: prams?.type,
    slug: prams?.slug,
    id: prams?.id,
  };
  postData = JSON.stringify(postData);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



  const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_page_template`, {
    cache: "no-store", // disable caching -> always fresh data
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
