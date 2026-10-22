/**
 * What the layout generator in AIPrompts.jsx knows about this builder.
 *
 * The generator's whole job is to emit block nodes the canvas can render
 * without a human fixing them up afterwards, so almost everything here is
 * about handing the model the builder's own vocabulary:
 *
 *   - buildElementCatalog walks ElementsDefinition's entries and turns each
 *     element's `ai` metadata, option defaults, style slots and parent/child
 *     rules into one compact entry. The definitions stay the source of truth;
 *     nothing about an element is restated here, so an element added to the
 *     palette is an element added to the prompt.
 *   - buildOptionUsage reads the layouts in ready-layouts/, which are real
 *     hand-built pages. Option defaults alone under-document several elements
 *     - a button's `linkTo`, `url` and `icon` are not among its defaults - and
 *     a default can even be stale: postGrid's says `queryParams` while the
 *     renderer reads `options.queryPrams`. Observed usage does not drift.
 *   - The static sections cover what no definition records: the node shape,
 *     where classes live, how dynamic content binds, and what a good section
 *     actually looks like.
 *
 * The catalog is ~15k tokens and byte-identical on every call, which is why
 * buildSystemPrompt keeps it separate from the per-request text: the system
 * prompt carries a cache breakpoint, so it is charged once per cache window
 * instead of once per generation.
 *
 * sanitizeBlocks is the other half of the contract. Whatever the model sends,
 * only blocks the canvas can actually render reach the page: known types,
 * elements inside the parent their definition requires, defaults merged in,
 * and ids minted here rather than taken from the response.
 */

import { jsonrepair } from 'jsonrepair';

import Hero from './ready-layouts/Hero';
import LandingPages from './ready-layouts/LandingPages';
import ProductPage from './ready-layouts/ProductPage';

export const MODEL = 'claude-opus-5-5';

/* Big enough for a full landing page - a shipped template page is 30-60KB of
   JSON. Streamed, because a non-streamed request this long risks an HTTP
   timeout. */
export const MAX_TOKENS = 32000;

const uid = () => Math.random().toString(36).slice(2, 10);

const joinList = (value) => (Array.isArray(value) ? value.filter(Boolean).join(', ') : '');

const clone = (value) => (value == null ? value : JSON.parse(JSON.stringify(value)));


/* ------------------------------------------------------------------ catalog */

function describeOptions(options) {
	if (!options || Array.isArray(options) || !Object.keys(options).length) {
		return 'none';
	}

	const compact = JSON.stringify(options);

	return compact.length <= 400 ? compact : `keys only: ${Object.keys(options).join(', ')}`;
}

function summarizeSeedChildren(children) {
	if (!Array.isArray(children) || !children.length) {
		return '';
	}

	const counts = children.reduce((acc, child) => {
		if (child?.type) {
			acc[child.type] = (acc[child.type] ?? 0) + 1;
		}
		return acc;
	}, {});

	return Object.entries(counts)
		.map(([type, count]) => (count > 1 ? `${type} x${count}` : type))
		.join(', ');
}

/**
 * One catalog entry per element, built from its definition.
 *
 * Option defaults are printed as JSON so the model learns key names and value
 * shapes at once; where they are too long to be worth the tokens only the keys
 * are listed. Style slots are keys only - their default classes are merged
 * back in locally, so the model only needs to know which slots exist.
 */
