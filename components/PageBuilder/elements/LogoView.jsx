import PropTypes from "prop-types";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";


const Image = (props) => {



	var index = props?.index

	var cssSelectors = props?.cssSelectors ?? {};

	var id = props?.id;

	var options = props?.options;
	var src = options?.src ?? '';

	var link = options?.link;

	var logoType = options?.logoType ?? 'text';
	var logoText = options?.logoText ?? '';

	return (
		<div className={`${cssSelectors['*']?.classes}   `}>


			{(logoType == 'text') && (
				<Link className={`${cssSelectors['link']?.classes}`} href={`/`}>
					<span className={`${cssSelectors['text']?.classes}`}>{logoText}</span>
				</Link>

			)}


			{(logoType == 'image') && (
				<>
					<Link className={`${cssSelectors['link']?.classes}`} href={`/`}>

						<NextImage id={id} src={src} width={500} height={500} alt={``} className={`${cssSelectors['img']?.classes}  `}
							unoptimized

						/>
					</Link>
				</>
			)}
			{(logoType == 'both') && (
				<>
					<Link className={`${cssSelectors['link']?.classes}`} href={`/`}>

						<NextImage id={id} src={src} width={500} height={500} alt={``} className={`${cssSelectors['img']?.classes}  `}
							unoptimized

						/>
						<div className={`${cssSelectors['text']?.classes}`}>{logoText}</div>

					</Link>
				</>
			)}





		</div>




	);
};



export default Image;
