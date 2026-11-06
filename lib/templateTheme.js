// lib/templateTheme.js
/*
	The site template's fonts and colors (builder: Templates > a template's
	settings, saved in the template's meta), as Tailwind classes.

	Pure JS with no Node or React imports, so every side can use it:
	  - lib/generateTailwindCSS adds TEMPLATE_THEME_TOKENS to the compiler's
	    input, so a page saved with `font-heading` or `bg-primary` gets the
	    rules for them;
	  - the builder canvas gives the same tokens to its Tailwind browser build;
	  - the storefront (app/layout.jsx, through TemplateThemeStyle) writes
	    templateThemeCss(meta): the @font-face rules and the --cs-* values the
	    tokens point at, plus the default heading/body font and colors.

	Tokens and their classes:
	  --font-heading / --font-body      font-heading, font-body
	  --color-primary ... --color-muted  bg-primary, text-primary/80, border-accent, ...
	Each falls back to a fixed value, so a page works before any template
	settings exist.

	meta shape:
	  fonts:      [{ family, name, src, weight, style, display }]  font files or Google Fonts CSS links;
	              name, when set, is the class: "brand" -> font-brand
	  typography: { heading, body }                          a family name, or a built-in key
	  colors:     { primary, secondary, accent, background, foreground, muted }
*/

export const TEMPLATE_COLOR_KEYS = ['primary', 'secondary', 'accent', 'background', 'foreground', 'muted'];

export const TEMPLATE_COLOR_DEFAULTS = {
	primary: '#634fe5',
	secondary: '#111827',
	accent: '#f59e0b',
	background: '#ffffff',
	foreground: '#111827',
	muted: '#6b7280',
};

const SANS_FALLBACK = 'ui-sans-serif, system-ui, sans-serif';

export const TEMPLATE_THEME_TOKENS = `@theme {
  --font-heading: var(--cs-font-heading, ${SANS_FALLBACK});
  --font-body: var(--cs-font-body, ${SANS_FALLBACK});
${TEMPLATE_COLOR_KEYS.map(k => `  --color-${k}: var(--cs-color-${k}, ${TEMPLATE_COLOR_DEFAULTS[k]});`).join('\n')}
}
`;

/* Fonts app/layout.jsx already loads with next/font, offered without adding anything. */
export const BUILT_IN_FONTS = {
	'builtin:geist': { label: 'Geist', css: 'var(--font-geist-sans)' },
	'builtin:dm-sans': { label: 'DM Sans', css: 'var(--font-dm-sans)' },
	'builtin:figtree': { label: 'Figtree', css: 'var(--font-figtree)' },
	'builtin:hind-siliguri': { label: 'Hind Siliguri', css: 'var(--font-hind-siliguri)' },
};

/*
	Font class names. A custom font with a class name ("brand") is the
	Tailwind class font-brand: a token --font-brand, compiled into a page when
	it is saved (app/api/tailwind-css reads the active template's fonts) and
	given to the canvas's browser build (templateThemeLive), and valued by the
	storefront's --cs-font-brand. Names Tailwind already uses for font-* are
	not allowed.
*/
export const RESERVED_FONT_CLASS_NAMES = [
	'heading', 'body', 'sans', 'serif', 'mono',
	'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black',
	'stretch', 'stretch-normal', 'family-name', 'features', 'variation', 'feature-settings', 'variation-settings',
];

/* "Brand Sans" / "font-brand" -> "brand-sans" / "brand": lowercase letters, digits and dashes. */
export function cleanFontClassName(value) {
	return String(value ?? '')
		.trim()
		.toLowerCase()
		.replace(/^font-/, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 40);
}

/* The class names other families use, from { name: family }. */
function takenByOtherFamilies(familyOfName, family) {
	return Object.keys(familyOfName).filter(name => familyOfName[name] !== family);
}

/*
	The class names fonts before `index` in the list give to families other
	than its own - one family's entries (its weights) may share a name.
*/
export function fontClassNamesTakenBefore(fonts, index) {
	var familyOfName = {};
	(fonts ?? []).slice(0, index).forEach(f => {
		var name = cleanFontClassName(f?.name);
		if (name && !familyOfName[name]) familyOfName[name] = cleanFamily(f?.family);
	});
	return takenByOtherFamilies(familyOfName, cleanFamily(fonts?.[index]?.family));
}

