"use client"
import React from "react";
import { useState, useEffect } from "react";
import BlockRender from '../BlockRender';
import { CommentsGridProvider } from "../context/CommentsGridContext";
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

/*
	Storefront twin of CommentsGrid.jsx: the same wrapper and the same provider,
	minus the editor's drag and drop handling.

	Two things it does that the editor version does not, both because the
	editor only has to look right on a canvas:

		- The post id comes from PostContext, which app/product/[slug] and
			app/blog/[slug] both provide. CommentsLoop.jsx hard-codes
			`queryPrams.post_id = 10018` so the canvas has something to draw; on a
			live page that would show one fixed post's comments everywhere.
		- It hands the loop a `refresh` counter and the form an
			`onCommentSubmitted` callback, so a comment posted through
			commentsForm reloads the list beside it. The two blocks are siblings
			under this one and have no other way to reach each other.

	The query params carry the shape the rest of the app uses for this endpoint
	(see components/PageBuilder/elements/Comments.jsx), and anything set on the
	block's own options wins.
*/
const CommentsGridPaginationView = (props) => {

	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var id = props?.id;

	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};

	const postGridAttr = usePostGrid();

	var [queryPrams, setqueryPrams] = useState(postGridAttr?.queryPrams);


	var [refresh, setrefresh] = useState(0);


	useEffect(() => {



		if (postGridAttr?.queryPrams) {
			setqueryPrams(postGridAttr?.queryPrams)
		}




	}, [postGridAttr?.queryPrams]);


	return (
		<div
			id={id}
			type={type}
			className={`  ${cssSelectors['*']?.classes ?? ''}  `}

		>



			<div
				className={`${cssSelectors['previous']?.classes}  `}
				onClick={(ev) => {
					var paged = queryPrams?.paged;


					if (paged == 1) return;
					setqueryPrams({ ...queryPrams, paged: queryPrams?.paged - 1 });
				}}>
				<IconArrowNarrowLeftDashed />
			</div>

			<div>
				<input name="paged" className={`${cssSelectors['current']?.classes}  `} type="number" value={queryPrams?.paged} onChange={ev => {
					var value = parseInt(ev.target.value)
					var paged = value;

					setqueryPrams({ ...queryPrams, paged: paged });

				}} />
			</div>

			<div
				className={`${cssSelectors['next']?.classes}  `}
				onClick={(ev) => {
					var paged = queryPrams?.paged + 1;

					setqueryPrams({ ...queryPrams, paged: paged });
				}}>
				<IconArrowNarrowRightDashed />
			</div>




		</div>
	);
};

export default CommentsGridPaginationView;
