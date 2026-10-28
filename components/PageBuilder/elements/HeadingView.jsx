import PropTypes from "prop-types";
import React from "react";


const HeadingView = (props) => {



	var index = props?.index

	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var cssSelectors = props?.cssSelectors ?? {};




	const Tag = tag;




	return (
		<Tag id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

		>

			{options?.text}

		</Tag>
	);
};



export default HeadingView;
