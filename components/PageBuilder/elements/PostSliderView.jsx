"use client"
import { useMemo } from "react";
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BlockRender from '../BlockRender';
import { PostSliderProvider } from "../context/PostSliderContext";
import { postGridQuery } from "./PostGridView";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/*
	The query a slider without one shows: the latest eight blog posts (the
	post grid's default with 8 per page).

	Written out rather than spread from PostGridView's defaultPostGridQuery:
	the two modules import each other through BlockRender, so when PostGridView
	loads first this line ran before that constant existed, and the builder
	crashed with "Cannot access 'defaultPostGridQuery' before initialization".
	Imports from PostGridView may only be used inside functions here.
*/
export const defaultPostSliderQuery = { post_type: ['post'], order: 'DESC', orderby: 'date', posts_per_page: '8', taxQuery: [] };

/* The slider's query (options.queryPrams), as a copy; see postGridQuery. */
export function postSliderQuery(options) {
	return postGridQuery(options, defaultPostSliderQuery);
}

/*
	The Splide settings: a copy of options.sliderOptions (it used to be
	written to - and a slider saved without it crashed setting classes on
	undefined) with the arrows' and dots' classes. Each keeps Splide's own
	class name (Splide finds them by it) and the selector's name, and now
	also gets that selector's classes: arrows-wrap, arrow-item (both arrows),
	arrow-prev, arrow-next, pagination, page-item. Before, only the names
	were set, so these selectors' classes reached nothing.
*/
export function postSliderSplideOptions(options, cls) {
	return {
		...(options?.sliderOptions ?? {}),
		classes: {
			arrows: `splide__arrows arrows-wrap ${cls('arrows-wrap')}`,
			arrow: `splide__arrow arrow-item ${cls('arrow-item')}`,
			prev: `splide__arrow--prev arrow-prev ${cls('arrow-prev')}`,
			next: `splide__arrow--next arrow-next ${cls('arrow-next')}`,
			pagination: `splide__pagination pagination ${cls('pagination')}`,
			page: `splide__pagination__page page-item ${cls('page-item')}`,
		},
	};
}

/*
	What the slider shares with its postLoop through PostSliderContext: the
	query and its selectors (filled from the postSlider defaults; the loop
	takes `loop-item` from them when its own is empty).
*/
export function usePostSliderContextValue(cssSelectors, query) {
	var selectors = useMemo(() => withElementCssDefaults('postSlider', cssSelectors), [cssSelectors]);
	return useMemo(() => ({ queryPrams: query, cssSelectors: selectors }), [query, selectors]);
}

/*
	The slider's markup, shared with the builder preview (PostSlider.jsx): a
	`*` div holding the Splide slider. Its children - a postLoop, which gives
	one slide per post - are rendered by the caller.
*/
export function PostSliderMarkup({ cls, id, index, type, splideOptions, children, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<Splide aria-label="" options={splideOptions}>
				{children}
			</Splide>
		</div>
	);
}

/*
	A slider of posts from its query. It also used to fetch 10 products from
	get_products on every load and throw them away.
*/
const PostSliderView = (props) => {

	var children = props?.children;
	var index = props?.index;

	/* A key the block lacks falls back to the postSlider defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('postSlider', props?.cssSelectors);

	var queryKey = JSON.stringify(postSliderQuery(props?.options));
	var query = useMemo(() => JSON.parse(queryKey), [queryKey]);
	var contextValue = usePostSliderContextValue(props?.cssSelectors, query);

	return (
		<PostSliderMarkup cls={cls} id={props?.id} index={index} type={props?.type} splideOptions={postSliderSplideOptions(props?.options, cls)}>
			<PostSliderProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
				))}
			</PostSliderProvider>
		</PostSliderMarkup>
	);
};

export default PostSliderView;
