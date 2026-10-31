"use client";

import React, { use } from "react";
import ProductEdit from "../../../../components/pages/ProductEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<ProductEdit id={id} />
	);
};

export default page;
