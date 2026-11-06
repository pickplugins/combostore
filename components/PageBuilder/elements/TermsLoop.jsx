"use client"
import BlockPreview from '../BlockPreview';
import { useTermsSlider } from "../context/TermsSliderContext";
import { useTermsGrid } from "../context/TermsGridContext";
import { TermsLoopMarkup, termsLoopClasses, useTermsLoopTerms, useReportTermsLoopResults } from "./TermsLoopView";

/* What a sample card's blocks show while the terms load, or when the query finds none. */
const sampleTerm = (i) => ({ term_id: `sample-${i}`, name: 'Category', slug: 'category', count: 12, thumbnail: { src: '/thumb.png' } });

/*
	Builder (canvas) preview of the terms loop: TermsLoopView's own markup,
	classes and fetch, with the cards' blocks rendered by BlockPreview.

	While the terms load, or when the query finds none, it shows sample cards
	(as many as the query's count, up to four) with a sample term, so there
	is something to select and drop onto - it used to show nothing. Outside
	a terms grid or slider it shows a note instead of vanishing. Post fields
	are no longer spread into every block's props ({...item}).
*/
const TermsLoop = (props) => {

	const termsSliderAttr = useTermsSlider();
	const termsGridAttr = useTermsGrid();
	var parent = termsGridAttr ?? termsSliderAttr;

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

	var cls = termsLoopClasses(props?.cssSelectors, parent?.cssSelectors);

	var { terms, loading, total, maxPages } = useTermsLoopTerms(parent?.queryPrams ?? null);
	useReportTermsLoopResults(termsGridAttr, total, maxPages);

	var selectedClass = selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative ' : '';
	var select = (e) => { e.preventDefault(); e.stopPropagation(); setSelectedId(selectedId !== id ? id : null); };

	if (!parent) {
		return (
			<div id={id} className={`rounded border border-dashed border-gray-300 p-3 text-xs text-gray-500 ${selectedClass}`} onClick={select}>
				Terms Loop: place it inside a Terms Grid or Terms Slider, which gives it the terms to show.
			</div>
		);
	}

	var count = parseInt(parent?.queryPrams?.number ?? parent?.queryPrams?.per_page) || 4;
	var sample = terms.length === 0;
	var items = sample ? Array.from({ length: Math.min(Math.max(count, 1), 4) }, (_, i) => sampleTerm(i)) : terms;

	return (
		<TermsLoopMarkup
			cls={cls}
			id={id}
			index={index}
			type={props?.type}
			items={items}
			inSlider={!termsGridAttr && !!termsSliderAttr}
			itemKey={(item, i) => item?.term_id ?? item?.id ?? i}
			renderItem={(item, i) => Array.isArray(children) && children.map((child, indexZ) => (
				<BlockPreview index={`${i}${indexZ}`} key={child.id} block={child} draggingBlock={draggingBlock} dragOverIndex={dragOverIndex} setDragOverIndex={setDragOverIndex} setDraggingBlock={setDraggingBlock} setSelectedId={setSelectedId} selectedId={selectedId} handleMoveBlock={handleMoveBlock} />
			))}
			rootClassName={`${sample ? 'opacity-70' : ''} ${sample && loading ? 'animate-pulse' : ''} ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 bg-orange-200' : ''} ${selectedClass}`}
			rootProps={{
				title: sample ? (loading ? 'Loading terms…' : 'The query found no terms: sample cards shown') : undefined,
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

export default TermsLoop;
