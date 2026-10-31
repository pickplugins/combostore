"use client";

import React, { use } from "react";
import SubscriptionEdit from "../../../../components/pages/SubscriptionEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<SubscriptionEdit id={id} />
	);
};

export default page;
