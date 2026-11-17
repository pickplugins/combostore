"use client";

import React, { use } from "react";
import SupportAgentEdit from "../../../../components/pages/SupportAgentEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<SupportAgentEdit id={id} />
	);
};

export default page;
