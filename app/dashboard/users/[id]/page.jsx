"use client";

import React, { use } from "react";
import UserEdit from "../../../../components/pages/UserEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<UserEdit id={id} />
	);
};

export default page;
