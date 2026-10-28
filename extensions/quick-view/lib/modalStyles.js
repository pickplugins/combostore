/**
 * How the reused core elements are dressed inside the modal.
 *
 * The modal is not a page-builder block, so there is no options panel and no
 * `CssSelectors` editor behind it - these are the one place its look is
 * decided, which is why they are here rather than buried in the JSX.
 *
 * Every element reused from `components/PageBuilder/elements/` is handed a
 * map like this. Most of them index `cssSelectors['...']` with no guard, so
 * a missing map is a crash and a missing key is an unstyled element: each
 * one below lists every key its element actually reads.
 */

export const GALLERY = {
	'*': { classes: 'relative w-full overflow-hidden rounded-xl bg-gray-50' },
	'items': { classes: 'flex w-full' },
	'item': { classes: 'w-full shrink-0' },
	'image': { classes: 'h-full w-full object-contain aspect-square' },
	'arrows': { classes: 'pointer-events-none absolute inset-0 flex items-center justify-between px-2' },
	'prev': { classes: 'pointer-events-auto grid h-8 w-8 place-items-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white' },
	'next': { classes: 'pointer-events-auto grid h-8 w-8 place-items-center rounded-full bg-white/90 text-gray-700 shadow-sm transition-colors hover:bg-white' },
	'pagination': { classes: 'absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5' },
	'dot': { classes: 'h-1.5 w-1.5 rounded-full bg-gray-900/25' },
};

export const PRICE = {
	'*': { classes: 'flex flex-wrap items-baseline gap-2' },
	'simple-price-wrap': { classes: 'flex flex-wrap items-baseline gap-2' },
	'simple-price-sale': { classes: 'text-2xl font-semibold text-gray-900' },
	'simple-price-regular': { classes: 'text-base text-gray-400 line-through' },
	'variable-price-wrap': { classes: 'flex flex-wrap items-baseline gap-1.5' },
	'variable-price-min': { classes: 'text-2xl font-semibold text-gray-900' },
	'variable-price-max': { classes: 'text-2xl font-semibold text-gray-900' },
};

export const VARIATIONS = {
	'*': { classes: 'flex flex-col gap-3' },
	'attr-wrap': { classes: 'flex flex-col gap-3' },
	'attr-item': { classes: 'flex flex-col gap-1.5' },
	'attr-title': { classes: 'text-xs font-medium uppercase tracking-wide text-gray-500' },
	'attr-items-wrap': { classes: 'flex flex-wrap gap-2' },
	'variation-item': { classes: 'rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-gray-900' },
	'variation-selected': { classes: '!border-gray-900 !bg-gray-900 !text-white' },
	'variation-disabled': { classes: 'cursor-not-allowed opacity-40 line-through' },
};

export const ADD_TO_CART = {
	'*': { classes: 'flex flex-wrap items-stretch gap-3' },
	'quantity-wrapper': { classes: 'flex items-center rounded-xl border border-gray-300' },
	'quantity-minus': { classes: 'grid h-11 w-10 place-items-center text-gray-400 transition-colors hover:text-gray-900' },
	'quantity-input': { classes: 'h-11 w-12 border-0 bg-transparent text-center text-sm text-gray-900 outline-none' },
	'quantity-plus': { classes: 'grid h-11 w-10 place-items-center text-gray-400 transition-colors hover:text-gray-900' },
	'button-wrapper': { classes: 'inline-flex h-11 flex-1 min-w-40 items-center justify-center gap-2 rounded-xl bg-[#634FE5] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#5540d4]' },
	'button-icon': { classes: '' },
	'button-label': { classes: '' },
};

export const STOCK = {
	'*': { classes: 'inline-flex items-center gap-1.5 text-xs' },
	'label': { classes: 'text-gray-500' },
	'label-icon': { classes: '' },
	'label-text': { classes: '' },
	'icon': { classes: '' },
	'stock-status': { classes: 'font-medium' },
	'in-stock': { classes: 'text-green-600' },
	'out-of-stock': { classes: 'text-red-500' },
};

export const SKU = {
	'*': { classes: 'inline-flex items-center gap-1.5 text-xs text-gray-400' },
	'label': { classes: '' },
	'icon': { classes: '' },
	'sku': { classes: 'font-mono text-gray-600' },
};

export const CATEGORIES = {
	'*': { classes: 'flex flex-wrap items-center gap-1 text-xs text-gray-500' },
	'label': { classes: 'text-gray-400' },
	'item': { classes: 'text-gray-500 underline-offset-2 hover:text-[#634FE5] hover:underline' },
};
