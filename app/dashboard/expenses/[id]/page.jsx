"use client";

import React, { use } from "react";
import ExpenseEdit from "../../../../components/pages/ExpenseEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<ExpenseEdit id={id} />
	);
};

export default page;
