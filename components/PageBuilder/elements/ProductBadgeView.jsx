import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The product's badges (product_badge terms such as New, Sale, Best Seller),
	as picked in the product editor; an empty list when it has none.

	The shop used to fall back to two placeholder badges, "Tag Name" and
	"Tag Name 2", so every product without badges showed fake ones.
*/
export function badgesFor(product) {
	return (Array.isArray(product?.badges) ? product.badges : []).filter(badge => badge && badge.name);
}

/*
	The block's markup, shared with the builder preview (ProductBadge.jsx): an
	optional label, then one `item` per badge holding its name
	(`category-name`) and, between badges, options.separator (", " by
	default) in `separator`.

	Badges are plain text. They used to link to /badges/<slug>, but no such
	page exists - the catch-all route only serves pages built in the builder -
	so every link led to a 404. The separator option was declared but the text
	was hardcoded to ", ".
*/
export function ProductBadgeMarkup({ cls, id, index, type, options, badges, rootClassName = '', rootProps = {} }) {

	var separator = options?.separator ?? ', ';

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{options?.label && <div className={cls('label')}>{options.label}</div>}
			<div className={cls('items')}>
				{badges.map((item, itemIndex) => (
					<span key={item.slug ?? itemIndex} className={cls('item')}>
						<span className={cls('category-name')}>{item.name}</span>
						{itemIndex < badges.length - 1 && separator !== '' && (
							<span className={cls('separator')}>{separator}</span>
						)}
					</span>
				))}
			</div>
		</div>
	);
}

const ProductBadgeView = (props) => {

	/* A key the block lacks falls back to the productBadge defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productBadge', props?.cssSelectors);

	const product = usePost();
	var badges = badgesFor(product);
	if (badges.length === 0) return null;

	return <ProductBadgeMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options} badges={badges} />;
};

ProductBadgeView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductBadgeView;
