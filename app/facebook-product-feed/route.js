import { productFeedResponse } from "@/lib/productFeed";

/* Facebook / Meta Commerce catalog feed. Filters and fields: lib/productFeed.js */
export function GET(request) {
  return productFeedResponse(request, "facebook");
}
