// lib/getProducts.js



export async function getProducts(args) {
  var postData = args;
  postData = JSON.stringify(postData);
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



  const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_products`, {
    // cache: "no-store", // disable caching -> always fresh data
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`
    },
    body: postData,
  });

  console.log(res);



  if (!res.ok) return null;
  return res.json();
}
