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

import LandingPages from './ready-layouts/LandingPages'
import ProductPage from './ready-layouts/ProductPage'
import Hero from './ready-layouts/Hero'

import Blog from './ready-layouts/FullPage/Blog'
import Organic from './ready-layouts/FullPage/Organic'


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
	var [layouts, setlayouts] = useState([]);
	var [layoutGroup, setlayoutGroup] = useState('ProductGrids');

	var [fullpages, setfullpages] = useState([]);
	var [fullpagesGroup, setfullpagesGroup] = useState('Organic');





	var layoutsGroups = {

		Hero: { label: 'Hero', value: 'Hero' },
		Headers: { label: 'Headers', value: 'Headers' },
		Footers: { label: 'Footers', value: 'Footers' },
		// { label: 'Sidebar', value: 'sidebar' },
		CategoryGrids: { label: 'Category Grid', value: 'CategoryGrids' },
		ProductPage: { label: 'Product Page', value: 'ProductPage' },
		ProductGrids: { label: 'Product Grid', value: 'ProductGrids' },
		// { label: 'Product Slider', value: 'product_slider' },
		// { label: 'Blog Grid', value: 'blog_grid' },
		Featurebox: { label: 'Featurebox', value: 'Featurebox' },

	}
	var fullPageGroups = [
		{ label: 'Organic', value: 'Organic' },
		{ label: 'Blog', value: 'Blog' },


	]






	useEffect(() => {




		if (layoutGroup == 'ProductPage') {
			setlayouts(ProductPage)
		}
		if (layoutGroup == 'Hero') {
			setlayouts(Hero)
		}

	}, [layoutGroup]);

	useEffect(() => {

		console.log(LandingPages);


		if (fullpagesGroup == 'Blog') {
			setfullpages(Blog)
		}
		if (fullpagesGroup == 'Organic') {
			setfullpages(Organic)
		}


	}, [fullpagesGroup]);







	return (
		<div className="flex flex-col gap-5 py-5">



			<Tabs activeTab={'fullpages'}
				orientation="horizontal"
				activeClass="active-tab "
				navsItemClass="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
				navsItemActiveClass="!bg-brand !text-white shadow-sm hover:!bg-brand-600"

				navsWrapperClass="flex gap-1 rounded-lg bg-gray-100 p-1 mb-3"
				wrapperClass=" gap-5"

				tabs={[
					{ label: "Full pages", id: 'fullpages', icon: <IconFileInvoice size={18} /> },
					{ label: "Sections", id: 'sections', icon: <IconFileDots size={18} /> },


				]}>


				<Tab index={0} id='fullpages'>

					<div className="grid grid-cols-1 gap-5">



						<div>

							<DropDown
								className="!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
								label="Choose Class"
								labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'}
								value={fullpagesGroup}
								options={fullPageGroups}
								allowSearch={true}
								onOptionsChoose={(args) => {



									setfullpagesGroup(args.value);
								}}
							/>
						</div>


						{fullpages.map(item => {


							return (

								<div
									className="cursor-pointer border rounded-sm p-3 flex flex-col gap-3"
								>

									<div>{item.title}</div>

									<div className="flex gap-3 items-center text-sm">


										<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
											onClick={ev => {


												var content = item?.content

												handlePasteBlock(content);
												// setBlocks([...blocks, ...content])


											}} > Add</div>

									</div>
								</div>

							)

						})}

					</div>

				</Tab>
				<Tab index={1} id='sections'>

					<div className="grid grid-cols-1 gap-5">


						<div>

							<DropDown
								className="!rounded-lg !border !border-gray-300 !bg-white !px-2.5 !py-1.5 !text-xs !text-gray-700 !shadow-none !outline-none transition-colors focus:!border-brand focus:!ring-4 focus:!ring-brand/10"
								label="Choose Class"
								labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'}
								value={layoutGroup}
								options={layoutsGroups}
								allowSearch={true}
								onOptionsChoose={(args) => {

									console.log(args);




									setlayoutGroup(args.value);
								}}
							/>
						</div>


						{layouts.map(item => {


							return (

								<div
									className="cursor-pointer border rounded-sm p-3 flex flex-col gap-3"
								>

									<div>{item.title}</div>

									<div className="flex gap-3 items-center text-sm">


										<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit"
											onClick={ev => {


												var content = item?.content

												handlePasteBlock(content);
												// setBlocks([...blocks, ...content])


											}} > Add</div>

									</div>
								</div>

							)

						})}

					</div>

				</Tab>






			</Tabs>







		</div>
	);
};



export default Templates;
