import React from "react";
import PostGridPaginationOptions from "./PostGridPaginationOptions";

/*
	Settings panel for the `termsGridPagination` block: the post grid
	pagination's panel (style, Previous / Next labels and icons, selectors)
	with this block's own selector defaults. It had only the style editor.
*/
const TermsGridPaginationOptions = (props) => <PostGridPaginationOptions {...props} type="termsGridPagination" />;

export default TermsGridPaginationOptions;
