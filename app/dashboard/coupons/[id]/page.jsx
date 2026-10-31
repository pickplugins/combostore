"use client";

import React, { use } from "react";
import CouponEdit from "../../../../components/pages/CouponEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<CouponEdit id={id} />
	);
};

export default page;
