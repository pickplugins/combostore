'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconCircleCheck, IconClockHour4, IconInfoCircle, IconSpeakerphone, IconX } from "@tabler/icons-react";
import { useCounterStore } from "../store/useCounterStore";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The signed-in user's affiliate programme panel.

	From get_user (ComboStoreRest):
	- user.affiliate_application: { status, applied_at, decided_at } or null.
	- user.affiliate_can_apply: the server would accept apply_for_affiliate now
	  (a shopper account, Settings > Affiliates "Affiliate sign-up" on, no
	  application yet). The server checks again when they apply.
	- user.affiliate_needs_approval: whether applying files an application
	  or makes them an affiliate straight away.

	Shows, in this order:
	- an "approved just now" note right after an instant join;
	- pending: always, until a manager decides;
	- rejected: until dismissed (remembered per decision in this browser);
	- can apply: a "Become an affiliate" card with an optional note, until
	  "Not now" (remembered in this browser);
	- otherwise nothing.

	Used on the storefront account area (CustomerAccountLoggedView) and the
	dashboard home (Dashboard.jsx). `className` adds outer spacing.
*/

const DISMISS_KEY = "cs_affiliate_application_dismissed";
const APPLY_DISMISS_KEY = "cs_affiliate_apply_dismissed";
const NOTE_MAX = 1000;

