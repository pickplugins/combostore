"use client";

import React from "react";
import * as TablerIcons from "@tabler/icons-react";

import { usePost } from "../../../components/PageBuilder/context/PostContext";
import { useQuickViewStore } from "../lib/store";

/*
	The trigger.

	Placed inside a product grid, slider or loop, where `PostLoopView` and
	friends wrap each card in a `PostProvider` - so `usePost()` is the card's
	own product and the button needs no props to know what it opens.

	It opens the one modal the runtime mounted; it does not render a modal
	itself. Twenty cards on a page means twenty of these and still one modal.

	Editor contract as a core element: the root carries `draggable`, the
	block id, the hover outline, the drag-over marker and the selected
	outline. On the canvas the click selects the block instead of opening the
	modal - a modal covering the canvas every time the merchant tries to
	select the button would make it impossible to style.
*/

const QuickViewButton = (props) => {

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
	var labelOverride = options?.label ?? "";
	var showLabel = options?.showLabel !== false;
	var icon = options?.icon ?? "IconEye";
	var iconSize = Number(options?.iconSize ?? 16);

	const post = usePost();

	const settings = useQuickViewStore((s) => s.settings);
	const open = useQuickViewStore((s) => s.open);
	const openSlug = useQuickViewStore((s) => s.slug);

	const isEditor = typeof setSelectedId === "function";
	const slug = post?.slug;

	/*
		Nothing to open. A card with no slug is a post type this cannot
		fetch, and a button that opens an empty modal is worse than no
		button - so on the live page it simply is not there.
	*/
	if (!isEditor && !slug) return null;

	const label = labelOverride || settings?.buttonLabel || "Quick view";
	const IconX = icon ? TablerIcons[icon] : null;
	const isOpen = openSlug && openSlug === slug;

	function onOpen(event) {
		event.preventDefault();
		/* Cards are usually wrapped in a link to the product. Without this
		   the click opens the modal and navigates away from it. */
		event.stopPropagation();
		if (isEditor) return;

		/* What the card already knows, so the modal opens with a title and a
		   picture rather than an empty frame while the fetch runs. */
		open(slug, {
			id: post?.id,
			slug,
			title: post?.title,
			post_thumbnail: post?.post_thumbnail,
		});
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
			className={`${cssSelectors['*']?.classes ?? ''} ${isEditor ? `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}` : ''}`}>

			<button
				type="button"
				onClick={onOpen}
				aria-haspopup="dialog"
				aria-expanded={isOpen ? true : undefined}
				aria-label={showLabel ? undefined : label}
				className={`${cssSelectors['button']?.classes ?? ''}`}>
				{IconX && <IconX size={iconSize} />}
				{showLabel && <span className={`${cssSelectors['label']?.classes ?? ''}`}>{label}</span>}
			</button>

		</div>
	);
};

export default QuickViewButton;
