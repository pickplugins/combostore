"use client";

import React, { useState } from "react";
import WidgetWrapper from '../../components/WidgetWrapper';
import { useCounterStore } from '../../store/useCounterStore'
import { IconFidgetSpinner, IconTrash, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconClipboard } from "@tabler/icons-react";

import TermsPicker from "../../components/shop-elements/TermsPicker";
import TagsPicker from "../../components/shop-elements/TagsPicker";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* Same card shell, fields and buttons as ProductEdit. */
const CARD_CLASSES =
	"form-card !gap-0 !rounded-xl border border-gray-200 [&>div:first-child]:!px-5 [&>div:first-child]:!py-4 [&>div:nth-child(2)]:!p-5 [&>div:nth-child(2)]:!pt-3 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-gray-900";

const LABEL_CLASSES = "block text-sm font-medium text-gray-700";

const FIELD_CLASSES =
	"!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg bg-white px-3 py-2 text-sm";

const PRIMARY_BUTTON =
	"inline-flex flex-1 items-center justify-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4] disabled:cursor-not-allowed disabled:opacity-60";

const SECONDARY_BUTTON =
	"inline-flex shrink-0 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 cursor-pointer";

const CHIP_CLASSES =
	"text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900";

const CHIP_REMOVE =
	"inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4";

const asArray = (value) => (Array.isArray(value) ? value : []);

const countLines = (text) => String(text || "").split("\n").filter(line => line.trim().length > 0).length;

