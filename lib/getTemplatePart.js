// lib/getTemplate.js



export async function getTemplatePart(prams) {



  var postData = {
    id: prams?.id,
  };
  postData = JSON.stringify(postData);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



  const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_template_part`, {
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
