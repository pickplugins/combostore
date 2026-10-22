import { useState, useEffect } from "react";
import { IconRefresh, IconEraser, IconX, IconArrowNarrowRightDashed, IconArrowNarrowLeftDashed, IconUpload } from "@tabler/icons-react";
import Popover from "../Popover";
import { useCounterStore } from '../../store/useCounterStore'
import UploadMedia from "./UploadMedia";

import Image from "next/image";

const GalleryPicker = (props) => {



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX } = useCounterStore()



	var popupClass = props.popupClass;
	var title = props.title;
	var onPick = props.onPick;


	var [queryPrams, setqueryPrams] = useState({ keyword: "", paged: 1, order: "DESC", per_page: 20, });
	var [loading, setloading] = useState(false);
	var [products, setproducts] = useState(null);
	var [mediaLibrary, setmediaLibrary] = useState({ enable: false });
	var [enableUpload, setenableUpload] = useState(false);


	function fetchPosts() {







		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_medias", {
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
		fetchPosts();

	}, [queryPrams.paged]);

	useEffect(() => {
		if (queryPrams.keyword.length > 3) {
			fetchPosts();
		}

	}, [queryPrams.keyword]);




	return (
		<div className="flex items-center gap-2">



			<div className="relative">



				<div onClick={ev => {
					setmediaLibrary({ ...mediaLibrary, enable: !mediaLibrary.enable })
				}} className=" hover:bg-gray-400 rounded-sm cursor-pointer px-4 py-2 bg-gray-600 text-white">Media Library</div>

				{mediaLibrary.enable && (

					<Popover className={popupClass}>

						<div className=" bg-white border-2 border-solid border-gray-400 shadow-sm rounded-sm h-2/3 overflow-y-auto">

							<div className="flex gap-2 items-center justify-between bg-gray-300 p-2">

								<div className="flex gap-2 items-center ">

									<div className="flex gap-2 items-center ">
										<input
											type="text"
											className="!border-2  focus:outline-none w-full border-solid !border-gray-600 !shadow-none bg-gray-300 text-sm"
											value={queryPrams.keyword}
											placeholder="Search..."
											onChange={(ev) => {
												var value = ev.target.value;
												// setcurrentObject({ ...currentObject, title: value });

												setqueryPrams({ ...queryPrams, keyword: value })
											}}
										/>

										{loading && (
											<div className="animate-spin "><IconRefresh /></div>

										)}
										{!loading && (
											<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-2 py-2 bg-gray-600 text-white" onClick={ev => {
												setqueryPrams({ ...queryPrams, keyword: "" })

											}}><IconEraser size={16} /></div>

										)}
									</div>

									<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-2 py-2 bg-gray-600 text-white" onClick={ev => {

										setenableUpload(!enableUpload)
									}}><IconUpload size={16} /></div>

								</div>




								<div className="flex gap-2  justify-between ">
									<div className="flex gap-2">
										<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-1 py-1 bg-gray-600 text-white" onClick={ev => {
											var value = parseInt(queryPrams.paged);
											value = (value > 1) ? value - 1 : 1;

											setqueryPrams({ ...queryPrams, paged: value })
										}}>
											<IconArrowNarrowLeftDashed />
										</div>
										<div><input type="text" name="" id="" value={queryPrams.paged} className="w-16  !border-2  focus:outline-none text-center border-solid !border-gray-600 !shadow-none bg-gray-300 text-sm" onChange={(ev) => {
											var value = parseInt(ev.target.value);
											setqueryPrams({ ...queryPrams, paged: value })
										}} /></div>
										<div className=" hover:bg-gray-400 rounded-sm cursor-pointer px-1 py-1 bg-gray-600 text-white" onClick={ev => {
											var value = parseInt(queryPrams.paged) + 1;


											setqueryPrams({ ...queryPrams, paged: value })
										}}>
											<IconArrowNarrowRightDashed />
										</div>

									</div>
									<div className=" bg-red-400 text-white px-1 py-1 rounded-sm cursor-pointer" onClick={ev => {


										setmediaLibrary({ ...mediaLibrary, enable: !mediaLibrary.enable })


									}}>
										<IconX />
									</div>
								</div>


							</div>


							<div className="p-3">


								{enableUpload && (
									<UploadMedia onUploadComplete={(media) => {
										fetchPosts();

										//fetchPosts();
									}} />
								)}









								{products?.posts?.length > 0 && (
									<>
										<div className="relative pt-2">
											<div className=" w-[800px]">
												<div className="grid grid-cols-4 gap-3">
													{products?.posts.map((item, index) => {
														return (
															<div key={index} className="relative overflow-hidden border-2 border-solid border-gray-400 cursor-pointer"
																onClick={ev => {
																	onPick(item)
																}}
															>
																<Image className="w-full" src={item.src} alt="" width={200} height={200} unoptimized />


																<div className="absolute text-xs bottom-0 left-0 w-full break-all bg-gray-500  p-2 text-white bg-opacity-60">
																	{item.title}
																</div>
															</div>
														)
													})}
												</div>
											</div>

										</div>
									</>
								)}

							</div>

						</div>






					</Popover>

				)}
			</div>




		</div>
	);
};

export default GalleryPicker;
