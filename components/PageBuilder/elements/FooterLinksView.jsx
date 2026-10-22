import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";


const FooterLinksView = (props) => {


	var index = props?.index


	var id = props?.id;

	var cssSelectors = props?.cssSelectors;
	var options = props?.options;
	var items = options?.items ?? [];
	var tag = options?.tag ?? 'li';
	var headerText = options?.headerText ?? '';




	const Tag = tag;




	return (
		<div id={id} className={`${cssSelectors['*']?.classes}  `}


		>

			<div className={`${cssSelectors['header-text']?.classes}`}>{headerText}</div>

			<Tag className={`${cssSelectors['ul']?.classes}`}

			>

				{items?.map((item, index) => {

					return (
						<li key={index} className={`${cssSelectors['li']?.classes} `}>

							<Link className={`${cssSelectors['link']?.classes} `} href={item.slug ?? '#'} onClick={ev => {

								ev.preventDefault();

							}}>
								{item.icon && (
									<span className={cssSelectors['icon']?.classes}>{item.icon}</span>

								)}
								<span className={cssSelectors['text']?.classes}>{item.text}</span>
							</Link>


						</li>
					)

				})}


				{options?.text}

			</Tag>
		</div>
	);
};



export default FooterLinksView;
