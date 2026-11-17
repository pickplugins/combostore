"use client";

import React, { use } from "react";
import AffiliateEdit from "../../../../components/pages/AffiliateEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<AffiliateEdit id={id} />
	);
};

export default page;
