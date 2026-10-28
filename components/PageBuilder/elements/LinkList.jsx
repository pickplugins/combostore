import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


const LinkList = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index


	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';
	var headerText = options?.headerText;

	var icon = options?.icon;
	var iconSize = options?.iconSize;

	const IconX = TablerIcons[icon];



	const Tag = tag;




	return (
		<div draggable id={id} className={`${cssSelectors['*']?.classes ?? ''} cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
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

		>

			<div className={`${cssSelectors['header-text']?.classes}`}>{headerText}</div>

			<Tag className={`${cssSelectors['ul']?.classes}`}

			>

				{items?.map((item, index) => {
					const ItemIcon = TablerIcons[item.icon];

					return (
						<li key={index} className={`${cssSelectors['li']?.classes} `}>

							<Link className={`${cssSelectors['link']?.classes} `} href={item.slug ?? '#'} onClick={ev => {

								ev.preventDefault();

							}}>




								{ItemIcon && (
									<div className={`${cssSelectors['icon']?.classes}`}>
										{ItemIcon ? <ItemIcon size={iconSize} /> : null}
									</div>
								)}
								{!ItemIcon && (
									<div className={`${cssSelectors['icon']?.classes}`}>
										{IconX ? <IconX size={iconSize} /> : null}
									</div>
								)}







								<span className={cssSelectors['text']?.classes}>{item.text}</span>
							</Link>


						</li>
					)

				})}


				{options?.text}

			</Tag>
		</div>
	);
};



export default LinkList;
