/*
	An absolute URL on the store: NEXT_PUBLIC_STORE_URL joined to a path with
	exactly one slash between them.

	The setting is written both with and without a trailing slash, and the
	code joined it both ways - `${appUrl}/product/x` and `${appUrl}product/x` -
	so one style of setting broke the other style of join. With
	"https://kidobazar.com/" the sitemap listed https://kidobazar.com//account,
	which search engines treat as a different URL from /account.

	storeUrl()            -> "https://kidobazar.com"
	storeUrl("account")   -> "https://kidobazar.com/account"
	storeUrl("/product/x") -> "https://kidobazar.com/product/x"
*/
export function storeUrl(path = "") {
	var base = String(process.env.NEXT_PUBLIC_STORE_URL ?? "").trim().replace(/\/+$/, "");
	var rest = String(path ?? "").replace(/^\/+/, "");
	return rest ? `${base}/${rest}` : base;
}
