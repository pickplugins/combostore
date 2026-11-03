"use client";

import { useCallback, useEffect, useState } from "react";
import { useCounterStore } from "../store/useCounterStore";

/*
	Offers the latest GitHub release to a store admin and puts it live on click.

	Everything goes through /api/update, which holds the store owner's Vercel
	token server-side: it compares the running build's commit with the latest
	release, and on POST promotes the build Vercel already made for it. Non-admins
	get a 403 and stores onboarded before this existed answer `configured: false`;
	both simply render nothing.
*/
export default function VersionUpdateBanner() {
	const { token } = useCounterStore();
	const [info, setInfo] = useState(null);
	const [dismissed, setDismissed] = useState(false);
	const [updating, setUpdating] = useState(false);
	const [error, setError] = useState("");

	const check = useCallback(() => {
		if (!token) return;
		fetch("/api/update", { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" })
			.then((res) => (res.ok ? res.json() : null))
			.then((data) => setInfo(data))
			.catch(() => setInfo(null));
	}, [token]);

	useEffect(() => { check(); }, [check]);

	const update = async () => {
		setUpdating(true);
		setError("");
		try {
			const res = await fetch("/api/update", {
				method: "POST",
				headers: { Authorization: `Bearer ${token}` },
			});
			const data = await res.json().catch(() => ({}));
			if (!res.ok || !data.ok) throw new Error(data.error || `Update failed (${res.status})`);
			/* The domain switch takes a moment to reach every edge; reload after it. */
			setTimeout(() => window.location.reload(), 4000);
		} catch (err) {
			setError(err.message);
			setUpdating(false);
		}
	};

	if (dismissed || !info?.configured || info.upToDate || !info.latest) return null;

	const building = !info.ready;

	return (
		<div className="m-3 rounded-lg bg-black p-4 text-sm text-white">
			<div className="mb-3">
				🚀 New dashboard version available ({info.latest.name})
				{building && (
					<div className="mt-1 text-xs text-zinc-400">
						Still building on Vercel - check again in a few minutes.
					</div>
				)}
				{error && <div className="mt-1 text-xs text-red-400">{error}</div>}
			</div>

			<div className="flex gap-2">
				<button
					onClick={building ? check : update}
					disabled={updating}
					className="rounded bg-green-500 px-3 py-1.5 font-medium text-black disabled:opacity-60">
					{updating ? "Updating…" : building ? "Check again" : "Update now"}
				</button>
				<button
					onClick={() => setDismissed(true)}
					disabled={updating}
					className="rounded border border-zinc-600 px-3 py-1.5">
					Dismiss
				</button>
			</div>
		</div>
	);
}