/* Why a class name cannot be used, or '' when it can. `taken` is the names already given to other families. */
export function fontClassNameProblem(name, taken = []) {
	if (!name) return '';
	if (!/^[a-z]/.test(name)) return 'Start with a letter.';
	if (RESERVED_FONT_CLASS_NAMES.includes(name)) return `font-${name} is already a Tailwind or template class.`;
	if (taken.includes(name)) return 'Another font already uses this class name.';
	return '';
}

/* ---- cleaning: these values go into a <style> on every storefront page ---- */

export function cleanFamily(value) {
	return String(value ?? '').replace(/[^\p{L}\p{N} _-]+/gu, '').replace(/\s+/g, ' ').trim().slice(0, 60);
}

/* An http(s) or site-relative URL with nothing that could end a url() or a tag. */
export function cleanUrl(value) {
	var url = String(value ?? '').trim();
	if (!/^(https?:\/\/|\/)/i.test(url)) return '';
	if (/["'()\\<>\s]/.test(url)) return '';
	return url.slice(0, 500);
}

export function cleanColor(value) {
	var v = String(value ?? '').trim();
	if (/^#[0-9a-f]{3,8}$/i.test(v)) return v;
	if (/^(rgb|rgba|hsl|hsla|oklch|oklab|lab|lch)\([0-9a-z.,%\s/+-]{1,80}\)$/i.test(v)) return v;
	if (/^[a-z]{3,20}$/i.test(v)) return v;
	return '';
}

const FONT_STYLES = ['normal', 'italic', 'oblique'];
const FONT_DISPLAYS = ['auto', 'block', 'swap', 'fallback', 'optional'];

function cleanWeight(value) {
	var v = String(value ?? '').trim().toLowerCase();
	if (/^[1-9]00( [1-9]00)?$/.test(v) || v === 'normal' || v === 'bold') return v;
	return '';
}

/* Google Fonts (and similar) give a stylesheet to link; anything else is a font file for @font-face. */
export function isFontStylesheet(src) {
	return /^https:\/\/(fonts\.googleapis\.com|fonts\.bunny\.net)\/css2?\?/i.test(src) || /\.css(\?|$)/i.test(src);
}

function fontFormat(src) {
	var ext = (src.split('?')[0].match(/\.([a-z0-9]+)$/i) || [])[1]?.toLowerCase();
	return { woff2: 'woff2', woff: 'woff', ttf: 'truetype', otf: 'opentype' }[ext] || '';
}

/* The CSS font-family value a typography setting stands for, or '' for "default". */
export function typographyFamily(value) {
	var v = String(value ?? '').trim();
	if (!v) return '';
	if (BUILT_IN_FONTS[v]) return `${BUILT_IN_FONTS[v].css}, ${SANS_FALLBACK}`;
	/* A built-in key that no longer exists means "default". */
	if (v.startsWith('builtin:')) return '';
	var family = cleanFamily(v);
	return family ? `"${family}", ${SANS_FALLBACK}` : '';
}

/* The template meta, cleaned: only the keys and values above survive. */
export function normalizeTemplateTheme(meta) {
	var m = meta && typeof meta === 'object' && !Array.isArray(meta) ? meta : {};

	var familyOfName = {};
	var fonts = (Array.isArray(m.fonts) ? m.fonts : []).map(f => {
		var name = cleanFontClassName(f?.name);
		var family = cleanFamily(f?.family);
		/* A reserved class name, or one another family already has, is dropped; the font itself still loads. Entries of one family (its weights) may share it. */
		if (fontClassNameProblem(name, takenByOtherFamilies(familyOfName, family))) name = '';
		if (name && !familyOfName[name]) familyOfName[name] = family;
		return {
			family: family,
			name: name,
			src: cleanUrl(f?.src),
			weight: cleanWeight(f?.weight),
			style: FONT_STYLES.includes(f?.style) ? f.style : '',
			display: FONT_DISPLAYS.includes(f?.display) ? f.display : '',
		};
	}).filter(f => f.src && (f.family || isFontStylesheet(f.src)));

	var colors = {};
	TEMPLATE_COLOR_KEYS.forEach(k => { var c = cleanColor(m.colors?.[k]); if (c) colors[k] = c; });

	return {
		fonts,
		typography: { heading: String(m.typography?.heading ?? ''), body: String(m.typography?.body ?? '') },
		colors,
	};
}

/* The custom fonts that have a class name: [{ name, family, className }], one per name. */
export function templateFontClasses(meta) {
	var seen = new Set();
	return normalizeTemplateTheme(meta).fonts
		.filter(f => f.name && f.family && !seen.has(f.name) && seen.add(f.name))
		.map(f => ({ name: f.name, family: f.family, className: `font-${f.name}` }));
}

/* @theme tokens for those classes, for the compiler and the canvas; '' when there are none. */
export function templateFontTokens(meta) {
	var classes = templateFontClasses(meta);
	if (!classes.length) return '';
	return `@theme {\n${classes.map(c => `  --font-${c.name}: var(--cs-font-${c.name}, "${c.family}", ${SANS_FALLBACK});`).join('\n')}\n}\n`;
}

/* The template classes for the class picker: the fixed tokens' and the custom fonts'. */
export function templateClassSuggestions(meta) {
	var colorClasses = TEMPLATE_COLOR_KEYS.flatMap(k => [`bg-${k}`, `text-${k}`, `border-${k}`]);
	return [...new Set(['font-heading', 'font-body', ...templateFontClasses(meta).map(c => c.className), ...colorClasses])];
}

/* The <link> hrefs the fonts need (Google Fonts and other font stylesheets). */
export function templateFontStylesheets(meta) {
	return [...new Set(normalizeTemplateTheme(meta).fonts.filter(f => isFontStylesheet(f.src)).map(f => f.src))];
}

/*
	The storefront stylesheet for a template's settings:
	  - an @font-face per font file;
	  - :root { --cs-... } for each set font and color (the tokens' values);
	  - the defaults, inside .cs-page (the storefront's page wrapper,
	    PageBuilderContent; the builder canvas body has it too) so the
	    dashboard, which shares the root layout, keeps its own fonts: the body
	    font and colors on the page, the heading font on h1-h6.
	Returns '' when nothing is set.
*/
export function templateThemeCss(meta) {
	var theme = normalizeTemplateTheme(meta);
	var out = [];

	theme.fonts.filter(f => !isFontStylesheet(f.src) && f.family).forEach(f => {
		var format = fontFormat(f.src);
		out.push(`@font-face{font-family:"${f.family}";src:url("${f.src}")${format ? ` format("${format}")` : ''};` +
			`${f.weight ? `font-weight:${f.weight};` : ''}${f.style ? `font-style:${f.style};` : ''}font-display:${f.display || 'swap'};}`);
	});

	var heading = typographyFamily(theme.typography.heading);
	var body = typographyFamily(theme.typography.body);

	var vars = [];
	if (heading) vars.push(`--cs-font-heading:${heading}`);
	if (body) vars.push(`--cs-font-body:${body}`);
	/* The custom font classes' values (their tokens fall back to the same family). */
	templateFontClasses(meta).forEach(c => vars.push(`--cs-font-${c.name}:"${c.family}", ${SANS_FALLBACK}`));
	Object.entries(theme.colors).forEach(([k, v]) => vars.push(`--cs-color-${k}:${v}`));
	if (vars.length) out.push(`:root{${vars.join(';')}}`);

	/*
		The defaults read the --cs-* values directly (a page's own stylesheet only
		declares --font-body and friends when it uses those classes), and sit in
		@layer base, below every utility - the app's (@layer utilities) and a
		page's stored ones (unlayered) - so a block's own font or color class still
		wins. Unlayered, these would beat the app's utilities.
	*/
	var page = [];
	if (body) page.push('font-family:var(--cs-font-body)');
	if (theme.colors.foreground) page.push('color:var(--cs-color-foreground)');
	if (theme.colors.background) page.push('background-color:var(--cs-color-background)');
	var base = [];
	if (page.length) base.push(`.cs-page{${page.join(';')}}`);
	if (heading) base.push(`.cs-page :where(h1,h2,h3,h4,h5,h6){font-family:var(--cs-font-heading)}`);
	if (base.length) out.push(`@layer base{${base.join('')}}`);

	return out.join('\n');
}
