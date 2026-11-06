"use client";
import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { IconX, IconAlertSquare, IconCheck, IconInfoCircle } from '@tabler/icons-react';
import { useCounterStore } from '../../../store/useCounterStore'
import { elementCssClasses } from "../ElementsDefinition";

/*
	The shop's notifications: the messages other blocks raise with the store's
	addNotification({ type, title, content }) - "Can't add to cart", "Coupon
	applied", "Item removed" - shown as toasts in a corner of the screen. On
	shop pages a Notify block is the only thing that shows them (the dashboard
	has its own, in GlobalFooter).
*/

export const notifyDefaults = { position: 'bottom-right', duration: 4, max: 3 };

/* Where the stack sits. With the cart drawer open (it slides in from the right), a right-hand stack moves left so the drawer does not cover it. */
const positionClasses = {
	'bottom-right': 'right-6 bottom-6',
	'bottom-left': 'left-6 bottom-6',
	'top-right': 'right-6 top-6',
	'top-left': 'left-6 top-6',
};
export const notifyPositions = { 'bottom-right': 'Bottom right', 'bottom-left': 'Bottom left', 'top-right': 'Top right', 'top-left': 'Top left' };

export function notifyPosition(position, cartOpen) {
	var p = positionClasses[position] ? position : notifyDefaults.position;
	if (cartOpen && p.endsWith('right')) p = p.replace('right', 'left');
	return { classes: positionClasses[p], fromLeft: p.endsWith('left') };
}

/* "warnning" is the old spelling the renderer checked for; nothing raises it, but it is still accepted. */
function toastType(type) {
	if (type === 'warnning') return 'warning';
	return ['success', 'error', 'warning'].includes(type) ? type : 'info';
}

const typeIcons = { success: IconCheck, error: IconX, warning: IconAlertSquare, info: IconInfoCircle };

/*
	The toasts' markup, shared with the builder preview (Notify.jsx): a `*`
	stack of `item`s, each with the `success` / `error` / `warning` / `info`
	classes of its type, an `icon`, the `title`, the `content` and a `close`
	button. content keeps rendering as HTML: one message ("Item removed") bolds
	the product's name with it.
*/
export function NotifyMarkup({ cls, id, type, toasts, onDismiss, fromLeft = false, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{toasts.map((item) => {
				var kind = toastType(item?.type);
				var Icon = typeIcons[kind];
				return (
					<div key={item.key} role={kind === 'error' ? 'alert' : 'status'} className={`animate__animated ${fromLeft ? 'animate__fadeInLeft' : 'animate__fadeInRight'} ${cls('item')} ${cls(kind)}`}>
						<button type="button" aria-label="Close" className={cls('close')} onClick={(ev) => { ev.stopPropagation(); onDismiss?.(item.key); }}>
							<IconX size={16} />
						</button>
						<div className="flex items-center gap-3">
							<div className={cls('icon')}><Icon size={20} /></div>
							<div className={cls('title')}>{item?.title}</div>
						</div>
						{item?.content ? <div className={cls('content')} dangerouslySetInnerHTML={{ __html: item.content }} /> : null}
					</div>
				);
			})}
		</div>
	);
}

/*
	Shows each notification as it is added, for options.duration seconds
	(each with its own timer), at most options.max at once (the oldest goes
	first). It used to show only the latest one, for one second, and an older
	timer could hide a newer toast early; it also reshowed the last message
	when the block mounted. Messages raised before the block mounted are not
	shown.
*/
const NotifyView = (props) => {

	const { cartToggle, notifications } = useCounterStore()

	/* A key the block lacks falls back to the notify defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('notify', props?.cssSelectors);

	var options = props?.options ?? {};
	var duration = Math.max(1, Number(options?.duration) || notifyDefaults.duration) * 1000;
	var max = Math.max(1, parseInt(options?.max, 10) || notifyDefaults.max);

	var [toasts, setToasts] = useState([]);
	var seen = useRef(Array.isArray(notifications) ? notifications.length : 0);
	var timers = useRef(new Map());
	var nextKey = useRef(0);

	function dismiss(key) {
		clearTimeout(timers.current.get(key));
		timers.current.delete(key);
		setToasts(list => list.filter(t => t.key !== key));
	}

	useEffect(() => {
		var list = Array.isArray(notifications) ? notifications : [];
		/* The store's list was cleared (resetNotification): start counting again. */
		if (list.length < seen.current) seen.current = 0;
		var added = list.slice(seen.current);
		seen.current = list.length;
		if (added.length < 1) return;

		var fresh = added.map(item => ({ ...item, key: ++nextKey.current }));
		fresh.forEach(t => timers.current.set(t.key, setTimeout(() => dismiss(t.key), duration)));
		setToasts(current => {
			var next = [...current, ...fresh];
			next.slice(0, Math.max(0, next.length - max)).forEach(t => { clearTimeout(timers.current.get(t.key)); timers.current.delete(t.key); });
			return next.slice(-max);
		});
	}, [notifications]);

	useEffect(() => () => { timers.current.forEach(clearTimeout); timers.current.clear(); }, []);

	if (toasts.length < 1) return null;

	var { classes, fromLeft } = notifyPosition(options?.position, cartToggle);

	return <NotifyMarkup cls={cls} id={props?.id} type={props?.type} toasts={toasts} onDismiss={dismiss} fromLeft={fromLeft} rootClassName={`fixed z-50 ${classes}`} />;
};

NotifyView.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default NotifyView;
