"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BlockRender from '../BlockRender';
import { postSliderSplideOptions } from "./PostSliderView";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The slider's markup, shared with the builder preview (ContentSlider.jsx): a
	`*` div holding the Splide slider, one `slide` per child block. The caller
	renders each child (BlockRender on the shop, BlockPreview in the builder)
	through renderChild.

	Every child is one slide. The old view mapped options.items - which no
	panel could fill - and rendered every child inside each item, and it read
	id, type, children and BlockRender without defining them, so it crashed.
*/
export function ContentSliderMarkup({ cls, id, index, type, splideOptions, slides: blocks, renderChild, rootClassName = '', rootProps = {}, empty = null }) {
	var slides = Array.isArray(blocks) ? blocks : [];

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{slides.length > 0 ? (
				<Splide aria-label="" options={splideOptions}>
					{slides.map((child, indexZ) => (
						<SplideSlide key={child?.id ?? indexZ} className={cls('slide')}>
							{renderChild(child, indexZ)}
						</SplideSlide>
					))}
				</Splide>
			) : empty}
		</div>
	);
}

/*
	A slider of any blocks: each child block is a slide. Splide settings come
	from options.sliderOptions; the arrows' and dots' selectors get their
	classes the same way as the post slider's.
*/
const ContentSliderView = (props) => {

	var index = props?.index;

	/* A key the block lacks falls back to the contentSlider defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('contentSlider', props?.cssSelectors);

	return (
		<ContentSliderMarkup
			cls={cls}
			id={props?.id}
			index={index}
			type={props?.type}
			splideOptions={postSliderSplideOptions(props?.options, cls)}
			slides={props?.children}
			renderChild={(child, indexZ) => <BlockRender index={`${index}${indexZ}`} block={child} />}
		/>
	);
};

export default ContentSliderView;
