/**
 * Installed extensions.
 *
 * This is the one file you edit to install or remove an extension: import its
 * manifest and add it to the list. Everything else - the sidebar, the dashboard
 * routes, the page builder - reads the registry built from it.
 *
 * The list is static on purpose. Extensions are bundled with the app, so the
 * build sees every import and tree-shakes and code-splits normally; a dynamic
 * `import()` of a path discovered at runtime would defeat that and would mean
 * shipping a loader for code the build never checked. Turning an extension off
 * at runtime is a separate thing and lives in store/useExtensionsStore.js.
 */

import { createRegistry } from "./registry";

import loyaltyPoints from "./loyalty-points/extension.config";

/* Declaration order decides precedence when two extensions want the same nav
   value, route slug or element type: the first one keeps it and the clash is
   reported. */
const MANIFESTS = [
	loyaltyPoints,
];

export const registry = createRegistry(MANIFESTS);

export const { problems: extensionProblems, manifests: extensionManifests } = registry;

/*
	A manifest this broken is an authoring mistake, and the dashboard carries on
	without the offending extension - so the only way the author finds out is if
	something says so. Logged once per module instance rather than on every
	render of every consumer.
*/
let reported = false;

export function reportExtensionProblems() {
	if (reported || registry.problems.length === 0) return;
	reported = true;

	for (const p of registry.problems) {
		console.warn(`[extensions] ${p.id}: ${p.message}`);
	}
}

reportExtensionProblems();

export default registry;
