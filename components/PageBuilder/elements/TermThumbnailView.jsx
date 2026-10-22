import PropTypes from "prop-types";
import React from "react";
import { useCategory } from "../context/CategoryContext";
import Image from "next/image";
import Link from "next/link";


const TermTitle = (props) => {

	const appUrl = process.env.NEXT_PUBLIC_STORE_URL;


	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;

	var linkTo = options?.linkTo;

	const category = useCategory();
	var taxonomy = category?.taxonomy;
	var postSlug = category?.slug;



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
		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

		>



			{linkTo == 'termUrl' && (
				<Link href={`${postUrl}`}
					id={id} index={index} type={type} className={`${cssSelectors['link']?.classes}  `}

				>
					{category?.thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={category?.thumbnail?.src} width={400} height={400} alt={``} />

					)}

				</Link>

			)}
			{linkTo != 'termUrl' && (
				<>

					{category?.thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={category?.thumbnail?.src ?? '/thumb.png'} width={400} height={400} alt={``} />
					)}
					{!category?.thumbnail?.src && (
						<Image className={`${cssSelectors['image']?.classes}  `} unoptimized src={category?.thumbnail?.src ?? '/thumb.png'} width={400} height={400} alt={``} />
					)}


				</>

			)}












		</div>
	);
};



export default TermTitle;
