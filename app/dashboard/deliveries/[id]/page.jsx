"use client";

import React, { use } from "react";
import DeliveryEdit from "../../../../components/pages/DeliveryEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<DeliveryEdit id={id} />
	);
};

export default page;
