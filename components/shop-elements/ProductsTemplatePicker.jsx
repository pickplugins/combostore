import { useState, useEffect } from "react";
import { IconRefresh, IconEraser, IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

import Image from "next/image";
import { useUtilsStore } from '../../store/useUtilsStore';
import Spinner from '../Spinner';
import { useCounterStore } from '../../store/useCounterStore'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ProductsTemplatePicker = (props) => {


	const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()


	var selected = props.selected;
	var onPick = props.onPick;
	var onReset = props.onReset;
	var placeholder = props.placeholder;
	const { formatDate, wrapCurrency } = useUtilsStore()


	var [queryPrams, setqueryPrams] = useState({ type: 'product', keyword: "", page: 1, order: "DESC", per_page: 10, });
	var [loading, setloading] = useState(false);
	var [products, setproducts] = useState(null);


	function fetchPosts() {



		var postData = JSON.stringify(queryPrams);
		setloading(true);

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


	return (
		<div className={`flex flex-col gap-10 `}>




			<div className="flex gap-2 items-center">


				<input
					type="text"
					className="!shadow-none !border-2 border-gray-400 border-solid px-2 py-1 rounded-sm !w-full bg-white"
					value={queryPrams.keyword}
					placeholder={placeholder ? placeholder : "Search..."}
					onChange={(ev) => {
						var value = ev.target.value;
						// setcurrentObject({ ...currentObject, title: value });

						setqueryPrams({ ...queryPrams, keyword: value })
					}}
				/>
				<div className="" onClick={ev => {

					onReset()


				}}>Reset</div>


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
				<div className="">




					<div className="grid grid-cols-4 gap-5">
						{products?.posts.map(item => {




							return (
								<div className={`flex gap-2 justify-center ${selected?.id == item?.id ? 'bg-gray-400' : 'bg-gray-200'} rounded-sm  hover:bg-gray-300 px-2 py-2 cursor-pointer`}
									onClick={ev => {
										onPick(item)
									}}
								>


									<div>{item.title}</div>

								</div>
							)
						})}
					</div>

					<div className="flex gap-2 items-center py-10">
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


				</div>
			)}










		</div>
	);
};

export default ProductsTemplatePicker;
