const breakPoints = {
	Mobile: {
		name: "Mobile",
		id: "Mobile",
		icon: '<span class="dashicons dashicons-smartphone">',
		min: 0,
		max: 767,
	},
	Tablet: {
		name: "Tablet",
		id: "Tablet",
		icon: '<span class="dashicons dashicons-tablet"></span>',
		min: 768,
		max: 991,
	},
	Desktop: {
		name: "Desktop",
		id: "Desktop",
		icon: '<span class="dashicons dashicons-desktop"></span>',
		min: 992,
		max: 1280,
	},
};

/*
  Canvas preview widths for the editor's device switcher, in the same file as
  the breakpoints they belong to so the two cannot drift: picking "Tablet"
  narrows the canvas to a width inside Tablet's 768-991 range, which is where
  the Tablet overrides the style panel writes actually take effect.

  Desktop is null - the canvas fills whatever room the panels leave rather
  than being pinned to the 1280 max, so collapsing a panel widens the page.
  Lives here rather than in PageBuilder.jsx to keep the canvas from importing
  its own parent.

  These are viewport widths, not element widths: the canvas renders in a frame
  of its own (see CanvasFrame), so the number picked here is what every media
  query on the page is compared against - `md:` from 820, base only at 390.
*/
export const DEVICE_WIDTHS = {
	Desktop: null,
	Tablet: 820,
	Mobile: 390,
};

export default breakPoints;
