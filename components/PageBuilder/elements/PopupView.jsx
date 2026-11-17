'use client'

import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import 'animate.css';
import BlockRender from '../BlockRender';
import { tablerIcon } from "@/components/icons/TablerIcon";
import { elementCssClasses } from "../ElementsDefinition";
import { OPEN_TRIGGERS } from "./popupTriggers";
import { COUNTDOWN_EXPIRED_EVENT } from "./CountdownTimerView";

/*
	The popup on the shop. Rendered in place but hidden (display: none, so
	its content is in the page for search engines) until one of its open
	triggers fires - see popupTriggers.js for the list, ported from the
	combo-blocks popup block. Any one trigger opens it; any close trigger,
	the close button, Escape or an element inside with the class
	`popup-close` (or a data-popup-close attribute) closes it.

	"Show again" (options.showAgain) limits the page's own offers - load,
	delay, scroll, exit intent... - per browser: "always" (every page view),
	"session", "days" (options.showAgainDays) or "never" (once ever). A
	visitor's explicit asks - clicking a button set up as a trigger, a key -
	always open it.

	The countdown trigger listens for the `combostore:countdown-expired`
	window event CountdownTimerView sends when a timer reaches zero.
*/

export { COUNTDOWN_EXPIRED_EVENT };

const STORAGE_PREFIX = 'cs-popup:';
const ANIMATION_FALLBACK_MS = 1200;

/* Wrapper placement per options.position. The wrapper covers the viewport; these place the dialog in it. */
export const POPUP_POSITIONS = {
	center: 'items-center justify-center',
	top: 'items-start justify-center',
	bottom: 'items-end justify-center',
	'top-left': 'items-start justify-start',
	'top-right': 'items-start justify-end',
	'bottom-left': 'items-end justify-start',
	'bottom-right': 'items-end justify-end',
	left: 'items-stretch justify-start',
	right: 'items-stretch justify-end',
};

/* Safe selector helpers: a merchant's typo must not break the page. */
function closestMatch(target, selector) {
	if (!selector || !target?.closest) return null;
	try { return target.closest(selector); } catch (e) { return null; }
}
function queryFirst(selector) {
	if (!selector) return null;
	try { return document.querySelector(selector); } catch (e) { return null; }
}

function scrollPercent() {
	var el = document.documentElement;
	var max = el.scrollHeight - el.clientHeight;
	return max > 0 ? Math.round((window.scrollY / max) * 100) : 100;
}

function hasCookie(name) {
	if (!name) return false;
	return document.cookie.split(';').some(part => part.trim().split('=')[0] === name.trim());
}

/* Frequency: may the page's own triggers show this popup now? */
function storageKey(id) { return `${STORAGE_PREFIX}${id}`; }

function allowedByFrequency(id, options) {
	var mode = options?.showAgain ?? 'always';
	if (mode === 'always') return true;
	try {
		if (mode === 'session') return !window.sessionStorage.getItem(storageKey(id));
		var shownAt = parseInt(window.localStorage.getItem(storageKey(id)), 10);
		if (!Number.isFinite(shownAt)) return true;
		if (mode === 'never') return false;
		var days = Math.max(0, Number(options?.showAgainDays) || 0);
		return Date.now() - shownAt >= days * 86400000;
	} catch (e) {
		return true;
	}
}

function recordShown(id, options) {
	var mode = options?.showAgain ?? 'always';
	if (mode === 'always') return;
	try {
		if (mode === 'session') window.sessionStorage.setItem(storageKey(id), '1');
		else window.localStorage.setItem(storageKey(id), String(Date.now()));
	} catch (e) { /* storage blocked: it just shows again */ }
}

