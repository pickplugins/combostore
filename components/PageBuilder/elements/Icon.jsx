import React from "react";
import { IconIcons } from "@tabler/icons-react";
import { useLoop } from "../context/LoopContext";
import { IconMarkup, iconSettings } from "./IconView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the icon: IconView's own markup, icon and
	classes. An icon with no (or an unknown) name shows a dimmed placeholder,
	so the block can still be selected - it was an empty, unclickable box.
*/
const Icon = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('icon', props?.cssSelectors);

	const loop = useLoop();
	var { Icon: TheIcon, size } = iconSettings(props?.options, loop);

	return (
		<IconMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={props?.options}
			Icon={TheIcon}
			size={size}
			rootClassName={`${TheIcon ? '' : 'opacity-40'} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
			rootProps={{
				draggable: true,
				title: TheIcon ? undefined : 'Choose an icon in the panel',
				onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
				onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
				onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
				onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
				onDragLeave: () => setDragOverIndex?.(null),
			}}
		>
			<IconIcons size={size} />
		</IconMarkup>
	);
};

export default Icon;
