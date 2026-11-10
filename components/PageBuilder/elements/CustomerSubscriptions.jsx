'use client'

import PropTypes from "prop-types";
import React from "react";
import { IconRepeat, IconCalendarEvent } from "@tabler/icons-react";
import { StatusBadge } from './accountUi';
import { describeInterval } from './CustomerSubscriptionsView';
import { elementCssClasses } from "../ElementsDefinition";
import { editorRelative } from '../editorPosition';

/* Sample subscriptions for the canvas: the builder never fetches a customer's real ones. */
const sampleSubscriptions = [
	{ id: 208, interval: 'month', count: 1, orderId: 1017, status: 'active', started: '18 Oct 2026', next: '18 Nov 2026', total: '৳ 640' },
	{ id: 191, interval: 'week', count: 2, orderId: 984, status: 'paused', started: '2 Sep 2026', next: '—', total: '৳ 1,180' },
];

/*
	Builder (canvas) preview of the customer's subscriptions.

	It mirrors CustomerSubscriptionsView's markup with sample subscriptions,
	and reads the same cssSelectors keys with the same defaults from
	ElementsDefinition.js, so styles edited in the builder show here exactly
	as on the storefront. It never fetches or changes anything: the old
	builder version called get_subscriptions and delete_subscriptions from
	the canvas.
*/
const CustomerSubscriptions = (props) => {

	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var cssSelectors = props?.cssSelectors ?? {};
	var cls = elementCssClasses('customerSubscriptions', cssSelectors);
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
						<h3 className={cls('title')}>Subscriptions</h3>
						<span className={cls('count')}>{sampleSubscriptions.length} subscriptions</span>
					</div>
				)}

				<ul className={cls('list')}>
					{sampleSubscriptions.map(subscription => (
						<li key={subscription.id} className={cls('subscription')}>

							<div className={cls('subscription-header')}>
								<div className={cls('subscription-heading')}>
									<span className={cls('subscription-icon')}>
										<IconRepeat size={20} />
									</span>
									<div>
										<div className={cls('subscription-number')}>Subscription #{subscription.id}</div>
										<div className={cls('subscription-schedule')}>
											{describeInterval(subscription.interval, subscription.count)} · from order #{subscription.orderId}
										</div>
									</div>
								</div>
								<StatusBadge value={subscription.status} />
							</div>

							<dl className={cls('details')}>
								<div className={cls('detail')}>
									<dt className={cls('detail-label')}>Started</dt>
									<dd className={cls('detail-value')}>{subscription.started}</dd>
								</div>
								<div className={cls('detail')}>
									<dt className={cls('detail-label')}><IconCalendarEvent size={12} /> Next delivery</dt>
									<dd className={cls('detail-value')}>{subscription.next}</dd>
								</div>
								<div className={cls('detail-total')}>
									<dt className={cls('detail-label')}>Each delivery</dt>
									<dd className={cls('total-value')}>{subscription.total}</dd>
								</div>
							</dl>

						</li>
					))}
				</ul>

			</div>
		</div>
	);
};

CustomerSubscriptions.propTypes = {
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

export default CustomerSubscriptions;
