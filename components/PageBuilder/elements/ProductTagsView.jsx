import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


const TermTitle = (props) => {










	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var label = options?.label;
	var readmore = options?.readmore ?? 'Read more';
	var maxWord = options?.maxWord ?? 20;


	const product = usePost();

	var tags = product?.tags ?? [{ slug: 'tag-slug', name: 'Tag Name' }, { slug: 'tag-slug2', name: 'Tag Name 2' }];

	const Tag = tag;




	return (


		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>
			{(label && tags?.length > 0) && (
				<div className={cssSelectors['label']?.classes}>{options?.label}</div>
			)}


			{tags?.length > 0 && (

				<div className={cssSelectors['items']?.classes}>




					{tags.map((item, index) => {
						return (
							<Link key={index} href={`${appUrl}tags/${item.slug}`} className={cssSelectors['item']?.classes}>
								<span className={cssSelectors['category-name']?.classes}>{item.name}</span>
								{tags?.length > (index + 1) && (
									<span className={cssSelectors['separator']?.classes}>, </span>
								)}
							</Link>
						)
					})}
				</div>

			)}



		</div>















	);
};



export default TermTitle;
