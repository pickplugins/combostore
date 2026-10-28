"use client";

import React from "react";
import {
	IconEye, IconDeviceFloppy, IconCloudCheck, IconAlertTriangle, IconSearch,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import Spinner from "../../../components/Spinner";

import { useQuickViewStore } from "../lib/store";
import { SECTIONS, WIDTHS } from "../lib/defaults";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/*
	The extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which already sits inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there and
	this draws only the page body, exactly like a core screen.

	The preview is the real modal on a real product, not a mock-up. It can be,
	because the runtime that mounts the modal is in the root layout and that
	wraps the dashboard too - so what the merchant is looking at is literally
	what a shopper gets, rather than a drawing of it that can fall behind.
*/

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:!opacity-50";

const GHOST_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand disabled:!opacity-50";

const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-sm !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const CARD = "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm";

const QuickView = () => {

	const { token, settings: storeSettings, addNotification } = useCounterStore();

	const settings = useQuickViewStore((s) => s.settings);
	const saving = useQuickViewStore((s) => s.saving);
	const source = useQuickViewStore((s) => s.source);
	const { hydrateFromSettings, setSettings, toggleSection, saveSettings, open } = useQuickViewStore();

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	/* --- preview --- */

	const [keyword, setKeyword] = React.useState("");
	const [matches, setMatches] = React.useState([]);
	const [searching, setSearching] = React.useState(false);

	async function search() {
		if (keyword.trim().length < 2) return;
		setSearching(true);
		try {
			const response = await fetch(`${serverUrl}wp-json/combo-store/v2/get_products`, {
				method: "POST",
				headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
				body: JSON.stringify({ keyword: keyword.trim(), per_page: 8, paged: 1, order: "DESC" }),
			});
			if (!response.ok) throw new Error("Search failed");
			const res = await response.json();
			setMatches(Array.isArray(res?.posts) ? res.posts : []);
		} catch (e) {
			addNotification?.({ type: "error", title: "Could not search", content: e?.message ?? String(e) });
		} finally {
			setSearching(false);
		}
	}

	async function onSave() {
		const result = await saveSettings(token);
		addNotification?.({
			type: result.ok ? "success" : "error",
			title: result.ok ? "Settings saved" : "Not saved",
			content: result.message,
		});
	}

	return (
		<div className="flex flex-col gap-5 p-5">

			<div className="flex items-center gap-2">
				<IconEye size={22} className="text-[#634FE5]" />
				<h1 className="text-xl font-semibold text-gray-900">Quick View</h1>
			</div>

			{source !== "settings" ? (
				<div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
					<IconAlertTriangle size={17} className="mt-0.5 shrink-0" />
					<div>
						<div className="font-semibold">These settings have not come from the store.</div>
						<div className="mt-0.5 text-amber-700">
							Either nothing has been saved yet, or the store is not keeping the
							<code className="mx-1 rounded bg-amber-100 px-1">quickViewSettings</code>
							key. Until it does, shoppers get the defaults.
						</div>
					</div>
				</div>
			) : (
				<div className="flex items-center gap-2 text-xs text-green-700">
					<IconCloudCheck size={15} /> Live on the storefront.
				</div>
			)}

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

				{/* ---- what the modal shows ---- */}
				<div className={`${CARD} flex flex-col gap-1`}>
					<h3 className="text-sm font-semibold text-gray-900">What the modal shows</h3>
					<p className="mb-2 text-xs text-gray-500">
						In this order, top to bottom. Everything here is the product page&apos;s own
						block, so it behaves the same way inside the modal.
					</p>

					{SECTIONS.map((section) => (
						<label
							key={section.key}
							className="flex cursor-pointer items-start gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-gray-50">
							<input
								type="checkbox"
								className="mt-0.5"
								checked={settings.show?.[section.key] !== false}
								onChange={(ev) => toggleSection(section.key, ev.target.checked)}
							/>
							<span className="flex flex-col">
								<span className="text-sm text-gray-800">{section.label}</span>
								{section.hint && <span className="text-[11px] text-gray-400">{section.hint}</span>}
							</span>
						</label>
					))}
				</div>

				{/* ---- behaviour ---- */}
				<div className={`${CARD} flex flex-col gap-4`}>
					<h3 className="text-sm font-semibold text-gray-900">Behaviour</h3>

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-medium text-gray-600">Width</label>
						<select
							className={FIELD}
							value={settings.width ?? "md"}
							onChange={(ev) => setSettings({ width: ev.target.value })}>
							{WIDTHS.map((w) => <option key={w.value} value={w.value}>{w.label}</option>)}
						</select>
					</div>

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-medium text-gray-600">Short description length</label>
						<input
							type="number"
							min="5"
							className={FIELD}
							value={settings.excerptWords ?? 45}
							onChange={(ev) => setSettings({ excerptWords: ev.target.value })}
						/>
						<span className="text-[11px] text-gray-400">Words, before it is cut off.</span>
					</div>

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-medium text-gray-600">Default button wording</label>
						<input
							type="text"
							className={FIELD}
							value={settings.buttonLabel ?? ""}
							onChange={(ev) => setSettings({ buttonLabel: ev.target.value })}
						/>
						<span className="text-[11px] text-gray-400">
							A button can override this; left alone, every trigger says this.
						</span>
					</div>

					<div className="flex flex-col gap-1.5">
						<label className="text-xs font-medium text-gray-600">Link to the full page</label>
						<input
							type="text"
							className={FIELD}
							value={settings.fullLinkLabel ?? ""}
							onChange={(ev) => setSettings({ fullLinkLabel: ev.target.value })}
						/>
					</div>

					<label className="flex items-center gap-2 text-sm text-gray-700">
						<input
							type="checkbox"
							checked={settings.closeAfterAdd === true}
							onChange={(ev) => setSettings({ closeAfterAdd: ev.target.checked })}
						/>
						Close once something is added to the cart
					</label>

					<label className="flex items-center gap-2 text-sm text-gray-700">
						<input
							type="checkbox"
							checked={settings.closeOnBackdrop !== false}
							onChange={(ev) => setSettings({ closeOnBackdrop: ev.target.checked })}
						/>
						Clicking outside closes it
					</label>
					<p className="-mt-2 text-[11px] text-gray-400">
						Escape and the close button always work, whatever this is set to.
					</p>
				</div>

			</div>

			{/* ---- preview ---- */}

			<div className={`${CARD} flex flex-col gap-3`}>
				<div>
					<h3 className="text-sm font-semibold text-gray-900">Preview</h3>
					<p className="text-xs text-gray-500">
						Opens the real modal on a real product, with the settings above as they
						stand - saved or not.
					</p>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					<div className="relative">
						<IconSearch size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							placeholder="Find a product"
							className={`${FIELD} !pl-8 w-64`}
							value={keyword}
							onChange={(ev) => setKeyword(ev.target.value)}
							onKeyDown={(ev) => { if (ev.key === "Enter") search(); }}
						/>
					</div>
					<button type="button" className={GHOST_BUTTON} onClick={search} disabled={searching}>
						{searching ? <Spinner size={14} /> : <IconSearch size={15} />}
						Search
					</button>
				</div>

				{matches.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{matches.map((product) => (
							<button
								key={product.id}
								type="button"
								onClick={() => open(product.slug, {
									id: product.id,
									slug: product.slug,
									title: product.title,
									post_thumbnail: product.post_thumbnail,
								})}
								className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-[#634FE5] hover:text-[#634FE5]">
								<IconEye size={14} />
								{product.title}
							</button>
						))}
					</div>
				)}
			</div>

			<div className="sticky bottom-4 flex justify-end">
				<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={onSave}>
					<IconDeviceFloppy size={16} />
					{saving ? "Saving..." : "Save settings"}
				</button>
			</div>

			{/* Nowhere else says this, and a merchant who switches everything
			    on and sees no button anywhere would reasonably think it was
			    broken. */}
			<p className="text-xs leading-relaxed text-gray-400">
				Nothing opens the modal until the <strong>Quick View Button</strong> block is
				placed inside a product grid, slider or loop. It needs the product context a
				loop provides, so it does nothing outside one.
			</p>

		</div>
	);
};

export default QuickView;
