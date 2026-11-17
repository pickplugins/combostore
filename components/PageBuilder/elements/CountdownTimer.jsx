"use client"
import React, { useState } from "react";
import { CountdownTimerMarkup, CountdownTimerExpired, countdownParts, useCountdown } from "./CountdownTimerView";
import { elementCssClasses } from "../ElementsDefinition";

/* A sample end (2 days 5 hours away) for a block with no date yet, so it ticks and can be styled. */
const SAMPLE_MS = (2 * 86400 + 5 * 3600 + 14 * 60) * 1000;

/*
	Builder (canvas) preview of the countdown: CountdownTimerView's own
	markup and classes, ticking. A fixed-date block shows its real time left;
	without a date it counts down a dimmed sample. An evergreen block counts
	its duration from when the canvas opened, without touching the browser's
	stored first-view (that is the shopper's). A timer already over shows what
	the shop shows then - the message, or 00 - dimmed, and "hide" shows 00
	dimmed so the block can still be selected.
*/
const CountdownTimer = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options ?? {};

	var cls = elementCssClasses('countdownTimer', props?.cssSelectors);

	var [openedAt] = useState(() => Date.now());
	var evergreen = options?.mode === 'evergreen';
	var hasDate = Number.isFinite(Date.parse(options?.endsAt || ''));
	var sample = !evergreen && !hasDate;
	var fixedEnd = evergreen
		? openedAt + Math.max(1, Number(options?.durationMinutes) || 0) * 60000
		: (sample ? openedAt + SAMPLE_MS : undefined);

	var { ready, end, now } = useCountdown(options, id, fixedEnd);
	var parts = ready && end != null ? countdownParts(end - now, options) : null;
	var done = !!parts?.done;

	var rootClassName = `${sample || done ? 'opacity-60' : ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`;
	var rootProps = {
		draggable: true,
		title: sample ? 'Sample: pick an end date in the options' : (done ? `Ended - on the shop this ${options?.expired === 'message' ? 'shows the message' : options?.expired === 'zero' ? 'stays at 00' : 'is hidden'}` : undefined),
		onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
		onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
		onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
		onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
		onDragLeave: () => setDragOverIndex?.(null),
	};

	if (done && options?.expired === 'message') {
		return <CountdownTimerExpired cls={cls} id={id} index={index} type={props?.type} options={options} rootClassName={rootClassName} rootProps={rootProps} />;
	}

	return <CountdownTimerMarkup cls={cls} id={id} index={index} type={props?.type} options={options} parts={parts} rootClassName={rootClassName} rootProps={rootProps} />;
};

export default CountdownTimer;
