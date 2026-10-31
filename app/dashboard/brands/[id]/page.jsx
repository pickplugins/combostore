"use client";

import React, { use } from "react";
import BrandEdit from "../../../../components/pages/BrandEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<BrandEdit id={id} />
	);
};

export default page;
