import { IconHeading, IconColumns, IconSection, IconFileText, IconXboxB, IconList, IconBrandYoutube, IconPolaroid, IconListDetails, IconLayout2, IconMenu2, IconListSearch, IconLayoutNavbar, IconLayoutBottombar, IconLayoutSidebar, IconColumns3, IconLayoutList, IconAddressBook, IconIcons, IconLayoutNavbarCollapse, IconTable, IconBasketCheck, IconLogin, IconUserPlus, IconShoppingCart, IconSlideshow } from "@tabler/icons-react";


const elements = [

	/* ====================================================================
		BASIC (group 'basic') - Text, buttons, icons, media and form fields.
	==================================================================== */

	/* --- Text --- */

	{
		type: "heading",
		label: "Heading",
		icon: <IconHeading />,
		description: "Displays a semantic heading used to introduce a page, section, or subsection and establish content hierarchy.",
		ai: {
			purpose: "Create clear content hierarchy and identify the topic of a page or section.",
			useFor: [
				"Page titles",
				"Section titles",
				"Subsection titles",
				"Content headings"
			],
			keywords: [
				"heading",
				"title",
				"headline",
				"section title",
				"page title"
			],
			rules: [
				"Use h1 for the primary page title.",
				"Use h2 for major sections.",
				"Use h3 and lower levels for nested subsections.",
				"Keep heading text concise and relevant to the content that follows."
			]
		},
		options: {
			text: "Heading Text.",
			tag: "h1",
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['basic']
	},

	{
		type: "text",
		label: "Text",
		icon: <IconFileText />,
		description: "Displays a paragraph or block of readable text that provides information, explanation, context, or supporting content.",
		ai: {
			purpose: "Provide descriptive or informational content that supports headings, products, sections, or other page elements.",
			useFor: [
				"Paragraphs",
				"Descriptions",
				"Introduction text",
				"Supporting information",
				"Product descriptions",
				"Informational content"
			],
			keywords: [
				"text",
				"paragraph",
				"description",
				"content",
				"body text",
				"information"
			],
			rules: [
				"Use for readable supporting content rather than titles.",
				"Keep text relevant to the surrounding section.",
				"Use concise paragraphs for ecommerce and landing pages."
			]
		},
		/* text (line breaks kept) in tag: p, span, div, small, strong, blockquote or h1-h6 (p when unset; TextMarkup in TextView.jsx). */
		options: {
			text: "Custom Text Element.",
			tag: "p",
		},
		/* TextView (through its TextMarkup, which the builder's Text.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['basic']
	},

	{
		type: "list",
		label: "List",
		icon: <IconBasketCheck />,
		description: "Displays a collection of related items as an ordered or unordered list, optionally with an icon for each item.",
		ai: {
			purpose: "Present multiple related pieces of information in a clear, scannable list.",
			useFor: [
				"Product features",
				"Product benefits",
				"Specifications",
				"Advantages",
				"Requirements",
				"Key points",
				"Steps",
				"Service features"
			],
			keywords: [
				"list",
				"bullet list",
				"feature list",
				"benefits",
				"features",
				"advantages",
				"key points",
				"specifications",
				"requirements"
			],
			rules: [
				"Use when multiple related items need to be presented clearly.",
				"Keep each list item concise and focused on one point.",
				"Use for features or benefits when a scannable list is more appropriate than paragraphs."
			]
		},
		/*
			items are { text, icon, iconSize }; icon / iconSize are the defaults for
			items without their own (24 px when unset). tag is 'ul' or 'ol'.
		*/
		options: {
			icon: '',
			iconSize: 20,
			items: [{ "text": "Custom Item", "icon": "" }],
			tag: 'ul'
		},
		/* ListView (through its ListMarkup, which the builder's List.jsx also renders) reads these with elementCssClasses: icon is drawn only when an item has one. */
		cssSelectors: {
			'*': { classes: '' },
			'li': { classes: 'list-disc' },
			'icon': { classes: 'text-lg' },
			'text': { classes: 'text-sm' }
		},
		group: ['basic']
	},

	{
		type: "button",
		label: "Button",
		icon: <IconXboxB />,
		description: "Displays a prominent clickable action that allows users to perform an action such as navigating, purchasing, submitting, or continuing.",
		ai: {
			purpose: "Create a clear call-to-action that encourages the user to perform a specific action.",
			useFor: [
				"Call-to-action buttons",
				"Shop now actions",
				"Buy now actions",
				"Learn more actions",
				"Form submission",
				"Navigation actions",
				"Conversion actions"
			],
			keywords: [
				"button",
				"CTA",
				"call to action",
				"action",
				"shop now",
				"buy now",
				"learn more",
				"submit"
			],
			rules: [
				"Use a clear and action-oriented label.",
				"Use buttons for actions rather than displaying non-interactive text.",
				"For ecommerce pages, use labels such as Add to Cart, Buy Now, Shop Now, or View Products when appropriate."
			]
		},
		/*
			linkTo 'custom' links to url; scheme (tel, mailto...) is put in front
			of it, and target '_blank' opens it in a new tab. With no link the
			button renders as a plain block. iconSize falls back to 24.
		*/
		options: {
			text: "Build Pages Visually.",
			linkTo: '',
			url: '',
			scheme: '',
			target: '',
			icon: '',
			iconSize: 18,
		},
		/*
			The single source of the button's default classes: ButtonView (through
			its ButtonMarkup, which the builder's Button.jsx also renders) and
			ButtonOptions fall back to these via elementCssClasses /
			withElementCssDefaults at the end of this file when a block lacks a key.
		*/
		cssSelectors: {
			'*': { classes: 'inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#150b7d]' },
			'icon': { classes: 'flex' },
			'label': { classes: '' }
		},
		group: ['basic']
	},

	{
		type: "icon",
		label: "Icon",
		icon: <IconIcons />,
		description: "Displays a graphical icon that visually represents an action, concept, status, category, or decorative element.",
		ai: {
			purpose: "Add a concise visual symbol that reinforces the meaning or purpose of nearby content.",
			useFor: [
				"Action indicators",
				"Feature icons",
				"Navigation icons",
				"Status indicators",
				"Decorative icons",
				"Contact icons",
				"Product feature icons"
			],
			keywords: [
				"icon",
				"symbol",
				"UI icon",
				"feature icon",
				"navigation icon",
				"status icon"
			],
			rules: [
				"Use icons to reinforce existing meaning rather than replace important text.",
				"Choose an icon that clearly matches the surrounding content or action.",
				"Avoid using decorative icons when they add no useful meaning."
			]
		},
		/*
			iconName is a Tabler icon, at size px (20 when unset); inside a
			featurebox item the item's icon and iconSize win when set (iconSettings
			in IconView.jsx). label, when set, names it for screen readers;
			otherwise it is decorative.
		*/
		options: {
			iconName: 'IconAffiliate',
			size: 18,
			label: '',
		},
		/* IconView (through its IconMarkup, which the builder's Icon.jsx also renders) reads this with elementCssClasses, next to a surrounding featurebox's icon classes. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['basic'],
		children: [],
	},

	/* --- Media --- */

	{
		type: "image",
		label: "Image",
		icon: <IconPolaroid />,
		description: "Displays an image that visually supports or illustrates the surrounding page content.",
		ai: {
			purpose: "Add relevant visual content to improve product presentation, communication, branding, or page design.",
			useFor: [
				"Product images",
				"Hero images",
				"Content illustrations",
				"Promotional images",
				"Gallery images",
				"Category images",
				"Lifestyle images",
				"Decorative visuals"
			],
			keywords: [
				"image",
				"photo",
				"picture",
				"product image",
				"hero image",
				"banner image",
				"gallery",
				"visual"
			],
			rules: [
				"Use images that are relevant to the surrounding content.",
				"For products, prefer the corresponding product image.",
				"Use prominent images for hero or promotional sections.",
				"Avoid using decorative images when they do not add meaningful visual value."
			]
		},
		/*
			altText is the image's alt text. link (optional) wraps it in a link,
			opening in a new tab with newTab. width/height, when set, are the
			<img>'s attributes (500x500 otherwise); size it with classes on img.
		*/
		options: {
			src: 'https://placehold.co/600x400',
			altText: '',
			link: '',
			newTab: false,
		},
		/* ImageView (through its ImageMarkup, which the builder's Image.jsx also renders) reads these with elementCssClasses: '*' wraps it, link is the link when set, img the image. */
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'img': { classes: 'h-auto max-w-full' }
		},
		group: ['basic']
	},

	{
		type: "video",
		label: "Video",
		icon: <IconBrandYoutube />,
		description: "Embeds a video from an external or direct video source to provide visual, educational, promotional, or informational content.",
		ai: {
			purpose: "Add video content that demonstrates, explains, promotes, or provides additional information about a product, service, or topic.",
			useFor: [
				"Product demonstration",
				"Product tutorial",
				"Promotional video",
				"How-to video",
				"Educational content",
				"Brand video",
				"Customer testimonial",
				"Product review"
			],
			keywords: [
				"video",
				"YouTube video",
				"video embed",
				"product video",
				"tutorial",
				"demo",
				"video demonstration",
				"promotional video"
			],
			rules: [
				"Use when video content adds useful information or visual explanation.",
				"Prefer relevant product or topic-specific videos.",
				"Use a video source that matches the content of the surrounding section."
			]
		},
		/*
			url is a YouTube (watch, youtu.be, Shorts, embed), Vimeo or direct video
			file link; parseVideoSource in VideoView.jsx reads it (or an old
			videoId). autoplay always plays muted. controls false hides them; start
			is in seconds. (source was never read; width/height still work as
			attributes, but frame classes override them.)
		*/
		options: {
			url: '',
			title: '',
			autoplay: false,
			muted: false,
			loop: false,
			controls: true,
		},
		/* VideoView (through its VideoMarkup, which the builder's Video.jsx also renders) reads these with elementCssClasses: '*' wraps the player, frame is the iframe or <video>. */
		cssSelectors: {
			'*': { classes: '' },
			'frame': { classes: 'aspect-video w-full' },
		},
		group: ['basic']
	},

	/* --- Form fields --- */

	{
		type: "input",
		label: "Input",
		icon: null,
		description: "A form input field that allows users to enter a value such as text, a search query, name, email address, or other user-provided information.",
		ai: {
			purpose: "Collect a specific value or piece of information from the user.",
			useFor: [
				"Text input",
				"Search fields",
				"Name fields",
				"Email fields",
				"Form fields",
				"User information",
				"Filtering and filtering controls"
			],
			keywords: [
				"input",
				"text field",
				"input field",
				"form field",
				"text box",
				"search field",
				"form input"
			],
			rules: [
				"Use when the user needs to enter or modify a value.",
				"Choose an appropriate input type based on the expected value.",
				"Use a clear label or placeholder when the purpose of the input is not obvious."
			]
		},
		options: {
			value: "",
			type: "text",
		},
		cssSelectors: {
			/* Read by the renderer but was not declared, so the style editor could not show it. */
			'icon': { classes: '' },
			'*': { classes: '' },
			'input': { classes: '' },
			'label': { classes: '' }
		},
		group: ['basic'],
	},

	{
		type: "select",
		label: "Select",
		icon: null,
		description: "A dropdown selection field that allows users to choose one option from a predefined set of available values.",
		ai: {
			purpose: "Allow users to select a value from a predefined list of options.",
			useFor: [
				"Category selection",
				"Sorting controls",
				"Filtering",
				"Product options",
				"Form selections",
				"Configuration options",
				"Country or location selection"
			],
			keywords: [
				"select",
				"dropdown",
				"dropdown menu",
				"selection",
				"select field",
				"filter",
				"sorting dropdown",
				"option selector"
			],
			rules: [
				"Use when the available choices are predefined.",
				"Prefer a select field when users should choose one option from a list.",
				"Provide clear and meaningful option labels."
			]
		},
		options: {
			params: [],
		},
		cssSelectors: {
			'*': { classes: '' },
			'select': { classes: '' },
			'label': { classes: '' }
		},
		group: ['basic'],
	},

	/* ====================================================================
		LAYOUT (group 'layout') - Page structure and containers that hold other blocks.
	==================================================================== */

	/* --- Page structure --- */

	{
		type: "section",
		label: "Section",
		icon: <IconLayoutList />,
		description: "A major structural section of a webpage used to group related content into a distinct semantic and visual area.",
		ai: {
			purpose: "Divide a page into meaningful sections and organize related content into logical areas.",
			useFor: [
				"Hero sections",
				"Feature sections",
				"About sections",
				"Product sections",
				"Testimonials",
				"FAQ sections",
				"Call-to-action sections",
				"Content sections"
			],
			keywords: [
				"section",
				"content section",
				"page section",
				"website section",
				"hero section",
				"feature section",
				"CTA section"
			],
			rules: [
				"Use a section to group content with a common purpose or topic.",
				"Each section should have a clear content purpose.",
				"Use headings inside sections when they introduce a distinct topic."
			],
			canContain: [
				"heading",
				"text",
				"image",
				"button",
				"list",
				"grid",
				"columns",
				"container"
			]
		},
		/*
			anchor, when set, is the section's id on the shop (sectionAnchor in
			SectionView.jsx tidies it), so a "#anchor" link scrolls to it.
		*/
		options: {
			anchor: '',
		},
		/*
			'*' is the section itself (rendered as <section>): background, padding
			and layout. SectionView, Section and SectionOptions read it through
			elementCssClasses / withElementCssDefaults at the end of this file.
		*/
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['layout']
	},

	{
		type: "container",
		label: "Container",
		icon: <IconSection />,
		description: "A layout wrapper that constrains and organizes content within a page section, commonly used to control width, spacing, and alignment.",
		ai: {
			purpose: "Group and constrain page content to a consistent layout width and alignment.",
			useFor: [
				"Content width control",
				"Centered page content",
				"Section content wrapper",
				"Layout spacing",
				"Grouping related elements"
			],
			keywords: [
				"container",
				"content container",
				"wrapper",
				"content wrapper",
				"page container",
				"layout container"
			],
			rules: [
				"Use to wrap content that should share width and alignment constraints.",
				"Containers are primarily structural and should contain content or layout elements.",
				"Use inside sections when page content needs a consistent maximum width."
			],
			canContain: [
				"heading",
				"text",
				"image",
				"button",
				"list",
				"grid",
				"columns",
				"section"
			]
		},
		options: {},
		/*
			'*' is the container itself: width, padding and how its children are
			laid out. ContainerView, Container and ContainerOptions read it through
			elementCssClasses / withElementCssDefaults at the end of this file.
		*/
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['layout']
	},

	{
		type: "columns",
		label: "Columns",
		icon: <IconColumns3 />,
		description: "A layout container that divides available horizontal space into multiple columns for organizing related content side by side.",
		ai: {
			purpose: "Create a multi-column layout for displaying related content or sections beside each other.",
			useFor: [
				"Two-column layouts",
				"Three-column layouts",
				"Content columns",
				"Feature sections",
				"Text and image layouts",
				"Sidebar layouts",
				"Footer columns"
			],
			keywords: [
				"columns",
				"column layout",
				"multi-column",
				"two columns",
				"three columns",
				"side by side",
				"split layout"
			],
			rules: [
				"Use when content should be arranged horizontally into separate areas.",
				"Use column items as the direct children.",
				"Use columns to create structured layouts without relying on repeated grid items."
			],
			canContain: [
				"columnItem"
			],
			childPurpose: "Each column item represents one independent area within the columns layout."
		},
		/*
			'*' lays out the row. 'column' is handed down to every columnItem
			(ColumnsView / Columns pass it as ParentCssSelectors) and added to the
			column's own '*', so it styles all the columns at once.
		*/
		cssSelectors: {
			'*': { classes: 'flex items-center gap-3 p-4' },
			'column': { classes: '' }
		},
		children: [],
		group: ['layout']
	},

	{
		type: "columnItem",
		label: "Column Item",
		icon: null,
		description: "A single content area within a columns layout that contains one or more elements.",
		ai: {
			purpose: "Represent one independent column within a multi-column layout.",
			useFor: [
				"Column content",
				"Text and image combinations",
				"Sidebar content",
				"Feature content",
				"Footer sections"
			],
			keywords: [
				"column",
				"column item",
				"column content",
				"layout column"
			],
			rules: [
				"Use inside a columns container.",
				"Each column should have a clear content purpose.",
				"Multiple elements can be placed inside a column."
			],
			parentRequired: "columns"
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['layout'],
		children: [],
		parent: ['columns']
	},

	{
		type: "grid",
		label: "Grid",
		icon: <IconLayout2 />,
		description: "A layout container that arranges multiple child elements into rows and columns, making it suitable for structured multi-column content.",
		ai: {
			purpose: "Organize multiple related elements into a responsive grid-based layout.",
			useFor: [
				"Product grids",
				"Feature sections",
				"Service cards",
				"Category cards",
				"Image galleries",
				"Content cards",
				"Pricing columns",
				"Multi-column layouts"
			],
			keywords: [
				"grid",
				"grid layout",
				"columns",
				"multi-column",
				"card grid",
				"product grid",
				"feature grid",
				"gallery"
			],
			rules: [
				"Use when multiple related elements should be displayed in columns.",
				"Place repeated or related content inside grid items.",
				"Use a grid for cards, products, categories, features, or similar repeated content."
			],
			canContain: [
				"gridItem"
			],
			childPurpose: "Each grid item represents one independent item or content block within the grid."
		},
		"children": [

		],
		/*
			'*' holds the tracks and gap. 'grid-item' is handed down to every
			gridItem (GridView / Grid pass it as ParentCssSelectors) and added to
			the cell's own '*', so it styles all the cells at once.
		*/
		"cssSelectors": {
			"*": {
				"classes": "grid gap-2 p-3 grid-cols-4"
			},
			"grid-item": {
				"classes": ""
			}
		},
		group: ['layout']
	},

	{
		type: "gridItem",
		label: "Grid Item",
		icon: null,
		description: "A single item inside a grid layout that contains the content or components representing one entry in the grid.",
		ai: {
			purpose: "Represent one independent content item within a grid.",
			useFor: [
				"Product card containers",
				"Feature blocks",
				"Category cards",
				"Service cards",
				"Gallery items",
				"Individual grid content"
			],
			keywords: [
				"grid item",
				"grid cell",
				"card",
				"grid block",
				"column item"
			],
			rules: [
				"Use inside a grid container.",
				"Each grid item should represent one independent item.",
				"Do not use as a standalone layout container when a grid is not present."
			],
			parentRequired: "grid"
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['layout'],
		children: [],
		parent: ['grid']
	},

	/* --- Interactive containers --- */

	{
		type: "tabs",
		label: "Tabs",
		icon: <IconTable />,
		description: "Organizes multiple related content panels into tabs so users can switch between different sections of information without leaving the current page.",
		ai: {
			purpose: "Organize related but separate content into compact switchable panels.",
			useFor: [
				"Product information",
				"Specifications",
				"Reviews",
				"Shipping information",
				"Additional details",
				"FAQ groups",
				"Related content"
			],
			keywords: [
				"tabs",
				"tabbed content",
				"tab navigation",
				"product tabs",
				"information tabs",
				"content tabs"
			],
			rules: [
				"Use when several related content sections need to share the same space.",
				"Give each tab a clear and descriptive label.",
				"Do not hide critical purchasing information inside tabs when it should be immediately visible."
			],
			canContain: [
				"tabsItem"
			]
		},
		/*
			tabsItems are the labels, joined by index to the tabsItem children:
			label n opens the n-th child, so the two lists must stay the same
			length. orientation: '' (horizontal) or 'vertical'.
		*/
		options: {
			tabsItems: [
				{ "label": "Tab 1" },
				{ "label": "Tab 2" },
				{ "label": "Tab 3" },
				{ "label": "Tab 4" }
			],
			orientation: ''
		},
		/*
			The single source of the tabs' default classes: TabsView (through its
			TabsMarkup, which the builder's Tabs.jsx also renders) and TabsOptions
			fall back to these via elementCssClasses / withElementCssDefaults at
			the end of this file when a block lacks a key. They are the look
			TabsView used to keep in code. spacing, navs-scroll and navs-vertical
			hold classes that used to be hardcoded (the root's p-4, the strip's
			overflow, the vertical layout); blocks saved before they existed get
			these defaults, so they look the same.
		*/
		cssSelectors: {
			'*': { classes: 'w-full' },
			'spacing': { classes: 'p-4' },
			'navs-items': { classes: 'mb-5 flex gap-1 border-b border-gray-200' },
			'navs-scroll': { classes: 'overflow-x-auto overflow-y-hidden scrollbar-hide' },
			'navs-vertical': { classes: 'lg:flex-col mb-4 lg:flex-nowrap flex-wrap' },
			'nav-item': { classes: '-mb-px flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900' },
			'nav-item-active': { classes: '!border-[#1b0e9f] !text-[#1b0e9f]' },
			'nav-item-icon': { classes: 'flex' },
			'nav-item-label': { classes: '' },
			'nav-item-content': { classes: '' }
		},
		group: ['layout'],
		children: [
			{
				"id": "b4mtiizxt0",
				"type": "tabsItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			},
			{
				"id": "b4mtiizy9o",
				"type": "tabsItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			},
			{
				"id": "b4mtiizyuk",
				"type": "tabsItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			},
			{
				"id": "b4mtiizzlo",
				"type": "tabsItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			}
		],
	},

	{
		type: "tabsItem",
		label: "Tabs Item",
		icon: null,
		description: "A single content panel within a tabs component containing information associated with one tab.",
		ai: {
			purpose: "Represent one independent content section within a tabbed interface.",
			useFor: [
				"Product description tab",
				"Specifications tab",
				"Reviews tab",
				"Shipping tab",
				"FAQ tab",
				"Additional information tab"
			],
			keywords: [
				"tab item",
				"tab content",
				"tab panel",
				"tab section"
			],
			rules: [
				"Use inside a tabs component.",
				"Each tab item should contain content matching its tab label.",
				"Keep each tab focused on one topic."
			],
			parentRequired: "tabs"
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['layout'],
		parent: ['tabs'],
		children: [],
	},

	{
		type: "accordion",
		label: "Accordion",
		icon: <IconLayoutNavbarCollapse />,
		description: "Organizes multiple content sections into expandable and collapsible panels so users can reveal information when needed.",
		ai: {
			purpose: "Present multiple related sections of information in a compact expandable interface.",
			useFor: [
				"FAQ sections",
				"Product specifications",
				"Shipping information",
				"Policies",
				"Help content",
				"Additional product information",
				"Questions and answers"
			],
			keywords: [
				"accordion",
				"FAQ",
				"collapsible content",
				"expandable sections",
				"questions and answers",
				"collapsible panel"
			],
			rules: [
				"Use when users may not need to see all content at once.",
				"Give each accordion item a clear descriptive label.",
				"Use especially for FAQs, policies, specifications, and supporting information."
			],
			canContain: [
				"accordionItem"
			]
		},
		/*
			items are the header labels, joined by index to the accordionItem
			children: label n heads the n-th child. Each may carry classes of its
			own for that one header. multiple: false lets only one item be open
			at a time.
		*/
		options: {
			items: [
				{ "label": "Item 1", "classes": "" },
				{ "label": "Item 2", "classes": "" },
				{ "label": "Item 3", "classes": "" }
			],
			multiple: true
		},
		/*
			The single source of the accordion's default classes: AccordionView
			(through its AccordionMarkup, which the builder's Accordion.jsx also
			renders) and AccordionOptions fall back to these via
			elementCssClasses / withElementCssDefaults at the end of this file
			when a block lacks a key. spacing holds the root's p-4, which used to
			be hardcoded; accordion-header-open is added to an open item's header.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'spacing': { classes: 'p-4' },
			'accordion-items': { classes: 'flex flex-col gap-2' },
			'accordion-header': { classes: 'p-2 rounded-sm border-gray-400 border-2 flex justify-between cursor-pointer' },
			'accordion-header-open': { classes: '' },
			'header-label': { classes: '' },
			'header-icon': { classes: '' },
			'accordion-content': { classes: '' }
		},
		group: ['layout'],
		children: [
			{
				"id": "b4mtij4pkr",
				"type": "accordionItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			},
			{
				"id": "b4mtij4q5f",
				"type": "accordionItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			},
			{
				"id": "b4mtij4qmy",
				"type": "accordionItem",
				"options": {},
				"cssSelectors": { "*": { "classes": "" } },
				"children": []
			}
		],
	},

	{
		type: "accordionItem",
		label: "Accordion Item",
		icon: null,
		description: "A single expandable content section within an accordion, consisting of a descriptive header and associated content.",
		ai: {
			purpose: "Represent one question, topic, or information section within an accordion.",
			useFor: [
				"FAQ question",
				"Product specification",
				"Shipping information",
				"Policy information",
				"Help topic",
				"Additional product detail"
			],
			keywords: [
				"accordion item",
				"FAQ item",
				"question",
				"collapsible section",
				"accordion panel"
			],
			rules: [
				"Use inside an accordion.",
				"The label should clearly describe the content that can be expanded.",
				"Keep each item focused on one question or topic."
			],
			parentRequired: "accordion"
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['layout'],
		parent: ['accordion'],
		children: [],
	},

	{
		type: "contentSlider",
		label: "Content Slider",
		icon: <IconSlideshow />,
		description: "A slider or carousel of any content, where each block placed inside it is one slide.",
		ai: {
			purpose: "Show several pieces of hand-made content one after another in a horizontally navigable slider.",
			useFor: [
				"Hero banners",
				"Promotional slides",
				"Image carousels",
				"Testimonial slides",
				"Announcement banners",
				"Feature highlights"
			],
			keywords: [
				"content slider",
				"carousel",
				"banner slider",
				"hero slider",
				"slideshow",
				"image carousel"
			],
			rules: [
				"Each direct child is one slide; use a container per slide to hold several elements.",
				"Use postSlider or termsSlider instead when the slides come from posts, products or categories.",
				"Use when the content should be browsed one slide (or a few) at a time rather than shown all at once."
			],
			canContain: [
				"container",
				"image",
				"heading",
				"text",
				"button"
			],
			childPurpose: "Each child block is one slide of the slider."
		},
		/*
			sliderOptions goes to Splide as it is (see SliderOptionsFields.jsx):
			perPage and breakpoints set how many slides show (mediaQuery 'max':
			breakpoint keys are max widths).
		*/
		options: {
			sliderOptions: {
				type: 'loop',
				perPage: 1,
				gap: '1em',
				arrows: true,
				pagination: true,
				autoplay: true,
				interval: 5000,
				mediaQuery: 'max',
			},
		},
		/*
			ContentSliderView (through its ContentSliderMarkup, which the builder's
			ContentSlider.jsx also renders) puts '*' on the wrapper and 'slide' on
			every slide; the arrow and dot keys go on Splide's controls through its
			classes option, as in the post slider.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'slide': { classes: '' },
			'arrows-wrap': { classes: '' },
			'arrow-item': { classes: '' },
			'arrow-prev': { classes: '' },
			'arrow-next': { classes: '' },
			'pagination': { classes: '' },
			'page-item': { classes: '' },
		},
		children: [],
		group: ['layout']
	},

	{
		type: "popoverButton",
		label: "PopoverButton",
		icon: null,
		description: "A button that opens a popover containing additional content, actions, information, or interactive elements.",
		ai: {
			purpose: "Provide access to secondary content or actions without navigating away from the current page.",
			useFor: [
				"Additional product information",
				"Help or instructions",
				"Quick action panels",
				"Product details",
				"Filters or settings",
				"Secondary navigation",
				"Expandable content"
			],
			keywords: [
				"popover",
				"popup",
				"popover button",
				"overlay",
				"quick view",
				"additional information",
				"secondary content",
				"modal-like content"
			],
			rules: [
				"Use when content should appear after clicking a button.",
				"Use for secondary content that should not permanently occupy page space.",
				"Place interactive or informational content inside the popover.",
				"Keep the popover content focused on a single related purpose.",
				"Use a clear and descriptive button label."
			],
			intent: [
				"information",
				"interaction",
				"conversion",
				"quick-action"
			]
		},
		options: {
			buttonLabel: 'Click Me',
			buttonIcon: '',
			position: '',
		},
		children: [],
		cssSelectors: {
			'*': { classes: 'relative' },
			'button': { classes: 'cursor-pointer text-white bg-blue-600 px-4  rounded-sm flex items-center py-2 max-w-fit' },
			'button-icon': { classes: 'flex gap-2 w-max' },
			'button-label': { classes: 'flex gap-2 w-max' },
			'popover': { classes: 'max-h-[600px] bg-white overflow-y-auto z-[999] border-2 border-solid rounded-sm shadow-lg absolute' },
			'popover-close': { classes: 'hover:bg-red-500 rounded-sm cursor-pointer px-2 py-2 bg-red-400 text-white absolute right-0' },
			'popover-content': { classes: 'p-5 pt-8' },
		},
		group: ['layout']
	},

	/* ====================================================================
		CONTENT BLOCKS (group 'blocks') - Ready-made content pieces: features, highlights, contact details.
	==================================================================== */

	/* --- Feature boxes --- */

	{
		type: "featurebox",
		label: "Featurebox",
		icon: null,
		description: "Displays multiple highlighted features, benefits, services, or selling points, typically with a title, description, and optional icon.",
		ai: {
			purpose: "Communicate important features, benefits, advantages, or service highlights in a visually scannable format.",
			useFor: [
				"Product benefits",
				"Store benefits",
				"Service features",
				"Key selling points",
				"Trust features",
				"Why choose us",
				"Product advantages",
				"Shipping benefits"
			],
			keywords: [
				"feature box",
				"features",
				"benefits",
				"selling points",
				"key features",
				"advantages",
				"why choose us",
				"service benefits"
			],
			rules: [
				"Use when several related benefits or features need to be highlighted.",
				"Each feature should communicate one distinct benefit or selling point.",
				"Use concise titles and supporting descriptions."
			],
			intent: [
				"benefit-communication",
				"trust-building",
				"conversion"
			],
			canContain: [
				"featureboxTitle", "featureboxDetails", "icon", "columns"
			]
		},
		options: {
			items: [{
				title: "Feature Item 1",
				description: "Custom Description",
				icon: "",
				iconSize: ""
			}],
			icon: "",
			iconSize: ""
		},
		/*
			FeatureboxView (through its FeatureboxMarkup, which the builder's
			Featurebox.jsx also renders) reads '*' and loop-item (each feature).
			icon, title and description are added to the Icon, Featurebox Title and
			Featurebox Details blocks inside, through FeatuerboxContext. tag is div,
			section, ul or ol (div when unset; a list makes each feature an li).
		*/
		cssSelectors: {
			'*': { classes: 'flex gap-5 items-center justify-between' },
			'loop-item': { classes: '' },
			'title': { classes: '' },
			'description': { classes: '' },
			'icon': { classes: '' }
		},
		children: [],
		group: ['blocks'],
	},

	{
		type: "featureboxTitle",
		label: "Featurebox Title",
		icon: null,
		description: "Displays the title of an individual feature within a feature box.",
		ai: {
			purpose: "Provide a concise name or headline for an individual feature or benefit.",
			useFor: [
				"Feature title",
				"Benefit title",
				"Service title",
				"Selling point title"
			],
			keywords: [
				"feature title",
				"benefit title",
				"feature heading",
				"benefit heading"
			],
			rules: [
				"Use inside a featurebox.",
				"Keep the title concise and focused on one feature or benefit."
			],
			parentRequired: "featurebox"
		},
		/* The title of the featurebox item it sits in, in tag (h3 when unset); the featurebox's title classes are added to its '*' (FeatureboxTextMarkup). (img was never read.) */
		options: {
			tag: 'h3',
		},
		cssSelectors: {
			'*': { classes: '' },
		},
		deprecatedCssSelectors: ['img'],
		group: ['blocks'],
		parent: ['featurebox'],
	},

	{
		type: "featureboxDetails",
		label: "Featurebox Details",
		icon: null,
		description: "Displays supporting descriptive information for an individual feature within a feature box.",
		ai: {
			purpose: "Explain or provide supporting details about a feature or benefit.",
			useFor: [
				"Feature description",
				"Benefit description",
				"Service details",
				"Supporting feature content"
			],
			keywords: [
				"feature details",
				"feature description",
				"benefit details",
				"benefit description"
			],
			rules: [
				"Use inside a featurebox.",
				"Keep the description concise and directly related to the feature title."
			],
			parentRequired: "featurebox"
		},
		/* The description of the featurebox item it sits in, in tag (p when unset); the featurebox's description classes are added to its '*' (FeatureboxTextMarkup). (img was never read.) */
		options: {
			tag: 'p',
		},
		cssSelectors: {
			'*': { classes: '' },
		},
		deprecatedCssSelectors: ['img'],
		group: ['blocks'],
		parent: ['featurebox'],
	},

	{
		type: "collections",
		label: "Collections",
		icon: null,
		description: "Displays multiple highlighted features, benefits, services, or selling points, typically with a title, description, and optional icon.",
		ai: {
			purpose: "Communicate important features, benefits, advantages, or service highlights in a visually scannable format.",
			useFor: [
				"Product benefits",
				"Store benefits",
				"Service features",
				"Key selling points",
				"Trust features",
				"Why choose us",
				"Product advantages",
				"Shipping benefits"
			],
			keywords: [
				"feature box",
				"features",
				"benefits",
				"selling points",
				"key features",
				"advantages",
				"why choose us",
				"service benefits"
			],
			rules: [
				"Use when several related benefits or features need to be highlighted.",
				"Each feature should communicate one distinct benefit or selling point.",
				"Use concise titles and supporting descriptions."
			],
			intent: [
				"benefit-communication",
				"trust-building",
				"conversion"
			],
			canContain: [
				"collectionsField", "icon",
			]
		},
		options: {
			items: [{
				title: "Feature Item 1",
				description: "Custom Description",
				icon: "",
				iconSize: ""
			}],
			icon: "",
			iconSize: ""
		},
		cssSelectors: {
			/* Read by the renderer but was not declared, so the style editor could not show it. */
			'title': { classes: '' },
			'*': { classes: 'flex gap-5 items-center justify-between' },
			'loop-item': { classes: '' },
			'label': { classes: '' },
			'value': { classes: '' },
		},
		children: [],
		group: ['blocks'],
	},

	{
		type: "collectionsField",
		label: "Collections Field",
		icon: null,
		description: "Displays the title of an individual feature within a feature box.",
		ai: {
			purpose: "Provide a concise name or headline for an individual feature or benefit.",
			useFor: [
				"Feature title",
				"Benefit title",
				"Service title",
				"Selling point title"
			],
			keywords: [
				"feature title",
				"benefit title",
				"feature heading",
				"benefit heading"
			],
			rules: [
				"Use inside a featurebox.",
				"Keep the title concise and focused on one feature or benefit."
			],
			parentRequired: "featurebox"
		},
		options: { fieldId: '' },
		cssSelectors: {
			'*': { classes: '' },
			'label': { classes: '' },
			'value': { classes: '' }
		},
		group: ['blocks'],
		parent: ['collections'],
	},

	/* --- Contact --- */

	{
		type: "address",
		label: "Address",
		icon: <IconAddressBook />,
		description: "Displays business contact information such as phone number, email address, and physical location.",
		ai: {
			purpose: "Provide users with accessible business contact and location information.",
			useFor: [
				"Business contact information",
				"Store contact details",
				"Company address",
				"Phone number",
				"Email address",
				"Physical store location",
				"Contact sections",
				"Footer contact information"
			],
			keywords: [
				"address",
				"contact information",
				"contact details",
				"phone",
				"email",
				"location",
				"business address",
				"store address"
			],
			rules: [
				"Use for business or store contact information.",
				"Group related phone, email, and location information together.",
				"Use in contact sections, headers, or footers."
			]
		},
		options: {
			phone: {
				icon: "",
				label: 'Phone Number',
				value: '+1 (555) 123-4567'
			},
			email: {
				icon: "",
				label: 'Email',
				value: 'example@example.com'
			},
			location: {
				icon: "",
				label: 'Location',
				value: '123 Main St, City, State 12345',
				mapLink: false
			},
			iconSize: 20,
			showLabels: false
		},
		/*
			AddressView (through its AddressMarkup, which the builder's Address.jsx
			also renders) reads these with elementCssClasses. A row with an empty
			value is left out. Phone and email rows are links (link plus
			phone-link / email-link); the location row is link plus location-link
			with location.mapLink. icon is drawn only when one is set; label only
			with showLabels; text is the value.
		*/
		cssSelectors: {
			'*': { classes: 'flex gap-2 flex-col ' },
			'item': { classes: 'flex gap-2' },
			'link': { classes: 'flex gap-2' },
			'phone-link': { classes: 'flex gap-2' },
			'email-link': { classes: 'flex gap-2' },
			'location-link': { classes: 'flex gap-2' },
			'icon': { classes: '' },
			'label': { classes: 'font-medium' },
			'text': { classes: '' }
		},
		children: [],
		group: ['blocks'],
	},

	/* ====================================================================
		HEADER & NAVIGATION (group 'site') - Site header, footer, sidebar, branding, menus and search.
	==================================================================== */

	/* --- Site parts --- */

	{
		type: "siteHeader",
		label: "Site Header",
		icon: <IconLayoutNavbar />,
		description: "The primary header area of a website or ecommerce store, typically containing branding, navigation, search, account controls, cart controls, or other important site-wide actions.",
		ai: {
			purpose: "Create the primary site-wide header that helps users identify the website and access important navigation and ecommerce functions.",
			useFor: [
				"Website header",
				"Store header",
				"Main navigation area",
				"Ecommerce header",
				"Branding area",
				"Global navigation",
				"Header search",
				"Shopping cart area"
			],
			keywords: [
				"header",
				"site header",
				"website header",
				"store header",
				"navbar",
				"navigation header",
				"main header",
				"ecommerce header"
			],
			rules: [
				"Use once as the primary site-wide header.",
				"Place important global navigation and store actions inside the header.",
				"Common header content includes logo, navigation, search, account, and cart."
			],
			canContain: [
				"logo",
				"menu",
				"quickSearch",
				"button",
				"linkList"
			]
		},
		/*
			id is a saved header template part to show (chosen in the panel); empty,
			the blocks placed inside this one show. (text was never read.)
		*/
		options: {
			id: "",
		},
		/* SiteHeaderView (through its SiteHeaderMarkup, a <header>, which the builder's SiteHeader.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['site']
	},

	{
		type: "siteFooter",
		label: "Site Footer",
		icon: <IconLayoutBottombar />,
		description: "The site-wide footer area containing secondary navigation, helpful links, company information, contact details, policies, and other supporting information.",
		ai: {
			purpose: "Provide site-wide secondary navigation and supporting information at the bottom of pages.",
			useFor: [
				"Footer navigation",
				"Helpful links",
				"Company information",
				"Contact information",
				"Privacy and policy links",
				"Category links",
				"Customer service links",
				"Social links"
			],
			keywords: [
				"footer",
				"site footer",
				"website footer",
				"store footer",
				"footer navigation",
				"footer links"
			],
			rules: [
				"Use once as the primary site-wide footer.",
				"Group related links into logical sections.",
				"Useful footer content includes navigation, customer service, policies, contact information, and branding."
			],
			canContain: [
				"logo",
				"linkList",
				"menu",
				"text"
			]
		},
		/*
			id is a saved footer template part to show (chosen in the panel, which
			always saved it - it was not declared); empty, the blocks placed inside
			this one show. (text was never read.)
		*/
		options: {
			id: "",
		},
		/* SiteFooterView (through its SiteFooterMarkup, a <footer>, which the builder's SiteFooter.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['site']
	},

	{
		type: "sidebar",
		label: "Sidebar",
		icon: <IconLayoutSidebar />,
		description: "A secondary vertical content area positioned beside the main page content, commonly used for navigation, filters, categories, widgets, or supporting information.",
		ai: {
			purpose: "Provide secondary content or controls alongside the main page content.",
			useFor: [
				"Product filters",
				"Category navigation",
				"Secondary navigation",
				"Related links",
				"Shop filters",
				"Recent posts",
				"Widgets",
				"Supporting information"
			],
			keywords: [
				"sidebar",
				"side panel",
				"side navigation",
				"filter sidebar",
				"shop sidebar",
				"category sidebar",
				"sidebar menu"
			],
			rules: [
				"Use when secondary content should appear beside the primary content.",
				"Do not place the main page content exclusively inside the sidebar.",
				"For ecommerce category pages, sidebars are useful for filtering and category navigation."
			],
			canContain: [
				"menu",
				"linkList",
				"quickSearch",
				"list",
				"text"
			]
		},
		/* id is the sidebar template part to show (SidebarOptions assigns it); empty shows the block's own children. It declared `text`, which nothing read. */
		options: {
			id: "",
		},
		/* SidebarView (through its SidebarMarkup, an <aside>, which the builder's Sidebar.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['site']
	},

	/* --- Branding and navigation --- */

	{
		type: "logo",
		label: "Logo",
		icon: null,
		description: "Displays the website or brand logo as text or an image, typically used for branding and navigation.",
		ai: {
			purpose: "Represent the website, store, or brand identity and provide a recognizable brand element.",
			useFor: [
				"Website header",
				"Store header",
				"Brand identity",
				"Navigation header",
				"Footer branding"
			],
			keywords: [
				"logo",
				"brand logo",
				"website logo",
				"store logo",
				"company logo",
				"brand identity"
			],
			rules: [
				"Use primarily in website headers or footers.",
				"Use the actual brand logo when available.",
				"A logo may link to the website homepage."
			]
		},
		/*
			logoType is 'text', 'image' or 'both' (logoMode in LogoView.jsx: an
			image mode without a src shows the text). altText is the image's alt,
			else logoText. link is where it goes ('/' when empty).
		*/
		options: {
			logoType: 'text',
			logoText: 'My Logo',
			src: 'https://placehold.co/600x400',
			altText: '',
			link: '/'
		},
		/* LogoView (through its LogoMarkup, which the builder's Logo.jsx also renders) reads these with elementCssClasses: '*' wraps it, link is the link, img the image, text the logo text. */
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'img': { classes: '' },
			'text': { classes: '' },
		},
		group: ['site']
	},

	{
		type: "menu",
		label: "Menu",
		icon: <IconMenu2 />,
		description: "A navigation container that organizes menu items and optional nested submenus for navigating between pages or sections of a website.",
		ai: {
			purpose: "Create website navigation that helps users move between important pages, categories, or sections.",
			useFor: [
				"Main navigation",
				"Header navigation",
				"Primary navigation",
				"Mobile navigation",
				"Category navigation",
				"Website navigation"
			],
			keywords: [
				"menu",
				"navigation",
				"navbar",
				"navigation menu",
				"main menu",
				"header menu",
				"site navigation",
				"primary navigation"
			],
			rules: [
				"Use for groups of navigational menu items.",
				"Place related navigation destinations together.",
				"Use nested menu items for hierarchical navigation such as categories and subcategories."
			],
			canContain: [
				"menuItem"
			],
			childPurpose: "Each menu item represents a navigational destination and may contain nested submenu items."
		},
		"children": [
			{
				"id": "b4mquipsn9",
				"type": "menuItem",
				"options": {},
				"children": [],
				"cssSelectors": {
					"*": {
						"classes": ""
					}
				}
			}
		],
		/*
			showFrom: the screen width the menu shows from - 'all', 'md', 'lg' or
			'xl' (menuVisibilityClasses in MenuView.jsx; unset, 'xl' unless the '*'
			classes set their own display). label names the <nav> for screen readers.
		*/
		options: {
			showFrom: 'xl',
			label: 'Main menu',
		},
		/*
			MenuView (through its MenuMarkup, a <nav>, which the builder's Menu.jsx
			also renders) reads '*' and menu (the list); the menu items read the
			rest through MenuContext.
		*/
		"cssSelectors": {
			"*": { "classes": "" },
			'menu': { classes: 'flex gap-5 text-sm' },
			'menu-item': { classes: '' },
			'sub-menu': { classes: '' },
			'menu-link': { classes: '' },
			'link-label': { classes: '' },
			'icon': { classes: '' },
		},
		group: ['site']
	},

	{
		type: "menuItem",
		label: "Menu Item",
		icon: null,
		description: "A single navigation link within a menu that directs users to a page, category, section, or other destination and can contain nested submenu items.",
		ai: {
			purpose: "Represent one navigation destination within a website menu.",
			useFor: [
				"Page navigation",
				"Category navigation",
				"Product category navigation",
				"Subcategory navigation",
				"Account navigation",
				"Utility navigation"
			],
			keywords: [
				"menu item",
				"navigation item",
				"nav link",
				"menu link",
				"category link",
				"navigation link"
			],
			rules: [
				"Use inside a menu.",
				"The label should clearly describe the destination.",
				"Use nested menu items when the destination has child categories or pages."
			],
			parentRequired: ["menu", "menuItem"],
			canContain: [
				"menuItem"
			]
		},
		/*
			label and url (a page; '' or '#' with a sub-menu: the label opens the
			sub-menu instead); icon and iconSize (24 when unset). Menu items placed
			inside this one form its sub-menu, which opens on hover, keyboard
			focus or the arrow button (MenuItemMarkup in MenuItemView.jsx).
		*/
		options: {
			label: "Menu 1",
			url: "/",
		},
		/* MenuItemView (through its MenuItemMarkup, which the builder's MenuItem.jsx also renders) reads these with elementCssClasses, next to the menu's menu-item, menu-link, link-label, icon and sub-menu classes. */
		cssSelectors: {
			/* Read by the renderer but was not declared, so the style editor could not show it. */
			'sub-menu': { classes: '' },
			'*': { classes: '' },
			'label': { classes: '' },
			'link': { classes: '' },
			'icon': { classes: '' },
		},
		group: ['site'],
		children: [],
		parent: ['menu', 'menuItem']
	},

	{
		type: "accordionMenu",
		label: "AccordionMenu",
		icon: <IconBasketCheck />,
		description: "A hierarchical menu that displays categories or nested items in an expandable accordion-style structure.",
		ai: {
			purpose: "Provide expandable hierarchical navigation for categories, subcategories, or other nested content.",
			useFor: [
				"Category navigation",
				"Product category menu",
				"Hierarchical navigation",
				"Sidebar navigation",
				"Nested menu",
				"Expandable category list",
				"Shop category navigation"
			],
			keywords: [
				"accordion menu",
				"category menu",
				"category navigation",
				"nested menu",
				"hierarchical menu",
				"subcategory",
				"expandable menu",
				"sidebar menu",
				"product categories",
				"shop navigation"
			],
			rules: [
				"Use for hierarchical or nested navigation items.",
				"Use expandable child items when categories contain subcategories.",
				"Use for product categories or other hierarchical taxonomies.",
				"Keep parent and child items visually distinguishable.",
				"Use a clear label or name for each menu item.",
				"Enable hierarchical behavior when nested items should be expandable.",
				"Use the categories root when the menu is intended for product or content category navigation."
			]
		},
		/*
			source: 'manual' shows items; 'terms' fetches them with queryPrams
			(set through the panel's terms query). root and hierarchical build
			each link: root/parent/child/ when hierarchical, slug/ otherwise.
			icon / iconSize are the default for every item; an item may set its own.
		*/
		options: {
			source: 'manual',
			root: 'categories',
			hierarchical: true,
			icon: '',
			iconSize: 20,
			queryPrams: {},
			items: [
				{ "name": "Fruits", "slug": "fruits", "count": "" },
				{ "name": "Vegetables", "slug": "vegetables", "count": "" },
				{ "name": "Groceries", "slug": "groceries", "count": "", children: [{ "name": "Rice", "slug": "rice" }, { "name": "Oil", "slug": "oil" }] }
			],
		},
		/*
			The single source of the menu's default classes: AccordionMenuView
			(through its AccordionMenuMarkup, which the builder's AccordionMenu.jsx
			also renders) and AccordionMenuOptions fall back to these via
			elementCssClasses / withElementCssDefaults at the end of this file
			when a block lacks a key. They are the classes the rows used to have
			hardcoded. item-row-open is added to an open row.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'item': { classes: '' },
			'item-row': { classes: 'bg-gray-400 flex justify-between text-gray-800 mb-2 rounded-sm cursor-pointer px-4 py-2 items-center gap-2' },
			'item-row-open': { classes: '' },
			'item-link': { classes: 'font-medium' },
			'item-icon': { classes: 'mr-2 inline-flex align-middle' },
			'item-count': { classes: '' },
			'item-toggle': { classes: 'flex shrink-0 items-center' },
			'children': { classes: 'pl-2 border-l-2 border-gray-500' },
		},
		/* Declared on the old element and never read by either renderer. */
		deprecatedCssSelectors: ['li', 'icon', 'text'],
		group: ['site']
	},

	{
		type: "linkList",
		label: "Link List",
		icon: <IconListDetails />,
		description: "Displays a group of related clickable links, optionally with a heading and icons, for navigation or discovering related content.",
		ai: {
			purpose: "Provide a collection of related navigation links that help users discover pages, products, categories, or other useful content.",
			useFor: [
				"Footer navigation",
				"Related categories",
				"Related products",
				"Quick links",
				"Helpful links",
				"Navigation groups",
				"Popular categories",
				"Product category links"
			],
			keywords: [
				"link list",
				"links",
				"navigation links",
				"quick links",
				"related links",
				"footer links",
				"category links",
				"navigation menu"
			],
			rules: [
				"Use when multiple related destinations need to be presented together.",
				"Use a descriptive header when the purpose of the links needs clarification.",
				"Group links that share a common topic or destination type."
			]
		},
		/*
			headerText (optional) heads the list. Each item is { text, slug (its
			URL), icon, newTab }; an item without a URL is plain text. icon is the
			default for items without their own, at iconSize (24 when unset). tag
			is 'ul' or 'ol'.
		*/
		options: {
			headerText: '',
			items: [{ "text": "Custom Item", "icon": "", "slug": "/" }],
			tag: 'ul',
			icon: '',
			iconSize: 24,
		},
		/* LinkListView (through its LinkListMarkup, which the builder's LinkList.jsx also renders) reads these with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' },
			'header-text': { classes: 'text-sm' },
			'ul': { classes: '' },
			'li': { classes: '' },
			'link': { classes: 'flex items-center gap-2' },
			'icon': { classes: 'text-lg' },
			'text': { classes: 'text-sm' }
		},
		group: ['site']
	},

	{
		type: "quickSearch",
		label: "Quick Search",
		icon: <IconListSearch />,
		description: "Provides a search input with quick suggestions or results to help users find products, pages, categories, or other content efficiently.",
		ai: {
			purpose: "Help users quickly search and discover relevant content, products, or categories.",
			useFor: [
				"Ecommerce product search",
				"Website search",
				"Header search",
				"Quick product discovery",
				"Search suggestions",
				"Store navigation"
			],
			keywords: [
				"search",
				"quick search",
				"product search",
				"search box",
				"search bar",
				"site search",
				"search products",
				"search suggestions"
			],
			rules: [
				"Use prominently in ecommerce headers or other areas where product discovery is important.",
				"Use a clear placeholder that tells users what they can search for.",
				"Prefer product or content search when the page contains a large amount of searchable information."
			]
		},
		options: {
			"placeholder": "",
			"iconPosition": "",
			"icon": "IconZoom"
		},
		cssSelectors: {
			/* The results panel: these were hardcoded in QuickSearchView with these same classes. */
			'filters': { classes: 'flex flex-wrap items-center gap-2 border-b border-gray-100 p-3' },
			'filter-select': { classes: 'min-w-[8rem] flex-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15' },
			'clear-filters': { classes: 'inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900' },
			'results': { classes: 'min-h-0 flex-1 overflow-y-auto p-2' },
			'loading': { classes: 'flex items-center justify-center gap-2 py-8 text-sm text-gray-500' },
			'empty': { classes: 'flex flex-col items-center gap-2 py-8 text-center' },
			'empty-icon': { classes: 'text-gray-400' },
			'empty-title': { classes: 'text-sm font-medium text-gray-900' },
			'empty-text': { classes: 'text-xs text-gray-500' },
			'result': { classes: 'flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50' },
			'result-thumb': { classes: 'shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50' },
			'result-image': { classes: 'h-14 w-14 object-cover' },
			'result-info': { classes: 'min-w-0 flex-1' },
			'result-title': { classes: 'line-clamp-2 text-sm font-medium text-gray-900 hover:text-[#1b0e9f]' },
			'result-prices': { classes: 'mt-0.5 flex items-baseline gap-2 text-sm' },
			'result-price': { classes: 'font-semibold text-[#1b0e9f]' },
			'result-regular-price': { classes: 'text-xs text-gray-400 line-through' },
			'stepper': { classes: 'flex shrink-0 items-center rounded-lg border border-gray-300' },
			'stepper-button': { classes: 'flex h-8 w-8 items-center justify-center text-gray-600 transition-colors hover:bg-gray-100' },
			'stepper-value': { classes: 'min-w-6 text-center text-sm font-medium tabular-nums' },
			'add-button': { classes: 'inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1b0e9f] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#150b7d]' },
			'pager': { classes: 'flex items-center justify-between gap-3 border-t border-gray-100 px-3 py-2' },
			'pager-button': { classes: 'inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'pager-info': { classes: 'text-xs text-gray-500' },
			"*": {
				"classes": "border-2 border-orange-300 rounded-full p-1 px-5 bg-orange-100"
			},
			"input-search": {
				"classes": "w-full lg:w-max  px-3"
			},
			"input-wrapper": {
				"classes": "flex flex-wrap gap-2  items-center"
			},
			"icon": {
				"classes": "text-orange-600"
			},
			"popover": {
				"classes": "bg-gray-100"
			},
			"reset": {
				"classes": "text-red-400 text-sm cursor-pointer"
			},
			"categories": {
				"classes": ""
			},
			"brands": {
				"classes": ""
			},
			"items": {
				"classes": ""
			},
			"item": {
				"classes": "flex gap-3 text-sm items-center  p-1"
			},
			"item-title": {
				"classes": ""
			},
			"item-image": {
				"classes": "object-cover w-16 h-16"
			},
			"pagination": {
				"classes": "flex items-center justify-center gap-3  my-3"
			},
			"page-item": {
				"classes": "border-2 border-solid border-gray-600 !shadow-none px-2 py-1 rounded-sm cursor-pointer"
			},
			"page-count": {
				"classes": "border-2 border-solid border-gray-600 !shadow-none px-2 py-1 rounded-sm cursor-pointer w-16 text-center"
			}

		},
		group: ['site']
	},

	/* ====================================================================
		POSTS & CONTENT (group 'content') - Post lists, the fields of the current post or product, and comments.
	==================================================================== */

	/* --- Post lists --- */

	{
		type: "postGrid",
		label: "Post Grid",
		icon: null,
		description: "Displays multiple posts or articles in a structured grid layout, with each post rendered using the elements defined inside the post loop.",
		ai: {
			purpose: "Present a collection of posts in a scannable multi-column grid.",
			useFor: [
				"Blog archive",
				"Recent posts",
				"Article listing",
				"News grid",
				"Related posts",
				"Post archive pages"
			],
			keywords: [
				"post grid",
				"blog grid",
				"article grid",
				"post listing",
				"blog posts",
				"news grid",
				"recent posts"
			],
			rules: [
				"Use when multiple posts should be displayed simultaneously in a grid.",
				"Use postLoop to define the content displayed for each post.",
				"Each grid item should represent one post."
			],
			canContain: [
				"postLoop",
				"postGridPagination"
			]
		},
		/*
			queryPrams (that spelling: it is what the saved blocks, the query editor
			and PostLoop use; this declared queryParams, which nothing read) is the
			get_posts query. A grid without one shows defaultPostGridQuery in
			PostGridView.jsx, the same as this. (classes was never read.)
		*/
		options: {
			queryPrams: { post_type: ['post'], order: 'DESC', orderby: 'date', posts_per_page: '4', taxQuery: [] },
		},
		/*
			PostGridView (through its PostGridMarkup, which the builder's
			PostGrid.jsx also renders) reads '*'. loop-items (the list of cards) and
			loop-item (each card) are read by the postLoop inside, from these keys
			through PostGridContext - not from the postLoop's own selectors.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: 'flex flex-col gap-3' },
		},
		/* The cards' contents; the loop's own selectors mirror the grid's, as the templates do. */
		children: [
			{
				"id": "b1mqswtn36",
				"type": "postLoop",
				"options": {},
				"children": [
					{
						"id": "b1mqswryz4",
						"type": "postThumbnail",
						"options": { "linkTo": "postUrl" },
						"cssSelectors": {
							"*": { "classes": "" },
							"link": { "classes": "block" },
							"image": { "classes": "aspect-[4/3] w-full rounded-sm object-cover" },
						}
					},
					{
						"id": "b1mqswrwsg",
						"type": "postTitle",
						"options": { "linkTo": "postUrl", "tag": "h3" },
						"cssSelectors": {
							"*": { "classes": "line-clamp-2 text-base font-semibold" },
						}
					},
				],
				"cssSelectors": {
					"*": { "classes": "" },
					"loop-items": { "classes": "grid grid-cols-4 gap-5" },
					"loop-item": { "classes": "flex flex-col gap-3" }
				}
			}
		],
		group: ['content']
	},

	{
		type: "postGridPagination",
		label: "Post Grid Pagination",
		icon: null,
		description: "Provides navigation controls for moving between pages of posts displayed in a post grid.",
		ai: {
			purpose: "Allow users to navigate through multiple pages of post results when all posts cannot be displayed on one page.",
			useFor: [
				"Blog pagination",
				"Post archive pagination",
				"Article listing pagination",
				"News archive pagination",
				"Post grid navigation"
			],
			keywords: [
				"pagination",
				"post pagination",
				"blog pagination",
				"page navigation",
				"next page",
				"previous page",
				"post archive navigation"
			],
			rules: [
				"Use below a post grid when posts are divided across multiple pages.",
				"Do not use when all posts are displayed on a single page.",
				"Place after the post grid content."
			],
			parentRequired: "postGrid"
		},
		/*
			style is 'numbers' (page buttons) or 'input' (a page box); without one,
			numbers when pagination-item is styled, else input
			(paginationSettings in PostGridPaginationView.jsx). prevText / nextText
			label the buttons (empty: the arrow only); prevIcon / nextIcon replace
			the arrows. (These sat in a sliderOptions object, which is still read.)
		*/
		options: {
			style: 'numbers',
			prevText: '',
			prevIcon: '',
			nextText: '',
			nextIcon: '',
		},
		/*
			PostGridPaginationView (through its PaginationMarkup, which the
			builder's PostGridPagination.jsx and the terms grid's pagination also
			render) reads these with elementCssClasses.
		*/
		cssSelectors: {
			'*': { classes: 'flex gap-2 items-center justify-center my-10' },
			'previous': { classes: 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'next': { classes: 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'previous-icon': { classes: '' },
			'next-icon': { classes: '' },
			'pagination-item': { classes: 'flex size-9 items-center justify-center rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50' },
			'pagination-item-active': { classes: 'flex size-9 items-center justify-center rounded-md border border-blue-600 bg-blue-600 text-sm text-white' },
			'ellipsis': { classes: 'px-1 text-gray-400' },
			'current': { classes: 'w-16 rounded-md border border-gray-300 py-2 text-center' },
			'total': { classes: 'text-sm text-gray-500' },
		},
		group: ['content'],
		parent: ['postGrid'],
	},

	{
		type: "postSlider",
		label: "Post Slider",
		icon: null,
		description: "Displays multiple posts or articles in a horizontally navigable slider or carousel.",
		ai: {
			purpose: "Present a collection of posts in a compact, horizontally scrollable format.",
			useFor: [
				"Featured posts",
				"Recent posts",
				"Related posts",
				"Blog posts",
				"News articles",
				"Featured articles",
				"Post recommendations"
			],
			keywords: [
				"post slider",
				"post carousel",
				"blog slider",
				"article carousel",
				"featured posts",
				"recent posts slider",
				"news slider"
			],
			rules: [
				"Use when several posts should be browsed horizontally.",
				"Use postLoop to define the content displayed for each post.",
				"Prefer a slider when horizontal browsing is more appropriate than displaying all posts in a grid."
			],
			canContain: [
				"postLoop"
			]
		},
		/*
			queryPrams is the get_posts query (a slider without one shows
			defaultPostSliderQuery in PostSliderView.jsx, the same as this).
			sliderOptions goes to Splide as it is: perPage and breakpoints set the
			columns (mediaQuery 'max': breakpoint keys are max widths).
		*/
		options: {
			queryPrams: { post_type: ['post'], order: 'DESC', orderby: 'date', posts_per_page: '8', taxQuery: [] },
			sliderOptions: {
				perPage: 3,
				gap: '2em',
				mediaQuery: 'max',
				breakpoints: { 768: { perPage: 2, gap: '1em' }, 480: { perPage: 1 } },
			},
		},
		/*
			PostSliderView (through its PostSliderMarkup, which the builder's
			PostSlider.jsx also renders) puts these on the arrows and dots through
			Splide's classes option, next to Splide's own class names. loop-item
			styles each slide's card, through PostSliderContext, unless the
			postLoop sets its own.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'arrows-wrap': { classes: '' },
			'arrow-item': { classes: '' },
			'arrow-prev': { classes: '' },
			'arrow-next': { classes: '' },
			'pagination': { classes: '' },
			'page-item': { classes: '' },
			'loop-item': { classes: '' },
		},
		group: ['content'],
		children: [{
			"id": "b1mqswtn36",
			"type": "postLoop",
			"options": {},
			"children": [{
				"id": "b1mqswryz4",
				"type": "postThumbnail",
				"options": { "linkTo": "postUrl" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "block" },
					"image": { "classes": "aspect-[4/3] w-full rounded-sm object-cover" },
				}
			}, {
				"id": "b1mqswrwsg",
				"type": "postTitle",
				"options": { "linkTo": "postUrl", "tag": "h3" },
				"cssSelectors": {
					"*": { "classes": "line-clamp-2 text-base font-semibold" },
				}
			}],
			"cssSelectors": {
				"*": { "classes": "" },
				"loop-items": { "classes": "" },
				"loop-item": { "classes": "flex flex-col gap-3" }
			}
		}]
	},

	{
		type: "postLoop",
		label: "Post Loop",
		icon: null,
		description: "A repeating content container that dynamically renders multiple posts or articles using a defined set of post-related child elements.",
		ai: {
			purpose: "Generate repeated post content dynamically from the site's available posts.",
			useFor: [
				"Blog posts",
				"Article listings",
				"News listings",
				"Post archives",
				"Recent posts",
				"Post collections"
			],
			keywords: [
				"post loop",
				"posts",
				"blog posts",
				"article loop",
				"post listing",
				"post archive",
				"recent posts"
			],
			rules: [
				"Use inside postGrid or postSlider.",
				"Child elements should represent information displayed for each post.",
				"Use post-specific elements such as thumbnail and title inside the loop."
			],
			parentRequired: [
				"postGrid",
				"postSlider",
				"relatedProducts",
				"productUpsells",
				"productCrosssells"
			],
			canContain: [
				"postThumbnail",
				"postTitle"
			]
		},
		group: ['content'],
		parent: ['postGrid', 'postSlider', 'relatedProducts', 'productUpsells', 'productCrosssells'],
		/* Each card's blocks: they read the card's post through usePost(). */
		children: [
			{
				"id": "b1mqswryz4",
				"type": "postThumbnail",
				"options": { "linkTo": "postUrl" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "block" },
					"image": { "classes": "aspect-[4/3] w-full rounded-sm object-cover" },
				}
			},
			{
				"id": "b1mqswrwsg",
				"type": "postTitle",
				"options": { "linkTo": "postUrl", "tag": "h3" },
				"cssSelectors": {
					"*": { "classes": "line-clamp-2 text-base font-semibold" },
				}
			},
		],
		/*
			PostLoopView (through its PostLoopMarkup, which the builder's PostLoop.jsx
			also renders) reads these with postLoopClasses: loop-items is the list
			(not drawn inside a slider, whose track is the list) and loop-item each
			card. A key set here wins; an empty one takes the parent grid's,
			slider's or related products' key, then these defaults. '*' is unused:
			the list is the loop's outer element.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: '' },
			'loop-item': { classes: '' },
		}
	},

	/* --- Post fields (the current post or product: on its page, or in a loop) --- */

	{
		type: "postTitle",
		label: "Post Title",
		icon: null,
		description: "Displays the title of the current post or article being rendered.",
		ai: {
			purpose: "Identify the current post or article within a post listing, archive, slider, or single post page.",
			useFor: [
				"Blog post title",
				"Article title",
				"News title",
				"Post card title",
				"Post archive title"
			],
			keywords: [
				"post title",
				"article title",
				"blog title",
				"news title",
				"post heading"
			],
			rules: [
				"Use inside post loops or post content layouts.",
				"The title should represent the current dynamic post.",
				"Use an appropriate heading level based on the surrounding page hierarchy."
			]
		},
		/*
			linkTo 'postUrl' (the default) links the title to the post's page; ''
			leaves it unlinked. tag (h1-h6, p, div) wraps the title, and then takes
			the '*' classes with the link inside; unset, '*' is on the link itself.
			(classes was never read.)
		*/
		options: {
			linkTo: 'postUrl',
		},
		/* PostTitleView (through its PostTitleMarkup, which the builder's PostTitle.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content'],
	},

	{
		type: "postThumbnail",
		label: "Post Thumbnail",
		icon: null,
		description: "Displays the featured image or thumbnail associated with the current post or article.",
		ai: {
			purpose: "Provide a visual representation of the current post in listings, cards, sliders, or article pages.",
			useFor: [
				"Blog post thumbnail",
				"Article featured image",
				"Post card image",
				"News image",
				"Featured post image"
			],
			keywords: [
				"post thumbnail",
				"featured image",
				"post image",
				"article image",
				"blog image",
				"post card image"
			],
			rules: [
				"Use inside post listings, grids, sliders, or post detail layouts.",
				"Use the featured image associated with the current post.",
				"Pair with postTitle and postExcerpt when creating post cards."
			]
		},
		/* linkTo 'postUrl' (the default) links the image to the post's page; '' leaves it unlinked. */
		options: {
			linkTo: 'postUrl',
		},
		/*
			PostThumbnailView (through its PostThumbnailMarkup, which the builder's
			PostThumbnail.jsx also renders) reads these with elementCssClasses: '*'
			wraps it, link is the link when linked, image the image.
		*/
		cssSelectors: {
			"*": { "classes": "" },
			"link": { "classes": "" },
			"image": { "classes": "" },
		},
		group: ['content'],
	},

	{
		type: "postExcerpt",
		label: "Post Excerpt",
		icon: null,
		description: "Displays a shortened summary of the current post, optionally with a read-more action for additional details.",
		ai: {
			purpose: "Provide a concise post summary that helps shoppers quickly understand the post.",
			useFor: [
				"post card summary",
				"Short post description",
				"post listing description",
				"post preview",
				"Related post summary"
			],
			keywords: [
				"post excerpt",
				"post summary",
				"short post description",
				"post preview",
				"post snippet"
			],
			rules: [
				"Use when a concise post summary is needed.",
				"Prefer short, useful information that helps users decide whether to view the post.",
				"Use read-more when the full post information is not immediately displayed."
			]
		},
		/*
			maxWord above 0 cuts the excerpt to that many words as plain text; 0 shows
			it whole, formatted. readMoreText ('' for none) links to the post's page.
		*/
		options: {
			maxWord: 20,
			readMoreText: 'Read More',
			readMoreIcon: '',
			readMoreIconSize: 25,
		},
		/* PostExcerptView (through its PostExcerptMarkup, which the builder's PostExcerpt.jsx also renders) reads these with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' },
			'excerpt': { classes: '' },
			'read-more': { classes: 'flex gap-2 items-center' },
			'read-more-icon': { classes: '' },
			'read-more-label': { classes: '' },
		},
		group: ['content']
	},

	{
		type: "postContent",
		label: "Post Content",
		icon: null,
		description: "Displays the full content of the current post or article.",
		ai: {
			purpose: "Render the complete body content of a post or article.",
			useFor: [
				"Blog article content",
				"News article content",
				"Post detail pages",
				"Long-form content"
			],
			keywords: [
				"post content",
				"article content",
				"blog content",
				"post body",
				"article body"
			],
			rules: [
				"Use on single post or article pages.",
				"Use when the complete post content should be displayed.",
				"Do not use when only a short preview is needed."
			]
		},
		/* No options: it shows the post's own content. (classes was never read.) */
		options: {},
		/*
			PostContentView (through its PostContentMarkup, which the builder's
			PostContent.jsx also renders) reads this with elementCssClasses. '*' is
			the <article>; style the content inside with variants like [&_p]:mb-4.
		*/
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content'],
	},

	{
		type: "postAuthor",
		label: "Post Author",
		icon: null,
		description: "Displays the author associated with the current post or article.",
		ai: {
			purpose: "Identify who created or authored the current post.",
			useFor: [
				"Blog posts",
				"Articles",
				"News content",
				"Author attribution",
				"Post metadata"
			],
			keywords: [
				"post author",
				"article author",
				"author name",
				"written by",
				"author attribution"
			],
			rules: [
				"Use as post metadata or attribution.",
				"Place near the post title, date, or other post metadata when appropriate."
			]
		},
		/*
			linkTo 'postUrl' (the default) links to the post's page - there is no
			author page - and '' leaves it unlinked. label (e.g. "By") goes before
			the name; showAvatar adds the author's avatar. (classes was never read.)
		*/
		options: {
			linkTo: '',
			label: '',
			showAvatar: false,
		},
		/*
			PostAuthorView (through its PostAuthorMarkup, which the builder's
			PostAuthor.jsx also renders) reads these with elementCssClasses: '*' is
			the root, then avatar, label and name inside it.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'avatar': { classes: 'h-6 w-6 rounded-full object-cover' },
			'label': { classes: '' },
			'name': { classes: '' },
		},
		group: ['content'],
	},

	{
		type: "postDate",
		label: "Post Date",
		icon: null,
		description: "Displays the publication or relevant date of the current post or article.",
		ai: {
			purpose: "Communicate when the current post was published or associated with a date.",
			useFor: [
				"Publication date",
				"Blog metadata",
				"Article metadata",
				"News date",
				"Post archive information"
			],
			keywords: [
				"post date",
				"publication date",
				"article date",
				"published date",
				"blog date"
			],
			rules: [
				"Use as post metadata.",
				"Place near the post title or author when displaying article information."
			]
		},
		/*
			dateFormat takes moment-style tokens (YYYY MMM DD ...) or PHP ones
			(Y M d ...); a block without one shows DD-MM-YYYY. linkTo 'postUrl' links
			the date to the post's page; '' leaves it unlinked. (This declared
			format, which nothing read; the code always read dateFormat.)
		*/
		options: {
			dateFormat: 'MMM DD, YYYY',
			linkTo: '',
		},
		/* PostDateView (through its PostDateMarkup, which the builder's PostDate.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content'],
	},

	/* --- Comments and reviews --- */

	{
		type: "commentsGrid",
		label: "Comments Grid",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
		},
		/*
			Shows the comments of the post or product on the page (the site's latest
			on a page without one). queryPrams takes per_page and order ('ASC' oldest
			first, 'DESC' newest first); commentsGridQuery in CommentsGridView.jsx
			adds the post id and reads nothing else.
		*/
		options: {
			queryPrams: { per_page: 20, order: 'ASC' },
		},
		/*
			CommentsGridView (through CommentsGridMarkup, which the builder's
			CommentsGrid.jsx also renders) reads '*'. loop-items (the list) and
			loop-item (each card) are read by the commentsLoop inside, from these
			keys through CommentsGridContext.
		*/
		cssSelectors: {
			"*": {
				"classes": "w-full max-w-5xl mx-auto"
			},
			"loop-items": {
				"classes": "flex flex-col gap-4"
			},
			"loop-item": {
				"classes": "grid grid-cols-[auto_1fr] gap-x-4 p-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:bg-gray-900 dark:border-gray-800"
			}
		},
		group: ['content'],

		children: [
			{
				"id": "b4muut0xlu",
				"type": "grid",
				"children": [
					{
						"id": "b5muut0xlu",
						"type": "gridItem",
						"cssSelectors": {
							"*": {
								"classes": "min-w-0"
							}
						},
						"children": [
							{
								"id": "b6muut0xlu",
								"type": "commentsLoop",
								"options": {},
								"cssSelectors": {
									"*": {
										"classes": ""
									},
									"loop-item": {
										"classes": ""
									},
								},
								"children": [
									{
										"id": "b7muut0xlu",
										"type": "commentAuthor",
										"options": {},
										"cssSelectors": {
											"*": {
												"classes": "col-start-2 row-start-1 self-end text-base font-semibold text-gray-900 dark:text-white"
											}
										},

									},
									{
										"id": "b8muut0xlu",
										"type": "commentContent",
										"options": {},
										"cssSelectors": {
											"*": {
												"classes": "col-start-2 row-start-2 mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300 break-words"
											}
										},

									},
									{
										"id": "b9muut0xlu",
										"type": "commentAvatar",
										"options": {},
										"cssSelectors": {
											"*": {
												"classes": "col-start-1 row-start-1 row-span-2 w-12 h-12 shrink-0"
											},
											"link": {
												"classes": "block w-full h-full"
											},
											"image": {
												"classes": "w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 dark:ring-gray-700"
											}
										},

									}
								]
							},
							{
								"id": "b10muut0xlu",
								"type": "commentsGridPagination",
								"options": {
									"sliderOptions": {
										"prevText": "",
										"prevIcon": "",
										"nextText": "",
										"nextIcon": ""
									}
								},
								"cssSelectors": {
									"*": {
										"classes": "flex gap-3 items-center justify-center mt-8 mb-4"
									},
									"previous": {
										"classes": "inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
									},
									"next": {
										"classes": "inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
									},
									"previous-icon": {
										"classes": "w-4 h-4"
									},
									"next-icon": {
										"classes": "w-4 h-4"
									},
									"current": {
										"classes": "min-w-[3rem] px-4 py-2 rounded-lg border-2 border-blue-600 text-center text-sm font-semibold text-blue-600 bg-white dark:bg-gray-900"
									}
								}
							}
						],
						"options": {}
					},
					{
						"id": "b11muut0xlu",
						"type": "gridItem",
						"cssSelectors": {
							"*": {
								"classes": "min-w-0 h-fit p-5 md:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm lg:sticky lg:top-6 dark:bg-gray-900 dark:border-gray-800"
							}
						},
						"children": [
							{
								"id": "b12muut0xlu",
								"type": "commentsForm",
								"options": {},
								"cssSelectors": {
									"*": {
										"classes": "flex flex-col gap-4 [&_label]:text-sm [&_label]:font-medium [&_label]:text-gray-700 [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-gray-300 [&_input]:px-3 [&_input]:py-2 [&_input]:text-sm [&_input]:focus:border-blue-500 [&_input]:focus:outline-none [&_input]:focus:ring-2 [&_input]:focus:ring-blue-200 [&_textarea]:w-full [&_textarea]:min-h-[120px] [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-gray-300 [&_textarea]:px-3 [&_textarea]:py-2 [&_textarea]:text-sm [&_textarea]:focus:border-blue-500 [&_textarea]:focus:outline-none [&_textarea]:focus:ring-2 [&_textarea]:focus:ring-blue-200 [&_button]:rounded-lg [&_button]:bg-blue-600 [&_button]:px-5 [&_button]:py-2.5 [&_button]:text-sm [&_button]:font-semibold [&_button]:text-white [&_button]:transition [&_button]:hover:bg-blue-700"
									}
								},
								"children": []
							}
						],
						"options": {}
					}
				],
				"cssSelectors": {
					"*": {
						"classes": "grid grid-cols-1 lg:grid-cols-2 gap-8 p-3 md:p-4"
					},
					"grid-item": {
						"classes": ""
					}
				},
				"options": {}
			}
		],
	},

	{
		type: "commentsLoop",
		label: "Comments Loop",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "commentsGrid"
		},
		options: {},
		/*
			CommentsLoopView (through its CommentsLoopMarkup, which the builder's
			CommentsLoop.jsx also renders) reads these with commentsLoopClasses:
			loop-items is the list, loop-item each card - set here, they win over
			the comments grid's; empty, the grid's apply. '*' is unused.
		*/
		cssSelectors: {
			'loop-items': { classes: '' },
			'*': { classes: '' },
			'loop-item': { classes: '' }
		},
		group: ['content'],
		parent: ['commentsGrid'],
		children: [],
	},

	{
		type: "commentAvatar",
		label: "Comment Avatar",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "commentsGrid"
		},
		/* The commenter's Gravatar. linkToAuthor links it to the website they gave, when they gave one. */
		options: {
			linkToAuthor: false,
		},
		/* CommentAvatarView (through its CommentAvatarMarkup, which the builder's CommentAvatar.jsx also renders) reads these with elementCssClasses: '*' wraps it, link is the link when linked, image the picture. */
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'image': { classes: 'w-12 h-12 rounded-full object-cover' }
		},
		group: ['content'],
		parent: ['commentsGrid'],
	},

	{
		type: "commentAuthor",
		label: "Comment Author",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "commentsGrid"
		},
		/* The comment author's name, as text. label (e.g. "By ") goes before it; tag is div, span, p, strong, cite or h3-h6 (div when unset). */
		options: {
			label: '',
			tag: 'div',
		},
		/* CommentAuthorView (through its CommentAuthorMarkup, which the builder's CommentAuthor.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content'],
		parent: ['commentsGrid'],
	},

	{
		type: "commentContent",
		label: "Comment Content",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "commentsGrid"
		},
		/* The comment's text, as plain text with its line breaks (commentParagraphs in CommentContentView.jsx). tag is div, p or blockquote. */
		options: {
			tag: 'div',
		},
		/* CommentContentView (through its CommentContentMarkup, which the builder's CommentContent.jsx also renders) reads these with elementCssClasses: paragraph is each paragraph when there are several. */
		cssSelectors: {
			'*': { classes: '' },
			'paragraph': { classes: 'mt-2 first:mt-0' },
		},
		group: ['content'],
		parent: ['commentsGrid'],
	},

	{
		type: "commentRate",
		label: "Comment Rate",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "commentsGrid"
		},
		/* The comment's 0-5 star rating (commentRating in CommentRateView.jsx). iconSize sizes the stars (24 when unset); showValue false hides the "4/5" text. */
		options: {
			iconSize: 18,
			showValue: true,
		},
		/* CommentRateView (through its CommentRateMarkup, which the builder's CommentRate.jsx also renders) reads these with elementCssClasses: star-loop holds the stars, avg-rating is the "4/5" text. */
		cssSelectors: {
			'*': { classes: 'flex gap-0.5 items-center' },
			'star-loop': { classes: 'flex gap-0.5 items-center text-amber-500' },
			'star': { classes: '' },
			'avg-rating': { classes: '' },
		},
		group: ['content'],
		parent: ['commentsGrid'],
	},

	{
		type: "commentsGridPagination",
		label: "Comments Grid Pagination",
		icon: null,
		description: "Provides navigation controls for moving between pages of comments displayed in a comments grid.",
		ai: {
			purpose: "Allow users to navigate through multiple pages of post results when all comments cannot be displayed on one page.",
			useFor: [
				"Blog pagination",
				"Post archive pagination",
				"Article listing pagination",
				"News archive pagination",
				"Post grid navigation"
			],
			keywords: [
				"pagination",
				"post pagination",
				"blog pagination",
				"page navigation",
				"next page",
				"previous page",
				"post archive navigation"
			],
			rules: [
				"Use below a post grid when comments are divided across multiple pages.",
				"Do not use when all comments are displayed on a single page.",
				"Place after the post grid content."
			],
			parentRequired: "postGrid"
		},
		/*
			The same options as postGridPagination (see there); the panel is shared
			too. get_comments sends no page count, so the page box is used until the
			last page is known (a short page), whatever the style.
		*/
		options: {
			style: 'input',
			prevText: '',
			prevIcon: '',
			nextText: '',
			nextIcon: '',
		},
		/* CommentsGridPaginationView and the builder's CommentsGridPagination.jsx render postGridPagination's PaginationMarkup with these. */
		cssSelectors: {
			'*': { classes: 'flex gap-2 items-center justify-center my-10' },
			'previous': { classes: 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'next': { classes: 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'previous-icon': { classes: '' },
			'next-icon': { classes: '' },
			'pagination-item': { classes: 'flex size-9 items-center justify-center rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50' },
			'pagination-item-active': { classes: 'flex size-9 items-center justify-center rounded-md border border-blue-600 bg-blue-600 text-sm text-white' },
			'ellipsis': { classes: 'px-1 text-gray-400' },
			'current': { classes: 'w-16 rounded-md border border-gray-300 py-2 text-center' },
			'total': { classes: 'text-sm text-gray-500' },
		},
		group: ['content'],
		parent: ['commentsGrid'],
	},

	{
		type: "commentsForm",
		label: "CommentsForm",
		icon: null,
		description: "",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "commentsGrid"
		},
		/*
			Posts a comment (a reply inside a commentsLoop) on the page's post or
			product; hidden on a page with neither. showRate asks for 1-5 stars; the
			rest are its texts (commentsFormTexts in CommentsFormView.jsx).
		*/
		options: {
			showRate: true,
			rateLabel: 'Your rating',
			commentLabel: 'Write a comment',
			placeholder: '',
			submitLabel: 'Submit',
			loadingLabel: 'Please wait.',
			loginRequiredText: 'Please log in to leave a comment.',
			successText: 'Thank you, your comment has been received.',
		},
		/* CommentsFormView (through its CommentsFormMarkup, which the builder's CommentsForm.jsx also renders) reads these with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-4' },
			'field': { classes: 'flex flex-col gap-2' },
			/* The look CommentsFormView used to keep in code; it now reads these. */
			'label': { classes: 'text-sm font-medium text-gray-700' },
			'rate-wrap': { classes: '' },
			'stars': { classes: 'flex gap-1 items-center text-amber-400' },
			'star': { classes: 'cursor-pointer rounded-md p-0.5 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50' },
			'textarea': { classes: 'w-full h-32 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15' },
			'submit': { classes: 'inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[#1b0e9f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60' },
			'notice': { classes: 'flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700' },
			'errors': { classes: 'flex flex-col gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700' },
			'error': { classes: 'flex items-center gap-2' },
		},
		group: ['content'],
		parent: ['commentsGrid'],
		children: [],
	},

	/* ====================================================================
		CATEGORIES & ARCHIVES (group 'archive') - Category, tag and brand lists, and archive page headings.
	==================================================================== */

	/* --- Term lists --- */

	{
		type: "termsGrid",
		label: "Terms Grid",
		icon: null,
		description: "Displays multiple taxonomy terms such as categories, tags, brands, or other grouped terms in a structured grid.",
		ai: {
			purpose: "Present multiple related taxonomy terms in a scannable multi-column layout.",
			useFor: [
				"Product categories",
				"Category listings",
				"Brand listings",
				"Tag collections",
				"Featured categories",
				"Taxonomy archives",
				"Category discovery"
			],
			keywords: [
				"terms grid",
				"category grid",
				"category cards",
				"brand grid",
				"taxonomy grid",
				"category listing"
			],
			rules: [
				"Use when several related terms should be visible at the same time.",
				"Use termsLoop to define the content displayed for each term.",
				"Prefer a grid when users need to compare or scan multiple terms."
			],
			canContain: [
				"termsLoop",
				"termsGridPagination"
			]
		},
		/*
			queryPrams is the get_terms query (a grid without one shows
			defaultTermsGridQuery in TermsGridView.jsx, the same as this). The
			count is `number`; per_page only counts together with paged.
			(classes was never read.)
		*/
		options: {
			queryPrams: { taxonomy: 'product_cat', number: '8', hide_empty: true, order: 'ASC', orderby: 'name' },
		},
		/*
			TermsGridView (through TermsGridMarkup, which the builder's TermsGrid.jsx
			also renders) reads '*'. loop-items (the list of cards) and loop-item
			(each card) are read by the termsLoop inside, from these keys through
			TermsGridContext - not from the termsLoop's own selectors.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: 'flex flex-col items-center gap-2 text-center' },
		},
		/* The cards' contents; the loop's own selectors mirror the grid's, as the templates mostly do. */
		children: [{
			"id": "b1mqswtn36",
			"type": "termsLoop",
			"options": {},
			"children": [{
				"id": "b1mqswryz4",
				"type": "termThumbnail",
				"options": {},
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "block" },
					"image": { "classes": "aspect-square w-full rounded-full object-cover" },
				}
			}, {
				"id": "b1mqswrwsg",
				"type": "termTitle",
				"options": {},
				"cssSelectors": {
					"*": { "classes": "text-sm font-medium" },
				}
			}],
			"cssSelectors": {
				"*": { "classes": "" },
				"loop-items": { "classes": "grid grid-cols-4 gap-5" },
				"loop-item": { "classes": "flex flex-col items-center gap-2 text-center" }
			}
		}],
		group: ['archive']
	},

	{
		type: "termsGridPagination",
		label: "Terms Grid Pagination",
		icon: null,
		description: "Provides navigation controls for moving between pages of terms displayed in a terms grid.",
		ai: {
			purpose: "Allow users to navigate through multiple pages of taxonomy term results when all terms cannot be displayed on one page.",
			useFor: [
				"Category archive pagination",
				"Brand listing pagination",
				"Tag listing pagination",
				"Taxonomy archive pagination",
				"Terms grid navigation"
			],
			keywords: [
				"pagination",
				"terms pagination",
				"category pagination",
				"page navigation",
				"next page",
				"previous page",
				"taxonomy archive navigation"
			],
			rules: [
				"Use below a terms grid when terms are divided across multiple pages.",
				"Do not use when all terms are displayed on a single page.",
				"Place after the terms grid content."
			],
			parentRequired: "termsGrid"
		},
		/* The same options as postGridPagination (see there); the panel is shared too. */
		options: {
			style: 'numbers',
			prevText: '',
			prevIcon: '',
			nextText: '',
			nextIcon: '',
		},
		/* TermsGridPaginationView and the builder's TermsGridPagination.jsx render postGridPagination's PaginationMarkup with these. */
		cssSelectors: {
			'*': { classes: 'flex gap-2 items-center justify-center my-10' },
			'previous': { classes: 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'next': { classes: 'rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40' },
			'previous-icon': { classes: '' },
			'next-icon': { classes: '' },
			'pagination-item': { classes: 'flex size-9 items-center justify-center rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50' },
			'pagination-item-active': { classes: 'flex size-9 items-center justify-center rounded-md border border-blue-600 bg-blue-600 text-sm text-white' },
			'ellipsis': { classes: 'px-1 text-gray-400' },
			'current': { classes: 'w-16 rounded-md border border-gray-300 py-2 text-center' },
			'total': { classes: 'text-sm text-gray-500' },
		},
		group: ['archive'],
		parent: ['termsGrid'],
	},

	{
		type: "termsSlider",
		label: "Terms Slider",
		icon: null,
		description: "Displays taxonomy terms such as categories, tags, brands, or other grouped terms in a horizontally navigable slider.",
		ai: {
			purpose: "Help users browse and discover related categories, tags, brands, or other taxonomy terms in a compact slider.",
			useFor: [
				"Product category navigation",
				"Category discovery",
				"Brand browsing",
				"Tag browsing",
				"Featured categories",
				"Related categories",
				"Taxonomy navigation"
			],
			keywords: [
				"terms slider",
				"category slider",
				"category carousel",
				"brand slider",
				"category navigation",
				"taxonomy slider",
				"featured categories"
			],
			rules: [
				"Use when several taxonomy terms should be displayed horizontally.",
				"Use for categories, brands, tags, or other related terms.",
				"Prefer this over a static terms grid when horizontal browsing is desirable."
			],
			canContain: [
				"termsLoop"
			]
		},
		/*
			queryPrams is the get_terms query (a slider without one shows
			defaultTermsSliderQuery in TermsSliderView.jsx, the same as this;
			`number` is the count). sliderOptions goes to Splide: perPage and
			breakpoints set the columns (mediaQuery 'max': keys are max widths).
			(classes was never read.)
		*/
		options: {
			queryPrams: { taxonomy: 'product_cat', number: '12', hide_empty: true, order: 'ASC', orderby: 'name' },
			sliderOptions: {
				perPage: 6,
				gap: '1em',
				pagination: false,
				mediaQuery: 'max',
				breakpoints: { 1024: { perPage: 4 }, 640: { perPage: 3 }, 400: { perPage: 2 } },
			},
		},
		/*
			TermsSliderView (through TermsSliderMarkup, which the builder's
			TermsSlider.jsx also renders) reads '*' and puts the control keys on
			Splide's arrows and dots, as Post Slider does. loop-item styles each
			slide's card, read by the termsLoop through TermsSliderContext.
			loop-items is not drawn in a slider (Splide's track is the list).
		*/
		cssSelectors: {
			'*': { classes: '' },
			'arrows-wrap': { classes: '' },
			'arrow-item': { classes: '' },
			'arrow-prev': { classes: '' },
			'arrow-next': { classes: '' },
			'pagination': { classes: '' },
			'page-item': { classes: '' },
			'loop-item': { classes: 'flex flex-col items-center gap-2 text-center' },
		},
		deprecatedCssSelectors: ['loop-items'],
		/* The cards' contents; the loop's own selectors mirror the slider's. */
		children: [{
			"id": "b1mqswtn36",
			"type": "termsLoop",
			"options": {},
			"children": [{
				"id": "b1mqswryz4",
				"type": "termThumbnail",
				"options": {},
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "block" },
					"image": { "classes": "aspect-square w-full rounded-full object-cover" },
				}
			}, {
				"id": "b1mqswrwsg",
				"type": "termTitle",
				"options": {},
				"cssSelectors": {
					"*": { "classes": "text-sm font-medium" },
				}
			}],
			"cssSelectors": {
				"*": { "classes": "" },
				"loop-items": { "classes": "" },
				"loop-item": { "classes": "flex flex-col items-center gap-2 text-center" }
			}
		}],
		group: ['archive']
	},

	{
		type: "termsLoop",
		label: "Terms Loop",
		icon: null,
		description: "A repeating content container that dynamically renders multiple taxonomy terms such as categories, tags, brands, or other grouped classifications.",
		ai: {
			purpose: "Generate repeated taxonomy term content dynamically from available categories, tags, brands, or other terms.",
			useFor: [
				"Category listings",
				"Product categories",
				"Blog categories",
				"Tags",
				"Brands",
				"Taxonomy archives",
				"Term collections"
			],
			keywords: [
				"terms loop",
				"categories",
				"tags",
				"brands",
				"taxonomy",
				"category listing",
				"term listing",
				"taxonomy loop"
			],
			rules: [
				"Use inside termsGrid or termsSlider.",
				"Child elements should represent information displayed for each term.",
				"Use term-specific elements such as thumbnail and title inside the loop."
			],
			parentRequired: [
				"termsGrid",
				"termsSlider"
			],
			canContain: [
				"termThumbnail",
				"termTitle"
			]
		},
		group: ['archive'],
		parent: ['termsGrid', 'termsSlider'],
		/* Each card's blocks: they read the card's term through useCategory(). */
		children: [
			{
				"id": "b1mqswryz4",
				"type": "termThumbnail",
				"options": {},
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "block" },
					"image": { "classes": "aspect-square w-full rounded-full object-cover" },
				}
			},
			{
				"id": "b1mqswrwsg",
				"type": "termTitle",
				"options": {},
				"cssSelectors": {
					"*": { "classes": "text-sm font-medium" },
				}
			},
		],
		/*
			TermsLoopView (through its TermsLoopMarkup, which the builder's
			TermsLoop.jsx also renders) reads these with termsLoopClasses:
			loop-items is the list (not drawn in a slider) and loop-item each card.
			The parent terms grid's or slider's key wins whenever it is set; these
			apply where it is empty. '*' is unused.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: '' },
			'loop-item': { classes: '' },
		}
	},

	/* --- Term fields --- */

	{
		type: "termTitle",
		label: "Term Title",
		icon: null,
		description: "Displays the name of the current taxonomy term, such as a product category, blog category, tag, brand, or other classification.",
		ai: {
			purpose: "Identify a taxonomy term within a term listing, slider, grid, or archive.",
			useFor: [
				"Category name",
				"Brand name",
				"Tag name",
				"Taxonomy title",
				"Product category title"
			],
			keywords: [
				"term title",
				"category title",
				"category name",
				"brand name",
				"tag name",
				"taxonomy title"
			],
			rules: [
				"Use inside term-based listings such as termsGrid or termsSlider.",
				"The displayed title should represent the current term.",
				"Use an appropriate heading level based on the surrounding page hierarchy."
			]
		},
		/*
			The name of the term in its loop. tag is h1-h6, p, div or span (div when
			unset); linkTo 'termUrl' links it to the term's archive page - product
			categories, brands and tags only (termUrlFor in TermTitleView.jsx).
			(text was never read: the name comes from the term.)
		*/
		options: {
			tag: "h3",
			linkTo: "termUrl",
		},
		/* TermTitleView (through its TermTitleMarkup, which the builder's TermTitle.jsx also renders) reads this with elementCssClasses: '*' is the tag; a link sits inside it. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['archive']
	},

	{
		type: "termThumbnail",
		label: "Term Thumbnail",
		icon: null,
		description: "Displays the image or thumbnail associated with a taxonomy term such as a category, brand, or tag.",
		ai: {
			purpose: "Provide a visual representation of a taxonomy term to improve recognition and discovery.",
			useFor: [
				"Category image",
				"Brand image",
				"Category thumbnail",
				"Collection image",
				"Term thumbnail"
			],
			keywords: [
				"term thumbnail",
				"category image",
				"category thumbnail",
				"brand image",
				"taxonomy image"
			],
			rules: [
				"Use inside term grids, sliders, or term cards.",
				"Use an image that clearly represents the term.",
				"Pair with termTitle when both visual and textual identification are useful."
			]
		},
		/* linkTo 'termUrl' links the image to the term's archive page (product categories, brands and tags); '' leaves it unlinked. */
		options: {
			linkTo: '',
		},
		/* TermThumbnailView (through its TermThumbnailMarkup, which the builder's TermThumbnail.jsx also renders) reads these with elementCssClasses: '*' wraps it, link is the link when linked, image the image (/thumb.png when the term has none). */
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'image': { classes: '' }
		},
		group: ['archive']
	},

	{
		type: "termCount",
		label: "Term Count",
		icon: null,
		description: "Displays the number of content items associated with the current taxonomy term.",
		ai: {
			purpose: "Show how many posts, products, or other content items belong to a taxonomy term.",
			useFor: [
				"Category product count",
				"Category post count",
				"Brand product count",
				"Tag count",
				"Term result count"
			],
			keywords: [
				"term count",
				"category count",
				"product count",
				"post count",
				"item count"
			],
			rules: [
				"Use when the number of items associated with a term is useful to users.",
				"Use as supporting information rather than the primary term title."
			]
		},
		/*
			The term's product count, as label + number + suffix (singularSuffix in
			place of suffix for 1; termCountText in TermCountView.jsx). tag is span,
			div or p (span when unset).
		*/
		options: {
			label: '',
			suffix: ' items',
			singularSuffix: ' item',
			tag: 'span',
		},
		/* TermCountView (through its TermCountMarkup, which the builder's TermCount.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['archive']
	},

	/* --- Archive page --- */

	{
		type: "archiveTitle",
		label: "Archive Title",
		icon: null,
		description: "Displays the title of the current archive, category, tag, brand, or other taxonomy archive page.",
		ai: {
			purpose: "Identify the current archive or taxonomy page and communicate what content is being listed.",
			useFor: [
				"Category archive title",
				"Tag archive title",
				"Brand archive title",
				"Post archive title",
				"Product archive title",
				"Search archive title"
			],
			keywords: [
				"archive title",
				"category title",
				"archive heading",
				"taxonomy title",
				"category heading",
				"archive heading"
			],
			rules: [
				"Use near the beginning of an archive page.",
				"Use as the primary heading for the archive content.",
				"The title should clearly identify the current archive."
			]
		},
		/*
			prefix is the title text, with %term_name%, %term_count%, %term_slug% and
			%term_description% filled from the archive term (archiveTitleText in
			ArchiveTitleView.jsx; %term_name% when unset). tag is h1-h6, p, div or
			span. (icon was never read.)
		*/
		options: {
			tag: "h1",
			prefix: '%term_name%',
		},
		/* ArchiveTitleView (through its ArchiveTitleMarkup, which the builder's ArchiveTitle.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['archive']
	},

	{
		type: "archiveDescription",
		label: "Archive Description",
		icon: null,
		description: "Displays descriptive content associated with the current archive, category, tag, brand, or taxonomy.",
		ai: {
			purpose: "Provide contextual information that explains the current archive or taxonomy page.",
			useFor: [
				"Category descriptions",
				"Brand descriptions",
				"Tag descriptions",
				"Archive introductions",
				"SEO-focused archive content",
				"Collection descriptions"
			],
			keywords: [
				"archive description",
				"category description",
				"collection description",
				"brand description",
				"archive content",
				"category introduction"
			],
			rules: [
				"Use below the archive title when contextual information is useful.",
				"Keep the description relevant to the current archive.",
				"Use descriptive content rather than repeating the archive title."
			]
		},
		/* The archive term's description: maxWord cuts it to that many words as plain text; 0 keeps it whole, with its paragraphs. tag is h1-h6, p, div or span (div when unset). */
		options: {
			maxWord: 40,
		},
		/* ArchiveDescriptionView (through its ArchiveDescriptionMarkup, which the builder's ArchiveDescription.jsx also renders) reads these with elementCssClasses: paragraph is each paragraph when there are several. */
		cssSelectors: {
			'*': { classes: '' },
			'paragraph': { classes: 'mt-2 first:mt-0' },
		},
		group: ['archive']
	},

	{
		type: "archiveCount",
		label: "Archive Count",
		icon: null,
		description: "Displays the number of posts, products, or other content items available in the current archive.",
		ai: {
			purpose: "Communicate how many items are available in the current archive or collection.",
			useFor: [
				"Product count",
				"Post count",
				"Category item count",
				"Search result count",
				"Archive result count"
			],
			keywords: [
				"archive count",
				"item count",
				"product count",
				"post count",
				"result count",
				"number of results"
			],
			rules: [
				"Use when showing the number of available results provides useful context.",
				"Place near the archive title or result controls.",
				"Do not use as the primary archive heading."
			]
		},
		/* prefix + the archive term's count + suffix (singularSuffix in its place for 1; archiveCountText in ArchiveCountView.jsx). tag is h1-h6, p, div or span (div when unset). */
		options: {
			prefix: '',
			suffix: ' results',
			singularSuffix: ' result',
		},
		/* ArchiveCountView (through its ArchiveCountMarkup, which the builder's ArchiveCount.jsx also renders) reads this with elementCssClasses. */
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['archive']
	},

	/* ====================================================================
		PRODUCT (group 'product') - The product page: its details and the ways to buy it.
	==================================================================== */

	/* --- Product details --- */

	{
		type: "productGallery",
		label: "Product Gallery",
		icon: null,
		description: "Displays multiple images of the current product with thumbnails and navigation controls for viewing different product images.",
		ai: {
			purpose: "Provide detailed visual information about a product through multiple product images.",
			useFor: [
				"Product detail page",
				"Product image gallery",
				"Product photos",
				"Product image browsing",
				"Product visual presentation"
			],
			keywords: [
				"product gallery",
				"product images",
				"product photos",
				"image gallery",
				"product image slider",
				"product thumbnails"
			],
			rules: [
				"Use prominently on product detail pages.",
				"Show multiple relevant product images when available.",
				"Use thumbnails and navigation when there are multiple images."
			],
			intent: [
				"product-information",
				"purchase-confidence",
				"conversion"
			]
		},
		options: {
			thumbnails: true
		},
		/*
			ProductGalleryView (through its ProductGalleryMarkup, which the builder's
			ProductGallery.jsx also renders) reads these with elementCssClasses at the
			end of this file. items / item / image are the main slider; arrows, prev,
			next, pagination and dot are added next to Splide's own classes; the
			thumbnail-* keys are the strip shown with options.thumbnails, and their
			defaults are the classes it used to have hardcoded.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'items': { classes: '' },
			'item': { classes: '' },
			'image': { classes: '' },
			'arrows': { classes: '' },
			'prev': { classes: '' },
			'next': { classes: '' },
			'pagination': { classes: '' },
			'dot': { classes: '' },
			'thumbnails': { classes: 'mt-4' },
			'thumbnail': { classes: '' },
			'thumbnail-image': { classes: 'w-full h-auto' }
		},
		/* Only the old builder preview read this, for a label the shop never showed. */
		deprecatedCssSelectors: ['label'],
		group: ['product']
	},

	{
		type: "productPrice",
		label: "Product Price",
		icon: null,
		description: "Displays the current selling price of the product and any price information provided by the ecommerce system.",
		ai: {
			purpose: "Communicate the current product price so customers can understand the cost before purchasing.",
			useFor: [
				"Product price",
				"Selling price",
				"Sale price",
				"Product card price",
				"Product detail price"
			],
			keywords: [
				"product price",
				"price",
				"selling price",
				"sale price",
				"cost",
				"product cost"
			],
			rules: [
				"Use prominently on product cards and product detail pages.",
				"Display the current dynamic product price.",
				"Keep price information close to purchasing actions."
			],
			intent: [
				"price-communication",
				"purchase-decision",
				"conversion"
			]
		},
		/* No options: the price comes from the product. (separator and variablePriceViewType were never read.) */
		options: {},
		/*
			ProductPriceView (through its ProductPriceMarkup, which the builder's
			ProductPrice.jsx also renders) reads these with elementCssClasses at the
			end of this file. simple-price-sale is the price paid, simple-price-regular
			the struck-through original on sale; price-separator is the " - "
			between them and between the two ends of a variation range.
		*/
		cssSelectors: {
			'price-separator': { classes: '' },
			/* Pay-what-you-want controls; these were hardcoded in ProductPriceView with these same classes. */
			'pwyw': { classes: 'mb-4 flex gap-5 items-center' },
			'pwyw-price': { classes: 'text-2xl text-[#1b0e9f]' },
			'pwyw-edit': { classes: 'text-xl text-[#1b0e9f] cursor-pointer' },
			'pwyw-form': { classes: 'flex gap-2 items-center' },
			'pwyw-input': { classes: 'w-[80px]' },
			'pwyw-set': { classes: 'cursor-pointer' },
			'pwyw-cancel': { classes: 'text-red-400 cursor-pointer' },
			'*': { classes: 'flex gap-2 items-center' },
			'simple-price-wrap': { classes: ' flex gap-2 items-center' },
			'simple-price-sale': { classes: 'font-bold text-lg text-red-500' },
			'simple-price-regular': { classes: 'line-through text-base text-gray-600' },
			'variable-price-wrap': { classes: 'flex gap-2 items-center' },
			'variable-price-min': { classes: 'text-base text-gray-600' },
			'variable-price-max': { classes: 'text-base text-gray-600' },
		},
		group: ['product']
	},

	{
		type: "productVariations",
		label: "Product Variations",
		/* Renamed from productVariablePrices; BlockRender, BlockPreview, ElementOptions and ElementLayouts still accept blocks saved under that type. */
		icon: null,
		description: "Displays selectable product variation attributes, such as size or color, and updates the price shown as the customer picks a variation.",
		ai: {
			purpose: "Let customers choose between product variations (size, color, material, etc.) and see the price and availability for the variation they select.",
			useFor: [
				"Variable product pages",
				"Size selection",
				"Color selection",
				"Attribute-based product variations",
				"Variation price display"
			],
			keywords: [
				"variable price",
				"product variations",
				"product options",
				"attribute selector",
				"size selector",
				"color selector",
				"variation price"
			],
			rules: [
				"Use only on products that have variations (multiple attributes/options).",
				"Disable variation options that are unavailable or out of stock.",
				"Update the displayed price immediately when a variation is selected.",
				"Place near productPrice and addToCart so the selection directly affects purchasing."
			],
			intent: [
				"product-configuration",
				"purchase-decision",
				"conversion"
			]
		},
		/* No options: the attributes and variations come from the product. (separator and variablePriceViewType were never read.) */
		options: {},
		/*
			ProductVariationsView (through its VariationsMarkup, which the
			builder's ProductVariations.jsx also renders) reads these with
			elementCssClasses at the end of this file. attr-items-wrap and the three
			variation-* tile keys are the looks the view used to keep in code, and a
			blank value still falls back to them.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'attr-wrap': { classes: ' flex flex-col gap-5' },
			'attr-item': { classes: '' },
			'attr-title': { classes: 'flex flex-col gap-2 font-semibold' },
			'attr-items-wrap': { classes: 'flex flex-wrap gap-2' },
			'variation-item': { classes: 'rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-800 transition-colors hover:border-gray-400' },
			'variation-selected': { classes: '!border-[#1b0e9f] bg-[#1b0e9f]/5 !text-[#1b0e9f] ring-1 ring-[#1b0e9f]' },
			'variation-disabled': { classes: 'cursor-not-allowed opacity-40 line-through' },
		},
		/* Only the old builder preview drew this: a hardcoded "$123" line the shop never showed. The price block shows the chosen variation's price. */
		deprecatedCssSelectors: ['variation-price'],
		group: ['product']
	},

	{
		type: "productDiscount",
		label: "Product Discount",
		icon: null,
		description: "Displays the discount or price reduction currently applied to the product.",
		ai: {
			purpose: "Highlight the amount or availability of a product discount to help communicate savings.",
			useFor: [
				"Sale discount",
				"Percentage discount",
				"Discount amount",
				"Product savings",
				"Promotional pricing"
			],
			keywords: [
				"discount",
				"product discount",
				"sale",
				"savings",
				"discount percentage",
				"sale discount"
			],
			rules: [
				"Use when the product has an active discount.",
				"Make savings information easy to identify.",
				"Do not display a discount when no valid discount exists."
			],
			intent: [
				"promotion",
				"conversion",
				"price-communication"
			]
		},
		/* label follows the percentage ("20%" + "OFF"). */
		options: {
			label: '',
		},
		/*
			'discount' is the percentage, 'label' the text after it. ProductDiscountView
			(through its ProductDiscountMarkup, which the builder's ProductDiscount.jsx
			also renders) reads these with elementCssClasses at the end of this file.
		*/
		cssSelectors: {
			'*': { classes: 'flex gap-2 items-center' },
			'discount': { classes: '' },
			'label': { classes: '' },
		},
		group: ['product']
	},

	{
		type: "productBadge",
		label: "Product Badge",
		icon: null,
		description: "Displays one or more labels or badges associated with a product, such as New, Featured, Sale, or other product classifications.",
		ai: {
			purpose: "Highlight important product attributes, promotions, classifications, or merchandising labels.",
			useFor: [
				"New product badge",
				"Sale badge",
				"Featured badge",
				"Best seller badge",
				"Product labels",
				"Promotional badges"
			],
			keywords: [
				"product badge",
				"product label",
				"sale badge",
				"new badge",
				"featured badge",
				"best seller"
			],
			rules: [
				"Use for short, high-value product labels.",
				"Only display badges that provide meaningful product information.",
				"Avoid excessive badges that make the product presentation unclear."
			]
		},
		options: {
			label: '',
			separator: ', '
		},
		cssSelectors: {
			'*': { classes: '' },
			'label': { classes: '' },
			'items': { classes: '' },
			'item': { classes: '' },
			'category-name': { classes: '' },
			'separator': { classes: '' }
		},
		group: ['product']
	},

	{
		type: "productStockStatus",
		label: "Product Stock Status",
		icon: null,
		description: "Displays the current inventory availability status of a product, such as in stock or out of stock.",
		ai: {
			purpose: "Communicate whether a product is currently available for purchase.",
			useFor: [
				"Product availability",
				"Inventory status",
				"In-stock indicator",
				"Out-of-stock indicator",
				"Product purchase information"
			],
			keywords: [
				"stock status",
				"product availability",
				"in stock",
				"out of stock",
				"inventory status",
				"availability"
			],
			rules: [
				"Use on product pages where availability is relevant to purchasing.",
				"Display the current dynamic stock status.",
				"Make unavailable products clearly identifiable."
			],
			intent: [
				"purchase-decision",
				"availability"
			]
		},
		/*
			The status itself comes from the product (or the picked variation).
			stock_status is only the builder's preview state outside a product loop.
		*/
		options: {
			label: '',
			labelIcon: '',
			outOfStockText: 'Out of stock',
			inStockText: 'In stock',
			outOfStockIcon: '',
			inStockIcon: '',
			iconSize: 20,
			stock_status: 'instock'
		},
		/*
			ProductStockStatusView (through its ProductStockStatusMarkup, which the
			builder's ProductStockStatus.jsx also renders) reads these with
			elementCssClasses at the end of this file. The status gets stock-status
			plus in-stock or out-of-stock; its icon gets icon plus in-stock-icon /
			out-of-stock-icon, and its text label-text plus in-stock-label /
			out-of-stock-label. label / label-icon / label-text are the optional label.
		*/
		cssSelectors: {
			'icon': { classes: '' },
			'*': { classes: 'flex items-center gap-3' },
			'stock-status': { classes: 'flex items-center gap-2' },
			'label': { classes: 'flex items-center' },
			'label-text': { classes: '' },
			'label-icon': { classes: '' },
			'out-of-stock': { classes: 'flex items-center' },
			'out-of-stock-label': { classes: '' },
			'out-of-stock-icon': { classes: '' },
			'in-stock': { classes: 'flex items-center' },
			'in-stock-label': { classes: '' },
			'in-stock-icon': { classes: '' },
		},
		group: ['product']
	},

	{
		type: "productSku",
		label: "Product SKU",
		icon: null,
		description: "Displays the unique stock keeping unit (SKU) assigned to the current product.",
		ai: {
			purpose: "Provide the product's unique SKU identifier for inventory, support, order, or product reference purposes.",
			useFor: [
				"Product SKU",
				"Inventory identifier",
				"Product reference",
				"Product code"
			],
			keywords: [
				"SKU",
				"product SKU",
				"product code",
				"stock keeping unit",
				"product identifier"
			],
			rules: [
				"Use when SKU information is useful to customers or staff.",
				"Display the current product's actual SKU.",
				"Treat the SKU as product metadata rather than marketing content."
			]
		},
		options: {
			label: '',
			icon: '',
			iconSize: 20
		},
		/*
			ProductSkuView (through its ProductSkuMarkup, which the builder's
			ProductSku.jsx also renders) reads these with elementCssClasses at the
			end of this file: an optional icon, the label (only when set) and the SKU.
		*/
		cssSelectors: {
			'*': { classes: 'flex items-center gap-3' },
			'label': { classes: '' },
			'sku': { classes: '' },
			'icon': { classes: '' }
		},
		group: ['product']
	},

	{
		type: "productRatings",
		label: "Product Ratings",
		icon: null,
		description: "Displays customer ratings or review scores associated with the current product.",
		ai: {
			purpose: "Provide social proof by showing the product's customer rating or review score.",
			useFor: [
				"Product rating",
				"Star rating",
				"Customer reviews",
				"Review score",
				"Social proof"
			],
			keywords: [
				"product rating",
				"star rating",
				"reviews",
				"review score",
				"customer rating",
				"product reviews"
			],
			rules: [
				"Use on product pages and product cards when customer ratings are available.",
				"Place near the product title or price when ratings influence purchasing decisions.",
				"Display genuine product rating data."
			],
			intent: [
				"social-proof",
				"trust-building",
				"conversion"
			]
		},
		/* hideIfEmpty hides the block for a product with no reviews. (label and separator were never read.) */
		options: {
			hideIfEmpty: false,
		},
		/*
			ProductRatingsView (through its ProductRatingsMarkup, which the builder's
			ProductRatings.jsx also renders) reads these with elementCssClasses at the
			end of this file. star-rate holds five rate-count wrappers, each with a
			star icon; avg-rating is "4.3/5"; total-reviews shows only when there are
			reviews.
		*/
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center' },
			'star-rate': { classes: 'flex gap-1 items-center text-orange-400' },
			'rate-count': { classes: '' },
			'icon': { classes: '' },
			'avg-rating': { classes: '' },
			'total-reviews': { classes: '' },

		},
		group: ['product']
	},

	{
		type: "productCategories",
		label: "Product Categories",
		icon: null,
		description: "Displays the categories assigned to the current product and can help users discover related product collections.",
		ai: {
			purpose: "Show the product's category classification and provide contextual navigation to related collections.",
			useFor: [
				"Product category",
				"Category navigation",
				"Product classification",
				"Related categories"
			],
			keywords: [
				"product categories",
				"categories",
				"product category",
				"category links",
				"category navigation"
			],
			rules: [
				"Use on product detail pages or product cards when category context is useful.",
				"Display categories assigned to the current product.",
				"Use categories as contextual navigation when links are available."
			]
		},
		/* label comes before the categories; separator goes between them (", " by default). */
		options: {
			label: '',
			separator: ', '
		},
		/*
			ProductCategoriesView (through its ProductTermLinksMarkup, which the
			builder's ProductCategories.jsx also renders) reads these with
			elementCssClasses at the end of this file: label, then items holding one
			item link per category, each with its name (category-name) and the
			separator.
		*/
		cssSelectors: {
			'*': { classes: 'flex items-center gap-3' },
			'label': { classes: '' },
			'items': { classes: '' },
			'item': { classes: '' },
			'category-name': { classes: '' },
			'separator': { classes: '' }
		},
		group: ['product']
	},

	{
		type: "productTags",
		label: "Product Tags",
		icon: null,
		description: "Displays tags associated with the current product for classification and related-product discovery.",
		ai: {
			purpose: "Show descriptive product tags that provide additional classification and contextual information.",
			useFor: [
				"Product tags",
				"Product attributes",
				"Related product discovery",
				"Product classification"
			],
			keywords: [
				"product tags",
				"tags",
				"product labels",
				"product classification",
				"tag links"
			],
			rules: [
				"Use when product tags provide useful contextual information.",
				"Avoid displaying excessive or irrelevant tags.",
				"Use tags as navigation when appropriate."
			]
		},
		/* label comes before the tags; separator goes between them (", " by default). */
		options: {
			label: '',
			separator: ', '
		},
		/*
			ProductTagsView (through ProductTermLinksMarkup in
			ProductCategoriesView.jsx, which the builder's ProductTags.jsx also
			renders) reads these with elementCssClasses at the end of this file:
			label, then items holding one item link per tag, each with its name
			(category-name) and the separator.
		*/
		cssSelectors: {
			'*': { classes: 'flex items-center gap-3' },
			'label': { classes: '' },
			'items': { classes: '' },
			'item': { classes: '' },
			'category-name': { classes: '' },
			'separator': { classes: '' }
		},
		group: ['product']
	},

	{
		type: "productBrands",
		label: "Product Brands",
		icon: null,
		description: "Displays the brand or brands associated with the current product.",
		ai: {
			purpose: "Identify the product brand and provide brand context or navigation.",
			useFor: [
				"Product brand",
				"Brand identification",
				"Brand navigation",
				"Brand collection links"
			],
			keywords: [
				"product brand",
				"brand",
				"brand name",
				"brand link",
				"manufacturer"
			],
			rules: [
				"Use when products have brand information.",
				"Place near other product metadata when brand recognition is important.",
				"Use brand links when users can browse other products from the same brand."
			]
		},
		/* label comes before the brands; separator goes between them (", " by default). */
		options: {
			label: '',
			separator: ', '
		},
		/*
			ProductBrandsView (through ProductTermLinksMarkup in
			ProductCategoriesView.jsx, which the builder's ProductBrands.jsx also
			renders) reads these with elementCssClasses at the end of this file:
			label, then items holding one item link per brand, each with its name
			(category-name) and the separator.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'label': { classes: '' },
			'items': { classes: '' },
			'item': { classes: '' },
			'category-name': { classes: '' },
			'separator': { classes: '' }
		},
		group: ['product']
	},

	/* --- Buying --- */

	{
		type: "addToCart",
		label: "Add To Cart",
		icon: <IconXboxB />,
		description: "A product purchase control that allows customers to select a quantity and add a product to the shopping cart.",
		ai: {
			purpose: "Enable customers to add the current product to their shopping cart and begin the purchase process.",
			useFor: [
				"Product pages",
				"Product cards",
				"Product grids",
				"Product sliders",
				"Featured product sections",
				"Quick purchase sections",
				"Shopping interfaces"
			],
			keywords: [
				"add to cart",
				"buy button",
				"purchase button",
				"shopping cart",
				"cart",
				"product purchase",
				"quantity",
				"buy now",
				"ecommerce"
			],
			rules: [
				"Use with a product that can be added to the shopping cart.",
				"Place near the product price, product information, or product image.",
				"Use a clear purchase-oriented button label.",
				"Show the quantity control when customers may purchase multiple units.",
				"Do not use as the primary control for non-purchasable content."
			]
		},
		/* hideQuantity: older pages saved it misspelled as hideQuanity; both are read. */
		options: {
			buttonText: "Add To Cart",
			hideQuantity: false,
			hideButton: false,
		},
		/*
			The single source of the control's default classes: AddToCartView,
			AddToCart and AddToCartOptions fall back to these (via
			elementCssClasses / withElementCssDefaults at the end of this file)
			when a block lacks a key.
		*/
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center' },
			'button-wrapper': { classes: 'cursor-pointer text-white bg-blue-600 px-4  rounded-sm flex items-center justify-center ' },
			'button-label': { classes: 'cursor-pointer text-white bg-blue-600 px-4 py-2 rounded-sm' },
			'button-icon': { classes: '' },
			'quantity-wrapper': { classes: 'flex border-2 border-solid border-blue-600 gap-2 items-center rounded-sm text-blue-600 px-2 justify-between' },
			'quantity-decrease': { classes: 'cursor-pointer' },
			'quantity-input': { classes: '!border-0 !shadow-none text-center focus:border-0 w-16' },
			'quantity-increase': { classes: 'cursor-pointer' },
		},
		/*
			quantity-plus styled the minus button and quantity-minus the plus;
			they are replaced by quantity-decrease and quantity-increase.
			withLegacyStepperKeys (elements/AddToCartView.jsx) carries a saved
			block's old classes over to the new keys.
		*/
		deprecatedCssSelectors: ['quantity-plus', 'quantity-minus'],
		group: ['product']
	},


	{
		type: "whatsappButton",
		label: "Whatsapp Button",
		icon: null,
		description: "Provides a WhatsApp contact or ordering action that allows customers to communicate about the current product.",
		ai: {
			purpose: "Enable customers to contact the store through WhatsApp to ask about or order a product.",
			useFor: [
				"WhatsApp ordering",
				"Product inquiries",
				"Direct customer contact",
				"Order by WhatsApp",
				"Mobile commerce"
			],
			keywords: [
				"WhatsApp button",
				"order on WhatsApp",
				"WhatsApp order",
				"contact on WhatsApp",
				"buy on WhatsApp",
				"WhatsApp contact"
			],
			rules: [
				"Use when WhatsApp is an available customer communication or ordering channel.",
				"Place near product purchasing actions when WhatsApp ordering is supported.",
				"Use the current product title and URL in the message when appropriate."
			],
			intent: [
				"conversion",
				"direct-ordering",
				"customer-contact"
			]
		},
		options: {
			label: 'Order On Whatsapp',
			phone: '',
			message: 'Hi i want to buy {product_title} {product_url}',
			icon: '',
			iconSize: 20
		},
		cssSelectors: {
			'*': { classes: '' },
			'label': { classes: '' },
			'icon': { classes: '' },
			'link': { classes: 'flex gap-3 items-center' },
		},
		group: ['product']
	},

	{
		type: "messengerButton",
		label: "Messenger Button",
		icon: null,
		description: "Provides a Messenger contact or ordering action that allows customers to communicate about the current product.",
		ai: {
			purpose: "Enable customers to contact the store through Messenger to ask about or order a product.",
			useFor: [
				"Messenger ordering",
				"Product inquiries",
				"Direct customer contact",
				"Order through Messenger",
				"Social commerce"
			],
			keywords: [
				"Messenger button",
				"order on Messenger",
				"Messenger order",
				"contact on Messenger",
				"buy on Messenger",
				"Messenger contact"
			],
			rules: [
				"Use when Messenger is an available customer communication or ordering channel.",
				"Place near product purchasing actions when Messenger ordering is supported.",
				"Use the current product title and URL in the message when appropriate."
			],
			intent: [
				"conversion",
				"direct-ordering",
				"customer-contact"
			]
		},
		options: {
			label: 'Order On Messenger',
			username: '',
			message: 'Hi i want to buy {product_title} {product_url}',
			icon: '',
			iconSize: 20
		},
		cssSelectors: {
			'*': { classes: '' },
			'label': { classes: '' },
			'icon': { classes: '' },
			'link': { classes: 'flex gap-3 items-center' },
		},
		group: ['product']
	},

	/* ====================================================================
		RECOMMENDATIONS (group 'suggestions') - Other products to suggest on a product page.
	==================================================================== */

	/* --- Product suggestions --- */

	{
		type: "relatedProducts",
		label: "Related Products",
		icon: null,
		description: "Displays products that are related to the current product or shopping context, helping users discover similar, complementary, or relevant products.",
		ai: {
			purpose: "Increase product discovery and shopping opportunities by presenting products related to the current product or context.",
			useFor: [
				"Related products",
				"Similar products",
				"Recommended products",
				"Complementary products",
				"Frequently bought together",
				"Product recommendations",
				"Cross-selling",
				"Product discovery"
			],
			keywords: [
				"related products",
				"similar products",
				"recommended products",
				"product recommendations",
				"cross sell",
				"cross-selling",
				"complementary products",
				"you may also like"
			],
			rules: [
				"Use primarily on product detail pages or relevant ecommerce sections.",
				"Products should have a meaningful relationship to the current product or shopping context.",
				"Avoid showing unrelated products solely to fill available space.",
				"Use a grid when several related products should be visible at the same time."
			],
			canContain: [
				"postLoop"
			],
			intent: [
				"product-discovery",
				"cross-selling",
				"conversion"
			]
		},
		options: {
			classes: '',
		},
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: '' },
		},
		children: [
			{
				"id": "b1mqswtn36",
				"type": "postLoop",
				"options": { "classes": "" },
				"children": [
					{
						"id": "b1mqswryz4",
						"type": "postThumbnail",
						"options": { "classes": "" },
						"cssSelectors": {
							"*": { "classes": "" },
							"link": { "classes": "" },
							"image": { "classes": "" },
						}
					},
					{
						"id": "b1mqswrwsg",
						"type": "postTitle",
						"options": {
							"text": "Post Title.",
							"tag": "h2",
							"classes": ""
						},
						"cssSelectors": {
							"*": { "classes": "" }
						}
					},
				],
				"cssSelectors": {
					"*": { "classes": "" },
					"loop-items": { "classes": "" },
					"loop-item": {
						"classes": "flex flex-col gap-5 bg-gray-100 bg-indigo-300 p-3 rounded-sm"
					}
				}
			}
		],
		group: ['suggestions']
	},

	{
		type: "productUpsells",
		label: "Product Upsells",
		icon: null,
		description: "Displays the upsell products picked for the current product - better or pricier alternatives the store wants to suggest instead of, or alongside, it.",
		ai: {
			purpose: "Suggest the store's chosen upgrades or alternatives for the product being viewed.",
			useFor: [
				"Upsells",
				"Product upgrades",
				"Premium alternatives",
				"You may also like",
				"Bigger or better versions"
			],
			keywords: [
				"upsells",
				"upsell products",
				"upgrade",
				"premium version",
				"you may also like",
				"recommended upgrades"
			],
			rules: [
				"Use on product detail pages; it shows the upsells saved on the current product and nothing elsewhere.",
				"It renders nothing for a product without upsells, so do not rely on it to fill space.",
				"Use relatedProducts instead for products from the same categories."
			],
			canContain: [
				"postLoop"
			],
			intent: [
				"upselling",
				"conversion"
			]
		},
		/*
			limit caps how many of the product's upsells show (4 when unset).
			Which products are upsells is saved on each product (its `upsells`),
			and linkedProducts.jsx queries them with post__in.
		*/
		options: {
			limit: 4,
		},
		/*
			'*' is the wrapper; loop-items / loop-item reach the post loop inside
			through PostGridProvider, as with relatedProducts.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: '' },
		},
		children: [
			{
				"id": "b1upsloop1",
				"type": "postLoop",
				"options": {},
				"children": [
					{
						"id": "b1upsthmb1",
						"type": "postThumbnail",
						"options": { "linkTo": "postUrl" },
						"cssSelectors": {
							"*": { "classes": "" },
							"link": { "classes": "block" },
							"image": { "classes": "aspect-square w-full rounded-sm object-cover" },
						}
					},
					{
						"id": "b1upstitl1",
						"type": "postTitle",
						"options": { "linkTo": "postUrl", "tag": "h3" },
						"cssSelectors": {
							"*": { "classes": "line-clamp-2 text-sm font-semibold" }
						}
					},
					{
						"id": "b1upsprce1",
						"type": "productPrice",
						"options": {},
						"cssSelectors": {}
					},
				],
				"cssSelectors": {
					"*": { "classes": "" },
					"loop-items": { "classes": "" },
					"loop-item": { "classes": "flex flex-col gap-2" }
				}
			}
		],
		group: ['suggestions']
	},

	{
		type: "productCrosssells",
		label: "Product Cross-sells",
		icon: null,
		description: "Displays the cross-sell products picked for the current product - complementary items the store suggests buying together with it.",
		ai: {
			purpose: "Suggest the store's chosen complementary products for the product being viewed.",
			useFor: [
				"Cross-sells",
				"Frequently bought together",
				"Complete the set",
				"Accessories",
				"Complementary products"
			],
			keywords: [
				"cross sells",
				"cross-sells",
				"bought together",
				"frequently bought together",
				"accessories",
				"complete the look"
			],
			rules: [
				"Use on product detail pages; it shows the cross-sells saved on the current product and nothing elsewhere.",
				"It renders nothing for a product without cross-sells, so do not rely on it to fill space.",
				"Use productUpsells for better or pricier alternatives, and relatedProducts for products from the same categories."
			],
			canContain: [
				"postLoop"
			],
			intent: [
				"cross-selling",
				"conversion"
			]
		},
		/*
			limit caps how many of the product's cross-sells show (4 when unset).
			Which products are cross-sells is saved on each product (its
			`crosssells`), and linkedProducts.jsx queries them with post__in.
		*/
		options: {
			limit: 4,
		},
		/*
			'*' is the wrapper; loop-items / loop-item reach the post loop inside
			through PostGridProvider, as with relatedProducts.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: '' },
		},
		children: [
			{
				"id": "b1crsloop1",
				"type": "postLoop",
				"options": {},
				"children": [
					{
						"id": "b1crsthmb1",
						"type": "postThumbnail",
						"options": { "linkTo": "postUrl" },
						"cssSelectors": {
							"*": { "classes": "" },
							"link": { "classes": "block" },
							"image": { "classes": "aspect-square w-full rounded-sm object-cover" },
						}
					},
					{
						"id": "b1crstitl1",
						"type": "postTitle",
						"options": { "linkTo": "postUrl", "tag": "h3" },
						"cssSelectors": {
							"*": { "classes": "line-clamp-2 text-sm font-semibold" }
						}
					},
					{
						"id": "b1crsprce1",
						"type": "productPrice",
						"options": {},
						"cssSelectors": {}
					},
				],
				"cssSelectors": {
					"*": { "classes": "" },
					"loop-items": { "classes": "" },
					"loop-item": { "classes": "flex flex-col gap-2" }
				}
			}
		],
		group: ['suggestions']
	},

	/* ====================================================================
		SHOP & ACCOUNT (group 'shop') - The cart and the customer account.
	==================================================================== */

	/* --- Cart and notifications --- */

	{
		type: "cart",
		label: "Cart",
		icon: <IconShoppingCart />,
		description: "A shopping cart interface that displays selected products, quantities, cart totals, coupon controls, and a link to checkout.",
		ai: {
			purpose: "Allow customers to review and manage products they have added to their shopping cart before checkout.",
			useFor: [
				"Shopping cart",
				"Mini cart",
				"Cart drawer",
				"Cart sidebar",
				"Shopping cart popup",
				"Cart summary",
				"Checkout preparation"
			],
			keywords: [
				"cart",
				"shopping cart",
				"mini cart",
				"cart drawer",
				"cart popup",
				"cart sidebar",
				"cart items",
				"cart quantity",
				"cart total",
				"coupon",
				"discount",
				"checkout"
			],
			rules: [
				"Use in ecommerce shopping experiences.",
				"Display products that have been added to the customer's cart.",
				"Allow customers to review cart contents before checkout.",
				"Provide access to cart totals and item quantities.",
				"Use the checkout action to move customers from the cart to checkout.",
				"Use coupon controls when discount codes are supported.",
				"Provide a clear way to close the cart when displayed as a popup or drawer.",
				"Keep cart management controls visually distinct from the checkout action."
			]
		},
		/*
			triggerStyle: 'total' (a pill with the cart total, shown once the cart
			has something in it) or 'icon' (a cart icon with a count badge, always
			shown). editMode keeps the drawer open in the builder so it can be
			styled. The other options switch parts of the checkout step.
		*/
		options: {
			triggerStyle: 'total',
			editMode: true,
			countryCity: true,
			orderNotes: true,
			deliveryLocation: true,
			shippingAddress: true,
			orderSubscription: true,
			shippingMethods: true,
			/* "Frequently bought together" under the items: the cart products' cross-sells (elements/CartCrossSellsView.jsx). */
			crossSells: true,
			crossSellsTitle: 'Frequently bought together',
			crossSellsLimit: 4,

		},
		/*
			The single source of the cart's default classes: CartView (through
			its CartMarkup, which the builder's Cart.jsx also renders) and
			CartOptions fall back to these via elementCssClasses /
			withElementCssDefaults at the end of this file when a block lacks a
			key. The drawer's fade-in classes stay in code. The checkout step
			inside checkout-body is CheckoutView and is not styled here.
		*/
		cssSelectors: {
			'*': { classes: 'relative' },
			'trigger': { classes: 'flex items-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#150b7d]' },
			'trigger-icon': { classes: 'relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100' },
			'trigger-badge': { classes: 'absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1b0e9f] px-1 text-[11px] font-semibold text-white' },
			'backdrop': { classes: 'fixed inset-0 z-40 bg-black/40' },
			'drawer': { classes: 'fixed right-0 top-0 z-50 flex h-full w-full max-w-[460px] flex-col bg-white shadow-2xl' },
			'header': { classes: 'flex shrink-0 items-center justify-between gap-2 border-b border-gray-200 px-4 py-3' },
			'title': { classes: 'flex items-center gap-2 text-lg font-semibold text-gray-900' },
			'title-icon': { classes: 'text-[#1b0e9f]' },
			'count-badge': { classes: 'rounded-full bg-[#1b0e9f]/10 px-2 py-0.5 text-xs font-semibold text-[#1b0e9f]' },
			'back-button': { classes: '-ml-2 flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900' },
			'close-button': { classes: 'flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/30' },
			'empty': { classes: 'flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center' },
			'empty-icon': { classes: 'flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400' },
			'empty-title': { classes: 'text-base font-semibold text-gray-900' },
			'empty-text': { classes: 'text-sm text-gray-500' },
			'continue-button': { classes: 'mt-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50' },
			'body': { classes: 'flex-1 overflow-y-auto' },
			'items': { classes: 'divide-y divide-gray-100 px-4' },
			'item': { classes: 'flex gap-3 py-4' },
			'item-thumb': { classes: 'h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50' },
			'item-image': { classes: 'h-full w-full object-cover' },
			'item-details': { classes: 'flex min-w-0 flex-1 flex-col gap-1' },
			'item-top': { classes: 'flex items-start justify-between gap-2' },
			'item-title': { classes: 'line-clamp-2 text-sm font-medium leading-snug text-gray-900' },
			'item-remove': { classes: '-mr-1 -mt-1 shrink-0 rounded-md p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500' },
			'item-tags': { classes: 'flex flex-wrap gap-1' },
			'item-tag': { classes: 'rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-600' },
			'item-prices': { classes: 'flex items-baseline gap-2 text-xs' },
			'item-price': { classes: 'font-medium text-gray-700' },
			'item-regular-price': { classes: 'text-gray-400 line-through' },
			'item-bottom': { classes: 'mt-auto flex items-center justify-between gap-2 pt-1' },
			'stepper': { classes: 'flex items-center rounded-lg border border-gray-300' },
			'stepper-decrease': { classes: 'flex h-8 w-8 items-center justify-center rounded-l-lg text-gray-600 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40' },
			'stepper-value': { classes: 'min-w-8 text-center text-sm font-medium tabular-nums text-gray-900' },
			'stepper-increase': { classes: 'flex h-8 w-8 items-center justify-center rounded-r-lg text-gray-600 transition-colors hover:bg-gray-100' },
			'item-total': { classes: 'text-sm font-semibold text-gray-900' },
			/* Frequently bought together: the section, its title, the grid and each product card. */
			'cross-sells': { classes: 'border-t border-gray-100 px-4 py-4' },
			'cross-sells-title': { classes: 'mb-3 text-sm font-semibold text-gray-900' },
			'cross-sells-items': { classes: 'grid grid-cols-2 gap-3' },
			'cross-sells-item': { classes: 'flex flex-col gap-1.5 rounded-lg border border-gray-100 p-2' },
			'coupon': { classes: 'border-t border-gray-100 px-4 py-4' },
			'coupon-form': { classes: 'flex gap-2' },
			'coupon-field': { classes: 'relative flex-1' },
			'coupon-icon': { classes: 'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' },
			'coupon-code-input': { classes: 'w-full rounded-lg border border-gray-300 bg-white py-2 pl-9 pr-3 text-sm uppercase text-gray-800 placeholder:normal-case placeholder:text-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15' },
			'coupon-apply': { classes: 'inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#1b0e9f] px-4 py-2 text-sm font-medium text-[#1b0e9f] transition-colors hover:bg-[#1b0e9f] hover:text-white disabled:opacity-60' },
			'coupon-applied': { classes: 'flex items-center justify-between gap-3 rounded-lg border border-dashed border-green-600 bg-green-50 px-3 py-2' },
			'coupon-applied-info': { classes: 'flex min-w-0 items-center gap-2' },
			'coupon-applied-icon': { classes: 'shrink-0 text-green-700' },
			'coupon-applied-code': { classes: 'truncate font-mono text-sm font-semibold uppercase text-green-800' },
			'coupon-applied-text': { classes: 'text-xs text-green-700' },
			'coupon-remove': { classes: 'shrink-0 rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-white hover:text-red-600' },
			'summary': { classes: 'shrink-0 border-t border-gray-200 bg-gray-50 px-4 pb-4 pt-3' },
			'totals': { classes: 'flex flex-col gap-1.5 text-sm' },
			'total-row': { classes: 'flex justify-between gap-3' },
			'total-label': { classes: 'text-gray-600' },
			'total-value': { classes: 'font-medium text-gray-900' },
			'discount-value': { classes: 'font-medium text-green-600' },
			'grand-total-row': { classes: 'mt-1 flex items-baseline justify-between gap-3 border-t border-gray-200 pt-2' },
			'grand-total-label': { classes: 'text-base font-semibold text-gray-900' },
			'grand-total-value': { classes: 'text-lg font-bold text-gray-900' },
			'shipping-note': { classes: 'mt-1 flex items-center gap-1.5 text-xs text-gray-500' },
			'checkout-button': { classes: 'mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60' },
			'clear-button': { classes: 'mt-2 w-full rounded-lg py-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-red-600' },
			'checkout-body': { classes: 'min-h-0 flex-1 overflow-y-auto' },
		},
		/*
			Keys the old cart markup used. Its popover, header and coupon field
			are gone; the storefront only read button, button-icon and
			button-quantity, behind a triggerStyle nothing could set, so saved
			classes on these keys never reached the shop. withElementCssDefaults drops them
			from the builder's editor.
		*/
		deprecatedCssSelectors: ['button', 'button-quantity', 'button-icon', 'popover', 'cart-header', 'cart-total-items', 'cart-close', 'cart-reset', 'go-to-checkout', 'coupon-input', 'coupon-apply-button', 'back-to-cart', 'header-spinner', 'input-text', 'input-textarea'],
		group: ['shop']
	},

	{
		type: "notify",
		label: "Notifications",
		icon: null,
		/* It was described as a back-in-stock "Notify Me" form, which it never was - that was the retired requestForStock element. */
		description: "Shows the shop's messages - added to cart, coupon applied, errors - as toasts in a corner of the screen.",
		ai: {
			purpose: "Display the feedback messages other blocks raise (cart, coupon, checkout and account actions), so customers see what happened.",
			useFor: [
				"Add to cart confirmations",
				"Coupon messages",
				"Checkout errors",
				"Account update messages",
				"Toast notifications"
			],
			keywords: [
				"notifications",
				"toast",
				"alert",
				"messages",
				"snackbar"
			],
			rules: [
				"Place exactly one on each page that has cart, checkout or account blocks - usually in the site footer - or their messages are never shown.",
				"It is fixed to a screen corner on the shop, so its place in the layout does not matter.",
				"It has no text of its own to write; it shows the messages the store raises."
			]
		},
		/*
			NotifyView: position is the screen corner (a right-hand stack moves left
			while the cart drawer is open), duration the seconds each toast shows,
			max how many show at once.
		*/
		options: {
			position: 'bottom-right',
			duration: 4,
			max: 3,
		},
		/*
			NotifyView (through its NotifyMarkup, which the builder's Notify.jsx
			also renders): '*' is the stack, 'item' each toast, and an item also
			gets the classes of its kind. The old back-in-stock 'input' and
			'button' keys reached nothing; withElementCssDefaults drops them.
		*/
		cssSelectors: {
			'*': { classes: 'flex flex-col gap-2' },
			'item': { classes: 'relative w-72 max-w-[calc(100vw-3rem)] overflow-hidden rounded-sm border-0 border-l-4 border-solid bg-white p-3 shadow-md' },
			'success': { classes: 'border-l-green-700' },
			'error': { classes: 'border-l-red-700' },
			'warning': { classes: 'border-l-yellow-500' },
			'info': { classes: 'border-l-blue-600' },
			'icon': { classes: 'shrink-0' },
			'title': { classes: 'text-base' },
			'content': { classes: 'mt-1 text-xs' },
			'close': { classes: 'absolute right-0 top-0 cursor-pointer bg-red-500 p-1 text-white hover:bg-red-700' },
		},
		deprecatedCssSelectors: ['input', 'button'],
		group: ['shop']
	},

	/* --- Customer account and sign-in --- */

	{
		type: "customerAccount",
		label: "Customer Account",
		icon: null,
		description: "The customer account area: a welcome card with the customer's name and a log-out button when signed in, above its child blocks (the signed-out sign-in forms and the signed-in account tabs).",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: ""
		},
		options: {
			hideWelcome: false,
		},
		/*
			The single source of the welcome card's default classes:
			CustomerAccountView, CustomerAccount and CustomerAccountOptions fall back
			to these (via elementCssClasses / withElementCssDefaults at the end of
			this file) when a block lacks a key. '*' is the container that also
			holds the child blocks.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'welcome': { classes: 'mb-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-xs' },
			'welcome-profile': { classes: 'flex min-w-0 items-center gap-4' },
			'avatar': { classes: 'h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[#1b0e9f]/10 ring-2 ring-white' },
			'avatar-image': { classes: 'h-full w-full object-cover' },
			'avatar-initial': { classes: 'flex h-full w-full items-center justify-center text-xl font-semibold text-[#1b0e9f]' },
			'welcome-text': { classes: 'min-w-0' },
			'welcome-greeting': { classes: 'text-sm text-gray-500' },
			'welcome-name': { classes: 'truncate text-lg font-semibold text-gray-900' },
			'welcome-email': { classes: 'truncate text-sm text-gray-500' },
			'logout-button': { classes: 'inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/30' },
		},
		group: ['shop'],

		children: [
			{
				"id": "b4muw3xjnb",
				"type": "customerAccountNotLogged",
				"options": [],
				"cssSelectors": {
					"*": {
						"classes": ""
					}
				},
				"children": [
					{
						"id": "b5muw3xjnb",
						"type": "grid",
						"cssSelectors": {
							"*": {
								"classes": "grid gap-20 p-3 grid-cols-2"
							},
							"grid-item": {
								"classes": ""
							}
						},
						"children": [
							{
								"id": "b6muw3xjnb",
								"type": "gridItem",
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b7muw3xjnb",
										"type": "register",
										"options": { "hideTitle": false },
										"cssSelectors": { "*": { "classes": "" } }
									}
								],
								"options": []
							},
							{
								"id": "b8muw3xjnb",
								"type": "gridItem",
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b9muw3xjnb",
										"type": "login",
										"options": { "hideTitle": false },
										"cssSelectors": { "*": { "classes": "" } }
									}
								],
								"options": []
							}
						],
						"options": []
					}
				]
			},
			{
				"id": "b10muw3xjnb",
				"type": "customerAccountLogged",
				"options": [],
				"children": [
					{
						"id": "b11muw3xjnb",
						"type": "tabs",
						"options": {
							"tabsItems": [
								{
									"label": "Orders"
								},
								{
									"label": "Deliveries"
								},
								{
									"label": "Subscriptions"
								},
								{
									"label": "Tickets"
								},
								{
									"label": "Profile Edit"
								}
							],
							"orientation": ""
						},
						"cssSelectors": {
							"*": {
								"classes": "w-full"
							},
							"navs-items": {
								"classes": "flex gap-1 whitespace-nowrap border-b border-gray-200"
							},
							"nav-item": {
								"classes": "shrink-0 -mb-px px-4 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent cursor-pointer transition-colors duration-200 hover:text-gray-900 hover:border-gray-300"
							},
							"nav-item-active": {
								"classes": "!text-indigo-600 !border-indigo-600 bg-indigo-50/60 rounded-t-md"
							},
							"nav-item-label": {
								"classes": "flex items-center gap-2"
							},
							"nav-item-icon": {
								"classes": "w-4 h-4"
							},
							"nav-item-content": {
								"classes": "pt-6"
							}
						},
						"children": [
							{
								"id": "b12muw3xjnb",
								"type": "tabsItem",
								"options": [],
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b13muw3xjnb",
										"type": "customerOrders",
										"options": [],
										"children": [],
										"cssSelectors": {
											"*": {
												"classes": ""
											}
										}
									}
								]
							},
							{
								"id": "b14muw3xjnb",
								"type": "tabsItem",
								"options": [],
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b15muw3xjnb",
										"type": "customerProfile",
										"options": [],
										"cssSelectors": {
											"*": {
												"classes": ""
											}
										},
										"children": []
									}
								]
							},
							{
								"id": "b16muw3xjnb",
								"type": "tabsItem",
								"options": [],
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b17muw3xjnb",
										"type": "customerSubscriptions",
										"options": [],
										"cssSelectors": {
											"*": {
												"classes": ""
											}
										},
										"children": []
									}
								]
							},
							{
								"id": "b18muw3xjnb",
								"type": "tabsItem",
								"options": [],
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b19muw3xjnb",
										"type": "customerTickets",
										"options": [],
										"cssSelectors": {
											"*": {
												"classes": ""
											}
										},
										"children": []
									}
								]
							},
							{
								"id": "b20muw3xjnb",
								"type": "tabsItem",
								"options": [],
								"cssSelectors": {
									"*": {
										"classes": ""
									}
								},
								"children": [
									{
										"id": "b21muw3xjnb",
										"type": "customerProfileEdit",
										"options": [],
										"cssSelectors": {
											"*": {
												"classes": ""
											}
										},
										"children": []
									}
								]
							}
						]
					}
				],
				"cssSelectors": {
					"*": {
						"classes": ""
					}
				}
			}
		],
	},

	{
		type: "customerAccountLogged",
		label: "Account Logged",
		icon: null,
		description: "The signed-in half of the customer account area: its child blocks (orders, profile, account tabs) show only to a signed-in customer, and the block renders nothing otherwise.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "customerAccount"
		},
		options: {},
		/*
			A container with no markup of its own, so '*' is its only key.
			CustomerAccountLoggedView, CustomerAccountLogged and
			CustomerAccountLoggedOptions read it through elementCssClasses /
			withElementCssDefaults at the end of this file.
		*/
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],

	},

	{
		type: "customerAccountNotLogged",
		label: "Account Not Logged",
		icon: null,
		description: "The signed-out half of the customer account area: its child blocks (the sign-in and register forms) show only to a visitor who is not signed in, and the block renders nothing otherwise.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "customerAccount"
		},
		options: {},
		/*
			A container with no markup of its own, so '*' is its only key.
			CustomerAccountNotLoggedView, CustomerAccountNotLogged and
			CustomerAccountNotLoggedOptions read it through elementCssClasses /
			withElementCssDefaults at the end of this file.
		*/
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],

	},

	{
		type: "login",
		label: "Login",
		icon: <IconLogin />,
		description: "A user authentication form that allows existing customers or users to sign in with their username or email and password.",
		ai: {
			purpose: "Allow existing users to securely sign in to their account.",
			useFor: [
				"Customer login page",
				"User account login",
				"Member login",
				"Customer portal",
				"Checkout account login",
				"Account access section"
			],
			keywords: [
				"login",
				"sign in",
				"user login",
				"customer login",
				"account login",
				"authentication",
				"username",
				"email",
				"password"
			],
			rules: [
				"Use for existing users who already have an account.",
				"Place on login or account access pages.",
				"The form's fields, labels and button text are fixed; restyle them through the cssSelectors keys.",
				"Set hideTitle when the page already shows its own sign-in heading.",
				"Keep 'relative' on field-control and the absolute positioning on field-icon and password-toggle, or the icons fall out of the fields.",
				"Do not use as a registration form."
			]
		},
		options: {
			hideTitle: false,
		},
		/*
			The single source of the form's default classes: LoginView, Login and
			LoginOptions fall back to these (via elementCssClasses /
			withElementCssDefaults at the end of this file) when a block lacks a key.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-4' },
			'header': { classes: '' },
			'title': { classes: 'text-lg font-semibold text-gray-900' },
			'subtitle': { classes: 'text-sm text-gray-500' },
			'error': { classes: 'flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700' },
			'field': { classes: '' },
			'field-label': { classes: 'mb-1.5 block text-sm font-medium text-gray-700' },
			'field-control': { classes: 'relative' },
			'field-icon': { classes: 'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' },
			'field-input': { classes: 'w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15' },
			'username-input': { classes: '' },
			'password-input': { classes: '!pr-11' },
			'password-toggle': { classes: 'absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700' },
			'submit-button': { classes: 'inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70' },
		},
		/*
			Keys the old login markup used. Saved blocks and templates still carry
			them with classes for that markup, which is why the keys above have new
			names. withElementCssDefaults drops these from the builder's editor.
		*/
		deprecatedCssSelectors: ['input-fields-wrap', 'input-wrap', 'input', 'input-username', 'input-email', 'label', 'label-username', 'label-email', 'submit', 'forget-password'],
		parent: ['customerAccount'],
		group: ['shop']
	},

	{
		type: "loginByPhone",
		label: "Login By Phone",
		icon: <IconLogin />,
		description: "A two-step sign-in form: the customer enters a mobile number, receives a one-time code by text message, and enters it to sign in.",
		ai: {
			purpose: "Let existing customers sign in with their mobile number and a one-time code instead of a password.",
			useFor: [
				"Customer login page",
				"Phone number login",
				"OTP login",
				"Customer portal",
				"Checkout account login",
				"Account access section"
			],
			keywords: [
				"login",
				"sign in",
				"phone login",
				"mobile login",
				"otp",
				"one-time code",
				"verification code",
				"sms",
				"authentication"
			],
			rules: [
				"Use for existing customers who sign in with a mobile number.",
				"Place on login or account access pages, alone or next to the username login.",
				"The form's steps, fields and messages are fixed; set the four label options for its text and restyle it through the cssSelectors keys.",
				"Keep 'relative' on field-control and the absolute positioning on change-button, or the Change button falls out of the phone field.",
				"Do not use as a registration form."
			]
		},
		/*
			sendOtpEndpoint and verifyOtpEndpoint can also be set to override the
			default combo-store/v2 routes.
		*/
		options: {
			phoneLabel: 'Phone number',
			otpLabel: 'Code',
			verifyOtpLabel: 'Verify & sign in',
			sendOtpLabel: 'Send code',
			otpResendCooldown: 60,
		},
		/*
			The single source of the form's default classes: LoginByPhoneView,
			LoginByPhone and LoginByPhoneOptions fall back to these (via
			elementCssClasses / withElementCssDefaults at the end of this file)
			when a block lacks a key. phone-input-locked is added to the phone
			input on the code step, when the number is read-only.
		*/
		cssSelectors: {
			'*': { classes: 'w-full' },
			'form': { classes: 'flex flex-col gap-4' },
			'field': { classes: 'flex flex-col gap-1.5' },
			'field-label': { classes: 'text-sm font-medium text-gray-700' },
			'field-control': { classes: 'relative' },
			'field-input': { classes: 'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15' },
			'phone-input': { classes: '' },
			'phone-input-locked': { classes: 'pr-24 text-gray-500' },
			'change-button': { classes: 'absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#1b0e9f] hover:bg-[#1b0e9f]/5' },
			'sent-note': { classes: 'text-sm text-gray-600' },
			'sent-phone': { classes: 'font-medium text-gray-900' },
			'otp-input': { classes: 'tracking-[0.3em]' },
			'submit-button': { classes: 'inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] disabled:cursor-not-allowed disabled:opacity-60' },
			'resend-button': { classes: 'text-center text-sm font-medium text-[#1b0e9f] hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline' },
			'error': { classes: 'flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700' },
		},
		/*
			Keys the old loginByPhone markup used. Saved blocks and presets still
			carry them with classes for that markup, which is why the keys above
			have new names. withElementCssDefaults drops these from the builder's editor.
		*/
		deprecatedCssSelectors: ['input-fields-wrap', 'input-wrap', 'input', 'input-phone', 'input-otp', 'label', 'label-phone', 'label-otp', 'submit'],
		parent: ['customerAccount'],
		group: ['shop']
	},

	{
		type: "register",
		label: "Register",
		icon: <IconUserPlus />,
		description: "A user registration form that allows new customers or users to create an account with their name, email and password.",
		ai: {
			purpose: "Allow new users or customers to create an account.",
			useFor: [
				"Customer registration page",
				"User signup",
				"New account creation",
				"Customer account registration",
				"Member registration",
				"Checkout account creation"
			],
			keywords: [
				"register",
				"registration",
				"sign up",
				"signup",
				"create account",
				"new account",
				"user registration",
				"customer registration",
				"email",
				"password"
			],
			rules: [
				"Use for new users who do not have an account.",
				"Place on registration or account creation pages.",
				"The form collects full name, email and password; its fields, labels and button text are fixed, so restyle them through the cssSelectors keys.",
				"Set hideTitle when the page already shows its own heading.",
				"Keep 'relative' on field-control and the absolute positioning on field-icon and password-toggle, or the icons fall out of the fields.",
				"To lay the fields out in columns, put a grid on 'fields' and span 'password-field' across it.",
				"Do not use as the primary form for existing-user authentication."
			]
		},
		options: {
			hideTitle: false,
		},
		/*
			The single source of the form's default classes: RegisterView, Register
			and RegisterOptions fall back to these (via elementCssClasses /
			withElementCssDefaults at the end of this file) when a block lacks a key.
			message is the base of the result box; message-error or message-success
			is added to it.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-4' },
			'header': { classes: '' },
			'title': { classes: 'text-lg font-semibold text-gray-900' },
			'subtitle': { classes: 'text-sm text-gray-500' },
			'message': { classes: 'flex items-start gap-2 rounded-lg border px-3 py-2 text-sm' },
			'message-error': { classes: 'border-red-200 bg-red-50 text-red-700' },
			'message-success': { classes: 'border-green-200 bg-green-50 text-green-700' },
			'message-list': { classes: 'flex flex-col gap-0.5' },
			'fields': { classes: 'flex flex-col gap-4' },
			'field': { classes: '' },
			'password-field': { classes: '' },
			'field-label': { classes: 'mb-1.5 block text-sm font-medium text-gray-700' },
			'field-control': { classes: 'relative' },
			'field-icon': { classes: 'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' },
			'field-input': { classes: 'w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15' },
			'name-input': { classes: '' },
			'email-input': { classes: '' },
			'password-input': { classes: '!pr-11' },
			'password-toggle': { classes: 'absolute right-1 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-gray-700' },
			'field-hint': { classes: 'mt-1 text-xs text-gray-500' },
			'submit-button': { classes: 'inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70' },
		},
		/*
			Keys the old register markup used. Saved blocks and templates still
			carry them with classes for that markup, which is why the keys above
			have new names. withElementCssDefaults drops these from the builder's editor.
		*/
		deprecatedCssSelectors: ['input-fields-wrap', 'input-wrap', 'input', 'input-username', 'input-email', 'input-phone', 'input-password', 'label', 'label-username', 'label-email', 'label-phone', 'label-password', 'submit', 'have-account'],
		parent: ['customerAccount'],
		group: ['shop']
	},

	/* --- Account pages --- */

	{
		type: "customerProfile",
		label: "Profile",
		icon: null,
		description: "The signed-in customer's details, read-only: name, email, phone, address and delivery location.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: ""
		},
		options: {
			hideTitle: false,
		},
		/*
			The single source of the profile card's default classes:
			CustomerProfileView, CustomerProfile and CustomerProfileOptions fall
			back to these (via elementCssClasses / withElementCssDefaults at the
			end of this file) when a block lacks a key. A detail not added yet
			uses empty-value in place of value. The loading and error states
			come from accountUi.jsx and have no key.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'panel': { classes: 'flex flex-col gap-4' },
			'header': { classes: 'flex items-baseline justify-between gap-3' },
			'title': { classes: 'text-lg font-semibold text-gray-900' },
			'card': { classes: 'rounded-xl border border-gray-200 bg-white shadow-xs' },
			'details': { classes: 'divide-y divide-gray-100' },
			'row': { classes: 'flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-4' },
			'label': { classes: 'text-sm text-gray-500 sm:w-40 sm:shrink-0' },
			'value': { classes: 'min-w-0 break-words text-sm font-medium text-gray-900' },
			'empty-value': { classes: 'text-sm text-gray-400' },
			'map-link': { classes: 'text-sm font-medium text-[#1b0e9f] hover:underline' },
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},

	{
		type: "customerProfileEdit",
		label: "Profile Edit",
		icon: null,
		description: "Lets the signed-in customer edit their name, phone, address and delivery location (pinned on a map), each card saved on its own.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "customerAccount"
		},
		options: {},
		/*
			The single source of the editor's default classes:
			CustomerProfileEditView, CustomerProfileEdit and
			CustomerProfileEditOptions fall back to these (via elementCssClasses /
			withElementCssDefaults at the end of this file) when a block lacks a
			key. The card keys style all three cards. skeleton and skeleton-card
			frame the loading placeholder. The error notice comes from
			accountUi.jsx and has no key.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'panel': { classes: 'flex flex-col gap-5' },
			'skeleton': { classes: 'flex flex-col gap-4' },
			'skeleton-card': { classes: 'animate-pulse rounded-xl border border-gray-200 bg-white p-4' },
			'card': { classes: 'rounded-xl border border-gray-200 bg-white shadow-xs' },
			'card-header': { classes: 'flex items-start gap-3 border-b border-gray-100 p-4' },
			'card-icon': { classes: 'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]' },
			'card-title': { classes: 'text-base font-semibold text-gray-900' },
			'card-description': { classes: 'text-sm text-gray-500' },
			'card-body': { classes: 'p-4' },
			'card-footer': { classes: 'flex flex-wrap items-center justify-end gap-2 rounded-b-xl border-t border-gray-100 bg-gray-50 px-4 py-3' },
			'fields': { classes: 'grid grid-cols-1 gap-4 lg:grid-cols-2' },
			'field': { classes: 'flex flex-col gap-1.5' },
			'field-label': { classes: 'text-sm font-medium text-gray-700' },
			'field-input': { classes: 'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 shadow-xs transition-colors hover:border-gray-400 focus:border-[#1b0e9f] focus:outline-none focus:ring-2 focus:ring-[#1b0e9f]/15 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500' },
			'field-hint': { classes: 'text-xs text-gray-500' },
			'save-button': { classes: 'inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b0e9f] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#150b7d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60' },
			'secondary-button': { classes: 'inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1b0e9f]/30 disabled:cursor-not-allowed disabled:opacity-50' },
			'location-body': { classes: 'flex flex-col gap-3' },
			'location-note': { classes: 'text-sm text-gray-600' },
			'map': { classes: 'overflow-hidden rounded-lg border border-gray-200' },
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},

	{
		type: "customerOrders",
		label: "Orders",
		icon: null,
		description: "The signed-in customer's own orders as cards: number, date and status, the first few items, payment details and the total, with paging.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "customerAccount"
		},
		options: {
			hideTitle: false,
		},
		/*
			The single source of the order list's default classes:
			CustomerOrdersView, CustomerOrders and CustomerOrdersOptions fall back
			to these (via elementCssClasses / withElementCssDefaults at the end of
			this file) when a block lacks a key. list-loading is added to list
			while the next page loads. The status badge, pager and the empty,
			loading and error states come from accountUi.jsx and have no key.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'panel': { classes: 'flex flex-col gap-4' },
			'header': { classes: 'flex items-baseline justify-between gap-3' },
			'title': { classes: 'text-lg font-semibold text-gray-900' },
			'count': { classes: 'text-sm text-gray-500' },
			'list': { classes: 'flex flex-col gap-3 transition-opacity' },
			'list-loading': { classes: 'opacity-60' },
			'order': { classes: 'rounded-xl border border-gray-200 bg-white p-4 shadow-xs' },
			'order-header': { classes: 'flex flex-wrap items-start justify-between gap-3' },
			'order-heading': { classes: 'flex items-center gap-3' },
			'order-icon': { classes: 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]' },
			'order-number': { classes: 'text-sm font-semibold text-gray-900' },
			'order-date': { classes: 'text-xs text-gray-500' },
			'items': { classes: 'mt-3 flex flex-col gap-1 border-t border-gray-100 pt-3 text-sm text-gray-700' },
			'item': { classes: 'flex justify-between gap-3' },
			'item-name': { classes: 'min-w-0 truncate' },
			'item-quantity': { classes: 'shrink-0 text-gray-500' },
			'items-more': { classes: 'text-xs text-gray-500' },
			'order-footer': { classes: 'mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3' },
			'payment': { classes: 'flex flex-wrap items-center gap-2 text-xs text-gray-500' },
			'order-total': { classes: 'text-base font-semibold text-gray-900' },
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],

	},

	{
		type: "customerSubscriptions",
		label: "Subscriptions",
		icon: null,
		description: "The signed-in customer's repeat orders as cards: schedule and status, start and next delivery dates, and the amount per delivery, with paging.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "customerAccount"
		},
		options: {
			hideTitle: false,
		},
		/*
			The single source of the subscription list's default classes:
			CustomerSubscriptionsView, CustomerSubscriptions and
			CustomerSubscriptionsOptions fall back to these (via
			elementCssClasses / withElementCssDefaults at the end of this file)
			when a block lacks a key. list-loading is added to list while the next
			page loads; detail-total wraps the per-delivery amount in place of
			detail. The status badge, pager and the empty, loading and error
			states come from accountUi.jsx and have no key.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'panel': { classes: 'flex flex-col gap-4' },
			'header': { classes: 'flex items-baseline justify-between gap-3' },
			'title': { classes: 'text-lg font-semibold text-gray-900' },
			'count': { classes: 'text-sm text-gray-500' },
			'list': { classes: 'flex flex-col gap-3 transition-opacity' },
			'list-loading': { classes: 'opacity-60' },
			'subscription': { classes: 'rounded-xl border border-gray-200 bg-white p-4 shadow-xs' },
			'subscription-header': { classes: 'flex flex-wrap items-start justify-between gap-3' },
			'subscription-heading': { classes: 'flex items-center gap-3' },
			'subscription-icon': { classes: 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]' },
			'subscription-number': { classes: 'text-sm font-semibold text-gray-900' },
			'subscription-schedule': { classes: 'text-xs text-gray-500' },
			'details': { classes: 'mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-3 text-sm sm:grid-cols-3' },
			'detail': { classes: '' },
			'detail-label': { classes: 'flex items-center gap-1 text-xs text-gray-500' },
			'detail-value': { classes: 'font-medium text-gray-800' },
			'detail-total': { classes: 'col-span-2 sm:col-span-1 sm:text-right' },
			'total-value': { classes: 'text-base font-semibold text-gray-900' },
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},

	{
		type: "customerTickets",
		label: "Tickets",
		icon: null,
		description: "The account page's Support panel: links to the shop's WhatsApp, phone and email contacts from Settings, showing only the ones filled in.",
		ai: {
			purpose: "",
			useFor: [

			],
			keywords: [

			],
			rules: [

			],
			parentRequired: "customerAccount"
		},
		options: {
			hideTitle: false,
		},
		/*
			The single source of the Support panel's default classes:
			CustomerTicketsView, CustomerTickets and CustomerTicketsOptions fall
			back to these (via elementCssClasses / withElementCssDefaults at the
			end of this file) when a block lacks a key. The "no contact details"
			state comes from accountUi.jsx and has no key.
		*/
		cssSelectors: {
			'*': { classes: '' },
			'panel': { classes: 'flex flex-col gap-4' },
			'header': { classes: '' },
			'title': { classes: 'text-lg font-semibold text-gray-900' },
			'subtitle': { classes: 'text-sm text-gray-500' },
			'contacts': { classes: 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3' },
			'contact': { classes: '' },
			'contact-link': { classes: 'flex h-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-[#1b0e9f]/40 hover:bg-[#1b0e9f]/5' },
			'contact-icon': { classes: 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1b0e9f]/10 text-[#1b0e9f]' },
			'contact-text': { classes: 'min-w-0' },
			'contact-label': { classes: 'block text-sm font-semibold text-gray-900' },
			'contact-value': { classes: 'block truncate text-sm text-gray-500' },
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},

	/* ====================================================================
		RETIRED - no longer offered; kept for reference. BlockRender still
		renders popup blocks already saved on pages.
	==================================================================== */

	// {
	// 	type: "popup",
	// 	label: "Popup",
	// 	icon: null,
	// 	description: "Displays content in an overlay dialog that can appear based on configured triggers and can be dismissed by the user.",
	// 	ai: {
	// 		purpose: "Present important, contextual, promotional, or interactive content without navigating away from the current page.",
	// 		useFor: [
	// 			"Promotional offers",
	// 			"Newsletter signup",
	// 			"Login forms",
	// 			"Product quick view",
	// 			"Important announcements",
	// 			"Discount offers",
	// 			"Modal forms",
	// 			"Additional information"
	// 		],
	// 		keywords: [
	// 			"popup",
	// 			"modal",
	// 			"dialog",
	// 			"overlay",
	// 			"popup window",
	// 			"modal dialog",
	// 			"promotion popup"
	// 		],
	// 		rules: [
	// 			"Use for content that should temporarily appear above the current page.",
	// 			"Do not use popups for primary page content.",
	// 			"Provide a clear way for users to close the popup."
	// 		],
	// 		canContain: [
	// 			"heading",
	// 			"text",
	// 			"image",
	// 			"button",
	// 			"input",
	// 			"form",
	// 			"productContent"
	// 		]
	// 	},
	// 	options: {
	// 		editMode: true,
	// 		visibleTriggers: {},
	// 		closeTrigger: {}
	// 	},
	// 	cssSelectors: {
	// 		"*": { "classes": "" },
	// 		'closeButton': { classes: '' },
	// 		'contentWrapper': { classes: '' }
	// 	},
	// 	children: [],
	// 	group: ['layout']
	// },

	// {
	// 	type: "requestForStock",
	// 	label: "Request For Stock",
	// 	icon: null,
	// 	description: "Provides an action that allows customers to request notification or information when an unavailable product becomes available again.",
	// 	ai: {
	// 		purpose: "Give customers a way to express interest in an out-of-stock product and request availability information.",
	// 		useFor: [
	// 			"Out-of-stock products",
	// 			"Back-in-stock requests",
	// 			"Stock notifications",
	// 			"Product availability requests"
	// 		],
	// 		keywords: [
	// 			"request stock",
	// 			"notify me",
	// 			"back in stock",
	// 			"stock notification",
	// 			"out of stock notification",
	// 			"request availability"
	// 		],
	// 		rules: [
	// 			"Use when a product is unavailable or out of stock.",
	// 			"Provide a clear action for requesting future availability.",
	// 			"Do not prioritize this over the purchase action when the product is currently available."
	// 		],
	// 		intent: [
	// 			"retention",
	// 			"product-demand",
	// 			"conversion"
	// 		]
	// 	},
	// 	options: {},
	// 	cssSelectors: {
	// 		'*': { classes: '' }
	// 	},
	// 	group: ['product']
	// },

]
export default elements;


/*
	cssSelectors helpers, generic over every element above.

	An element's renderer can fall back to its definition's default classes
	when a block lacks a key (older blocks, presets, templates) instead of
	keeping its own copy of them.
*/
const elementsByType = {};
elements.forEach(el => { elementsByType[el.type] = el; });

/*
	elementCssClasses(type, cssSelectors) returns cls(key): the block's classes
	for that key, or the definition's default when the key is missing. A key
	that is present - even as "" - wins, so a user can clear a style.
*/
export const elementCssClasses = (type, cssSelectors) => (key) =>
	cssSelectors?.[key]?.classes ?? elementsByType[type]?.cssSelectors?.[key]?.classes ?? '';

/*
	withElementCssDefaults(type, cssSelectors) returns the block's full
	cssSelectors: every key the definition declares (the block's classes, else
	the default), then any custom selectors the user added. Keys listed in the
	definition's deprecatedCssSelectors are dropped. Use it where every key must
	be present, e.g. for the builder's style editor, which only lists the keys
	a block has, or to build a preset.
*/
export const withElementCssDefaults = (type, cssSelectors) => {
	var definition = elementsByType[type];
	var defaults = definition?.cssSelectors ?? {};
	var deprecated = definition?.deprecatedCssSelectors ?? [];
	var source = cssSelectors ?? {};
	var result = {};

	Object.keys(defaults).forEach(key => {
		result[key] = { ...source[key], classes: source[key]?.classes ?? defaults[key]?.classes ?? '' };
	});

	Object.keys(source).forEach(key => {
		if (!(key in result) && !deprecated.includes(key)) {
			result[key] = source[key];
		}
	});

	return result;
};
