"use client";

import { useEffect, useMemo, useState } from "react";
import { IconShieldLock, IconInfoCircle, IconRestore, IconChevronDown, IconCrown, IconPlus, IconPencil, IconTrash, IconDeviceFloppy, IconCheck, IconX } from "@tabler/icons-react";
import WidgetWrapper from "./WidgetWrapper";
import { useCounterStore } from "../store/useCounterStore";
import { postApi } from "./pages/affiliateUi";
import { resetRoleOptions } from "../lib/useRoleOptions";

/*
  Settings → Roles & Permissions.

  Roles and their ComboStore capabilities live on the WordPress roles, not in
  the store settings, so this panel loads and saves them itself
  (ComboStoreRolePermissions.php: get_role_capabilities,
  update_role_capabilities, create_role, rename_role, delete_role) and has
  its own Save button; the page's Save does not touch it.

  Per role, each menu item has up to four capabilities - View (menu and
  pages), Create, Edit, Delete. Built-in roles can only be given the items
  they have always had (plus the rider / supplier grants); roles created here
  can be given anything in the list.
*/

const ACTION_LABELS = { view: "View", create: "Create", edit: "Edit", delete: "Delete" };

const GRANT_NOTES = {
  rider: "Riders see only the deliveries assigned to them, read-only.",
  supplier: "Suppliers see only the purchases made from them, read-only.",
};

const BUTTON = "inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-50";
const PRIMARY = "inline-flex items-center gap-1.5 rounded-lg bg-[#634FE5] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#5340d0] disabled:opacity-50";
const LINK_BUTTON = "rounded-md px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900";
const INPUT = "!shadow-none !border !border-gray-300 !bg-white w-full rounded-lg px-3 py-1.5 text-sm text-gray-800 focus:!border-[#634FE5] focus:!ring-2 focus:!ring-[#634FE5]/20";