function describeElement(element) {
	const ai = element?.ai ?? {};
	const lines = [`<${element.type}>${element.group?.length ? `  group: ${joinList(element.group)}` : ''}`];

	if (ai.purpose || element.description) {
		lines.push(ai.purpose ?? element.description);
	}
	if (ai.intent) {
		lines.push(`intent: ${ai.intent}`);
	}
	if (ai.useFor?.length) {
		lines.push(`use for: ${joinList(ai.useFor)}`);
	}
	if (ai.keywords?.length) {
		lines.push(`asked for as: ${joinList(ai.keywords)}`);
	}

	lines.push(`options: ${describeOptions(element.options)}`);
	lines.push(`style slots: ${Object.keys(element.cssSelectors ?? {}).join(', ') || '*'}`);

	if (element.parent?.length) {
		lines.push(`ONLY valid inside: ${joinList(element.parent)}`);
	}
	if (ai.canContain?.length) {
		lines.push(`expected children: ${joinList(ai.canContain)}`);
	}
	if (ai.childPurpose) {
		lines.push(`about children: ${ai.childPurpose}`);
	}

	const seeded = summarizeSeedChildren(element.children);

	if (seeded) {
		lines.push(`default children when you omit children: ${seeded}`);
	}
	if (ai.rules?.length) {
		lines.push(...ai.rules.map(rule => `- ${rule}`));
	}

	return lines.join('\n');
}

function buildElementCatalog(elements) {
	return (elements ?? []).map(describeElement).join('\n\n');
}


/**
 * Option keys the shipped layouts actually set, with one real value each.
 *
 * ready-layouts/ is already in the editor's bundle - PanelsRight renders its
 * picker from these - so reading them here costs nothing at runtime and keeps
 * the list honest: it is what the hand-built pages use, not what a definition
 * claims.
 */
function buildOptionUsage(libraries) {
	const byType = new Map();

	const visit = (node) => {
		if (Array.isArray(node)) {
			node.forEach(visit);
			return;
		}
		if (!node || typeof node !== 'object') {
			return;
		}

		if (typeof node.type === 'string' && node.options && !Array.isArray(node.options)) {
			if (!byType.has(node.type)) {
				byType.set(node.type, new Map());
			}

			const keys = byType.get(node.type);

			Object.entries(node.options).forEach(([key, value]) => {
				if (value === '' || value == null || keys.has(key)) {
					return;
				}
				keys.set(key, value);
			});
		}

		visit(node.children);
		visit(node.content);
		visit(node.pages);
	};

	libraries.forEach(visit);

	return [...byType.entries()]
		.filter(([, keys]) => keys.size)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([type, keys]) => {
			const pairs = [...keys.entries()].map(([key, value]) => {
				const printed = JSON.stringify(value);

				return `${key}=${printed.length > 160 ? `${printed.slice(0, 157)}...` : printed}`;
			});

			return `${type}: ${pairs.join('  ')}`;
		})
		.join('\n');
}


/* ------------------------------------------------------------ static prompt */

const ROLE = `You are the layout engine inside the Combo Store page builder. You turn a request into blocks the builder's canvas renders directly, and you answer with JSON and nothing else.

Work like a senior ecommerce web designer who happens to write this JSON: what you output has to look like a page someone would ship - clear hierarchy, generous spacing, one coherent colour story, real copy, and a layout that holds up from 390px to desktop.`;


const BLOCK_CONTRACT = `# The blocks you are writing

A page is a JSON array of block nodes. One node:

{
  "type": "<an element type from the catalog>",
  "options": { ... },                         // element settings - see the catalog
  "cssSelectors": { "*": { "classes": "" } }, // ALL styling lives here
  "children": [ ... ]                         // nested nodes, omit when there are none
}

Hard rules, ordered by how much damage breaking them does:

1. "type" must be copied exactly from the catalog. Types are camelCase
   (gridItem, columnItem, postGrid, postLoop, tabsItem, addToCart). An element
   that is not in the catalog does not exist - build the effect out of the
   elements that are there rather than inventing a type.
2. Classes go in "cssSelectors", never in "options". "options.classes" is dead:
   the renderers do not read it. Every node you style needs
   cssSelectors["*"].classes, and the element's other slot names style inner
   parts of that same element.
3. Only use slot names the catalog lists for that element. An invented slot is
   silently ignored.
4. An element whose entry says ONLY valid inside must be a direct child of one
   of those parents: gridItem only inside grid, columnItem only inside columns,
   postLoop only inside postGrid/postSlider/relatedProducts, tabsItem only
   inside tabs, and so on. Anywhere else it is dropped.
5. Omit "id". The builder assigns ids.
6. Omit any option you do not need - defaults are merged in for you. Never send
   "options": [].
7. Output JSON only: no prose, no markdown fences, no comments, no trailing
   commas. Every [ and { you open must close. If you are running long, write
   fewer sections rather than stopping mid-structure.`;


