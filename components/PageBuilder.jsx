import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { IconLibraryPhoto, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar, IconX } from "@tabler/icons-react";


const PageBuilder = (props) => {




	var onTriggerOpen = props?.onTriggerOpen;

	var title = props.title;
	var prams = props.prams;

	const [loading, setloading] = useState(false);



	function fetchPosts() {




		var postData = JSON.stringify({});
		setloading(true);

		fetch(serverUrl + "wp-json/combo-store/v2/get_expenses", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: postData,
		})
			.then((response) => {

				if (!response.ok) {
					throw new Error('Token validation failed');
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {





						setloading(false);



					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}


	useEffect(() => {

		fetchPosts();
	}, []);


	return (
		<div className="fixed top-0 left-0 w-full h-full bg-white">

			<div>
				<div className="w-[300px] h-full">Hello 1</div>
				<div className="w-full">Hello 1</div>
				<div className="w-400px">Hello 1</div>
			</div>

		</div>
	);
};



export default PageBuilder;
