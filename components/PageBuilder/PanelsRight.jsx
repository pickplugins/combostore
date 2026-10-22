import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconFileDollar, IconCheckbox, IconSquare, IconStackBackward, IconTrash, IconCopy, IconCopyCheckFilled, IconX, IconAdjustmentsHorizontal, IconLayoutGrid, IconClick } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';
import { useDraggable } from '@dnd-kit/react';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import ElementOptions from './ElementOptions';
import ElementLayouts from './ElementLayouts';
import TemplatePartsEdit from './TemplatePartsEdit';
import ElementStyles from './ElementStyles';
import HeadingOptions from './elements/HeadingOptions';
import ReadyLayouts from './ReadyLayouts';


/* Global CSS styles `button` unlayered, so it beats Tailwind utilities and
   these overrides have to be important to land. */
const ACTION_BUTTON =
	"inline-flex h-8 w-8 items-center justify-center !rounded-lg !border !border-gray-200 !bg-white !px-0 !py-0 !text-gray-500 !shadow-none transition-colors hover:!border-gray-300 hover:!bg-gray-100 hover:!text-gray-900";

/* Passed into the shared Tabs component, which styles its rail entirely from
   these two props. */
const PANEL_TAB =
	"flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900";

const PANEL_TAB_ACTIVE = "!bg-brand !text-white shadow-sm hover:!bg-brand-600";


const PanelsRight = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, paymentGateways, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var selectedBlock = props?.selectedBlock;
	var deleteBlock = props?.deleteBlock;
	var duplicateBlock = props?.duplicateBlock;
	var handlePasteBlock = props?.handlePasteBlock;
	var handleReplaceBlock = props?.handleReplaceBlock;
	var updateBlock = props?.updateBlock;
	var handleMoveBlock = props?.handleMoveBlock;
	var pageData = props?.pageData;
	var setpageData = props?.setpageData;
	var blocks = props?.blocks;
	var setBlocks = props?.setBlocks;
	var elements = props?.elements;



	const [loading, setloading] = useState(false);



	function copy_block() {


		const data = JSON.stringify(selectedBlock);

		console.log(data);


		//localStorage.setItem('combo_copied_blocks', data);
		navigator.clipboard.writeText(data);
		addNotification({ type: 'success', title: 'Copy done', content: `Blocks copied.` })
	}

	// useEffect(() => {

	// 	fetchPosts();
	// }, []);

	const pasteBlock = async () => {
		try {
			const text = await navigator.clipboard.readText();
			const clipboardData = JSON.parse(text);

			handlePasteBlock(clipboardData);
		} catch (error) {
			console.error("Invalid clipboard block:", error);
		}
	};


	/*
		EditorActions used to render from here, which put the page-level toolbar
		(home, save, reset, AI) inside the 300px panel that is otherwise entirely
		about the current selection. It is the editor's top bar now and is
		mounted by PageBuilder, so this panel has one job.
	*/
	return (
		<div className="flex min-h-full flex-col pb-10">


			{/* {pageData && (
				<TemplatePartsEdit blocks={blocks} setBlocks={setBlocks} pageData={pageData} setpageData={setpageData} />
			)} */}


			{/* The panel used to be a blank grey slab until something was
			    selected, with no hint that selecting was the thing to do. */}
			{!selectedBlock && (
				<div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
					<span className="text-gray-300">
						<IconClick size={32} stroke={1.5} />
					</span>
					<div className="text-sm font-medium text-gray-600">{("Nothing selected")}</div>
					<p className="text-xs leading-relaxed text-gray-400">
						{("Pick a block on the canvas, or in the Layers panel, to edit its options and layout.")}
					</p>
				</div>
			)}

			{selectedBlock && (


				<div className="">
					<div className="flex flex-col gap-3 border-b border-gray-200 bg-gray-50 p-3">

						<div className="flex min-w-0 items-center gap-2">

							<span className="truncate text-sm font-semibold capitalize text-gray-900">{selectedBlock?.type}</span>
							<span
								title={selectedBlock?.id}
								className="shrink-0 rounded border border-gray-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-gray-500">
								#{selectedBlock?.id}
							</span>
						</div>

						{/* Were `<div onClick>`: not focusable, not announced, and
						    Delete sat next to Duplicate with nothing to tell them
						    apart but icon colour. */}
						<div className="flex items-center gap-1.5">

							<button type="button" title="Duplicate" aria-label="Duplicate block" className={ACTION_BUTTON} onClick={ev => {
								duplicateBlock()
							}}>
								<IconCopyCheckFilled size={16} />
							</button>

							<button type="button" title="Copy" aria-label="Copy block" className={ACTION_BUTTON} onClick={ev => {
								copy_block()
							}}>
								<IconCopy size={16} />
							</button>

							<button type="button" title="Paste after" aria-label="Paste after block" className={ACTION_BUTTON} onClick={ev => {
								pasteBlock()

							}}>
								<IconStackBackward size={16} />
							</button>

							<button type="button" title="Delete" aria-label="Delete block" className={`${ACTION_BUTTON} ml-auto hover:!border-red-200 hover:!bg-red-50 hover:!text-red-600`} onClick={ev => {
								deleteBlock()
							}}>
								<IconTrash size={16} />
							</button>
						</div>



					</div>


					<Tabs activeTab={'options'}
						orientation="horizontal"
						activeClass="active-tab "
						navsItemClass={PANEL_TAB}
						navsItemActiveClass={PANEL_TAB_ACTIVE}

						navsWrapperClass="flex gap-1 border-b border-gray-200 bg-white p-1.5"
						wrapperClass=""

						tabs={[
							{ label: "Options", id: 'options', icon: <IconAdjustmentsHorizontal size={16} /> },
							{ label: "Layouts", id: 'layouts', icon: <IconLayoutGrid size={16} /> },

						]}>


						<Tab index={0} id='options'>
							<ElementOptions handleMoveBlock={handleMoveBlock} selectedBlock={selectedBlock} deleteBlock={deleteBlock} duplicateBlock={duplicateBlock} updateBlock={updateBlock} />
						</Tab>
						<Tab index={1} id='layouts'>

							<ElementLayouts selectedBlock={selectedBlock} updateBlock={updateBlock} handlePasteBlock={handlePasteBlock} handleReplaceBlock={handleReplaceBlock} />


						</Tab>



					</Tabs>
				</div>

			)}



			{/* {JSON.stringify(pageData)} */}


		</div>
	);
};



export default PanelsRight;
