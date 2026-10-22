/**
 * Extension registry for the ComboStore dashboard.
 *
 * An extension is a folder under `extensions/` with a manifest that says what
 * it contributes. Core reads the registry; nothing in core is edited to add
 * one. The six places that consume it are:
 *
 *   components/Sidebar.jsx                    nav entries
 *   app/dashboard/[...slug]/page.jsx          dashboard screens
 *   components/PageBuilder/ElementsDefinition.js   builder block definitions
 *   components/PageBuilder/BlockPreview.jsx        builder block renderers
 *   components/PageBuilder/ElementOptions.jsx      builder options panels
 *   components/PageBuilder/ElementLayouts.jsx      builder layout presets
 *
 * This module validates the *shape* of a manifest and nothing else. Collisions
 * with core are settled where the merge happens, because that is the only place
 * that knows what core has: Sidebar owns NAVS, ElementsDefinition owns the
 * element types. Checking them here would mean importing those modules, and
 * ElementsDefinition already imports this one.
 *
 * A manifest that fails validation is dropped rather than partially applied,
 * and the reason is collected in `problems`. One bad extension must not take
 * the dashboard down with it.
 */

/* Only these keys are read. Anything else in a manifest is ignored rather than
   rejected, so an extension can keep its own bookkeeping alongside. */
const KNOWN_KEYS = [
	"id", "name", "version", "description", "enabled",
	"nav", "routes", "elements", "settings",
];

function isPlainObject(v) {
	return typeof v === "object" && v !== null && !Array.isArray(v);
}

/* A component can be a function or, for React.memo / forwardRef results, an
   object with a $$typeof tag. */
function isComponent(v) {
	return typeof v === "function" || (isPlainObject(v) && "$$typeof" in v);
}

function validateNavItem(item, index) {
	if (!isPlainObject(item)) return `nav[${index}] is not an object`;
	if (!item.value || typeof item.value !== "string") return `nav[${index}] needs a string \`value\``;
	if (!item.label || typeof item.label !== "string") return `nav[${index}] needs a string \`label\``;
	/*
		`roles` is not optional, and a missing one is not cosmetic: ToggleNavs
		calls hasRoleAccessed(nav.roles), which runs `navsRoles.includes(...)`
		inside a `.some` callback. Undefined there throws and takes out the whole
		sidebar, so it is rejected here instead.
	*/
	if (!Array.isArray(item.roles) || item.roles.length === 0) {
		return `nav[${index}] ("${item.value}") needs a non-empty \`roles\` array`;
	}
	return null;
}

/*
	The palette groups ElementsList.jsx draws, which are the only ones that
	appear. It buckets anything with a missing or unrecognised `group` under
	"other" and then renders `groups.map(...)`, which has no "other" entry - so
	the element is registered, draggable from nowhere, and invisible. Worth a
	warning rather than silence.
*/
const PALETTE_GROUPS = ["text", "layout", "content", "product", "shop", "invoice"];

function validateElement(entry, index) {
	if (!isPlainObject(entry)) return `elements[${index}] is not an object`;
	if (!isPlainObject(entry.definition)) return `elements[${index}] needs a \`definition\` object`;
	const type = entry.definition.type;
	if (!type || typeof type !== "string") return `elements[${index}] needs \`definition.type\``;
	if (!isComponent(entry.render)) return `elements[${index}] ("${type}") needs a \`render\` component`;
	if (entry.options !== undefined && !isComponent(entry.options)) {
		return `elements[${index}] ("${type}") has an \`options\` that is not a component`;
	}
	if (entry.layouts !== undefined && !Array.isArray(entry.layouts)) {
		return `elements[${index}] ("${type}") has a \`layouts\` that is not an array`;
	}
	return null;
}

/**
 * Validate one manifest.
 *
 * Returns `{ manifest }` or `{ error }`. Never throws: a manifest arrives from
 * an extension author, so a malformed one is data to report, not a crash.
 */
export function validateManifest(raw) {
	if (!isPlainObject(raw)) return { error: "manifest is not an object" };

	const id = raw.id;
	if (!id || typeof id !== "string") return { error: "manifest needs a string `id`" };
	if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) {
		return { error: `id "${id}" must be lower-case letters, digits and dashes` };
	}

	if (raw.nav !== undefined) {
		if (!Array.isArray(raw.nav)) return { error: `"${id}": \`nav\` must be an array` };
		for (let i = 0; i < raw.nav.length; i++) {
			const problem = validateNavItem(raw.nav[i], i);
			if (problem) return { error: `"${id}": ${problem}` };
		}
	}

	if (raw.routes !== undefined) {
		if (!isPlainObject(raw.routes)) return { error: `"${id}": \`routes\` must be an object of slug -> component` };
		for (const [slug, component] of Object.entries(raw.routes)) {
			if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
				return { error: `"${id}": route slug "${slug}" must be lower-case letters, digits and dashes` };
			}
			if (!isComponent(component)) return { error: `"${id}": route "${slug}" is not a component` };
		}
	}

	if (raw.elements !== undefined) {
		if (!Array.isArray(raw.elements)) return { error: `"${id}": \`elements\` must be an array` };
		for (let i = 0; i < raw.elements.length; i++) {
			const problem = validateElement(raw.elements[i], i);
			if (problem) return { error: `"${id}": ${problem}` };
		}
	}

	if (raw.settings !== undefined && !isComponent(raw.settings)) {
		return { error: `"${id}": \`settings\` is not a component` };
	}

	return {
		manifest: {
			id,
			name: typeof raw.name === "string" && raw.name ? raw.name : id,
			version: typeof raw.version === "string" ? raw.version : "0.0.0",
			description: typeof raw.description === "string" ? raw.description : "",
			/* Opt out by saying so; the common case is an extension that is on
			   because it was installed. */
			enabled: raw.enabled !== false,
			nav: raw.nav ?? [],
			routes: raw.routes ?? {},
			elements: raw.elements ?? [],
			settings: raw.settings ?? null,
			unknownKeys: Object.keys(raw).filter((k) => !KNOWN_KEYS.includes(k)),
		},
	};
}