const STYLING_RULES = `# Styling

Classes are plain Tailwind 4 utilities, compiled on demand, so any real utility
works - including arbitrary values like h-[28rem] or w-[420px].

- Default Tailwind theme only. bg-emerald-600, text-gray-600 and rounded-2xl
  compile; project tokens such as bg-brand or text-brand-700 are not in the
  storefront stylesheet and compile to nothing.
- No "!" important prefixes.
- Mobile first, and say so in the classes: grid-cols-1 md:grid-cols-2
  lg:grid-cols-4, text-3xl md:text-5xl, flex-col md:flex-row, py-10 md:py-16.
- Pick one accent colour for the whole page and use it for every primary action
  and highlight. Take neutrals from a single family (gray, slate, zinc or
  neutral) - never mix two neutral families on one page.
- Width and rhythm: a normal section carries
  "max-w-6xl mx-auto px-4 py-14 md:py-20". For a full-bleed background, put the
  background and the vertical padding on the section and
  "max-w-6xl mx-auto px-4" on a container or grid inside it.
- Spacing scale: gap-3/4/6/8/10, px-4/6, py-10/14/20, consistent between
  sibling sections.
- Type scale: h1 "text-4xl md:text-6xl font-bold tracking-tight", h2
  "text-2xl md:text-4xl font-bold", h3 "text-lg font-semibold", body
  "text-base text-gray-600 leading-relaxed".
- Primary button: "inline-flex items-center gap-2 rounded-lg bg-<accent>-600
  px-6 py-3 font-semibold text-white transition-colors hover:bg-<accent>-700".
  Secondary: "rounded-lg border border-gray-300 px-6 py-3 font-semibold
  text-gray-700 hover:border-gray-900 hover:text-gray-900".
- Cards and hover: put "group" on the card wrapper - on a loop grid's loop-item
  slot for a product card - and use group-hover: on the parts that react.
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
  is the house lift.
- Image sources are placeholders, so always constrain them: the img slot gets
  "w-full object-cover" plus a height (h-56, h-[26rem]).
- Icon names are @tabler/icons-react exports, PascalCase with the Icon prefix:
  IconShoppingCart, IconTruck, IconShieldCheck, IconStarFilled, IconHeart,
  IconDiscount2, IconHeadset, IconCreditCard, IconLeaf, IconCircleCheck,
  IconArrowRight, IconPhone, IconMail, IconMapPin. An unknown name renders
  nothing.`;


