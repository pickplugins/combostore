"use client";

import React, { use } from "react";
import RiderEdit from "../../../../components/pages/RiderEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<RiderEdit id={id} />
	);
};

export default page;
