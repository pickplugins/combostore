"use client";
import { useState, useEffect } from "react";
import { IconRefresh, IconEraser } from "@tabler/icons-react";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
import { useCounterStore } from '../../store/useCounterStore'

import Spinner from '../Spinner';

const UsersPicker = (props) => {



	const { token, paymentGateways, notifications, addNotification, cartItems, addCartItems, resetCartItems, userDataX, setUserDataX, navToggle, setnavToggle, lang, setlang } = useCounterStore()




	var placeholder = props.placeholder;
	var onPick = props.onPick;



	var [queryPrams, setqueryPrams] = useState({ search: "", role: props?.role, page: 1, order: "DESC", orderby: "id", number: 10, });
	var [loading, setloading] = useState(false);
	var [products, setproducts] = useState(null);


	function get_users() {


		if (queryPrams.page < 0) {
			return;
		}
		if (queryPrams.search?.length < 3) {
			return;
		}

		var postData = {
			search: queryPrams.search,
			number: queryPrams.number,
			page: queryPrams.page,
			order: queryPrams.order,
			orderby: queryPrams.orderby,
			role: queryPrams.role,
		};
		postData = JSON.stringify(postData);




		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_users", {
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

		get_users();
	}, []);


	useEffect(() => {
		if (queryPrams.search?.length > 3) {
			get_users();
		}
		if (queryPrams.search?.length == 0) {
			setproducts([]);
		}
	}, [queryPrams.search]);


	return (
		<div className="flex items-center gap-2 relative">
			<input
				type="text"
				className="!shadow-none bg-white px-2 py-1 rounded-sm w-full !border-2 border-solid border-gray-400 !shadow-none !outline-none focus:border-0"
				value={queryPrams.search}
				placeholder={placeholder ? placeholder : "Search..."}
				onChange={(ev) => {
					var value = ev.target.value;
					// setcurrentObject({ ...currentObject, title: value });

					setqueryPrams({ ...queryPrams, search: value })
				}}
			/>

			{products?.posts?.length > 0 && (
				<div className="absolute z-50 top-full left-0 xl:w-[300px] w-full rounded-sm bg-white p-2 shadow-sm">
					{products?.posts.map((item, index) => {
						return (
							<div key={index} className="border-b border-solid border-gray-400  px-2 py-1 cursor-pointer"
								onClick={ev => {
									onPick(item)
								}}
							>{item.display_name}</div>
						)
					})}
				</div>
			)}





			{loading && (
				<div className="hover:bg-gray-400 rounded-sm cursor-pointer px-2 py-2 bg-gray-600 text-white"><Spinner /></div>
			)}
			{!loading && (
				<>
					{queryPrams?.search?.length > 0 && (
						<div className="  rounded-sm cursor-pointer px-2 py-2 bg-[#1b0e9f] text-white" onClick={ev => {
							setqueryPrams({ ...queryPrams, search: "" })

						}}><IconEraser /></div>
					)}
				</>
			)}




		</div>
	);
};

export default UsersPicker;
