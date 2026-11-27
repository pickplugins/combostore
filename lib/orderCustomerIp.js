/*
  meta.customer_ip on an order: { ip, country, source, user_agent, recorded_at },
  saved by the server when a shopper places the order. Absent for orders staff
  create in the dashboard, older orders, and in responses to non-staff.
*/

/* The order's customer_ip, or null. meta may arrive as a JSON string (older
   edits encoded it more than once). */
export function customerIpOf(order) {
  var meta = order?.meta;
  for (var i = 0; i < 3 && typeof meta === "string"; i++) {
    try { meta = JSON.parse(meta); } catch (e) { return null; }
  }
  var info = meta && typeof meta === "object" ? meta.customer_ip : null;
  return info && typeof info.ip === "string" && info.ip ? info : null;
}

/* "AO" → "Angola", in the viewer's language. */
export function countryName(code) {
  try { return new Intl.DisplayNames(undefined, { type: "region" }).of(code) || code; } catch (e) { return code; }
}

/* "AO" → 🇦🇴; "" for anything that is not a two-letter code. */
export function flagOf(code) {
  return /^[A-Z]{2}$/.test(code || "") ? String.fromCodePoint(...[...code].map(c => 0x1F1E6 + c.charCodeAt(0) - 65)) : "";
}

/* Hover text: the browser and when the address was recorded. */
export function customerIpTitle(info) {
  return [info?.user_agent, info?.recorded_at && `Recorded ${info.recorded_at}`].filter(Boolean).join(" · ") || undefined;
}
