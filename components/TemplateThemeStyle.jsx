import { templateThemeCss, templateFontStylesheets } from "@/lib/templateTheme";

/*
	The active site template's fonts and colors, for <head> (app/layout.jsx):
	a <link> per font stylesheet (Google Fonts and the like) and a <style>
	with the @font-face rules, the --cs-* values behind the Tailwind tokens
	(font-heading, bg-primary, ...) and the default page fonts and colors.
	See lib/templateTheme.js.

	Fetched from combo-store/v2/get_template_settings and kept for a minute,
	so a change in Template Settings shows within about that long. Renders
	nothing when the request fails or nothing is set.
*/
async function getTemplateSettings() {
	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	if (!serverUrl) return null;
	try {
		const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_template_settings`, {
			method: "GET",
			next: { revalidate: 60, tags: ["template-settings"] },
		});
		if (!res.ok) return null;
		return await res.json();
	} catch (e) {
		return null;
	}
}

export default async function TemplateThemeStyle() {
	const settings = await getTemplateSettings();
	const meta = settings?.meta ?? {};

	const stylesheets = templateFontStylesheets(meta);
	const css = templateThemeCss(meta);

	if (!stylesheets.length && !css) return null;

	return (
		<>
			{stylesheets.some(href => href.startsWith("https://fonts.googleapis.com")) && (
				<>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				</>
			)}
			{/* data-template-font: the builder replaces these when the template's fonts change (components/PageBuilder/templateThemeLive.js). */}
			{stylesheets.map(href => <link key={href} rel="stylesheet" href={href} data-template-font="" />)}
			{css && <style id="template-theme" dangerouslySetInnerHTML={{ __html: css }} />}
		</>
	);
}
