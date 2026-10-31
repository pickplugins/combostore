"use client";

import React, { use } from "react";
import RefundEdit from "../../../../components/pages/RefundEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<RefundEdit id={id} />
	);
};

export default page;
