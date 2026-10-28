"use client";

import React from "react";
import * as TablerIcons from "@tabler/icons-react";

import { useCountdown } from "../lib/useCountdown";
import { pad, formatCompact } from "../lib/time";

/*
	The timer itself.

	Same editor contract as a core element: the root carries `draggable`,
	the block id, the hover outline, the drag-over marker and the selected
	outline. Drop any of them and the block looks right on the page but
	cannot be picked up on the canvas.

	On the canvas it always shows a sample time, whatever the campaign says.
	A merchant styling a timer should not have to keep a live campaign
	running to see one, and a block that renders nothing because the sale
	ended last week looks broken rather than finished.
*/

const SAMPLE_PARTS = { days: 2, hours: 8, minutes: 45, seconds: 30, total: 1 };

const Countdown = (props) => {

	var draggingBlock = props?.draggingBlock;
	var setDraggingBlock = props?.setDraggingBlock;

	var dragOverIndex = props?.dragOverIndex;
	var setDragOverIndex = props?.setDragOverIndex;

	var setSelectedId = props?.setSelectedId;
	var selectedId = props?.selectedId;
	var index = props?.index;
	var cssSelectors = props?.cssSelectors ?? {};

	var id = props?.id;
	var type = props?.type;

	var options = props?.options ?? {};
	var campaignId = options?.campaignId ?? "";
	var layout = options?.layout ?? "boxes";
	var prefix = options?.prefix ?? "";
	var showDays = options?.showDays !== false;
	var showSeconds = options?.showSeconds !== false;
	var showLabels = options?.showLabels !== false;
	var icon = options?.icon;
	var iconSize = Number(options?.iconSize ?? 15);

	const { status, parts, labels, campaign } = useCountdown(campaignId);

	const isEditor = typeof setSelectedId === "function";
	const IconX = icon ? TablerIcons[icon] : null;

	/*
		Before mount nothing has been counted yet, so the units read "--".
		The markup is the same either way, which is what keeps the server's
		HTML and the first client render in agreement and stops the layout
		jumping when the real numbers land a frame later.
	*/
	const pending = status === "pending";
	const shown = isEditor ? SAMPLE_PARTS : parts;

	const expiredAction = campaign?.expiredAction ?? "hide";

	if (!isEditor) {
		/* Nothing to count to, or not open yet: say nothing at all. A
		   half-written campaign must not put "00:00:00" on a live page. */
		if (status === "invalid" || status === "before") return null;
		if (status === "expired" && expiredAction === "hide") return null;
	}

	const expiredMessage = campaign?.expiredMessage || "This offer has ended.";
	const showingMessage = !isEditor && status === "expired" && expiredAction === "message";

	const units = [
		{ key: "days", value: shown.days, label: labels?.days ?? "Days", include: showDays },
		{ key: "hours", value: shown.hours, label: labels?.hours ?? "Hours", include: true },
		{ key: "minutes", value: shown.minutes, label: labels?.minutes ?? "Mins", include: true },
		{ key: "seconds", value: shown.seconds, label: labels?.seconds ?? "Secs", include: showSeconds },
	].filter((u) => u.include);

	/* Days switched off has to go somewhere, or a three-day sale reads as
	   eight hours left. */
	const hoursCarry = showDays ? shown.hours : shown.hours + shown.days * 24;

	const editorProps = isEditor
		? {
			draggable: true,
			onClick: (e) => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			},
			onDragStart: (e) => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			},
			onDragEnd: () => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			},
			onDragOver: (e) => { e.preventDefault(); setDragOverIndex(index); },
			onDragLeave: () => setDragOverIndex(null),
		}
		: {};

	return (
		<div
			id={id}
			index={index}
			type={type}
			{...editorProps}
			/* Announced politely rather than on every tick: a screen reader
			   reading out a changing second forever is unusable. */
			role="timer"
			aria-live="off"
			className={`${cssSelectors['*']?.classes ?? ''} ${isEditor ? `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}` : ''}`}>

			{showingMessage ? (
				<span className={`${cssSelectors['expired']?.classes ?? ''}`}>{expiredMessage}</span>
			) : (
				<>
					{(prefix || IconX) && (
						<span className={`${cssSelectors['prefix']?.classes ?? ''}`}>
							{IconX && <IconX size={iconSize} />}
							{prefix && <span>{prefix}</span>}
						</span>
					)}

					{layout === "compact" ? (
						<span className={`${cssSelectors['compact']?.classes ?? ''}`}>
							{pending ? "--" : formatCompact(
								showDays ? shown : { ...shown, days: 0, hours: hoursCarry },
								showSeconds
							)}
						</span>
					) : (
						<span className={`${cssSelectors['units']?.classes ?? ''}`}>
							{units.map((unit, unitIndex) => (
								<React.Fragment key={unit.key}>
									{unitIndex > 0 && layout === "inline" && (
										<span className={`${cssSelectors['separator']?.classes ?? ''}`}>:</span>
									)}
									<span className={`${cssSelectors['unit']?.classes ?? ''}`}>
										<span className={`${cssSelectors['value']?.classes ?? ''}`}>
											{pending ? "--" : pad(unit.key === "hours" ? hoursCarry : unit.value)}
										</span>
										{showLabels && (
											<span className={`${cssSelectors['label']?.classes ?? ''}`}>{unit.label}</span>
										)}
									</span>
								</React.Fragment>
							))}
						</span>
					)}
				</>
			)}

		</div>
	);
};

export default Countdown;
