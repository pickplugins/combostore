import React from "react";
import { useState, useEffect } from "react";
import { IconReplace, IconPlug, IconPlugX, IconSearch, IconAlertTriangle, IconRefresh, IconLayoutBottombar } from "@tabler/icons-react";
import CssSelectors from "../CssSelectors";
import { useCounterStore } from '../../../store/useCounterStore';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Global CSS styles `input` and `button` with unlayered rules, so they beat
	 Tailwind utilities and these have to be marked important to land. */
const FIELD_CLASSES =
	"w-full !rounded-lg !border !border-gray-300 !bg-white !py-1.5 !pl-7 !pr-2.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10";

const ACTION_CLASSES =
	"inline-flex items-center gap-1.5 !rounded-lg !border !border-gray-200 !bg-white !px-2 !py-1 !text-xs !font-medium !text-gray-600 !shadow-none transition-colors hover:!border-brand/40 hover:!bg-brand/5 hover:!text-brand-700";

const RESET_CLASSES =
	"inline-flex items-center gap-1.5 !rounded-lg !border !border-gray-200 !bg-white !px-2 !py-1 !text-xs !font-medium !text-gray-500 !shadow-none transition-colors hover:!border-red-200 hover:!bg-red-50 hover:!text-red-600";

/* Search only earns its row once the list is long enough to need it. */
const SEARCH_THRESHOLD = 6;