/**
 * Build a registry from a list of manifests.
 *
 * The accessors all take the set of active extension ids, rather than reading
 * activation themselves: activation is runtime state that lives in a store, and
 * a registry that reached for it could not be tested or rendered on the server.
 */
export function createRegistry(rawManifests) {
	const manifests = [];
	const problems = [];
	const seen = new Set();

	for (const raw of Array.isArray(rawManifests) ? rawManifests : []) {
		const { manifest, error } = validateManifest(raw);

		if (error) {
			problems.push({ id: raw?.id ?? "(unknown)", message: error });
			continue;
		}
		if (seen.has(manifest.id)) {
			problems.push({ id: manifest.id, message: `duplicate extension id "${manifest.id}" - the later one is ignored` });
			continue;
		}

		seen.add(manifest.id);
		manifests.push(manifest);
	}

	/* Two extensions claiming the same nav value would have one silently
	   overwrite the other in ToggleNavs' lookup map, and the same slug would
	   make one screen unreachable. Reported once, here, where both are visible. */
	const navOwners = new Map();
	const slugOwners = new Map();
	const typeOwners = new Map();

	for (const m of manifests) {
		for (const item of m.nav) {
			if (navOwners.has(item.value)) {
				problems.push({ id: m.id, message: `nav value "${item.value}" is already used by "${navOwners.get(item.value)}"` });
			} else navOwners.set(item.value, m.id);
		}
		for (const slug of Object.keys(m.routes)) {
			if (slugOwners.has(slug)) {
				problems.push({ id: m.id, message: `route "${slug}" is already used by "${slugOwners.get(slug)}"` });
			} else slugOwners.set(slug, m.id);
		}
		for (const entry of m.elements) {
			const type = entry.definition.type;
			if (typeOwners.has(type)) {
				problems.push({ id: m.id, message: `element type "${type}" is already used by "${typeOwners.get(type)}"` });
			} else typeOwners.set(type, m.id);

			const groups = entry.definition.group;
			const placed = Array.isArray(groups) && groups.some((g) => PALETTE_GROUPS.includes(g));
			if (!placed) {
				problems.push({
					id: m.id,
					message: `element "${type}" has no recognised \`definition.group\` (one of ${PALETTE_GROUPS.join(", ")}), so it will not appear in the palette`,
				});
			}
		}
	}

	const activeOnly = (activeIds) => {
		const set = activeIds instanceof Set ? activeIds : new Set(activeIds ?? []);
		return manifests.filter((m) => set.has(m.id));
	};

	return {
		manifests,
		problems,

		/* What activation starts as before any stored override is applied.
		   Server and first client render both use this, which is what keeps the
		   sidebar from hydrating against different markup. */
		defaultActiveIds: manifests.filter((m) => m.enabled).map((m) => m.id),

		navItems(activeIds) {
			return activeOnly(activeIds).flatMap((m) =>
				m.nav.map((item) => ({ ...item, extensionId: m.id })));
		},

		/* `null` when nothing claims the slug, which the catch-all turns into a
		   not-found rather than an empty screen. */
		routeFor(slug, activeIds) {
			for (const m of activeOnly(activeIds)) {
				if (Object.prototype.hasOwnProperty.call(m.routes, slug)) {
					return { Component: m.routes[slug], manifest: m };
				}
			}
			return null;
		},

		elementDefinitions(activeIds) {
			return activeOnly(activeIds).flatMap((m) =>
				m.elements.map((e) => e.definition));
		},

		elementRenderers(activeIds) {
			const out = {};
			for (const m of activeOnly(activeIds)) {
				for (const e of m.elements) out[e.definition.type] = e.render;
			}
			return out;
		},

		elementOptions(activeIds) {
			const out = {};
			for (const m of activeOnly(activeIds)) {
				for (const e of m.elements) if (e.options) out[e.definition.type] = e.options;
			}
			return out;
		},

		elementLayouts(activeIds) {
			const out = {};
			for (const m of activeOnly(activeIds)) {
				for (const e of m.elements) if (e.layouts) out[e.definition.type] = e.layouts;
			}
			return out;
		},
	};
}
