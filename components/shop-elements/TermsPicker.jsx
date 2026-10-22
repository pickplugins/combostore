"use client";
import { useState, useEffect, useContext } from "react";

import { IconSettings, IconCheckbox, IconSquare, IconFidgetSpinner, IconTrash, IconStarFilled, IconStar } from "@tabler/icons-react";
import { useCounterStore } from '../../store/useCounterStore'


const TermsPicker = (props) => {



	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
	const { token, appData, notifications, addNotification, cartItems, addCartItems, removeCartItems, resetCartItems, updateCartItems, userDataX, setUserDataX } = useCounterStore()


	var selected = props.selected
	var onPick = props.onPick
	var taxonomy = props.taxonomy

	const [isOpen, setIsOpen] = useState(false);
	var [categories, setcategories] = useState([]);
	var [loading, setloading] = useState(false);
	var [queryPrams, setqueryPrams] = useState(props.taxonomy ? { taxonomy: props.taxonomy, hierarchical: true, per_page: 99 } : props.queryPrams ?? props?.queryPrams);




	useEffect(() => {



		var postData = JSON.stringify(queryPrams);
		setloading(true);
		fetch(
			serverUrl + "wp-json/combo-store/v2/get_terms",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authorization: `Bearer ${token}`,
				},
				body: postData,
			}
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Token validation failed");
				}

				if (response.ok && response.status < 400) {
					response.json().then((res) => {




						var errors = res?.errors;
						var success = res?.success;
						var terms = res?.terms;

						console.log('terms', terms)

						setcategories(terms);
					});
				}
			})
			.catch((_error) => {
				//this.saveAsStatus = 'error';
				// handle the error
			});

	}, []);


	function TermsTree({ child, selected, onPick }) {



		return (
			<ul className="ml-4">
				{Object.entries(child)?.map(args => {
					var index = args[0]
					var item = args[1]

					// const exists = selected?.some(term => term.term_id === item.term_id);

					const exists = selected?.some(term => term.term_id === item.term_id);
					// const exists = selected?.includes(item.term_id);  // true

					return (
						<li className=" " key={item.name}>
							<div className="flex gap-2 items-center py-1 hover:bg-gray-300 cursor-pointer px-2 rounded-sm text-gray-400" onClick={ev => {
								onPick(item)
							}}>
								{exists && (
									<IconCheckbox />
								)}
								{!exists && (
									<IconSquare />
								)}
								<span dangerouslySetInnerHTML={{ __html: item.name }}></span>

							</div>


							{item?.children?.length > 0 && (
								<TermsTree child={item?.children} selected={selected} onPick={onPick} />
							)}

						</li>
					)
				})}
			</ul>
		)

	}


	return (
		<div className="">


			<ul>
				{Object.entries(categories)?.map(args => {

					var index = args[0]
					var item = args[1]

					const exists = selected?.some(term => term.term_id === item.term_id);
					// const exists = selected?.includes(item.term_id);  // true
					// const exists = categories.some(loopItem => loopItem.term_id === itemX.term_id);

					return (
						<li className=" " key={item.name}>
							<div className="flex gap-2 items-center py-1 hover:bg-gray-300 cursor-pointer px-2 rounded-sm text-gray-400" onClick={ev => {
								onPick(item)
							}}>

								{exists && (
									<IconCheckbox />
								)}
								{!exists && (
									<IconSquare />
								)}
								<span dangerouslySetInnerHTML={{ __html: item.name }}></span>

							</div>


							{item?.children && (
								<>

									<TermsTree child={item.children} selected={selected} onPick={onPick} />
								</>
							)}

						</li>
					)
				})}
			</ul>

		</div>
	);
};

export default TermsPicker;
