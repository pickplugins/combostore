/*
	The popup's triggers - what opens it and what closes it - shared by the
	options panel (PopupOptions.jsx) and the shop runtime (PopupView.jsx).

	Ported from the combo-blocks popup block (src/blocks/popup and
	includes/blocks/popup/front-scripts.js). A block saves a list of
	{ id, ...fields } per kind (options.triggers / options.closeTriggers);
	any one of them firing opens (or closes) the popup. combo-blocks also
	stored an AND / OR relation per group, but its front script never read
	it - any rule fired the popup - so the relation is not carried over.

	Each field: { key, label, type: 'number' | 'text' | 'select', unit?,
	placeholder?, options? }. `defaults` is what a newly added trigger gets.

	`explicit` open triggers are the visitor asking for the popup (clicking
	a button, pressing a key): they open it every time, whatever the
	"show again" frequency says. The rest are the page offering it, and
	open it at most once per page view, within that frequency.
*/

export const OPEN_TRIGGERS = {
	initial: {
		label: 'On page load',
		description: 'As soon as the page is ready.',
		defaults: {},
		fields: [],
	},
	delay: {
		label: 'After a delay',
		description: 'A set time after the page loads.',
		defaults: { value: 3000 },
		fields: [{ key: 'value', label: 'Delay', type: 'number', unit: 'ms', placeholder: '3000' }],
	},
	scrollPercent: {
		label: 'Scroll percent',
		description: 'When the visitor has scrolled between these percentages of the page.',
		defaults: { min: 30, max: 100 },
		fields: [
			{ key: 'min', label: 'From', type: 'number', unit: '%', placeholder: '30' },
			{ key: 'max', label: 'To', type: 'number', unit: '%', placeholder: '100' },
		],
	},
	scrollFixed: {
		label: 'Scroll distance',
		description: 'When the visitor has scrolled between these distances from the top.',
		defaults: { min: 600, max: 100000 },
		fields: [
			{ key: 'min', label: 'From', type: 'number', unit: 'px', placeholder: '600' },
			{ key: 'max', label: 'To', type: 'number', unit: 'px', placeholder: '100000' },
		],
	},
	scrollEnd: {
		label: 'Scroll to the end',
		description: 'When the visitor reaches the bottom of the page (95% or more).',
		defaults: {},
		fields: [],
	},
	scrollElement: {
		label: 'Scroll to an element',
		description: 'When an element (by #id or .class) comes into view.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Element', type: 'text', placeholder: '#newsletter' }],
	},
	clickFirst: {
		label: 'First click',
		description: 'On the first click anywhere on the page.',
		defaults: {},
		fields: [],
	},
	clickCount: {
		label: 'Click count',
		description: 'After this many clicks on the page.',
		defaults: { value: 5 },
		fields: [{ key: 'value', label: 'Clicks', type: 'number', placeholder: '5' }],
	},
	clickRight: {
		label: 'Right click',
		description: 'When the visitor right-clicks (the browser menu still opens).',
		defaults: {},
		fields: [],
	},
	onExit: {
		label: 'Exit intent',
		description: 'When the pointer leaves through the top of the window, towards the tabs or address bar. Desktop only.',
		defaults: {},
		fields: [],
	},
	clickElement: {
		label: 'Click an element',
		description: 'When an element (by #id or .class) is clicked - e.g. a button. Opens every time.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Element', type: 'text', placeholder: '.open-offer' }],
		explicit: true,
	},
	keyPress: {
		label: 'Key press',
		description: 'When the visitor presses a key. Opens every time.',
		defaults: { value: 'Enter' },
		fields: [{ key: 'value', label: 'Key', type: 'text', placeholder: 'Enter, a, F2 ...' }],
		explicit: true,
	},
	mouseOverElement: {
		label: 'Mouse over an element',
		description: 'When the pointer moves onto an element (by #id or .class).',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Element', type: 'text', placeholder: '#banner' }],
	},
	mouseOutElement: {
		label: 'Mouse out of an element',
		description: 'When the pointer leaves an element (by #id or .class).',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Element', type: 'text', placeholder: '#banner' }],
	},
	urlParam: {
		label: 'URL parameter',
		description: 'When the page address has one of these parameters (comma separated), e.g. ?promo=1.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Parameters', type: 'text', placeholder: 'promo, utm_campaign' }],
	},
	cookieExist: {
		label: 'Cookie exists',
		description: 'When the browser has this cookie.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Cookie name', type: 'text', placeholder: 'returning_visitor' }],
	},
	cookieNotExist: {
		label: 'Cookie missing',
		description: 'When the browser does not have this cookie.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Cookie name', type: 'text', placeholder: 'newsletter_joined' }],
	},
	countdownExpired: {
		label: 'Countdown ended',
		description: 'When a Countdown Timer block on the page reaches zero while the visitor watches. Leave the id empty for any countdown.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Countdown block id', type: 'text', placeholder: 'Any countdown' }],
	},
};

export const CLOSE_TRIGGERS = {
	delay: {
		label: 'After a delay',
		description: 'Closes itself this long after opening.',
		defaults: { value: 10000 },
		fields: [{ key: 'value', label: 'Delay', type: 'number', unit: 'ms', placeholder: '10000' }],
	},
	keyPress: {
		label: 'Key press',
		description: 'When the visitor presses this key. (Escape always closes it.)',
		defaults: { value: 'Enter' },
		fields: [{ key: 'value', label: 'Key', type: 'text', placeholder: 'Enter' }],
	},
	clickOutside: {
		label: 'Click outside',
		description: 'When the visitor clicks the backdrop around the popup.',
		defaults: {},
		fields: [],
	},
	clickElement: {
		label: 'Click an element',
		description: 'When an element (by #id or .class) is clicked. Inside the popup, any element with the class popup-close also closes it.',
		defaults: { value: '' },
		fields: [{ key: 'value', label: 'Element', type: 'text', placeholder: '.no-thanks' }],
	},
	scrollPercent: {
		label: 'Scroll percent',
		description: 'When the visitor scrolls past this percentage of the page.',
		defaults: { value: 80 },
		fields: [{ key: 'value', label: 'Past', type: 'number', unit: '%', placeholder: '80' }],
	},
};

/* Entrance / close animations (animate.css, already loaded by the cart). */
export const ENTRANCE_ANIMATIONS = ['none', 'fadeIn', 'fadeInUp', 'fadeInDown', 'zoomIn', 'bounceIn', 'backInDown', 'backInUp', 'slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'flipInX', 'rotateIn'];
export const CLOSE_ANIMATIONS = ['none', 'fadeOut', 'fadeOutDown', 'fadeOutUp', 'zoomOut', 'bounceOut', 'backOutDown', 'backOutUp', 'slideOutDown', 'slideOutUp', 'slideOutLeft', 'slideOutRight', 'flipOutX', 'rotateOut'];

/* A new trigger of this id, with its defaults. */
export function newTrigger(catalogue, id) {
	return { id, ...(catalogue[id]?.defaults ?? {}) };
}
