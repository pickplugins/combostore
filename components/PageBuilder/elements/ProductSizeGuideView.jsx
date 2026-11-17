"use client";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState, useId } from "react";
import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";
import { usePost } from "../context/PostContext";
import { tablerIcon } from "@/components/icons/TablerIcon";
import { elementCssClasses } from "../ElementsDefinition";

/*
	The product's size guide (the product editor's "Size Guide" addon, saved in
	cstore_products.size_guide):
	{ title, unit, columns: [string], rows: [[string]], note, image: { src, title } | null }
*/

const LENGTH_UNITS = { cm: 'cm', in: 'inches', mm: 'mm' };
const SIZE_SYSTEMS = { eu: 'EU sizes', us: 'US sizes', uk: 'UK sizes' };

/* The guide to show, or null when the addon is off or the chart is empty. */
export function sizeGuideFor(product) {
	if (!Array.isArray(product?.addons) || !product.addons.includes('size_guide')) return null;

	var guide = product?.size_guide;
	if (!guide || typeof guide !== 'object' || Array.isArray(guide)) return null;

	var columns = Array.isArray(guide.columns) ? guide.columns.map(c => (c ?? '') + '') : [];
	var rows = Array.isArray(guide.rows)
		? guide.rows
			.filter(Array.isArray)
			.map(row => columns.map((_, i) => (row[i] ?? '') + ''))
			.filter(row => row.some(cell => cell.trim() !== ''))
		: [];

	if (!columns.length || !rows.length) return null;

	return {
		title: guide.title ?? '',
		unit: guide.unit ?? '',
		columns,
		rows,
		note: guide.note ?? '',
		image: guide.image?.src ? guide.image : null,
	};
}

/* "Measurements in cm", "EU sizes", or '' for no unit. */
function unitCaption(unit, options) {
	if (LENGTH_UNITS[unit]) return `${options?.unitPrefix ?? 'Measurements in'} ${LENGTH_UNITS[unit]}`.trim();
	return SIZE_SYSTEMS[unit] ?? '';
}

export function guideHeading(guide, options) {
	return guide?.title || options?.heading || 'Size guide';
}

