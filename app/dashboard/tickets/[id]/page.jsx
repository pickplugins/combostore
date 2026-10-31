"use client";

import React, { use } from "react";
import TicketEdit from "../../../../components/pages/TicketEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<TicketEdit id={id} />
	);
};

export default page;
