"use client";

import TermsListPage from "../TermsListPage";
import CategoryEdit from "./CategoryEdit";
import { IconCategory } from "@tabler/icons-react";

/* List UI and behaviour live in components/TermsListPage.jsx. */
const Categories = () => (
	<TermsListPage
		taxonomy="product_cat"
		title="Categories"
		singular="category"
		EditComponent={CategoryEdit}
		dashboardPath="/dashboard/categories"
		storePath="/categories"
		Icon={IconCategory}
		namePlaceholder="Baby Diapers"
		hierarchical
	/>
);

export default Categories;
