"use client";

import React, { use } from "react";
import TagEdit from "../../../../components/pages/TagEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<TagEdit id={id} />
	);
};

export default page;
