
"use client";

import BlockRender from './BlockRender';



const PageBuilderContent = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	var blocks = props?.blocks || [];



	/* cs-page: where the site template's default fonts and colors apply (lib/templateTheme.js), so they stay off the dashboard, which shares the root layout. */
	return (
		<div className="cs-page">
			{blocks?.map((block, index) => (
				<BlockRender index={index} key={block.id} block={block} />
			))}

		</div>
	);
};









export default PageBuilderContent;
