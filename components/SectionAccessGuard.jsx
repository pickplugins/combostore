"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconLock } from "@tabler/icons-react";

import { useCounterStore } from "../store/useCounterStore";
import { NAV_CAPS, can } from "../lib/rolePermissions";

/*
  Keeps a page closed when it is opened by URL by someone without its view
  capability (Roles & Permissions), not just missing from their menu. The
  server refuses the data as well (ComboStoreRolePermissions.php); this is
  the page.

  Only capability pages are guarded - /dashboard/<nav value>/..., where the
  value is in NAV_CAPS. Everything else renders as it always has.
*/
export default function SectionAccessGuard({ children }) {
  const pathname = usePathname();
  const { userDataX, userLoadError } = useCounterStore();

  /* /dashboard/<value>/... - the first segment names the nav entry. */
  const segment = pathname?.match(/^\/dashboard\/([^/]+)/)?.[1];
  const capability = segment ? NAV_CAPS[segment] : null;

  if (!capability) return children;

  /*
    No user is coming (signed out, refused or failed get_user): show the page
    as before. Signed-out visitors are sent to /login by GlobalHeader, and the
    server refuses the data anyway.
  */
  if (!Array.isArray(userDataX?.roles) && userLoadError) return children;

  /*
    Until the user (and their capabilities) is in, nothing is decided - and
    the page is not shown either, or a closed page would flash open and fire
    its data requests first. No time limit: on a slow server get_user can take
    well over ten seconds; userLoadError ends the wait when it fails.
  */
  if (!Array.isArray(userDataX?.roles)) {
    return (
      <div className="flex w-full justify-center px-4 py-16" role="status" aria-live="polite">
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-[#634FE5]" aria-hidden="true" />
        <span className="sr-only">Loading…</span>
      </div>
    );
  }

  if (can(userDataX, capability)) return children;

  return (
    <div className="mx-auto flex w-full max-w-[1200px] px-4 py-10 sm:px-6">
      <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400"><IconLock size={24} /></div>
        <div className="text-sm font-semibold text-gray-800">{("You don't have access to this section")}</div>
        <p className="max-w-sm text-xs text-gray-500">{("An administrator can give your role access in Settings → Roles & Permissions.")}</p>
        <Link href="/dashboard" className="mt-2 text-sm font-medium text-[#634FE5] hover:underline">{("Back to the dashboard")}</Link>
      </div>
    </div>
  );
}
