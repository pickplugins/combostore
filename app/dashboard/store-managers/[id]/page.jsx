"use client";

import React, { use } from "react";
import StoreManagerEdit from "../../../../components/pages/StoreManagerEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<StoreManagerEdit id={id} />
	);
};

export default page;
