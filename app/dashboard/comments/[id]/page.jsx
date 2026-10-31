"use client";

import React, { use } from "react";
import CommentEdit from "../../../../components/pages/CommentEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<CommentEdit id={id} />
	);
};

export default page;
