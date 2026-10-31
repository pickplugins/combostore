"use client";

import React, { use } from "react";
import SellerEdit from "../../../../components/pages/SellerEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<SellerEdit id={id} />
	);
};

export default page;
