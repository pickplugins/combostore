"use client";

import React, { use } from "react";
import ThemeEdit from "../../../../components/pages/ThemeEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<ThemeEdit id={id} />
	);
};

export default page;
