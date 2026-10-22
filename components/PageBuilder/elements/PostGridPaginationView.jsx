"use client"
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import { usePostGrid } from "../context/PostGridContext";
import {
	IconCheckbox,
	IconSquare,
	IconArrowNarrowLeftDashed,
	IconArrowNarrowRightDashed,
	IconRefresh,
	IconLink,
	IconSortDescending,
	IconSortAscending,
} from "@tabler/icons-react";
const TextView = (props) => {



	var index = props?.index

	var id = props?.id;
	var type = props?.type;


	const postGridAttr = usePostGrid();

	var [queryPrams, setqueryPrams] = useState(postGridAttr?.queryPrams);
	var onChangeQuery = postGridAttr?.onChangeQuery;



	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var paged = queryPrams?.paged ? parseInt(queryPrams?.paged) : 1;




	const Tag = tag;

	useEffect(() => {

		if (postGridAttr?.queryPrams) {
			setqueryPrams(postGridAttr?.queryPrams)
		}

	}, [postGridAttr?.queryPrams]);
	useEffect(() => {

		onChangeQuery(queryPrams);


	}, [queryPrams]);





	return (
		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes}  `}


		>

			<div
				className={`${cssSelectors['previous']?.classes}  `}
				onClick={(ev) => {

					if (paged == 1) return;
					setqueryPrams({ ...queryPrams, paged: paged - 1 });
				}}>
				<IconArrowNarrowLeftDashed />
			</div>

			<div>
				<input name="paged" className={`${cssSelectors['current']?.classes}  `} type="number" value={paged} onChange={ev => {
					var value = parseInt(ev.target.value)
					var paged = value;

					setqueryPrams({ ...queryPrams, paged: paged });

				}} />
			</div>

			<div
				className={`${cssSelectors['next']?.classes}  `}
				onClick={(ev) => {

					setqueryPrams({ ...queryPrams, paged: paged + 1 });
				}}>
				<IconArrowNarrowRightDashed />
			</div>




		</div>
	);
};



export default TextView;
