"use client";

import React, { use } from "react";
import ReviewEdit from "../../../../components/pages/ReviewEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<ReviewEdit id={id} />
	);
};

export default page;
