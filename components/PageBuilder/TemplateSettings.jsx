import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconCircleCheck, IconFileTypography, IconBrowserPlus, IconCopy, IconX, IconListDetails, IconPaintFilled, IconEyeShare, IconServerCog } from "@tabler/icons-react";
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


const TemplateSettings = (props) => {


	var type = props?.type;

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()



	var [templateData, settemplateData] = useState(props?.templateData);






	var meta = templateData?.meta ?? {}









	return (
		<div className="flex flex-col gap-5 p-5">



			<Tabs activeTab={'colors'}
				orientation="horizontal"
				activeClass="active-tab "
				navsItemClass="flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
				navsItemActiveClass="!bg-brand !text-white shadow-sm hover:!bg-brand-600"

				navsWrapperClass="flex gap-1 rounded-lg bg-gray-100 p-1 mb-3"
				wrapperClass=" gap-5"

				tabs={[
					{ label: "Colors", id: 'colors', icon: <IconServerCog /> },
					{ label: "Fonts", id: 'fonts', icon: <IconFileTypography /> },


				]}>


				<Tab index={0} id='colors'>

					<div className="flex flex-col gap-5">

						<div className="flex gap-5 items-center">
							<div className="w-48">Primary</div>
							<div>
								<input className="" type="text" placeholder="Name" value={''} onChange={ev => {

									var value = ev.target.value;

									//setnewPage({ ...newPage, name: value })
								}} />
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div className="w-48">Secondary</div>
							<div>
								<input className="" type="text" placeholder="Name" value={''} onChange={ev => {

									var value = ev.target.value;

									//setnewPage({ ...newPage, name: value })
								}} />
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div className="w-48">Primary</div>
							<div>
								<input className="" type="text" placeholder="Name" value={''} onChange={ev => {

									var value = ev.target.value;

									//setnewPage({ ...newPage, name: value })
								}} />
							</div>
						</div>
						<div className="flex gap-5 items-center">
							<div className="w-48">Background</div>
							<div>
								<input className="" type="text" placeholder="Name" value={''} onChange={ev => {

									var value = ev.target.value;

									//setnewPage({ ...newPage, name: value })
								}} />
							</div>
						</div>









					</div>

				</Tab>
				<Tab index={1} id='fonts'>



					<div className="flex flex-col gap-5">

						<div onClick={ev => {
							var metaX = { ...templateData.meta }

							var fontsX = metaX?.fonts ?? []

							fontsX.push({ family: '', src: '', weight: "", style: '', display: '', stretch: '' })

							metaX.fonts = fontsX;

							console.log(templateData);


							settemplateData({ ...templateData, meta: metaX })


						}} className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit">Add

						</div>

						{templateData?.meta?.fonts?.map((font, fontIndx) => {

							return (

								<div className="flex flex-col gap-2 bg-gray-200 p-2 rounded-sm">

									<div onClick={ev => {
										var metaX = { ...templateData.meta }

										metaX.fonts.splice(fontIndx, 1)
										settemplateData({ ...templateData, meta: metaX })

									}} className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-gray-400 cursor-pointer transition-colors hover:bg-red-50 hover:text-red-600">

										<IconX />

									</div>


									<div className="flex gap-5 items-center">
										<div className="w-48">Family</div>
										<div>
											<input className="" type="text" placeholder="family" value={font?.family} onChange={ev => {

												var value = ev.target.value;
												var metaX = { ...templateData.meta }

												metaX.fonts[fontIndx].family = value


												settemplateData({ ...templateData, meta: metaX })
											}} />
										</div>
									</div>
									<div className="flex gap-5 items-center">
										<div className="w-48">Weight</div>
										<div>
											<input className="" type="text" placeholder="weight" value={font?.weight} onChange={ev => {

												var value = ev.target.value;

												//setnewPage({ ...newPage, name: value })
											}} />
										</div>
									</div>
									<div className="flex gap-5 items-center">
										<div className="w-48">Style</div>
										<div>
											<input className="" type="text" placeholder="style" value={font?.style} onChange={ev => {

												var value = ev.target.value;

												//setnewPage({ ...newPage, name: value })
											}} />
										</div>
									</div>
									<div className="flex gap-5 items-center">
										<div className="w-48">Display</div>
										<div>
											<input className="" type="text" placeholder="display" value={font?.display} onChange={ev => {

												var value = ev.target.value;

												//settemplateData({ ...newPage, name: value })
											}} />
										</div>
									</div>




								</div>

							)

						})}



					</div>

					{JSON.stringify(templateData.meta)}


				</Tab>






			</Tabs>

			<div className="flex justify-end">

				<div className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1.5 text-xs font-medium text-gray-500 cursor-pointer transition-colors hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 cursor-pointer flex px-5 py-2 w-fit">Update Settings</div>

			</div>


		</div>
	);
};



export default TemplateSettings;
