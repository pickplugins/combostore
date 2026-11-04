import PropTypes from "prop-types";
import React from "react";
import { usePost } from "../context/PostContext";
import Link from "next/link";
import * as TablerIcons from '@tabler/icons-react';


const TermTitle = (props) => {










	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors ?? {}


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var label = options?.label;
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	const product = usePost();

	/* Shoppers used to see a bare "SKU:" for products without one, and the
	   builder's placeholder "CUSTOMSKU" when the field was missing. */
	var sku = String(product?.sku ?? '').trim();


	const IconX = TablerIcons[icon];



	if (!sku) return null;

	return (


		<div id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}`}
		>

			{IconX && (
				<div className={`${cssSelectors['icon']?.classes}`}>
					{IconX ? <IconX size={iconSize} /> : null}
				</div>
			)}
			<div className={`${cssSelectors['label']?.classes} `}>{label}</div>
			<div className={`${cssSelectors['sku']?.classes} `}>{sku}</div>




		</div>















	);
};



export default TermTitle;
