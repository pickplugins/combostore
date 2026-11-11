/*
	Which images next/image may resize through /_next/image, shared by
	next.config.mjs (images.remotePatterns) and the storefront's image blocks.

	Store images live on the store's WordPress server (NEXT_PUBLIC_SERVER_URL),
	and were all drawn `unoptimized`: full-size uploads - 1024px PNGs of up to
	1.7 MB - for product cards shown at ~250px (PageSpeed: "Improve image
	delivery", ~2 MB on the home page). Now images from that server, and the
	site's own /public files, are resized to the width they are shown at and
	sent as WebP.

	Left unoptimized, as before:
	  - any other host - the optimizer refuses hosts that are not in
	    remotePatterns, which would leave a broken image;
	  - a server on localhost or a private address - Next 16 will not fetch
	    from those (images.dangerouslyAllowLocalIP), so a local WordPress
	    keeps working in development;
	  - SVGs (nothing to resize; the optimizer refuses them) and data: / blob:
	    URLs.
*/

const LOCAL_HOST = /^(localhost|127\.\d+\.\d+\.\d+|\[?::1\]?|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+|.*\.local(host)?)$/i;

/* The store server's origin as { protocol, hostname, port } for remotePatterns, or null (unset, invalid or local). */
export function storeImageHost(serverUrl = process.env.NEXT_PUBLIC_SERVER_URL) {
	try {
		var url = new URL(String(serverUrl ?? '').trim());
		if (!/^https?:$/.test(url.protocol) || LOCAL_HOST.test(url.hostname)) return null;
		return { protocol: url.protocol.slice(0, -1), hostname: url.hostname, port: url.port };
	} catch (e) {
		return null;
	}
}

/* Whether next/image may optimize this src. */
export function canOptimizeImage(src) {
	var s = String(src ?? '').trim();
	if (!s || /^(data|blob):/i.test(s)) return false;
	if (/\.svg($|[?#])/i.test(s)) return false;
	/* The site's own files (/thumb.png, /templates/...). */
	if (s.startsWith('/') && !s.startsWith('//')) return true;
	var host = storeImageHost();
	if (!host) return false;
	try {
		var url = new URL(s);
		return url.protocol === `${host.protocol}:` && url.hostname === host.hostname && url.port === host.port;
	} catch (e) {
		return false;
	}
}

/*
	`sizes` for an image shown at its container's width. "auto" lets browsers
	that support it (Chrome, Edge) pick the file for the image's laid-out
	width; it applies to lazy images only. Other browsers, and eager images,
	use the fallback - pass one that is never smaller than the image is shown
	at, or it renders blurry.
*/
export const sizesAuto = (fallback) => `auto, ${fallback}`;
