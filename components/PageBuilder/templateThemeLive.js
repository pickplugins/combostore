import { useEffect, useState } from "react";
import { templateThemeCss, templateFontStylesheets, templateFontTokens } from "../../lib/templateTheme";

/*
	Keeps the open builder in step with the active site template's fonts and
	colors, and shares those settings with whatever needs them (the class
	picker lists the template's classes).

	The editor document's <head> holds what the root layout rendered when the
	builder loaded (components/TemplateThemeStyle.jsx): <style id="template-theme">
	and the font stylesheet <link data-template-font>s. applyTemplateTheme
	replaces them, and adds <style type="text/tailwindcss" id="template-font-tokens">
	with the custom font classes' tokens (font-<name>). The canvas clones the
	editor's styles, re-cloning whenever a <style> or <link> is added or
	removed (CanvasFrame's watchEditorStyles), and its Tailwind browser build
	reads text/tailwindcss styles - so these are replaced as new nodes rather
	than edited in place, which the canvas would not notice.
*/
export function applyTemplateTheme(meta, doc = typeof document !== "undefined" ? document : null) {
	if (!doc?.head) return;

	doc.head.querySelectorAll('style#template-theme, style#template-font-tokens, link[data-template-font]').forEach(node => node.remove());

	templateFontStylesheets(meta).forEach(href => {
		const link = doc.createElement("link");
		link.rel = "stylesheet";
		link.href = href;
		link.setAttribute("data-template-font", "");
		doc.head.appendChild(link);
	});

	const css = templateThemeCss(meta);
	if (css) {
		const style = doc.createElement("style");
		style.id = "template-theme";
		style.textContent = css;
		doc.head.appendChild(style);
	}

	const tokens = templateFontTokens(meta);
	if (tokens) {
		const style = doc.createElement("style");
		style.id = "template-font-tokens";
		style.setAttribute("type", "text/tailwindcss");
		style.textContent = tokens;
		doc.head.appendChild(style);
	}
}

/* The active template's settings, as the storefront reads them. */
export async function fetchActiveTemplateSettings() {
	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	try {
		const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_template_settings`, { cache: "no-store" });
		return res.ok ? await res.json() : null;
	} catch (e) {
		return null;
	}
}

/* ---- the active template's settings, shared within the builder ---- */

var current = null;
var pending = null;
var listeners = new Set();

function publish(settings) {
	current = settings;
	if (settings) applyTemplateTheme(settings.meta ?? {});
	listeners.forEach(listener => listener(settings));
}

/* Load the settings once per builder session (later calls share the result) and show them. */
export function loadTemplateTheme() {
	if (current) return Promise.resolve(current);
	if (!pending) {
		pending = fetchActiveTemplateSettings().then(settings => {
			pending = null;
			publish(settings);
			return settings;
		});
	}
	return pending;
}

/* The active template's settings ({ id, meta }), or null until loaded; re-renders when they change. */
export function useActiveTemplateSettings() {
	var [settings, setSettings] = useState(current);
	useEffect(() => {
		listeners.add(setSettings);
		loadTemplateTheme();
		return () => { listeners.delete(setSettings); };
	}, []);
	return settings;
}

/*
	After a save or a switch: drop the storefront's cached settings, then load
	the active template's settings again and show them in this builder (canvas,
	class picker). Errors are ignored - the storefront still catches up within a
	minute, and a reload shows the rest.
*/
export async function refreshTemplateTheme() {
	try {
		await fetch("/api/revalidate-template-settings", { method: "POST" });
	} catch (e) { }
	const settings = await fetchActiveTemplateSettings();
	if (settings) publish(settings);
	return settings;
}
