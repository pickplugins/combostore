"use client";
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";

import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";


const Button = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

	var draggingBlock = props?.draggingBlock
	var setDraggingBlock = props?.setDraggingBlock

	var dragOverIndex = props?.dragOverIndex
	var setDragOverIndex = props?.setDragOverIndex

	var setSelectedId = props?.setSelectedId
	var selectedId = props?.selectedId
	var index = props?.index
	var cssSelectors = props?.cssSelectors ?? {};


	var id = props?.id;
	var type = props?.type;
	var onChangeInput = props?.onChangeInput;

	var options = props?.options;
	var value = options?.value;
	var label = options?.label;
	var multiple = options?.multiple ?? false;
	var pramsQuery = options?.pramsQuery;




	var [prams, setprams] = useState(options?.prams ?? []);



	function fetchTerms() {


		var postData = JSON.stringify(pramsQuery);

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


						var terms = res?.terms;
						var total = res?.total;
						var max_pages = res?.max_pages;

						console.log(terms);

						if (!terms) return;

						var termsX = [];

						Object.entries(terms).map(args => {
							var index = args[0]
							var item = args[1]
							termsX.push({ label: item.name, value: item.term_id })
						})

						console.log(termsX);

						setprams(termsX)


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

		console.log(pramsQuery);

		fetchTerms();


	}, [pramsQuery]);





	return (




		<div draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}

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

			<label htmlFor="" className={`${cssSelectors['label']?.classes}  `}>{label}</label>

			<select name="" id="" className={`${cssSelectors['select']?.classes}  `}
				multiple={multiple}

				onChange={ev => {

					var value = ev.target.value;

					onChangeInput(value)

				}}
			>

				{prams?.map(option => {


					return (

						<option value={option.value}>{option.label}</option>

					)

				})}
			</select>



		</div>





	);
};



export default Button;
