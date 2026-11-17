"use client"
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import NextImage from "next/image";
import { IconChevronLeft, IconChevronRight, IconMaximize, IconMinimize, IconX } from "@tabler/icons-react";
import { elementCssClasses } from "../ElementsDefinition";
import { canOptimizeImage, sizesAuto } from "@/lib/imageOptimization.mjs";
import { useAboveTheFold, imageLoadingProps } from "../aboveTheFold";

/*
	The `imageLightbox` element: a grid of images that opens a lightbox -
	one image at a time over the page, with arrows, keyboard (Left / Right,
	Escape, F for full screen), swipe, a counter, captions, a thumbnail strip
	and a full-screen button (the Fullscreen API; hidden where the browser has
	none, as on iPhone).

	options.images is a list of { id, src, alt, caption }. Items without a src
	are skipped. visibleCount > 0 shows only that many tiles and puts "+N" on
	the last one; the lightbox still steps through every image.
*/

/* The images a block shows: the ones with a src. */
export function lightboxImages(options) {
	return (Array.isArray(options?.images) ? options.images : [])
		.filter(item => item && typeof item === 'object' && String(item?.src ?? '').trim());
}

/* Fullscreen API with the webkit-prefixed fallback (older Safari on iPad / macOS). */
const fullscreenElementOf = (doc) => doc?.fullscreenElement ?? doc?.webkitFullscreenElement ?? null;
const canFullscreen = (doc) => !!(doc?.fullscreenEnabled ?? doc?.webkitFullscreenEnabled);
function enterFullscreen(node) {
	var request = node?.requestFullscreen ?? node?.webkitRequestFullscreen;
	try { var result = request?.call(node); result?.catch?.(() => { }); } catch (e) { }
}
function exitFullscreen(doc) {
	if (!fullscreenElementOf(doc)) return;
	var exit = doc?.exitFullscreen ?? doc?.webkitExitFullscreen;
	try { var result = exit?.call(doc); result?.catch?.(() => { }); } catch (e) { }
}

