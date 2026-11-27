# ComboStore

ComboStore is a complete e-commerce platform: a store dashboard, a drag-and-drop
page builder and a fast storefront in one [Next.js](https://nextjs.org) app,
backed by the **combostore-server** WordPress plugin through its REST API.

- Repository: [github.com/pickplugins/combostore](https://github.com/pickplugins/combostore)
- Dashboard: [`/dashboard`](app/dashboard) · Page builder: [`/builder`](app/builder) · Settings: [`/settings`](app/settings)
- Storefront: [`/shop`](app/shop), [`/product`](app/product), [`/account`](app/account), [`/blog`](app/blog)

## Contents

- [Getting started](#getting-started)
- [Features](#features)
  - [Storefront](#storefront)
  - [Page builder](#page-builder)
  - [Catalog](#catalog)
  - [Orders and fulfilment](#orders-and-fulfilment)
  - [Customers and accounts](#customers-and-accounts)
  - [Team and roles](#team-and-roles)
  - [Affiliates](#affiliates)
  - [Riders and deliveries](#riders-and-deliveries)
  - [Suppliers, purchases and expenses](#suppliers-purchases-and-expenses)
  - [Support](#support)
  - [Marketing](#marketing)
  - [Messages inbox](#messages-inbox)
  - [Payment gateways](#payment-gateways)
  - [Couriers and fraud check](#couriers-and-fraud-check)
  - [Tracking and product feeds](#tracking-and-product-feeds)
  - [Security](#security)
  - [Reports and activity](#reports-and-activity)
  - [Extensions](#extensions)
  - [Hosting](#hosting)
- [Project layout](#project-layout)
- [Tech stack](#tech-stack)

## Getting started

Requirements: Node.js 22+ and a WordPress site running the **combostore-server**
plugin (the API base, `http://localhost/wp/` in development).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

`npm run dev` and `npm run build` first regenerate the Tabler icon set and the
Tailwind source list ([`scripts/`](scripts)).

## Features

### Storefront

- Pages, products, categories, tags, brands and blog rendered from builder templates: [`app/[...slug]`](app/[...slug]), [`app/product`](app/product), [`app/categories`](app/categories), [`app/tags`](app/tags), [`app/brands`](app/brands), [`app/blog`](app/blog).
- Shop with grid filters (categories, price range) and pagination: [`app/shop`](app/shop).
- Cart drawer and checkout with coupons, shipping zones, shipping classes, a saved checkout draft and an abandoned-cart recovery link: [`app/recover-cart`](app/recover-cart), [`lib/checkoutDraft.js`](lib/checkoutDraft.js), [`lib/coupon.js`](lib/coupon.js).
- Thank-you page and public order tracking: [`app/thank-you`](app/thank-you).
- Customer account with orders, invoices, downloads, licenses, subscriptions, support tickets and profile editing: [`app/account`](app/account).
- Sign-in by email/password or by phone OTP, and sign-up with an optional (or required) phone field: [`app/login`](app/login), [`app/register`](app/register).
- Product extras: variations, gallery and lightbox, badges, deals with a waitlist, warranty, size guide, FAQ, minimum order quantity, dimensions, stock status, request for stock, ratings and reviews, related products, upsells and cross-sells, quick view.
- Store currency (code, symbol, position) from Store Details: [`components/StoreCurrencySync.jsx`](components/StoreCurrencySync.jsx).
- SEO: product SEO fields, template metadata, [`sitemap.xml`](app/sitemap.xml) and [`sitemap-blogs.xml`](app/sitemap-blogs.xml): [`lib/templateSeo.js`](lib/templateSeo.js).
- Translations with next-intl: [`messages/en.json`](messages/en.json).

### Page builder

- Visual drag-and-drop editor for pages, headers, footers and templates: [`app/builder`](app/builder), [`components/PageBuilder`](components/PageBuilder).
- Over 130 blocks, each with a canvas preview, a live renderer and an options panel: [`components/PageBuilder/elements`](components/PageBuilder/elements).
  - **Layout:** section, container, columns, grid, tabs, accordion, popup, popover, sidebar, site header and footer.
  - **Content:** heading, text, image, video, icon, button, list, link list, menu, logo, feature box, testimonials, content slider, countdown timer.
  - **Products:** price, gallery, variations, add to cart, badges, deal, warranty, size guide, FAQ, ratings, related/upsell/cross-sell products, quick search.
  - **Posts and terms:** post grid, loop, slider, filters, pagination, and term grids/sliders.
  - **Comments and reviews:** comment form, grid and loop.
  - **Account:** login, login by phone, register, customer profile and profile edit, orders, subscriptions, tickets, order tracking.
  - **Engagement:** newsletter sign-up, WhatsApp and Messenger buttons, chat button, notify.
- Ready-made layout presets per block: [`components/PageBuilder/element-layouts`](components/PageBuilder/element-layouts).
- Per-part style editing with Tailwind classes (cssSelectors) and theme styles: [`components/PageBuilder/ElementsDefinition.js`](components/PageBuilder/ElementsDefinition.js), [`lib/templateTheme.js`](lib/templateTheme.js).
- Header, footer and theme editors in the dashboard: [`app/dashboard/header`](app/dashboard/header), [`app/dashboard/footer`](app/dashboard/footer), [`app/dashboard/themes`](app/dashboard/themes).

### Catalog

- Products with variations, attributes, stock, deals, warranty, SEO and reviews settings: [`app/dashboard/products`](app/dashboard/products), [`app/dashboard/attributes`](app/dashboard/attributes).
- Categories, tags, brands and badges: [`app/dashboard/categories`](app/dashboard/categories), [`app/dashboard/tags`](app/dashboard/tags), [`app/dashboard/brands`](app/dashboard/brands), [`app/dashboard/badges`](app/dashboard/badges).
- Stock levels and stock history: [`app/dashboard/stocks`](app/dashboard/stocks), [`app/dashboard/stocks-history`](app/dashboard/stocks-history).
- Bulk product and blog submission: [`app/dashboard/bulk-submit-product`](app/dashboard/bulk-submit-product), [`app/dashboard/bulk-submit-blog`](app/dashboard/bulk-submit-blog).
- Blog posts, post categories and tags: [`app/dashboard/posts`](app/dashboard/posts), [`app/dashboard/post-categories`](app/dashboard/post-categories), [`app/dashboard/posts-tags`](app/dashboard/posts-tags).
- Media library: [`app/dashboard/media-library`](app/dashboard/media-library).
- Coupons: [`app/dashboard/coupons`](app/dashboard/coupons).
- Shipping zones, methods and shipping classes: [`app/dashboard/shipping-zones`](app/dashboard/shipping-zones), [`app/dashboard/shipping-classes`](app/dashboard/shipping-classes).

### Orders and fulfilment

- Orders with an overview, bulk updates, notes, payments, invoices (PDF), receipts and labels, delivery and courier dispatch, and the customer's IP: [`app/dashboard/orders`](app/dashboard/orders), [`components/OrderUpdate.jsx`](components/OrderUpdate.jsx), [`components/InvoiceWithPDF.jsx`](components/InvoiceWithPDF.jsx).
- Incomplete (abandoned) orders: [`app/dashboard/incomplete`](app/dashboard/incomplete).
- Refunds: [`app/dashboard/refunds`](app/dashboard/refunds).
- Subscriptions: [`app/dashboard/subscriptions`](app/dashboard/subscriptions).
- Software licenses: [`app/dashboard/licenses`](app/dashboard/licenses).
- Wishlists: [`app/dashboard/wishlists`](app/dashboard/wishlists).

### Customers and accounts

- Customers, top customers and bulk user import: [`app/dashboard/customers`](app/dashboard/customers), [`app/dashboard/top-customers`](app/dashboard/top-customers), [`app/dashboard/bulk-add-users`](app/dashboard/bulk-add-users).
- All users with profile editing: [`app/dashboard/users`](app/dashboard/users).
- Duplicate phone check at sign-up and on profile edits, shown under the phone field.
- Product reviews and comments moderation: [`app/dashboard/reviews`](app/dashboard/reviews), [`app/dashboard/comments`](app/dashboard/comments).

### Team and roles

- Roles & Permissions: view/create/edit/delete permissions per area and custom roles: [`components/RolePermissionsPanel.jsx`](components/RolePermissionsPanel.jsx), [`lib/rolePermissions.js`](lib/rolePermissions.js).
- Store managers with workload: [`app/dashboard/store-managers`](app/dashboard/store-managers).
- Support agents: [`app/dashboard/support-agents`](app/dashboard/support-agents).
- Sellers: [`app/dashboard/sellers`](app/dashboard/sellers).

### Affiliates

- Affiliates, referral clicks, sales and payouts: [`app/dashboard/affiliates`](app/dashboard/affiliates), [`app/dashboard/affiliate-clicks`](app/dashboard/affiliate-clicks), [`app/dashboard/affiliate-sales`](app/dashboard/affiliate-sales), [`app/dashboard/affiliate-payouts`](app/dashboard/affiliate-payouts).
- Affiliate's own dashboard: [`app/dashboard/affiliates-dashboard`](app/dashboard/affiliates-dashboard).
- `?ref=` tracking on the storefront: [`components/AffiliateTracker.jsx`](components/AffiliateTracker.jsx), [`lib/affiliateRef.js`](lib/affiliateRef.js).
- Public sign-up and applying from an account, with an approval step, rejection messages, reapply delay and emails: [`components/AffiliateApplicationStatus.jsx`](components/AffiliateApplicationStatus.jsx).

### Riders and deliveries

- Riders and their deliveries: [`app/dashboard/riders`](app/dashboard/riders), [`app/dashboard/deliveries`](app/dashboard/deliveries).
- Rider applications (always reviewed), with emails and sidebar badges: [`components/RiderApplicationStatus.jsx`](components/RiderApplicationStatus.jsx).
- Google Maps location picker and directions: [`components/GoogleMapLocationPicker.jsx`](components/GoogleMapLocationPicker.jsx), [`components/GoogleMapDirections.jsx`](components/GoogleMapDirections.jsx).

### Suppliers, purchases and expenses

- Suppliers, purchases (due = total − paid) and expenses: [`app/dashboard/suppliers`](app/dashboard/suppliers), [`app/dashboard/purchases`](app/dashboard/purchases), [`app/dashboard/expenses`](app/dashboard/expenses).

### Support

- Tickets with assignment to agents: [`app/dashboard/tickets`](app/dashboard/tickets), [`app/dashboard/create-tickets`](app/dashboard/create-tickets).

### Marketing

- Email and SMS campaigns, contacts, lists and settings: [`app/dashboard/marketing-overview`](app/dashboard/marketing-overview), [`app/dashboard/marketing-campaigns`](app/dashboard/marketing-campaigns), [`app/dashboard/marketing-contacts`](app/dashboard/marketing-contacts), [`app/dashboard/marketing-lists`](app/dashboard/marketing-lists), [`app/dashboard/marketing-settings`](app/dashboard/marketing-settings).
- Voice calls and broadcasts (Talkify, HelloPBX, ePBX): [`app/dashboard/calls`](app/dashboard/calls).
- Facebook Ads campaigns: [`components/pages/FacebookAdsPanel.jsx`](components/pages/FacebookAdsPanel.jsx).
- Multiple SMTP servers: [`components/SmtpServersPanel.jsx`](components/SmtpServersPanel.jsx).

### Messages inbox

- WhatsApp and Messenger conversations in one inbox: [`app/dashboard/messages`](app/dashboard/messages).

### Payment gateways

Each gateway has a client helper and a server helper in [`lib/`](lib) plus its own API routes in [`app/api/`](app/api).

| Gateway | Code |
| --- | --- |
| bKash | [`lib/bkash-server.js`](lib/bkash-server.js), [`app/api/bkash`](app/api/bkash) |
| Nagad | [`lib/nagad-server.js`](lib/nagad-server.js), [`app/api/nagad`](app/api/nagad) |
| SSLCOMMERZ | [`lib/sslcommerz-server.js`](lib/sslcommerz-server.js), [`app/api/sslcommerz`](app/api/sslcommerz) |
| shurjoPay | [`lib/shurjopay-server.js`](lib/shurjopay-server.js), [`app/api/shurjopay`](app/api/shurjopay) |
| aamarPay | [`lib/aamarpay-server.js`](lib/aamarpay-server.js), [`app/api/aamarpay`](app/api/aamarpay) |
| UddoktaPay | [`lib/uddoktapay-server.js`](lib/uddoktapay-server.js), [`app/api/uddoktapay`](app/api/uddoktapay) |
| PayStation | [`lib/paystation-server.js`](lib/paystation-server.js), [`app/api/paystation`](app/api/paystation) |
| PortWallet | [`lib/portwallet-server.js`](lib/portwallet-server.js), [`app/api/portwallet`](app/api/portwallet) |
| EPS | [`lib/eps-server.js`](lib/eps-server.js), [`app/api/eps`](app/api/eps) |
| Stripe | [`lib/stripe-server.js`](lib/stripe-server.js), [`app/api/stripe`](app/api/stripe) |
| Paddle | [`lib/paddle-server.js`](lib/paddle-server.js), [`app/api/paddle`](app/api/paddle) |
| PayPal | [`lib/paypal.js`](lib/paypal.js) |

### Couriers and fraud check

- Send orders to Steadfast, Pathao, RedX, Paperfly and Carry Bee, with status webhooks: [`components/SendToCourier.jsx`](components/SendToCourier.jsx), [`app/api/couriers-webhook`](app/api/couriers-webhook).
- Customer phone fraud check across couriers, enforced at checkout: [`components/FraudCheck.jsx`](components/FraudCheck.jsx), [`extensions/fraud-checker`](extensions/fraud-checker).

### Tracking and product feeds

- Meta Pixel and Conversions API: [`lib/facebookPixel.js`](lib/facebookPixel.js), [`lib/sendMetaEvent.js`](lib/sendMetaEvent.js), [`app/api/facebook`](app/api/facebook), [`app/api/meta-event`](app/api/meta-event).
- TikTok Pixel, Events API and catalog: [`lib/tiktok.js`](lib/tiktok.js), [`app/api/tiktok`](app/api/tiktok).
- Microsoft Clarity and Google tags: [`lib/clarity.js`](lib/clarity.js), [`app/layout.jsx`](app/layout.jsx).
- Google and Facebook product feeds: [`app/google-product-feed`](app/google-product-feed), [`app/facebook-product-feed`](app/facebook-product-feed), [`lib/productFeed.js`](lib/productFeed.js).

### Security

- JWT sign-in for the dashboard and storefront: [`components/auth-context.js`](components/auth-context.js), [`lib/authRedirect.js`](lib/authRedirect.js).
- Google reCAPTCHA v2/v3 on storefront forms: [`components/RecaptchaPanel.jsx`](components/RecaptchaPanel.jsx), [`lib/recaptcha.jsx`](lib/recaptcha.jsx).
- Section access guards by permission: [`components/SectionAccessGuard.jsx`](components/SectionAccessGuard.jsx), [`components/Can.jsx`](components/Can.jsx).

### Reports and activity

- Dashboard overview with charts and date ranges: [`components/Dashboard.jsx`](components/Dashboard.jsx).
- Top-selling products: [`app/dashboard/top-selling-products`](app/dashboard/top-selling-products).
- Activity log with visitor country: [`app/dashboard/activity`](app/dashboard/activity), [`lib/tracker.js`](lib/tracker.js).

### Extensions

- Add features without editing core files: [`extensions/README.md`](extensions/README.md), managed at [`app/dashboard/extensions`](app/dashboard/extensions).
- Included: [discount rules](extensions/discount-rules) (automatic cart discounts) and [fraud checker](extensions/fraud-checker).

### Hosting

- Any Node.js host with `npm run build` and `npm run start`.
- Cloudflare Workers through OpenNext: `npm run cf:build`, `cf:preview`, `cf:deploy`, `cf:upload` ([`scripts/cloudflare.mjs`](scripts/cloudflare.mjs), [`wrangler.jsonc`](wrangler.jsonc), [`open-next.config.ts`](open-next.config.ts)). This needs a Workers Paid plan.

## Project layout

| Path | What's there |
| --- | --- |
| [`app/`](app) | Routes: storefront, dashboard, builder, settings and API routes |
| [`components/`](components) | Dashboard UI and shared components |
| [`components/pages/`](components/pages) | One screen per dashboard page |
| [`components/PageBuilder/`](components/PageBuilder) | The page builder and all of its blocks |
| [`lib/`](lib) | Data fetching, gateways, tracking and helpers |
| [`extensions/`](extensions) | Extensions bundled with the app |
| [`store/`](store) | Zustand stores |
| [`messages/`](messages) | Translations |
| [`scripts/`](scripts) | Build scripts (icons, Tailwind sources, Cloudflare) |

## Tech stack

[Next.js 16](https://nextjs.org/docs) · [React 19](https://react.dev) · [Tailwind CSS 4](https://tailwindcss.com/docs) · [Zustand](https://zustand.docs.pmnd.rs) · [next-intl](https://next-intl.dev) · [Tabler Icons](https://tabler.io/icons) · [Tiptap](https://tiptap.dev) · [Chart.js](https://www.chartjs.org) · [jsPDF](https://github.com/parallax/jsPDF) · [OpenNext for Cloudflare](https://opennext.js.org/cloudflare) · [WordPress](https://wordpress.org) (backend)
