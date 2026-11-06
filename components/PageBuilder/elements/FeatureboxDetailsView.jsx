import PropTypes from "prop-types";
import React from "react";
import { useLoop } from "../context/LoopContext";
import { FeatureboxTextMarkup } from "./FeatureboxTitleView";
import { elementCssClasses } from "../ElementsDefinition";

/* The description of the featurebox item it sits in, in a p by default (it was h1); nothing outside a featurebox or for an item without one. */
const FeatureboxDetailsView = (props) => {

	/* A key the block lacks falls back to the featureboxDetails defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('featureboxDetails', props?.cssSelectors);

	const item = useLoop();
	var text = String(item?.description ?? '').trim();
	if (!text) return null;

	return <FeatureboxTextMarkup cls={cls} parentKey="description" id={props?.id} index={props?.index} type={props?.type} options={props?.options} fallbackTag="p" text={text} />;
};

FeatureboxDetailsView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default FeatureboxDetailsView;