/*
	The open / close state machine and every trigger listener. `phase` is
	'closed' | 'open' | 'closing'. Returns what the markup needs.
*/
export function usePopup(id, options) {
	var [phase, setphase] = useState('closed');
	var phaseRef = useRef('closed');
	var offeredRef = useRef(false);
	var returnFocusRef = useRef(null);
	var dialogRef = useRef(null);
	var closeTimerRef = useRef(null);

	var setPhase = (next) => { phaseRef.current = next; setphase(next); };

	var open = useCallback((explicit) => {
		if (phaseRef.current === 'open') return;
		if (!explicit) {
			if (offeredRef.current || !allowedByFrequency(id, options)) return;
			offeredRef.current = true;
		}
		clearTimeout(closeTimerRef.current);
		recordShown(id, options);
		returnFocusRef.current = document.activeElement;
		setPhase('open');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, options?.showAgain, options?.showAgainDays]);

	var close = useCallback(() => {
		if (phaseRef.current !== 'open') return;
		var animation = options?.closeAnimation ?? 'fadeOut';
		var finish = () => {
			clearTimeout(closeTimerRef.current);
			setPhase('closed');
			try { returnFocusRef.current?.focus?.(); } catch (e) { /* element gone */ }
		};
		if (!animation || animation === 'none') { finish(); return; }
		setPhase('closing');
		closeTimerRef.current = setTimeout(finish, ANIMATION_FALLBACK_MS);
		dialogRef.current?.addEventListener('animationend', finish, { once: true });
	}, [options?.closeAnimation]);

	/* Open triggers. */
	var triggersKey = JSON.stringify(options?.triggers ?? []);
	useEffect(() => {
		var triggers = Array.isArray(options?.triggers) ? options.triggers : [];
		if (!triggers.length) return;
		var cleanups = [];
		var listen = (target, event, handler, opts) => {
			target.addEventListener(event, handler, opts);
			cleanups.push(() => target.removeEventListener(event, handler, opts));
		};
		var clicks = 0;

		triggers.forEach(trigger => {
			var explicit = !!OPEN_TRIGGERS[trigger?.id]?.explicit;
			var fire = () => open(explicit);

			switch (trigger?.id) {
				case 'initial':
					fire();
					break;
				case 'delay': {
					var timer = setTimeout(fire, Math.max(0, Number(trigger.value) || 0));
					cleanups.push(() => clearTimeout(timer));
					break;
				}
				case 'scrollPercent':
				case 'scrollFixed':
				case 'scrollEnd': {
					var check = () => {
						var at = trigger.id === 'scrollFixed' ? window.scrollY : scrollPercent();
						var min = trigger.id === 'scrollEnd' ? 95 : (Number(trigger.min) || 0);
						var max = trigger.id === 'scrollEnd' ? 100 : (trigger.max === '' || trigger.max == null ? Infinity : Number(trigger.max));
						if (at >= min && at <= max) fire();
					};
					listen(window, 'scroll', check, { passive: true });
					break;
				}
				case 'scrollElement': {
					var target = queryFirst(trigger.value);
					if (target && 'IntersectionObserver' in window) {
						var observer = new IntersectionObserver(entries => {
							if (entries.some(entry => entry.isIntersecting)) fire();
						});
						observer.observe(target);
						cleanups.push(() => observer.disconnect());
					}
					break;
				}
				case 'clickFirst':
				case 'clickCount':
					listen(document, 'click', () => {
						clicks += 1;
						if (trigger.id === 'clickFirst' ? clicks === 1 : clicks === (Number(trigger.value) || 1)) fire();
					}, true);
					break;
				case 'clickRight':
					listen(document, 'contextmenu', fire);
					break;
				case 'onExit':
					listen(document, 'mouseout', (e) => {
						if (!e.relatedTarget && e.clientY <= 0) fire();
					});
					break;
				case 'clickElement':
					listen(document, 'click', (e) => {
						if (closestMatch(e.target, trigger.value)) {
							e.preventDefault();
							fire();
						}
					});
					break;
				case 'keyPress':
					listen(document, 'keydown', (e) => {
						var key = String(trigger.value || '').trim();
						if (key && String(e.key).toLowerCase() === key.toLowerCase() && !/^(input|textarea|select)$/i.test(e.target?.tagName || '')) fire();
					});
					break;
				case 'mouseOverElement':
				case 'mouseOutElement':
					listen(document, trigger.id === 'mouseOverElement' ? 'mouseover' : 'mouseout', (e) => {
						var element = closestMatch(e.target, trigger.value);
						/* Only on actually crossing the element's edge, not moving between its children. */
						if (element && !element.contains(e.relatedTarget)) fire();
					});
					break;
				case 'urlParam': {
					var params = new URLSearchParams(window.location.search);
					if (String(trigger.value || '').split(',').map(p => p.trim()).filter(Boolean).some(p => params.has(p))) fire();
					break;
				}
				case 'cookieExist':
					if (hasCookie(trigger.value)) fire();
					break;
				case 'cookieNotExist':
					if (trigger.value && !hasCookie(trigger.value)) fire();
					break;
				case 'countdownExpired':
					listen(window, COUNTDOWN_EXPIRED_EVENT, (e) => {
						var wanted = String(trigger.value || '').trim();
						if (!wanted || e.detail?.id === wanted) fire();
					});
					break;
				default:
					break;
			}
		});

		return () => cleanups.forEach(fn => fn());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [triggersKey, open]);

	/* While open: close triggers, Escape, focus and the scroll lock. */
	var closeKey = JSON.stringify(options?.closeTriggers ?? []);
	useEffect(() => {
		if (phase !== 'open') return;
		var cleanups = [];
		var listen = (target, event, handler, opts) => {
			target.addEventListener(event, handler, opts);
			cleanups.push(() => target.removeEventListener(event, handler, opts));
		};

		listen(document, 'keydown', (e) => { if (e.key === 'Escape') close(); });

		(Array.isArray(options?.closeTriggers) ? options.closeTriggers : []).forEach(trigger => {
			switch (trigger?.id) {
				case 'delay': {
					var timer = setTimeout(close, Math.max(0, Number(trigger.value) || 0));
					cleanups.push(() => clearTimeout(timer));
					break;
				}
				case 'keyPress':
					listen(document, 'keydown', (e) => {
						var key = String(trigger.value || '').trim();
						if (key && String(e.key).toLowerCase() === key.toLowerCase()) close();
					});
					break;
				case 'clickElement':
					listen(document, 'click', (e) => { if (closestMatch(e.target, trigger.value)) close(); });
					break;
				case 'scrollPercent':
					listen(window, 'scroll', () => { if (scrollPercent() >= (Number(trigger.value) || 0)) close(); }, { passive: true });
					break;
				default:
					break;
			}
		});

		/* Focus the dialog, so keyboard and screen-reader users land in it. */
		try { dialogRef.current?.focus({ preventScroll: true }); } catch (e) { /* not focusable yet */ }

		var lock = options?.overlay !== false && options?.lockScroll !== false;
		var previousOverflow = document.body.style.overflow;
		if (lock) document.body.style.overflow = 'hidden';
		cleanups.push(() => { if (lock) document.body.style.overflow = previousOverflow; });

		return () => cleanups.forEach(fn => fn());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [phase, closeKey, close, options?.overlay, options?.lockScroll]);

	useEffect(() => () => clearTimeout(closeTimerRef.current), []);

	var closesOnOutside = (options?.closeTriggers ?? []).some(t => t?.id === 'clickOutside');

	return { phase, open, close, dialogRef, closesOnOutside };
}

/*
	The popup's markup, shared with the builder (Popup.jsx). `*` is the
	full-viewport wrapper (fixed, with the position classes), `overlay` the
	backdrop, `content` the dialog, `close-button` / `close-icon` the close
	control. In the builder `inline` draws it in the page flow instead, so
	its blocks can be edited where they are.
*/
export function PopupMarkup({ cls, id, index, type, options, phase, dialogRef, onClose, onOverlayClick, children, inline = false, rootClassName = '', rootProps = {} }) {

	var CloseIconX = tablerIcon(options?.closeIcon || 'IconX');
	var closeIconSize = Number(options?.closeIconSize) || 20;
	var position = POPUP_POSITIONS[options?.position] ?? POPUP_POSITIONS.center;
	var visible = inline || phase !== 'closed';

	var entrance = options?.entranceAnimation ?? 'fadeIn';
	var exit = options?.closeAnimation ?? 'fadeOut';
	var animation = inline ? '' : phase === 'open' && entrance !== 'none'
		? `animate__animated animate__${entrance} animate__faster`
		: phase === 'closing' && exit !== 'none' ? `animate__animated animate__${exit} animate__faster` : '';

	var label = options?.ariaLabel || 'Popup';

	return (
		<div
			id={id}
			index={index}
			type={type}
			data-popup=""
			className={inline ? `relative ${rootClassName}` : `fixed inset-0 z-[1000] flex ${position} ${options?.overlay === false ? 'pointer-events-none' : ''} ${cls('*')} ${rootClassName}`}
			style={visible ? undefined : { display: 'none' }}
			{...rootProps}
		>
			{!inline && options?.overlay !== false && (
				<div className={`absolute inset-0 ${cls('overlay')} ${phase === 'closing' ? 'animate__animated animate__fadeOut animate__faster' : phase === 'open' ? 'animate__animated animate__fadeIn animate__faster' : ''}`}
					aria-hidden="true" onClick={onOverlayClick} />
			)}
			<div
				ref={dialogRef}
				role="dialog"
				aria-modal={!inline && options?.overlay !== false ? 'true' : undefined}
				aria-label={label}
				tabIndex={-1}
				className={`relative pointer-events-auto outline-none ${cls('content')} ${animation}`}
				onClick={(e) => {
					if (!inline && (closestMatch(e.target, '.popup-close') || closestMatch(e.target, '[data-popup-close]'))) {
						e.preventDefault();
						onClose?.();
					}
				}}
			>
				{options?.closeButton !== false && (
					<button type="button" aria-label="Close" className={cls('close-button')} onClick={(e) => { e.stopPropagation(); onClose?.(); }}>
						{CloseIconX && <span className={cls('close-icon')}><CloseIconX size={closeIconSize} /></span>}
					</button>
				)}
				{children}
			</div>
		</div>
	);
}

const PopupView = (props) => {

	var { index, id, type } = props;
	var children = props?.children || [];
	var options = props?.options ?? {};

	/* A key the block lacks falls back to the popup defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('popup', props?.cssSelectors);

	var { phase, close, dialogRef, closesOnOutside } = usePopup(id, options);

	return (
		<PopupMarkup cls={cls} id={id} index={index} type={type} options={options} phase={phase} dialogRef={dialogRef}
			onClose={close} onOverlayClick={closesOnOutside ? close : undefined}>
			{children.map((child, idx) => (
				<BlockRender key={child.id} index={`${index}-${idx}`} block={child} />
			))}
		</PopupMarkup>
	);
};

PopupView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default PopupView;
