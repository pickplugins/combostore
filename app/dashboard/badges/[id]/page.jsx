"use client";

import React, { use } from "react";
import BadgeEdit from "../../../../components/pages/BadgeEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<BadgeEdit id={id} />
	);
};

export default page;
