// lib/api.js
export const getSettings = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const API_TOKEN = process.env.API_TOKEN;

  if (!API_TOKEN) return null;

  const res = await fetch(
    `${serverUrl}wp-json/combo-store/v2/get_settings_public`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_TOKEN, // ✅ server only
      },
      body: JSON.stringify({}),
      cache: "no-store", // or 'force-cache'
    }
  );

  // if (!res?.ok) throw new Error("Failed");



  return res.json();
};