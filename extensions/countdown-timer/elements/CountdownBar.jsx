"use client";

import React from "react";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";

import { useCountdown } from "../lib/useCountdown";
import { formatCompact } from "../lib/time";

/*
	The announcement bar: a message, a timer and somewhere to go.

	A separate block from the timer because sticking one to the top of every
	page is the thing most merchants actually want, and composing it out of
	a container, a text block, a timer and a link - with the sticky
	positioning and the dismiss button done by hand - is a lot of work to
	get a very ordinary result.

	Dismissal is remembered per campaign rather than per bar, so a shopper
	who closes it on the home page does not meet it again on the next one.
	It is kept in sessionStorage, not localStorage: a bar nobody can ever
	bring back is a bar the merchant cannot show a returning visitor, and
	"gone for this visit" is what a dismiss button is usually taken to mean.
*/

const DISMISS_KEY = "combostore_countdown_dismissed";

function readDismissed() {
	try {
		const raw = window.sessionStorage.getItem(DISMISS_KEY);
		const parsed = raw ? JSON.parse(raw) : null;
		return Array.isArray(parsed) ? parsed : [];
	} catch (e) {
		return [];
	}
}

function addDismissed(campaignId) {
	try {
		const next = Array.from(new Set([...readDismissed(), campaignId]));
		window.sessionStorage.setItem(DISMISS_KEY, JSON.stringify(next));
	} catch (e) {
		/* It stays dismissed for this page either way, through the state
		   below; only the "and the next page too" part is lost. */
	}
}

const CountdownBar = (props) => {

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
	var message = options?.message ?? "Sale ends in";
	var linkLabel = options?.linkLabel ?? "Shop the sale";
	var linkUrl = options?.linkUrl ?? "/shop";
	var dismissible = options?.dismissible !== false;
	var showSeconds = options?.showSeconds !== false;

	const { status, parts, campaign } = useCountdown(campaignId);

	const isEditor = typeof setSelectedId === "function";

	const [dismissed, setDismissed] = React.useState(false);

	/* Read after mount, never during render: sessionStorage does not exist
	   on the server, and seeding from it during render would make the first
	   client render disagree with the markup. */
	React.useEffect(() => {
		if (!campaignId) return;
		if (readDismissed().includes(campaignId)) setDismissed(true);
	}, [campaignId]);

	if (!isEditor) {
		if (dismissed) return null;
		if (status === "invalid" || status === "before") return null;
		if (status === "expired" && (campaign?.expiredAction ?? "hide") === "hide") return null;
	}

	const pending = status === "pending";
	const expired = !isEditor && status === "expired";
	const expiredMessage = campaign?.expiredMessage || "This offer has ended.";

	const timeText = isEditor
		? "2d 08h 45m 30s"
		: pending
			? "--"
			: formatCompact(parts, showSeconds);

	function onDismiss(event) {
		event.preventDefault();
		event.stopPropagation();
		if (isEditor) return;
		addDismissed(campaignId);
		setDismissed(true);
	}

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
			role="region"
			aria-label="Offer countdown"
			className={`${cssSelectors['*']?.classes ?? ''} ${isEditor ? `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}` : ''}`}>

			<div className={`${cssSelectors['inner']?.classes ?? ''}`}>

				{expired ? (
					<span className={`${cssSelectors['expired']?.classes ?? ''}`}>{expiredMessage}</span>
				) : (
					<>
						{message && <span className={`${cssSelectors['message']?.classes ?? ''}`}>{message}</span>}
						<span className={`${cssSelectors['time']?.classes ?? ''}`}>{timeText}</span>
					</>
				)}

				{linkLabel && !expired && (
					<Link
						href={linkUrl}
						onClick={(e) => isEditor && e.preventDefault()}
						className={`${cssSelectors['link']?.classes ?? ''}`}>
						{linkLabel}
					</Link>
				)}

			</div>

			{dismissible && (
				<button
					type="button"
					onClick={onDismiss}
					aria-label="Dismiss"
					className={`${cssSelectors['dismiss']?.classes ?? ''}`}>
					<IconX size={15} />
				</button>
			)}

		</div>
	);
};

export default CountdownBar;
