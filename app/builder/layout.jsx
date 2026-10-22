import Script from "next/script";

import { TAILWIND_BROWSER_SRC } from "../../components/PageBuilder/canvasRuntime";

/*
  The builder is a full-bleed editor: no sidebar, no global header.

  It used to render its own <html>/<body> just to get the Tailwind browser
  build into <head>. Nested <html> is dropped by the parser anyway, and only
  the root layout may own the document, so the CDN build loads through
  next/script instead. `afterInteractive` is enough - @tailwindcss/browser
  watches the DOM for class changes after it boots, which is exactly how it
  picks up the classes the builder writes into page data at runtime.

  This copy is for the runtime classes in the editor's own document: the
  element palette and the template thumbnails. The canvas loads a second copy
  inside its frame, because the build only compiles what it finds in the
  document it was loaded into, and the blocks are not in this one any more.
*/
export const metadata = {
	title: "Page Builder",
};

export default function BuilderLayout({ children }) {
	return (
		<>
			<Script
				src={TAILWIND_BROWSER_SRC}
				strategy="afterInteractive"
			/>
			{children}
		</>
	);
}
