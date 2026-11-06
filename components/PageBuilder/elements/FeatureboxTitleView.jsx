import PropTypes from "prop-types";
import React from "react";
import { useLoop } from "../context/LoopContext";
import { useFeatuerbox } from "../context/FeatuerboxContext";
import { elementCssClasses } from "../ElementsDefinition";

/* Tags a featurebox title or description may be drawn as. */
const featureboxTextTags = ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'strong'];

/*
	A featurebox item's text, shared by the title and the description and
	their builder previews: the item's text in options.tag (the block's
	default when unset - both fell back to h1, so every feature's description
	was a top-level heading) with its own `*` classes plus the featurebox's
	`title` / `description` classes (parentKey).
*/
export function FeatureboxTextMarkup({ cls, parentKey, id, index, type, options, fallbackTag, text, rootClassName = '', rootProps = {} }) {
	var featurebox = useFeatuerbox();
	var parentCls = elementCssClasses('featurebox', featurebox?.cssSelectors);
	var Tag = featureboxTextTags.includes(options?.tag) ? options.tag : fallbackTag;
	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${parentCls(parentKey)} ${rootClassName}`} {...rootProps}>
			{text}
		</Tag>
	);
}

/* The title of the featurebox item it sits in; nothing outside a featurebox or for an untitled item. */
const FeatureboxTitleView = (props) => {

	/* A key the block lacks falls back to the featureboxTitle defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('featureboxTitle', props?.cssSelectors);

	const item = useLoop();
	var text = String(item?.title ?? '').trim();
	if (!text) return null;

	return <FeatureboxTextMarkup cls={cls} parentKey="title" id={props?.id} index={props?.index} type={props?.type} options={props?.options} fallbackTag="h3" text={text} />;
};

FeatureboxTitleView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default FeatureboxTitleView;
