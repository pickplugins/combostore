import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconEdit, IconDeviceFloppy, IconPaintFilled, IconCopy, IconClipboard, IconStarFilled, IconStar, IconAi } from "@tabler/icons-react";
import { useDraggable } from '@dnd-kit/react';
import { useCounterStore } from '../../store/useCounterStore';
import Spinner from '../../components/Spinner';

// import DropDown from "../../../components/DropDown";
// import CssClassPicker from "../CssClassPicker";
// import CssSelectors from "../CssSelectors";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


const TemplatePartsEdit = (props) => {

	var pageData = props?.pageData;
	var setpageData = props?.setpageData;
	var blocks = props?.blocks;
	var setBlocks = props?.setBlocks;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()

	const [loading, setloading] = useState(false);



	function reset_page() {

		setBlocks([
		])
		addNotification({ type: 'error', title: 'Reset done', content: `Canvas reset successful.` })
	}


	function copy_all() {


		const data = JSON.stringify(blocks);

		//localStorage.setItem('combo_copied_blocks', data);
		navigator.clipboard.writeText(data);
		addNotification({ type: 'success', title: 'Copy done', content: `All blocks copied.` })
	}
	async function paste_blocks() {


		const text = await navigator.clipboard.readText();
		var parsed = null;
		try {
			parsed = JSON.parse(text);
			setBlocks(parsed)


			if (!isJsonString(text)) {
				addNotification({ type: 'error', title: 'Invalid content', content: `Clipboard content is not valid JSON.` })
				return;
			}

			addNotification({ type: 'success', title: 'Copy done', content: `Content Ready.` })
		} catch (e) {
			addNotification({ type: 'error', title: 'Invalid content', content: `Clipboard content is not valid JSON.` })
		}
	}



	function update_template_part() {


		var postData = {
			...pageData, blocks: blocks,
		};
		postData = JSON.stringify(postData);

		console.log(postData);




		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/update_template_part", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
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

						//onLoadPage(res?.post)

						setloading(false);

						//setselectedRows([]);

						if (success) {
							addNotification({ type: 'success', title: 'Page update', content: `` })
						} else {
							addNotification({ type: 'error', title: 'Page updated failed', content: `` })

						}




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}


	function isJsonString(str) {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			return false;
		}
	}


	function update_page() {


		var postData = {
			...pageData, blocks: blocks,
		};
		postData = JSON.stringify(postData);

		console.log(postData);



		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/update_page", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
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

						//onLoadPage(res?.post)

						setloading(false);

						//fetchPosts();

						//setselectedRows([]);

						if (success) {
							addNotification({ type: 'success', title: 'Page update', content: `` })
						} else {
							addNotification({ type: 'error', title: 'Page updated failed', content: `` })

						}




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}




	return (
		<div className="" >


			<div className="bg-gray-700 p-3 text-white flex items-center justify-between ">

				<div className="text-xs flex gap-2">
					{/* <IconEdit size={16} /> */}
					{pageData?.title}




				</div>

				<div className="flex items-center gap-1">

					{loading && (


						<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600" >						<Spinner size={16} />
						</div>
					)}




					<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600" onClick={ev => {
						reset_page()
					}}>						<IconPaintFilled size={16} />
					</div>



					<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900" onClick={ev => {
						copy_all()
					}}>
						<IconCopy size={16} />
					</div>
					<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900" onClick={ev => {
						paste_blocks()
					}}>
						<IconClipboard size={16} />
					</div>

					<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900" onClick={ev => {

						var isPage = pageData?.isPage ?? false;

						console.log(isPage);


						if (isPage) {
							update_page()
						} else {
							update_template_part()
						}

					}}>

						<IconDeviceFloppy size={16} />
					</div>


				</div>

			</div>





		</div>
	);
};



export default TemplatePartsEdit;
