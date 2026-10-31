"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../components/EntriesTable";
import DropDown from "../../components/DropDown";
import { useCounterStore } from '../../store/useCounterStore'
import { useUtilsStore } from '../../store/useUtilsStore';
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const ICON_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-gray-400 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900";

const MENU_ITEM =
	"flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer";

const FILTER_SELECT =
	"xl:w-56 w-full !h-9 !rounded-lg !border !border-gray-300 !bg-white !py-0 !pl-3 !pr-2 !text-sm !text-gray-600 !shadow-none transition-colors hover:!border-gray-400 focus:!border-gray-500 focus:!outline-none";

import { IconCopy, IconEyeShare, IconDotsVertical, IconEdit, IconTrash, IconStarFilled, IconStar, IconFileDollar, IconExclamationCircle, IconRosetteDiscountCheck, IconX, IconZoomExclamationFilled, IconPlaylistX, IconPlus, IconPhoto } from "@tabler/icons-react";
import PopoverButton from "../../components/PopoverButton";
import ProductEdit from "../../components/pages/ProductEdit";
import ProductBulkUpdate from "../../components/shop-elements/ProductBulkUpdate";

import Image from "next/image";


const Products = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX, paymentGateways } = useCounterStore()
	const { wrapCurrency } = useUtilsStore()



	var [queryPrams, setqueryPrams] = useState({ is_admin: true, category: "", tag: null, keyword: "", paged: 1, orderby: "date", order: "DESC", per_page: 20, price: "" });
	var [editProduct, seteditProduct] = useState({ id: null });




	var [productsData, setproductsData] = useState({ posts: [], total: 20, maxPages: 1 });



	var [loading, setloading] = useState(false);
	var [selectedRows, setselectedRows] = useState([]);

	var [queryTerms, setqueryTerms] = useState({ taxonomy: 'product_cat', order: "DESC", per_page: 999, paged: 1, hierarchical: true, });
	var [querybrands, setquerybrands] = useState({ taxonomy: 'product_brand', order: "DESC", per_page: 99, paged: 1, });
	var [terms, setterms] = useState([]);
	var [brands, setbrands] = useState([]);



	function onSelectRows(rows) {
		setselectedRows(rows);
	}


	var columns = {
		check: { id: "check", label: ("Check"), },
		id: { id: "id", label: ("Product"), callback: callbackTitle, classes: "w-96  text-gray-600" },
		categories: { id: "categories", label: ("Categories"), callback: callbackCategories, classes: "text-left text-gray-600" },
		// brands: { id: "brands", label: ("Brands"), callback: callbackBrands, classes: "text-left text-gray-600" },
		// tags: { id: "tags", label: ("Tags"), callback: callbackTags, classes: "text-left" },
		// brands: { id: "Brands", label: ("Brands"), callback: callbackBrands, classes: "text-left" },
		// brands: { id:"brands",label: ("Brands"), callback: callbackBrands, classes: "text-left" },
		// sku: { id:"sku",label: ("SKU"), },
		stock_count: { id: "stock_count", label: ("Stock"), callback: callbackStock, classes: "text-center text-gray-600" },
		price: { id: "price", label: ("Price"), callback: callbackPrice, classes: "text-center text-gray-600" },
		tp_price: { id: "price", label: ("Trade Price"), callback: callbackTradePrice, classes: "text-center text-gray-600" },
		// type: { id:"check",label: "Type", callback: callbackType },

		// refunded_total: { id:"check",label: "Refunded" },
		// visibility: { id: "visibility", label: ("Visibility"), callback: callbackVisibility },
		// status: { id: "status", label: ("Status"), callback: callbackStatus },
		actions: { label: ("Actions"), callback: callbackActions, classes: "text-right pr-2 text-gray-600" },

	};



	async function fetchPosts() {





		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);
		setloading(true);



		fetch(serverUrl + "wp-json/combo-store/v2/get_products", {
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

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var posts = res?.posts;
						var total = res?.total;
						var max_pages = res?.max_pages;

						console.log(posts);



						setproductsData({ posts: posts, total: total, maxPages: max_pages })
						//setqueryPrams({ ...queryPrams, loading: false })
						setloading(false);


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


	function fetchTerms() {




		var postData = JSON.stringify(queryTerms);

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



		var postData = JSON.stringify(querybrands);

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


	async function delete_products(ids) {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		ids = ids != undefined ? ids : selectedRows;


		var postData = {
			ids: ids,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var success = res?.success;

						setloading(false);

						fetchPosts();




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}
	async function duplicate_product(id) {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}



		var postData = {
			id: id,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/duplicate_product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var success = res?.success;

						setloading(false);

						fetchPosts();




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	async function add_product() {


		// if (!token) {
		// 	//throw new Error("No token found");
		// }

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			// ids: selectedRows,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/add_product", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var success = res?.success;

						setloading(false);

						fetchPosts();




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	const [debouncedQuery, setDebouncedQuery] = useState(queryPrams);


	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedQuery(queryPrams); // update debounced value after delay
		}, 1000); // 500ms debounce delay

		// Cleanup function: cancels the timeout if query changes before 500ms
		return () => clearTimeout(handler);
	}, [queryPrams]); // run effect when query changes



	useEffect(() => {
		if (debouncedQuery) {

			fetchPosts();

		}
	}, [debouncedQuery]);








	// useEffect(() => {

	// 	fetchPosts();
	// }, [queryPrams]);


	function onChangeQueryPrams(queryPrams) {
		if (queryPrams) {
			setqueryPrams(queryPrams)
			//fetchPosts();
		}

	}

	function onRefreshRequest(rows) {
		fetchPosts();
	}

	useEffect(() => {
		fetchPosts();
		fetchTerms();
		fetchBrands();
	}, []);


	function callbackActions(entry, columnIndex) {

		console.log(entry);


		var variation_id = entry?.variation_id

		if (variation_id) {


			return (
				<td data-label="Actions" className="!px-5 py-3 text-sm"
					key={columnIndex}></td>
			)

		}



		var orderItems = entry?.order_items

		const excludeInSearch = entry?.visibility?.some(item => item.slug === "exclude-from-search");
		const excludeInShop = entry?.visibility?.some(item => item.slug === "exclude-from-catalog");


		return (
			<td data-label="Actions" className="!px-5 py-3 text-sm"
				key={columnIndex}>
				<div className="flex items-center justify-end gap-1 text-sm">




					{excludeInSearch && (
						<div title="Excluded from search" className={ICON_BUTTON}><IconZoomExclamationFilled size={18} /></div>
					)}
					{excludeInShop && (
						<div title="Excluded from catalog" className={ICON_BUTTON}	><IconPlaylistX size={18} /></div>
					)}










					<PopoverButton wrapperClass={`flex justify-end `} buttonLabel={" "} buttonIcon={<IconDotsVertical size={18} />} title={"Actions"} position={"bottomRight"} popoverClass={`absolute z-[999] w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`} buttonClass={ICON_BUTTON}>

						<div className="p-1.5">

							<div className="flex flex-col gap-0.5">
								<div className={MENU_ITEM} onClick={() => {

									if (confirm("Please confirm?")) {
										duplicate_product(entry.id);
									}
								}}>
									<IconCopy size={16} /> Duplicate
								</div>
								<Link className={MENU_ITEM} href={`/products/${entry.id}`}>
									<IconEyeShare size={16} /> View
								</Link>
								<div className={`${MENU_ITEM} !text-red-600 hover:!bg-red-50 hover:!text-red-700`} onClick={() => {
									if (confirm("Please confirm?")) {
										delete_products([entry.id]);
									}


								}}>
									<IconTrash size={16} /> Delete
								</div>


							</div>





						</div>

					</PopoverButton>


				</div>

			</td>

		);
	}


	function callbackTitle(entry, columnIndex) {


		var variation_id = entry?.variation_id


		return (
			<td data-label="Product" className="!px-5 py-3 text-left"
				key={`title-${entry?.id}`}>

				<div className="flex items-center gap-3">

					<div className="flex items-center gap-2">

						{entry?.featured && (
							<div className="text-amber-500" title="Featured"><IconStarFilled size={16} /></div>
						)}
						{!entry?.featured && (
							<div className="text-gray-300"><IconStar size={16} /></div>
						)}

						<div className={`flex  ${variation_id ? 'h-8 w-8' : 'h-12 w-12'} shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-gray-300`} >
							{entry?.post_thumbnail_url && (
								<Image unoptimized className={`${variation_id ? 'h-8 w-8' : 'h-12 w-12'} object-cover`} src={entry?.post_thumbnail_url} width={100} height={100} alt={``} />

							)}
							{!entry?.post_thumbnail_url && (
								<IconPhoto size={20} stroke={1.5} />
							)}
						</div>

					</div>

					<div className="flex min-w-0 flex-1 flex-col gap-1 text-left group ">
						<Link className="truncate text-left text-sm font-medium text-gray-900 transition-colors hover:text-blue-600 hover:underline" href={`/dashboard/products/${entry?.id}`}>
							{entry?.title}

						</Link>



						<div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 ">

							<span className="font-mono text-[11px] text-gray-400">#{entry?.id}</span>
							{entry?.status === "draft" && (
								<span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600">Draft</span>
							)}
							{entry?.status === "pending" && (
								<span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">Pending</span>
							)}

							<PopoverButton buttonLabel={"Edit"} buttonIcon={null} title={"Edit Product"} drawer={"right"} buttonClass={`inline-flex h-8 w-8 items-center justify-center rounded-lg  text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900`}>

								<div className="p-5 bg-gray-50 text-left">
									<ProductEdit id={entry?.id} />
								</div>

							</PopoverButton>

							{/* <div className=" ">{entry?.sku}</div> */}




						</div>
					</div>
				</div>
			</td>

		);
	}
	function callbackPrice(entry, columnIndex) {

		var type = entry.type;
		var sale_price = entry.sale_price;
		var regular_price = entry.regular_price;

		return (
			<td data-label="Price" className="!px-5 py-3"
				key={columnIndex}>
				{/* Was a hardcoded `$`; follows the store currency now. */}
				<div className="flex flex-wrap items-baseline justify-center gap-1.5 text-sm">

					{sale_price && (
						<>
							<span className="font-semibold tabular-nums text-gray-900">{wrapCurrency(sale_price)}</span>
							<span className="text-xs tabular-nums text-gray-400 line-through">{wrapCurrency(regular_price)}</span>

						</>
					)}
					{!sale_price && (
						<>
							<span className="font-semibold tabular-nums text-gray-900">{wrapCurrency(regular_price)}</span>
						</>
					)}



				</div>
			</td>

		);
	}
	function callbackTradePrice(entry, columnIndex) {




		var type = entry.type;
		var trade_price = entry.trade_price;
		var regular_price = entry.regular_price;

		return (
			<td data-label="Trade Price" className="!px-5 py-3"
				key={columnIndex}>
				<div className="flex justify-center gap-2 text-sm">

					<span className="tabular-nums text-gray-600">{trade_price ? wrapCurrency(trade_price) : "—"}</span>



				</div>
			</td>

		);
	}



	function callbackCategories(entry, columnIndex) {


		return (
			<td data-label="Categories" className="!px-5 py-3 text-left"
				key={`category-${entry?.id}`}
			>
				<div className="flex flex-col gap-1.5">

					{entry?.categories?.length > 0 && (
						<div className="flex flex-wrap gap-1.5">
							{entry?.categories?.map((item, index) => {

								return (
									<span key={index} className="inline-flex max-w-full items-center truncate rounded-md bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
										<span dangerouslySetInnerHTML={{ __html: item.name }}></span>
									</span>
								)

							})}
						</div>
					)}

					{entry?.brands?.length > 0 && (
						<div className="flex flex-wrap items-center gap-1.5">
							<span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Brands</span>
							{entry?.brands.map((item, index) => {
								return (
									<span key={index} className="inline-flex max-w-full items-center truncate rounded-md bg-indigo-50 px-2 py-0.5 text-xs text-indigo-700">
										{item.name}
									</span>
								)
							})}
						</div>
					)}









				</div>
			</td>

		);
	}





	function callbackStock(entry, columnIndex) {

		return (
			<td data-label="Stock" className="!px-5 py-3 text-center"
				key={`stock-${entry?.id}`}

			>

				<div className="flex justify-center text-sm">
					{entry.stock_status == 'instock' && (
						/* Low stock reads as a warning rather than a bare number. */
						<span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ${entry.stock_count <= 5
							? "bg-amber-50 text-amber-700"
							: "bg-emerald-50 text-emerald-700"
							}`}>
							{entry.stock_count}
						</span>
					)}

					{entry.stock_status == 'outofstock' && (
						<span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">Out of Stock</span>
					)}
				</div>

			</td>

		);
	}











	var orderStatusPrams = {
		draft: { label: 'Draft', value: 'draft' },
		pending: { label: 'Pending', value: 'pending' },
		publish: { label: 'Publish', value: 'publish' },
		hold: { label: 'Hold', value: 'hold' }
	}
	var stockStatusOptions = {
		instock: { label: 'In Stock', value: 'instock' },
		outofstock: { label: 'Out of Stock', value: 'outofstock' }
	}






	function onFilterByStatus(args) {

		setqueryPrams({ ...queryPrams, status: args?.value, paged: 1 })
	}
	function onFilterByStockStatus(args) {

		setqueryPrams({ ...queryPrams, stock_status: args?.value, paged: 1 })
	}
	function onFilterByPaymentStatus(args) {

		setqueryPrams({ ...queryPrams, payment_status: args?.value, paged: 1 })
	}




	return (

		<div className="page-shell">

			{/* Page heading: this screen had no title, only a row of controls. */}
			<div className="flex flex-wrap items-end justify-between gap-3">
				<div>
					<h1 className="text-xl font-semibold text-gray-900">{("Products")}</h1>
					<p className="mt-0.5 text-xs text-gray-500">
						{productsData?.total ?? 0} {("products in catalog")}
					</p>
				</div>

				<button
					type="button"
					className="inline-flex items-center gap-2 !rounded-lg !border-0 !bg-[#634FE5] !px-4 !py-2 !text-sm !font-semibold !text-white !shadow-sm transition-colors hover:!bg-[#5540d4]"
					onClick={ev => {
						add_product();
					}}><IconPlus size={16} />{("Add Product")}</button>
			</div>

			<div className="flex flex-wrap justify-between gap-3  ">

				<div className="flex flex-wrap gap-2  ">



					<select name="" id="" className={FILTER_SELECT} onChange={ev => {

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
					<select name="" id="" className={FILTER_SELECT} onChange={ev => {

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


					<PopoverButton wrapperClass={``} enableCloseBtn={false} buttonLabel={("Filter Products")} buttonIcon={<IconFileDollar size={16} />} title={"Filter Products"} position={"leftTop"} buttonClass={`inline-flex h-9 items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer`} popoverClass={`absolute z-[999] w-[360px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg`}>

						<div className="p-4">
							<div className="flex flex-col  gap-3 ">
								<div className="flex items-center justify-between gap-3">
									<div className="text-sm font-medium text-gray-700">Status</div>
									<div>
										<DropDown multiple={false} value={queryPrams?.status} options={orderStatusPrams} label={`Choose Status`} onOptionsChoose={onFilterByStatus} />
									</div>
								</div>
								<div className="flex items-center justify-between gap-3">
									<div className="text-sm font-medium text-gray-700">Stock Status</div>
									<div>
										<DropDown multiple={false} value={queryPrams?.stock_status} options={stockStatusOptions} label={`Choose Stock Status`} onOptionsChoose={onFilterByStockStatus} />
									</div>
								</div>









							</div>
						</div>

					</PopoverButton>



				</div>




				<div className="flex gap-3 items-center justify-end ">
					{selectedRows?.length > 0 && (
						<div
							className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100 cursor-pointer"
							onClick={() => {
								delete_products();
							}}>
							{("Delete Products")}
						</div>
					)}

					{selectedRows?.length > 0 && (

						<PopoverButton buttonLabel={("Bulk Update")} buttonClass={`inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer`} buttonIcon={``} title={"Bulk Update"} drawer={"left"} >

							<div className="p-5 bg-gray-50">

								<ProductBulkUpdate ids={selectedRows} />









							</div>

						</PopoverButton>
					)}




				</div>
			</div>



			<EntriesTable
				queryPrams={queryPrams}
				columns={columns}
				entries={productsData}
				itemPath={""}
				onChange={onChangeQueryPrams}
				loading={loading}
				selectedRows={selectedRows}
				onSelectRows={onSelectRows}
				onRefreshRequest={onRefreshRequest}

			/>
		</div>



	);
};

export default Products;
