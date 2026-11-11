
"use client";

import BlockRender from './BlockRender';
import { AboveTheFold } from './aboveTheFold';



/*
	The page's blocks. Routes pass the header part's blocks, the page's own and
	the footer part's as one list, so the leading siteHeader blocks and the
	trailing siteFooter blocks are split off and the rest is wrapped in
	<main>: the page had no main landmark (Lighthouse: "Document does not have
	a main landmark"), which screen-reader landmark navigation relies on. A
	page with no header or footer block still gets its <main>.

	AboveTheFold marks the header and the first content block - the hero -
	so their images load eagerly instead of lazily (see aboveTheFold.js).
*/
const PageBuilderContentClient = (props) => {

	var blocks = props?.blocks || [];

	var start = 0;
	while (start < blocks.length && blocks[start]?.type === 'siteHeader') start++;
	var end = blocks.length;
	while (end > start && blocks[end - 1]?.type === 'siteFooter') end--;

	var render = (block, index) => <BlockRender index={index} key={block.id} block={block} />;

	/* cs-page: where the site template's default fonts and colors apply (lib/templateTheme.js), so they stay off the dashboard, which shares the root layout. */
	return (
		<div className="cs-page">
			<AboveTheFold.Provider value="header">
				{blocks.slice(0, start).map((block, i) => render(block, i))}
			</AboveTheFold.Provider>
			<main id="main-content">
				{blocks.slice(start, end).map((block, i) => (
					<AboveTheFold.Provider key={block.id} value={i === 0 ? 'hero' : false}>
						{render(block, start + i)}
					</AboveTheFold.Provider>
				))}
			</main>
			{blocks.slice(end).map((block, i) => render(block, end + i))}
		</div>
	);
};









export default PageBuilderContentClient;
