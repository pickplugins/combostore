import { productFeedResponse } from "@/lib/productFeed";

/* Google Merchant Center feed. Filters and fields: lib/productFeed.js */
export function GET(request) {
  return productFeedResponse(request, "google");
}
