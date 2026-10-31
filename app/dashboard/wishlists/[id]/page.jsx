"use client";

import React, { use } from "react";
import WishlistEdit from "../../../../components/pages/WishlistEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return (
		<WishlistEdit id={id} />
	);
};

export default page;
