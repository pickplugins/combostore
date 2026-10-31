"use client";

import React, { use } from "react";
import IncompleteEdit from "../../../../components/pages/IncompleteEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<IncompleteEdit id={id} />
	);
};

export default page;