const COMPOSITION_RULES = `# Composing a page

Every top-level block is a section. Sections stack down the page; nothing else
belongs at the root.

A landing page, in order: hero -> trust strip or feature row -> category or
product grid -> a second product or offer block -> social proof -> FAQ ->
closing call to action. Four to eight sections unless the request says
otherwise, and alternate section backgrounds (white, then bg-gray-50, then an
accent tint) so the page has rhythm.

Do not put siteHeader or siteFooter inside a page. They are template parts
applied once for the whole site, and a page carrying its own copy doubles up
with them. Build them only when the request is explicitly for a header or a
footer.

Section skeletons that work:

- hero: section > grid (2 cols, items-center) > gridItem [badge button,
  heading h1, text, columns > 2 buttons, list of 3 selling points] +
  gridItem [image]
- trust strip: section > grid (2 cols mobile, 4 desktop) > gridItem
  [icon, heading h3, text]
- feature row: section > heading h2 + text, then grid (3 cols) > gridItem
  [icon, heading h3, text] - or featurebox when the request is a plain
  icon/title/description list
- product grid: section > columns [heading h2, "See all" button] + postGrid
  (queryPrams) > postLoop [postThumbnail, postTitle, productPrice, addToCart]
- category grid: section > heading h2 + termsGrid (queryPrams) > termsLoop
  [termThumbnail, termTitle, termCount]
- editorial / text beside image: section > grid (2 cols) > gridItem [image] +
  gridItem [heading, text, list, button]
- social proof: section > heading h2 + grid (3 cols) > gridItem [star icon,
  quote text, heading h3 name] - or commentsGrid when the request wants real
  product reviews
- FAQ: section > heading h2 + accordion, one accordionItem child per entry in
  options.items, each answer a text inside the item
- closing CTA: section (accent background) > container (max-w-3xl, centred) >
  heading h2 + text + button
- footer: siteFooter > columns > columnItem [logo, text] + columnItem
  [linkList] + columnItem [linkList] + columnItem [address]

Index-aligned elements: tabs draws its navigation from options.tabsItems and
its panels from its tabsItem children; accordion draws its headers from
options.items and its bodies from its accordionItem children. The counts must
match or the labels and panels drift apart.

Write real copy, not lorem ipsum: product names, benefit lines and button
labels that fit the business being asked for. Headlines under ~60 characters,
body copy one or two sentences.`;


const DATA_BINDING_RULES = `# Live content

Static elements - heading, text, image, button, list - hold the words you write.
Everything in the catalog's content and product groups is bound to the store's
data at render time, so never hand-write product names or prices into them.

postGrid, postSlider, relatedProducts, termsGrid and termsSlider take their
query from options.queryPrams. Note the spelling: queryPrams, not queryParams.
The element defaults in the catalog are wrong about this one - the renderers
read queryPrams.

Products:

"queryPrams": {
  "post_type": ["product"],
  "orderby": "rand",
  "posts_per_page": "8",
  "taxQuery": [
    { "title": "", "relation": "OR", "collections": [
      { "taxonomy": "product_cat", "field": "slug", "terms": ["baby-care"], "operator": "IN" }
    ] }
  ]
}

Blog posts:

"queryPrams": { "post_type": ["post"], "orderby": "date", "order": "DESC", "posts_per_page": "6" }

Post query keys: post_type, posts_per_page, order, orderby, paged, offset,
taxQuery. Add taxQuery only when the request names a category, using the slug
form of that name; otherwise leave it out and the grid shows the newest
products.

Term queries (termsGrid, termsSlider) use different keys:

"queryPrams": { "taxonomy": "product_cat", "number": "8", "hide_empty": true, "orderby": "count", "order": "DESC" }

Also available there: slug, parent, top_lavel, search, hierarchical.

A loop grid is styled through its slots, not through its children: the column
classes go on loop-items ("grid grid-cols-2 xl:grid-cols-4 gap-5") and the card
classes on loop-item ("group flex flex-col gap-2 rounded-xl border
border-gray-100 bg-white p-3"). Everything inside postLoop renders once per
product.`;


