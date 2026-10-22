import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";


const Button = (props) => {



	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var text = options?.text ?? 'Dummy Link';
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var linkTo = options?.linkTo;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;


	const Tag = tag;

	const IconX = TablerIcons[icon];



	return (
		<>

			{linkTo == 'custom' && (

				<Link id={id} type={type} className={`${cssSelectors['*']?.classes}  `}

					href={`${url}`}


				>

					{IconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{IconX ? <IconX size={iconSize} /> : null}
						</div>
					)}



					<div className={`${cssSelectors['label']?.classes}`}>{text}</div>

				</Link>
			)}
			{linkTo != 'custom' && (
				<div id={id} type={type} className={`${cssSelectors['*']?.classes}  `}

				>

					{IconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{IconX ? <IconX size={iconSize} /> : null}
						</div>
					)}



					<div className={`${cssSelectors['label']?.classes}`}>{text}</div>

				</div>

			)}


		</>
	);
};



export default Button;
