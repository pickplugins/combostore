"use client";

import { useEffect, useState } from "react";
import { useCounterStore } from "../store/useCounterStore";
import { postApi } from "../components/pages/affiliateUi";

/*
  Every role a user can be given in the dashboard: the built-in ones plus the
  roles created in Settings → Roles & Permissions (from the server's
  get_role_capabilities, administrators only). Starts with the built-in list
  and adds the custom roles once they arrive.
*/
const BUILTIN = [
  { value: "customer", label: "Customer" },
  { value: "store_manager", label: "Store Manager" },
  { value: "support_agent", label: "Support Agent" },
  { value: "rider", label: "Rider" },
  { value: "seller", label: "Seller" },
  { value: "supplier", label: "Supplier" },
  { value: "affiliate", label: "Affiliate" },
];

const ADMINISTRATOR = { value: "administrator", label: "Administrator" };

let cache = null;

export function useRoleOptions({ withAdministrator = false } = {}) {
  const token = useCounterStore((s) => s.token);
  const [custom, setCustom] = useState(cache ?? []);

  useEffect(() => {
    if (!token || cache) return;
    let alive = true;
    postApi("get_role_capabilities", token, {})
      .then((res) => {
        cache = (Array.isArray(res?.roles) ? res.roles : [])
          .filter((r) => r.custom)
          .map((r) => ({ value: r.value, label: r.label, custom: true }));
        if (alive) setCustom(cache);
      })
      .catch(() => { });
    return () => { alive = false; };
  }, [token]);

  return [...BUILTIN, ...custom, ...(withAdministrator ? [ADMINISTRATOR] : [])];
}

/* Forget the cached custom roles (after creating / renaming / deleting one). */
export function resetRoleOptions() {
  cache = null;
}
