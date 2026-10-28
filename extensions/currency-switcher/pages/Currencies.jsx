"use client";

import React from "react";
import {
	IconCoin, IconPlus, IconTrash, IconDeviceFloppy, IconRefresh,
	IconCloudCheck, IconAlertTriangle, IconWorld,
} from "@tabler/icons-react";

import { useCounterStore } from "../../../store/useCounterStore";
import Spinner from "../../../components/Spinner";

import { useCurrencyStore } from "../lib/store";
import { CURRENCY_CATALOGUE, blankCurrency } from "../lib/defaults";
import { convert, formatNumber, withSymbol, toNumber } from "../lib/convert";

/*
	The extension's dashboard screen.

	Rendered by app/dashboard/[...slug]/page.jsx, which already sits inside
	app/dashboard/layout.jsx - so the sidebar, header and shell are there
	and this draws only the page body, exactly like a core screen.

	The figures in the preview column are the real converter on a real
	amount, so a rate with a decimal point in the wrong place is visible
	here rather than on a product page.
*/

const PRIMARY_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:!opacity-50";

const GHOST_BUTTON =
	"inline-flex items-center gap-2 !rounded-lg !border !border-gray-300 !bg-white !px-3.5 !py-2 !text-sm !font-medium !text-gray-700 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand disabled:!opacity-50";

const FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-sm !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const SMALL_FIELD =
	"!rounded-lg !border !border-gray-300 !bg-white !px-2 !py-1 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const CARD = "rounded-2xl border border-gray-200 bg-white p-5 shadow-sm";

/* What the preview prices. Round enough to check a rate against in your
   head, big enough that a thousands separator shows up. */
const SAMPLE_AMOUNT = 1250;

