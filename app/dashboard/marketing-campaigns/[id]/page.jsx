"use client";

import React, { use } from "react";
import MarketingCampaignEdit from "../../../../components/pages/MarketingCampaignEdit";

const page = ({ params }) => {
	const { id } = use(params);

	return <MarketingCampaignEdit id={id} />;
};

export default page;
