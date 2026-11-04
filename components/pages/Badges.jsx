"use client";

import TermsListPage from "../TermsListPage";
import BadgeEdit from "./BadgeEdit";
import { IconRosette } from "@tabler/icons-react";

/* List UI and behaviour live in components/TermsListPage.jsx. */
const Badges = () => (
	<TermsListPage
		taxonomy="product_badge"
		title="Badges"
		singular="badge"
		EditComponent={BadgeEdit}
		dashboardPath="/dashboard/badges"
		Icon={IconRosette}
		namePlaceholder="Best Seller"
	/>
);

export default Badges;
