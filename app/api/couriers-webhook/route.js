import { NextResponse } from "next/server";

const serverUrl = (process.env.NEXT_PUBLIC_SERVER_URL || "").replace(/\/+$/, "");

// Connection-specific headers that belong to this hop only and must not be
// passed upstream. Everything else is forwarded so the courier's own auth /
// signature headers reach WordPress intact.
const SKIP_HEADERS = new Set([
  "host",
  "connection",
  "keep-alive",
  "transfer-encoding",
  "upgrade",
  "te",
  "trailer",
  "proxy-authorization",
  "proxy-authenticate",
  "content-length",
  "accept-encoding",
]);

export async function POST(request) {
  const endpoint = `${serverUrl}/wp-json/combo-store/v2/couriers_webhook`;

  try {
    // Raw text, not request.json(): keeps the exact bytes the courier signed,
    // so an HMAC check on the WordPress side can still verify them.
    const raw = await request.text();

    const headers = new Headers();
    for (const [key, value] of request.headers) {
      if (!SKIP_HEADERS.has(key.toLowerCase())) {
        headers.set(key, value);
      }
    }
    if (!headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: raw,
      signal: AbortSignal.timeout(20000),
    });

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") || "application/json",
      },
    });
  } catch (error) {
    console.error("[couriers-webhook] forward failed:", error);
    return NextResponse.json(
      { message: "Courier webhook forward failed" },
      { status: 502 }
    );
  }
}
