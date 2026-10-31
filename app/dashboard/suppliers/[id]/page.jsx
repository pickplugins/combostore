"use client";

import React, { use } from "react";
import SupplierEdit from "../../../../components/pages/SupplierEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<SupplierEdit id={id} />
	);
};

export default page;