/* The unit caption, the chart, the note and the image: the same in both displays. */
export function SizeGuideBody({ cls, guide, options }) {
	var caption = options?.showUnit !== false ? unitCaption(guide.unit, options) : '';

	return (
		<div className={cls('body')}>
			{caption && <div className={cls('unit')}>{caption}</div>}
			<div className={cls('table-wrap')}>
				<table className={cls('table')}>
					<thead className={cls('thead')}>
						<tr>
							{guide.columns.map((column, c) => (
								<th key={c} scope="col" className={cls('th')}>{column}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{guide.rows.map((row, r) => (
							<tr key={r} className={cls('tr')}>
								{row.map((cell, c) => c === 0
									? <th key={c} scope="row" className={`${cls('td')} ${cls('td-first')}`}>{cell}</th>
									: <td key={c} className={cls('td')}>{cell}</td>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{options?.showNote !== false && guide.note && <p className={cls('note')}>{guide.note}</p>}
			{options?.showImage !== false && guide.image?.src && (
				// eslint-disable-next-line @next/next/no-img-element
				<img src={guide.image.src} alt={guide.image.title || 'How to measure'} loading="lazy" className={cls('image')} />
			)}
		</div>
	);
}

/* The modal / preview panel: heading, close button, body. */
export function SizeGuidePanel({ cls, guide, options, titleId, onClose, closeRef, panelRef, onKeyDown, dialog = true }) {
	return (
		<div
			ref={panelRef}
			className={cls('panel')}
			{...(dialog ? { role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId } : {})}
			onClick={ev => ev.stopPropagation()}
			onKeyDown={onKeyDown}
		>
			<div className={cls('header')}>
				<h2 id={titleId} className={cls('title')}>{guideHeading(guide, options)}</h2>
				<button ref={closeRef} type="button" aria-label="Close size guide" className={cls('close')} onClick={onClose}>
					<IconX size={18} />
				</button>
			</div>
			<SizeGuideBody cls={cls} guide={guide} options={options} />
		</div>
	);
}

/* The trigger: icon + text. */
export function SizeGuideTrigger({ cls, options, onClick, expanded, buttonRef }) {
	/* A missing option is the default ruler; '' (reset in the picker) is no icon. */
	var Icon = tablerIcon(options?.icon ?? 'IconRuler2');
	var iconSize = Number(options?.iconSize) || 18;
	return (
		<button ref={buttonRef} type="button" className={cls('trigger')} aria-haspopup="dialog" aria-expanded={expanded} onClick={onClick}>
			{Icon && <span className={cls('icon')}><Icon size={iconSize} /></span>}
			<span className={cls('trigger-text')}>{options?.buttonText || 'Size guide'}</span>
		</button>
	);
}

/* The inline display: an optional heading, then the body. */
export function SizeGuideInline({ cls, guide, options }) {
	return (
		<>
			{options?.showHeading !== false && (
				<div className={cls('header')}>
					<h3 className={cls('title')}>{guideHeading(guide, options)}</h3>
				</div>
			)}
			<SizeGuideBody cls={cls} guide={guide} options={options} />
		</>
	);
}

const ProductSizeGuideView = (props) => {

	/* A key the block lacks falls back to the productSizeGuide defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productSizeGuide', props?.cssSelectors);
	var options = props?.options ?? {};

	const product = usePost();
	var guide = sizeGuideFor(product);
	var isPopup = options?.display !== 'inline';

	const [open, setOpen] = useState(false);
	const rootRef = useRef(null);
	const panelRef = useRef(null);
	const closeRef = useRef(null);
	const triggerRef = useRef(null);
	const titleId = useId();

	/* Render the modal into <body>: a transformed / blurred ancestor (a sticky
	   glassy header, a slider) would otherwise become the frame of `fixed`. */
	const [portalTarget, setPortalTarget] = useState(null);
	useEffect(() => {
		setPortalTarget(rootRef.current?.ownerDocument?.body ?? null);
	}, []);

	const close = () => {
		setOpen(false);
		triggerRef.current?.focus?.({ preventScroll: true });
	};

	/* Escape closes; focus moves to the close button. */
	useEffect(() => {
		if (!open) return;
		const doc = rootRef.current?.ownerDocument ?? document;
		const onKeyDown = (ev) => {
			if (ev.key === 'Escape') {
				ev.stopPropagation();
				close();
			}
		};
		doc.addEventListener('keydown', onKeyDown);
		closeRef.current?.focus?.({ preventScroll: true });
		return () => doc.removeEventListener('keydown', onKeyDown);
	}, [open]);

	/* Lock page scroll while open, without the page shifting as the scrollbar goes. */
	useEffect(() => {
		if (!open) return;
		const doc = rootRef.current?.ownerDocument ?? document;
		const body = doc.body;
		const win = doc.defaultView ?? window;
		const scrollbar = win.innerWidth - doc.documentElement.clientWidth;
		const previous = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
		body.style.overflow = 'hidden';
		if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
		return () => {
			body.style.overflow = previous.overflow;
			body.style.paddingRight = previous.paddingRight;
		};
	}, [open]);

	/* Keep Tab inside the modal. */
	const trapFocus = (ev) => {
		if (ev.key !== 'Tab' || !panelRef.current) return;
		const focusable = panelRef.current.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
		if (!focusable.length) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		const active = panelRef.current.ownerDocument.activeElement;
		if (ev.shiftKey && active === first) { ev.preventDefault(); last.focus(); }
		else if (!ev.shiftKey && active === last) { ev.preventDefault(); first.focus(); }
	};

	/* No guide on this product: no empty link or box on the shop. */
	if (!guide) return null;

	if (!isPopup) {
		return (
			<div id={props?.id} index={props?.index} type={props?.type} className={cls('*')} ref={rootRef}>
				<SizeGuideInline cls={cls} guide={guide} options={options} />
			</div>
		);
	}

	var modal = open ? (
		<div className={cls('overlay')} onClick={close}>
			<SizeGuidePanel cls={cls} guide={guide} options={options} titleId={titleId} onClose={close} closeRef={closeRef} panelRef={panelRef} onKeyDown={trapFocus} />
		</div>
	) : null;

	return (
		<div id={props?.id} index={props?.index} type={props?.type} className={cls('*')} ref={rootRef}
			/* Portalled or not, React events bubble up the tree: keep a product card's click from firing. */
			onClick={ev => ev.stopPropagation()}
		>
			<SizeGuideTrigger cls={cls} options={options} expanded={open} buttonRef={triggerRef} onClick={() => setOpen(true)} />
			{modal && (portalTarget ? createPortal(modal, portalTarget) : modal)}
		</div>
	);
};

ProductSizeGuideView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductSizeGuideView;
