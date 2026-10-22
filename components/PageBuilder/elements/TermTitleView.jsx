import PropTypes from "prop-types";
import React from "react";
import { useCategory } from "../context/CategoryContext";
import Link from "next/link";


const TermTitleView = (props) => {

	const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var linkTo = options?.linkTo;

	const category = useCategory();
	var taxonomy = category?.taxonomy;
	var postSlug = category?.slug;


	const Tag = tag;

	var postUrl = '';

	if (taxonomy == 'product_cat') {
		postUrl = `${appUrl}categories/${postSlug}`;
	}
	if (taxonomy == 'category') {
		postUrl = `${appUrl}category/${postSlug}`;
	}
	if (taxonomy == 'product_brand') {
		postUrl = `${appUrl}brands/${postSlug}`;
	}


	return (
		<>



			{linkTo == 'termUrl' && (
				<Link href={`${postUrl}`}
					id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

					dangerouslySetInnerHTML={{ __html: category?.name }} />
			)}
			{linkTo != 'termUrl' && (
				<Tag id={id} index={index} type={type} className={`${cssSelectors['*']?.classes} `}

					dangerouslySetInnerHTML={{ __html: category?.name }}		>



				</Tag>
			)}


		</>
	);
};



export default TermTitleView;