function formatDate(value) {
	if (!value) return "";
	const date = new Date(String(value).replace(" ", "T"));
	if (isNaN(date)) return String(value);
	return date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function readStored(key) {
	try {
		return localStorage.getItem(key);
	} catch (e) {
		return null;
	}
}

function writeStored(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch (e) { }
}

export default function AffiliateApplicationStatus({ className = "" }) {
	const { token, userDataX, setUserDataX } = useCounterStore();
	const application = userDataX?.affiliate_application;
	const status = application?.status;

	/* Read after mount: no localStorage on the server. */
	const [dismissed, setDismissed] = useState(null);
	const [applyDismissed, setApplyDismissed] = useState(null);
	useEffect(() => {
		setDismissed(readStored(DISMISS_KEY));
		setApplyDismissed(readStored(APPLY_DISMISS_KEY));
	}, []);

	const [formOpen, setFormOpen] = useState(false);
	const [note, setNote] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");
	/* Set when applying made them an affiliate at once (approval off). */
	const [joinedNow, setJoinedNow] = useState(false);

	function apply(ev) {
		ev.preventDefault();
		if (!token || submitting) return;

		setSubmitting(true);
		setError("");

		fetch(serverUrl + "wp-json/combo-store/v2/apply_for_affiliate", {
			method: "POST",
			headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
			body: JSON.stringify({ note: note.trim() }),
		})
			.then((response) => {
				if (!response.ok) throw new Error("We couldn't send your application just now. Please try again.");
				return response.json();
			})
			.then((res) => {
				if (res?.status !== "success") throw new Error(res?.message || "We couldn't send your application just now. Please try again.");
				setJoinedNow(res.application?.status === "approved");
				setUserDataX({
					...userDataX,
					roles: Array.isArray(res.roles) ? res.roles : userDataX?.roles,
					affiliate_application: res.application,
					affiliate_can_apply: false,
				});
				setFormOpen(false);
				setNote("");
			})
			.catch((err) => setError(err?.message || "We couldn't send your application just now. Please try again."))
			.finally(() => setSubmitting(false));
	}

	if (joinedNow && status === "approved") {
		return (
			<div role="status" className={`flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 ${className}`}>
				<IconCircleCheck size={18} className="mt-0.5 shrink-0" />
				<div className="flex flex-col gap-0.5">
					<span className="font-semibold">You're now an affiliate</span>
					<span>
						Find your affiliate link and follow your commission in the{" "}
						<Link href="/dashboard/affiliates-dashboard" className="font-medium underline">Affiliates Dashboard</Link>.
						If it isn't in your menu yet, reload the page.
					</span>
				</div>
			</div>
		);
	}

	if (status === "pending") {
		return (
			<div role="status" className={`flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 ${className}`}>
				<IconClockHour4 size={18} className="mt-0.5 shrink-0" />
				<div className="flex flex-col gap-0.5">
					<span className="font-semibold">Your affiliate application is waiting for approval</span>
					<span>
						{application?.applied_at ? `You applied on ${formatDate(application.applied_at)}. ` : ""}
						We'll email you as soon as it's reviewed. Until then your account works as usual for shopping.
					</span>
				</div>
			</div>
		);
	}

	var decisionKey = application?.decided_at || "rejected";
	/* Rejected, and the wait (30 days by default, server-side) is over: offer the card again below. */
	var canReapply = status === "rejected" && Boolean(userDataX?.affiliate_can_apply);
	var reapplyFrom = userDataX?.affiliate_reapply_from;

	if (status === "rejected" && !canReapply && dismissed !== decisionKey) {
		return (
			<div role="status" className={`flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 ${className}`}>
				<IconInfoCircle size={18} className="mt-0.5 shrink-0 text-gray-400" />
				<div className="flex flex-1 flex-col gap-0.5">
					<span className="font-semibold text-gray-900">Your affiliate application wasn't approved</span>
					<span>
						{application?.decided_at ? `Reviewed on ${formatDate(application.decided_at)}. ` : ""}
						{application?.message ? "" : "We've emailed you the details. "}Your customer account is not affected.
						{reapplyFrom ? ` You can apply again from ${formatDate(reapplyFrom)}.` : ""}
					</span>
					{/* The store's message with the rejection (plain text; React escapes it). */}
					{application?.message && (
						<blockquote className="mt-2 whitespace-pre-line rounded-md border-l-2 border-gray-300 bg-white px-3 py-2 text-gray-700">
							<span className="mb-0.5 block text-xs font-medium text-gray-500">Message from the store</span>
							{application.message}
						</blockquote>
					)}
				</div>
				<button
					type="button"
					aria-label="Dismiss"
					title="Dismiss"
					className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700"
					onClick={() => {
						setDismissed(decisionKey);
						writeStored(DISMISS_KEY, decisionKey);
					}}
				>
					<IconX size={16} />
				</button>
			</div>
		);
	}

	/*
		"Not now" hides the card in this browser: for good on a first
		application, and per rejection on a re-application (a later rejection
		offers it again).
	*/
	var applyKey = canReapply ? `r:${decisionKey}` : "1";

	if (userDataX?.affiliate_can_apply && (!status || canReapply) && applyDismissed !== applyKey) {
		var needsApproval = userDataX?.affiliate_needs_approval !== false;

		return (
			<div className={`rounded-lg border border-indigo-200 bg-indigo-50/60 px-4 py-3 text-sm text-gray-700 ${className}`}>
				<div className="flex items-start gap-3">
					<IconSpeakerphone size={18} className="mt-0.5 shrink-0 text-indigo-600" />
					<div className="flex flex-1 flex-col gap-0.5">
						<span className="font-semibold text-gray-900">{canReapply ? "Apply again to become an affiliate" : "Become an affiliate"}</span>
						<span>
							{canReapply
								? "Your last application wasn't approved, but you're welcome to try again - tell us what has changed."
								: "Share your own link and earn a commission on every sale you refer."}
							{needsApproval ? " We review each application and email you the result." : ""}
						</span>
					</div>
					{!formOpen && (
						<div className="flex shrink-0 items-center gap-1">
							<button type="button" onClick={() => setFormOpen(true)}
								className="inline-flex h-8 items-center rounded-lg bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
								Apply
							</button>
							<button type="button" onClick={() => { setApplyDismissed(applyKey); writeStored(APPLY_DISMISS_KEY, applyKey); }}
								className="inline-flex h-8 items-center rounded-lg px-2 text-sm text-gray-500 transition-colors hover:bg-white hover:text-gray-800">
								Not now
							</button>
						</div>
					)}
				</div>

				{formOpen && (
					<form onSubmit={apply} className="mt-3 flex flex-col gap-2 sm:pl-8">
						<label htmlFor="affiliate-apply-note" className="text-xs font-medium text-gray-600">
							Tell us how you'd promote us (optional)
						</label>
						<textarea
							id="affiliate-apply-note"
							rows={3}
							maxLength={NOTE_MAX}
							placeholder="Your website, social profiles, audience…"
							value={note}
							onChange={(ev) => setNote(ev.target.value)}
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/15"
						/>
						{error && <p role="alert" className="text-sm text-red-600">{error}</p>}
						<div className="flex items-center gap-2">
							<button type="submit" disabled={submitting}
								className="inline-flex h-9 items-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 disabled:opacity-60">
								{submitting ? "Sending…" : needsApproval ? "Send application" : "Join now"}
							</button>
							<button type="button" disabled={submitting} onClick={() => { setFormOpen(false); setError(""); }}
								className="inline-flex h-9 items-center rounded-lg px-3 text-sm text-gray-600 transition-colors hover:bg-white">
								Cancel
							</button>
						</div>
					</form>
				)}
			</div>
		);
	}

	return null;
}
