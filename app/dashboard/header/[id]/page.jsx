"use client";

import React, { use } from "react";
import HeaderEdit from "../../../../components/pages/HeaderEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<HeaderEdit id={id} />
	);
};

export default page;
