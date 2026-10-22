import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";
import { IconArrowLeft, IconX, IconAlertSquare, IconCheck } from '@tabler/icons-react';


const Notify = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var text = options?.text ?? 'Dummy Link';
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var linkTo = options?.linkTo;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;


	const Tag = tag;


	var notifications = [{ title: 'Hello title', content: 'Hello content' }]



	var cartToggle = false;


	return (




		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} ${notifications?.length > 0 ? "" : "hidden"} fixed ${cartToggle ? "left-6" : "right-6"}  bottom-6 z-50 hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
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

			{notifications?.map((item, index) => {

				var type = item.type

				return (
					<div className={`max-w-72 min-w-64 mb-2 animate__animated ${cartToggle ? "animate__fadeInLeft" : "animate__fadeInRight"}  overflow-hidden relative rounded-sm shadow-md bg-white p-3 border-l-4 border-0 ${type == 'success' ? "   border-l-green-700 border-solid " : ""} ${type == 'error' ? "   border-l-red-700 border-solid" : ""} ${type == 'warnning' ? "  border-l-yellow-500 border-solid" : ""}`} key={index}>

						<span
							className="cursor-pointer px-1 py-1 text-white bg-red-500 hover:bg-red-700 hover:text-white absolute top-0 right-0"
							onClick={(ev) => {
								var notificationsY = [...notifications];
								notificationsY.splice(index, 1);

							}}>
							<IconX fill={"#fff"} />
						</span>

						<div className="flex items-center gap-3 ">
							<div>
								{type == "warnning" && (
									<IconAlertSquare />
								)}
								{type == "error" && (
									<IconX />
								)}
								{type == "success" && (
									<IconCheck />
								)}
							</div>
							<div className="text-base mb-2">
								{item?.title}
							</div>
						</div>
						<div className="text-xs" dangerouslySetInnerHTML={{ __html: item?.content }} ></div>

					</div>
				)

			})}


		</div>





	);
};



export default Notify;
