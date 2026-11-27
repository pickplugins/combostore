/*
  Roles & Permissions: ComboStore capabilities.

  Every dashboard menu item in the permission sections has up to four
  WordPress role capabilities, cstore_{view|create|edit|delete}_{item}:
    view   - its menu entry and pages
    create - adding, edit - updating, delete - deleting
  e.g. cstore_view_products, cstore_edit_products, cstore_view_orders. The
  cstore_ prefix keeps them apart from WooCommerce's own edit_products.

  They are stored on the WordPress roles and enforced by the server
  (ComboStoreRolePermissions.php, which also holds the full catalogue and
  serves it to Settings → Roles & Permissions). get_user returns the signed-in
  user's capabilities as userDataX.capabilities; this file only maps the
  Sidebar onto them. Keep NAV_CAPS in step with the server's catalogue.

  Administrators have every capability.
*/

export const CAP_PREFIX = "cstore_";
export const ACTIONS = ["view", "create", "edit", "delete"];

export const cap = (action, item) => `${CAP_PREFIX}${action}_${item}`;

/* Sidebar entry (NAVS value) -> the capability that shows it. */
export const NAV_CAPS = {
  products: cap("view", "products"),
  reviews: cap("view", "reviews"),
  coupons: cap("view", "coupons"),
  categories: cap("view", "categories"),
  tags: cap("view", "tags"),
  brands: cap("view", "brands"),
  badges: cap("view", "badges"),
  attributes: cap("view", "attributes"),
  "bulk-submit-product": cap("create", "bulk_products"),

  orders: cap("view", "orders"),
  incomplete: cap("view", "incomplete"),
  refunds: cap("view", "refunds"),
  subscriptions: cap("view", "subscriptions"),
  licenses: cap("view", "licenses"),

  expenses: cap("view", "expenses"),
  purchases: cap("view", "purchases"),

  deliveries: cap("view", "deliveries"),
  "shipping-zones": cap("view", "shipping_zones"),
  "shipping-classes": cap("view", "shipping_classes"),

  activity: cap("view", "activity"),
  stocks: cap("view", "stocks"),
  "stocks-history": cap("view", "stocks_history"),
  "top-customers": cap("view", "top_customers"),
  "top-selling-products": cap("view", "top_selling_products"),

  tickets: cap("view", "tickets"),
  "create-tickets": cap("create", "tickets"),

  "affiliates-dashboard": cap("view", "affiliate_overview"),
  "affiliate-sales": cap("view", "affiliate_sales"),
  "affiliate-clicks": cap("view", "affiliate_clicks"),
  "affiliate-payouts": cap("view", "affiliate_payouts"),

  calls: cap("view", "calls"),
  messages: cap("view", "messages"),
};

/* Sidebar groups made only of capability entries. */
export const NAV_GROUPS = ["store", "sell", "accounts", "delivery", "stats", "support", "affiliates-group"];

/* Roles that see a section's own records only, read-only, through a grant
   (a rider their deliveries, a supplier the purchases made from them). */
const GRANT_ROLES = { delivery: ["rider"], accounts: ["supplier"] };

/* Built-in roles; custom ones (cstore_*) come from the server. */
export const BUILTIN_ROLES = ["store_manager", "support_agent", "rider", "supplier", "affiliate", "customer"];

export const isAdmin = (user) => Array.isArray(user?.roles) && user.roles.includes("administrator");

export const isCustomRole = (role) => typeof role === "string" && role.startsWith(CAP_PREFIX);

/* Whether the signed-in user (userDataX) holds a capability. */
export function can(user, capability) {
  if (!user) return false;
  if (isAdmin(user)) return true;
  return Array.isArray(user.capabilities) && user.capabilities.includes(capability);
}

/* Whether the user has any of the item's capabilities for these actions. */
export function canAny(user, item, actions = ACTIONS) {
  return actions.some(action => can(user, cap(action, item)));
}

/*
  Whether a Sidebar entry is shown: true / false for capability entries and
  groups (`childAllowed` says whether any child is shown), null for entries
  the capabilities do not govern (their `roles` decide, as before).
*/
export function navAllowed(nav, user, childAllowed) {
  if (!nav) return null;
  if (NAV_CAPS[nav.value]) return can(user, NAV_CAPS[nav.value]);
  if (NAV_GROUPS.includes(nav.value)) {
    if (!childAllowed) return false;
    /* A group keeps its own audience: customers have Orders in their
       capabilities but have never had the Sell group in the dashboard. */
    const roles = Array.isArray(user?.roles) ? user.roles : [];
    const audience = [...(nav.roles ?? []), ...(GRANT_ROLES[nav.value] ?? [])];
    return isAdmin(user) || roles.some(role => audience.includes(role) || isCustomRole(role));
  }
  return null;
}

/* Whether the user reaches a section only through a grant: their own records,
   read-only (riders on Deliveries, suppliers on Purchases). */
export function hasOnlyGrantedAccess(user, section) {
  const roles = Array.isArray(user?.roles) ? user.roles : [];
  if (isAdmin(user)) return false;
  if (roles.some(role => role === "store_manager" || isCustomRole(role))) return false;
  return roles.some(role => (GRANT_ROLES[section] ?? []).includes(role));
}
