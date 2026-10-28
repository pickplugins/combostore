"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as TablerIcons from "@tabler/icons-react";

import { usePost } from "../../../components/PageBuilder/context/PostContext";
import { useCounterStore } from "../../../store/useCounterStore";
import { useQuoteStore } from "../lib/store";
import { quoteModeFor } from "../lib/rules";

/*
	The product-page button.

	The editor contract is a core element's (see
	components/PageBuilder/elements/*): the root carries `draggable`, the
	block id, the hover outline, the drag-over marker and the selected
	outline. Drop any of them and the block looks right on the page but
	cannot be picked up on the canvas.

	One component serves the canvas and the live page, because a manifest
	registers a single `render` per type. The editor props are the tell -
	BlockPreview passes `setSelectedId`, BlockRender passes only the block.

	On the canvas it always draws, whatever the rules say. A block that
	vanishes because the previewed product happens not to be quote-only
	cannot be positioned or styled, and the merchant would reasonably
	conclude it was broken.
*/

const QuoteButton = (props) => {

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
	var showQuantity = options?.showQuantity === true;
	var afterAdd = options?.afterAdd ?? "stay";
	var addedText = options?.addedText ?? "Added to your quote list";
	var icon = options?.icon;
	var iconSize = Number(options?.iconSize ?? 16);

	const router = useRouter();
	const product = usePost();

	const { userDataX, addNotification } = useCounterStore();

	const settings = useQuoteStore((s) => s.settings);
	const items = useQuoteStore((s) => s.items);
	const addItem = useQuoteStore((s) => s.addItem);

	const [quantity, setQuantity] = React.useState(1);
	const [justAdded, setJustAdded] = React.useState(false);

	const isEditor = typeof setSelectedId === "function";
	const decision = quoteModeFor(product, settings);

	/* Nothing to offer on this product, and no canvas to draw for. */
	if (!isEditor && decision.mode === "off") return null;

	const alreadyListed = items.some((i) => String(i.id) === String(product?.id));

	const label = labelOverride
		|| decision.buttonLabel
		|| (decision.mode === "also" ? settings?.addLabel : settings?.buttonLabel)
		|| "Request a Quote";

	const IconX = icon ? TablerIcons[icon] : null;

	function onAdd() {
		if (isEditor) return;

		if (settings?.requireLogin && !userDataX?.id) {
			addNotification?.({
				type: "error",
				title: "Sign in required",
				content: "Please sign in to request a quote.",
			});
			router.push("/login");
			return;
		}

		addItem({
			id: product?.id,
			product_id: product?.id,
			variation_id: null,
			title: product?.title ?? "",
			slug: product?.slug ?? "",
			thumbnail: product?.post_thumbnail?.src ?? product?.thumbnail ?? "",
			/* Captured as it stood when they asked. A quote answered three
			   days later against a price that has since changed should show
			   the merchant what the shopper was looking at. */
			price: product?.price ?? "",
			regular_price: product?.regular_price ?? "",
			sale_price: product?.sale_price ?? "",
			quantity,
			note: "",
		});

		if (afterAdd === "redirect") {
			router.push(settings?.quotePageUrl || "/request-a-quote");
			return;
		}

		setJustAdded(true);
		setTimeout(() => setJustAdded(false), 4000);
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

			{showQuantity && (
				<div className={`${cssSelectors['quantity']?.classes ?? ''}`}>
					<button
						type="button"
						className={`${cssSelectors['quantityButton']?.classes ?? ''}`}
						onClick={(e) => { e.stopPropagation(); setQuantity((q) => Math.max(1, q - 1)); }}>
						-
					</button>
					<input
						type="text"
						className={`${cssSelectors['quantityInput']?.classes ?? ''}`}
						value={quantity}
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
					/>
					<button
						type="button"
						className={`${cssSelectors['quantityButton']?.classes ?? ''}`}
						onClick={(e) => { e.stopPropagation(); setQuantity((q) => q + 1); }}>
						+
					</button>
				</div>
			)}

			<button
				type="button"
				onClick={(e) => { e.stopPropagation(); onAdd(); }}
				className={`${cssSelectors['button']?.classes ?? ''}`}>
				{IconX && <IconX size={iconSize} />}
				<span>{label}</span>
			</button>

			{/* Two different states, deliberately. "Added" confirms the click
			    just made; "already listed" is the standing fact on a revisit,
			    and conflating them would tell a returning shopper they had
			    done something they had not. */}
			{justAdded && (
				<div className={`${cssSelectors['added']?.classes ?? ''}`}>{addedText}</div>
			)}

			{!justAdded && alreadyListed && (
				<a
					href={settings?.quotePageUrl || "/request-a-quote"}
					onClick={(e) => e.stopPropagation()}
					className={`${cssSelectors['listed']?.classes ?? ''}`}>
					Already on your quote list - review it
				</a>
			)}

		</div>
	);
};

export default QuoteButton;
