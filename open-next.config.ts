/*
	@opennextjs/cloudflare settings for the Cloudflare Workers build
	(wrangler.jsonc has the matching bindings). Vercel ignores this file.

	- incrementalCache (R2): Next's data cache - fetch results with
	  `next: { revalidate }` (TemplateThemeStyle, lib/productFeed.js) and
	  cached pages.
	- queue (Durable Object): refreshes stale entries in the background.
	- tagCache (sharded Durable Object): makes revalidateTag("template-settings")
	  work, so a saved template theme shows without waiting for the 60s expiry.
*/

import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";
import doShardedTagCache from "@opennextjs/cloudflare/overrides/tag-cache/do-sharded-tag-cache";

export default defineCloudflareConfig({
	incrementalCache: r2IncrementalCache,
	queue: doQueue,
	tagCache: doShardedTagCache({ baseShardSize: 12 }),
});
