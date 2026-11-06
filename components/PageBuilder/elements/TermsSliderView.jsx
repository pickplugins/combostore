"use client"
import { useMemo } from "react";
import BlockRender from '../BlockRender';
import { TermsSliderProvider } from "../context/TermsSliderContext";
import { postGridQuery } from "./PostGridView";
import { PostSliderMarkup, postSliderSplideOptions } from "./PostSliderView";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/* The query a terms slider without one shows: twelve product categories with products, by name (`number` is the count). */
export const defaultTermsSliderQuery = { taxonomy: 'product_cat', number: '12', hide_empty: true, order: 'ASC', orderby: 'name' };

/* The slider's query (options.queryPrams), as a copy; a missing, empty or array one falls back to defaultTermsSliderQuery. */
export function termsSliderQuery(options) {
	return postGridQuery(options, defaultTermsSliderQuery);
}

/*
	The Splide settings: a copy of options.sliderOptions with the arrows' and
	dots' classes - the same controls and selector keys as Post Slider, which
	this slider did not have. Without perPage Splide shows one term at a time,
	as before; the definition gives new sliders 4.
*/
export function termsSliderSplideOptions(options, cls) {
	return postSliderSplideOptions(options, cls);
}

/*
	What the slider shares with its termsLoop through TermsSliderContext: the
	query and its selectors (filled from the termsSlider defaults; the loop
	styles each slide's card from `loop-item`).
*/
export function useTermsSliderContextValue(cssSelectors, query) {
	var selectors = useMemo(() => withElementCssDefaults('termsSlider', cssSelectors), [cssSelectors]);
	return useMemo(() => ({ queryPrams: query, cssSelectors: selectors }), [query, selectors]);
}

/* The slider's markup - a `*` div holding the Splide slider - the same as Post Slider's; shared with the builder preview (TermsSlider.jsx). */
export const TermsSliderMarkup = PostSliderMarkup;

/* A slider of terms (categories, brands, tags) from its query; each slide is laid out by the termsLoop inside. */
const TermsSliderView = (props) => {

	var children = props?.children;
	var index = props?.index;

	/* A key the block lacks falls back to the termsSlider defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('termsSlider', props?.cssSelectors);

	var queryKey = JSON.stringify(termsSliderQuery(props?.options));
	var query = useMemo(() => JSON.parse(queryKey), [queryKey]);
	var contextValue = useTermsSliderContextValue(props?.cssSelectors, query);

	return (
		<TermsSliderMarkup cls={cls} id={props?.id} index={index} type={props?.type} splideOptions={termsSliderSplideOptions(props?.options, cls)}>
			<TermsSliderProvider value={contextValue}>
				{Array.isArray(children) && children.map((child, indexZ) => (
					<BlockRender index={`${index}${indexZ}`} key={child.id} block={child} />
				))}
			</TermsSliderProvider>
		</TermsSliderMarkup>
	);
};

export default TermsSliderView;
