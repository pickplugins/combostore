// store/useExtensionsStore.js
import { create } from "zustand";
import registry from "../extensions";

const STORAGE_KEY = "combostore_disabled_extensions";

/*
	Which extensions are switched off is stored, not which are on.

	An extension installed later is then on by default, the way its manifest
	says, without needing the stored list migrated. The alternative - storing
	the active ids - silently hides every extension added after the list was
	written.
*/
function readDisabled() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
	} catch (e) {
		/* Private windows, blocked site data and SSR all land here. Treating it
		   as "nothing disabled" keeps the dashboard usable. */
		return [];
	}
}

function writeDisabled(ids) {
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
	} catch (e) {
		/* Not being able to remember the choice is not worth failing the click
		   over - the toggle still applies for this session. */
	}
}

export const useExtensionsStore = create((set, get) => ({

	/*
		Seeded from the manifests rather than from storage.

		The store is read while the sidebar renders, and that render happens on
		the server too, where there is no localStorage. Starting from anything
		browser-only would make the server markup and the first client render
		disagree, which React does not patch up - the same hydration trap the
		page builder's seed block ids are commented about. Stored overrides are
		applied by hydrate(), from an effect, after the first render has matched.
	*/
	activeIds: registry.defaultActiveIds,

	/* False until the stored overrides have been applied. The Extensions screen
	   waits for it before drawing switches, so they cannot flip under the user
	   a tick after the page appears. */
	hydrated: false,

	hydrate: () => {
		if (get().hydrated) return;

		const disabled = new Set(readDisabled());

		set({
			activeIds: registry.defaultActiveIds.filter((id) => !disabled.has(id)),
			hydrated: true,
		});
	},

	setExtensionEnabled: (id, enabled) => {
		const known = registry.manifests.some((m) => m.id === id);
		if (!known) return;

		const disabled = new Set(readDisabled());

		if (enabled) disabled.delete(id);
		else disabled.add(id);

		writeDisabled([...disabled]);

		set({ activeIds: registry.defaultActiveIds.filter((x) => !disabled.has(x)) });
	},
}));
