

import ProductGrid from "./ProductGrid";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;




export default async function ProductGridServer(props) {



	var categories = props.categories;
	var column = props.column ? props.column : 6;
	var orderby = props.orderby;
	var per_page = props.per_page;
	var tag = props.tag;

	var queryPrams = { categories: categories, orderby: orderby, tag: tag, keyword: "", paged: 1, order: "DESC", per_page: per_page, price: "" };



	var postData = JSON.stringify(queryPrams);





	const res = await fetch(`${serverUrl}wp-json/combo-store/v2/get_products`, {
		method: "POST",
		cache: "no-store", // disables caching

		headers: {
			'Content-Type': 'application/json',
		},
		body: postData,
		next: { revalidate: 3600 }, // cache for 1 hour
	});


	const data = await res.json();


	return (
		<ProductGrid column={column} entries={data} />
	);
}
