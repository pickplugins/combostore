"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import EntriesTable from "../../../components/EntriesTable";

import { useCounterStore } from '../../../store/useCounterStore'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;


import { IconChevronDown, IconChevronUp, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconClockPause, IconExclamationCircle, IconRosetteDiscountCheck, IconX } from "@tabler/icons-react";
import ToggleContent from "../../../components/ToggleContent";
import HtmlEditor from "../../../components/HtmlEditor";
import TermsPicker from "../../../components/shop-elements/TermsPicker";
import TagsPicker from "../../../components/shop-elements/TagsPicker";







const page = () => {



	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var promptData = {
		"title": "",
		"email": userDataX?.email,
		"post_content": "",
		"post_status": "",
		"post_excerpt": "",
		"post_thumbnail": {
			"id": "",
			"src": ""
		},
		"post_thumbnail_url": "",
		"featured": false,
		"markedAs": "open",
		"priority": "1",
		"categories": [],
		"tags": [],
		"voteCount": 0,
		"loveCount": 0,
		"viewCount": 0,
	}



	var [currentObject, setcurrentObject] = useState(promptData);

	var [loading, setloading] = useState(false);
	var [errors, seterrors] = useState([]);
	var [submission, setsubmission] = useState({ id: null, success: false });
	var [OpenGraphData, setOpenGraphData] = useState({ robots: "", keywords: "AI prompt marketplace, ChatGPT prompts, Midjourney prompt library, Downloadable AI prompts, Prompt engineering templates", image: "", url: "https://promptshub.net/tickets-submit/", title: "Create Support Ticket – Get Help from PromptsHub.net Support Team", description: "Submit a support ticket on PromptsHub.net to quickly resolve your issues with AI prompts, account management, or billing. Our dedicated team is here to assist you promptly and efficiently." });




	function submit_ticket() {


		// if (!token) {
		//   addNotification({ type: 'error', title: 'Login Required', content: "Please Login to create tickets." })

		//   // //throw new Error("No token found");
		// }

		// if (currentObject.id < 0) {
		//   return;
		// }

		//var postData = currentObject;

		if (currentObject.title.length == 0) {
			addNotification({ type: 'error', title: 'Ticket Title Required', content: "Ticket Title should not empty." })
			return;
		}
		if (currentObject.post_content.length == 0) {
			addNotification({ type: 'error', title: 'Ticket Details Required', content: "Ticket Details should not empty." })
			return;
		}



		if (currentObject.email.length == 0) {
			addNotification({ type: 'error', title: 'Email Address Required', content: "Email Address should not empty." })
			return;
		}


		var postData = JSON.stringify(currentObject);


		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/submit_ticket",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authorization: `Bearer ${token}`,
				},
				body: postData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {
						var errors = res?.errors;
						var success = res?.success;



						if (!success) {
							seterrors(errors)
						}
						if (success) {
							seterrors([])

							setsubmission({ ...submission, success: true })
						}


						setloading(false);
						//setcurrentObject(res)




					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}




















	function toSlug(text) {
		return text
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric chars
			.replace(/\s+/g, '-')          // Replace spaces with -
			.replace(/-+/g, '-');          // Replace multiple - with single -
	}

	function onPickCategories_xx(item) {

		var itemX = { ...item }

		if (itemX.children) {
			delete itemX.children;
		}

		var categories = currentObject.categories;
		const exists = categories.includes(itemX.term_id);  // true



		if (exists) {

			const categoriesX = categories.filter(term => term !== itemX.term_id);

			setcurrentObject({ ...currentObject, categories: categoriesX });


		} else {
			categories.push(itemX.term_id)
			setcurrentObject({ ...currentObject, categories: categories });

		}
	}


	function onPickCategories(item) {

		var itemX = { ...item }

		if (itemX.children) {
			delete itemX.children;
		}

		var categories = currentObject.categories;
		// const exists = categories.includes(itemX.term_id);  // true
		const exists = categories.find(term => term.term_id === item.term_id);



		if (exists) {

			const categoriesX = categories.filter(term => term.term_id !== itemX.term_id);
			setcurrentObject({ ...currentObject, categories: categoriesX });

		} else {
			categories.push(itemX)
			setcurrentObject({ ...currentObject, categories: categories });

		}
	}






	function onPickTags(items) {


		var tags = currentObject?.tags;
		const mergedUnique = [...new Set([...tags, ...items])];

		setcurrentObject({ ...currentObject, tags: mergedUnique });




	}



	const FAQTitle = ({ text, index }) => {

		return (
			<div className="flex gap-3 items-center">


				<div>{text}</div>
			</div>
		)

	}















	return (

		<div className="flex-1 min-h-full bg-gray-50 px-3 py-5 sm:px-6 sm:py-6">

			{/* Page heading: this screen had no title. */}
			<div className="mx-auto mb-4 flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-3">
				<h1 className="text-xl font-semibold text-gray-900">{("Create Ticket")}</h1>
			</div>

			<div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_380px]">

				<div className="flex min-w-0 flex-col gap-4 order-2 lg:order-1">

					{loading && (

						<div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
							<div>
								<div className="flex gap-2 text-amber-600">
									<div className="animate-spin"><IconFidgetSpinner /> </div>
									<div>{("Please wait")}</div>

								</div>



							</div>

						</div>
					)}

					{submission.success && (

						<div className="form-card flex flex-wrap items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

							<div className="font-bold flex gap-2 text-emerald-600">
								<IconRosetteDiscountCheck />
								<div>{("Thanks for your submission")}</div>

							</div>

							<div className="text-red-600 cursor-pointer" onClick={ev => {
								setsubmission({ ...submission, success: false })

							}}>
								<IconX />
							</div>


						</div>

					)}


					{Object.entries(errors).length > 0 && (

						<div className="form-card flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
							<div>
								<div className="flex flex-col gap-2 text-red-400">

									<div className="font-bold">{("Errors")}</div>

									{Object.entries(errors).map(item => {

										return (
											<div className="py-1 flex gap-2">
												<IconExclamationCircle /> <div>{item[1]}</div>
											</div>
										)

									})}

								</div>



							</div>

						</div>
					)}





					{/* <code>{JSON.stringify(currentObject)}</code> */}

					<div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

						<div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">{("Create Support Ticket")}</div>

						<div className="p-4 flex flex-col  gap-4">

							<div className="flex flex-col gap-3 ">
								<label htmlFor="" className="block ">
									{("Ticket Title")}
								</label>
								<input
									type="text"
									className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm"
									value={currentObject?.title}
									onChange={(ev) => {
										var value = ev.target.value;
										var slug = toSlug(value);

										setcurrentObject({ ...currentObject, title: value, slug: slug });
									}}
								/>
							</div>



							<div className="flex flex-col gap-1.5">
								<label htmlFor="" className="block ">
									{("Ticket Details")}
								</label>
								<HtmlEditor
									value={currentObject?.post_content || ""}
									minHeight={160}
									onChange={(html) => {
										setcurrentObject({ ...currentObject, post_content: html });
									}}
								/>
							</div>




							<div className="flex flex-col gap-3 ">
								<label htmlFor="" className="block ">
									{("Your Email")}
								</label>
								<input
									type="email"
									className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 w-full rounded-lg px-3 py-2 text-sm"
									value={currentObject?.email}
									onChange={(ev) => {
										var value = ev.target.value;
										var slug = toSlug(value);

										setcurrentObject({ ...currentObject, email: value, slug: slug });
									}}
								/>
							</div>




						</div>
					</div>





				</div>

				<div className="min-w-0 order-1 lg:order-2 lg:sticky lg:top-[86px] lg:self-start">

					<div className="flex flex-col gap-4">

						<div className="form-card flex flex-wrap items-center justify-end gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">


							<div className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer"
								onClick={ev => {
									submit_ticket()
								}}
							>{("Submit")}</div>
						</div>


						<div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

							<div className="border-b border-gray-200 px-5 py-4 text-base font-semibold text-gray-900">{("Publish")}</div>

							<div className="p-4 flex flex-col text-sm gap-4">

								{/* <div className="flex justify-between items-center gap-3">
										<label htmlFor="" className="block text-gray-300">
											{("Featured?")}
										</label>
										<div>
											<div onClick={ev => {
												var featured = !currentObject?.featured;
												setcurrentObject({ ...currentObject, featured: featured });
											}} className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 cursor-pointer">

												{currentObject?.featured && (
													<><IconStarFilled /></>
												)}
												{!currentObject?.featured && (
													<><IconStar /></>
												)}
											</div>
										</div>
									</div> */}



								<div className="flex justify-between items-center gap-3">
									<label htmlFor="priority" className=" text-gray-300">
										{("Priority")}
									</label>

									<select name="priority" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm   " onChange={ev => {

										var value = ev.target.value;
										setcurrentObject({ ...currentObject, priority: value });


									}}>

										<option value="1" selected={currentObject?.priority == '1' ? "selected" : ""}>{("Normal")}</option>
										<option value="10" selected={currentObject?.priority == '10' ? "selected" : ""}>{("High")}</option>
										<option value="90" selected={currentObject?.priority == '90' ? "selected" : ""}>{("Urgent")}</option>


									</select>

								</div>















								{/* <div className="flex justify-between items-center gap-3">
										<label htmlFor="priority" className=" text-gray-300">
											{("Marked As")}
										</label>
										<select name="markedAs" id="" className="!shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg px-3 py-2 text-sm   " onChange={ev => {
											var value = ev.target.value;
											setcurrentObject({ ...currentObject, markedAs: value });
										}}>
											<option value="open" selected={currentObject?.markedAs == 'open' ? "selected" : ""}>{("Open")}</option>
											<option value="closed" selected={currentObject?.markedAs == 'closed' ? "selected" : ""}>{("Closed")}</option>
											<option value="processing" selected={currentObject?.markedAs == 'processing' ? "selected" : ""}>{("Processing")}</option>
										</select>
									</div> */}






							</div>
						</div>




						<div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

							<div className="px-5 py-3  border-b border-solid border-gray-300 flex justify-between">
								<span className="text-xl">{("Categories")}</span>


							</div>

							<div className="p-4 flex flex-col  gap-4 h-[300px] overflow-y-auto">


								<TermsPicker taxonomy="ticket_cat" showCount={true} hierarchical={true} selected={currentObject?.categories} onPick={onPickCategories} />


							</div>
						</div>

						<div className="form-card rounded-xl border border-gray-200 bg-white shadow-sm ">

							<div className="px-5 py-3  border-b border-solid border-gray-300 flex justify-between">
								<span className="text-xl">{("Tags")}</span>


							</div>

							<div className="p-4 flex flex-col  gap-4">


								<div className="my-3">

									<div className="flex gap-2 items-center flex-wrap ">
										{currentObject?.tags?.map((item, index) => {

											return (
												<div className="text-sm flex items-center gap-2 !shadow-none !border !border-gray-300 transition-colors focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20 rounded-lg pl-3 pr-1 py-1 text-gray-600 transition-colors hover:border-gray-400 hover:text-gray-900 cursor-pointer">
													<div>{item}</div>
													<div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 cursor-pointer [&>svg]:size-4" onClick={ev => {
														var tags = currentObject.tags;
														tags.splice(index, 1);

														setcurrentObject({ ...currentObject, tags: tags });

													}}><IconTrash /></div>
												</div>
											)
										})}
									</div>


								</div>

								<TagsPicker taxonomy="ticket_tag" selected={currentObject?.tags} onPick={onPickTags} />


							</div>
						</div>










					</div>

				</div>

			</div>


		</div>



	);
};

export default page;
