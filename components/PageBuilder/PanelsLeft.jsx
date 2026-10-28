import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconFileDollar, IconLayoutNavbar, IconLayoutBottombar, IconLayoutSidebar, IconTableDashed, IconLayoutBoardSplitFilled, IconStack, IconX, IconCategoryPlus, IconFolders, IconShoppingBag } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import ElementsList from './ElementsList';
import PageList from './PageList';
import TemplateParts from './TemplateParts';
import Templates from './Templates';
import BlockTree from './BlockTree';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import Link from "next/link";


/*
	Tab rail styling, handed to the shared Tabs component through its class
	props. The rails here were `bg-gray-400` bars of grey-on-grey text with a
	near-black hover; they are now pill tabs on a light rail, with the brand
	purple marking the active one - the same treatment the settings panel uses,
	so the two sides of the editor read as one tool.
*/
const TAB_ITEM =
	"flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900";

const TAB_ITEM_ACTIVE = "!bg-brand !text-white shadow-sm hover:!bg-brand-600";

const TAB_RAIL = "flex gap-1 border-b border-gray-200 bg-white p-1.5";

/*
	The Assets rail holds eight tabs in a 320px panel. Wrapping them onto two
	lines was a stand-in for the scrolling affordances the rail lacked; the Tabs
	below now asks for them with `scrollableNavs`, so the tabs are back on one
	line reachable by wheel, drag or the edge buttons. `shrink-0` without `grow`
	keeps each tab at its label width instead of squeezing all eight into view.
*/
const SUBTAB_ITEM =
	"flex shrink-0 items-center justify-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900";

const SUBTAB_RAIL = "no-scrollbar flex flex-nowrap gap-1 rounded-lg bg-gray-100 p-1";


const PanelsLeft = (props) => {

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
	var selectedId = props.selectedId;
	var setSelectedId = props.setSelectedId;
	var selectedBlock = props.selectedBlock;
	var handleMoveBlock = props.handleMoveBlock;

	const [loading, setloading] = useState(false);



	function fetchPosts() {




		var postData = JSON.stringify({});
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_expenses", {
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

		fetchPosts();
	}, []);


	return (
		<div className="flex flex-col justify-between h-full">





			<Tabs activeTab={'elements'}
				orientation="horizontal"
				activeClass="active-tab "
				navsItemClass={TAB_ITEM}
				navsItemActiveClass={TAB_ITEM_ACTIVE}

				navsWrapperClass={TAB_RAIL}
				wrapperClass=""

				tabs={[
					{ label: "Elements", id: 'elements', icon: <IconCategoryPlus size={16} /> },
					{ label: "Layers", id: 'layers', icon: <IconStack size={16} /> },
					{ label: "Assets", id: 'assests', icon: <IconFolders size={16} /> },
					// { label: "Templates", id:'templates', icon: <IconFileDollar size={18} /> },


				]}>


				<Tab index={0} id='elements'>
					<ElementsList elements={elements} selectedBlock={selectedBlock} />

				</Tab>
				<Tab index={1} id='layers'>
					<BlockTree
						blocks={blocks}
						selectedId={selectedId}
						setSelectedId={setSelectedId}
						setBlocks={setBlocks}
						handleMoveBlock={handleMoveBlock}
					/>
				</Tab>
				<Tab index={2} id='assests'>


					<div className="flex flex-col gap-3 p-3">

						<Tabs activeTab={'pages'}
							orientation="horizontal"
							scrollableNavs={true}
							activeClass="active-tab "
							navsItemClass={SUBTAB_ITEM}
							navsItemActiveClass={TAB_ITEM_ACTIVE}

							navsWrapperClass={SUBTAB_RAIL}
							wrapperClass="flex flex-col gap-3"

							tabs={[
								{ label: "Pages", id: 'pages', icon: <IconTableDashed size={14} /> },
								{ label: "Templates", id: 'templates', icon: <IconFileDollar size={14} /> },
								{ label: "Headers", id: 'headers', icon: <IconLayoutNavbar size={14} /> },
								{ label: "Footers", id: 'footers', icon: <IconLayoutBottombar size={14} /> },
								{ label: "Sidebars", id: 'sidebars', icon: <IconLayoutSidebar size={14} /> },
								{ label: "Product", id: 'productTemplates', icon: <IconShoppingBag size={14} /> },
								// { label: "Invoice", id: 'orderInvoice', icon: <IconShoppingBag size={14} /> },
								// { label: "Receipt", id: 'orderReceipt', icon: <IconShoppingBag size={14} /> },


							]}>


							<Tab index={0} id='pages'>
								<PageList onLoadPage={onLoadPage} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />


							</Tab>
							<Tab index={1} id='templates'>

								{/* `elements` reaches the AI Theme tab through here: it is the
									  palette the generator writes against and the sanitiser checks
									  every generated block against. */}
								<Templates onLoadPage={onLoadPage} type={'sidebar'} elements={elements} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} handlePasteBlock={handlePasteBlock} />

							</Tab>
							<Tab index={2} id='headers'>


								<TemplateParts onLoadPage={onLoadPage} type={'header'} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />


							</Tab>
							<Tab index={3} id='footers'>


								<TemplateParts onLoadPage={onLoadPage} type={'footer'} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />


							</Tab>
							<Tab index={4} id='sidebars'>

								<TemplateParts onLoadPage={onLoadPage} type={'sidebar'} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />

							</Tab>
							<Tab index={5} id='productTemplates'>

								<TemplateParts onLoadPage={onLoadPage} type={'product'} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />

							</Tab>
							<Tab index={6} id='orderInvoice'>
								<TemplateParts onLoadPage={onLoadPage} type={'orderInvoice'} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />
							</Tab>
							<Tab index={7} id='orderReceipt'>
								<TemplateParts onLoadPage={onLoadPage} type={'orderReceipt'} blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />
							</Tab>






						</Tabs>

					</div>



					{/* {JSON.stringify(blocks)} */}


				</Tab>




			</Tabs>



		</div>
	);
};



export default PanelsLeft;
