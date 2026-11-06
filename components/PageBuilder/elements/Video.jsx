import React from "react";
import { IconVideo } from "@tabler/icons-react";
import { VideoMarkup, parseVideoSource } from "./VideoView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	Builder (canvas) preview of the video: VideoView's own markup and classes.
	A transparent shield over the player takes the clicks, so clicking the
	video selects the block - the iframe used to swallow them. (So the video
	does not play in the canvas; autoplay is off here for the same reason.)
	Without a recognisable video it shows a placeholder the size of the
	frame. (It was named Text.)
*/
const Video = (props) => {

	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var id = props?.id;

	var cls = elementCssClasses('video', props?.cssSelectors);
	var source = parseVideoSource(props?.options?.url || props?.options?.videoId);

	var rootClassName = `relative hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''}`;
	var rootProps = {
		draggable: true,
		onClick: e => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId != id ? id : null); },
		onDragStart: e => { e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock?.(id); },
		onDragEnd: () => { setDraggingBlock?.(null); setDragOverIndex?.(null); },
		onDragOver: e => { e.preventDefault(); setDragOverIndex?.(index); },
		onDragLeave: () => setDragOverIndex?.(null),
	};

	if (!source) {
		var typed = String(props?.options?.url || props?.options?.videoId || '').trim();
		return (
			<div id={id} index={index} type={props?.type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
				<div className={`${cls('frame')} flex flex-col items-center justify-center gap-2 bg-gray-100 text-gray-400 opacity-80`}>
					<IconVideo size={36} />
					<span className="text-xs">{typed ? 'Not a YouTube, Vimeo or video file link' : 'Paste a video link in the panel'}</span>
				</div>
			</div>
		);
	}

	return (
		<VideoMarkup cls={cls} id={id} index={index} type={props?.type} options={{ ...props?.options, autoplay: false }} source={source} rootClassName={rootClassName} rootProps={rootProps}>
			<div className="absolute inset-0 cursor-pointer" aria-hidden="true" />
		</VideoMarkup>
	);
};

export default Video;