const WORKED_EXAMPLE = `# A correct two-section answer

[
  {
    "type": "section",
    "cssSelectors": { "*": { "classes": "bg-white" } },
    "children": [
      {
        "type": "grid",
        "cssSelectors": {
          "*": { "classes": "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 py-14 md:py-20" },
          "grid-item": { "classes": "" }
        },
        "children": [
          {
            "type": "gridItem",
            "cssSelectors": { "*": { "classes": "flex flex-col gap-5" } },
            "children": [
              {
                "type": "button",
                "options": { "text": "Free delivery over $40", "tag": "div", "icon": "IconTruck", "iconSize": "16" },
                "cssSelectors": {
                  "*": { "classes": "inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700" },
                  "icon": { "classes": "" },
                  "label": { "classes": "" }
                }
              },
              {
                "type": "heading",
                "options": { "text": "Fresh groceries, delivered daily", "tag": "h1" },
                "cssSelectors": { "*": { "classes": "text-4xl md:text-6xl font-bold tracking-tight text-gray-900" } }
              },
              {
                "type": "text",
                "options": { "text": "Hand-picked produce from local farms, at your door within hours.", "tag": "p" },
                "cssSelectors": { "*": { "classes": "max-w-prose text-base md:text-lg text-gray-600 leading-relaxed" } }
              },
              {
                "type": "columns",
                "cssSelectors": { "*": { "classes": "flex flex-wrap items-center gap-3 pt-2" }, "column": { "classes": "" } },
                "children": [
                  {
                    "type": "button",
                    "options": { "text": "Shop now", "tag": "a", "linkTo": "custom", "url": "/shop", "icon": "IconShoppingCart", "iconSize": "18" },
                    "cssSelectors": {
                      "*": { "classes": "inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700" },
                      "icon": { "classes": "" },
                      "label": { "classes": "" }
                    }
                  },
                  {
                    "type": "button",
                    "options": { "text": "Browse categories", "tag": "a", "linkTo": "custom", "url": "/categories" },
                    "cssSelectors": {
                      "*": { "classes": "rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors hover:border-gray-900 hover:text-gray-900" },
                      "icon": { "classes": "" },
                      "label": { "classes": "" }
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "gridItem",
            "cssSelectors": { "*": { "classes": "" } },
            "children": [
              {
                "type": "image",
                "options": { "src": "https://placehold.co/900x700" },
                "cssSelectors": {
                  "*": { "classes": "" },
                  "link": { "classes": "" },
                  "img": { "classes": "h-[22rem] w-full rounded-2xl object-cover md:h-[28rem]" }
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "section",
    "cssSelectors": { "*": { "classes": "bg-gray-50" } },
    "children": [
      {
        "type": "container",
        "cssSelectors": { "*": { "classes": "max-w-6xl mx-auto px-4 py-14 md:py-20" } },
        "children": [
          {
            "type": "columns",
            "cssSelectors": { "*": { "classes": "mb-8 flex items-center justify-between gap-3" }, "column": { "classes": "" } },
            "children": [
              {
                "type": "heading",
                "options": { "text": "This week's picks", "tag": "h2" },
                "cssSelectors": { "*": { "classes": "text-2xl md:text-4xl font-bold text-gray-900" } }
              },
              {
                "type": "button",
                "options": { "text": "See all", "tag": "a", "linkTo": "custom", "url": "/shop", "icon": "IconArrowRight", "iconSize": "16" },
                "cssSelectors": {
                  "*": { "classes": "inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800" },
                  "icon": { "classes": "" },
                  "label": { "classes": "" }
                }
              }
            ]
          },
          {
            "type": "postGrid",
            "options": { "queryPrams": { "post_type": ["product"], "orderby": "rand", "posts_per_page": "8" } },
            "cssSelectors": {
              "*": { "classes": "" },
              "loop-items": { "classes": "grid grid-cols-2 xl:grid-cols-4 gap-5" },
              "loop-item": { "classes": "group relative flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl" }
            },
            "children": [
              {
                "type": "postLoop",
                "children": [
                  {
                    "type": "postThumbnail",
                    "cssSelectors": {
                      "*": { "classes": "relative h-56 overflow-hidden rounded-lg bg-gray-50" },
                      "link": { "classes": "" },
                      "image": { "classes": "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" }
                    }
                  },
                  {
                    "type": "postTitle",
                    "options": { "tag": "h3" },
                    "cssSelectors": { "*": { "classes": "line-clamp-2 text-sm font-medium text-gray-700 transition-colors group-hover:text-emerald-700" } }
                  },
                  {
                    "type": "productPrice",
                    "cssSelectors": {
                      "*": { "classes": "" },
                      "simple-price-wrap": { "classes": "mt-auto flex items-center gap-2 text-sm" },
                      "simple-price-sale": { "classes": "font-bold text-gray-900" },
                      "simple-price-regular": { "classes": "text-xs text-gray-400 line-through" }
                    }
                  },
                  {
                    "type": "addToCart",
                    "options": { "buttonText": "Add to cart", "hideQuantity": true },
                    "cssSelectors": {
                      "*": { "classes": "mt-1" },
                      "button": { "classes": "w-full rounded-lg bg-gray-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700" }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]`;


