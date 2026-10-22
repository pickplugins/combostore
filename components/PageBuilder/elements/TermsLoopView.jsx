"use client"
import { useState, useEffect } from "react";
import BlockRender from '../BlockRender';
import { CategoryProvider } from "../context/CategoryContext";
import { useTermsSlider } from "../context/TermsSliderContext";
import { useTermsGrid } from "../context/TermsGridContext";

const TermsLoopView = (props) => {

	const termsSliderAttr = useTermsSlider();
	const termsGridAttr = useTermsGrid();
	// var queryPrams = termsSliderAttr?.queryPrams
	var cssSelectors = termsSliderAttr?.cssSelectors ? termsSliderAttr?.cssSelectors : termsGridAttr?.cssSelectors

	var queryPramsX = termsGridAttr?.queryPrams ? termsGridAttr?.queryPrams : termsSliderAttr?.queryPrams


	var [queryPrams, setqueryPrams] = useState(queryPramsX);




	const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;



	var type = props?.type
	var children = props?.children;
	var options = props?.options;
	var items = options?.items ?? [];
	var id = props?.id;

	var index = props?.index






	var [terms, setterms] = useState([]);


	function fetchPosts() {



		var postData = JSON.stringify(queryPrams);



		fetch(serverUrl + "wp-json/combo-store/v2/get_terms", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',

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



						var termsX = [];

						if (terms) {

							Object.entries(terms).map(args => {
								var index = args[0]
								var item = args[1]
								termsX.push(item)
							})
						}





						setterms(termsX)


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
		fetchPosts();
	}, []);


	useEffect(() => {


		setqueryPrams(termsGridAttr?.queryPrams)

	}, [termsGridAttr?.queryPrams]);


	useEffect(() => {


		fetchPosts();

	}, [queryPrams]);


	return (
		<>
			{termsSliderAttr != null && (

				<>


					{terms?.map((item, index) => {


						return (
							<SplideSlide key={index}>
								<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>

									<CategoryProvider value={item}>


										{children != undefined && children.map((child, indexZ) => {


											return (

												<BlockRender index={`${index}${indexZ}`} {...item} key={child.id} block={child} />

											)

										})}
									</CategoryProvider>



								</div>
							</SplideSlide>
						)
					})}

				</>

			)}




			{termsGridAttr != null && (

				<>

					<div
						id={id}
						type={type}
						className={` ${cssSelectors['loop-items']?.classes}   `}

					>





						{terms?.map((item, index) => {


							return (<div className={`${cssSelectors['loop-item']?.classes} `} key={index}>



								<CategoryProvider value={{ ...item, taxonomy: item.taxonomy }}>


									{children != undefined && children.map((child, indexZ) => {


										return (

											<BlockRender index={`${index}${indexZ}`} {...item} key={child.id} block={child} />

										)

									})}
								</CategoryProvider>



							</div>)
						})}







					</div>
				</>

			)}


		</>
	);
};

export default TermsLoopView;
