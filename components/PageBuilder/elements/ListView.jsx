import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';


const ListView = (props) => {



	var index = props?.index


	var id = props?.id;
	var cssSelectors = props?.cssSelectors ?? {};

	var options = props?.options;
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'ul';
	var icon = options?.icon;
	var iconSize = options?.iconSize;


	const IconX = TablerIcons[icon];



	const Tag = tag;




	return (
		<Tag id={id} className={`${cssSelectors['*']?.classes}  `}

		>

			{items?.map((item, index) => {
				const ItemIcon = TablerIcons[item.icon];

				return (
					<li key={index} className={`${cssSelectors['li']?.classes} `}>

						{ItemIcon && (
							<div className={`${cssSelectors['icon']?.classes}`}>
								{ItemIcon ? <ItemIcon size={iconSize} /> : null}
							</div>
						)}
						{!ItemIcon && (
							<div className={`${cssSelectors['icon']?.classes}`}>
								{IconX ? <IconX size={iconSize} /> : null}
							</div>
						)}


						<span className={cssSelectors['text']?.classes}>{item.text}</span>

					</li>
				)

			})}


			{options?.text}

		</Tag>
	);
};



export default ListView;
