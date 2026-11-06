'use client'

import PropTypes from "prop-types";
import React from "react";
import { elementCssClasses } from "../ElementsDefinition";

/* Sample details for the canvas: the builder never fetches a customer's real profile. */
const sampleRows = [
	{ label: 'Name', value: 'Customer name' },
	{ label: 'Email', value: 'customer@example.com' },
	{ label: 'Phone', value: '01712345678' },
	{ label: 'Address', value: 'House 12, Road 4, Dhanmondi, Dhaka' },
];

/*
	Builder (canvas) preview of the customer's profile.

	It mirrors CustomerProfileView's markup with sample details, and reads the
	same cssSelectors keys with the same defaults from ElementsDefinition.js,
	so styles edited in the builder show here exactly as on the storefront.
	The delivery location row shows the "not added" state, so empty-value can
	be styled too.
*/
const CustomerProfile = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('customerProfile', cssSelectors);
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId

	var options = props?.options;
	var id = props?.id;
	var index = props?.index

	return (
		<div
			draggable
			id={id}
			className={` ${cls('*')}  hover:outline-orange-200 hover:outline-solid hover:outline-1 relative   ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''}
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
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>

			<div className={cls('panel')}>

				{!options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Your profile</h3>
					</div>
				)}

				<div className={cls('card')}>
					<dl className={cls('details')}>

						{sampleRows.map(row => (
							<div key={row.label} className={cls('row')}>
								<dt className={cls('label')}>{row.label}</dt>
								<dd className={cls('value')}>{row.value}</dd>
							</div>
						))}

						<div className={cls('row')}>
							<dt className={cls('label')}>Delivery location</dt>
							<dd className={cls('empty-value')}>Not added yet</dd>
						</div>

					</dl>
				</div>

			</div>
		</div>
	);
};

CustomerProfile.propTypes = {
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CustomerProfile;
