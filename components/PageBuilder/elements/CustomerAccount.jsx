'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconPlus, IconLogout } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { elementCssClasses } from "../ElementsDefinition";
import { editorRelative } from '../editorPosition';

/*
	Builder (canvas) preview of the account area.

	It mirrors CustomerAccountView: a welcome card, then the child blocks. The
	storefront shows the card only to a signed-in customer; here it always
	shows (unless options.hideWelcome is set), with sample details, so it can
	be styled. It reads the same cssSelectors keys with the same defaults from
	ElementsDefinition.js.
*/
const CustomerAccount = (props) => {

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('customerAccount', cssSelectors);
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var handleMoveBlock = props?.handleMoveBlock

	var options = props?.options;
	var id = props?.id;
	var index = props?.index

	const children = props?.children || [];

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");

		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<div
			draggable
			id={id}
			className={` ${cls('*')}  hover:outline-orange-200 hover:outline-solid hover:outline-1 ${editorRelative(cls('*'))}   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
				${selectedId === id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}
			`}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId !== id ? id : null);
			}}
			onDragStart={(e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}
			onDragOver={onDragOver}
			onDrop={onDrop}
		>

			{!options?.hideWelcome && (
				<div className={cls('welcome')} title="Shown to signed-in customers">

					<div className={cls('welcome-profile')}>
						<div className={cls('avatar')}>
							<span className={cls('avatar-initial')}>C</span>
						</div>

						<div className={cls('welcome-text')}>
							<div className={cls('welcome-greeting')}>Welcome back,</div>
							<div className={cls('welcome-name')}>Customer name</div>
							<div className={cls('welcome-email')}>customer@example.com</div>
						</div>
					</div>

					{/* type="button" with no handler, so a click only selects the block. */}
					<button type="button" className={cls('logout-button')}>
						<IconLogout size={16} />
						Log out
					</button>

				</div>
			)}

			{children.length > 0 ? (
				children.map((child, idx) => (
					<BlockPreview
						key={child.id}
						index={`${index}-${idx}`}
						block={child}
						draggingBlock={draggingBlock}
						dragOverIndex={dragOverIndex}
						setDragOverIndex={setDragOverIndex}
						setDraggingBlock={setDraggingBlock}
						setSelectedId={setSelectedId}
						selectedId={selectedId}
						handleMoveBlock={handleMoveBlock}
					/>
				))
			) : (
				<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
					<IconPlus size={24} stroke={1.5} />
					<span className="text-xs mt-1">Empty Customer Account - Drop elements here</span>
				</div>
			)}
		</div>
	);
};

CustomerAccount.propTypes = {
	block: PropTypes.object,
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	handleDropInto: PropTypes.func,
};

export default CustomerAccount;
