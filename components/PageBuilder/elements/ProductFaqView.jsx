'use client'
import PropTypes from "prop-types";
import React, { useState } from "react";
import { IconChevronDown, IconChevronUp, IconPlus, IconMinus } from "@tabler/icons-react";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";
import { toggleOpenItem } from "./AccordionView";

/*
	The product's FAQ (the product editor's "FAQ" addon, saved in
	cstore_products.faq): [{ title, content }], content being plain text.
*/

/* The questions to show, or [] when the addon is off or nothing is filled in. */
export function faqItemsFor(product) {
	if (!Array.isArray(product?.addons) || !product.addons.includes('faq')) return [];
	if (!Array.isArray(product?.faq)) return [];

	return product.faq
		.filter(item => item && typeof item === 'object')
		.map(item => ({ question: ((item.title ?? '') + '').trim(), answer: ((item.content ?? '') + '').trim() }))
		.filter(item => item.question !== '');
}

/* The items open on first render: the first one with openFirst, everything in list display. */
export function initialOpenItems(items, options) {
	if (options?.display === 'list') return items.map((_, i) => i);
	return options?.openFirst && items.length ? [0] : [];
}

function ToggleIcon({ open, style }) {
	if (style === 'plus') return open ? <IconMinus size={18} /> : <IconPlus size={18} />;
	return open ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />;
}

/*
	The block's markup, shared with the builder preview (ProductFaq.jsx): an
	optional heading, then a question header and an answer per item. A closed
	answer stays in the page (for search engines and find-in-page) and is
	hidden with the `hidden` attribute, as in the Accordion element. List
	display shows every answer with no toggles.
*/
export function ProductFaqMarkup({ cls, id, index, type, options, items, openItems, onToggle, rootClassName = '', rootProps = {} }) {
	var isList = options?.display === 'list';

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{options?.showHeading !== false && options?.heading && (
				<div className={cls('header')}>
					<h3 className={cls('title')}>{options.heading}</h3>
				</div>
			)}
			<div className={cls('items')}>
				{items.map((item, idx) => {
					var open = isList || openItems.includes(idx);
					var answerId = `${id}-answer-${idx}`;

					return (
						<div key={idx} className={`${cls('item')} ${open ? cls('item-open') : ''}`}>
							{isList ? (
								<div className={cls('question')}>
									<span className={cls('question-text')}>{item.question}</span>
								</div>
							) : (
								<div
									role="button"
									tabIndex={0}
									aria-expanded={open}
									aria-controls={answerId}
									className={cls('question')}
									onClick={ev => { ev.stopPropagation(); onToggle?.(idx); }}
									onKeyDown={ev => {
										if (ev.key !== 'Enter' && ev.key !== ' ') return;
										ev.preventDefault();
										onToggle?.(idx);
									}}
								>
									<span className={cls('question-text')}>{item.question}</span>
									<span className={cls('toggle')} aria-hidden="true"><ToggleIcon open={open} style={options?.toggleIcon} /></span>
								</div>
							)}
							<div id={answerId} hidden={!open} className={cls('answer')}>
								{item.answer}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const ProductFaqView = (props) => {

	/* A key the block lacks falls back to the productFaq defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productFaq', props?.cssSelectors);
	var options = props?.options ?? {};

	const product = usePost();
	var items = faqItemsFor(product);

	const [openItems, setOpenItems] = useState(() => initialOpenItems(items, options));

	/* No questions on this product: no empty heading on the shop. */
	if (!items.length) return null;

	return (
		<ProductFaqMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={options}
			items={items}
			openItems={openItems}
			onToggle={idx => setOpenItems(current => toggleOpenItem(current, idx, options?.multiple))}
		/>
	);
};

ProductFaqView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductFaqView;
