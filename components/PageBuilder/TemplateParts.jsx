import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconCircleCheck, IconFileDollar, IconSettings, IconCopy, IconTrash, IconBrowserPlus, IconStack, IconEyeShare, IconServerCog } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import PopoverButton from '../../components/PopoverButton';
import Spinner from '../../components/Spinner';
import Link from 'next/link';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';

const TemplateParts = (props) => {


	var type = props?.type;

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var onLoadPage = props?.onLoadPage;
	var setpageData = props?.setpageData;
	var pageData = props?.pageData;
	var blocks = props?.blocks
	var setBlocks = props?.setBlocks
	var elements = props.elements;
	var prams = props.prams;
	var [queryPrams, setqueryPrams] = useState({ type, keyword: "", });
	const [loading, setloading] = useState(false);
	var [ordersData, setordersData] = useState(null);
	var [newPage, setnewPage] = useState({ title: '', type: type });

	let _n = 0;

	const uid = () => `b${++_n}${Date.now().toString(36)}`;

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




	async function create_template_part() {





		var postData = JSON.stringify(newPage);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/create_template_part", {
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



						//var resObj = JSON.parse(res)

						var status = res?.status;
						var messages = res?.messages;



						if (status == 'failed') {
							addNotification({ type: 'error', title: 'Added failed', content: `Sorry,  added failed.${JSON.stringify(messages)}` })
						}

						if (status == 'success') {
							addNotification({ type: 'success', title: 'Added', content: "Added scuccessful." })
						}


						setloading(false);

						get_template_parts();





					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}


	function delete_template_part(ids) {


		if (!token) {
			//throw new Error("No token found");
		}

		if (queryPrams.paged < 0) {
			return;
		}

		var postData = {
			ids: ids,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/delete_template_part", {
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

						get_template_parts();

					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}
	function duplicate_page(id) {


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
		fetch(serverUrl + "wp-json/combo-store/v2/duplicate_page", {
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

						get_template_parts();

					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}
	function get_template_partX(id) {




		if (!id) {

			return;

		}

		var postData = {
			id: id,
		};
		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/get_template_part", {
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


						var content = res?.content;

						console.log(res);




						if (content?.length == 0) {



							setpageData(res)

							let _n = 0;
							const uid = () => `b${++_n}${Date.now().toString(36)}`;

							setBlocks([
								{ id: uid(), type: "heading", options: { text: "Build Pages Visually.", tag: "h1", }, cssSelectors: { '*': {} }, },

							])

							addNotification({ type: 'error', title: 'Content not valid JSON', content: `Dummy content added, Existing content will replace.` })


							setloading(false);

							return;
						} else {
							//setBlocks(res?.post)




							if (isJsonString(content)) {
								setpageData(res)




								setBlocks(JSON.parse(content))
								addNotification({ type: 'success', title: 'Content Loaded', content: `Page laoded success` })

							} else {
								setpageData(res)

								let _n = 0;
								const uid = () => `b${++_n}${Date.now().toString(36)}`;

								setBlocks([
									{ id: uid(), type: "heading", prams: { options: { text: "Build Pages Visually.", level: "h1", classes: '', }, selectors: { '*': {} }, } },
									{ id: uid(), type: "text", prams: { options: { text: "No code page builder.", tag: "h1", classes: '', }, selectors: { '*': {} }, } },
									{ id: uid(), type: "button", prams: { options: { label: "Simple button.", tag: "h1", href: '', classes: '', }, selectors: { '*': {} } } },

								])

								addNotification({ type: 'error', title: 'Content not valid JSON', content: `Default blocks loaded, Existing content will replace.` })

							}


						}


						setloading(false);


						//setselectedRows([]);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	function get_template_part(id) {




		if (!id) {

			return;

		}

		var postData = {
			id: id,
			scope: 'builder',
		};

		console.log(postData);


		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/get_template_part", {
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


						var content = res?.content;
						var meta = res?.meta;


						console.log(res);

						// return;

						if (content?.length == 0) {


							addNotification({ type: 'error', title: 'Content not valid JSON', content: `Dummy content added, Existing content will replace.` })

							setloading(false);

							return;
						} else {
							//setBlocks(res?.post)




							if ((content)) {
								setpageData(res)

								// var content = JSON.parse(content)
								setBlocks(content)





								addNotification({ type: 'success', title: 'Content Loaded', content: `Page laoded success` })

							} else {
								setpageData(res)

								let _n = 0;
								const uid = () => `b${++_n}${Date.now().toString(36)}`;

								setBlocks([
									{ id: uid(), type: "heading", prams: { options: { text: "Build Pages Visually.", level: "h1", classes: '', }, selectors: { '*': {} }, } },
									{ id: uid(), type: "text", prams: { options: { text: "No code page builder.", tag: "h1", classes: '', }, selectors: { '*': {} }, } },
									{ id: uid(), type: "button", prams: { options: { label: "Simple button.", tag: "h1", href: '', classes: '', }, selectors: { '*': {} } } },

								])

								addNotification({ type: 'error', title: 'Content not valid JSON', content: `Default blocks loaded, Existing content will replace.` })

							}


						}


						setloading(false);


						//setselectedRows([]);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}



	function update_template_part() {


		var postData = {
			id: pageData?.id,
			title: pageData?.title,
			blocks: blocks,
			type: type,
		};
		postData = JSON.stringify(postData);




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

						onLoadPage(res?.post)

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

	function get_template_parts() {




		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}


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




						var orders = res?.posts;
						var total = parseInt(res?.total);
						var max_pages = parseInt(res?.max_pages);




						setordersData({ posts: orders, total: total, maxPages: max_pages })
						setloading(false);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}

	function decodeUnicode(str) {
		return str.replace(/u([0-9a-fA-F]{4})/g, (_, code) =>
			String.fromCharCode(parseInt(code, 16))
		);
	}



	function isJsonString(str) {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			return false;
		}
	}






	useEffect(() => {

		get_template_parts();
	}, []);

	useEffect(() => {

		get_template_parts();
	}, [queryPrams]);


	return (
		<div className="flex flex-col gap-5 ">




			<Tabs activeTab={'installed'}
				orientation="horizontal"
				activeClass="active-tab "
				navsItemClass="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
				navsItemActiveClass="!bg-brand !text-white shadow-sm hover:!bg-brand-600"

				navsWrapperClass="flex gap-1 rounded-lg bg-gray-100 p-1 mb-3"
				wrapperClass=" gap-5"

				tabs={[
					{ label: "Installed", id: 'installed', icon: <IconFileDollar size={18} /> },
					{ label: "Library", id: 'library', icon: <IconStack size={18} /> },


				]}>


				<Tab index={0} id='installed'>

					<div className="flex items-center justify-between mb-4">

						<div className="flex items-center ">
							<PopoverButton wrapperClass={` flex justify-end`} buttonLabel={null} buttonIcon={<IconBrowserPlus size={16} />} title={"Create"} position={"bottomLeft"} buttonClass={`inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900`}>


								<div className="p-2 flex flex-col gap-3 w-full bg-gray-200">

									<input className="" type="text" placeholder="Name" value={newPage?.title} onChange={ev => {

										var value = ev.target.value;

										setnewPage({ ...newPage, title: value })
									}} />

									<div className="flex items-center gap-3">
										<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

											if (newPage.title.length == 0) {
												addNotification({ type: 'error', title: 'Title is empty', content: `Please add title text.` })
												return;

											}

											create_template_part()
										}}>

											Create
										</div>

										{loading && (
											<Spinner />
										)}
									</div>

								</div>

							</PopoverButton>

							{loading && (
								<Spinner />
							)}
						</div>

						<div className="flex gap-1">

							<div>

								<input type="text" placeholder="Search..." value={queryPrams?.keyword} onChange={ev => {

									setqueryPrams({ ...queryPrams, keyword: ev.target.value })
								}} className="w-30 !rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10" />

							</div>
							{/* 
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
						update_template_part()
					}}>

						<IconDeviceFloppy size={16} /> Update
					</div> */}
						</div>


					</div>

					<div className="flex flex-col gap-2">




						{ordersData?.posts?.map(page => {

							return (

								<div key={page?.id}

									/* Same as the page list: the open item and the hover state
										 were both `bg-gray-400`, so they were indistinguishable. */
									className={`flex flex-col gap-2 rounded-lg border p-2.5 text-xs cursor-pointer transition-colors ${pageData?.id == page?.id
										? 'border-brand/30 bg-brand/5 shadow-[inset_2px_0_0_var(--color-brand)]'
										: 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}
									onClick={ev => {

										get_template_part(page?.id)

									}}
								>
									<div className="">

										{page?.title.length == 0 && (
											<>No Title</>
										)}
										{page?.title.length > 0 && (
											<>{page?.title}</>
										)}
									</div>




									<div className="flex gap-2 items-center justify-between">


										<div className="flex gap-2 items-center">
											<div>#{page?.id}</div>
											<div title="Delete" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
												if (confirm('Please confirm?')) {
													delete_template_part([page?.id])
												}
											}}>
												<IconTrash size={16} />
											</div>
											<div title="Duplicate" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900" onClick={ev => {
												if (confirm('Please confirm?')) {
													duplicate_page(page?.id)
												}
											}}>
												<IconCopy size={16} />
											</div>

											<Link className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900" href={`/${page.slug}`} target="_blank" onClick={ev => {
												ev.preventDefault()
											}}>
												<IconEyeShare size={16} />
											</Link>
										</div>


										{page?.template_id > 0 && (
											<div className="text-xs">
												Template:{page?.template_id}
											</div>
										)}


									</div>



								</div>

							)

						})}
					</div>


				</Tab>
				<Tab index={1} id='library'>
					{/* <TemplatesLibrary setBlocks={setBlocks} blocks={blocks} handlePasteBlock={handlePasteBlock} /> */}

				</Tab>




			</Tabs>











			{/* {JSON.stringify(pageData)} */}

		</div>
	);
};



export default TemplateParts;
