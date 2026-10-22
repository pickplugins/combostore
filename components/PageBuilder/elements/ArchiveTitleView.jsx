"use client"
import React from "react";
import { useState, useEffect } from "react";

import { useParams, usePathname } from "next/navigation";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const ArchiveTitle = (props) => {

	const params = useParams();
	const pathname = usePathname();


	const slug = (Array.isArray(params.slug) && params.slug.length > 0) ? params.slug?.[params.slug.length - 1] : params.slug;
	const type = pathname.split("/")[1];

	const [archiveData, setarchiveData] = useState({});



	// const lastParam = (Array.isArray(slug) && slug.length > 1) ? slug?.[slug.length - 1] : slug;


	var index = props?.index
	var cssSelectors = props?.cssSelectors


	var id = props?.id;
	var typeX = props?.type;

	var options = props?.options;
	var tag = options?.tag ?? 'h1';
	var prefix = options?.prefix;

	prefix = update_prefix(prefix);

	const Tag = tag;




	function fetchTermData() {

		var taxonomy = '';


		if (type == 'tags') {
			taxonomy = 'product_tag';
		}
		if (type == 'categories') {
			taxonomy = 'product_cat';
		}
		if (type == 'brands') {
			taxonomy = 'product_brand';
		}




		var postData = JSON.stringify({ slug: slug, taxonomy: taxonomy, parent: true });


		fetch(serverUrl + "wp-json/combo-store/v2/get_term", {
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



						var term = res?.term;


						setarchiveData(term);






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
	}, [slug]);

	function update_prefix(prefix) {



		const replacements = {
			term_slug: archiveData?.slug ?? '',
			term_name: archiveData?.name ?? "",
			term_count: archiveData?.count ?? 0,
		};


		const result = prefix.replace(
			/%(\w+)%/g,
			(_, key) => replacements[key] ?? `%${key}%`
		);

		return result;

	}







	return (




		<Tag id={id} type={typeX} className={`${cssSelectors['*']?.classes}  `}

			dangerouslySetInnerHTML={{ __html: prefix }}		>



		</Tag>




	);
};



export default ArchiveTitle;
