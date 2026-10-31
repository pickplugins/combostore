"use client";

import React, { use } from "react";
import CategoryEdit from "../../../../components/pages/CategoryEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<CategoryEdit id={id} />
	);
};

export default page;