/**
 * The system prompt: role, contract, craft rules, then the generated catalog.
 *
 * Order matters for caching. Everything here is stable for a given palette,
 * and the request-specific text is deliberately kept out of it.
 */
export function buildSystemPrompt(elements) {
	return [
		ROLE,
		BLOCK_CONTRACT,
		STYLING_RULES,
		COMPOSITION_RULES,
		DATA_BINDING_RULES,
		WORKED_EXAMPLE,
		`# Element catalog\n\nEvery element you may use. "options" lists an element's defaults and\n"style slots" the slot names it accepts in cssSelectors.\n\n${buildElementCatalog(elements)}`,
		`# Option keys the shipped layouts use\n\nRead off the builder's own hand-built pages, so these are known-good keys and\nvalue shapes. Where they disagree with an element's defaults, trust these.\n\n${buildOptionUsage([Hero, LandingPages, ProductPage])}`,
	].join('\n\n---\n\n');
}


/* ------------------------------------------------------------ user requests */

/**
 * A short outline of the page as it stands, so an appended section matches what
 * is already there and an edit is made in context rather than in a vacuum.
 *
 * The classes are the interesting part - they carry the page's colour, width
 * and spacing language - so every line keeps the wrapper's own classes and the
 * text it renders, and recursion stops above the leaves to keep this small.
 */
export function outlinePage(blocks, { maxDepth = 3, maxChars = 2500 } = {}) {
	if (!Array.isArray(blocks) || !blocks.length) {
		return 'The page is empty.';
	}

	const lines = [];
	let budget = maxChars;

	const walk = (nodes, depth) => {
		nodes.forEach((node) => {
			if (!node?.type || budget <= 0) {
				return;
			}

			const classes = node?.cssSelectors?.['*']?.classes ?? '';
			const text = typeof node?.options?.text === 'string' ? node.options.text : '';
			const parts = [`${'  '.repeat(depth)}${node.type}`];

			if (classes.trim()) {
				parts.push(`[${classes.trim()}]`);
			}
			if (text.trim()) {
				parts.push(`"${text.trim().slice(0, 60)}"`);
			}

			const line = parts.join(' ');

			lines.push(line);
			budget -= line.length + 1;

			if (Array.isArray(node.children) && node.children.length) {
				if (depth + 1 < maxDepth) {
					walk(node.children, depth + 1);
				} else {
					lines.push(`${'  '.repeat(depth + 1)}... ${node.children.length} more blocks`);
				}
			}
		});
	};

	walk(blocks, 0);

	return lines.join('\n');
}


/**
 * The request itself. Everything reusable lives in the system prompt, so this
 * stays short: what to build, what it has to fit into, and what shape to answer
 * in.
 */
