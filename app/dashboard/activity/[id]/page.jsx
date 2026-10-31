"use client";

import React, { use } from "react";
import ActivityEdit from "../../../../components/pages/ActivityEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<ActivityEdit id={id} />
	);
};

export default page;
