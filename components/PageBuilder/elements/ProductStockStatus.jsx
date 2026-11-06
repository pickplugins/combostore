import React from "react";
import { usePost } from "../context/PostContext";
import { ProductStockStatusMarkup, stockStatusFor } from "./ProductStockStatusView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the stock status: ProductStockStatusView's own
	markup and classes. Inside a product loop it shows that product's real
	status; outside one it shows the panel's "Preview as" state
	(options.stock_status), so both looks can be styled. On the shop
	options.stock_status is ignored - the product decides.
*/
const ProductStockStatus = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;
	var options = props?.options;

	var cls = elementCssClasses('productStockStatus', props?.cssSelectors);

	const product = usePost();
	var status = product ? stockStatusFor(product, null) : (options?.stock_status === 'outofstock' ? 'outofstock' : 'instock');

	return (
		<ProductStockStatusMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={options}
			status={status}
			rootClassName={`hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`}
			rootProps={{
				draggable: true,
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		/>
	);
};

export default ProductStockStatus;
