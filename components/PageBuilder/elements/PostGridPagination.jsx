import PropTypes from "prop-types";
import React from "react";
import { usePostGrid } from "../context/PostGridContext";
import { useState, useEffect } from "react";
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
const PostGridPagination = (props) => {















	const postGridAttr = usePostGrid();

	var [queryPrams, setqueryPrams] = useState(postGridAttr?.queryPrams);


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors;


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';




	const Tag = tag;

	useEffect(() => {



		if (postGridAttr?.queryPrams) {
			setqueryPrams(postGridAttr?.queryPrams)
		}




	}, [postGridAttr?.queryPrams]);


	return (
		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
			}}
			onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)}
		>

			{/* {JSON.stringify(cssSelectors)} */}



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



export default PostGridPagination;
