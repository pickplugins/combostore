import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconFileInvoice, IconFileDots, IconBrowserPlus, IconCopy, IconTrash, IconClipboard, IconPaintFilled, IconEyeShare, IconDeviceFloppy } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import PopoverButton from '../../components/PopoverButton';
import Spinner from '../../components/Spinner';
import Link from 'next/link';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import DropDown from "../../components/DropDown";
import ToggleContent from '../../components/ToggleContent';



import templates from './templates'


const TemplatesLibrary = (props) => {


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

	var [includeHeaderFooter, setincludeHeaderFooter] = useState(false);
	var [library, setlibrary] = useState(templates);
	var [libraryCategory, setlibraryCategory] = useState('Organic');



	// useEffect(() => {



	// 	if (libraryCategory == 'Blog') {
	// 		setlibrary(Blog)
	// 	}
	// 	if (libraryCategory == 'Organic') {
	// 		setlibrary(Organic)
	// 	}


	// }, [libraryCategory]);




	async function create_template(templateData) {





		var postData = JSON.stringify(templateData);

		console.log(postData);



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

						console.log(res);


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

						//get_templates();





					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}

	const HEADER_CLASSES =
		"flex w-full text-sm cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5 transition-colors hover:bg-gray-100 select-none";

	const CONTENT_CLASSES =
		"mt-1.5 rounded-lg border border-gray-200 bg-white p-3";



	return (
		<div className="flex flex-col gap-5 py-5">



			<div className="grid grid-cols-1 gap-5">



				<div>

					{/* <DropDown
						className="!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
						label="Choose Class"
						labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'}
						value={libraryCategory}
						options={fullPageGroups}
						allowSearch={true}
						onOptionsChoose={(args) => {



							setlibraryCategory(args.value);
						}}
					/> */}
				</div>

				<div>

					<label htmlFor="includeHeaderFooter" className="flex gap-3 cursor-pointer">
						<input type="checkbox" name="" id="includeHeaderFooter" onChange={ev => {

							var { checked, name } = ev.target;

							console.log(checked);
							setincludeHeaderFooter(checked)

						}} />
						<span>Include Header & Footer</span>
					</label>

				</div>

				{library.map(template => {


					return (

						<div
							className="cursor-pointer border rounded-sm p-3 flex flex-col gap-3"
						>

							<div>{template.name}</div>

							<div className="flex gap-3 items-center text-sm">


								<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
									onClick={ev => {


										console.log(template);


										create_template(template);
										// setBlocks([...blocks, ...content])


									}} >
									{loading && ('Installing...')}
									{!loading && ('Install')}

								</div>

							</div>
							<ToggleContent iconPosition='left' title={`Pages`} headerClass={HEADER_CLASSES} headerTitleClass={`flex justify-between w-full items-center gap-2`} contentClass={CONTENT_CLASSES}>
								<div className="flex flex-col gap-2">

									{template?.pages.map(page => {


										return (

											<div className={`rounded-md border border-gray-200 bg-white px-2 py-1 text-[11px] text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700`} onClick={ev => {

												// console.log(template?.pages);

												const headerPage = template?.pages.find(item => item.type === 'header');
												const footerPage = template?.pages.find(item => item.type === 'footer');

												var content = page.content
												var header = headerPage.content
												var footer = footerPage.content

												// console.log([...header, ...content, ...footer]);

												if (includeHeaderFooter) {
													setBlocks([...header, ...content, ...footer])

												} else {
													setBlocks(content)
												}

												// setBlocks(content)
												//addNotification({ type: 'success', title: 'Content Loaded', content: `Page laoded success` })

											}}>

												{page.title}

											</div>

										)

									})}

								</div>
							</ToggleContent>



						</div>

					)

				})}

			</div>






		</div>
	);
};



export default TemplatesLibrary;
