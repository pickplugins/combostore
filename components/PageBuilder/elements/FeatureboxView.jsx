import PropTypes from "prop-types";
import React, { useMemo } from "react";
import BlockRender from '../BlockRender';
import { LoopProvider } from "../context/LoopContext";
import { FeatuerboxProvider } from "../context/FeatuerboxContext";
import { elementCssClasses, withElementCssDefaults } from "../ElementsDefinition";

/* Wrapper tags; ul / ol make each item an <li>. */
const featureboxTags = ['div', 'section', 'ul', 'ol'];

/*
	The featurebox's markup, shared with the builder preview (Featurebox.jsx):
	the `*` wrapper in options.tag (a div when unset - it fell back to ul
	while holding divs, which is not valid HTML) with one `loop-item` per
	item (an <li> when the wrapper is a list). Each item's blocks - its icon,
	featureboxTitle and featureboxDetails, laid out once as the featurebox's
	children - are drawn by renderItem with the item in LoopContext.

	The featurebox's selectors reach those blocks through FeatuerboxContext
	(the icon's `icon`, the title's `title`, the details' `description`),
	filled from the featurebox defaults so a missing key adds nothing - it
	added the word "undefined".
*/
export function FeatureboxMarkup({ cls, id, index, type, options, cssSelectors, items, renderItem, rootClassName = '', rootProps = {} }) {

	var Tag = featureboxTags.includes(options?.tag) ? options.tag : 'div';
	var ItemTag = Tag === 'ul' || Tag === 'ol' ? 'li' : 'div';
	var selectors = useMemo(() => withElementCssDefaults('featurebox', cssSelectors), [cssSelectors]);
	var contextValue = useMemo(() => ({ cssSelectors: selectors }), [selectors]);

	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			<FeatuerboxProvider value={contextValue}>
				{items.map((item, i) => (
					<ItemTag key={i} className={cls('loop-item')}>
						<LoopProvider value={item}>{renderItem(item, i)}</LoopProvider>
					</ItemTag>
				))}
			</FeatuerboxProvider>
		</Tag>
	);
}

/* A row (or grid) of features - title, description and icon each - drawn with the same blocks for every item. Nothing without items. */
const FeatureboxView = (props) => {

	/* A key the block lacks falls back to the featurebox defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('featurebox', props?.cssSelectors);

	var items = Array.isArray(props?.options?.items) ? props.options.items : [];
	var children = Array.isArray(props?.children) ? props.children : [];
	if (items.length === 0) return null;

	return (
		<FeatureboxMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} cssSelectors={props?.cssSelectors} items={items}
			renderItem={(item, i) => children.map((child, idx) => (
				<BlockRender key={child.id ?? idx} index={`${i}-${idx}`} block={child} />
			))}
		/>
	);
};

FeatureboxView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default FeatureboxView;
