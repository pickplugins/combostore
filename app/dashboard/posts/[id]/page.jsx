"use client";

import React, { use } from "react";
import PostEdit from "../../../../components/pages/PostEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<PostEdit id={id} />
	);
};

export default page;
