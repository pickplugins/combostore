import PropTypes from "prop-types";
import React from "react";
import { IconColumns, IconPlus } from "@tabler/icons-react";
import BlockPreview from '../BlockPreview';
import { LoopProvider } from "../context/LoopContext";
import { CollectionsProvider } from "../context/CollectionsContext";


const Collections = (props) => {


	var block = props?.block
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var handleMoveBlock = props?.handleMoveBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var type = props?.type

	var children = props?.children;

	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';


	const onDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const paletteType = e.dataTransfer.getData("paletteType");
		const canvasBlockId = e.dataTransfer.getData("canvasBlock");

		if (handleMoveBlock) {
			handleMoveBlock({ paletteType, canvasBlockId }, id, 'inside');
		}
	};

	const onDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};


	const Tag = tag;




	return (
		<Tag draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
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
			<CollectionsProvider value={{ cssSelectors: cssSelectors }}>

				{items?.map((item, index) => {

					return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

						<LoopProvider value={item} >



							{children?.length > 0 ? (
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
									/>
								))
							) : (
								<div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-4 pointer-events-none">
									<IconPlus size={24} stroke={1.5} />
									<span className="text-xs mt-1">Empty Section - Drop elements here</span>
								</div>
							)}

							{/* {children != undefined && children.map((child, indexZ) => {


							return (

								<BlockPreview index={`${index}${indexZ}`} {...item} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} />

							)

						})} */}
						</LoopProvider>



					</div>)
					// return (
					// 	<li key={index} className={`${cssSelectors['li']?.classes} `}>

					// 		{ItemIcon && (
					// 			<div className={`${cssSelectors['icon']?.classes}`}>
					// 				{ItemIcon ? <ItemIcon size={iconSize} /> : null}
					// 			</div>
					// 		)}
					// 		{!ItemIcon && (
					// 			<div className={`${cssSelectors['icon']?.classes}`}>
					// 				{IconX ? <IconX size={iconSize} /> : null}
					// 			</div>
					// 		)}


					// 		<span className={cssSelectors['title']?.classes}>{item.title}</span>

					// 	</li>
					// )

				})}
			</CollectionsProvider>



		</Tag>
	);
};


Collections.propTypes = {
	block: PropTypes.object,
	draggingBlock: PropTypes.string,
	setDraggingBlock: PropTypes.func,
	dragOverIndex: PropTypes.string,
	setDragOverIndex: PropTypes.func,
	setSelectedId: PropTypes.func,
	selectedId: PropTypes.string,
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	prams: PropTypes.object,
	handleDropInto: PropTypes.func,
};

export default Collections;
