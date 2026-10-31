"use client";

import React, { use } from "react";
import PurchaseEdit from "../../../../components/pages/PurchaseEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<PurchaseEdit id={id} />
	);
};

export default page;
