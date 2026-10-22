"use client"
import BlockRender from '../BlockRender';
import { useState, useEffect } from "react";

const SiteHeader = (props) => {

	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



	var cssSelectors = props?.cssSelectors;


	var type = props?.type
	var id = props?.id;

	var index = props?.index

	var options = props?.options;
	var templteId = options?.id;

	var [children, setchildren] = useState(props?.children);


	function get_template_part() {




		var postData = {
			id: templteId,
		};
		postData = JSON.stringify(postData);
		fetch(serverUrl + "wp-json/combo-store/v2/get_template_part", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",

			},
			body: postData,
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {


						var content = res?.content;
						const pageTemplatecontent = content ? JSON.parse(content) : [];


						setchildren(pageTemplatecontent)

						//setselectedRows([]);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});
	}


	useEffect(() => {

		if (templteId) {
			get_template_part();
		}

	}, []);






	return (
		<div
			id={id}
			type={type}
			className={` ${cssSelectors['*']?.classes}  `}

		>
			{
				children.map((child, idx) => (
					<BlockRender
						key={child.id}
						index={`${index}-${idx}`}
						block={child}

					/>
				))
			}










		</div>
	);
};

export default SiteHeader;
