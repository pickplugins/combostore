"use client";

import React, { use } from "react";
import AffiliatePayoutEdit from "../../../../components/pages/AffiliatePayoutEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return <AffiliatePayoutEdit id={id} />;
};

export default page;