const Currencies = () => {

	const { token, settings: storeSettings, addNotification } = useCounterStore();
	const baseCode = useCounterStore((s) => s.currency);
	const baseSymbol = useCounterStore((s) => s.currencySymbole);

	const settings = useCurrencyStore((s) => s.settings);
	const saving = useCurrencyStore((s) => s.saving);
	const fetchingRates = useCurrencyStore((s) => s.fetchingRates);
	const source = useCurrencyStore((s) => s.source);
	const {
		hydrateFromSettings, setSettings, addCurrency, updateCurrency,
		removeCurrency, saveSettings, fetchRates,
	} = useCurrencyStore();

	React.useEffect(() => {
		if (storeSettings) hydrateFromSettings(storeSettings);
	}, [storeSettings, hydrateFromSettings]);

	const [toAdd, setToAdd] = React.useState("");

	const used = new Set([baseCode, ...settings.currencies.map((c) => c.code)]);
	const addable = CURRENCY_CATALOGUE.filter((c) => !used.has(c.code));

	async function onSave() {
		const result = await saveSettings(token);
		addNotification?.({
			type: result.ok ? "success" : "error",
			title: result.ok ? "Currencies saved" : "Not saved",
			content: result.message,
		});
	}

	async function onFetchRates() {
		const result = await fetchRates(baseCode);
		addNotification?.({
			type: result.ok ? "success" : "error",
			title: result.ok ? "Rates updated" : "Could not get rates",
			content: result.message,
		});
	}

	const ratesAge = (() => {
		if (!settings.ratesUpdatedAt) return null;
		const when = new Date(settings.ratesUpdatedAt);
		if (Number.isNaN(when.getTime())) return null;
		const days = Math.floor((Date.now() - when.getTime()) / 86400000);
		if (days <= 0) return "today";
		return `${days} day${days === 1 ? "" : "s"} ago`;
	})();

	return (
		<div className="flex flex-col gap-5 p-5">

			<div className="flex items-center gap-2">
				<IconCoin size={22} className="text-[#634FE5]" />
				<h1 className="text-xl font-semibold text-gray-900">Currencies</h1>
			</div>

			{source !== "settings" ? (
				<div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
					<IconAlertTriangle size={17} className="mt-0.5 shrink-0" />
					<div>
						<div className="font-semibold">These settings have not come from the store.</div>
						<div className="mt-0.5 text-amber-700">
							Either nothing has been saved yet, or the store is not keeping the
							<code className="mx-1 rounded bg-amber-100 px-1">currencySettings</code>
							key. Until it does, shoppers only ever see {baseCode}.
						</div>
					</div>
				</div>
			) : (
				<div className="flex items-center gap-2 text-xs text-green-700">
					<IconCloudCheck size={15} /> Live on the storefront.
				</div>
			)}

			{/* The thing most likely to be misunderstood, said before anything
			    else on the screen. */}
			<div className="flex items-start gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
				<IconWorld size={17} className="mt-0.5 shrink-0" />
				<div>
					<div className="font-semibold">This changes what prices look like, not what you are paid.</div>
					<div className="mt-0.5 text-blue-700">
						Carts, orders and payments stay in {baseCode}. A shopper browsing in
						another currency is still charged {baseCode} by their bank, at the
						bank&apos;s rate — which is why the note block exists.
					</div>
				</div>
			</div>

			{/* ---- the base ---- */}

			<div className={`${CARD} flex flex-wrap items-center gap-x-8 gap-y-2`}>
				<div>
					<div className="text-xs font-medium uppercase tracking-wide text-gray-500">Your currency</div>
					<div className="text-lg font-semibold text-gray-900">{baseCode} {baseSymbol}</div>
				</div>
				<p className="max-w-lg text-xs leading-relaxed text-gray-500">
					Everything is priced and settled in this. Every rate below is how much
					of that currency one {baseCode} buys, so {baseCode} itself is never in
					the list.
				</p>
			</div>

			{/* ---- the list ---- */}

			<div className="flex flex-wrap items-center justify-between gap-2">
				<h3 className="text-sm font-semibold text-gray-900">Currencies you offer</h3>
				<div className="flex flex-wrap items-center gap-2">
					{settings.currencies.length > 0 && (
						<>
							{ratesAge && (
								<span className="text-xs text-gray-400">Rates filled in {ratesAge}</span>
							)}
							<button type="button" className={GHOST_BUTTON} onClick={onFetchRates} disabled={fetchingRates}>
								{fetchingRates ? <Spinner size={14} /> : <IconRefresh size={15} />}
								Fetch today&apos;s rates
							</button>
						</>
					)}

					<select
						className={FIELD}
						value={toAdd}
						onChange={(ev) => setToAdd(ev.target.value)}>
						<option value="">Add a currency...</option>
						{addable.map((c) => <option key={c.code} value={c.code}>{c.code} {c.symbol}</option>)}
					</select>

					<button
						type="button"
						className={PRIMARY_BUTTON}
						disabled={!toAdd}
						onClick={() => { addCurrency(blankCurrency(toAdd)); setToAdd(""); }}>
						<IconPlus size={15} /> Add
					</button>
				</div>
			</div>

			{settings.currencies.length === 0 && (
				<div className={`${CARD} py-8 text-center text-sm text-gray-500`}>
					No other currencies yet, so every shopper sees {baseCode} and the switcher
					block hides itself.
				</div>
			)}

			{settings.currencies.map((currency) => {
				const rate = toNumber(currency.rate, 0);
				const converted = convert(SAMPLE_AMOUNT, currency);
				const rateMissing = !(rate > 0);

				return (
					<div key={currency.code} className={`${CARD} flex flex-col gap-3`}>

						<div className="flex flex-wrap items-center gap-3">
							<span className="rounded-lg bg-gray-100 px-2.5 py-1 font-mono text-sm font-semibold text-gray-700">
								{currency.code}
							</span>

							<label className="flex items-center gap-1.5 text-xs text-gray-600">
								<input
									type="checkbox"
									checked={currency.enabled !== false}
									onChange={(ev) => updateCurrency(currency.code, { enabled: ev.target.checked })}
								/>
								Offer it
							</label>

							<div className="ml-auto flex items-center gap-3">
								{/* The whole point of the row, kept where the eye
								    lands rather than at the end of the inputs. */}
								<div className={`rounded-lg px-3 py-1.5 text-sm ${rateMissing ? "bg-amber-50 text-amber-700" : "bg-gray-50 text-gray-700"}`}>
									{rateMissing
										? "No rate yet"
										: <>
											<span className="text-gray-400">{baseSymbol}{SAMPLE_AMOUNT} = </span>
											<span className="font-semibold">{withSymbol(formatNumber(converted, currency), currency)}</span>
										</>}
								</div>

								<button
									type="button"
									className={`${GHOST_BUTTON} !text-red-600 hover:!bg-red-50`}
									onClick={() => removeCurrency(currency.code)}
									aria-label={`Remove ${currency.code}`}>
									<IconTrash size={15} />
								</button>
							</div>
						</div>

						<div className="flex flex-wrap items-end gap-3">

							<Labelled label={`1 ${baseCode} =`} hint="The rate">
								<input
									type="number"
									step="0.000001"
									min="0"
									className={`${SMALL_FIELD} w-32`}
									value={currency.rate ?? 0}
									onChange={(ev) => updateCurrency(currency.code, { rate: ev.target.value })}
								/>
							</Labelled>

							<Labelled label="Symbol">
								<input
									type="text"
									className={`${SMALL_FIELD} w-20`}
									value={currency.symbol ?? ""}
									onChange={(ev) => updateCurrency(currency.code, { symbol: ev.target.value })}
								/>
							</Labelled>

							<Labelled label="Symbol goes">
								<select
									className={SMALL_FIELD}
									value={currency.position ?? "before"}
									onChange={(ev) => updateCurrency(currency.code, { position: ev.target.value })}>
									<option value="before">Before</option>
									<option value="after">After</option>
								</select>
							</Labelled>

							<label className="flex items-center gap-1.5 pb-1.5 text-xs text-gray-600">
								<input
									type="checkbox"
									checked={currency.space === true}
									onChange={(ev) => updateCurrency(currency.code, { space: ev.target.checked })}
								/>
								Space
							</label>

							<Labelled label="Decimals">
								<input
									type="number"
									min="0"
									max="4"
									className={`${SMALL_FIELD} w-16`}
									value={currency.decimals ?? 2}
									onChange={(ev) => updateCurrency(currency.code, { decimals: ev.target.value })}
								/>
							</Labelled>

							<Labelled label="Round to" hint="0 = don't">
								<input
									type="number"
									min="0"
									step="0.01"
									className={`${SMALL_FIELD} w-20`}
									value={currency.roundTo ?? 0}
									onChange={(ev) => updateCurrency(currency.code, { roundTo: ev.target.value })}
								/>
							</Labelled>

							<Labelled label="Thousands">
								<input
									type="text"
									maxLength={1}
									className={`${SMALL_FIELD} w-12`}
									value={currency.thousands ?? ","}
									onChange={(ev) => updateCurrency(currency.code, { thousands: ev.target.value })}
								/>
							</Labelled>

							<Labelled label="Decimal">
								<input
									type="text"
									maxLength={1}
									className={`${SMALL_FIELD} w-12`}
									value={currency.decimal ?? "."}
									onChange={(ev) => updateCurrency(currency.code, { decimal: ev.target.value })}
								/>
							</Labelled>

						</div>
					</div>
				);
			})}

			{/* ---- wording and behaviour ---- */}

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

				<div className={`${CARD} flex flex-col gap-3`}>
					<h3 className="text-sm font-semibold text-gray-900">The note</h3>

					<label className="flex items-center gap-2 text-sm text-gray-700">
						<input
							type="checkbox"
							checked={settings.showNote !== false}
							onChange={(ev) => setSettings({ showNote: ev.target.checked })}
						/>
						Tell shoppers what they will actually be charged
					</label>

					<Labelled label="Wording">
						<textarea
							rows={2}
							className={FIELD}
							value={settings.noteTemplate ?? ""}
							onChange={(ev) => setSettings({ noteTemplate: ev.target.value })}
						/>
					</Labelled>
					<p className="-mt-1 text-[11px] text-gray-400">
						<code className="rounded bg-gray-100 px-1">{"{display}"}</code> and{" "}
						<code className="rounded bg-gray-100 px-1">{"{base}"}</code> are filled
						in. Place the <strong>Currency Note</strong> block on the cart and the
						checkout; it hides itself for shoppers in {baseCode}.
					</p>
				</div>

				<div className={`${CARD} flex flex-col gap-3`}>
					<h3 className="text-sm font-semibold text-gray-900">First visit</h3>

					<label className="flex items-center gap-2 text-sm text-gray-700">
						<input
							type="checkbox"
							checked={settings.autoDetect === true}
							onChange={(ev) => setSettings({ autoDetect: ev.target.checked })}
						/>
						Guess the currency from the browser&apos;s language
					</label>
					<p className="-mt-1 text-[11px] leading-relaxed text-gray-400">
						Only on a first visit, only from the region in the language tag, and
						only to a currency you offer. Anyone who has chosen is never
						second-guessed. Off by default, because a shopper shown the wrong
						currency may not notice it is wrong.
					</p>

					<Labelled label="Rate source">
						<input
							type="text"
							className={FIELD}
							value={settings.ratesEndpoint ?? ""}
							onChange={(ev) => setSettings({ ratesEndpoint: ev.target.value })}
						/>
					</Labelled>
					<p className="-mt-1 text-[11px] leading-relaxed text-gray-400">
						Only used when you press <strong>Fetch today&apos;s rates</strong>, and only
						from this screen — your shoppers&apos; browsers never contact it.{" "}
						<code className="rounded bg-gray-100 px-1">{"{base}"}</code> is replaced
						with {baseCode}. Fetched rates land in the fields above for you to
						check; they are not live until you save.
					</p>
				</div>

			</div>

			<div className="sticky bottom-4 flex justify-end">
				<button type="button" className={PRIMARY_BUTTON} disabled={saving} onClick={onSave}>
					<IconDeviceFloppy size={16} />
					{saving ? "Saving..." : "Save currencies"}
				</button>
			</div>

		</div>
	);
};

const Labelled = ({ label, hint, children }) => (
	<div className="flex flex-col gap-1.5">
		<label className="text-xs font-medium text-gray-600">
			{label}
			{hint && <span className="ml-1 font-normal text-gray-400">({hint})</span>}
		</label>
		{children}
	</div>
);

export default Currencies;