export default function RolePermissionsPanel({ cardClassName = "" }) {

  const token = useCounterStore((s) => s.token);

  const [catalog, setCatalog] = useState([]);
  const [actions, setActions] = useState(["view", "create", "edit", "delete"]);
  const [roles, setRoles] = useState([]);
  /* role -> Set of capabilities as edited (unsaved). */
  const [draft, setDraft] = useState({});
  const [state, setState] = useState("loading"); /* loading | ready | error */
  const [message, setMessage] = useState(null); /* { tone, text } */
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState({});
  const [newRole, setNewRole] = useState("");
  const [renaming, setRenaming] = useState(null); /* { role, label } */
  const [deleting, setDeleting] = useState(null);

  function applyRoles(list) {
    setRoles(list);
    setDraft(Object.fromEntries(list.map(r => [r.value, new Set(r.caps)])));
  }

  useEffect(() => {
    if (!token) return;
    let alive = true;
    setState("loading");
    postApi("get_role_capabilities", token, {})
      .then((res) => {
        if (!alive) return;
        setCatalog(Array.isArray(res?.catalog) ? res.catalog : []);
        if (Array.isArray(res?.actions)) setActions(res.actions);
        const list = Array.isArray(res?.roles) ? res.roles : [];
        applyRoles(list);
        setOpen(o => (Object.keys(o).length ? o : { [list[0]?.value]: true }));
        setState("ready");
      })
      .catch((e) => { if (alive) { setState("error"); setMessage({ tone: "error", text: e.message }); } });
    return () => { alive = false; };
  }, [token]);

  /* Roles whose draft differs from what is saved. */
  const changedRoles = useMemo(() => roles.filter(r => {
    const d = draft[r.value];
    if (!d) return false;
    return d.size !== r.caps.length || r.caps.some(c => !d.has(c));
  }), [roles, draft]);

  function setCaps(role, updates) {
    setDraft(prev => {
      const next = new Set(prev[role] ?? []);
      Object.entries(updates).forEach(([c, on]) => (on ? next.add(c) : next.delete(c)));
      return { ...prev, [role]: next };
    });
    setMessage(null);
  }

  /*
    Ticking Create / Edit / Delete also ticks View (the page they happen on);
    unticking View unticks the rest of the item.
  */
  function toggle(role, item, action, eligible) {
    const capability = item.caps[action];
    const on = !draft[role]?.has(capability);
    const updates = { [capability]: on };
    if (action === "view" && !on) {
      Object.values(item.caps).forEach(c => { updates[c] = false; });
    }
    if (action !== "view" && on && item.caps.view && eligible.has(item.caps.view)) {
      updates[item.caps.view] = true;
    }
    setCaps(role, updates);
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    try {
      let latest = null;
      for (const r of changedRoles) {
        const d = draft[r.value];
        const caps = {};
        r.eligible.forEach(c => { caps[c] = d.has(c); });
        latest = await postApi("update_role_capabilities", token, { role: r.value, caps });
      }
      if (latest?.roles) applyRoles(latest.roles);
      setMessage({ tone: "success", text: "Roles & permissions saved. Users get the change on their next page load." });
    } catch (e) {
      setMessage({ tone: "error", text: e.message });
    }
    setSaving(false);
  }

  async function roleAction(route, body, after) {
    setMessage(null);
    try {
      const res = await postApi(route, token, body);
      resetRoleOptions(); /* the Users page's role lists pick up the change */
      if (res?.roles) {
        /* Keep unsaved edits of the other roles. */
        const kept = draft;
        setRoles(res.roles);
        setDraft(Object.fromEntries(res.roles.map(r => [r.value, kept[r.value] && r.value !== body.role ? kept[r.value] : new Set(r.caps)])));
      }
      after?.(res);
    } catch (e) {
      setMessage({ tone: "error", text: e.message });
    }
  }

  function createRole(ev) {
    ev.preventDefault();
    const label = newRole.trim();
    if (!label) return;
    roleAction("create_role", { label }, (res) => {
      setNewRole("");
      if (res?.role) setOpen(o => ({ ...o, [res.role]: true }));
      setMessage({ tone: "success", text: `Role "${label}" created. Tick what it may do, then Save.` });
    });
  }

  const allExpanded = roles.length > 0 && roles.every(r => open[r.value]);

  return (
    <div className="flex flex-col gap-5">
      <WidgetWrapper className={cardClassName} title="Roles & Permissions">
        <div className="flex flex-col gap-4">

          <div className="flex items-start gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2.5 text-xs text-blue-800">
            <IconInfoCircle size={16} className="mt-px shrink-0" />
            <div className="flex flex-col gap-1">
              <span>
                Choose what each role may do with each menu item: <b>View</b> shows it in the menu and opens its pages,
                <b> Create</b>, <b>Edit</b> and <b>Delete</b> allow those actions. The server enforces them.
              </span>
              <span>
                Capabilities are named <code className="rounded bg-white/70 px-1">cstore_view_products</code>,{" "}
                <code className="rounded bg-white/70 px-1">cstore_edit_orders</code> and so on. Built-in roles can only be given
                the items they have always had; roles you create can be given anything.
              </span>
            </div>
          </div>

          {state === "loading" && (
            <div className="flex justify-center py-10" role="status">
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-[#634FE5]" aria-hidden="true" />
              <span className="sr-only">Loading roles…</span>
            </div>
          )}

          {message && (
            <div role="status" className={`rounded-lg px-3 py-2 text-xs ${message.tone === "error" ? "border border-red-200 bg-red-50 text-red-700" : "border border-emerald-200 bg-emerald-50 text-emerald-800"}`}>
              {message.text}
            </div>
          )}

          {state === "ready" && (
            <>
              <form onSubmit={createRole} className="flex flex-col gap-2 rounded-xl border border-dashed border-gray-300 p-3 sm:flex-row sm:items-end">
                <div className="min-w-0 flex-1">
                  <label htmlFor="new-role-name" className="mb-1 block text-xs font-medium text-gray-600">New role</label>
                  <input id="new-role-name" className={INPUT} placeholder="e.g. Inventory Clerk" value={newRole} maxLength={60}
                    onChange={(ev) => setNewRole(ev.target.value)} />
                </div>
                <button type="submit" className={PRIMARY} disabled={!newRole.trim()}>
                  <IconPlus size={14} /> Add role
                </button>
              </form>

              <div className="flex justify-end">
                <button type="button" className={LINK_BUTTON} onClick={() => setOpen(Object.fromEntries(roles.map(r => [r.value, !allExpanded])))}>
                  {allExpanded ? "Collapse all" : "Expand all"}
                </button>
              </div>

              <div className="flex flex-col gap-3">

                {/* Administrators: fixed, nothing to choose. */}
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#634FE5]/10 text-[#634FE5]"><IconCrown size={18} /></span>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-900">Administrator</div>
                    <div className="text-xs text-gray-500">Always has every capability, and every admin-only section.</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600">Everything</span>
                </div>

                {roles.map(role => (
                  <RoleCard
                    key={role.value}
                    role={role}
                    catalog={catalog}
                    actions={actions}
                    caps={draft[role.value] ?? new Set()}
                    changed={changedRoles.some(r => r.value === role.value)}
                    isOpen={!!open[role.value]}
                    onToggleOpen={() => setOpen(o => ({ ...o, [role.value]: !o[role.value] }))}
                    onToggle={(item, action, eligible) => toggle(role.value, item, action, eligible)}
                    onSetAll={(on) => setCaps(role.value, Object.fromEntries(role.eligible.map(c => [c, on])))}
                    renaming={renaming?.role === role.value ? renaming : null}
                    onStartRename={() => setRenaming({ role: role.value, label: role.label })}
                    onRenameChange={(label) => setRenaming({ role: role.value, label })}
                    onRenameCancel={() => setRenaming(null)}
                    onRenameSave={() => roleAction("rename_role", { role: role.value, label: renaming.label }, () => setRenaming(null))}
                    deleting={deleting === role.value}
                    onStartDelete={() => setDeleting(role.value)}
                    onDeleteCancel={() => setDeleting(null)}
                    onDeleteConfirm={() => roleAction("delete_role", { role: role.value }, () => {
                      setDeleting(null);
                      setMessage({ tone: "success", text: `Role "${role.label}" deleted.${role.users ? " Its users are now customers." : ""}` });
                    })}
                  />
                ))}
              </div>

              <div className="sticky bottom-0 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-white/95 py-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <IconShieldLock size={14} className="shrink-0" />
                  {changedRoles.length
                    ? `Unsaved changes: ${changedRoles.map(r => r.label).join(", ")}`
                    : "Only an administrator can change these."}
                </div>
                <div className="flex items-center gap-2">
                  {changedRoles.length > 0 && (
                    <button type="button" className={BUTTON} disabled={saving} onClick={() => applyRoles(roles)}>
                      <IconRestore size={14} /> Discard
                    </button>
                  )}
                  <button type="button" className={PRIMARY} disabled={saving || changedRoles.length === 0} onClick={save}>
                    <IconDeviceFloppy size={14} /> {saving ? "Saving…" : "Save permissions"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </WidgetWrapper>
    </div>
  );
}

function RoleCard({
  role, catalog, actions, caps, changed, isOpen, onToggleOpen, onToggle, onSetAll,
  renaming, onStartRename, onRenameChange, onRenameCancel, onRenameSave,
  deleting, onStartDelete, onDeleteCancel, onDeleteConfirm,
}) {
  const eligible = useMemo(() => new Set(role.eligible), [role.eligible]);
  const panelId = `role-caps-${role.value}`;

  /* Only the sections and items this role can be given anything in. */
  const sections = catalog
    .map(section => ({ ...section, items: section.items.filter(item => Object.values(item.caps).some(c => eligible.has(c))) }))
    .filter(section => section.items.length > 0);
  const unavailable = catalog.filter(section => !sections.some(s => s.value === section.value));

  const onCount = role.eligible.filter(c => caps.has(c)).length;
  const allOn = role.eligible.length > 0 && onCount === role.eligible.length;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

      <div className="flex flex-wrap items-center gap-3 px-4 py-3">
        {renaming ? (
          <form className="flex min-w-0 flex-1 items-center gap-2" onSubmit={(ev) => { ev.preventDefault(); onRenameSave(); }}>
            <label htmlFor={`${panelId}-rename`} className="sr-only">Role name</label>
            <input id={`${panelId}-rename`} className={INPUT} value={renaming.label} maxLength={60} autoFocus
              onChange={(ev) => onRenameChange(ev.target.value)} />
            <button type="submit" className={PRIMARY} disabled={!renaming.label.trim()} aria-label="Save name"><IconCheck size={14} /></button>
            <button type="button" className={BUTTON} onClick={onRenameCancel} aria-label="Cancel rename"><IconX size={14} /></button>
          </form>
        ) : (
          <button type="button" onClick={onToggleOpen} aria-expanded={isOpen} aria-controls={panelId}
            className="flex min-w-0 flex-1 items-center gap-3 text-left">
            <IconChevronDown size={18} className={`shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-2 font-medium text-gray-900">
                {role.label}
                {role.custom && <span className="rounded-full bg-[#634FE5]/10 px-2 py-px text-[11px] font-semibold text-[#634FE5]">Custom</span>}
                {role.value === "customer" && <span className="text-xs font-normal text-gray-500">menu only</span>}
                {changed && <span className="rounded-full bg-amber-100 px-2 py-px text-[11px] font-semibold text-amber-800">Unsaved</span>}
              </span>
              <span className="block text-xs text-gray-500">
                {onCount} of {role.eligible.length} capabilities · {role.users} {role.users === 1 ? "user" : "users"}
                <span className="ml-1 font-mono text-[11px] text-gray-400">{role.value}</span>
              </span>
            </span>
          </button>
        )}

        {!renaming && (
          <div className="flex shrink-0 items-center gap-1">
            {role.eligible.length > 0 && (
              <button type="button" className={LINK_BUTTON} onClick={() => onSetAll(!allOn)}>{allOn ? "None" : "All"}</button>
            )}
            {role.custom && !deleting && (
              <>
                <button type="button" className={LINK_BUTTON} onClick={onStartRename} aria-label={`Rename ${role.label}`}><IconPencil size={14} /></button>
                <button type="button" className={`${LINK_BUTTON} hover:!text-red-600`} onClick={onStartDelete} aria-label={`Delete ${role.label}`}><IconTrash size={14} /></button>
              </>
            )}
          </div>
        )}
      </div>

      {deleting && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-red-100 bg-red-50 px-4 py-2.5 text-xs text-red-800">
          <span>Delete the role “{role.label}”?{role.users ? ` Its ${role.users} ${role.users === 1 ? "user becomes a customer" : "users become customers"}.` : ""}</span>
          <span className="flex gap-2">
            <button type="button" className={BUTTON} onClick={onDeleteCancel}>Cancel</button>
            <button type="button" className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700" onClick={onDeleteConfirm}>
              <IconTrash size={14} /> Delete role
            </button>
          </span>
        </div>
      )}

      {isOpen && (
        <div id={panelId} className="border-t border-gray-100">
          {role.value === "customer" && (
            <div className="bg-amber-50 px-4 py-2 text-xs text-amber-800">
              This only changes the dashboard menu. Customers' own orders and account pages on the storefront keep working.
            </div>
          )}
          {GRANT_NOTES[role.value] && (
            <div className="bg-[#634FE5]/5 px-4 py-2 text-xs text-[#634FE5]">{GRANT_NOTES[role.value]}</div>
          )}

          {sections.length === 0 ? (
            <div className="px-4 py-4 text-xs text-gray-500">This role has no ComboStore dashboard sections.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[28rem] text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-wide text-gray-500">
                    <th scope="col" className="px-4 py-2 text-left font-medium">Menu item</th>
                    {actions.map(a => <th key={a} scope="col" className="w-16 px-1 py-2 text-center font-medium">{ACTION_LABELS[a] ?? a}</th>)}
                  </tr>
                </thead>
                {sections.map(section => (
                  <tbody key={section.value} className="border-t border-gray-100">
                    <tr className="bg-gray-50/70">
                      <th scope="colgroup" colSpan={actions.length + 1} className="px-4 py-1.5 text-left text-xs font-semibold text-gray-700">{section.label}</th>
                    </tr>
                    {section.items.map(item => (
                      <tr key={item.key} className="hover:bg-gray-50/60">
                        <th scope="row" className="px-4 py-1.5 text-left font-normal text-gray-800">{item.label}</th>
                        {actions.map(action => {
                          const capability = item.caps[action];
                          if (!capability || !eligible.has(capability)) {
                            return <td key={action} className="px-1 py-1.5 text-center text-gray-300" aria-label="Not available">–</td>;
                          }
                          const on = caps.has(capability);
                          return (
                            <td key={action} className="px-1 py-1.5 text-center">
                              <input type="checkbox" checked={on} title={capability}
                                aria-label={`${role.label}: ${ACTION_LABELS[action]} ${item.label}`}
                                onChange={() => onToggle(item, action, eligible)}
                                className="h-4 w-4 cursor-pointer accent-[#634FE5]" />
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          )}

          {unavailable.length > 0 && sections.length > 0 && (
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-2.5 text-xs text-gray-500">
              Not available to {role.label}: {unavailable.map(s => s.label).join(", ")}.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
