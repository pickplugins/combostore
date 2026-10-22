import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconCircleCheck, IconFileDollar, IconSettings, IconCopy, IconTrash, IconBrowserPlus, IconStack, IconEyeShare, IconServerCog } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import PopoverButton from '../../components/PopoverButton';
import Spinner from '../../components/Spinner';
import Link from 'next/link';
import TemplatesLibrary from './TemplatesLibrary';
import TemplateSettings from './TemplateSettings';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';

const Templates = (props) => {


	var type = props?.type;

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var handlePasteBlock = props?.handlePasteBlock;
	var onLoadPage = props?.onLoadPage;
	var setpageData = props?.setpageData;
	var pageData = props?.pageData;
	var blocks = props?.blocks
	var setBlocks = props?.setBlocks
	var elements = props.elements;
	var prams = props.prams;
	var [queryPrams, setqueryPrams] = useState({ type: type, keyword: "", template_id: null, });
	const [loading, setloading] = useState(false);
	var [ordersData, setordersData] = useState(null);
	var [newPage, setnewPage] = useState({ name: '', type: type });
	var [activeTemplate, setactiveTemplate] = useState(null);
	var [newTemplatePart, setnewTemplatePart] = useState({ type: type, title: "", template_id: activeTemplate?.id, });
	var [includeHeaderFooter, setincludeHeaderFooter] = useState(false);

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




	async function create_template() {





		var postData = JSON.stringify(newPage);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/create_template", {
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

						get_templates();





					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}


	function delete_template(ids) {


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
		fetch(serverUrl + "wp-json/combo-store/v2/delete_template", {
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

						get_templates();

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

						get_templates();

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
			includeHeaderFooter: includeHeaderFooter,
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


								var content = JSON.parse(content)


								if (includeHeaderFooter) {

									var header = JSON.parse(res?.header?.content)
									var footer = JSON.parse(res?.footer?.content)

									setBlocks([...header, ...content, ...footer])

								} else {

									setBlocks(content)
								}








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
	function get_active_template() {



		var postData = {}


		postData = JSON.stringify(postData);
		setloading(true);
		fetch(serverUrl + "wp-json/combo-store/v2/get_active_template", {
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


						setactiveTemplate(res)




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

	function get_templates() {




		// if (!token) {
		// 	//throw new Error("No token found");
		// }


		if (queryPrams.paged < 0) {
			return;
		}


		var postData = JSON.stringify(queryPrams);
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_templates", {
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


	function active_template(id) {


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
		fetch(serverUrl + "wp-json/combo-store/v2/active_template", {
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

						get_active_template()

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

		get_templates();
		get_active_template()
	}, []);

	useEffect(() => {

		get_templates();
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
					<div className="flex items-center mb-5 justify-between">

						<div className="flex items-center gap-2">
							<PopoverButton wrapperClass={` flex justify-end`} buttonLabel={null} buttonIcon={<IconBrowserPlus size={16} />} title={"Create"} position={"bottomLeft"} buttonClass={`inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900`}>


								<div className="p-2 flex flex-col gap-3 w-full bg-gray-200">

									<input className="" type="text" placeholder="Name" value={newPage?.name} onChange={ev => {

										var value = ev.target.value;

										setnewPage({ ...newPage, name: value })
									}} />

									<div className="flex items-center gap-3">
										<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit" onClick={ev => {

											if (newPage.name.length == 0) {
												addNotification({ type: 'error', title: 'Title is empty', content: `Please add title text.` })
												return;

											}

											create_template()
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


						</div>


					</div>

					<div className="mb-2">

						<label htmlFor="includeHeaderFooter" className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-2 transition-colors hover:bg-gray-100">
							<input type="checkbox" name="" id="includeHeaderFooter" onChange={ev => {

								var { checked, name } = ev.target;

								setincludeHeaderFooter(checked)

							}} />
							<span>Include Header & Footer</span>
						</label>

					</div>



					<div className="flex flex-col gap-2">




						{ordersData?.posts?.map(template => {



							return (

								<div key={template?.id}

									/* The active template was marked with `bg-gray-500` - a dark
										 slab behind near-black text, so the one template you most
										 needed to identify was the hardest to read. */
									className={`flex flex-col gap-3 rounded-lg border p-2.5 text-xs cursor-pointer transition-colors ${activeTemplate?.id == template?.id
										? 'border-brand/30 bg-brand/5 shadow-[inset_2px_0_0_var(--color-brand)]'
										: 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}

								>

									<div className="flex justify-between items-center">
										<div className="text-sm font-bold">
											{template?.name.length == 0 && (
												<>No name</>
											)}
											{template?.name.length > 0 && (
												<>{template?.name}({template?.id})</>
											)}
										</div>

										<div className="flex gap-2 items-center">


											{/* Was blue-on-grey, the only blue in the editor and the
											    same shape as the destructive button next to it. */}
											<div title={`${activeTemplate?.id == template?.id ? 'Current template' : 'Make this the active template'} `} className={`inline-flex h-7 w-7 items-center justify-center rounded-md cursor-pointer transition-colors ${activeTemplate?.id == template?.id ? 'bg-brand text-white' : 'text-gray-400 hover:bg-gray-200 hover:text-gray-900'}`} onClick={ev => {
												if (confirm('Please confirm?')) {
													active_template(template?.id)
												}
											}}>
												<IconCircleCheck size={16} />
											</div>
											<div title="Delete" className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600" onClick={ev => {
												if (confirm('Please confirm?')) {
													delete_template([template?.id])
												}
											}}>
												<IconTrash size={16} />
											</div>
											<div title="Duplicate" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900" onClick={ev => {
												if (confirm('Please confirm?')) {
													duplicate_page(template?.id)
												}
											}}>
												<IconCopy size={16} />
											</div>

											<PopoverButton wrapperClass={` flex justify-end`} buttonLabel={null} buttonIcon={<IconSettings size={16} />} title={"Template Settings"} position={null} buttonClass={`inline-flex h-7 w-7 items-center justify-center rounded-md text-gray-500 cursor-pointer transition-colors hover:bg-gray-200 hover:text-gray-900`}>

												<TemplateSettings templateData={template} />












											</PopoverButton>



										</div>
									</div>

									<div className="flex flex-col gap-2">

										{template?.pages.map(page => {

											return (

												/* Open page and hover state were both `bg-gray-400`, so
														the chip you were on looked identical to the one under
													 the cursor. */
												<div className={`rounded-md border px-2 py-1 text-[11px] cursor-pointer transition-colors ${pageData?.id == page?.id ? 'border-brand/30 bg-brand/10 font-medium text-brand-700' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-100'}`} onClick={ev => {

													get_template_part(page?.id)

												}}>

													{page.title}

												</div>

											)

										})}

									</div>




								</div>

							)

						})}
					</div>


				</Tab>
				<Tab index={1} id='library'>
					<TemplatesLibrary setBlocks={setBlocks} blocks={blocks} handlePasteBlock={handlePasteBlock} />

				</Tab>




			</Tabs>











		</div>
	);
};



export default Templates;
