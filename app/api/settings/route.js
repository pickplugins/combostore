export async function GET() {

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const API_TOKEN = process.env.API_TOKEN;



  const res = await fetch(
    `${serverUrl}wp-json/combo-store/v2/get_settings_public`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_TOKEN, // ✅ works here
      },
      body: JSON.stringify({}),
    }
  );



  const data = await res.json();
  // console.log("API data:", data); // 👈 add this

  return Response.json(data);
}