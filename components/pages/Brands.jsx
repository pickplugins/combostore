"use client";

import TermsListPage from "../TermsListPage";
import BrandEdit from "./BrandEdit";
import { IconBuildingStore } from "@tabler/icons-react";

/* List UI and behaviour live in components/TermsListPage.jsx. */
const Brands = () => (
	<TermsListPage
		taxonomy="product_brand"
		title="Brands"
		singular="brand"
		EditComponent={BrandEdit}
		dashboardPath="/dashboard/brands"
		storePath="/brands"
		Icon={IconBuildingStore}
		namePlaceholder="Pampers"
	/>
);

export default Brands;
