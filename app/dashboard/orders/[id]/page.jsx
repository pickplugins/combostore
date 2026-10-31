"use client";

import React, { use } from "react";
import OrderEdit from "../../../../components/pages/OrderEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<OrderEdit id={id} />
	);
};

export default page;
