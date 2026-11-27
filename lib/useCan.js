"use client";

import { useCounterStore } from "../store/useCounterStore";
import { can, cap } from "./rolePermissions";

/*
  The signed-in user's ComboStore capabilities (Roles & Permissions), for a
  page's actions. The server refuses anything not allowed anyway; this keeps
  the buttons honest.

    const permit = useCan("products");          // or ["orders", "incomplete", "refunds"]
    permit.canCreate / canEdit / canDelete / canView   (any of the items)
    permit.can("cstore_edit_orders")           // one capability, or a list (any)
    <button {...permit.hide("create")}>         // hidden without it
    if (!permit.canDelete) return permit.denied();

  Until the user is loaded every check is false.
*/
export function useCan(items) {
  const user = useCounterStore((s) => s.userDataX);
  const addNotification = useCounterStore((s) => s.addNotification);
  const list = Array.isArray(items) ? items : items ? [items] : [];

  const check = (capability) => (Array.isArray(capability) ? capability.some((c) => can(user, c)) : can(user, capability));
  const action = (a) => list.some((item) => can(user, cap(a, item)));

  const allowed = (what) => {
    if (Array.isArray(what) || (typeof what === "string" && what.startsWith("cstore_"))) return check(what);
    if (what === "save") return action("create") || action("edit");
    return action(what);
  };

  return {
    can: check,
    allowed,
    canView: action("view"),
    canCreate: action("create"),
    canEdit: action("edit"),
    canDelete: action("delete"),
    /* Spread onto an element to hide it without the permission. */
    hide: (what) => (allowed(what) ? {} : { style: { display: "none" }, "aria-hidden": true }),
    /* Says why nothing happened; returns undefined so `return permit.denied()` works. */
    denied: () => {
      addNotification?.({ type: "error", title: "Not allowed", content: "Your role does not have permission for this. An administrator can change it in Settings → Roles & Permissions." });
      return undefined;
    },
  };
}
