/**
 * Element layouts for the `menu` element.
 *
 * ElementLayouts.jsx scopes this file to a selected `menu` block and its Replace
 * action splices the preset in place of that block, so every root here MUST be
 * `"type": "menu"`. (PageBuilder.jsx regenerates all ids on paste/replace, so the
 * readable ids below are safe.)
 *
 * menu renders a wrapper <div> holding a <ul>, and each `menuItem` child renders
 * an <li> with a <Link>, an optional icon, a label <span>, a chevron when it has
 * children, and a nested <ul> for its submenu. Nesting is unbounded: a menuItem
 * may contain menuItems.
 *
 * Which key lands where:
 *
 *   menu.*           the outer <div>            (Menu.jsx:56)
 *   menu.menu        the <ul>                   (:81)
 *   menu.menu-item   EVERY <li>, any depth      (MenuItem.jsx:54)
 *   menu.menu-link   every <Link>               (:75)
 *   menu.link-label  every label <span>         (:88)
 *   menu.icon        every icon <div>           (:83)
 *   menu.sub-menu    every nested <ul>          (:109)
 *   menuItem.*       that one <li>              (:54)
 *   menuItem.link    that one <Link>            (:75)
 *   menuItem.label   that one label             (:88)
 *   menuItem.icon    that one icon              (:83)
 *   menuItem.sub-menu that item's <ul>          (:109, undeclared but read)
 *
 * Renderer notes that shaped these presets:
 *
 * 1. Style the whole tree from the menu, override per item. The menu's keys
 *    reach every descendant through MenuContext (Menu.jsx:82) and are
 *    concatenated with that item's own keys onto one element -- so both sources
 *    have equal specificity and a conflict is settled by Tailwind's stylesheet
 *    order, not by which string came first. Per-item overrides therefore use the
 *    `!` suffix (Tailwind v4's form), and that is the only reliable way to make
 *    one item differ from its siblings.
 *
 * 2. The layout goes on `menu`, not `*`. `*` is the outer div; the <ul> is what
 *    holds the items, so a row is `flex` on `menu` and a sidebar is
 *    `flex flex-col` there. The definition's own default (`flex gap-5 text-sm`
 *    on `menu`) already assumes this. `*` is left for width and placement.
 *
 * 3. The link has `flex gap-2 items-center justify-between` hardcoded (:75).
 *    That is what pushes the chevron to the far edge of a full-width item, which
 *    is what you want in a sidebar and harmless in an inline row where the <li>
 *    shrinks to its content. It cannot be removed, only overridden with `!`.
 *
 * 4. Submenus come pre-positioned and pre-coloured, and that colour will fight a
 *    dark theme. :109 hardcodes `absolute top-full left-0 w-max bg-white
 *    shadow-lg z-50` on every nested <ul> (the <li> is hardcoded `relative` at
 *    :54, so the anchoring works). The `bg-white` is the one to watch: the dark
 *    preset below overrides it as `bg-neutral-900!`, because without the suffix
 *    it is a coin toss.
 *
 * 5. A third level stacks on top of the second instead of flying out, and the
 *    fix has to be per item. Every nested <ul> gets the same `top-full left-0`,
 *    and the menu-level `sub-menu` key cannot tell depth two from depth three --
 *    so the flyout preset puts `top-0! left-full!` on the level-2 menuItem's own
 *    `sub-menu` key, which is the only place that distinction exists.
 *
 * 6. Submenus open on click, and the menu never navigates. :77 calls
 *    `ev.preventDefault()` unconditionally and then toggles that item's local
 *    `isActive` state (:49,:79), so there is no hover-open, each open submenu
 *    closes only by clicking its own parent again, and `options.url` is recorded
 *    but never followed -- on the published page as much as in the canvas. The
 *    presets still set real urls, since that is what the markup should carry
 *    once the handler is fixed.
 *
 * 7. The chevron cannot be styled. :91-93 renders `<IconChevronDown size={16} />`
 *    in a bare <span> with no selector key, shown only when the item has
 *    children. Its 16px and its colour-by-inheritance are fixed.
 *
 * 8. Set `iconSize` on any item with an icon: :41 reads it with no fallback, so
 *    an unset value renders at tabler's default rather than the menu's rhythm.
 *    Names must be exact @tabler/icons-react exports (:44) -- all of the ones
 *    below were checked against the installed package -- and the icon div is
 *    conditional on the name resolving (:82), so there is no empty wrapper to
 *    collapse.
 *
 * 9. menuItem reads three options it never uses -- `items` (:36), `tag` (:37,
 *    assigned to an unused `Tag` at :47) -- and renders `options.text` as a bare
 *    node inside the <li> after the submenu (:141), with no selector key. All
 *    three are left unset. Of what does work, only `label` is declared: `url`,
 *    `icon` and `iconSize` are undeclared but read.
 *
 * 10. The <ul> also carries a literal `menu` class (:81). Nothing in this
 *     project's CSS defines `.menu`, so it is an inert marker today -- worth
 *     remembering only if a utility library that styles `.menu` is ever added.
 */

