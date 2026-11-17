"use client"
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { elementCssClasses } from "../ElementsDefinition";

/* Sent on window when a timer reaches zero while shown; PopupView.jsx re-exports the same name. */
export const COUNTDOWN_EXPIRED_EVENT = 'combostore:countdown-expired';

/*
	Countdown timer: counts down to one moment and shows what is left.

	Two modes (options.mode):
	- "date": to a fixed end. The options panel saves the picked date as
	  `endsAt`, an exact UTC moment worked out from the merchant's own clock
	  when they pick it, so every shopper counts to the same instant whatever
	  their timezone. (`endDate` keeps the picked wall-clock value for the
	  date field.)
	- "evergreen": each visitor gets `durationMinutes` from their first view,
	  remembered in this browser (localStorage, per block) - an offer window
	  rather than a sale end. Where storage is blocked it restarts per visit.

	When it reaches zero (options.expired): "hide" renders nothing, "message"
	shows expiredText, "zero" keeps the timer at 00.
*/

const STORAGE_PREFIX = "cs-countdown-timer:";

/* The end of an evergreen timer for this browser: the stored first-view end, or one set now. */
function evergreenEnd(blockId, minutes) {
	var durationMs = Math.max(1, Number(minutes) || 0) * 60000;
	var key = `${STORAGE_PREFIX}${blockId || "default"}:${durationMs}`;
	try {
		var stored = parseInt(window.localStorage.getItem(key), 10);
		if (Number.isFinite(stored) && stored > 0) return stored;
		var end = Date.now() + durationMs;
		window.localStorage.setItem(key, String(end));
		return end;
	} catch (e) {
		return Date.now() + durationMs;
	}
}

/* The end, as a millisecond timestamp, or null when none is set. Browser-only for evergreen. */
export function countdownEnd(options, blockId) {
	if (options?.mode === "evergreen") return evergreenEnd(blockId, options?.durationMinutes);
	var end = Date.parse(options?.endsAt || "");
	return Number.isFinite(end) ? end : null;
}

/* What is left, split into units. Without days, the hours carry them (50 hours, not 2 days 2 hours). */
export function countdownParts(msLeft, options) {
	var total = Math.max(0, Math.floor(msLeft / 1000));
	var showDays = options?.showDays !== false;
	var days = showDays ? Math.floor(total / 86400) : 0;
	var hours = Math.floor((total - days * 86400) / 3600);
	var minutes = Math.floor((total % 3600) / 60);
	var seconds = total % 60;
	return { days, hours, minutes, seconds, done: total === 0 };
}

const pad = (n) => String(n).padStart(2, "0");

