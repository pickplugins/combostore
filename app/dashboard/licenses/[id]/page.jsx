"use client";

import React, { use } from "react";
import LicenseEdit from "../../../../components/pages/LicenseEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<LicenseEdit id={id} />
	);
};

export default page;
