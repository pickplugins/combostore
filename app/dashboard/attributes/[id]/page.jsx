"use client";

import React, { use } from "react";
import AttributeEdit from "../../../../components/pages/AttributeEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<AttributeEdit id={id} />
	);
};

export default page;
