import PropTypes from "prop-types";
import React from "react";

const Text = (props) => {



	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';




	const Tag = tag;




	return (
		<Tag id={id} type={type} className={`${cssSelectors['*']?.classes}  `}

		>


			{options?.text}

		</Tag>
	);
};



export default Text;
