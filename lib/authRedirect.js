/*
	Where to send someone after they sign in or register, from `?redirect=` on
	/login and /register (the checkout's "Sign in to place your order" notice
	links there with the page it came from).

	Only a path on this site is followed - "/checkout", never "//host",
	"/\host" or a full URL - so the link cannot bounce someone to another
	site. Anything else is undefined, which leaves each caller's own default.
*/
export function safeRedirectPath(value) {
	const path = String(value ?? '');
	return /^\/(?![\/\\])/.test(path) ? path : undefined;
}

/* The current page's `?redirect=`, checked. Browser only; undefined elsewhere. */
export function redirectFromLocation() {
	try {
		return safeRedirectPath(new URLSearchParams(window.location.search).get('redirect'));
	} catch {
		return undefined;
	}
}

/* `href` with `?redirect=` carried over, for links between /login and /register. */
export function withRedirect(href, redirect) {
	return redirect ? `${href}?redirect=${encodeURIComponent(redirect)}` : href;
}
