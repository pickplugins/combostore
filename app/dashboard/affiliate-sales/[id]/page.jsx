"use client";

import React, { use } from "react";
import AffiliateSaleEdit from "../../../../components/pages/AffiliateSaleEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return <AffiliateSaleEdit id={id} />;
};

export default page;
