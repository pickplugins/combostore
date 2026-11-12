"use client"

import { useState } from "react";
import { IconSquareRoundedPlusFilled, IconSquareRoundedMinusFilled } from "@tabler/icons-react";
import * as TablerIcons from '@tabler/icons-react';
import { elementCssClasses } from "../ElementsDefinition";
import { withLegacyStepperKeys } from "./AddToCartView";
import BlockPreview from '../BlockPreview';
import { usePost } from "../context/PostContext";

/*
	Builder (canvas) preview of the add-to-cart control.

	It mirrors AddToCartView's markup - the quantity stepper and the button -
	and reads the same cssSelectors keys with the same defaults from
	ElementsDefinition.js, so styles edited in the builder show here exactly
	as on the storefront. It never touches the cart: the stepper only changes
	the number shown, and the button only selects the block.
*/
const AddToCart = (props) => {



	const {
		block,
		draggingBlock,
		setDraggingBlock,
		dragOverIndex,
		setDragOverIndex,
		setSelectedId,
		selectedId,
		index,
		id,
		type,
		handleMoveBlock // New prop for recursive drops
	} = props;



	var cssSelectors = withLegacyStepperKeys(props?.cssSelectors);
	var cls = elementCssClasses('addToCart', cssSelectors);
	const children = props?.children || [];

	var options = props?.options;
	var iconSize = options?.iconSize ?? 20;
	var icon = options?.icon;
	var buttonText = options?.buttonText;
	var source = options?.source ?? props?.source;
	/* Same rule as AddToCartView: either spelling being true hides the stepper. */
	var hideQuantity = options?.hideQuantity === true || options?.hideQuanity === true;
	var hideButton = options?.hideButton ?? false;

	var [quantity, setquantity] = useState(1);

	const IconX = TablerIcons[icon];

	var productData = usePost();

	var [canAddToCart, setcanAddToCart] = useState(!productData?.addons?.includes('variations'));


	return (

		<div draggable id={id} type={type} className={`${cls('*')} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
			onClick={e => {
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}
			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}>





<>

</>

{canAddToCart && (

<>
{!hideQuantity && (
				<div className={cls('quantity-wrapper')} >
					<button type="button" aria-label="Decrease quantity" className={cls('quantity-decrease')}
						onClick={e => { e.stopPropagation(); setquantity(Math.max(1, quantity - 1)); }}
					>
						<IconSquareRoundedMinusFilled />
					</button>
					<input type="text" inputMode="numeric" aria-label="Quantity" readOnly className={cls('quantity-input')} value={quantity} />
					<button type="button" aria-label="Increase quantity" className={cls('quantity-increase')}
						onClick={e => { e.stopPropagation(); setquantity(quantity + 1); }}
					>
						<IconSquareRoundedPlusFilled />
					</button>
				</div>
			)}

			{!hideButton && (
				<div className={cls('button-wrapper')} >
					{IconX && (
						<div className={cls('button-icon')}>
							<IconX size={iconSize} />
						</div>
					)}
					<div className={cls('button-label')}>{buttonText}</div>
				</div>
			)}


</>
)}
{!canAddToCart && (

<>
{children.map((child, idx) => (
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
					/>
				))}

</>
)}


			
		</div>

	);
};

export default AddToCart;
