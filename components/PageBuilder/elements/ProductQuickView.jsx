import React from "react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IconPlus, IconX } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import 'animate.css';
import { usePost } from "../context/PostContext";

import * as TablerIcons from '@tabler/icons-react';


import { elementCssClasses } from "../ElementsDefinition";
import { quickViewPosition, isFixedQuickView, quickViewPositionClass, quickViewModalLayer, quickViewCloseHolder } from "./productQuickViewLayout";

/* Builder canvas for Product Quick View. Markup and placement match the
	 storefront (ProductQuickViewView.jsx); placement comes from
	 productQuickViewLayout.js, which both use. */
const ProductQuickView = (props) => {

	var children = props.children ?? [];
	var prams = props.prams;
	var onTriggerOpen = props?.onTriggerOpen;

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var handleMoveBlock = props?.handleMoveBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};
	/* A key the block lacks falls back to the productQuickView defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productQuickView', cssSelectors);

	var id = props?.id;
	var type = props?.type;
	var productData = usePost();
	var [attributes, setattributes] = useState(productData?.attributes);


	var options = props?.options ?? {};
	var buttonLabel = options?.buttonLabel ?? 'Quick View';

	buttonLabel = attributes?.length > 0 ? buttonLabel.replace('{attr}', attributes[0]?.title) : buttonLabel;

	var iconSize = options?.iconSize || 18;
	var buttonIcon = options?.buttonIcon;
	var position = quickViewPosition(options?.position);
	var isModal = position == 'fixedMiddle';
	var animateIn = `animate__${options?.slideIn || (isModal ? 'zoomIn' : 'fadeIn')}`;

	const IconCustom = buttonIcon ? TablerIcons[buttonIcon] : null;

	const [isOpen, setIsOpen] = useState(false);

	var positionClass = quickViewPositionClass(position);

	/* Fixed panels render into the canvas <body>, as on the storefront:
		 inside a header with backdrop-blur (or any transform / filter) a fixed
		 panel is positioned against the header, so `h-full` meant the header's
		 height. See ProductQuickViewView.jsx. */
	var isFixed = isFixedQuickView(position);
	const rootRef = useRef(null);
	const [portalTarget, setPortalTarget] = useState(null);
	useEffect(() => {
		setPortalTarget(rootRef.current?.ownerDocument?.body ?? null);
	}, []);
	const place = (node) => (isFixed && portalTarget ? createPortal(node, portalTarget) : node);

	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");

		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const toggle = (ev) => {
		ev?.preventDefault?.();
		if (onTriggerOpen) {
			onTriggerOpen(isOpen, prams)
		}
		setIsOpen(!isOpen)
	};

	const close = (ev) => {
		ev.stopPropagation();
		if (onTriggerOpen) {
			onTriggerOpen(isOpen, prams)
		}
		setIsOpen(false)
	};

	const panel = (
		<div role="dialog" aria-label={buttonLabel || 'Quick view'} className={`${cls('popover')} ${positionClass} animate__animated animate__faster ${animateIn}`}>

			<div className={quickViewCloseHolder}>
				<button type="button" aria-label="Close quick view" className={`${cls('popover-close')} `} onClick={close}>
					<IconX size={18} />
				</button>
			</div>

			<div className={`${cls('popover-content')} `}>
				{children.length > 0 ? (
					children.map((child, idx) => (
						<BlockPreview
							key={child.id}
							index={`${index}-${idx}`}
							block={child}
							draggingBlock={draggingBlock}
							dragOverIndex={dragOverIndex}
							setDragOverIndex={setDragOverIndex}
							setDraggingBlock={setDraggingBlock}
							setSelectedId={setSelectedId}
							selectedId={selectedId}
							handleMoveBlock={handleMoveBlock}
							parentCssSelectors={cssSelectors}
						/>
					))
				) : (
					<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-10 pointer-events-none">
						<IconPlus size={24} stroke={1.5} />
						<span className="text-xs mt-1">Empty quick view - drop product elements here (image, title, price, add to cart)</span>
					</div>
				)}
			</div>
		</div>
	);

	return <div ref={rootRef} draggable id={id} type={type} className={`${cls('*')}  relative hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
		onClick={e => {
			e.stopPropagation();
			setSelectedId(selectedId != id ? id : null);
		}}
		onDragStart={e => {
			e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
		}}
		onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

		onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
		onDragLeave={() => setDragOverIndex(null)}
		onDrop={onDrop}
	>

		<button type="button" className={`${cls('button')} `} onClick={toggle}>
			{IconCustom ? (
				<span className={`${cls('button-icon')} `} aria-hidden="true"><IconCustom size={iconSize} /></span>
			) : null}
			{buttonLabel ? <span className={`${cls('button-label')} `}>{buttonLabel}</span> : null}
		</button>

		{isOpen && place(
			isFixed ? (
				<>
					<div aria-hidden="true" className={`${cls('backdrop')} animate__animated animate__faster animate__fadeIn`} onClick={close} />
					{isModal ? <div className={quickViewModalLayer}>{panel}</div> : panel}
				</>
			) : panel
		)}

	</div>;
};



export default ProductQuickView;