export function buildUserPrompt({ mode, prompt, blocks, selectedBlock }) {
	const request = (prompt ?? '').trim();

	if (mode === 'edit') {
		const target = {
			type: selectedBlock?.type,
			options: selectedBlock?.options,
			cssSelectors: selectedBlock?.cssSelectors,
		};

		return `Edit one existing block.

The block, exactly as the page holds it now:

${JSON.stringify(target, null, 2)}

Where it sits on the page:

${outlinePage(blocks)}

Change requested: ${request}

Answer with a single JSON object holding only what changes:
{ "options": { ... }, "cssSelectors": { ... } }
Include a key only if it changes, and give each cssSelectors slot its complete
class string rather than a fragment. Do not change the block's type and do not
return its children.`;
	}

	if (mode === 'append') {
		return `Add to the page that already exists. Do not rebuild it.

What is on the page now:

${outlinePage(blocks)}

Build: ${request}

Match the existing page - its accent colour, neutral family, section width and
spacing rhythm - so the new work reads as part of the same design. Answer with
a JSON array holding only the new top-level section blocks, usually one.`;
	}

	if (mode === 'image') {
		return `Rebuild the layout in the attached image as blocks.

Work structurally: read the image's grid, hierarchy, spacing and colour, then
express them with the elements in the catalog rather than approximating pixels.
Where the image shows a product or category listing, use postGrid or termsGrid
with a query instead of hand-written cards. Use placeholder images, and
transcribe the image's own copy where it is legible.

${request ? `Additional instructions: ${request}` : 'No additional instructions were given.'}

Answer with a JSON array of top-level section blocks.`;
	}

	return `Build a page for: ${request}

Decide which sections that request needs and in what order, then build each one
properly. Answer with a JSON array of top-level section blocks.`;
}


/* ----------------------------------------------------------------- response */

/**
 * Pull the JSON value out of the reply.
 *
 * The model is told not to fence its output and usually does not, but a fence
 * or a stray sentence is cheap to survive: take the fence body when there is
 * one, otherwise the outermost array or object in the text.
 */
export function extractJson(text, { expectArray } = {}) {
	const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
	const body = (fenced ? fenced[1] : text).trim();

	const open = expectArray ? '[' : '{';
	const close = expectArray ? ']' : '}';
	const start = body.indexOf(open);
	const end = body.lastIndexOf(close);

	if (start === -1) {
		return body;
	}

	return end > start ? body.slice(start, end + 1) : body.slice(start);
}

export function repairJson(jsonStr) {
	try {
		return JSON.parse(jsonStr);
	} catch {
		return JSON.parse(jsonrepair(jsonStr));
	}
}


/**
 * Merge a generated node's options over its element's defaults.
 *
 * Shallow on purpose: a nested value the model did send - queryPrams,
 * tabsItems, items - is a deliberate replacement, not something to merge
 * key-by-key with a default.
 */
function mergeOptions(defaults, provided) {
	const base = defaults && !Array.isArray(defaults) ? clone(defaults) : {};

	if (!provided || Array.isArray(provided)) {
		return base;
	}

	return { ...base, ...clone(provided) };
}


/**
 * Merge style slots, keeping an element's default classes where the model sent
 * nothing.
 *
 * An empty string has to lose to the default: the model copies slot names out
 * of the catalog and often leaves them blank, and taking that literally would
 * strip the styling elements like cart and login ship with. A slot is only
 * overridden when real classes arrive. `*` is always present, because every
 * renderer reads cssSelectors['*'] and would throw on an undefined
 * cssSelectors.
 */
function mergeSelectors(defaults, provided) {
	const merged = {};
	const keys = new Set([
		'*',
		...Object.keys(defaults ?? {}),
		...Object.keys(provided && typeof provided === 'object' ? provided : {}),
	]);

	keys.forEach((key) => {
		const fromModel = provided?.[key]?.classes;
		const fromDefault = defaults?.[key]?.classes ?? '';

		merged[key] = {
			classes: typeof fromModel === 'string' && fromModel.trim() ? fromModel : fromDefault,
		};
	});

	return merged;
}


/**
 * The default children an element ships with, re-idded.
 *
 * tabs comes with four tabsItems, postGrid with a postLoop. When the model
 * omits children we fall back to those, the way dropping the element in from
 * the palette would - but with fresh ids, since a definition's children are
 * literals shared by every instance.
 */