const SiteFooterOptions = (props) => {


	const { token } = useCounterStore()

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var templteId = options?.id ?? null;
	var cssSelectors = props?.cssSelectors ?? {};

	var [queryPrams, setqueryPrams] = useState({ type: 'footer', keyword: "", });

	const [loading, setloading] = useState(true);
	const [error, seterror] = useState(false);
	const [footers, setfooters] = useState({ posts: [] });
	/* `keyword` sat in queryPrams unused and the list had no way to be narrowed,
		 so a store with a dozen footers meant scrolling the whole panel. Filtering
		 the loaded list keeps it instant and costs no extra request. */
	const [keyword, setkeyword] = useState("");


	function get_template_parts() {

		var postData = JSON.stringify(queryPrams);
		setloading(true);
		seterror(false);

		fetch(serverUrl + "wp-json/combo-store/v2/get_template_parts", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				return response.json();
			})
			.then((res) => {

				var posts = res?.posts;
				var total = parseInt(res?.total);
				var max_pages = parseInt(res?.max_pages);

				setfooters({ posts: Array.isArray(posts) ? posts : [], total: total, maxPages: max_pages })
				setloading(false);

			})
			.catch((_error) => {
				/* The old handler was empty, so a failed request left the panel
					 looking like a store with no footers at all - and `loading`
					 stuck on, had anything rendered it. */
				seterror(true);
				setloading(false);
			});

	}

	useEffect(() => {

		get_template_parts();
	}, []);


	var posts = footers?.posts ?? [];
	var showSearch = !loading && !error && posts.length >= SEARCH_THRESHOLD;

	var term = keyword.trim().toLowerCase();
	var visiblePosts = term
		? posts.filter(item => String(item?.title ?? "").toLowerCase().includes(term))
		: posts;


	return (
		/* Was `px-3` alone, so the footer panel sat flush against the top of the
			 sidebar while the header panel - rendered in the same slot - had `py-5`. */
		<div className="px-3 py-5" >

			<div className="flex flex-col gap-4">

				<div className="flex flex-col gap-2">

					<div className="flex items-center justify-between gap-2">
						<label htmlFor="" className="text-xs font-semibold uppercase tracking-wide text-gray-500">Footer Template</label>
						{posts.length > 0 && (
							<span className="shrink-0 rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold text-gray-500">{posts.length}</span>
						)}
					</div>

					{showSearch && (
						<div className="relative">
							<IconSearch size={13} className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
							<input
								type="text"
								value={keyword}
								placeholder="Search footers"
								className={FIELD_CLASSES}
								onChange={ev => setkeyword(ev.target.value)}
							/>
						</div>
					)}

					{loading && (
						/* Placeholder rows in the shape of the real cards: the list
							 used to pop in out of an empty panel with no sign that a
							 request was in flight. */
						<div className="flex flex-col gap-2">
							{[0, 1, 2].map(i => (
								<div key={i} className="animate-pulse rounded-lg border border-gray-200 bg-white p-2.5">
									<div className="h-3 w-2/5 rounded bg-gray-200" />
									<div className="mt-3 flex gap-2">
										<div className="h-6 w-20 rounded-lg bg-gray-100" />
										<div className="h-6 w-16 rounded-lg bg-gray-100" />
									</div>
								</div>
							))}
						</div>
					)}

					{!loading && error && (
						<div className="flex flex-col items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
							<div className="flex items-center gap-1.5 text-xs font-medium text-amber-800">
								<IconAlertTriangle size={14} className="shrink-0" /> Could not load footer templates
							</div>
							<button
								type="button"
								className={ACTION_CLASSES}
								onClick={ev => {

									ev.preventDefault();
									get_template_parts();

								}}
							><IconRefresh size={13} /> Try again</button>
						</div>
					)}

					{!loading && !error && posts.length < 1 && (
						<div className="flex flex-col items-center gap-1.5 rounded-lg border border-dashed border-gray-200 bg-gray-50 px-3 py-6 text-center">
							<IconLayoutBottombar size={20} className="text-gray-300" />
							<div className="text-xs font-medium text-gray-500">No footer templates yet</div>
							<div className="text-[11px] text-gray-400">Save a footer as a template to reuse it here.</div>
						</div>
					)}

					{!loading && !error && posts.length > 0 && visiblePosts.length < 1 && (
						<div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-3 py-4 text-center text-xs text-gray-500">
							No footer matches &ldquo;{keyword.trim()}&rdquo;
						</div>
					)}

					<div className="flex flex-col gap-2">

						{visiblePosts.map(item => {

							var assigned = templteId == item.id;

							return (

								/* Cards were flat `bg-gray-300` blocks, with the assigned
									 one flipped to `bg-orange-200` - the loudest colour in
									 the panel and off the brand palette. They carried
									 `cursor-pointer` too, though only the buttons click. */
								<div
									key={item.id}
									className={`flex flex-col gap-2.5 rounded-lg border p-2.5 transition-colors ${assigned ? "border-brand/40 bg-brand/5 ring-4 ring-brand/10" : "border-gray-200 bg-white hover:border-gray-300"}`}
								>
									<div className="flex items-center justify-between gap-2">
										<div className={`truncate text-xs ${assigned ? "font-semibold text-brand-700" : "font-medium text-gray-700"}`} title={item.title}>
											{item.title || <span className="font-sans italic text-gray-400">untitled footer</span>}
										</div>
										{assigned && (
											<span className="shrink-0 rounded-full bg-brand/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-700">Assigned</span>
										)}
									</div>


									<div className="flex flex-wrap gap-2">

										<button
											type="button"
											title="Replace the footer contents with this template"
											className={ACTION_CLASSES}
											onClick={ev => {

												ev.preventDefault();

												var content = item?.content

												/* A template saved with malformed content used to throw
													 straight out of the click handler and take the panel
													 down with it. */
												try {
													content = JSON.parse(content)
												} catch (_error) {
													return;
												}

												updateBlock('children', content)

											}}
										><IconReplace size={14} /> Replace</button>

										{assigned && (
											<button
												type="button"
												title="Unassign this template"
												className={RESET_CLASSES}
												onClick={ev => {

													ev.preventDefault();

													var optionsX = { ...options }

													optionsX.id = null
													updateBlock('options', optionsX)

												}}
											><IconPlugX size={14} /> Reset</button>

										)}
										{!assigned && (

											<button
												type="button"
												title="Assign this template to the footer"
												className={ACTION_CLASSES}
												onClick={ev => {

													ev.preventDefault();

													var optionsX = { ...options }

													optionsX.id = item.id
													updateBlock('options', optionsX)

												}}
											><IconPlug size={14} /> Assign</button>
										)}

									</div>
								</div>

							)

						})}

					</div>

				</div>


				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />


			</div>


		</div>
	);
};



export default SiteFooterOptions;
