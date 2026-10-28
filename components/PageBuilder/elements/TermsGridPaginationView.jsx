"use client"
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { useTermsGrid } from "../context/TermsGridContext";

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


const TermsGridPaginationView = (props) => {



	var index = props?.index

	var id = props?.id;
	var type = props?.type;


	const termsGridAttr = useTermsGrid();

	var [queryPrams, setqueryPrams] = useState(termsGridAttr?.queryPrams);
	var onChangeQuery = termsGridAttr?.onChangeQuery;



	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var paged = queryPrams?.paged ? parseInt(queryPrams?.paged) : 1;




	useEffect(() => {

		if (termsGridAttr?.queryPrams) {
			setqueryPrams(termsGridAttr?.queryPrams)
		}

	}, [termsGridAttr?.queryPrams]);


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



export default TermsGridPaginationView;