/*
	The lightbox overlay. It is portalled to the body of the document the
	block is in (the canvas iframe in the builder), so a parent's transform or
	overflow cannot clip a `fixed` overlay. While open it locks the page's
	scroll, moves focus to the close button and gives it back on close.
*/
export function Lightbox({ cls, images, startIndex = 0, options, onClose, doc }) {

	var count = images.length;
	var loop = options?.loop !== false;

	const [current, setCurrent] = useState(Math.min(Math.max(startIndex, 0), count - 1));
	const [isFullscreen, setIsFullscreen] = useState(false);
	const overlayRef = useRef(null);
	const closeRef = useRef(null);
	const thumbsRef = useRef(null);
	const touch = useRef(null);

	var hasPrev = count > 1 && (loop || current > 0);
	var hasNext = count > 1 && (loop || current < count - 1);
	var fullscreenAllowed = options?.showFullscreen !== false && canFullscreen(doc);

	const go = useCallback((step) => {
		setCurrent(at => {
			var next = at + step;
			if (next < 0) return loop ? count - 1 : 0;
			if (next >= count) return loop ? 0 : count - 1;
			return next;
		});
	}, [count, loop]);

	const toggleFullscreen = useCallback(() => {
		if (fullscreenElementOf(doc)) exitFullscreen(doc);
		else enterFullscreen(overlayRef.current);
	}, [doc]);

	const close = useCallback(() => {
		exitFullscreen(doc);
		onClose?.();
	}, [doc, onClose]);

	/* The latest handlers, for the listeners below - which are added once per opening. */
	const handlers = useRef({});
	handlers.current = { go, close, toggleFullscreen, fullscreenAllowed };

	/* Once per opening: keyboard, scroll lock, focus; full screen when asked. */
	useEffect(() => {
		var previousFocus = doc?.activeElement;
		var body = doc?.body;
		var previousOverflow = body?.style.overflow;
		if (body) body.style.overflow = 'hidden';
		closeRef.current?.focus({ preventScroll: true });
		if (options?.openFullscreen && handlers.current.fullscreenAllowed) enterFullscreen(overlayRef.current);

		function onKey(e) {
			var h = handlers.current;
			if (e.key === 'Escape') { e.preventDefault(); h.close(); }
			else if (e.key === 'ArrowLeft') { e.preventDefault(); h.go(-1); }
			else if (e.key === 'ArrowRight') { e.preventDefault(); h.go(1); }
			else if ((e.key === 'f' || e.key === 'F') && h.fullscreenAllowed && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); h.toggleFullscreen(); }
		}
		function onFullscreenChange() { setIsFullscreen(fullscreenElementOf(doc) === overlayRef.current); }

		doc?.addEventListener('keydown', onKey);
		doc?.addEventListener('fullscreenchange', onFullscreenChange);
		doc?.addEventListener('webkitfullscreenchange', onFullscreenChange);
		return () => {
			doc?.removeEventListener('keydown', onKey);
			doc?.removeEventListener('fullscreenchange', onFullscreenChange);
			doc?.removeEventListener('webkitfullscreenchange', onFullscreenChange);
			if (body) body.style.overflow = previousOverflow ?? '';
			previousFocus?.focus?.({ preventScroll: true });
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [doc]);

	/* Keep the active thumbnail in view. */
	useEffect(() => {
		var active = thumbsRef.current?.querySelector('[aria-current="true"]');
		active?.scrollIntoView?.({ block: 'nearest', inline: 'center', behavior: 'smooth' });
	}, [current]);

	/* Swipe: a mostly-horizontal move of 50px or more steps one image. */
	function onTouchStart(e) {
		var t = e.touches?.[0];
		touch.current = t ? { x: t.clientX, y: t.clientY } : null;
	}
	function onTouchEnd(e) {
		var start = touch.current;
		var t = e.changedTouches?.[0];
		touch.current = null;
		if (!start || !t) return;
		var dx = t.clientX - start.x, dy = t.clientY - start.y;
		if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
	}

	var item = images[current] ?? {};
	var caption = String(item?.caption ?? '').trim();
	var showCaptions = options?.showCaptions !== false;
	var showThumbnails = options?.showThumbnails !== false && count > 1;
	var stop = (e) => e.stopPropagation();

	return (
		<div ref={overlayRef} role="dialog" aria-modal="true" aria-label={options?.label || 'Image gallery'}
			className={cls('overlay')}
			onClick={e => { if (options?.closeOnBackdrop !== false && e.target === e.currentTarget) close(); }}>

			<div className={cls('toolbar')} onClick={stop}>
				<span className={cls('counter')} aria-live="polite">
					{options?.showCounter !== false && count > 1 ? `${current + 1} / ${count}` : ''}
				</span>
				<div className="flex items-center gap-2">
					{fullscreenAllowed && (
						<button type="button" className={cls('button')} onClick={toggleFullscreen}
							aria-label={isFullscreen ? 'Exit full screen' : 'Full screen'} title={isFullscreen ? 'Exit full screen (F)' : 'Full screen (F)'}>
							{isFullscreen ? <IconMinimize size={20} /> : <IconMaximize size={20} />}
						</button>
					)}
					<button ref={closeRef} type="button" className={cls('button')} onClick={close} aria-label="Close" title="Close (Esc)">
						<IconX size={20} />
					</button>
				</div>
			</div>

			<div className={cls('stage')}
				onClick={e => { if (options?.closeOnBackdrop !== false && e.target === e.currentTarget) close(); }}
				onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
				{/* The full-size file: a lightbox is where the detail is wanted. */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img key={item?.id ?? current} src={item?.src} alt={item?.alt ?? ''} className={cls('stage-image')} draggable={false} onClick={stop} />

				{hasPrev && (
					<button type="button" className={`${cls('arrow')} ${cls('prev')}`} onClick={e => { stop(e); go(-1); }} aria-label="Previous image">
						<IconChevronLeft size={26} />
					</button>
				)}
				{hasNext && (
					<button type="button" className={`${cls('arrow')} ${cls('next')}`} onClick={e => { stop(e); go(1); }} aria-label="Next image">
						<IconChevronRight size={26} />
					</button>
				)}
			</div>

			{showCaptions && caption && <div className={cls('lightbox-caption')} onClick={stop}>{caption}</div>}

			{showThumbnails && (
				<div ref={thumbsRef} className={cls('thumbnails')} onClick={stop}>
					{images.map((thumb, at) => (
						<button key={thumb?.id ?? at} type="button" aria-label={`Image ${at + 1}`} aria-current={at === current ? 'true' : undefined}
							className={`${cls('thumbnail')} ${at === current ? cls('thumbnail-active') : ''}`} onClick={() => setCurrent(at)}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={thumb?.src} alt="" className="h-full w-full object-cover" loading="lazy" draggable={false} />
						</button>
					))}
				</div>
			)}
		</div>
	);
}

/*
	The grid, shared with the builder preview (ImageLightbox.jsx). Each tile is
	a button that opens the lightbox on that image; `onTileClick`, when given,
	replaces that (the builder selects the block on a click and opens the
	lightbox on a double click instead).
*/
export function ImageLightboxMarkup({ cls, id, index, type, options, images, loadingProps = {}, rootClassName = '', rootProps = {}, onTileClick, onTileDoubleClick, openAt = null, setOpenAt, children }) {

	const rootRef = useRef(null);
	const [doc, setDoc] = useState(null);
	useEffect(() => { setDoc(rootRef.current?.ownerDocument ?? null); }, []);

	var visibleCount = parseInt(options?.visibleCount) || 0;
	var shown = visibleCount > 0 ? images.slice(0, visibleCount) : images;
	var hidden = images.length - shown.length;
	var showGridCaptions = !!options?.showGridCaptions;

	return (
		<div ref={rootRef} id={id} index={index} type={type} className={`${cls('*')} ${rootClassName}`} {...rootProps}>
			{shown.length === 0 ? children : shown.map((item, at) => {
				var caption = String(item?.caption ?? '').trim();
				var isLast = at === shown.length - 1;
				return (
					<figure key={item?.id ?? at} className={cls('figure')}>
						<button type="button" className={cls('item')}
							aria-label={`Open image ${at + 1} of ${images.length}${item?.alt ? `: ${item.alt}` : ''}`}
							onClick={e => { if (onTileClick) onTileClick(e, at); else setOpenAt?.(at); }}
							onDoubleClick={e => onTileDoubleClick?.(e, at)}>
							<NextImage src={item.src} width={parseInt(options?.width) || 600} height={parseInt(options?.height) || 600} alt={item?.alt ?? ''}
								className={cls('image')} unoptimized={!canOptimizeImage(item.src)} sizes={sizesAuto('(max-width: 640px) 50vw, 25vw')}
								{...(at === 0 ? loadingProps : {})} />
							{isLast && hidden > 0 && <span className={cls('more')}>+{hidden}</span>}
						</button>
						{showGridCaptions && caption && <figcaption className={cls('caption')}>{caption}</figcaption>}
					</figure>
				);
			})}

			{openAt != null && doc?.body && images.length > 0 && createPortal(
				<Lightbox cls={cls} images={images} startIndex={openAt} options={options} doc={doc} onClose={() => setOpenAt?.(null)} />,
				doc.body
			)}
		</div>
	);
}

/* The shop's gallery. Without images it renders nothing. */
const ImageLightboxView = (props) => {

	/* A key the block lacks falls back to the imageLightbox defaults in ElementsDefinition.js. */
	var cls = elementCssClasses('imageLightbox', props?.cssSelectors);
	var images = lightboxImages(props?.options);
	const [openAt, setOpenAt] = useState(null);
	/* Eager in the header, eager and high priority in the hero: see aboveTheFold.js. */
	var loadingProps = imageLoadingProps(useAboveTheFold());

	if (images.length === 0) return null;

	return (
		<ImageLightboxMarkup cls={cls} id={props?.id} index={props?.index} type={props?.type} options={props?.options ?? {}}
			images={images} openAt={openAt} setOpenAt={setOpenAt} loadingProps={loadingProps} />
	);
};

ImageLightboxView.propTypes = {
	index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	id: PropTypes.string,
	type: PropTypes.string,
	options: PropTypes.object,
	cssSelectors: PropTypes.object,
};

export default ImageLightboxView;
