import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
	IconX,
	IconChevronLeft,
	IconChevronRight,
	IconUpload,
	IconSearch,
	IconPhoto,
	IconCheck,
	IconPhotoOff,
} from "@tabler/icons-react";
import UploadMedia from "./UploadMedia";

import Image from "next/image";

const ICON_BUTTON =
	"inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 cursor-pointer disabled:cursor-not-allowed disabled:opacity-40";

const TRIGGER_BUTTON =
	"inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer";

const SEARCH_MIN_CHARS = 2;
const SEARCH_DELAY_MS = 350;

/*
	The library always opens as a centred modal. `popupClass` used to position an
	inline popover, but call sites passed inconsistent values (often without
	absolute/fixed), so it is accepted for compatibility and no longer used.
*/
const GalleryPicker = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	var title = props.title;
	var onPick = props.onPick;

	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 20, });
	var [loading, setloading] = useState(false);
	var [failed, setfailed] = useState(false);
	var [products, setproducts] = useState(null);
	var [isOpen, setisOpen] = useState(false);
	var [enableUpload, setenableUpload] = useState(false);
	var [pickedIds, setpickedIds] = useState([]);
	var [mounted, setmounted] = useState(false);

	const searchRef = useRef(null);
	const requestId = useRef(0);

	useEffect(() => { setmounted(true); }, []);

	function fetchPosts(query = queryPrams) {

		const thisRequest = ++requestId.current;
		setloading(true);
		setfailed(false);

		fetch(serverUrl + "wp-json/combo-store/v2/get_medias", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(query),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Token validation failed');
				}
				return response.json();
			})
			.then((res) => {
				// Ignore responses from searches the user has already typed past.
				if (thisRequest !== requestId.current) return;
				setproducts({ posts: res?.posts || [], total: res?.total, maxPages: res?.max_pages })
				setloading(false);
			})
			.catch((_error) => {
				if (thisRequest !== requestId.current) return;
				setloading(false);
				setfailed(true);
			});
	}

	// Load only while the library is open; searches are debounced.
	useEffect(() => {
		if (!isOpen) return;
		const keyword = queryPrams.keyword.trim();
		if (keyword.length > 0 && keyword.length < SEARCH_MIN_CHARS) return;

		const timer = setTimeout(() => fetchPosts(), keyword.length ? SEARCH_DELAY_MS : 0);
		return () => clearTimeout(timer);
	}, [isOpen, queryPrams.paged, queryPrams.keyword]);

	// Escape closes; lock page scroll while open.
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (ev) => { if (ev.key === "Escape") close(); };
		document.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		setTimeout(() => searchRef.current?.focus(), 0);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	function open() {
		setpickedIds([]);
		setisOpen(true);
	}

	function close() {
		setisOpen(false);
		setenableUpload(false);
	}

	function goToPage(page) {
		const max = products?.maxPages ? parseInt(products.maxPages) : null;
		let value = parseInt(page);
		if (isNaN(value) || value < 1) value = 1;
		if (max && value > max) value = max;
		setqueryPrams(prev => ({ ...prev, paged: value }));
	}

	function handlePick(item) {
		onPick?.(item);
		setpickedIds(prev => (prev.includes(item?.id) ? prev : [...prev, item?.id]));
	}

	const posts = products?.posts || [];
	const maxPages = products?.maxPages ? parseInt(products.maxPages) : null;
	const page = parseInt(queryPrams.paged) || 1;
	const keyword = queryPrams.keyword.trim();
	const firstLoad = loading && !products;

	const modal = (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
			onMouseDown={(ev) => { if (ev.target === ev.currentTarget) close(); }}>

			<div role="dialog" aria-modal="true" aria-label={title || "Media library"}
				className="flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">

				{/* Title bar */}
				<div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
					<div className="flex items-center gap-2">
						<IconPhoto size={18} className="text-gray-400" />
						<h2 className="text-sm font-semibold text-gray-900">{title || "Media library"}</h2>
						{products?.total != null && (
							<span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">{products.total}</span>
						)}
					</div>
					<button type="button" aria-label="Close" className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" onClick={close}>
						<IconX size={18} />
					</button>
				</div>

				{/* Toolbar */}
				<div className="flex flex-wrap items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
					<div className="relative min-w-[180px] flex-1">
						<IconSearch size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
						<input
							ref={searchRef}
							type="text"
							className="!w-full !rounded-lg !border !border-solid !border-gray-300 !bg-white !py-2 !pl-9 !pr-9 !text-sm !shadow-none !outline-none focus:!border-gray-900"
							value={queryPrams.keyword}
							placeholder="Search media…"
							onChange={(ev) => {
								var value = ev.target.value;
								setqueryPrams(prev => ({ ...prev, keyword: value, paged: 1 }))
							}}
						/>
						{queryPrams.keyword && (
							<button type="button" aria-label="Clear search"
								className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
								onClick={() => setqueryPrams(prev => ({ ...prev, keyword: "", paged: 1 }))}>
								<IconX size={14} />
							</button>
						)}
					</div>

					<button type="button" aria-pressed={enableUpload}
						className={`inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-sm font-medium transition-colors cursor-pointer ${enableUpload ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50"}`}
						onClick={() => setenableUpload(!enableUpload)}>
						<IconUpload size={16} /> Upload
					</button>

					<div className="flex items-center gap-1.5">
						<button type="button" aria-label="Previous page" className={ICON_BUTTON} disabled={page <= 1 || loading} onClick={() => goToPage(page - 1)}>
							<IconChevronLeft size={16} />
						</button>
						<div className="flex items-center gap-1 text-xs text-gray-500">
							<input type="number" min={1} aria-label="Page"
								className="!h-9 !w-14 !rounded-lg !border !border-solid !border-gray-300 !bg-white !px-1 !text-center !text-sm !shadow-none !outline-none focus:!border-gray-900"
								value={queryPrams.paged}
								onChange={(ev) => goToPage(ev.target.value)} />
							{maxPages ? <span>/ {maxPages}</span> : null}
						</div>
						<button type="button" aria-label="Next page" className={ICON_BUTTON} disabled={(maxPages != null && page >= maxPages) || loading} onClick={() => goToPage(page + 1)}>
							<IconChevronRight size={16} />
						</button>
					</div>
				</div>

				{/* Body */}
				<div className="relative flex-1 overflow-y-auto p-4">

					{enableUpload && (
						<div className="mb-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-3">
							<UploadMedia onUploadComplete={() => {
								setqueryPrams(prev => ({ ...prev, keyword: "", paged: 1 }));
								fetchPosts({ ...queryPrams, keyword: "", paged: 1 });
							}} />
						</div>
					)}

					{loading && products && (
						<div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-gray-100">
							<div className="h-full w-1/3 animate-pulse bg-gray-900" />
						</div>
					)}

					{firstLoad && (
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
							{Array.from({ length: 10 }).map((_, i) => (
								<div key={i} className="aspect-square animate-pulse rounded-lg bg-gray-100" />
							))}
						</div>
					)}

					{failed && !loading && (
						<div className="flex flex-col items-center gap-3 py-12 text-center">
							<div className="text-sm font-medium text-gray-700">Couldn't load media</div>
							<button type="button" className={TRIGGER_BUTTON} onClick={() => fetchPosts()}>Try again</button>
						</div>
					)}

					{!failed && !firstLoad && posts.length === 0 && (
						<div className="flex flex-col items-center gap-1 py-12 text-center">
							<IconPhotoOff size={24} className="text-gray-300" />
							<div className="text-sm font-medium text-gray-700">
								{keyword ? `No media matches “${keyword}”` : "No media yet"}
							</div>
							<div className="text-xs text-gray-500">
								{keyword ? "Try a different search." : "Upload an image to get started."}
							</div>
						</div>
					)}

					{!failed && posts.length > 0 && (
						<div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 transition-opacity ${loading ? "opacity-60" : ""}`}>
							{posts.map((item, index) => {
								const picked = pickedIds.includes(item?.id);
								return (
									<button key={item?.id ?? index} type="button" title={item.title}
										className={`group relative overflow-hidden rounded-lg border bg-gray-50 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 cursor-pointer ${picked ? "border-gray-900 ring-2 ring-gray-900" : "border-gray-200 hover:border-gray-400"}`}
										onClick={() => handlePick(item)}>
										<Image className="aspect-square w-full object-cover" src={item.src} alt={item.title || ""} width={200} height={200} unoptimized />
										<div className="truncate border-t border-gray-200 bg-white px-2 py-1.5 text-xs text-gray-600">
											{item.title || "Untitled"}
										</div>
										{picked && (
											<span className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white shadow">
												<IconCheck size={14} />
											</span>
										)}
									</button>
								);
							})}
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="flex items-center justify-between gap-3 border-t border-gray-200 px-4 py-3">
					<span className="text-xs text-gray-500">
						{pickedIds.length > 0 ? `${pickedIds.length} added` : "Click an image to add it."}
					</span>
					<button type="button" className="inline-flex h-9 items-center rounded-lg bg-gray-900 px-4 text-sm font-medium text-white hover:bg-gray-800 cursor-pointer" onClick={close}>
						Done
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div className="flex items-center gap-2">
			<button type="button" className={TRIGGER_BUTTON} onClick={() => (isOpen ? close() : open())}>
				<IconPhoto size={16} />
				Media Library
			</button>

			{isOpen && mounted && createPortal(modal, document.body)}
		</div>
	);
};

export default GalleryPicker;