function reseedChildren(children) {
	if (!Array.isArray(children) || !children.length) {
		return [];
	}

	return clone(children).map(child => ({
		...child,
		id: uid(),
		children: reseedChildren(child.children),
	}));
}


/**
 * Turn one generated node into a block the canvas can render, recursively.
 *
 * Returns null for anything that would break the canvas, and records why:
 *
 *   - an unknown type, because BlockPreview has no renderer for it;
 *   - an element outside the parent its definition requires, which is also the
 *     only place the palette would have let you drop it.
 *
 * Ids are always minted here. Reusing the model's risks duplicates, and
 * selection, moves and deletes all key off id.
 */
function instantiateBlock(node, { elements, parentType, report }) {
	const definition = elements.find(element => element.type === node?.type);

	if (!definition) {
		report.unknown.push(node?.type ? String(node.type) : 'unnamed block');
		return null;
	}

	if (Array.isArray(definition.parent) && definition.parent.length && !definition.parent.includes(parentType)) {
		report.misplaced.push(`${definition.type} (only valid inside ${definition.parent.join(', ')})`);
		return null;
	}

	const provided = Array.isArray(node?.children) ? node.children : null;

	const children = provided?.length
		? provided
			.map(child => instantiateBlock(child, { elements, parentType: definition.type, report }))
			.filter(Boolean)
		: reseedChildren(definition.children);

	report.count += 1;

	return {
		id: uid(),
		type: definition.type,
		options: mergeOptions(definition.options, node?.options),
		cssSelectors: mergeSelectors(definition.cssSelectors, node?.cssSelectors),
		children,
	};
}

export function sanitizeBlocks(parsed, elements) {
	const report = { count: 0, unknown: [], misplaced: [] };

	const blocks = (Array.isArray(parsed) ? parsed : [parsed])
		.map(node => instantiateBlock(node, { elements, parentType: null, report }))
		.filter(Boolean);

	return { blocks, report };
}

/* What to tell the user about blocks that did not survive. Both lists are model
   mistakes worth seeing - dropping them silently is how you end up debugging a
   layout that was never generated the way it looks. */
export function describeReport(report) {
	const notes = [];

	if (report.unknown.length) {
		notes.push(`skipped ${report.unknown.length} unknown element${report.unknown.length === 1 ? '' : 's'} (${[...new Set(report.unknown)].slice(0, 4).join(', ')})`);
	}
	if (report.misplaced.length) {
		notes.push(`skipped ${report.misplaced.length} misplaced block${report.misplaced.length === 1 ? '' : 's'} (${[...new Set(report.misplaced)].slice(0, 2).join('; ')})`);
	}

	return notes.join(' - ');
}

export function countBlocks(list) {
	return (list ?? []).reduce((total, block) => total + 1 + countBlocks(block?.children), 0);
}


/**
 * Apply an edit to one block by id, keeping everything the model left alone.
 *
 * Same empty-string rule as mergeSelectors: a blank class string means "not
 * specified", not "clear what is there".
 */
export function patchBlockById(blocks, id, patch) {
	return (blocks ?? []).map((block) => {
		if (block?.id === id) {
			const selectors = { ...(block.cssSelectors ?? {}) };

			Object.entries(patch?.cssSelectors ?? {}).forEach(([key, value]) => {
				const classes = value?.classes;

				if (typeof classes === 'string' && classes.trim()) {
					selectors[key] = { ...(selectors[key] ?? {}), classes };
				}
			});

			const options = Array.isArray(block.options) ? {} : (block.options ?? {});

			return {
				...block,
				options: { ...options, ...(patch?.options ?? {}) },
				cssSelectors: Object.keys(selectors).length ? selectors : { '*': { classes: '' } },
			};
		}

		if (Array.isArray(block?.children) && block.children.length) {
			return { ...block, children: patchBlockById(block.children, id, patch) };
		}

		return block;
	});
}
