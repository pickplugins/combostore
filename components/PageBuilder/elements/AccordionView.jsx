'use client'

import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import BlockRender from '../BlockRender';
import { elementCssClasses } from "../ElementsDefinition";

/*
	The header labels for an accordion. They are joined to the accordionItem
	children by index; a block saved without them used to crash on
	`items[idx]`, so the list falls back to each child's own label.
*/
export function accordionItemsFor(options, children) {
	var items = Array.isArray(options?.items) ? options.items : [];
	return (children ?? []).map((child, idx) => items[idx] ?? { label: child?.options?.label || `Item ${idx + 1}`, classes: '' });
}

/*
	The accordion's markup, shared with the builder preview (Accordion.jsx) so
	the two cannot drift apart. Every class comes from `cls`, the block's
	cssSelectors lookup; `renderPanel(child, index)` draws one item's content,
	with BlockRender on the shop and BlockPreview in the builder. `rootProps`
	are spread onto the root, which is how the builder adds its drag handlers.

	A closed panel stays in the page (for search engines and find-in-page) and
	is hidden with the `hidden` attribute, which Tailwind v4 enforces with
	!important - so a display class on accordion-content cannot reopen it, as
	the old `block`/`hidden` class pair could. The chevron points down while
	closed and up while open; it used to be the other way round.
*/
export function AccordionMarkup({ cls, id, items, children, openItems, onToggle, renderPanel, rootClassName = '', rootProps = {} }) {
	return (
		<div id={id} className={`${cls('spacing')} ${cls('*')} ${rootClassName}`} {...rootProps}>
			<div className={cls('accordion-items')}>
				{(children ?? []).map((child, idx) => {

					var open = openItems.includes(idx);
					var panelId = `${id}-panel-${idx}`;

					return (
						<React.Fragment key={child.id ?? idx}>
							{/* A div with role="button" rather than a <button>, so it sizes and aligns exactly as before. */}
							<div
								role="button"
								tabIndex={0}
								aria-expanded={open}
								aria-controls={panelId}
								className={`${cls('accordion-header')} ${open ? cls('accordion-header-open') : ''} ${items[idx]?.classes ?? ''}`}
								onClick={ev => { ev.stopPropagation(); onToggle(idx); }}
								onKeyDown={ev => {
									if (ev.key !== 'Enter' && ev.key !== ' ') return;
									ev.preventDefault();
									onToggle(idx);
								}}
							>
								<div className={cls('header-label')}>{items[idx]?.label}</div>
								<div className={cls('header-icon')}>
									{open ? <IconChevronUp /> : <IconChevronDown />}
								</div>
							</div>
							<div id={panelId} hidden={!open} className={cls('accordion-content')}>
								{renderPanel(child, idx)}
							</div>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
}

/*
	Opens or closes one item. With options.multiple false, opening one closes
	the rest; by default several can be open at once, as before.
*/
export function toggleOpenItem(openItems, idx, multiple) {
	if (openItems.includes(idx)) return openItems.filter(i => i !== idx);
	return multiple === false ? [idx] : [...openItems, idx];
}

const AccordionView = (props) => {
	const { index, id } = props;

	const children = props?.children || [];
	var options = props?.options;
	var items = accordionItemsFor(options, children);

	/* Each part's classes; a key the block lacks falls back to the accordion defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('accordion', props?.cssSelectors);

	const [openItems, setOpenItems] = useState([]);

	return (
		<AccordionMarkup
			cls={cls}
			id={id}
			items={items}
			children={children}
			openItems={openItems}
			onToggle={idx => setOpenItems(current => toggleOpenItem(current, idx, options?.multiple))}
			renderPanel={(child, idx) => (
				<BlockRender index={`${index}-${idx}`} block={child} />
			)}
		/>
	);
};

AccordionView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
	children: PropTypes.array,
};

export default AccordionView;
