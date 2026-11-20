"use client";
import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { elementCssClasses } from "../ElementsDefinition";
import { normalizeWarranty, warrantySummary } from "@/components/shop-elements/WarrantyEditor";

/*
	The product's warranty (the product editor's "Warranty" addon, saved in
	cstore_products.warranty):
	{ type, duration, period, provider, coverage, exclusions, claim, contact }
*/

/* The warranty to show, or null when the addon is off or no length is set. */
export function warrantyFor(product) {
	if (!Array.isArray(product?.addons) || !product.addons.includes('warranty')) return null;
	var saved = product?.warranty;
	if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return null;

	var warranty = normalizeWarranty(saved);
	var summary = warrantySummary(warranty);
	if (!summary) return null;

	return { ...warranty, summary };
}

const SECTIONS = [
	{ key: 'coverage', show: 'showCoverage', label: 'coverageLabel', fallback: 'What is covered' },
	{ key: 'exclusions', show: 'showExclusions', label: 'exclusionsLabel', fallback: 'Not covered' },
	{ key: 'claim', show: 'showClaim', label: 'claimLabel', fallback: 'How to claim' },
	{ key: 'contact', show: 'showContact', label: 'contactLabel', fallback: 'Claim contact' },
];

/* The summary line, then (in full display) each filled-in detail. Shared with the builder. */
export function WarrantyContent({ cls, warranty, options }) {
	/* A missing option is the default shield; '' (reset in the picker) is no icon. */
	var Icon = tablerIcon(options?.icon ?? 'IconShieldCheck');
	var iconSize = Number(options?.iconSize) || 18;
	var full = options?.display === 'full';
	var sections = full ? SECTIONS.filter(s => options?.[s.show] !== false && (warranty[s.key] ?? '').trim() !== '') : [];

	return (
		<>
			<div className={cls('summary')}>
				{Icon && <span className={cls('icon')}><Icon size={iconSize} /></span>}
				<span className={cls('summary-text')}>{warranty.summary}</span>
				{options?.showProvider !== false && warranty.provider && (
					<span className={cls('provider')}>{`${options?.providerPrefix ?? 'by'} ${warranty.provider}`.trim()}</span>
				)}
			</div>
			{sections.length > 0 && (
				<dl className={cls('details')}>
					{sections.map(s => (
						<div key={s.key} className={cls('section')}>
							<dt className={cls('section-title')}>{options?.[s.label] || s.fallback}</dt>
							<dd className={cls('section-text')}>{warranty[s.key]}</dd>
						</div>
					))}
				</dl>
			)}
		</>
	);
}

const ProductWarrantyView = (props) => {

	/* A key the block lacks falls back to the productWarranty defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productWarranty', props?.cssSelectors);
	var options = props?.options ?? {};

	const product = usePost();
	var warranty = warrantyFor(product);

	/* No warranty on this product: nothing on the shop. */
	if (!warranty) return null;

	return (
		<div id={props?.id} index={props?.index} type={props?.type} className={cls('*')}>
			<WarrantyContent cls={cls} warranty={warranty} options={options} />
		</div>
	);
};

ProductWarrantyView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductWarrantyView;
