import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


const TermTitle = (props) => {



	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var label = options?.label;
	var labelIcon = options?.labelIcon;
	var outOfStockIcon = options?.outOfStockIcon;
	var inStockIcon = options?.inStockIcon;
	var iconSize = options?.iconSize;
	var outOfStockText = options?.outOfStockText ?? 'Out of stock';
	var inStockText = options?.inStockText ?? 'In stock';
	var stock_status = options?.stock_status ?? 'instock';


	const LabelIconX = TablerIcons[labelIcon];
	const OutOfStockIconX = TablerIcons[outOfStockIcon];
	const InStockIconX = TablerIcons[inStockIcon];



	return (


		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}
		>


			{label && (
				<div className={`${cssSelectors['label']?.classes} `}>
					{LabelIconX && (
						<div className={`${cssSelectors['label-icon']?.classes}`}>
							{LabelIconX ? <LabelIconX size={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['label-text']?.classes} `}>
						{label}
					</div>

				</div>
			)}



			{stock_status == 'outofstock' && (
				<div className={`${cssSelectors['stock-status']?.classes} ${cssSelectors['out-of-stock']?.classes} `}>

					{OutOfStockIconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{OutOfStockIconX ? <OutOfStockIconX size={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['label-text']?.classes} `}>
						{outOfStockText}
					</div>


				</div>
			)}
			{stock_status == 'instock' && (
				<div className={`${cssSelectors['stock-status']?.classes} ${cssSelectors['in-stock']?.classes} `}>
					{InStockIconX && (
						<div className={`${cssSelectors['icon']?.classes}`}>
							{InStockIconX ? <InStockIconX Iize={iconSize} /> : null}
						</div>
					)}

					<div className={`${cssSelectors['label-text']?.classes} `}>
						{inStockText}
					</div>


				</div>
			)}


		</div>



	);
};



export default TermTitle;
