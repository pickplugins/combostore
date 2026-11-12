"use client"
import PropTypes from "prop-types";
import React from "react";
import { useRef, useEffect } from "react";
import { usePost } from "../context/PostContext";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
import { useActiveVariation } from "../context/VariationScope";
import { elementCssClasses } from "../ElementsDefinition";
import { canOptimizeImage, sizesAuto } from "@/lib/imageOptimization.mjs";

/*
	The images a product's gallery shows: its variations' images when any
	variation has one (so picking a variation can slide to it), otherwise the
	product gallery, otherwise the featured image, otherwise one placeholder.

	It is worked out from the product on every render. The old view copied it
	into state once, so a gallery that loaded after the first render never
	showed; and a product with no featured image put an empty array where an
	image belongs.
*/
export function productGalleryImages(product) {
	var variationImages = (Array.isArray(product?.variations) ? product.variations : [])
		.map(variation => variation?.thumbnail)
		.filter(thumbnail => thumbnail && typeof thumbnail === 'object' && !Array.isArray(thumbnail))
		/* Variations often share a picture (one phone, several storage sizes): show it once. Repeats were
		   duplicate slides with duplicate React keys. */
		.filter((thumbnail, index, all) => all.findIndex(other => (other?.id ?? other?.src) === (thumbnail?.id ?? thumbnail?.src)) === index);
	if (variationImages.length > 0) return variationImages;

	var gallery = (Array.isArray(product?.gallery) ? product.gallery : []).filter(item => item && typeof item === 'object');
	if (gallery.length > 0) return gallery;

	var thumbnail = product?.post_thumbnail;
	if (thumbnail && typeof thumbnail === 'object' && !Array.isArray(thumbnail)) return [thumbnail];

	return [{}];
}

/* The thumbnail strip's Splide settings; fixed sizes so it stays one row. */
const thumbnailOptions = {
	fixedWidth: 90,
	fixedHeight: 70,
	gap: 10,
	rewind: true,
	pagination: false,
	cover: true,
	isNavigation: true,
	focus: 'center',
	breakpoints: { 640: { fixedWidth: 65, fixedHeight: 55 } },
};

/*
	The gallery's markup, shared with the builder preview (ProductGallery.jsx):
	the main slider and, with options.thumbnails, a thumbnail strip synced to
	it. The slider's arrows and dots get the block's classes through Splide's
	`classes` option, next to Splide's own class names (which it uses to find
	them). `activeImageId` slides to that image when it is in the gallery.
	Images from the store's server are resized by next/image (they were
	`unoptimized`, full-size uploads; see lib/imageOptimization.mjs). The
	first image - the product page's largest paint - loads eagerly at high
	priority; the rest stay lazy.
*/
export function ProductGalleryMarkup({ cls, id, index, type, options, images, title, activeImageId, rootClassName = '', rootProps = {} }) {

	const mainSplide = useRef(null);
	const thumbsSplide = useRef(null);

	const syncSliders = () => {
		if (mainSplide.current && thumbsSplide.current) mainSplide.current.sync(thumbsSplide.current);
	};

	useEffect(() => {
		if (activeImageId == null) return;
		const at = images.findIndex(item => item?.id === activeImageId);
		if (at >= 0) mainSplide.current?.go(at);
	}, [activeImageId]);

	/* A copy: the saved options must not be written to. */
	var sliderOptions = {
		...(options?.sliderOptions ?? {}),
		isNavigation: true,
		classes: {
			arrows: `splide__arrows arrows ${cls('arrows')}`,
			prev: `splide__arrow splide__arrow--prev prev ${cls('prev')}`,
			next: `splide__arrow splide__arrow--next next ${cls('next')}`,
			pagination: `splide__pagination pagination ${cls('pagination')}`,
			page: `splide__pagination__page dot ${cls('dot')} `,
		},
	};

	return (
		<div id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>

			<Splide
				onMounted={splide => { mainSplide.current = splide; syncSliders(); }}
				options={sliderOptions}
				className={cls('items')}
			>
				{images.map((item, itemIndex) => (
					<SplideSlide key={item?.id ?? itemIndex} className={cls('item')}>
						<Image unoptimized={!canOptimizeImage(item?.src || `/thumb.png`)} sizes={itemIndex === 0 ? '(max-width: 768px) 100vw, 60vw' : sizesAuto('(max-width: 768px) 100vw, 60vw')} {...(itemIndex === 0 ? { loading: 'eager', fetchPriority: 'high' } : {})} className={`${cls('image')} w-full h-auto`} src={item?.src || `/thumb.png`} alt={item?.alt || title || ""} width={500} height={500} />
					</SplideSlide>
				))}
			</Splide>

			{(options?.thumbnails && images.length > 1) && (
				<Splide
					onMounted={splide => { thumbsSplide.current = splide; syncSliders(); }}
					options={thumbnailOptions}
					aria-label="Product thumbnails"
					className={cls('thumbnails')}
				>
					{images.map((item, itemIndex) => (
						<SplideSlide key={item?.id ?? itemIndex} className={cls('thumbnail')}>
							<Image unoptimized={!canOptimizeImage(item?.src || `/thumb.png`)} sizes={sizesAuto('160px')} className={cls('thumbnail-image')} src={item?.src || `/thumb.png`} alt={item?.alt || title || ""} width={500} height={500} />
						</SplideSlide>
					))}
				</Splide>
			)}
		</div>
	);
}

const ProductGalleryView = (props) => {


	/* A key the block lacks falls back to the productGallery defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('productGallery', props?.cssSelectors);

	const product = usePost();
	/* The picked variation, for this product only - see VariationScope.jsx. */
	var activeVariation = useActiveVariation(product);

	return (
		<ProductGalleryMarkup
			cls={cls}
			id={props?.id}
			index={props?.index}
			type={props?.type}
			options={props?.options ?? {}}
			images={productGalleryImages(product)}
			title={product?.title}
			/* A variation without its own image used to crash the page; it now just stays put. */
			activeImageId={activeVariation?.thumbnail?.id ?? null}
		/>
	);
};

ProductGalleryView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ProductGalleryView;
