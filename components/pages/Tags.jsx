"use client";

import TermsListPage from "../TermsListPage";
import TagEdit from "./TagEdit";
import { IconHash } from "@tabler/icons-react";

/* List UI and behaviour live in components/TermsListPage.jsx. */
const Tags = () => (
	<TermsListPage
		taxonomy="product_tag"
		title="Tags"
		singular="tag"
		EditComponent={TagEdit}
		dashboardPath="/dashboard/tags"
		storePath="/tags"
		Icon={IconHash}
		namePlaceholder="New Arrival"
	/>
);

export default Tags;
