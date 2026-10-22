import { useState, useEffect } from "react";
import { IconRefresh, IconEraser } from "@tabler/icons-react";

import Image from "next/image";
import { useUtilsStore } from '../../store/useUtilsStore';
import Spinner from '../Spinner';
import { useCounterStore } from '../../store/useCounterStore'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ExpensesItemsPicker = (props) => {


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
			page: queryPrams.page,
			order: queryPrams.order,
		};
		postData = JSON.stringify(postData);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/search_expense_items", {
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
	}, [queryPrams.keyword]);


	return (
		<div className="flex items-center gap-2">

			<div>
				<input
					type="text"
					className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm w-full bg-white"
					value={queryPrams.keyword}
					placeholder={placeholder ? placeholder : "Search..."}
					onChange={(ev) => {
						var value = ev.target.value;
						// setcurrentObject({ ...currentObject, title: value });

						setqueryPrams({ ...queryPrams, keyword: value })
					}}
				/>

				{products?.posts?.length > 0 && (
					<>
						<div className="relative">

							<div className="absolute top-0 z-10 left-0 w-[400px] bg-white p-2 shadow-sm">
								{products?.posts.map(item => {




									return (
										<div className="border-b border-solid border-gray-400 flex gap-2 hover:bg-gray-300 px-2 py-2 cursor-pointer"
											onClick={ev => {
												onPick(item)
											}}
										>

											{/* {JSON.stringify(item)} */}


											<div className="w-12 border">
												{item?.post_thumbnail?.src && (
													<Image src={item?.post_thumbnail?.src} width={50} height={50} />
												)}
											</div>
											<div className="flex-1 flex-col flex gap-2 text-sm">
												<div>{item.product_name}</div>
												<div>{wrapCurrency(item?.price)}</div>
											</div>

										</div>
									)
								})}
							</div>

						</div>
					</>
				)}

			</div>




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
	);
};

export default ExpensesItemsPicker;
