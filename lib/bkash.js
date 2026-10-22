const BKASH_BASE_URL = process.env.BKASH_BASE_URL;

let cachedToken = null;
let tokenExpiresAt = 0;

async function getBkashToken() {
  const now = Date.now();

  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const response = await fetch(
    `${BKASH_BASE_URL}/tokenized/checkout/token/grant`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        username: process.env.BKASH_USERNAME,
        password: process.env.BKASH_PASSWORD,
      },
      body: JSON.stringify({
        app_key: process.env.BKASH_APP_KEY,
        app_secret: process.env.BKASH_APP_SECRET,
      }),
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok || !data.id_token) {
    throw new Error(data.statusMessage || "Could not get bKash token");
  }

  cachedToken = data.id_token;

  // bKash typically returns expires_in in seconds.
  tokenExpiresAt = now + (Number(data.expires_in || 300) - 30) * 1000;

  return cachedToken;
}

export async function createBkashPayment({ amount, invoiceNumber }) {
  const token = await getBkashToken();


  console.log(
    "bKash callback URL:",
    `${process.env.NEXT_PUBLIC_APP_URL}api/bkash/callback`
  );



  const response = await fetch(
    `${BKASH_BASE_URL}/tokenized/checkout/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        "X-App-Key": process.env.BKASH_APP_KEY,
      },
      body: JSON.stringify({
        mode: "0011",
        payerReference: "customer",
        callbackURL: `${process.env.NEXT_PUBLIC_APP_URL}api/bkash/callback`,
        amount: String(amount),
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: invoiceNumber,
      }),
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok || !data.bkashURL) {
    throw new Error(data.statusMessage || "Could not create bKash payment");
  }

  return data;
}

export async function executeBkashPayment(paymentID) {
  const token = await getBkashToken();

  const response = await fetch(
    `${BKASH_BASE_URL}/tokenized/checkout/execute`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        "X-App-Key": process.env.BKASH_APP_KEY,
      },
      body: JSON.stringify({ paymentID }),
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.statusMessage || "Could not execute bKash payment");
  }

  return data;
}