var layouts = [

  {
    title: 'Header Nav Row',
    thumbnail: '',
    content: {
      "id": "mn-row",
      "type": "menu",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "menu": { "classes": "flex gap-7 items-center" },
        "menu-item": { "classes": "" },
        "sub-menu": { "classes": "min-w-44 py-2 rounded-lg border border-neutral-100" },
        "menu-link": { "classes": "py-2 text-sm font-medium text-neutral-700 hover:text-orange-600 transition-colors" },
        "link-label": { "classes": "whitespace-nowrap" },
        "icon": { "classes": "flex items-center shrink-0" }
      },
      "children": [
        {
          "id": "mn-row-i1",
          "type": "menuItem",
          "options": { "label": "Home", "url": "/" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-row-i2",
          "type": "menuItem",
          "options": { "label": "Shop", "url": "/shop" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": [
            {
              "id": "mn-row-i2a",
              "type": "menuItem",
              "options": { "label": "New arrivals", "url": "/shop/new" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-row-i2b",
              "type": "menuItem",
              "options": { "label": "Best sellers", "url": "/shop/best-sellers" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-row-i2c",
              "type": "menuItem",
              "options": { "label": "Clearance", "url": "/shop/clearance" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" },
                "icon": { "classes": "" }
              },
              "children": []
            }
          ]
        },
        {
          "id": "mn-row-i3",
          "type": "menuItem",
          "options": { "label": "Offers", "url": "/offers" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-row-i4",
          "type": "menuItem",
          "options": { "label": "Contact", "url": "/contact" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Icon Nav + Card Dropdown',
    thumbnail: '',
    content: {
      "id": "mn-icons",
      "type": "menu",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "menu": { "classes": "flex gap-6 items-center" },
        "menu-item": { "classes": "" },
        "sub-menu": { "classes": "min-w-52 mt-1 p-2 rounded-xl border border-neutral-100" },
        "menu-link": { "classes": "py-2 text-sm font-medium text-neutral-700 hover:text-orange-600 transition-colors" },
        "link-label": { "classes": "whitespace-nowrap" },
        "icon": { "classes": "flex items-center shrink-0 text-neutral-400" }
      },
      "children": [
        {
          "id": "mn-icons-i1",
          "type": "menuItem",
          "options": { "label": "Home", "url": "/", "icon": "IconHome", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-icons-i2",
          "type": "menuItem",
          "options": { "label": "Categories", "url": "/categories", "icon": "IconCategory", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": [
            {
              "id": "mn-icons-i2a",
              "type": "menuItem",
              "options": { "label": "Clothing", "url": "/c/clothing", "icon": "IconShirt", "iconSize": 15 },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-3 py-2 rounded-lg text-sm text-neutral-600 hover:bg-orange-50 hover:text-orange-700" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-icons-i2b",
              "type": "menuItem",
              "options": { "label": "Strollers", "url": "/c/strollers", "icon": "IconBabyCarriage", "iconSize": 15 },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-3 py-2 rounded-lg text-sm text-neutral-600 hover:bg-orange-50 hover:text-orange-700" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-icons-i2c",
              "type": "menuItem",
              "options": { "label": "Toys", "url": "/c/toys", "icon": "IconShoppingBag", "iconSize": 15 },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-3 py-2 rounded-lg text-sm text-neutral-600 hover:bg-orange-50 hover:text-orange-700" },
                "icon": { "classes": "" }
              },
              "children": []
            }
          ]
        },
        {
          "id": "mn-icons-i3",
          "type": "menuItem",
          "options": { "label": "Deals", "url": "/deals", "icon": "IconDiscount2", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-icons-i4",
          "type": "menuItem",
          "options": { "label": "Help", "url": "/help", "icon": "IconInfoCircle", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Sidebar Vertical Menu',
    thumbnail: '',
    content: {
      "id": "mn-side",
      "type": "menu",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-full max-w-56" },
        "menu": { "classes": "flex flex-col gap-1" },
        "menu-item": { "classes": "w-full" },
        "sub-menu": { "classes": "min-w-48 py-1.5 rounded-lg border border-neutral-100" },
        "menu-link": { "classes": "w-full px-3 py-2.5 rounded-md text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" },
        "link-label": { "classes": "flex-1" },
        "icon": { "classes": "flex items-center shrink-0 text-neutral-400" }
      },
      "children": [
        {
          "id": "mn-side-i1",
          "type": "menuItem",
          "options": { "label": "All products", "url": "/shop", "icon": "IconShoppingBag", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-side-i2",
          "type": "menuItem",
          "options": { "label": "Categories", "url": "/categories", "icon": "IconCategory", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": [
            {
              "id": "mn-side-i2a",
              "type": "menuItem",
              "options": { "label": "Clothing", "url": "/c/clothing" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-3 py-2! text-sm text-neutral-600 hover:bg-neutral-50" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-side-i2b",
              "type": "menuItem",
              "options": { "label": "Feeding", "url": "/c/feeding" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-3 py-2! text-sm text-neutral-600 hover:bg-neutral-50" },
                "icon": { "classes": "" }
              },
              "children": []
            }
          ]
        },
        {
          "id": "mn-side-i3",
          "type": "menuItem",
          "options": { "label": "Offers", "url": "/offers", "icon": "IconTag", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-side-i4",
          "type": "menuItem",
          "options": { "label": "Contact us", "url": "/contact", "icon": "IconPhone", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Pill Nav With Active Item',
    thumbnail: '',
    content: {
      "id": "mn-pill",
      "type": "menu",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "menu": { "classes": "flex gap-1.5 items-center p-1 rounded-full bg-neutral-100" },
        "menu-item": { "classes": "" },
        "sub-menu": { "classes": "min-w-44 mt-2 py-2 rounded-xl border border-neutral-100" },
        "menu-link": { "classes": "px-4 py-2 rounded-full text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" },
        "link-label": { "classes": "whitespace-nowrap" },
        "icon": { "classes": "flex items-center shrink-0" }
      },
      "children": [
        {
          "id": "mn-pill-i1",
          "type": "menuItem",
          "options": { "label": "All", "url": "/shop" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "bg-white! text-neutral-900! shadow-sm" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-pill-i2",
          "type": "menuItem",
          "options": { "label": "Clothing", "url": "/c/clothing" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-pill-i3",
          "type": "menuItem",
          "options": { "label": "Toys", "url": "/c/toys" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": [
            {
              "id": "mn-pill-i3a",
              "type": "menuItem",
              "options": { "label": "Soft toys", "url": "/c/toys/soft" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-pill-i3b",
              "type": "menuItem",
              "options": { "label": "Learning", "url": "/c/toys/learning" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                "icon": { "classes": "" }
              },
              "children": []
            }
          ]
        },
        {
          "id": "mn-pill-i4",
          "type": "menuItem",
          "options": { "label": "Gifts", "url": "/c/gifts" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Dark Header Nav',
    thumbnail: '',
    content: {
      "id": "mn-dark",
      "type": "menu",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "menu": { "classes": "flex gap-7 items-center" },
        "menu-item": { "classes": "" },
        "sub-menu": { "classes": "min-w-48 py-2 rounded-lg bg-neutral-900! border border-neutral-800 shadow-xl!" },
        "menu-link": { "classes": "py-2 text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors" },
        "link-label": { "classes": "whitespace-nowrap" },
        "icon": { "classes": "flex items-center shrink-0 text-neutral-500" }
      },
      "children": [
        {
          "id": "mn-dark-i1",
          "type": "menuItem",
          "options": { "label": "Home", "url": "/" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-dark-i2",
          "type": "menuItem",
          "options": { "label": "Shop", "url": "/shop" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": [
            {
              "id": "mn-dark-i2a",
              "type": "menuItem",
              "options": { "label": "New arrivals", "url": "/shop/new" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white" },
                "icon": { "classes": "" }
              },
              "children": []
            },
            {
              "id": "mn-dark-i2b",
              "type": "menuItem",
              "options": { "label": "Best sellers", "url": "/shop/best-sellers" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white" },
                "icon": { "classes": "" }
              },
              "children": []
            }
          ]
        },
        {
          "id": "mn-dark-i3",
          "type": "menuItem",
          "options": { "label": "Offers", "url": "/offers" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-dark-i4",
          "type": "menuItem",
          "options": { "label": "Contact", "url": "/contact" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        }
      ]
    },
  },

  {
    title: 'Three Level Flyout',
    thumbnail: '',
    content: {
      "id": "mn-fly",
      "type": "menu",
      "options": {},
      "cssSelectors": {
        "*": { "classes": "w-fit" },
        "menu": { "classes": "flex gap-6 items-center" },
        "menu-item": { "classes": "" },
        "sub-menu": { "classes": "min-w-52 py-2 rounded-lg border border-neutral-100" },
        "menu-link": { "classes": "py-2 text-sm font-medium text-neutral-700 hover:text-orange-600 transition-colors" },
        "link-label": { "classes": "whitespace-nowrap" },
        "icon": { "classes": "flex items-center shrink-0 text-neutral-400" }
      },
      "children": [
        {
          "id": "mn-fly-i1",
          "type": "menuItem",
          "options": { "label": "Home", "url": "/" },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        },
        {
          "id": "mn-fly-i2",
          "type": "menuItem",
          "options": { "label": "Categories", "url": "/categories", "icon": "IconCategory", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": [
            {
              "id": "mn-fly-i2a",
              "type": "menuItem",
              "options": { "label": "Clothing", "url": "/c/clothing" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" },
                "icon": { "classes": "" },
                "sub-menu": { "classes": "top-0! left-full! ml-1 min-w-48" }
              },
              "children": [
                {
                  "id": "mn-fly-i2a1",
                  "type": "menuItem",
                  "options": { "label": "Bodysuits", "url": "/c/clothing/bodysuits" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "label": { "classes": "" },
                    "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                    "icon": { "classes": "" }
                  },
                  "children": []
                },
                {
                  "id": "mn-fly-i2a2",
                  "type": "menuItem",
                  "options": { "label": "Sleepwear", "url": "/c/clothing/sleepwear" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "label": { "classes": "" },
                    "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                    "icon": { "classes": "" }
                  },
                  "children": []
                },
                {
                  "id": "mn-fly-i2a3",
                  "type": "menuItem",
                  "options": { "label": "Outerwear", "url": "/c/clothing/outerwear" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "label": { "classes": "" },
                    "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                    "icon": { "classes": "" }
                  },
                  "children": []
                }
              ]
            },
            {
              "id": "mn-fly-i2b",
              "type": "menuItem",
              "options": { "label": "Feeding", "url": "/c/feeding" },
              "cssSelectors": {
                "*": { "classes": "" },
                "label": { "classes": "" },
                "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900" },
                "icon": { "classes": "" },
                "sub-menu": { "classes": "top-0! left-full! ml-1 min-w-48" }
              },
              "children": [
                {
                  "id": "mn-fly-i2b1",
                  "type": "menuItem",
                  "options": { "label": "Bottles", "url": "/c/feeding/bottles" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "label": { "classes": "" },
                    "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                    "icon": { "classes": "" }
                  },
                  "children": []
                },
                {
                  "id": "mn-fly-i2b2",
                  "type": "menuItem",
                  "options": { "label": "High chairs", "url": "/c/feeding/high-chairs" },
                  "cssSelectors": {
                    "*": { "classes": "" },
                    "label": { "classes": "" },
                    "link": { "classes": "px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50" },
                    "icon": { "classes": "" }
                  },
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": "mn-fly-i3",
          "type": "menuItem",
          "options": { "label": "Contact", "url": "/contact", "icon": "IconPhone", "iconSize": 16 },
          "cssSelectors": {
            "*": { "classes": "" },
            "label": { "classes": "" },
            "link": { "classes": "" },
            "icon": { "classes": "" }
          },
          "children": []
        }
      ]
    },
  },

];

export default layouts;
