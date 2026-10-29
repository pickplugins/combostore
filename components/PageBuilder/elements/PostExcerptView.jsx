import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';
import { useProductStore } from "../../../store/productStore";


const PostTitleView = (props) => {

	var activeVariation = useProductStore(
		(state) => state.activeVariation
	);



	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo ?? 'postUrl';
	var readMoreText = options?.readMoreText ?? 'Read more';
	var maxWord = options?.maxWord ?? 20;
	var readMoreIcon = options?.readMoreIcon;
	var readMoreIconSize = options?.readMoreIconSize ?? 25;

	const product = usePost();

	var excerpt = product?.excerpt ?? '';



	const IconX = TablerIcons[readMoreIcon];


	return (

		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>


			{/* {JSON.stringify(activeVariation)} */}

			{activeVariation && (

				<div className={cssSelectors['excerpt']?.classes} dangerouslySetInnerHTML={{ __html: activeVariation?.description }}></div>

			)}
			{!activeVariation && (

				<>
					<div className={cssSelectors['excerpt']?.classes} dangerouslySetInnerHTML={{ __html: excerpt }}></div>

					{readMoreText && (
						<Link href={`#`} className={cssSelectors['read-more']?.classes}>
							{IconX && (
								<div className={`${cssSelectors['read-more-icon']?.classes}`}>
									{IconX ? <IconX size={readMoreIconSize} /> : null}
								</div>
							)}

							<div className={`${cssSelectors['read-more-label']?.classes}`}>
								{readMoreText}
							</div>

						</Link>
					)}
				</>

			)}







		</div>




	);
};



export default PostTitleView;
