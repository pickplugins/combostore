import PropTypes from "prop-types";
import React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX, IconDragDrop } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore';

import { useDraggable } from '@dnd-kit/react';
import BlockPreview from './BlockPreview';
import CanvasFrame from './CanvasFrame';
import { DEVICE_WIDTHS } from './breakpoints';


const PageBuilderCanvas = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	const { token, appData, notifications, addNotification, userDataX, setUserDataX } = useCounterStore()
	const { ref } = useDraggable({
		id: props.id,
	});

	var pageData = props?.pageData
	var elements = props?.elements
	var blocks = props?.blocks
	var setBlocks = props?.setBlocks
	var selectedId = props?.selectedId
	var setSelectedId = props?.setSelectedId
	var selectedBlock = props?.selectedBlock



	const [loading, setloading] = useState(false);
	const [draggingBlock, setDraggingBlock] = useState(null);
	const [dragOverIndex, setDragOverIndex] = useState(null);

	let _n = 0;

	const uid = () => `b${++_n}${Date.now().toString(36)}`;
	const cuid = () => `c${++_n}${Date.now().toString(36)}`;




	const handleCanvasDrop = useCallback(e => {





		e.preventDefault();
		if (e.dataTransfer.getData("claimedByColumn") === "1") return;
		const pt = e.dataTransfer.getData("paletteType");
		const cb = e.dataTransfer.getData("canvasBlock");


		if (pt) {
			const pal = elements.find(x => x.type === pt); if (!pal) return;

			var children = pal?.children || undefined;
			var options = pal?.options || undefined;
			var cssSelectors = pal?.cssSelectors || undefined;

			const nb = { id: uid(), type: pal.type, options: options, children: children, cssSelectors: cssSelectors };
			const at = dragOverIndex !== null ? dragOverIndex : blocks.length;
			const n = [...blocks];
			n.splice(at, 0, nb);
			setBlocks(n);
			setSelectedId(nb.id);
		} else if (cb) {
			if (dragOverIndex === null) return;
			const fi = blocks.findIndex(b => b.id === cb); if (fi === -1) return;
			const n = [...blocks]; const [mv] = n.splice(fi, 1);
			const ti = dragOverIndex > fi ? dragOverIndex - 1 : dragOverIndex;
			n.splice(ti, 0, mv);
			setBlocks(n);
		}
		setDraggingBlock(null); setDragOverIndex(null);
	}, [dragOverIndex, blocks]);




	var theme = {}
	var themeConfig = { colors: { primary: '#ff0' } }



	var device = props?.device ?? 'Desktop';
	var frameWidth = DEVICE_WIDTHS[device] ?? null;

	/*
		The page being edited sits on a sheet rather than bleeding into the
		editor.

		It used to be `p-10` directly on the scroll container: the page had no
		edges, so there was no way to see where the design ended and the tool
		began, and nothing to size when previewing a narrower screen. The sheet
		is centred, takes its width from the device switcher, and carries the
		page's own white background so blocks render against what they will
		render against on the storefront.

		The sheet is a frame now rather than a div - see CanvasFrame - because
		the width alone was never going to be enough: breakpoints are compared
		against a viewport, and a narrowed div is not one. The sheet's own
		chrome (border, radius, shadow) moved onto the frame element, which
		keeps it outside the width the page inside is being previewed at: a
		390px preview is 390px of page, not 390px less two borders.
	*/
	return (

		<div className="flex min-h-full justify-center p-4 sm:p-6">

			<CanvasFrame
				width={frameWidth}
				onDocument={props?.onDocument}
				className="rounded-xl border border-gray-200 bg-white shadow-sm transition-[width] duration-200 ease-out">

				{/* Blocks that size themselves in JavaScript - the sliders, the
				    gallery - measure on mount, so a device change remounts the page
				    rather than leaving them laid out for the width before it.

				    The height comes from `--canvas-min-h`, which the frame sets to
				    the room the canvas area leaves. `100dvh` arithmetic cannot do
				    it in here: inside the frame that means the frame's own height,
				    which is measured from this content. */}
				<div
					key={device}
					onDragOver={e => e.preventDefault()}
					onDrop={handleCanvasDrop}
					style={{ minHeight: 'var(--canvas-min-h, 32rem)' }}
					className={blocks.length > 0 ? "p-6 sm:p-10" : "p-0"}>

					{blocks.map((block, index) => (
						<BlockPreview handleMoveBlock={props.handleMoveBlock} index={index} key={block.id} block={block} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} />
					))}

					{/* Clearing the canvas used to leave a blank white rectangle with
					    no indication that it was a drop target. */}
					{blocks.length == 0 && (
						<div
							style={{ minHeight: 'var(--canvas-min-h, 32rem)' }}
							className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-gray-200 px-6 text-center">
							<span className="text-gray-300">
								<IconDragDrop size={40} stroke={1.5} />
							</span>
							<div className="text-sm font-medium text-gray-600">{("Your canvas is empty")}</div>
							<p className="max-w-xs text-xs leading-relaxed text-gray-400">
								{("Drag an element from the left panel to start building, or use the AI button in the toolbar to generate a layout.")}
							</p>
						</div>
					)}

				</div>

			</CanvasFrame>

		</div>



	);
};



export default PageBuilderCanvas;
