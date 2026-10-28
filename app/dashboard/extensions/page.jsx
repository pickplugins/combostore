"use client";

import React from "react";
import { useEffect } from "react";
import { IconPuzzle, IconAlertTriangle } from "@tabler/icons-react";
import registry from "../../../extensions";
import { useExtensionsStore } from "../../../store/useExtensionsStore";

/*
	Installed extensions, and a switch for each.

	A real file under app/dashboard/, not an extension route: the screen that
	manages extensions should not depend on one being active.
*/
const ExtensionsPage = () => {

	const activeIds = useExtensionsStore((s) => s.activeIds);
	const hydrated = useExtensionsStore((s) => s.hydrated);
	const hydrate = useExtensionsStore((s) => s.hydrate);
	const setExtensionEnabled = useExtensionsStore((s) => s.setExtensionEnabled);

	useEffect(() => { hydrate(); }, [hydrate]);

	const active = new Set(activeIds);
	const manifests = registry.manifests;
	const problems = registry.problems;

	return (
		<div className="p-5">

			<div className="mb-5 flex items-center gap-3">
				<span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
					<IconPuzzle size={20} />
				</span>
				<div>
					<h1 className="text-lg font-semibold text-gray-900">Extensions - <span className="bg-amber-500 rounded-sm px-2 text-white text-sm py-1">Coming Soon</span></h1>
					<p className="text-sm text-gray-500">
						{manifests.length} installed. Switching one off hides its screens, nav entries
						and page-builder blocks.
					</p>
				</div>
			</div>

			{/*
				Manifest problems are reported here as well as in the console.
				An extension rejected for a bad manifest is otherwise simply
				absent, which looks identical to one that was never installed.
			*/}
			{problems.length > 0 && (
				<div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
					<div className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-900">
						<IconAlertTriangle size={16} />
						{problems.length === 1 ? "1 manifest problem" : `${problems.length} manifest problems`}
					</div>
					<ul className="space-y-1">
						{problems.map((p, i) => (
							<li key={i} className="text-xs text-amber-800">
								<code className="font-semibold">{p.id}</code> — {p.message}
							</li>
						))}
					</ul>
				</div>
			)}

			{manifests.length === 0 && (
				<div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
					<p className="text-sm text-gray-500">
						No extensions installed. Add one to <code className="text-xs">extensions/index.js</code>.
					</p>
				</div>
			)}

			<div className="space-y-3 grid grid-cols-4 gap-5">
				{manifests.map((m) => {
					const on = active.has(m.id);

					return (
						<div
							key={m.id}
							className="flex items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4">

							<div className="min-w-0">
								<div className="flex items-center gap-2">
									<h2 className="truncate text-sm font-semibold text-gray-900">{m.name}</h2>
									<span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500">
										v{m.version}
									</span>
								</div>

								{m.description && (
									<p className="mt-1 text-xs text-gray-500">{m.description}</p>
								)}

								{/* What it actually contributes, so the effect of
								    turning it off is visible before clicking. */}
								<div className="mt-2 flex flex-wrap gap-1.5">
									{m.nav.length > 0 && (
										<span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
											{m.nav.length} nav {m.nav.length === 1 ? "entry" : "entries"}
										</span>
									)}
									{Object.keys(m.routes).length > 0 && (
										<span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
											{Object.keys(m.routes).length} {Object.keys(m.routes).length === 1 ? "screen" : "screens"}
										</span>
									)}
									{m.elements.length > 0 && (
										<span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600">
											{m.elements.length} builder {m.elements.length === 1 ? "block" : "blocks"}
										</span>
									)}
								</div>
							</div>

							{/* Disabled until the stored choice has been read, so a
							    switch never shows the wrong position and then
							    flips a tick later. */}
							<button
								type="button"
								role="switch"
								aria-checked={on}
								aria-label={`${on ? "Disable" : "Enable"} ${m.name}`}
								disabled={!hydrated}
								onClick={() => setExtensionEnabled(m.id, !on)}
								className={`relative inline-flex h-6 w-11 shrink-0 items-center !rounded-full !border-0 !px-0 !py-0 !shadow-none transition-colors ${!hydrated
									? "!bg-gray-200 !cursor-not-allowed"
									: on ? "!bg-brand !cursor-pointer" : "!bg-gray-300 !cursor-pointer"}`}>
								<span
									className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${on ? "translate-x-6" : "translate-x-1"}`}
								/>
							</button>

						</div>
					);
				})}
			</div>

		</div>
	);
};

export default ExtensionsPage;
