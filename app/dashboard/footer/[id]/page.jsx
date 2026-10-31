"use client";

import React, { use } from "react";
import FooterEdit from "../../../../components/pages/FooterEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<FooterEdit id={id} />
	);
};

export default page;
