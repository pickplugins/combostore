import PropTypes from "prop-types";
import React from "react";
import { useCategory } from "../context/CategoryContext";


const TermCountView = (props) => {

	var index = props?.index
	var name = props?.name


	var id = props?.id;
	var type = props?.type;

	var cssSelectors = props?.cssSelectors ?? {};

	var options = props?.options;
	var tag = options?.tag ?? 'h1';


	const category = useCategory();


	const Tag = tag;




	return (
		<Tag id={id} index={index} type={type} className={`${cssSelectors['*']?.classes}  `}

			dangerouslySetInnerHTML={{ __html: category?.count }}		>



		</Tag>
	);
};



export default TermCountView;
