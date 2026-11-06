"use client"
import BlockPreview from '../BlockPreview';
import { usePostGrid } from "../context/PostGridContext";
import { usePostSlider } from "../context/PostSliderContext";
import { PostLoopMarkup, postLoopClasses, usePostLoopPosts, useReportPostLoopResults } from "./PostLoopView";

/*
	Builder (canvas) preview of the post loop: PostLoopView's own markup,
	classes and fetch, with the cards' blocks rendered by BlockPreview.

	While the posts load, or when the query finds none, it shows sample cards
	(as many as the query's per-page, up to four) whose blocks show their own
	samples - it used to show nothing, which left nothing to select or drop
	onto. Outside a grid or slider it shows a note instead of vanishing.
	Dropping onto the list adds the block to every card.
*/
const PostLoop = (props) => {

	const postGridAttr = usePostGrid();
	const postSliderAttr = usePostSlider();
	var parent = postGridAttr ?? postSliderAttr;

	var handleMoveBlock = props?.handleMoveBlock
	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock
	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex
	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var children = props?.children;
	var id = props?.id;
	var index = props?.index

	var cls = postLoopClasses(props?.cssSelectors, parent?.cssSelectors);

	var { posts, loading, total, maxPages } = usePostLoopPosts(parent?.queryPrams ?? null);
	useReportPostLoopResults(postGridAttr, total, maxPages);

	var selectedClass = selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : '';
	var select = (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); };

	if (!parent) {
		return (
			<div id={id} className={`rounded border border-dashed border-gray-300 p-3 text-xs text-gray-500 ${selectedClass}`} onClick={select}>
				Post Loop: place it inside a Post Grid or Post Slider, which gives it the posts to show.
			</div>
		);
	}

	var perPage = parseInt(parent?.queryPrams?.posts_per_page) || 4;
	var sample = posts.length === 0;
	var items = sample ? Array.from({ length: Math.min(Math.max(perPage, 1), 4) }, () => null) : posts;

	return (
		<PostLoopMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			items={items}
			inSlider={!postGridAttr && !!postSliderAttr}
			itemKey={(item, i) => item?.id ?? `sample-${i}`}
			renderItem={(item, i) => Array.isArray(children) && children.map((child, indexZ) => (
				<BlockPreview index={`${i}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			))}
			rootClassName={`${sample && loading ? 'animate-pulse' : ''} ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedClass}`}
			rootProps={{
				title: sample ? (loading ? 'Loading posts…' : 'The query found no posts: sample cards shown') : undefined,
				onClick: select,
				onDragOver: (e) => { e.preventDefault(); e.stopPropagation(); },
				onDrop: (e) => {
					e.preventDefault();
					e.stopPropagation();
					const paletteType = e.dataTransfer.getData("paletteType");
					const canvasBlockId = e.dataTransfer.getData("canvasBlock");
					handleMoveBlock?.({ paletteType, canvasBlockId }, id, 'inside');
				},
			}}
		/>
	);
};

export default PostLoop;
