import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";
const appUrl = process.env.NEXT_PUBLIC_STORE_URL;
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const AccordionMenu = (props) => {


	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index


	var id = props?.id;

	var options = props?.options;
	var cssSelectors = props?.cssSelectors ?? {};
	var icon = options?.icon;
	var iconSize = options?.iconSize;
	var hierarchical = options?.hierarchical;
	var root = options?.root;
	var queryPrams = options?.queryPrams;

	const IconX = TablerIcons[icon];

	var [terms, setterms] = useState(options?.items ?? []);


	useEffect(() => {

		get_tax_terms()

	}, [queryPrams]);

	function get_tax_terms() {





		var postData = JSON.stringify(queryPrams);



		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
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


						var termsX = res?.terms ?? []

						console.log(termsX);



						setterms(termsX)

						// var taxs = {}

						// res.map(item => {


						//   taxs[item.id] = { label: item.label, value: item.id }
						// })


						//settaxonomies(res)



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	return (
		<div draggable id={id} className={`${cssSelectors['*']?.classes ?? ''} cursor-pointer ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}
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


			{terms?.map((category) => (
				<AccordionItem key={category.slug} hierarchical={hierarchical} root={root} item={category} />
			))}


		</div>
	);
};

const AccordionItem = ({ item, root, hierarchical }) => {
	const [open, setOpen] = useState(false);
	const hasChildren = item.children && item.children?.length > 0;

	var link = hierarchical ? `${root}/${item?.slug}/` : `${item?.slug}/`;



	return (
		<div className="">


			<div
				onClick={() => hasChildren && setOpen(!open)}
				className="bg-gray-400 flex justify-between text-gray-800 mb-2 rounded-sm cursor-pointer px-4 py-2 items-center gap-2"
			>

				<Link className="font-medium" href={`${appUrl}${link}`} onClick={() => {
					ev.preventDefault();
					ev.stopPropagation();
				}}>
					<span dangerouslySetInnerHTML={{ __html: item.name }} />
					{item.count > 0 && (
						<span dangerouslySetInnerHTML={{ __html: ` (${item.count})` }} />
					)}

				</Link>
				{hasChildren && (open ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />)}
			</div>

			{/* Children */}
			{open && hasChildren && (
				<div key={item?.slug} className="pl-2 border-l-2 border-gray-500">
					{item?.children?.map((child, index) => (

						<>



							<AccordionItem key={index} hierarchical={hierarchical} root={hierarchical ? `${root}${item?.slug}/` : `${item?.slug}/`} item={child} />
						</>
					))}
				</div>
			)}
		</div>
	);
};


export default AccordionMenu;
