'use client'
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect, useRef } from "react";
import {
	IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconTrash, IconSearch, IconChevronUp, IconChevronDown, IconTrashX, IconLetterX, IconCornerUpLeftDouble, IconArrowNarrowLeftDashed,
	IconArrowNarrowRightDashed, IconX as IconClose, IconMinus, IconPlus, IconChevronLeft, IconChevronRight, IconMoodEmpty,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import Spinner from "../../../components/Spinner";
import { useUtilsStore } from '../../../store/useUtilsStore'
import { useCounterStore } from '../../../store/useCounterStore';
import * as TablerIcons from '@tabler/icons-react';

const QuickSearchView = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;


	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var placeholder = options?.placeholder ?? 'Search...';
	var icon = options?.icon;
	var iconSize = options?.iconSize;

	const IconX = TablerIcons[icon];



	const Tag = tag;

	const { cartToggle, setcartToggle, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, coupons, setCoupons, cartTotalPay, setcartTotalPay, cartTotal, setcartTotal, shippingCost, setshippingCost, } = useCounterStore()

	const { wrapCurrency, priceHtml } = useUtilsStore()

	var onTriggerOpen = props?.onTriggerOpen;

	var prams = props?.prams;
	var wrapperClass = props?.wrapperClass ? props?.wrapperClass : "";


	const [isOpen, setIsOpen] = useState(true);
	var [loading, setloading] = useState(false);
	var [promptsData, setpromptsData] = useState({ posts: [], total: 0, maxPages: 1 });

	var [queryPrams, setqueryPrams] = useState({ keyword: "", brand: "", category: "", paged: 1, order: "DESC", per_page: 10, });

	var [queryTerms, setqueryTerms] = useState({ taxonomy: 'product_cat', order: "ASC", per_page: 999, });
	var [querybrands, setquerybrands] = useState({ taxonomy: 'product_brand', order: "ASC", per_page: 999, });
	var [terms, setterms] = useState([]);
	var [brands, setbrands] = useState([]);


	function fetchTerms() {







		var postData = {
			taxonomy: queryTerms.taxonomy,
			per_page: queryTerms.per_page,
			paged: queryTerms.paged,
			order: queryTerms.order,
			hierarchical: true,
		};
		postData = JSON.stringify(postData);

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var terms = res?.terms;
						var total = res?.total;
						var max_pages = res?.max_pages;




						var termsX = [];

						Object.entries(terms).map(args => {
							var index = args[0]
							var item = args[1]
							termsX.push(item)
						})


						setterms(termsX)


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}
	function fetchBrands() {







		var postData = {
			taxonomy: querybrands.taxonomy,
			per_page: querybrands.per_page,
			paged: querybrands.paged,
			order: querybrands.order,
			hierarchical: true,
		};
		postData = JSON.stringify(postData);

		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var terms = res?.terms;
						var total = res?.total;
						var max_pages = res?.max_pages;




						var termsX = [];

						Object.entries(terms).map(args => {
							var index = args[0]
							var item = args[1]
							termsX.push(item)
						})


						setbrands(termsX)


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}





	function fetchPosts() {






		if (queryPrams.keyword?.length == 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);




		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_products", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {

						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;


						setpromptsData({ posts: posts, total: total, maxPages: max_pages })
						setloading(false);


						setTimeout(() => {
							sendMetaEvent()
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}

	useEffect(() => {
		fetchTerms();
		fetchBrands();
	}, []);






	const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);


	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(queryPrams); // update debounced value after delay
		}, 500); // 500ms debounce delay - it was 2s, which felt like the search wasn't working

		// Cleanup function: cancels the timeout if query changes before 500ms
		return () => clearTimeout(handler);
	}, [queryPrams]); // run effect when query changes



	useEffect(() => {
		if (debouncedQuery) {




			if (debouncedQuery.keyword?.length == 0) {
				setpromptsData({ ...promptsData, posts: [] })
			}

			fetchPosts();

		}
	}, [debouncedQuery]);









	const sendMetaEvent = async (prams) => {
		const eventId = window.crypto.randomUUID();




		// 1️⃣ Browser Pixel Event
		if (window.fbq) {
			window.fbq("track", "Search", {
				value: queryPrams.keyword,
				currency: "BDT",
				eventID: eventId, // important!
			});
		}

		// 2️⃣ Server-Side Event
		await fetch("/api/meta-event", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				event_name: "Search",
				event_id: eventId,
				value: queryPrams.keyword,
			}),
		});
	};





	/* The panel is wider than most search boxes. When the box sits near the
	   right edge, as in most headers, the panel lines up with its right side
	   instead of running off the screen. */
	const wrapperRef = useRef(null);
	const [alignRight, setalignRight] = useState(false);
	const hasKeyword = queryPrams.keyword.length > 0;

	useEffect(() => {
		if (!hasKeyword || !wrapperRef.current) return;
		const box = wrapperRef.current.getBoundingClientRect();
		setalignRight(box.left + 600 > window.innerWidth - 8);
	}, [hasKeyword]);

	/* Escape clears the search, which closes the results panel. */
	useEffect(() => {
		if (!queryPrams.keyword) return;
		const onKey = (ev) => {
			if (ev.key === 'Escape') setqueryPrams(prev => ({ ...prev, keyword: "", paged: 1 }));
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [queryPrams.keyword]);

	function getQuantityById(id) {


		const item = cartItems?.find(obj => obj.id === id);
		return item ? item.quantity : null; // returns null if not found
	}


	return (
		<div ref={wrapperRef} id={id} type={type} className={`${cssSelectors['*']?.classes} relative  `}

		>


			<div className={`flex gap-2  items-center`} onClick={ev => {
				if (onTriggerOpen) {
					onTriggerOpen(isOpen, prams)
				}

				setIsOpen(!isOpen)
			}}>



				<input name="keyword" value={queryPrams.keyword} onChange={ev => {

					var value = ev.target.value;
					setqueryPrams({ ...queryPrams, keyword: value, paged: 1 })

					setpromptsData({ ...promptsData, posts: [], total: 0, })


				}} type="text" className={`${cssSelectors['input-search']?.classes}  w-full lg:w-max  px-3`} placeholder={placeholder} />


				{!loading && (

					<>
						{IconX && (
							<div className={`${cssSelectors['icon']?.classes}`}>
								{IconX ? <IconX size={iconSize} /> : null}
							</div>
						)}
					</>

				)}

				{loading && (

					<Spinner />

				)}



			</div>

			{queryPrams.keyword.length > 0 && (
				<div
					role="dialog"
					aria-label="Search results"
					className={`absolute top-[calc(100%+8px)] z-50 flex max-h-[75vh] w-full max-w-[calc(100vw-16px)] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl xl:w-[600px] ${alignRight ? 'right-0' : 'left-0'}`}
				>

					{/* Filters */}
					<div className="flex flex-wrap items-center gap-2 border-b border-gray-100 p-3">
						<select
							name="category"
							aria-label="Category"
							value={queryPrams.category}
							className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15"
							onChange={ev => {
								setqueryPrams({ ...queryPrams, category: ev.target.value, paged: 1 });
							}}
						>
							<option value={""}>All categories</option>
							{terms?.map(item => {
								var children = item?.children;
								if (children) {
									return (
										<optgroup label={`${item.name} (${item.count})`} key={item.term_id}>
											<option value={item.slug}>{item.name} ({item.count})</option>
											{children?.map(childItem => (
												<option value={childItem.slug} key={childItem.term_id}>{childItem.name} ({childItem.count})</option>
											))}
										</optgroup>
									)
								}
								return (
									<option value={item.slug} key={item.term_id}>{item.name} ({item.count})</option>
								)
							})}
						</select>
						<select
							name="brand"
							aria-label="Brand"
							value={queryPrams.brand}
							className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15"
							onChange={ev => {
								setqueryPrams({ ...queryPrams, brand: ev.target.value, paged: 1 });
							}}
						>
							<option value={""}>All brands</option>
							{brands?.map(item => {
								var children = item?.children;
								if (children) {
									return (
										<optgroup label={`${item.name} (${item.count})`} key={item.term_id}>
											<option value={item.slug}>{item.name} ({item.count})</option>
											{children?.map(childItem => (
												<option value={childItem.slug} key={childItem.term_id}>{childItem.name} ({childItem.count})</option>
											))}
										</optgroup>
									)
								}
								return (
									<option value={item.slug} key={item.term_id}>{item.name} ({item.count})</option>
								)
							})}
						</select>
						<button
							type="button"
							className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
							onClick={() => setqueryPrams({ ...queryPrams, keyword: "", paged: 1 })}
						>
							<IconClose size={14} /> Clear
						</button>
					</div>

					{/* Results */}
					<div className="min-h-0 flex-1 overflow-y-auto p-2">

						{/* Still waiting for the pause in typing, or for the reply:
						   "No products found" used to flash up here meanwhile. */}
						{(loading || queryPrams.keyword !== debouncedQuery?.keyword) && promptsData?.posts?.length == 0 && (
							<div className="flex items-center justify-center gap-2 py-8 text-sm text-gray-500">
								<Spinner /> Searching…
							</div>
						)}

						{!loading && queryPrams.keyword === debouncedQuery?.keyword && promptsData?.posts?.length == 0 && (
							<div className="flex flex-col items-center gap-2 py-8 text-center">
								<IconMoodEmpty size={28} className="text-gray-400" />
								<div className="text-sm font-medium text-gray-900">No products match “{queryPrams.keyword}”</div>
								<div className="text-xs text-gray-500">Try a different word, or clear the category and brand filters.</div>
							</div>
						)}

						{promptsData?.posts?.length > 0 && (
							<ul className={`flex flex-col gap-1 transition-opacity ${loading ? 'opacity-60' : ''}`}>
								{promptsData?.posts?.map((product, index) => {

									var quantityInCart = getQuantityById(product?.id)
									quantityInCart = quantityInCart ? quantityInCart : 0;

									var cartLine = { id: product?.id, title: product?.title, price: product?.price, regular_price: product?.regular_price, sale_price: product?.sale_price, priceHtml: product?.price_html, thumbnail: product?.post_thumbnail?.src };

									return (
										<li key={product?.id ?? index} className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50">

											<Link href={`/product/${product.slug}/`} className="shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
												<Image
													unoptimized
													className="h-14 w-14 object-cover"
													src={product?.post_thumbnail_url && product?.post_thumbnail?.src ? product.post_thumbnail.src : `/thumb.png`}
													width={112}
													height={112}
													alt={product?.title ?? ''}
												/>
											</Link>

											<div className="min-w-0 flex-1">
												<Link href={`/product/${product.slug}/`} className="line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1b0e9f]" dangerouslySetInnerHTML={{ __html: product?.title ?? '' }} />
												<div className="mt-0.5 flex items-baseline gap-2 text-sm">
													<span className="font-semibold text-[#1b0e9f]">{wrapCurrency(product?.price)}</span>
													{product?.sale_price && product?.regular_price && product?.regular_price != product?.price && (
														<span className="text-xs text-gray-400 line-through">{wrapCurrency(product?.regular_price)}</span>
													)}
												</div>
											</div>

											{/* Same cart calls as before: +1 and -1 on this product's line. */}
											{quantityInCart > 0 ? (
												<div className="flex shrink-0 items-center rounded-lg border border-gray-300">
													<button
														type="button"
														aria-label={`Remove one ${product?.title ?? ''}`}
														className="flex h-8 w-8 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100"
														onClick={() => addCartItems({ ...cartLine, quantity: -1 })}
													>
														<IconMinus size={14} />
													</button>
													<span className="min-w-6 text-center text-sm font-medium tabular-nums">{quantityInCart}</span>
													<button
														type="button"
														aria-label={`Add one more ${product?.title ?? ''}`}
														className="flex h-8 w-8 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100"
														onClick={() => addCartItems({ ...cartLine, quantity: 1 })}
													>
														<IconPlus size={14} />
													</button>
												</div>
											) : (
												<button
													type="button"
													className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1b0e9f] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#150b7d]"
													onClick={() => addCartItems({ ...cartLine, quantity: 1 })}
												>
													<IconPlus size={14} /> Add
												</button>
											)}
										</li>
									)
								})}
							</ul>
						)}
					</div>

					{/* Pages */}
					{promptsData?.posts?.length > 0 && promptsData?.maxPages > 1 && (
						<div className="flex items-center justify-between gap-3 border-t border-gray-100 px-3 py-2">
							<button
								type="button"
								aria-label="Previous page"
								disabled={queryPrams.paged <= 1}
								className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
								onClick={() => {
									if (queryPrams.paged <= 1) return;
									setqueryPrams({ ...queryPrams, paged: queryPrams.paged - 1 });
								}}
							>
								<IconChevronLeft size={16} />
							</button>
							<span className="text-xs text-gray-500">
								Page {queryPrams.paged} of {promptsData?.maxPages}
								{promptsData?.total ? ` · ${promptsData.total} products` : ''}
							</span>
							<button
								type="button"
								aria-label="Next page"
								disabled={queryPrams.paged >= promptsData?.maxPages}
								className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
								onClick={() => {
									var paged = queryPrams.paged + 1;
									if (paged > promptsData?.maxPages) return;
									setqueryPrams({ ...queryPrams, paged: paged });
								}}
							>
								<IconChevronRight size={16} />
							</button>
						</div>
					)}

				</div>
			)}



		</div>
	);
};



export default QuickSearchView;
