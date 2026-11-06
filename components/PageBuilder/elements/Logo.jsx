import React from "react";
import { LogoMarkup } from "./LogoView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the logo: LogoView's own markup and classes.
	The whole block is now selectable and draggable from its wrapper - only
	the image had the handlers, and the link stopped clicks from reaching the
	wrapper, so a text logo could not be selected at all. Links never leave
	the builder. A logo with neither text nor an image shows "Logo", dimmed.
	(It was named Image.)
*/
const Logo = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('logo', props?.cssSelectors);

	var options = props?.options;
	var empty = !String(options?.logoText ?? '').trim() && !String(options?.src ?? '').trim();

	return (
		<LogoMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			options={empty ? { ...options, logoType: 'text', logoText: 'Logo' } : options}
			onLinkClick={ev => ev.preventDefault()}
			rootClassName={`${empty ? 'opacity-60' : ''} cursor-pointer hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`}
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

export default Logo;
