"use client";

import { useState } from "react";

/*
	"Resend verification email", shown under the "Please verify your email
	first" sign-in error (auth-context's `resendUrl`).

	The user-verification plugin sends the email when its resend URL is
	loaded - it checks the nonce and mails the user from that page's footer
	hook, with no form or script involved. So one background GET does it, and
	the shopper stays on the storefront instead of landing on the WordPress
	site. The request is cross-origin and `no-cors`, so the reply cannot be
	read: the confirmation is worded to match ("on its way"), not "sent".

	One press per error. Another failed sign-in brings a fresh link.
*/
export default function ResendVerificationButton({ url, className = "" }) {
	const [state, setState] = useState("idle"); // idle | sending | sent | failed

	if (!url) return null;

	const resend = () => {
		setState("sending");
		fetch(url, { method: "GET", mode: "no-cors", credentials: "omit", cache: "no-store" })
			.then(() => setState("sent"))
			.catch(() => setState("failed"));
	};

	if (state === "sent") {
		return <span className={className}>A new verification email is on its way - check your inbox and spam folder.</span>;
	}

	return (
		<span className={className}>
			<button
				type="button"
				onClick={resend}
				disabled={state === "sending"}
				className="font-semibold underline underline-offset-2 disabled:opacity-60"
			>
				{state === "sending" ? "Sending..." : "Resend verification email"}
			</button>
			{state === "failed" && <span> - that didn&apos;t go through. Please try again.</span>}
		</span>
	);
}
