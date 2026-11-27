"use client";

import { useCan } from "../lib/useCan";
import { cap as capName } from "../lib/rolePermissions";

/*
  Renders its children only when the signed-in user holds a ComboStore
  capability (Roles & Permissions):

    <Can item="products" action="create"><button>Add Product</button></Can>
    <Can cap="cstore_edit_orders">...</Can>
    <Can item="coupons" action="delete" fallback={null}>...</Can>

  It hides what the user may not do; the server refuses it regardless.
*/
export default function Can({ cap, item, action = "view", fallback = null, children }) {
  const { can } = useCan();
  const capability = cap ?? capName(action, item);
  return can(capability) ? children : fallback;
}
