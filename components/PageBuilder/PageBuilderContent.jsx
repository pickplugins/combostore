
"use client";

import BlockRender from './BlockRender';



const PageBuilderContent = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	var blocks = props?.blocks || [];



	return (
		<div className="">
			{blocks?.map((block, index) => (
				<BlockRender index={index} key={block.id} block={block} />
			))}

		</div>
	);
};









export default PageBuilderContent;
