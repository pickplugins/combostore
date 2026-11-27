'use client'

import { useEffect, useState } from "react";
import { IconBike, IconClockHour4, IconInfoCircle, IconX } from "@tabler/icons-react";
import { useCounterStore } from "../store/useCounterStore";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The signed-in user's rider application, as a notice.

	From get_user (ComboStoreRest / ComboStoreRiderApplications):
	- user.rider_application: { status, applied_at, decided_at, message } or
	  null - from a Register block set to Rider, or from their account.
	- user.rider_can_apply: apply_as_rider would accept them now (a shopper
	  account, Settings > Riders "Rider sign-up" on, nothing waiting, and
	  after a rejection the wait - "Reapply after (days)", 30 by default -
	  is over).
	- user.rider_reapply_from: while a rejected applicant still waits, from when.

	Shows:
	- pending: always, until a manager decides;
	- rejected, still waiting: with the store's message and the date they may
	  apply again, until dismissed (remembered per decision in this browser);
	- rejected, wait over: an "Apply again" card with an optional note, until
	  "Not now" (per decision);
	- never applied, and may: a "Become a rider" card, until "Not now";
	- approved / otherwise: nothing.

	Shown next to AffiliateApplicationStatus on the storefront account area
	and the dashboard home. `className` adds outer spacing.
*/

const DISMISS_KEY = "cs_rider_application_dismissed";
const REAPPLY_DISMISS_KEY = "cs_rider_reapply_dismissed";
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

export default function RiderApplicationStatus({ className = "" }) {
	const { token, userDataX, setUserDataX } = useCounterStore();
	const application = userDataX?.rider_application;
	const status = application?.status;

	/* Read after mount: no localStorage on the server. */
	const [dismissed, setDismissed] = useState(null);
	const [reapplyDismissed, setReapplyDismissed] = useState(null);
	useEffect(() => {
		setDismissed(readStored(DISMISS_KEY));
		setReapplyDismissed(readStored(REAPPLY_DISMISS_KEY));
	}, []);

	const [formOpen, setFormOpen] = useState(false);
	const [note, setNote] = useState("");
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState("");

	function apply(ev) {
		ev.preventDefault();
		if (!token || submitting) return;

		setSubmitting(true);
		setError("");

		fetch(serverUrl + "wp-json/combo-store/v2/apply_as_rider", {
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
				setUserDataX({ ...userDataX, rider_application: res.application, rider_can_apply: false, rider_can_reapply: false, rider_reapply_from: "" });
				setFormOpen(false);
				setNote("");
			})
			.catch((err) => setError(err?.message || "We couldn't send your application just now. Please try again."))
			.finally(() => setSubmitting(false));
	}

	if (status === "pending") {
		return (
			<div role="status" className={`flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 ${className}`}>
				<IconClockHour4 size={18} className="mt-0.5 shrink-0" />
				<div className="flex flex-col gap-0.5">
					<span className="font-semibold">Your rider application is waiting for approval</span>
					<span>
						{application?.applied_at ? `You applied on ${formatDate(application.applied_at)}. ` : ""}
						We'll email you as soon as it's reviewed. Until then your account works as usual for shopping.
					</span>
				</div>
			</div>
		);
	}

	if (status && status !== "rejected") return null;

	var canApply = Boolean(userDataX?.rider_can_apply ?? userDataX?.rider_can_reapply);
	var isReapply = status === "rejected";
	var decisionKey = application?.decided_at || "rejected";
	var reapplyFrom = userDataX?.rider_reapply_from;

	/*
		"Not now" is remembered per rejection for a re-application (a later
		rejection offers it again), and for good for a first application.
	*/
	var offerKey = isReapply ? decisionKey : "first";

	/* May apply now: first time, or again once the wait is over. */
	if (canApply && reapplyDismissed !== offerKey) {
		return (
			<div className={`rounded-lg border border-indigo-200 bg-indigo-50/60 px-4 py-3 text-sm text-gray-700 ${className}`}>
				<div className="flex items-start gap-3">
					<IconBike size={18} className="mt-0.5 shrink-0 text-indigo-600" />
					<div className="flex flex-1 flex-col gap-0.5">
						<span className="font-semibold text-gray-900">{isReapply ? "Apply again to become a rider" : "Become a rider"}</span>
						<span>
							{isReapply
								? "Your last rider application wasn't approved, but you're welcome to try again - tell us what has changed. We review every application."
								: "Deliver orders for us in your area. We review every application and email you the result."}
						</span>
					</div>
					{!formOpen && (
						<div className="flex shrink-0 items-center gap-1">
							<button type="button" onClick={() => setFormOpen(true)}
								className="inline-flex h-8 items-center rounded-lg bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700">
								Apply
							</button>
							<button type="button" onClick={() => { setReapplyDismissed(offerKey); writeStored(REAPPLY_DISMISS_KEY, offerKey); }}
								className="inline-flex h-8 items-center rounded-lg px-2 text-sm text-gray-500 transition-colors hover:bg-white hover:text-gray-800">
								Not now
							</button>
						</div>
					)}
				</div>

				{formOpen && (
					<form onSubmit={apply} className="mt-3 flex flex-col gap-2 sm:pl-8">
						<label htmlFor="rider-reapply-note" className="text-xs font-medium text-gray-600">
							{isReapply ? "What has changed? (optional)" : "Tell us about yourself (optional)"}
						</label>
						<textarea
							id="rider-reapply-note"
							rows={3}
							maxLength={NOTE_MAX}
							placeholder="A licence, a vehicle, the areas you can cover…"
							value={note}
							onChange={(ev) => setNote(ev.target.value)}
							className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/15"
						/>
						{error && <p role="alert" className="text-sm text-red-600">{error}</p>}
						<div className="flex items-center gap-2">
							<button type="submit" disabled={submitting}
								className="inline-flex h-9 items-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 disabled:opacity-60">
								{submitting ? "Sending…" : "Send application"}
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

	/* Never applied (and may not now), an offer turned down, or a dismissed rejection: nothing. */
	if (!isReapply || canApply || dismissed === decisionKey) return null;

	return (
		<div role="status" className={`flex items-start gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 ${className}`}>
			<IconInfoCircle size={18} className="mt-0.5 shrink-0 text-gray-400" />
			<div className="flex flex-1 flex-col gap-0.5">
				<span className="font-semibold text-gray-900">Your rider application wasn't approved</span>
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
