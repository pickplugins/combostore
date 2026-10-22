import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconReplace, IconPlug, IconPlugX, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import ToggleContent from '../../../components/ToggleContent';
import CssClassPicker from "../CssClassPicker";
import GalleryPicker from '../../shop-elements/GalleryPicker';
import NextImage from "next/image";
import DropDown from '../../../components/DropDown';
import CssSelectors from "../CssSelectors";
import { useCounterStore } from '../../../store/useCounterStore';

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const PostSliderOptions = (props) => {


	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

	var updateBlock = props?.updateBlock;

	var options = props?.options;
	var templteId = options?.id ?? null;
	var cssSelectors = props?.cssSelectors;

	var [queryPrams, setqueryPrams] = useState({ type: 'footer', keyword: "", });

	const [loading, setloading] = useState(false);
	const [headers, setheaders] = useState({ posts: [] });




	// useEffect(() => {

	// 	fetchPosts();
	// }, []);






	function get_template_parts() {




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


						console.log(res);


						var posts = res?.posts;
						var total = parseInt(res?.total);
						var max_pages = parseInt(res?.max_pages);


						console.log(posts);


						setheaders({ posts: posts, total: total, maxPages: max_pages })
						setloading(false);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}

	useEffect(() => {

		get_template_parts();
	}, []);


	return (
		<div className="px-3" >
			{/* {JSON.stringify(prams)} */}

			<div className="flex flex-col gap-3">

				<div className="flex flex-col gap-2 ">

					{headers?.posts?.map(item => {

						return (

							<div className={` p-2 rounded-sm cursor-pointer flex flex-col gap-3 ${templteId == item.id ? "bg-orange-200" : "bg-gray-300"}`} >
								<div>{item.title}</div>


								<div className="flex gap-2     rounded-sm">

									<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
										onClick={ev => {

											var content = item?.content

											content = JSON.parse(content)

											console.log(content);


											updateBlock('children', content)


										}}


									><IconReplace size={20} /> Replace</div>

									{templteId == item.id && (
										<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"

											onClick={ev => {

												var optionsX = { ...options }


												optionsX.id = null
												updateBlock('options', optionsX)


											}}

										><IconPlugX size={20} /> Reset</div>

									)}
									{templteId != item.id && (

										<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"

											onClick={ev => {

												var optionsX = { ...options }


												optionsX.id = item.id
												updateBlock('options', optionsX)


											}}

										><IconPlug size={20} /> Assign</div>
									)}







								</div>
							</div>

						)

					})}

				</div>




				<CssSelectors cssSelectors={cssSelectors} updateBlock={updateBlock} />






			</div>


		</div>
	);
};



export default PostSliderOptions;
