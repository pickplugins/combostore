'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconPackage } from "@tabler/icons-react";
import { StatusBadge } from './accountUi';
import { elementCssClasses } from "../ElementsDefinition";
import { editorRelative } from '../editorPosition';

/* Sample orders for the canvas: the builder never fetches a customer's real ones. */
const sampleOrders = [
	{ id: 1042, date: '2 Nov 2026', status: 'processing', items: [{ name: 'Organic honey 500g', quantity: 2 }, { name: 'Mustard oil 1L', quantity: 1 }, { name: 'Basmati rice 5kg', quantity: 1 }], more: 2, payment: 'Cash on delivery', paymentStatus: 'unpaid', total: '৳ 2,350' },
	{ id: 1017, date: '18 Oct 2026', status: 'completed', items: [{ name: 'Green tea, 100 bags', quantity: 1 }], more: 0, payment: 'bKash', paymentStatus: 'paid', total: '৳ 640' },
];

/*
	Builder (canvas) preview of the customer's order list.

	It mirrors CustomerOrdersView's markup with sample orders, and reads the
	same cssSelectors keys with the same defaults from ElementsDefinition.js,
	so styles edited in the builder show here exactly as on the storefront.
	The empty, loading and error states come from accountUi and are not
	styled through this block.
*/
const CustomerOrders = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('customerOrders', cssSelectors);
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId

	var options = props?.options;
	var id = props?.id;
	var index = props?.index

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
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>

			<div className={cls('panel')}>

				{!options?.hideTitle && (
					<div className={cls('header')}>
						<h3 className={cls('title')}>Your orders</h3>
						<span className={cls('count')}>{sampleOrders.length} orders</span>
					</div>
				)}

				<ul className={cls('list')}>
					{sampleOrders.map(order => (
						<li key={order.id} className={cls('order')}>

							<div className={cls('order-header')}>
								<div className={cls('order-heading')}>
									<span className={cls('order-icon')}>
										<IconPackage size={20} />
									</span>
									<div>
										<div className={cls('order-number')}>Order #{order.id}</div>
										<div className={cls('order-date')}>{order.date}</div>
									</div>
								</div>
								<StatusBadge value={order.status} />
							</div>

							<ul className={cls('items')}>
								{order.items.map(item => (
									<li key={item.name} className={cls('item')}>
										<span className={cls('item-name')}>{item.name}</span>
										<span className={cls('item-quantity')}>× {item.quantity}</span>
									</li>
								))}
								{order.more > 0 && (
									<li className={cls('items-more')}>+{order.more} more items</li>
								)}
							</ul>

							<div className={cls('order-footer')}>
								<div className={cls('payment')}>
									<span>{order.payment}</span>
									<span aria-hidden="true">·</span>
									<span>Payment {order.paymentStatus}</span>
								</div>
								<div className={cls('order-total')}>{order.total}</div>
							</div>

						</li>
					))}
				</ul>

			</div>
		</div>
	);
};

CustomerOrders.propTypes = {
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

export default CustomerOrders;
