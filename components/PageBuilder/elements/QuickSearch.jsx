'use client'
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import {
	IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled, IconStarFilled, IconStar, IconTrash, IconSearch, IconChevronUp, IconChevronDown, IconX, IconTrashX, IconLetterX, IconCornerUpLeftDouble, IconArrowNarrowLeftDashed,
	IconArrowNarrowRightDashed,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import Spinner from "../../../components/Spinner";
import { useUtilsStore } from '../../../store/useUtilsStore'
import { useCounterStore } from '../../../store/useCounterStore';
import * as TablerIcons from '@tabler/icons-react';

const QuickSearch = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
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
		//const token = useAuthStore((state) => state.token);

		// const token = localStorage.getItem("token");




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
				// 'Authorization': `Bearer ${token}`
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
		//const token = useAuthStore((state) => state.token);

		// const token = localStorage.getItem("token");




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
				// 'Authorization': `Bearer ${token}`
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



		// if (!token) {
		// 	//throw new Error("No token found");
		// }

		if (queryPrams.keyword?.length == 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);




		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_products", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${token}`
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
		}, 2000); // 500ms debounce delay

		// Cleanup function: cancels the timeout if query changes before 500ms
		return () => clearTimeout(handler);
	}, [queryPrams]); // run effect when query changes



	useEffect(() => {
		if (debouncedQuery) {

			console.log(debouncedQuery);



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





	function getQuantityById(id) {


		const item = cartItems?.find(obj => obj.id === id);
		return item ? item.quantity : null; // returns null if not found
	}


	return (
		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} relative hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
			onClick={e => {
				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>


			<div className={` ${cssSelectors['input-wrapper']?.classes}`} onClick={ev => {
				if (onTriggerOpen) {
					onTriggerOpen(isOpen, prams)
				}

				setIsOpen(!isOpen)
			}}>



				<input name="keyword" className={` ${cssSelectors['input-search']?.classes}`} value={queryPrams.keyword} onChange={ev => {

					var value = ev.target.value;
					setqueryPrams({ ...queryPrams, keyword: value, paged: 1 })

					setpromptsData({ ...promptsData, posts: [], total: 0, })


				}} type="text" placeholder={placeholder} />


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
				<div className={`${cssSelectors['popover']?.classes} absolute top-[50px]  p-5 z-50 w-[600px]  `} >

					<div className="flex items-center gap-4">

						<select name="category" id="" className="!border-2 border-solid !border-gray-600 !shadow-none xl:w-56 w-full" onChange={ev => {

							var value = ev.target.value;

							setqueryPrams({ ...queryPrams, category: value, paged: 1 });

						}}>
							<option value={""}>{("All Categories")}</option>

							{terms?.map(item => {

								var children = item?.children;

								if (children) {

									return (

										<optgroup label={`${item.name}(${item.count})`} key={item.term_id}>
											<option value={item.slug} key={item.slug}>
												{item.name}({item.count})
											</option>


											{children?.map(childItem => {

												return (
													<option value={childItem.slug} key={childItem.term_id}>
														{childItem.name}({childItem.count})
													</option>

												)
											})}

										</optgroup>


									)

								}
								if (!children) {
									return (
										<option value={item.slug} key={item.term_id}>
											{item.name}({item.count})
										</option>
									)
								}




							})}

						</select>
						<select name="brand" id="" className="!border-2 border-solid !border-gray-600 !shadow-none xl:w-56 w-full" onChange={ev => {

							var value = ev.target.value;

							setqueryPrams({ ...queryPrams, brand: value, paged: 1 });

						}}>
							<option value={""}>{("All Brands")}</option>

							{brands?.map(item => {

								var children = item?.children;

								if (children) {

									return (

										<optgroup label={`${item.name}(${item.count})`} key={item.term_id}>
											<option value={item.slug} key={item.slug}>
												{item.name}({item.count})
											</option>


											{children?.map(childItem => {

												return (
													<option value={childItem.slug} key={childItem.term_id}>
														{childItem.name}({childItem.count})
													</option>

												)
											})}

										</optgroup>


									)

								}
								if (!children) {
									return (
										<option value={item.slug} key={item.term_id}>
											{item.name}({item.count})
										</option>
									)
								}




							})}

						</select>

						{queryPrams?.keyword?.length > 0 && (
							<div className={`${cssSelectors['reset']?.classes} `} onClick={ev => {
								setqueryPrams({ ...queryPrams, keyword: "" })
							}}>Reset</div>
						)}

					</div>

					<div className={`  rounded-sm py-5  `}>

						<div className="flex gap-4 flex-col">

							{promptsData?.posts?.length == 0 && (

								<div>No products found.</div>

							)}

							{promptsData?.posts?.map((product, index) => {


								var quantityInCart = getQuantityById(product?.id)

								quantityInCart = quantityInCart ? quantityInCart : 0;


								return (

									<div className={`${cssSelectors['item']?.classes} `} key={index}>
										{product?.post_thumbnail_url && (
											<Link href={`/product/${product.slug}/`} >
												<Image className={`${cssSelectors['item-image']?.classes} `} src={product?.post_thumbnail?.src} width={200} height={200} alt={product?.title} />
											</Link>

										)}

										{!product?.post_thumbnail_url && (
											<Link href={`/product/${product.slug}/`} >
												<Image className={`${cssSelectors['item-image']?.classes} `} src={`/thumb.png`} width={200} height={200} alt={product?.title} />

											</Link>

										)}

										<div className="flex flex-col gap-1 items-center   rounded-sm border-gray-500  ">


											<span onClick={() => {


												var quantity = 1;
												// updateCartItems(product.id, { quantity: quantity })



												addCartItems({ id: product?.id, title: product?.title, quantity: quantity, price: product?.price, regular_price: product?.regular_price, sale_price: product?.sale_price, priceHtml: product?.price_html, thumbnail: product?.post_thumbnail?.src })



											}} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
												<IconChevronUp />
											</span>

											<span>{quantityInCart}</span>
											<span onClick={() => {

												var quantity = - 1;


												addCartItems({ id: product?.id, title: product?.title, quantity: quantity, price: product?.price, regular_price: product?.regular_price, sale_price: product?.sale_price, priceHtml: product?.price_html, thumbnail: product?.post_thumbnail?.src })



											}} className="cursor-pointer hover:text-gray-600 bg-amazon-600 rounded-sm ">
												<IconChevronDown />
											</span>
										</div>




										<div className="flex flex-col gap-2">
											<Link className={`${cssSelectors['item-title']?.classes} `} href={`/product/${product.slug}/`} >{product?.title}</Link>

											<div className="flex gap-3 items-center">
												<div className="font-bold  text-[#1b0e9f]">{product?.price}Tk</div>
												{product?.sale_price && (
													<>
														<div> - </div>
														<div className="line-through text-base text-gray-600">{product?.regular_price}Tk</div>
													</>
												)}
											</div>


										</div>
									</div>

								)

							})}



						</div>

						{promptsData?.posts?.length > 0 && (
							<div className={`${cssSelectors['pagination']?.classes} `}>
								<div
									className={`${cssSelectors['page-item']?.classes} `}
									onClick={(ev) => {
										var paged = queryPrams.paged;


										if (paged == 1) return;
										setqueryPrams({ ...queryPrams, paged: queryPrams.paged - 1 });
									}}>
									<IconArrowNarrowLeftDashed />
								</div>

								<div>
									<input name="paged" className={`${cssSelectors['page-count']?.classes} ${cssSelectors['page-item']?.classes} `} type="text" value={queryPrams.paged} onChange={ev => {
										var value = parseInt(ev.target.value)
										var paged = value;

										if (paged > promptsData?.maxPages) return;
										setqueryPrams({ ...queryPrams, paged: paged });

									}} />
								</div>

								<div
									className={`${cssSelectors['page-item']?.classes} `}
									onClick={(ev) => {
										var paged = queryPrams.paged + 1;

										if (paged > promptsData?.maxPages) return;
										setqueryPrams({ ...queryPrams, paged: paged });
									}}>
									<IconArrowNarrowRightDashed />
								</div>
							</div>

						)}




					</div>

				</div>
			)}



		</div>
	);
};



export default QuickSearch;
