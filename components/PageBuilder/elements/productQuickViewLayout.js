/*
	Layout shared by the Product Quick View storefront view
	(ProductQuickViewView.jsx) and its builder canvas (ProductQuickView.jsx),
	so the two cannot drift apart.

	Only placement lives here; looks come from the block's cssSelectors.
	A block saved without a position opens as a centred modal, which is what
	a quick view is - it used to fall through to an unpositioned box that
	hung off the button.
*/

export const defaultQuickViewPosition = 'fixedMiddle';

export const quickViewPosition = (position) => position || defaultQuickViewPosition;

export const isFixedQuickView = (position) => {
	var p = quickViewPosition(position);
	return p === 'fixedLeft' || p === 'fixedRight' || p === 'fixedMiddle';
};

/* Classes that place the panel. For the modal the panel sits in a centring
   layer (quickViewModalLayer), so it is sized here rather than positioned:
   that keeps the centring free of transforms, which animate.css would
   overwrite mid-animation. Drawers take their width from the `popover`
   classes, as before. */
export const quickViewPositionClass = (position) => {
	switch (quickViewPosition(position)) {
		case 'topLeft': return 'absolute left-0 bottom-full mb-2 w-80 max-w-[calc(100vw-2rem)] max-h-[70vh]';
		case 'topRight': return 'absolute right-0 bottom-full mb-2 w-80 max-w-[calc(100vw-2rem)] max-h-[70vh]';
		case 'bottomLeft': return 'absolute left-0 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] max-h-[70vh]';
		case 'bottomRight': return 'absolute right-0 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] max-h-[70vh]';
		case 'fixedLeft': return 'fixed top-0 left-0 h-full max-h-none';
		case 'fixedRight': return 'fixed top-0 right-0 h-full max-h-none';
		case 'fixedMiddle':
		default: return 'relative pointer-events-auto w-full max-w-4xl max-h-full';
	}
};

/* The modal's centring layer: lets clicks through to the backdrop around the panel. */
export const quickViewModalLayer = 'fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-3 sm:p-6 pointer-events-none';

/* Holds the close button at the panel's top-right while its content scrolls. */
export const quickViewCloseHolder = 'sticky top-0 z-10 flex h-0 justify-end';
