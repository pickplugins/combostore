import PropTypes from "prop-types";
import React from "react";
import * as TablerIcons from '@tabler/icons-react';
import Link from "next/link";


const Button = (props) => {


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
	var iconSize = options?.iconSize ?? 20;
	var target = options?.target;
	var scheme = options?.scheme;
	var url = options?.url;

	var phone = options?.phone;
	var email = options?.email;
	var location = options?.location;



	const IconPhone = TablerIcons[phone?.icon];
	const IconEmail = TablerIcons[email?.icon];
	const IconLocation = TablerIcons[location?.icon];



	return (
		<>

			<ul draggable id={id} type={type} className={`${cssSelectors['*']?.classes ?? ''} hover:outline-orange-200 hover:outline-solid hover:outline-1 ${dragOverIndex != null && dragOverIndex == index ? 'border-b-5 border-solid border-orange-200' : ''} ${selectedId == id ? 'outline-1 outline-solid outline-orange-400' : ''} `}



				onClick={e => {
					e.stopPropagation();


					setSelectedId(selectedId != id ? id : null);
				}}
				onDragStart={e => {
					e.stopPropagation(); e.dataTransfer.setData("canvasBlock", id); setDraggingBlock(id);
				}}
				onDragEnd={() => { setDraggingBlock(null); setDragOverIndex(null); }}

				onDragOver={e => { e.preventDefault(); setDragOverIndex(index); }}
				onDragLeave={() => setDragOverIndex(null)}>

				{phone && (
					<li className={`${cssSelectors['item']?.classes}`}>
						<Link href={`tel:${phone.value}`} className={`${cssSelectors['link']?.classes} ${cssSelectors['phone-link']?.classes}`}>

							<div className={`${cssSelectors['icon']?.classes}`}>
								{IconPhone ? <IconPhone size={iconSize} /> : null}
							</div>


							{phone.value}




						</Link>

					</li>
				)}
				{email && (
					<li className={`${cssSelectors['item']?.classes}`}>
						<Link href={`mailto:${email.value}`} className={`${cssSelectors['link']?.classes} ${cssSelectors['email-link']?.classes}`}>
							<div className={`${cssSelectors['icon']?.classes}`}>
								{IconEmail ? <IconEmail size={iconSize} /> : null}
							</div>
							{email.value}
						</Link>

					</li>
				)}
				{location && (
					<li className={`${cssSelectors['item']?.classes}`}>
						<div className={`${cssSelectors['icon']?.classes}`}>
							{IconLocation ? <IconLocation size={iconSize} /> : null}
						</div>
						{location.value}
					</li>
				)}

			</ul>










		</>
	);
};



export default Button;
