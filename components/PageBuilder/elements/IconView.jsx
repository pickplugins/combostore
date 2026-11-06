import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import { useLoop } from "../context/LoopContext";
import { useFeatuerbox } from "../context/FeatuerboxContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The icon to draw and its size. Inside a featurebox (or collections) item
	the item's icon wins when it names one, and the item's iconSize when it
	is a number; otherwise the block's own options.iconName and options.size
	(20 when unset). An item with an empty icon used to blank the block's own
	icon (?? kept the ''), and the item's size was read but never used.
*/
export function iconSettings(options, loop) {
	var name = String(loop?.icon ?? '').trim() || options?.iconName || null;
	var size = Number(loop?.iconSize) || Number(options?.size) || 20;
	return { name, size, Icon: name ? TablerIcons[name] : null };
}

/*
	The icon's markup, shared with the builder preview (Icon.jsx): a `*`
	wrapper (plus a surrounding featurebox's `icon` classes) holding the
	icon. With options.label it is announced as that ("Free delivery");
	without one it is decorative and hidden from screen readers. The
	featurebox's classes used to add the word "undefined" when it had none.
*/
export function IconMarkup({ cls, id, index, type, options, Icon, size, children, rootClassName = '', rootProps = {} }) {
	var featurebox = useFeatuerbox();
	var featureboxClasses = String(featurebox?.cssSelectors?.['icon']?.classes ?? '');
	var label = String(options?.label ?? '').trim();
	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${featureboxClasses} ${rootClassName}`}
			{...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })} {...rootProps}>
			{Icon ? <Icon size={size} aria-hidden="true" /> : children}
		</div>
	);
}

/* A single Tabler icon. Nothing when the name is not a Tabler icon. */
const IconView = (props) => {

	/* A key the block lacks falls back to the icon defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('icon', props?.cssSelectors);

	const loop = useLoop();
	var { Icon, size } = iconSettings(props?.options, loop);
	if (!Icon) return null;

	return <IconMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} Icon={Icon} size={size} />;
};

IconView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default IconView;
