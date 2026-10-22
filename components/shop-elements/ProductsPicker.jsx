import { useState, useEffect } from "react";
import { IconRefresh, IconEraser, IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

import Image from "next/image";
import { useUtilsStore } from '../../store/useUtilsStore';
import Spinner from '../Spinner';
import { useCounterStore } from '../../store/useCounterStore'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ProductsPicker = (props) => {


	const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()


	var title = props.title;
	var onPick = props.onPick;
	var placeholder = props.placeholder;
	const { formatDate, wrapCurrency } = useUtilsStore()


	var [queryPrams, setqueryPrams] = useState({ keyword: "", page: 1, order: "DESC", per_page: 10, });
	var [loading, setloading] = useState(false);
	var [products, setproducts] = useState(null);


	function fetchPosts() {






		if (queryPrams.page < 0) {
			return;
		}
		if (queryPrams.keyword.length < 3) {
			return;
		}

		var postData = {
			per_page: queryPrams.per_page,
			keyword: queryPrams.keyword,
			paged: queryPrams.page,
			order: queryPrams.order,
		};
		postData = JSON.stringify(postData);
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




						setproducts({ posts: posts, total: total, maxPages: max_pages })
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

	useEffect(() => {

		fetchPosts();
	}, []);
	useEffect(() => {
		if (queryPrams.keyword.length > 3) {
			fetchPosts();
		}
		if (queryPrams.keyword.length == 0) {
			setproducts([]);
		}
	}, [queryPrams.keyword, queryPrams.page]);





	const getVariationPriceRange = (variations = []) => {
		const list = Array.isArray(variations) ? variations : [];

		const prices = list
			.filter(v => v?.enable === 'yes')
			.map(v => {
				const sale = parseFloat(v?.sale_price);
				const regular = parseFloat(v?.regular_price);

				return sale > 0 ? sale : regular;
			})
			.filter(Number.isFinite);

		return {
			min: prices.length ? Math.min(...prices) : 0,
			max: prices.length ? Math.max(...prices) : 0,
		};
	};







	const ProductPrice = ({ product }) => {


		var addons = product?.addons
		var hasvariations = addons?.includes('variations') ? true : false

		var { min, max } = getVariationPriceRange(product?.variations);
		var variationPrice = product?.sale_price ? product?.sale_price : product?.regular_price

		console.log(product);


		return (
			<div className="flex gap-3 items-center">

				{hasvariations && (

					<div className="flex gap-2">

						<div>{wrapCurrency(min)}</div>
						<div>-</div>
						<div>{wrapCurrency(max)}</div>


					</div>

				)}

				{!hasvariations && (

					<>

						{product?.sale_price && (
							<div className="flex gap-3">
								<div>{wrapCurrency(product?.sale_price)}</div>
								<div className="line-through text-base text-gray-600">{wrapCurrency(product?.regular_price)}</div>
							</div>
						)}
						{!product?.sale_price && (
							<div className="">{wrapCurrency(product?.regular_price)}</div>

						)}



					</>
				)}

			</div>
		)

	}





	return (
		<div className={`relative `}>



			<div className="flex gap-2">


				<input
					type="text"
					className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm !w-full bg-white"
					value={queryPrams.keyword}
					placeholder={placeholder ? placeholder : "Search..."}
					onChange={(ev) => {
						var value = ev.target.value;
						// setcurrentObject({ ...currentObject, title: value });

						setqueryPrams({ ...queryPrams, keyword: value, page: 1 })
					}}
				/>


				{loading && (
					<div className="hover:bg-gray-400 rounded-sm cursor-pointer px-2 py-2 bg-gray-600 text-white"><Spinner /></div>
				)}
				{!loading && (
					<>
						{queryPrams.keyword.length > 0 && (
							<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-2 py-2 bg-gray-600 text-white" onClick={ev => {
								setqueryPrams({ ...queryPrams, keyword: "" })
							}}><IconEraser /></div>
						)}
					</>
				)}

			</div>








			{products?.posts?.length > 0 && (
				<div className="shadow-sm border mt-2 rounded-sm p-2 absolute top-full z-10 left-0 w-[400px] bg-white p-2">

					<div className="flex gap-2 items-center p-2">
						<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-1 py-1 bg-gray-600 text-white" onClick={ev => {
							setqueryPrams({ ...queryPrams, page: queryPrams.page - 1 })
						}}><IconArrowNarrowLeft size={16} /></div>
						<div className="text-sm font-medium px-2">{queryPrams.page} </div>

						<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-1 py-1 bg-gray-600 text-white" onClick={ev => {
							setqueryPrams({ ...queryPrams, page: queryPrams.page + 1 })
						}}><IconArrowNarrowRight size={16} /></div>
						{loading && (
							<div><Spinner /></div>

						)}

					</div>













					<div className=" ">
						{products?.posts.map(item => {


							var addons = item?.addons
							var hasvariations = addons?.includes('variations') ? true : false



							return (
								<div className={`border-b border-solid border-gray-400 flex flex-col gap-2 ${hasvariations ? '' : 'hover:bg-gray-300'}  px-2 py-2 cursor-pointer`}
									onClick={ev => {

										if (!hasvariations) {
											onPick(item)
										}

									}}
								>

									<div className="flex  gap-3">
										<div className="w-12 border h-12">
											{item?.post_thumbnail_url && (
												<Image unoptimized src={item?.post_thumbnail_url} width={50} height={50} />
											)}
										</div>
										<div className="flex-1 flex-col flex gap-2 text-sm">
											<div>{item.title}</div>
											<div><ProductPrice product={item} /></div>
										</div>

									</div>

									{hasvariations && (
										<div className="pl-2 hover:border-l-2 hover:border-l-dashed border-l-2 border-l-transparent hover:border-l-gray-500">
											{/* {JSON.stringify(item?.variations)} */}

											<div className="flex flex-col gap-1 py-4">

												{item?.variations?.map(variation => {


													var variationPrice = variation?.sale_price ? variation?.sale_price : variation?.regular_price

													return (

														<div className="flex flex-col gap-1 hover:bg-gray-300 p-1" onClick={ev => {

															variation.product_title = item?.title

															onPick(variation)

														}}>

															{/* {JSON.stringify(variation)} */}


															<div className="flex gap-3">
																<div className="w-12 border">
																	{variation?.thumbnail?.src && (
																		<Image unoptimized src={variation?.thumbnail?.src} width={50} height={50} />
																	)}
																</div>

																<div className="flex-1 flex-col flex gap-2 text-sm">
																	<div>{variation?.title}</div>
																	<div><ProductPrice product={variation} /></div>
																</div>
															</div>

														</div>

													)

												})}

											</div>

										</div>
									)}



								</div>
							)
						})}
					</div>


				</div>
			)}










		</div>
	);
};

export default ProductsPicker;
