import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconCopy, IconBrandOpenai, IconX, IconBookmark, IconHeart, IconHeartFilled, IconChevronDown, IconChevronUp, IconDownload, IconThumbUp, IconThumbDown, IconTags, IconLink, IconEyeSearch, IconHeartPlus, IconPlus, IconEqual } from "@tabler/icons-react";

import { useCounterStore } from '../../store/useCounterStore'



const Upsells = (props) => {




	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX } = useCounterStore()


	var productData = props.productData;
	var upsells = productData?.upsells;


	var ids = upsells?.map(item => item.id);



	if (ids?.length == 0) return;


	var [loading, setloading] = useState(false);


	var [queryPrams, setqueryPrams] = useState({ post__in: ids, order: "DESC", per_page: 8, });
	var [promptsData, setpromptsData] = useState({ posts: [], total: 8, maxPages: 1 });



	function fetchPosts() {



		// if (!token) {
		// 	throw new Error("No token found");
		// }



		var postData = {
			order: queryPrams.order,
			post__in: queryPrams.post__in,
		};



		postData = JSON.stringify(postData);






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



	// useEffect(() => {

	// 	setqueryPrams({ ...queryPrams, post__in: ids, })

	// 	setTimeout(() => {
	// 		fetchPosts();
	// 	}, 500)

	// }, [ids]);


	return (
		<div className="pb-5 flex gap-2">


			{promptsData?.posts.map((entry, index) => {




				return (



					<div key={entry?.id} className="flex  gap-2 items-center">
						<div className=" flex-1 bg-gray-600 rounded-sm p-5 flex flex-col gap-2" key={index}>

							{entry?.post_thumbnail_url && (
								<a className="text-left flex flex-col gap-2  cursor-pointer" herf={`/product/${entry?.id}/`} >
									<div className="h-[200px] overflow-hidden">

										<Image
											className="h-full w-full object-cover" src={entry?.post_thumbnail_url} alt={entry?.title}
											width={200} height={`50`}

										/>
									</div>
									<div className="text-gray-200 text-lg ">
										{entry?.title}
									</div>
								</a>
							)}
							{!entry?.post_thumbnail_url && (
								<Link className="text-left   cursor-pointer" herf={`/product/${entry?.id}/`} >
									<div className="h-[200px] overflow-hidden">
										<Image
											src={`/thumb.png`}
											className=" opacity-20 h-full w-full object-cover" width={200} height={`50`} alt=""

										/>
									</div>
								</Link>
							)}

							<div className="text-gray-200 ">
								{entry?.categories.length > 0 && (
									<div className="flex items-center text-sm gap-2 flex-wrap">
										<div>
											<IconTags width={18} />
										</div>

										{entry?.categories.map((item, index) => {

											return (
												<div key={index}>
													<span>{item.name}</span>
													{entry?.categories.length > (index + 1) && (
														<span className="pr-1">, </span>
													)}
												</div>
											)
										})}
									</div>

								)}

							</div>



						</div>

						{promptsData?.posts.length > (index + 1) && (
							<div className="">
								<IconPlus />
							</div>
						)}
						{promptsData?.posts.length == (index + 1) && (
							<div className="">
								<IconEqual />
							</div>
						)}





					</div>


				)
			})}







		</div>
	);
};

export default Upsells;