const BulkSubmitBlog = () => {

	const { token, addNotification } = useCounterStore()

	var promptData = {
		"title": "",
		"post_content": "",
		"post_excerpt": "",
		"post_thumbnail": {
			"id": "",
			"src": ""
		},
		"post_thumbnail_url": "",
		"featured": false,
		"categories": [],
		"tags": [],
		"gallery": [],

		"faq": [],
	}

	var [currentObject, setcurrentObject] = useState(promptData);

	var [loading, setloading] = useState(false);
	var [errors, seterrors] = useState({});
	var [submission, setsubmission] = useState({ id: null, success: false });

	const titleCount = countLines(currentObject?.post_content);
	const errorList = Object.values(errors || {}).filter(Boolean);

	function submit_prompt() {

		if (titleCount === 0) {
			addNotification({ type: 'error', title: 'No titles', content: "Add at least one blog title, one per line." });
			return;
		}

		if (!token) {
			addNotification({ type: 'error', title: 'Not signed in', content: "Please sign in again to submit." });
			return;
		}

		var postData = JSON.stringify(currentObject);

		setloading(true);
		setsubmission({ ...submission, success: false });

		fetch(
			serverUrl + "wp-json/combo-store/v2/bulk_submit_blog",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: postData,
			}
		)
			.then((response) => {
				if (response.status === 401 || response.status === 403) {
					throw new Error("auth");
					}
					if (!response.ok) {
					throw new Error("request");
				}
				return response.json();
			})
			.then((res) => {
				var success = res?.success;

				if (!success) {
					seterrors(res?.errors || { general: res?.message || "Submission failed." })
				}
				if (success) {
					seterrors({})
					setsubmission({ ...submission, success: true })
				}

				setloading(false);
			})
			.catch((_error) => {
				setloading(false);
				seterrors({ general: _error?.message === "auth" ? "Your session has expired or you don't have permission. Please sign in again." : "Could not reach the server. Please try again." });
			});
	}

	function pasteFromClipboard() {
		navigator.clipboard
			.readText()
			.then((text) => {
				const parsedData = JSON.parse(text);
				setcurrentObject(prev => ({ ...prev, ...parsedData }));
				addNotification({ type: 'success', title: 'Pasted', content: "Clipboard data applied." });
			})
			.catch(() => {
				addNotification({ type: 'error', title: 'Paste failed', content: "The clipboard doesn't contain valid JSON." });
			});
	}

	// Categories are sent as a list of term ids, as before.
	function onPickCategories(item) {
		setcurrentObject(prev => {
			const categories = asArray(prev.categories);
			const exists = categories.includes(item?.term_id);
			return {
				...prev,
				categories: exists ? categories.filter(id => id !== item?.term_id) : [...categories, item?.term_id],
			};
		});
	}

	// TagsPicker hands back an array of terms; add the ones not already present.
	function onPickTags(items) {
		setcurrentObject(prev => {
			const next = [...asArray(prev.tags)];
			asArray(items).forEach(item => {
				if (!next.some(term => term.name === item.name)) {
					next.push({ "term_id": item.term_id, "name": item.name });
				}
			});
			return { ...prev, tags: next };
		});
	}

	function removeTag(index) {
		setcurrentObject(prev => ({ ...prev, tags: asArray(prev.tags).filter((_, i) => i !== index) }));
	}

	return (
		<div className="flex-1 min-h-full bg-gray-50 px-3 py-5 sm:px-6 sm:py-6">

			<div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">

				<div className="flex min-w-0 flex-col gap-4">

					<div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
						<div className="min-w-0">
							{loading && (
								<div className="flex items-center gap-2 text-sm text-amber-600">
									<div className="animate-spin"><IconFidgetSpinner size={18} /> </div>
									<div>Please wait...</div>
								</div>
							)}
							{!loading && (
								<div className="min-w-0">
									<div className="text-[11px] font-medium uppercase tracking-wide text-gray-500">Bulk submit</div>
									<div className="truncate text-base font-semibold text-gray-900">Blog posts</div>
								</div>
							)}
						</div>

						<span className="inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600">
							{titleCount} {titleCount === 1 ? "post" : "posts"}
						</span>
					</div>

					{submission.success && (
						<div className="form-card flex items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 shadow-sm">
							<div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
								<IconRosetteDiscountCheck size={18} />
								<div>Thanks for your submission</div>
							</div>
							<button type="button" aria-label="Dismiss" className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-emerald-700 hover:bg-emerald-100 cursor-pointer" onClick={() => setsubmission({ ...submission, success: false })}>
								<IconX size={16} />
							</button>
						</div>
					)}

					{errorList.length > 0 && (
						<div className="form-card flex items-start justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-3 shadow-sm">
							<div className="flex flex-col gap-1.5 text-sm text-red-700">
								<div className="font-semibold">Errors</div>
								{errorList.map((message, index) => (
									<div key={index} className="flex items-start gap-2">
										<IconExclamationCircle size={16} className="mt-0.5 shrink-0" /> <div>{String(message)}</div>
									</div>
								))}
							</div>
							<button type="button" aria-label="Dismiss" className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-red-700 hover:bg-red-100 cursor-pointer" onClick={() => seterrors({})}>
								<IconX size={16} />
							</button>
						</div>
					)}

					<WidgetWrapper className={CARD_CLASSES} collapsible={true} title="General Info">
						<div className="flex flex-col gap-1.5">
							<label htmlFor="bulk-blog-titles" className={LABEL_CLASSES}>
								{("Blog Titles")}
							</label>
							<textarea
								id="bulk-blog-titles"
								placeholder={"One blog title per line"}
								className={`${FIELD_CLASSES} h-64 font-mono leading-relaxed`}
								value={currentObject?.post_content}
								onChange={(ev) => {
									var value = ev.target.value;
									setcurrentObject(prev => ({ ...prev, post_content: value }));
								}}
							/>
							<div className="text-xs text-gray-500">Each non-empty line creates one post.</div>
						</div>
					</WidgetWrapper>

				</div>

				<div className="min-w-0 xl:sticky xl:top-[86px] xl:self-start">

					<div className="flex flex-col gap-4">

						<div className="form-card flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
							<button type="button" className={SECONDARY_BUTTON} onClick={pasteFromClipboard} title="Paste JSON from the clipboard">
								<IconClipboard size={16} /> Paste
							</button>
							<button type="button" className={PRIMARY_BUTTON} disabled={loading} onClick={submit_prompt}>
								{loading && (<span className="animate-spin"><IconFidgetSpinner size={16} /></span>)}Submit
							</button>
						</div>

						<WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Categories">
							<div className="flex flex-col gap-4">
								<TermsPicker
									queryPrams={{ taxonomy: "category", hierarchical: true, per_page: 999 }}
									selected={asArray(currentObject?.categories).map(id => ({ term_id: id }))}
									onPick={onPickCategories}
								/>
							</div>
						</WidgetWrapper>

						<WidgetWrapper className={CARD_CLASSES} collapsible={true} title="Tags">
							<div className="flex flex-col gap-4">
								{asArray(currentObject?.tags).length > 0 && (
									<div className="flex gap-2 items-center flex-wrap">
										{asArray(currentObject?.tags).map((item, index) => (
											<div key={`${item?.name}-${index}`} className={CHIP_CLASSES}>
												<div>{item?.name}</div>
												<button type="button" aria-label={`Remove ${item?.name}`} className={CHIP_REMOVE} onClick={() => removeTag(index)}><IconTrash /></button>
											</div>
										))}
									</div>
								)}
								<TagsPicker taxonomy="post_tag" selected={currentObject?.tags} onPick={onPickTags} />
							</div>
						</WidgetWrapper>

					</div>

				</div>

			</div>

		</div>
	);
};

export default BulkSubmitBlog;
