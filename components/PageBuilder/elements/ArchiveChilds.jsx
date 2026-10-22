import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import { useCategory } from "../context/CategoryContext";
import Link from "next/link";
import { useParams } from "next/navigation";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ArchiveTitle = async (props) => {

	const params = useParams();

	const slug = params.slug;
	const lastParam = slug?.[slug.length - 1];

	console.log(lastParam); // "large-diapers"


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var name = props?.name
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var type = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var prefix = options?.prefix;

	const category = useCategory();


	const Tag = tag;

	const [archiveData, setarchiveData] = useState({});





	function fetchTermData() {

		var postData = JSON.stringify({ slug: lastParam, taxonomy: 'product_cat', parent: true });

		fetch(serverUrl + "wp-json/combo-store/v2/get_term", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				// 'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {





						console.log(res);








						//setarchiveData(termsX)


						setTimeout(() => {
						}, 500);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	useEffect(() => {
		fetchTermData();
	}, []);






	var childtermPostData = {
		hierarchical: false,
		taxonomy: 'product_cat',
		parent: parseInt(termData?.term?.term_id),
	};
	childtermPostData = JSON.stringify(childtermPostData);





	const reschildTerms = await fetch(`${serverUrl}wp-json/combo-store/v2/get_terms`, {
		method: "POST",
		// cache: "no-store", // disables caching

		headers: {
			'Content-Type': 'application/json',
		},
		body: childtermPostData,
	});

	const childTermsData = await reschildTerms.json();








	return (




		<div draggable id={id} index={index} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200 ' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400 relative' : ''} `}
			onClick={e => {
				e.preventDefault();

				e.stopPropagation();


				setSelectedId(selectedId != id ? id : null);
			}}
			onDragStart={e => {
				e.stopPropagation();
				e.dataTransfer.setData("canvasBlock", id);
				setDraggingBlock(id);
			}}
			onDragEnd={() => {
				setDraggingBlock(null);
				setDragOverIndex(null);
			}}

			onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
			onDragLeave={() => setDragOverIndex(null)} >
			{label && (
				<div className={cssSelectors['label']?.classes}>{options?.label}</div>
			)}


			{childTerms?.terms?.length > 0 && (

				<div className={cssSelectors['items']?.classes}>




					{childTerms?.terms.map((item, index) => {
						return (
							<Link key={index} href={`${appUrl}categories/${item.slug}`} className={cssSelectors['item']?.classes}>
								<span className={cssSelectors['category-name']?.classes}>{item.name}</span>
								{childTerms?.terms?.length > (index + 1) && (
									<span className={cssSelectors['separator']?.classes}>, </span>
								)}
							</Link>
						)
					})}
				</div>

			)}



		</div>




	);
};



export default ArchiveTitle;
