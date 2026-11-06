import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import IconPicker from "../../../components/IconPicker";

/*
	What the chat-order buttons (whatsappButton, messengerButton) share: the
	product message with its placeholders, the canvas's sample product, and the
	markup. Each button only adds how its link is built (wa.me / m.me).
*/

const appUrl = process.env.NEXT_PUBLIC_STORE_URL;

export const defaultProductMessage = 'Hi i want to buy {product_title} {product_url}';

/* The placeholders a message can use, for the settings panels. */
export const productMessagePlaceholders = {
	'{product_id}': 'Product ID',
	'{product_title}': 'Product title',
	'{product_price}': 'Product price (the sale price when there is one)',
	'{product_description}': 'Product excerpt',
	'{product_image}': 'Product image URL',
	'{product_url}': 'Product page URL',
};

/*
	A stand-in product for the canvas, where no page provides one, shaped like
	the shop's posts so the message is built the same way.
*/
export const sampleProduct = {
	id: 123,
	title: 'Product Title',
	price: 52,
	excerpt: 'Product Description',
	post_thumbnail: { src: '' },
	slug: 'product-slug',
};

/* Replaces each placeholder (longest first) in the message with the product's value. */
export function formatProductMessage(template, product) {
	var base = String(appUrl ?? '').replace(/\/+$/, '');
	var values = {
		'{product_id}': product?.id ?? '',
		'{product_title}': product?.title ?? '',
		'{product_price}': product?.sale_price || product?.price || '',
		'{product_description}': product?.excerpt ?? '',
		'{product_image}': product?.post_thumbnail?.src ?? '',
		'{product_url}': product?.slug ? `${base}/product/${product.slug}` : '',
	};

	return Object.keys(values)
		.sort((a, b) => b.length - a.length)
		.reduce((text, key) => text.split(key).join(String(values[key])), String(template ?? ''));
}

/*
	The button's markup, shared by each button's shop view and builder preview
	so they cannot drift apart: a `*` box holding the `link` (an <a>, opened in
	a new tab), the optional `icon` and the `label`. Without an href the link
	is a <span>, so the builder still shows an unfinished button. `rootProps`
	are spread onto the root, which is how the builder adds its click and drag
	handlers.

	The label div is always rendered (presets make icon-only buttons with an
	empty label and `empty:hidden`). options.label is the label.
*/
export function ChatButtonMarkup({ cls, id, index, type, options, href, defaultLabel = '', rootClassName = '', rootProps = {} }) {

	var label = options?.label ?? defaultLabel;
	var IconX = TablerIcons[options?.icon];
	/* The definitions' 20, also for blocks saved without the key (tabler's own default is 24). */
	var iconSize = Number(options?.iconSize) || 20;

	var content = (
		<>
			{IconX && (
				<div className={cls('icon')}>
					<IconX size={iconSize} />
				</div>
			)}
			<div className={cls('label')}>{label}</div>
		</>
	);

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{href ? (
				<a className={cls('link')} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
			) : (
				<span className={cls('link')}>{content}</span>
			)}
		</div>
	);
}

/* The builder's selection and drag chrome for a chat button's root. */
export function chatButtonCanvasProps(props) {
	var { setDraggingBlock, dragOverIndex, setDragOverIndex, setSelectedId, selectedId, index, id } = props ?? {};

	return {
		rootClassName: `hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''}`,
		rootProps: {
			draggable: true,
			onClick: e => {
				e.preventDefault();
				e.stopPropagation();
				setSelectedId(selectedId != id ? id : null);
			},
			onDragStart: e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			},
			onDragEnd: () => { setDraggingBlock(null); setDragOverIndex(null); },
			onDragOver: e => { e.preventDefault(); setDragOverIndex(index); },
			onDragLeave: () => setDragOverIndex(null),
		},
	};
}

/* The message and icon fields both chat buttons' panels share. */
export function ChatButtonMessageFields({ options, setOption, inputClass }) {
	return (
		<>
			<div className="flex flex-col gap-2">
				<label htmlFor="" className="text-xs font-medium text-gray-600">Message</label>
				<textarea rows={3} placeholder={defaultProductMessage} className={inputClass} value={options?.message ?? ''} onChange={ev => setOption('message', ev.target.value)} />
				<ul className="flex flex-col gap-1 text-xs text-gray-500">
					{Object.entries(productMessagePlaceholders).map(([key, label]) => (
						<li key={key}><code>{key}</code>: {label}</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="" className="text-xs font-medium text-gray-600">Icon</label>
				<IconPicker allowReset={true} value={''} position={`right`} label={`Choose`} labelClass={'inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-600 cursor-pointer transition-colors hover:border-brand/40 hover:bg-brand/5 hover:text-brand-700 w-fit'} onOptionsChoose={(args) => setOption('icon', args)} />
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="" className="text-xs font-medium text-gray-600">Icon Size</label>
				<input type="number" placeholder="20" className={inputClass} value={options?.iconSize ?? ''} onChange={ev => setOption('iconSize', ev.target.value)} />
			</div>
		</>
	);
}
