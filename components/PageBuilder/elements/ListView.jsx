import PropTypes from "prop-types";
import React from "react";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The list's markup, shared with the builder preview (List.jsx): a `*` <ul>
	(or <ol>, options.tag) of `li` items, each with an optional `icon` - the
	item's own, else options.icon, at the item's iconSize, else
	options.iconSize (24 when unset) - and its `text`.

	Every item used to get an icon <div> even without an icon, the per-item
	icon size was saved but never used, and a stray options.text sat as text
	inside the list.
*/
export function ListMarkup({ cls, id, index, type, options, items, rootClassName = '', rootProps = {} }) {

	var Tag = options?.tag === 'ol' ? 'ol' : 'ul';
	var DefaultIcon = tablerIcon(options?.icon);
	var defaultSize = Number(options?.iconSize) || 24;

	return (
		<Tag id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{items.map((item, i) => {
				var ItemIcon = tablerIcon(item?.icon) ?? DefaultIcon;
				return (
					<li key={i} className={cls('li')}>
						{ItemIcon && <span className={cls('icon')} aria-hidden="true"><ItemIcon size={Number(item?.iconSize) || defaultSize} /></span>}
						<span className={cls('text')}>{item?.text}</span>
					</li>
				);
			})}
		</Tag>
	);
}

/* A bulleted or numbered list of short texts, each with an optional icon. Nothing when it has no items. */
const ListView = (props) => {

	/* A key the block lacks falls back to the list defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('list', props?.cssSelectors);

	var items = Array.isArray(props?.options?.items) ? props.options.items : [];
	if (items.length === 0) return null;

	return <ListMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} items={items} />;
};

ListView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ListView;
