"use client";

import React, { use } from "react";
import CustomerEdit from "../../../../components/pages/CustomerEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<CustomerEdit id={id} />
	);
};

export default page;
