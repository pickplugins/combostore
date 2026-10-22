import PropTypes from "prop-types";
import React from "react";
import NextImage from "next/image";
import Link from "next/link";


const Image = (props) => {



	var cssSelectors = props?.cssSelectors;

	var id = props?.id;

	var options = props?.options;
	var src = options?.src ?? '';

	var link = options?.link;



	return (
		<div className={`${cssSelectors['*']?.classes}   `}>

			{src && (
				<>
					{link && (

						<Link className={`${cssSelectors['link']?.classes}`} href={link}>

							<NextImage id={id} src={src} width={200} height={200} alt={``} className={`${cssSelectors['img']?.classes}  `}
								unoptimized

							/>
						</Link>
					)}
					{!link && (

						<NextImage id={id} src={src} width={200} height={200} alt={``} className={`${cssSelectors['img']?.classes}   `}
							unoptimized

						/>

					)}





				</>


			)}


		</div>




	);
};



export default Image;