/*
	Ticks once a second. Until mounted it reports `ready: false`, and the
	server render and the first browser render draw the same placeholder, so
	there is no hydration mismatch from the clock.
*/
export function useCountdown(options, blockId, fixedEnd) {
	var [state, setstate] = useState({ ready: false, end: null, now: 0 });
	var key = `${options?.mode}|${options?.endsAt}|${options?.durationMinutes}|${blockId}|${fixedEnd}`;

	useEffect(() => {
		var end = fixedEnd ?? countdownEnd(options, blockId);
		setstate({ ready: true, end, now: Date.now() });
		if (end == null) return;
		var timer = setInterval(() => {
			var now = Date.now();
			setstate(current => ({ ...current, now }));
			if (now >= end) clearInterval(timer);
		}, 1000);
		return () => clearInterval(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key]);

	return state;
}

/*
	The block's markup, shared with the builder preview (CountdownTimer.jsx):
	an optional prefix (with its icon), then either boxes - a `unit` per
	days / hours / minutes / seconds holding `value` and `label`, with a
	`separator` between - or one `inline` line ("2d 05:14:09").
	`parts` null draws the placeholder (-- in every unit).
*/
export function CountdownTimerMarkup({ cls, id, index, type, options, parts, rootClassName = '', rootProps = {} }) {

	var IconX = tablerIcon(options?.icon);
	var iconSize = Number(options?.iconSize) || 18;
	var showDays = options?.showDays !== false;
	var showSeconds = options?.showSeconds !== false;
	var showLabels = options?.showLabels !== false;
	var separator = options?.separator ?? ':';
	var value = (n) => parts ? pad(n) : '--';

	var units = [
		showDays ? { key: 'days', value: parts ? String(parts.days) : '--', label: options?.daysLabel ?? 'Days' } : null,
		{ key: 'hours', value: value(parts?.hours), label: options?.hoursLabel ?? 'Hours' },
		{ key: 'minutes', value: value(parts?.minutes), label: options?.minutesLabel ?? 'Minutes' },
		showSeconds ? { key: 'seconds', value: value(parts?.seconds), label: options?.secondsLabel ?? 'Seconds' } : null,
	].filter(Boolean);

	var prefix = (options?.prefix || IconX) && (
		<div className={cls('prefix')}>
			{IconX && <span className={cls('icon')}><IconX size={iconSize} /></span>}
			{options?.prefix && <span className={cls('prefix-text')}>{options.prefix}</span>}
		</div>
	);

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} role="timer" aria-live="off" {...rootProps}>
			{prefix}
			{options?.layout === 'inline' ? (
				<div className={cls('inline')}>
					{/* Days only while there are some: "2d 05:14:09", then "05:14:09". */}
					{showDays && parts?.days > 0 ? `${parts.days}${options?.daysShort ?? 'd'} ` : ''}
					{[value(parts?.hours), value(parts?.minutes), showSeconds ? value(parts?.seconds) : null].filter(v => v != null).join(':')}
				</div>
			) : (
				<div className={cls('units')}>
					{units.map((unit, i) => (
						<React.Fragment key={unit.key}>
							{i > 0 && separator && <span className={cls('separator')} aria-hidden="true">{separator}</span>}
							<div className={`${cls('unit')} ${cls(`unit-${unit.key}`)}`}>
								<span className={cls('value')}>{unit.value}</span>
								{showLabels && unit.label && <span className={cls('label')}>{unit.label}</span>}
							</div>
						</React.Fragment>
					))}
				</div>
			)}
		</div>
	);
}

/* The expired message, in the block's root so it keeps the block's spacing. */
export function CountdownTimerExpired({ cls, id, index, type, options, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<div className={cls('expired')}>{options?.expiredText || 'This offer has ended.'}</div>
		</div>
	);
}

const CountdownTimerView = (props) => {

	/* A key the block lacks falls back to the countdownTimer defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('countdownTimer', props?.cssSelectors);
	var options = props?.options ?? {};

	var { ready, end, now } = useCountdown(options, props?.id);
	var parts = ready && end != null ? countdownParts(end - now, options) : null;

	/*
		Tell the page when it reaches zero - a popup's "Countdown ended" trigger
		listens (PopupView.jsx). Only a timer seen running sends it: one already
		over at page load stays quiet, or every visit after a sale would open
		the popup.
	*/
	var sawRunningRef = useRef(false);
	var done = !!parts?.done;
	useEffect(() => {
		if (!parts) return;
		if (!done) { sawRunningRef.current = true; return; }
		if (sawRunningRef.current) {
			sawRunningRef.current = false;
			window.dispatchEvent(new CustomEvent(COUNTDOWN_EXPIRED_EVENT, { detail: { id: props?.id } }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [done, !!parts]);

	/* No end set (a fixed-date block saved without a date): nothing on the shop. */
	if (ready && end == null) return null;
	var expired = options?.expired ?? 'hide';

	if (parts?.done && expired === 'hide') return null;
	if (parts?.done && expired === 'message') {
		return <CountdownTimerExpired cls={cls} id={props?.id} index={props?.index} type={props?.type} options={options} />;
	}

	return <CountdownTimerMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={options} parts={parts} />;
};

CountdownTimerView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default CountdownTimerView;
