import { IconHeading, IconColumns, IconSection, IconFileText, IconXboxB, IconList, IconBrandYoutube, IconPolaroid, IconListDetails, IconLayout2, IconMenu2, IconListSearch, IconLayoutNavbar, IconLayoutBottombar, IconLayoutSidebar, IconColumns3, IconLayoutList, IconAddressBook, IconIcons, IconLayoutNavbarCollapse, IconTable, IconBasketCheck, IconLogin, IconUserPlus, IconShoppingCart } from "@tabler/icons-react";


const elements = [
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
		group: ['text']
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
		options: {
			text: "Custom Text Element.",
			tag: "p",
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['text']
	},
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
		options: {
			buttonIcon: '',
			editMode: true,
			countryCity: true,
			orderNotes: true,
			deliveryLocation: true,
			shippingAddress: true,
			orderSubscription: true,
			shippingMethods: true,

		},
		cssSelectors: {
			'*': { classes: '' },
			'button': { classes: ' items-center gap-3 text-500 px-4 rounded-sm py-2 hover:bg-blue-600 bg-blue-500 cursor-pointer text-white' },
			'button-quantity': { classes: '' },
			'button-icon': { classes: '' },
			'popover': { classes: 'fixed z-50 top-0 right-0 h-full w-[95%] lg:w-[500px] bg-white  shadow-xl overflow-y-auto   rounded-sm' },
			'cart-header': { classes: 'flex justify-between items-center bg-blue-600 py-2 px-3 text-white' },
			'cart-total-items': { classes: '' },
			'cart-close': { classes: 'border-2 border-gray-200 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-sm text-sm' },
			'cart-reset': { classes: 'border-2 border-gray-200 px-3 py-1 cursor-pointer flex gap-1 items-center rounded-sm text-sm' },
			'go-to-checkout': { classes: 'text-white bg-blue-600  px-3 py-2 rounded-sm cursor-pointer' },

			'coupon-input': { classes: 'w-28   !border-2 border-solid border-gray-400 !shadow-none text-center focus:border-0' },
			'coupon-apply-button': { classes: 'text-white bg-blue-600  px-3 py-2 rounded-sm cursor-pointer' },
			'back-to-cart': { classes: 'flex flex-gap-3  cursor-pointer text-sm' },
			'header-spinner': { classes: 'bg-blue-200 rounded-sm p-1 px-2' },
			'input-text': { classes: 'cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600' },
			'input-textarea': { classes: 'cursor-pointer p-2 rounded-sm border border-2 text-sm  !border-gray-600' },
		},
		group: ['shop']
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
		options: {
			text: "Build Pages Visually.",
			tag: "button",
		},
		cssSelectors: {
			'*': { classes: '' },
			'icon': { classes: '' },
			'label': { classes: '' }
		},
		group: ['text']
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
		options: {
			icon: '',
			iconSize: 20,
			items: [{ "text": "Custom Item", "icon": "" }],
			tag: 'ul'
		},
		cssSelectors: {
			'*': { classes: '' },
			'li': { classes: 'list-disc' },
			'icon': { classes: 'text-lg' },
			'text': { classes: 'text-sm' }
		},
		group: ['text']
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
		options: {
			root: 'categories',
			hierarchical: true,
			icon: '',
			iconSize: 20,
			items: [{ "icon": "", "name": "Hello", "slug": "/Hello" }, { "name": "Hello", "count": "", "slug": "/Hello" }, { "name": "Hello", "count": "", "slug": "/Hello", children: [{ "icon": "", "name": "Hello", "slug": "/Hello" }, { "icon": "", "name": "Hello", "slug": "/Hello" }] }],
			tag: 'ul'
		},
		cssSelectors: {
			'*': { classes: '' },
			'li': { classes: 'list-disc' },
			'icon': { classes: 'text-lg' },
			'text': { classes: 'text-sm' }
		},
		group: ['layout']
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
		options: {
			headerText: '',
			items: [{ "text": "Custom Item", "icon": "" }],
			tag: 'ul'
		},
		cssSelectors: {
			'*': { classes: '' },
			'header-text': { classes: 'text-sm' },
			'ul': { classes: '' },
			'li': { classes: 'list-disc flex' },
			'link': { classes: 'flex items-center gap-2' },
			'icon': { classes: 'text-lg' },
			'text': { classes: 'text-sm' }
		},
		group: ['layout']
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
		"cssSelectors": {
			"*": { "classes": "" },
			'menu': { classes: 'flex gap-5 text-sm' },
			'menu-item': { classes: '' },
			'sub-menu': { classes: '' },
			'menu-link': { classes: '' },
			'link-label': { classes: '' },
			'icon': { classes: '' },
		},
		group: ['layout']
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
		options: {
			label: "Menu 1"
		},
		cssSelectors: {
			'*': { classes: '' },
			'label': { classes: '' },
			'link': { classes: '' },
			'icon': { classes: '' },
		},
		group: ['layout'],
		children: [],
		parent: ['menu', 'menuItem']
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
		options: {
			source: 'youtube',
			videoId: '',
			url: '',
			width: '',
			height: '',
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['text']
	},

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
		options: {
			src: 'https://placehold.co/600x400',
			width: '',
			height: '',
		},
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'img': { classes: '' }
		},
		group: ['text']
	},

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
		options: {
			logoType: 'text',
			logoText: 'My Logo',
			src: 'https://placehold.co/600x400'
		},
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'img': { classes: '' },
			'text': { classes: '' },
		},
		group: ['layout']
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
		group: ['layout']
	},

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
			'*': { classes: '' },
			'input': { classes: '' },
			'label': { classes: '' }
		},
		group: ['text'],
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
		group: ['text'],
	},

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
		options: {
			id: "",
			text: "",
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['layout']
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
		options: {
			text: "",
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['layout']
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
		options: {
			text: "",
		},
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
		options: {},
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
		cssSelectors: {
			'*': { classes: '' }
		},
		children: [],
		group: ['layout']
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
				"relatedProducts"
			],
			canContain: [
				"postThumbnail",
				"postTitle"
			]
		},
		group: ['content'],
		parent: ['postGrid', 'postSlider', 'relatedProducts'],
		children: [
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
					"*": { "classes": "" },
					"link": { "classes": "" },
				}
			},
		],
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: '' },
			'loop-item': { classes: '' },
		}
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
		group: ['content'],
		parent: ['termsGrid', 'termsSlider'],
		children: [
			{
				"id": "b1mqswryz4",
				"type": "termThumbnail",
				"options": {
					"classes": ""
				},
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
					"image": { "classes": "" },
				}
			},
			{
				"id": "b1mqswrwsg",
				"type": "termTitle",
				"options": {
					"text": "Term Title.",
					"tag": "h2",
					"classes": ""
				},
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
				}
			},
		]
		,
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: '' },
			'loop-item': { classes: '' },
		}
	},

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
		options: {
			classes: '',
			queryParams: [],
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
							"*": { "classes": "" },
							"link": { "classes": "" },
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
		group: ['content']
	},

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
		group: ['product']
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
		options: {
			classes: '',
		},
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: '' },
		},
		children: [{
			"id": "b1mqswtn36",
			"type": "termsLoop",
			"options": { "classes": "" },
			"children": [{
				"id": "b1mqswryz4",
				"type": "termThumbnail",
				"options": { "classes": "" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
					"image": { "classes": "" },
				}
			}, {
				"id": "b1mqswrwsg",
				"type": "termTitle",
				"options": { "text": "Term Title.", "tag": "h1", "classes": "" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
				}
			}],
			"cssSelectors": {
				"*": { "classes": "" },
				"loop-items": { "classes": "" },
				"loop-item": {
					"classes": "flex flex-col gap-5 bg-gray-100 bg-indigo-300 p-3 rounded-sm"
				}
			}
		}],
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
		options: {
			"sliderOptions": {
				"prevText": "",
				"prevIcon": "",
				"nextText": "",
				"nextIcon": "",

			}
		},
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center justify-center my-10' },
			'previous': { classes: 'bg-blue-600 px-4 py-2 rounded-sm text-white' },
			'next': { classes: 'bg-blue-600 px-4 py-2 rounded-sm text-white' },
			'previous-icon': { classes: '' },
			'next-icon': { classes: '' },
			'current': { classes: 'w-32 border-2 border-blue-600' },

		},
		group: ['content'],
		parent: ['postGrid'],
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
		options: {
			"sliderOptions": {
				"prevText": "",
				"prevIcon": "",
				"nextText": "",
				"nextIcon": "",

			}
		},
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center justify-center my-10' },
			'previous': { classes: 'bg-blue-600 px-4 py-2 rounded-sm text-white' },
			'next': { classes: 'bg-blue-600 px-4 py-2 rounded-sm text-white' },
			'previous-icon': { classes: '' },
			'next-icon': { classes: '' },
			'current': { classes: 'w-32 border-2 border-blue-600' },

		},
		group: ['content'],
		parent: ['commentsGrid'],
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
		options: {
			"sliderOptions": {
				"prevText": "",
				"prevIcon": "",
				"nextText": "",
				"nextIcon": "",

			}
		},
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center justify-center my-10' },
			'previous': { classes: 'bg-blue-600 px-4 py-2 rounded-sm text-white' },
			'next': { classes: 'bg-blue-600 px-4 py-2 rounded-sm text-white' },
			'previous-icon': { classes: '' },
			'next-icon': { classes: '' },
			'current': { classes: 'w-32 border-2 border-blue-600' },

		},
		group: ['content'],
		parent: ['termsGrid'],
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
		options: {
			"sliderOptions": {
				"perPage": 3,
				"gap": "2em"
			}
		},
		cssSelectors: {
			'*': { classes: '' },
			'arrows-wrap': { classes: '' },
			'arrow-item': { classes: '' },
			'arrow-prev': { classes: '' },
			'arrow-next': { classes: '' },
			'pagination': { classes: '' },
			'page-item': { classes: '' },
		},
		group: ['content'],
		children: [{
			"id": "b1mqswtn36",
			"type": "postLoop",
			"options": { "classes": "" },
			"children": [{
				"id": "b1mqswryz4",
				"type": "postThumbnail",
				"options": { "classes": "" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
					"image": { "classes": "" },
				}
			}, {
				"id": "b1mqswrwsg",
				"type": "postTitle",
				"options": { "text": "Post Title.", "tag": "h1", "classes": "" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },

				}
			}],
			"cssSelectors": {
				"*": { "classes": "" },
				"loop-items": { "classes": "" },
				"loop-item": {
					"classes": "flex flex-col gap-5 bg-gray-100 bg-indigo-300 p-3 rounded-sm"
				}
			}
		}]
	},

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
		options: {
			classes: '',
		},
		cssSelectors: {
			'*': { classes: '' },
			'loop-items': { classes: 'grid grid-cols-4 gap-5' },
			'loop-item': { classes: '' },
		},
		children: [{
			"id": "b1mqswtn36",
			"type": "termsLoop",
			"options": { "classes": "" },
			"children": [{
				"id": "b1mqswryz4",
				"type": "termThumbnail",
				"options": { "classes": "" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
					"image": { "classes": "" },
				}
			}, {
				"id": "b1mqswrwsg",
				"type": "termTitle",
				"options": { "text": "Term Title.", "tag": "h1", "classes": "" },
				"cssSelectors": {
					"*": { "classes": "" },
					"link": { "classes": "" },
				}
			}],
			"cssSelectors": {
				"*": { "classes": "" },
				"loop-items": { "classes": "" },
				"loop-item": {
					"classes": "flex flex-col gap-5 bg-gray-100 bg-indigo-300 p-3 rounded-sm"
				}
			}
		}],
		group: ['content']
	},

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
		options: {
			tag: "h1",
			prefix: 'Archives: %term_name%',
			icon: ''
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content']
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
		options: {
			maxWord: 40,
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content']
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
		options: {
			prefix: '',
			suffix: ' results',
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content']
	},

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
		options: {
			text: "Term Title.",
			tag: "h1",
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content']
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
		options: {
			label: '',
			suffix: ' items',
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content']
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
		options: {
		},
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'image': { classes: '' }
		},
		group: ['content']
	},

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
		options: {
			classes: '',
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content'],
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
		options: {
			classes: '',
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['content', 'product'],
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
		options: {
			classes: '',
		},
		cssSelectors: {
			'*': { classes: '' }
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
		options: {
			format: '',
		},
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
		options: {},
		cssSelectors: {
			"*": { "classes": "" },
			"link": { "classes": "" },
			"image": { "classes": "" },
		},
		group: ['content', 'product'],
	},

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
				label: 'location',
				value: '123 Main St, City, State 12345'
			},
			iconSize: 20
		},
		cssSelectors: {
			'*': { classes: 'flex gap-2 flex-col ' },
			'item': { classes: 'flex gap-2' },
			'link': { classes: 'flex gap-2' },
			'phone-link': { classes: 'flex gap-2' },
			'email-link': { classes: 'flex gap-2' },
			'icon': { classes: '' }
		},
		children: [],
		group: ['layout'],
	},

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
		cssSelectors: {
			'*': { classes: 'flex gap-5 items-center justify-between' },
			'loop-item': { classes: '' },
			'title': { classes: '' },
			'description': { classes: '' },
			'icon': { classes: '' }
		},
		children: [],
		group: ['layout'],
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
		options: {},
		cssSelectors: {
			'*': { classes: '' },
			'img': { classes: '' }
		},
		group: ['layout'],
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
		options: {},
		cssSelectors: {
			'*': { classes: '' },
			'img': { classes: '' }
		},
		group: ['layout'],
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
			'*': { classes: 'flex gap-5 items-center justify-between' },
			'loop-item': { classes: '' },
			'label': { classes: '' },
			'value': { classes: '' },
		},
		children: [],
		group: ['layout'],
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
		group: ['layout'],
		parent: ['collections'],
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
		options: {
			maxWord: 20,
			readMoreText: 'Read More',
			readMoreIcon: '',
			readMoreIconSize: 25,
		},
		cssSelectors: {
			'*': { classes: '' },
			'excerpt': { classes: '' },
			'read-more': { classes: 'flex gap-2 items-center' },
			'read-more-icon': { classes: '' },
			'read-more-label': { classes: '' },
		},
		group: ['product', 'content']
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
		options: {
			label: '',
			labelIcon: '',
			outOfStockText: 'Out of stock',
			inStockText: 'In stock',
			outOfStockIcon: '',
			inStockIcon: '',
			iconSize: 20
		},
		cssSelectors: {
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
		options: {
			label: '',
			separator: ', '
		},
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
		options: {
			label: '',
			separator: ', '
		},
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center' },
			'star-rate': { classes: 'flex gap-1 items-center text-orange-400' },
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
		options: {
			label: '',
			separator: ', '
		},
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
		options: {
			label: '',
			separator: ', '
		},
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
		cssSelectors: {
			'*': { classes: 'flex items-center gap-3' },
			'label': { classes: '' },
			'sku': { classes: '' },
			'icon': { classes: '' }
		},
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
		options: {
			separator: '',
			variablePriceViewType: 'inline',
		},
		cssSelectors: {
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
		type: "productVariablePrices",
		label: "Product Variable Prices",
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
		options: {
			separator: '',
			variablePriceViewType: 'inline',
		},
		cssSelectors: {
			'*': { classes: '' },
			'attr-wrap': { classes: ' flex flex-col gap-5' },
			'attr-title': { classes: 'flex flex-col gap-2 font-semibold' },
			'attr-items-wrap': { classes: 'flex gap-2' },
			'variation-item': { classes: 'flex gap-3 border rounded-sm px-4 py-1' },
			'variation-price': { classes: ' ' },
			'variation-selected': { classes: ' ' },
			'variation-disabled': { classes: 'disabled opacity-50 cursor-not-allowed' },
		},
		group: ['product']
	},

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
		options: {
			buttonText: "Add To Cart",
			hideQuantity: false,
			hideButton: false,
		},
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center' },
			'button-wrapper': { classes: 'cursor-pointer text-white bg-blue-600 px-4  rounded-sm flex items-center justify-center ' },
			'button-label': { classes: 'cursor-pointer text-white bg-blue-600 px-4 py-2 rounded-sm' },
			'button-icon': { classes: '' },
			'quantity-wrapper': { classes: 'flex border-2 border-solid border-blue-600 gap-2 items-center rounded-sm text-blue-600 px-2 justify-between' },
			'quantity-input': { classes: '!border-0 !shadow-none text-center focus:border-0 w-16' },
			'quantity-plus': { classes: 'cursor-pointer' },
			'quantity-minus': { classes: 'cursor-pointer' },
		},
		group: ['product']
	},
	{
		type: "notify",
		label: "Notify Me",
		icon: null,
		description: "Lets a customer request notification when an out-of-stock product becomes available again.",
		ai: {
			purpose: "Capture interest in an unavailable product so the customer can be notified when it is back in stock.",
			useFor: [
				"Out-of-stock products",
				"Back-in-stock requests",
				"Stock notifications",
				"Product availability requests"
			],
			keywords: [
				"notify me",
				"back in stock",
				"stock notification",
				"out of stock notification",
				"request availability"
			],
			rules: [
				"Use in place of addToCart when a product is out of stock.",
				"Collect an email or phone number so the customer can be reached.",
				"Do not display alongside addToCart for the same product; show one or the other based on stock status."
			]
		},
		options: {
			buttonText: "Notify Me",
			inputPlaceholder: "Enter your email",
		},
		cssSelectors: {
			'*': { classes: 'flex gap-3 items-center' },
			'input': { classes: 'border-2 border-solid border-gray-300 rounded-sm px-3 py-2' },
			'button': { classes: 'bg-blue-600 text-white px-4 py-2 rounded-sm cursor-pointer' },
		},
		group: ['product']
	},

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
		cssSelectors: {
			'*': { classes: '' },
			'items': { classes: '' },
			'item': { classes: '' },
			'image': { classes: '' },
			'arrows': { classes: '' },
			'prev': { classes: '' },
			'next': { classes: '' },
			'pagination': { classes: '' },
			'dot': { classes: '' }
		},
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
		options: {
			tabsItems: [
				{ "label": "Hello" },
				{ "label": "Hello" },
				{ "label": "Hello" }
			],
			orientation: ''
		},
		cssSelectors: {
			'*': { classes: '' },
			'navs-items': { classes: 'flex gap-2' },
			'nav-item': { classes: 'border-2 px-3 py-1 rounded-sm border-gray-400 cursor-pointer' },
			'nav-item-active': { classes: 'bg-gray-500' },
			'nav-item-label': { classes: '' },
			'nav-item-icon': { classes: '' },
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
		options: {
			items: [
				{ "label": "Hello", "classes": "" },
				{ "label": "Hello", "classes": "" },
				{ "label": "Hello", "classes": "" }
			],
			orientation: ''
		},
		cssSelectors: {
			'*': { classes: '' },
			'accordion-items': { classes: 'flex flex-col gap-2' },
			'accordion-header': { classes: 'p-2 rounded-sm border-gray-400 border-2 flex justify-between' },
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
		options: {},
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
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-4' },
			'field': { classes: 'flex flex-col gap-2' },
			'label': { classes: 'text-sm' },
			'rate-wrap': { classes: '' },
			'stars': { classes: 'flex gap-1 items-center' },
			'star': { classes: 'cursor-pointer' },
			'textarea': { classes: 'w-full h-32 px-3 py-2 rounded-sm border border-gray-400 shadow-none!' },
			'submit': { classes: 'px-4 py-2 rounded-sm text-center text-white bg-blue-600 cursor-pointer' },
			'notice': { classes: 'text-sm' },
			'errors': { classes: 'flex flex-col gap-1 text-sm text-red-500' },
			'error': { classes: 'flex items-center gap-2' },
		},
		group: ['content'],
		parent: ['commentsGrid'],
		children: [],
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
		cssSelectors: {
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
		options: {},
		cssSelectors: {
			'*': { classes: '' },
			'link': { classes: '' },
			'image': { classes: '' }
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
		options: {},
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
		options: {},
		cssSelectors: {
			'*': { classes: '' }
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
		options: {},
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
				"password",
				"forgot password"
			],
			rules: [
				"Use for existing users who already have an account.",
				"Place on login or account access pages.",
				"Provide username or email and password fields.",
				"Keep the login action clearly visible.",
				"Include the forgot-password link when account recovery is needed.",
				"Do not use as a registration form."
			]
		},
		options: {
			usernameLabel: 'Username/Email',
			passwordLabel: 'Password',
			loginLabel: 'Login',
			forgetPasswordLabel: 'Forget Password',
		},
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-3' },
			'input-fields-wrap': { classes: 'flex flex-col gap-4' },
			'input-wrap': { classes: 'flex flex-col gap-2' },
			'input': { classes: '' },
			'input-username': { classes: '' },
			'input-email': { classes: '' },
			'label': { classes: '' },
			'label-username': { classes: '' },
			'label-email': { classes: '' },
			'submit': { classes: 'bg-blue-500 p-2 rounded-sm text-center text-white' },
			'forget-password': { classes: '' },
		},
		parent: ['customerAccount'],
		group: ['shop']
	},

	{
		type: "loginByPhone",
		label: "Login By Phone",
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
				"password",
				"forgot password"
			],
			rules: [
				"Use for existing users who already have an account.",
				"Place on login or account access pages.",
				"Provide username or email and password fields.",
				"Keep the login action clearly visible.",
				"Include the forgot-password link when account recovery is needed.",
				"Do not use as a registration form."
			]
		},
		options: {
			phoneLabel: 'Phone',
			otpLabel: 'OTP',
			verifyOtpLabel: 'Verify OTP',
			sendOtpLabel: 'Send OTP',
		},
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-3' },
			'input-fields-wrap': { classes: 'flex flex-col gap-4' },
			'input-wrap': { classes: 'flex flex-col gap-2' },
			'input': { classes: '' },
			'input-phone': { classes: '' },
			'input-otp': { classes: '' },
			'label': { classes: '' },
			'label-phone': { classes: '' },
			'label-otp': { classes: '' },
			'submit': { classes: 'bg-blue-500 p-2 rounded-sm text-center text-white' },
		},
		parent: ['customerAccount'],
		group: ['shop']
	},








	{
		type: "register",
		label: "Register",
		icon: <IconUserPlus />,
		description: "A user registration form that allows new customers or users to create an account using their email, phone number, and password.",
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
				"phone",
				"password"
			],
			rules: [
				"Use for new users who do not have an account.",
				"Place on registration or account creation pages.",
				"Collect email and phone information when required.",
				"Provide password and password confirmation fields.",
				"Keep the registration action clearly visible.",
				"Include a link or action for users who already have an account.",
				"Do not use as the primary form for existing-user authentication."
			]
		},
		options: {
			emailLabel: 'Email',
			phoneLabel: 'Phone',
			password1Label: 'Password',
			password2Label: 'Rewrite Password',
			registerLabel: 'Register',
			haveAccountLabel: 'Have an Account?',
		},
		cssSelectors: {
			'*': { classes: '' },
			'form': { classes: 'flex flex-col gap-3' },
			'input-fields-wrap': { classes: 'flex flex-col gap-4' },
			'input-wrap': { classes: 'flex flex-col gap-2' },
			'input': { classes: '' },
			'input-email': { classes: '' },
			'input-phone': { classes: '' },
			'input-password': { classes: '' },
			'label': { classes: '' },
			'label-email': { classes: '' },
			'label-phone': { classes: '' },
			'label-password': { classes: '' },
			'submit': { classes: 'bg-blue-500 p-2 rounded-sm text-center text-white' },
			'have-account': { classes: '' },
		},
		parent: ['customerAccount'],
		group: ['shop']
	},

	{
		type: "customerAccount",
		label: "Customer Account",
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
			parentRequired: ""
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
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
										"options": {
											"emailLabel": "Email",
											"phoneLabel": "Phone",
											"password1Label": "Password",
											"password2Label": "Rewrite Password",
											"registerLabel": "Register",
											"haveAccountLabel": "Have an Account?"
										},
										"cssSelectors": {
											"*": {
												"classes": ""
											},
											"form": {
												"classes": "flex flex-col gap-3"
											},
											"input-fields-wrap": {
												"classes": "flex flex-col gap-4"
											},
											"input-wrap": {
												"classes": "flex flex-col gap-2"
											},
											"input": {
												"classes": ""
											},
											"input-email": {
												"classes": ""
											},
											"input-phone": {
												"classes": ""
											},
											"input-password": {
												"classes": ""
											},
											"label": {
												"classes": ""
											},
											"label-email": {
												"classes": ""
											},
											"label-phone": {
												"classes": ""
											},
											"label-password": {
												"classes": ""
											},
											"submit": {
												"classes": "bg-blue-500 p-2 rounded-sm text-center text-white"
											},
											"have-account": {
												"classes": ""
											}
										}
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
										"options": {
											"usernameLabel": "Username/Email",
											"passwordLabel": "Password",
											"loginLabel": "Login",
											"forgetPasswordLabel": "Forget Password"
										},
										"cssSelectors": {
											"*": {
												"classes": ""
											},
											"form": {
												"classes": "flex flex-col gap-3"
											},
											"input-fields-wrap": {
												"classes": "flex flex-col gap-4"
											},
											"input-wrap": {
												"classes": "flex flex-col gap-2"
											},
											"input": {
												"classes": ""
											},
											"input-username": {
												"classes": ""
											},
											"input-email": {
												"classes": ""
											},
											"label": {
												"classes": ""
											},
											"label-username": {
												"classes": ""
											},
											"label-email": {
												"classes": ""
											},
											"submit": {
												"classes": "bg-blue-500 p-2 rounded-sm text-center text-white"
											},
											"forget-password": {
												"classes": ""
											}
										}
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
		description: "",
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
		description: "",
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
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],

	},
	{
		type: "customerOrders",
		label: "Orders",
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
			parentRequired: "customerAccount"
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],

	},
	{
		type: "customerProfile",
		label: "Profile",
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
			parentRequired: ""
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},
	{
		type: "customerProfileEdit",
		label: "Profile Edit",
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
			parentRequired: "customerAccount"
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},
	{
		type: "customerTickets",
		label: "Tickets",
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
			parentRequired: "customerAccount"
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
	},
	{
		type: "customerSubscriptions",
		label: "Subscriptions",
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
			parentRequired: "customerAccount"
		},
		options: {},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['shop'],
		children: [],
		parent: ['customerAccount'],
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
		options: {
			iconName: 'IconAffiliate',
			size: '18'
		},
		cssSelectors: {
			'*': { classes: '' }
		},
		group: ['layout'],
		children: [],
	},




]
export default elements;
